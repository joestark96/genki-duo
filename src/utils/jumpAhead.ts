import { Unit, LessonNode, Exercise } from '../types';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function createJumpAheadLesson(unit: Unit): LessonNode {
  // Collect all exercises from this unit
  const allExercises: Exercise[] = [];
  unit.nodes.forEach(node => {
    node.exercises.forEach(ex => {
      allExercises.push(ex);
    });
  });

  // Pick a dynamic, randomized mix of exercises across the entire unit
  let selected: Exercise[] = [];
  const types = ['listening', 'multiple-choice', 'word-order', 'match-pairs'] as const;

  // Pick 2 random exercises of each type
  types.forEach(t => {
    const matching = allExercises.filter(e => e.type === t);
    if (matching.length > 0) {
      const shuffledMatching = shuffle(matching);
      selected.push(...shuffledMatching.slice(0, 2));
    }
  });

  // If still fewer than 8, fill randomly from remaining exercises
  if (selected.length < 8) {
    const remaining = allExercises.filter(e => !selected.some(s => s.id === e.id));
    const shuffledRemaining = shuffle(remaining);
    selected.push(...shuffledRemaining.slice(0, 8 - selected.length));
  }

  // Shuffle the final 8 questions so order and types are interleaved randomly each time
  selected = shuffle(selected).slice(0, 8);

  // Clone and shuffle options for multiple-choice/listening so answers aren't in fixed slots
  const randomizedExercises: Exercise[] = selected.map(ex => {
    if ((ex.type === 'multiple-choice' || ex.type === 'listening') && ex.options && ex.options.length > 1) {
      return {
        ...ex,
        options: shuffle(ex.options)
      };
    }
    return { ...ex };
  });

  return {
    id: `jump-ahead-unit-${unit.id}-${Date.now()}`,
    unitId: unit.id,
    lessonNumber: unit.id,
    title: `Prueba de Salto: ${unit.title}`,
    japaneseTitle: '飛び級テスト (Examen de Salto)',
    description: 'Demuestra que dominas todos los temas de esta unidad. Máximo 3 errores permitidos.',
    icon: 'FastForward',
    color: 'orange',
    totalSteps: randomizedExercises.length,
    unlocked: true,
    completedSteps: 0,
    stars: 0,
    exercises: randomizedExercises
  };
}
