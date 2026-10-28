import React from 'react';
import { Flame, Zap, Heart, Gem, Volume2, VolumeX } from 'lucide-react';
import { UserProfile } from '../types';
import { sound } from '../services/sound';

interface TopBarProps {
  profile: UserProfile;
  onSoundToggle: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ profile, onSoundToggle }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b-2 border-duo-gray-200 px-4 py-2.5 shadow-sm">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {/* Racha / Streak */}
        <div className="flex items-center gap-1.5 font-extrabold text-duo-orange">
          <Flame className="w-5 h-5 fill-duo-orange animate-bounce" />
          <span className="text-sm tracking-wide">{profile.streakDays}</span>
        </div>

        {/* Puntos XP */}
        <div className="flex items-center gap-1.5 font-extrabold text-duo-yellow-dark">
          <Zap className="w-5 h-5 fill-duo-yellow text-duo-yellow-dark" />
          <span className="text-sm tracking-wide">{profile.xp} XP</span>
        </div>

        {/* Gemas / Lingots */}
        <div className="flex items-center gap-1.5 font-extrabold text-duo-blue">
          <Gem className="w-5 h-5 fill-duo-blue" />
          <span className="text-sm tracking-wide">{profile.gems}</span>
        </div>

        {/* Vidas / Corazones */}
        <div className="flex items-center gap-1.5 font-extrabold text-duo-red">
          <Heart className="w-5 h-5 fill-duo-red" />
          <span className="text-sm tracking-wide">{profile.hearts}</span>
        </div>

        {/* Sonido Toggle */}
        <button
          onClick={onSoundToggle}
          className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"
          title={profile.soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
        >
          {profile.soundEnabled ? (
            <Volume2 className="w-5 h-5 text-duo-green" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
    </header>
  );
};

