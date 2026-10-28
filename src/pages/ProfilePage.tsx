import React from 'react';
import { User, Flame, Zap, Heart, Gem, Database, RotateCcw, Award, CheckCircle2, Volume2 } from 'lucide-react';
import { UserProfile, Unit } from '../types';
import { sound } from '../services/sound';

interface ProfilePageProps {
  profile: UserProfile;
  units: Unit[];
  onRefillHearts: () => void;
  onResetProgress: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  units,
  onRefillHearts,
  onResetProgress
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
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24">
      {/* Profile Header */}
      <div className="flex items-center gap-4 bg-white p-5 rounded-3xl border-2 border-duo-gray-200 shadow-duo-card mb-4">
        <div className="w-16 h-16 rounded-2xl bg-duo-green flex items-center justify-center text-white shadow-duo-btn-sm border-2 border-duo-green-dark">
          <User className="w-8 h-8 stroke-[2.5px]" />
        </div>
        <div>
          <h2 className="text-xl font-black text-gray-800">{profile.username}</h2>
          <p className="text-xs font-bold text-gray-400">Estudiante de Genki 3.ª Edición</p>
          <div className="flex items-center gap-1 mt-1 text-xs font-black text-duo-green">
            <CheckCircle2 className="w-4 h-4" />
            <span>{completedCount} de {totalLessons} lecciones dominadas</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <h3 className="text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Estadísticas</h3>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-white p-4 rounded-2xl border-2 border-duo-gray-200 shadow-duo-card flex items-center gap-3">
          <Flame className="w-8 h-8 fill-duo-orange text-duo-orange flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800">{profile.streakDays}</div>
            <div className="text-[11px] font-bold text-gray-400">Días de racha</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border-2 border-duo-gray-200 shadow-duo-card flex items-center gap-3">
          <Zap className="w-8 h-8 fill-duo-yellow text-duo-yellow-dark flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800">{profile.xp}</div>
            <div className="text-[11px] font-bold text-gray-400">Total EXP</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border-2 border-duo-gray-200 shadow-duo-card flex items-center gap-3">
          <Heart className="w-8 h-8 fill-duo-red text-duo-red flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800">{profile.hearts} / {profile.maxHearts}</div>
            <div className="text-[11px] font-bold text-gray-400">Corazones</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border-2 border-duo-gray-200 shadow-duo-card flex items-center gap-3">
          <Gem className="w-8 h-8 fill-duo-blue text-duo-blue flex-shrink-0" />
          <div>
            <div className="text-xl font-black text-gray-800">{profile.gems}</div>
            <div className="text-[11px] font-bold text-gray-400">Gemas</div>
          </div>
        </div>
      </div>

      {/* Heart Refill Banner */}
      {profile.hearts < profile.maxHearts && (
        <div className="bg-duo-red-light/60 border-2 border-duo-red p-4 rounded-2xl mb-5 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-black text-duo-red-dark uppercase">¿Sin vidas?</h4>
            <p className="text-xs font-bold text-gray-600">Recarga todos tus corazones</p>
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

      {/* Audio Engine & Diagnostic Card */}
      <h3 className="text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Motor de Audio y Voz</h3>
      <div className="bg-white p-4 rounded-2xl border-2 border-duo-gray-200 shadow-duo-card mb-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-duo-green" />
            <span className="text-xs font-black text-gray-800">Reproducción de Audio Japonés</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-duo-green-light text-duo-green-dark">
            {sound.getAvailableJapaneseVoices().length > 0 ? 'Voz Local' : 'Audio Web HD'}
          </span>
        </div>
        <p className="text-xs font-medium text-gray-500 mb-3">
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
            className="py-2.5 px-3 bg-duo-blue-light border-2 border-duo-blue text-duo-blue-dark font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue hover:text-white transition-all flex items-center justify-center gap-1.5"
          >
            <Volume2 className="w-4 h-4" />
            <span>Oír: こんにちは</span>
          </button>
          <button
            onClick={() => {
              sound.playTap();
              sound.speakJapanese('ありがとうございます');
            }}
            className="py-2.5 px-3 bg-duo-green-light border-2 border-duo-green text-duo-green-dark font-black text-xs rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-green hover:text-white transition-all flex items-center justify-center gap-1.5"
          >
            <Volume2 className="w-4 h-4" />
            <span>Oír: ありがとう</span>
          </button>
        </div>
      </div>

      {/* SQLite Local Persistence Section */}
      <h3 className="text-sm font-black text-gray-700 uppercase tracking-wider mb-2">Persistencia de Datos</h3>
      <div className="bg-white p-4 rounded-2xl border-2 border-duo-gray-200 shadow-duo-card mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Database className="w-5 h-5 text-duo-blue" />
          <span className="text-xs font-black text-gray-800">Almacenamiento SQLite Activo</span>
        </div>
        <p className="text-xs font-medium text-gray-500 mb-3">
          Todo tu progreso en el roadmap, rachas y niveles SRS de las flashcards se guardan localmente en SQLite mediante Capacitor.
        </p>
        <button
          onClick={() => {
            if (window.confirm('¿Estás seguro de que quieres reiniciar todo el progreso de la base de datos?')) {
              sound.playTap();
              onResetProgress();
            }
          }}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-duo-red font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar Progreso Local</span>
        </button>
      </div>

      {/* Genki Info Card */}
      <div className="p-4 bg-duo-blue-light/40 border-2 border-duo-blue/40 rounded-2xl">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-4 h-4 text-duo-blue" />
          <h4 className="text-xs font-black text-duo-blue-dark">Currículo Oficial Genki</h4>
        </div>
        <p className="text-[11px] font-bold text-gray-600 leading-relaxed">
          Diseñado siguiendo la pedagogía de los libros de texto <em>GENKI: An Integrated Course in Elementary Japanese</em> (3.ª Edición) de The Japan Times.
        </p>
      </div>
    </div>
  );
};

