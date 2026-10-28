import React, { useState, useEffect } from 'react';
import { Volume2, RotateCw, Check, Clock, Eye, Sparkles, Filter, Search, Award, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Flashcard, FlashcardCategory, JLPTLevel } from '../../types';
import { sound } from '../../services/sound';

interface FlashcardDeckProps {
  cards: Flashcard[];
  onRateCard: (cardId: string, category: string, rating: 'again' | 'hard' | 'good' | 'easy') => void;
  showRomaji?: boolean;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ cards, onRateCard, showRomaji: initialShowRomaji = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<FlashcardCategory | 'all'>('all');
  const [selectedJlpt, setSelectedJlpt] = useState<JLPTLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRomaji, setShowRomaji] = useState(initialShowRomaji);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setShowRomaji(initialShowRomaji);
  }, [initialShowRomaji]);

  // Filter cards
  const filteredCards = cards.filter(c => {
    // 1. Category match
    let matchesCategory = false;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'hiragana') {
      matchesCategory = c.category === 'hiragana' || c.category === 'katakana';
    } else {
      matchesCategory = c.category === selectedCategory;
    }

    // 2. JLPT level match (when in kanji category or when jlpt filter active)
    let matchesJlpt = true;
    if (selectedCategory === 'kanji' && selectedJlpt !== 'all') {
      matchesJlpt = c.jlptLevel === selectedJlpt;
    }

    // 3. Search query match
    const matchesSearch =
      searchQuery === '' ||
      c.japanese.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.spanish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.onyomi && c.onyomi.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (c.kunyomi && c.kunyomi.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesJlpt && matchesSearch;
  });

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  // Preload audio as soon as a card is displayed for instant 0ms playback
  useEffect(() => {
    if (currentCard?.japanese) {
      sound.preloadAudio(currentCard.japanese);
    }
  }, [currentCard]);

  const handleFlip = () => {
    if (isAnimating) return;
    sound.playTap();
    setIsFlipped(!isFlipped);
  };

  const handleRating = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard || isAnimating) return;
    setIsAnimating(true);

    // Left swipe for 'again' / 'hard', Right swipe for 'good' / 'easy'
    const direction = (rating === 'again' || rating === 'hard') ? 'left' : 'right';
    setSwipeDirection(direction);

    if (rating === 'again') {
      sound.playIncorrect();
    } else if (rating === 'easy') {
      sound.playCorrect();
      // Burst celebratory confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#58cc02', '#235390', '#ff9600', '#ce82ff', '#1cb0f6']
      });
    } else if (rating === 'good') {
      sound.playCorrect();
    } else {
      sound.playTap();
    }

    // Advance card after swipe animation
    setTimeout(() => {
      onRateCard(currentCard.id, currentCard.category, rating);
      setIsFlipped(false);
      setSwipeDirection(null);
      setIsAnimating(false);
      if (currentIndex < filteredCards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 320);
  };

  const handleNext = () => {
    if (isAnimating) return;
    sound.playTap();
    setIsFlipped(false);
    setCurrentIndex((currentIndex + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    sound.playTap();
    setIsFlipped(false);
    setCurrentIndex((currentIndex - 1 + filteredCards.length) % filteredCards.length);
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 py-3 flex flex-col items-center">
      {/* Category Pills */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'all', label: 'Todas' },
          { id: 'kanji', label: 'Kanjis' },
          { id: 'hiragana', label: 'Kanas' },
          { id: 'vocabulary', label: 'Vocabulario' },
          { id: 'phrases', label: 'Frases' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              sound.playTap();
              setSelectedCategory(cat.id as FlashcardCategory | 'all');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-black transition-all flex-shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-duo-green text-white shadow-duo-btn-sm'
                : 'bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* JLPT Sub-filters (Shown when Kanjis is active) */}
      {selectedCategory === 'kanji' && (
        <div className="w-full flex items-center gap-1.5 overflow-x-auto py-2 scrollbar-none border-t border-b border-duo-gray-200 dark:border-[#283842] my-1 animate-fade-in">
          <span className="text-[10px] font-black uppercase text-gray-400 mr-1 flex items-center gap-0.5">
            <Award className="w-3.5 h-3.5 text-duo-purple" />
            JLPT:
          </span>
          {[
            { id: 'all', label: 'Todos N' },
            { id: 'N5', label: 'N5 (Genki I)' },
            { id: 'N4', label: 'N4 (Genki II)' },
            { id: 'N3', label: 'N3 (Intermedio)' }
          ].map(jlpt => (
            <button
              key={jlpt.id}
              onClick={() => {
                sound.playTap();
                setSelectedJlpt(jlpt.id as JLPTLevel | 'all');
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all flex-shrink-0 ${
                selectedJlpt === jlpt.id
                  ? 'bg-duo-purple text-white shadow-duo-btn-sm'
                  : 'bg-white dark:bg-[#18272e] border border-duo-gray-300 dark:border-[#283842] text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {jlpt.label}
            </button>
          ))}
        </div>
      )}

      {/* Search Bar */}
      <div className="w-full relative my-2">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          placeholder={
            selectedCategory === 'kanji'
              ? 'Buscar kanji, on’yomi, kun’yomi o significado...'
              : 'Buscar palabra, kanji o significado...'
          }
          className="w-full pl-9 pr-3 py-2 text-xs font-bold bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-xl focus:border-duo-blue focus:outline-none transition-colors"
        />
      </div>

      {/* Progress Counter & Controls */}
      <div className="w-full flex justify-between items-center text-xs font-bold text-gray-400 px-1 my-1">
        <span>Tarjeta {filteredCards.length > 0 ? currentIndex + 1 : 0} de {filteredCards.length}</span>
        <button
          onClick={() => setShowRomaji(!showRomaji)}
          className="flex items-center gap-1 text-duo-blue hover:underline"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{showRomaji ? 'Ocultar Romaji' : 'Mostrar Romaji'}</span>
        </button>
      </div>

      {/* Main Flashcard Container with 3D Flip & Swipe Animation */}
      {currentCard ? (
        <div className="w-full my-2 perspective-1000 relative">
          <div
            onClick={handleFlip}
            className={`w-full min-h-[320px] bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] rounded-3xl p-5 shadow-duo-card dark:shadow-none cursor-pointer flex flex-col justify-between relative select-none hover:border-duo-blue ${
              isFlipped ? 'bg-gradient-to-br from-white to-duo-blue-light/20 dark:from-[#18272e] dark:to-duo-blue-dark/20' : ''
            } ${
              swipeDirection === 'left'
                ? 'transform -translate-x-[140%] -rotate-12 opacity-0 transition-all duration-300 ease-in pointer-events-none'
                : swipeDirection === 'right'
                ? 'transform translate-x-[140%] rotate-12 opacity-0 transition-all duration-300 ease-in pointer-events-none'
                : 'transform translate-x-0 rotate-0 opacity-100 transition-all duration-300 ease-out'
            }`}
          >
            {/* Stamp Badge during swipe */}
            {swipeDirection === 'left' && (
              <div className="absolute top-8 right-6 z-30 border-4 border-duo-red text-duo-red font-black text-2xl uppercase px-4 py-1.5 rounded-2xl rotate-12 bg-white/95 shadow-xl tracking-wider pointer-events-none animate-pulse">
                Repetir
              </div>
            )}
            {swipeDirection === 'right' && (
              <div className="absolute top-8 left-6 z-30 border-4 border-duo-green text-duo-green-dark font-black text-2xl uppercase px-4 py-1.5 rounded-2xl -rotate-12 bg-white/95 shadow-xl tracking-wider pointer-events-none animate-pulse">
                ¡Fácil! ⭐
              </div>
            )}

            {/* Top Card Info Bar */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-2.5 py-1 bg-duo-gray-100 dark:bg-gray-800 border border-duo-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-[10px] font-black rounded-lg uppercase tracking-wider">
                  {currentCard.category}
                </span>

                {currentCard.jlptLevel && (
                  <span className="px-2 py-0.5 bg-duo-purple-light dark:bg-duo-purple/20 border border-duo-purple text-duo-purple-dark dark:text-duo-purple text-[10px] font-black rounded-lg uppercase flex items-center gap-0.5">
                    <Award className="w-3 h-3" />
                    JLPT {currentCard.jlptLevel}
                  </span>
                )}

                {currentCard.genkiLesson ? (
                  <span className="px-2 py-0.5 bg-duo-blue-light dark:bg-duo-blue/20 border border-duo-blue text-duo-blue-dark dark:text-duo-blue text-[10px] font-black rounded-lg uppercase flex items-center gap-0.5">
                    <BookOpen className="w-3 h-3" />
                    Genki L{currentCard.genkiLesson}
                  </span>
                ) : null}
              </div>

              {/* Speaker Audio Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sound.speakJapanese(currentCard.japanese);
                }}
                className="p-2.5 bg-duo-blue text-white rounded-xl shadow-duo-btn-sm hover:bg-duo-blue-dark active:translate-y-0.5 transition-all flex items-center gap-1"
                title="Escuchar audio"
              >
                <Volume2 className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase">Oír</span>
              </button>
            </div>

            {/* Card Center Content */}
            <div className="flex flex-col items-center justify-center my-4 text-center">
              {!isFlipped ? (
                /* FRONT OF CARD */
                <>
                  <div className={`font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 tracking-wide mb-2 ${
                    currentCard.category === 'kanji' ? 'text-7xl md:text-8xl' : 'text-5xl md:text-6xl'
                  }`}>
                    {currentCard.japanese}
                  </div>

                  {currentCard.category === 'kanji' && (
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
                      {currentCard.strokeCount && (
                        <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700">
                          {currentCard.strokeCount} trazos
                        </span>
                      )}
                      {currentCard.radicals && (
                        <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700">
                          Radical: {currentCard.radicals}
                        </span>
                      )}
                    </div>
                  )}

                  {showRomaji && (
                    <div className="text-base font-extrabold text-duo-blue">
                      {currentCard.romaji}
                    </div>
                  )}

                  <div className="mt-4 text-xs font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Toca la tarjeta para ver lecturas y significado</span>
                  </div>
                </>
              ) : (
                /* BACK OF CARD */
                <div className="animate-fade-in flex flex-col items-center w-full">
                  <div className="text-2xl md:text-3xl font-black text-gray-800 dark:text-gray-100 mb-2">
                    {currentCard.spanish}
                  </div>

                  {/* Specific Kanji Readings Display */}
                  {currentCard.category === 'kanji' && (
                    <div className="w-full bg-duo-purple-light/30 dark:bg-duo-purple/20 border border-duo-purple/40 rounded-2xl p-3 my-2 text-left">
                      {currentCard.onyomi && (
                        <div className="text-xs mb-1.5 flex items-center justify-between">
                          <div>
                            <span className="font-black text-duo-purple-dark dark:text-purple-300 mr-1">On'yomi (音読み):</span>
                            <span className="font-bold text-gray-800 dark:text-gray-100 font-['Noto_Sans_JP']">{currentCard.onyomi}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              sound.speakJapanese(currentCard.onyomi!.split('、')[0]);
                            }}
                            className="p-1 hover:bg-duo-purple/20 rounded"
                            title="Oír lectura On"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-duo-purple-dark dark:text-purple-300" />
                          </button>
                        </div>
                      )}
                      {currentCard.kunyomi && (
                        <div className="text-xs flex items-center justify-between">
                          <div>
                            <span className="font-black text-duo-green-dark dark:text-green-300 mr-1">Kun'yomi (訓読み):</span>
                            <span className="font-bold text-gray-800 dark:text-gray-100 font-['Noto_Sans_JP']">{currentCard.kunyomi}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              sound.speakJapanese(currentCard.kunyomi!.split('、')[0]);
                            }}
                            className="p-1 hover:bg-duo-green/20 rounded"
                            title="Oír lectura Kun"
                          >
                            <Volume2 className="w-3.5 h-3.5 text-duo-green-dark dark:text-green-300" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Kanji Compounds / Palabras compuestas */}
                  {currentCard.compounds && currentCard.compounds.length > 0 && (
                    <div className="w-full my-2">
                      <div className="text-[10px] font-black uppercase text-gray-400 text-left mb-1">
                        Palabras compuestas comunes:
                      </div>
                      <div className="flex flex-col gap-1.5 text-left">
                        {currentCard.compounds.map((cmp, idx) => (
                          <div
                            key={idx}
                            className="p-2 bg-gray-50 dark:bg-[#131f24] border border-duo-gray-200 dark:border-[#283842] rounded-xl flex items-center justify-between"
                          >
                            <div>
                              <span className="font-bold font-['Noto_Sans_JP'] text-gray-800 dark:text-gray-200 text-sm mr-1">
                                {cmp.word}
                              </span>
                              <span className="text-[11px] text-gray-400 font-bold font-['Noto_Sans_JP'] mr-1.5">
                                ({cmp.furigana})
                              </span>
                              <span className="text-xs font-bold text-duo-blue">
                                = {cmp.meaning}
                              </span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                sound.speakJapanese(cmp.word);
                              }}
                              className="p-1 text-gray-400 hover:text-duo-blue"
                              title="Oír palabra"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Example sentence for vocab & grammar */}
                  {currentCard.exampleSentence && (
                    <div className="mt-2 p-3 bg-gray-50 dark:bg-[#131f24] border border-duo-gray-200 dark:border-[#283842] rounded-xl text-left w-full">
                      <div className="text-xs font-bold font-['Noto_Sans_JP'] text-gray-700 dark:text-gray-300 flex items-center justify-between">
                        <span>{currentCard.exampleSentence}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            sound.speakJapanese(currentCard.exampleSentence!);
                          }}
                          className="p-1 text-gray-400 hover:text-duo-blue"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                        {currentCard.exampleTranslation}
                      </div>
                    </div>
                  )}

                  {currentCard.notes && (
                    <div className="text-[10px] text-gray-400 font-bold mt-2 text-center">
                      💡 {currentCard.notes}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* SRS Level Indicator Dots */}
            <div className="flex justify-center items-center gap-1.5 w-full">
              {[0, 1, 2, 3].map((lvl) => (
                <div
                  key={lvl}
                  className={`w-2.5 h-2.5 rounded-full ${
                    lvl <= currentCard.srsLevel ? 'bg-duo-green' : 'bg-duo-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sticky Action Bar (Anchored right above Bottom Navigation) */}
          <div className="sticky bottom-[58px] z-20 w-full bg-gray-50/95 dark:bg-[#131f24]/95 backdrop-blur-md pt-2.5 pb-2 border-t border-duo-gray-200 dark:border-[#283842] shadow-[0_-4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_16px_rgba(0,0,0,0.4)] mt-4 transition-all">
            {/* Rating / SRS Action Buttons */}
            <div className="grid grid-cols-4 gap-2 w-full">
              <button
                onClick={() => handleRating('again')}
                disabled={isAnimating}
                className="py-2.5 bg-duo-red-light dark:bg-duo-red/25 border-2 border-duo-red text-duo-red-dark dark:text-red-300 font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-red hover:text-white transition-all flex flex-col items-center disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>Repetir</span>
                <span className="text-[9px] opacity-80">1 día</span>
              </button>
              <button
                onClick={() => handleRating('hard')}
                disabled={isAnimating}
                className="py-2.5 bg-duo-orange-light dark:bg-duo-orange/25 border-2 border-duo-orange text-duo-orange-dark dark:text-orange-300 font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-orange hover:text-white transition-all flex flex-col items-center disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>Difícil</span>
                <span className="text-[9px] opacity-80">2 días</span>
              </button>
              <button
                onClick={() => handleRating('good')}
                disabled={isAnimating}
                className="py-2.5 bg-duo-blue-light dark:bg-duo-blue/25 border-2 border-duo-blue text-duo-blue-dark dark:text-blue-300 font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue hover:text-white transition-all flex flex-col items-center disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>Bien</span>
                <span className="text-[9px] opacity-80">4 días</span>
              </button>
              <button
                onClick={() => handleRating('easy')}
                disabled={isAnimating}
                className="py-2.5 bg-duo-green-light dark:bg-duo-green/25 border-2 border-duo-green text-duo-green-dark dark:text-green-300 font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-green hover:text-white transition-all flex flex-col items-center disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>Fácil</span>
                <span className="text-[9px] opacity-80">7 días</span>
              </button>
            </div>

            {/* Prev / Next controls inside sticky bar */}
            <div className="flex justify-between items-center w-full pt-1.5 px-1">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 p-1 disabled:opacity-50 disabled:pointer-events-none"
              >
                ← Anterior
              </button>
              <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500">
                {filteredCards.length > 0 ? currentIndex + 1 : 0} de {filteredCards.length}
              </span>
              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 p-1 disabled:opacity-50 disabled:pointer-events-none"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400 font-bold">
          No hay tarjetas con ese criterio de búsqueda.
        </div>
      )}
    </div>
  );
};
