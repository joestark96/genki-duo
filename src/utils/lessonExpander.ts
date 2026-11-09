import { LessonNode, Unit, Exercise, ExerciseOption, MatchPair } from '../types';
import { genkiVocabulary } from '../data/vocabularyData';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Expands a lesson node's exercises from 3-4 exercises up to a rich,
 * engaging 8-exercise lesson (similar to Duolingo sessions) using:
 * 1. The node's original curated exercises.
 * 2. Pedagogical listening & reverse-comprehension questions generated from match-pairs.
 * 3. Listening variants of multiple-choice exercises.
 * 4. Authentic Genki vocabulary exercises for the lesson.
 * 5. Sister node reinforcement exercises from the same unit.
 */
export function expandLessonExercises(node: LessonNode, unit?: Unit, targetCount: number = 8): LessonNode {
  // Las lecciones de "Lectura Inicial" y diálogos de lectura se mantienen 100% en su formato original
  const isLecturaInicial =
    node.title.toLowerCase().includes('lectura inicial') ||
    node.exercises.some(ex => ex.type === 'dialogue-reading');

  if (isLecturaInicial) {
    return {
      ...node,
      totalSteps: node.exercises.length,
      exercises: [...node.exercises]
    };
  }

  // If the node already has 8 or more exercises, keep them all
  if (node.exercises.length >= targetCount) {
    const randomized = node.exercises.map((ex) => {
      if ((ex.type === 'multiple-choice' || ex.type === 'listening') && ex.options && ex.options.length > 1) {
        return { ...ex, options: shuffle(ex.options) };
      }
      return { ...ex };
    });
    return {
      ...node,
      totalSteps: randomized.length,
      exercises: randomized
    };
  }

  const generatedExercises: Exercise[] = [];
  const baseExercises = node.exercises.map(ex => ({ ...ex }));

  // Collect pairs and vocabulary from the node
  const allNodePairs: MatchPair[] = [];
  baseExercises.forEach(ex => {
    if (ex.type === 'match-pairs' && ex.pairs) {
      allNodePairs.push(...ex.pairs);
    }
  });

  // Collect sibling pairs from other nodes in the same unit
  const siblingPairs: MatchPair[] = [];
  if (unit && unit.nodes) {
    unit.nodes.forEach(n => {
      if (n.id !== node.id) {
        n.exercises.forEach(ex => {
          if (ex.type === 'match-pairs' && ex.pairs) {
            siblingPairs.push(...ex.pairs);
          }
        });
      }
    });
  }

  // Helpers to distinguish vocabulary translations (JP -> Spanish) from grammar pairs (JP -> JP)
  const isSpanishTranslation = (str: string) => Boolean(str) && !/[\u3040-\u30ff\u4e00-\u9faf]/.test(str);
  const isJapaneseText = (str: string) => Boolean(str) && /[\u3040-\u30ff\u4e00-\u9faf]/.test(str);

  const getCategory = (pos?: string): string => {
    if (!pos) return 'other';
    if (pos.startsWith('adj')) return 'adjective';
    if (pos.startsWith('verb')) return 'verb';
    if (pos === 'noun') return 'noun';
    if (pos === 'adverb') return 'adverb';
    if (pos === 'expression') return 'expression';
    return 'other';
  };

  // Clean parenthesized translations from Japanese words (e.g. "学生 (estudiante)" -> "学生")
  const cleanJapanese = (str: string) => {
    return str
      .replace(/\s*\([a-zA-ZáéíóúñÁÉÍÓÚÑ\s~/-]+\)/g, '')
      .replace(/\s*（[a-zA-ZáéíóúñÁÉÍÓÚÑ\s~/-]+）/g, '')
      .trim();
  };

  // Only consider pairs that are actual Japanese -> Spanish vocabulary translations
  const nodeVocabPairs = allNodePairs.filter(p => isJapaneseText(p.left) && isSpanishTranslation(p.right));
  const siblingVocabPairs = siblingPairs.filter(p => isJapaneseText(p.left) && isSpanishTranslation(p.right));

  // Pool of all distractor rights (translations) and lefts (japanese)
  const allRightOptions = Array.from(new Set([
    ...nodeVocabPairs.map(p => p.right.trim()),
    ...siblingVocabPairs.map(p => p.right.trim()),
    ...genkiVocabulary.filter(v => v.lesson === node.lessonNumber).map(v => v.spanish.trim())
  ])).filter(Boolean);

  const allLeftOptions = Array.from(new Set([
    ...nodeVocabPairs.map(p => cleanJapanese(p.left)),
    ...siblingVocabPairs.map(p => cleanJapanese(p.left)),
    ...genkiVocabulary.filter(v => v.lesson === node.lessonNumber).map(v => v.japanese.trim())
  ])).filter(Boolean);

  // Helper to build 4 unique options (1 correct + 3 distractors)
  const buildOptions = (correctText: string, pool: string[]): ExerciseOption[] => {
    const distractors = shuffle(pool.filter(t => t !== correctText)).slice(0, 3);
    const rawList = [
      { id: `opt-corr-${Math.random().toString(36).substring(2, 6)}`, text: correctText, isCorrect: true },
      ...distractors.map((d, i) => ({
        id: `opt-dist-${i}-${Math.random().toString(36).substring(2, 6)}`,
        text: d,
        isCorrect: false
      }))
    ];
    return shuffle(rawList);
  };

  // 1. Generate complementary questions ONLY from genuine vocabulary translation pairs (JP -> Spanish)
  nodeVocabPairs.forEach((pair, idx) => {
    const cleanLeft = cleanJapanese(pair.left);
    const cleanRight = pair.right.replace(/\s*\([^\)]*\)/g, '').trim();

    if (cleanLeft && cleanRight) {
      // Prioritize distractors from the same node's pairs if at least 3 exist
      const nodeRightDistractors = nodeVocabPairs
        .map(p => p.right.replace(/\s*\([^\)]*\)/g, '').trim())
        .filter(r => r && r !== cleanRight);
      const rightPool = nodeRightDistractors.length >= 3 ? nodeRightDistractors : allRightOptions;

      // A) Listening exercise for pair: Hear Japanese, pick translation
      const options = buildOptions(cleanRight, rightPool);
      const correctOpt = options.find(o => o.isCorrect)!;
      generatedExercises.push({
        id: `gen-listen-${node.id}-${idx}-${pair.id}`,
        type: 'listening',
        prompt: 'Escucha el audio y selecciona la opción correcta:',
        promptSub: pair.leftSub,
        japaneseVoiceText: cleanLeft,
        options,
        correctAnswerId: correctOpt.id,
        explanation: `「${cleanLeft}」 corresponde a "${cleanRight}".`
      });

      // B) Reverse question: "Cómo se dice en japonés: [Español]"
      const nodeLeftDistractors = nodeVocabPairs
        .map(p => cleanJapanese(p.left))
        .filter(l => l && l !== cleanLeft);
      const leftPool = nodeLeftDistractors.length >= 3 ? nodeLeftDistractors : allLeftOptions;

      const leftOptions = buildOptions(cleanLeft, leftPool);
      const correctLeftOpt = leftOptions.find(o => o.isCorrect)!;
      generatedExercises.push({
        id: `gen-mc-rev-${node.id}-${idx}-${pair.id}`,
        type: 'multiple-choice',
        prompt: `¿Cómo se dice "${cleanRight}" en japonés?`,
        japaneseVoiceText: cleanLeft,
        options: leftOptions,
        correctAnswerId: correctLeftOpt.id,
        explanation: `"${cleanRight}" en japonés se dice 「${cleanLeft}」.`
      });
    }
  });

  // 2. Generate listening versions of multiple-choice exercises if not already listening
  baseExercises.forEach((ex, idx) => {
    if (ex.type === 'multiple-choice' && (ex.japaneseVoiceText || ex.promptSub) && ex.options) {
      const voiceText = ex.japaneseVoiceText || ex.promptSub;
      const correctOpt = ex.options.find(o => o.isCorrect || o.id === ex.correctAnswerId);
      if (voiceText && correctOpt) {
        generatedExercises.push({
          id: `gen-listen-ex-${node.id}-${idx}`,
          type: 'listening',
          prompt: 'Escucha el audio y selecciona la respuesta adecuada:',
          japaneseVoiceText: voiceText,
          options: shuffle(ex.options.map(o => ({ ...o }))),
          correctAnswerId: correctOpt.id,
          explanation: ex.explanation || `La respuesta correcta es "${correctOpt.text}".`
        });
      }
    }
  });

  // 3. Generate vocabulary exercises from genkiVocabulary for this lesson
  const lessonVocab = genkiVocabulary.filter(v => v.lesson === node.lessonNumber);
  if (lessonVocab.length > 0) {
    const shuffledVocab = shuffle(lessonVocab);
    shuffledVocab.slice(0, 4).forEach((v, idx) => {
      const vCat = getCategory(v.pos);
      // Select candidate distractors strictly of the same grammatical category (e.g. adjectives with adjectives)
      const sameCategorySameLesson = lessonVocab
        .filter(w => w.id !== v.id && getCategory(w.pos) === vCat)
        .map(w => w.spanish.trim());
      const sameCategoryAllLessons = genkiVocabulary
        .filter(w => w.id !== v.id && getCategory(w.pos) === vCat)
        .map(w => w.spanish.trim());

      const targetPool = Array.from(new Set([
        ...sameCategorySameLesson,
        ...sameCategoryAllLessons
      ])).filter(Boolean);

      const poolToUse = targetPool.length >= 3
        ? targetPool
        : (allRightOptions.length >= 4 ? allRightOptions : lessonVocab.map(w => w.spanish));

      // Direct vocabulary meaning
      const options = buildOptions(v.spanish, poolToUse);
      const correctOpt = options.find(o => o.isCorrect)!;
      generatedExercises.push({
        id: `gen-vocab-${node.id}-${idx}-${v.id}`,
        type: idx % 2 === 0 ? 'listening' : 'multiple-choice',
        prompt: idx % 2 === 0 ? 'Escucha la palabra y selecciona su significado:' : `¿Qué significa la palabra 「${v.japanese}」?`,
        promptSub: v.furigana !== v.japanese ? v.furigana : undefined,
        japaneseVoiceText: v.japanese,
        options,
        correctAnswerId: correctOpt.id,
        explanation: `「${v.japanese}」 (${v.romaji}) significa "${v.spanish}".`
      });
    });
  }

  // 4. If still under target, pull exercises from sibling nodes in the unit
  if (unit && unit.nodes) {
    const siblingExercises: Exercise[] = [];
    unit.nodes.forEach(n => {
      if (n.id !== node.id) {
        n.exercises.forEach(ex => siblingExercises.push(ex));
      }
    });
    const shuffledSiblings = shuffle(siblingExercises);
    for (const sib of shuffledSiblings) {
      if (baseExercises.length + generatedExercises.length >= targetCount + 4) break;
      generatedExercises.push({
        ...sib,
        id: `gen-sibling-${sib.id}-${Math.random().toString(36).substring(2, 6)}`
      });
    }
  }

  // 5. Combine and balance types
  // Interleave original base exercises with complementary generated ones
  const finalExercises: Exercise[] = [];
  const neededFromGenerated = Math.max(0, targetCount - baseExercises.length);
  const selectedGenerated = shuffle(generatedExercises).slice(0, neededFromGenerated);

  // Combine
  const combined = [...baseExercises, ...selectedGenerated];

  // Interleave so exercise types alternate nicely
  // Preferred type sequence: multiple-choice, match-pairs, listening, word-order, listening, multiple-choice...
  const mcList = combined.filter(e => e.type === 'multiple-choice');
  const matchPairsList = combined.filter(e => e.type === 'match-pairs');
  const listeningList = combined.filter(e => e.type === 'listening');
  const wordOrderList = combined.filter(e => e.type === 'word-order');
  const dialogueList = combined.filter(e => e.type === 'dialogue-reading');

  // Push in pleasant pedagogy rhythm
  const queues = [mcList, matchPairsList, listeningList, wordOrderList, dialogueList];
  while (finalExercises.length < targetCount && queues.some(q => q.length > 0)) {
    for (const queue of queues) {
      if (queue.length > 0 && finalExercises.length < targetCount) {
        finalExercises.push(queue.shift()!);
      }
    }
  }

  // If still fewer than target, duplicate remaining from combined with fresh shuffle
  if (finalExercises.length < targetCount && combined.length > 0) {
    const filler = shuffle(combined);
    while (finalExercises.length < targetCount && filler.length > 0) {
      const ex = filler.shift()!;
      finalExercises.push({
        ...ex,
        id: `fill-${ex.id}-${Math.random().toString(36).substring(2, 6)}`
      });
    }
  }

  // Shuffle options in multiple-choice / listening so answers aren't fixed
  const finalRandomized = finalExercises.map(ex => {
    if ((ex.type === 'multiple-choice' || ex.type === 'listening') && ex.options && ex.options.length > 1) {
      return {
        ...ex,
        options: shuffle(ex.options)
      };
    }
    return ex;
  });

  return {
    ...node,
    totalSteps: finalRandomized.length,
    exercises: finalRandomized
  };
}

