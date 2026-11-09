import React, { useState } from 'react';
import {
  BookOpen, Volume2, Search, Lightbulb, Sparkles, BookMarked, ArrowLeft,
  ChevronDown, Headphones, PenTool, CheckCircle2, Play, Star, RotateCcw,
  Check, Lock, Award, GraduationCap, Flame, ArrowRight, FileText
} from 'lucide-react';
import { Unit, LessonNode, UserProfile } from '../types';
import { unitTheories, TheorySection } from '../data/theoryData';
import { genkiCurriculum } from '../data/genkiCurriculum';
import { sound } from '../services/sound';
import { QuizModal } from '../components/Quiz/QuizModal';
import { expandLessonExercises } from '../utils/lessonExpander';

interface TheoryPageProps {
  initialUnitId?: number;
  onBackToRoadmap?: () => void;
  units?: Unit[];
  userProfile?: UserProfile;
  onCompleteLesson?: (nodeId: string, earnedXp: number, stars: number) => void;
  onDeductHeart?: () => void;
}

export const TheoryPage: React.FC<TheoryPageProps> = ({
  initialUnitId = 0,
  onBackToRoadmap,
  units,
  userProfile,
  onCompleteLesson,
  onDeductHeart
}) => {
  const [studyMode, setStudyMode] = useState<'theory' | 'workbook'>('theory');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(initialUnitId === 0 ? 1 : initialUnitId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeQuizLesson, setActiveQuizLesson] = useState<LessonNode | null>(null);
  const [expandedPreviewNodeId, setExpandedPreviewNodeId] = useState<string | null>(null);

  // Curriculum source (from state or static master)
  const curriculumUnits = units && units.length > 0 ? units : genkiCurriculum;
  const currentTheoryUnit = unitTheories.find(u => u.unitId === selectedUnitId) || unitTheories[0];
  const currentCurriculumUnit = curriculumUnits.find(u => u.id === selectedUnitId) || curriculumUnits[1] || curriculumUnits[0];

  // All workbook nodes for current unit
  const workbookNodesForUnit = currentCurriculumUnit.nodes.filter(n =>
    n.title.toLowerCase().includes('workbook') || n.id.includes('wb')
  );

  // Total workbook nodes across the entire curriculum
  const totalWorkbookNodesCount = curriculumUnits.reduce((acc, u) =>
    acc + u.nodes.filter(n => n.title.toLowerCase().includes('workbook') || n.id.includes('wb')).length, 0
  );

  // Filter theory sections by search and category
  const filteredTheorySections = currentTheoryUnit.sections.filter(sec => {
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

  const handleStartWorkbookLesson = (node: LessonNode) => {
    sound.playTap();
    const expanded = expandLessonExercises(node, currentCurriculumUnit);
    setActiveQuizLesson(expanded);
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col items-center animate-fade-in">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between mb-3">
        {onBackToRoadmap && (
          <button
            onClick={() => {
              sound.playTap();
              onBackToRoadmap();
            }}
            className="p-2 -ml-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center gap-1 font-bold text-xs cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" /> Volver al Roadmap
          </button>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full border border-indigo-300 dark:border-indigo-700">
            <BookMarked className="w-3.5 h-3.5" /> Genki I & II
          </span>
        </div>
      </div>

      {/* Primary Study Switch: Textbook Theory vs Workbook Practice */}
      <div className="w-full grid grid-cols-2 gap-2 p-1.5 bg-gray-100 dark:bg-[#18272e] rounded-2xl mb-4 border-2 border-duo-gray-200 dark:border-[#283842]">
        <button
          onClick={() => {
            sound.playTap();
            setStudyMode('theory');
          }}
          className={`py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            studyMode === 'theory'
              ? 'bg-white dark:bg-[#20323c] text-duo-blue dark:text-sky-300 shadow-sm border border-gray-200 dark:border-gray-700'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-4 h-4 stroke-[2.5px]" />
          <span>Teoría (Textbook)</span>
        </button>

        <button
          onClick={() => {
            sound.playTap();
            setStudyMode('workbook');
            if (selectedUnitId === 0) setSelectedUnitId(1);
          }}
          className={`py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            studyMode === 'workbook'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <BookMarked className="w-4 h-4 stroke-[2.5px]" />
          <span>Cuaderno (Workbook)</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-white/20 font-black">
            {workbookNodesForUnit.length}
          </span>
        </button>
      </div>

      {/* Main Banner */}
      {studyMode === 'theory' ? (
        <div
          className="w-full p-5 rounded-3xl text-white shadow-md mb-4 relative overflow-hidden transition-all"
          style={{ backgroundColor: currentTheoryUnit.themeColor || '#58cc02' }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2.5 py-0.5 bg-black/25 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {currentTheoryUnit.genkiChapter}
            </span>
            <span className="text-xs font-black opacity-90">
              Unidad {currentTheoryUnit.unitId + 1}
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-black tracking-tight mb-1">
            {currentTheoryUnit.title}
          </h1>
          <p className="text-xs font-bold opacity-90 leading-relaxed">
            {currentTheoryUnit.description}
          </p>
        </div>
      ) : (
        <div className="w-full p-5 rounded-3xl text-white shadow-md mb-4 relative overflow-hidden bg-gradient-to-tr from-indigo-700 via-indigo-600 to-purple-600 border-2 border-indigo-400/40">
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-2.5 py-0.5 bg-white/20 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
              <BookMarked className="w-3 h-3" />
              Cuaderno Oficial Genki
            </span>
            <span className="text-xs font-black text-white/90">
              Lección {currentCurriculumUnit.id}
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-black tracking-tight mb-1">
            Workbook: {currentCurriculumUnit.title}
          </h1>
          <p className="text-xs font-bold text-white/90 leading-relaxed">
            Ejercicios auténticos del libro de trabajo: comprensión auditiva con audio nativo, transformaciones de conjugaciones y diálogos de integración.
          </p>
        </div>
      )}

      {/* Unit Dropdown Selector */}
      <div className="w-full mb-4">
        <label className="block text-[11px] font-black uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-1.5 ml-1 flex items-center justify-between">
          <span>Unidad / Lección de Genki:</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">
            {studyMode === 'workbook'
              ? `${totalWorkbookNodesCount} cuadernos disponibles`
              : `${unitTheories.length} unidades disponibles`}
          </span>
        </label>
        <div className="relative">
          <select
            value={selectedUnitId}
            onChange={(e) => {
              sound.playTap();
              setSelectedUnitId(Number(e.target.value));
            }}
            className="w-full appearance-none bg-white dark:bg-[#18272e] border-2 border-duo-gray-300 dark:border-[#283842] hover:border-indigo-500 focus:border-indigo-500 rounded-2xl py-3 px-4 pr-10 text-xs md:text-sm font-black text-gray-800 dark:text-gray-100 shadow-[0_4px_0_0_#e5e5e5] dark:shadow-none focus:outline-none transition-all cursor-pointer"
          >
            {curriculumUnits.map((unit) => {
              const wbCount = unit.nodes.filter(n => n.title.toLowerCase().includes('workbook') || n.id.includes('wb')).length;
              return (
                <option key={unit.id} value={unit.id} className="py-2 text-xs font-bold text-gray-800 dark:text-gray-100 dark:bg-[#18272e]">
                  {unit.id === 0 ? 'Unidad 0: Alfabetos Kana' : `Lección ${unit.id}: ${unit.title}`} {studyMode === 'workbook' && wbCount > 0 ? `(${wbCount} Workbooks)` : ''}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-500 dark:text-gray-400">
            <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
          </div>
        </div>
      </div>

      {/* VIEW 1: TEXTBOOK THEORY */}
      {studyMode === 'theory' && (
        <>
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
                      ? 'bg-gray-800 dark:bg-duo-green text-white dark:text-gray-950 font-black border-gray-900 dark:border-duo-green-dark shadow-sm'
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
            {filteredTheorySections.length === 0 ? (
              <div className="p-8 text-center text-gray-400 font-bold text-sm bg-white dark:bg-[#18272e] border-2 border-dashed border-duo-gray-200 dark:border-[#283842] rounded-3xl">
                No se encontraron temas con esos filtros en esta unidad.
              </div>
            ) : (
              filteredTheorySections.map((sec) => (
                <TheorySectionCard key={sec.id} section={sec} />
              ))
            )}
          </div>
        </>
      )}

      {/* VIEW 2: WORKBOOK PRACTICE & EXERCISES */}
      {studyMode === 'workbook' && (
        <div className="w-full flex flex-col gap-4">
          {selectedUnitId === 0 ? (
            <div className="p-6 text-center bg-white dark:bg-[#18272e] border-2 border-indigo-200 dark:border-indigo-900 rounded-3xl shadow-sm flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <BookMarked className="w-6 h-6 stroke-[2.5px]" />
              </div>
              <h3 className="text-base font-black text-gray-800 dark:text-gray-100">
                Unidad 0: Alfabetos Kana
              </h3>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                La Unidad 0 se enfoca en el trazo y lectura de Hiragana y Katakana. Los cuadernos de trabajo oficiales de Genki (Workbook) inician formalmente a partir de la Lección 1.
              </p>
              <button
                onClick={() => {
                  sound.playTap();
                  setSelectedUnitId(1);
                }}
                className="mt-2 py-2.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider shadow-[0_3px_0_0_#3730a3] active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ir al Workbook de la Lección 1</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : workbookNodesForUnit.length === 0 ? (
            <div className="p-8 text-center text-gray-400 font-bold text-sm bg-white dark:bg-[#18272e] border-2 border-dashed border-duo-gray-200 dark:border-[#283842] rounded-3xl">
              No hay cuadernos de trabajo configurados para esta lección.
            </div>
          ) : (
            workbookNodesForUnit.map((node, nIdx) => {
              const isCompleted = node.stars > 0 || node.completedSteps >= node.totalSteps;
              const isListening = node.exercises.some(e => e.type === 'listening' || e.japaneseVoiceText);
              const isPreviewOpen = expandedPreviewNodeId === node.id;

              return (
                <div
                  key={node.id}
                  className="w-full bg-white dark:bg-[#18272e] border-2 border-indigo-200/80 dark:border-[#283842] hover:border-indigo-400 dark:hover:border-indigo-500 rounded-3xl p-5 shadow-sm transition-all flex flex-col gap-3 relative overflow-hidden"
                >
                  {/* Top Row: Icon + Title + Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                        {isListening ? (
                          <Headphones className="w-6 h-6 stroke-[2.5px]" />
                        ) : (
                          <BookMarked className="w-6 h-6 stroke-[2.5px]" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-400/30">
                            Cuaderno #{nIdx + 1}
                          </span>
                          {isCompleted && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                              {node.stars || 3}/3
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-black text-gray-900 dark:text-gray-100 leading-snug mt-1">
                          {node.title}
                        </h3>
                        <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-['Noto_Sans_JP']">
                          {node.japaneseTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                    {node.description}
                  </p>

                  {/* Features and Stats Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    <span className="px-2.5 py-1 rounded-xl bg-gray-100 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-gray-400" />
                      <span>{node.exercises.length} Ejercicios</span>
                    </span>

                    {isListening && (
                      <span className="px-2.5 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-800 flex items-center gap-1">
                        <Headphones className="w-3.5 h-3.5" />
                        <span>Audio Nativo</span>
                      </span>
                    )}

                    <span className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>+15 XP</span>
                    </span>
                  </div>

                  {/* Collapsible Exercise Preview */}
                  <div className="pt-2 border-t border-gray-100 dark:border-[#283842]">
                    <button
                      onClick={() => setExpandedPreviewNodeId(isPreviewOpen ? null : node.id)}
                      className="text-[11px] font-black text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-300 flex items-center justify-between w-full cursor-pointer py-1"
                    >
                      <span>Ver lista de preguntas ({node.exercises.length})</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isPreviewOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isPreviewOpen && (
                      <div className="mt-2 space-y-2 pt-1 border-t border-dashed border-gray-200 dark:border-gray-700/60 animate-fade-in">
                        {node.exercises.map((ex, exIdx) => (
                          <div
                            key={ex.id || exIdx}
                            className="p-2.5 bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842] rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-start gap-2"
                          >
                            <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-black text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                              {exIdx + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-gray-800 dark:text-gray-100">{ex.prompt}</p>
                              {ex.promptSub && (
                                <p className="text-[11px] text-indigo-500 dark:text-indigo-400 font-['Noto_Sans_JP'] mt-0.5">
                                  {ex.promptSub}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Primary Launch Button */}
                  <button
                    onClick={() => handleStartWorkbookLesson(node)}
                    className="w-full mt-1 py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:translate-y-1 text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_0_0_#3730a3] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isCompleted ? (
                      <>
                        <RotateCcw className="w-4 h-4 stroke-[2.5px]" />
                        <span>Repasar Cuaderno de Trabajo</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-white" />
                        <span>¡Hacer Ejercicios de Workbook!</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Interactive Quiz Modal for Workbook Practice directly from Study section */}
      {activeQuizLesson && (
        <QuizModal
          lesson={activeQuizLesson}
          userProfile={userProfile || {
            id: 'default',
            username: 'Estudiante',
            hearts: 5,
            maxHearts: 5,
            streakDays: 1,
            xp: 0,
            gems: 100,
            soundEnabled: true,
            furiganaMode: 'always',
            showRomaji: true,
            darkMode: false,
            lastActiveDate: new Date().toISOString()
          }}
          onClose={() => setActiveQuizLesson(null)}
          onCompleteLesson={(nodeId, xp, stars) => {
            if (onCompleteLesson) {
              onCompleteLesson(nodeId, xp, stars);
            }
            setActiveQuizLesson(null);
          }}
          onDeductHeart={onDeductHeart || (() => {})}
          isJumpAhead={false}
          isPractice={false}
        />
      )}
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
        <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-200 dark:border-amber-700/60 rounded-2xl flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-300 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 dark:text-amber-100 font-medium leading-relaxed">
            <strong className="font-black text-amber-800 dark:text-amber-200">Consejo Genki: </strong>
            {section.tip}
          </div>
        </div>
      )}
    </article>
  );
};
