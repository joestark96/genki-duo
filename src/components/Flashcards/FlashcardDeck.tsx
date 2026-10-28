import React, { useState } from 'react';
import { Volume2, RotateCw, Check, Clock, Eye, Sparkles, Filter, Search } from 'lucide-react';
import { Flashcard, FlashcardCategory } from '../../types';
import { sound } from '../../services/sound';

interface FlashcardDeckProps {
  cards: Flashcard[];
  onRateCard: (cardId: string, category: string, rating: 'again' | 'hard' | 'good' | 'easy') => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ cards, onRateCard }) => {
  const [selectedCategory, setSelectedCategory] = useState<FlashcardCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRomaji, setShowRomaji] = useState(true);

  // Filter cards
  const filteredCards = cards.filter(c => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'hiragana' || selectedCategory === 'katakana'
        ? c.category === selectedCategory || c.category === 'hiragana' || c.category === 'katakana'
        : c.category === selectedCategory;

    const matchesSearch =
      searchQuery === '' ||
      c.japanese.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.spanish.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleFlip = () => {
    sound.playTap();
    setIsFlipped(!isFlipped);
  };

  const handleRating = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;
    sound.playTap();
    onRateCard(currentCard.id, currentCard.category, rating);
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back or done
    }
  };

  const handleNext = () => {
    sound.playTap();
    setIsFlipped(false);
    setCurrentIndex((currentIndex + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    sound.playTap();
    setIsFlipped(false);
    setCurrentIndex((currentIndex - 1 + filteredCards.length) % filteredCards.length);
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 py-3 flex flex-col items-center">
      {/* Category Pills */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', label: 'Todas' },
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
                : 'bg-white border-2 border-duo-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

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
          placeholder="Buscar palabra, kanji o significado..."
          className="w-full pl-9 pr-3 py-2 text-xs font-bold bg-white border-2 border-duo-gray-200 rounded-xl focus:border-duo-blue focus:outline-none"
        />
      </div>

      {/* Progress Counter */}
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

      {/* Main Flashcard Container with 3D Flip */}
      {currentCard ? (
        <div className="w-full my-3 perspective-1000">
          <div
            onClick={handleFlip}
            className={`w-full min-h-[300px] bg-white border-2 border-duo-gray-300 rounded-3xl p-6 shadow-duo-card cursor-pointer flex flex-col justify-between transition-all duration-300 relative select-none hover:border-duo-blue ${
              isFlipped ? 'bg-gradient-to-br from-white to-duo-blue-light/20' : ''
            }`}
          >
            {/* Top Card Info Bar */}
            <div className="flex justify-between items-center w-full">
              <span className="px-2.5 py-1 bg-duo-gray-100 border border-duo-gray-300 text-gray-600 text-[10px] font-black rounded-lg uppercase tracking-wider">
                {currentCard.category} {currentCard.genkiLesson ? `• Genki L${currentCard.genkiLesson}` : ''}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sound.speakJapanese(currentCard.japanese);
                }}
                className="p-2 bg-duo-blue text-white rounded-xl shadow-duo-btn-sm hover:bg-duo-blue-dark transition-all"
                title="Escuchar audio"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Card Center Content */}
            <div className="flex flex-col items-center justify-center my-6 text-center">
              {!isFlipped ? (
                /* FRONT OF CARD */
                <>
                  <div className="text-5xl md:text-6xl font-bold font-['Noto_Sans_JP'] text-gray-900 tracking-wide mb-3">
                    {currentCard.japanese}
                  </div>
                  {showRomaji && (
                    <div className="text-base font-extrabold text-duo-blue">
                      {currentCard.romaji}
                    </div>
                  )}
                  <div className="mt-4 text-xs font-bold text-gray-400 flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Toca para ver el significado</span>
                  </div>
                </>
              ) : (
                /* BACK OF CARD */
                <div className="animate-fade-in flex flex-col items-center">
                  <div className="text-xl font-bold font-['Noto_Sans_JP'] text-gray-500 mb-1">
                    {currentCard.furigana}
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
                    {currentCard.spanish}
                  </div>

                  {currentCard.exampleSentence && (
                    <div className="mt-2 p-3 bg-gray-50 border border-duo-gray-200 rounded-xl text-left w-full">
                      <div className="text-xs font-bold font-['Noto_Sans_JP'] text-gray-700">
                        {currentCard.exampleSentence}
                      </div>
                      <div className="text-[11px] font-medium text-gray-500 mt-0.5">
                        {currentCard.exampleTranslation}
                      </div>
                    </div>
                  )}

                  {currentCard.notes && (
                    <div className="text-[10px] text-gray-400 font-bold mt-2">
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

          {/* Rating / SRS Action Buttons */}
          <div className="grid grid-cols-4 gap-2 w-full mt-3">
            <button
              onClick={() => handleRating('again')}
              className="py-2.5 bg-duo-red-light border-2 border-duo-red text-duo-red-dark font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-red hover:text-white transition-all flex flex-col items-center"
            >
              <span>Repetir</span>
              <span className="text-[9px] opacity-80">1 día</span>
            </button>
            <button
              onClick={() => handleRating('hard')}
              className="py-2.5 bg-duo-orange-light border-2 border-duo-orange text-duo-orange-dark font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-orange hover:text-white transition-all flex flex-col items-center"
            >
              <span>Difícil</span>
              <span className="text-[9px] opacity-80">2 días</span>
            </button>
            <button
              onClick={() => handleRating('good')}
              className="py-2.5 bg-duo-blue-light border-2 border-duo-blue text-duo-blue-dark font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue hover:text-white transition-all flex flex-col items-center"
            >
              <span>Bien</span>
              <span className="text-[9px] opacity-80">4 días</span>
            </button>
            <button
              onClick={() => handleRating('easy')}
              className="py-2.5 bg-duo-green-light border-2 border-duo-green text-duo-green-dark font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-green hover:text-white transition-all flex flex-col items-center"
            >
              <span>Fácil</span>
              <span className="text-[9px] opacity-80">7 días</span>
            </button>
          </div>

          {/* Prev / Next controls */}
          <div className="flex justify-between w-full mt-3">
            <button
              onClick={handlePrev}
              className="text-xs font-bold text-gray-500 hover:text-gray-800 p-2"
            >
              ← Anterior
            </button>
            <button
              onClick={handleNext}
              className="text-xs font-bold text-gray-500 hover:text-gray-800 p-2"
            >
              Siguiente →
            </button>
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
