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
        id: 'u2-numbers-prices',
        title: 'Números Grandes y Precios: 〜はいくらですか',
        japaneseTitle: '百（ひゃく）・千（せん）・万（まん）と 値段',
        category: 'vocabulary',
        summary: 'Cómo contar dinero en yenes (円 / えん) y las 6 lecturas irregulares que siempre vienen en exámenes.',
        content: [
          '• **Cientos (百 / ひゃく):** Las 3 irregularidades fonéticas:',
          '   • 300 = **さんびゃく (sanbyaku)** — con dakuten (゛)',
          '   • 600 = **ろっぴゃく (roppyaku)** — con handakuten (゜) y tsu pequeño (っ)',
          '   • 800 = **はっぴゃく (happyaku)** — con handakuten (゜) y tsu pequeño (っ)',
          '• **Miles (千 / せん):** Las 2 irregularidades:',
          '   • 3,000 = **さんぜん (sanzen)** — con z',
          '   • 8,000 = **はっせん (hassen)** — con s geminada (っ)',
          '• **Diez Mil (万 / まん):** 10,000 se dice **いちまん (ichiman)**. El sistema japonés cuenta en bloques de 4 ceros (万 = 10,000).',
          '• **Preguntar el precio:** 「[Objeto] は いくらですか」 (¿Cuánto cuesta...?).',
          '• **Decidir comprar:** 「これをください」 (Deme esto, por favor).'
        ],
        examples: [
          { japanese: 'このとけいはいくらですか。ー さんぜんごひゃくえんです。', romaji: 'Kono tokei wa ikura desu ka. - Sanzen gohyaku-en desu.', spanish: '¿Cuánto cuesta este reloj? - Cuesta 3,500 yenes.', audioText: 'このとけいはいくらですかさんぜんごひゃくえんです' },
          { japanese: 'じゃあ、これをください。', romaji: 'Jaa, kore o kudasai.', spanish: 'Entonces, deme esto por favor.', audioText: 'じゃあこれをください' }
        ],
        tip: '1,000 se dice simplemente 「せん」(sen), no "ichi-sen". Pero 10,000 OBLIGATORIAMENTE lleva el uno: 「いちまん」(ichiman).'
      },
      {
        id: 'u2-dare-no',
        title: 'Posesión e Interrogativo: だれの (¿De quién?)',
        japaneseTitle: 'だれの + 名詞',
        category: 'grammar',
        formula: 'これは だれの [Objeto] ですか',
        summary: 'Para preguntar de quién es un objeto, combinamos だれ (quién) con la partícula de posesión の.',
        content: [
          '• Pregunta: これは**だれのかばん**ですか。(¿De quién es esta bolsa?).',
          '• Respuesta completa: それはメアリーさんのかばんです。(Esa es la bolsa de Mary).',
          '• Respuesta corta natural: メアリーさんのです。(Es de Mary — omitiendo el objeto repetido).'
        ],
        examples: [
          { japanese: 'これはだれのさいふですか。', romaji: 'Kore wa dare no saifu desu ka.', spanish: '¿De quién es esta billetera?', audioText: 'これはだれのさいふですか' },
          { japanese: 'やましたせんせいのほんです。', romaji: 'Yamashita-sensei no hon desu.', spanish: 'Es el libro del profesor Yamashita.', audioText: 'やましたせんせいのほんです' }
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
          { japanese: 'これも千円です。', romaji: 'Kore mo sen-en desu.', spanish: 'Esto también cuesta 1,000 yenes.', audioText: 'これもせんえんです' }
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
      },
      {
        id: 'u2-final-particles',
        title: 'Partículas Finales: ね (Acuerdo) y よ (Énfasis)',
        japaneseTitle: '文末助詞「ね」と「よ」',
        category: 'grammar',
        summary: 'Pequeñas partículas al final de la frase que cambian radicalmente la intención comunicativa y el tono social.',
        content: [
          '• **ね (ne):** Busca la confirmación o complicidad del oyente (equivale a "¿verdad?", "¿a que sí?", "¿no crees?"). Se usa cuando ambos comparten la misma experiencia.',
          '   • Ej: 「おいしいですね」 (¡Está delicioso, ¿verdad?!).',
          '• **よ (yo):** Indica que el hablante tiene una información que el oyente desconoce o enfatiza con seguridad.',
          '   • Ej: 「とんかつは千円ですよ」 (¡Te aviso que el tonkatsu cuesta 1,000 yenes!).'
        ],
        examples: [
          { japanese: 'このかばんはたかいですね。', romaji: 'Kono kaban wa takai desu ne.', spanish: 'Esta bolsa es cara, ¿verdad?', audioText: 'このかばんはたかいですね' },
          { japanese: 'ぎんこうはあそこですよ。', romaji: 'Ginkou wa asoko desu yo.', spanish: '¡El banco está allá, te informo!', audioText: 'ぎんこうはあそこですよ' }
        ]
      },
      {
        id: 'u2-shopping-culture',
        title: 'Cultura: Compras y Modales en Japón',
        japaneseTitle: '日本の買い物マナー',
        category: 'culture',
        summary: 'Costumbres imprescindibles para hacer compras y comer en restaurantes japoneses.',
        content: [
          '• **いらっしゃいませ (Irasshaimase):** Significa "Bienvenido a la tienda". No es necesario responder nada; una ligera inclinación de cabeza es suficiente.',
          '• **La bandeja para el dinero (カルトン / karuton):** En Japón nunca se entrega el dinero o la tarjeta en la mano del cajero; se coloca sobre la bandeja pequeña del mostrador.',
          '• **Sin propinas (No tipping):** En Japón no existe la cultura de la propina. Dejar dinero extra en la mesa se considera confuso e incluso de mala educación; te perseguirán para devolvértelo pensando que lo olvidaste.'
        ],
        tip: 'Al pedir comida en un restaurante, di el nombre del platillo seguido de 「をください」(o kudasai) o simplemente 「をおねがいします」(o onegaishimasu).'
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
      },
      {
        id: 'u3-time-frequency',
        title: 'Adverbios de Frecuencia y Tiempo Relativo',
        japaneseTitle: '頻度の副詞（まいにち・よく・あまり）',
        category: 'vocabulary',
        summary: 'Cómo graduar tus hábitos diarios desde 100% hasta 0%, y los adverbios que exigen negación obligatoria.',
        content: [
          '• **まいにち (Mainichi):** Todos los días (100% de frecuencia).',
          '• **よく (Yoku):** A menudo / Frecuentemente (80%). Ej: 「よく映画を見ます」 (A menudo veo películas).',
          '• **ときどき (Tokidoki):** A veces (50%). Ej: 「ときどきマクドナルドに行きます」 (A veces voy a McDonald\'s).',
          '• **あまり + Negativo (Amari ... masen):** Casi no / Raras veces (15%). ¡NUNCA con verbo afirmativo!',
          '• **ぜんぜん + Negativo (Zenzen ... masen):** Nunca / Para nada (0%). ¡NUNCA con verbo afirmativo!'
        ],
        table: {
          title: 'Escala de Frecuencia de Genki Lección 3',
          headers: ['Adverbio', 'Frecuencia', 'Polaridad del Verbo', 'Ejemplo'],
          rows: [
            ['まいにち', '100% (Todos los días)', 'Afirmativo', 'まいにち勉強します'],
            ['よく', '80% (A menudo)', 'Afirmativo', 'よく本を読みます'],
            ['ときどき', '50% (A veces)', 'Afirmativo', 'ときどきテニスをします'],
            ['あまり', '15% (Casi no)', 'Negativo OBLIGATORIO', 'あまり食べません'],
            ['ぜんぜん', '0% (Nunca / Para nada)', 'Negativo OBLIGATORIO', 'ぜんぜん飲みません']
          ]
        },
        examples: [
          { japanese: 'わたしはあまりおさけをのみません。', romaji: 'Watashi wa amari osake o nomimasen.', spanish: 'Casi no bebo alcohol.', audioText: 'わたしはあまりおさけをのみません' },
          { japanese: 'ぜんぜんテレビをみません。', romaji: 'Zenzen terebi o mimasen.', spanish: 'No veo televisión en absoluto.', audioText: 'ぜんぜんテレビをみません' }
        ],
        tip: 'Error típico: decir "Zenzen nomimasu" es un error grave. Si dices 「ぜんぜん」 o 「あまり」, tu verbo DEBE terminar en 〜ません.'
      },
      {
        id: 'u3-invitations',
        title: 'Invitaciones Educadas: 〜ませんか',
        japaneseTitle: '提案と勧誘（〜ませんか）',
        category: 'grammar',
        formula: '[Verbo raíz] + ませんか？ (¿Por qué no...?)',
        summary: 'En japonés no se invita con órdenes ni preguntas directas secas, sino con una suave sugerencia negativa.',
        content: [
          'Al invitar a alguien en Genki, se usa la forma negativa interrogativa **〜ませんか** para darle al oyente espacio de rechazar cómodamente sin presión social.',
          '• Invitación: 「いっしょに昼ごはんを食べ**ませんか**」 (¿Por qué no comemos el almuerzo juntos?).',
          '• **Aceptar entusiasmado:** 「いいですね。食べましょう！」 (¡Me parece excelente! ¡Comamos!).',
          '• **Rechazar educadamente:** En Japón es de muy mala educación decir un "No" seco. Se dice: **「すみません、ちょっと…」** (Disculpa, es que... [dejando la frase inconclusa]).'
        ],
        examples: [
          { japanese: 'こんばん、えいがをみませんか。', romaji: 'Konban, eiga o mimasen ka.', spanish: '¿Por qué no vemos una película esta noche?', audioText: 'こんばんえいがをみませんか' },
          { japanese: 'ええ、いいですね。', romaji: 'Ee, ii desu ne.', spanish: 'Sí, ¡me parece excelente!', audioText: 'ええいいですね' }
        ]
      },
      {
        id: 'u3-days-of-week',
        title: 'Los Días de la Semana y los Elementos',
        japaneseTitle: '曜日（ようび：月火水木金土日）',
        category: 'vocabulary',
        summary: 'Los 7 días de la semana en japonés están basados en los astros y los elementos naturales.',
        content: [
          'Todos los días de la semana terminan con el sufijo **〜ようび (youbi)**:',
          '• **月曜日 (げつようび / getsuyoubi):** Lunes — Luna (月)',
          '• **火曜日 (かようび / kayoubi):** Martes — Fuego (火)',
          '• **水曜日 (すいようび / suiyoubi):** Miércoles — Agua (水)',
          '• **木曜日 (もくようび / mokuyoubi):** Jueves — Madera / Árbol (木)',
          '• **金曜日 (きんようび / kinyoubi):** Viernes — Oro / Metal (金)',
          '• **土曜日 (どようび / doyoubi):** Sábado — Tierra / Suelo (土)',
          '• **日曜日 (にちようび / nichiyoubi):** Domingo — Sol / Día (日)'
        ],
        examples: [
          { japanese: 'どようびに京都へ行きます。', romaji: 'Doyoubi ni Kyouto e ikimasu.', spanish: 'El sábado iré a Kioto.', audioText: 'どようびにきょうとへいきます' },
          { japanese: 'にちようびはやすみです。', romaji: 'Nichiyoubi wa yasumi desu.', spanish: 'El domingo es día libre / descanso.', audioText: 'にちようびはやすみです' }
        ],
        tip: 'Los días específicos de la semana pueden llevar la partícula 「に」 opcionalmente (どようびに), pero nunca los días relativos como あした (mañana).'
      }
    ]
  }
,

  {
    "unitId": 4,
    "title": "Genki Lección 4: La Primera Cita",
    "genkiChapter": "Genki I - Lesson 4",
    "subtitle": "Pasado 〜ました, Existencia (あります/います) y Posición",
    "description": "Aprende a ubicar objetos y personas en el espacio, conjugar verbos en pasado y conectar frases con と, から y まで.",
    "themeColor": "#ff4b4b",
    "sections": [
      {
        "id": "u4-arimasu-imasu",
        "title": "Verbos de Existencia: あります vs います",
        "japaneseTitle": "存在動詞：あります（無生物）と います（有生物）",
        "category": "grammar",
        "formula": "[Lugar] に [Sujeto] が あります/います",
        "summary": "En japonés \"haber\" o \"estar\" se divide estrictamente según si el sujeto es inanimado o un ser vivo.",
        "content": [
          "• **あります (arimasu):** Se usa EXCLUSIVAMENTE para objetos inanimados, cosas inertes y plantas.",
          "   • 本があります (Hay un libro / Está el libro).",
          "   • テレビがあります (Hay una televisión).",
          "• **います (imasu):** Se usa para seres vivos que se mueven por voluntad propia (personas y animales).",
          "   • 学生がいます (Hay estudiantes / Están los estudiantes).",
          "   • 猫がいます (Hay un gato).",
          "• **Partículas obligatorias:** El lugar estático donde existe la cosa o persona se marca con **に**, y la cosa o persona que existe se marca con **が**."
        ],
        "examples": [
          {
            "japanese": "教室に山下先生がいます。",
            "romaji": "Kyoushitsu ni Yamashita-sensei ga imasu.",
            "spanish": "El profesor Yamashita está en el aula.",
            "audioText": "きょうしつにやましたせんせいがいます"
          },
          {
            "japanese": "机の上にペンがあります。",
            "romaji": "Tsukue no ue ni pen ga arimasu.",
            "spanish": "Hay un bolígrafo sobre el escritorio.",
            "audioText": "つくえのうえにペンがあります"
          }
        ],
        "tip": "¡Cuidado con las plantas! Aunque biológicamente están vivas, como no se mueven por sí mismas, en japonés usan あります (花があります = Hay flores)."
      },
      {
        "id": "u4-position-words",
        "title": "Palabras de Posición Relativa",
        "japaneseTitle": "位置を表す言葉（上・下・前・後ろ・中・隣・間）",
        "category": "vocabulary",
        "formula": "[Objeto Referencia] の [Posición] に [Cosa] が あります/います",
        "summary": "Cómo indicar la posición exacta de un objeto o persona con respecto a otro.",
        "content": [
          "• **上 (うえ / ue):** Arriba / Sobre / Encima de (机の上 = sobre el escritorio).",
          "• **下 (した / shita):** Abajo / Debajo de (机の下 = debajo del escritorio).",
          "• **前 (まえ / mae):** Delante de / Frente a (駅の前 = frente a la estación).",
          "• **後ろ (うしろ / ushiro):** Detrás de / A espaldas de (銀行の後ろ = detrás del banco).",
          "• **中 (なか / naka):** Dentro de / En el interior de (かばんの中 = dentro del bolso).",
          "• **隣 (となり / tonari):** Al lado de (en la misma categoría o fila; ej. 本屋の隣 = junto a la librería).",
          "• **近く (ちかく / chikaku):** Cerca de (公園の近く = cerca del parque).",
          "• **間 (あいだ / aida):** Entre A y B (A と B の間)."
        ],
        "examples": [
          {
            "japanese": "猫は机の下にいます。",
            "romaji": "Neko wa tsukue no shita ni imasu.",
            "spanish": "El gato está debajo del escritorio.",
            "audioText": "ねこはつくえのしたにいます"
          },
          {
            "japanese": "銀行は図書館と郵便局の間にあります。",
            "romaji": "Ginkou wa toshokan to yuubinkyoku no aida ni arimasu.",
            "spanish": "El banco está entre la biblioteca y la oficina de correos.",
            "audioText": "ぎんこうはとしょかんとゆうびんきょくのあいだにあります"
          }
        ]
      },
      {
        "id": "u4-past-tense",
        "title": "Tiempo Pasado de Verbos y de です",
        "japaneseTitle": "過去形（〜ました・〜ませんでした・〜でした）",
        "category": "grammar",
        "summary": "Cómo relatar lo que hiciste ayer, el fin de semana o en tus vacaciones.",
        "content": [
          "• **Pasado Educado de Verbos:**",
          "   • Afirmativo: 〜ます ➔ **〜ました** (たべました = comí / いきました = fui).",
          "   • Negativo: 〜ません ➔ **〜ませんでした** (たべませんでした = no comí / いきませんでした = no fui).",
          "• **Pasado de です (para sustantivos):**",
          "   • Afirmativo: です ➔ **でした** (日曜日でした = fue domingo).",
          "   • Negativo: じゃありません ➔ **じゃありませんでした** (学生じゃありませんでした = no era estudiante)."
        ],
        "examples": [
          {
            "japanese": "きのう、日本語を勉強しました。",
            "romaji": "Kinou, nihongo o benkyou shimashita.",
            "spanish": "Ayer estudié japonés.",
            "audioText": "きのうにほんごをべんきょうしました"
          },
          {
            "japanese": "きのうはいい天気でした。",
            "romaji": "Kinou wa ii tenki deshita.",
            "spanish": "Ayer hizo buen clima.",
            "audioText": "きのうはいいてんきでした"
          }
        ]
      },
      {
        "id": "u4-particles-to-kara-made",
        "title": "Partículas と, から y まで",
        "japaneseTitle": "助詞「と」「から」「まで」",
        "category": "grammar",
        "summary": "Conectar sustantivos, indicar compañía y marcar rangos de tiempo y distancia.",
        "content": [
          "• **Partícula と (to):**",
          "   1. Conector \"y\" para listas exhaustivas: パンとミルク (pan y leche).",
          "   2. Compañía \"con\": メアリーさんと映画を見ました (Fui al cine con Mary).",
          "• **Partículas から (kara = desde) y まで (made = hasta):**",
          "   • Horarios: 9時から5時まで (De 9:00 a 5:00).",
          "   • Lugares: 東京から京都まで (De Tokio a Kioto)."
        ],
        "examples": [
          {
            "japanese": "きのう、たけしさんと図書館で勉強しました。",
            "romaji": "Kinou, Takeshi-san to toshokan de benkyou shimashita.",
            "spanish": "Ayer estudié en la biblioteca con Takeshi.",
            "audioText": "きのうたけしさんととしょかんでべんきょうしました"
          },
          {
            "japanese": "日本語の授業は九時から十時半までです。",
            "romaji": "Nihongo no jugyou wa kuji kara juujihan made desu.",
            "spanish": "La clase de japonés es de 9:00 a 10:30.",
            "audioText": "にほんごのじゅぎょうはくじからじゅうじはんまでです"
          }
        ]
      }
    ]
  },
  {
    "unitId": 5,
    "title": "Genki Lección 5: Viaje a Okinawa",
    "genkiChapter": "Genki I - Lesson 5",
    "subtitle": "Adjetivos い y な, Gustos (好き/嫌い) y Sugerencias",
    "description": "Aprende a describir el mundo en presente y pasado con los dos tipos de adjetivos, expresar gustos con 好き y hacer propuestas activas.",
    "themeColor": "#00cd9c",
    "sections": [
      {
        "id": "u5-two-adjectives",
        "title": "Los 2 Tipos de Adjetivos en Japonés",
        "japaneseTitle": "い形容詞（いけいようし）と な形容詞（なけいようし）",
        "category": "grammar",
        "summary": "A diferencia del español, en japonés los adjetivos funcionan como mini-verbos y se conjugan en presente y pasado.",
        "content": [
          "1. **い-adjetivos (i-adjectives):** Terminan intrínsecamente en la vocal 「い」 (ej. たかい, あたらしい, おもしろい, さむい). Se conjugan directamente cambiando su última vocal.",
          "2. **な-adjetivos (na-adjectives):** No terminan en い o terminan en kanji con lectura -i especial (ej. 静か [しずか], 元気 [げんき], 暇 [ひま]). Se conjugan exactamente igual que los sustantivos usando です.",
          "• **¡Las 2 excepciones clásicas de examen!**",
          "   • **きれい (kirei = hermoso/limpio):** Aunque termina en sonido -i, ¡es un な-adjetivo!",
          "   • **ゆうめい (yuumei = famoso):** ¡Es un な-adjetivo!"
        ],
        "tip": "Los な-adjetivos se llaman así porque cuando se colocan inmediatamente antes de un sustantivo, es OBLIGATORIO añadir 「な」: きれいな海 (mar hermoso), 静かな町 (pueblo tranquilo)."
      },
      {
        "id": "u5-adj-conjugation-tables",
        "title": "Tabla Maestra de Conjugación de Adjetivos",
        "japaneseTitle": "形容詞の活用表（現在・過去・肯定・否定）",
        "category": "grammar",
        "summary": "Cómo conjugar ambos tipos de adjetivos en las 4 formas fundamentales.",
        "table": {
          "title": "Conjugaciones de い-adjetivos y な-adjetivos en Genki",
          "headers": [
            "Forma",
            "い-adjetivo (さむい - frío)",
            "な-adjetivo (しずか - tranquilo)",
            "Excepción: いい (bueno)"
          ],
          "rows": [
            [
              "Presente Afirmativo",
              "さむいです (hace frío)",
              "しずかです (es tranquilo)",
              "いいです (es bueno)"
            ],
            [
              "Presente Negativo",
              "さむくないです (no hace frío)",
              "しずかじゃありません (no es tranquilo)",
              "よくないです (no es bueno)"
            ],
            [
              "Pasado Afirmativo",
              "さむかったです (hizo frío)",
              "しずかでした (era tranquilo)",
              "よかったです (fue bueno)"
            ],
            [
              "Pasado Negativo",
              "さむくなかったです (no hizo frío)",
              "しずかじゃありませんでした",
              "よくなかったです (no fue bueno)"
            ]
          ]
        },
        "content": [
          "• Para い-adjetivos: la 「い」 final se sustituye por **くないです** (negativo), **かったです** (pasado) o **くなかったです** (pasado negativo).",
          "• Para な-adjetivos: la palabra queda intacta y solo se cambia です por **じゃありません**, **でした** o **じゃありませんでした**.",
          "• El adjetivo **いい (bueno)** SIEMPRE toma su raíz arcaica **よい (yoi)** para todas las conjugaciones negativas y pasadas."
        ],
        "examples": [
          {
            "japanese": "沖縄の海はとてもきれいでした。",
            "romaji": "Okinawa no umi wa totemo kirei deshita.",
            "spanish": "El mar de Okinawa era muy hermoso.",
            "audioText": "おきなわのうみはとてもきれいでした"
          },
          {
            "japanese": "きのうのテストは難しくなかったです。",
            "romaji": "Kinou no tesuto wa muzukashikunakatta desu.",
            "spanish": "El examen de ayer no estuvo difícil.",
            "audioText": "きのうのテストはむずかしくなかったです"
          }
        ]
      },
      {
        "id": "u5-likes-suki",
        "title": "Gustos y Preferencias: 好き y 嫌い con Partícula が",
        "japaneseTitle": "好嫌表現：すき・きらい（助詞「が」）",
        "category": "grammar",
        "formula": "[Persona] は [Cosa] が 好き/嫌い です",
        "summary": "En japonés \"gustar\" no es un verbo activo, sino un adjetivo que describe una atracción, por lo que lleva が y nunca を.",
        "content": [
          "• **好き (すき / suki):** Gustar / Agradar.",
          "• **大好き (だいすき / daisuki):** Encantar / Gustar muchísimo.",
          "• **嫌い (きらい / kirai):** Disgustar / No agradar.",
          "• **大嫌い (だいきらい / daikirai):** Odiar / Detestar.",
          "• **Regla estricta:** La cosa que te gusta se marca OBLIGATORIAMENTE con **「が」**.",
          "   • Correcto: 私は日本料理**が**好きです。",
          "   • ¡ERROR!: 私は日本料理**を**好きです。(Nunca uses を con 好き)."
        ],
        "examples": [
          {
            "japanese": "メアリーさんは犬が大好きです。",
            "romaji": "Mary-san wa inu ga daisuki desu.",
            "spanish": "A Mary le encantan los perros.",
            "audioText": "メアリーさんは犬がだいすきです"
          },
          {
            "japanese": "野菜があまり好きじゃないです。",
            "romaji": "Yasai ga amari suki ja nai desu.",
            "spanish": "Casi no me gustan las verduras.",
            "audioText": "やさいがあまりすきじゃないです"
          }
        ]
      },
      {
        "id": "u5-mashou",
        "title": "Sugerencias Activas: 〜ましょう y 〜ましょうか",
        "japaneseTitle": "提案表現（〜ましょう・〜ましょうか）",
        "category": "grammar",
        "summary": "Cómo proponer planes conjuntos entusiastas o brindar ayuda proactiva a otra persona.",
        "content": [
          "• **〜ましょう (mashou = \"¡Hagámoslo!\"):** Propuesta activa de hacer algo juntos.",
          "   • 行きましょう！ (¡Vamos!).",
          "   • 食べましょう！ (¡Comamos!).",
          "• **〜ましょうか (mashou ka = \"¿Lo hacemos? / ¿Te ayudo?\"):** Ofrecimiento amable de ayuda.",
          "   • 荷物を持ちましょうか (¿Llevo tu maleta / equipaje?).",
          "   • 窓を開けましょうか (¿Abro la ventana?)."
        ],
        "examples": [
          {
            "japanese": "あの喫茶店でちょっと休みましょう。",
            "romaji": "Ano kissaten de chotto yasumimashou.",
            "spanish": "Descansemos un momento en esa cafetería.",
            "audioText": "あのきっさてんでちょっとやすみましょう"
          }
        ]
      }
    ]
  },
  {
    "unitId": 6,
    "title": "Genki Lección 6: La Forma Te (〜て形)",
    "genkiChapter": "Genki I - Lesson 6",
    "subtitle": "La Famosa Forma Te, Favores, Permisos y Secuencias",
    "description": "El pilar fundamental de la gramática japonesa: cómo conjugar la forma Te para pedir favores (〜てください), pedir permisos (〜てもいいですか) y conectar acciones.",
    "themeColor": "#1cb0f6",
    "sections": [
      {
        "id": "u6-te-rules",
        "title": "Reglas de Conjugación de la Forma Te",
        "japaneseTitle": "て形の作り方 と「て形の歌」",
        "category": "grammar",
        "summary": "La forma Te no tiene tiempo verbal propio, pero es el puente para más de 20 estructuras avanzadas del japonés.",
        "content": [
          "1. **Ru-verbs (Grupo 2):** Quitas る y pones て (食べる ➔ 食べて, 見る ➔ 見て, 起きる ➔ 起きて).",
          "2. **U-verbs (Grupo 1) - La Canción de la Forma Te:**",
          "   • Verbos en **う, つ, る** ➔ **って** (会う➔会って, 待つ➔待って, 取る➔取って).",
          "   • Verbos en **む, ぶ, ぬ** ➔ **んで** (飲む➔飲んで, 遊ぶ➔遊んで, 死ぬ➔死んで).",
          "   • Verbos en **く** ➔ **いて** (書く➔書いて). *¡Excepción!* **行く ➔ 行って** (itte).",
          "   • Verbos en **ぐ** ➔ **いで** (泳ぐ➔泳いで).",
          "   • Verbos en **す** ➔ **して** (話す➔話して).",
          "3. **Verbos Irregulares:**",
          "   • する ➔ **して**",
          "   • くる ➔ **きて**"
        ],
        "table": {
          "title": "Resumen Mnemotécnico de la Forma Te",
          "headers": [
            "Terminación de Diccionario",
            "Cambio a Forma Te",
            "Ejemplo de Verbo"
          ],
          "rows": [
            [
              "う、つ、る",
              "〜って",
              "まつ (esperar) ➔ まって"
            ],
            [
              "む、ぶ、ぬ",
              "〜んで",
              "のむ (beber) ➔ のんで"
            ],
            [
              "く",
              "〜いて (excepto 行く➔行って)",
              "かく (escribir) ➔ かいて"
            ],
            [
              "ぐ",
              "〜いで",
              "およぐ (nadar) ➔ およいで"
            ],
            [
              "す",
              "〜して",
              "はなす (hablar) ➔ はなして"
            ],
            [
              "る (Ru-verb)",
              "〜て",
              "たべる (comer) ➔ たべて"
            ],
            [
              "する / くる (Irregulares)",
              "して / きて",
              "べんきょうする ➔ べんきょうして"
            ]
          ]
        },
        "tip": "Aprende la melodía de la canción infantil \"Santa Claus is Coming to Town\" con las terminaciones: u, tsu, ru -> tte / mu, bu, nu -> nde / ku -> ite, gu -> ide / su -> shite!"
      },
      {
        "id": "u6-kudasai-mo-ii",
        "title": "Favores (〜てください) y Permisos (〜てもいいですか)",
        "japaneseTitle": "依頼（〜てください）と 許可（〜てもいいですか）",
        "category": "grammar",
        "formula": "Forma Te + ください (Por favor haz...) / Forma Te + もいいですか (¿Puedo...?)",
        "summary": "Cómo pedir favores de manera cortés y solicitar permiso para realizar una acción.",
        "content": [
          "• **〜てください (te kudasai):** Petición amable imperativa educada.",
          "   • 教科書を読んでください (Por favor lea el libro de texto).",
          "   • ちょっと待ってください (Por favor espere un momento).",
          "• **〜てもいいですか (te mo ii desu ka):** \"¿Está bien si hago...? / ¿Puedo...?\".",
          "   • 写真を撮ってもいいですか (¿Puedo tomar una foto?).",
          "   • トイレに行ってもいいですか (¿Puedo ir al baño?).",
          "• **〜てはいけません (te wa ikemasen):** Prohibición estricta (\"No debes / Está prohibido\").",
          "   • ここでタバコを吸ってはいけません (No debes fumar aquí)."
        ],
        "examples": [
          {
            "japanese": "ゆっくり話してください。",
            "romaji": "Yukkuri hanashite kudasai.",
            "spanish": "Por favor hable despacio.",
            "audioText": "ゆっくりはなしてください"
          },
          {
            "japanese": "ここで写真を撮ってもいいですか。",
            "romaji": "Koko de shashin o totte mo ii desu ka.",
            "spanish": "¿Puedo tomar una fotografía aquí?",
            "audioText": "ここでしゃしんをとってもいいですか"
          }
        ]
      },
      {
        "id": "u6-sequences-kara",
        "title": "Conectar Acciones en Secuencia y Causa con 〜から",
        "japaneseTitle": "動作の連続（〜て、〜て）と 理由の「から」",
        "category": "grammar",
        "summary": "Cómo enlazar múltiples actividades consecutivas y justificar motivos.",
        "content": [
          "• **Secuencia de Acciones:** Conecta verbos en forma Te en orden cronológico. El tiempo verbal (presente o pasado) se indica ÚNICAMENTE en el último verbo de la oración.",
          "   • きのう 7時に**起きて**、朝ごはんを**食べて**、大学へ**行きました**。",
          "• **Conector Causal 〜から (kara = porque / ya que):**",
          "   • Estructura: **[Causa / Razón] から、[Resultado / Consecuencia]**.",
          "   • 明日テストがありますから、今晩勉強します (Porque mañana tengo examen, estudiaré esta noche)."
        ],
        "examples": [
          {
            "japanese": "図書館へ行って本を借りました。",
            "romaji": "Toshokan e itte hon o karimashita.",
            "spanish": "Fui a la biblioteca y pedí prestado un libro.",
            "audioText": "としょかんへいってほんをかりました"
          },
          {
            "japanese": "つかれましたから、早く寝ます。",
            "romaji": "Tsukaremashita kara, hayaku nemasu.",
            "spanish": "Como me cansé, me iré a dormir temprano.",
            "audioText": "つかれましたからはやくねます"
          }
        ]
      }
    ]
  },
  {
    "unitId": 7,
    "title": "Genki Lección 7: Foto Familiar",
    "genkiChapter": "Genki I - Lesson 7",
    "subtitle": "Acciones en Curso (〜ています) y Descripciones",
    "description": "Aprende a describir la familia, estados continuos (casado, vivir en), rasgos físicos con が y conectar adjetivos con la forma Te.",
    "themeColor": "#ff9600",
    "sections": [
      {
        "id": "u7-family",
        "title": "Vocabulario: Familia Uchi vs Familia Soto",
        "japaneseTitle": "家族の呼び方（うち と そと）",
        "category": "vocabulary",
        "summary": "El sistema social japonés usa términos humildes para la familia propia y términos honoríficos para la familia ajena.",
        "table": {
          "title": "Términos de Familia Propios (Humildes) vs Ajenos (Respetuosos)",
          "headers": [
            "Pariente",
            "Mi Familia (Uchi / Humilde)",
            "La Familia de Otros (Soto / Respetuoso)"
          ],
          "rows": [
            [
              "Padre",
              "ちち (父)",
              "おとうさん (お父さん)"
            ],
            [
              "Madre",
              "はは (母)",
              "おかあさん (お母さん)"
            ],
            [
              "Hermano mayor",
              "あに (兄)",
              "おにいさん (お兄さん)"
            ],
            [
              "Hermana mayor",
              "あね (姉)",
              "おねえさん (お姉さん)"
            ],
            [
              "Hermano menor",
              "おとうと (弟)",
              "おとうとさん"
            ],
            [
              "Hermana menor",
              "いもうと (妹)",
              "いもうとさん"
            ],
            [
              "Esposo",
              "おっと (夫) / 主人",
              "ごしゅじん (ご主人)"
            ],
            [
              "Esposa",
              "つま (妻) / 家内",
              "おくさん (奥さん)"
            ]
          ]
        },
        "content": [
          "• Al hablar con un maestro, jefe o cliente sobre tu propia madre, dices 「母」(haha).",
          "• Al dirigirte a la madre de tu amigo o a tu propia mamá en casa, dices 「お母さん」(okaasan)."
        ],
        "tip": "¡Regla social de oro! Nunca uses おとうさん u おかあさん para hablar de tu propia familia ante un cliente o desconocido en Japón."
      },
      {
        "id": "u7-te-iru",
        "title": "Acciones Continuas y Estados: 〜ています",
        "japaneseTitle": "動作の進行 と 状態の継続（〜ています）",
        "category": "grammar",
        "formula": "Forma Te + います",
        "summary": "Tiene dos significados esenciales: acción que ocurre en el momento (inglés -ing) o estado continuo resultante de una acción previa.",
        "content": [
          "1. **Acción en curso:** 本を読んでいます (Estoy leyendo un libro).",
          "2. **Estados continuos permanentes (¡Muy importante en Genki!):**",
          "   • 結婚しています (けっこんしています = Estar casado).",
          "   • 住んでいます (すんでいます = Residir / Vivir en...).",
          "   • 知っています (しっています = Saber / Conocer).",
          "   • 持っています (もっています = Tener / Poseer).",
          "• **¡La trampa de oro de Genki!** Si te preguntan si conoces algo y NO lo sabes, se responde obligatoriamente: **「知りません」(shirimasen)**. ¡NUNCA digas \"shitte imasen\"!"
        ],
        "examples": [
          {
            "japanese": "姉は結婚していて、東京に住んでいます。",
            "romaji": "Ane wa kekkon shite ite, Tokyo ni sunde imasu.",
            "spanish": "Mi hermana mayor está casada y vive en Tokio.",
            "audioText": "あねはけっこんしていてとうきょうにすんでいます"
          },
          {
            "japanese": "山下先生を知っていますか。ー いいえ、知りません。",
            "romaji": "Yamashita-sensei o shitte imasu ka. - Iie, shirimasen.",
            "spanish": "¿Conoce al profesor Yamashita? - No, no lo conozco.",
            "audioText": "やましたせんせいをしっていますかいいえしりません"
          }
        ]
      },
      {
        "id": "u7-body-descriptions",
        "title": "Descripciones Físicas y Atributos Personales",
        "japaneseTitle": "身体的特徴：[人] は [部分] が [形容詞]",
        "category": "grammar",
        "formula": "[Persona] は [Parte del cuerpo] が [Adjetivo] です",
        "summary": "En japonés no se dice \"Mary tiene ojos grandes\", sino \"En cuanto a Mary, sus ojos son grandes\".",
        "content": [
          "• **背が高い (せがたかい):** Alto de estatura.",
          "• **背が低い (せがひくい):** Bajo de estatura.",
          "• **目が大きい (めがおおきい):** De ojos grandes.",
          "• **髪が長い (かみがながい):** De cabello largo.",
          "• **Conectar adjetivos con Forma Te:**",
          "   • い-adjetivo: い ➔ **くて** (安くておいしい = barato y rico).",
          "   • な-adjetivo / sustantivo: añadir **で** (静かで綺麗 = tranquilo y hermoso)."
        ],
        "examples": [
          {
            "japanese": "メアリーさんは背が高くて、髪が短いです。",
            "romaji": "Mary-san wa se ga takakute, kami ga mijikai desu.",
            "spanish": "Mary es alta de estatura y tiene el cabello corto.",
            "audioText": "メアリーさんはせがたかくてかみがみじかいです"
          }
        ]
      }
    ]
  },
  {
    "unitId": 8,
    "title": "Genki Lección 8: Estilo Informal y Opiniones",
    "genkiChapter": "Genki I - Lesson 8",
    "subtitle": "La Forma Corta (普通体), Citas y 〜と思います",
    "description": "El salto a la fluidez informal: cómo hablar casualmente con amigos, expresar opiniones (\"Creo que...\") y citar discursos ajenos.",
    "themeColor": "#ce82ff",
    "sections": [
      {
        "id": "u8-short-forms",
        "title": "La Forma Corta Presente: Afirmativo y Negativo (ない形)",
        "japaneseTitle": "ショートフォーム（辞書形 と ない形）",
        "category": "grammar",
        "summary": "El estilo informal se utiliza entre amigos cercanos, familia y para construir cláusulas subordinadas.",
        "content": [
          "• **Afirmativo presente:** Es idéntico a la **forma de diccionario** (食べる, 飲む, 行く, する, くる).",
          "• **Negativo presente (Forma ない):**",
          "   • **Ru-verbs:** る ➔ **ない** (たべる ➔ たべない).",
          "   • **U-verbs:** sonido -u ➔ columna **-a + ない** (のむ ➔ のまない, かく ➔ かかない, はなす ➔ はなさない). *¡Ojo con los verbos en う!* Cambian a **わない** (かう ➔ かわない).",
          "   • **Irregulares:** する ➔ **しない**, くる ➔ **こない**.",
          "   • **El verbo あります en negativo corto es simplemente: ない**."
        ],
        "examples": [
          {
            "japanese": "あした、いっしょにどこかに行く？",
            "romaji": "Ashita, isshoni dokoka ni iku?",
            "spanish": "¿Vas a ir a algún lugar mañana conmigo? (casual)",
            "audioText": "あしたいっしょにどこかにいく"
          },
          {
            "japanese": "きょうはコーヒーを飲まない。",
            "romaji": "Kyou wa koohii o nomanai.",
            "spanish": "Hoy no tomaré café (informal).",
            "audioText": "きょうはコーヒーをのまない"
          }
        ]
      },
      {
        "id": "u8-opinions-quotes",
        "title": "Opinar con 〜と思います y Citar con 〜と言っていました",
        "japaneseTitle": "意見（〜とおもいます）と 引用（〜といっていました）",
        "category": "grammar",
        "formula": "[Oración en forma corta] + と思います / と言っていました",
        "summary": "Cómo expresar tus pensamientos subjetivos y citar lo que otra persona ha dicho.",
        "content": [
          "• **〜と思います (to omoimasu = Pienso que...):** La cláusula antes de と OBLIGATORIAMENTE debe estar en forma corta.",
          "   • 日本語は面白いと思います (Pienso que el japonés es interesante).",
          "   • 明日雨が降ると思います (Creo que mañana lloverá).",
          "• **〜と言っていました (to itte imashita = Dijo que...):** Cita indirecta.",
          "   • ロバートさんは肉を食べないと言っていました (Robert dijo que no come carne)."
        ],
        "examples": [
          {
            "japanese": "たけしさんは親切だと思います。",
            "romaji": "Takeshi-san wa shinsetsu da to omoimasu.",
            "spanish": "Pienso que Takeshi es muy amable.",
            "audioText": "たけしさんはしんせつだとおもいます"
          }
        ],
        "tip": "¡Cuidado con los な-adjetivos y sustantivos antes de と思います! Deben llevar 「だ」 en afirmativo presente: 親切だと思います (shinsetsu DA to omoimasu)."
      },
      {
        "id": "u8-naide-kudasai",
        "title": "Peticiones Negativas: 〜ないでください",
        "japaneseTitle": "禁止・否定の依頼（〜ないでください：Por favor no hagas...）",
        "category": "grammar",
        "formula": "Forma ない + でください",
        "summary": "Cómo pedir de forma muy educada que alguien se abstenga de hacer algo.",
        "content": [
          "• Se toma la forma corta negativa (ない形) y se le añade **でください**.",
          "   • 写真を撮らないでください (Por favor no tome fotografías).",
          "   • ここに入らないでください (Por favor no entre aquí).",
          "   • 忘れないでください (Por favor no lo olvide)."
        ],
        "examples": [
          {
            "japanese": "ここで電話を使わないでください。",
            "romaji": "Koko de denwa o tsukawanaide kudasai.",
            "spanish": "Por favor no use el teléfono aquí.",
            "audioText": "ここででんわをつかわないでください"
          }
        ]
      }
    ]
  },
  {
    "unitId": 9,
    "title": "Genki Lección 9: Pasado Informal y Relativas",
    "genkiChapter": "Genki I - Lesson 9",
    "subtitle": "Formas Cortas Pasadas (〜た/〜なかった) y Cláusulas Relativas",
    "description": "Aprende a modificar sustantivos con oraciones complejas (\"el libro que compré ayer\") y la forma Ta de pasado informal.",
    "themeColor": "#2b70c9",
    "sections": [
      {
        "id": "u9-past-short-forms",
        "title": "Pasado Informal: La Forma 〜た y 〜なかった",
        "japaneseTitle": "過去のショートフォーム（た形 と なかった形）",
        "category": "grammar",
        "summary": "La forma Ta se conjuga exactamente igual que la forma Te, pero cambiando -te por -ta y -de por -da.",
        "content": [
          "• **Afirmativo pasado informal (Forma Ta):**",
          "   • 食べて ➔ **食べた** (comí / comió)",
          "   • 飲んで ➔ **飲んだ** (bebí / bebió)",
          "   • 書いて ➔ **書いた** (escribí)",
          "   • 行って ➔ **行った** (fui)",
          "• **Negativo pasado informal (Forma 〜なかった):**",
          "   • Se toma la forma ない y se sustituye い por **かった**.",
          "   • 食べない ➔ **食べなかった** (no comí)",
          "   • 行かない ➔ **行かなかった** (no fui)"
        ],
        "examples": [
          {
            "japanese": "きのう、なにをした？",
            "romaji": "Kinou, nani o shita?",
            "spanish": "¿Qué hiciste ayer? (casual)",
            "audioText": "きのうなにをした"
          }
        ]
      },
      {
        "id": "u9-relative-clauses",
        "title": "Oraciones Relativas (Modificar Sustantivos con Verbos)",
        "japaneseTitle": "連体修飾（動詞＋名詞：El libro que compré）",
        "category": "grammar",
        "formula": "[Oración en forma corta] + Sustantivo",
        "summary": "En japonés no existe la palabra \"que\" para cláusulas relativas. Basta con colocar la frase en forma corta antes del sustantivo.",
        "content": [
          "• En español decimos: \"El libro [que compré ayer]\".",
          "• En japonés se invierte el orden: **[きのう買った] 本** (Kinou katta hon).",
          "• Ejemplos cotidianos de Genki:",
          "   • 本を読んでいる人 (La persona que está leyendo un libro).",
          "   • きのう見た映画 (La película que vi ayer)."
        ],
        "examples": [
          {
            "japanese": "眼鏡をかけている人は山下先生です。",
            "romaji": "Megane o kakete iru hito wa Yamashita-sensei desu.",
            "spanish": "La persona que lleva lentes es el profesor Yamashita.",
            "audioText": "めがねをかけているひとはやましたせんせいです"
          }
        ]
      },
      {
        "id": "u9-mada-te-imasen",
        "title": "Acciones Incompletas: まだ〜ていません",
        "japaneseTitle": "まだ〜ていません（Todavía no he...）",
        "category": "grammar",
        "summary": "Indica que una acción no se ha completado todavía, pero se tiene la intención o expectativa de realizarla.",
        "content": [
          "• Si alguien te pregunta 「もう宿題をしましたか」(¿Ya hiciste la tarea?), se responde:",
          "   • **いいえ、まだしていません** (No, todavía no la he hecho).",
          "• ¡Cuidado! Decir 「しませんでした」 significaría \"No la hice (y ya no la haré)\"."
        ],
        "examples": [
          {
            "japanese": "まだ昼ごはんを食べていません。",
            "romaji": "Mada hirugohan o tabete imasen.",
            "spanish": "Todavía no he almorzado.",
            "audioText": "まだひるごはんをたべていません"
          }
        ]
      }
    ]
  },
  {
    "unitId": 10,
    "title": "Genki Lección 10: Comparaciones y Proyectos",
    "genkiChapter": "Genki I - Lesson 10",
    "subtitle": "Comparaciones (A のほうが B より), Superlativos e Intención",
    "description": "Aprende a comparar opciones, expresar superlativos con 一番, proyectar planes firmes con 〜つもり y cambios de estado con なる.",
    "themeColor": "#ff4b4b",
    "sections": [
      {
        "id": "u10-comparisons",
        "title": "Comparaciones entre 2 Elementos: A のほうが B より",
        "japaneseTitle": "比較表現（A のほうが B より）",
        "category": "grammar",
        "formula": "A のほうが B より [Adjetivo] です (A es más [Adjetivo] que B)",
        "summary": "La estructura obligatoria para comparar dos cosas o personas en japonés.",
        "content": [
          "• **A のほうが:** Marca la opción ganadora (\"el lado de A\").",
          "• **B より:** Marca la referencia (\"más que B\").",
          "• **Pregunta comparativa:** A と B と どちらのほうが [Adjetivo] ですか (¿Cuál es más... entre A y B?).",
          "• ¡Ojo! Entre 2 opciones siempre se pregunta con **どちら (dochira)**, nunca con どれ."
        ],
        "examples": [
          {
            "japanese": "新幹線のほうがバスより速いです。",
            "romaji": "Shinkansen no hou ga basu yori hayai desu.",
            "spanish": "El tren bala es más rápido que el autobús.",
            "audioText": "しんかんせんのほうがバスよりはやいです"
          },
          {
            "japanese": "日本とメキシコとどちらのほうが暑いですか。",
            "romaji": "Nihon to Mekishiko to dochira no hou ga atsui desu ka.",
            "spanish": "Entre Japón y México, ¿cuál es más caluroso?",
            "audioText": "にほんとメキシコとどちらのほうがあついですか"
          }
        ]
      },
      {
        "id": "u10-superlatives",
        "title": "Superlativos: [Grupo] の中で 一番〜",
        "japaneseTitle": "最上級（〜の中で一番：El número uno / El más）",
        "category": "grammar",
        "formula": "[Grupo / Categoría] の中で [Elemento] が 一番 [Adjetivo] です",
        "summary": "Cómo expresar el grado superlativo absoluto entre 3 o más elementos.",
        "content": [
          "• **一番 (いちばん / ichiban):** Significa \"el número uno\" o \"el más\".",
          "• Estructura: 「果物の中で りんごが一番好きです」 (De todas las frutas, las manzanas son las que más me gustan)."
        ],
        "examples": [
          {
            "japanese": "季節の中で秋が一番好きです。",
            "romaji": "Kisetsu no naka de aki ga ichiban suki desu.",
            "spanish": "De todas las estaciones, el otoño es mi favorita.",
            "audioText": "きせつのなかであきがいちばんすきです"
          }
        ]
      },
      {
        "id": "u10-tsumori-naru",
        "title": "Intenciones (〜つもり) y Cambios de Estado (なる)",
        "japaneseTitle": "意図（〜つもり）と 変化（〜くなる・〜になる）",
        "category": "grammar",
        "summary": "Expresar lo que planeas hacer y cómo las cosas cambian o se transforman.",
        "content": [
          "• **Verbo en forma diccionario + つもりです:** Tengo la intención de... (日本へ行くつもりです = Tengo la intención de ir a Japón).",
          "• **Verbo en forma ない + つもりです:** No pienso... (勉強しないつもりです = No pienso estudiar).",
          "• **Cambio con なる (volverse / convertirse en):**",
          "   • い-adjetivo: quitar い y poner **くなる** (寒くなる = hacerse frío / enfriarse).",
          "   • な-adjetivo o sustantivo: añadir **になる** (医者になる = convertirse en médico)."
        ],
        "examples": [
          {
            "japanese": "冬休みに国へ帰るつもりです。",
            "romaji": "Fuyuyasumi ni kuni e kaeru tsumori desu.",
            "spanish": "En las vacaciones de invierno tengo la intención de regresar a mi país.",
            "audioText": "ふゆやすみにくにへかえるつもりです"
          },
          {
            "japanese": "日本語の先生になりたいです。",
            "romaji": "Nihongo no sensei ni naritai desu.",
            "spanish": "Quiero convertirme en profesor de japonés.",
            "audioText": "にほんごのせんせいになりたいです"
          }
        ]
      }
    ]
  },
  {
    "unitId": 11,
    "title": "Genki Lección 11: Deseos y Experiencias",
    "genkiChapter": "Genki I - Lesson 11",
    "subtitle": "Deseos (〜たい), Experiencias (〜ことがある) y 〜たり〜たり",
    "description": "Expresa tus deseos personales, habla de tus experiencias vividas y lista actividades con 〜たり〜たりする.",
    "themeColor": "#00cd9c",
    "sections": [
      {
        "id": "u11-desires-tai",
        "title": "Deseos Personales: 〜たい (Quiero hacer...)",
        "japaneseTitle": "願望表現（〜たいです）",
        "category": "grammar",
        "formula": "Raíz Masu (sin ます) + たいです",
        "summary": "Cómo expresar lo que tú mismo deseas hacer. Se conjuga exactamente como un い-adjetivo.",
        "content": [
          "• **Formación:** Se toma la raíz del verbo quitando 〜ます y se añade **たい**.",
          "   • 行きます ➔ **行きたいです** (quiero ir).",
          "   • 食べます ➔ **食べたいです** (quiero comer).",
          "• **Conjugación como い-adjetivo:**",
          "   • Negativo: 行きた**くないです** (no quiero ir).",
          "   • Pasado: 行きた**かったです** (quería ir).",
          "   • Pasado Negativo: 行きた**くなかったです** (no quería ir).",
          "• **Partícula:** Con 〜たい, el objeto directo puede marcarse tanto con **を** como con **が** (お寿司が食べたい / お寿司を食べたい)."
        ],
        "examples": [
          {
            "japanese": "来年、日本へ行きたいです。",
            "romaji": "Rainen, Nihon e ikitai desu.",
            "spanish": "El próximo año quiero ir a Japón.",
            "audioText": "らいねんにほんへいきたいです"
          }
        ]
      },
      {
        "id": "u11-tari-koto-ga-aru",
        "title": "Actividades de Muestra (〜たり〜たり) y Experiencias (〜ことがある)",
        "japaneseTitle": "例示（〜たり〜たりする）と 経験（〜ことがある）",
        "category": "grammar",
        "summary": "Listar ejemplos de actividades y relatar lo que has experimentado en tu vida.",
        "content": [
          "• **〜たり〜たりする (Hacer cosas como A y B):**",
          "   • Forma Ta de los verbos + り + する (ej. 本を読んだり、音楽を聞いたりしました = Hice cosas como leer y escuchar música).",
          "• **〜ことがある (Haber tenido la experiencia de...):**",
          "   • Forma Ta + ことがあります (ej. 富士山に登ったことがありますか = ¿Alguna vez has subido al Monte Fuji?).",
          "   • Negativo: 〜たことがありません (Nunca en mi vida he hecho...)."
        ],
        "examples": [
          {
            "japanese": "休みの日は映画を見たり掃除したりします。",
            "romaji": "Yasumi no hi wa eiga o mitari souji shitari shimasu.",
            "spanish": "En mis días libres hago cosas como ver películas y hacer aseo.",
            "audioText": "やすみのひはえいがをみたりそうじしたりします"
          },
          {
            "japanese": "納豆を食べたことがありません。",
            "romaji": "Nattou o tabeta koto ga arimasen.",
            "spanish": "Nunca en mi vida he probado el natto.",
            "audioText": "なっとうをたべたことがありません"
          }
        ]
      }
    ]
  },
  {
    "unitId": 12,
    "title": "Genki Lección 12: Salud, Consejos y Deberes",
    "genkiChapter": "Genki I - Lesson 12",
    "subtitle": "Modo Explicativo (〜んです), Excesos (〜すぎる) y Obligación",
    "description": "La gran culminación de Genki I: el modo explicativo imprescindible 〜んです, excesos, consejos de salud (〜ほうがいい) y obligaciones (〜なければいけません).",
    "themeColor": "#ce82ff",
    "sections": [
      {
        "id": "u12-n-desu",
        "title": "El Modo Explicativo: 〜んです / 〜のだ",
        "japaneseTitle": "説明の「〜んです」（状況説明・理由の提示）",
        "category": "grammar",
        "formula": "[Oración en forma corta] + んです",
        "summary": "Una de las partículas más frecuentes y naturales del japonés hablado: sirve para dar explicaciones, justificaciones o pedir contexto.",
        "content": [
          "• Se utiliza cuando hay una evidencia visible o contexto compartido y se desea explicar la causa.",
          "• Si alguien te ve enfermo y pregunta: 「どうしたんですか」(¿Qué te ocurrió?), respondes:",
          "   • **頭が痛いんです** (Es que me duele la cabeza).",
          "• Con sustantivos y な-adjetivos en presente afirmativo, se inserta **な**: 病気**なんです** (Es que estoy enfermo)."
        ],
        "examples": [
          {
            "japanese": "お腹が痛いんです。",
            "romaji": "Onaka ga itai n desu.",
            "spanish": "Es que me duele el estómago.",
            "audioText": "おなかがいたいんです"
          }
        ]
      },
      {
        "id": "u12-sugiru-advice-duty",
        "title": "Excesos (〜すぎる), Consejos (〜ほうがいい) y Obligación",
        "japaneseTitle": "過度（〜すぎる）・助言（〜ほうがいい）・義務（〜なければいけない）",
        "category": "grammar",
        "summary": "Estructuras de salud para decir lo que hiciste en exceso, dar consejos médicos y expresar deberes ineludibles.",
        "content": [
          "• **〜すぎる (Hacer en exceso / Demasiado):**",
          "   • Verbo raíz + すぎる (食べすぎました = Comí demasiado).",
          "   • Adjetivo sin い + すぎる (高すぎます = Es demasiado caro).",
          "• **〜ほうがいいです (Sería mejor que...):**",
          "   • Consejo afirmativo: Forma Ta + ほうがいいです (薬を**飲んだ**ほうがいいです = Sería mejor que te tomes la medicina).",
          "   • Consejo negativo: Forma ない + ほうがいいです (お風呂に**入らない**ほうがいいです = Sería mejor que no tomes un baño caliente).",
          "• **〜なければいけません (Tengo que... / Es obligatorio):**",
          "   • Forma ない ➔ quitar い y poner **ければいけません** (病院へ**行かなければいけません** = Tengo que ir al hospital)."
        ],
        "examples": [
          {
            "japanese": "きのう食べすぎました。",
            "romaji": "Kinou tabesugimashita.",
            "spanish": "Ayer comí en exceso.",
            "audioText": "きのうたべすぎました"
          },
          {
            "japanese": "早く寝たほうがいいですよ。",
            "romaji": "Hayaku neta hou ga ii desu yo.",
            "spanish": "Sería mejor que te duermas temprano, te aconsejo.",
            "audioText": "はやくねたほうがいいですよ"
          },
          {
            "japanese": "熱がありますから、病院へ行かなければいけません。",
            "romaji": "Netsu ga arimasu kara, byouin e ikanakereba ikemasen.",
            "spanish": "Como tengo fiebre, debo ir al hospital.",
            "audioText": "ねつがありますからびょういんへいかなければいけません"
          }
        ]
      }
    ]
  }
];
