import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen } from 'lucide-react';
import { gojuonKanaList, dakutenKanaList, KanaChar } from '../../data/kanaTableData';
import { sound } from '../../services/sound';

export const KanaTable: React.FC = () => {
  const [scriptType, setScriptType] = useState<'hira' | 'kata'>('hira');
  const [tableType, setTableType] = useState<'gojuon' | 'dakuten'>('gojuon');
  const [activeChar, setActiveChar] = useState<KanaChar | null>(gojuonKanaList[0]);

  const list = tableType === 'gojuon' ? gojuonKanaList : dakutenKanaList;

  const handleSelectChar = (item: KanaChar) => {
    setActiveChar(item);
    const charToSpeak = scriptType === 'hira' ? item.hira : item.kata;
    sound.speakJapanese(charToSpeak);
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 py-3 flex flex-col items-center">
      {/* Script Selector (Hiragana vs Katakana) */}
      <div className="w-full flex bg-duo-gray-200 p-1 rounded-2xl mb-3">
        <button
          onClick={() => {
            sound.playTap();
            setScriptType('hira');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
            scriptType === 'hira'
              ? 'bg-white text-duo-green shadow-sm'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Hiragana (ひらがな)
        </button>
        <button
          onClick={() => {
            sound.playTap();
            setScriptType('kata');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
            scriptType === 'kata'
              ? 'bg-white text-duo-blue shadow-sm'
              : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          Katakana (カタカナ)
        </button>
      </div>

      {/* Group Selector (Básicos vs Dakuten) */}
      <div className="w-full flex gap-2 mb-3">
        <button
          onClick={() => {
            sound.playTap();
            setTableType('gojuon');
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-extrabold border-2 transition-all ${
            tableType === 'gojuon'
              ? 'bg-duo-green-light border-duo-green text-duo-green-dark'
              : 'bg-white border-duo-gray-200 text-gray-500'
          }`}
        >
          Básicos (46 Sonidos)
        </button>
        <button
          onClick={() => {
            sound.playTap();
            setTableType('dakuten');
          }}
          className={`px-3 py-1.5 rounded-full text-xs font-extrabold border-2 transition-all ${
            tableType === 'dakuten'
              ? 'bg-duo-orange-light border-duo-orange text-duo-orange-dark'
              : 'bg-white border-duo-gray-200 text-gray-500'
          }`}
        >
          Modificados (゛/ ゜)
        </button>
      </div>

      {/* Active Character Detail Card */}
      {activeChar && (
        <div className="w-full bg-white border-2 border-duo-gray-300 rounded-2xl p-3.5 mb-4 shadow-duo-card flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-duo-blue-light/50 border-2 border-duo-blue rounded-xl flex items-center justify-center text-3xl font-bold font-['Noto_Sans_JP'] text-duo-blue-dark">
              {scriptType === 'hira' ? activeChar.hira : activeChar.kata}
            </div>
            <div>
              <div className="text-base font-black text-gray-800">{activeChar.romaji}</div>
              <div className="text-xs font-bold text-gray-500">
                Ejemplo: <span className="text-gray-800">{activeChar.example}</span> ({activeChar.exampleMeaning})
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const charToSpeak = scriptType === 'hira' ? activeChar.hira : activeChar.kata;
              sound.speakJapanese(charToSpeak);
            }}
            className="p-3 bg-duo-blue text-white rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue-dark transition-all"
            title="Escuchar"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Characters Grid */}
      <div className="w-full grid grid-cols-5 gap-2 pb-16">
        {list.map((item, idx) => {
          const char = scriptType === 'hira' ? item.hira : item.kata;
          const isSelected = activeChar?.romaji === item.romaji;

          return (
            <button
              key={`${item.romaji}-${idx}`}
              onClick={() => handleSelectChar(item)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 transition-all active:translate-y-0.5 ${
                isSelected
                  ? 'border-duo-blue bg-duo-blue-light/50 shadow-duo-btn-sm'
                  : 'border-duo-gray-200 bg-white hover:border-gray-300 shadow-duo-card'
              }`}
            >
              <span className="text-2xl font-bold font-['Noto_Sans_JP'] text-gray-800">
                {char}
              </span>
              <span className="text-[10px] font-extrabold text-gray-400 mt-0.5">
                {item.romaji}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

