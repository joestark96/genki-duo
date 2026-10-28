import React, { useState } from 'react';
import { Unit, LessonNode, UserProfile } from '../types';
import { RoadmapNode } from '../components/Roadmap/RoadmapNode';
import { QuizModal } from '../components/Quiz/QuizModal';
import { BookOpen, Sparkles, CheckCircle2, FastForward, ShieldAlert, Award } from 'lucide-react';
import { sound } from '../services/sound';
import { createJumpAheadLesson } from '../utils/jumpAhead';

interface RoadmapPageProps {
  units: Unit[];
  userProfile: UserProfile;
  onCompleteLesson: (nodeId: string, earnedXp: number, stars: number) => void;
  onSkipUnit: (unitId: number) => void;
  onDeductHeart: () => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({
  units,
  userProfile,
  onCompleteLesson,
  onSkipUnit,
  onDeductHeart
}) => {
  const [activeQuizLesson, setActiveQuizLesson] = useState<LessonNode | null>(null);
  const [isJumpAheadActive, setIsJumpAheadActive] = useState(false);

  // Determine which node is currently active (the first unlocked but uncompleted node)
  const getActiveNodeId = (): string => {
    for (const unit of units) {
      for (const node of unit.nodes) {
        if (node.unlocked && node.stars === 0) {
          return node.id;
        }
      }
    }
    return units[0]?.nodes[0]?.id || '';
  };

  const activeNodeId = getActiveNodeId();

  const handleStartJumpAhead = (unit: Unit) => {
    sound.playTap();
    const challengeLesson = createJumpAheadLesson(unit);
    setIsJumpAheadActive(true);
    setActiveQuizLesson(challengeLesson);
  };

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col items-center">
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
                      setIsJumpAheadActive(false);
                      setActiveQuizLesson(selected);
                    }}
                  />
                );
              })}
            </div>

            {/* Jump Ahead Challenge Card (Only if unit is unlocked and not fully completed) */}
            {isUnitUnlocked && !isUnitCompleted && (
              <div className="w-full mt-6 mb-2 px-1">
                <div className="bg-white border-2 border-duo-orange/40 rounded-3xl p-4 shadow-duo-card flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-duo-orange-light rounded-2xl flex items-center justify-center text-duo-orange-dark mb-2 border-2 border-duo-orange/30">
                    <FastForward className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                  <h4 className="text-sm font-black text-gray-800 uppercase tracking-wide">
                    Prueba de Salto de Nivel
                  </h4>
                  <p className="text-xs font-medium text-gray-500 mt-1 mb-3 max-w-[280px]">
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
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-duo-green-light border-2 border-duo-green text-duo-green-dark rounded-xl text-xs font-black shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-duo-green" />
                  <span>¡Unidad Dominada!</span>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Quiz Modal (Supports standard lesson and Jump Ahead exam) */}
      {activeQuizLesson && (
        <QuizModal
          lesson={activeQuizLesson}
          userProfile={userProfile}
          isJumpAhead={isJumpAheadActive}
          onClose={() => {
            setActiveQuizLesson(null);
            setIsJumpAheadActive(false);
          }}
          onCompleteLesson={(nodeId, xp, stars) => {
            onCompleteLesson(nodeId, xp, stars);
            setActiveQuizLesson(null);
            setIsJumpAheadActive(false);
          }}
          onPassJumpAhead={(unitId) => {
            onSkipUnit(unitId);
            setActiveQuizLesson(null);
            setIsJumpAheadActive(false);
          }}
          onDeductHeart={onDeductHeart}
        />
      )}
    </div>
  );
};
