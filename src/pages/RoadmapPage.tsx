import React, { useState, useEffect } from 'react';
import { Unit, LessonNode, UserProfile } from '../types';
import { RoadmapNode } from '../components/Roadmap/RoadmapNode';
import { QuizModal } from '../components/Quiz/QuizModal';
import { BookOpen, Sparkles, CheckCircle2, FastForward, ShieldAlert, Award, Dumbbell, Compass, X, Star, Play, RotateCcw, Lock, BookMarked } from 'lucide-react';
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

  // Determine which node is currently active (the first unlocked but uncompleted node)
  const getActiveNodeId = (): string => {
    for (const unit of units) {
      for (const node of unit.nodes) {
        if (node.unlocked && node.stars === 0) {
          return node.id;
        }
      }
    }
    // If all unlocked nodes are completed, find the last unlocked node
    let lastUnlockedId = units[0]?.nodes[0]?.id || '';
    for (const unit of units) {
      for (const node of unit.nodes) {
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
  }, [activeNodeId]);

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

      {/* Units List */}
      {units.map((unit) => {
        const isUnitUnlocked = unit.nodes.some(n => n.unlocked);
        const isUnitCompleted = unit.nodes.length > 0 && unit.nodes.every(n => n.stars > 0);

        return (
          <div key={unit.id} className="w-full mb-8">
            {/* Unit Header Card */}
            <div
              className={`w-full p-4 rounded-3xl text-white shadow-md mb-6 relative overflow-hidden transition-all ${
                !isUnitUnlocked ? 'opacity-60 saturate-50' : ''
              }`}
              style={{ backgroundColor: unit.themeColor }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="px-2.5 py-0.5 bg-black/20 text-white rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  {unit.genkiBook}
                </span>
                <span className="text-xs font-black opacity-90">
                  Unidad {unit.id + 1}
                </span>
              </div>

              <h3 className="text-lg font-black tracking-tight">{unit.title}</h3>
              <p className="text-xs font-bold opacity-90 mt-0.5">{unit.subtitle}</p>

              {/* Theory Guide Pill Button */}
              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/20">
                <button
                  onClick={() => {
                    sound.playTap();
                    if (onOpenTheory) onOpenTheory(unit.id);
                  }}
                  className="px-3 py-1.5 bg-white/20 hover:bg-white/30 active:translate-y-0.5 rounded-xl font-black text-xs text-white flex items-center gap-1.5 transition-all shadow-sm backdrop-blur-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Guía de Teoría y Gramática
                </button>

                {/* Botón de acceso rápido a ejercicios del Workbook */}
                {unit.nodes.some(n => n.title.toLowerCase().includes('workbook')) && (
                  <button
                    onClick={() => {
                      sound.playTap();
                      const firstWb = unit.nodes.find(n => n.title.toLowerCase().includes('workbook'));
                      if (firstWb) {
                        setSelectedNodeForPopover({
                          node: firstWb,
                          unitId: unit.id,
                          unitTitle: `${unit.title} — ${unit.subtitle}`
                        });
                        const el = document.getElementById(`roadmap-node-${firstWb.id}`);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className="px-3 py-1.5 bg-indigo-600/90 hover:bg-indigo-700 active:translate-y-0.5 rounded-xl font-black text-xs text-white flex items-center gap-1.5 transition-all shadow-sm border border-white/20 cursor-pointer"
                    title={`Ver ejercicios del Workbook de ${unit.title}`}
                  >
                    <BookMarked className="w-3.5 h-3.5 stroke-[2.5px]" />
                    <span>Workbook ({unit.nodes.filter(n => n.title.toLowerCase().includes('workbook')).length})</span>
                  </button>
                )}

                {!isUnitUnlocked && (
                  <button
                    onClick={() => handleStartMultiJump(unit.id)}
                    className="px-3 py-1.5 bg-duo-orange hover:bg-duo-orange-dark active:translate-y-0.5 rounded-xl font-black text-xs text-white flex items-center gap-1.5 transition-all shadow-sm border border-white/20 cursor-pointer"
                    title={`Saltar hasta ${unit.title}`}
                  >
                    <FastForward className="w-3.5 h-3.5 stroke-[2.5px]" />
                    <span>Saltar a esta unidad</span>
                  </button>
                )}
              </div>
            </div>

            {/* Serpentine Roadmap Nodes */}
            <div className="flex flex-col items-center relative">
              {unit.nodes.map((node, nodeIdx) => {
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
                        unitTitle: `${unit.title} — ${unit.subtitle}`
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
                  !selectedNodeForPopover.node.unlocked
                    ? 'bg-amber-500 shadow-[0_4px_0_0_#d97706]'
                    : selectedNodeForPopover.node.stars > 0
                    ? 'bg-duo-yellow shadow-[0_4px_0_0_#e5b400]'
                    : 'bg-duo-green shadow-[0_4px_0_0_#46a302]'
                }`}
              >
                {!selectedNodeForPopover.node.unlocked ? (
                  <Lock className="w-7 h-7 stroke-[2.5px]" />
                ) : selectedNodeForPopover.node.stars > 0 ? (
                  <Star className="w-7 h-7 fill-white stroke-[2.5px]" />
                ) : (
                  <Sparkles className="w-7 h-7 stroke-[2.5px]" />
                )}
              </div>

              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-duo-green dark:text-green-400">
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
                  className="w-full py-3.5 bg-duo-green hover:bg-duo-green-dark text-white font-black text-xs rounded-2xl shadow-[0_4px_0_0_#46a302] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Play className="w-4 h-4 fill-white stroke-[2px]" />
                  <span>{selectedNodeForPopover.node.stars > 0 ? 'Repasar Lección' : 'Iniciar Lección'}</span>
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
