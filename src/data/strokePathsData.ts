// Stroke Paths Data for Japanese Hiragana, Katakana, and common Kanji
// Points are normalized [x, y] in the range 0.0 to 1.0

export interface NormalizedStroke {
  points: { x: number; y: number }[];
}

// Pre-defined stroke paths for representative characters
export const KANA_STROKE_PATHS: Record<string, NormalizedStroke[]> = {
  // --- HIRAGANA VOWELS ---
  'あ': [
    { points: [{ x: 0.28, y: 0.32 }, { x: 0.72, y: 0.32 }] },
    { points: [{ x: 0.50, y: 0.18 }, { x: 0.47, y: 0.76 }] },
    { points: [{ x: 0.68, y: 0.42 }, { x: 0.33, y: 0.55 }, { x: 0.35, y: 0.82 }, { x: 0.75, y: 0.78 }, { x: 0.77, y: 0.48 }, { x: 0.50, y: 0.48 }, { x: 0.38, y: 0.68 }] }
  ],
  'い': [
    { points: [{ x: 0.32, y: 0.28 }, { x: 0.28, y: 0.65 }, { x: 0.35, y: 0.75 }, { x: 0.42, y: 0.65 }] },
    { points: [{ x: 0.68, y: 0.35 }, { x: 0.72, y: 0.60 }] }
  ],
  'う': [
    { points: [{ x: 0.45, y: 0.22 }, { x: 0.58, y: 0.28 }] },
    { points: [{ x: 0.35, y: 0.42 }, { x: 0.68, y: 0.45 }, { x: 0.70, y: 0.68 }, { x: 0.48, y: 0.85 }, { x: 0.38, y: 0.82 }] }
  ],
  'え': [
    { points: [{ x: 0.45, y: 0.20 }, { x: 0.58, y: 0.26 }] },
    { points: [{ x: 0.32, y: 0.42 }, { x: 0.68, y: 0.42 }, { x: 0.38, y: 0.68 }, { x: 0.62, y: 0.65 }, { x: 0.75, y: 0.80 }, { x: 0.40, y: 0.82 }] }
  ],
  'お': [
    { points: [{ x: 0.25, y: 0.32 }, { x: 0.65, y: 0.32 }] },
    { points: [{ x: 0.46, y: 0.18 }, { x: 0.46, y: 0.65 }, { x: 0.32, y: 0.78 }, { x: 0.55, y: 0.82 }, { x: 0.72, y: 0.68 }, { x: 0.70, y: 0.52 }] },
    { points: [{ x: 0.72, y: 0.28 }, { x: 0.80, y: 0.36 }] }
  ],

  // --- HIRAGANA KA-LINE ---
  'か': [
    { points: [{ x: 0.30, y: 0.28 }, { x: 0.62, y: 0.30 }, { x: 0.60, y: 0.60 }, { x: 0.48, y: 0.78 }, { x: 0.40, y: 0.72 }] },
    { points: [{ x: 0.42, y: 0.22 }, { x: 0.28, y: 0.75 }] },
    { points: [{ x: 0.70, y: 0.26 }, { x: 0.78, y: 0.36 }] }
  ],
  'き': [
    { points: [{ x: 0.30, y: 0.34 }, { x: 0.70, y: 0.30 }] },
    { points: [{ x: 0.28, y: 0.48 }, { x: 0.72, y: 0.44 }] },
    { points: [{ x: 0.56, y: 0.18 }, { x: 0.46, y: 0.68 }, { x: 0.38, y: 0.64 }] },
    { points: [{ x: 0.35, y: 0.74 }, { x: 0.55, y: 0.84 }, { x: 0.65, y: 0.76 }] }
  ],
  'く': [
    { points: [{ x: 0.62, y: 0.24 }, { x: 0.32, y: 0.52 }, { x: 0.65, y: 0.80 }] }
  ],
  'け': [
    { points: [{ x: 0.30, y: 0.22 }, { x: 0.28, y: 0.78 }, { x: 0.34, y: 0.72 }] },
    { points: [{ x: 0.46, y: 0.38 }, { x: 0.74, y: 0.38 }] },
    { points: [{ x: 0.64, y: 0.24 }, { x: 0.60, y: 0.78 }] }
  ],
  'こ': [
    { points: [{ x: 0.32, y: 0.35 }, { x: 0.68, y: 0.33 }, { x: 0.62, y: 0.40 }] },
    { points: [{ x: 0.30, y: 0.68 }, { x: 0.70, y: 0.68 }] }
  ],

  // --- HIRAGANA SA-LINE ---
  'さ': [
    { points: [{ x: 0.28, y: 0.38 }, { x: 0.72, y: 0.34 }] },
    { points: [{ x: 0.55, y: 0.22 }, { x: 0.48, y: 0.62 }, { x: 0.38, y: 0.58 }] },
    { points: [{ x: 0.35, y: 0.70 }, { x: 0.55, y: 0.82 }, { x: 0.68, y: 0.74 }] }
  ],
  'し': [
    { points: [{ x: 0.42, y: 0.22 }, { x: 0.42, y: 0.68 }, { x: 0.58, y: 0.80 }, { x: 0.72, y: 0.68 }] }
  ],
  'す': [
    { points: [{ x: 0.22, y: 0.36 }, { x: 0.78, y: 0.34 }] },
    { points: [{ x: 0.52, y: 0.18 }, { x: 0.52, y: 0.50 }, { x: 0.38, y: 0.62 }, { x: 0.52, y: 0.68 }, { x: 0.52, y: 0.85 }] }
  ],
  'せ': [
    { points: [{ x: 0.24, y: 0.42 }, { x: 0.76, y: 0.38 }] },
    { points: [{ x: 0.65, y: 0.24 }, { x: 0.62, y: 0.68 }, { x: 0.70, y: 0.64 }] },
    { points: [{ x: 0.40, y: 0.26 }, { x: 0.40, y: 0.76 }, { x: 0.58, y: 0.78 }] }
  ],
  'そ': [
    { points: [{ x: 0.32, y: 0.28 }, { x: 0.65, y: 0.28 }, { x: 0.35, y: 0.52 }, { x: 0.68, y: 0.48 }, { x: 0.48, y: 0.78 }, { x: 0.65, y: 0.74 }] }
  ],

  // --- HIRAGANA TA-LINE ---
  'た': [
    { points: [{ x: 0.26, y: 0.36 }, { x: 0.58, y: 0.34 }] },
    { points: [{ x: 0.44, y: 0.22 }, { x: 0.34, y: 0.70 }] },
    { points: [{ x: 0.55, y: 0.48 }, { x: 0.78, y: 0.46 }] },
    { points: [{ x: 0.54, y: 0.68 }, { x: 0.76, y: 0.68 }] }
  ],
  'ち': [
    { points: [{ x: 0.34, y: 0.34 }, { x: 0.68, y: 0.32 }] },
    { points: [{ x: 0.48, y: 0.20 }, { x: 0.48, y: 0.52 }, { x: 0.72, y: 0.58 }, { x: 0.68, y: 0.80 }, { x: 0.42, y: 0.82 }] }
  ],
  'つ': [
    { points: [{ x: 0.28, y: 0.42 }, { x: 0.68, y: 0.38 }, { x: 0.74, y: 0.60 }, { x: 0.55, y: 0.82 }, { x: 0.35, y: 0.80 }] }
  ],
  'て': [
    { points: [{ x: 0.28, y: 0.34 }, { x: 0.72, y: 0.32 }, { x: 0.50, y: 0.55 }, { x: 0.65, y: 0.75 }, { x: 0.48, y: 0.82 }] }
  ],
  'と': [
    { points: [{ x: 0.42, y: 0.24 }, { x: 0.42, y: 0.58 }] },
    { points: [{ x: 0.36, y: 0.45 }, { x: 0.68, y: 0.55 }, { x: 0.62, y: 0.78 }, { x: 0.44, y: 0.82 }] }
  ],

  // --- COMMON GENKI KANJI ---
  '一': [
    { points: [{ x: 0.18, y: 0.50 }, { x: 0.82, y: 0.50 }] }
  ],
  '二': [
    { points: [{ x: 0.28, y: 0.35 }, { x: 0.72, y: 0.35 }] },
    { points: [{ x: 0.18, y: 0.68 }, { x: 0.82, y: 0.68 }] }
  ],
  '三': [
    { points: [{ x: 0.26, y: 0.30 }, { x: 0.74, y: 0.30 }] },
    { points: [{ x: 0.32, y: 0.50 }, { x: 0.68, y: 0.50 }] },
    { points: [{ x: 0.18, y: 0.72 }, { x: 0.82, y: 0.72 }] }
  ],
  '四': [
    { points: [{ x: 0.26, y: 0.25 }, { x: 0.26, y: 0.78 }] },
    { points: [{ x: 0.26, y: 0.25 }, { x: 0.74, y: 0.25 }, { x: 0.74, y: 0.78 }] },
    { points: [{ x: 0.40, y: 0.38 }, { x: 0.38, y: 0.58 }] },
    { points: [{ x: 0.58, y: 0.38 }, { x: 0.62, y: 0.58 }] },
    { points: [{ x: 0.22, y: 0.78 }, { x: 0.78, y: 0.78 }] }
  ],
  '五': [
    { points: [{ x: 0.22, y: 0.28 }, { x: 0.78, y: 0.28 }] },
    { points: [{ x: 0.48, y: 0.28 }, { x: 0.42, y: 0.75 }] },
    { points: [{ x: 0.30, y: 0.52 }, { x: 0.68, y: 0.52 }, { x: 0.68, y: 0.75 }] },
    { points: [{ x: 0.18, y: 0.75 }, { x: 0.82, y: 0.75 }] }
  ],
  '六': [
    { points: [{ x: 0.50, y: 0.20 }, { x: 0.50, y: 0.32 }] },
    { points: [{ x: 0.20, y: 0.38 }, { x: 0.80, y: 0.38 }] },
    { points: [{ x: 0.40, y: 0.50 }, { x: 0.26, y: 0.78 }] },
    { points: [{ x: 0.60, y: 0.50 }, { x: 0.74, y: 0.78 }] }
  ],
  '七': [
    { points: [{ x: 0.22, y: 0.52 }, { x: 0.78, y: 0.42 }] },
    { points: [{ x: 0.48, y: 0.22 }, { x: 0.48, y: 0.72 }, { x: 0.65, y: 0.72 }] }
  ],
  '八': [
    { points: [{ x: 0.44, y: 0.30 }, { x: 0.25, y: 0.78 }] },
    { points: [{ x: 0.56, y: 0.24 }, { x: 0.76, y: 0.80 }] }
  ],
  '九': [
    { points: [{ x: 0.45, y: 0.22 }, { x: 0.35, y: 0.78 }] },
    { points: [{ x: 0.30, y: 0.42 }, { x: 0.68, y: 0.38 }, { x: 0.68, y: 0.68 }, { x: 0.78, y: 0.65 }] }
  ],
  '十': [
    { points: [{ x: 0.20, y: 0.50 }, { x: 0.80, y: 0.50 }] },
    { points: [{ x: 0.50, y: 0.20 }, { x: 0.50, y: 0.80 }] }
  ],
  '日': [
    { points: [{ x: 0.30, y: 0.24 }, { x: 0.30, y: 0.78 }] },
    { points: [{ x: 0.30, y: 0.24 }, { x: 0.70, y: 0.24 }, { x: 0.70, y: 0.78 }] },
    { points: [{ x: 0.30, y: 0.50 }, { x: 0.70, y: 0.50 }] },
    { points: [{ x: 0.30, y: 0.78 }, { x: 0.70, y: 0.78 }] }
  ],
  '本': [
    { points: [{ x: 0.22, y: 0.42 }, { x: 0.78, y: 0.42 }] },
    { points: [{ x: 0.50, y: 0.18 }, { x: 0.50, y: 0.82 }] },
    { points: [{ x: 0.50, y: 0.42 }, { x: 0.25, y: 0.76 }] },
    { points: [{ x: 0.50, y: 0.42 }, { x: 0.75, y: 0.76 }] },
    { points: [{ x: 0.34, y: 0.68 }, { x: 0.66, y: 0.68 }] }
  ],
  '人': [
    { points: [{ x: 0.50, y: 0.20 }, { x: 0.28, y: 0.82 }] },
    { points: [{ x: 0.42, y: 0.45 }, { x: 0.74, y: 0.82 }] }
  ],
  '月': [
    { points: [{ x: 0.32, y: 0.22 }, { x: 0.28, y: 0.82 }] },
    { points: [{ x: 0.32, y: 0.22 }, { x: 0.68, y: 0.22 }, { x: 0.68, y: 0.80 }, { x: 0.60, y: 0.75 }] },
    { points: [{ x: 0.32, y: 0.44 }, { x: 0.68, y: 0.44 }] },
    { points: [{ x: 0.32, y: 0.62 }, { x: 0.68, y: 0.62 }] }
  ],
  '火': [
    { points: [{ x: 0.35, y: 0.42 }, { x: 0.30, y: 0.55 }] },
    { points: [{ x: 0.65, y: 0.38 }, { x: 0.70, y: 0.52 }] },
    { points: [{ x: 0.50, y: 0.20 }, { x: 0.46, y: 0.58 }, { x: 0.30, y: 0.82 }] },
    { points: [{ x: 0.48, y: 0.52 }, { x: 0.74, y: 0.82 }] }
  ],
  '水': [
    { points: [{ x: 0.50, y: 0.20 }, { x: 0.50, y: 0.76 }, { x: 0.42, y: 0.72 }] },
    { points: [{ x: 0.38, y: 0.42 }, { x: 0.26, y: 0.55 }] },
    { points: [{ x: 0.36, y: 0.34 }, { x: 0.22, y: 0.75 }] },
    { points: [{ x: 0.65, y: 0.32 }, { x: 0.55, y: 0.55 }, { x: 0.78, y: 0.80 }] }
  ],
  '木': [
    { points: [{ x: 0.20, y: 0.42 }, { x: 0.80, y: 0.42 }] },
    { points: [{ x: 0.50, y: 0.18 }, { x: 0.50, y: 0.82 }] },
    { points: [{ x: 0.50, y: 0.42 }, { x: 0.24, y: 0.76 }] },
    { points: [{ x: 0.50, y: 0.42 }, { x: 0.76, y: 0.76 }] }
  ],
  '金': [
    { points: [{ x: 0.50, y: 0.18 }, { x: 0.25, y: 0.44 }] },
    { points: [{ x: 0.48, y: 0.24 }, { x: 0.75, y: 0.44 }] },
    { points: [{ x: 0.32, y: 0.48 }, { x: 0.68, y: 0.48 }] },
    { points: [{ x: 0.50, y: 0.38 }, { x: 0.50, y: 0.74 }] },
    { points: [{ x: 0.36, y: 0.58 }, { x: 0.30, y: 0.66 }] },
    { points: [{ x: 0.64, y: 0.58 }, { x: 0.70, y: 0.66 }] },
    { points: [{ x: 0.28, y: 0.72 }, { x: 0.72, y: 0.72 }] },
    { points: [{ x: 0.20, y: 0.82 }, { x: 0.80, y: 0.82 }] }
  ],
  '土': [
    { points: [{ x: 0.28, y: 0.46 }, { x: 0.72, y: 0.46 }] },
    { points: [{ x: 0.50, y: 0.22 }, { x: 0.50, y: 0.76 }] },
    { points: [{ x: 0.18, y: 0.76 }, { x: 0.82, y: 0.76 }] }
  ]
};

/**
 * Returns stroke paths for a given character.
 * If not in pre-defined set, generates an aesthetic approximation
 * respecting expected stroke count and calligraphy rules.
 */
export function getStrokePathsForCharacter(
  character: string,
  expectedStrokes: number = 3
): NormalizedStroke[] {
  if (KANA_STROKE_PATHS[character]) {
    return KANA_STROKE_PATHS[character];
  }

  // Fallback: Generate structured strokes based on expected count and standard glyph layout
  const count = Math.max(1, Math.min(expectedStrokes || 3, 12));
  const generated: NormalizedStroke[] = [];

  const startY = 0.26;
  const endY = 0.76;
  const stepY = (endY - startY) / (count + 1);

  for (let i = 0; i < count; i++) {
    const y = startY + (i + 1) * stepY;
    // Alternate horizontal and vertical/diagonal structural strokes
    if (i % 2 === 0) {
      const x1 = 0.24 + (i * 0.03);
      const x2 = 0.76 - (i * 0.03);
      generated.push({
        points: [
          { x: x1, y: y },
          { x: (x1 + x2) / 2, y: y - 0.02 },
          { x: x2, y: y }
        ]
      });
    } else {
      const x = 0.35 + ((i % 3) * 0.15);
      generated.push({
        points: [
          { x: x, y: 0.22 + (i * 0.04) },
          { x: x + 0.02, y: y },
          { x: x + 0.04, y: 0.80 }
        ]
      });
    }
  }

  return generated;
}
