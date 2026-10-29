import React, { useState } from 'react';
import { Languages, Volume2, Search, Eye, EyeOff, ChevronDown, Sparkles } from 'lucide-react';
import { genkiVocabulary, VocabWord } from '../data/vocabularyData';
import { sound } from '../services/sound';

interface VocabularyPageProps {
  showRomaji?: boolean;
}

export const VocabularyPage: React.FC<VocabularyPageProps> = ({ showRomaji = true }) => {
  const [selectedLesson, setSelectedLesson] = useState<number>(-1); // -1 = todas
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hideMeanings, setHideMeanings] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    sound.playTap();
    setRevealedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredWords = genkiVocabulary.filter(word => {
    // Lesson filter
    if (selectedLesson !== -1 && word.lesson !== selectedLesson) return false;

    // Part of speech filter
    if (selectedPos === 'noun' && word.pos !== 'noun') return false;
    if (selectedPos === 'verb' && !word.pos.startsWith('verb')) return false;
    if (selectedPos === 'adj' && !word.pos.startsWith('adj')) return false;
    if (selectedPos === 'expr' && word.pos !== 'expression' && word.pos !== 'adverb') return false;

    // Search query
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;

    return (
      word.japanese.toLowerCase().includes(q) ||
      word.furigana.toLowerCase().includes(q) ||
      word.romaji.toLowerCase().includes(q) ||
      word.spanish.toLowerCase().includes(q)
    );
  });

  const getPosBadge = (pos: VocabWord['pos']) => {
    switch (pos) {
      case 'noun':
        return { label: 'Sustantivo', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' };
      case 'verb-u':
        return { label: 'Verbo U', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' };
      case 'verb-ru':
        return { label: 'Verbo Ru', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' };
      case 'verb-irr':
        return { label: 'Verbo Irreg.', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300' };
      case 'adj-i':
        return { label: 'Adj. い', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' };
      case 'adj-na':
        return { label: 'Adj. な', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' };
      case 'adverb':
        return { label: 'Adverbio', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' };
      default:
        return { label: 'Expresión', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' };
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col items-center animate-fade-in">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-rose-500 flex items-center gap-1.5 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-300 dark:border-rose-800">
          <Languages className="w-3.5 h-3.5" /> Vocabulario Genki I y II
        </span>

        {/* Study Mode: Hide/Reveal Translations Toggle */}
        <button
          onClick={() => {
            sound.playTap();
            setHideMeanings(prev => !prev);
            setRevealedIds({});
          }}
          className={`px-3 py-1 rounded-full font-black text-xs flex items-center gap-1.5 transition-all cursor-pointer border-2 ${
            hideMeanings
              ? 'bg-amber-100 dark:bg-amber-950/50 border-amber-400 text-amber-800 dark:text-amber-300'
              : 'bg-white dark:bg-[#18272e] border-gray-200 dark:border-[#283842] text-gray-700 dark:text-gray-200 hover:border-rose-400'
          }`}
          title="Modo autoevaluación: oculta significados para ponerte a prueba"
        >
          {hideMeanings ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{hideMeanings ? 'Modo Repaso Activo' : 'Ocultar Traducción'}</span>
        </button>
      </div>

      {/* Main Banner */}
      <div className="w-full p-5 rounded-3xl bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-1.5">
          <span className="px-2.5 py-0.5 bg-black/25 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {selectedLesson === -1 ? 'Genki I & II Completo' : selectedLesson === 0 ? 'Saludos Básicos' : selectedLesson <= 12 ? `Genki I • Lección ${selectedLesson}` : `Genki II • Lección ${selectedLesson}`}
          </span>
          <span className="text-xs font-black opacity-90">
            {filteredWords.length} palabras
          </span>
        </div>

        <h1 className="text-xl md:text-2xl font-black tracking-tight mb-1">
          Banco de Vocabulario
        </h1>
        <p className="text-xs font-bold opacity-90 leading-relaxed">
          Palabras esenciales organizadas por lección, categoría gramatical y con audio de pronunciación nativa.
        </p>
      </div>

      {/* Lesson Selector */}
      <div className="w-full mb-3">
        <label className="block text-[11px] font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 ml-1">
          Filtrar por Lección:
        </label>
        <div className="relative">
          <select
            value={selectedLesson}
            onChange={(e) => {
              sound.playTap();
              setSelectedLesson(Number(e.target.value));
            }}
            className="w-full appearance-none bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] hover:border-rose-400 focus:border-rose-500 rounded-2xl py-3 px-4 pr-10 text-xs md:text-sm font-black text-gray-800 dark:text-gray-100 shadow-[0_4px_0_0_#e5e5e5] dark:shadow-none focus:outline-none transition-all cursor-pointer"
          >
            <option value={-1}>🌟 Todas las Lecciones (Genki I y II)</option>
            <option value={0}>Unidad 0: Saludos y Expresiones Básicas</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                📘 Genki I — Lección {num}
              </option>
            ))}
            {Array.from({ length: 11 }, (_, i) => i + 13).map((num) => (
              <option key={num} value={num}>
                📗 Genki II — Lección {num}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500 dark:text-gray-400">
            <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="w-full relative mb-3">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar palabra, kanji, romaji o español..."
          className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl text-xs font-bold text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-rose-400 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* POS Filter Pills */}
      <div className="w-full flex gap-1.5 overflow-x-auto pb-1 mb-4">
        {[
          { id: 'all', label: 'Todos' },
          { id: 'noun', label: 'Sustantivos' },
          { id: 'verb', label: 'Verbos' },
          { id: 'adj', label: 'Adjetivos' },
          { id: 'expr', label: 'Expresiones / Adverbios' }
        ].map((tab) => {
          const isActive = selectedPos === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playTap();
                setSelectedPos(tab.id);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all border whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-rose-500 text-white font-black border-rose-600 shadow-sm'
                  : 'bg-gray-100 dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#283842] hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Word Cards List */}
      <div className="w-full flex flex-col gap-3">
        {filteredWords.length === 0 ? (
          <div className="p-8 text-center text-gray-400 font-bold text-sm bg-white dark:bg-[#18272e] border-2 border-dashed border-duo-gray-200 dark:border-[#283842] rounded-3xl">
            No se encontraron palabras con esos filtros.
          </div>
        ) : (
          filteredWords.map((word) => {
            const badge = getPosBadge(word.pos);
            const isRevealed = revealedIds[word.id];
            const isHidden = hideMeanings && !isRevealed;

            return (
              <article
                key={word.id}
                onClick={() => {
                  if (hideMeanings) toggleReveal(word.id);
                }}
                className={`w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3.5 shadow-sm transition-all hover:border-rose-400/60 ${
                  hideMeanings ? 'cursor-pointer' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Top Row: Lesson + POS */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                        {word.lesson === 0 ? 'Intro' : `L${word.lesson}`}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Japanese Word */}
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-xl font-black font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 leading-tight">
                        {word.japanese}
                      </h3>
                      {word.japanese !== word.furigana && (
                        <span className="text-xs font-bold text-rose-500 font-['Noto_Sans_JP']">
                          【{word.furigana}】
                        </span>
                      )}
                    </div>

                    {/* Romaji */}
                    {showRomaji && (
                      <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-400">
                        {word.romaji}
                      </p>
                    )}

                    {/* Spanish Translation */}
                    <div className="mt-1">
                      {isHidden ? (
                        <div className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 rounded-lg text-xs font-bold text-amber-800 dark:text-amber-300">
                          🙈 Toca para revelar significado
                        </div>
                      ) : (
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                          {word.spanish}
                        </p>
                      )}
                    </div>

                    {/* Example Sentence (if present and not hidden) */}
                    {word.exampleSentence && !isHidden && (
                      <div className="mt-2 pt-2 border-t border-gray-100 dark:border-[#283842] flex items-center justify-between gap-2">
                        <div className="text-xs">
                          <p className="font-bold text-gray-800 dark:text-gray-200 font-['Noto_Sans_JP']">
                            {word.exampleSentence}
                          </p>
                          {word.exampleTranslation && (
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">
                              {word.exampleTranslation}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            sound.speakJapanese(word.exampleSentence!);
                          }}
                          className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-rose-500 hover:text-white text-gray-600 dark:text-gray-300 transition-colors flex-shrink-0"
                          title="Escuchar oración de ejemplo"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Audio Playback Buttons */}
                  <div className="flex flex-col gap-1.5 flex-shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.speakJapanese(word.audioText || word.furigana, 0.9);
                      }}
                      className="p-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-[0_3px_0_0_#e11d48] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                      title="Escuchar pronunciación"
                    >
                      <Volume2 className="w-4 h-4 stroke-[2.5px]" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.speakJapanese(word.audioText || word.furigana, 0.6);
                      }}
                      className="px-2 py-1 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 rounded-lg text-[10px] font-black cursor-pointer hover:brightness-105 transition-all text-center"
                      title="Escuchar lento"
                    >
                      🐢
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};
