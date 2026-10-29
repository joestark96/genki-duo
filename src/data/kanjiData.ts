export interface KanjiCompound {
  word: string;
  furigana: string;
  romaji: string;
  meaning: string;
}

export interface KanjiItem {
  id: string;
  kanji: string;
  spanish: string;
  english?: string;
  onyomi: string;
  kunyomi: string;
  strokeCount: number;
  radicals?: string;
  jlptLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  genkiLesson?: number;
  compounds?: KanjiCompound[];
  exampleSentence?: string;
  exampleTranslation?: string;
  notes?: string;
}

export const kanjiList: KanjiItem[] = [
  // --- NÚMEROS Y BÁSICOS (Genki I L3 - JLPT N5) ---
  {
    id: 'k-ichi',
    kanji: '一',
    spanish: 'Uno',
    english: 'One',
    onyomi: 'イチ、イツ',
    kunyomi: 'ひと、ひと・つ',
    strokeCount: 1,
    radicals: '一 (uno horizontal)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '一つ', furigana: 'ひとつ', romaji: 'hitotsu', meaning: 'Una cosa' },
      { word: '一人', furigana: 'ひとり', romaji: 'hitori', meaning: 'Una persona / solo' },
      { word: '一日', furigana: 'ついたち / いちにち', romaji: 'tsuitachi / ichinichi', meaning: 'Primer día / Un día' },
      { word: '一年生', furigana: 'いちねんせい', romaji: 'ichinensei', meaning: 'Estudiante de 1.er año' }
    ],
    exampleSentence: 'りんごを一つください。',
    exampleTranslation: 'Deme una manzana, por favor.',
    notes: 'El kanji más elemental; una sola línea horizontal.'
  },
  {
    id: 'k-ni',
    kanji: '二',
    spanish: 'Dos',
    english: 'Two',
    onyomi: 'ニ',
    kunyomi: 'ふた、ふた・つ',
    strokeCount: 2,
    radicals: '二 (dos)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '二つ', furigana: 'ふたつ', romaji: 'futatsu', meaning: 'Dos cosas' },
      { word: '二人', furigana: 'ふたり', romaji: 'futari', meaning: 'Dos personas' },
      { word: '二月', furigana: 'にがつ', romaji: 'nigatsu', meaning: 'Febrero' }
    ],
    exampleSentence: '切手を二枚買いました。',
    exampleTranslation: 'Compré dos sellos postales.',
    notes: 'Dos líneas horizontales; la inferior es más larga.'
  },
  {
    id: 'k-san',
    kanji: '三',
    spanish: 'Tres',
    english: 'Three',
    onyomi: 'サン',
    kunyomi: 'み、み・つ、みっ・つ',
    strokeCount: 3,
    radicals: '一 (uno)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '三つ', furigana: 'みっつ', romaji: 'mittsu', meaning: 'Tres cosas' },
      { word: '三人', furigana: 'さんにん', romaji: 'sannin', meaning: 'Tres personas' },
      { word: '三日月', furigana: 'みかづき', romaji: 'mikazuki', meaning: 'Luna creciente' }
    ],
    exampleSentence: '机の上に本が三冊あります。',
    exampleTranslation: 'Hay tres libros sobre el escritorio.',
    notes: 'Tres líneas horizontales; la del medio es más corta.'
  },
  {
    id: 'k-yon',
    kanji: '四',
    spanish: 'Cuatro',
    english: 'Four',
    onyomi: 'シ',
    kunyomi: 'よ、よ・つ、よっ・つ、よん',
    strokeCount: 5,
    radicals: '囗 (recinto)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '四つ', furigana: 'よっつ', romaji: 'yottsu', meaning: 'Cuatro cosas' },
      { word: '四人', furigana: 'よにん', romaji: 'yonin', meaning: 'Cuatro personas' },
      { word: '四月', furigana: 'しがつ', romaji: 'shigatsu', meaning: 'Abril' }
    ],
    exampleSentence: '四時にお茶を飲みます。',
    exampleTranslation: 'Tomo té a las cuatro en punto.',
    notes: 'Representa una ventana o piernas dentro de un recinto.'
  },
  {
    id: 'k-go',
    kanji: '五',
    spanish: 'Cinco',
    english: 'Five',
    onyomi: 'ゴ',
    kunyomi: 'いつ、いつ・つ',
    strokeCount: 4,
    radicals: '二 (dos)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '五つ', furigana: 'いつつ', romaji: 'itsutsu', meaning: 'Cinco cosas' },
      { word: '五月', furigana: 'ごがつ', romaji: 'gogatsu', meaning: 'Mayo' },
      { word: '五分', furigana: 'ごふん', romaji: 'gofun', meaning: 'Cinco minutos' }
    ],
    exampleSentence: '五分待ってください。',
    exampleTranslation: 'Espera cinco minutos, por favor.',
    notes: 'Kanji numérico 5.'
  },
  {
    id: 'k-roku',
    kanji: '六',
    spanish: 'Seis',
    english: 'Six',
    onyomi: 'ロク、ロッ',
    kunyomi: 'む、む・つ、むっ・つ',
    strokeCount: 4,
    radicals: '八 (ocho)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '六つ', furigana: 'むっつ', romaji: 'muttsu', meaning: 'Seis cosas' },
      { word: '六月', furigana: 'ろくがつ', romaji: 'rokugatsu', meaning: 'Junio' },
      { word: '六百', furigana: 'ろっぴゃく', romaji: 'roppyaku', meaning: 'Seiscientos' }
    ],
    exampleSentence: '六時に起きます。',
    exampleTranslation: 'Me despierto a las seis.',
    notes: 'Número 6 en Genki I.'
  },
  {
    id: 'k-nana',
    kanji: '七',
    spanish: 'Siete',
    english: 'Seven',
    onyomi: 'シチ',
    kunyomi: 'なな、なな・つ',
    strokeCount: 2,
    radicals: '一 (uno)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '七つ', furigana: 'ななつ', romaji: 'nanatsu', meaning: 'Siete cosas' },
      { word: '七月', furigana: 'しちがつ', romaji: 'shichigatsu', meaning: 'Julio' },
      { word: '七時', furigana: 'しちじ', romaji: 'shichiji', meaning: 'Las siete en punto' }
    ],
    exampleSentence: '今、七時半です。',
    exampleTranslation: 'Ahora son las siete y media.',
    notes: 'Se lee なな o しち.'
  },
  {
    id: 'k-hachi',
    kanji: '八',
    spanish: 'Ocho',
    english: 'Eight',
    onyomi: 'ハチ、ハッ',
    kunyomi: 'や、や・つ、やっ・つ',
    strokeCount: 2,
    radicals: '八 (ocho)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '八つ', furigana: 'やっつ', romaji: 'yattsu', meaning: 'Ocho cosas' },
      { word: '八月', furigana: 'はちがつ', romaji: 'hachigatsu', meaning: 'Agosto' },
      { word: '八百', furigana: 'はっぴゃく', romaji: 'happyaku', meaning: 'Ochocientos' },
      { word: '八百屋', furigana: 'やおや', romaji: 'yaoya', meaning: 'Verdulería' }
    ],
    exampleSentence: '八月に日本へ行きます。',
    exampleTranslation: 'Iré a Japón en agosto.',
    notes: 'Forma de campana o apertura hacia abajo.'
  },
  {
    id: 'k-kyuu',
    kanji: '九',
    spanish: 'Nueve',
    english: 'Nine',
    onyomi: 'キュウ、ク',
    kunyomi: 'ここの、ここの・つ',
    strokeCount: 2,
    radicals: '乙 (segundo)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '九つ', furigana: 'ここのつ', romaji: 'kokonotsu', meaning: 'Nueve cosas' },
      { word: '九月', furigana: 'くがつ', romaji: 'kugatsu', meaning: 'Septiembre' },
      { word: '九時', furigana: 'くじ', romaji: 'kuji', meaning: 'Las nueve en punto' }
    ],
    exampleSentence: '夜九時に寝ます。',
    exampleTranslation: 'Me duermo a las 9 de la noche.',
    notes: 'Cuidado con la lectura く en la hora (くじ).'
  },
  {
    id: 'k-juu',
    kanji: '十',
    spanish: 'Diez',
    english: 'Ten',
    onyomi: 'ジュウ、ジッ',
    kunyomi: 'とお、と',
    strokeCount: 2,
    radicals: '十 (diez)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '十', furigana: 'とお', romaji: 'too', meaning: 'Diez cosas' },
      { word: '十月', furigana: 'じゅうがつ', romaji: 'juugatsu', meaning: 'Octubre' },
      { word: '十分', furigana: 'じゅっぷん / じっぷん', romaji: 'juppun', meaning: 'Diez minutos' }
    ],
    exampleSentence: '十月は涼しいです。',
    exampleTranslation: 'En octubre está fresco.',
    notes: 'Una cruz simple.'
  },
  {
    id: 'k-hyaku',
    kanji: '百',
    spanish: 'Cien',
    english: 'Hundred',
    onyomi: 'ヒャク、ビャク、ピャク',
    kunyomi: 'もも',
    strokeCount: 6,
    radicals: '白 (blanco)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '百', furigana: 'ひゃく', romaji: 'hyaku', meaning: 'Cien' },
      { word: '三百', furigana: 'さんびゃく', romaji: 'sanbyaku', meaning: 'Trescientos' },
      { word: '六百', furigana: 'ろっぴゃく', romaji: 'roppyaku', meaning: 'Seiscientos' },
      { word: '八百', furigana: 'はっぴゃく', romaji: 'happyaku', meaning: 'Ochocientos' }
    ],
    exampleSentence: 'これは百円です。',
    exampleTranslation: 'Esto cuesta 100 yenes.',
    notes: 'Irregularidades en 300, 600 y 800.'
  },
  {
    id: 'k-sen',
    kanji: '千',
    spanish: 'Mil',
    english: 'Thousand',
    onyomi: 'セン、ゼン',
    kunyomi: 'ち',
    strokeCount: 3,
    radicals: '十 (diez)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '千', furigana: 'せん', romaji: 'sen', meaning: 'Mil' },
      { word: '三千', furigana: 'さんぜん', romaji: 'sanzen', meaning: 'Tres mil' },
      { word: '八千', furigana: 'はっせん', romaji: 'hassen', meaning: 'Ocho mil' }
    ],
    exampleSentence: '辞書は三千円でした。',
    exampleTranslation: 'El diccionario costó 3,000 yenes.',
    notes: 'Irregularidades en 3,000 (sanzen) y 8,000 (hassen).'
  },
  {
    id: 'k-man',
    kanji: '万',
    spanish: 'Diez mil',
    english: 'Ten thousand',
    onyomi: 'マン、バン',
    kunyomi: 'よろず',
    strokeCount: 3,
    radicals: '一 (uno)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '一万', furigana: 'いちまん', romaji: 'ichiman', meaning: 'Diez mil (10,000)' },
      { word: '十万', furigana: 'じゅうまん', romaji: 'juuman', meaning: 'Cien mil (100,000)' },
      { word: '万国', furigana: 'ばんこく', romaji: 'bankoku', meaning: 'Todas las naciones' }
    ],
    exampleSentence: 'カメラは二万円でした。',
    exampleTranslation: 'La cámara costó 20,000 yenes.',
    notes: 'Unidad base japonesa de 4 ceros (10,000).'
  },
  {
    id: 'k-en',
    kanji: '円',
    spanish: 'Yen / Círculo',
    english: 'Yen / Circle',
    onyomi: 'エン',
    kunyomi: 'まる・い',
    strokeCount: 4,
    radicals: '冂 (frontera)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '円', furigana: 'えん', romaji: 'en', meaning: 'Yen (moneda japonesa)' },
      { word: '百円', furigana: 'ひゃくえん', romaji: 'hyakuen', meaning: '100 yenes' },
      { word: '円高', furigana: 'えんだか', romaji: 'endaka', meaning: 'Yen fuerte' }
    ],
    exampleSentence: 'これは五百円です。',
    exampleTranslation: 'Esto cuesta 500 yenes.',
    notes: 'Moneda oficial japonesa.'
  },
  {
    id: 'k-ji',
    kanji: '時',
    spanish: 'Tiempo / Hora',
    english: 'Time / Hour',
    onyomi: 'ジ',
    kunyomi: 'とき',
    strokeCount: 10,
    radicals: '日 (sol/día)',
    jlptLevel: 'N5',
    genkiLesson: 3,
    compounds: [
      { word: '何時', furigana: 'なんじ', romaji: 'nanji', meaning: '¿Qué hora?' },
      { word: '時々', furigana: 'ときどき', romaji: 'tokidoki', meaning: 'A veces' },
      { word: '時間', furigana: 'じかん', romaji: 'jikan', meaning: 'Tiempo / horas' }
    ],
    exampleSentence: '今何時ですか。',
    exampleTranslation: '¿Qué hora es ahora?',
    notes: 'Radical del sol (日) + templo (寺).'
  },

  // --- TIEMPO Y ELEMENTOS DE LA NATURALEZA (Genki I L4 - JLPT N5) ---
  {
    id: 'k-nichi',
    kanji: '日',
    spanish: 'Sol / Día',
    english: 'Sun / Day',
    onyomi: 'ニチ、ジツ',
    kunyomi: 'ひ、び、か',
    strokeCount: 4,
    radicals: '日 (sol/día)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '日本', furigana: 'にほん', romaji: 'nihon', meaning: 'Japón' },
      { word: '日曜日', furigana: 'にちようび', romaji: 'nichiyoubi', meaning: 'Domingo' },
      { word: '毎日', furigana: 'まいにち', romaji: 'mainichi', meaning: 'Todos los días' },
      { word: '今日', furigana: 'きょう', romaji: 'kyou', meaning: 'Hoy' }
    ],
    exampleSentence: '日曜日、友達と映画を見ました。',
    exampleTranslation: 'El domingo vi una película con un amigo.',
    notes: 'El kanji del Sol Naciente. Base de Nihon.'
  },
  {
    id: 'k-hon',
    kanji: '本',
    spanish: 'Libro / Origen',
    english: 'Book / Origin',
    onyomi: 'ホン',
    kunyomi: 'もと',
    strokeCount: 5,
    radicals: '木 (árbol)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '本', furigana: 'ほん', romaji: 'hon', meaning: 'Libro' },
      { word: '日本語', furigana: 'にほんご', romaji: 'nihongo', meaning: 'Idioma japonés' },
      { word: '日本人', furigana: 'にほんじん', romaji: 'nihonjin', meaning: 'Persona japonesa' },
      { word: '本屋', furigana: 'ほんや', romaji: 'hon\'ya', meaning: 'Librería' }
    ],
    exampleSentence: '図書館で日本の本を読みました。',
    exampleTranslation: 'Leí un libro japonés en la biblioteca.',
    notes: 'Árbol (木) con una línea en la raíz.'
  },
  {
    id: 'k-hito',
    kanji: '人',
    spanish: 'Persona / Ser humano',
    english: 'Person',
    onyomi: 'ジン、ニン',
    kunyomi: 'ひと',
    strokeCount: 2,
    radicals: '人 (persona)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '日本人', furigana: 'にほんじん', romaji: 'nihonjin', meaning: 'Japonés' },
      { word: '外国人', furigana: 'がいこくじん', romaji: 'gaikokujin', meaning: 'Extranjero' },
      { word: '大人', furigana: 'おとな', romaji: 'otona', meaning: 'Adulto' },
      { word: '人々', furigana: 'ひとびと', romaji: 'hitobito', meaning: 'Personas / gente' }
    ],
    exampleSentence: 'メアリーさんはアメリカ人です。',
    exampleTranslation: 'Mary es estadounidense.',
    notes: 'Dos trazos que se apoyan mutuamente como personas.'
  },
  {
    id: 'k-tsuki',
    kanji: '月',
    spanish: 'Luna / Mes',
    english: 'Moon / Month',
    onyomi: 'ゲツ、ガツ',
    kunyomi: 'つき',
    strokeCount: 4,
    radicals: '月 (luna)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '月曜日', furigana: 'げつようび', romaji: 'getsuyoubi', meaning: 'Lunes' },
      { word: '今月', furigana: 'こんげつ', romaji: 'kongetsu', meaning: 'Este mes' },
      { word: '来月', furigana: 'らいげつ', romaji: 'raigetsu', meaning: 'El próximo mes' },
      { word: '一月', furigana: 'いちがつ', romaji: 'ichigatsu', meaning: 'Enero' }
    ],
    exampleSentence: '今夜は月が綺麗ですね。',
    exampleTranslation: 'La luna está hermosa esta noche.',
    notes: 'Representa la luna creciente con nubes.'
  },
  {
    id: 'k-hi',
    kanji: '火',
    spanish: 'Fuego',
    english: 'Fire',
    onyomi: 'カ',
    kunyomi: 'ひ、ほ',
    strokeCount: 4,
    radicals: '火 (fuego)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '火曜日', furigana: 'かようび', romaji: 'kayoubi', meaning: 'Martes' },
      { word: '火事', furigana: 'かじ', romaji: 'kaji', meaning: 'Incendio' },
      { word: '花火', furigana: 'はなび', romaji: 'hanabi', meaning: 'Fuegos artificiales' }
    ],
    exampleSentence: '火曜日にテストがあります。',
    exampleTranslation: 'El martes hay un examen.',
    notes: 'Llamas subiendo al aire.'
  },
  {
    id: 'k-mizu',
    kanji: '水',
    spanish: 'Agua',
    english: 'Water',
    onyomi: 'スイ',
    kunyomi: 'みず',
    strokeCount: 4,
    radicals: '水 (agua)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '水曜日', furigana: 'すいようび', romaji: 'suiyoubi', meaning: 'Miércoles' },
      { word: 'お水', furigana: 'おみず', romaji: 'omizu', meaning: 'Agua (cortés)' },
      { word: '水泳', furigana: 'すいえい', romaji: 'suiei', meaning: 'Natación' }
    ],
    exampleSentence: '冷たい水を飲みました。',
    exampleTranslation: 'Bebí agua fría.',
    notes: 'Representa gotas fluyendo en un río.'
  },
  {
    id: 'k-ki',
    kanji: '木',
    spanish: 'Árbol / Madera',
    english: 'Tree / Wood',
    onyomi: 'モク、ボク',
    kunyomi: 'き、こ',
    strokeCount: 4,
    radicals: '木 (árbol)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '木曜日', furigana: 'もくようび', romaji: 'mokuyoubi', meaning: 'Jueves' },
      { word: '大木', furigana: 'たいぼく', romaji: 'taiboku', meaning: 'Árbol grande' }
    ],
    exampleSentence: '公園に大きな木があります。',
    exampleTranslation: 'Hay un árbol grande en el parque.',
    notes: 'Tronco con ramas y raíces.'
  },
  {
    id: 'k-kin',
    kanji: '金',
    spanish: 'Oro / Dinero',
    english: 'Gold / Money',
    onyomi: 'キン、コン',
    kunyomi: 'かね、かな',
    strokeCount: 8,
    radicals: '金 (oro/metal)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '金曜日', furigana: 'きんようび', romaji: 'kin\'youbi', meaning: 'Viernes' },
      { word: 'お金', furigana: 'おかね', romaji: 'okane', meaning: 'Dinero' },
      { word: '金持ち', furigana: 'かねもち', romaji: 'kanemochi', meaning: 'Persona rica' }
    ],
    exampleSentence: '金曜日の夜、パーティーに行きます。',
    exampleTranslation: 'El viernes por la noche iré a una fiesta.',
    notes: 'Minerales brillantes enterrados bajo tierra.'
  },
  {
    id: 'k-tsuchi',
    kanji: '土',
    spanish: 'Tierra / Suelo',
    english: 'Earth / Soil',
    onyomi: 'ド、ト',
    kunyomi: 'つち',
    strokeCount: 3,
    radicals: '土 (tierra)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '土曜日', furigana: 'どようび', romaji: 'doyoubi', meaning: 'Sábado' },
      { word: '土地', furigana: 'とち', romaji: 'tochi', meaning: 'Terreno / tierra' }
    ],
    exampleSentence: '土曜日にテニスをしませんか。',
    exampleTranslation: '¿Jugamos tenis el sábado?',
    notes: 'Brote saliendo de la tierra fértil.'
  },
  {
    id: 'k-ue',
    kanji: '上',
    spanish: 'Arriba / Sobre',
    english: 'Above / Up',
    onyomi: 'ジョウ、ショウ',
    kunyomi: 'うえ、あ・がる、のぼ・る',
    strokeCount: 3,
    radicals: '一 (uno)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '机の上', furigana: 'つくえのうえ', romaji: 'tsukue no ue', meaning: 'Sobre la mesa' },
      { word: '上手', furigana: 'じょうず', romaji: 'jouzu', meaning: 'Habilidoso / Bueno para algo' }
    ],
    exampleSentence: '机の上にペンがあります。',
    exampleTranslation: 'Hay un bolígrafo sobre la mesa.',
    notes: 'Indica algo ubicado por encima de una línea de referencia.'
  },
  {
    id: 'k-shita',
    kanji: '下',
    spanish: 'Abajo / Debajo',
    english: 'Below / Under',
    onyomi: 'カ、ゲ',
    kunyomi: 'した、さ・がる、くだ・る',
    strokeCount: 3,
    radicals: '一 (uno)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '机の下', furigana: 'つくえのした', romaji: 'tsukue no shita', meaning: 'Debajo de la mesa' },
      { word: '下手', furigana: 'へた', romaji: 'heta', meaning: 'Torpe / Malo para algo' },
      { word: '地下鉄', furigana: 'ちかてつ', romaji: 'chikatetsu', meaning: 'Metro subterráneo' }
    ],
    exampleSentence: '椅子の下に猫がいます。',
    exampleTranslation: 'Hay un gato debajo de la silla.',
    notes: 'Indica algo ubicado por debajo de la línea.'
  },
  {
    id: 'k-naka',
    kanji: '中',
    spanish: 'Dentro / En medio',
    english: 'Inside / Middle',
    onyomi: 'チュウ、ジュウ',
    kunyomi: 'なか',
    strokeCount: 4,
    radicals: '丨 (línea vertical)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: 'かばんの中', furigana: 'かばんのなか', romaji: 'kaban no naka', meaning: 'Dentro de la mochila' },
      { word: '中国', furigana: 'ちゅうごく', romaji: 'chuugoku', meaning: 'China' },
      { word: '一日中', furigana: 'いちにちじゅう', romaji: 'ichinichijuu', meaning: 'Todo el día' }
    ],
    exampleSentence: '部屋の中に誰がいますか。',
    exampleTranslation: '¿Quién está dentro de la habitación?',
    notes: 'Una línea atravesando el centro exacto de una caja.'
  },
  {
    id: 'k-han',
    kanji: '半',
    spanish: 'Mitad / Y media',
    english: 'Half',
    onyomi: 'ハン',
    kunyomi: 'なか・ば',
    strokeCount: 5,
    radicals: '十 (diez)',
    jlptLevel: 'N5',
    genkiLesson: 4,
    compounds: [
      { word: '二時半', furigana: 'にじはん', romaji: 'nijihan', meaning: 'Las dos y media' },
      { word: '半分', furigana: 'はんぶん', romaji: 'hanbun', meaning: 'La mitad' },
      { word: '半年', furigana: 'はんとし', romaji: 'hantoshi', meaning: 'Medio año' }
    ],
    exampleSentence: '三時半に会いましょう。',
    exampleTranslation: 'Encontrémonos a las tres y media.',
    notes: 'Indica la mitad en las horas (〜時半).'
  },

  // --- ESCUELA, VIDA COTIDIANA Y ACCIONES (Genki I L5 & L6 - JLPT N5) ---
  {
    id: 'k-gaku',
    kanji: '学',
    spanish: 'Estudiar / Aprender',
    english: 'Study / Learn',
    onyomi: 'ガク、ガッ',
    kunyomi: 'まな・ぶ',
    strokeCount: 8,
    radicals: '子 (niño)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '学生', furigana: 'がくせい', romaji: 'gakusei', meaning: 'Estudiante' },
      { word: '大学', furigana: 'だいがく', romaji: 'daigaku', meaning: 'Universidad' },
      { word: '学校', furigana: 'がっこう', romaji: 'gakkou', meaning: 'Escuela' }
    ],
    exampleSentence: 'さくら大学の学生です。',
    exampleTranslation: 'Soy estudiante de la Universidad Sakura.',
    notes: 'Niño (子) bajo un techo aprendiendo.'
  },
  {
    id: 'k-sei',
    kanji: '生',
    spanish: 'Vida / Nacer',
    english: 'Life / Birth',
    onyomi: 'セイ、ショウ',
    kunyomi: 'い・きる、う・まれる、なま',
    strokeCount: 5,
    radicals: '生 (vida)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '先生', furigana: 'せんせい', romaji: 'sensei', meaning: 'Profesor / Maestro' },
      { word: '学生', furigana: 'がくせい', romaji: 'gakusei', meaning: 'Estudiante' },
      { word: '留学生', furigana: 'りゅうがくせい', romaji: 'ryuugakusei', meaning: 'Estudiante internacional' }
    ],
    exampleSentence: '山下先生は日本語の先生です。',
    exampleTranslation: 'El profesor Yamashita es maestro de japonés.',
    notes: 'Brotes nuevos de vida emergiendo del suelo.'
  },
  {
    id: 'k-sen-saki',
    kanji: '先',
    spanish: 'Antes / Previo',
    english: 'Before / Ahead',
    onyomi: 'セン',
    kunyomi: 'さき',
    strokeCount: 6,
    radicals: '儿 (piernas)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '先生', furigana: 'せんせい', romaji: 'sensei', meaning: 'Profesor (nacido antes)' },
      { word: '先週', furigana: 'せんしゅう', romaji: 'senshuu', meaning: 'La semana pasada' },
      { word: '先月', furigana: 'せんげつ', romaji: 'sengetsu', meaning: 'El mes pasado' }
    ],
    exampleSentence: '先週、京都に行きました。',
    exampleTranslation: 'La semana pasada fui a Kioto.',
    notes: 'Alguien que va adelante con pasos firmes.'
  },
  {
    id: 'k-dai-oo',
    kanji: '大',
    spanish: 'Grande',
    english: 'Big / Large',
    onyomi: 'ダイ、タイ',
    kunyomi: 'おお・きい',
    strokeCount: 3,
    radicals: '大 (grande)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '大きい', furigana: 'おおきい', romaji: 'ookii', meaning: 'Grande' },
      { word: '大学', furigana: 'だいがく', romaji: 'daigaku', meaning: 'Universidad' },
      { word: '大好き', furigana: 'だいすき', romaji: 'daisuki', meaning: 'Gustar mucho / encantar' }
    ],
    exampleSentence: '日本料理が大好きです。',
    exampleTranslation: 'Me encanta la comida japonesa.',
    notes: 'Una persona con brazos y piernas bien abiertos.'
  },
  {
    id: 'k-yama',
    kanji: '山',
    spanish: 'Montaña',
    english: 'Mountain',
    onyomi: 'サン、ザン',
    kunyomi: 'やま',
    strokeCount: 3,
    radicals: '山 (montaña)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '富士山', furigana: 'ふじさん', romaji: 'fujisan', meaning: 'Monte Fuji' },
      { word: '山下さん', furigana: 'やましたさん', romaji: 'yamashita-san', meaning: 'Sr./Sra. Yamashita' },
      { word: '登山', furigana: 'とざん', romaji: 'tozan', meaning: 'Alpinismo' }
    ],
    exampleSentence: '夏に山に登りました。',
    exampleTranslation: 'Escalé una montaña en verano.',
    notes: 'Tres picos de montaña majestuosos.'
  },
  {
    id: 'k-kawa',
    kanji: '川',
    spanish: 'Río',
    english: 'River',
    onyomi: 'セン',
    kunyomi: 'かわ、がわ',
    strokeCount: 3,
    radicals: '川 (río)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '川', furigana: 'かわ', romaji: 'kawa', meaning: 'Río' },
      { word: '小川', furigana: 'おがわ', romaji: 'ogawa', meaning: 'Arroyo' }
    ],
    exampleSentence: '川の近くを散歩しました。',
    exampleTranslation: 'Paseé cerca del río.',
    notes: 'Tres corrientes de agua fluyendo en paralelo.'
  },
  {
    id: 'k-tabe',
    kanji: '食',
    spanish: 'Comer / Alimento',
    english: 'Eat / Food',
    onyomi: 'ショク',
    kunyomi: 'た・べる',
    strokeCount: 9,
    radicals: '食 (comida)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '食べる', furigana: 'たべる', romaji: 'taberu', meaning: 'Comer' },
      { word: '食べ物', furigana: 'たべもの', romaji: 'tabemono', meaning: 'Comida' },
      { word: '朝食', furigana: 'ちょうしょく', romaji: 'choushoku', meaning: 'Desayuno' },
      { word: '食堂', furigana: 'しょくどう', romaji: 'shokudou', meaning: 'Comedor / Cafetería' }
    ],
    exampleSentence: '毎日七時に朝ご飯を食べます。',
    exampleTranslation: 'Todos los días desayuno a las 7:00.',
    notes: 'Un plato con una tapa cubriendo alimento.'
  },
  {
    id: 'k-nomi',
    kanji: '飲',
    spanish: 'Beber / Bebida',
    english: 'Drink',
    onyomi: 'イン',
    kunyomi: 'の・む',
    strokeCount: 12,
    radicals: '食 (comida)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '飲む', furigana: 'のむ', romaji: 'nomu', meaning: 'Beber' },
      { word: '飲み物', furigana: 'のみもの', romaji: 'nomimono', meaning: 'Bebida' },
      { word: '飲食店', furigana: 'いんしょくてん', romaji: 'inshokuten', meaning: 'Restaurante / Bar' }
    ],
    exampleSentence: 'カフェでコーヒーを飲みました。',
    exampleTranslation: 'Bebí café en la cafetería.',
    notes: 'Comida (食) + bostezo/boca abierta (欠).'
  },
  {
    id: 'k-mi',
    kanji: '見',
    spanish: 'Ver / Mirar',
    english: 'See / Look',
    onyomi: 'ケン',
    kunyomi: 'み・る、み・せる',
    strokeCount: 7,
    radicals: '見 (ver)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '見る', furigana: 'みる', romaji: 'miru', meaning: 'Ver / Mirar' },
      { word: '花見', furigana: 'はなみ', romaji: 'hanami', meaning: 'Ver los cerezos en flor' },
      { word: '意見', furigana: 'いけん', romaji: 'iken', meaning: 'Opinión' }
    ],
    exampleSentence: '昨日、面白い映画を見ました。',
    exampleTranslation: 'Ayer vi una película interesante.',
    notes: 'Un ojo grande (目) sobre piernas humanas.'
  },
  {
    id: 'k-i-iku',
    kanji: '行',
    spanish: 'Ir / Realizar',
    english: 'Go / Conduct',
    onyomi: 'コウ、ギョウ',
    kunyomi: 'い・く、おこな・う',
    strokeCount: 6,
    radicals: '行 (ir)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '行く', furigana: 'いく', romaji: 'iku', meaning: 'Ir' },
      { word: '旅行', furigana: 'りょこう', romaji: 'ryokou', meaning: 'Viaje' },
      { word: '銀行', furigana: 'ぎんこう', romaji: 'ginkou', meaning: 'Banco' }
    ],
    exampleSentence: '明日、図書館へ行きます。',
    exampleTranslation: 'Mañana iré a la biblioteca.',
    notes: 'Una encrucijada donde los caminos se cruzan.'
  },
  {
    id: 'k-kuru',
    kanji: '来',
    spanish: 'Venir / Próximo',
    english: 'Come / Next',
    onyomi: 'ライ',
    kunyomi: 'く・る、き・ます、こ・ない',
    strokeCount: 7,
    radicals: '木 (árbol)',
    jlptLevel: 'N5',
    genkiLesson: 5,
    compounds: [
      { word: '来る', furigana: 'くる', romaji: 'kuru', meaning: 'Venir' },
      { word: '来週', furigana: 'らいしゅう', romaji: 'raishuu', meaning: 'La próxima semana' },
      { word: '来年', furigana: 'らいねん', romaji: 'rainen', meaning: 'El próximo año' }
    ],
    exampleSentence: '友達が私のうちに来ます。',
    exampleTranslation: 'Un amigo vendrá a mi casa.',
    notes: 'El kanji del verbo irregular くる (kuru).'
  },

  // --- VIAJES Y CIUDAD (Genki II - JLPT N4) ---
  {
    id: 'k-ryo',
    kanji: '旅',
    spanish: 'Viaje',
    english: 'Travel / Trip',
    onyomi: 'リョ',
    kunyomi: 'たび',
    strokeCount: 10,
    radicals: '方 (dirección)',
    jlptLevel: 'N4',
    genkiLesson: 13,
    compounds: [
      { word: '旅行', furigana: 'りょこう', romaji: 'ryokou', meaning: 'Viaje / Turismo' },
      { word: '旅館', furigana: 'りょかん', romaji: 'ryokan', meaning: 'Posada tradicional japonesa' },
      { word: '一人旅', furigana: 'ひとりたび', romaji: 'hitoritabi', meaning: 'Viajar solo' }
    ],
    exampleSentence: '日本へ旅行に行きたいです。',
    exampleTranslation: 'Quiero ir de viaje a Japón.',
    notes: 'Gente reunida bajo un estandarte para viajar.'
  },
  {
    id: 'k-eki',
    kanji: '駅',
    spanish: 'Estación de tren',
    english: 'Station',
    onyomi: 'エキ',
    kunyomi: '',
    strokeCount: 14,
    radicals: '馬 (caballo)',
    jlptLevel: 'N4',
    genkiLesson: 13,
    compounds: [
      { word: '駅', furigana: 'えき', romaji: 'eki', meaning: 'Estación' },
      { word: '駅前', furigana: 'えきまえ', romaji: 'ekimae', meaning: 'Frente a la estación' },
      { word: '東京駅', furigana: 'とうきょうえき', romaji: 'toukyou-eki', meaning: 'Estación de Tokio' }
    ],
    exampleSentence: '駅の前で待ち合わせをしましょう。',
    exampleTranslation: 'Encontrémonos frente a la estación.',
    notes: 'Caballo (馬) en los puestos de relevo antiguos.'
  },
  {
    id: 'k-den',
    kanji: '電',
    spanish: 'Electricidad',
    english: 'Electricity',
    onyomi: 'デン',
    kunyomi: '',
    strokeCount: 13,
    radicals: '雨 (lluvia)',
    jlptLevel: 'N4',
    genkiLesson: 14,
    compounds: [
      { word: '電車', furigana: 'でんしゃ', romaji: 'densha', meaning: 'Tren eléctrico' },
      { word: '電話', furigana: 'でんわ', romaji: 'denwa', meaning: 'Teléfono' },
      { word: '電気', furigana: 'でんき', romaji: 'denki', meaning: 'Electricidad / Luz' }
    ],
    exampleSentence: '毎朝、電車で会社に行きます。',
    exampleTranslation: 'Todas las mañanas voy a la oficina en tren.',
    notes: 'Lluvia (雨) con un destello de relámpago (电).'
  },
  {
    id: 'k-byou',
    kanji: '病',
    spanish: 'Enfermedad',
    english: 'Illness / Sick',
    onyomi: 'ビョウ',
    kunyomi: 'や・む、やまい',
    strokeCount: 10,
    radicals: '疒 (enfermedad)',
    jlptLevel: 'N4',
    genkiLesson: 15,
    compounds: [
      { word: '病院', furigana: 'びょういん', romaji: 'byouin', meaning: 'Hospital' },
      { word: '病気', furigana: 'びょうき', romaji: 'byouki', meaning: 'Enfermedad / Estar enfermo' }
    ],
    exampleSentence: '風邪で病院に行きました。',
    exampleTranslation: 'Fui al hospital por un resfriado.',
    notes: 'Radical 疒 que representa a una persona enferma en cama.'
  },

  // --- KANJIS DE TRANSICIÓN (JLPT N3) ---
  {
    id: 'k-nan',
    kanji: '難',
    spanish: 'Difícil / Desastre',
    english: 'Difficult / Trouble',
    onyomi: 'ナン',
    kunyomi: 'むずか・しい、かた・い',
    strokeCount: 18,
    radicals: '隹 (pájaro)',
    jlptLevel: 'N3',
    compounds: [
      { word: '難しい', furigana: 'むずかしい', romaji: 'muzukashii', meaning: 'Difícil / Complicado' },
      { word: '困難', furigana: 'こんなん', romaji: 'konnan', meaning: 'Dificultad / Apuro' },
      { word: '難民', furigana: 'なんみん', romaji: 'nanmin', meaning: 'Refugiado' }
    ],
    exampleSentence: '日本語の漢字は難しいですが、面白いです。',
    exampleTranslation: 'Los kanjis japoneses son difíciles, pero interesantes.',
    notes: 'Uno de los kanjis adjetivales más populares del JLPT N3.'
  },
  {
    id: 'k-yume',
    kanji: '夢',
    spanish: 'Sueño / Ilusión',
    english: 'Dream',
    onyomi: 'ム',
    kunyomi: 'ゆめ',
    strokeCount: 13,
    radicals: '夕 (tarde/noche)',
    jlptLevel: 'N3',
    compounds: [
      { word: '夢', furigana: 'ゆめ', romaji: 'yume', meaning: 'Sueño' },
      { word: '悪夢', furigana: 'あくむ', romaji: 'akumu', meaning: 'Pesadilla' }
    ],
    exampleSentence: '私の夢は日本に住むことです。',
    exampleTranslation: 'Mi sueño es vivir en Japón.',
    notes: 'Césped en la noche bajo la luna.'
  }
];

