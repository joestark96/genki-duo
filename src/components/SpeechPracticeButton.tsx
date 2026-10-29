import React, { useState } from 'react';
import { Mic, MicOff, CheckCircle2, RefreshCw } from 'lucide-react';
import { sound } from '../services/sound';

interface SpeechPracticeButtonProps {
  targetJapanese: string;
  targetFurigana?: string;
  compact?: boolean;
}

function normalizeJp(str: string): string {
  return str
    .replace(/[。、！？!?\s「」『』（）()・〜~ー-]/g, '')
    .trim()
    .toLowerCase();
}

function computeSimilarity(spoken: string, target1: string, target2?: string): number {
  const s = normalizeJp(spoken);
  const t1 = normalizeJp(target1);
  const t2 = target2 ? normalizeJp(target2) : '';

  if (!s) return 0;
  if (s === t1 || (t2 && s === t2)) return 100;
  if (t1.includes(s) || s.includes(t1) || (t2 && (t2.includes(s) || s.includes(t2)))) {
    return 88;
  }

  const scoreAgainst = (target: string) => {
    if (!target) return 0;
    const chars = Array.from(target);
    let matched = 0;
    chars.forEach(ch => {
      if (s.includes(ch)) matched++;
    });
    return Math.round((matched / chars.length) * 100);
  };

  return Math.max(scoreAgainst(t1), scoreAgainst(t2));
}

export const SpeechPracticeButton: React.FC<SpeechPracticeButtonProps> = ({
  targetJapanese,
  targetFurigana,
  compact = false
}) => {
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState<{ transcript: string; score: number; error?: string } | null>(null);

  const handleStartListening = (e: React.MouseEvent) => {
    e.stopPropagation();

    const SpeechRecognitionApi =
      (window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;

    if (!SpeechRecognitionApi) {
      setResult({
        transcript: '',
        score: 0,
        error: 'Tu navegador no soporta reconocimiento de voz (usa Chrome, Edge o Safari).'
      });
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recognition = new (SpeechRecognitionApi as any)();
      recognition.lang = 'ja-JP';
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      setListening(true);
      setResult(null);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        const alternatives = Array.from(event.results[0] || []) as { transcript: string }[];
        let bestTranscript = alternatives[0]?.transcript || '';
        let bestScore = 0;

        alternatives.forEach(alt => {
          const sc = computeSimilarity(alt.transcript, targetJapanese, targetFurigana);
          if (sc >= bestScore) {
            bestScore = sc;
            bestTranscript = alt.transcript;
          }
        });

        setListening(false);
        setResult({ transcript: bestTranscript, score: bestScore });

        if (bestScore >= 60) {
          sound.playCorrect();
        } else {
          sound.playTap();
        }
      };

      recognition.onerror = () => {
        setListening(false);
        setResult({
          transcript: '',
          score: 0,
          error: 'No se detectó voz. Revisa el permiso del micrófono e intenta de nuevo.'
        });
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.start();
    } catch {
      setListening(false);
      setResult({
        transcript: '',
        score: 0,
        error: 'No se pudo iniciar el micrófono.'
      });
    }
  };

  return (
    <div className="inline-flex flex-col items-end gap-1" onClick={e => e.stopPropagation()}>
      <button
        type="button"
        onClick={handleStartListening}
        className={`${
          compact ? 'px-2 py-1 text-[10px]' : 'px-2.5 py-1.5 text-[11px]'
        } rounded-xl font-black flex items-center gap-1 transition-all cursor-pointer border ${
          listening
            ? 'bg-red-500 text-white border-red-600 animate-pulse shadow-sm'
            : 'bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-800 text-purple-600 dark:text-purple-300 hover:bg-purple-500 hover:text-white'
        }`}
        title="Practicar pronunciación con micrófono"
      >
        {listening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
        <span>{listening ? 'Escuchando...' : compact ? 'Hablar' : 'Pronunciar'}</span>
      </button>

      {result && (
        <div
          className={`px-2.5 py-1 rounded-xl text-[10px] font-bold border flex items-center gap-1.5 max-w-[230px] animate-fade-in ${
            result.error
              ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 text-amber-700 dark:text-amber-300'
              : result.score >= 60
              ? 'bg-duo-green-light/60 dark:bg-duo-green/20 border-duo-green text-duo-green-dark dark:text-duo-green'
              : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-700 dark:text-rose-300'
          }`}
        >
          {result.error ? (
            <span>{result.error}</span>
          ) : (
            <>
              {result.score >= 60 ? (
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              ) : (
                <RefreshCw className="w-3.5 h-3.5 flex-shrink-0" />
              )}
              <span className="truncate">
                「{result.transcript}」 ({result.score}%)
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

