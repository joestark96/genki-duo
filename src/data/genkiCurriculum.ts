import { Unit } from '../types';

export const genkiCurriculum: Unit[] = [
  // ==========================================
  // UNIDAD 0: FUNDAMENTOS KANA (Hiragana & Katakana)
  // ==========================================
  {
    id: 0,
    genkiBook: 'Kanas',
    title: 'Unidad 0: Los Alfabetos Kana',
    subtitle: 'Hiragana y Katakana Básicos',
    description: 'Aprende los sonidos fundamentales y los caracteres de la escritura japonesa.',
    themeColor: '#58cc02',
    nodes: [
      {
        id: 'l0-node-1',
        unitId: 0,
        lessonNumber: 0,
        title: 'Las 5 Vocales',
        japaneseTitle: 'あ・い・う・え・お',
        description: 'Domina las 5 vocales base en Hiragana',
        icon: 'Sparkles',
        color: 'green',
        totalSteps: 3,
        unlocked: true,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-1',
            type: 'multiple-choice',
            prompt: '¿Qué sonido representa este caracter?',
            promptSub: 'あ',
            japaneseVoiceText: 'あ',
            options: [
              { id: 'opt-a', text: 'a', isCorrect: true },
              { id: 'opt-o', text: 'o' },
              { id: 'opt-e', text: 'e' },
              { id: 'opt-u', text: 'u' }
            ],
            correctAnswerId: 'opt-a',
            explanation: '「あ」 es el caracter Hiragana para la vocal "a".'
          },
          {
            id: 'ex-0-2',
            type: 'match-pairs',
            prompt: 'Une cada caracter con su sonido en Romaji',
            pairs: [
              { id: 'p1', left: 'あ', leftSub: 'Vocal 1', right: 'a' },
              { id: 'p2', left: 'い', leftSub: 'Vocal 2', right: 'i' },
              { id: 'p3', left: 'う', leftSub: 'Vocal 3', right: 'u' },
              { id: 'p4', left: 'え', leftSub: 'Vocal 4', right: 'e' }
            ],
            explanation: 'Las vocales en japonés siempre siguen el orden: a, i, u, e, o.'
          },
          {
            id: 'ex-0-3',
            type: 'listening',
            prompt: 'Escucha el audio y selecciona el caracter correcto',
            japaneseVoiceText: 'お',
            options: [
              { id: 'opt-1', text: 'お (o)', isCorrect: true },
              { id: 'opt-2', text: 'あ (a)' },
              { id: 'opt-3', text: 'え (e)' },
              { id: 'opt-4', text: 'い (i)' }
            ],
            correctAnswerId: 'opt-1',
            explanation: 'El sonido escuchado fue "o", correspondiente a 「お」.'
          }
        ]
      },
      {
        id: 'l0-node-2',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Ka (か・き・く・け・こ)',
        japaneseTitle: 'か行のひらがな',
        description: 'Sonidos consonánticos con K',
        icon: 'Flame',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-k1',
            type: 'multiple-choice',
            prompt: '¿Cómo se lee 「かさ」 (paraguas)?',
            promptSub: 'かさ',
            japaneseVoiceText: 'かさ',
            options: [
              { id: 'o1', text: 'kasa', isCorrect: true },
              { id: 'o2', text: 'saka' },
              { id: 'o3', text: 'kawa' },
              { id: 'o4', text: 'sora' }
            ],
            correctAnswerId: 'o1',
            explanation: '「か」 (ka) + 「さ」 (sa) = かさ (kasa, paraguas).'
          },
          {
            id: 'ex-0-k2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Ka',
            pairs: [
              { id: 'p1', left: 'か', right: 'ka' },
              { id: 'p2', left: 'き', right: 'ki' },
              { id: 'p3', left: 'く', right: 'ku' },
              { id: 'p4', left: 'こ', right: 'ko' }
            ],
            explanation: 'La serie Ka se combina con las 5 vocales: ka, ki, ku, ke, ko.'
          },
          {
            id: 'ex-0-k3',
            type: 'listening',
            prompt: 'Escucha con atención y selecciona la sílaba correcta:',
            japaneseVoiceText: 'き',
            options: [
              { id: 'opt-ki', text: 'き (ki)', isCorrect: true },
              { id: 'opt-ku', text: 'く (ku)' },
              { id: 'opt-ke', text: 'け (ke)' },
              { id: 'opt-ko', text: 'こ (ko)' }
            ],
            correctAnswerId: 'opt-ki',
            explanation: 'Escuchaste 「き」 (ki).'
          }
        ]
      },
      {
        id: 'l0-node-3',
        unitId: 0,
        lessonNumber: 0,
        title: 'Primeros Katakanas',
        japaneseTitle: 'カタカナの基本',
        description: 'Aprende los caracteres usados para palabras extranjeras',
        icon: 'BookOpen',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-kata1',
            type: 'multiple-choice',
            prompt: '¿Qué palabra extranjera es 「コーヒー」?',
            promptSub: 'コーヒー',
            japaneseVoiceText: 'コーヒー',
            options: [
              { id: 'c1', text: 'Café (Coffee)', isCorrect: true },
              { id: 'c2', text: 'Cola' },
              { id: 'c3', text: 'Cacao' },
              { id: 'c4', text: 'Té' }
            ],
            correctAnswerId: 'c1',
            explanation: 'コーヒー (koohii) proviene del neerlandés/inglés "coffee".'
          },
          {
            id: 'ex-0-kata2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres Katakana con su lectura',
            pairs: [
              { id: 'kp1', left: 'ア', right: 'a' },
              { id: 'kp2', left: 'イ', right: 'i' },
              { id: 'kp3', left: 'カ', right: 'ka' },
              { id: 'kp4', left: 'コ', right: 'ko' }
            ],
            explanation: 'Los Katakana tienen trazos más rectos y angulares que los Hiragana.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 1: GENKI LECCIÓN 1 (Nuevos Amigos)
  // ==========================================
  {
    id: 1,
    genkiBook: 'Genki I',
    title: 'Genki Lección 1: Nuevos Amigos',
    subtitle: 'Saludos, Números y X は Y です',
    description: 'Preséntate, pregunta la hora y forma tus primeras oraciones en japonés.',
    themeColor: '#1cb0f6',
    nodes: [
      {
        id: 'l1-node-1',
        unitId: 1,
        lessonNumber: 1,
        title: 'Saludos de Encuentro',
        japaneseTitle: 'あいさつ',
        description: 'Aprende Ohayou, Konnichiwa y Arigatou',
        icon: 'MessageCircle',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-1',
            type: 'multiple-choice',
            prompt: '¿Cómo saludas formalmente por la mañana en japonés?',
            promptSub: 'Buenos días (formal)',
            japaneseVoiceText: 'おはようございます',
            options: [
              { id: 's1', text: 'おはようございます (Ohayou gozaimasu)', isCorrect: true },
              { id: 's2', text: 'こんにちは (Konnichiwa)' },
              { id: 's3', text: 'こんばんは (Konbanwa)' },
              { id: 's4', text: 'さようなら (Sayounara)' }
            ],
            correctAnswerId: 's1',
            explanation: '「おはようございます」 es el saludo formal de la mañana que enseña Genki L1.'
          },
          {
            id: 'ex-1-2',
            type: 'word-order',
            prompt: 'Ordena las palabras para decir: "Hola, soy Mary."',
            promptSub: 'こんにちは、メアリーです。',
            japaneseVoiceText: 'こんにちはメアリーです',
            wordBank: ['です', 'こんにちは', 'メアリー'],
            correctSentence: ['こんにちは', 'メアリー', 'です'],
            explanation: 'En japonés, el verbo/cópula 「です」 siempre va al final de la oración.'
          },
          {
            id: 'ex-1-3',
            type: 'listening',
            prompt: 'Escucha y selecciona la traducción en español:',
            japaneseVoiceText: 'ありがとうございます',
            options: [
              { id: 'l1-a', text: 'Muchas gracias', isCorrect: true },
              { id: 'l1-b', text: 'De nada' },
              { id: 'l1-c', text: 'Buenas noches' },
              { id: 'l1-d', text: 'Disculpe' }
            ],
            correctAnswerId: 'l1-a',
            explanation: '「ありがとうございます」 significa "Muchas gracias".'
          }
        ]
      },
      {
        id: 'l1-node-2',
        unitId: 1,
        lessonNumber: 1,
        title: 'Estructura X は Y です',
        japaneseTitle: 'X は Y です (X es Y)',
        description: 'La partícula tema は (wa) y la cópula です (desu)',
        icon: 'BookOpen',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-g1',
            type: 'word-order',
            prompt: 'Forma la frase: "Takeshi es estudiante."',
            promptSub: 'たけしさんは学生です。',
            japaneseVoiceText: 'たけしさんはがくせいです',
            wordBank: ['がくせい', 'です', 'たけしさん', 'は'],
            correctSentence: ['たけしさん', 'は', 'がくせい', 'です'],
            explanation: 'X (たけしさん) + は (wa) + Y (がくせい) + です (desu).'
          },
          {
            id: 'ex-1-g2',
            type: 'multiple-choice',
            prompt: '¿Cómo se pronuncia la partícula 「は」 cuando marca el tema?',
            promptSub: 'わたし「は」がくせいです',
            options: [
              { id: 'w1', text: 'Se pronuncia "wa"', isCorrect: true },
              { id: 'w2', text: 'Se pronuncia "ha"' },
              { id: 'w3', text: 'Se pronuncia "pa"' },
              { id: 'w4', text: 'No se pronuncia' }
            ],
            correctAnswerId: 'w1',
            explanation: 'Como regla de Genki, el caracter 「は」 se pronuncia "wa" únicamente cuando actúa como partícula gramatical de tema.'
          },
          {
            id: 'ex-1-g3',
            type: 'word-order',
            prompt: 'Ordena para decir: "¿Eres estudiante?" (Pregunta con か)',
            promptSub: '学生ですか。',
            japaneseVoiceText: 'がくせいですか',
            wordBank: ['か', 'がくせい', 'です'],
            correctSentence: ['がくせい', 'です', 'か'],
            explanation: 'Al añadir la partícula interrogativa 「か」 al final, conviertes cualquier oración en pregunta.'
          }
        ]
      },
      {
        id: 'l1-node-3',
        unitId: 1,
        lessonNumber: 1,
        title: 'Números y la Hora',
        japaneseTitle: 'すうじ と じかん',
        description: 'Números 1-100 y decir la hora con 〜時 (ji)',
        icon: 'Flame',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-n1',
            type: 'match-pairs',
            prompt: 'Empareja los números con su lectura en japonés',
            pairs: [
              { id: 'np1', left: '一 (1)', right: 'いち (ichi)' },
              { id: 'np2', left: '二 (2)', right: 'に (ni)' },
              { id: 'np3', left: '三 (3)', right: 'さん (san)' },
              { id: 'np4', left: '十 (10)', right: 'じゅう (juu)' }
            ],
            explanation: 'Los números base del 1 al 10 son la clave para contar en Genki.'
          },
          {
            id: 'ex-1-n2',
            type: 'multiple-choice',
            prompt: '¿Qué hora significa 「いま なんじ ですか」?',
            promptSub: '今、何時ですか。',
            japaneseVoiceText: 'いまなんじですか',
            options: [
              { id: 't1', text: '¿Qué hora es ahora?', isCorrect: true },
              { id: 't2', text: '¿A qué hora nos vemos?' },
              { id: 't3', text: '¿Dónde está el reloj?' },
              { id: 't4', text: '¿Cuántos años tienes?' }
            ],
            correctAnswerId: 't1',
            explanation: 'いま (ahora) + なんじ (qué hora) + ですか (es?).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 2: GENKI LECCIÓN 2 (De Compras)
  // ==========================================
  {
    id: 2,
    genkiBook: 'Genki I',
    title: 'Genki Lección 2: De Compras',
    subtitle: 'Demostrativos y Precios',
    description: 'Aprende これ, それ, あれ, どれ, números grandes y comprar en tiendas.',
    themeColor: '#ff9600',
    nodes: [
      {
        id: 'l2-node-1',
        unitId: 2,
        lessonNumber: 2,
        title: 'Esto, Eso y Aquello',
        japaneseTitle: 'これ・それ・あれ',
        description: 'Los demostrativos de distancia espacial de Genki',
        icon: 'ShoppingBag',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-2-1',
            type: 'multiple-choice',
            prompt: 'Señalas un objeto que está junto a la otra persona. ¿Cuál usas?',
            promptSub: 'Eso (cerca del oyente)',
            options: [
              { id: 'd2', text: 'それ (sore)', isCorrect: true },
              { id: 'd1', text: 'これ (kore - cerca del que habla)' },
              { id: 'd3', text: 'あれ (are - lejos de ambos)' },
              { id: 'd4', text: 'どれ (dore - cuál)' }
            ],
            correctAnswerId: 'd2',
            explanation: 'Regla Ko-So-A-Do: Kore (hablante), Sore (oyente), Are (lejos), Dore (pregunta).'
          },
          {
            id: 'ex-2-2',
            type: 'word-order',
            prompt: 'Ordena: "¿Cuánto cuesta este libro?"',
            promptSub: 'この本はいくらですか。',
            japaneseVoiceText: 'このほんはいくらですか',
            wordBank: ['いくら', 'このほん', 'か', 'は', 'です'],
            correctSentence: ['このほん', 'は', 'いくら', 'です', 'か'],
            explanation: '「この本」 (este libro) + は + 「いくらですか」 (¿cuánto cuesta?).'
          }
        ]
      },
      {
        id: 'l2-node-2',
        unitId: 2,
        lessonNumber: 2,
        title: 'Partículas の y も',
        japaneseTitle: 'の (posesión) y も (también)',
        description: 'Mi libro (私の本) y "yo también" (私も)',
        icon: 'Sparkles',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-2-no1',
            type: 'word-order',
            prompt: 'Ordena para decir: "El bolso de Mary"',
            promptSub: 'メアリーさんのかばん',
            japaneseVoiceText: 'メアリーさんのかばん',
            wordBank: ['かばん', 'の', 'メアリーさん'],
            correctSentence: ['メアリーさん', 'の', 'かばん'],
            explanation: 'En japonés el poseedor va primero, seguido de 「の」 y el objeto poseído.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 3: GENKI LECCIÓN 3 (Vida Diaria)
  // ==========================================
  {
    id: 3,
    genkiBook: 'Genki I',
    title: 'Genki Lección 3: Haciendo Planes',
    subtitle: 'Verbos 〜ます y Rutinas',
    description: 'Conjugaciones de verbos en presente educado y partículas を, で, に, へ.',
    themeColor: '#ce82ff',
    nodes: [
      {
        id: 'l3-node-1',
        unitId: 3,
        lessonNumber: 3,
        title: 'Verbos Forma 〜ます',
        japaneseTitle: '〜ます と 〜ません',
        description: 'Comer, beber, escuchar y ver en presente educado',
        icon: 'Coffee',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-3-1',
            type: 'multiple-choice',
            prompt: '¿Cómo dices "No como carne" de forma educada?',
            promptSub: 'Negativo de たべます (tabemasu)',
            japaneseVoiceText: 'たべません',
            options: [
              { id: 'v-neg', text: 'たべません (tabemasen)', isCorrect: true },
              { id: 'v-pos', text: 'たべます (tabemasu)' },
              { id: 'v-past', text: 'たべました (tabemashita)' },
              { id: 'v-plain', text: 'たべない (tabenai)' }
            ],
            correctAnswerId: 'v-neg',
            explanation: 'Para negar un verbo en forma -masu, cambias 〜ます por 〜ません.'
          },
          {
            id: 'ex-3-2',
            type: 'word-order',
            prompt: 'Ordena: "Bebo café."',
            promptSub: 'コーヒーを飲みます。',
            japaneseVoiceText: 'コーヒーをのみます',
            wordBank: ['のみます', 'コーヒー', 'を'],
            correctSentence: ['コーヒー', 'を', 'のみます'],
            explanation: 'La partícula 「を」 (wo / o) marca el objeto directo sobre el que recae la acción.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 4: GENKI LECCIÓN 4 (La Primera Cita)
  // ==========================================
  {
    id: 4,
    genkiBook: 'Genki I',
    title: 'Genki Lección 4: La Primera Cita',
    subtitle: 'Pasado 〜ました y あります / います',
    description: 'Existencia de objetos y personas, días de la semana y oraciones en pasado.',
    themeColor: '#ff4b4b',
    nodes: [
      {
        id: 'l4-node-1',
        unitId: 4,
        lessonNumber: 4,
        title: 'あります vs います',
        japaneseTitle: '存在のどうし (Existencia)',
        description: 'Diferencia entre cosas inanimadas (あります) y seres vivos (います)',
        icon: 'Heart',
        color: 'red',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-4-1',
            type: 'multiple-choice',
            prompt: 'Hay un gato (ねこ). ¿Qué verbo de existencia debes usar?',
            promptSub: 'ねこが...',
            options: [
              { id: 'ex-i', text: 'います (imasu - para seres vivos animados)', isCorrect: true },
              { id: 'ex-a', text: 'あります (arimasu - para objetos y cosas)' },
              { id: 'ex-d', text: 'です (desu)' }
            ],
            correctAnswerId: 'ex-i',
            explanation: 'Genki L4 enfatiza: usa 「います」 para personas y animales, y 「あります」 para objetos o eventos.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 5: GENKI LECCIÓN 5 (Viaje a Okinawa)
  // ==========================================
  {
    id: 5,
    genkiBook: 'Genki I',
    title: 'Genki Lección 5: Viaje a Okinawa',
    subtitle: 'Adjetivos い y な',
    description: 'Describe personas, lugares y comidas en presente y pasado.',
    themeColor: '#58cc02',
    nodes: [
      {
        id: 'l5-node-1',
        unitId: 5,
        lessonNumber: 5,
        title: 'Adjetivos い y な',
        japaneseTitle: 'い形容詞・な形容詞',
        description: 'Aprende Oishii, Genki, Takai, Kirei y sus conjugaciones',
        icon: 'Sparkles',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-5-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice en pasado "La comida estuvo deliciosa"?',
            promptSub: 'おいしい ➔ Pasado afirmativo',
            options: [
              { id: 'adj-past', text: 'おいしかったです (oishikatta desu)', isCorrect: true },
              { id: 'adj-pres', text: 'おいしいです (oishii desu)' },
              { id: 'adj-neg', text: 'おいしくないです (oishikunai desu)' }
            ],
            correctAnswerId: 'adj-past',
            explanation: 'Para pasar un い-adjetivo a pasado, quitas la い final y añades かったです.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDADES FUTURAS (GENKI I y GENKI II)
  // ==========================================
  {
    id: 6,
    genkiBook: 'Genki I',
    title: 'Genki Lección 6: Un Día en Tokio',
    subtitle: 'La Famosa Forma Te (〜て)',
    description: 'Aprende a conectar oraciones, pedir favores (〜てください) y pedir permisos.',
    themeColor: '#1cb0f6',
    nodes: [
      {
        id: 'l6-node-1',
        unitId: 6,
        lessonNumber: 6,
        title: 'La Canción de la Forma Te',
        japaneseTitle: 'て形のうた',
        description: 'Reglas de conjugación para verbos Ru y U',
        icon: 'Music',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: []
      }
    ]
  },
  {
    id: 7,
    genkiBook: 'Genki I',
    title: 'Genki Lección 7 a 12: Genki I Avanzado',
    subtitle: 'Acciones en curso, Pasado informal y Experiencias',
    description: 'Completa la primera mitad de tu viaje para alcanzar el nivel N5.',
    themeColor: '#ce82ff',
    nodes: [
      {
        id: 'l7-node-1',
        unitId: 7,
        lessonNumber: 7,
        title: 'Forma Informal (Forma Diccionario)',
        japaneseTitle: '普通体 (ふつうたい)',
        description: 'Hablar con amigos y familia en japonés informal',
        icon: 'Users',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: []
      }
    ]
  },
  {
    id: 8,
    genkiBook: 'Genki II',
    title: 'Genki II: Lecciones 13 a 23',
    subtitle: 'Rumbo al nivel Intermedio N4',
    description: 'Potencial (〜できる), Volitivo (〜よう), Condicionales (〜たら), Dar y Recibir, y Keigo.',
    themeColor: '#ff9600',
    nodes: [
      {
        id: 'l8-node-1',
        unitId: 8,
        lessonNumber: 13,
        title: 'Verbos Potenciales y Deseos',
        japaneseTitle: '〜たい・〜ことができる',
        description: 'Expresa lo que quieres hacer o lo que eres capaz de lograr',
        icon: 'Award',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: []
      }
    ]
  }
];
