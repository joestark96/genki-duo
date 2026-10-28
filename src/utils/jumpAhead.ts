import { Unit, LessonNode, Exercise } from '../types';

export function createJumpAheadLesson(unit: Unit): LessonNode {
  // Collect all exercises from this unit
  const allExercises: Exercise[] = [];
  unit.nodes.forEach(node => {
    node.exercises.forEach(ex => {
      allExercises.push(ex);
    });
  });

  // Pick up to 8 diverse exercises (or all if fewer than 8)
  // Ensure we have a mix of multiple-choice, listening, word-order and match-pairs
  let selected: Exercise[] = [];

  const types = ['multiple-choice', 'listening', 'word-order', 'match-pairs'] as const;
  types.forEach(t => {
    const matching = allExercises.filter(e => e.type === t);
    if (matching.length > 0) {
      // Pick 2 of each type if available
      selected.push(...matching.slice(0, 2));
    }
  });

  // If still fewer than 6, fill from remaining
  if (selected.length < 6) {
    const remaining = allExercises.filter(e => !selected.includes(e));
    selected.push(...remaining.slice(0, 6 - selected.length));
  }

  // Cap at 8 questions for a challenging but fair test
  selected = selected.slice(0, 8);

  return {
    id: `jump-ahead-unit-${unit.id}`,
    unitId: unit.id,
    lessonNumber: unit.id,
    title: `Prueba de Salto: ${unit.title}`,
    japaneseTitle: '飛び級テスト (Examen de Salto)',
    description: 'Demuestra que dominas todos los temas de esta unidad. Máximo 3 errores permitidos.',
    icon: 'FastForward',
    color: 'orange',
    totalSteps: selected.length,
    unlocked: true,
    completedSteps: 0,
    stars: 0,
    exercises: selected
  };
}
