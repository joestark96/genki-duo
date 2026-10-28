import React, { useState } from 'react';
import { BookOpen, Volume2, Search, Lightbulb, Sparkles, BookMarked, ArrowLeft, ChevronDown } from 'lucide-react';
import { unitTheories, TheorySection } from '../data/theoryData';
import { sound } from '../services/sound';

interface TheoryPageProps {
  initialUnitId?: number;
  onBackToRoadmap?: () => void;
}

export const TheoryPage: React.FC<TheoryPageProps> = ({
  initialUnitId = 0,
  onBackToRoadmap
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<number>(initialUnitId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const currentUnit = unitTheories.find(u => u.unitId === selectedUnitId) || unitTheories[0];

  // Filter sections by search and category
  const filteredSections = currentUnit.sections.filter(sec => {
    const matchesCat = activeCategory === 'all' || sec.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCat;

    const matchesQuery =
      sec.title.toLowerCase().includes(query) ||
      (sec.japaneseTitle && sec.japaneseTitle.toLowerCase().includes(query)) ||
      sec.summary.toLowerCase().includes(query) ||
      sec.content.some(c => c.toLowerCase().includes(query)) ||
      (sec.examples && sec.examples.some(e => e.japanese.includes(query) || e.spanish.toLowerCase().includes(query)));

    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col items-center animate-fade-in">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        {onBackToRoadmap && (
          <button
            onClick={() => {
              sound.playTap();
              onBackToRoadmap();
            }}
            className="p-2 -ml-2 text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1 font-bold text-xs"
          >
            <ArrowLeft className="w-5 h-5" /> Volver al Roadmap
          </button>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-black uppercase tracking-wider text-duo-blue flex items-center gap-1 bg-duo-blue-light/50 px-2.5 py-1 rounded-full border border-duo-blue/30">
            <BookMarked className="w-3.5 h-3.5" /> Guía Genki
          </span>
        </div>
      </div>

      {/* Main Title Banner */}
      <div
        className="w-full p-5 rounded-3xl text-white shadow-md mb-4 relative overflow-hidden transition-all"
        style={{ backgroundColor: currentUnit.themeColor }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="px-2.5 py-0.5 bg-black/25 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {currentUnit.genkiChapter}
          </span>
          <span className="text-xs font-black opacity-90">
            Unidad {currentUnit.unitId + 1}
          </span>
        </div>

        <h1 className="text-xl md:text-2xl font-black tracking-tight mb-1">
          {currentUnit.title}
        </h1>
        <p className="text-xs font-bold opacity-90 leading-relaxed">
          {currentUnit.description}
        </p>
      </div>

      {/* Unit Dropdown Selector */}
      <div className="w-full mb-4">
        <label className="block text-[11px] font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 ml-1 flex items-center justify-between">
          <span>Unidad a estudiar:</span>
          <span className="text-duo-blue font-bold">{unitTheories.length} unidades disponibles</span>
        </label>
        <div className="relative">
          <select
            value={selectedUnitId}
            onChange={(e) => {
              sound.playTap();
              setSelectedUnitId(Number(e.target.value));
            }}
            className="w-full appearance-none bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] hover:border-duo-blue focus:border-duo-blue rounded-2xl py-3 px-4 pr-10 text-xs md:text-sm font-black text-gray-800 dark:text-gray-100 shadow-[0_4px_0_0_#e5e5e5] dark:shadow-none focus:outline-none transition-all cursor-pointer"
          >
            {unitTheories.map((unit) => (
              <option key={unit.unitId} value={unit.unitId} className="py-2 text-xs font-bold text-gray-800 dark:text-gray-100 dark:bg-[#18272e]">
                Unidad {unit.unitId}: {unit.title} ({unit.genkiChapter})
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500 dark:text-gray-400">
            <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="w-full relative mb-3">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar tema, kanji, partícula (ej. は, です, dakuten)..."
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

      {/* Category Filter Pills */}
      <div className="w-full flex gap-1.5 overflow-x-auto pb-1 mb-5">
        {[
          { id: 'all', label: 'Todos' },
          { id: 'grammar', label: 'Gramática' },
          { id: 'writing', label: 'Escritura' },
          { id: 'vocabulary', label: 'Vocabulario' },
          { id: 'culture', label: 'Cultura' }
        ].map((cat) => {
          const isCatActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                sound.playTap();
                setActiveCategory(cat.id);
              }}
              className={`px-3 py-1.5 rounded-xl font-bold text-[11px] transition-all border ${
                isCatActive
                  ? 'bg-gray-800 dark:bg-duo-green text-white border-gray-900 dark:border-duo-green-dark shadow-sm'
                  : 'bg-gray-100 dark:bg-[#18272e] text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#283842] hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Theory Sections List */}
      <div className="w-full flex flex-col gap-5">
        {filteredSections.length === 0 ? (
          <div className="p-8 text-center text-gray-400 font-bold text-sm bg-white border-2 border-dashed border-duo-gray-200 rounded-3xl">
            No se encontraron temas con esos filtros en esta unidad.
          </div>
        ) : (
          filteredSections.map((sec) => (
            <TheorySectionCard key={sec.id} section={sec} />
          ))
        )}
      </div>
    </div>
  );
};

// Sub-component for individual theory sections
const TheorySectionCard: React.FC<{ section: TheorySection }> = ({ section }) => {
  return (
    <article className="w-full bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-5 shadow-duo-card dark:shadow-none transition-all">
      {/* Section Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            {section.category === 'grammar' ? 'Gramática' : section.category === 'writing' ? 'Escritura' : section.category === 'vocabulary' ? 'Vocabulario' : 'Cultura'}
          </span>
          <h2 className="text-base md:text-lg font-black text-gray-900 dark:text-gray-100 mt-1">
            {section.title}
          </h2>
          {section.japaneseTitle && (
            <p className="text-xs font-bold text-duo-blue font-['Noto_Sans_JP']">
              {section.japaneseTitle}
            </p>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
        {section.summary}
      </p>

      {/* Formula Box (if present) */}
      {section.formula && (
        <div className="p-3 bg-duo-blue-light/30 dark:bg-duo-blue/10 border-2 border-duo-blue/40 dark:border-duo-blue/30 rounded-2xl mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-duo-blue flex-shrink-0" />
          <div className="text-xs font-black text-duo-blue-dark dark:text-duo-blue font-mono">
            {section.formula}
          </div>
        </div>
      )}

      {/* Content bullets */}
      <div className="space-y-1.5 mb-4">
        {section.content.map((paragraph, idx) => (
          <p key={idx} className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Table (if present) */}
      {section.table && (
        <div className="overflow-x-auto my-4 border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl shadow-sm">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 border-b-2 border-duo-gray-200 dark:border-[#283842] font-black text-[11px] text-gray-700 dark:text-gray-200">
            {section.table.title}
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-[#131f24] border-b border-gray-200 dark:border-[#283842] text-gray-600 dark:text-gray-300 font-black">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="p-2 text-[11px]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-[#283842]">
              {section.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-50/80 dark:hover:bg-[#131f24]/80 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2 font-bold text-gray-800 dark:text-gray-200 text-[11px] font-['Noto_Sans_JP']">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Example sentences with audio */}
      {section.examples && section.examples.length > 0 && (
        <div className="mt-4 pt-3 border-t-2 border-gray-100 dark:border-[#283842]">
          <h4 className="text-[11px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-wider mb-2">
            Ejemplos y Pronunciación
          </h4>
          <div className="space-y-2">
            {section.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] rounded-xl flex items-center justify-between gap-3 group hover:border-duo-blue/50 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold font-['Noto_Sans_JP'] text-gray-900 dark:text-gray-100">
                      {ex.japanese}
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-gray-500 font-normal">
                      ({ex.romaji})
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-0.5">
                    {ex.spanish}
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.playTap();
                    sound.speakJapanese(ex.audioText);
                  }}
                  className="p-2 bg-duo-blue text-white rounded-xl shadow-duo-btn-sm active:translate-y-0.5 hover:bg-duo-blue-dark transition-all flex-shrink-0"
                  title="Escuchar pronunciación"
                >
                  <Volume2 className="w-4 h-4 stroke-[2.5px]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Genki Tip */}
      {section.tip && (
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800/50 rounded-2xl flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
            <strong className="font-black text-amber-800 dark:text-amber-300">Consejo Genki: </strong>
            {section.tip}
          </div>
        </div>
      )}
    </article>
  );
};
