import React, { useState, useMemo } from 'react';
import {
  PenTool,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Search,
  X,
  Brain,
  BookOpen,
  Trophy,
  Sparkles
} from 'lucide-react';
import { gojuonKanaList, dakutenKanaList } from '../data/kanaTableData';
import { kanjiList } from '../data/kanjiData';
import { StrokePracticeCanvas } from '../components/Kana/StrokePracticeCanvas';
import { sound } from '../services/sound';

interface WritingPageProps {
  showRomaji?: boolean;
}

type WritingCategory = 'hiragana' | 'katakana' | 'kanji-N5' | 'kanji-N4' | 'kanji-N3';
type PracticeMode = 'guided' | 'memory';

interface WritingItem {
  id: string;
  char: string;
  reading: string;
  romaji: string;
  meaning: string;
  strokes?: number;
  exampleWord?: string;
  exampleReading?: string;
  exampleMeaning?: string;
  badge: string;
}

export const WritingPage: React.FC<WritingPageProps> = ({ showRomaji = true }) => {
  const [category, setCategory] = useState<WritingCategory>('hiragana');
  const [mode, setMode] = useState<PracticeMode>('guided');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);

  // Build unified items list based on selected category
  const items: WritingItem[] = useMemo(() => {
    const allKana = [...gojuonKanaList, ...dakutenKanaList];

    if (category === 'hiragana') {
      return allKana.map((k, idx) => ({
        id: `hira-${idx}`,
        char: k.hira,
        reading: k.romaji.toUpperCase(),
        romaji: k.romaji,
        meaning: `Hiragana ${k.romaji.toUpperCase()}`,
        exampleWord: k.example,
        exampleMeaning: k.exampleMeaning,
        badge: 'Hiragana'
      }));
    }

    if (category === 'katakana') {
      return allKana.map((k, idx) => ({
        id: `kata-${idx}`,
        char: k.kata,
        reading: k.romaji.toUpperCase(),
        romaji: k.romaji,
        meaning: `Katakana ${k.romaji.toUpperCase()}`,
        exampleWord: k.example,
        exampleMeaning: k.exampleMeaning,
        badge: 'Katakana'
      }));
    }

    const targetJlpt = category.replace('kanji-', '') as 'N5' | 'N4' | 'N3';
    return kanjiList
      .filter(k => k.jlptLevel === targetJlpt)
      .map((k, idx) => ({
        id: `kanji-${targetJlpt}-${idx}`,
        char: k.kanji,
        reading: `${k.onyomi !== '—' ? k.onyomi : ''} ${k.kunyomi !== '—' ? `• ${k.kunyomi}` : ''}`.trim(),
        romaji: k.spanish,
        meaning: k.spanish,
        strokes: k.strokeCount,
        exampleWord: k.compounds?.[0]?.word,
        exampleReading: k.compounds?.[0]?.furigana,
        exampleMeaning: k.compounds?.[0]?.meaning,
        badge: `JLPT ${k.jlptLevel}`
      }));
  }, [category]);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase().trim();
    return items.filter(
      it =>
        it.char.includes(q) ||
        it.meaning.toLowerCase().includes(q) ||
        it.reading.toLowerCase().includes(q) ||
        it.romaji.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  const safeIndex = filteredItems.length > 0 ? Math.min(selectedIndex, filteredItems.length - 1) : 0;
  const currentItem = filteredItems[safeIndex] || items[0];

  const handleCategoryChange = (newCat: WritingCategory) => {
    sound.playTap();
    setCategory(newCat);
    setSelectedIndex(0);
    setSearchQuery('');
  };

  const handlePrev = () => {
    sound.playTap();
    setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    sound.playTap();
    setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const handleRandom = () => {
    sound.playTap();
    if (filteredItems.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * filteredItems.length);
    if (nextIdx === safeIndex) {
      nextIdx = (safeIndex + 1) % filteredItems.length;
    }
    setSelectedIndex(nextIdx);
  };

  const handleEvaluated = (_score: number, passed: boolean) => {
    if (passed) {
      setCompletedCount(c => c + 1);
      setCurrentStreak(s => {
        const next = s + 1;
        setBestStreak(b => Math.max(b, next));
        return next;
      });
    } else {
      setCurrentStreak(0);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col gap-4 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-500 p-4 text-white shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-sm">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight">Dojo de Escritura</h1>
              <p className="text-xs font-bold text-white/90">
                Caligrafía japonesa: trazos de Hiragana, Katakana y Kanji
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end bg-white/15 px-3 py-1.5 rounded-2xl border border-white/20">
            <div className="flex items-center gap-1 text-xs font-black">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>{completedCount} trazados</span>
            </div>
            <span className="text-[10px] font-bold text-white/80">Racha máx: {bestStreak}</span>
          </div>
        </div>
      </div>

      {/* Mode Switcher: Práctica Guiada vs Reto de Memoria */}
      <div className="grid grid-cols-2 gap-2 bg-duo-gray-100 dark:bg-[#18272e] p-1.5 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842]">
        <button
          onClick={() => {
            sound.playTap();
            setMode('guided');
          }}
          className={`py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mode === 'guided'
              ? 'bg-white dark:bg-[#20333d] text-duo-blue shadow-sm'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Práctica Guiada</span>
        </button>

        <button
          onClick={() => {
            sound.playTap();
            setMode('memory');
          }}
          className={`py-2 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mode === 'memory'
              ? 'bg-white dark:bg-[#20333d] text-purple-600 dark:text-purple-400 shadow-sm'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Reto de Memoria</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {(
          [
            { id: 'hiragana', label: 'Hiragana (71)' },
            { id: 'katakana', label: 'Katakana (71)' },
            { id: 'kanji-N5', label: 'Kanji N5 (148)' },
            { id: 'kanji-N4', label: 'Kanji N4 (129)' },
            { id: 'kanji-N3', label: 'Kanji N3 (155)' }
          ] as { id: WritingCategory; label: string }[]
        ).map(cat => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs whitespace-nowrap transition-all cursor-pointer border-2 ${
              category === cat.id
                ? 'bg-duo-blue text-white border-duo-blue shadow-sm'
                : 'bg-white dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-duo-gray-200 dark:border-[#283842]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Current Character Info Card */}
      {currentItem && (
        <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {/* Character Box (Hidden in Memory Mode until user enables guide) */}
              <div
                onClick={() => sound.speakJapanese(currentItem.char)}
                className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 dark:border-sky-800 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                title="Escuchar pronunciación"
              >
                {mode === 'memory' ? (
                  <span className="text-2xl font-black text-purple-500">?</span>
                ) : (
                  <span className="text-4xl font-black text-gray-800 dark:text-white">
                    {currentItem.char}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 font-black text-[10px] uppercase">
                    {currentItem.badge}
                  </span>
                  {currentItem.strokes && (
                    <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 font-black text-[10px]">
                      {currentItem.strokes} trazos
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-gray-400">
                    #{safeIndex + 1}/{filteredItems.length}
                  </span>
                </div>

                <h2 className="text-base font-black text-gray-800 dark:text-gray-100 mt-1">
                  {currentItem.meaning}
                </h2>

                {(showRomaji || category.startsWith('kanji')) && (
                  <p className="text-xs font-bold text-duo-blue">{currentItem.reading}</p>
                )}
              </div>
            </div>

            <button
              onClick={() => sound.speakJapanese(currentItem.char)}
              className="p-3 rounded-2xl bg-duo-blue text-white shadow-[0_3px_0_0_#0284c7] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
              title="Escuchar pronunciación"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {mode === 'memory' && (
            <div className="mb-3 px-3 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-300">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>Dibuja de memoria el carácter para «{currentItem.meaning}»</span>
              </div>
              {currentStreak > 0 && (
                <span className="text-[11px] font-black text-purple-600 dark:text-purple-400">
                  🔥 {currentStreak}
                </span>
              )}
            </div>
          )}

          {/* Stroke Practice Canvas */}
          <StrokePracticeCanvas
            character={currentItem.char}
            expectedStrokes={currentItem.strokes}
            initialShowGuide={mode === 'guided'}
            label={
              mode === 'memory'
                ? `Dictado Escrito: ${currentItem.meaning}`
                : `Traza: ${currentItem.char} (${currentItem.meaning})`
            }
            onEvaluated={handleEvaluated}
          />

          {/* Example Word Bar */}
          {currentItem.exampleWord && (
            <div className="mt-3 p-2.5 rounded-2xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] flex items-center justify-between">
              <div className="text-xs">
                <span className="font-black text-gray-400 uppercase text-[10px] block">
                  Palabra de ejemplo
                </span>
                <span className="font-black text-gray-800 dark:text-gray-100">
                  {currentItem.exampleWord}
                </span>
                {currentItem.exampleReading && (
                  <span className="text-gray-500 dark:text-gray-400 font-bold ml-1.5">
                    ({currentItem.exampleReading})
                  </span>
                )}
                {currentItem.exampleMeaning && (
                  <span className="text-duo-blue font-bold ml-1.5">
                    — {currentItem.exampleMeaning}
                  </span>
                )}
              </div>
              <button
                onClick={() => sound.speakJapanese(currentItem.exampleWord!)}
                className="p-2 rounded-xl bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842] text-duo-blue hover:bg-duo-blue hover:text-white transition-colors cursor-pointer"
                title="Escuchar ejemplo"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Navigation Controls (Prev / Random / Next) */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <button
              onClick={handlePrev}
              className="py-2.5 px-3 rounded-2xl bg-gray-100 dark:bg-[#131f24] hover:bg-gray-200 dark:hover:bg-[#22343d] font-black text-xs text-gray-700 dark:text-gray-200 flex items-center justify-center gap-1 cursor-pointer transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleRandom}
              className="py-2.5 px-3 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 font-black text-xs text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <Shuffle className="w-4 h-4" />
              <span>Aleatorio</span>
            </button>

            <button
              onClick={handleNext}
              className="py-2.5 px-3 rounded-2xl bg-duo-blue hover:bg-sky-500 text-white font-black text-xs flex items-center justify-center gap-1 shadow-[0_3px_0_0_#0284c7] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Quick Character Selector Grid */}
      <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Selector Rápido ({filteredItems.length})
          </h3>
        </div>

        {/* Search Input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Buscar carácter, significado o lectura..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] text-xs font-bold text-gray-800 dark:text-gray-100 focus:outline-none focus:border-duo-blue"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Grid of characters */}
        <div className="grid grid-cols-6 gap-1.5 max-h-56 overflow-y-auto pr-1">
          {filteredItems.map((it, idx) => {
            const isSelected = idx === safeIndex;
            return (
              <button
                key={it.id}
                onClick={() => {
                  sound.playTap();
                  setSelectedIndex(idx);
                }}
                className={`p-2 rounded-xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-duo-blue/15 border-duo-blue text-duo-blue font-black scale-105'
                    : 'bg-gray-50 dark:bg-[#131f24] border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-200'
                }`}
              >
                <span className="text-lg font-black leading-none">{it.char}</span>
                <span className="text-[9px] font-bold text-gray-400 dark:text-gray-400 truncate max-w-full mt-1">
                  {it.romaji}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
