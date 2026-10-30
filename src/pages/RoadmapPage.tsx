import React, { useState, useEffect } from 'react';
import { Unit, LessonNode, UserProfile } from '../types';
import { RoadmapNode } from '../components/Roadmap/RoadmapNode';
import { QuizModal } from '../components/Quiz/QuizModal';
import { BookOpen, Sparkles, CheckCircle2, FastForward, ShieldAlert, Award, Dumbbell, Compass, X, Star, Play } from 'lucide-react';
import { sound } from '../services/sound';
import { createJumpAheadLesson } from '../utils/jumpAhead';
import { createPracticeLesson } from '../utils/practiceLesson';

interface RoadmapPageProps {
  units: Unit[];
  userProfile: UserProfile;
  onCompleteLesson: (nodeId: string, earnedXp: number, stars: number) => void;
  onSkipUnit: (unitId: number) => void;
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
    const challengeLesson = createJumpAheadLesson(unit);
    setIsPracticeActive(false);
    setIsJumpAheadActive(true);
    setActiveQuizLesson(challengeLesson);
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
                    onClick={() => handleStartJumpAhead(unit)}
                    className="w-full py-3 bg-duo-orange hover:bg-duo-orange-dark text-white font-black text-xs rounded-2xl shadow-[0_4px_0_0_#e08500] active:translate-y-1 active:shadow-none transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <FastForward className="w-4 h-4" />
                    <span>Iniciar Examen de Salto (Máx 3 Errores)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Completed Badge */}
            {isUnitCompleted && (
              <div className="w-full flex justify-center mt-6 mb-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-duo-green-light dark:bg-duo-green/20 border-2 border-duo-green text-duo-green-dark dark:text-duo-green rounded-xl text-xs font-black shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-duo-green" />
                  <span>¡Unidad Dominada!</span>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Popover de Lección al tocar un nodo del Roadmap */}
      {selectedNodeForPopover && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
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

            {/* Cabecera de la Lección */}
            <div className="flex items-center gap-3 pr-6">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0 ${
                  selectedNodeForPopover.node.stars > 0
                    ? 'bg-duo-yellow shadow-[0_4px_0_0_#e5b400]'
                    : 'bg-duo-green shadow-[0_4px_0_0_#46a302]'
                }`}
              >
                {selectedNodeForPopover.node.stars > 0 ? (
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
                {selectedNodeForPopover.node.stars > 0 ? 'Estado: ¡Completada!' : 'Estado: Disponible'}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < selectedNodeForPopover.node.stars
                        ? 'fill-amber-400 text-amber-500'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-2.5 mt-1">
              {/* Botón 1: Iniciar Lección */}
              <button
                onClick={() => {
                  sound.playTap();
                  const targetLesson = selectedNodeForPopover.node;
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
          onPassJumpAhead={(unitId) => {
            onSkipUnit(unitId);
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
