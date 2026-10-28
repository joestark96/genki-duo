export type ExerciseType = 'multiple-choice' | 'word-order' | 'match-pairs' | 'listening';

export interface ExerciseOption {
  id: string;
  text: string;
  furigana?: string;
  romaji?: string;
  isCorrect?: boolean;
}

export interface MatchPair {
  id: string;
  left: string;      // e.g. "こんにちは"
  leftSub?: string;   // e.g. "Konnichiwa"
  right: string;     // e.g. "Hola / Buenas tardes"
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptSub?: string;
  japaneseVoiceText?: string; // Text to speak via TTS
  options?: ExerciseOption[]; // For multiple-choice
  correctAnswerId?: string;   // For multiple-choice
  wordBank?: string[];        // For word-order (scrambled words)
  correctSentence?: string[]; // For word-order (target order)
  pairs?: MatchPair[];        // For match-pairs
  explanation: string;
}

export interface LessonNode {
  id: string;
  unitId: number;
  lessonNumber: number; // Genki lesson (0 = Intro Kanas, 1 = L1, etc.)
  title: string;
  japaneseTitle: string;
  description: string;
  icon: string;         // Lucide or emoji
  color: 'green' | 'blue' | 'orange' | 'purple' | 'red';
  totalSteps: number;
  unlocked: boolean;
  completedSteps: number;
  stars: number;        // 0 to 3
  exercises: Exercise[];
}

export interface Unit {
  id: number;
  genkiBook: 'Genki I' | 'Genki II' | 'Kanas';
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
  nodes: LessonNode[];
}

export type FlashcardCategory = 'hiragana' | 'katakana' | 'vocabulary' | 'phrases' | 'kanji';

export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface KanjiCompound {
  word: string;
  furigana: string;
  romaji: string;
  meaning: string;
}

export interface Flashcard {
  id: string;
  category: FlashcardCategory;
  genkiLesson?: number; // 0 = general kana, 1 = Lesson 1, etc.
  jlptLevel?: JLPTLevel;
  japanese: string;
  furigana: string;
  romaji: string;
  spanish: string;
  english?: string;
  // Kanji specific metadata
  onyomi?: string;      // Reading in Katakana
  kunyomi?: string;     // Reading in Hiragana
  strokeCount?: number; // Number of strokes
  radicals?: string;    // Radical description
  compounds?: KanjiCompound[]; // Common words using this Kanji
  exampleSentence?: string;
  exampleTranslation?: string;
  notes?: string;
  // SRS properties
  srsLevel: number; // 0: new, 1: learning, 2: reviewing, 3: mastered
  intervalDays: number;
  nextReviewDate: string; // ISO string
  timesReviewed: number;
  timesCorrect: number;
}

export interface UserProfile {
  id: string;
  username: string;
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  hearts: number;
  maxHearts: number;
  gems: number;
  soundEnabled: boolean;
  furiganaMode: 'always' | 'on-hover' | 'hidden';
}

