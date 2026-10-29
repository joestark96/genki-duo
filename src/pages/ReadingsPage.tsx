import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Volume2, Search, MessageSquare, FileText, Eye, EyeOff, ChevronDown, HelpCircle, CheckCircle2, Headphones, Square, SkipForward } from 'lucide-react';
import { Unit, Exercise } from '../types';
import { SpeechPracticeButton } from '../components/SpeechPracticeButton';
import { sound } from '../services/sound';

interface ReadingsPageProps {
  units: Unit[];
  showRomaji?: boolean;
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

export const ReadingsPage: React.FC<ReadingsPageProps> = ({ units, showRomaji = true }) => {
  // Filter only Lessons 1 to 23 (units with lesson dialogues & readings)
  const readingUnits = units.filter(u => u.id >= 1);
  const [selectedUnitId, setSelectedUnitId] = useState<number>(readingUnits[0]?.id || 1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'dialogues' | 'passages'>('all');
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [activeLineKey, setActiveLineKey] = useState<string | null>(null);
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [isPodcastPlaying, setIsPodcastPlaying] = useState<boolean>(false);
  const [podcastStepIdx, setPodcastStepIdx] = useState<number>(0);
  const podcastTimerRef = useRef<number | null>(null);
  const lineRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const stopPodcast = () => {
    if (podcastTimerRef.current) {
      window.clearTimeout(podcastTimerRef.current);
      podcastTimerRef.current = null;
    }
    sound.stopSpeech();
    setIsPodcastPlaying(false);
    setActiveLineKey(null);
  };

  const currentUnit = readingUnits.find(u => u.id === selectedUnitId) || readingUnits[0];

  // Collect dialogues (exercises with dialogueLines) and reading passages (from 読み書き編 nodes)
  const dialogueExercises: Exercise[] = [];
  const readingPassages: { nodeTitle: string; nodeJpTitle: string; exercise: Exercise }[] = [];

  if (currentUnit) {
    currentUnit.nodes.forEach(node => {
      const isReadingNode =
        node.japaneseTitle.includes('読み書き編') ||
        node.title.toLowerCase().includes('lectura del libro');

      node.exercises.forEach(ex => {
        if (ex.dialogueLines && ex.dialogueLines.length > 0) {
          dialogueExercises.push(ex);
        } else if (isReadingNode && (ex.promptSub || ex.japaneseVoiceText)) {
          readingPassages.push({
            nodeTitle: node.title,
            nodeJpTitle: node.japaneseTitle,
            exercise: ex
          });
        }
      });
    });
  }

  const query = searchQuery.toLowerCase().trim();

  const filteredDialogues = dialogueExercises.filter(ex => {
    if (activeFilter === 'passages') return false;
    if (!query) return true;
    const matchHeader =
      (ex.dialogueTitle && ex.dialogueTitle.toLowerCase().includes(query)) ||
      (ex.dialogueContext && ex.dialogueContext.toLowerCase().includes(query));
    const matchLines = ex.dialogueLines?.some(
      l =>
        l.speaker.toLowerCase().includes(query) ||
        l.japanese.toLowerCase().includes(query) ||
        (l.romaji && l.romaji.toLowerCase().includes(query)) ||
        l.spanish.toLowerCase().includes(query)
    );
    return matchHeader || matchLines;
  });

  const filteredPassages = readingPassages.filter(item => {
    if (activeFilter === 'dialogues') return false;
    if (!query) return true;
    const ex = item.exercise;
    return (
      item.nodeTitle.toLowerCase().includes(query) ||
      ex.prompt.toLowerCase().includes(query) ||
      (ex.promptSub && ex.promptSub.toLowerCase().includes(query)) ||
      ex.explanation.toLowerCase().includes(query)
    );
  });

  // Build Podcast Playlist from all dialogue lines in current lesson
  const podcastPlaylist: {
    lineKey: string;
    dialogueTitle: string;
    speaker: string;
    japanese: string;
    spanish: string;
    audioText: string;
  }[] = [];

  filteredDialogues.forEach((ex, dIdx) => {
    ex.dialogueLines?.forEach((line, lIdx) => {
      podcastPlaylist.push({
        lineKey: `${ex.id}-line-${lIdx}`,
        dialogueTitle: ex.dialogueTitle || `Diálogo ${dIdx + 1}`,
        speaker: line.speaker,
        japanese: line.japanese,
        spanish: line.spanish,
        audioText: line.audioText
      });
    });
  });

  // Podcast auto-player effect
  useEffect(() => {
    if (!isPodcastPlaying) {
      if (podcastTimerRef.current) {
        window.clearTimeout(podcastTimerRef.current);
      }
      return;
    }

    if (podcastStepIdx >= podcastPlaylist.length) {
      stopPodcast();
      setPodcastStepIdx(0);
      return;
    }

    const currentItem = podcastPlaylist[podcastStepIdx];
    setActiveLineKey(currentItem.lineKey);
    sound.speakJapanese(currentItem.audioText, 0.88, currentItem.speaker);

    // Smooth auto-scroll to the active dialogue bubble
    window.setTimeout(() => {
      const el = lineRefs.current[currentItem.lineKey];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 80);

    // Estimate speaking duration + shadowing pause
    const waitMs = Math.max(3800, currentItem.audioText.length * 260 + 1800);
    podcastTimerRef.current = window.setTimeout(() => {
      setPodcastStepIdx(prev => prev + 1);
    }, waitMs);

    return () => {
      if (podcastTimerRef.current) {
        window.clearTimeout(podcastTimerRef.current);
      }
    };
  }, [isPodcastPlaying, podcastStepIdx, selectedUnitId]);

  // Stop podcast on unmount
  useEffect(() => {
    return () => {
      if (podcastTimerRef.current) {
        window.clearTimeout(podcastTimerRef.current);
      }
      sound.stopSpeech();
    };
  }, []);

  const currentPodcastItem = isPodcastPlaying ? podcastPlaylist[podcastStepIdx] : null;

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-28 flex flex-col items-center relative">
      {/* Top Badge & Translation Toggle */}
      <div className="w-full flex items-center justify-between mb-4">
        <span className="text-xs font-black uppercase tracking-wider text-duo-blue flex items-center gap-1.5 bg-duo-blue-light/50 dark:bg-duo-blue/20 px-3 py-1 rounded-full border border-duo-blue/30">
          <MessageSquare className="w-3.5 h-3.5" /> Lecturas y Diálogos (会話・読み物)
        </span>

        <button
          onClick={() => {
            sound.playTap();
            setShowTranslation(prev => !prev);
          }}
          className="px-3 py-1 bg-white dark:bg-[#18272e] border-2 border-gray-200 dark:border-[#283842] hover:border-duo-blue rounded-full font-black text-xs text-gray-700 dark:text-gray-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
          title="Mostrar u ocultar traducción al español"
        >
          {showTranslation ? <EyeOff className="w-3.5 h-3.5 text-duo-blue" /> : <Eye className="w-3.5 h-3.5 text-gray-400" />}
          <span>{showTranslation ? 'Ocultar ES' : 'Mostrar ES'}</span>
        </button>
      </div>

      {/* Main Unit Banner */}
      {currentUnit && (
        <div
          className="w-full p-5 rounded-3xl text-white shadow-md mb-4 relative overflow-hidden transition-all"
          style={{ backgroundColor: currentUnit.themeColor }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2.5 py-0.5 bg-black/25 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {currentUnit.id <= 12 ? 'Genki I' : 'Genki II'} • Lección {currentUnit.id}
            </span>
            <span className="text-xs font-black opacity-90">
              {dialogueExercises.length} diálogos • {readingPassages.length} lecturas
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-black tracking-tight mb-1">
            {currentUnit.title}
          </h1>
          <p className="text-xs font-bold opacity-90 leading-relaxed mb-3">
            {currentUnit.subtitle}
          </p>

          {/* Podcast Hands-Free Bar inside Banner */}
          {podcastPlaylist.length > 0 && (
            <div className="p-3 rounded-2xl bg-black/25 backdrop-blur-xs border border-white/20 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className={`w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 ${isPodcastPlaying ? 'animate-pulse' : ''}`}>
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-black text-white truncate">
                    {isPodcastPlaying && currentPodcastItem
                      ? `${currentPodcastItem.speaker}: ${currentPodcastItem.japanese}`
                      : 'Modo Podcast / Shadowing Manos Libres'}
                  </div>
                  <div className="text-[10px] font-bold text-white/80 truncate">
                    {isPodcastPlaying && currentPodcastItem
                      ? `Línea ${podcastStepIdx + 1} de ${podcastPlaylist.length} • ${currentPodcastItem.spanish}`
                      : `Reproduce las ${podcastPlaylist.length} líneas con pausa para repetir`}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0">
                {isPodcastPlaying && (
                  <button
                    onClick={() => {
                      sound.playTap();
                      setPodcastStepIdx(prev => prev + 1);
                    }}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                    title="Siguiente línea"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={() => {
                    sound.playTap();
                    if (isPodcastPlaying) {
                      stopPodcast();
                    } else {
                      if (activeFilter === 'passages') {
                        setActiveFilter('all');
                      }
                      setPodcastStepIdx(0);
                      setIsPodcastPlaying(true);
                    }
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white text-gray-900 font-black text-xs flex items-center gap-1 shadow-sm hover:brightness-95 transition-all cursor-pointer"
                >
                  {isPodcastPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                      <span>Detener</span>
                    </>
                  ) : (
                    <>
                      <Headphones className="w-3.5 h-3.5 text-duo-blue" />
                      <span>Podcast</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Lesson Dropdown Selector */}
      <div className="w-full mb-4">
        <label className="block text-[11px] font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 ml-1 flex items-center justify-between">
          <span>Seleccionar Lección:</span>
          <span className="text-duo-blue font-bold">23 lecciones (Genki I y II)</span>
        </label>
        <div className="relative">
          <select
            value={selectedUnitId}
            onChange={(e) => {
              sound.playTap();
              stopPodcast();
              setSelectedUnitId(Number(e.target.value));
            }}
            className="w-full appearance-none bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] hover:border-duo-blue focus:border-duo-blue rounded-2xl py-3 px-4 pr-10 text-xs md:text-sm font-black text-gray-800 dark:text-gray-100 shadow-[0_4px_0_0_#e5e5e5] dark:shadow-none focus:outline-none transition-all cursor-pointer"
          >
            {readingUnits.map((unit) => (
              <option
                key={unit.id}
                value={unit.id}
                className="py-2 text-xs font-bold text-gray-800 dark:text-gray-100 dark:bg-[#18272e]"
              >
                {unit.id <= 12 ? '📘 Genki I' : '📗 Genki II'} — {unit.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500 dark:text-gray-400">
            <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full relative mb-3">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar personaje, frase en japonés o español..."
          className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl text-xs font-bold text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-duo-blue transition-all"
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

      {/* Filter Pills */}
      <div className="w-full flex gap-1.5 overflow-x-auto pb-1 mb-5">
        {[
          { id: 'all', label: 'Todo (会話 + 読み書き)' },
          { id: 'dialogues', label: `Diálogos en Chat (${dialogueExercises.length})` },
          { id: 'passages', label: `Lecturas del Libro (${readingPassages.length})` }
        ].map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playTap();
                setActiveFilter(tab.id as 'all' | 'dialogues' | 'passages');
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all border whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-gray-800 dark:bg-duo-green text-white dark:text-gray-950 font-black border-gray-900 dark:border-duo-green-dark shadow-sm'
                  : 'bg-gray-100 dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#283842] hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content List */}
      <div className="w-full flex flex-col gap-5">
        {filteredDialogues.length === 0 && filteredPassages.length === 0 && (
          <div className="p-8 text-center text-gray-400 font-bold text-sm bg-white dark:bg-[#18272e] border-2 border-dashed border-duo-gray-200 dark:border-[#283842] rounded-3xl">
            No se encontraron diálogos ni lecturas con ese filtro en esta lección.
          </div>
        )}

        {/* 1. Dialogues Section (Chat Style) */}
        {filteredDialogues.map((ex, dIdx) => {
          const uniqueSpeakers = Array.from(new Set(ex.dialogueLines!.map(l => l.speaker)));
          const isQuestionOpen = !!revealedQuestions[ex.id];
          const correctOption = ex.options?.find(o => o.id === ex.correctAnswerId || o.isCorrect);

          return (
            <article
              key={ex.id || `dlg-${dIdx}`}
              className="w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-duo-card dark:shadow-none transition-all"
            >
              {/* Dialogue Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-gray-100 dark:border-[#283842]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-duo-blue text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <MessageSquare className="w-4 h-4 stroke-[2.5px]" />
                  </div>
                  <div>
                    <h2 className="text-xs md:text-sm font-black text-duo-blue uppercase tracking-wide">
                      {ex.dialogueTitle || `Diálogo ${dIdx + 1} (会話)`}
                    </h2>
                    {ex.dialogueContext && (
                      <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                        {ex.dialogueContext}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      sound.playTap();
                      sound.speakDialogueSequence(
                        ex.dialogueLines!,
                        0.9,
                        (idx) => {
                          const key = `${ex.id}-line-${idx}`;
                          setActiveLineKey(key);
                          const el = lineRefs.current[key];
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
                        ex.dialogueLines!,
                        0.65,
                        (idx) => {
                          const key = `${ex.id}-line-${idx}`;
                          setActiveLineKey(key);
                          const el = lineRefs.current[key];
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }
                      );
                    }}
                    className="px-2 py-1.5 bg-duo-blue-light/80 dark:bg-duo-blue/20 border border-duo-blue text-duo-blue-dark dark:text-duo-blue rounded-xl font-black text-[11px] flex items-center gap-1 hover:brightness-105 transition-all cursor-pointer"
                    title="Escuchar lento con voces por personaje"
                  >
                    <span>🐢</span>
                  </button>
                </div>
              </div>

              {/* Participants Legend */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  {uniqueSpeakers.map((spk, sIdx) => {
                    const theme = getSpeakerChatTheme(sIdx);
                    const avatar = getSpeakerAvatar(spk, sIdx);
                    return (
                      <span
                        key={`legend-${ex.id}-${spk}`}
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black shadow-2xs ${theme.badge}`}
                      >
                        <span>{avatar}</span>
                        <span>{spk}</span>
                      </span>
                    );
                  })}
                </div>
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
                  Toca un globo para escuchar 🔊
                </span>
              </div>

              {/* Chat Bubbles Thread */}
              <div className="flex flex-col gap-3 p-3 rounded-2xl bg-slate-100/80 dark:bg-[#0f191e] border border-gray-200/80 dark:border-[#24343d]">
                {ex.dialogueLines!.map((line, lIdx) => {
                  const lineKey = `${ex.id}-line-${lIdx}`;
                  const isActiveLine = activeLineKey === lineKey;
                  const speakerIdx = uniqueSpeakers.indexOf(line.speaker);
                  const theme = getSpeakerChatTheme(speakerIdx >= 0 ? speakerIdx : 0);
                  const avatar = getSpeakerAvatar(line.speaker, speakerIdx >= 0 ? speakerIdx : 0);

                  return (
                    <div
                      key={lineKey}
                      ref={(el) => {
                        lineRefs.current[lineKey] = el;
                      }}
                      onClick={() => {
                        setActiveLineKey(lineKey);
                        sound.speakJapanese(line.audioText, 0.9, line.speaker);
                      }}
                      className={`flex items-start gap-2.5 cursor-pointer group scroll-mt-28 ${
                        theme.isRight ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      {/* Avatar */}
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
                                setActiveLineKey(lineKey);
                                sound.speakJapanese(line.audioText, 0.9, line.speaker);
                              }}
                              className={`p-1.5 rounded-xl transition-colors flex-shrink-0 ${theme.audioBtn}`}
                              title="Escuchar esta línea"
                            >
                              <Volume2 className={`w-3.5 h-3.5 ${isActiveLine ? 'animate-pulse' : ''}`} />
                            </button>
                          </div>
                        </div>

                        <p className="text-base md:text-lg font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 leading-snug mt-0.5">
                          {line.japanese}
                        </p>

                        {line.romaji && showRomaji && (
                          <p className={`text-[11px] font-bold ${theme.romaji}`}>
                            {line.romaji}
                          </p>
                        )}

                        {showTranslation && (
                          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 pt-1 mt-0.5 border-t border-gray-200/60 dark:border-gray-700/50">
                            {line.spanish}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Optional Comprehension Check Toggle */}
              {ex.prompt && (
                <div className="mt-3 pt-2.5 border-t border-gray-100 dark:border-[#283842]">
                  <button
                    onClick={() => {
                      sound.playTap();
                      setRevealedQuestions(prev => ({ ...prev, [ex.id]: !prev[ex.id] }));
                    }}
                    className="w-full flex items-center justify-between text-left px-3 py-2 rounded-xl bg-gray-50 dark:bg-[#131f24] hover:bg-gray-100 dark:hover:bg-[#1d2e36] border border-gray-200 dark:border-[#283842] transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-black text-gray-700 dark:text-gray-200 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-duo-blue flex-shrink-0" />
                      <span>Pregunta de comprensión: {ex.prompt}</span>
                    </span>
                    <span className="text-[10px] font-black text-duo-blue uppercase ml-2 flex-shrink-0">
                      {isQuestionOpen ? 'Ocultar' : 'Ver respuesta'}
                    </span>
                  </button>

                  {isQuestionOpen && (
                    <div className="mt-2 p-3 rounded-2xl bg-duo-green-light/40 dark:bg-duo-green/15 border border-duo-green/50 flex items-start gap-2 animate-fade-in">
                      <CheckCircle2 className="w-4 h-4 text-duo-green flex-shrink-0 mt-0.5" />
                      <div className="text-xs">
                        {correctOption && (
                          <p className="font-black text-duo-green-dark dark:text-duo-green mb-0.5">
                            Respuesta: {correctOption.text}
                          </p>
                        )}
                        <p className="font-semibold text-gray-700 dark:text-gray-300">
                          {ex.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}

        {/* 2. Textbook Reading Passages Section (読み書き編) */}
        {filteredPassages.length > 0 && (
          <div className="w-full flex flex-col gap-3 mt-1">
            <div className="flex items-center gap-2 px-1">
              <FileText className="w-4 h-4 text-duo-green" />
              <h3 className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Lecturas del Libro (読み書き編)
              </h3>
            </div>

            {filteredPassages.map(({ nodeTitle, nodeJpTitle, exercise }, pIdx) => (
              <article
                key={exercise.id || `passage-${pIdx}`}
                className="w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-4 shadow-duo-card dark:shadow-none transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-lg bg-duo-green/15 text-duo-green font-black text-[10px] uppercase tracking-wider">
                      {nodeJpTitle}
                    </span>
                    <h4 className="text-sm font-black text-gray-800 dark:text-gray-100 mt-0.5">
                      {nodeTitle}
                    </h4>
                  </div>

                  {exercise.japaneseVoiceText && (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          sound.playTap();
                          sound.speakJapanese(exercise.japaneseVoiceText!, 0.9);
                        }}
                        className="px-2.5 py-1.5 bg-duo-blue hover:bg-duo-blue-dark text-white rounded-xl font-black text-[11px] flex items-center gap-1 shadow-[0_3px_0_0_#1899d6] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                        title="Escuchar lectura"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Escuchar</span>
                      </button>
                      <button
                        onClick={() => {
                          sound.playTap();
                          sound.speakJapanese(exercise.japaneseVoiceText!, 0.6);
                        }}
                        className="px-2 py-1.5 bg-duo-blue-light/80 dark:bg-duo-blue/20 border border-duo-blue text-duo-blue-dark dark:text-duo-blue rounded-xl font-black text-[11px] cursor-pointer"
                        title="Escuchar lento"
                      >
                        🐢
                      </button>
                    </div>
                  )}
                </div>

                {/* Passage Box */}
                <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-[#131f24] border-2 border-amber-200/70 dark:border-[#283842] mb-2.5">
                  <p className="text-base md:text-lg font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100 leading-relaxed">
                    {exercise.promptSub || exercise.japaneseVoiceText}
                  </p>
                </div>

                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  📌 {exercise.prompt}
                </p>

                {showTranslation && (
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#131f24] p-2.5 rounded-xl border border-gray-200 dark:border-[#283842]">
                    💡 {exercise.explanation}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Floating Podcast Control & Stop Bar */}
      {isPodcastPlaying && (
        <div className="fixed bottom-20 left-4 right-4 max-w-md mx-auto z-50 bg-gray-900/95 dark:bg-[#101b21]/95 text-white backdrop-blur-md border-2 border-duo-blue rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-duo-blue/25 border border-duo-blue/50 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Headphones className="w-4 h-4 text-duo-blue" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-white truncate">
                {currentPodcastItem
                  ? `${currentPodcastItem.speaker}: ${currentPodcastItem.japanese}`
                  : 'Reproduciendo Modo Podcast...'}
              </div>
              <div className="text-[10px] font-bold text-gray-300 truncate">
                {currentPodcastItem
                  ? `Línea ${podcastStepIdx + 1} de ${podcastPlaylist.length} • ${currentPodcastItem.spanish}`
                  : ''}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              onClick={() => {
                sound.playTap();
                setPodcastStepIdx(prev => prev + 1);
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Siguiente línea"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playTap();
                stopPodcast();
              }}
              className="px-3.5 py-2 rounded-xl bg-duo-red hover:bg-duo-red-dark text-white font-black text-xs flex items-center gap-1.5 shadow-[0_3px_0_0_#d33131] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              title="Detener Modo Podcast"
            >
              <Square className="w-3.5 h-3.5 fill-white text-white" />
              <span>Detener</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

