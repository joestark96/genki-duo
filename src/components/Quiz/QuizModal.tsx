import React, { useState, useEffect } from 'react';
import { X, Heart, Volume2, CheckCircle2, AlertCircle, ArrowRight, Trophy, Sparkles, RotateCcw, FastForward, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Exercise, LessonNode, UserProfile } from '../../types';
import { sound } from '../../services/sound';

interface QuizModalProps {
  lesson: LessonNode;
  userProfile: UserProfile;
  isJumpAhead?: boolean;
  onClose: () => void;
  onCompleteLesson: (nodeId: string, earnedXp: number, stars: number) => void;
  onPassJumpAhead?: (unitId: number) => void;
  onDeductHeart: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  lesson,
  userProfile,
  isJumpAhead = false,
  onClose,
  onCompleteLesson,
  onPassJumpAhead,
  onDeductHeart
}) => {
  const exercises = lesson.exercises;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Word-order state
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  // Match-pairs state
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);

  // Status: 'answering' | 'correct' | 'incorrect' | 'completed' | 'game-over' | 'jump-failed' | 'jump-passed'
  const [status, setStatus] = useState<'answering' | 'correct' | 'incorrect' | 'completed' | 'game-over' | 'jump-failed' | 'jump-passed'>('answering');
  const [heartsLeft, setHeartsLeft] = useState(userProfile.hearts);
  const [jumpChancesLeft, setJumpChancesLeft] = useState(3); // 3 mistakes allowed in Jump Ahead
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const currentExercise: Exercise | undefined = exercises[currentIndex];
  const progressPercent = Math.round(((currentIndex) / exercises.length) * 100);

  // Reset exercise state when moving to next
  useEffect(() => {
    if (currentExercise) {
      setSelectedOptionId(null);
      setSelectedLeft(null);
      setSelectedRight(null);
      setStatus('answering');

      if (currentExercise.type === 'word-order' && currentExercise.wordBank) {
        setAvailableWords([...currentExercise.wordBank].sort(() => Math.random() - 0.5));
        setSelectedWords([]);
      }

      if (currentExercise.type === 'match-pairs') {
        setMatchedPairs([]);
      }

      // Preload audio for instantaneous 0ms playback on click
      if (currentExercise.japaneseVoiceText) {
        sound.preloadAudio(currentExercise.japaneseVoiceText);
      }

      // Auto play audio for listening exercise
      if (currentExercise.japaneseVoiceText && currentExercise.type === 'listening') {
        setTimeout(() => {
          sound.speakJapanese(currentExercise.japaneseVoiceText!);
        }, 150);
      }
    }
  }, [currentIndex, currentExercise]);

  if (!currentExercise && status !== 'completed' && status !== 'game-over' && status !== 'jump-failed' && status !== 'jump-passed') {
    return null;
  }

  // Handle checking the answer
  const handleCheck = () => {
    if (!currentExercise) return;

    let isCorrect = false;

    if (currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening') {
      isCorrect = selectedOptionId === currentExercise.correctAnswerId;
    } else if (currentExercise.type === 'word-order') {
      isCorrect =
        selectedWords.length === currentExercise.correctSentence?.length &&
        selectedWords.every((word, idx) => word === currentExercise.correctSentence![idx]);
    } else if (currentExercise.type === 'match-pairs') {
      isCorrect = matchedPairs.length === (currentExercise.pairs?.length || 0);
    }

    if (isCorrect) {
      sound.playCorrect();
      if (currentExercise.japaneseVoiceText) {
        sound.speakJapanese(currentExercise.japaneseVoiceText);
      }
      setStatus('correct');
    } else {
      sound.playIncorrect();
      setWrongAttempts(prev => prev + 1);

      if (isJumpAhead) {
        const remaining = jumpChancesLeft - 1;
        setJumpChancesLeft(remaining);

        if (remaining <= 0) {
          setStatus('jump-failed');
        } else {
          setStatus('incorrect');
        }
      } else {
        const newHearts = Math.max(0, heartsLeft - 1);
        setHeartsLeft(newHearts);
        onDeductHeart();

        if (newHearts === 0) {
          setStatus('game-over');
        } else {
          setStatus('incorrect');
        }
      }
    }
  };

  // Continue to next question or complete
  const handleContinue = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed exam or lesson!
      sound.playLessonComplete();
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });

      if (isJumpAhead) {
        setStatus('jump-passed');
      } else {
        setStatus('completed');
        const stars = wrongAttempts === 0 ? 3 : wrongAttempts <= 2 ? 2 : 1;
        onCompleteLesson(lesson.id, 20, stars);
      }
    }
  };

  // Word order tap handlers
  const handleSelectWord = (word: string, index: number) => {
    sound.playTap();
    const newAvail = [...availableWords];
    newAvail.splice(index, 1);
    setAvailableWords(newAvail);
    setSelectedWords(prev => [...prev, word]);
  };

  const handleDeselectWord = (word: string, index: number) => {
    sound.playTap();
    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
    setAvailableWords(prev => [...prev, word]);
  };

  // Match pairs tap handler
  const handleMatchSelect = (type: 'left' | 'right', id: string) => {
    sound.playTap();
    if (type === 'left') {
      setSelectedLeft(id);
      if (selectedRight) {
        checkPairMatch(id, selectedRight);
      }
    } else {
      setSelectedRight(id);
      if (selectedLeft) {
        checkPairMatch(selectedLeft, id);
      }
    }
  };

  const checkPairMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      sound.playTap();
      const newMatched = [...matchedPairs, leftId];
      setMatchedPairs(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (newMatched.length === currentExercise?.pairs?.length) {
        sound.playCorrect();
        setStatus('correct');
      }
    } else {
      sound.playIncorrect();
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  };

  // Can user press "Comprobar"?
  const canCheck = () => {
    if (status !== 'answering') return false;
    if (currentExercise?.type === 'multiple-choice' || currentExercise?.type === 'listening') {
      return selectedOptionId !== null;
    }
    if (currentExercise?.type === 'word-order') {
      return selectedWords.length > 0;
    }
    if (currentExercise?.type === 'match-pairs') {
      return matchedPairs.length === currentExercise.pairs?.length;
    }
    return false;
  };

  // --- JUMP AHEAD PASSED SCREEN ---
  if (status === 'jump-passed') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-24 h-24 bg-duo-green rounded-full flex items-center justify-center mb-6 shadow-duo-btn border-4 border-duo-green-dark animate-bounce">
            <Trophy className="w-12 h-12 text-white stroke-[2.5px]" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-1">¡Prueba de Salto Superada!</h2>
          <p className="text-gray-500 font-bold text-sm mb-6">
            Has demostrado tu dominio con solo {3 - jumpChancesLeft} error(es). ¡Unidad saltada y siguiente nivel desbloqueado!
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-duo-yellow-light/60 border-2 border-duo-yellow rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-yellow-dark uppercase">EXP Ganada</span>
              <span className="text-2xl font-black text-duo-yellow-dark flex items-center gap-1">
                <Sparkles className="w-5 h-5" /> +100 XP
              </span>
            </div>
            <div className="bg-duo-green-light/60 border-2 border-duo-green rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-green-dark uppercase">Resultado</span>
              <span className="text-xl font-black text-duo-green">
                ¡Aprobado!
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (onPassJumpAhead) {
              onPassJumpAhead(lesson.unitId);
            }
            onClose();
          }}
          className="w-full max-w-sm mx-auto py-3.5 bg-duo-green hover:bg-duo-green-dark text-white font-black text-lg rounded-2xl shadow-[0_5px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider"
        >
          Desbloquear Siguiente Unidad
        </button>
      </div>
    );
  }

  // --- JUMP AHEAD FAILED SCREEN (3 ERRORS) ---
  if (status === 'jump-failed') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-20 h-20 bg-duo-red-light rounded-full flex items-center justify-center mb-6 border-4 border-duo-red shadow-md">
            <ShieldAlert className="w-10 h-10 text-duo-red" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">Prueba de Salto No Superada</h2>
          <p className="text-gray-600 font-bold text-sm mb-4">
            Cometiste 3 errores en el examen. Para saltarte una unidad completa debes demostrar un dominio de los temas.
          </p>
          <div className="p-4 bg-gray-50 border-2 border-duo-gray-200 rounded-2xl text-xs font-bold text-gray-500 mb-6">
            💡 Consejo: Te recomendamos completar las lecciones guiadas del roadmap para dominar el vocabulario y la gramática.
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full max-w-sm mx-auto py-3.5 bg-duo-blue text-white font-black text-lg rounded-2xl shadow-[0_5px_0_0_#1899d6] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" /> Volver a Practicar en la Unidad
        </button>
      </div>
    );
  }

  // --- STANDARD LESSON COMPLETED SCREEN ---
  if (status === 'completed') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-24 h-24 bg-duo-yellow rounded-full flex items-center justify-center mb-6 shadow-duo-btn border-4 border-duo-yellow-dark animate-bounce">
            <Trophy className="w-12 h-12 text-white stroke-[2.5px]" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-1">¡Lección completada!</h2>
          <p className="text-gray-500 font-bold text-sm mb-6">
            Has dominado: {lesson.title}
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-duo-yellow-light/60 border-2 border-duo-yellow rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-yellow-dark uppercase">EXP Ganada</span>
              <span className="text-2xl font-black text-duo-yellow-dark flex items-center gap-1">
                <Sparkles className="w-5 h-5" /> +20 XP
              </span>
            </div>
            <div className="bg-duo-green-light/60 border-2 border-duo-green rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-green-dark uppercase">Precisión</span>
              <span className="text-2xl font-black text-duo-green">
                {wrongAttempts === 0 ? '100%' : wrongAttempts === 1 ? '90%' : '80%'}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full max-w-sm mx-auto py-3.5 bg-duo-green hover:bg-duo-green-dark text-white font-black text-lg rounded-2xl shadow-[0_5px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider"
        >
          Continuar
        </button>
      </div>
    );
  }

  // --- GAME OVER SCREEN (Normal Lesson) ---
  if (status === 'game-over') {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-20 h-20 bg-duo-red-light rounded-full flex items-center justify-center mb-6 border-4 border-duo-red">
            <Heart className="w-10 h-10 text-duo-red" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">¡Te has quedado sin vidas!</h2>
          <p className="text-gray-500 font-bold text-sm mb-6">
            Repasa en la sección de Flashcards o recarga tus energías para volver a intentar.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full max-w-sm mx-auto py-3.5 bg-duo-blue text-white font-black text-lg rounded-2xl shadow-[0_5px_0_0_#1899d6] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" /> Entendido
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between">
      {/* Top Header: Close, Progress bar, Hearts / Chances */}
      <div className="px-4 py-3 flex items-center gap-4 max-w-2xl mx-auto w-full">
        <button
          onClick={onClose}
          className="p-1 rounded-xl text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6 stroke-[2.5px]" />
        </button>

        {/* Duolingo progress bar */}
        <div className="flex-1 h-3.5 bg-duo-gray-200 rounded-full overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isJumpAhead ? 'bg-duo-orange' : 'bg-duo-green'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Indicator: Jump Ahead Strikes or Normal Hearts */}
        {isJumpAhead ? (
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((strikeIdx) => {
              const isLost = strikeIdx > jumpChancesLeft;
              return (
                <Heart
                  key={strikeIdx}
                  className={`w-5 h-5 transition-all ${
                    isLost ? 'text-gray-300 fill-gray-200' : 'text-duo-red fill-duo-red animate-pulse'
                  }`}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-1 font-black text-duo-red">
            <Heart className="w-5 h-5 fill-duo-red animate-pulse" />
            <span>{heartsLeft}</span>
          </div>
        )}
      </div>

      {/* Jump Ahead Banner */}
      {isJumpAhead && (
        <div className="w-full bg-duo-orange-light/50 border-b-2 border-duo-orange/40 py-1.5 px-4 text-center">
          <span className="text-xs font-black text-duo-orange-dark uppercase tracking-wider flex items-center justify-center gap-1.5">
            <FastForward className="w-4 h-4" />
            Prueba de Salto de Unidad • Máximo 3 Errores ({jumpChancesLeft} vidas restantes)
          </span>
        </div>
      )}

      {/* Main Exercise Area */}
      <div className="flex-1 max-w-lg mx-auto w-full px-4 py-4 flex flex-col justify-center overflow-y-auto">
        {/* Exercise Prompt */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2">
            {currentExercise.prompt}
          </h2>

          {/* Subtitle / Japanese text if present (Hidden on word-order so it doesn't give away the answer!) */}
          {currentExercise.promptSub && currentExercise.type !== 'word-order' && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-3xl font-bold font-['Noto_Sans_JP'] text-gray-900 bg-gray-100 px-3 py-1.5 rounded-xl border-2 border-gray-200">
                {currentExercise.promptSub}
              </span>
              {currentExercise.japaneseVoiceText && currentExercise.type !== 'multiple-choice' && (
                <button
                  onClick={() => sound.speakJapanese(currentExercise.japaneseVoiceText!)}
                  className="p-2.5 bg-duo-blue text-white rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue-dark transition-all"
                  title="Escuchar pronunciación"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {/* Audio button for listening exercise (Duolingo Normal & Slow/Turtle speed) */}
          {currentExercise.type === 'listening' && (
            <div className="flex items-center justify-center gap-4 my-6">
              <button
                onClick={() => {
                  sound.playTap();
                  sound.speakJapanese(currentExercise.japaneseVoiceText!, 0.9);
                }}
                className="w-24 h-24 bg-duo-blue rounded-3xl flex flex-col items-center justify-center text-white shadow-[0_6px_0_0_#1899d6] active:translate-y-1 active:shadow-none hover:brightness-105 transition-all relative group"
                title="Escuchar audio"
              >
                <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-pulse pointer-events-none" />
                <Volume2 className="w-10 h-10 stroke-[2.5px]" />
                <span className="text-[11px] font-black uppercase mt-1 tracking-wider">Escuchar</span>
              </button>

              <button
                onClick={() => {
                  sound.playTap();
                  sound.speakJapanese(currentExercise.japaneseVoiceText!, 0.55);
                }}
                className="w-16 h-16 bg-duo-blue-light/80 border-2 border-duo-blue rounded-2xl flex flex-col items-center justify-center text-duo-blue-dark shadow-[0_4px_0_0_#1cb0f6] active:translate-y-1 active:shadow-none hover:bg-duo-blue-light transition-all"
                title="Escuchar lento (velocidad tortuga)"
              >
                <span className="text-2xl leading-none">🐢</span>
                <span className="text-[9px] font-black uppercase mt-0.5">Lento</span>
              </button>
            </div>
          )}
        </div>

        {/* 1. Multiple-choice & Listening Options */}
        {(currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening') && (
          <div className="grid grid-cols-1 gap-3">
            {currentExercise.options?.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => {
                    if (status === 'answering') {
                      sound.playTap();
                      setSelectedOptionId(option.id);
                    }
                  }}
                  className={`w-full text-left p-4 rounded-2xl font-bold border-2 transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? 'bg-duo-blue-light/50 border-duo-blue text-duo-blue-dark shadow-[0_4px_0_0_#1cb0f6]'
                      : 'bg-white border-duo-gray-200 text-gray-700 shadow-[0_4px_0_0_#e5e5e5] hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base md:text-lg">{option.text}</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-duo-blue bg-duo-blue text-white'
                        : 'border-duo-gray-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Word-order Exercise */}
        {currentExercise.type === 'word-order' && (
          <div className="flex flex-col gap-6">
            <div className="min-h-[70px] p-3 bg-gray-50 border-b-2 border-duo-gray-300 rounded-2xl flex flex-wrap gap-2 items-center">
              {selectedWords.length === 0 ? (
                <span className="text-gray-400 text-sm font-bold italic">Toca las palabras para formar la frase...</span>
              ) : (
                selectedWords.map((word, idx) => (
                  <button
                    key={`sel-${idx}`}
                    onClick={() => handleDeselectWord(word, idx)}
                    className="px-3.5 py-2 bg-white border-2 border-duo-gray-300 rounded-xl font-bold text-gray-800 shadow-duo-btn-sm active:translate-y-0.5 hover:bg-gray-100 transition-all font-['Noto_Sans_JP']"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center py-4">
              {availableWords.map((word, idx) => (
                <button
                  key={`avail-${idx}`}
                  onClick={() => handleSelectWord(word, idx)}
                  className="px-4 py-2.5 bg-white border-2 border-duo-gray-300 rounded-xl font-bold text-gray-800 shadow-[0_3px_0_0_#e5e5e5] active:translate-y-0.5 hover:border-duo-blue transition-all font-['Noto_Sans_JP']"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3. Match Pairs Exercise */}
        {currentExercise.type === 'match-pairs' && currentExercise.pairs && (
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2.5">
              {currentExercise.pairs.map(p => {
                const isMatched = matchedPairs.includes(p.id);
                const isSelected = selectedLeft === p.id;
                return (
                  <button
                    key={`left-${p.id}`}
                    disabled={isMatched}
                    onClick={() => handleMatchSelect('left', p.id)}
                    className={`p-3.5 rounded-2xl border-2 font-bold text-center transition-all ${
                      isMatched
                        ? 'opacity-30 border-duo-green bg-duo-green-light/40 text-duo-green-dark cursor-default'
                        : isSelected
                        ? 'border-duo-blue bg-duo-blue-light/50 shadow-[0_4px_0_0_#1cb0f6]'
                        : 'border-duo-gray-200 bg-white shadow-duo-card hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-lg font-['Noto_Sans_JP']">{p.left}</div>
                    {p.leftSub && <div className="text-[10px] text-gray-400 font-normal">{p.leftSub}</div>}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2.5">
              {currentExercise.pairs.map(p => {
                const isMatched = matchedPairs.includes(p.id);
                const isSelected = selectedRight === p.id;
                return (
                  <button
                    key={`right-${p.id}`}
                    disabled={isMatched}
                    onClick={() => handleMatchSelect('right', p.id)}
                    className={`p-3.5 rounded-2xl border-2 font-bold text-center transition-all flex items-center justify-center min-h-[64px] ${
                      isMatched
                        ? 'opacity-30 border-duo-green bg-duo-green-light/40 text-duo-green-dark cursor-default'
                        : isSelected
                        ? 'border-duo-blue bg-duo-blue-light/50 shadow-[0_4px_0_0_#1cb0f6]'
                        : 'border-duo-gray-200 bg-white shadow-duo-card hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm">{p.right}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer / Feedback Panel */}
      <div
        className={`p-4 border-t-2 transition-all duration-200 ${
          status === 'correct'
            ? 'bg-duo-green-light border-duo-green'
            : status === 'incorrect'
            ? 'bg-duo-red-light border-duo-red'
            : 'bg-white border-duo-gray-200'
        }`}
      >
        <div className="max-w-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {status === 'answering' && (
            <button
              onClick={handleCheck}
              disabled={!canCheck()}
              className={`w-full py-3.5 font-black text-lg rounded-2xl transition-all uppercase tracking-wider ${
                canCheck()
                  ? 'bg-duo-green hover:bg-duo-green-dark text-white shadow-[0_5px_0_0_#46a302] active:translate-y-1 active:shadow-none cursor-pointer'
                  : 'bg-duo-gray-200 text-duo-gray-400 cursor-not-allowed'
              }`}
            >
              Comprobar
            </button>
          )}

          {status === 'correct' && (
            <div className="w-full flex items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-duo-green flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-black text-duo-green-dark">¡Excelente!</h4>
                  <p className="text-xs font-bold text-duo-green-dark/80">{currentExercise.explanation}</p>
                </div>
              </div>
              <button
                onClick={handleContinue}
                className="py-3 px-6 bg-duo-green hover:bg-duo-green-dark text-white font-black text-base rounded-2xl shadow-[0_4px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all uppercase flex-shrink-0 flex items-center gap-1.5"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {status === 'incorrect' && (
            <div className="w-full flex items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-duo-red flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-black text-duo-red-dark">Respuesta incorrecta</h4>
                  <p className="text-xs font-bold text-duo-red-dark/80">{currentExercise.explanation}</p>
                </div>
              </div>
              <button
                onClick={handleContinue}
                className="py-3 px-6 bg-duo-red hover:bg-duo-red-dark text-white font-black text-base rounded-2xl shadow-[0_4px_0_0_#ea2b2b] active:translate-y-1 active:shadow-none transition-all uppercase flex-shrink-0"
              >
                Entendido
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
