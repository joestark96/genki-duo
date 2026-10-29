import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Search, X } from 'lucide-react';
import { gojuonKanaList, dakutenKanaList, KanaChar } from '../../data/kanaTableData';
import { kanjiList, KanjiItem } from '../../data/kanjiData';
import { KanjiDetailModal } from './KanjiDetailModal';
import { sound } from '../../services/sound';

interface KanaTableProps {
  showRomaji?: boolean;
}

export const KanaTable: React.FC<KanaTableProps> = ({ showRomaji = true }) => {
  const [scriptType, setScriptType] = useState<'hira' | 'kata' | 'kanji'>('hira');
  const [tableType, setTableType] = useState<'gojuon' | 'dakuten'>('gojuon');
  const [activeChar, setActiveChar] = useState<KanaChar | null>(gojuonKanaList[0]);

  // Kanji state
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);
  const [kanjiFilter, setKanjiFilter] = useState<'all' | 'N5' | 'N4' | 'N3'>('all');
  const [kanjiSearch, setKanjiSearch] = useState<string>('');

  const kanaList = tableType === 'gojuon' ? gojuonKanaList : dakutenKanaList;

  const handleSelectChar = (item: KanaChar) => {
    setActiveChar(item);
    const charToSpeak = scriptType === 'hira' ? item.hira : item.kata;
    sound.speakJapanese(charToSpeak);
  };

  const handleSelectKanji = (item: KanjiItem) => {
    sound.playTap();
    sound.speakJapanese(item.kanji);
    setSelectedKanji(item);
  };

  // Filter kanjis
  const filteredKanjis = kanjiList.filter((item) => {
    if (kanjiFilter !== 'all' && item.jlptLevel !== kanjiFilter) {
      return false;
    }
    if (kanjiSearch.trim()) {
      const q = kanjiSearch.toLowerCase().trim();
      const matchKanji = item.kanji.includes(q);
      const matchSpanish = item.spanish.toLowerCase().includes(q);
      const matchEnglish = item.english?.toLowerCase().includes(q) || false;
      const matchOnyomi = item.onyomi.toLowerCase().includes(q);
      const matchKunyomi = item.kunyomi.toLowerCase().includes(q);
      return matchKanji || matchSpanish || matchEnglish || matchOnyomi || matchKunyomi;
    }
    return true;
  });

  return (
    <div className="max-w-md mx-auto w-full px-4 py-3 flex flex-col items-center animate-fade-in">
      {/* Script Selector (Hiragana vs Katakana vs Kanji) */}
      <div className="w-full flex bg-duo-gray-200 dark:bg-[#18272e] p-1 rounded-2xl mb-3 border border-transparent dark:border-[#283842] transition-colors">
        <button
          onClick={() => {
            sound.playTap();
            setScriptType('hira');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
            scriptType === 'hira'
              ? 'bg-white dark:bg-[#283842] text-duo-green shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Hiragana (ひら)
        </button>
        <button
          onClick={() => {
            sound.playTap();
            setScriptType('kata');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
            scriptType === 'kata'
              ? 'bg-white dark:bg-[#283842] text-duo-blue shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Katakana (カタ)
        </button>
        <button
          onClick={() => {
            sound.playTap();
            setScriptType('kanji');
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
            scriptType === 'kanji'
              ? 'bg-white dark:bg-[#283842] text-duo-purple shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          Kanji (漢字)
        </button>
      </div>

      {/* --- KANA VIEW (Hiragana / Katakana) --- */}
      {scriptType !== 'kanji' && (
        <>
          {/* Group Selector (Básicos vs Dakuten) */}
          <div className="w-full flex gap-2 mb-3">
            <button
              onClick={() => {
                sound.playTap();
                setTableType('gojuon');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-extrabold border-2 transition-all ${
                tableType === 'gojuon'
                  ? 'bg-duo-green-light dark:bg-duo-green/25 border-duo-green text-duo-green-dark dark:text-green-300'
                  : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-500 dark:text-gray-300'
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
                  ? 'bg-duo-orange-light dark:bg-duo-orange/25 border-duo-orange text-duo-orange-dark dark:text-orange-300'
                  : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-500 dark:text-gray-300'
              }`}
            >
              Modificados (゛/ ゜)
            </button>
          </div>

          {/* Active Character Detail Card */}
          {activeChar && (
            <div className="w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] rounded-2xl p-3.5 mb-4 shadow-duo-card dark:shadow-none flex items-center justify-between transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-duo-blue-light/50 dark:bg-duo-blue/20 border-2 border-duo-blue rounded-xl flex items-center justify-center text-3xl font-bold font-['Noto_Sans_JP'] text-duo-blue-dark dark:text-duo-blue">
                  {scriptType === 'hira' ? activeChar.hira : activeChar.kata}
                </div>
                <div>
                  {showRomaji && (
                    <div className="text-base font-black text-gray-800 dark:text-gray-100">{activeChar.romaji}</div>
                  )}
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-300">
                    Ejemplo: <span className="text-gray-800 dark:text-white font-black font-['Noto_Sans_JP']">{activeChar.example}</span> ({activeChar.exampleMeaning})
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
            {kanaList.map((item, idx) => {
              const char = scriptType === 'hira' ? item.hira : item.kata;
              const isSelected = activeChar?.romaji === item.romaji;

              return (
                <button
                  key={`${item.romaji}-${idx}`}
                  onClick={() => handleSelectChar(item)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 transition-all active:translate-y-0.5 ${
                    isSelected
                      ? 'border-duo-blue bg-duo-blue-light/50 dark:bg-duo-blue/20 shadow-duo-btn-sm'
                      : 'border-duo-gray-200 dark:border-[#283842] bg-white dark:bg-[#18272e] hover:border-gray-300 dark:hover:border-gray-600 shadow-duo-card dark:shadow-none'
                  }`}
                >
                  <span className="text-2xl font-bold font-['Noto_Sans_JP'] text-gray-800 dark:text-gray-100">
                    {char}
                  </span>
                  {showRomaji && (
                    <span className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 mt-0.5">
                      {item.romaji}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* --- KANJI VIEW (Lista de Kanjis) --- */}
      {scriptType === 'kanji' && (
        <div className="w-full flex flex-col items-center">
          {/* JLPT Filters Row */}
          <div className="w-full flex items-center justify-between gap-1.5 mb-3 overflow-x-auto pb-1">
            <button
              onClick={() => {
                sound.playTap();
                setKanjiFilter('all');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-black border-2 transition-all whitespace-nowrap ${
                kanjiFilter === 'all'
                  ? 'bg-duo-purple-light dark:bg-duo-purple/20 border-duo-purple text-duo-purple-dark dark:text-purple-300'
                  : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-500 dark:text-gray-400'
              }`}
            >
              Todos ({kanjiList.length})
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setKanjiFilter('N5');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-black border-2 transition-all whitespace-nowrap ${
                kanjiFilter === 'N5'
                  ? 'bg-duo-green-light dark:bg-duo-green/20 border-duo-green text-duo-green-dark dark:text-green-300'
                  : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-500 dark:text-gray-400'
              }`}
            >
              N5 ({kanjiList.filter(k => k.jlptLevel === 'N5').length})
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setKanjiFilter('N4');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-black border-2 transition-all whitespace-nowrap ${
                kanjiFilter === 'N4'
                  ? 'bg-duo-blue-light dark:bg-duo-blue/20 border-duo-blue text-duo-blue-dark dark:text-blue-300'
                  : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-500 dark:text-gray-400'
              }`}
            >
              N4 ({kanjiList.filter(k => k.jlptLevel === 'N4').length})
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setKanjiFilter('N3');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-black border-2 transition-all whitespace-nowrap ${
                kanjiFilter === 'N3'
                  ? 'bg-duo-orange-light dark:bg-duo-orange/20 border-duo-orange text-duo-orange-dark dark:text-orange-300'
                  : 'bg-white dark:bg-[#18272e] border-duo-gray-200 dark:border-[#283842] text-gray-500 dark:text-gray-400'
              }`}
            >
              N3 ({kanjiList.filter(k => k.jlptLevel === 'N3').length})
            </button>
          </div>

          {/* Search Input */}
          <div className="w-full relative mb-3">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={kanjiSearch}
              onChange={(e) => setKanjiSearch(e.target.value)}
              placeholder="Buscar kanji, significado o lectura..."
              className="w-full pl-9 pr-8 py-2 rounded-2xl bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] text-xs font-bold text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-duo-purple transition-all"
            />
            {kanjiSearch && (
              <button
                onClick={() => setKanjiSearch('')}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 absolute right-2.5 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Kanjis Grid */}
          {filteredKanjis.length > 0 ? (
            <div className="w-full grid grid-cols-4 gap-2.5 pb-20">
              {filteredKanjis.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectKanji(item)}
                  className="flex flex-col items-center justify-between p-2.5 rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] bg-white dark:bg-[#18272e] hover:border-duo-purple hover:shadow-duo-card dark:hover:border-duo-purple/80 transition-all active:translate-y-0.5 group cursor-pointer"
                >
                  {/* Top Level Pill */}
                  <span className="self-end text-[9px] font-black px-1.5 py-0.2 rounded-md bg-gray-100 dark:bg-[#283842] text-gray-500 dark:text-gray-400">
                    {item.jlptLevel}
                  </span>

                  {/* Big Kanji Character */}
                  <span className="text-3xl font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-50 group-hover:scale-110 group-hover:text-duo-purple transition-all my-1">
                    {item.kanji}
                  </span>

                  {/* Meaning Label */}
                  <span className="text-[10px] font-black text-gray-600 dark:text-gray-300 text-center line-clamp-1">
                    {item.spanish}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="w-full text-center py-12 text-gray-400 dark:text-gray-500 font-bold text-xs">
              No se encontraron kanjis que coincidan con la búsqueda.
            </div>
          )}
        </div>
      )}

      {/* Kanji Detail Modal */}
      <KanjiDetailModal
        kanji={selectedKanji}
        onClose={() => setSelectedKanji(null)}
        showRomaji={showRomaji}
      />
    </div>
  );
};
