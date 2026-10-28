import React from 'react';
import { KanaTable } from '../components/Kana/KanaTable';

interface KanaPageProps {
  showRomaji?: boolean;
}

export const KanaPage: React.FC<KanaPageProps> = ({ showRomaji = true }) => {
  return (
    <div className="w-full pb-20">
      <div className="max-w-md mx-auto px-4 pt-4">
        <h1 className="text-xl font-black text-gray-800 dark:text-gray-100">Alfabetos Kana</h1>
        <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
          Tabla interactiva de Hiragana y Katakana con pronunciación de audio nativa.
        </p>
      </div>
      <KanaTable showRomaji={showRomaji} />
    </div>
  );
};
