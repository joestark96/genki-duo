import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Target,
  Search,
  Volume2,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Layers,
  Award,
  RefreshCw,
  X,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import { Flashcard, FlashcardCategory } from '../types';
import { sound } from '../services/sound';
import { SpeechPracticeButton } from '../components/SpeechPracticeButton';
import { NavTab } from '../components/BottomNav';

export type MasteryFilterCategory = 'all' | 'hiragana' | 'katakana' | 'vocabulary' | 'kanji' | 'phrases';
export type MasteryLevel = 'unknown' | 'weak' | 'learning' | 'familiar' | 'mastered';
export type MasteryFilterStatus = 'all' | MasteryLevel;

export interface MasteryItem extends Flashcard {
  score: number;
  level: MasteryLevel;
}

export function computeCardMastery(card: Flashcard): { score: number; level: MasteryLevel } {
  // If user has never reviewed or practiced this item, it is 0% (Desconocida)
  if (!card.timesReviewed || card.timesReviewed === 0) {
    return { score: 0, level: 'unknown' };
  }

  const correct = card.timesCorrect || 0;
  const reviewed = card.timesReviewed;
  const accuracy = Math.min(1, Math.max(0, correct / reviewed));

  // Base score from accuracy (up to 60 pts) + SRS progression (up to 40 pts)
  const baseScore = accuracy * 60;
  const srsBonus = ((card.srsLevel || 0) / 3) * 40;
  const rawScore = Math.round(baseScore + srsBonus);

  // Practiced items range between 1% and 100%
  const score = Math.max(1, Math.min(100, rawScore));

  let level: MasteryLevel = 'learning';
  if (score < 40) {
    level = 'weak';
  } else if (score < 70) {
    level = 'learning';
  } else if (score < 90) {
    level = 'familiar';
  } else {
    level = 'mastered';
  }

  return { score, level };
}

interface MasteryPageProps {
  cards: Flashcard[];
  onRateCard: (cardId: string, category: string, rating: 'again' | 'hard' | 'good' | 'easy') => Promise<void>;
  showRomaji?: boolean;
  onNavigateTab?: (tab: NavTab) => void;
}

export const MasteryPage: React.FC<MasteryPageProps> = ({
  cards,
  onRateCard,
  showRomaji = true,
  onNavigateTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MasteryFilterCategory>('all');
  const [selectedStatus, setSelectedStatus] = useState<MasteryFilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'weakest' | 'strongest' | 'lesson'>('weakest');

  // Quick Review Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewItems, setReviewItems] = useState<MasteryItem[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  // Compute mastery items
  const masteryItems: MasteryItem[] = useMemo(() => {
    return cards.map(c => {
      const { score, level } = computeCardMastery(c);
      return {
        ...c,
        score,
        level
      };
    });
  }, [cards]);

  // Overall Statistics Breakdown
  const stats = useMemo(() => {
    const total = masteryItems.length;
    let mastered = 0;
    let familiar = 0;
    let learning = 0;
    let weak = 0;
    let unknown = 0;

    masteryItems.forEach(item => {
      switch (item.level) {
        case 'mastered':
          mastered++;
          break;
        case 'familiar':
          familiar++;
          break;
        case 'learning':
          learning++;
          break;
        case 'weak':
          weak++;
          break;
        case 'unknown':
          unknown++;
          break;
      }
    });

    const knownTotal = total - unknown;
    const avgScore = knownTotal > 0
      ? Math.round(masteryItems.reduce((acc, it) => acc + it.score, 0) / knownTotal)
      : 0;

    return { total, mastered, familiar, learning, weak, unknown, avgScore };
  }, [masteryItems]);

  // Filtered and Sorted list
  const filteredItems = useMemo(() => {
    let list = masteryItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      list = list.filter(item => {
        if (selectedCategory === 'hiragana') return item.category === 'hiragana';
        if (selectedCategory === 'katakana') return item.category === 'katakana';
        if (selectedCategory === 'vocabulary') return item.category === 'vocabulary';
        if (selectedCategory === 'kanji') return item.category === 'kanji';
        if (selectedCategory === 'phrases') return item.category === 'phrases';
        return true;
      });
    }

    // Filter by mastery status
    if (selectedStatus !== 'all') {
      list = list.filter(item => item.level === selectedStatus);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(item =>
        item.japanese.toLowerCase().includes(q) ||
        item.furigana?.toLowerCase().includes(q) ||
        item.romaji?.toLowerCase().includes(q) ||
        item.spanish.toLowerCase().includes(q)
      );
    }

    // Sort
    return [...list].sort((a, b) => {
      if (sortBy === 'weakest') {
        // Show practiced weak items first, then learning, then unknown, then strongest
        if (a.score !== b.score) return a.score - b.score;
        return (b.timesReviewed || 0) - (a.timesReviewed || 0);
      }
      if (sortBy === 'strongest') {
        return b.score - a.score;
      }
      // By lesson
      return (a.genkiLesson || 0) - (b.genkiLesson || 0);
    });
  }, [masteryItems, selectedCategory, selectedStatus, searchQuery, sortBy]);

  // Start Quick Weak Items Review
  const handleStartWeakReview = () => {
    sound.playTap();
    // Prioritize weak items (<40%), then learning items (<70%), then random
    let targets = masteryItems.filter(it => it.level === 'weak');
    if (targets.length === 0) {
      targets = masteryItems.filter(it => it.level === 'learning');
    }
    if (targets.length === 0) {
      targets = masteryItems.filter(it => it.level === 'unknown');
    }

    // Take up to 10 random weak items
    const shuffled = [...targets].sort(() => 0.5 - Math.random()).slice(0, 10);
    if (shuffled.length === 0) return;

    setReviewItems(shuffled);
    setReviewIndex(0);
    setIsAnswerRevealed(false);
    setReviewedCount(0);
    setIsReviewModalOpen(true);
  };

  const handleReviewRate = async (rating: 'again' | 'hard' | 'good' | 'easy') => {
    const current = reviewItems[reviewIndex];
    if (!current) return;

    if (rating === 'again' || rating === 'hard') {
      sound.playIncorrect();
    } else {
      sound.playCorrect();
    }

    await onRateCard(current.id, current.category, rating);
    setReviewedCount(prev => prev + 1);

    if (reviewIndex + 1 < reviewItems.length) {
      setReviewIndex(prev => prev + 1);
      setIsAnswerRevealed(false);
    } else {
      // Completed review session!
      sound.playLessonComplete();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => {
        setIsReviewModalOpen(false);
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#0f171c] pb-24 transition-colors">
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col gap-5">
        {/* Header Hero */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Banco de Dominio y SRS
              </span>
              <span className="px-2.5 py-1 rounded-full bg-yellow-400 text-yellow-950 text-xs font-black">
                {stats.total} elementos
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Control de Palabras y Kanas
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 font-medium mt-1 max-w-xl">
              Monitorea el nivel de retención de cada palabra, kana y frase. Identifica tus puntos débiles y refuerza antes de olvidar.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-5">
              <button
                onClick={() => { sound.playTap(); setSelectedStatus('mastered'); }}
                className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedStatus === 'mastered'
                    ? 'bg-white text-gray-900 border-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-black">
                  <span>💎 Dominadas</span>
                </div>
                <p className="text-xl font-black mt-0.5">{stats.mastered}</p>
                <span className="text-[10px] opacity-80 font-bold">90% - 100%</span>
              </button>

              <button
                onClick={() => { sound.playTap(); setSelectedStatus('familiar'); }}
                className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedStatus === 'familiar'
                    ? 'bg-white text-gray-900 border-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-black">
                  <span>🟢 Familiar</span>
                </div>
                <p className="text-xl font-black mt-0.5">{stats.familiar}</p>
                <span className="text-[10px] opacity-80 font-bold">70% - 89%</span>
              </button>

              <button
                onClick={() => { sound.playTap(); setSelectedStatus('learning'); }}
                className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedStatus === 'learning'
                    ? 'bg-white text-gray-900 border-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-black">
                  <span>🟡 Aprendiendo</span>
                </div>
                <p className="text-xl font-black mt-0.5">{stats.learning}</p>
                <span className="text-[10px] opacity-80 font-bold">40% - 69%</span>
              </button>

              <button
                onClick={() => { sound.playTap(); setSelectedStatus('weak'); }}
                className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedStatus === 'weak'
                    ? 'bg-white text-gray-900 border-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-black">
                  <span>🔴 Débiles</span>
                </div>
                <p className="text-xl font-black mt-0.5">{stats.weak}</p>
                <span className="text-[10px] opacity-80 font-bold">1% - 39%</span>
              </button>

              <button
                onClick={() => { sound.playTap(); setSelectedStatus('unknown'); }}
                className={`col-span-2 sm:col-span-1 p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedStatus === 'unknown'
                    ? 'bg-white text-gray-900 border-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-black">
                  <span>⚪ Por Aprender</span>
                </div>
                <p className="text-xl font-black mt-0.5">{stats.unknown}</p>
                <span className="text-[10px] opacity-80 font-bold">0% (Nuevas)</span>
              </button>
            </div>

            {/* Smart Weak Practice Action Button */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={handleStartWeakReview}
                className="px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-950/20 active:scale-95 transition-all cursor-pointer"
              >
                <Flame className="w-4 h-4 fill-amber-950" />
                <span>
                  {stats.weak > 0
                    ? `🔥 Reforzar ${stats.weak} palabras débiles`
                    : stats.learning > 0
                    ? `⚡ Repasar ${stats.learning} en aprendizaje`
                    : '✨ Iniciar Sesión de Práctica'}
                </span>
              </button>

              {onNavigateTab && (
                <button
                  onClick={() => {
                    sound.playTap();
                    onNavigateTab('flashcards');
                  }}
                  className="px-4 py-2.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Modo Flashcards SRS</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-sm flex flex-col gap-3">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'Todos', icon: Filter },
              { id: 'hiragana', label: 'Hiragana', icon: BookOpen },
              { id: 'katakana', label: 'Katakana', icon: BookOpen },
              { id: 'vocabulary', label: 'Vocabulario', icon: Layers },
              { id: 'kanji', label: 'Kanjis', icon: Award },
              { id: 'phrases', label: 'Frases', icon: Sparkles }
            ].map(cat => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playTap();
                    setSelectedCategory(cat.id as MasteryFilterCategory);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-all border-2 ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                      : 'bg-gray-50 dark:bg-[#131f24] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#283842] hover:border-purple-300'
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search + Status and Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar por japonés, furigana, romaji o español..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-gray-50 dark:bg-[#131f24] border-2 border-gray-200 dark:border-[#283842] text-xs font-bold text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status Filter Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={selectedStatus}
                onChange={e => {
                  sound.playTap();
                  setSelectedStatus(e.target.value as MasteryFilterStatus);
                }}
                className="py-2 px-3 rounded-xl bg-gray-50 dark:bg-[#131f24] border-2 border-gray-200 dark:border-[#283842] text-xs font-black text-gray-700 dark:text-gray-200 cursor-pointer focus:outline-none focus:border-purple-500"
              >
                <option value="all">Cualquier Estado ({stats.total})</option>
                <option value="weak">🔴 Débiles (&lt; 40%) [{stats.weak}]</option>
                <option value="learning">🟡 En Aprendizaje [{stats.learning}]</option>
                <option value="familiar">🟢 Familiar [{stats.familiar}]</option>
                <option value="mastered">💎 Dominadas [{stats.mastered}]</option>
                <option value="unknown">⚪ Desconocidas (0%) [{stats.unknown}]</option>
              </select>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={e => {
                  sound.playTap();
                  setSortBy(e.target.value as 'weakest' | 'strongest' | 'lesson');
                }}
                className="py-2 px-3 rounded-xl bg-gray-50 dark:bg-[#131f24] border-2 border-gray-200 dark:border-[#283842] text-xs font-black text-gray-700 dark:text-gray-200 cursor-pointer focus:outline-none focus:border-purple-500"
              >
                <option value="weakest">Más débiles primero</option>
                <option value="strongest">Mayor dominio primero</option>
                <option value="lesson">Por lección Genki</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Current Active Filters info */}
        <div className="flex items-center justify-between px-1">
          <p className="text-xs font-black text-gray-500 dark:text-gray-400">
            Mostrando <span className="text-purple-600 dark:text-purple-400">{filteredItems.length}</span> elementos
            {selectedStatus !== 'all' && ` • Estado: ${selectedStatus.toUpperCase()}`}
          </p>

          {(selectedStatus !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                sound.playTap();
                setSelectedCategory('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="text-xs font-black text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Cards Grid / List */}
        {filteredItems.length === 0 ? (
          <div className="p-8 bg-white dark:bg-[#18272e] border-2 border-dashed border-gray-300 dark:border-[#283842] rounded-3xl text-center flex flex-col items-center gap-2">
            <span className="text-4xl">🔍</span>
            <p className="text-sm font-black text-gray-700 dark:text-gray-200">
              No se encontraron elementos con los filtros actuales
            </p>
            <p className="text-xs text-gray-400">
              Prueba cambiando la categoría o restableciendo los filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredItems.map(item => {
              // Badge colors based on mastery score
              const isUnknown = item.level === 'unknown';
              const isWeak = item.level === 'weak';
              const isLearning = item.level === 'learning';
              const isFamiliar = item.level === 'familiar';
              const isMastered = item.level === 'mastered';

              return (
                <div
                  key={item.id}
                  className={`bg-white dark:bg-[#18272e] border-2 rounded-2xl p-3.5 shadow-xs transition-all flex flex-col justify-between gap-3 ${
                    isWeak
                      ? 'border-red-300 dark:border-red-900/60 bg-red-50/15'
                      : isMastered
                      ? 'border-emerald-300 dark:border-emerald-900/60'
                      : isFamiliar
                      ? 'border-sky-300 dark:border-sky-900/60'
                      : isLearning
                      ? 'border-amber-300 dark:border-amber-900/60'
                      : 'border-gray-200 dark:border-[#283842]'
                  }`}
                >
                  <div>
                    {/* Top line: Tag & Mastery Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#131f24] text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        {item.category === 'vocabulary'
                          ? `Vocabulario ${item.genkiLesson ? `L${item.genkiLesson}` : ''}`
                          : item.category}
                      </span>

                      {/* Mastery Pill */}
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          isUnknown
                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                            : isWeak
                            ? 'bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                            : isLearning
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400'
                            : isFamiliar
                            ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300'
                            : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                        }`}
                      >
                        {isUnknown && '⚪ 0% Desconocida'}
                        {isWeak && `🔴 ${item.score}% Débil`}
                        {isLearning && `🟡 ${item.score}% Aprendiendo`}
                        {isFamiliar && `🟢 ${item.score}% Familiar`}
                        {isMastered && `💎 ${item.score}% Dominada`}
                      </span>
                    </div>

                    {/* Word display */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xl font-black text-gray-900 dark:text-white leading-tight">
                          {item.japanese}
                        </p>
                        {item.furigana && item.furigana !== item.japanese && (
                          <p className="text-xs font-bold text-gray-400">{item.furigana}</p>
                        )}
                        {showRomaji && item.romaji && (
                          <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
                            {item.romaji}
                          </p>
                        )}
                      </div>

                      {/* TTS Audio button */}
                      <button
                        onClick={() => sound.speakJapanese(item.japanese)}
                        className="p-2 rounded-xl bg-gray-100 dark:bg-[#131f24] hover:bg-purple-100 dark:hover:bg-purple-950/50 text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors cursor-pointer"
                        title="Escuchar pronunciación"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs font-bold text-gray-600 dark:text-gray-300 mt-2">
                      {item.spanish}
                    </p>
                  </div>

                  {/* Progress bar & Stats */}
                  <div className="border-t border-gray-100 dark:border-[#283842] pt-2 mt-1">
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mb-1">
                      <span>Dominio</span>
                      <span>{item.score}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-[#131f24] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isUnknown
                            ? 'bg-transparent'
                            : isWeak
                            ? 'bg-red-500'
                            : isLearning
                            ? 'bg-amber-500'
                            : isFamiliar
                            ? 'bg-sky-500'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium mt-1.5">
                      <span>
                        {item.timesReviewed > 0
                          ? `${item.timesCorrect}/${item.timesReviewed} aciertos`
                          : 'Aún no repasada'}
                      </span>
                      {/* Interactive Speech Practice trigger */}
                      <SpeechPracticeButton
                        targetJapanese={item.japanese}
                        targetFurigana={item.furigana}
                        compact={true}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* QUICK WEAK REVIEW MODAL */}
      {isReviewModalOpen && reviewItems.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl max-w-md w-full p-5 shadow-2xl flex flex-col gap-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-[#283842] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center font-black text-sm">
                  🔥
                </span>
                <div>
                  <h3 className="text-sm font-black text-gray-800 dark:text-white">
                    Reforzando Puntos Débiles
                  </h3>
                  <p className="text-[10px] text-gray-400 font-bold">
                    Tarjeta {reviewIndex + 1} de {reviewItems.length}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Flashcard Item Box */}
            {reviewItems[reviewIndex] && (
              <div className="bg-gray-50 dark:bg-[#131f24] border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl p-6 flex flex-col items-center text-center gap-2 relative">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  {reviewItems[reviewIndex].category.toUpperCase()}
                </span>

                <p className="text-3xl font-black text-gray-900 dark:text-white mt-1">
                  {reviewItems[reviewIndex].japanese}
                </p>

                {reviewItems[reviewIndex].furigana !== reviewItems[reviewIndex].japanese && (
                  <p className="text-xs font-bold text-gray-400">
                    {reviewItems[reviewIndex].furigana}
                  </p>
                )}

                {showRomaji && reviewItems[reviewIndex].romaji && (
                  <p className="text-sm font-black text-purple-600 dark:text-purple-400">
                    {reviewItems[reviewIndex].romaji}
                  </p>
                )}

                <button
                  onClick={() => sound.speakJapanese(reviewItems[reviewIndex].japanese)}
                  className="mt-2 px-3 py-1.5 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center gap-1.5 shadow-sm cursor-pointer hover:bg-purple-700"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Escuchar</span>
                </button>

                {/* Answer Reveal Area */}
                {isAnswerRevealed ? (
                  <div className="w-full mt-4 pt-4 border-t border-gray-200 dark:border-[#283842] animate-fade-in flex flex-col items-center">
                    <p className="text-base font-black text-emerald-600 dark:text-emerald-400">
                      «{reviewItems[reviewIndex].spanish}»
                    </p>
                    {reviewItems[reviewIndex].exampleSentence && (
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 italic">
                        {reviewItems[reviewIndex].exampleSentence}
                      </p>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      sound.playTap();
                      setIsAnswerRevealed(true);
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white dark:bg-[#18272e] border-2 border-dashed border-gray-300 dark:border-gray-700 text-xs font-black text-gray-600 dark:text-gray-300 hover:border-purple-400 cursor-pointer"
                  >
                    Mostrar Significado 👀
                  </button>
                )}
              </div>
            )}

            {/* SRS Feedback Buttons */}
            {isAnswerRevealed ? (
              <div className="grid grid-cols-4 gap-2 pt-1">
                <button
                  onClick={() => handleReviewRate('again')}
                  className="p-2 rounded-xl bg-red-500 text-white font-black text-[10px] cursor-pointer hover:bg-red-600 flex flex-col items-center"
                >
                  <span>Otra vez</span>
                  <span className="opacity-75 font-normal">0%</span>
                </button>
                <button
                  onClick={() => handleReviewRate('hard')}
                  className="p-2 rounded-xl bg-amber-500 text-white font-black text-[10px] cursor-pointer hover:bg-amber-600 flex flex-col items-center"
                >
                  <span>Difícil</span>
                  <span className="opacity-75 font-normal">+1 día</span>
                </button>
                <button
                  onClick={() => handleReviewRate('good')}
                  className="p-2 rounded-xl bg-sky-500 text-white font-black text-[10px] cursor-pointer hover:bg-sky-600 flex flex-col items-center"
                >
                  <span>Bien</span>
                  <span className="opacity-75 font-normal">+3 días</span>
                </button>
                <button
                  onClick={() => handleReviewRate('easy')}
                  className="p-2 rounded-xl bg-emerald-500 text-white font-black text-[10px] cursor-pointer hover:bg-emerald-600 flex flex-col items-center"
                >
                  <span>Fácil</span>
                  <span className="opacity-75 font-normal">+7 días</span>
                </button>
              </div>
            ) : (
              <p className="text-[11px] text-center text-gray-400 font-medium">
                Piensa en el significado en español antes de mostrar la respuesta.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
