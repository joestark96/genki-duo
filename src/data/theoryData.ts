export interface TheoryExample {
  japanese: string;
  romaji: string;
  spanish: string;
  audioText: string;
  note?: string;
}

export interface TheoryTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface TheorySection {
  id: string;
  title: string;
  japaneseTitle?: string;
  category: 'grammar' | 'vocabulary' | 'writing' | 'culture';
  formula?: string;
  summary: string;
  content: string[];
  examples?: TheoryExample[];
  table?: TheoryTable;
  tip?: string;
}

export interface UnitTheory {
  unitId: number;
  title: string;
  genkiChapter: string;
  subtitle: string;
  description: string;
  themeColor: string;
  sections: TheorySection[];
}

export const unitTheories: UnitTheory[] = [
  // ==========================================
  // UNIDAD 0: ESCRITURA Y FONÉTICA
  // ==========================================
  {
    unitId: 0,
    title: 'Sistemas de Escritura y Fonética',
    genkiChapter: 'Genki Introducción',
    subtitle: 'Hiragana, Katakana, Kanjis y Pronunciación',
    description: 'Aprende los fundamentos de la escritura japonesa, las 5 vocales puras y todas las reglas fonéticas del libro Genki.',
    themeColor: '#58cc02',
    sections: [
      {
        id: 'u0-systems',
        title: 'Los 3 Sistemas de Escritura',
        japaneseTitle: '日本語の文字（ひらがな・カタカナ・漢字）',
        category: 'writing',
        summary: 'El idioma japonés no utiliza un alfabeto como el español, sino tres escrituras complementarias simultáneas.',
        content: [
          '1. **Hiragana (ひらがな):** 46 caracteres silábicos curvados. Se usa para palabras nativas japonesas, terminaciones verbales (okurigana) y partículas gramaticales (は, を, に, で).',
          '2. **Katakana (カタカナ):** 46 caracteres silábicos angulares y rectos. Se usa exclusivamente para palabras de origen extranjero (préstamos lingüísticos como コーヒー, パン, アメリカ), onomatopeyas y nombres científicos.',
          '3. **Kanji (漢字):** Ideogramas de origen chino que representan conceptos, objetos y significados. Para leer kanjis desconocidos, a veces se escribe Hiragana en tamaño miniatura encima o al lado: a esto se le llama **Furigana (ふりがな)**.'
        ],
        tip: 'En una sola oración japonesa verás los tres sistemas: 「メアリーさんはパンを食べます」 (Mary [katakana] es [hiragana] pan [katakana] objeto [hiragana] come [kanji + hiragana]).'
      },
      {
        id: 'u0-phonetics',
        title: 'Las 5 Vocales y la Fonética Japonesa',
        japaneseTitle: '母音と発音（あ・い・う・え・お）',
        category: 'writing',
        summary: 'El japonés tiene solo 5 sonidos vocálicos puros y constantes. Nunca cambian de sonido como en inglés.',
        content: [
          'El orden tradicional de las vocales en japonés es: **A, I, U, E, O** (あ、い、う、え、お).',
          '• **A (あ):** Como la "a" en español (padre).',
          '• **I (い):** Como la "i" en español (libro).',
          '• **U (う):** Como la "u" en español, pero con los labios menos redondeados (neutros).',
          '• **E (え):** Como la "e" en español (mesa).',
          '• **O (お):** Como la "o" en español (sol).'
        ],
        examples: [
          { japanese: 'あさ', romaji: 'asa', spanish: 'Mañana (tiempo matutino)', audioText: 'あさ' },
          { japanese: 'いえ', romaji: 'ie', spanish: 'Casa', audioText: 'いえ' },
          { japanese: 'うえ', romaji: 'ue', spanish: 'Arriba / Encima', audioText: 'うえ' },
          { japanese: 'あお', romaji: 'ao', spanish: 'Azul', audioText: 'あお' }
        ],
        tip: '¡Atención a las 4 excepciones de pronunciación! し se pronuncia "shi" (no si), ち se pronuncia "chi" (no ti), つ se pronuncia "tsu" (no tu), y ふ se pronuncia "fu" (soplando suavemente entre ambos labios sin morder con los dientes).'
      },
      {
        id: 'u0-dakuten',
        title: 'Modificadores: Dakuten (゛) y Handakuten (゜)',
        japaneseTitle: '濁音（だくおん）と 半濁音（はんだくおん）',
        category: 'writing',
        summary: 'Dos comillas pequeñas (tenten) o un círculo pequeño (maru) transforman los sonidos sordos en sonoros.',
        content: [
          '• **Fila Ka + ゛ ➔ Fila Ga:** が (ga), ぎ (gi), ぐ (gu), げ (ge), ご (go).',
          '• **Fila Sa + ゛ ➔ Fila Za:** ざ (za), じ (ji - irregular), ず (zu), ぜ (ze), ぞ (zo).',
          '• **Fila Ta + ゛ ➔ Fila Da:** だ (da), ぢ (ji / dji), づ (zu / dzu), で (de), ど (do).',
          '• **Fila Ha + ゛ ➔ Fila Ba (Dakuten):** ば (ba), び (bi), ぶ (bu), べ (be), ぼ (bo).',
          '• **Fila Ha + ゜ ➔ Fila Pa (Handakuten):** ぱ (pa), ぴ (pi), ぷ (pu), ぺ (pe), ぽ (po).'
        ],
        examples: [
          { japanese: 'がくせい', romaji: 'gakusei', spanish: 'Estudiante', audioText: 'がくせい' },
          { japanese: 'みず', romaji: 'mizu', spanish: 'Agua', audioText: 'みず' },
          { japanese: 'ともだち', romaji: 'tomodachi', spanish: 'Amigo', audioText: 'ともだち' },
          { japanese: 'パン', romaji: 'pan', spanish: 'Pan (del portugués)', audioText: 'パン' }
        ]
      },
      {
        id: 'u0-yoon',
        title: 'Sonidos Contraídos (Yōon / ようおん)',
        japaneseTitle: '拗音（きゃ・しゅ・ちょ）',
        category: 'writing',
        summary: 'Se forman combinando una consonante de la columna -i con ゃ, ゅ, ょ en tamaño pequeño.',
        content: [
          'El carácter pequeño se escribe a la mitad del tamaño regular (ゃ、ゅ、ょ) y se pronuncia en un solo golpe de voz continuo:',
          '• き (ki) + ゃ (ya) = **きゃ (kya)**, きゅ (kyu), きょ (kyo)',
          '• し (shi) + ゃ (ya) = **しゃ (sha)**, しゅ (shu), しょ (sho)',
          '• ち (chi) + ゃ (ya) = **ちゃ (cha)**, ちゅ (chu), ちょ (cho)',
          '• に (ni) + ゃ (ya) = **にゃ (nya)**, にゅ (nyu), にょ (nyo)',
          '• ひ (hi) + ゃ (ya) = **ひゃ (hya)**, ひゅ (hyu), ひょ (hyo)',
          '• み (mi) + ゃ (ya) = **みゃ (mya)**, みゅ (myu), みょ (myo)',
          '• り (ri) + ゃ (ya) = **りゃ (rya)**, りゅ (ryu), りょ (ryo)'
        ],
        examples: [
          { japanese: 'おちゃ', romaji: 'ocha', spanish: 'Té verde japonés', audioText: 'おちゃ' },
          { japanese: 'きょう', romaji: 'kyou', spanish: 'Hoy', audioText: 'きょう' },
          { japanese: 'りゅうがくせい', romaji: 'ryuugakusei', spanish: 'Estudiante extranjero de intercambio', audioText: 'りゅうがくせい' }
        ],
        tip: 'No confundas きよ (ki-yo = 2 tiempos) con きょ (kyo = 1 tiempo).'
      },
      {
        id: 'u0-sokuon',
        title: 'El Tsu Pequeño y Sonidos Dobles (Sokuon)',
        japaneseTitle: '促音（そくおん：っ）',
        category: 'writing',
        summary: 'El carácter っ (tsu pequeño) no se pronuncia como "tsu", sino que crea una breve pausa glotal que duplica la consonante siguiente.',
        content: [
          'Cuando veas 「っ」, detén la respiración y el sonido por un instante (1 mora) antes de soltar la siguiente consonante:',
          '• ざっし = **zasshi** (revista)',
          '• がっこう = **gakkou** (escuela)',
          '• きって = **kitte** (estampilla / sello postal)',
          '• きっぷ = **kippu** (boleto de tren)'
        ],
        examples: [
          { japanese: 'がっこう', romaji: 'gakkou', spanish: 'Escuela / Colegio', audioText: 'がっこう' },
          { japanese: 'きって', romaji: 'kitte', spanish: 'Estampilla postal', audioText: 'きって' },
          { japanese: 'ちょっと', romaji: 'chotto', spanish: 'Un poco / Un momento', audioText: 'ちょっと' }
        ],
        tip: '¡Cuidado! Cambiar la pausa cambia el significado: かた (kata = hombro) vs かった (katta = ganó / compré).'
      }
    ]
  },

  // ==========================================
  // UNIDAD 1: GENKI LECCIÓN 1 (NUEVOS AMIGOS)
  // ==========================================
  {
    unitId: 1,
    title: 'Genki Lección 1: Nuevos Amigos',
    genkiChapter: 'Genki I - Lesson 1',
    subtitle: 'Identidad, Saludos, X は Y です, Partículas か y の',
    description: 'Presentaciones personales, cómo decir tu nacionalidad, edad, hora, teléfono y conectar sustantivos.',
    themeColor: '#1cb0f6',
    sections: [
      {
        id: 'u1-greetings',
        title: 'Saludos Cotidianos y Auto-presentación',
        japaneseTitle: 'あいさつ と 自己紹介（じこしょうかい）',
        category: 'culture',
        summary: 'En Japón las presentaciones siguen un protocolo cultural estricto para mostrar respeto y cortesía.',
        content: [
          '• **はじめまして (Hajimemashite):** Viene del verbo はじめる (comenzar). Se traduce como "Mucho gusto" o "Encantado de conocerte", y se dice **únicamente la primera vez** que ves a alguien en tu vida.',
          '• **〜です (desu):** Dices tu nombre seguido de です. Ej: 「メアリーです」 (Soy Mary).',
          '• **よろしくお願いします (Yoroshiku onegaishimasu):** Es la frase imprescindible de cierre. Significa literalmente "Tráteme con bondad" o "Cuento con su favor".',
          '• Saludos por horario: おはようございます (Buenos días formal), こんにちは (Buenas tardes / Hola genérico diurno), こんばんは (Buenas noches al llegar o saludar), おやすみなさい (Buenas noches al ir a dormir o despedirse).'
        ],
        examples: [
          { japanese: 'はじめまして。たけしです。', romaji: 'Hajimemashite. Takeshi desu.', spanish: 'Mucho gusto. Soy Takeshi.', audioText: 'はじめましてたけしです' },
          { japanese: 'どうぞよろしくおねがいします。', romaji: 'Douzo yoroshiku onegaishimasu.', spanish: 'Encantado, cuento con su favor.', audioText: 'どうぞよろしくおねがいします' }
        ]
      },
      {
        id: 'u1-grammar-xway',
        title: 'Gramática 1: Estructura X は Y です',
        japaneseTitle: '文法１：X は Y です（〜es〜）',
        category: 'grammar',
        formula: 'X [Tema] は Y [Atributo/Identidad] です',
        summary: 'La oración básica más fundamental del japonés para afirmar identidad, nacionalidad y ocupación.',
        content: [
          '1. **X は (wa):** La partícula 「は」 marca el **tema** de la oración ("En cuanto a X...", "Hablando de X..."). **Regla fonética:** Aunque se escribe con el hiragana de la fila Ha (は), cuando actúa como partícula gramatical de tema SIEMPRE se pronuncia **"wa"**.',
          '2. **Y です (desu):** Es la cópula educada que equivale a "ser" o "estar" en español. La "u" final casi no se vocaliza, pronunciándose como "des".',
          '3. **Nacionalidades:** Basta con añadir el sufijo **人 (じん / jin)** después del nombre de cualquier país.',
          '   • アメリカ (EE.UU.) + 人 = **アメリカ人** (estadounidense)',
          '   • 日本 (Japón) + 人 = **日本人** (japonés)',
          '   • メキシコ (México) + 人 = **メキシコ人** (mexicano)',
          '   • スペイン (España) + 人 = **スペイン人** (español)'
        ],
        examples: [
          { japanese: 'わたしはメアリーです。', romaji: 'Watashi wa Mearii desu.', spanish: 'Yo soy Mary.', audioText: 'わたしはメアリーです' },
          { japanese: 'たけしさんは日本人です。', romaji: 'Takeshi-san wa nihonjin desu.', spanish: 'Takeshi es japonés.', audioText: 'たけしさんはにほんじんです' },
          { japanese: '山下先生は先生です。', romaji: 'Yamashita-sensei wa sensei desu.', spanish: 'El profesor Yamashita es maestro.', audioText: 'やましたせんせいはせんせいです' }
        ],
        tip: '¡Error común de principiantes! Nunca te pongas el sufijo de respeto 「さん」(san) a ti mismo. Solo se usa para referirse con respeto a las demás personas.'
      },
      {
        id: 'u1-grammar-ka',
        title: 'Gramática 2: Preguntas con la Partícula か',
        japaneseTitle: '文法２：質問の「か」',
        category: 'grammar',
        formula: 'Oración completa + か？',
        summary: 'En japonés no existe inversión de sujeto y verbo para hacer preguntas. Solo agregas か al final.',
        content: [
          'En español cambiamos el orden ("Tú eres estudiante" ➔ "¿Eres tú estudiante?"). En japonés el orden de las palabras se mantiene exactamente igual y solo se agrega la partícula interrogativa **「か」** al final con entonación ascendente.',
          '• Afirmativa: たけしさんは学生です。(Takeshi es estudiante).',
          '• Pregunta: たけしさんは学生です**か**。(¿Takeshi es estudiante?).',
          '• Respuestas estándar en Genki:',
          '   • Afirmativa: **はい、学生です。** (Sí, soy/es estudiante).',
          '   • Negativa: **いいえ、学生じゃありません。** (No, no soy/es estudiante).'
        ],
        examples: [
          { japanese: 'りゅうがくせいですか。', romaji: 'Ryuugakusei desu ka.', spanish: '¿Eres estudiante de intercambio?', audioText: 'りゅうがくせいですか' },
          { japanese: 'はい、そうです。', romaji: 'Hai, sou desu.', spanish: 'Sí, así es.', audioText: 'はいそうです' },
          { japanese: 'いいえ、ちがいます。', romaji: 'Iie, chigaimasu.', spanish: 'No, no es así (es diferente).', audioText: 'いいえちがいます' }
        ]
      },
      {
        id: 'u1-grammar-no',
        title: 'Gramática 3: La Partícula Conectora の',
        japaneseTitle: '文法３：名詞１ の 名詞２',
        category: 'grammar',
        formula: 'Sustantivo 1 (Poseedor / Institución) + の + Sustantivo 2 (Objeto / Rol)',
        summary: 'La partícula の une dos sustantivos, indicando que el primero califica, describe o posee al segundo.',
        content: [
          'El orden en japonés es inverso al español (lo general o poseedor va primero):',
          '1. **Posesión:** 私**の**本 (mi libro), メアリーさん**の**かばん (el bolso de Mary).',
          '2. **Pertenencia / Escuela / Empresa:** さくら大学**の**学生 (estudiante de la Universidad Sakura).',
          '3. **Campo / Especialidad:** 日本語**の**先生 (profesor de idioma japonés).'
        ],
        examples: [
          { japanese: 'さくら大学の学生です。', romaji: 'Sakura daigaku no gakusei desu.', spanish: 'Soy estudiante de la Universidad Sakura.', audioText: 'さくらだいがくのがくせいです' },
          { japanese: 'わたしのでんわばんごう', romaji: 'Watashi no denwa bangou', spanish: 'Mi número de teléfono', audioText: 'わたしのでんわばんごう' },
          { japanese: 'たけしさんのともだち', romaji: 'Takeshi-san no tomodachi', spanish: 'El amigo de Takeshi', audioText: 'たけしさんのともだち' }
        ],
        tip: 'Regla mnemotécnica: Piensa en 「の」 como el apóstrofe posesivo en inglés ("Sakura University\'s student").'
      },
      {
        id: 'u1-time-age',
        title: 'Números, La Hora y La Edad',
        japaneseTitle: '数字（すうじ）・時間（じかん）・年齢（ねんれい）',
        category: 'vocabulary',
        summary: 'Vocabulario clave y las famosas lecturas irregulares de Genki que siempre preguntan en exámenes.',
        content: [
          '• **La Hora (〜時 / ji):** Las 3 horas irregulares de oro:',
          '   • 4:00 = **よじ (yoji)** — ¡Nunca "yon-ji" ni "shi-ji"!',
          '   • 7:00 = **しちじ (shichiji)** — ¡Casi nunca "nana-ji" para horas!',
          '   • 9:00 = **くじ (kuji)** — ¡Nunca "kyuu-ji"!',
          '   • Y media: sufijo **半 (はん / han)**. Ej: にじはん (2:30).',
          '• **La Edad (〜才 / 〜歳 / sai):** Las edades con asimilación (っ):',
          '   • 1 año = **いっさい (issai)**',
          '   • 8 años = **はっさい (hassai)**',
          '   • 10 años = **じゅっさい (jussai)**',
          '   • 20 años = **はたち (hatachi)** — Lectura tradicional de mayoría de edad en Japón.',
          '• **Teléfonos:** El guion `-` se lee en voz alta con la partícula **「の」** (ej: 090-123 se dice *zero kyuu zero no ichi ni san*).'
        ],
        examples: [
          { japanese: 'いま、なんじですか。ー よじはんです。', romaji: 'Ima, nanji desu ka. - Yoji han desu.', spanish: '¿Qué hora es ahora? - Son las 4:30.', audioText: 'いまなんじですかよじはんです' },
          { japanese: '何歳ですか。ー はたちです。', romaji: 'Nansai desu ka. - Hatachi desu.', spanish: '¿Cuántos años tienes? - Tengo 20 años.', audioText: 'なんさいですかはたちです' }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 2: GENKI LECCIÓN 2 (DE COMPRAS)
  // ==========================================
  {
    unitId: 2,
    title: 'Genki Lección 2: De Compras',
    genkiChapter: 'Genki I - Lesson 2',
    subtitle: 'Demostrativos Ko-So-A-Do, Precios y Partícula も',
    description: 'Aprende a señalar objetos (esto, eso, aquello), preguntar precios en tiendas y usar la partícula "también" (も).',
    themeColor: '#ff9600',
    sections: [
      {
        id: 'u2-kosoados',
        title: 'Serie Demostrativa Ko-So-A-Do',
        japaneseTitle: '指示詞（こそあど言葉）',
        category: 'grammar',
        summary: 'En japonés, la distancia física y psicológica con respecto al hablante y al oyente define 4 niveles exactos.',
        content: [
          '• **Ko- (これ / この):** Cerca del **hablante** (lo que tengo en mi mano o a mi lado).',
          '• **So- (それ / その):** Cerca del **oyente** (lo que tiene la otra persona).',
          '• **A- (あれ / あの):** Lejos de **ambos** (allá a la distancia).',
          '• **Do- (どれ / どの):** Pregunta / duda ("¿cuál?").',
          '**Diferencia crucial en Genki:**',
          '• **これ / それ / あれ (Pronombres):** Van solos como sujeto. Ej: 「**これ**はいくらですか」 (¿Cuánto cuesta esto?).',
          '• **この / その / あの (Adjetivos):** OBLIGATORIAMENTE van seguidos de un sustantivo. Ej: 「**この本**はいくらですか」 (¿Cuánto cuesta este libro?).'
        ],
        table: {
          title: 'Tabla Maestra de Demostrativos Ko-So-A-Do',
          headers: ['Distancia', 'Cosa Solitaria', '+ Sustantivo', 'Lugar'],
          rows: [
            ['Cerca de mí (Hablante)', 'これ (esto)', 'この + Sust.', 'ここ (aquí)'],
            ['Cerca de ti (Oyente)', 'それ (eso)', 'その + Sust.', 'そこ (ahí)'],
            ['Lejos de ambos', 'あれ (aquello)', 'あの + Sust.', 'あそこ (allá)'],
            ['Interrogativo (¿Cuál?)', 'どれ (cuál)', 'どの + Sust.', 'どこ (dónde)']
          ]
        },
        examples: [
          { japanese: 'これはペンです。', romaji: 'Kore wa pen desu.', spanish: 'Esto es un bolígrafo.', audioText: 'これはペンです' },
          { japanese: 'そのとけいはいくらですか。', romaji: 'Sono tokei wa ikura desu ka.', spanish: '¿Cuánto cuesta ese reloj?', audioText: 'そのとけいはいくらですか' },
          { japanese: 'あそこはぎんこうです。', romaji: 'Asoko wa ginkou desu.', spanish: 'Aquello de allá es un banco.', audioText: 'あそこはぎんこうです' }
        ]
      },
      {
        id: 'u2-particle-mo',
        title: 'La Partícula de Inclusión も (También)',
        japaneseTitle: '助詞「も」（〜también〜）',
        category: 'grammar',
        formula: 'X も Y です (X también es Y)',
        summary: 'La partícula も sustituye directamente a は cuando se quiere expresar que algo o alguien comparte la misma característica.',
        content: [
          'Cuando dos oraciones afirman lo mismo sobre sujetos distintos, en la segunda oración la partícula **「は」 se reemplaza por 「も」**.',
          '• たけしさんは日本人です。(Takeshi es japonés).',
          '• やました先生**も**日本人です。(El profesor Yamashita **también** es japonés).',
          '• メアリーさんは学生です。スミスさん**も**学生です。(Mary es estudiante. Smith **también** es estudiante).'
        ],
        examples: [
          { japanese: 'わたしも学生です。', romaji: 'Watashi mo gakusei desu.', spanish: 'Yo también soy estudiante.', audioText: 'わたしもがくせいです' },
          { japanese: 'これも千円です。', romaji: 'Kore mo sen-en desu.', spanish: 'Esto también cuesta 1,000 yenes.', audioText: 'これもありますせんえんです' }
        ],
        tip: '¡Nunca digas 「はも」 juntos! 「も」 reemplaza totalmente a 「は」.'
      },
      {
        id: 'u2-negation',
        title: 'Negación Educada: 〜じゃありません',
        japaneseTitle: '否定（じゃありません / ではありません）',
        category: 'grammar',
        formula: 'Sustantivo + じゃありません (No es...)',
        summary: 'Para negar oraciones con です, sustituimos です por じゃありません en conversación.',
        content: [
          '• **じゃありません (ja arimasen):** Forma estándar y educada más usada en conversación oral.',
          '• **ではありません (dewa arimasen):** Más formal, típica de escritos, ensayos y discursos oficiales.',
          '• Afirmativa: たけしさんは先生です。(Takeshi es profesor).',
          '• Negativa: たけしさんは先生**じゃありません**。(Takeshi no es profesor).'
        ],
        examples: [
          { japanese: 'わたしはさくら大学の学生じゃありません。', romaji: 'Watashi wa Sakura daigaku no gakusei ja arimasen.', spanish: 'No soy estudiante de la Universidad Sakura.', audioText: 'わたしはさくらだいがくのがくせいじゃありません' }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 3: GENKI LECCIÓN 3 (VIDA COTIDIANA)
  // ==========================================
  {
    unitId: 3,
    title: 'Genki Lección 3: Vida Cotidiana y Verbos',
    genkiChapter: 'Genki I - Lesson 3',
    subtitle: 'Verbos en Forma 〜ます y Partículas を, で, に, へ',
    description: 'La puerta al japonés real: cómo conjugar verbos en presente educado y marcar objetos, lugares, horas y destinos.',
    themeColor: '#ce82ff',
    sections: [
      {
        id: 'u3-verb-conjugation',
        title: 'Los 3 Grupos de Verbos y Forma 〜ます',
        japaneseTitle: '動詞のグループ と 〜ます形',
        category: 'grammar',
        summary: 'En japonés todos los verbos en su forma de diccionario terminan en sonido "-u" y se clasifican en 3 grupos.',
        content: [
          '1. **Grupo 1: U-verbs (五段動詞 - Godan):** El sonido "-u" final cambia a la fila "-i" y se añade ます.',
          '   • のむ (beber) ➔ の**み**ます (nomimasu)',
          '   • きく (escuchar) ➔ き**き**ます (kikimasu)',
          '   • はなす (hablar) ➔ はな**し**ます (hanashimasu)',
          '   • いく (ir) ➔ い**き**ます (ikimasu)',
          '2. **Grupo 2: Ru-verbs (一段動詞 - Ichidan):** Terminan en -eru o -iru. Simplemente se quita el る y se añade ます.',
          '   • たべる (comer) ➔ たべ**ます** (tabemasu)',
          '   • みる (ver/mirar) ➔ み**ます** (mimasu)',
          '   • ねる (dormir) ➔ ね**ます** (nemasu)',
          '3. **Grupo 3: Verbos Irregulares (不規則動詞):** Solo existen 2 en todo el idioma japonés:',
          '   • する (hacer) ➔ **します** (shimasu)',
          '   • くる (venir) ➔ **きます** (kimasu)'
        ],
        table: {
          title: 'Conjugación en Presente / Futuro Educado',
          headers: ['Forma', 'Significado', 'Ejemplo (Comer)', 'Ejemplo (Beber)'],
          rows: [
            ['Afirmativo (~ます)', 'Hago / Haré', 'たべます (como)', 'のみます (bebo)'],
            ['Negativo (~ません)', 'No hago / No haré', 'たべません (no como)', 'のみません (no bebo)'],
            ['Pregunta (~ますか)', '¿Haces / Harás?', 'たべますか (¿comes?)', 'のみますか (¿bebes?)'],
            ['Invitación (~ませんか)', '¿Por qué no...?', 'たべませんか (¿comemos?)', 'のみませんか (¿bebemos?)']
          ]
        },
        examples: [
          { japanese: 'あさごはんをたべます。', romaji: 'Asagohan o tabemasu.', spanish: 'Como el desayuno.', audioText: 'あさごはんをたべます' },
          { japanese: 'おさけをのみません。', romaji: 'Osake o nomimasen.', spanish: 'No bebo alcohol.', audioText: 'おさけをのみません' }
        ]
      },
      {
        id: 'u3-particles',
        title: 'Las 4 Partículas Clave de Acción: を, で, に, へ',
        japaneseTitle: '助詞：を・で・に・へ',
        category: 'grammar',
        summary: 'Cada partícula cumple un rol sintáctico preciso que no se puede intercambiar.',
        content: [
          '• **Partícula を (wo / o):** Marca el **objeto directo** sobre el cual recae la acción física del verbo.',
          '   • コーヒー**を**飲みます (Bebo café).',
          '   • 本**を**読みます (Leo un libro).',
          '• **Partícula で (de):** Indica el **lugar donde ocurre una acción** o el **medio/herramienta**.',
          '   • としょかん**で**勉強します (Estudio en la biblioteca).',
          '   • バス**で**行きます (Voy en autobús).',
          '• **Partícula に (ni):** Indica la **hora puntual específica** (con números) o el **destino/meta**.',
          '   • 7時**に**起きます (Me levanto a las 7:00).',
          '   • 家**に**帰ります (Regreso a casa).',
          '• **Partícula へ (he ➔ se pronuncia "e"):** Indica la **dirección y trayectoria** del movimiento.',
          '   • 日本**へ**行きます (Voy hacia Japón).'
        ],
        examples: [
          { japanese: 'うちでテレビをみます。', romaji: 'Uchi de terebi o mimasu.', spanish: 'Veo la televisión en casa.', audioText: 'うちでテレビをみます' },
          { japanese: 'じゅういちじにねます。', romaji: 'Juuichiji ni nemasu.', spanish: 'Me voy a dormir a las 11:00.', audioText: 'じゅういちじにねます' }
        ],
        tip: 'Regla de oro de Genki para partícula に: Las palabras de tiempo relativo (きょう [hoy], あした [mañana], まいにち [todos los días], こんばん [esta noche]) ¡NUNCA llevan に!'
      }
    ]
  }
];
