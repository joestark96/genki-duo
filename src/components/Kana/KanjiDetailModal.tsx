import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Volume2, Sparkles, BookOpen, Layers, Info } from 'lucide-react';
import { KanjiItem } from '../../data/kanjiData';
import { StrokePracticeCanvas } from './StrokePracticeCanvas';
import { sound } from '../../services/sound';

interface KanjiDetailModalProps {
  kanji: KanjiItem | null;
  onClose: () => void;
  showRomaji?: boolean;
}

export const KanjiDetailModal: React.FC<KanjiDetailModalProps> = ({
  kanji,
  onClose,
  showRomaji = true
}) => {
  // Prevent background scrolling and handle Escape key when modal is open
  useEffect(() => {
    if (!kanji) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [kanji, onClose]);

  if (!kanji) return null;

  const handleSpeak = (text: string) => {
    sound.speakJapanese(text);
  };

  // JLPT badge color
  const getJlptBadgeColor = () => {
    switch (kanji.jlptLevel) {
      case 'N5':
        return 'bg-duo-green-light dark:bg-duo-green/20 text-duo-green-dark dark:text-green-300 border-duo-green';
      case 'N4':
        return 'bg-duo-blue-light dark:bg-duo-blue/20 text-duo-blue-dark dark:text-blue-300 border-duo-blue';
      case 'N3':
        return 'bg-duo-purple-light dark:bg-duo-purple/20 text-duo-purple-dark dark:text-purple-300 border-duo-purple';
      default:
        return 'bg-duo-orange-light dark:bg-duo-orange/20 text-duo-orange-dark dark:text-orange-300 border-duo-orange';
    }
  };

  const modalContent = (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 select-none animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#18272e] max-w-md w-full rounded-3xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transition-colors"
      >
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-duo-gray-200 dark:border-[#283842] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-duo-green animate-pulse" />
            <h3 className="text-base font-black text-gray-800 dark:text-gray-100">
              Detalle de Kanji
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Cerrar"
          >
            <X className="w-5 h-5 stroke-[2.5px]" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 space-y-4">
          {/* Main Hero Card: Kanji Glyph + Audio + Meaning */}
          <div className="flex flex-col items-center bg-gray-50 dark:bg-[#131f24] rounded-2xl p-4 border border-duo-gray-200 dark:border-[#283842]">
            <div className="relative group flex items-center justify-center">
              <span className="text-7xl font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-50 leading-none py-2">
                {kanji.kanji}
              </span>
              <button
                onClick={() => handleSpeak(kanji.kanji)}
                className="absolute -right-10 top-1/2 -translate-y-1/2 p-2.5 bg-duo-blue hover:bg-duo-blue-dark text-white rounded-xl shadow-duo-btn-sm active:translate-y-0.5 transition-all"
                title="Escuchar pronunciación"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-xl font-black text-gray-800 dark:text-gray-100 mt-2">
              {kanji.spanish}
            </h2>
            {kanji.english && (
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
                ({kanji.english})
              </span>
            )}

            {/* Badges metadata */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
              <span className={`px-2.5 py-0.5 rounded-lg text-[11px] font-black border ${getJlptBadgeColor()}`}>
                JLPT {kanji.jlptLevel}
              </span>
              {kanji.genkiLesson && (
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-black bg-duo-orange-light/50 dark:bg-duo-orange/20 text-duo-orange-dark dark:text-orange-300 border border-duo-orange/40">
                  Genki L{kanji.genkiLesson}
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-gray-200 dark:bg-[#283842] text-gray-700 dark:text-gray-300">
                {kanji.strokeCount} trazos
              </span>
              {kanji.radicals && (
                <span className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-gray-200 dark:bg-[#283842] text-gray-700 dark:text-gray-300">
                  Radical: {kanji.radicals}
                </span>
              )}
            </div>
          </div>

          {/* Readings Grid: Onyomi vs Kunyomi */}
          <div className="grid grid-cols-2 gap-3">
            {/* On'yomi */}
            <div className="bg-duo-blue-light/30 dark:bg-duo-blue/10 border-2 border-duo-blue/30 rounded-2xl p-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-duo-blue dark:text-blue-400 block mb-1">
                  音読み (On'yomi)
                </span>
                <span className="text-sm font-bold font-['Noto_Sans_JP'] text-gray-800 dark:text-gray-100">
                  {kanji.onyomi || '—'}
                </span>
              </div>
              {kanji.onyomi && (
                <button
                  onClick={() => handleSpeak(kanji.onyomi.split('、')[0])}
                  className="self-end mt-2 p-1.5 bg-duo-blue/20 hover:bg-duo-blue text-duo-blue hover:text-white rounded-lg transition-colors"
                  title="Escuchar On'yomi"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Kun'yomi */}
            <div className="bg-duo-green-light/30 dark:bg-duo-green/10 border-2 border-duo-green/30 rounded-2xl p-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-duo-green-dark dark:text-green-400 block mb-1">
                  訓読み (Kun'yomi)
                </span>
                <span className="text-sm font-bold font-['Noto_Sans_JP'] text-gray-800 dark:text-gray-100">
                  {kanji.kunyomi || '—'}
                </span>
              </div>
              {kanji.kunyomi && (
                <button
                  onClick={() => handleSpeak(kanji.kunyomi.split('、')[0].replace('・', ''))}
                  className="self-end mt-2 p-1.5 bg-duo-green/20 hover:bg-duo-green text-duo-green-dark hover:text-white rounded-lg transition-colors"
                  title="Escuchar Kun'yomi"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Stroke Practice Canvas */}
          <StrokePracticeCanvas
            character={kanji.kanji}
            expectedStrokes={kanji.strokeCount}
            label={`Práctica de Caligrafía (${kanji.kanji})`}
          />

          {/* Compounds / Vocabulary */}
          {kanji.compounds && kanji.compounds.length > 0 && (
            <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-2.5">
                <Layers className="w-3.5 h-3.5 text-duo-blue" />
                <span>Palabras y Compuestos</span>
              </div>
              <div className="space-y-2">
                {kanji.compounds.map((comp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-[#131f24] border border-duo-gray-200 dark:border-[#283842]"
                  >
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-white">
                          {comp.word}
                        </span>
                        <span className="text-xs font-bold text-duo-green dark:text-green-400 font-['Noto_Sans_JP']">
                          {comp.furigana}
                        </span>
                        {showRomaji && (
                          <span className="text-[10px] font-semibold text-gray-400">
                            ({comp.romaji})
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        {comp.meaning}
                      </div>
                    </div>
                    <button
                      onClick={() => handleSpeak(comp.word)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-duo-blue hover:bg-duo-blue/10 transition-colors"
                      title="Escuchar compuesto"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Example Sentence */}
          {kanji.exampleSentence && (
            <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-gray-700 dark:text-gray-200 uppercase tracking-wide mb-2">
                <BookOpen className="w-3.5 h-3.5 text-duo-green" />
                <span>Oración de Ejemplo</span>
              </div>
              <div className="flex items-start justify-between gap-2 bg-gray-50 dark:bg-[#131f24] p-2.5 rounded-xl border border-duo-gray-200 dark:border-[#283842]">
                <div>
                  <div className="text-sm font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-white">
                    {kanji.exampleSentence}
                  </div>
                  {kanji.exampleTranslation && (
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
                      {kanji.exampleTranslation}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleSpeak(kanji.exampleSentence!)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-duo-green hover:bg-duo-green/10 transition-colors flex-shrink-0"
                  title="Escuchar oración"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Mnemonic / Notes */}
          {kanji.notes && (
            <div className="flex items-start gap-2 bg-duo-yellow-light/40 dark:bg-duo-yellow/10 border border-duo-yellow/40 rounded-2xl p-3">
              <Info className="w-4 h-4 text-duo-yellow-dark dark:text-duo-yellow flex-shrink-0 mt-0.5" />
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {kanji.notes}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-duo-gray-200 dark:border-[#283842] bg-gray-50 dark:bg-[#131f24]">
          <button
            onClick={onClose}
            className="w-full py-3 bg-duo-green hover:bg-duo-green-dark text-white font-black text-sm rounded-2xl shadow-[0_4px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

