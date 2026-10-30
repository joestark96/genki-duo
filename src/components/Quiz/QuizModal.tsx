import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, Volume2, CheckCircle2, AlertCircle, ArrowRight, Trophy, Sparkles, RotateCcw, FastForward, ShieldAlert, Dumbbell, BookOpen, Eye, EyeOff } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Exercise, ExerciseOption, LessonNode, MatchPair, UserProfile } from '../../types';
import { SpeechPracticeButton } from '../SpeechPracticeButton';
import { sound } from '../../services/sound';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getSpeakerAvatar(speaker: string, speakerIdx: number): string {
  const s = speaker.toLowerCase();
  if (s.includes('メアリー') || s.includes('mary')) return '👱‍♀️';
  if (s.includes('たけし') || s.includes('takeshi') || s.includes('きむら')) return '👦';
  if (s.includes('ロバート') || s.includes('robert')) return '👱‍♂️';
  if (s.includes('やました') || s.includes('先生') || s.includes('profesor')) return '👨‍🏫';
  if (s.includes('みちこ') || s.includes('michiko')) return '👩';
  if (s.includes('けん') || s.includes('ken')) return '🧑';
  if (s.includes('スー') || s.includes('sue')) return '👩‍🦱';
  if (s.includes('ジョン') || s.includes('john')) return '🧔';
  if (s.includes('ソラ') || s.includes('sora')) return '👧';
  if (s.includes('ホストマザー') || s.includes('おかあさん') || s.includes('madre')) return '👩‍🍳';
  if (s.includes('ぶちょう') || s.includes('しゃちょう') || s.includes('jefe')) return '👔';
  if (s.includes('いしゃ') || s.includes('doctor')) return '🩺';
  if (s.includes('どろぼう') || s.includes('ladrón')) return '🥷';
  if (
    s.includes('てんいん') ||
    s.includes('ウェイトレス') ||
    s.includes('えきいん') ||
    s.includes('不動産屋') ||
    s.includes('agente') ||
    s.includes('emplead') ||
    s.includes('camarer')
  ) {
    return '🧑‍💼';
  }
  return ['🗣️', '💬', '🙋', '💁'][speakerIdx % 4];
}

function getSpeakerChatTheme(speakerIdx: number) {
  const isRight = speakerIdx % 2 === 1;
  const themes = [
    {
      avatarBg: 'bg-sky-500 border-sky-600 text-white',
      badge: 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-700',
      bubble: 'bg-white dark:bg-[#15232b] border-sky-200 dark:border-sky-800/80 rounded-2xl rounded-tl-sm',
      activeBubble: 'bg-sky-50 dark:bg-sky-900/35 border-sky-500 ring-2 ring-sky-400/40 rounded-2xl rounded-tl-sm',
      romaji: 'text-sky-600 dark:text-sky-400',
      audioBtn: 'bg-sky-500/10 hover:bg-sky-500 text-sky-600 dark:text-sky-300 hover:text-white'
    },
    {
      avatarBg: 'bg-emerald-500 border-emerald-600 text-white',
      badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700',
      bubble: 'bg-emerald-50/90 dark:bg-emerald-950/35 border-emerald-300 dark:border-emerald-800/80 rounded-2xl rounded-tr-sm',
      activeBubble: 'bg-emerald-100/90 dark:bg-emerald-900/45 border-emerald-500 ring-2 ring-emerald-400/40 rounded-2xl rounded-tr-sm',
      romaji: 'text-emerald-700 dark:text-emerald-400',
      audioBtn: 'bg-emerald-500/15 hover:bg-emerald-500 text-emerald-700 dark:text-emerald-300 hover:text-white'
    },
    {
      avatarBg: 'bg-purple-500 border-purple-600 text-white',
      badge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700',
      bubble: 'bg-purple-50/85 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/80 rounded-2xl rounded-tl-sm',
      activeBubble: 'bg-purple-100/90 dark:bg-purple-900/40 border-purple-500 ring-2 ring-purple-400/40 rounded-2xl rounded-tl-sm',
      romaji: 'text-purple-600 dark:text-purple-400',
      audioBtn: 'bg-purple-500/10 hover:bg-purple-500 text-purple-600 dark:text-purple-300 hover:text-white'
    },
    {
      avatarBg: 'bg-amber-500 border-amber-600 text-white',
      badge: 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700',
      bubble: 'bg-amber-50/90 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/80 rounded-2xl rounded-tr-sm',
      activeBubble: 'bg-amber-100/90 dark:bg-amber-900/40 border-amber-500 ring-2 ring-amber-400/40 rounded-2xl rounded-tr-sm',
      romaji: 'text-amber-700 dark:text-amber-400',
      audioBtn: 'bg-amber-500/15 hover:bg-amber-500 text-amber-700 dark:text-amber-300 hover:text-white'
    }
  ];
  return {
    isRight,
    ...themes[speakerIdx % themes.length]
  };
}

interface QuizModalProps {
  lesson: LessonNode;
  userProfile: UserProfile;
  isJumpAhead?: boolean;
  isPractice?: boolean;
  onClose: () => void;
  onCompleteLesson: (nodeId: string, earnedXp: number, stars: number) => void;
  onPassJumpAhead?: (unitId: number) => void;
  onDeductHeart: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  lesson,
  userProfile,
  isJumpAhead = false,
  isPractice = false,
  onClose,
  onCompleteLesson,
  onPassJumpAhead,
  onDeductHeart
}) => {
  const exercises = lesson.exercises;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<ExerciseOption[]>([]);

  // Word-order state
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  // Match-pairs state
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [mismatchedPair, setMismatchedPair] = useState<{ left: string; right: string } | null>(null);
  const [shuffledLeftPairs, setShuffledLeftPairs] = useState<MatchPair[]>([]);
  const [shuffledRightPairs, setShuffledRightPairs] = useState<MatchPair[]>([]);

  // Status: 'answering' | 'correct' | 'incorrect' | 'completed' | 'game-over' | 'jump-failed' | 'jump-passed'
  const [status, setStatus] = useState<'answering' | 'correct' | 'incorrect' | 'completed' | 'game-over' | 'jump-failed' | 'jump-passed'>(
    !isJumpAhead && userProfile.hearts <= 0 ? 'game-over' : 'answering'
  );
  const [heartsLeft, setHeartsLeft] = useState(userProfile.hearts);
  const [jumpChancesLeft, setJumpChancesLeft] = useState(3); // 3 mistakes allowed in Jump Ahead
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showDialogueTranslation, setShowDialogueTranslation] = useState(true);
  const [activeDialogueLineIdx, setActiveDialogueLineIdx] = useState<number | null>(null);
  const dialogueLineRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Auto-scroll chat to active dialogue line during playback
  useEffect(() => {
    if (activeDialogueLineIdx !== null && activeDialogueLineIdx >= 0) {
      const el = dialogueLineRefs.current[activeDialogueLineIdx];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeDialogueLineIdx]);

  const currentExercise: Exercise | undefined = exercises[currentIndex];
  const progressPercent = Math.round(((currentIndex) / exercises.length) * 100);

  // Reset exercise state when moving to next
  useEffect(() => {
    if (currentExercise) {
      setSelectedOptionId(null);
      setSelectedLeft(null);
      setSelectedRight(null);
      setMismatchedPair(null);
      setActiveDialogueLineIdx(null);
      setStatus('answering');

      if (currentExercise.options) {
        setShuffledOptions(shuffleArray(currentExercise.options));
      } else {
        setShuffledOptions([]);
      }

      if (currentExercise.type === 'word-order' && currentExercise.wordBank) {
        setAvailableWords(shuffleArray(currentExercise.wordBank));
        setSelectedWords([]);
      }

      if (currentExercise.type === 'match-pairs' && currentExercise.pairs) {
        setMatchedPairs([]);
        // 1. Barajar la columna izquierda
        const lefts = shuffleArray(currentExercise.pairs);
        setShuffledLeftPairs(lefts);

        // 2. Barajar la columna derecha intercalada (evitar que queden en la misma fila horizontal)
        let rights = shuffleArray(currentExercise.pairs);
        if (currentExercise.pairs.length > 1) {
          let attempts = 0;
          while (attempts < 25 && rights.some((r, i) => r.id === lefts[i]?.id)) {
            rights = shuffleArray(currentExercise.pairs);
            attempts++;
          }
        }
        setShuffledRightPairs(rights);
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

    if (currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening' || currentExercise.type === 'dialogue-reading') {
      isCorrect = currentExercise.options ? selectedOptionId === currentExercise.correctAnswerId : true;
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
      } else if (isPractice) {
        setStatus('completed');
        onCompleteLesson(lesson.id, 25, 3);
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
      setMismatchedPair(null);

      if (newMatched.length === (currentExercise?.pairs?.length || 0)) {
        sound.playCorrect();
        setStatus('correct');
      }
    } else {
      sound.playIncorrect();
      setMismatchedPair({ left: leftId, right: rightId });
      setWrongAttempts(prev => prev + 1);

      if (isJumpAhead) {
        const remaining = jumpChancesLeft - 1;
        setJumpChancesLeft(remaining);
        if (remaining <= 0) {
          setStatus('jump-failed');
        }
      } else {
        const newHearts = Math.max(0, heartsLeft - 1);
        setHeartsLeft(newHearts);
        onDeductHeart();
        if (newHearts === 0) {
          setStatus('game-over');
        }
      }

      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setMismatchedPair(null);
      }, 500);
    }
  };

  // Can user press "Comprobar"?
  const canCheck = () => {
    if (status !== 'answering') return false;
    if (currentExercise?.type === 'multiple-choice' || currentExercise?.type === 'listening') {
      return selectedOptionId !== null;
    }
    if (currentExercise?.type === 'dialogue-reading') {
      return currentExercise.options ? selectedOptionId !== null : true;
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
      <div className="fixed inset-0 z-[100] bg-white dark:bg-[#131f24] dark:text-gray-100 flex flex-col justify-between p-6 animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-24 h-24 bg-duo-green rounded-full flex items-center justify-center mb-6 shadow-duo-btn border-4 border-duo-green-dark animate-bounce">
            <Trophy className="w-12 h-12 text-white stroke-[2.5px]" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 dark:text-gray-100 mb-1">¡Prueba de Salto Superada!</h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-6">
            Has demostrado tu dominio con solo {3 - jumpChancesLeft} error(es). ¡Unidad saltada y siguiente nivel desbloqueado!
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-duo-yellow-light/60 dark:bg-duo-yellow/10 border-2 border-duo-yellow rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-yellow-dark dark:text-duo-yellow uppercase">EXP Ganada</span>
              <span className="text-2xl font-black text-duo-yellow-dark dark:text-duo-yellow flex items-center gap-1">
                <Sparkles className="w-5 h-5" /> +100 XP
              </span>
            </div>
            <div className="bg-duo-green-light/60 dark:bg-duo-green/10 border-2 border-duo-green rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-green-dark dark:text-duo-green uppercase">Resultado</span>
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
      <div className="fixed inset-0 z-[100] bg-white dark:bg-[#131f24] dark:text-gray-100 flex flex-col justify-between p-6 animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-20 h-20 bg-duo-red-light dark:bg-duo-red/20 rounded-full flex items-center justify-center mb-6 border-4 border-duo-red shadow-md">
            <ShieldAlert className="w-10 h-10 text-duo-red" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 dark:text-gray-100 mb-2">Prueba de Salto No Superada</h2>
          <p className="text-gray-600 dark:text-gray-400 font-bold text-sm mb-4">
            Cometiste 3 errores en el examen. Para saltarte una unidad completa debes demostrar un dominio de los temas.
          </p>
          <div className="p-4 bg-gray-50 dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl text-xs font-bold text-gray-500 dark:text-gray-400 mb-6">
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

  // --- STANDARD LESSON OR PRACTICE COMPLETED SCREEN ---
  if (status === 'completed') {
    return (
      <div className="fixed inset-0 z-[100] bg-white dark:bg-[#131f24] dark:text-gray-100 flex flex-col justify-between p-6 animate-fade-in">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-duo-btn border-4 animate-bounce ${
            isPractice ? 'bg-duo-blue border-duo-blue-dark' : 'bg-duo-yellow border-duo-yellow-dark'
          }`}>
            {isPractice ? (
              <Dumbbell className="w-12 h-12 text-white stroke-[2.5px]" />
            ) : (
              <Trophy className="w-12 h-12 text-white stroke-[2.5px]" />
            )}
          </div>
          <h2 className="text-2xl font-black text-gray-800 dark:text-gray-100 mb-1">
            {isPractice ? '¡Entrenamiento completado!' : '¡Lección completada!'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-6">
            {isPractice
              ? `Has repasado ${lesson.exercises.length} ejercicios de tus lecciones cursadas.`
              : `Has dominado: ${lesson.title}`}
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-duo-yellow-light/60 dark:bg-duo-yellow/10 border-2 border-duo-yellow rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-yellow-dark dark:text-duo-yellow uppercase">EXP Ganada</span>
              <span className="text-2xl font-black text-duo-yellow-dark dark:text-duo-yellow flex items-center gap-1">
                <Sparkles className="w-5 h-5" /> {isPractice ? '+25 XP' : '+20 XP'}
              </span>
            </div>
            <div className="bg-duo-green-light/60 dark:bg-duo-green/10 border-2 border-duo-green rounded-2xl p-4 flex flex-col items-center">
              <span className="text-xs font-black text-duo-green-dark dark:text-duo-green uppercase">Precisión</span>
              <span className="text-2xl font-black text-duo-green">
                {wrongAttempts === 0 ? '100%' : `${Math.max(60, Math.round(((lesson.exercises.length - wrongAttempts) / lesson.exercises.length) * 100))}%`}
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
      <div className="fixed inset-0 z-[100] bg-white dark:bg-[#131f24] dark:text-gray-100 flex flex-col justify-between p-6">
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm mx-auto">
          <div className="w-20 h-20 bg-duo-red-light dark:bg-duo-red/20 rounded-full flex items-center justify-center mb-6 border-4 border-duo-red">
            <Heart className="w-10 h-10 text-duo-red" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 dark:text-gray-100 mb-2">¡Te has quedado sin vidas!</h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-6">
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
    <div className="fixed inset-0 z-[100] bg-white dark:bg-[#131f24] dark:text-gray-100 flex flex-col justify-between select-none">
      {/* Top Header: Close, Progress bar, Hearts / Chances / Practice indicator */}
      <div className="px-4 py-3 flex items-center gap-4 max-w-2xl mx-auto w-full">
        <button
          onClick={onClose}
          className="p-1 rounded-xl text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6 stroke-[2.5px]" />
        </button>

        {/* Duolingo progress bar */}
        <div className="flex-1 h-3.5 bg-duo-gray-200 dark:bg-gray-700 rounded-full overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isJumpAhead ? 'bg-duo-orange' : isPractice ? 'bg-duo-blue' : 'bg-duo-green'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Indicator: Jump Ahead Strikes, Practice Badge, or Normal Hearts */}
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
          <div className="flex items-center gap-2">
            {isPractice && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-duo-blue-light/60 dark:bg-duo-blue/20 rounded-xl border border-duo-blue text-duo-blue dark:text-duo-blue-light font-black text-[11px]">
                <Dumbbell className="w-3.5 h-3.5 stroke-[2.5px]" />
                <span>Práctica</span>
              </div>
            )}
            <div className="flex items-center gap-1 font-black text-duo-red">
              <Heart className="w-5 h-5 fill-duo-red animate-pulse" />
              <span>{heartsLeft}</span>
            </div>
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

      {/* Practice Mode Banner */}
      {isPractice && (
        <div className="w-full bg-duo-blue-light/50 dark:bg-duo-blue/20 border-b-2 border-duo-blue/40 py-1.5 px-4 text-center">
          <span className="text-xs font-black text-duo-blue-dark dark:text-duo-blue uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Dumbbell className="w-4 h-4" />
            Entrenamiento de Repaso • Ejercicios aleatorios de tus lecciones
          </span>
        </div>
      )}

      {/* Main Exercise Area */}
      <div className="flex-1 max-w-lg mx-auto w-full px-4 py-4 flex flex-col justify-start md:justify-center overflow-y-auto">
        {/* Interactive Introductory Dialogue / Reading Box (会話・読み物) */}
        {currentExercise.dialogueLines && currentExercise.dialogueLines.length > 0 && (
          <div className="mb-5 bg-gray-50 dark:bg-[#18272e] border-2 border-duo-blue/40 dark:border-[#283842] rounded-3xl p-4 shadow-sm">
            {/* Dialogue Header & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-gray-200 dark:border-[#283842]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-duo-blue text-white flex items-center justify-center shadow-sm">
                  <BookOpen className="w-4 h-4 stroke-[2.5px]" />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-black text-duo-blue uppercase tracking-wide">
                    {currentExercise.dialogueTitle || 'Diálogo Introductorio de la Lección (会話)'}
                  </h3>
                  {currentExercise.dialogueContext && (
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                      {currentExercise.dialogueContext}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    sound.playTap();
                    sound.speakDialogueSequence(
                      currentExercise.dialogueLines!,
                      0.9,
                      (idx) => {
                        setActiveDialogueLineIdx(idx);
                        const el = dialogueLineRefs.current[idx];
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                      }
                    );
                  }}
                  className="px-2.5 py-1.5 bg-duo-blue hover:bg-duo-blue-dark text-white rounded-xl font-black text-[11px] flex items-center gap-1 shadow-[0_3px_0_0_#1899d6] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  title="Escuchar todo el diálogo con voces por personaje"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Escuchar Todo</span>
                </button>

                <button
                  onClick={() => {
                    sound.playTap();
                    sound.speakDialogueSequence(
                      currentExercise.dialogueLines!,
                      0.70,
                      (idx) => {
                        setActiveDialogueLineIdx(idx);
                        const el = dialogueLineRefs.current[idx];
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                      }
                    );
                  }}
                  className="px-2 py-1.5 bg-duo-blue-light/80 dark:bg-duo-blue/20 border border-duo-blue text-duo-blue-dark dark:text-duo-blue rounded-xl font-black text-[11px] flex items-center gap-1 hover:brightness-105 transition-all cursor-pointer"
                  title="Escuchar lento con voces por personaje"
                >
                  <span>🐢</span>
                </button>

                <button
                  onClick={() => {
                    sound.playTap();
                    setShowDialogueTranslation(prev => !prev);
                  }}
                  className="px-2 py-1.5 bg-white dark:bg-[#22343d] border border-gray-300 dark:border-[#364954] text-gray-600 dark:text-gray-300 rounded-xl font-bold text-[11px] flex items-center gap-1 hover:border-duo-blue transition-all cursor-pointer"
                  title="Mostrar u ocultar traducción al español"
                >
                  {showDialogueTranslation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showDialogueTranslation ? 'ES' : 'ES'}</span>
                </button>
              </div>
            </div>

            {/* Participants Legend & Chat Thread */}
            {(() => {
              const uniqueSpeakers = Array.from(new Set(currentExercise.dialogueLines!.map(l => l.speaker)));
              return (
                <>
                  {/* Participants Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {uniqueSpeakers.map((spk, sIdx) => {
                        const theme = getSpeakerChatTheme(sIdx);
                        const avatar = getSpeakerAvatar(spk, sIdx);
                        return (
                          <span
                            key={`legend-${spk}`}
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black shadow-2xs ${theme.badge}`}
                          >
                            <span>{avatar}</span>
                            <span>{spk}</span>
                          </span>
                        );
                      })}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
                      Toca un mensaje para escucharlo 🔊
                    </span>
                  </div>

                  {/* Chat Messages Container */}
                  <div className="flex flex-col gap-3 max-h-[320px] overflow-y-auto scroll-smooth p-3 rounded-2xl bg-slate-100/80 dark:bg-[#0f191e] border border-gray-200/80 dark:border-[#24343d]">
                    {currentExercise.dialogueLines!.map((line, lIdx) => {
                      const isActiveLine = activeDialogueLineIdx === lIdx;
                      const speakerIdx = uniqueSpeakers.indexOf(line.speaker);
                      const theme = getSpeakerChatTheme(speakerIdx >= 0 ? speakerIdx : 0);
                      const avatar = getSpeakerAvatar(line.speaker, speakerIdx >= 0 ? speakerIdx : 0);

                      return (
                        <div
                          key={`dlg-line-${lIdx}`}
                          ref={(el) => {
                            dialogueLineRefs.current[lIdx] = el;
                          }}
                          onClick={() => {
                            setActiveDialogueLineIdx(lIdx);
                            sound.speakJapanese(line.audioText, 0.9, line.speaker);
                            const el = dialogueLineRefs.current[lIdx];
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                          }}
                          className={`flex items-start gap-2.5 cursor-pointer group scroll-mt-2 ${
                            theme.isRight ? 'flex-row-reverse' : 'flex-row'
                          }`}
                        >
                          {/* Speaker Avatar */}
                          <div
                            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-base shadow-sm flex-shrink-0 mt-0.5 transition-transform group-hover:scale-105 ${theme.avatarBg}`}
                            title={line.speaker}
                          >
                            {avatar}
                          </div>

                          {/* Chat Bubble */}
                          <div
                            className={`max-w-[82%] p-3 border-2 shadow-xs transition-all flex flex-col gap-1 ${
                              isActiveLine ? theme.activeBubble : `${theme.bubble} hover:brightness-98`
                            }`}
                          >
                            {/* Top Row: Speaker Name + Audio Button */}
                            <div
                              className={`flex items-center justify-between gap-3 ${
                                theme.isRight ? 'flex-row-reverse' : 'flex-row'
                              }`}
                            >
                              <span className={`px-2 py-0.5 rounded-md font-black text-[10px] uppercase tracking-wider ${theme.badge}`}>
                                {line.speaker}
                              </span>

                              <div className="flex items-center gap-1 flex-shrink-0">
                                <SpeechPracticeButton
                                  targetJapanese={line.japanese}
                                  targetFurigana={line.audioText}
                                  compact
                                />
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveDialogueLineIdx(lIdx);
                                    sound.speakJapanese(line.audioText, 0.9, line.speaker);
                                    const el = dialogueLineRefs.current[lIdx];
                                    if (el) {
                                      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                    }
                                  }}
                                  className={`p-1.5 rounded-xl transition-colors flex-shrink-0 ${theme.audioBtn}`}
                                  title="Escuchar esta línea"
                                >
                                  <Volume2 className={`w-3.5 h-3.5 ${isActiveLine ? 'animate-pulse' : ''}`} />
                                </button>
                              </div>
                            </div>

                            {/* Message Body */}
                            <p className="text-base md:text-lg font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 leading-snug mt-0.5">
                              {line.japanese}
                            </p>

                            {line.romaji && userProfile.showRomaji && (
                              <p className={`text-[11px] font-bold ${theme.romaji}`}>
                                {line.romaji}
                              </p>
                            )}

                            {showDialogueTranslation && (
                              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 pt-1 mt-0.5 border-t border-gray-200/60 dark:border-gray-700/50">
                                {line.spanish}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Exercise Prompt */}
        <div className="mb-4">
          <h2 className="text-lg md:text-2xl font-black text-gray-800 dark:text-gray-100 mb-2">
            {currentExercise.prompt}
          </h2>

          {/* Subtitle / Japanese text if present (Hidden on word-order so it doesn't give away the answer!) */}
          {currentExercise.promptSub && currentExercise.type !== 'word-order' && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-3xl font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-xl border-2 border-gray-200 dark:border-gray-700">
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
                  sound.speakJapanese(currentExercise.japaneseVoiceText!, 0.70);
                }}
                className="w-16 h-16 bg-duo-blue-light/80 dark:bg-duo-blue/20 border-2 border-duo-blue rounded-2xl flex flex-col items-center justify-center text-duo-blue-dark dark:text-duo-blue shadow-[0_4px_0_0_#1cb0f6] active:translate-y-1 active:shadow-none hover:bg-duo-blue-light transition-all"
                title="Escuchar lento (velocidad tortuga)"
              >
                <span className="text-2xl leading-none">🐢</span>
                <span className="text-[9px] font-black uppercase mt-0.5">Lento</span>
              </button>
            </div>
          )}
        </div>

        {/* 1. Multiple-choice, Listening & Dialogue-Reading Options */}
        {(currentExercise.type === 'multiple-choice' || currentExercise.type === 'listening' || currentExercise.type === 'dialogue-reading') && (
          <div className="grid grid-cols-1 gap-3">
            {(shuffledOptions.length > 0 ? shuffledOptions : currentExercise.options)?.map((option) => {
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
                      ? 'bg-duo-blue-light/50 dark:bg-duo-blue/20 border-duo-blue text-duo-blue-dark dark:text-duo-blue shadow-[0_4px_0_0_#1cb0f6]'
                      : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-700 dark:text-gray-200 shadow-[0_4px_0_0_#e5e5e5] dark:shadow-none hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-base md:text-lg">{option.text}</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? 'border-duo-blue bg-duo-blue text-white'
                        : 'border-duo-gray-300 dark:border-gray-600'
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
            <div className="min-h-[70px] p-3 bg-gray-50 dark:bg-[#18272e] border-b-2 border-duo-gray-300 dark:border-[#283842] rounded-2xl flex flex-wrap gap-2 items-center">
              {selectedWords.length === 0 ? (
                <span className="text-gray-400 dark:text-gray-500 text-sm font-bold italic">Toca las palabras para formar la frase...</span>
              ) : (
                selectedWords.map((word, idx) => (
                  <button
                    key={`sel-${idx}`}
                    onClick={() => handleDeselectWord(word, idx)}
                    className="px-3.5 py-2 bg-white dark:bg-[#283842] border-2 border-duo-gray-300 dark:border-[#3a4d59] rounded-xl font-bold text-gray-800 dark:text-gray-100 shadow-duo-btn-sm active:translate-y-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all font-['Noto_Sans_JP']"
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
                  className="px-4 py-2.5 bg-white dark:bg-[#283842] border-2 border-duo-gray-300 dark:border-[#3a4d59] rounded-xl font-bold text-gray-800 dark:text-gray-100 shadow-[0_3px_0_0_#e5e5e5] dark:shadow-none active:translate-y-0.5 hover:border-duo-blue transition-all font-['Noto_Sans_JP']"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3. Match Pairs Exercise */}
        {currentExercise.type === 'match-pairs' && (
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2.5">
              {shuffledLeftPairs.map(p => {
                const isMatched = matchedPairs.includes(p.id);
                const isSelected = selectedLeft === p.id;
                const isMismatched = mismatchedPair?.left === p.id;
                return (
                  <button
                    key={`left-${p.id}`}
                    disabled={isMatched}
                    onClick={() => handleMatchSelect('left', p.id)}
                    className={`p-3.5 rounded-2xl border-2 font-bold text-center transition-all ${
                      isMatched
                        ? 'opacity-30 border-duo-green bg-duo-green-light/40 dark:bg-duo-green/20 text-duo-green-dark dark:text-duo-green cursor-default'
                        : isMismatched
                        ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600 shadow-[0_4px_0_0_#ef4444] animate-shake'
                        : isSelected
                        ? 'border-duo-blue bg-duo-blue-light/50 dark:bg-duo-blue/20 shadow-[0_4px_0_0_#1cb0f6]'
                        : 'border-duo-gray-200 dark:border-[#283842] bg-white dark:bg-[#18272e] text-gray-800 dark:text-gray-100 shadow-duo-card dark:shadow-none hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="text-lg font-['Noto_Sans_JP']">{p.left}</div>
                    {p.leftSub && <div className="text-[10px] text-gray-400 dark:text-gray-500 font-normal">{p.leftSub}</div>}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2.5">
              {shuffledRightPairs.map(p => {
                const isMatched = matchedPairs.includes(p.id);
                const isSelected = selectedRight === p.id;
                const isMismatched = mismatchedPair?.right === p.id;
                return (
                  <button
                    key={`right-${p.id}`}
                    disabled={isMatched}
                    onClick={() => handleMatchSelect('right', p.id)}
                    className={`p-3.5 rounded-2xl border-2 font-bold text-center transition-all flex items-center justify-center min-h-[64px] ${
                      isMatched
                        ? 'opacity-30 border-duo-green bg-duo-green-light/40 dark:bg-duo-green/20 text-duo-green-dark dark:text-duo-green cursor-default'
                        : isMismatched
                        ? 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-600 shadow-[0_4px_0_0_#ef4444] animate-shake'
                        : isSelected
                        ? 'border-duo-blue bg-duo-blue-light/50 dark:bg-duo-blue/20 shadow-[0_4px_0_0_#1cb0f6]'
                        : 'border-duo-gray-200 dark:border-[#283842] bg-white dark:bg-[#18272e] text-gray-800 dark:text-gray-100 shadow-duo-card dark:shadow-none hover:bg-gray-50 dark:hover:bg-gray-800'
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
            ? 'bg-duo-green-light dark:bg-duo-green/20 border-duo-green'
            : status === 'incorrect'
            ? 'bg-duo-red-light dark:bg-duo-red/20 border-duo-red'
            : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842]'
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
