import React, { useState } from 'react';
import { Mic, MicOff, CheckCircle2, RefreshCw } from 'lucide-react';
import { sound } from '../services/sound';
import { speechService } from '../services/speechRecognitionService';
import { computeJapaneseSpeechMatch } from '../utils/japaneseSpeechMatcher';

interface SpeechPracticeButtonProps {
  targetJapanese: string;
  targetFurigana?: string;
  compact?: boolean;
}

function computeSimilarity(spoken: string, ...targets: (string | undefined)[]): number {
  return computeJapaneseSpeechMatch(spoken, targets);
}

export const SpeechPracticeButton: React.FC<SpeechPracticeButtonProps> = ({
  targetJapanese,
  targetFurigana,
  compact = false
}) => {
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState<{ transcript: string; score: number; error?: string } | null>(null);

  const handleStartListening = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (listening) {
      await speechService.stopListening();
      setListening(false);
      return;
    }

    setListening(true);
    setResult(null);

    await speechService.startListening(
      (res) => {
        let bestTranscript = res.bestTranscript;
        let bestScore = 0;

        res.matches.forEach(m => {
          const sc = computeSimilarity(m, targetJapanese, targetFurigana);
          if (sc >= bestScore) {
            bestScore = sc;
            bestTranscript = m;
          }
        });

        setResult({ transcript: bestTranscript, score: bestScore });
        if (bestScore >= 60) {
          sound.playCorrect();
        } else {
          sound.playTap();
        }
      },
      (errorMsg) => {
        setResult({
          transcript: '',
          score: 0,
          error: errorMsg
        });
      },
      () => {
        setListening(false);
      }
    );
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

