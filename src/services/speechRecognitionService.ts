import { Capacitor } from '@capacitor/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

export interface SpeechRecognitionResult {
  matches: string[];
  bestTranscript: string;
}

export class SpeechService {
  private activeWebRecognition: any = null;

  public async startListening(
    onResult: (res: SpeechRecognitionResult) => void,
    onError: (error: string) => void,
    onEnd: () => void
  ): Promise<void> {
    // 1. Native Android via Capacitor Plugin
    if (Capacitor.isNativePlatform()) {
      try {
        const { available } = await SpeechRecognition.available();
        if (!available) {
          onError('El reconocimiento de voz no está disponible en este dispositivo.');
          onEnd();
          return;
        }

        const permStatus = await SpeechRecognition.requestPermissions();
        if (permStatus.speechRecognition !== 'granted') {
          onError('Permiso de micrófono no concedido.');
          onEnd();
          return;
        }

        const res = await SpeechRecognition.start({
          language: 'ja-JP',
          maxResults: 5,
          prompt: 'Habla en japonés...',
          popup: false,
          partialResults: false
        });

        const matches = res?.matches || [];
        if (matches.length > 0) {
          onResult({
            matches,
            bestTranscript: matches[0] || ''
          });
        } else {
          onError('No se detectó ninguna palabra.');
        }
        onEnd();
        return;
      } catch (err: any) {
        console.warn('Native speech recognition error:', err);
        onError('Error al capturar voz. Intenta hablar más claro cerca del micrófono.');
        onEnd();
        return;
      }
    }

    // 2. Web browser fallback (Chrome, Edge, Safari)
    const SpeechRecognitionApi =
      (window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;

    if (!SpeechRecognitionApi) {
      onError('Tu navegador no soporta reconocimiento de voz (usa Chrome o la app de Android).');
      onEnd();
      return;
    }

    try {
      const recognition = new (SpeechRecognitionApi as any)();
      this.activeWebRecognition = recognition;
      recognition.lang = 'ja-JP';
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;

      recognition.onresult = (event: any) => {
        const alts = Array.from(event.results[0] || []) as { transcript: string }[];
        const matches = alts.map(a => a.transcript);
        onResult({
          matches,
          bestTranscript: matches[0] || ''
        });
      };

      recognition.onerror = () => {
        onError('No se detectó voz o se denegó el micrófono.');
      };

      recognition.onend = () => {
        this.activeWebRecognition = null;
        onEnd();
      };

      recognition.start();
    } catch {
      onError('No se pudo iniciar el micrófono.');
      onEnd();
    }
  }

  public async stopListening(): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      try {
        await SpeechRecognition.stop();
      } catch (_) {}
    } else if (this.activeWebRecognition) {
      try {
        this.activeWebRecognition.stop();
      } catch (_) {}
      this.activeWebRecognition = null;
    }
  }
}

export const speechService = new SpeechService();

