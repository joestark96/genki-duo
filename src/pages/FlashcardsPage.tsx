import React from 'react';
import { Flashcard } from '../types';
import { FlashcardDeck } from '../components/Flashcards/FlashcardDeck';

interface FlashcardsPageProps {
  cards: Flashcard[];
  onRateCard: (cardId: string, category: string, rating: 'again' | 'hard' | 'good' | 'easy') => void;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ cards, onRateCard }) => {
  return (
    <div className="w-full pb-20">
      <div className="max-w-md mx-auto px-4 pt-4">
        <h1 className="text-xl font-black text-gray-800">Flashcards Genki & JLPT</h1>
        <p className="text-xs font-bold text-gray-500">
          Repasa Kanjis (N5, N4, N3), Kanas, Vocabulario y Frases con repetición espaciada (SRS).
        </p>
      </div>
      <FlashcardDeck cards={cards} onRateCard={onRateCard} />
    </div>
  );
};

