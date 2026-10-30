import { Capacitor } from '@capacitor/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { sound } from './sound';

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
    // Stop any active audio playback so it doesn't feed into the microphone
    sound.stopSpeech();

    // 1. Native Android / iOS via Capacitor Plugin
    if (Capacitor.isNativePlatform()) {
      try {
        // Stop any lingering previous session
        try {
          const { listening } = await SpeechRecognition.isListening();
          if (listening) {
            await SpeechRecognition.stop();
          }
        } catch (_) {}

        // Safe permission checking
        let hasPermission = false;
        try {
          const perm = await SpeechRecognition.checkPermissions();
          hasPermission = perm.speechRecognition === 'granted';
        } catch (_) {}

        if (!hasPermission) {
          try {
            const req = await SpeechRecognition.requestPermissions();
            hasPermission = req.speechRecognition === 'granted';
          } catch (_) {}
        }

        if (!hasPermission) {
          onError('Permiso de micrófono no concedido. Habilítalo en los ajustes.');
          onEnd();
          return;
        }

        // Check availability
        let isAvailable = true;
        try {
          const check = await SpeechRecognition.available();
          isAvailable = !!check?.available;
        } catch (_) {}

        let res: { matches?: string[] } | null = null;

        if (isAvailable) {
          try {
            // Attempt in-app recognition first
            res = await SpeechRecognition.start({
              language: 'ja-JP',
              maxResults: 5,
              prompt: 'Habla en japonés...',
              popup: false,
              partialResults: false
            });
          } catch (inAppErr: any) {
            const msg = String(inAppErr?.message || inAppErr || '');
            if (msg.includes('No match') || msg.includes('No speech input')) {
              onError('No se detectó voz. Intenta de nuevo hablando claro.');
              onEnd();
              return;
            }

            console.warn('In-app recognition unavailable, launching Google Voice dialog fallback:', inAppErr);
            // Fallback to native Google Voice Popup dialog
            try {
              res = await SpeechRecognition.start({
                language: 'ja-JP',
                maxResults: 5,
                prompt: 'Habla en japonés...',
                popup: true,
                partialResults: false
              });
            } catch (popupErr: any) {
              console.error('All native speech recognition modes failed:', popupErr);
              onError('No se pudo activar el micrófono. Verifica que los Servicios de Google estén habilitados.');
              onEnd();
              return;
            }
          }
        } else {
          // Direct fallback to system Voice Dialog
          try {
            res = await SpeechRecognition.start({
              language: 'ja-JP',
              maxResults: 5,
              prompt: 'Habla en japonés...',
              popup: true,
              partialResults: false
            });
          } catch (popupErr: any) {
            console.error('Speech recognition not available:', popupErr);
            onError('El reconocimiento de voz no está disponible en este dispositivo.');
            onEnd();
            return;
          }
        }

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
        console.warn('Native speech recognition critical error:', err);
        onError('Error al inicializar micrófono.');
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
