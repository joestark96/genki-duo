import { Unit, LessonNode, Exercise } from '../types';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Creates a randomized practice lesson with 10 to 20 exercises
 * gathered from lessons that the user has already completed/studied.
 */
export function createPracticeLesson(units: Unit[]): LessonNode | null {
  // 1. Gather all exercises from completed lessons (stars > 0 or completedSteps >= totalSteps)
  let pool: Exercise[] = [];
  units.forEach(unit => {
    unit.nodes.forEach(node => {
      if (node.stars > 0 || node.completedSteps >= node.totalSteps) {
        node.exercises.forEach(ex => pool.push(ex));
      }
    });
  });

  // 2. Fallback: If no lessons are completed yet, pull from any unlocked lessons
  if (pool.length === 0) {
    units.forEach(unit => {
      unit.nodes.forEach(node => {
        if (node.unlocked) {
          node.exercises.forEach(ex => pool.push(ex));
        }
      });
    });
  }

  // 3. Fallback: If still empty, use first node of first unit
  if (pool.length === 0 && units[0]?.nodes[0]?.exercises) {
    pool = [...units[0].nodes[0].exercises];
  }

  if (pool.length === 0) {
    return null;
  }

  // 4. Random count between 10 and 20
  const targetCount = Math.floor(Math.random() * 11) + 10; // 10 to 20

  // 5. Select exercises (repeating with fresh shuffle if pool has fewer than targetCount)
  let selected: Exercise[] = [];
  if (pool.length >= targetCount) {
    selected = shuffle(pool).slice(0, targetCount);
  } else {
    while (selected.length < targetCount && pool.length > 0) {
      selected.push(...shuffle(pool));
    }
    selected = selected.slice(0, targetCount);
  }

  // 6. Deep clone and randomize options for multiple-choice and listening
  const randomizedExercises: Exercise[] = selected.map((ex, idx) => {
    const clone = {
      ...ex,
      id: `practice-${idx}-${ex.id}-${Math.random().toString(36).substring(2, 6)}`
    };
    if (
      (clone.type === 'multiple-choice' || clone.type === 'listening') &&
      clone.options &&
      clone.options.length > 1
    ) {
      clone.options = shuffle(clone.options);
    }
    return clone;
  });

  return {
    id: `practice-${Date.now()}`,
    unitId: 0,
    lessonNumber: 0,
    title: 'Entrenamiento de Repaso',
    japaneseTitle: '復習トレーニング (Repaso Rápido)',
    description: `Sesión de entrenamiento con ${randomizedExercises.length} ejercicios aleatorios de tus lecciones cursadas.`,
    icon: 'Dumbbell',
    color: 'blue',
    totalSteps: randomizedExercises.length,
    unlocked: true,
    completedSteps: 0,
    stars: 0,
    exercises: randomizedExercises
  };
}

/**
 * Creates a randomized review lesson specifically for a single completed/studied unit.
 */
export function createUnitReviewLesson(unit: Unit): LessonNode | null {
  let pool: Exercise[] = [];
  unit.nodes.forEach(node => {
    node.exercises.forEach(ex => pool.push(ex));
  });

  if (pool.length === 0) {
    return null;
  }

  // Pick between 8 and 15 exercises for unit review
  const targetCount = Math.min(pool.length, Math.floor(Math.random() * 8) + 8);

  let selected: Exercise[] = [];
  if (pool.length >= targetCount) {
    selected = shuffle(pool).slice(0, targetCount);
  } else {
    selected = shuffle(pool);
  }

  const randomizedExercises: Exercise[] = selected.map((ex, idx) => {
    const clone = {
      ...ex,
      id: `review-${unit.id}-${idx}-${ex.id}-${Math.random().toString(36).substring(2, 6)}`
    };
    if (
      (clone.type === 'multiple-choice' || clone.type === 'listening') &&
      clone.options &&
      clone.options.length > 1
    ) {
      clone.options = shuffle(clone.options);
    }
    return clone;
  });

  return {
    id: `unit-review-${unit.id}-${Date.now()}`,
    unitId: unit.id,
    lessonNumber: 0,
    title: `Repaso: ${unit.title}`,
    japaneseTitle: `${unit.subtitle} (復習)`,
    description: `Repaso completo de los ejercicios de la ${unit.title}.`,
    icon: 'Sparkles',
    color: 'orange',
    totalSteps: randomizedExercises.length,
    unlocked: true,
    completedSteps: 0,
    stars: 3,
    exercises: randomizedExercises
  };
}


