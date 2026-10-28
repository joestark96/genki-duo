import React, { useState } from 'react';
import { Unit, LessonNode, UserProfile } from '../types';
import { RoadmapNode } from '../components/Roadmap/RoadmapNode';
import { QuizModal } from '../components/Quiz/QuizModal';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoadmapPageProps {
  units: Unit[];
  userProfile: UserProfile;
  onCompleteLesson: (nodeId: string, earnedXp: number, stars: number) => void;
  onDeductHeart: () => void;
}

export const RoadmapPage: React.FC<RoadmapPageProps> = ({
  units,
  userProfile,
  onCompleteLesson,
  onDeductHeart
}) => {
  const [activeQuizLesson, setActiveQuizLesson] = useState<LessonNode | null>(null);

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

  return (
    <div className="max-w-md mx-auto w-full px-4 pt-4 pb-24 flex flex-col items-center">
      {/* Units List */}
      {units.map((unit, unitIdx) => (
        <div key={unit.id} className="w-full mb-8">
          {/* Unit Header Card */}
          <div
            className="w-full p-4 rounded-3xl text-white shadow-md mb-6 relative overflow-hidden"
            style={{ backgroundColor: unit.themeColor }}
          >
            {/* Textbook Badge */}
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
              // Curvy pattern: center, left, center, right, center...
              const pattern = ['center', 'left', 'center', 'right'] as const;
              const position = pattern[nodeIdx % pattern.length];
              const isActive = node.id === activeNodeId;

              return (
                <RoadmapNode
                  key={node.id}
                  node={node}
                  position={position}
                  isActive={isActive}
                  onSelectNode={(selected) => setActiveQuizLesson(selected)}
                />
              );
            })}
          </div>
        </div>
      ))}

      {/* Quiz Modal */}
      {activeQuizLesson && (
        <QuizModal
          lesson={activeQuizLesson}
          userProfile={userProfile}
          onClose={() => setActiveQuizLesson(null)}
          onCompleteLesson={(nodeId, xp, stars) => {
            onCompleteLesson(nodeId, xp, stars);
            setActiveQuizLesson(null);
          }}
          onDeductHeart={onDeductHeart}
        />
      )}
    </div>
  );
};
