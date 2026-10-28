import React from 'react';
import { User, Flame, Zap, Heart, Gem, Database, RotateCcw, Award, CheckCircle2, Volume2, Moon, Sun, Type, Sparkles } from 'lucide-react';
import { UserProfile, Unit } from '../types';
import { sound } from '../services/sound';

interface ProfilePageProps {
  profile: UserProfile;
  units: Unit[];
  onRefillHearts: () => void;
  onResetProgress: () => void;
  onToggleRomaji: () => void;
  onToggleDarkMode: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  units,
  onRefillHearts,
  onResetProgress,
  onToggleRomaji,
  onToggleDarkMode
}) => {
  // Calculate completed lessons
  let completedCount = 0;
  let totalLessons = 0;

  units.forEach(u => {
    u.nodes.forEach(n => {
      totalLessons++;
      if (n.stars > 0) completedCount++;
    });
  });

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 animate-fade-in">
      {/* Profile Header */}
      <div className="flex items-center gap-4 bg-white dark:bg-[#18272e] p-5 rounded-3xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-4 transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-duo-green flex items-center justify-center text-white shadow-duo-btn-sm border-2 border-duo-green-dark">
          <User className="w-8 h-8 stroke-[2.5px]" />
        </div>
        <div>
          <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">{profile.username}</h2>
          <p className="text-xs font-bold text-gray-400 dark:text-gray-400">Estudiante de Genki 3.ª Edición</p>
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
            <div className="text-[11px] font-bold text-gray-400 dark:text-gray-400">Corazones</div>
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
        <div className="bg-duo-red-light/60 dark:bg-duo-red-dark/20 border-2 border-duo-red p-4 rounded-2xl mb-5 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-black text-duo-red-dark dark:text-duo-red uppercase">¿Sin vidas?</h4>
            <p className="text-xs font-bold text-gray-600 dark:text-gray-300">Recarga todos tus corazones</p>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              onRefillHearts();
            }}
            disabled={profile.gems < 30}
            className="py-2 px-3 bg-duo-red text-white text-xs font-black rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-red-dark transition-all flex items-center gap-1"
          >
            <Gem className="w-3.5 h-3.5 fill-white" />
            <span>30 Gemas</span>
          </button>
        </div>
      )}

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

      {/* Audio Engine & Diagnostic Card */}
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Motor de Audio y Voz</h3>
      <div className="bg-white dark:bg-[#18272e] p-4 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card dark:shadow-none mb-5 transition-colors">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-duo-green" />
            <span className="text-xs font-black text-gray-800 dark:text-gray-100">Reproducción de Audio Japonés</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-duo-green-light dark:bg-duo-green/20 text-duo-green-dark dark:text-duo-green">
            {sound.getAvailableJapaneseVoices().length > 0 ? 'Voz Local' : 'Audio Web HD'}
          </span>
        </div>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
          {sound.getAvailableJapaneseVoices().length > 0
            ? `Voz detectada: ${sound.getAvailableJapaneseVoices()[0].name}`
            : 'Usando motor de pronunciación japonesa en streaming de alta calidad.'}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              sound.playTap();
              sound.speakJapanese('こんにちは');
            }}
            className="py-2.5 px-3 bg-duo-blue-light dark:bg-duo-blue/20 border-2 border-duo-blue text-duo-blue-dark dark:text-duo-blue font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue hover:text-white transition-all flex items-center justify-center gap-1.5"
          >
            <Volume2 className="w-4 h-4" />
            <span>Oír: こんにちは</span>
          </button>
          <button
            onClick={() => {
              sound.playTap();
              sound.speakJapanese('ありがとうございます');
            }}
            className="py-2.5 px-3 bg-duo-green-light dark:bg-duo-green/20 border-2 border-duo-green text-duo-green-dark dark:text-duo-green font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-green hover:text-white transition-all flex items-center justify-center gap-1.5"
          >
            <Volume2 className="w-4 h-4" />
            <span>Oír: ありがとう</span>
          </button>
        </div>
      </div>

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
