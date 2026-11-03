import React, { useState, useEffect } from 'react';
import { User, Flame, Zap, Heart, Gem, Database, RotateCcw, Award, CheckCircle2, Volume2, Moon, Sun, Type, Sparkles, Trophy, Target, Gift } from 'lucide-react';
import { UserProfile, Unit } from '../types';
import { sound, CHARACTER_VOICES } from '../services/sound';
import { getLocalDateKey, getDailyQuestStats } from '../utils/dateUtils';
import { NavTab } from '../components/BottomNav';
import { AudioDownloadManager } from '../components/Audio/AudioDownloadManager';

interface ProfilePageProps {
  profile: UserProfile;
  units: Unit[];
  nextHeartMinutes?: number | null;
  onRefillHearts: () => void;
  onResetProgress: () => void;
  onToggleRomaji: () => void;
  onToggleDarkMode: () => void;
  onClaimQuestReward?: (xp: number, gems: number) => void;
  onChangeVoice?: (voiceId: string) => void;
  onNavigateTab?: (tab: NavTab) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  units,
  nextHeartMinutes,
  onRefillHearts,
  onResetProgress,
  onToggleRomaji,
  onToggleDarkMode,
  onClaimQuestReward,
  onChangeVoice,
  onNavigateTab
}) => {
  const todayKey = getLocalDateKey();
  const [claimedQuests, setClaimedQuests] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(`genki_quests_${todayKey}`);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Keep claimedQuests in sync whenever todayKey changes (e.g. crossing midnight)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(`genki_quests_${todayKey}`);
      setClaimedQuests(raw ? JSON.parse(raw) : {});
    } catch {
      setClaimedQuests({});
    }
  }, [todayKey]);

  // Load today's activity stats (resets to 0 every day)
  const dailyStats = getDailyQuestStats(todayKey);

  // Calculate completed lessons
  let completedCount = 0;
  let totalLessons = 0;

  units.forEach(u => {
    u.nodes.forEach(n => {
      totalLessons++;
      if (n.stars > 0) completedCount++;
    });
  });

  // If progress was reset (0 completed and 0 XP), ensure daily quests are also cleared
  useEffect(() => {
    if (completedCount === 0 && profile.xp === 0 && Object.keys(claimedQuests).length > 0) {
      setClaimedQuests({});
      try {
        localStorage.removeItem(`genki_quests_${todayKey}`);
      } catch {
        // ignore
      }
    }
  }, [completedCount, profile.xp, claimedQuests, todayKey]);

  const kanaUnitCompleted = units[0]?.nodes.some(n => n.stars > 0) || false;
  const genki1Started = units.filter(u => u.id >= 1 && u.id <= 12).some(u => u.nodes.some(n => n.stars > 0));
  const genki2Started = units.filter(u => u.id >= 13).some(u => u.nodes.some(n => n.stars > 0));

  const dailyQuests = [
    {
      id: 'q-lesson',
      title: 'Avance del Día',
      desc: 'Domina al menos 1 lección en el Roadmap hoy',
      current: Math.min(dailyStats.lessonsCompleted, 1),
      target: 1,
      xpReward: 25,
      gemReward: 2
    },
    {
      id: 'q-xp',
      title: 'Cazador de Experiencia',
      desc: 'Acumula 40 puntos de EXP estudiando hoy',
      current: Math.min(dailyStats.xpEarned, 40),
      target: 40,
      xpReward: 30,
      gemReward: 3
    },
    {
      id: 'q-streak',
      title: 'Constancia Samurai',
      desc: 'Completa 1 lección hoy manteniendo al menos 3 corazones',
      current: dailyStats.maintainedHearts ? 1 : 0,
      target: 1,
      xpReward: 20,
      gemReward: 2
    }
  ];

  const achievements = [
    {
      id: 'ach-first',
      icon: '🌱',
      title: 'Primer Paso en Japón',
      desc: 'Completa tu primera lección del curso',
      unlocked: completedCount >= 1
    },
    {
      id: 'ach-kana',
      icon: '🔤',
      title: 'Iniciado en Kanas',
      desc: 'Completa una lección de Hiragana o Katakana',
      unlocked: kanaUnitCompleted
    },
    {
      id: 'ach-5',
      icon: '🍵',
      title: 'Conversador de Café',
      desc: 'Domina 5 lecciones de ejercicios',
      unlocked: completedCount >= 5
    },
    {
      id: 'ach-xp100',
      icon: '⚡',
      title: 'Centurión de EXP',
      desc: 'Alcanza 100 puntos de experiencia',
      unlocked: profile.xp >= 100
    },
    {
      id: 'ach-gems',
      icon: '💎',
      title: 'Tesoro de Kioto',
      desc: 'Reúne 120 gemas o más',
      unlocked: profile.gems >= 120
    },
    {
      id: 'ach-genki1',
      icon: '📘',
      title: 'Aventurero Genki I (N5)',
      desc: 'Avanza en las lecciones de Genki I (L1–L12)',
      unlocked: genki1Started
    },
    {
      id: 'ach-genki2',
      icon: '📗',
      title: 'Viajero Genki II (N4)',
      desc: 'Avanza en las lecciones de Genki II (L13–L23)',
      unlocked: genki2Started
    },
    {
      id: 'ach-samurai',
      icon: '🏯',
      title: 'Espíritu Samurai',
      desc: 'Supera 20 lecciones o 400 EXP totales',
      unlocked: completedCount >= 20 || profile.xp >= 400
    }
  ];

  const handleClaimQuest = (questId: string, xpReward: number, gemReward: number) => {
    if (claimedQuests[questId]) return;
    sound.playLessonComplete();
    const updated = { ...claimedQuests, [questId]: true };
    setClaimedQuests(updated);
    try {
      localStorage.setItem(`genki_quests_${todayKey}`, JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }
    if (onClaimQuestReward) {
      onClaimQuestReward(xpReward, gemReward);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 animate-fade-in">
      {/* Profile Header */}
      <div className="flex items-center gap-4 bg-white dark:bg-[#18272e] p-5 rounded-3xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-4 transition-colors">
        <img
          src="./app-icon.png"
          alt="NihonGo! Dojo Mascot"
          className="w-16 h-16 rounded-2xl shadow-duo-btn-sm border-2 border-duo-blue/40 flex-shrink-0 object-cover"
        />
        <div>
          <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">{profile.username}</h2>
          <p className="text-xs font-bold text-gray-400 dark:text-gray-400">NihonGo! Dojo (日本語道場) • Genki 3.ª Ed.</p>
          <div className="flex items-center gap-1 mt-1 text-xs font-black text-duo-green">
            <CheckCircle2 className="w-4 h-4" />
            <span>{completedCount} de {totalLessons} lecciones dominadas</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Estadísticas</h3>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none flex items-center gap-3 transition-colors">
          <Flame className="w-8 h-8 fill-duo-orange text-duo-orange flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800 dark:text-gray-100">{profile.streakDays}</div>
            <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">Días de racha</div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none flex items-center gap-3 transition-colors">
          <Zap className="w-8 h-8 fill-duo-yellow text-duo-yellow-dark flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800 dark:text-gray-100">{profile.xp}</div>
            <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">Total EXP</div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none flex items-center gap-3 transition-colors">
          <Heart className="w-8 h-8 fill-duo-red text-duo-red flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800 dark:text-gray-100">{profile.hearts} / {profile.maxHearts}</div>
            <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">
              {profile.hearts < profile.maxHearts && nextHeartMinutes
                ? `+1 ❤️ en ${nextHeartMinutes >= 60 ? '1 h' : `${nextHeartMinutes} min`}`
                : 'Corazones'}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none flex items-center gap-3 transition-colors">
          <Gem className="w-8 h-8 fill-duo-blue text-duo-blue flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800 dark:text-gray-100">{profile.gems}</div>
            <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">Gemas</div>
          </div>
        </div>
      </div>

      {/* Heart Refill Banner */}
      {profile.hearts < profile.maxHearts && (
        <div className="bg-duo-red-light/60 dark:bg-duo-red-dark/20 border-2 border-duo-red p-4 rounded-2xl mb-5 flex items-center justify-between gap-2">
          <div>
            <h4 className="text-xs font-black text-duo-red-dark dark:text-red-300 uppercase">
              {nextHeartMinutes ? (() => {
                const missing = Math.max(1, profile.maxHearts - profile.hearts);
                const totalMins = (missing - 1) * 60 + nextHeartMinutes;
                const totalHours = Math.ceil(totalMins / 60);
                const nextStr = nextHeartMinutes >= 60 ? '1 h' : `${nextHeartMinutes} min`;
                const totalStr = totalHours === 1 ? '1 hora' : `${totalHours} horas`;
                return missing > 1
                  ? `Regeneración (+1 ❤️ en ${nextStr} • Lleno en ${totalStr})`
                  : `Regeneración activa (+1 ❤️ en ${nextStr})`;
              })() : '¿Recuperar vidas al instante?'}
            </h4>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-300">
              Se regenera 1 corazón cada hora o recarga todos ahora
            </p>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              onRefillHearts();
            }}
            disabled={profile.gems < 30}
            className="py-2 px-3 bg-duo-red text-white text-xs font-black rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-red-dark transition-all flex items-center gap-1 flex-shrink-0 cursor-pointer"
          >
            <Gem className="w-3.5 h-3.5 fill-white" />
            <span>30 Gemas</span>
          </button>
        </div>
      )}

      {/* Daily Quests (Misiones Diarias) */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <Target className="w-4 h-4 text-duo-orange" />
        <span>Misiones Diarias</span>
      </h3>
      <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-5 flex flex-col gap-3 transition-colors">
        {dailyQuests.map(q => {
          const isCompleted = q.current >= q.target;
          const isClaimed = isCompleted && !!claimedQuests[q.id];
          const pct = Math.min(100, Math.round((q.current / q.target) * 100));

          return (
            <div
              key={q.id}
              className="p-3 rounded-2xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-xs font-black text-gray-800 dark:text-gray-100">{q.title}</h4>
                  <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{q.desc}</p>
                </div>

                {isClaimed ? (
                  <span className="px-2.5 py-1 rounded-xl bg-duo-green/15 text-duo-green font-black text-[10px] flex items-center gap-1 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Reclamada
                  </span>
                ) : isCompleted ? (
                  <button
                    onClick={() => handleClaimQuest(q.id, q.xpReward, q.gemReward)}
                    className="px-2.5 py-1 rounded-xl bg-duo-yellow hover:bg-duo-yellow-dark text-gray-900 font-black text-[10px] flex items-center gap-1 shadow-xs cursor-pointer animate-bounce flex-shrink-0"
                  >
                    <Gift className="w-3.5 h-3.5" /> +{q.xpReward} XP / +{q.gemReward} 💎
                  </button>
                ) : (
                  <span className="px-2 py-0.5 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-500 text-[10px] font-bold flex-shrink-0">
                    +{q.xpReward} XP
                  </span>
                )}
              </div>

              <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-duo-orange rounded-full transition-all duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Banco de Dominio y SRS Shortcut */}
      {onNavigateTab && (
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border-2 border-indigo-300 dark:border-indigo-800 p-4 rounded-2xl mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black flex-shrink-0 shadow-sm">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-800 dark:text-gray-100">
                Banco de Dominio y SRS
              </h4>
              <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                Revisa tus palabras dominadas y refuerza las más débiles.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              onNavigateTab('mastery');
            }}
            className="py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl shadow-xs transition-all flex items-center gap-1 flex-shrink-0 cursor-pointer"
          >
            <span>Ver Dominio</span>
          </button>
        </div>
      )}

      {/* Achievements Gallery (Medallas y Logros) */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-duo-yellow-dark" />
          <span>Medallas y Logros</span>
        </span>
        <span className="text-xs font-bold text-duo-blue">
          {achievements.filter(a => a.unlocked).length} / {achievements.length}
        </span>
      </h3>
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {achievements.map(ach => (
          <div
            key={ach.id}
            className={`p-3 rounded-2xl border-2 flex items-center gap-2.5 transition-all ${
              ach.unlocked
                ? 'bg-white dark:bg-[#18272e] border-duo-yellow shadow-sm'
                : 'bg-gray-100/70 dark:bg-[#18272e]/40 border-gray-200 dark:border-[#283842] opacity-55 grayscale'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-duo-yellow/20 border border-duo-yellow/40 flex items-center justify-center text-xl flex-shrink-0">
              {ach.icon}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-gray-800 dark:text-gray-100 leading-tight truncate">
                {ach.title}
              </div>
              <div className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
                {ach.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preferences & Visualization Controls (Dark Mode & Romaji Toggle) */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <Sparkles className="w-4 h-4 text-duo-green" />
        <span>Preferencias de Aprendizaje</span>
      </h3>
      <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-5 flex flex-col gap-4 transition-colors">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border-2 transition-colors ${
              profile.darkMode
                ? 'bg-duo-purple/20 border-duo-purple text-duo-purple'
                : 'bg-duo-yellow/20 border-duo-yellow text-duo-yellow-dark'
            }`}>
              {profile.darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-sm font-black text-gray-800 dark:text-gray-100">Modo Oscuro</div>
              <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">
                {profile.darkMode ? 'Activado (Paleta nocturna Genki)' : 'Desactivado (Tema claro)'}
              </div>
            </div>
          </div>

          <button
            onClick={onToggleDarkMode}
            type="button"
            role="switch"
            aria-checked={profile.darkMode}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 cursor-pointer ${
              profile.darkMode ? 'bg-duo-green justify-end' : 'bg-duo-gray-300 dark:bg-gray-700 justify-start'
            }`}
          >
            <div className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 flex items-center justify-center">
              {profile.darkMode ? (
                <Moon className="w-3.5 h-3.5 text-duo-green" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-gray-400" />
              )}
            </div>
          </button>
        </div>

        <div className="border-t border-duo-gray-200 dark:border-[#283842]" />

        {/* Romaji Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border-2 transition-colors ${
              profile.showRomaji
                ? 'bg-duo-blue-light dark:bg-duo-blue/20 border-duo-blue text-duo-blue-dark dark:text-duo-blue'
                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-400'
            }`}>
              <Type className="w-5 h-5 stroke-[2.5px]" />
            </div>
            <div>
              <div className="text-sm font-black text-gray-800 dark:text-gray-100">Mostrar Romaji</div>
              <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">
                {profile.showRomaji ? 'Visible en flashcards, kanas y teoría' : 'Oculto (Práctica de lectura pura)'}
              </div>
            </div>
          </div>

          <button
            onClick={onToggleRomaji}
            type="button"
            role="switch"
            aria-checked={profile.showRomaji}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-200 cursor-pointer ${
              profile.showRomaji ? 'bg-duo-blue justify-end' : 'bg-duo-gray-300 dark:bg-gray-700 justify-start'
            }`}
          >
            <div className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 flex items-center justify-center">
              <span className={`text-[10px] font-black ${profile.showRomaji ? 'text-duo-blue' : 'text-gray-400'}`}>
                Aa
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Audio Engine & Character Voice Selector */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
        Voz por Defecto y Personajes
      </h3>
      <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-5 transition-colors">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-duo-green" />
            <span className="text-xs font-black text-gray-800 dark:text-gray-100">
              Elige tu Personaje de Voz por Defecto
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-duo-green-light dark:bg-duo-green/20 text-duo-green-dark dark:text-green-300">
            {sound.getAvailableJapaneseVoices().length > 0 ? 'Voz Local + Tono' : 'Audio Web + Tono'}
          </span>
        </div>
        <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-3">
          En los diálogos cada personaje usa su propia voz. Aquí puedes elegir qué personaje te hablará por defecto en el resto de la app (Flashcards, Kanas, Vocabulario y Ejercicios):
        </p>

        {/* Character Voices Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {CHARACTER_VOICES.map(charVoice => {
            const isSelected = (profile.preferredVoiceId || 'mary') === charVoice.id;
            return (
              <button
                key={charVoice.id}
                type="button"
                onClick={() => {
                  sound.playTap();
                  onChangeVoice?.(charVoice.id);
                }}
                className={`p-2.5 rounded-2xl border-2 text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-duo-green-light/35 dark:bg-duo-green/20 border-duo-green shadow-xs'
                    : 'bg-gray-50 dark:bg-[#131f24] border-gray-200 dark:border-[#283842] hover:border-duo-blue'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842] flex items-center justify-center text-xl flex-shrink-0 shadow-2xs">
                  {charVoice.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-black text-gray-800 dark:text-gray-100 truncate">
                      {charVoice.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-duo-green flex-shrink-0" />
                    )}
                  </div>
                  <div className="text-[10px] font-bold text-duo-blue truncate">
                    {charVoice.japaneseName}
                  </div>
                  <div className="text-[9px] font-semibold text-gray-400 dark:text-gray-400 leading-tight truncate mt-0.5">
                    {charVoice.role}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              sound.playTap();
              const activeChar = sound.getCharacterProfile(profile.preferredVoiceId || 'mary');
              sound.speakJapanese(activeChar.samplePhrase, 0.9, activeChar.id);
            }}
            className="py-2.5 px-3 bg-duo-blue-light dark:bg-duo-blue/20 border-2 border-duo-blue text-duo-blue-dark dark:text-blue-300 font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Probar Voz Actual</span>
          </button>
          <button
            onClick={() => {
              sound.playTap();
              sound.speakJapanese('ありがとうございます', 0.9, profile.preferredVoiceId || 'mary');
            }}
            className="py-2.5 px-3 bg-duo-green-light dark:bg-duo-green/20 border-2 border-duo-green text-duo-green-dark dark:text-green-300 font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-green hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Oír: ありがとう</span>
          </button>
        </div>
      </div>

      {/* Audio Download Manager (Offline voices stored in device storage) */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Voces Offline</h3>
      <AudioDownloadManager units={units} />

      {/* SQLite Local Persistence Section */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Persistencia de Datos</h3>
      <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-5 transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-5 h-5 text-duo-blue" />
          <span className="text-xs font-black text-gray-800 dark:text-gray-100">Almacenamiento SQLite Activo</span>
        </div>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
          Todo tu progreso en el roadmap, rachas y niveles SRS de las flashcards se guardan localmente en SQLite mediante Capacitor.
        </p>
        <button
          onClick={() => {
            if (window.confirm('¿Estás seguro de que quieres reiniciar todo el progreso de la base de datos?')) {
              sound.playTap();
              setClaimedQuests({});
              try {
                localStorage.removeItem(`genki_quests_${todayKey}`);
              } catch {
                // ignore
              }
              onResetProgress();
            }
          }}
          className="w-full py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-duo-red font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar Progreso Local</span>
        </button>
      </div>

      {/* Genki Info Card */}
      <div className="p-4 bg-duo-blue-light/40 dark:bg-duo-blue/10 border-2 border-duo-blue/40 dark:border-duo-blue/30 rounded-2xl">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-4 h-4 text-duo-blue" />
          <h4 className="text-xs font-black text-duo-blue-dark dark:text-duo-blue">Currículo Oficial Genki</h4>
        </div>
        <p className="text-[11px] font-bold text-gray-600 dark:text-gray-300 leading-relaxed">
          Diseñado siguiendo la pedagogía de los libros de texto <em>GENKI: An Integrated Course in Elementary Japanese</em> (3.ª Edición) de The Japan Times.
        </p>
      </div>
    </div>
  );
};
