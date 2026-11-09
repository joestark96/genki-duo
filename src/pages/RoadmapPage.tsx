import React, { useState, useEffect } from 'react';
import { Unit, LessonNode, UserProfile } from '../types';
import { RoadmapNode } from '../components/Roadmap/RoadmapNode';
import { QuizModal } from '../components/Quiz/QuizModal';
import { BookOpen, Sparkles, CheckCircle2, FastForward, ShieldAlert, Award, Dumbbell, Compass, X, Star, Play, RotateCcw, Lock, BookMarked, Volume2, Headphones } from 'lucide-react';
import { sound } from '../services/sound';
import { createJumpAheadLesson, createMultiUnitJumpAheadLesson } from '../utils/jumpAhead';
import { createPracticeLesson, createUnitReviewLesson } from '../utils/practiceLesson';
import { expandLessonExercises } from '../utils/lessonExpander';

interface RoadmapPageProps {
  units: Unit[];
  userProfile: UserProfile;
  onCompleteLesson: (nodeId: string, earnedXp: number, stars: number) => void;
  onSkipUnit: (unitId: number, targetNodeId?: string, skippedNodeIds?: string[]) => void;
  onDeductHeart: () => void;
  onOpenTheory?: (unitId: number) => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({
  units,
  userProfile,
  onCompleteLesson,
  onSkipUnit,
  onDeductHeart,
  onOpenTheory
}) => {
  const [activeQuizLesson, setActiveQuizLesson] = useState<LessonNode | null>(null);
  const [selectedNodeForPopover, setSelectedNodeForPopover] = useState<{
    node: LessonNode;
    unitId: number;
    unitTitle: string;
  } | null>(null);
  const [isJumpAheadActive, setIsJumpAheadActive] = useState(false);
  const [isPracticeActive, setIsPracticeActive] = useState(false);
  const [roadmapMode, setRoadmapMode] = useState<'textbook' | 'workbook'>(() => {
    const saved = localStorage.getItem('nihongo_roadmap_mode');
    return saved === 'workbook' ? 'workbook' : 'textbook';
  });

  const handleModeChange = (mode: 'textbook' | 'workbook') => {
    sound.playTap();
    setRoadmapMode(mode);
    localStorage.setItem('nihongo_roadmap_mode', mode);
  };

  // Helper to determine if a node belongs to the Workbook
  const isWorkbookNode = (n: LessonNode) =>
    n.title.toLowerCase().includes('workbook') || n.id.includes('wb');

  // Determine which node is currently active (first unlocked but uncompleted in current mode)
  const getActiveNodeId = (): string => {
    const isTarget = (n: LessonNode) =>
      roadmapMode === 'workbook' ? isWorkbookNode(n) : !isWorkbookNode(n);

    for (const unit of units) {
      for (const node of unit.nodes) {
        if (!isTarget(node)) continue;
        if (node.unlocked && node.stars === 0) {
          return node.id;
        }
      }
    }
    // If all unlocked nodes are completed, find the last unlocked node of current mode
    let lastUnlockedId = '';
    for (const unit of units) {
      for (const node of unit.nodes) {
        if (!isTarget(node)) continue;
        if (node.unlocked) {
          lastUnlockedId = node.id;
        }
      }
    }
    return lastUnlockedId;
  };

  const activeNodeId = getActiveNodeId();

  // Enfocar automáticamente la lección disponible al entrar o cambiar a la pestaña de Roadmap
  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    const scrollToAvailableLesson = (behavior: ScrollBehavior = 'smooth') => {
      if (!activeNodeId) return false;
      const element = document.getElementById(`roadmap-node-${activeNodeId}`);
      if (element) {
        element.scrollIntoView({ behavior, block: 'center' });
        element.classList.add('scale-105');
        setTimeout(() => {
          element.classList.remove('scale-105');
        }, 700);
        return true;
      }
      return false;
    };

    // Primer intento tras montar/pintar
    timer1 = setTimeout(() => {
      const ok = scrollToAvailableLesson('smooth');
      if (!ok) {
        // Segundo intento en caso de que el layout o fuentes tarden unos ms más
        timer2 = setTimeout(() => {
          scrollToAvailableLesson('smooth');
        }, 220);
      }
    }, 120);

    const handleFocusEvent = () => {
      scrollToAvailableLesson('smooth');
    };

    window.addEventListener('focus-roadmap-active-node', handleFocusEvent);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('focus-roadmap-active-node', handleFocusEvent);
    };
  }, [activeNodeId, roadmapMode]);

  const handleStartJumpAhead = (unit: Unit) => {
    sound.playTap();
    const challengeLesson = createMultiUnitJumpAheadLesson({
      units,
      targetUnitId: unit.id
    });
    if (challengeLesson) {
      setIsPracticeActive(false);
      setIsJumpAheadActive(true);
      setActiveQuizLesson(challengeLesson);
    }
  };

  const handleStartMultiJump = (targetUnitId: number, targetNodeId?: string) => {
    sound.playTap();
    const challengeLesson = createMultiUnitJumpAheadLesson({
      units,
      targetUnitId,
      targetNodeId
    });
    if (challengeLesson) {
      setIsPracticeActive(false);
      setIsJumpAheadActive(true);
      setActiveQuizLesson(challengeLesson);
    }
  };

  // Scroll to the most recent available lesson node
  const handleScrollToLatest = () => {
    sound.playTap();
    const targetId = getActiveNodeId();
    if (!targetId) return;

    const element = document.getElementById(`roadmap-node-${targetId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('scale-105');
      setTimeout(() => {
        element.classList.remove('scale-105');
      }, 600);
    }
  };

  // Start a practice session with 10-20 random exercises from studied lessons
  const handleStartPractice = () => {
    sound.playTap();
    const practiceLesson = createPracticeLesson(units);
    if (practiceLesson) {
      setIsJumpAheadActive(false);
      setIsPracticeActive(true);
      setActiveQuizLesson(practiceLesson);
    }
  };

  // Start a review session specifically for a completed unit
  const handleStartUnitReview = (unit: Unit) => {
    sound.playTap();
    const reviewLesson = createUnitReviewLesson(unit);
    if (reviewLesson) {
      setIsJumpAheadActive(false);
      setIsPracticeActive(true);
      setActiveQuizLesson(reviewLesson);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-28 flex flex-col items-center relative">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 right-4 z-20 flex flex-col items-end gap-3 pointer-events-none">
        {/* Practice Dumbbell Floating Button */}
        <button
          onClick={handleStartPractice}
          title="Entrenamiento de repaso (10 a 20 ejercicios aleatorios)"
          aria-label="Entrenamiento de repaso"
          className="pointer-events-auto w-12 h-12 rounded-full bg-duo-blue hover:bg-duo-blue-dark active:translate-y-1 active:shadow-none text-white flex items-center justify-center shadow-[0_4px_0_0_#1899d6] border-2 border-white/30 transition-all cursor-pointer group"
        >
          <Dumbbell className="w-5 h-5 stroke-[2.5px] group-hover:rotate-12 transition-transform" />
        </button>

        {/* Scroll to Latest Available Lesson Floating Button */}
        <button
          onClick={handleScrollToLatest}
          title="Deslizar hasta la lección más reciente disponible"
          aria-label="Ir a la lección actual"
          className="pointer-events-auto w-12 h-12 rounded-full bg-duo-green hover:bg-duo-green-dark active:translate-y-1 active:shadow-none text-white flex items-center justify-center shadow-[0_4px_0_0_#46a302] border-2 border-white/30 transition-all cursor-pointer group"
        >
          <Compass className="w-5 h-5 stroke-[2.5px] group-hover:rotate-45 transition-transform" />
        </button>
      </div>

      {/* Selector de Modo del Roadmap: Libro de Texto vs Cuaderno (Workbook) */}
      <div className="w-full max-w-sm mx-auto mb-6 p-1.5 bg-gray-200/90 dark:bg-[#18272e] rounded-2xl border-2 border-duo-gray-200 dark:border-[#283842] flex items-center gap-1.5 shadow-sm relative z-10">
        <button
          onClick={() => handleModeChange('textbook')}
          className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
            roadmapMode === 'textbook'
              ? 'bg-white dark:bg-[#20323c] text-duo-green dark:text-green-400 shadow-md border border-gray-200/80 dark:border-gray-700 scale-[1.02]'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-4 h-4 stroke-[2.5px]" />
          <span>Libro de Texto</span>
        </button>

        <button
          onClick={() => handleModeChange('workbook')}
          className={`flex-1 py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
            roadmapMode === 'workbook'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md scale-[1.02]'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <BookMarked className="w-4 h-4 stroke-[2.5px]" />
          <span>Cuaderno (Workbook)</span>
        </button>
      </div>

      {/* Banner de Modo Cuaderno de Trabajo */}
      {roadmapMode === 'workbook' && (
        <div className="w-full mb-6 p-4 rounded-3xl bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-700/90 text-white shadow-md border border-indigo-400/30 flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <BookMarked className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-md">
                Modo Cuaderno Oficial
              </span>
              <h3 className="text-sm font-black mt-0.5">Ejercicios de Workbook Genki I & II</h3>
            </div>
          </div>
          <span className="text-xs font-black bg-white/20 px-2.5 py-1 rounded-xl">
            23 Lecciones
          </span>
        </div>
      )}

      {/* Units List */}
      {units.map((unit) => {
        const isWorkbook = roadmapMode === 'workbook';
        const currentNodes = isWorkbook
          ? unit.nodes.filter(isWorkbookNode)
          : unit.nodes.filter(n => !isWorkbookNode(n));

        // En modo workbook, si la unidad no tiene ejercicios de workbook (ej. Unidad 0 - Alfabetos Kana), se omite
        if (isWorkbook && currentNodes.length === 0) {
          return null;
        }

        // Si la unidad está desbloqueada en libro de texto, asegurar que el primer ejercicio de workbook esté disponible
        const isUnitUnlockedInTextbook = unit.nodes.some(n => !isWorkbookNode(n) && n.unlocked);
        const displayNodes = currentNodes.map((n, idx) => {
          if (isWorkbook && idx === 0 && isUnitUnlockedInTextbook && !n.unlocked) {
            return { ...n, unlocked: true };
          }
          return n;
        });

        const isUnitUnlocked = displayNodes.some(n => n.unlocked);
        const isUnitCompleted = displayNodes.length > 0 && displayNodes.every(n => n.stars > 0);

        return (
          <div key={unit.id} className="w-full mb-8">
            {/* Unit Header Card */}
            <div
              className={`w-full p-4 rounded-3xl text-white shadow-md mb-6 relative overflow-hidden transition-all ${
                !isUnitUnlocked ? 'opacity-60 saturate-50' : ''
              }`}
              style={{
                backgroundColor: isWorkbook ? '#4f46e5' : unit.themeColor,
                backgroundImage: isWorkbook ? 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #7c3aed 100%)' : undefined
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="px-2.5 py-0.5 bg-black/20 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  {isWorkbook ? <BookMarked className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
                  {isWorkbook ? `${unit.genkiBook} • Cuaderno Oficial` : unit.genkiBook}
                </span>
                <span className="text-xs font-black opacity-90">
                  {isWorkbook ? `Workbook Lección ${unit.id}` : `Unidad ${unit.id + 1}`}
                </span>
              </div>

              <h3 className="text-lg font-black tracking-tight">
                {isWorkbook ? `Cuaderno: ${unit.title.replace(/^Genki\s+Lección\s+\d+:\s*/i, '')}` : unit.title}
              </h3>
              <p className="text-xs font-bold opacity-90 mt-0.5">
                {isWorkbook ? `Ejercicios del cuaderno oficial de trabajo (${displayNodes.length} módulos)` : unit.subtitle}
              </p>

              {/* Theory Guide Pill Button */}
              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20">
                <button
                  onClick={() => {
                    sound.playTap();
                    if (onOpenTheory) onOpenTheory(unit.id);
                  }}
                  className="px-3 py-1.5 bg-white/20 hover:bg-white/30 active:translate-y-0.5 rounded-xl font-black text-xs text-white flex items-center gap-1.5 transition-all shadow-sm backdrop-blur-sm cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Ver Guía de Teoría
                </button>

                {isWorkbook ? (
                  <span className="px-2.5 py-1 bg-white/20 rounded-xl text-[11px] font-black flex items-center gap-1">
                    <Headphones className="w-3.5 h-3.5" />
                    <span>Audios Incluidos</span>
                  </span>
                ) : (
                  !isUnitUnlocked && (
                    <button
                      onClick={() => handleStartMultiJump(unit.id)}
                      className="px-3 py-1.5 bg-duo-orange hover:bg-duo-orange-dark active:translate-y-0.5 rounded-xl font-black text-xs text-white flex items-center gap-1.5 transition-all shadow-sm border border-white/20 cursor-pointer"
                      title={`Saltar hasta ${unit.title}`}
                    >
                      <FastForward className="w-3.5 h-3.5 stroke-[2.5px]" />
                      <span>Saltar a esta unidad</span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Serpentine Roadmap Nodes */}
            <div className="flex flex-col items-center relative">
              {displayNodes.map((node, nodeIdx) => {
                const pattern = ['center', 'left', 'center', 'right'] as const;
                const position = pattern[nodeIdx % pattern.length];
                const isActive = node.id === activeNodeId;

                return (
                  <RoadmapNode
                    key={node.id}
                    node={node}
                    position={position}
                    isActive={isActive}
                    onSelectNode={(selected) => {
                      setSelectedNodeForPopover({
                        node: selected,
                        unitId: unit.id,
                        unitTitle: isWorkbook
                          ? `Cuaderno ${unit.title}`
                          : `${unit.title} — ${unit.subtitle}`
                      });
                    }}
                  />
                );
              })}
            </div>

            {/* Jump Ahead Challenge Card (Only if unit is unlocked and not fully completed) */}
            {isUnitUnlocked && !isUnitCompleted && (
              <div className="w-full mt-6 mb-2 px-1">
                <div className="bg-white dark:bg-[#18272e] border-2 border-duo-orange/40 dark:border-duo-orange/50 rounded-3xl p-4 shadow-duo-card dark:shadow-none flex flex-col items-center text-center transition-colors">
                  <div className="w-12 h-12 bg-duo-orange-light dark:bg-duo-orange/20 rounded-2xl flex items-center justify-center text-duo-orange-dark dark:text-duo-orange mb-2 border-2 border-duo-orange/30">
                    <FastForward className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                  <h4 className="text-sm font-black text-gray-800 dark:text-gray-100 uppercase tracking-wide">
                    Prueba de Salto de Nivel
                  </h4>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 mb-3 max-w-[280px]">
                    ¿Ya sabes este tema? Demuestra tu nivel en este examen especial. <strong>Si cometes 3 errores, no podrás saltar la unidad.</strong>
                  </p>

                  <button
                    onClick={() => handleStartMultiJump(unit.id)}
                    className="w-full py-3 bg-duo-orange hover:bg-duo-orange-dark text-white font-black text-xs rounded-2xl shadow-[0_4px_0_0_#e08500] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FastForward className="w-4 h-4" />
                    <span>Saltar esta unidad ({unit.title.split(':')[0]})</span>
                  </button>

                  {/* Selector rápido para saltar varias unidades hacia adelante */}
                  {units.some(u => u.id > unit.id && !u.nodes.some(n => n.unlocked)) && (
                    <div className="w-full mt-3.5 pt-3 border-t border-gray-100 dark:border-[#283842] flex flex-col items-center">
                      <span className="text-[11px] font-black text-gray-500 dark:text-gray-400 mb-2">
                        ⚡ O salta varias lecciones hasta otra unidad:
                      </span>
                      <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
                        {units
                          .filter(u => u.id > unit.id && !u.nodes.some(n => n.unlocked))
                          .slice(0, 6)
                          .map(targetU => (
                            <button
                              key={targetU.id}
                              onClick={() => handleStartMultiJump(targetU.id)}
                              className="px-2.5 py-1.5 rounded-xl bg-duo-orange/10 hover:bg-duo-orange hover:text-white dark:bg-duo-orange/20 text-duo-orange-dark dark:text-duo-orange font-black text-[11px] border border-duo-orange/30 transition-all cursor-pointer active:scale-95"
                              title={`Hacer examen para saltar hasta ${targetU.title}`}
                            >
                              Hasta {targetU.title.split(':')[0]}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tarjeta de Salto en Unidades Bloqueadas */}
            {!isUnitUnlocked && (
              <div className="w-full mt-4 mb-2 px-1">
                <div className="bg-white dark:bg-[#18272e] border-2 border-gray-200 dark:border-[#283842] hover:border-duo-orange/40 rounded-3xl p-4 shadow-sm flex flex-col items-center text-center transition-colors">
                  <div className="w-10 h-10 bg-amber-50 dark:bg-amber-950/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-2 border border-amber-200 dark:border-amber-800/40">
                    <FastForward className="w-5 h-5 stroke-[2.5px]" />
                  </div>
                  <h4 className="text-xs font-black text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                    ¿Quieres saltarte hasta aquí?
                  </h4>
                  <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mt-0.5 mb-2.5 max-w-[280px]">
                    Desbloquea directamente la <strong>{unit.title}</strong> con una prueba que evalúa los temas pendientes desde donde estás. (Máximo 3 errores).
                  </p>

                  <button
                    onClick={() => handleStartMultiJump(unit.id)}
                    className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-duo-orange hover:brightness-105 text-white font-black text-xs rounded-2xl shadow-[0_3px_0_0_#d97706] active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FastForward className="w-4 h-4" />
                    <span>Hacer Examen de Salto hasta {unit.title.split(':')[0]}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Botón de Repaso de la Unidad (reemplaza 'Unidad Dominada') */}
            {isUnitCompleted && (
              <div className="w-full mt-5 mb-2 px-1">
                <button
                  onClick={() => handleStartUnitReview(unit)}
                  className="w-full py-3.5 px-4 bg-duo-yellow hover:bg-duo-yellow-dark text-white font-black text-xs rounded-2xl shadow-[0_4px_0_0_#e5b400] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <RotateCcw className="w-4 h-4 stroke-[2.5px] group-hover:-rotate-45 transition-transform" />
                  <span>Repasar {unit.title}</span>
                  <span className="px-2 py-0.5 rounded-lg bg-black/15 text-[10px] lowercase font-black tracking-normal">
                    +20 XP
                  </span>
                </button>
              </div>
            )}
          </div>
        );
      })}

      {/* Popover de Lección al tocar un nodo del Roadmap */}
      {selectedNodeForPopover && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedNodeForPopover(null)}
        >
          <div
            className="bg-white dark:bg-[#18272e] border-2 border-duo-gray-200 dark:border-[#283842] rounded-3xl p-5 shadow-2xl max-w-sm w-full flex flex-col gap-4 animate-scale-up relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => {
                sound.playTap();
                setSelectedNodeForPopover(null);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#20333d] transition-colors cursor-pointer"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Si es ejercicio de Workbook, mostrar cintillo distintivo */}
            {(selectedNodeForPopover.node.title.toLowerCase().includes('workbook') || selectedNodeForPopover.node.id.includes('wb')) && (
              <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 text-white px-3 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-xs mt-1">
                <span className="flex items-center gap-1.5">
                  <BookMarked className="w-4 h-4 stroke-[2.5px]" />
                  <span>Genki Workbook • Cuaderno Oficial</span>
                </span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-md font-black">Práctica</span>
              </div>
            )}

            {/* Cabecera de la Lección */}
            <div className="flex items-center gap-3 pr-6">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0 ${
                  isWorkbookNode(selectedNodeForPopover.node)
                    ? 'bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-[0_4px_0_0_#4338ca]'
                    : !selectedNodeForPopover.node.unlocked
                    ? 'bg-amber-500 shadow-[0_4px_0_0_#d97706]'
                    : selectedNodeForPopover.node.stars > 0
                    ? 'bg-duo-yellow shadow-[0_4px_0_0_#e5b400]'
                    : 'bg-duo-green shadow-[0_4px_0_0_#46a302]'
                }`}
              >
                {isWorkbookNode(selectedNodeForPopover.node) ? (
                  selectedNodeForPopover.node.icon === 'Headphones' ? (
                    <Headphones className="w-7 h-7 stroke-[2.5px]" />
                  ) : (
                    <BookMarked className="w-7 h-7 stroke-[2.5px]" />
                  )
                ) : !selectedNodeForPopover.node.unlocked ? (
                  <Lock className="w-7 h-7 stroke-[2.5px]" />
                ) : selectedNodeForPopover.node.stars > 0 ? (
                  <Star className="w-7 h-7 fill-white stroke-[2.5px]" />
                ) : (
                  <Sparkles className="w-7 h-7 stroke-[2.5px]" />
                )}
              </div>

              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {selectedNodeForPopover.unitTitle}
                </span>
                <h3 className="text-base font-black text-gray-800 dark:text-gray-100 leading-snug">
                  {selectedNodeForPopover.node.title}
                </h3>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500">
                  {selectedNodeForPopover.node.japaneseTitle}
                </p>
              </div>
            </div>

            {/* Indicador de Estado y Estrellas */}
            <div className="flex items-center justify-between p-2.5 rounded-2xl bg-gray-50 dark:bg-[#131f24] border border-gray-200 dark:border-[#283842]">
              <span className="text-xs font-black text-gray-600 dark:text-gray-300">
                {!selectedNodeForPopover.node.unlocked
                  ? '🔒 Estado: Bloqueada'
                  : selectedNodeForPopover.node.stars > 0
                  ? 'Estado: ¡Completada!'
                  : 'Estado: Disponible'}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      selectedNodeForPopover.node.unlocked && i < selectedNodeForPopover.node.stars
                        ? 'fill-amber-400 text-amber-500'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Reproductor de Audio si el ejercicio de Workbook contiene pistas de voz */}
            {isWorkbookNode(selectedNodeForPopover.node) &&
              selectedNodeForPopover.node.exercises.some(e => Boolean(e.japaneseVoiceText)) && (
                <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-200 dark:border-indigo-800/60 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                      <Headphones className="w-3.5 h-3.5" />
                      Pista de Audio del Cuaderno
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200">
                      {selectedNodeForPopover.node.exercises.filter(e => Boolean(e.japaneseVoiceText)).length} pistas de voz
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        sound.playTap();
                        const firstAudio = selectedNodeForPopover.node.exercises.find(e => Boolean(e.japaneseVoiceText));
                        if (firstAudio?.japaneseVoiceText) {
                          sound.speakJapanese(firstAudio.japaneseVoiceText, 0.9);
                        }
                      }}
                      className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Escuchar Diálogo</span>
                    </button>

                    <button
                      onClick={() => {
                        sound.playTap();
                        const firstAudio = selectedNodeForPopover.node.exercises.find(e => Boolean(e.japaneseVoiceText));
                        if (firstAudio?.japaneseVoiceText) {
                          sound.speakJapanese(firstAudio.japaneseVoiceText, 0.70);
                        }
                      }}
                      className="py-2 px-2.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 font-black text-xs flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer"
                      title="Escuchar audio a velocidad lenta (0.7x)"
                    >
                      <span>🐢</span>
                      <span className="text-[10px]">Lento</span>
                    </button>
                  </div>
                </div>
              )}

            {/* Botones de Acción */}
            {!selectedNodeForPopover.node.unlocked ? (
              <div className="flex flex-col gap-2.5 mt-1">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-2xl text-xs font-bold text-amber-800 dark:text-amber-300">
                  ⚡ Esta lección está bloqueada. Puedes saltar directamente hasta aquí aprobando un examen especial con los temas pendientes. (Máx 3 errores).
                </div>

                <button
                  onClick={() => {
                    const uId = selectedNodeForPopover.unitId;
                    const nId = selectedNodeForPopover.node.id;
                    setSelectedNodeForPopover(null);
                    handleStartMultiJump(uId, nId);
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-duo-orange hover:brightness-105 text-white font-black text-xs rounded-2xl shadow-[0_4px_0_0_#d97706] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <FastForward className="w-4 h-4 stroke-[2.5px]" />
                  <span>Hacer Examen y Saltar hasta aquí</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      sound.playTap();
                      const targetUnitId = selectedNodeForPopover.unitId;
                      setSelectedNodeForPopover(null);
                      if (onOpenTheory) onOpenTheory(targetUnitId);
                    }}
                    className="py-2.5 px-3 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow-[0_3px_0_0_#0284c7] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ver Teoría</span>
                  </button>

                  <button
                    onClick={() => {
                      sound.playTap();
                      setSelectedNodeForPopover(null);
                      handleScrollToLatest();
                    }}
                    className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Lección actual</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5 mt-1">
                {/* Botón 1: Iniciar Lección */}
                <button
                  onClick={() => {
                    sound.playTap();
                    const parentUnit = units.find(u => u.id === selectedNodeForPopover.unitId);
                    const targetLesson = expandLessonExercises(selectedNodeForPopover.node, parentUnit);
                    setSelectedNodeForPopover(null);
                    setIsJumpAheadActive(false);
                    setIsPracticeActive(false);
                    setActiveQuizLesson(targetLesson);
                  }}
                  className={`w-full py-3.5 text-white font-black text-xs rounded-2xl active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider ${
                    isWorkbookNode(selectedNodeForPopover.node)
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-105 shadow-[0_4px_0_0_#4338ca]'
                      : 'bg-duo-green hover:bg-duo-green-dark shadow-[0_4px_0_0_#46a302]'
                  }`}
                >
                  <Play className="w-4 h-4 fill-white stroke-[2px]" />
                  <span>
                    {isWorkbookNode(selectedNodeForPopover.node)
                      ? selectedNodeForPopover.node.stars > 0
                        ? 'Repasar Cuaderno (Workbook)'
                        : '¡Hacer Ejercicios de Workbook!'
                      : selectedNodeForPopover.node.stars > 0
                      ? 'Repasar Lección'
                      : 'Iniciar Lección'}
                  </span>
                </button>

                {/* Botón 2: Ver Teoría de la Lección */}
                <button
                  onClick={() => {
                    sound.playTap();
                    const targetUnitId = selectedNodeForPopover.unitId;
                    setSelectedNodeForPopover(null);
                    if (onOpenTheory) {
                      onOpenTheory(targetUnitId);
                    }
                  }}
                  className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-black text-xs rounded-2xl shadow-[0_4px_0_0_#0284c7] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <BookOpen className="w-4 h-4 stroke-[2.5px]" />
                  <span>Ver Teoría y Gramática</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quiz Modal (Supports standard lesson, Jump Ahead exam, and Practice mode) */}
      {activeQuizLesson && (
        <QuizModal
          lesson={activeQuizLesson}
          userProfile={userProfile}
          isJumpAhead={isJumpAheadActive}
          isPractice={isPracticeActive}
          onClose={() => {
            setActiveQuizLesson(null);
            setIsJumpAheadActive(false);
            setIsPracticeActive(false);
          }}
          onCompleteLesson={(nodeId, xp, stars) => {
            onCompleteLesson(nodeId, xp, stars);
            setActiveQuizLesson(null);
            setIsJumpAheadActive(false);
            setIsPracticeActive(false);
          }}
          onPassJumpAhead={(unitId, targetNodeId, skippedNodeIds) => {
            onSkipUnit(unitId, targetNodeId, skippedNodeIds);
            setActiveQuizLesson(null);
            setIsJumpAheadActive(false);
            setIsPracticeActive(false);
          }}
          onDeductHeart={onDeductHeart}
        />
      )}
    </div>
  );
};
