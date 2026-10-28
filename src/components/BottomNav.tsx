import React from 'react';
import { Map, Layers, BookA, User } from 'lucide-react';
import { sound } from '../services/sound';

export type NavTab = 'roadmap' | 'flashcards' | 'kanas' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'roadmap' as NavTab, label: 'Aprender', icon: Map },
    { id: 'flashcards' as NavTab, label: 'Flashcards', icon: Layers },
    { id: 'kanas' as NavTab, label: 'Kanas', icon: BookA },
    { id: 'profile' as NavTab, label: 'Perfil', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t-2 border-duo-gray-200 py-1.5 px-4 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playTap();
                onTabChange(tab.id);
              }}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-150 ${
                isActive
                  ? 'text-duo-green font-black scale-105'
                  : 'text-gray-400 font-bold hover:text-gray-600'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-duo-green-light/40 border-2 border-duo-green' : 'border-2 border-transparent'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              </div>
              <span className="text-[11px] mt-0.5 tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
