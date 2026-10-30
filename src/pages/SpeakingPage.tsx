import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Mic,
  MicOff,
  Volume2,
  MessageCircle,
  Sparkles,
  Trophy,
  RefreshCw,
  CheckCircle2,
  ChevronRight,
  Users,
  Play,
  SkipForward
} from 'lucide-react';
import { Unit, DialogueLine } from '../types';
import { genkiVocabulary } from '../data/vocabularyData';
import { SpeechPracticeButton } from '../components/SpeechPracticeButton';
import { sound } from '../services/sound';
import { speechService } from '../services/speechRecognitionService';
import { computeJapaneseSpeechMatch } from '../utils/japaneseSpeechMatcher';

interface SpeakingPageProps {
  units: Unit[];
  showRomaji?: boolean;
}

type SpeakingTab = 'phrases' | 'roleplay' | 'challenge';

interface ConversationalPhrase {
  id: string;
  category: string;
  japanese: string;
  furigana: string;
  romaji: string;
  spanish: string;
  tip?: string;
}

const SURVIVAL_PHRASES: ConversationalPhrase[] = [
  // Saludos y Cortesía
  {
    id: 'sp-1',
    category: 'Saludos',
    japanese: 'おはようございます。',
    furigana: 'おはようございます。',
    romaji: 'Ohayou gozaimasu.',
    spanish: 'Buenos días (formal).',
    tip: 'Alarga ligeramente la "o" final en "ou".'
  },
  {
    id: 'sp-2',
    category: 'Saludos',
    japanese: 'はじめまして。よろしくお願いします。',
    furigana: 'はじめまして。よろしくおねがいします。',
    romaji: 'Hajimemashite. Yoroshiku onegaishimasu.',
    spanish: 'Mucho gusto. Encantado de conocerte.',
    tip: 'La "u" final de "masu" casi no suena.'
  },
  {
    id: 'sp-3',
    category: 'Saludos',
    japanese: 'ありがとうございます。',
    furigana: 'ありがとうございます。',
    romaji: 'Arigatou gozaimasu.',
    spanish: 'Muchas gracias.',
    tip: 'Pronuncia la "r" suave como en "pero".'
  },
  {
    id: 'sp-4',
    category: 'Saludos',
    japanese: 'すみません、ちょっといいですか。',
    furigana: 'すみません、ちょっといいですか。',
    romaji: 'Sumimasen, chotto ii desu ka.',
    spanish: 'Disculpe, ¿tiene un momento?',
    tip: 'Haz una breve pausa en la doble "t" de "chotto".'
  },
  // Restaurante
  {
    id: 'sp-5',
    category: 'Restaurante',
    japanese: 'すみません、注文をお願いします。',
    furigana: 'すみません、ちゅうもんをおねがいします。',
    romaji: 'Sumimasen, chuumon o onegaishimasu.',
    spanish: 'Disculpe, quisiera ordenar por favor.',
    tip: 'Úsala para llamar al mesero en cualquier restaurante.'
  },
  {
    id: 'sp-6',
    category: 'Restaurante',
    japanese: 'これをください。',
    furigana: 'これをください。',
    romaji: 'Kore o kudasai.',
    spanish: 'Me da esto, por favor.',
    tip: 'Ideal señalando el menú.'
  },
  {
    id: 'sp-7',
    category: 'Restaurante',
    japanese: 'お会計をお願いします。',
    furigana: 'おかいけいをおねがいします。',
    romaji: 'Okaikei o onegaishimasu.',
    spanish: 'La cuenta, por favor.',
    tip: 'Muy útil al terminar de comer.'
  },
  {
    id: 'sp-8',
    category: 'Restaurante',
    japanese: 'とてもおいしかったです。ごちそうさまでした。',
    furigana: 'とてもおいしかったです。ごちそうさまでした。',
    romaji: 'Totemo oishikatta desu. Gochisousama deshita.',
    spanish: 'Estuvo delicioso. Muchas gracias por la comida.',
    tip: 'Expresión tradicional al salir de un restaurante.'
  },
  // Compras
  {
    id: 'sp-9',
    category: 'Compras',
    japanese: 'これはいくらですか。',
    furigana: 'これはいくらですか。',
    romaji: 'Kore wa ikura desu ka.',
    spanish: '¿Cuánto cuesta esto?',
    tip: 'Eleva la entonación en "ka" para indicar pregunta.'
  },
  {
    id: 'sp-10',
    category: 'Compras',
    japanese: 'クレジットカードで払えますか。',
    furigana: 'クレジットカードではらえますか。',
    romaji: 'Kurejitto kaado de haraemasu ka.',
    spanish: '¿Puedo pagar con tarjeta de crédito?',
    tip: 'Forma potencial del verbo 払う (harau).'
  },
  {
    id: 'sp-11',
    category: 'Compras',
    japanese: '袋はいりません。',
    furigana: 'ふくろはいりません。',
    romaji: 'Fukuro wa irimasen.',
    spanish: 'No necesito bolsa.',
    tip: 'Te lo preguntarán siempre en los konbini.'
  },
  // Direcciones y Transporte
  {
    id: 'sp-12',
    category: 'Direcciones',
    japanese: '駅はどこですか。',
    furigana: 'えきはどこですか。',
    romaji: 'Eki wa doko desu ka.',
    spanish: '¿Dónde está la estación?',
    tip: 'Reemplaza 駅 (eki) por トイレ (toire) o ホテル (hoteru).'
  },
  {
    id: 'sp-13',
    category: 'Direcciones',
    japanese: 'この電車は東京に行きますか。',
    furigana: 'このでんしゃはとうきょうにいきますか。',
    romaji: 'Kono densha wa Toukyou ni ikimasu ka.',
    spanish: '¿Este tren va a Tokio?',
    tip: 'Fundamental en las plataformas de tren.'
  },
  // Emergencias y Ayuda
  {
    id: 'sp-14',
    category: 'Ayuda',
    japanese: 'もう一度ゆっくり言ってください。',
    furigana: 'もういちどゆっくりいってください。',
    romaji: 'Mou ichido yukkuri itte kudasai.',
    spanish: 'Por favor dígalo otra vez más despacio.',
    tip: 'Pausa bien marcada en "yukkuri" e "itte".'
  },
  {
    id: 'sp-15',
    category: 'Ayuda',
    japanese: '日本語が少ししか話せません。',
    furigana: 'にほんごがすこししかはなせません。',
    romaji: 'Nihongo ga sukoshi shika hanasemasen.',
    spanish: 'Solo puedo hablar un poco de japonés.',
    tip: 'Usa しか + negativo para decir "solo un poco".'
  }
];

function computeSimilarity(spoken: string, ...targets: (string | undefined)[]): number {
  return computeJapaneseSpeechMatch(spoken, targets);
}

export const SpeakingPage: React.FC<SpeakingPageProps> = ({ units, showRomaji = true }) => {
  const [activeTab, setActiveTab] = useState<SpeakingTab>('phrases');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  // Roleplay state
  const dialogueUnits = useMemo(() => units.filter(u => u.id >= 1), [units]);
  const [roleplayUnitId, setRoleplayUnitId] = useState<number>(dialogueUnits[0]?.id || 1);
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState<number>(0);
  const [selectedRoleSpeaker, setSelectedRoleSpeaker] = useState<string>('');
  const [roleplayStep, setRoleplayStep] = useState<number>(0);

  // Challenge state
  const [challengeIndex, setChallengeIndex] = useState<number>(0);
  const [challengeStreak, setChallengeStreak] = useState<number>(0);
  const [challengeCompleted, setChallengeCompleted] = useState<number>(0);
  const [isRecordingChallenge, setIsRecordingChallenge] = useState<boolean>(false);
  const [challengeResult, setChallengeResult] = useState<{
    transcript: string;
    score: number;
    error?: string;
  } | null>(null);

  // Combine survival phrases + vocabulary example sentences
  const allPhrases: ConversationalPhrase[] = useMemo(() => {
    const vocabSentences: ConversationalPhrase[] = genkiVocabulary
      .filter(v => v.exampleSentence && v.exampleTranslation)
      .slice(0, 60)
      .map(v => ({
        id: `voc-sp-${v.id}`,
        category: 'Oraciones Genki',
        japanese: v.exampleSentence!,
        furigana: v.furigana,
        romaji: v.romaji,
        spanish: v.exampleTranslation!,
        tip: `Palabra clave: ${v.japanese} (${v.spanish})`
      }));
    return [...SURVIVAL_PHRASES, ...vocabSentences];
  }, []);

  const categories = ['Todas', 'Saludos', 'Restaurante', 'Compras', 'Direcciones', 'Ayuda', 'Oraciones Genki'];

  const filteredPhrases = useMemo(() => {
    if (selectedCategory === 'Todas') return allPhrases;
    return allPhrases.filter(p => p.category === selectedCategory);
  }, [allPhrases, selectedCategory]);

  // Extract ALL dialogues available in the selected unit
  const unitDialogues = useMemo(() => {
    const unit = dialogueUnits.find(u => u.id === roleplayUnitId) || dialogueUnits[0];
    if (!unit) return [];
    const list: { id: string; title: string; context?: string; lines: DialogueLine[] }[] = [];
    unit.nodes.forEach(node => {
      node.exercises.forEach((ex, exIdx) => {
        if (ex.dialogueLines && ex.dialogueLines.length > 0) {
          list.push({
            id: ex.id || `dlg-${unit.id}-${exIdx}`,
            title: ex.dialogueTitle || node.title || `Diálogo ${list.length + 1}`,
            context: ex.dialogueContext,
            lines: ex.dialogueLines
          });
        }
      });
    });
    return list;
  }, [dialogueUnits, roleplayUnitId]);

  const activeDialogue = unitDialogues[selectedDialogueIndex] || unitDialogues[0];
  const currentDialogueLines = activeDialogue?.lines || [];

  const dialogueSpeakers = useMemo(() => {
    const list: string[] = [];
    currentDialogueLines.forEach(line => {
      if (!list.includes(line.speaker)) list.push(line.speaker);
    });
    return list;
  }, [currentDialogueLines]);

  const activeRoleSpeaker = selectedRoleSpeaker && dialogueSpeakers.includes(selectedRoleSpeaker)
    ? selectedRoleSpeaker
    : dialogueSpeakers[0] || '';

  // Auto-Roleplay interactive state
  const [isAutoRoleplay, setIsAutoRoleplay] = useState<boolean>(false);
  const [autoStatus, setAutoStatus] = useState<'idle' | 'partner-speaking' | 'listening' | 'success' | 'retry'>('idle');
  const [autoFeedback, setAutoFeedback] = useState<{ transcript: string; score: number; error?: string } | null>(null);
  const autoTimerRef = useRef<number | null>(null);
  const roleplayLineRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const stopAutoRoleplay = useCallback(() => {
    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setIsAutoRoleplay(false);
    setAutoStatus('idle');
    setAutoFeedback(null);
    speechService.stopListening();
    sound.stopSpeech();
  }, []);

  // Cleanup timers & audio on unmount or tab switch
  useEffect(() => {
    return () => {
      if (autoTimerRef.current) {
        window.clearTimeout(autoTimerRef.current);
      }
      speechService.stopListening();
      sound.stopSpeech();
    };
  }, []);

  // Reset auto roleplay on unit, dialogue or speaker change
  useEffect(() => {
    stopAutoRoleplay();
  }, [roleplayUnitId, selectedDialogueIndex, selectedRoleSpeaker, stopAutoRoleplay]);

  // Handle user speech in auto mode
  const runUserSpeechStep = useCallback(async (line: { japanese: string; audioText?: string; romaji?: string; furigana?: string }) => {
    setAutoStatus('listening');
    setAutoFeedback(null);

    await speechService.startListening(
      (res) => {
        let bestTranscript = res.bestTranscript;
        let bestScore = 0;

        res.matches.forEach(m => {
          const sc = computeSimilarity(m, line.japanese, line.audioText, line.romaji, line.furigana);
          if (sc >= bestScore) {
            bestScore = sc;
            bestTranscript = m;
          }
        });

        if (bestScore >= 60) {
          sound.playCorrect();
          setAutoStatus('success');
          setAutoFeedback({ transcript: bestTranscript, score: bestScore });

          autoTimerRef.current = window.setTimeout(() => {
            setAutoStatus('idle');
            setRoleplayStep(prev => prev + 1);
          }, 1400);
        } else {
          sound.playTap();
          setAutoStatus('retry');
          setAutoFeedback({
            transcript: bestTranscript,
            score: bestScore,
            error: bestTranscript ? `Se escuchó: 「${bestTranscript}」 (${bestScore}%)` : 'Pronunciación no reconocida'
          });
        }
      },
      (errorMsg) => {
        setAutoStatus('retry');
        setAutoFeedback({
          transcript: '',
          score: 0,
          error: errorMsg || 'Error al capturar voz'
        });
      },
      () => {
        // Closed mic
      }
    );
  }, []);

  // Coordinator effect for Auto-Roleplay
  useEffect(() => {
    if (!isAutoRoleplay) return;

    if (autoTimerRef.current) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }

    if (roleplayStep >= currentDialogueLines.length) {
      sound.playLessonComplete();
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
      stopAutoRoleplay();
      return;
    }

    const line = currentDialogueLines[roleplayStep];
    if (!line) return;

    // Smooth scroll line into view
    const el = roleplayLineRefs.current[roleplayStep];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const isMyTurn = line.speaker === activeRoleSpeaker;

    if (!isMyTurn) {
      // AI Partner speaks automatically
      setAutoStatus('partner-speaking');
      setAutoFeedback(null);
      sound.speakJapanese(line.audioText || line.japanese, 0.9, line.speaker);

      const textLen = (line.audioText || line.japanese).length;
      const waitMs = Math.max(2600, textLen * 240 + 900);

      autoTimerRef.current = window.setTimeout(() => {
        setRoleplayStep(prev => prev + 1);
      }, waitMs);
    } else {
      // User's turn to speak
      runUserSpeechStep(line);
    }
  }, [isAutoRoleplay, roleplayStep, currentDialogueLines, activeRoleSpeaker, runUserSpeechStep, stopAutoRoleplay]);

  // Challenge pool
  const currentChallengePhrase = allPhrases[challengeIndex % allPhrases.length];

  const handleStartChallengeMic = async () => {
    if (isRecordingChallenge) {
      await speechService.stopListening();
      setIsRecordingChallenge(false);
      return;
    }

    setIsRecordingChallenge(true);
    setChallengeResult(null);

    await speechService.startListening(
      (res) => {
        let bestTranscript = res.bestTranscript;
        let bestScore = 0;

        res.matches.forEach(m => {
          const sc = computeSimilarity(
            m,
            currentChallengePhrase.japanese,
            currentChallengePhrase.furigana,
            currentChallengePhrase.romaji
          );
          if (sc >= bestScore) {
            bestScore = sc;
            bestTranscript = m;
          }
        });

        setChallengeResult({ transcript: bestTranscript, score: bestScore });

        if (bestScore >= 60) {
          sound.playCorrect();
          setChallengeCompleted(c => c + 1);
          setChallengeStreak(s => s + 1);
        } else {
          sound.playTap();
          setChallengeStreak(0);
        }
      },
      (errorMsg) => {
        setChallengeResult({
          transcript: '',
          score: 0,
          error: errorMsg
        });
      },
      () => {
        setIsRecordingChallenge(false);
      }
    );
  };

  const handleNextChallenge = () => {
    sound.playTap();
    setChallengeResult(null);
    setChallengeIndex(prev => (prev + 1) % allPhrases.length);
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col gap-4 animate-fade-in">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-white shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-sm">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight">Laboratorio de Habla</h1>
              <p className="text-xs font-bold text-white/90">
                Pronunciación en japonés con IA de voz y Roleplay
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end bg-white/15 px-3 py-1.5 rounded-2xl border border-white/20">
            <div className="flex items-center gap-1 text-xs font-black">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>{challengeCompleted} habladas</span>
            </div>
            <span className="text-[10px] font-bold text-white/80">Racha: 🔥 {challengeStreak}</span>
          </div>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="grid grid-cols-3 gap-1.5 bg-duo-gray-100 dark:bg-[#18272e] p-1.5 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842]">
        <button
          onClick={() => {
            sound.playTap();
            setActiveTab('phrases');
          }}
          className={`py-2 px-2 rounded-xl font-black text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'phrases'
              ? 'bg-white dark:bg-[#20333d] text-purple-600 dark:text-purple-400 shadow-sm'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Frases</span>
        </button>

        <button
          onClick={() => {
            sound.playTap();
            setActiveTab('roleplay');
          }}
          className={`py-2 px-2 rounded-xl font-black text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'roleplay'
              ? 'bg-white dark:bg-[#20333d] text-emerald-600 dark:text-emerald-400 shadow-sm'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Roleplay</span>
        </button>

        <button
          onClick={() => {
            sound.playTap();
            setActiveTab('challenge');
          }}
          className={`py-2 px-2 rounded-xl font-black text-[11px] flex items-center justify-center gap-1 transition-all cursor-pointer ${
            activeTab === 'challenge'
              ? 'bg-white dark:bg-[#20333d] text-pink-600 dark:text-pink-400 shadow-sm'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Reto Voz</span>
        </button>
      </div>

      {/* TAB 1: FRASES DE CONVERSACIÓN */}
      {activeTab === 'phrases' && (
        <div className="flex flex-col gap-3">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  sound.playTap();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-xl font-black text-xs whitespace-nowrap transition-all cursor-pointer border-2 ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                    : 'bg-white dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-duo-gray-200 dark:border-[#283842]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Phrases List */}
          <div className="flex flex-col gap-3">
            {filteredPhrases.map(phrase => (
              <div
                key={phrase.id}
                className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-sm flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400 font-black text-[10px] uppercase">
                    {phrase.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => sound.speakJapanese(phrase.japanese)}
                      className="px-2.5 py-1.5 rounded-xl bg-duo-blue/15 hover:bg-duo-blue text-duo-blue hover:text-white font-black text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Escuchar</span>
                    </button>
                    <SpeechPracticeButton
                      targetJapanese={phrase.japanese}
                      targetFurigana={phrase.furigana}
                    />
                  </div>
                </div>

                <div className="mt-1">
                  <p className="text-base font-black text-gray-800 dark:text-white leading-snug">
                    {phrase.japanese}
                  </p>
                  {phrase.furigana !== phrase.japanese && (
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-400 mt-0.5">
                      {phrase.furigana}
                    </p>
                  )}
                  {showRomaji && (
                    <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-0.5">
                      {phrase.romaji}
                    </p>
                  )}
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200 mt-1.5">
                    {phrase.spanish}
                  </p>
                </div>

                {phrase.tip && (
                  <div className="mt-1 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-[11px] font-bold text-amber-800 dark:text-amber-300">
                    💡 {phrase.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: ROLEPLAY INTERACTIVO DE DIÁLOGOS */}
      {activeTab === 'roleplay' && (
        <div className="flex flex-col gap-3">
          {/* Lesson & Speaker Selector */}
          <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-sm flex flex-col gap-3">
            <div>
              <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                1. Elige la Lección de Genki
              </label>
              <select
                value={roleplayUnitId}
                onChange={e => {
                  sound.playTap();
                  stopAutoRoleplay();
                  setRoleplayUnitId(Number(e.target.value));
                  setSelectedDialogueIndex(0);
                  setSelectedRoleSpeaker('');
                  setRoleplayStep(0);
                }}
                className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-[#131f24] border-2 border-duo-gray-200 dark:border-[#283842] text-xs font-black text-gray-800 dark:text-gray-100"
              >
                {dialogueUnits.map(u => (
                  <option key={u.id} value={u.id}>
                    {u.title} — {u.subtitle}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Selector de Diálogo / Escena */}
            {unitDialogues.length > 1 && (
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">
                  2. Elige el Diálogo / Escena ({unitDialogues.length} disponibles)
                </label>
                <div className="flex flex-col gap-1.5">
                  {unitDialogues.map((dlg, dIdx) => {
                    const isSelected = selectedDialogueIndex === dIdx || (!unitDialogues[selectedDialogueIndex] && dIdx === 0);
                    return (
                      <button
                        key={dlg.id}
                        type="button"
                        onClick={() => {
                          sound.playTap();
                          stopAutoRoleplay();
                          setSelectedDialogueIndex(dIdx);
                          setSelectedRoleSpeaker('');
                          setRoleplayStep(0);
                        }}
                        className={`p-2.5 rounded-xl text-left border-2 transition-all cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 text-purple-900 dark:text-purple-200 font-black ring-1 ring-purple-300'
                            : 'bg-gray-50 dark:bg-[#131f24] border-gray-200 dark:border-[#283842] text-gray-700 dark:text-gray-300 font-bold hover:border-purple-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${
                            isSelected ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                          }`}>
                            {dIdx + 1}
                          </span>
                          <div className="truncate">
                            <p className="text-xs truncate">{dlg.title}</p>
                            {dlg.context && (
                              <p className="text-[10px] text-gray-400 dark:text-gray-500 truncate font-normal">{dlg.context}</p>
                            )}
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-gray-200/60 dark:bg-gray-700/60 flex-shrink-0 font-black">
                          {dlg.lines.length} líneas
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {dialogueSpeakers.length > 0 && (
              <div>
                <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1.5">
                  {unitDialogues.length > 1 ? '3.' : '2.'} ¿Qué personaje quieres interpretar tú?
                </label>
                <div className="flex flex-wrap gap-2">
                  {dialogueSpeakers.map(sp => {
                    const isMe = sp === activeRoleSpeaker;
                    return (
                      <button
                        key={sp}
                        onClick={() => {
                          sound.playTap();
                          stopAutoRoleplay();
                          setSelectedRoleSpeaker(sp);
                          setRoleplayStep(0);
                        }}
                        className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 border-2 cursor-pointer transition-all ${
                          isMe
                            ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm'
                            : 'bg-gray-50 dark:bg-[#131f24] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-[#283842]'
                        }`}
                      >
                        <span>{isMe ? '🎙️ Tú:' : '👤'}</span>
                        <span>{sp}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Dialogue Lines */}
          {(() => {
            const isRoleplayComplete = currentDialogueLines.length > 0 && roleplayStep >= currentDialogueLines.length;

            return (
              <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-sm flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-[#283842] pb-3">
                  <div className="flex items-center gap-2">
                    {isRoleplayComplete ? (
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-xl border border-emerald-300 dark:border-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>¡Completado! ({currentDialogueLines.length} de {currentDialogueLines.length})</span>
                      </span>
                    ) : (
                      <span className="text-xs font-black text-gray-700 dark:text-gray-200">
                        Línea {Math.min(roleplayStep + 1, currentDialogueLines.length)} de {currentDialogueLines.length}
                      </span>
                    )}

                    <button
                      onClick={() => {
                        sound.playTap();
                        if (isAutoRoleplay) {
                          stopAutoRoleplay();
                        } else {
                          if (roleplayStep >= currentDialogueLines.length) {
                            setRoleplayStep(0);
                          }
                          setIsAutoRoleplay(true);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                        isAutoRoleplay
                          ? 'bg-purple-600 text-white shadow-[0_3px_0_0_#581c87] ring-2 ring-purple-400/40 animate-pulse'
                          : 'bg-purple-50 dark:bg-purple-950/40 border-2 border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-600 hover:text-white'
                      }`}
                      title="Modo Automático: La IA habla y espera que digas tu diálogo para avanzar fluidamente"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isAutoRoleplay ? 'Pausar Modo Auto' : 'Modo Automático'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        sound.playTap();
                        if (isAutoRoleplay) stopAutoRoleplay();
                        setRoleplayStep(0);
                      }}
                      className="px-2.5 py-1 rounded-xl bg-gray-100 dark:bg-[#131f24] text-[11px] font-black text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                    >
                      Reiniciar
                    </button>
                    <button
                      onClick={() => {
                        sound.playTap();
                        if (isRoleplayComplete) {
                          if (isAutoRoleplay) stopAutoRoleplay();
                          setRoleplayStep(0);
                          return;
                        }
                        if (isAutoRoleplay) {
                          setRoleplayStep(prev => prev + 1);
                          return;
                        }
                        const nextIdx = (roleplayStep + 1) % Math.max(1, currentDialogueLines.length);
                        setRoleplayStep(nextIdx);
                        const nextLine = currentDialogueLines[nextIdx];
                        if (nextLine && nextLine.speaker !== activeRoleSpeaker) {
                          sound.speakJapanese(nextLine.audioText || nextLine.japanese, 0.9, nextLine.speaker);
                        }
                      }}
                      className={`px-3 py-1 rounded-xl text-[11px] font-black flex items-center gap-1 cursor-pointer transition-colors ${
                        isRoleplayComplete
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-emerald-500 text-white hover:bg-emerald-600'
                      }`}
                    >
                      <span>{isRoleplayComplete ? 'Repetir Diálogo' : 'Siguiente Línea'}</span>
                      {isRoleplayComplete ? <RefreshCw className="w-3 h-3" /> : <SkipForward className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                {/* Banner de felicitaciones al completar el diálogo */}
                {isRoleplayComplete && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-400 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-200 flex items-center justify-between gap-3 animate-fade-in">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xs flex-shrink-0 shadow-xs">
                        ✓
                      </div>
                      <div>
                        <p className="text-xs font-black">🎉 ¡Felicidades! Has completado todas las líneas</p>
                        <p className="text-[10px] text-emerald-700 dark:text-emerald-300 font-medium">
                          Puedes volver a practicarlo, cambiar de personaje o elegir otra escena.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        sound.playTap();
                        setRoleplayStep(0);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-[11px] font-black cursor-pointer hover:bg-emerald-700 shadow-xs flex-shrink-0"
                    >
                      Repetir
                    </button>
                  </div>
                )}

            {/* Live Auto-Roleplay Status Banner */}
            {isAutoRoleplay && (
              <div
                className={`p-3 rounded-2xl border-2 transition-all flex flex-col gap-2 ${
                  autoStatus === 'listening'
                    ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-400 text-purple-900 dark:text-purple-200 ring-2 ring-purple-300/30'
                    : autoStatus === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-900 dark:text-emerald-200'
                    : autoStatus === 'retry'
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 text-amber-900 dark:text-amber-200'
                    : 'bg-sky-50 dark:bg-sky-950/40 border-sky-400 text-sky-900 dark:text-sky-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {autoStatus === 'partner-speaking' && (
                      <>
                        <Volume2 className="w-4 h-4 text-sky-600 animate-pulse flex-shrink-0" />
                        <span className="text-xs font-black">
                          💬 {currentDialogueLines[roleplayStep]?.speaker} está hablando... Escucha.
                        </span>
                      </>
                    )}
                    {autoStatus === 'listening' && (
                      <>
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                        <span className="text-xs font-black">
                          🎙️ ¡Tu turno! Habla en japonés cerca del micrófono...
                        </span>
                      </>
                    )}
                    {autoStatus === 'success' && (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs font-black">
                          ¡Excelente pronunciación! 「{autoFeedback?.transcript}」 ({autoFeedback?.score}%) • Continuando...
                        </span>
                      </>
                    )}
                    {autoStatus === 'retry' && (
                      <span className="text-xs font-black">
                        ⚠️ {autoFeedback?.error || 'No se reconoció la frase.'} Intenta de nuevo.
                      </span>
                    )}
                  </div>

                  {autoStatus === 'retry' && (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => {
                          const line = currentDialogueLines[roleplayStep];
                          if (line) runUserSpeechStep(line);
                        }}
                        className="px-2.5 py-1 bg-purple-600 text-white rounded-lg font-black text-[10px] flex items-center gap-1 shadow-xs cursor-pointer hover:bg-purple-700"
                      >
                        <Mic className="w-3 h-3" />
                        <span>Reintentar</span>
                      </button>
                      <button
                        onClick={() => {
                          setRoleplayStep(prev => prev + 1);
                        }}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-black text-[10px] cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Saltar ⏩
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentDialogueLines.map((line, idx) => {
              const isMyRole = line.speaker === activeRoleSpeaker;
              const isCurrentStep = idx === roleplayStep;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    roleplayLineRefs.current[idx] = el;
                  }}
                  onClick={() => {
                    setRoleplayStep(idx);
                    sound.speakJapanese(line.audioText || line.japanese, 0.9, line.speaker);
                  }}
                  className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer scroll-mt-2 ${
                    isCurrentStep
                      ? isMyRole
                        ? 'bg-purple-50 dark:bg-purple-950/35 border-purple-500 ring-2 ring-purple-400/30'
                        : 'bg-sky-50 dark:bg-sky-950/35 border-sky-500 ring-2 ring-sky-400/30'
                      : 'bg-gray-50/70 dark:bg-[#131f24] border-gray-200 dark:border-[#283842] opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-black ${
                          isMyRole
                            ? 'bg-purple-600 text-white'
                            : 'bg-sky-500/15 text-sky-700 dark:text-sky-300'
                        }`}
                      >
                        {isMyRole ? `🎙️ TÚ (${line.speaker})` : `💬 ${line.speaker}`}
                      </span>
                      {isCurrentStep && isMyRole && (
                        <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 animate-pulse">
                          ¡Tu turno de hablar!
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5" onClick={e => e.stopPropagation()}>
                      <button
                        onClick={() => sound.speakJapanese(line.audioText || line.japanese, 0.9, line.speaker)}
                        className="p-1.5 rounded-xl bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842] text-duo-blue hover:bg-duo-blue hover:text-white transition-colors cursor-pointer"
                        title="Escuchar línea"
                      >
                        <Play className="w-3.5 h-3.5" />
                      </button>

                      {isMyRole && (
                        <SpeechPracticeButton
                          targetJapanese={line.japanese}
                          compact
                        />
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-black text-gray-800 dark:text-white">{line.japanese}</p>
                  {showRomaji && line.romaji && (
                    <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-0.5">
                      {line.romaji}
                    </p>
                  )}
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                    {line.spanish}
                  </p>
                </div>
              );
            })}
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 3: RETO DE VOZ RÁPIDO */}
      {activeTab === 'challenge' && currentChallengePhrase && (
        <div className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-5 shadow-sm flex flex-col items-center text-center gap-4">
          <div className="w-full flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-xl bg-pink-500/15 text-pink-600 dark:text-pink-400 font-black text-xs">
              Reto #{challengeIndex + 1} • {currentChallengePhrase.category}
            </span>
            <button
              onClick={() => sound.speakJapanese(currentChallengePhrase.japanese)}
              className="px-3 py-1.5 rounded-xl bg-duo-blue/15 text-duo-blue font-black text-xs flex items-center gap-1.5 cursor-pointer hover:bg-duo-blue hover:text-white transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Escuchar Ejemplo</span>
            </button>
          </div>

          <div className="my-2 flex flex-col items-center gap-1.5">
            <p className="text-2xl font-black text-gray-800 dark:text-white leading-snug">
              {currentChallengePhrase.japanese}
            </p>
            {currentChallengePhrase.furigana !== currentChallengePhrase.japanese && (
              <p className="text-xs font-bold text-gray-400">{currentChallengePhrase.furigana}</p>
            )}
            {showRomaji && (
              <p className="text-sm font-black text-purple-600 dark:text-purple-400">
                {currentChallengePhrase.romaji}
              </p>
            )}
            <p className="text-sm font-bold text-gray-500 dark:text-gray-300 mt-1">
              «{currentChallengePhrase.spanish}»
            </p>
          </div>

          {/* Big Microphone Trigger */}
          <button
            type="button"
            onClick={handleStartChallengeMic}
            className={`w-24 h-24 rounded-full flex flex-col items-center justify-center gap-1 font-black text-xs transition-all cursor-pointer shadow-lg ${
              isRecordingChallenge
                ? 'bg-red-500 text-white animate-pulse ring-8 ring-red-500/25'
                : 'bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:scale-105 active:scale-95'
            }`}
          >
            {isRecordingChallenge ? (
              <>
                <MicOff className="w-8 h-8" />
                <span className="text-[10px]">Escuchando...</span>
              </>
            ) : (
              <>
                <Mic className="w-8 h-8" />
                <span>Hablar</span>
              </>
            )}
          </button>

          {/* Result Box */}
          {challengeResult && (
            <div
              className={`w-full p-3.5 rounded-2xl border-2 flex flex-col items-center gap-1 animate-fade-in ${
                challengeResult.error
                  ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-400 text-amber-800 dark:text-amber-300'
                  : challengeResult.score >= 60
                  ? 'bg-duo-green-light/40 dark:bg-duo-green/20 border-duo-green text-duo-green-dark dark:text-duo-green'
                  : 'bg-rose-50 dark:bg-rose-950/30 border-rose-400 text-rose-700 dark:text-rose-300'
              }`}
            >
              {challengeResult.error ? (
                <span className="text-xs font-bold">{challengeResult.error}</span>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 text-sm font-black">
                    {challengeResult.score >= 60 ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <RefreshCw className="w-5 h-5" />
                    )}
                    <span>Precisión: {challengeResult.score}%</span>
                  </div>
                  <p className="text-xs font-bold">
                    Detectado: 「{challengeResult.transcript}」
                  </p>
                </>
              )}
            </div>
          )}

          {/* Next Challenge Button */}
          <button
            onClick={handleNextChallenge}
            className="w-full py-3 rounded-2xl bg-duo-green hover:bg-duo-green-dark text-white font-black text-sm flex items-center justify-center gap-1.5 shadow-[0_4px_0_0_#46a302] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
          >
            <span>Siguiente Frase</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
