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
  {
    "id": "k-ichi",
    "kanji": "一",
    "spanish": "Uno",
    "english": "One",
    "onyomi": "イチ、イツ",
    "kunyomi": "ひと、ひと・つ",
    "strokeCount": 1,
    "radicals": "一 (uno horizontal)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "一つ",
        "furigana": "ひとつ",
        "romaji": "hitotsu",
        "meaning": "Una cosa"
      },
      {
        "word": "一人",
        "furigana": "ひとり",
        "romaji": "hitori",
        "meaning": "Una persona / solo"
      },
      {
        "word": "一日",
        "furigana": "ついたち / いちにち",
        "romaji": "tsuitachi / ichinichi",
        "meaning": "Primer día / Un día"
      },
      {
        "word": "一年生",
        "furigana": "いちねんせい",
        "romaji": "ichinensei",
        "meaning": "Estudiante de 1.er año"
      }
    ],
    "exampleSentence": "りんごを一つください。",
    "exampleTranslation": "Deme una manzana, por favor.",
    "notes": "El kanji más elemental; una sola línea horizontal."
  },
  {
    "id": "k-ni",
    "kanji": "二",
    "spanish": "Dos",
    "english": "Two",
    "onyomi": "ニ",
    "kunyomi": "ふた、ふた・つ",
    "strokeCount": 2,
    "radicals": "二 (dos)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "二つ",
        "furigana": "ふたつ",
        "romaji": "futatsu",
        "meaning": "Dos cosas"
      },
      {
        "word": "二人",
        "furigana": "ふたり",
        "romaji": "futari",
        "meaning": "Dos personas"
      },
      {
        "word": "二月",
        "furigana": "にがつ",
        "romaji": "nigatsu",
        "meaning": "Febrero"
      }
    ],
    "exampleSentence": "切手を二枚買いました。",
    "exampleTranslation": "Compré dos sellos postales.",
    "notes": "Dos líneas horizontales; la inferior es más larga."
  },
  {
    "id": "k-san",
    "kanji": "三",
    "spanish": "Tres",
    "english": "Three",
    "onyomi": "サン",
    "kunyomi": "み、み・つ、みっ・つ",
    "strokeCount": 3,
    "radicals": "一 (uno)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "三つ",
        "furigana": "みっつ",
        "romaji": "mittsu",
        "meaning": "Tres cosas"
      },
      {
        "word": "三人",
        "furigana": "さんにん",
        "romaji": "sannin",
        "meaning": "Tres personas"
      },
      {
        "word": "三日月",
        "furigana": "みかづき",
        "romaji": "mikazuki",
        "meaning": "Luna creciente"
      }
    ],
    "exampleSentence": "机の上に本が三冊あります。",
    "exampleTranslation": "Hay tres libros sobre el escritorio.",
    "notes": "Tres líneas horizontales; la del medio es más corta."
  },
  {
    "id": "k-yon",
    "kanji": "四",
    "spanish": "Cuatro",
    "english": "Four",
    "onyomi": "シ",
    "kunyomi": "よ、よ・つ、よっ・つ、よん",
    "strokeCount": 5,
    "radicals": "囗 (recinto)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "四つ",
        "furigana": "よっつ",
        "romaji": "yottsu",
        "meaning": "Cuatro cosas"
      },
      {
        "word": "四人",
        "furigana": "よにん",
        "romaji": "yonin",
        "meaning": "Cuatro personas"
      },
      {
        "word": "四月",
        "furigana": "しがつ",
        "romaji": "shigatsu",
        "meaning": "Abril"
      }
    ],
    "exampleSentence": "四時にお茶を飲みます。",
    "exampleTranslation": "Tomo té a las cuatro en punto.",
    "notes": "Representa una ventana o piernas dentro de un recinto."
  },
  {
    "id": "k-go",
    "kanji": "五",
    "spanish": "Cinco",
    "english": "Five",
    "onyomi": "ゴ",
    "kunyomi": "いつ、いつ・つ",
    "strokeCount": 4,
    "radicals": "二 (dos)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "五つ",
        "furigana": "いつつ",
        "romaji": "itsutsu",
        "meaning": "Cinco cosas"
      },
      {
        "word": "五月",
        "furigana": "ごがつ",
        "romaji": "gogatsu",
        "meaning": "Mayo"
      },
      {
        "word": "五分",
        "furigana": "ごふん",
        "romaji": "gofun",
        "meaning": "Cinco minutos"
      }
    ],
    "exampleSentence": "五分待ってください。",
    "exampleTranslation": "Espera cinco minutos, por favor.",
    "notes": "Kanji numérico 5."
  },
  {
    "id": "k-roku",
    "kanji": "六",
    "spanish": "Seis",
    "english": "Six",
    "onyomi": "ロク、ロッ",
    "kunyomi": "む、む・つ、むっ・つ",
    "strokeCount": 4,
    "radicals": "八 (ocho)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "六つ",
        "furigana": "むっつ",
        "romaji": "muttsu",
        "meaning": "Seis cosas"
      },
      {
        "word": "六月",
        "furigana": "ろくがつ",
        "romaji": "rokugatsu",
        "meaning": "Junio"
      },
      {
        "word": "六百",
        "furigana": "ろっぴゃく",
        "romaji": "roppyaku",
        "meaning": "Seiscientos"
      }
    ],
    "exampleSentence": "六時に起きます。",
    "exampleTranslation": "Me despierto a las seis.",
    "notes": "Número 6 en Genki I."
  },
  {
    "id": "k-nana",
    "kanji": "七",
    "spanish": "Siete",
    "english": "Seven",
    "onyomi": "シチ",
    "kunyomi": "なな、なな・つ",
    "strokeCount": 2,
    "radicals": "一 (uno)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "七つ",
        "furigana": "ななつ",
        "romaji": "nanatsu",
        "meaning": "Siete cosas"
      },
      {
        "word": "七月",
        "furigana": "しちがつ",
        "romaji": "shichigatsu",
        "meaning": "Julio"
      },
      {
        "word": "七時",
        "furigana": "しちじ",
        "romaji": "shichiji",
        "meaning": "Las siete en punto"
      }
    ],
    "exampleSentence": "今、七時半です。",
    "exampleTranslation": "Ahora son las siete y media.",
    "notes": "Se lee なな o しち."
  },
  {
    "id": "k-hachi",
    "kanji": "八",
    "spanish": "Ocho",
    "english": "Eight",
    "onyomi": "ハチ、ハッ",
    "kunyomi": "や、や・つ、やっ・つ",
    "strokeCount": 2,
    "radicals": "八 (ocho)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "八つ",
        "furigana": "やっつ",
        "romaji": "yattsu",
        "meaning": "Ocho cosas"
      },
      {
        "word": "八月",
        "furigana": "はちがつ",
        "romaji": "hachigatsu",
        "meaning": "Agosto"
      },
      {
        "word": "八百",
        "furigana": "はっぴゃく",
        "romaji": "happyaku",
        "meaning": "Ochocientos"
      }
    ],
    "exampleSentence": "八月に日本へ行きます。",
    "exampleTranslation": "Iré a Japón en agosto.",
    "notes": "Forma de campana o apertura hacia abajo."
  },
  {
    "id": "k-kyuu",
    "kanji": "九",
    "spanish": "Nueve",
    "english": "Nine",
    "onyomi": "キュウ、ク",
    "kunyomi": "ここの、ここの・つ",
    "strokeCount": 2,
    "radicals": "乙 (segundo)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "九つ",
        "furigana": "ここのつ",
        "romaji": "kokonotsu",
        "meaning": "Nueve cosas"
      },
      {
        "word": "九月",
        "furigana": "くがつ",
        "romaji": "kugatsu",
        "meaning": "Septiembre"
      },
      {
        "word": "九時",
        "furigana": "くじ",
        "romaji": "kuji",
        "meaning": "Las nueve en punto"
      }
    ],
    "exampleSentence": "夜九時に寝ます。",
    "exampleTranslation": "Me duermo a las 9 de la noche.",
    "notes": "Cuidado con la lectura く en la hora (くじ)."
  },
  {
    "id": "k-juu",
    "kanji": "十",
    "spanish": "Diez",
    "english": "Ten",
    "onyomi": "ジュウ、ジッ",
    "kunyomi": "とお、と",
    "strokeCount": 2,
    "radicals": "十 (diez)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "十",
        "furigana": "とお",
        "romaji": "too",
        "meaning": "Diez cosas"
      },
      {
        "word": "十月",
        "furigana": "じゅうがつ",
        "romaji": "juugatsu",
        "meaning": "Octubre"
      },
      {
        "word": "十分",
        "furigana": "じゅっぷん / じっぷん",
        "romaji": "juppun",
        "meaning": "Diez minutos"
      }
    ],
    "exampleSentence": "十月は涼しいです。",
    "exampleTranslation": "En octubre está fresco.",
    "notes": "Una cruz simple."
  },
  {
    "id": "k-hyaku",
    "kanji": "百",
    "spanish": "Cien",
    "english": "Hundred",
    "onyomi": "ヒャク、ビャク、ピャク",
    "kunyomi": "もも",
    "strokeCount": 6,
    "radicals": "白 (blanco)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "百",
        "furigana": "ひゃく",
        "romaji": "hyaku",
        "meaning": "Cien"
      },
      {
        "word": "三百",
        "furigana": "さんびゃく",
        "romaji": "sanbyaku",
        "meaning": "Trescientos"
      },
      {
        "word": "六百",
        "furigana": "ろっぴゃく",
        "romaji": "roppyaku",
        "meaning": "Seiscientos"
      },
      {
        "word": "八百",
        "furigana": "はっぴゃく",
        "romaji": "happyaku",
        "meaning": "Ochocientos"
      }
    ],
    "exampleSentence": "これは百円です。",
    "exampleTranslation": "Esto cuesta 100 yenes.",
    "notes": "Irregularidades en 300, 600 y 800."
  },
  {
    "id": "k-sen",
    "kanji": "千",
    "spanish": "Mil",
    "english": "Thousand",
    "onyomi": "セン、ゼン",
    "kunyomi": "ち",
    "strokeCount": 3,
    "radicals": "十 (diez)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "千",
        "furigana": "せん",
        "romaji": "sen",
        "meaning": "Mil"
      },
      {
        "word": "三千",
        "furigana": "さんぜん",
        "romaji": "sanzen",
        "meaning": "Tres mil"
      },
      {
        "word": "八千",
        "furigana": "はっせん",
        "romaji": "hassen",
        "meaning": "Ocho mil"
      }
    ],
    "exampleSentence": "辞書は三千円でした。",
    "exampleTranslation": "El diccionario costó 3,000 yenes.",
    "notes": "Irregularidades en 3,000 (sanzen) y 8,000 (hassen)."
  },
  {
    "id": "k-man",
    "kanji": "万",
    "spanish": "Diez mil",
    "english": "Ten thousand",
    "onyomi": "マン、バン",
    "kunyomi": "よろず",
    "strokeCount": 3,
    "radicals": "一 (uno)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "一万",
        "furigana": "いちまん",
        "romaji": "ichiman",
        "meaning": "Diez mil (10,000)"
      },
      {
        "word": "十万",
        "furigana": "じゅうまん",
        "romaji": "juuman",
        "meaning": "Cien mil (100,000)"
      },
      {
        "word": "万国",
        "furigana": "ばんこく",
        "romaji": "bankoku",
        "meaning": "Todas las naciones"
      }
    ],
    "exampleSentence": "カメラは二万円でした。",
    "exampleTranslation": "La cámara costó 20,000 yenes.",
    "notes": "Unidad base japonesa de 4 ceros (10,000)."
  },
  {
    "id": "k-en",
    "kanji": "円",
    "spanish": "Yen / Círculo",
    "english": "Yen / Circle",
    "onyomi": "エン",
    "kunyomi": "まる・い",
    "strokeCount": 4,
    "radicals": "冂 (frontera)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "円",
        "furigana": "えん",
        "romaji": "en",
        "meaning": "Yen (moneda japonesa)"
      },
      {
        "word": "百円",
        "furigana": "ひゃくえん",
        "romaji": "hyakuen",
        "meaning": "100 yenes"
      },
      {
        "word": "円高",
        "furigana": "えんだか",
        "romaji": "endaka",
        "meaning": "Yen fuerte"
      }
    ],
    "exampleSentence": "これは五百円です。",
    "exampleTranslation": "Esto cuesta 500 yenes.",
    "notes": "Moneda oficial japonesa."
  },
  {
    "id": "k-ji",
    "kanji": "時",
    "spanish": "Tiempo / Hora",
    "english": "Time / Hour",
    "onyomi": "ジ",
    "kunyomi": "とき",
    "strokeCount": 10,
    "radicals": "日 (sol/día)",
    "jlptLevel": "N5",
    "genkiLesson": 3,
    "compounds": [
      {
        "word": "何時",
        "furigana": "なんじ",
        "romaji": "nanji",
        "meaning": "¿Qué hora?"
      },
      {
        "word": "時々",
        "furigana": "ときどき",
        "romaji": "tokidoki",
        "meaning": "A veces"
      },
      {
        "word": "時間",
        "furigana": "じかん",
        "romaji": "jikan",
        "meaning": "Tiempo / horas"
      }
    ],
    "exampleSentence": "今何時ですか。",
    "exampleTranslation": "¿Qué hora es ahora?",
    "notes": "Radical del sol (日) + templo (寺)."
  },
  {
    "id": "k-nichi",
    "kanji": "日",
    "spanish": "Sol / Día",
    "english": "Sun / Day",
    "onyomi": "ニチ、ジツ",
    "kunyomi": "ひ、び、か",
    "strokeCount": 4,
    "radicals": "日 (sol/día)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "日本",
        "furigana": "にほん",
        "romaji": "nihon",
        "meaning": "Japón"
      },
      {
        "word": "日曜日",
        "furigana": "にちようび",
        "romaji": "nichiyoubi",
        "meaning": "Domingo"
      },
      {
        "word": "毎日",
        "furigana": "まいにち",
        "romaji": "mainichi",
        "meaning": "Todos los días"
      },
      {
        "word": "今日",
        "furigana": "きょう",
        "romaji": "kyou",
        "meaning": "Hoy"
      }
    ],
    "exampleSentence": "日曜日、友達と映画を見ました。",
    "exampleTranslation": "El domingo vi una película con un amigo.",
    "notes": "El kanji del Sol Naciente. Base de Nihon."
  },
  {
    "id": "k-hon",
    "kanji": "本",
    "spanish": "Libro / Origen",
    "english": "Book / Origin",
    "onyomi": "ホン",
    "kunyomi": "もと",
    "strokeCount": 5,
    "radicals": "木 (árbol)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "本",
        "furigana": "ほん",
        "romaji": "hon",
        "meaning": "Libro"
      },
      {
        "word": "日本語",
        "furigana": "にほんご",
        "romaji": "nihongo",
        "meaning": "Idioma japonés"
      },
      {
        "word": "日本人",
        "furigana": "にほんじん",
        "romaji": "nihonjin",
        "meaning": "Persona japonesa"
      },
      {
        "word": "本屋",
        "furigana": "ほんや",
        "romaji": "hon'ya",
        "meaning": "Librería"
      }
    ],
    "exampleSentence": "図書館で日本の本を読みました。",
    "exampleTranslation": "Leí un libro japonés en la biblioteca.",
    "notes": "Árbol (木) con una línea en la raíz."
  },
  {
    "id": "k-hito",
    "kanji": "人",
    "spanish": "Persona / Ser humano",
    "english": "Person",
    "onyomi": "ジン、ニン",
    "kunyomi": "ひと",
    "strokeCount": 2,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "日本人",
        "furigana": "にほんじん",
        "romaji": "nihonjin",
        "meaning": "Japonés"
      },
      {
        "word": "外国人",
        "furigana": "がいこくじん",
        "romaji": "gaikokujin",
        "meaning": "Extranjero"
      },
      {
        "word": "大人",
        "furigana": "おとな",
        "romaji": "otona",
        "meaning": "Adulto"
      },
      {
        "word": "人々",
        "furigana": "ひとびと",
        "romaji": "hitobito",
        "meaning": "Personas / gente"
      }
    ],
    "exampleSentence": "メアリーさんはアメリカ人です。",
    "exampleTranslation": "Mary es estadounidense.",
    "notes": "Dos trazos que se apoyan mutuamente como personas."
  },
  {
    "id": "k-tsuki",
    "kanji": "月",
    "spanish": "Luna / Mes",
    "english": "Moon / Month",
    "onyomi": "ゲツ、ガツ",
    "kunyomi": "つき",
    "strokeCount": 4,
    "radicals": "月 (luna)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "月曜日",
        "furigana": "げつようび",
        "romaji": "getsuyoubi",
        "meaning": "Lunes"
      },
      {
        "word": "今月",
        "furigana": "こんげつ",
        "romaji": "kongetsu",
        "meaning": "Este mes"
      },
      {
        "word": "来月",
        "furigana": "らいげつ",
        "romaji": "raigetsu",
        "meaning": "El próximo mes"
      },
      {
        "word": "一月",
        "furigana": "いちがつ",
        "romaji": "ichigatsu",
        "meaning": "Enero"
      }
    ],
    "exampleSentence": "今夜は月が綺麗ですね。",
    "exampleTranslation": "La luna está hermosa esta noche.",
    "notes": "Representa la luna creciente con nubes."
  },
  {
    "id": "k-hi",
    "kanji": "火",
    "spanish": "Fuego",
    "english": "Fire",
    "onyomi": "カ",
    "kunyomi": "ひ、ほ",
    "strokeCount": 4,
    "radicals": "火 (fuego)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "火曜日",
        "furigana": "かようび",
        "romaji": "kayoubi",
        "meaning": "Martes"
      },
      {
        "word": "火事",
        "furigana": "かじ",
        "romaji": "kaji",
        "meaning": "Incendio"
      },
      {
        "word": "花火",
        "furigana": "はなび",
        "romaji": "hanabi",
        "meaning": "Fuegos artificiales"
      }
    ],
    "exampleSentence": "火曜日にテストがあります。",
    "exampleTranslation": "El martes hay un examen.",
    "notes": "Llamas subiendo al aire."
  },
  {
    "id": "k-mizu",
    "kanji": "水",
    "spanish": "Agua",
    "english": "Water",
    "onyomi": "スイ",
    "kunyomi": "みず",
    "strokeCount": 4,
    "radicals": "水 (agua)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "水曜日",
        "furigana": "すいようび",
        "romaji": "suiyoubi",
        "meaning": "Miércoles"
      },
      {
        "word": "お水",
        "furigana": "おみず",
        "romaji": "omizu",
        "meaning": "Agua (cortés)"
      },
      {
        "word": "水泳",
        "furigana": "すいえい",
        "romaji": "suiei",
        "meaning": "Natación"
      }
    ],
    "exampleSentence": "冷たい水を飲みました。",
    "exampleTranslation": "Bebí agua fría.",
    "notes": "Representa gotas fluyendo en un río."
  },
  {
    "id": "k-ki",
    "kanji": "木",
    "spanish": "Árbol / Madera",
    "english": "Tree / Wood",
    "onyomi": "モク、ボク",
    "kunyomi": "き、こ",
    "strokeCount": 4,
    "radicals": "木 (árbol)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "木曜日",
        "furigana": "もくようび",
        "romaji": "mokuyoubi",
        "meaning": "Jueves"
      },
      {
        "word": "大木",
        "furigana": "たいぼく",
        "romaji": "taiboku",
        "meaning": "Árbol grande"
      }
    ],
    "exampleSentence": "公園に大きな木があります。",
    "exampleTranslation": "Hay un árbol grande en el parque.",
    "notes": "Tronco con ramas y raíces."
  },
  {
    "id": "k-kin",
    "kanji": "金",
    "spanish": "Oro / Dinero",
    "english": "Gold / Money",
    "onyomi": "キン、コン",
    "kunyomi": "かね、かな",
    "strokeCount": 8,
    "radicals": "金 (oro/metal)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "金曜日",
        "furigana": "きんようび",
        "romaji": "kin'youbi",
        "meaning": "Viernes"
      },
      {
        "word": "お金",
        "furigana": "おかね",
        "romaji": "okane",
        "meaning": "Dinero"
      },
      {
        "word": "金持ち",
        "furigana": "かねもち",
        "romaji": "kanemochi",
        "meaning": "Persona rica"
      }
    ],
    "exampleSentence": "金曜日の夜、パーティーに行きます。",
    "exampleTranslation": "El viernes por la noche iré a una fiesta.",
    "notes": "Minerales brillantes enterrados bajo tierra."
  },
  {
    "id": "k-tsuchi",
    "kanji": "土",
    "spanish": "Tierra / Suelo",
    "english": "Earth / Soil",
    "onyomi": "ド、ト",
    "kunyomi": "つち",
    "strokeCount": 3,
    "radicals": "土 (tierra)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "土曜日",
        "furigana": "どようび",
        "romaji": "doyoubi",
        "meaning": "Sábado"
      },
      {
        "word": "土地",
        "furigana": "とち",
        "romaji": "tochi",
        "meaning": "Terreno / tierra"
      }
    ],
    "exampleSentence": "土曜日にテニスをしませんか。",
    "exampleTranslation": "¿Jugamos tenis el sábado?",
    "notes": "Brote saliendo de la tierra fértil."
  },
  {
    "id": "k-you-youbi",
    "kanji": "曜",
    "spanish": "Día de la semana",
    "english": "Day of week",
    "onyomi": "ヨウ",
    "kunyomi": "",
    "strokeCount": 18,
    "radicals": "日 (sol)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "曜日",
        "furigana": "ようび",
        "romaji": "youbi",
        "meaning": "Día de la semana"
      },
      {
        "word": "何曜日",
        "furigana": "なんようび",
        "romaji": "nanyoubi",
        "meaning": "¿Qué día de la semana?"
      }
    ],
    "exampleSentence": "今日は何曜日ですか。",
    "exampleTranslation": "¿Qué día de la semana es hoy?",
    "notes": "Sol (日) + aves brillantes bajo la luz del cielo."
  },
  {
    "id": "k-ue",
    "kanji": "上",
    "spanish": "Arriba / Sobre",
    "english": "Above / Up",
    "onyomi": "ジョウ、ショウ",
    "kunyomi": "うえ、あ・がる、のぼ・る",
    "strokeCount": 3,
    "radicals": "一 (uno)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "机の上",
        "furigana": "つくえのうえ",
        "romaji": "tsukue no ue",
        "meaning": "Sobre la mesa"
      },
      {
        "word": "上手",
        "furigana": "じょうず",
        "romaji": "jouzu",
        "meaning": "Habilidoso / Bueno para algo"
      }
    ],
    "exampleSentence": "机の上にペンがあります。",
    "exampleTranslation": "Hay un bolígrafo sobre la mesa.",
    "notes": "Indica algo ubicado por encima de una línea de referencia."
  },
  {
    "id": "k-shita",
    "kanji": "下",
    "spanish": "Abajo / Debajo",
    "english": "Below / Under",
    "onyomi": "カ、ゲ",
    "kunyomi": "した、さ・がる、くだ・る",
    "strokeCount": 3,
    "radicals": "一 (uno)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "机の下",
        "furigana": "つくえのした",
        "romaji": "tsukue no shita",
        "meaning": "Debajo de la mesa"
      },
      {
        "word": "下手",
        "furigana": "へた",
        "romaji": "heta",
        "meaning": "Torpe / Malo para algo"
      },
      {
        "word": "地下鉄",
        "furigana": "ちかてつ",
        "romaji": "chikatetsu",
        "meaning": "Metro subterráneo"
      }
    ],
    "exampleSentence": "椅子の下に猫がいます。",
    "exampleTranslation": "Hay un gato debajo de la silla.",
    "notes": "Indica algo ubicado por debajo de la línea."
  },
  {
    "id": "k-naka",
    "kanji": "中",
    "spanish": "Dentro / En medio",
    "english": "Inside / Middle",
    "onyomi": "チュウ、ジュウ",
    "kunyomi": "なか",
    "strokeCount": 4,
    "radicals": "丨 (línea vertical)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "かばんの中",
        "furigana": "かばんのなか",
        "romaji": "kaban no naka",
        "meaning": "Dentro de la mochila"
      },
      {
        "word": "中国",
        "furigana": "ちゅうごく",
        "romaji": "chuugoku",
        "meaning": "China"
      },
      {
        "word": "一日中",
        "furigana": "いちにちじゅう",
        "romaji": "ichinichijuu",
        "meaning": "Todo el día"
      }
    ],
    "exampleSentence": "部屋の中に誰がいますか。",
    "exampleTranslation": "¿Quién está dentro de la habitación?",
    "notes": "Una línea atravesando el centro exacto de una caja."
  },
  {
    "id": "k-han",
    "kanji": "半",
    "spanish": "Mitad / Y media",
    "english": "Half",
    "onyomi": "ハン",
    "kunyomi": "なか・ば",
    "strokeCount": 5,
    "radicals": "十 (diez)",
    "jlptLevel": "N5",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "二時半",
        "furigana": "にじはん",
        "romaji": "nijihan",
        "meaning": "Las dos y media"
      },
      {
        "word": "半分",
        "furigana": "はんぶん",
        "romaji": "hanbun",
        "meaning": "La mitad"
      },
      {
        "word": "半年",
        "furigana": "はんとし",
        "romaji": "hantoshi",
        "meaning": "Medio año"
      }
    ],
    "exampleSentence": "三時半に会いましょう。",
    "exampleTranslation": "Encontrémonos a las tres y media.",
    "notes": "Indica la mitad en las horas (〜時半)."
  },
  {
    "id": "k-yama",
    "kanji": "山",
    "spanish": "Montaña",
    "english": "Mountain",
    "onyomi": "サン、ザン",
    "kunyomi": "やま",
    "strokeCount": 3,
    "radicals": "山 (montaña)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "富士山",
        "furigana": "ふじさん",
        "romaji": "fujisan",
        "meaning": "Monte Fuji"
      },
      {
        "word": "山下さん",
        "furigana": "やましたさん",
        "romaji": "yamashita-san",
        "meaning": "Sr./Sra. Yamashita"
      },
      {
        "word": "火山",
        "furigana": "かざん",
        "romaji": "kazan",
        "meaning": "Volcán"
      }
    ],
    "exampleSentence": "夏に山に登りました。",
    "exampleTranslation": "Escalé una montaña en verano.",
    "notes": "Tres picos de montaña."
  },
  {
    "id": "k-kawa",
    "kanji": "川",
    "spanish": "Río",
    "english": "River",
    "onyomi": "セン",
    "kunyomi": "かわ、がわ",
    "strokeCount": 3,
    "radicals": "川 (río)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "川",
        "furigana": "かわ",
        "romaji": "kawa",
        "meaning": "Río"
      },
      {
        "word": "ナイル川",
        "furigana": "ナイルがわ",
        "romaji": "nairu-gawa",
        "meaning": "Río Nilo"
      }
    ],
    "exampleSentence": "川の近くを散歩しました。",
    "exampleTranslation": "Paseé cerca del río.",
    "notes": "Tres corrientes de agua fluyendo en paralelo."
  },
  {
    "id": "k-ten",
    "kanji": "天",
    "spanish": "Cielo",
    "english": "Heaven / Sky",
    "onyomi": "テン",
    "kunyomi": "あまつ、あめ",
    "strokeCount": 4,
    "radicals": "大 (grande)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "天気",
        "furigana": "てんき",
        "romaji": "tenki",
        "meaning": "Clima / Tiempo meteorológico"
      },
      {
        "word": "天国",
        "furigana": "てんごく",
        "romaji": "tengoku",
        "meaning": "Paraíso / Cielo"
      },
      {
        "word": "天才",
        "furigana": "てんさい",
        "romaji": "tensai",
        "meaning": "Genio"
      }
    ],
    "exampleSentence": "今日の天気はとてもいいです。",
    "exampleTranslation": "El clima de hoy está muy bueno.",
    "notes": "Una persona grande (大) con el firmamento por encima."
  },
  {
    "id": "k-ki-genki",
    "kanji": "気",
    "spanish": "Espíritu / Energía / Aire",
    "english": "Spirit / Air",
    "onyomi": "キ、ケ",
    "kunyomi": "いき",
    "strokeCount": 6,
    "radicals": "气 (vapor)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "元気",
        "furigana": "げんき",
        "romaji": "genki",
        "meaning": "Con energía / Sano"
      },
      {
        "word": "天気",
        "furigana": "てんき",
        "romaji": "tenki",
        "meaning": "Clima"
      },
      {
        "word": "気持ち",
        "furigana": "きもち",
        "romaji": "kimochi",
        "meaning": "Sentimiento / Estado de ánimo"
      },
      {
        "word": "人気",
        "furigana": "にんき",
        "romaji": "ninki",
        "meaning": "Popularidad"
      }
    ],
    "exampleSentence": "お元気ですか。ー はい、元気です。",
    "exampleTranslation": "¿Cómo estás? - Sí, estoy bien.",
    "notes": "Vapor de arroz subiendo; energía vital (Ki)."
  },
  {
    "id": "k-ima",
    "kanji": "今",
    "spanish": "Ahora",
    "english": "Now",
    "onyomi": "コン、キン",
    "kunyomi": "いま",
    "strokeCount": 4,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "今",
        "furigana": "いま",
        "romaji": "ima",
        "meaning": "Ahora"
      },
      {
        "word": "今日",
        "furigana": "きょう",
        "romaji": "kyou",
        "meaning": "Hoy"
      },
      {
        "word": "今週",
        "furigana": "こんしゅう",
        "romaji": "konshuu",
        "meaning": "Esta semana"
      },
      {
        "word": "今年",
        "furigana": "ことし",
        "romaji": "kotoshi",
        "meaning": "Este año"
      }
    ],
    "exampleSentence": "今、日本語を勉強しています。",
    "exampleTranslation": "Ahora estoy estudiando japonés.",
    "notes": "Un techo que encierra el momento presente."
  },
  {
    "id": "k-ta",
    "kanji": "田",
    "spanish": "Campo de arroz",
    "english": "Rice field",
    "onyomi": "デン",
    "kunyomi": "た、だ",
    "strokeCount": 5,
    "radicals": "田 (campo)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "田中さん",
        "furigana": "たなかさん",
        "romaji": "tanaka-san",
        "meaning": "Sr./Sra. Tanaka"
      },
      {
        "word": "山田さん",
        "furigana": "やまださん",
        "romaji": "yamada-san",
        "meaning": "Sr./Sra. Yamada"
      },
      {
        "word": "水田",
        "furigana": "すいでん",
        "romaji": "suiden",
        "meaning": "Arrozal inundado"
      }
    ],
    "exampleSentence": "田中さんは親切な人です。",
    "exampleTranslation": "El Sr. Tanaka es una persona amable.",
    "notes": "Parcela de arroz dividida en cuatro secciones."
  },
  {
    "id": "k-onna",
    "kanji": "女",
    "spanish": "Mujer / Femenino",
    "english": "Woman",
    "onyomi": "ジョ、ニョ",
    "kunyomi": "おんな、め",
    "strokeCount": 3,
    "radicals": "女 (mujer)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "女の人",
        "furigana": "おんなのひと",
        "romaji": "onna no hito",
        "meaning": "Mujer"
      },
      {
        "word": "女の子",
        "furigana": "おんなのこ",
        "romaji": "onna no ko",
        "meaning": "Niña"
      },
      {
        "word": "彼女",
        "furigana": "かのじょ",
        "romaji": "kanojo",
        "meaning": "Ella / Novia"
      }
    ],
    "exampleSentence": "あの女の人は誰ですか。",
    "exampleTranslation": "¿Quién es aquella mujer?",
    "notes": "Silueta de una mujer sentada elegantemente."
  },
  {
    "id": "k-otoko",
    "kanji": "男",
    "spanish": "Hombre / Masculino",
    "english": "Man",
    "onyomi": "ダン、ナン",
    "kunyomi": "おとこ",
    "strokeCount": 7,
    "radicals": "田 (campo)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "男の人",
        "furigana": "おとこのひと",
        "romaji": "otoko no hito",
        "meaning": "Hombre"
      },
      {
        "word": "男の子",
        "furigana": "おとこのこ",
        "romaji": "otoko no ko",
        "meaning": "Niño"
      },
      {
        "word": "男子学生",
        "furigana": "だんしがくせい",
        "romaji": "danshigakusei",
        "meaning": "Estudiante varón"
      }
    ],
    "exampleSentence": "男の子たちがサッカーをしています。",
    "exampleTranslation": "Los niños están jugando fútbol.",
    "notes": "Fuerza (力) trabajando en el campo de arroz (田)."
  },
  {
    "id": "k-mi",
    "kanji": "見",
    "spanish": "Ver / Mirar",
    "english": "See / Look",
    "onyomi": "ケン",
    "kunyomi": "み・る、み・せる",
    "strokeCount": 7,
    "radicals": "見 (ver)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "見る",
        "furigana": "みる",
        "romaji": "miru",
        "meaning": "Ver / Mirar"
      },
      {
        "word": "花見",
        "furigana": "はなみ",
        "romaji": "hanami",
        "meaning": "Ver los cerezos"
      },
      {
        "word": "意見",
        "furigana": "いけん",
        "romaji": "iken",
        "meaning": "Opinión"
      }
    ],
    "exampleSentence": "昨日、面白い映画を見ました。",
    "exampleTranslation": "Ayer vi una película interesante.",
    "notes": "Un ojo grande (目) sobre piernas humanas."
  },
  {
    "id": "k-i-iku",
    "kanji": "行",
    "spanish": "Ir / Realizar",
    "english": "Go / Conduct",
    "onyomi": "コウ、ギョウ",
    "kunyomi": "い・く、おこな・う",
    "strokeCount": 6,
    "radicals": "行 (ir)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "行く",
        "furigana": "いく",
        "romaji": "iku",
        "meaning": "Ir"
      },
      {
        "word": "旅行",
        "furigana": "りょこう",
        "romaji": "ryokou",
        "meaning": "Viaje"
      },
      {
        "word": "銀行",
        "furigana": "ぎんこう",
        "romaji": "ginkou",
        "meaning": "Banco"
      }
    ],
    "exampleSentence": "明日、図書館へ行きます。",
    "exampleTranslation": "Mañana iré a la biblioteca.",
    "notes": "Una encrucijada donde los caminos se cruzan."
  },
  {
    "id": "k-tabe",
    "kanji": "食",
    "spanish": "Comer / Alimento",
    "english": "Eat / Food",
    "onyomi": "ショク",
    "kunyomi": "た・べる",
    "strokeCount": 9,
    "radicals": "食 (comida)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "食べる",
        "furigana": "たべる",
        "romaji": "taberu",
        "meaning": "Comer"
      },
      {
        "word": "食べ物",
        "furigana": "たべもの",
        "romaji": "tabemono",
        "meaning": "Comida"
      },
      {
        "word": "朝食",
        "furigana": "ちょうしょく",
        "romaji": "choushoku",
        "meaning": "Desayuno"
      }
    ],
    "exampleSentence": "毎日七時に朝ご飯を食べます。",
    "exampleTranslation": "Todos los días desayuno a las 7:00.",
    "notes": "Un plato con tapa cubriendo la comida."
  },
  {
    "id": "k-nomi",
    "kanji": "飲",
    "spanish": "Beber / Bebida",
    "english": "Drink",
    "onyomi": "イン",
    "kunyomi": "の・む",
    "strokeCount": 12,
    "radicals": "食 (comida)",
    "jlptLevel": "N5",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "飲む",
        "furigana": "のむ",
        "romaji": "nomu",
        "meaning": "Beber"
      },
      {
        "word": "飲み物",
        "furigana": "のみもの",
        "romaji": "nomimono",
        "meaning": "Bebida"
      },
      {
        "word": "飲食店",
        "furigana": "いんしょくてん",
        "romaji": "inshokuten",
        "meaning": "Restaurante / Bar"
      }
    ],
    "exampleSentence": "カフェでコーヒーを飲みました。",
    "exampleTranslation": "Bebí café en la cafetería.",
    "notes": "Comida (食) + boca abierta (欠)."
  },
  {
    "id": "k-higashi",
    "kanji": "東",
    "spanish": "Este / Oriente",
    "english": "East",
    "onyomi": "トウ",
    "kunyomi": "ひがし",
    "strokeCount": 8,
    "radicals": "木 (árbol)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "東京",
        "furigana": "とうきょう",
        "romaji": "toukyou",
        "meaning": "Tokio (Capital del Este)"
      },
      {
        "word": "東口",
        "furigana": "ひがしぐち",
        "romaji": "higashiguchi",
        "meaning": "Salida Este"
      },
      {
        "word": "中東",
        "furigana": "ちゅうとう",
        "romaji": "chuutou",
        "meaning": "Medio Oriente"
      }
    ],
    "exampleSentence": "東京は日本の首都です。",
    "exampleTranslation": "Tokio es la capital de Japón.",
    "notes": "El sol (日) saliendo detrás de un árbol (木)."
  },
  {
    "id": "k-nishi",
    "kanji": "西",
    "spanish": "Oeste / Occidente",
    "english": "West",
    "onyomi": "セイ、サイ",
    "kunyomi": "にし",
    "strokeCount": 6,
    "radicals": "西 (oeste)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "西口",
        "furigana": "にしぐち",
        "romaji": "nishiguchi",
        "meaning": "Salida Oeste"
      },
      {
        "word": "西洋",
        "furigana": "せいよう",
        "romaji": "seiyou",
        "meaning": "Occidente"
      }
    ],
    "exampleSentence": "駅の西口で会いましょう。",
    "exampleTranslation": "Encontrémonos en la salida oeste de la estación.",
    "notes": "Un pájaro posado en su nido al ponerse el sol por el oeste."
  },
  {
    "id": "k-minami",
    "kanji": "南",
    "spanish": "Sur",
    "english": "South",
    "onyomi": "ナン",
    "kunyomi": "みなみ",
    "strokeCount": 9,
    "radicals": "十 (diez)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "南口",
        "furigana": "みなみぐち",
        "romaji": "minamiguchi",
        "meaning": "Salida Sur"
      },
      {
        "word": "南米",
        "furigana": "なんべい",
        "romaji": "nanbei",
        "meaning": "Sudamérica"
      },
      {
        "word": "東南アジア",
        "furigana": "とうなんアジア",
        "romaji": "tounan-ajia",
        "meaning": "Sudeste asiático"
      }
    ],
    "exampleSentence": "南の島へ旅行に行きました。",
    "exampleTranslation": "Fui de viaje a una isla del sur.",
    "notes": "Vegetación cálida y exuberante del sur."
  },
  {
    "id": "k-kita",
    "kanji": "北",
    "spanish": "Norte",
    "english": "North",
    "onyomi": "ホク、ホッ",
    "kunyomi": "きた",
    "strokeCount": 5,
    "radicals": "匕 (cuchara)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "北口",
        "furigana": "きたぐち",
        "romaji": "kitaguchi",
        "meaning": "Salida Norte"
      },
      {
        "word": "北海道",
        "furigana": "ほっかいどう",
        "romaji": "hokkaidou",
        "meaning": "Hokkaido (Isla del Norte)"
      },
      {
        "word": "東北",
        "furigana": "とうほく",
        "romaji": "touhoku",
        "meaning": "Región de Tohoku"
      }
    ],
    "exampleSentence": "北海道の冬は寒いです。",
    "exampleTranslation": "El invierno en Hokkaido es frío.",
    "notes": "Dos personas dándose la espalda para protegerse del viento helado del norte."
  },
  {
    "id": "k-kuchi",
    "kanji": "口",
    "spanish": "Boca / Entrada o Salida",
    "english": "Mouth",
    "onyomi": "コウ、ク",
    "kunyomi": "くち、ぐち",
    "strokeCount": 3,
    "radicals": "口 (boca)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "入口",
        "furigana": "いりぐち",
        "romaji": "iriguchi",
        "meaning": "Entrada"
      },
      {
        "word": "出口",
        "furigana": "でぐち",
        "romaji": "deguchi",
        "meaning": "Salida"
      },
      {
        "word": "改札口",
        "furigana": "かいさつぐち",
        "romaji": "kaisatsuguchi",
        "meaning": "Torniquetes de estación"
      },
      {
        "word": "人口",
        "furigana": "じんこう",
        "romaji": "jinkou",
        "meaning": "Población (número de bocas)"
      }
    ],
    "exampleSentence": "駅の出口はどこですか。",
    "exampleTranslation": "¿Dónde está la salida de la estación?",
    "notes": "Forma cuadrada de una boca abierta."
  },
  {
    "id": "k-de-deru",
    "kanji": "出",
    "spanish": "Salir / Sacar",
    "english": "Exit / Leave",
    "onyomi": "シュツ、シュッ",
    "kunyomi": "で・る、だ・す",
    "strokeCount": 5,
    "radicals": "凵 (recipiente)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "出る",
        "furigana": "でる",
        "romaji": "deru",
        "meaning": "Salir"
      },
      {
        "word": "出口",
        "furigana": "でぐち",
        "romaji": "deguchi",
        "meaning": "Salida"
      },
      {
        "word": "出す",
        "furigana": "だす",
        "romaji": "dasu",
        "meaning": "Sacar / Entregar"
      },
      {
        "word": "出席",
        "furigana": "しゅっせき",
        "romaji": "shusseki",
        "meaning": "Asistencia"
      }
    ],
    "exampleSentence": "毎朝八時にうちを出ます。",
    "exampleTranslation": "Salgo de casa a las 8:00 todas las mañanas.",
    "notes": "Brotes saliendo uno encima de otro."
  },
  {
    "id": "k-migi",
    "kanji": "右",
    "spanish": "Derecha",
    "english": "Right",
    "onyomi": "ウ、ユウ",
    "kunyomi": "みぎ",
    "strokeCount": 5,
    "radicals": "口 (boca)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "右",
        "furigana": "みぎ",
        "romaji": "migi",
        "meaning": "Derecha"
      },
      {
        "word": "右手",
        "furigana": "みぎて",
        "romaji": "migite",
        "meaning": "Mano derecha"
      },
      {
        "word": "右側",
        "furigana": "みぎがわ",
        "romaji": "migigawa",
        "meaning": "Lado derecho"
      }
    ],
    "exampleSentence": "次の角を右に曲がってください。",
    "exampleTranslation": "Gire a la derecha en la próxima esquina.",
    "notes": "La mano (𠂇) que lleva la comida a la boca (口)."
  },
  {
    "id": "k-hidari",
    "kanji": "左",
    "spanish": "Izquierda",
    "english": "Left",
    "onyomi": "サ",
    "kunyomi": "ひだり",
    "strokeCount": 5,
    "radicals": "工 (trabajo)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "左",
        "furigana": "ひだり",
        "romaji": "hidari",
        "meaning": "Izquierda"
      },
      {
        "word": "左手",
        "furigana": "ひだりて",
        "romaji": "hidarite",
        "meaning": "Mano izquierda"
      },
      {
        "word": "左右",
        "furigana": "さゆう",
        "romaji": "sayuu",
        "meaning": "Izquierda y derecha"
      }
    ],
    "exampleSentence": "郵便局は銀行の左にあります。",
    "exampleTranslation": "La oficina de correos está a la izquierda del banco.",
    "notes": "La mano (𠂇) que sostiene una regla o herramienta de carpintero (工)."
  },
  {
    "id": "k-fun-bun",
    "kanji": "分",
    "spanish": "Minuto / Parte / Dividir",
    "english": "Minute / Part",
    "onyomi": "フン、プン、ブン",
    "kunyomi": "わ・かる、わ・ける",
    "strokeCount": 4,
    "radicals": "刀 (espada)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "五分",
        "furigana": "ごふん",
        "romaji": "gofun",
        "meaning": "Cinco minutos"
      },
      {
        "word": "十分",
        "furigana": "じゅっぷん",
        "romaji": "juppun",
        "meaning": "Diez minutos"
      },
      {
        "word": "分かる",
        "furigana": "わかる",
        "romaji": "wakaru",
        "meaning": "Entender"
      },
      {
        "word": "自分",
        "furigana": "じぶん",
        "romaji": "jibun",
        "meaning": "Uno mismo"
      }
    ],
    "exampleSentence": "日本語が少し分かります。",
    "exampleTranslation": "Entiendo un poco de japonés.",
    "notes": "Una espada (刀) que divide algo en dos partes (八)."
  },
  {
    "id": "k-sen-saki",
    "kanji": "先",
    "spanish": "Antes / Adelante",
    "english": "Before / Ahead",
    "onyomi": "セン",
    "kunyomi": "さき",
    "strokeCount": 6,
    "radicals": "儿 (piernas)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "先生",
        "furigana": "せんせい",
        "romaji": "sensei",
        "meaning": "Profesor (nacido antes)"
      },
      {
        "word": "先週",
        "furigana": "せんしゅう",
        "romaji": "senshuu",
        "meaning": "La semana pasada"
      },
      {
        "word": "先月",
        "furigana": "せんげつ",
        "romaji": "sengetsu",
        "meaning": "El mes pasado"
      }
    ],
    "exampleSentence": "先週、京都へ行きました。",
    "exampleTranslation": "La semana pasada fui a Kioto.",
    "notes": "Alguien que avanza antes que los demás."
  },
  {
    "id": "k-sei",
    "kanji": "生",
    "spanish": "Vida / Nacer",
    "english": "Life / Birth",
    "onyomi": "セイ、ショウ",
    "kunyomi": "い・きる、う・まれる、なま",
    "strokeCount": 5,
    "radicals": "生 (vida)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "学生",
        "furigana": "がくせい",
        "romaji": "gakusei",
        "meaning": "Estudiante"
      },
      {
        "word": "先生",
        "furigana": "せんせい",
        "romaji": "sensei",
        "meaning": "Profesor"
      },
      {
        "word": "生まれる",
        "furigana": "うまれる",
        "romaji": "umareru",
        "meaning": "Nacer"
      }
    ],
    "exampleSentence": "私はメキシコで生まれました。",
    "exampleTranslation": "Nací en México.",
    "notes": "Una planta germinando de la tierra."
  },
  {
    "id": "k-dai-oo",
    "kanji": "大",
    "spanish": "Grande",
    "english": "Big",
    "onyomi": "ダイ、タイ",
    "kunyomi": "おお・きい",
    "strokeCount": 3,
    "radicals": "大 (grande)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "大きい",
        "furigana": "おおきい",
        "romaji": "ookii",
        "meaning": "Grande"
      },
      {
        "word": "大学",
        "furigana": "だいがく",
        "romaji": "daigaku",
        "meaning": "Universidad"
      },
      {
        "word": "大変",
        "furigana": "たいへん",
        "romaji": "taihen",
        "meaning": "Grave / Muy difícil"
      }
    ],
    "exampleSentence": "東京大学は大きいです。",
    "exampleTranslation": "La Universidad de Tokio es grande.",
    "notes": "Una persona con brazos y piernas abiertos en señal de grandeza."
  },
  {
    "id": "k-gaku",
    "kanji": "学",
    "spanish": "Estudiar / Aprender",
    "english": "Study",
    "onyomi": "ガク、ガッ",
    "kunyomi": "まな・ぶ",
    "strokeCount": 8,
    "radicals": "子 (niño)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "学生",
        "furigana": "がくせい",
        "romaji": "gakusei",
        "meaning": "Estudiante"
      },
      {
        "word": "学校",
        "furigana": "がっこう",
        "romaji": "gakkou",
        "meaning": "Escuela"
      },
      {
        "word": "大学院",
        "furigana": "だいがくいん",
        "romaji": "daigakuin",
        "meaning": "Posgrado"
      }
    ],
    "exampleSentence": "日本語学校で勉強します。",
    "exampleTranslation": "Estudio en una escuela de japonés.",
    "notes": "Un niño (子) aprendiendo bajo un techo escolar."
  },
  {
    "id": "k-gai-soto",
    "kanji": "外",
    "spanish": "Fuera / Exterior",
    "english": "Outside / Foreign",
    "onyomi": "ガイ、ゲ",
    "kunyomi": "そと、ほか、はず・す",
    "strokeCount": 5,
    "radicals": "夕 (tarde)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "外国",
        "furigana": "がいこく",
        "romaji": "gaikoku",
        "meaning": "País extranjero"
      },
      {
        "word": "外国人",
        "furigana": "がいこくじん",
        "romaji": "gaikokujin",
        "meaning": "Persona extranjera"
      },
      {
        "word": "海外",
        "furigana": "かいがい",
        "romaji": "kaigai",
        "meaning": "En el extranjero / Ultramar"
      }
    ],
    "exampleSentence": "将来、外国で働きたいです。",
    "exampleTranslation": "En el futuro quiero trabajar en el extranjero.",
    "notes": "Noche (夕) y adivinación; algo fuera de lo común."
  },
  {
    "id": "k-koku-kuni",
    "kanji": "国",
    "spanish": "País / Nación",
    "english": "Country",
    "onyomi": "コク、ゴク",
    "kunyomi": "くに",
    "strokeCount": 8,
    "radicals": "囗 (frontera/recinto)",
    "jlptLevel": "N5",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "国",
        "furigana": "くに",
        "romaji": "kuni",
        "meaning": "País"
      },
      {
        "word": "中国",
        "furigana": "ちゅうごく",
        "romaji": "chuugoku",
        "meaning": "China"
      },
      {
        "word": "韓国",
        "furigana": "かんこく",
        "romaji": "kankoku",
        "meaning": "Corea del Sur"
      },
      {
        "word": "国際",
        "furigana": "こくさい",
        "romaji": "kokusai",
        "meaning": "Internacional"
      }
    ],
    "exampleSentence": "お国はどちらですか。",
    "exampleTranslation": "¿De qué país es usted?",
    "notes": "Una joya (玉) protegida dentro de las fronteras de un país (囗)."
  },
  {
    "id": "k-kyou",
    "kanji": "京",
    "spanish": "Capital",
    "english": "Capital",
    "onyomi": "キョウ、ケイ",
    "kunyomi": "みやこ",
    "strokeCount": 8,
    "radicals": "亠 (tapa)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "東京",
        "furigana": "とうきょう",
        "romaji": "toukyou",
        "meaning": "Tokio"
      },
      {
        "word": "京都",
        "furigana": "きょうと",
        "romaji": "kyouto",
        "meaning": "Kioto"
      },
      {
        "word": "上京",
        "furigana": "じょうきょう",
        "romaji": "joukyou",
        "meaning": "Ir a la capital (Tokio)"
      }
    ],
    "exampleSentence": "京都は古いお寺がたくさんあります。",
    "exampleTranslation": "En Kioto hay muchos templos antiguos.",
    "notes": "Una gran puerta torii o torre de palacio en la capital."
  },
  {
    "id": "k-ko",
    "kanji": "子",
    "spanish": "Niño / Hijo",
    "english": "Child",
    "onyomi": "シ、ス",
    "kunyomi": "こ",
    "strokeCount": 3,
    "radicals": "子 (niño)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "子ども",
        "furigana": "こども",
        "romaji": "kodomo",
        "meaning": "Niño(s)"
      },
      {
        "word": "女の子",
        "furigana": "おんなのこ",
        "romaji": "onna no ko",
        "meaning": "Niña"
      },
      {
        "word": "男の子",
        "furigana": "おとこのこ",
        "romaji": "otoko no ko",
        "meaning": "Niño"
      }
    ],
    "exampleSentence": "子どもたちが元気に遊んでいます。",
    "exampleTranslation": "Los niños están jugando alegremente.",
    "notes": "Un bebé en pañales con los brazos extendidos."
  },
  {
    "id": "k-shou-chii",
    "kanji": "小",
    "spanish": "Pequeño",
    "english": "Small",
    "onyomi": "ショウ",
    "kunyomi": "ちい・さい、こ、お",
    "strokeCount": 3,
    "radicals": "小 (pequeño)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "小さい",
        "furigana": "ちいさい",
        "romaji": "chiisai",
        "meaning": "Pequeño"
      },
      {
        "word": "小学校",
        "furigana": "しょうがっこう",
        "romaji": "shougakkou",
        "meaning": "Escuela primaria"
      },
      {
        "word": "小川",
        "furigana": "おがわ",
        "romaji": "ogawa",
        "meaning": "Riachuelo"
      }
    ],
    "exampleSentence": "小さい犬を飼っています。",
    "exampleTranslation": "Tengo un perro pequeño.",
    "notes": "Tres pequeñas gotas o granos de arena."
  },
  {
    "id": "k-kai-a",
    "kanji": "会",
    "spanish": "Reunión / Encontrarse",
    "english": "Meet / Society",
    "onyomi": "カイ、エ",
    "kunyomi": "あ・う",
    "strokeCount": 6,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "会う",
        "furigana": "あう",
        "romaji": "au",
        "meaning": "Encontrarse con alguien"
      },
      {
        "word": "会社",
        "furigana": "かいしゃ",
        "romaji": "kaisha",
        "meaning": "Empresa / Compañía"
      },
      {
        "word": "会話",
        "furigana": "かいわ",
        "romaji": "kaiwa",
        "meaning": "Conversación"
      }
    ],
    "exampleSentence": "明日、駅で友達に会います。",
    "exampleTranslation": "Mañana me encontraré con un amigo en la estación.",
    "notes": "Personas reunidas bajo un mismo techo."
  },
  {
    "id": "k-sha-ja",
    "kanji": "社",
    "spanish": "Compañía / Santuario",
    "english": "Company / Shrine",
    "onyomi": "シャ、ジャ",
    "kunyomi": "やしろ",
    "strokeCount": 7,
    "radicals": "示 (espíritu/altar)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "会社",
        "furigana": "かいしゃ",
        "romaji": "kaisha",
        "meaning": "Empresa"
      },
      {
        "word": "社員",
        "furigana": "しゃいん",
        "romaji": "shain",
        "meaning": "Empleado de empresa"
      },
      {
        "word": "神社",
        "furigana": "じんじゃ",
        "romaji": "jinja",
        "meaning": "Santuario sintoísta"
      },
      {
        "word": "社会",
        "furigana": "しゃかい",
        "romaji": "shakai",
        "meaning": "Sociedad"
      }
    ],
    "exampleSentence": "父は日本の会社で働いています。",
    "exampleTranslation": "Mi padre trabaja en una empresa japonesa.",
    "notes": "Altar (示) ante la tierra comunitaria (土)."
  },
  {
    "id": "k-chichi-fu",
    "kanji": "父",
    "spanish": "Padre",
    "english": "Father",
    "onyomi": "フ",
    "kunyomi": "ちち、とう",
    "strokeCount": 4,
    "radicals": "父 (padre)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "父",
        "furigana": "ちち",
        "romaji": "chichi",
        "meaning": "Mi padre (humilde)"
      },
      {
        "word": "お父さん",
        "furigana": "おとうさん",
        "romaji": "otousan",
        "meaning": "Padre (cortés)"
      },
      {
        "word": "祖父",
        "furigana": "そふ",
        "romaji": "sofu",
        "meaning": "Mi abuelo"
      }
    ],
    "exampleSentence": "父は高校の先生です。",
    "exampleTranslation": "Mi padre es maestro de preparatoria.",
    "notes": "La mano de un padre sosteniendo un báculo o hacha de autoridad."
  },
  {
    "id": "k-haha-bo",
    "kanji": "母",
    "spanish": "Madre",
    "english": "Mother",
    "onyomi": "ボ",
    "kunyomi": "はは、かあ",
    "strokeCount": 5,
    "radicals": "毋 (madre)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "母",
        "furigana": "はは",
        "romaji": "haha",
        "meaning": "Mi madre (humilde)"
      },
      {
        "word": "お母さん",
        "furigana": "おかあさん",
        "romaji": "okaasan",
        "meaning": "Madre (cortés)"
      },
      {
        "word": "祖母",
        "furigana": "そぼ",
        "romaji": "sobo",
        "meaning": "Mi abuela"
      }
    ],
    "exampleSentence": "母の手料理はとても美味しいです。",
    "exampleTranslation": "La comida casera de mi madre es deliciosa.",
    "notes": "Una madre amamantando con dos puntos representando sus pechos."
  },
  {
    "id": "k-kou-taka",
    "kanji": "高",
    "spanish": "Alto / Caro",
    "english": "High / Expensive",
    "onyomi": "コウ",
    "kunyomi": "たか・い",
    "strokeCount": 10,
    "radicals": "高 (alto)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "高い",
        "furigana": "たかい",
        "romaji": "takai",
        "meaning": "Alto / Caro"
      },
      {
        "word": "高校",
        "furigana": "こうこう",
        "romaji": "koukou",
        "meaning": "Escuela preparatoria"
      },
      {
        "word": "最高",
        "furigana": "さいこう",
        "romaji": "saikou",
        "meaning": "Lo mejor / Supremo"
      }
    ],
    "exampleSentence": "このカメラはとても高いです。",
    "exampleTranslation": "Esta cámara es muy cara.",
    "notes": "Una torre alta de vigilancia con tejado elevado."
  },
  {
    "id": "k-kou-school",
    "kanji": "校",
    "spanish": "Escuela",
    "english": "School",
    "onyomi": "コウ",
    "kunyomi": "",
    "strokeCount": 10,
    "radicals": "木 (árbol)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "学校",
        "furigana": "がっこう",
        "romaji": "gakkou",
        "meaning": "Escuela"
      },
      {
        "word": "高校生",
        "furigana": "こうこうせい",
        "romaji": "koukousei",
        "meaning": "Estudiante de preparatoria"
      },
      {
        "word": "校長",
        "furigana": "こうちょう",
        "romaji": "kouchou",
        "meaning": "Director escolar"
      }
    ],
    "exampleSentence": "毎朝歩いて学校に行きます。",
    "exampleTranslation": "Todas las mañanas voy caminando a la escuela.",
    "notes": "Edificio de madera (木) donde se congregan (交) los alumnos."
  },
  {
    "id": "k-mai",
    "kanji": "毎",
    "spanish": "Cada / Todos los",
    "english": "Every",
    "onyomi": "マイ",
    "kunyomi": "ごと",
    "strokeCount": 6,
    "radicals": "毋 (madre)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "毎日",
        "furigana": "まいにち",
        "romaji": "mainichi",
        "meaning": "Todos los días"
      },
      {
        "word": "毎週",
        "furigana": "まいしゅう",
        "romaji": "maishuu",
        "meaning": "Todas las semanas"
      },
      {
        "word": "毎月",
        "furigana": "まいつき / まいげつ",
        "romaji": "maitsuki",
        "meaning": "Todos los meses"
      },
      {
        "word": "毎年",
        "furigana": "まいとし / まいねん",
        "romaji": "maitoshi",
        "meaning": "Todos los años"
      }
    ],
    "exampleSentence": "毎朝六時にジョギングをします。",
    "exampleTranslation": "Hago footing todas las mañanas a las seis.",
    "notes": "Madre (母) que cuida a su familia cada día."
  },
  {
    "id": "k-go-language",
    "kanji": "語",
    "spanish": "Idioma / Palabra",
    "english": "Language / Word",
    "onyomi": "ゴ",
    "kunyomi": "かた・る",
    "strokeCount": 14,
    "radicals": "言 (palabra)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "日本語",
        "furigana": "にほんご",
        "romaji": "nihongo",
        "meaning": "Idioma japonés"
      },
      {
        "word": "英語",
        "furigana": "えいご",
        "romaji": "eigo",
        "meaning": "Idioma inglés"
      },
      {
        "word": "スペイン語",
        "furigana": "スペインご",
        "romaji": "supein-go",
        "meaning": "Idioma español"
      },
      {
        "word": "単語",
        "furigana": "たんご",
        "romaji": "tango",
        "meaning": "Vocabulario"
      }
    ],
    "exampleSentence": "大学で日本語を勉強しています。",
    "exampleTranslation": "Estudio japonés en la universidad.",
    "notes": "Palabras (言) + cinco (五) + boca (口)."
  },
  {
    "id": "k-bun-mon",
    "kanji": "文",
    "spanish": "Texto / Oración / Cultura",
    "english": "Sentence / Literature",
    "onyomi": "ブン、モン",
    "kunyomi": "ふみ",
    "strokeCount": 4,
    "radicals": "文 (texto)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "作文",
        "furigana": "さくぶん",
        "romaji": "sakubun",
        "meaning": "Ensayo / Redacción"
      },
      {
        "word": "文学",
        "furigana": "ぶんがく",
        "romaji": "bungaku",
        "meaning": "Literatura"
      },
      {
        "word": "文化",
        "furigana": "ぶんか",
        "romaji": "bunka",
        "meaning": "Cultura"
      }
    ],
    "exampleSentence": "週末に日本語の作文を書きました。",
    "exampleTranslation": "El fin de semana escribí una redacción en japonés.",
    "notes": "Patrón de líneas cruzadas que formaron los primeros símbolos escritos."
  },
  {
    "id": "k-kae-kaeru",
    "kanji": "帰",
    "spanish": "Regresar / Volver a casa",
    "english": "Return / Go home",
    "onyomi": "キ",
    "kunyomi": "かえ・る、かえ・す",
    "strokeCount": 10,
    "radicals": "巾 (paño)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "帰る",
        "furigana": "かえる",
        "romaji": "kaeru",
        "meaning": "Regresar a casa"
      },
      {
        "word": "帰国",
        "furigana": "きこく",
        "romaji": "kikoku",
        "meaning": "Regresar a su país natal"
      }
    ],
    "exampleSentence": "六時にうちへ帰ります。",
    "exampleTranslation": "Regreso a casa a las 6:00.",
    "notes": "Volver al hogar donde espera la familia."
  },
  {
    "id": "k-hai-iru",
    "kanji": "入",
    "spanish": "Entrar / Poner dentro",
    "english": "Enter / Insert",
    "onyomi": "ニュウ",
    "kunyomi": "はい・る、い・れる",
    "strokeCount": 2,
    "radicals": "入 (entrar)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "入る",
        "furigana": "はいる",
        "romaji": "hairu",
        "meaning": "Entrar"
      },
      {
        "word": "入れる",
        "furigana": "いれる",
        "romaji": "ireru",
        "meaning": "Meter / Introducir"
      },
      {
        "word": "入口",
        "furigana": "いりぐち",
        "romaji": "iriguchi",
        "meaning": "Entrada"
      },
      {
        "word": "入学",
        "furigana": "にゅうがく",
        "romaji": "nyuugaku",
        "meaning": "Ingreso a la escuela"
      }
    ],
    "exampleSentence": "どうぞ、部屋に入ってください。",
    "exampleTranslation": "Por favor, pasa a la habitación.",
    "notes": "Diferente de 人 (persona): en 入 el trazo derecho es más largo y entra por arriba."
  },
  {
    "id": "k-in-member",
    "kanji": "員",
    "spanish": "Miembro / Empleado",
    "english": "Member",
    "onyomi": "イン",
    "kunyomi": "",
    "strokeCount": 10,
    "radicals": "口 (boca)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "会社員",
        "furigana": "かいしゃいん",
        "romaji": "kaishain",
        "meaning": "Oficinista / Empleado"
      },
      {
        "word": "店員",
        "furigana": "てんいん",
        "romaji": "ten'in",
        "meaning": "Dependiente de tienda"
      },
      {
        "word": "全員",
        "furigana": "ぜんいん",
        "romaji": "zen'in",
        "meaning": "Todos los miembros"
      }
    ],
    "exampleSentence": "兄は銀行の会社員です。",
    "exampleTranslation": "Mi hermano mayor es empleado de banco.",
    "notes": "Boca (口) sobre concha de dinero (貝); personas contadas en nómina."
  },
  {
    "id": "k-shin-atara",
    "kanji": "新",
    "spanish": "Nuevo",
    "english": "New",
    "onyomi": "シン",
    "kunyomi": "あたら・しい、あら・た",
    "strokeCount": 13,
    "radicals": "斤 (hacha)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "新しい",
        "furigana": "あたらしい",
        "romaji": "atarashii",
        "meaning": "Nuevo"
      },
      {
        "word": "新聞",
        "furigana": "しんぶん",
        "romaji": "shinbun",
        "meaning": "Periódico (noticias frescas)"
      },
      {
        "word": "新年",
        "furigana": "しんねん",
        "romaji": "shinnen",
        "meaning": "Año Nuevo"
      },
      {
        "word": "新幹線",
        "furigana": "しんかんせん",
        "romaji": "shinkansen",
        "meaning": "Tren bala"
      }
    ],
    "exampleSentence": "新しいスマホを買いました。",
    "exampleTranslation": "Compré un smartphone nuevo.",
    "notes": "Cortar madera fresca de pie con un hacha (斤)."
  },
  {
    "id": "k-bun-kiku",
    "kanji": "聞",
    "spanish": "Escuchar / Oír / Preguntar",
    "english": "Listen / Hear",
    "onyomi": "ブン、モン",
    "kunyomi": "き・く、き・こえる",
    "strokeCount": 14,
    "radicals": "耳 (oreja)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "聞く",
        "furigana": "きく",
        "romaji": "kiku",
        "meaning": "Escuchar / Oír"
      },
      {
        "word": "新聞",
        "furigana": "しんぶん",
        "romaji": "shinbun",
        "meaning": "Periódico"
      },
      {
        "word": "聞こえる",
        "furigana": "きこえる",
        "romaji": "kikoeru",
        "meaning": "Poder oírse"
      }
    ],
    "exampleSentence": "毎朝、ラジオでニュースを聞きます。",
    "exampleTranslation": "Todas las mañanas escucho las noticias en la radio.",
    "notes": "Una oreja (耳) pegada a la puerta (門) para escuchar con atención."
  },
  {
    "id": "k-saku-tsuku",
    "kanji": "作",
    "spanish": "Hacer / Crear",
    "english": "Make / Create",
    "onyomi": "サク、サ",
    "kunyomi": "つく・る",
    "strokeCount": 7,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "作る",
        "furigana": "つくる",
        "romaji": "tsukuru",
        "meaning": "Hacer / Fabricar"
      },
      {
        "word": "作文",
        "furigana": "さくぶん",
        "romaji": "sakubun",
        "meaning": "Composición escrita"
      },
      {
        "word": "作品",
        "furigana": "さくひん",
        "romaji": "sakuhin",
        "meaning": "Obra de arte"
      }
    ],
    "exampleSentence": "母と一緒にケーキを作りました。",
    "exampleTranslation": "Hice un pastel junto con mi madre.",
    "notes": "Una persona (亻) trabajando en una creación nueva."
  },
  {
    "id": "k-shi-tsuka",
    "kanji": "仕",
    "spanish": "Servir / Trabajo",
    "english": "Serve / Work",
    "onyomi": "シ、ジ",
    "kunyomi": "つか・える",
    "strokeCount": 5,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "仕事",
        "furigana": "しごと",
        "romaji": "shigoto",
        "meaning": "Trabajo / Empleo"
      },
      {
        "word": "仕方",
        "furigana": "しかた",
        "romaji": "shikata",
        "meaning": "Forma de hacer / Remedio"
      }
    ],
    "exampleSentence": "明日は仕事が休みです。",
    "exampleTranslation": "Mañana descanso del trabajo.",
    "notes": "Una persona (亻) sirviendo como samurái o funcionario (士)."
  },
  {
    "id": "k-ji-koto",
    "kanji": "事",
    "spanish": "Cosa abstracta / Asunto / Hecho",
    "english": "Thing / Matter",
    "onyomi": "ジ",
    "kunyomi": "こと",
    "strokeCount": 8,
    "radicals": "亅 (gancho)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "仕事",
        "furigana": "しごと",
        "romaji": "shigoto",
        "meaning": "Trabajo"
      },
      {
        "word": "火事",
        "furigana": "かじ",
        "romaji": "kaji",
        "meaning": "Incendio"
      },
      {
        "word": "食事",
        "furigana": "しょくじ",
        "romaji": "shokuji",
        "meaning": "Comida / Banquete"
      }
    ],
    "exampleSentence": "今日は大事な用事があります。",
    "exampleTranslation": "Hoy tengo un asunto importante.",
    "notes": "Cosas intangibles o hechos (こと), a diferencia de 物 (objetos físicos)."
  },
  {
    "id": "k-den",
    "kanji": "電",
    "spanish": "Electricidad",
    "english": "Electricity",
    "onyomi": "デン",
    "kunyomi": "",
    "strokeCount": 13,
    "radicals": "雨 (lluvia)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "電車",
        "furigana": "でんしゃ",
        "romaji": "densha",
        "meaning": "Tren eléctrico"
      },
      {
        "word": "電気",
        "furigana": "でんき",
        "romaji": "denki",
        "meaning": "Electricidad / Luz"
      },
      {
        "word": "電話",
        "furigana": "でんわ",
        "romaji": "denwa",
        "meaning": "Teléfono"
      }
    ],
    "exampleSentence": "電車で大学に通っています。",
    "exampleTranslation": "Voy a la universidad en tren.",
    "notes": "Lluvia (雨) acompañada por un destello eléctrico."
  },
  {
    "id": "k-sha-kuruma",
    "kanji": "車",
    "spanish": "Coche / Vehículo",
    "english": "Car / Vehicle",
    "onyomi": "シャ",
    "kunyomi": "くるま",
    "strokeCount": 7,
    "radicals": "車 (carro)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "車",
        "furigana": "くるま",
        "romaji": "kuruma",
        "meaning": "Coche / Auto"
      },
      {
        "word": "電車",
        "furigana": "でんしゃ",
        "romaji": "densha",
        "meaning": "Tren"
      },
      {
        "word": "自転車",
        "furigana": "じてんしゃ",
        "romaji": "jitensha",
        "meaning": "Bicicleta"
      },
      {
        "word": "駐車場",
        "furigana": "ちゅうしゃじょう",
        "romaji": "chuushajou",
        "meaning": "Estacionamiento"
      }
    ],
    "exampleSentence": "父は新しい車を買いました。",
    "exampleTranslation": "Mi padre compró un coche nuevo.",
    "notes": "Vista superior de un carruaje con ruedas y eje central."
  },
  {
    "id": "k-kyuu-yasu",
    "kanji": "休",
    "spanish": "Descansar / Vacaciones",
    "english": "Rest",
    "onyomi": "キュウ",
    "kunyomi": "やす・む、やす・まる",
    "strokeCount": 6,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "休む",
        "furigana": "やすむ",
        "romaji": "yasumu",
        "meaning": "Descansar / Ausentarse"
      },
      {
        "word": "休み",
        "furigana": "やすみ",
        "romaji": "yasumi",
        "meaning": "Día libre / Vacaciones"
      },
      {
        "word": "夏休み",
        "furigana": "なつやすみ",
        "romaji": "natsuyasumi",
        "meaning": "Vacaciones de verano"
      }
    ],
    "exampleSentence": "少し休んでから勉強しましょう。",
    "exampleTranslation": "Estudiemos después de descansar un poco.",
    "notes": "Una persona (亻) recargada descansando plácidamente junto a un árbol (木)."
  },
  {
    "id": "k-gen-i",
    "kanji": "言",
    "spanish": "Decir / Palabra",
    "english": "Say / Word",
    "onyomi": "ゲン、ゴン",
    "kunyomi": "い・う、こと",
    "strokeCount": 7,
    "radicals": "言 (palabra)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "言う",
        "furigana": "いう",
        "romaji": "iu",
        "meaning": "Decir"
      },
      {
        "word": "言語",
        "furigana": "げんご",
        "romaji": "gengo",
        "meaning": "Lenguaje"
      }
    ],
    "exampleSentence": "たけしさんは「好きです」と言いました。",
    "exampleTranslation": "Takeshi dijo: \"Me gustas\".",
    "notes": "Palabras saliendo de la boca en cuatro líneas de sonido."
  },
  {
    "id": "k-doku-yo",
    "kanji": "読",
    "spanish": "Leer",
    "english": "Read",
    "onyomi": "ドク、トク",
    "kunyomi": "よ・む",
    "strokeCount": 14,
    "radicals": "言 (palabra)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "読む",
        "furigana": "よむ",
        "romaji": "yomu",
        "meaning": "Leer"
      },
      {
        "word": "読書",
        "furigana": "どくしょ",
        "romaji": "dokusho",
        "meaning": "Lectura de libros"
      }
    ],
    "exampleSentence": "寝る前に本を読みます。",
    "exampleTranslation": "Leo un libro antes de dormir.",
    "notes": "Decir palabras (言) interpretando un texto."
  },
  {
    "id": "k-shi-omo",
    "kanji": "思",
    "spanish": "Pensar / Creer",
    "english": "Think",
    "onyomi": "シ",
    "kunyomi": "おも・う",
    "strokeCount": 9,
    "radicals": "心 (corazón)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "思う",
        "furigana": "おもう",
        "romaji": "omou",
        "meaning": "Pensar / Creer"
      },
      {
        "word": "思い出",
        "furigana": "おもいで",
        "romaji": "omoide",
        "meaning": "Recuerdo"
      }
    ],
    "exampleSentence": "明日は雨が降ると思います。",
    "exampleTranslation": "Creo que mañana lloverá.",
    "notes": "Campo de la mente (田) conectado con el corazón (心)."
  },
  {
    "id": "k-ji-tsugi",
    "kanji": "次",
    "spanish": "Siguiente / Próximo",
    "english": "Next",
    "onyomi": "ジ、シ",
    "kunyomi": "つぎ、つ・ぐ",
    "strokeCount": 6,
    "radicals": "欠 (bostezo)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "次",
        "furigana": "つぎ",
        "romaji": "tsugi",
        "meaning": "Siguiente"
      },
      {
        "word": "次回",
        "furigana": "じかい",
        "romaji": "jikai",
        "meaning": "La próxima vez"
      }
    ],
    "exampleSentence": "次のページを開いてください。",
    "exampleTranslation": "Por favor abra la página siguiente.",
    "notes": "El siguiente en turno después del primero."
  },
  {
    "id": "k-ka-nani",
    "kanji": "何",
    "spanish": "Qué / Cuál",
    "english": "What",
    "onyomi": "カ",
    "kunyomi": "なに、なん",
    "strokeCount": 7,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "何",
        "furigana": "なに / なん",
        "romaji": "nani / nan",
        "meaning": "¿Qué?"
      },
      {
        "word": "何時",
        "furigana": "なんじ",
        "romaji": "nanji",
        "meaning": "¿Qué hora?"
      },
      {
        "word": "何人",
        "furigana": "なんにん",
        "romaji": "nannin",
        "meaning": "¿Cuántas personas?"
      },
      {
        "word": "何か",
        "furigana": "なにか",
        "romaji": "nanika",
        "meaning": "Algo"
      }
    ],
    "exampleSentence": "今何をしていますか。",
    "exampleTranslation": "¿Qué estás haciendo ahora?",
    "notes": "Una persona (亻) cargando algo y preguntando \"¿Qué es eso?\"."
  },
  {
    "id": "k-go-noon",
    "kanji": "午",
    "spanish": "Mediodía",
    "english": "Noon",
    "onyomi": "ゴ",
    "kunyomi": "うま",
    "strokeCount": 4,
    "radicals": "十 (diez)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "午前",
        "furigana": "ごぜん",
        "romaji": "gozen",
        "meaning": "A.M. (Mañana)"
      },
      {
        "word": "午後",
        "furigana": "ごご",
        "romaji": "gogo",
        "meaning": "P.M. (Tarde)"
      },
      {
        "word": "正午",
        "furigana": "しょうご",
        "romaji": "shougo",
        "meaning": "El mediodía en punto"
      }
    ],
    "exampleSentence": "午後三時に会いましょう。",
    "exampleTranslation": "Encontrémonos a las 3:00 de la tarde.",
    "notes": "La línea del meridiano solar al mediodía."
  },
  {
    "id": "k-go-ushiro",
    "kanji": "後",
    "spanish": "Después / Detrás",
    "english": "After / Behind",
    "onyomi": "ゴ、コウ",
    "kunyomi": "のち、うし・ろ、あと",
    "strokeCount": 9,
    "radicals": "彳 (paso corto)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "午後",
        "furigana": "ごご",
        "romaji": "gogo",
        "meaning": "P.M. (Tarde)"
      },
      {
        "word": "後ろ",
        "furigana": "うしろ",
        "romaji": "ushiro",
        "meaning": "Detrás"
      },
      {
        "word": "後で",
        "furigana": "あとで",
        "romaji": "atode",
        "meaning": "Más tarde / Después"
      }
    ],
    "exampleSentence": "ご飯の後で散歩をします。",
    "exampleTranslation": "Pasearé después de comer.",
    "notes": "Caminar (彳) con hilo atado al pie quedando atrás."
  },
  {
    "id": "k-zen-mae",
    "kanji": "前",
    "spanish": "Antes / Delante",
    "english": "Before / Front",
    "onyomi": "ゼン",
    "kunyomi": "まえ",
    "strokeCount": 9,
    "radicals": "刀 (espada)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "午前",
        "furigana": "ごぜん",
        "romaji": "gozen",
        "meaning": "A.M."
      },
      {
        "word": "前",
        "furigana": "まえ",
        "romaji": "mae",
        "meaning": "Delante / Antes"
      },
      {
        "word": "名前",
        "furigana": "なまえ",
        "romaji": "namae",
        "meaning": "Nombre"
      },
      {
        "word": "駅前",
        "furigana": "えきまえ",
        "romaji": "ekimae",
        "meaning": "Frente a la estación"
      }
    ],
    "exampleSentence": "駅の前で待っています。",
    "exampleTranslation": "Estoy esperando frente a la estación.",
    "notes": "Avanzar al frente con espada en mano."
  },
  {
    "id": "k-mei-na",
    "kanji": "名",
    "spanish": "Nombre / Fama",
    "english": "Name",
    "onyomi": "メイ、ミョウ",
    "kunyomi": "な",
    "strokeCount": 6,
    "radicals": "口 (boca)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "名前",
        "furigana": "なまえ",
        "romaji": "namae",
        "meaning": "Nombre"
      },
      {
        "word": "有名",
        "furigana": "ゆうめい",
        "romaji": "yuumei",
        "meaning": "Famoso"
      }
    ],
    "exampleSentence": "お名前は何ですか。",
    "exampleTranslation": "¿Cuál es su nombre?",
    "notes": "Por la noche (夕), la boca (口) pronuncia el nombre para identificarse."
  },
  {
    "id": "k-haku-shiro",
    "kanji": "白",
    "spanish": "Blanco",
    "english": "White",
    "onyomi": "ハク、ビャク",
    "kunyomi": "しろ、しろ・い",
    "strokeCount": 5,
    "radicals": "白 (blanco)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "白い",
        "furigana": "しろい",
        "romaji": "shiroi",
        "meaning": "Blanco"
      },
      {
        "word": "白鳥",
        "furigana": "はくちょう",
        "romaji": "hakuchou",
        "meaning": "Cisne (ave blanca)"
      }
    ],
    "exampleSentence": "白い猫が庭にいます。",
    "exampleTranslation": "Hay un gato blanco en el jardín.",
    "notes": "Un rayo de sol brillante de blancura pura."
  },
  {
    "id": "k-u-ame",
    "kanji": "雨",
    "spanish": "Lluvia",
    "english": "Rain",
    "onyomi": "ウ",
    "kunyomi": "あめ、あま",
    "strokeCount": 8,
    "radicals": "雨 (lluvia)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "雨",
        "furigana": "あめ",
        "romaji": "ame",
        "meaning": "Lluvia"
      },
      {
        "word": "大雨",
        "furigana": "おおあめ",
        "romaji": "ooame",
        "meaning": "Lluvia torrencial"
      },
      {
        "word": "雨季",
        "furigana": "うき",
        "romaji": "uki",
        "meaning": "Temporada de lluvias"
      }
    ],
    "exampleSentence": "今日は雨が降っています。",
    "exampleTranslation": "Hoy está lloviendo.",
    "notes": "Gotas de agua cayendo de las nubes del cielo."
  },
  {
    "id": "k-sho-ka",
    "kanji": "書",
    "spanish": "Escribir / Libro",
    "english": "Write / Book",
    "onyomi": "ショ",
    "kunyomi": "か・く",
    "strokeCount": 10,
    "radicals": "曰 (hablar)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "書く",
        "furigana": "かく",
        "romaji": "kaku",
        "meaning": "Escribir"
      },
      {
        "word": "図書館",
        "furigana": "としょかん",
        "romaji": "toshokan",
        "meaning": "Biblioteca"
      },
      {
        "word": "辞書",
        "furigana": "じしょ",
        "romaji": "jisho",
        "meaning": "Diccionario"
      }
    ],
    "exampleSentence": "友達に手紙を書きました。",
    "exampleTranslation": "Le escribí una carta a un amigo.",
    "notes": "Un pincel sostenido por la mano plasmando palabras."
  },
  {
    "id": "k-yuu-tomo",
    "kanji": "友",
    "spanish": "Amigo",
    "english": "Friend",
    "onyomi": "ユウ",
    "kunyomi": "とも",
    "strokeCount": 4,
    "radicals": "又 (de nuevo)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "友達",
        "furigana": "ともだち",
        "romaji": "tomodachi",
        "meaning": "Amigo(s)"
      },
      {
        "word": "親友",
        "furigana": "しんゆう",
        "romaji": "shin'yuu",
        "meaning": "Mejor amigo"
      },
      {
        "word": "友人",
        "furigana": "ゆうじん",
        "romaji": "yuujin",
        "meaning": "Amigo (formal)"
      }
    ],
    "exampleSentence": "週末、友達と遊びました。",
    "exampleTranslation": "El fin de semana salí con mis amigos.",
    "notes": "Dos manos cruzadas en señal de ayuda y compañerismo."
  },
  {
    "id": "k-kan-aida",
    "kanji": "間",
    "spanish": "Intervalo / Entre / Espacio",
    "english": "Between / Interval",
    "onyomi": "カン、ケン",
    "kunyomi": "あいだ、ま",
    "strokeCount": 12,
    "radicals": "門 (puerta)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "時間",
        "furigana": "じかん",
        "romaji": "jikan",
        "meaning": "Tiempo / Horas"
      },
      {
        "word": "間",
        "furigana": "あいだ",
        "romaji": "aida",
        "meaning": "Entre / Durante"
      },
      {
        "word": "一時間",
        "furigana": "いちじかん",
        "romaji": "ichijikan",
        "meaning": "Una hora de duración"
      }
    ],
    "exampleSentence": "本屋とカフェの間に薬局があります。",
    "exampleTranslation": "Entre la librería y la cafetería hay una farmacia.",
    "notes": "La luz del sol (日) brillando por la rendija de la puerta (門)."
  },
  {
    "id": "k-ka-ie",
    "kanji": "家",
    "spanish": "Casa / Familia",
    "english": "House / Family",
    "onyomi": "カ、ケ",
    "kunyomi": "いえ、や、うち",
    "strokeCount": 10,
    "radicals": "宀 (techo)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "家",
        "furigana": "いえ / うち",
        "romaji": "ie / uchi",
        "meaning": "Casa"
      },
      {
        "word": "家族",
        "furigana": "かぞく",
        "romaji": "kazoku",
        "meaning": "Familia"
      },
      {
        "word": "家内",
        "furigana": "かない",
        "romaji": "kanai",
        "meaning": "Mi esposa"
      }
    ],
    "exampleSentence": "早く家に帰りたいです。",
    "exampleTranslation": "Quiero volver pronto a casa.",
    "notes": "Un techo (宀) resguardando ganado/cerdo (豕) en el hogar tradicional."
  },
  {
    "id": "k-wa-hanashi",
    "kanji": "話",
    "spanish": "Hablar / Conversación",
    "english": "Speak / Talk",
    "onyomi": "ワ",
    "kunyomi": "はな・す、はなし",
    "strokeCount": 13,
    "radicals": "言 (palabra)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "話す",
        "furigana": "はなす",
        "romaji": "hanasu",
        "meaning": "Hablar"
      },
      {
        "word": "電話",
        "furigana": "でんわ",
        "romaji": "denwa",
        "meaning": "Teléfono"
      },
      {
        "word": "会話",
        "furigana": "かいわ",
        "romaji": "kaiwa",
        "meaning": "Conversación"
      }
    ],
    "exampleSentence": "日本語で楽しく話しました。",
    "exampleTranslation": "Conversé amenamente en japonés.",
    "notes": "Palabras (言) moduladas por la lengua (舌)."
  },
  {
    "id": "k-shou-suku",
    "kanji": "少",
    "spanish": "Poco / Escaso",
    "english": "Few / Little",
    "onyomi": "ショウ",
    "kunyomi": "すく・ない、すこ・し",
    "strokeCount": 4,
    "radicals": "小 (pequeño)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "少し",
        "furigana": "すこし",
        "romaji": "sukoshi",
        "meaning": "Un poco"
      },
      {
        "word": "少ない",
        "furigana": "すくない",
        "romaji": "sukunai",
        "meaning": "Escaso / Poco"
      },
      {
        "word": "少女",
        "furigana": "しょうじょ",
        "romaji": "shoujo",
        "meaning": "Muchacha joven"
      },
      {
        "word": "少年",
        "furigana": "しょうねん",
        "romaji": "shounen",
        "meaning": "Muchacho joven"
      }
    ],
    "exampleSentence": "砂糖を少し入れてください。",
    "exampleTranslation": "Por favor pon un poco de azúcar.",
    "notes": "Pequeño (小) con un trazo extra que reduce la cantidad aún más."
  },
  {
    "id": "k-ko-furu",
    "kanji": "古",
    "spanish": "Viejo / Antiguo",
    "english": "Old",
    "onyomi": "コ",
    "kunyomi": "ふる・い",
    "strokeCount": 5,
    "radicals": "口 (boca)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "古い",
        "furigana": "ふるい",
        "romaji": "furui",
        "meaning": "Viejo / Antiguo"
      },
      {
        "word": "中古",
        "furigana": "ちゅうこ",
        "romaji": "chuuko",
        "meaning": "De segunda mano"
      }
    ],
    "exampleSentence": "この寺はとても古いです。",
    "exampleTranslation": "Este templo es muy antiguo.",
    "notes": "Historias pasadas de boca en boca (口) a través de diez (十) generaciones."
  },
  {
    "id": "k-chi-shi",
    "kanji": "知",
    "spanish": "Saber / Conocer",
    "english": "Know",
    "onyomi": "チ",
    "kunyomi": "し・る",
    "strokeCount": 8,
    "radicals": "矢 (flecha)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "知る",
        "furigana": "しる",
        "romaji": "shiru",
        "meaning": "Saber"
      },
      {
        "word": "知っています",
        "furigana": "しっています",
        "romaji": "shitte imasu",
        "meaning": "Lo conozco / Lo sé"
      },
      {
        "word": "知り合い",
        "furigana": "しりあい",
        "romaji": "shiriai",
        "meaning": "Conocido"
      }
    ],
    "exampleSentence": "そのニュースを知っていますか。",
    "exampleTranslation": "¿Conoces esa noticia?",
    "notes": "Palabras que salen de la boca (口) tan rápidas como flechas (矢)."
  },
  {
    "id": "k-rai-kuru",
    "kanji": "来",
    "spanish": "Venir / Próximo",
    "english": "Come",
    "onyomi": "ライ",
    "kunyomi": "く・る、き・ます、こ・ない",
    "strokeCount": 7,
    "radicals": "木 (árbol)",
    "jlptLevel": "N5",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "来る",
        "furigana": "くる",
        "romaji": "kuru",
        "meaning": "Venir"
      },
      {
        "word": "来週",
        "furigana": "らいしゅう",
        "romaji": "raishuu",
        "meaning": "La próxima semana"
      },
      {
        "word": "来年",
        "furigana": "らいねん",
        "romaji": "rainen",
        "meaning": "El próximo año"
      },
      {
        "word": "将来",
        "furigana": "しょうらい",
        "romaji": "shourai",
        "meaning": "Futuro"
      }
    ],
    "exampleSentence": "明日、私のうちに来ませんか。",
    "exampleTranslation": "¿No quieres venir a mi casa mañana?",
    "notes": "Una espiga de trigo maduro que viene como fruto de la cosecha."
  },
  {
    "id": "k-juu-su",
    "kanji": "住",
    "spanish": "Vivir / Residir",
    "english": "Dwell / Live",
    "onyomi": "ジュウ",
    "kunyomi": "す・む、す・まう",
    "strokeCount": 7,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "住む",
        "furigana": "すむ",
        "romaji": "sumu",
        "meaning": "Vivir / Residir"
      },
      {
        "word": "住所",
        "furigana": "じゅうしょ",
        "romaji": "juusho",
        "meaning": "Dirección domiciliaria"
      }
    ],
    "exampleSentence": "東京に住んでいます。",
    "exampleTranslation": "Vivo en Tokio.",
    "notes": "Una persona (亻) junto al candil o pilar del hogar (主)."
  },
  {
    "id": "k-shou-tada",
    "kanji": "正",
    "spanish": "Correcto / Justo",
    "english": "Correct / Right",
    "onyomi": "セイ、ショウ",
    "kunyomi": "ただ・しい、まさ",
    "strokeCount": 5,
    "radicals": "止 (detener)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "正しい",
        "furigana": "ただしい",
        "romaji": "tadashii",
        "meaning": "Correcto / Verdadero"
      },
      {
        "word": "お正月",
        "furigana": "おしょうがつ",
        "romaji": "oshougatsu",
        "meaning": "Año Nuevo"
      }
    ],
    "exampleSentence": "正しい答えを選んでください。",
    "exampleTranslation": "Por favor elija la respuesta correcta.",
    "notes": "Detenerse (止) ante la línea de la rectitud (一)."
  },
  {
    "id": "k-nen-toshi",
    "kanji": "年",
    "spanish": "Año / Edad",
    "english": "Year / Age",
    "onyomi": "ネン",
    "kunyomi": "とし",
    "strokeCount": 6,
    "radicals": "干 (escudo)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "今年",
        "furigana": "ことし",
        "romaji": "kotoshi",
        "meaning": "Este año"
      },
      {
        "word": "来年",
        "furigana": "らいねん",
        "romaji": "rainen",
        "meaning": "El próximo año"
      },
      {
        "word": "去年",
        "furigana": "きょねん",
        "romaji": "kyonen",
        "meaning": "El año pasado"
      },
      {
        "word": "一年生",
        "furigana": "いちねんせい",
        "romaji": "ichinensei",
        "meaning": "Estudiante de 1er año"
      }
    ],
    "exampleSentence": "今年は日本へ行く予定です。",
    "exampleTranslation": "Este año planeo ir a Japón.",
    "notes": "El ciclo de un año de cosecha."
  },
  {
    "id": "k-bai-u",
    "kanji": "売",
    "spanish": "Vender",
    "english": "Sell",
    "onyomi": "バイ",
    "kunyomi": "う・る",
    "strokeCount": 7,
    "radicals": "士 (erudito)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "売る",
        "furigana": "うる",
        "romaji": "uru",
        "meaning": "Vender"
      },
      {
        "word": "売店",
        "furigana": "ばいてん",
        "romaji": "baiten",
        "meaning": "Puesto de venta / Kiosco"
      },
      {
        "word": "自動販売機",
        "furigana": "じどうはんばいき",
        "romaji": "jidouhanbaiki",
        "meaning": "Máquina expendedora"
      }
    ],
    "exampleSentence": "駅の売店で新聞を買いました。",
    "exampleTranslation": "Compré el periódico en el kiosco de la estación.",
    "notes": "Ofrecer bienes al público."
  },
  {
    "id": "k-bai-ka",
    "kanji": "買",
    "spanish": "Comprar",
    "english": "Buy",
    "onyomi": "バイ",
    "kunyomi": "か・う",
    "strokeCount": 12,
    "radicals": "貝 (concha/dinero)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "買う",
        "furigana": "かう",
        "romaji": "kau",
        "meaning": "Comprar"
      },
      {
        "word": "買い物",
        "furigana": "かいもの",
        "romaji": "kaimono",
        "meaning": "Compras"
      }
    ],
    "exampleSentence": "スーパーで野菜を買いました。",
    "exampleTranslation": "Compré verduras en el supermercado.",
    "notes": "Una red (罒) sobre conchas marinas de dinero (貝)."
  },
  {
    "id": "k-chou-machi",
    "kanji": "町",
    "spanish": "Pueblo / Ciudad",
    "english": "Town",
    "onyomi": "チョウ",
    "kunyomi": "まち",
    "strokeCount": 7,
    "radicals": "田 (campo)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "町",
        "furigana": "まち",
        "romaji": "machi",
        "meaning": "Pueblo / Ciudad"
      },
      {
        "word": "下町",
        "furigana": "したまち",
        "romaji": "shitamachi",
        "meaning": "Barrio tradicional"
      }
    ],
    "exampleSentence": "静かで綺麗な町に住んでいます。",
    "exampleTranslation": "Vivo en un pueblo tranquilo y hermoso.",
    "notes": "Campos de arroz (田) con límites de caminos (丁)."
  },
  {
    "id": "k-chou-naga",
    "kanji": "長",
    "spanish": "Largo / Líder",
    "english": "Long / Leader",
    "onyomi": "チョウ",
    "kunyomi": "なが・い",
    "strokeCount": 8,
    "radicals": "長 (largo)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "長い",
        "furigana": "ながい",
        "romaji": "nagai",
        "meaning": "Largo"
      },
      {
        "word": "社長",
        "furigana": "しゃちょう",
        "romaji": "shachou",
        "meaning": "Presidente de la empresa"
      },
      {
        "word": "校長",
        "furigana": "こうちょう",
        "romaji": "kouchou",
        "meaning": "Director de escuela"
      }
    ],
    "exampleSentence": "夏休みはとても長いです。",
    "exampleTranslation": "Las vacaciones de verano son muy largas.",
    "notes": "Cabello largo de un anciano sabio líder de la comunidad."
  },
  {
    "id": "k-dou-michi",
    "kanji": "道",
    "spanish": "Camino / Vía",
    "english": "Way / Road",
    "onyomi": "ドウ、トウ",
    "kunyomi": "みち",
    "strokeCount": 12,
    "radicals": "辶 (camino)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "道",
        "furigana": "みち",
        "romaji": "michi",
        "meaning": "Camino / Calle"
      },
      {
        "word": "北海道",
        "furigana": "ほっかいどう",
        "romaji": "hokkaidou",
        "meaning": "Hokkaido"
      },
      {
        "word": "書道",
        "furigana": "しょどう",
        "romaji": "shodou",
        "meaning": "Caligrafía (el camino de la escritura)"
      },
      {
        "word": "柔道",
        "furigana": "じゅうどう",
        "romaji": "juudou",
        "meaning": "Judo"
      }
    ],
    "exampleSentence": "この道を真っ直ぐ行ってください。",
    "exampleTranslation": "Siga recto por esta calle, por favor.",
    "notes": "Avanzar (辶) guiado por la cabeza y el pensamiento (首)."
  },
  {
    "id": "k-setsu-yuki",
    "kanji": "雪",
    "spanish": "Nieve",
    "english": "Snow",
    "onyomi": "セツ",
    "kunyomi": "ゆき",
    "strokeCount": 11,
    "radicals": "雨 (lluvia)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "雪",
        "furigana": "ゆき",
        "romaji": "yuki",
        "meaning": "Nieve"
      },
      {
        "word": "大雪",
        "furigana": "おおゆき",
        "romaji": "ooyuki",
        "meaning": "Nevada fuerte"
      },
      {
        "word": "雪だるま",
        "furigana": "ゆきだるま",
        "romaji": "yukidaruma",
        "meaning": "Muñeco de nieve"
      }
    ],
    "exampleSentence": "冬に雪がたくさん降りました。",
    "exampleTranslation": "Nevó mucho en invierno.",
    "notes": "Precipitación (雨) que se barre con una escoba (ヨ)."
  },
  {
    "id": "k-ritsu-ta",
    "kanji": "立",
    "spanish": "Ponerse de pie / Erigir",
    "english": "Stand up",
    "onyomi": "リツ、リュウ",
    "kunyomi": "た・つ、た・てる",
    "strokeCount": 5,
    "radicals": "立 (de pie)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "立つ",
        "furigana": "たつ",
        "romaji": "tatsu",
        "meaning": "Ponerse de pie"
      },
      {
        "word": "国立大学",
        "furigana": "こくりつだいがく",
        "romaji": "kokuritsu daigaku",
        "meaning": "Universidad nacional"
      }
    ],
    "exampleSentence": "席から立って挨拶をしました。",
    "exampleTranslation": "Me levanté de mi asiento y saludé.",
    "notes": "Una persona firme de pie sobre la tierra."
  },
  {
    "id": "k-ji-mizuka",
    "kanji": "自",
    "spanish": "Uno mismo / Automático",
    "english": "Self",
    "onyomi": "ジ、シ",
    "kunyomi": "みずか・ら",
    "strokeCount": 6,
    "radicals": "自 (uno mismo)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "自分",
        "furigana": "じぶん",
        "romaji": "jibun",
        "meaning": "Uno mismo"
      },
      {
        "word": "自転車",
        "furigana": "じてんしゃ",
        "romaji": "jitensha",
        "meaning": "Bicicleta"
      },
      {
        "word": "自動車",
        "furigana": "じどうしゃ",
        "romaji": "jidousha",
        "meaning": "Automóvil"
      }
    ],
    "exampleSentence": "自分のことは自分でします。",
    "exampleTranslation": "Mis asuntos los hago yo mismo.",
    "notes": "Dibujo de la nariz, punto con el que los japoneses se señalan a sí mismos."
  },
  {
    "id": "k-ya-yoru",
    "kanji": "夜",
    "spanish": "Noche",
    "english": "Night",
    "onyomi": "ヤ",
    "kunyomi": "よる、よ",
    "strokeCount": 8,
    "radicals": "夕 (tarde/noche)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "夜",
        "furigana": "よる",
        "romaji": "yoru",
        "meaning": "Noche"
      },
      {
        "word": "今夜",
        "furigana": "こんや",
        "romaji": "konya",
        "meaning": "Esta noche"
      },
      {
        "word": "夜中",
        "furigana": "よなか",
        "romaji": "yonaka",
        "meaning": "Medianoche"
      }
    ],
    "exampleSentence": "夜十一時に寝ます。",
    "exampleTranslation": "Me duermo a las 11:00 de la noche.",
    "notes": "Una persona descansando bajo la luna y las estrellas nocturnas."
  },
  {
    "id": "k-chou-asa",
    "kanji": "朝",
    "spanish": "Mañana",
    "english": "Morning",
    "onyomi": "チョウ",
    "kunyomi": "あさ",
    "strokeCount": 12,
    "radicals": "月 (luna)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "朝",
        "furigana": "あさ",
        "romaji": "asa",
        "meaning": "Mañana"
      },
      {
        "word": "今朝",
        "furigana": "けさ",
        "romaji": "kesa",
        "meaning": "Esta mañana"
      },
      {
        "word": "朝ご飯",
        "furigana": "あさごはん",
        "romaji": "asagohan",
        "meaning": "Desayuno"
      }
    ],
    "exampleSentence": "毎朝七時に起きます。",
    "exampleTranslation": "Me despierto a las 7:00 todas las mañanas.",
    "notes": "El sol saliendo entre la hierba mientras la luna aún es visible."
  },
  {
    "id": "k-ji-mo",
    "kanji": "持",
    "spanish": "Tener / Sostener",
    "english": "Hold / Have",
    "onyomi": "ジ",
    "kunyomi": "も・つ",
    "strokeCount": 9,
    "radicals": "手 (mano)",
    "jlptLevel": "N5",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "持つ",
        "furigana": "もつ",
        "romaji": "motsu",
        "meaning": "Sostener / Poseer"
      },
      {
        "word": "持っています",
        "furigana": "もっています",
        "romaji": "motte imasu",
        "meaning": "Tener / Poseer"
      },
      {
        "word": "気持ち",
        "furigana": "きもち",
        "romaji": "kimochi",
        "meaning": "Sentimiento"
      }
    ],
    "exampleSentence": "傘を持っていますか。",
    "exampleTranslation": "¿Llevas paraguas?",
    "notes": "Mano (扌) sosteniendo algo con firmeza."
  },
  {
    "id": "k-shu-te",
    "kanji": "手",
    "spanish": "Mano",
    "english": "Hand",
    "onyomi": "シュ",
    "kunyomi": "て、た",
    "strokeCount": 4,
    "radicals": "手 (mano)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "手",
        "furigana": "て",
        "romaji": "te",
        "meaning": "Mano"
      },
      {
        "word": "手紙",
        "furigana": "てがみ",
        "romaji": "tegami",
        "meaning": "Carta escrita"
      },
      {
        "word": "上手",
        "furigana": "じょうず",
        "romaji": "jouzu",
        "meaning": "Habilidoso"
      },
      {
        "word": "下手",
        "furigana": "へた",
        "romaji": "heta",
        "meaning": "Torpe"
      }
    ],
    "exampleSentence": "食事の前に手を洗います。",
    "exampleTranslation": "Me lavo las manos antes de comer.",
    "notes": "Cinco dedos de una mano extendida."
  },
  {
    "id": "k-shi-kami",
    "kanji": "紙",
    "spanish": "Papel",
    "english": "Paper",
    "onyomi": "シ",
    "kunyomi": "かみ",
    "strokeCount": 10,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "手紙",
        "furigana": "てがみ",
        "romaji": "tegami",
        "meaning": "Carta"
      },
      {
        "word": "折り紙",
        "furigana": "おりがみ",
        "romaji": "origami",
        "meaning": "Origami (papel doblado)"
      }
    ],
    "exampleSentence": "友達に長い手紙を書きました。",
    "exampleTranslation": "Le escribí una larga carta a un amigo.",
    "notes": "Fibras e hilos (糸) prensados en hojas de papel."
  },
  {
    "id": "k-kou-su",
    "kanji": "好",
    "spanish": "Gustar / Agradar",
    "english": "Like / Fond",
    "onyomi": "コウ",
    "kunyomi": "す・き、この・む",
    "strokeCount": 6,
    "radicals": "女 (mujer)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "好き",
        "furigana": "すき",
        "romaji": "suki",
        "meaning": "Gustar"
      },
      {
        "word": "大好き",
        "furigana": "だいすき",
        "romaji": "daisuki",
        "meaning": "Encantar"
      }
    ],
    "exampleSentence": "日本のアニメが大好きです。",
    "exampleTranslation": "Me encanta el anime japonés.",
    "notes": "Una madre (女) abrazando a su hijo amado (子)."
  },
  {
    "id": "k-kin-chika",
    "kanji": "近",
    "spanish": "Cerca / Cercano",
    "english": "Near",
    "onyomi": "キン",
    "kunyomi": "ちか・い",
    "strokeCount": 7,
    "radicals": "辶 (camino)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "近い",
        "furigana": "ちかい",
        "romaji": "chikai",
        "meaning": "Cerca"
      },
      {
        "word": "近く",
        "furigana": "ちかく",
        "romaji": "chikaku",
        "meaning": "En las cercanías"
      },
      {
        "word": "近所",
        "furigana": "きんじょ",
        "romaji": "kinjo",
        "meaning": "Vecindario"
      }
    ],
    "exampleSentence": "駅の近くに住んでいます。",
    "exampleTranslation": "Vivo cerca de la estación.",
    "notes": "Avanzar una distancia corta con hacha (斤)."
  },
  {
    "id": "k-mei-aka",
    "kanji": "明",
    "spanish": "Brillante / Claro",
    "english": "Bright / Clear",
    "onyomi": "メイ、ミョウ",
    "kunyomi": "あか・るい、あ・ける",
    "strokeCount": 8,
    "radicals": "日 (sol)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "明るい",
        "furigana": "あかるい",
        "romaji": "akarui",
        "meaning": "Brillante / Alegre"
      },
      {
        "word": "明日",
        "furigana": "あした / あす",
        "romaji": "ashita",
        "meaning": "Mañana (día siguiente)"
      },
      {
        "word": "説明",
        "furigana": "せつめい",
        "romaji": "setsumei",
        "meaning": "Explicación"
      }
    ],
    "exampleSentence": "この部屋はとても明るいです。",
    "exampleTranslation": "Esta habitación es muy iluminada.",
    "notes": "El sol (日) y la luna (月) juntos: máxima claridad y brillo."
  },
  {
    "id": "k-byou",
    "kanji": "病",
    "spanish": "Enfermedad",
    "english": "Illness",
    "onyomi": "ビョウ",
    "kunyomi": "や・む、やまい",
    "strokeCount": 10,
    "radicals": "疒 (enfermedad)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "病院",
        "furigana": "びょういん",
        "romaji": "byouin",
        "meaning": "Hospital"
      },
      {
        "word": "病気",
        "furigana": "びょうき",
        "romaji": "byouki",
        "meaning": "Enfermedad"
      }
    ],
    "exampleSentence": "風邪で病院に行きました。",
    "exampleTranslation": "Fui al hospital por un resfriado.",
    "notes": "Persona en cama con fiebre (疒)."
  },
  {
    "id": "k-in-institution",
    "kanji": "院",
    "spanish": "Institución / Hospital",
    "english": "Institution",
    "onyomi": "イン",
    "kunyomi": "",
    "strokeCount": 10,
    "radicals": "阝 (colina/muro)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "病院",
        "furigana": "びょういん",
        "romaji": "byouin",
        "meaning": "Hospital"
      },
      {
        "word": "大学院",
        "furigana": "だいがくいん",
        "romaji": "daigakuin",
        "meaning": "Escuela de posgrado"
      }
    ],
    "exampleSentence": "大きな病院で診てもらいました。",
    "exampleTranslation": "Fui atendido en un hospital grande.",
    "notes": "Edificio público rodeado por muros protectores."
  },
  {
    "id": "k-ei-utsu",
    "kanji": "映",
    "spanish": "Proyectar / Reflejar",
    "english": "Reflect / Project",
    "onyomi": "エイ",
    "kunyomi": "うつ・る、うつ・す",
    "strokeCount": 9,
    "radicals": "日 (sol)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "映画",
        "furigana": "えいが",
        "romaji": "eiga",
        "meaning": "Película"
      },
      {
        "word": "映画館",
        "furigana": "えいがかん",
        "romaji": "eigakan",
        "meaning": "Cine"
      }
    ],
    "exampleSentence": "週末、友達と映画を見ました。",
    "exampleTranslation": "El fin de semana vi una película con un amigo.",
    "notes": "Luz del sol (日) proyectando una imagen."
  },
  {
    "id": "k-ga-kaku",
    "kanji": "画",
    "spanish": "Pintura / Cuadro / Trazo",
    "english": "Picture / Stroke",
    "onyomi": "ガ、カク",
    "kunyomi": "",
    "strokeCount": 8,
    "radicals": "田 (campo)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "映画",
        "furigana": "えいが",
        "romaji": "eiga",
        "meaning": "Película"
      },
      {
        "word": "計画",
        "furigana": "けいかく",
        "romaji": "keikaku",
        "meaning": "Plan / Proyecto"
      },
      {
        "word": "画家",
        "furigana": "がか",
        "romaji": "gaka",
        "meaning": "Pintor"
      }
    ],
    "exampleSentence": "どんな映画が好きですか。",
    "exampleTranslation": "¿Qué tipo de películas te gustan?",
    "notes": "Delimitar un lienzo o campo con pincel."
  },
  {
    "id": "k-ka-uta",
    "kanji": "歌",
    "spanish": "Cantar / Canción",
    "english": "Song / Sing",
    "onyomi": "カ",
    "kunyomi": "うた、うた・う",
    "strokeCount": 14,
    "radicals": "欠 (boca abierta)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "歌",
        "furigana": "うた",
        "romaji": "uta",
        "meaning": "Canción"
      },
      {
        "word": "歌う",
        "furigana": "うたう",
        "romaji": "utau",
        "meaning": "Cantar"
      },
      {
        "word": "歌手",
        "furigana": "かしゅ",
        "romaji": "kashu",
        "meaning": "Cantante"
      }
    ],
    "exampleSentence": "カラオケで日本の歌を歌いました。",
    "exampleTranslation": "Canté canciones japonesas en el karaoke.",
    "notes": "Cantar a pleno pulmón con la boca abierta (欠)."
  },
  {
    "id": "k-shi-market",
    "kanji": "市",
    "spanish": "Ciudad / Mercado",
    "english": "City / Market",
    "onyomi": "シ",
    "kunyomi": "いち",
    "strokeCount": 5,
    "radicals": "巾 (paño)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "京都市",
        "furigana": "きょうとし",
        "romaji": "kyouto-shi",
        "meaning": "Ciudad de Kioto"
      },
      {
        "word": "市場",
        "furigana": "いちば",
        "romaji": "ichiba",
        "meaning": "Mercado"
      },
      {
        "word": "市長",
        "furigana": "しちょう",
        "romaji": "shichou",
        "meaning": "Alcalde"
      }
    ],
    "exampleSentence": "京都市は歴史が長いです。",
    "exampleTranslation": "La ciudad de Kioto tiene una larga historia.",
    "notes": "Puesto de mercado techado donde se intercambian telas y bienes."
  },
  {
    "id": "k-sho-tokoro",
    "kanji": "所",
    "spanish": "Lugar / Sitio",
    "english": "Place",
    "onyomi": "ショ",
    "kunyomi": "ところ",
    "strokeCount": 8,
    "radicals": "戸 (puerta)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "所",
        "furigana": "ところ",
        "romaji": "tokoro",
        "meaning": "Lugar"
      },
      {
        "word": "住所",
        "furigana": "じゅうしょ",
        "romaji": "juusho",
        "meaning": "Dirección"
      },
      {
        "word": "近所",
        "furigana": "きんじょ",
        "romaji": "kinjo",
        "meaning": "Vecindario"
      },
      {
        "word": "台所",
        "furigana": "だいどころ",
        "romaji": "daidokoro",
        "meaning": "Cocina"
      }
    ],
    "exampleSentence": "日本はとても綺麗な所です。",
    "exampleTranslation": "Japón es un lugar muy hermoso.",
    "notes": "Cortar madera ante la puerta (戸) para construir un lugar."
  },
  {
    "id": "k-ben-tsuto",
    "kanji": "勉",
    "spanish": "Esfuerzo",
    "english": "Exertion / Strive",
    "onyomi": "ベン",
    "kunyomi": "つと・める",
    "strokeCount": 10,
    "radicals": "力 (fuerza)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "勉強",
        "furigana": "べんきょう",
        "romaji": "benkyou",
        "meaning": "Estudio"
      },
      {
        "word": "勉強する",
        "furigana": "べんきょうする",
        "romaji": "benkyou suru",
        "meaning": "Estudiar"
      }
    ],
    "exampleSentence": "毎日三時間勉強します。",
    "exampleTranslation": "Estudio tres horas todos los días.",
    "notes": "Dar a luz a nuevas capacidades aplicando esfuerzo y fuerza (力)."
  },
  {
    "id": "k-kyou-tsuyo",
    "kanji": "強",
    "spanish": "Fuerte",
    "english": "Strong",
    "onyomi": "キョウ、ゴウ",
    "kunyomi": "つよ・い",
    "strokeCount": 11,
    "radicals": "弓 (arco)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "強い",
        "furigana": "つよい",
        "romaji": "tsuyoi",
        "meaning": "Fuerte"
      },
      {
        "word": "勉強",
        "furigana": "べんきょう",
        "romaji": "benkyou",
        "meaning": "Estudio"
      }
    ],
    "exampleSentence": "風がとても強いです。",
    "exampleTranslation": "El viento está muy fuerte.",
    "notes": "Un arco (弓) resistente con la fuerza de un insecto acorazado (虫)."
  },
  {
    "id": "k-yuu-a",
    "kanji": "有",
    "spanish": "Haber / Existir / Poseer",
    "english": "Have / Exist",
    "onyomi": "ユウ、ウ",
    "kunyomi": "あ・る",
    "strokeCount": 6,
    "radicals": "月 (luna/carne)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "有名",
        "furigana": "ゆうめい",
        "romaji": "yuumei",
        "meaning": "Famoso"
      },
      {
        "word": "有料",
        "furigana": "ゆうりょう",
        "romaji": "yuuryou",
        "meaning": "De pago"
      }
    ],
    "exampleSentence": "富士山は世界で有名です。",
    "exampleTranslation": "El Monte Fuji es famoso en el mundo.",
    "notes": "Mano que sostiene un trozo de carne; posesión real."
  },
  {
    "id": "k-ryo",
    "kanji": "旅",
    "spanish": "Viaje",
    "english": "Travel",
    "onyomi": "リョ",
    "kunyomi": "たび",
    "strokeCount": 10,
    "radicals": "方 (dirección)",
    "jlptLevel": "N5",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "旅行",
        "furigana": "りょこう",
        "romaji": "ryokou",
        "meaning": "Viaje"
      },
      {
        "word": "旅館",
        "furigana": "りょかん",
        "romaji": "ryokan",
        "meaning": "Posada tradicional"
      }
    ],
    "exampleSentence": "夏休みに北海道へ旅行しました。",
    "exampleTranslation": "Viajé a Hokkaido en las vacaciones de verano.",
    "notes": "Un grupo de personas marchando juntas bajo una bandera."
  },
  {
    "id": "k-mukashi",
    "kanji": "昔",
    "spanish": "Antiguo / Época pasada",
    "english": "Old times / Past",
    "onyomi": "セキ、シャク",
    "kunyomi": "むかし",
    "strokeCount": 8,
    "radicals": "日 (sol)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "昔",
        "furigana": "むかし",
        "romaji": "mukashi",
        "meaning": "Antaño / Hace mucho"
      },
      {
        "word": "昔話",
        "furigana": "むかしばなし",
        "romaji": "mukashibanashi",
        "meaning": "Cuento popular antiguo"
      }
    ],
    "exampleSentence": "昔々、ある所におじいさんがいました。",
    "exampleTranslation": "Había una vez, en un lugar lejano, un anciano.",
    "notes": "Muchos soles (días pasados) acumulados en el tiempo."
  },
  {
    "id": "k-shin-kami",
    "kanji": "神",
    "spanish": "Dios / Deidad",
    "english": "God / Spirit",
    "onyomi": "シン、ジン",
    "kunyomi": "かみ",
    "strokeCount": 9,
    "radicals": "示 (altar)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "神様",
        "furigana": "かみさま",
        "romaji": "kamisama",
        "meaning": "Dios"
      },
      {
        "word": "神社",
        "furigana": "じんじゃ",
        "romaji": "jinja",
        "meaning": "Santuario sintoísta"
      },
      {
        "word": "神道",
        "furigana": "しんとう",
        "romaji": "shintou",
        "meaning": "Sintoísmo"
      }
    ],
    "exampleSentence": "お正月に神社へお参りに行きました。",
    "exampleTranslation": "Fui a orar al santuario en Año Nuevo.",
    "notes": "Altar ritual (示) que invoca relámpagos divinos (申)."
  },
  {
    "id": "k-sou-haya",
    "kanji": "早",
    "spanish": "Temprano / Rápido",
    "english": "Early",
    "onyomi": "ソウ",
    "kunyomi": "はや・い",
    "strokeCount": 6,
    "radicals": "日 (sol)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "早い",
        "furigana": "はやい",
        "romaji": "hayai",
        "meaning": "Temprano"
      },
      {
        "word": "早く",
        "furigana": "はやく",
        "romaji": "hayaku",
        "meaning": "Temprano / Rápido"
      }
    ],
    "exampleSentence": "明日は早く起きなければいけません。",
    "exampleTranslation": "Mañana tengo que levantarme temprano.",
    "notes": "El sol (日) saliendo a primera hora sobre el horizonte (十)."
  },
  {
    "id": "k-ki-o",
    "kanji": "起",
    "spanish": "Levantarse / Despertar",
    "english": "Wake up / Rise",
    "onyomi": "キ",
    "kunyomi": "お・きる、お・こす",
    "strokeCount": 10,
    "radicals": "走 (correr)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "起きる",
        "furigana": "おきる",
        "romaji": "okiru",
        "meaning": "Levantarse"
      },
      {
        "word": "早起き",
        "furigana": "はやおき",
        "romaji": "hayaoki",
        "meaning": "Madrugar"
      }
    ],
    "exampleSentence": "今朝は六時に起きました。",
    "exampleTranslation": "Esta mañana me levanté a las 6:00.",
    "notes": "Ponerse en marcha (走) para emprender el día."
  },
  {
    "id": "k-gyuu-ushi",
    "kanji": "牛",
    "spanish": "Vaca / Buey",
    "english": "Cow / Cattle",
    "onyomi": "ギュウ",
    "kunyomi": "うし",
    "strokeCount": 4,
    "radicals": "牛 (vaca)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "牛肉",
        "furigana": "ぎゅうにく",
        "romaji": "gyuuniku",
        "meaning": "Carne de res"
      },
      {
        "word": "牛乳",
        "furigana": "ぎゅうにゅう",
        "romaji": "gyuunyuu",
        "meaning": "Leche de vaca"
      },
      {
        "word": "牛丼",
        "furigana": "ぎゅうどん",
        "romaji": "gyuudon",
        "meaning": "Tazón de carne de res"
      }
    ],
    "exampleSentence": "毎朝、牛乳を一杯飲みます。",
    "exampleTranslation": "Tomo un vaso de leche todas las mañanas.",
    "notes": "Cabeza de una vaca con sus cuernos."
  },
  {
    "id": "k-shi-tsuka-u",
    "kanji": "使",
    "spanish": "Usar / Emplear",
    "english": "Use",
    "onyomi": "シ",
    "kunyomi": "つか・う",
    "strokeCount": 8,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "使う",
        "furigana": "つかう",
        "romaji": "tsukau",
        "meaning": "Usar / Utilizar"
      },
      {
        "word": "使い方",
        "furigana": "つかいかた",
        "romaji": "tsukaikata",
        "meaning": "Modo de uso"
      }
    ],
    "exampleSentence": "辞書を使って漢字を調べました。",
    "exampleTranslation": "Busqué el kanji usando un diccionario.",
    "notes": "Una persona (亻) encargando a un enviado oficial."
  },
  {
    "id": "k-dou-hatara",
    "kanji": "働",
    "spanish": "Trabajar",
    "english": "Work",
    "onyomi": "ドウ",
    "kunyomi": "はたら・く",
    "strokeCount": 13,
    "radicals": "人 (persona)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "働く",
        "furigana": "はたらく",
        "romaji": "hataraku",
        "meaning": "Trabajar"
      },
      {
        "word": "労働",
        "furigana": "ろうどう",
        "romaji": "roudou",
        "meaning": "Trabajo / Labor"
      }
    ],
    "exampleSentence": "父は病院で働いています。",
    "exampleTranslation": "Mi padre trabaja en un hospital.",
    "notes": "Una persona (亻) en movimiento físico (動); kanji inventado en Japón (Kokuji)."
  },
  {
    "id": "k-ren-tsu",
    "kanji": "連",
    "spanish": "Acompañar / Conectar",
    "english": "Connect / Lead",
    "onyomi": "レン",
    "kunyomi": "つ・れる、つら・なる",
    "strokeCount": 10,
    "radicals": "辶 (camino)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "連れて行く",
        "furigana": "つれていく",
        "romaji": "tsurete iku",
        "meaning": "Llevar a alguien"
      },
      {
        "word": "連れて来る",
        "furigana": "つれてくる",
        "romaji": "tsurete kuru",
        "meaning": "Traer a alguien"
      },
      {
        "word": "連絡",
        "furigana": "れんらく",
        "romaji": "renraku",
        "meaning": "Contacto / Comunicación"
      }
    ],
    "exampleSentence": "子どもを動物園に連れて行きました。",
    "exampleTranslation": "Llevé a los niños al zoológico.",
    "notes": "Carros (車) avanzando en caravana por el camino (辶)."
  },
  {
    "id": "k-betsu-waka",
    "kanji": "別",
    "spanish": "Separar / Distinto / Despedida",
    "english": "Separate / Another",
    "onyomi": "ベツ",
    "kunyomi": "わか・れる",
    "strokeCount": 7,
    "radicals": "刀 (cuchillo)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "別れる",
        "furigana": "わかれる",
        "romaji": "wakareru",
        "meaning": "Despedirse / Separarse"
      },
      {
        "word": "別に",
        "furigana": "べつに",
        "romaji": "betsuni",
        "meaning": "En particular / No especialmente"
      },
      {
        "word": "特別",
        "furigana": "とくべつ",
        "romaji": "tokubetsu",
        "meaning": "Especial"
      }
    ],
    "exampleSentence": "駅で友達と別れました。",
    "exampleTranslation": "Me despedí de mi amigo en la estación.",
    "notes": "Separar con un cuchillo afilado (刂)."
  },
  {
    "id": "k-do-degree",
    "kanji": "度",
    "spanish": "Grado / Veces",
    "english": "Degree / Times",
    "onyomi": "ド、ト",
    "kunyomi": "たび",
    "strokeCount": 9,
    "radicals": "广 (techo inclinado)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "今度",
        "furigana": "こんど",
        "romaji": "kondo",
        "meaning": "La próxima vez"
      },
      {
        "word": "一度",
        "furigana": "いちど",
        "romaji": "ichido",
        "meaning": "Una vez"
      },
      {
        "word": "もう一度",
        "furigana": "もういちど",
        "romaji": "mou ichido",
        "meaning": "Otra vez más"
      },
      {
        "word": "温度",
        "furigana": "おんど",
        "romaji": "ondo",
        "meaning": "Temperatura"
      }
    ],
    "exampleSentence": "もう一度言ってください。",
    "exampleTranslation": "Dígalo una vez más, por favor.",
    "notes": "Medir la frecuencia o los grados en una escala."
  },
  {
    "id": "k-seki-aka",
    "kanji": "赤",
    "spanish": "Rojo",
    "english": "Red",
    "onyomi": "セキ、シャク",
    "kunyomi": "あか、あか・い",
    "strokeCount": 7,
    "radicals": "赤 (rojo)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "赤い",
        "furigana": "あかい",
        "romaji": "akai",
        "meaning": "Rojo"
      },
      {
        "word": "赤ちゃん",
        "furigana": "あかちゃん",
        "romaji": "akachan",
        "meaning": "Bebé (rojito)"
      },
      {
        "word": "赤ワイン",
        "furigana": "あかワイン",
        "romaji": "aka-wain",
        "meaning": "Vino tinto"
      }
    ],
    "exampleSentence": "赤いりんごを買いました。",
    "exampleTranslation": "Compré una manzana roja.",
    "notes": "Llama de fuego intensa con tierra calcinada."
  },
  {
    "id": "k-sei-ao",
    "kanji": "青",
    "spanish": "Azul / Verde naturaleza",
    "english": "Blue / Green",
    "onyomi": "セイ、ショウ",
    "kunyomi": "あお、あお・い",
    "strokeCount": 8,
    "radicals": "青 (azul)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "青い",
        "furigana": "あおい",
        "romaji": "aoi",
        "meaning": "Azul"
      },
      {
        "word": "青空",
        "furigana": "あおぞら",
        "romaji": "aozora",
        "meaning": "Cielo azul despejado"
      },
      {
        "word": "青年",
        "furigana": "せいねん",
        "romaji": "seinen",
        "meaning": "Joven / Juventud"
      }
    ],
    "exampleSentence": "空が青くてとても綺麗です。",
    "exampleTranslation": "El cielo está azul y muy hermoso.",
    "notes": "Brote fresco que crece hacia el cielo azul."
  },
  {
    "id": "k-shiki-iro",
    "kanji": "色",
    "spanish": "Color",
    "english": "Color",
    "onyomi": "ショク、シキ",
    "kunyomi": "いろ",
    "strokeCount": 6,
    "radicals": "色 (color)",
    "jlptLevel": "N5",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "色",
        "furigana": "いろ",
        "romaji": "iro",
        "meaning": "Color"
      },
      {
        "word": "色々",
        "furigana": "いろいろ",
        "romaji": "iroiro",
        "meaning": "Varios / Diversos"
      },
      {
        "word": "茶色",
        "furigana": "ちゃいろ",
        "romaji": "chairo",
        "meaning": "Color marrón / café"
      }
    ],
    "exampleSentence": "何色が好きですか。",
    "exampleTranslation": "¿Qué color te gusta?",
    "notes": "Dos personas interactuando con expresiones de color."
  },
  {
    "id": "k-mono-butsu",
    "kanji": "物",
    "spanish": "Cosa física / Objeto",
    "english": "Thing / Object",
    "onyomi": "ブツ、モツ",
    "kunyomi": "もの",
    "strokeCount": 8,
    "radicals": "牛 (vaca)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "食べ物",
        "furigana": "たべもの",
        "romaji": "tabemono",
        "meaning": "Comida"
      },
      {
        "word": "飲み物",
        "furigana": "のみもの",
        "romaji": "nomimono",
        "meaning": "Bebida"
      },
      {
        "word": "買い物",
        "furigana": "かいもの",
        "romaji": "kaimono",
        "meaning": "Compras"
      },
      {
        "word": "動物",
        "furigana": "どうぶつ",
        "romaji": "doubutsu",
        "meaning": "Animal"
      }
    ],
    "exampleSentence": "美味しい食べ物をたくさん食べました。",
    "exampleTranslation": "Comí mucha comida deliciosa.",
    "notes": "Una vaca (牛) de varios colores representando toda clase de cosas."
  },
  {
    "id": "k-tori-chou",
    "kanji": "鳥",
    "spanish": "Pájaro / Ave",
    "english": "Bird",
    "onyomi": "チョウ",
    "kunyomi": "とり",
    "strokeCount": 11,
    "radicals": "鳥 (pájaro)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "小鳥",
        "furigana": "ことり",
        "romaji": "kotori",
        "meaning": "Pajarito"
      },
      {
        "word": "焼き鳥",
        "furigana": "やきとり",
        "romaji": "yakitori",
        "meaning": "Brocheta de pollo asado"
      },
      {
        "word": "白鳥",
        "furigana": "はくちょう",
        "romaji": "hakuchou",
        "meaning": "Cisne"
      }
    ],
    "exampleSentence": "空を鳥が飛んでいます。",
    "exampleTranslation": "Los pájaros están volando en el cielo.",
    "notes": "Pájaro con cresta, ojo, alas y cola con cuatro plumas."
  },
  {
    "id": "k-ryou-fee",
    "kanji": "料",
    "spanish": "Ingredientes / Tarifa",
    "english": "Fee / Material",
    "onyomi": "リョウ",
    "kunyomi": "",
    "strokeCount": 10,
    "radicals": "米 (arroz)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "料理",
        "furigana": "りょうり",
        "romaji": "ryouri",
        "meaning": "Cocina / Platillo"
      },
      {
        "word": "料金",
        "furigana": "りょうきん",
        "romaji": "ryoukin",
        "meaning": "Tarifa / Precio"
      },
      {
        "word": "無料",
        "furigana": "むりょう",
        "romaji": "muryou",
        "meaning": "Gratis"
      }
    ],
    "exampleSentence": "日本料理が好きです。",
    "exampleTranslation": "Me gusta la comida japonesa.",
    "notes": "Medir arroz (米) con una pala (斗) para tasar una tarifa."
  },
  {
    "id": "k-ri-reason",
    "kanji": "理",
    "spanish": "Lógica / Razón",
    "english": "Reason / Logic",
    "onyomi": "リ",
    "kunyomi": "ことわり",
    "strokeCount": 11,
    "radicals": "王 (jade)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "料理",
        "furigana": "りょうり",
        "romaji": "ryouri",
        "meaning": "Cocinar"
      },
      {
        "word": "理由",
        "furigana": "りゆう",
        "romaji": "riyuu",
        "meaning": "Motivo / Razón"
      },
      {
        "word": "無理",
        "furigana": "むり",
        "romaji": "muri",
        "meaning": "Imposible / Excesivo"
      }
    ],
    "exampleSentence": "料理を作るのが得意です。",
    "exampleTranslation": "Se me da bien cocinar.",
    "notes": "Pulir las vetas naturales de una piedra de jade (王)."
  },
  {
    "id": "k-toku-special",
    "kanji": "特",
    "spanish": "Especial",
    "english": "Special",
    "onyomi": "トク、トッ",
    "kunyomi": "",
    "strokeCount": 10,
    "radicals": "牛 (vaca)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "特に",
        "furigana": "とくに",
        "romaji": "tokuni",
        "meaning": "Especialmente"
      },
      {
        "word": "特別",
        "furigana": "とくべつ",
        "romaji": "tokubetsu",
        "meaning": "Especial"
      },
      {
        "word": "特急",
        "furigana": "とっきゅう",
        "romaji": "tokkyuu",
        "meaning": "Tren expreso especial"
      }
    ],
    "exampleSentence": "寿司、特にサーモンが大好きです。",
    "exampleTranslation": "Me encanta el sushi, especialmente el salmón.",
    "notes": "Un toro consagrado de gran valor (牛 + 寺)."
  },
  {
    "id": "k-an-yasu",
    "kanji": "安",
    "spanish": "Barato / Tranquilo / Seguro",
    "english": "Cheap / Peaceful",
    "onyomi": "アン",
    "kunyomi": "やす・い",
    "strokeCount": 6,
    "radicals": "宀 (techo)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "安い",
        "furigana": "やすい",
        "romaji": "yasui",
        "meaning": "Barato"
      },
      {
        "word": "安心",
        "furigana": "あんしん",
        "romaji": "anshin",
        "meaning": "Tranquilidad / Alivio"
      },
      {
        "word": "安全",
        "furigana": "あんぜん",
        "romaji": "anzen",
        "meaning": "Seguro / Seguridad"
      }
    ],
    "exampleSentence": "このレストランは安くて美味しいです。",
    "exampleTranslation": "Este restaurante es barato y delicioso.",
    "notes": "Una mujer (女) segura y en paz bajo su propio techo (宀)."
  },
  {
    "id": "k-han-meshi",
    "kanji": "飯",
    "spanish": "Arroz cocido / Comida",
    "english": "Meal / Cooked rice",
    "onyomi": "ハン",
    "kunyomi": "めし",
    "strokeCount": 12,
    "radicals": "食 (comida)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "ご飯",
        "furigana": "ごはん",
        "romaji": "gohan",
        "meaning": "Comida / Arroz blanco"
      },
      {
        "word": "朝ご飯",
        "furigana": "あさごはん",
        "romaji": "asagohan",
        "meaning": "Desayuno"
      },
      {
        "word": "昼ご飯",
        "furigana": "ひるごはん",
        "romaji": "hirugohan",
        "meaning": "Almuerzo"
      },
      {
        "word": "晩ご飯",
        "furigana": "ばんごはん",
        "romaji": "bangohan",
        "meaning": "Cena"
      }
    ],
    "exampleSentence": "晩ご飯にカレーを食べました。",
    "exampleTranslation": "Cené curry.",
    "notes": "Alimento básico (食) que sostiene la vida."
  },
  {
    "id": "k-niku",
    "kanji": "肉",
    "spanish": "Carne",
    "english": "Meat",
    "onyomi": "ニク",
    "kunyomi": "",
    "strokeCount": 6,
    "radicals": "肉 (carne)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "牛肉",
        "furigana": "ぎゅうにく",
        "romaji": "gyuuniku",
        "meaning": "Carne de res"
      },
      {
        "word": "豚肉",
        "furigana": "ぶたにく",
        "romaji": "butaniku",
        "meaning": "Carne de cerdo"
      },
      {
        "word": "鳥肉",
        "furigana": "とりにく",
        "romaji": "toriniku",
        "meaning": "Carne de pollo"
      }
    ],
    "exampleSentence": "ロバートさんは肉を食べません。",
    "exampleTranslation": "Robert no come carne.",
    "notes": "Un trozo de costilla de carne con vetas."
  },
  {
    "id": "k-aku-waru",
    "kanji": "悪",
    "spanish": "Malo / Malvado",
    "english": "Bad / Evil",
    "onyomi": "アク",
    "kunyomi": "わる・い",
    "strokeCount": 11,
    "radicals": "心 (corazón)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "悪い",
        "furigana": "わるい",
        "romaji": "warui",
        "meaning": "Malo"
      },
      {
        "word": "気分が悪い",
        "furigana": "きぶんがわるい",
        "romaji": "kibun ga warui",
        "meaning": "Sentirse mal de salud"
      },
      {
        "word": "最悪",
        "furigana": "さいあく",
        "romaji": "saiaku",
        "meaning": "Lo peor"
      }
    ],
    "exampleSentence": "今日は天気が悪いです。",
    "exampleTranslation": "Hoy hace mal tiempo.",
    "notes": "Un corazón (心) que alberga intenciones torcidas."
  },
  {
    "id": "k-tai-karada",
    "kanji": "体",
    "spanish": "Cuerpo / Salud",
    "english": "Body",
    "onyomi": "タイ、テイ",
    "kunyomi": "からだ",
    "strokeCount": 7,
    "radicals": "人 (persona)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "体",
        "furigana": "からだ",
        "romaji": "karada",
        "meaning": "Cuerpo"
      },
      {
        "word": "体重",
        "furigana": "たいじゅう",
        "romaji": "taijuu",
        "meaning": "Peso corporal"
      },
      {
        "word": "体にいい",
        "furigana": "からだにいい",
        "romaji": "karada ni ii",
        "meaning": "Bueno para la salud"
      }
    ],
    "exampleSentence": "野菜は体にいいです。",
    "exampleTranslation": "Las verduras son buenas para la salud.",
    "notes": "Una persona (亻) junto a su base u origen (本)."
  },
  {
    "id": "k-kuu-sora",
    "kanji": "空",
    "spanish": "Cielo / Vacío",
    "english": "Sky / Empty",
    "onyomi": "クウ",
    "kunyomi": "そら、あ・く、から",
    "strokeCount": 8,
    "radicals": "穴 (cueva)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "空",
        "furigana": "そら",
        "romaji": "sora",
        "meaning": "Cielo"
      },
      {
        "word": "空港",
        "furigana": "くうこう",
        "romaji": "kuukou",
        "meaning": "Aeropuerto"
      },
      {
        "word": "空気",
        "furigana": "くうき",
        "romaji": "kuuki",
        "meaning": "Aire / Atmósfera"
      },
      {
        "word": "空手",
        "furigana": "からて",
        "romaji": "karate",
        "meaning": "Karate (mano vacía)"
      }
    ],
    "exampleSentence": "空港までバスで行きました。",
    "exampleTranslation": "Fui en autobús hasta el aeropuerto.",
    "notes": "La inmensidad abierta del firmamento."
  },
  {
    "id": "k-kou-minato",
    "kanji": "港",
    "spanish": "Puerto",
    "english": "Port / Harbor",
    "onyomi": "コウ",
    "kunyomi": "みなと",
    "strokeCount": 12,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "空港",
        "furigana": "くうこう",
        "romaji": "kuukou",
        "meaning": "Aeropuerto"
      },
      {
        "word": "港",
        "furigana": "みなと",
        "romaji": "minato",
        "meaning": "Puerto marítimo"
      }
    ],
    "exampleSentence": "成田空港に着きました。",
    "exampleTranslation": "Llegué al aeropuerto de Narita.",
    "notes": "Agua (氵) donde atracan los barcos."
  },
  {
    "id": "k-chaku-tsu",
    "kanji": "着",
    "spanish": "Llegar / Vestir",
    "english": "Arrive / Wear",
    "onyomi": "チャク",
    "kunyomi": "つ・く、き・る",
    "strokeCount": 12,
    "radicals": "目 (ojo)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "着く",
        "furigana": "つく",
        "romaji": "tsuku",
        "meaning": "Llegar a un lugar"
      },
      {
        "word": "着る",
        "furigana": "きる",
        "romaji": "kiru",
        "meaning": "Ponerse ropa"
      },
      {
        "word": "着物",
        "furigana": "きもの",
        "romaji": "kimono",
        "meaning": "Kimono (cosa que se viste)"
      }
    ],
    "exampleSentence": "東京駅に九時に着きます。",
    "exampleTranslation": "Llegaré a la estación de Tokio a las 9:00.",
    "notes": "Vestimenta de lana que cubre el cuerpo al llegar."
  },
  {
    "id": "k-dou-ona",
    "kanji": "同",
    "spanish": "Mismo / Igual",
    "english": "Same",
    "onyomi": "ドウ",
    "kunyomi": "おな・じ",
    "strokeCount": 6,
    "radicals": "口 (boca)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "同じ",
        "furigana": "おなじ",
        "romaji": "onaji",
        "meaning": "Mismo / Igual"
      },
      {
        "word": "同時に",
        "furigana": "どうじに",
        "romaji": "doujini",
        "meaning": "Al mismo tiempo"
      },
      {
        "word": "同僚",
        "furigana": "どうりょう",
        "romaji": "douryou",
        "meaning": "Colega de trabajo"
      }
    ],
    "exampleSentence": "私たちは同じクラスです。",
    "exampleTranslation": "Nosotros estamos en la misma clase.",
    "notes": "Varias personas hablando al unísono con una sola voz (口)."
  },
  {
    "id": "k-kai-umi",
    "kanji": "海",
    "spanish": "Mar / Océano",
    "english": "Sea / Ocean",
    "onyomi": "カイ",
    "kunyomi": "うみ",
    "strokeCount": 9,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "海",
        "furigana": "うみ",
        "romaji": "umi",
        "meaning": "Mar"
      },
      {
        "word": "海外",
        "furigana": "かいがい",
        "romaji": "kaigai",
        "meaning": "En el extranjero"
      },
      {
        "word": "海水浴",
        "furigana": "かいすいよく",
        "romaji": "kaisuiyoku",
        "meaning": "Bañarse en el mar"
      }
    ],
    "exampleSentence": "夏休みに沖縄の海へ行きました。",
    "exampleTranslation": "Fui al mar de Okinawa en las vacaciones de verano.",
    "notes": "Agua inmensa (氵) madre de todas las cosas (毎)."
  },
  {
    "id": "k-chuu-hiru",
    "kanji": "昼",
    "spanish": "Mediodía / Día",
    "english": "Noon / Daytime",
    "onyomi": "チュウ",
    "kunyomi": "ひる",
    "strokeCount": 9,
    "radicals": "日 (sol)",
    "jlptLevel": "N4",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "昼ご飯",
        "furigana": "ひるごはん",
        "romaji": "hirugohan",
        "meaning": "Almuerzo"
      },
      {
        "word": "昼休み",
        "furigana": "ひるやすみ",
        "romaji": "hiruyasumi",
        "meaning": "Descanso del mediodía"
      },
      {
        "word": "昼寝",
        "furigana": "ひるね",
        "romaji": "hirune",
        "meaning": "Siesta"
      }
    ],
    "exampleSentence": "昼休みにカフェでお弁当を食べました。",
    "exampleTranslation": "Comí mi bento en la cafetería durante el descanso del mediodía.",
    "notes": "El sol radiante iluminando el día entero."
  },
  {
    "id": "k-kare-kano",
    "kanji": "彼",
    "spanish": "Él / Novio",
    "english": "He / Boyfriend",
    "onyomi": "ヒ",
    "kunyomi": "かれ、かの",
    "strokeCount": 8,
    "radicals": "彳 (paso)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "彼",
        "furigana": "かれ",
        "romaji": "kare",
        "meaning": "Él"
      },
      {
        "word": "彼氏",
        "furigana": "かれし",
        "romaji": "kareshi",
        "meaning": "Novio"
      },
      {
        "word": "彼女",
        "furigana": "かのじょ",
        "romaji": "kanojo",
        "meaning": "Ella / Novia"
      }
    ],
    "exampleSentence": "彼と映画を見に行きました。",
    "exampleTranslation": "Fui al cine con él.",
    "notes": "Aquel que camina allá a lo lejos."
  },
  {
    "id": "k-zoku-tribe",
    "kanji": "族",
    "spanish": "Familia / Clan / Tribu",
    "english": "Tribe / Family",
    "onyomi": "ゾク",
    "kunyomi": "",
    "strokeCount": 11,
    "radicals": "方 (dirección)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "家族",
        "furigana": "かぞく",
        "romaji": "kazoku",
        "meaning": "Familia"
      },
      {
        "word": "民族",
        "furigana": "みんぞく",
        "romaji": "minzoku",
        "meaning": "Etnia / Pueblo"
      }
    ],
    "exampleSentence": "私の家族は四人です。",
    "exampleTranslation": "Mi familia es de cuatro personas.",
    "notes": "Gente unida bajo una misma bandera con flechas para defender el clan."
  },
  {
    "id": "k-shin-oya",
    "kanji": "親",
    "spanish": "Padres / Cercano / Amable",
    "english": "Parent / Intimate",
    "onyomi": "シン",
    "kunyomi": "おや、した・しい",
    "strokeCount": 16,
    "radicals": "見 (ver)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "両親",
        "furigana": "りょうしん",
        "romaji": "ryoushin",
        "meaning": "Padres (ambos)"
      },
      {
        "word": "親切",
        "furigana": "しんせつ",
        "romaji": "shinsetsu",
        "meaning": "Amable"
      },
      {
        "word": "親友",
        "furigana": "しんゆう",
        "romaji": "shin'yuu",
        "meaning": "Mejor amigo"
      }
    ],
    "exampleSentence": "日本の両親に電話をかけました。",
    "exampleTranslation": "Llamé por teléfono a mis padres en Japón.",
    "notes": "Los padres subidos en lo alto de un árbol (木) velando (見) por sus hijos."
  },
  {
    "id": "k-setsu-ki",
    "kanji": "切",
    "spanish": "Cortar / Urgente",
    "english": "Cut",
    "onyomi": "セツ、サイ",
    "kunyomi": "き・る、き・れる",
    "strokeCount": 4,
    "radicals": "刀 (espada)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "切る",
        "furigana": "きる",
        "romaji": "kiru",
        "meaning": "Cortar"
      },
      {
        "word": "切手",
        "furigana": "きって",
        "romaji": "kitte",
        "meaning": "Sello postal"
      },
      {
        "word": "大切",
        "furigana": "たいせつ",
        "romaji": "taisetsu",
        "meaning": "Importante / Valioso"
      },
      {
        "word": "親切",
        "furigana": "しんせつ",
        "romaji": "shinsetsu",
        "meaning": "Amable"
      }
    ],
    "exampleSentence": "ハサミで紙を切りました。",
    "exampleTranslation": "Corté el papel con las tijeras.",
    "notes": "Dividir con un golpe limpio de espada (刀)."
  },
  {
    "id": "k-ei-england",
    "kanji": "英",
    "spanish": "Excelente / Inglaterra",
    "english": "English / Splendid",
    "onyomi": "エイ",
    "kunyomi": "はなぶさ",
    "strokeCount": 8,
    "radicals": "艹 (hierba)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "英語",
        "furigana": "えいご",
        "romaji": "eigo",
        "meaning": "Idioma inglés"
      },
      {
        "word": "英国",
        "furigana": "えいこく",
        "romaji": "eikoku",
        "meaning": "Gran Bretaña / Reino Unido"
      },
      {
        "word": "英雄",
        "furigana": "えいゆう",
        "romaji": "eiyuu",
        "meaning": "Héroe"
      }
    ],
    "exampleSentence": "高校で英語を教えています。",
    "exampleTranslation": "Enseño inglés en la preparatoria.",
    "notes": "Florecer con excelencia."
  },
  {
    "id": "k-ten-mise",
    "kanji": "店",
    "spanish": "Tienda / Negocio",
    "english": "Shop / Store",
    "onyomi": "テン",
    "kunyomi": "みせ",
    "strokeCount": 8,
    "radicals": "广 (techo)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "店",
        "furigana": "みせ",
        "romaji": "mise",
        "meaning": "Tienda"
      },
      {
        "word": "店員",
        "furigana": "てんいん",
        "romaji": "ten'in",
        "meaning": "Dependiente"
      },
      {
        "word": "喫茶店",
        "furigana": "きっさてん",
        "romaji": "kissaten",
        "meaning": "Cafetería tradicional"
      },
      {
        "word": "書店",
        "furigana": "しょてん",
        "romaji": "shoten",
        "meaning": "Librería"
      }
    ],
    "exampleSentence": "駅の前の店で買い物しました。",
    "exampleTranslation": "Compré en la tienda frente a la estación.",
    "notes": "Un puesto con mostrador bajo un techo (广) para atender clientes."
  },
  {
    "id": "k-kyo-ko-sa",
    "kanji": "去",
    "spanish": "Pasado / Dejar atrás",
    "english": "Past / Leave",
    "onyomi": "キョ、コ",
    "kunyomi": "さ・る",
    "strokeCount": 5,
    "radicals": "厶 (privado)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "去年",
        "furigana": "きょねん",
        "romaji": "kyonen",
        "meaning": "El año pasado"
      },
      {
        "word": "過去",
        "furigana": "かこ",
        "romaji": "kako",
        "meaning": "El pasado"
      }
    ],
    "exampleSentence": "去年の夏休みに沖縄へ行きました。",
    "exampleTranslation": "Fui a Okinawa en las vacaciones del año pasado.",
    "notes": "El tiempo que se retira y queda atrás."
  },
  {
    "id": "k-kyuu-iso",
    "kanji": "急",
    "spanish": "Apresurarse / Urgente",
    "english": "Hurry / Urgent",
    "onyomi": "キュウ",
    "kunyomi": "いそ・ぐ",
    "strokeCount": 9,
    "radicals": "心 (corazón)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "急ぐ",
        "furigana": "いそぐ",
        "romaji": "isogu",
        "meaning": "Apresurarse"
      },
      {
        "word": "急に",
        "furigana": "きゅうに",
        "romaji": "kyuuni",
        "meaning": "De repente"
      },
      {
        "word": "特急",
        "furigana": "とっきゅう",
        "romaji": "tokkyuu",
        "meaning": "Tren expreso limitado"
      }
    ],
    "exampleSentence": "遅刻しそうなので急ぎました。",
    "exampleTranslation": "Me apresuré porque iba a llegar tarde.",
    "notes": "El corazón (心) latiendo con prisa bajo presión."
  },
  {
    "id": "k-jou-no",
    "kanji": "乗",
    "spanish": "Subir a vehículo / Montar",
    "english": "Ride / Board",
    "onyomi": "ジョウ",
    "kunyomi": "の・る、の・せる",
    "strokeCount": 9,
    "radicals": "丿 (trazo)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "乗る",
        "furigana": "のる",
        "romaji": "noru",
        "meaning": "Subir a un transporte"
      },
      {
        "word": "乗り物",
        "furigana": "のりもの",
        "romaji": "norimono",
        "meaning": "Vehículo"
      },
      {
        "word": "乗り換える",
        "furigana": "のりかえる",
        "romaji": "norikaeru",
        "meaning": "Hacer transbordo"
      }
    ],
    "exampleSentence": "バスに乗って美術館へ行きました。",
    "exampleTranslation": "Fui al museo de arte en autobús.",
    "notes": "Una persona subida a lomos de un caballo o carruaje."
  },
  {
    "id": "k-on-oto",
    "kanji": "音",
    "spanish": "Sonido / Ruido",
    "english": "Sound",
    "onyomi": "オン、イン",
    "kunyomi": "おと、ね",
    "strokeCount": 9,
    "radicals": "音 (sonido)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "音楽",
        "furigana": "おんがく",
        "romaji": "ongaku",
        "meaning": "Música"
      },
      {
        "word": "音",
        "furigana": "おと",
        "romaji": "oto",
        "meaning": "Sonido"
      },
      {
        "word": "発音",
        "furigana": "はつおん",
        "romaji": "hatsuon",
        "meaning": "Pronunciación"
      }
    ],
    "exampleSentence": "毎晩、好きな音楽を聞きます。",
    "exampleTranslation": "Todas las noches escucho mi música favorita.",
    "notes": "Sol (日) de palabras brotando como notas musicales."
  },
  {
    "id": "k-gaku-raku",
    "kanji": "楽",
    "spanish": "Música / Divertido / Cómodo",
    "english": "Pleasure / Music",
    "onyomi": "ガク、ラク",
    "kunyomi": "たの・しい、たの・しむ",
    "strokeCount": 13,
    "radicals": "木 (árbol)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "音楽",
        "furigana": "おんがく",
        "romaji": "ongaku",
        "meaning": "Música"
      },
      {
        "word": "楽しい",
        "furigana": "たのしい",
        "romaji": "tanoshii",
        "meaning": "Divertido"
      },
      {
        "word": "楽な",
        "furigana": "らくな",
        "romaji": "raku na",
        "meaning": "Cómodo / Fácil"
      }
    ],
    "exampleSentence": "日本語の授業はとても楽しいです。",
    "exampleTranslation": "La clase de japonés es muy divertida.",
    "notes": "Cascabeles e instrumentos de madera que alegran las fiestas."
  },
  {
    "id": "k-i-doctor",
    "kanji": "医",
    "spanish": "Medicina / Doctor",
    "english": "Doctor / Medicine",
    "onyomi": "イ",
    "kunyomi": "",
    "strokeCount": 7,
    "radicals": "匚 (caja)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "医者",
        "furigana": "いしゃ",
        "romaji": "isha",
        "meaning": "Médico / Doctor"
      },
      {
        "word": "医院",
        "furigana": "いいん",
        "romaji": "iin",
        "meaning": "Clínica médica"
      },
      {
        "word": "医学",
        "furigana": "いがく",
        "romaji": "igaku",
        "meaning": "Medicina (carrera)"
      }
    ],
    "exampleSentence": "風邪を引いたので医者に行きました。",
    "exampleTranslation": "Fui al doctor porque me resfrié.",
    "notes": "Una flecha (矢) dentro de un botiquín médico (匚)."
  },
  {
    "id": "k-sha-mono",
    "kanji": "者",
    "spanish": "Persona / Profesional",
    "english": "Person / Specialist",
    "onyomi": "シャ",
    "kunyomi": "もの",
    "strokeCount": 8,
    "radicals": "老 (anciano)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "医者",
        "furigana": "いしゃ",
        "romaji": "isha",
        "meaning": "Médico"
      },
      {
        "word": "学者",
        "furigana": "がくしゃ",
        "romaji": "gakusha",
        "meaning": "Erudito"
      },
      {
        "word": "若者",
        "furigana": "わかもの",
        "romaji": "wakamono",
        "meaning": "Joven"
      }
    ],
    "exampleSentence": "将来、医者になりたいです。",
    "exampleTranslation": "En el futuro quiero ser médico.",
    "notes": "Una persona versada o dedicada a una profesión."
  },
  {
    "id": "k-eki",
    "kanji": "駅",
    "spanish": "Estación de tren",
    "english": "Station",
    "onyomi": "エキ",
    "kunyomi": "",
    "strokeCount": 14,
    "radicals": "馬 (caballo)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "駅",
        "furigana": "えき",
        "romaji": "eki",
        "meaning": "Estación"
      },
      {
        "word": "駅前",
        "furigana": "えきまえ",
        "romaji": "ekimae",
        "meaning": "Frente a la estación"
      },
      {
        "word": "駅員",
        "furigana": "えきいん",
        "romaji": "ekiin",
        "meaning": "Empleado de la estación"
      }
    ],
    "exampleSentence": "新宿駅はとても広いです。",
    "exampleTranslation": "La estación de Shinjuku es muy amplia.",
    "notes": "Puesto de relevo con caballos (馬)."
  },
  {
    "id": "k-nan",
    "kanji": "難",
    "spanish": "Difícil / Desastre",
    "english": "Difficult / Trouble",
    "onyomi": "ナン",
    "kunyomi": "むずか・しい、かた・い",
    "strokeCount": 18,
    "radicals": "隹 (pájaro)",
    "jlptLevel": "N3",
    "compounds": [
      {
        "word": "難しい",
        "furigana": "むずかしい",
        "romaji": "muzukashii",
        "meaning": "Difícil / Complicado"
      },
      {
        "word": "困難",
        "furigana": "こんなん",
        "romaji": "konnan",
        "meaning": "Dificultad / Apuro"
      },
      {
        "word": "難民",
        "furigana": "なんみん",
        "romaji": "nanmin",
        "meaning": "Refugiado"
      }
    ],
    "exampleSentence": "日本語の漢字は難しいですが、面白いです。",
    "exampleTranslation": "Los kanjis japoneses son difíciles, pero interesantes.",
    "notes": "Uno de los kanjis adjetivales más populares del JLPT N3."
  },
  {
    "id": "k-yume",
    "kanji": "夢",
    "spanish": "Sueño / Ilusión",
    "english": "Dream",
    "onyomi": "ム",
    "kunyomi": "ゆめ",
    "strokeCount": 13,
    "radicals": "夕 (tarde/noche)",
    "jlptLevel": "N3",
    "compounds": [
      {
        "word": "夢",
        "furigana": "ゆめ",
        "romaji": "yume",
        "meaning": "Sueño"
      },
      {
        "word": "悪夢",
        "furigana": "あくむ",
        "romaji": "akumu",
        "meaning": "Pesadilla"
      }
    ],
    "exampleSentence": "私の夢は日本に住むことです。",
    "exampleTranslation": "Mi sueño es vivir en Japón.",
    "notes": "Césped en la noche bajo la luna."
  },
  {
    "id": "k-kou-shiawa",
    "kanji": "幸",
    "spanish": "Felicidad / Fortuna",
    "english": "Happiness / Luck",
    "onyomi": "コウ",
    "kunyomi": "さいわ・い、しあわ・せ",
    "strokeCount": 8,
    "radicals": "干 (escudo)",
    "jlptLevel": "N3",
    "compounds": [
      {
        "word": "幸せ",
        "furigana": "しあわせ",
        "romaji": "shiawase",
        "meaning": "Felicidad / Feliz"
      },
      {
        "word": "幸福",
        "furigana": "こうふく",
        "romaji": "koufuku",
        "meaning": "Felicidad / Dicha"
      }
    ],
    "exampleSentence": "毎日健康でいられて幸せです。",
    "exampleTranslation": "Soy feliz pudiendo estar sano todos los días.",
    "notes": "Escapar ileso del cautiverio; bendición y felicidad."
  },
  {
    "id": "k-ai",
    "kanji": "愛",
    "spanish": "Amor / Afecto",
    "english": "Love / Affection",
    "onyomi": "アイ",
    "kunyomi": "いと・しい",
    "strokeCount": 13,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "compounds": [
      {
        "word": "愛",
        "furigana": "あい",
        "romaji": "ai",
        "meaning": "Amor"
      },
      {
        "word": "愛する",
        "furigana": "あいする",
        "romaji": "ai suru",
        "meaning": "Amar"
      },
      {
        "word": "恋愛",
        "furigana": "れんあい",
        "romaji": "ren'ai",
        "meaning": "Romance / Amoríos"
      }
    ],
    "exampleSentence": "家族と友達を深く愛しています。",
    "exampleTranslation": "Amo profundamente a mi familia y amigos.",
    "notes": "El corazón (心) que se vuelve hacia alguien con ternura."
  },
  {
    "id": "k-shou-ka",
    "kanji": "勝",
    "spanish": "Ganar / Victoria",
    "english": "Win / Victory",
    "onyomi": "ショウ",
    "kunyomi": "か・つ、まさ・る",
    "strokeCount": 12,
    "radicals": "力 (fuerza)",
    "jlptLevel": "N3",
    "compounds": [
      {
        "word": "勝つ",
        "furigana": "かつ",
        "romaji": "katsu",
        "meaning": "Ganar"
      },
      {
        "word": "勝利",
        "furigana": "しょうり",
        "romaji": "shouri",
        "meaning": "Victoria"
      },
      {
        "word": "勝手",
        "furigana": "かって",
        "romaji": "katte",
        "meaning": "A capricho / Por cuenta propia"
      }
    ],
    "exampleSentence": "私たちのチームが試合に勝ちました。",
    "exampleTranslation": "Nuestro equipo ganó el partido.",
    "notes": "Aplicar fuerza (力) superior para obtener el triunfo."
  },
  {
    "id": "k-tai-makeru",
    "kanji": "負",
    "spanish": "Perder / Derrota",
    "english": "Lose / Defeat",
    "onyomi": "フ",
    "kunyomi": "ま・ける、お・う",
    "strokeCount": 9,
    "radicals": "貝 (concha)",
    "jlptLevel": "N3",
    "compounds": [
      {
        "word": "負ける",
        "furigana": "まける",
        "romaji": "makeru",
        "meaning": "Perder"
      },
      {
        "word": "勝負",
        "furigana": "しょうぶ",
        "romaji": "shoubu",
        "meaning": "Duelo / Enfrentamiento"
      }
    ],
    "exampleSentence": "絶対に負けません。",
    "exampleTranslation": "No perderé de ninguna manera.",
    "notes": "Cargar la derrota sobre la espalda."
  },
  {
    "id": "k-exp-179",
    "kanji": "代",
    "spanish": "Sustituir / Era / Costo",
    "english": "Substitute / Age",
    "onyomi": "ダイ、タイ",
    "kunyomi": "か・わる、よ",
    "strokeCount": 5,
    "radicals": "人 (persona)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "時代",
        "furigana": "じだい",
        "romaji": "jidai",
        "meaning": "Época / Era"
      }
    ],
    "exampleSentence": "新しい時代が始まりました。",
    "exampleTranslation": "Comenzó una nueva era.",
    "notes": "Genki Lección 14 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-180",
    "kanji": "留",
    "spanish": "Permanecer / Detener",
    "english": "Detain / Stay",
    "onyomi": "リュウ、ル",
    "kunyomi": "と・める",
    "strokeCount": 10,
    "radicals": "田 (campo)",
    "jlptLevel": "N4",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "留学",
        "furigana": "りゅうがく",
        "romaji": "ryuugaku",
        "meaning": "Estudiar en el extranjero"
      }
    ],
    "exampleSentence": "来年日本に留学したいです。",
    "exampleTranslation": "El próximo año quiero estudiar en Japón.",
    "notes": "Genki Lección 14 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-181",
    "kanji": "当",
    "spanish": "Acertar / Este",
    "english": "Hit / Right",
    "onyomi": "トウ",
    "kunyomi": "あ・たる",
    "strokeCount": 6,
    "radicals": "小 (pequeño)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "本当",
        "furigana": "ほんとう",
        "romaji": "hontou",
        "meaning": "Verdad / Realidad"
      }
    ],
    "exampleSentence": "それは本当ですか。",
    "exampleTranslation": "¿Eso es verdad?",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-182",
    "kanji": "死",
    "spanish": "Muerte / Morir",
    "english": "Death / Die",
    "onyomi": "シ",
    "kunyomi": "し・ぬ",
    "strokeCount": 6,
    "radicals": "歹 (hueso)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "死ぬ",
        "furigana": "しぬ",
        "romaji": "shinu",
        "meaning": "Morir"
      }
    ],
    "exampleSentence": "虫が死んでしまいました。",
    "exampleTranslation": "El insecto murió.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-183",
    "kanji": "意",
    "spanish": "Idea / Mente / Intención",
    "english": "Idea / Mind",
    "onyomi": "イ",
    "kunyomi": "ー",
    "strokeCount": 13,
    "radicals": "心 (corazón)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "意味",
        "furigana": "いみ",
        "romaji": "imi",
        "meaning": "Significado"
      }
    ],
    "exampleSentence": "この漢字の意味は何ですか。",
    "exampleTranslation": "¿Cuál es el significado de este kanji?",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-184",
    "kanji": "味",
    "spanish": "Sabor / Gusto",
    "english": "Flavor / Taste",
    "onyomi": "ミ",
    "kunyomi": "あじ",
    "strokeCount": 8,
    "radicals": "口 (boca)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "趣味",
        "furigana": "しゅみ",
        "romaji": "shumi",
        "meaning": "Pasatiempo / Hobby"
      }
    ],
    "exampleSentence": "私の趣味は読書です。",
    "exampleTranslation": "Mi pasatiempo es la lectura.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-185",
    "kanji": "注",
    "spanish": "Verter / Concentrarse",
    "english": "Pour / Concentrate",
    "onyomi": "チュウ",
    "kunyomi": "そそ・ぐ",
    "strokeCount": 8,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "注意",
        "furigana": "ちゅうい",
        "romaji": "chuui",
        "meaning": "Atención / Cuidado"
      }
    ],
    "exampleSentence": "車に注意してください。",
    "exampleTranslation": "Por favor ten cuidado con los autos.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-186",
    "kanji": "夏",
    "spanish": "Verano",
    "english": "Summer",
    "onyomi": "カ",
    "kunyomi": "なつ",
    "strokeCount": 10,
    "radicals": "夂 (invierno)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "夏休み",
        "furigana": "なつやすみ",
        "romaji": "natsuyasumi",
        "meaning": "Vacaciones de verano"
      }
    ],
    "exampleSentence": "夏休みに海へ行きたいです。",
    "exampleTranslation": "Quiero ir al mar en las vacaciones de verano.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-187",
    "kanji": "魚",
    "spanish": "Pez / Pescado",
    "english": "Fish",
    "onyomi": "ギョ",
    "kunyomi": "さかな、うお",
    "strokeCount": 11,
    "radicals": "魚 (pez)",
    "jlptLevel": "N5",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "金魚",
        "furigana": "きんぎょ",
        "romaji": "kingyo",
        "meaning": "Pez dorado"
      }
    ],
    "exampleSentence": "晩ご飯に魚を食べました。",
    "exampleTranslation": "Comí pescado en la cena.",
    "notes": "Genki Lección 15 • Nivel JLPT N5"
  },
  {
    "id": "k-exp-188",
    "kanji": "寺",
    "spanish": "Templo budista",
    "english": "Buddhist temple",
    "onyomi": "ジ",
    "kunyomi": "てら",
    "strokeCount": 6,
    "radicals": "寸 (pulgada)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "お寺",
        "furigana": "おてら",
        "romaji": "otera",
        "meaning": "Templo budista"
      }
    ],
    "exampleSentence": "京都には古いお寺がたくさんあります。",
    "exampleTranslation": "En Kioto hay muchos templos antiguos.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-189",
    "kanji": "広",
    "spanish": "Amplio / Espacioso",
    "english": "Wide / Spacious",
    "onyomi": "コウ",
    "kunyomi": "ひろ・い",
    "strokeCount": 5,
    "radicals": "广 (edificio)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "広い",
        "furigana": "ひろい",
        "romaji": "hiroi",
        "meaning": "Amplio / Espacioso"
      }
    ],
    "exampleSentence": "この公園はとても広いです。",
    "exampleTranslation": "Este parque es muy amplio.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-190",
    "kanji": "転",
    "spanish": "Rodar / Girar",
    "english": "Revolve / Turn",
    "onyomi": "テン",
    "kunyomi": "ころ・がる",
    "strokeCount": 11,
    "radicals": "車 (coche)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "自転車",
        "furigana": "じてんしゃ",
        "romaji": "jitensha",
        "meaning": "Bicicleta"
      }
    ],
    "exampleSentence": "毎日自転車で大学に行きます。",
    "exampleTranslation": "Voy a la universidad en bicicleta todos los días.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-191",
    "kanji": "借",
    "spanish": "Pedir prestado",
    "english": "Borrow",
    "onyomi": "シャク",
    "kunyomi": "か・りる",
    "strokeCount": 10,
    "radicals": "人 (persona)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "借りる",
        "furigana": "かりる",
        "romaji": "kariru",
        "meaning": "Pedir prestado"
      }
    ],
    "exampleSentence": "図書館で本を借りました。",
    "exampleTranslation": "Pedí prestado un libro en la biblioteca.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-192",
    "kanji": "走",
    "spanish": "Correr",
    "english": "Run",
    "onyomi": "ソウ",
    "kunyomi": "はし・る",
    "strokeCount": 7,
    "radicals": "走 (correr)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "走る",
        "furigana": "はしる",
        "romaji": "hashiru",
        "meaning": "Correr"
      }
    ],
    "exampleSentence": "毎朝公園を走っています。",
    "exampleTranslation": "Corro en el parque todas las mañanas.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-193",
    "kanji": "建",
    "spanish": "Construir / Edificar",
    "english": "Build",
    "onyomi": "ケン、コン",
    "kunyomi": "た・てる",
    "strokeCount": 9,
    "radicals": "廴 (marchar)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "建物",
        "furigana": "たてもの",
        "romaji": "tatemono",
        "meaning": "Edificio"
      }
    ],
    "exampleSentence": "あの白い建物は美術館です。",
    "exampleTranslation": "Aquel edificio blanco es un museo de arte.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-194",
    "kanji": "地",
    "spanish": "Tierra / Suelo",
    "english": "Ground / Earth",
    "onyomi": "チ、ジ",
    "kunyomi": "ー",
    "strokeCount": 6,
    "radicals": "土 (tierra)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "地下鉄",
        "furigana": "ちかてつ",
        "romaji": "chikatetsu",
        "meaning": "Metro / Subterráneo"
      }
    ],
    "exampleSentence": "東京は地下鉄が便利です。",
    "exampleTranslation": "En Tokio el metro es muy conveniente.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-195",
    "kanji": "場",
    "spanish": "Lugar / Plaza",
    "english": "Place / Location",
    "onyomi": "ジョウ",
    "kunyomi": "ば",
    "strokeCount": 12,
    "radicals": "土 (tierra)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "場所",
        "furigana": "ばしょ",
        "romaji": "basho",
        "meaning": "Lugar / Ubicación"
      }
    ],
    "exampleSentence": "パーティーの場所を教えてください。",
    "exampleTranslation": "Por favor dime el lugar de la fiesta.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-196",
    "kanji": "足",
    "spanish": "Pie / Pierna / Suficiente",
    "english": "Foot / Sufficient",
    "onyomi": "ソク",
    "kunyomi": "あし、た・りる",
    "strokeCount": 7,
    "radicals": "足 (pie)",
    "jlptLevel": "N5",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "足りる",
        "furigana": "たりる",
        "romaji": "tariru",
        "meaning": "Ser suficiente"
      }
    ],
    "exampleSentence": "お金が足りません。",
    "exampleTranslation": "No me alcanza el dinero.",
    "notes": "Genki Lección 15 • Nivel JLPT N5"
  },
  {
    "id": "k-exp-197",
    "kanji": "通",
    "spanish": "Pasar / Concurrir",
    "english": "Pass through / Commute",
    "onyomi": "ツウ",
    "kunyomi": "とお・る、かよ・う",
    "strokeCount": 10,
    "radicals": "辵 (camino)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "通う",
        "furigana": "かよう",
        "romaji": "kayou",
        "meaning": "Asistir regularmente"
      }
    ],
    "exampleSentence": "日本語学校に通っています。",
    "exampleTranslation": "Asisto a una escuela de japonés.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-198",
    "kanji": "供",
    "spanish": "Ofrecer / Acompañante",
    "english": "Offer / Companion",
    "onyomi": "キョウ、ク",
    "kunyomi": "とも",
    "strokeCount": 8,
    "radicals": "人 (persona)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "子供",
        "furigana": "こども",
        "romaji": "kodomo",
        "meaning": "Niño / Hijo"
      }
    ],
    "exampleSentence": "公園で子供たちが遊んでいます。",
    "exampleTranslation": "Los niños están jugando en el parque.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-199",
    "kanji": "世",
    "spanish": "Mundo / Generación",
    "english": "World / Generation",
    "onyomi": "セイ、セ",
    "kunyomi": "よ",
    "strokeCount": 5,
    "radicals": "一 (uno)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "世界",
        "furigana": "せかい",
        "romaji": "sekai",
        "meaning": "El mundo"
      }
    ],
    "exampleSentence": "世界中を旅行したいです。",
    "exampleTranslation": "Quiero viajar por todo el mundo.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-200",
    "kanji": "界",
    "spanish": "Límite / Mundo",
    "english": "World / Boundary",
    "onyomi": "カイ",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "田 (campo)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "世界",
        "furigana": "せかい",
        "romaji": "sekai",
        "meaning": "Mundo"
      }
    ],
    "exampleSentence": "世界で一番高い山です。",
    "exampleTranslation": "Es la montaña más alta del mundo.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-201",
    "kanji": "全",
    "spanish": "Todo / Completo",
    "english": "Whole / All",
    "onyomi": "ゼン",
    "kunyomi": "まった・く、すべ・て",
    "strokeCount": 6,
    "radicals": "入 (entrar)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "全部",
        "furigana": "ぜんぶ",
        "romaji": "zenbu",
        "meaning": "Todo / Por completo"
      }
    ],
    "exampleSentence": "宿題を全部やりました。",
    "exampleTranslation": "Hice toda la tarea.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-202",
    "kanji": "部",
    "spanish": "Sección / Departamento / Club",
    "english": "Section / Club",
    "onyomi": "ブ",
    "kunyomi": "ー",
    "strokeCount": 11,
    "radicals": "邑 (pueblo)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "部屋",
        "furigana": "へや",
        "romaji": "heya",
        "meaning": "Habitación / Cuarto"
      }
    ],
    "exampleSentence": "私の部屋は二階にあります。",
    "exampleTranslation": "Mi habitación está en el segundo piso.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-203",
    "kanji": "始",
    "spanish": "Comenzar / Empezar",
    "english": "Begin / Start",
    "onyomi": "シ",
    "kunyomi": "はじ・める、はじ・まる",
    "strokeCount": 8,
    "radicals": "女 (mujer)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "始まる",
        "furigana": "はじまる",
        "romaji": "hajimaru",
        "meaning": "Empezar (intransitivo)"
      }
    ],
    "exampleSentence": "授業は九時に始まります。",
    "exampleTranslation": "La clase empieza a las nueve.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-204",
    "kanji": "週",
    "spanish": "Semana",
    "english": "Week",
    "onyomi": "シュウ",
    "kunyomi": "ー",
    "strokeCount": 11,
    "radicals": "辵 (camino)",
    "jlptLevel": "N5",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "来週",
        "furigana": "らいしゅう",
        "romaji": "raishuu",
        "meaning": "La próxima semana"
      }
    ],
    "exampleSentence": "来週テストがあります。",
    "exampleTranslation": "La próxima semana hay examen.",
    "notes": "Genki Lección 16 • Nivel JLPT N5"
  },
  {
    "id": "k-exp-205",
    "kanji": "以",
    "spanish": "Por medio de / Desde",
    "english": "By means of / Compared with",
    "onyomi": "イ",
    "kunyomi": "ー",
    "strokeCount": 5,
    "radicals": "人 (persona)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "以上",
        "furigana": "いじょう",
        "romaji": "ijou",
        "meaning": "Más de / Eso es todo"
      }
    ],
    "exampleSentence": "質問は以上です。",
    "exampleTranslation": "Eso es todo en cuanto a preguntas.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-206",
    "kanji": "考",
    "spanish": "Pensar / Considerar",
    "english": "Think / Consider",
    "onyomi": "コウ",
    "kunyomi": "かんが・える",
    "strokeCount": 6,
    "radicals": "老 (anciano)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "考える",
        "furigana": "かんがえる",
        "romaji": "kangaeru",
        "meaning": "Pensar / Reflexionar"
      }
    ],
    "exampleSentence": "将来のことを考えています。",
    "exampleTranslation": "Estoy pensando en mi futuro.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-207",
    "kanji": "開",
    "spanish": "Abrir",
    "english": "Open",
    "onyomi": "カイ",
    "kunyomi": "あ・ける、ひら・く",
    "strokeCount": 12,
    "radicals": "門 (puerta)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "開ける",
        "furigana": "あける",
        "romaji": "akeru",
        "meaning": "Abrir"
      }
    ],
    "exampleSentence": "窓を開けてもいいですか。",
    "exampleTranslation": "¿Puedo abrir la ventana?",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-208",
    "kanji": "屋",
    "spanish": "Techo / Tienda / Habitación",
    "english": "Roof / Shop",
    "onyomi": "オク",
    "kunyomi": "や",
    "strokeCount": 9,
    "radicals": "尸 (cuerpo)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "本屋",
        "furigana": "ほんや",
        "romaji": "hon'ya",
        "meaning": "Librería"
      }
    ],
    "exampleSentence": "駅前の本屋で雑誌を買いました。",
    "exampleTranslation": "Compré una revista en la librería frente a la estación.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-209",
    "kanji": "方",
    "spanish": "Dirección / Persona / Manera",
    "english": "Direction / Way / Person",
    "onyomi": "ホウ",
    "kunyomi": "かた",
    "strokeCount": 4,
    "radicals": "方 (dirección)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "読み方",
        "furigana": "よみかた",
        "romaji": "yomikata",
        "meaning": "Forma de leer"
      }
    ],
    "exampleSentence": "この漢字の読み方を教えてください。",
    "exampleTranslation": "Por favor enséñame cómo se lee este kanji.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-210",
    "kanji": "運",
    "spanish": "Transportar / Suerte",
    "english": "Carry / Luck",
    "onyomi": "ウン",
    "kunyomi": "はこ・ぶ",
    "strokeCount": 12,
    "radicals": "辵 (camino)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "運動",
        "furigana": "うんどう",
        "romaji": "undou",
        "meaning": "Ejercicio físico"
      }
    ],
    "exampleSentence": "健康のために運動しています。",
    "exampleTranslation": "Hago ejercicio por mi salud.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-211",
    "kanji": "動",
    "spanish": "Moverse",
    "english": "Move",
    "onyomi": "ドウ",
    "kunyomi": "うご・く",
    "strokeCount": 11,
    "radicals": "力 (fuerza)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "動物",
        "furigana": "どうぶつ",
        "romaji": "doubutsu",
        "meaning": "Animal"
      }
    ],
    "exampleSentence": "動物園でパンダを見ました。",
    "exampleTranslation": "Vi un panda en el zoológico.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-212",
    "kanji": "教",
    "spanish": "Enseñar / Religión",
    "english": "Teach",
    "onyomi": "キョウ",
    "kunyomi": "おし・える",
    "strokeCount": 11,
    "radicals": "攴 (golpear)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "教室",
        "furigana": "きょうしつ",
        "romaji": "kyoushitsu",
        "meaning": "Salón de clases"
      }
    ],
    "exampleSentence": "教室に学生が十人います。",
    "exampleTranslation": "Hay diez estudiantes en el salón de clases.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-213",
    "kanji": "室",
    "spanish": "Habitación / Cuarto",
    "english": "Room",
    "onyomi": "シツ",
    "kunyomi": "むろ",
    "strokeCount": 9,
    "radicals": "宀 (techo)",
    "jlptLevel": "N4",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "教室",
        "furigana": "きょうしつ",
        "romaji": "kyoushitsu",
        "meaning": "Aula / Salón"
      }
    ],
    "exampleSentence": "会議室は三階です。",
    "exampleTranslation": "La sala de juntas está en el tercer piso.",
    "notes": "Genki Lección 16 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-214",
    "kanji": "歳",
    "spanish": "Años de edad",
    "english": "Years old",
    "onyomi": "サイ、セイ",
    "kunyomi": "とし",
    "strokeCount": 13,
    "radicals": "止 (detener)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "二十歳",
        "furigana": "はたち",
        "romaji": "hatachi",
        "meaning": "Veinte años de edad"
      }
    ],
    "exampleSentence": "今年二十歳になりました。",
    "exampleTranslation": "Este año cumplí veinte años.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-215",
    "kanji": "習",
    "spanish": "Aprender / Practicar",
    "english": "Learn / Practice",
    "onyomi": "シュウ",
    "kunyomi": "なら・う",
    "strokeCount": 11,
    "radicals": "羽 (plumas)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "練習",
        "furigana": "れんしゅう",
        "romaji": "renshuu",
        "meaning": "Práctica"
      }
    ],
    "exampleSentence": "毎日漢字を練習しています。",
    "exampleTranslation": "Practico kanji todos los días.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-216",
    "kanji": "主",
    "spanish": "Principal / Dueño / Esposo",
    "english": "Main / Master",
    "onyomi": "シュ",
    "kunyomi": "ぬし、おも",
    "strokeCount": 5,
    "radicals": "丶 (punto)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "ご主人",
        "furigana": "ごしゅじん",
        "romaji": "goshujin",
        "meaning": "Esposo (de otra persona)"
      }
    ],
    "exampleSentence": "ご主人はどんなお仕事をしていますか。",
    "exampleTranslation": "¿En qué trabaja su esposo?",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-217",
    "kanji": "結",
    "spanish": "Atar / Concluir",
    "english": "Tie / Bind",
    "onyomi": "ケツ",
    "kunyomi": "むす・ぶ、ゆ・う",
    "strokeCount": 12,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "結婚",
        "furigana": "けっこん",
        "romaji": "kekkon",
        "meaning": "Matrimonio"
      }
    ],
    "exampleSentence": "姉は来月結婚します。",
    "exampleTranslation": "Mi hermana mayor se casa el próximo mes.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-218",
    "kanji": "婚",
    "spanish": "Matrimonio",
    "english": "Marriage",
    "onyomi": "コン",
    "kunyomi": "ー",
    "strokeCount": 11,
    "radicals": "女 (mujer)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "結婚",
        "furigana": "けっこん",
        "romaji": "kekkon",
        "meaning": "Matrimonio"
      }
    ],
    "exampleSentence": "結婚おめでとうございます。",
    "exampleTranslation": "Muchas felicidades por su matrimonio.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-219",
    "kanji": "集",
    "spanish": "Reunir / Coleccionar",
    "english": "Gather / Collect",
    "onyomi": "シュウ",
    "kunyomi": "あつ・まる、あつ・める",
    "strokeCount": 12,
    "radicals": "隹 (pájaro)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "集める",
        "furigana": "あつめる",
        "romaji": "atsumeru",
        "meaning": "Coleccionar / Reunir"
      }
    ],
    "exampleSentence": "古い切手を集めています。",
    "exampleTranslation": "Colecciono estampillas antiguas.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-220",
    "kanji": "発",
    "spanish": "Partir / Emitir / Publicar",
    "english": "Departure / Publish",
    "onyomi": "ハツ、ホツ",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "癶 (pasos)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "出発",
        "furigana": "しゅっぱつ",
        "romaji": "shuppatsu",
        "meaning": "Salida / Partida"
      }
    ],
    "exampleSentence": "バスは八時に出発します。",
    "exampleTranslation": "El autobús sale a las ocho.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-221",
    "kanji": "表",
    "spanish": "Superficie / Expresar / Tabla",
    "english": "Surface / Express",
    "onyomi": "ヒョウ",
    "kunyomi": "おもて、あらわ・す",
    "strokeCount": 8,
    "radicals": "衣 (ropa)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "発表",
        "furigana": "はっぴょう",
        "romaji": "happyou",
        "meaning": "Presentación / Anuncio"
      }
    ],
    "exampleSentence": "クラスで日本語で発表しました。",
    "exampleTranslation": "Hice una presentación en japonés en la clase.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-222",
    "kanji": "品",
    "spanish": "Artículo / Producto",
    "english": "Goods / Article",
    "onyomi": "ヒン",
    "kunyomi": "しな",
    "strokeCount": 9,
    "radicals": "口 (boca)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "品物",
        "furigana": "しなもの",
        "romaji": "shinamono",
        "meaning": "Mercancía / Artículo"
      }
    ],
    "exampleSentence": "この店はいい品物を売っています。",
    "exampleTranslation": "Esta tienda vende buenos artículos.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-223",
    "kanji": "写",
    "spanish": "Copiar / Fotografiar",
    "english": "Copy / Photograph",
    "onyomi": "シャ",
    "kunyomi": "うつ・す",
    "strokeCount": 5,
    "radicals": "冖 (cubrir)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "写真",
        "furigana": "しゃしん",
        "romaji": "shashin",
        "meaning": "Fotografía"
      }
    ],
    "exampleSentence": "一緒に写真を撮りましょう。",
    "exampleTranslation": "Tomémonos una foto juntos.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-224",
    "kanji": "真",
    "spanish": "Verdad / Real / Centro",
    "english": "True / Reality",
    "onyomi": "シン",
    "kunyomi": "ま",
    "strokeCount": 10,
    "radicals": "目 (ojo)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "真ん中",
        "furigana": "まんなか",
        "romaji": "mannaka",
        "meaning": "Justo en el centro"
      }
    ],
    "exampleSentence": "テーブルの真ん中に花があります。",
    "exampleTranslation": "Hay flores en el centro de la mesa.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-225",
    "kanji": "洋",
    "spanish": "Océano / Occidental",
    "english": "Ocean / Western",
    "onyomi": "ヨウ",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "洋服",
        "furigana": "ようふく",
        "romaji": "youfuku",
        "meaning": "Ropa occidental"
      }
    ],
    "exampleSentence": "デパートで洋服を買いました。",
    "exampleTranslation": "Compré ropa en la tienda departamental.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-226",
    "kanji": "服",
    "spanish": "Ropa / Vestimenta",
    "english": "Clothes",
    "onyomi": "フク",
    "kunyomi": "ー",
    "strokeCount": 8,
    "radicals": "月 (luna)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "制服",
        "furigana": "せいふく",
        "romaji": "seifuku",
        "meaning": "Uniforme"
      }
    ],
    "exampleSentence": "日本の高校生は制服を着ます。",
    "exampleTranslation": "Los estudiantes de preparatoria en Japón usan uniforme.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-227",
    "kanji": "堂",
    "spanish": "Salón / Edificio público",
    "english": "Hall",
    "onyomi": "ドウ",
    "kunyomi": "ー",
    "strokeCount": 11,
    "radicals": "土 (tierra)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "食堂",
        "furigana": "しょくどう",
        "romaji": "shokudou",
        "meaning": "Comedor / Cafetería"
      }
    ],
    "exampleSentence": "大学の食堂で昼ご飯を食べます。",
    "exampleTranslation": "Como el almuerzo en la cafetería de la universidad.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-228",
    "kanji": "力",
    "spanish": "Fuerza / Poder",
    "english": "Power / Strength",
    "onyomi": "リョク、リキ",
    "kunyomi": "ちから",
    "strokeCount": 2,
    "radicals": "力 (fuerza)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "努力",
        "furigana": "どりょく",
        "romaji": "doryoku",
        "meaning": "Esfuerzo"
      }
    ],
    "exampleSentence": "毎日少しずつ努力しています。",
    "exampleTranslation": "Me esfuerzo un poco todos los días.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-229",
    "kanji": "授",
    "spanish": "Impartir / Conceder",
    "english": "Impart / Grant",
    "onyomi": "ジュ",
    "kunyomi": "さず・ける",
    "strokeCount": 11,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "授業",
        "furigana": "じゅぎょう",
        "romaji": "jugyou",
        "meaning": "Clase / Lección escolar"
      }
    ],
    "exampleSentence": "今日の授業はとても面白かったです。",
    "exampleTranslation": "La clase de hoy estuvo muy interesante.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-230",
    "kanji": "業",
    "spanish": "Negocio / Industria / Karma",
    "english": "Business / Vocation",
    "onyomi": "ギョウ、ゴウ",
    "kunyomi": "わざ",
    "strokeCount": 13,
    "radicals": "木 (árbol)",
    "jlptLevel": "N4",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "卒業",
        "furigana": "そつぎょう",
        "romaji": "sotsugyou",
        "meaning": "Graduación"
      }
    ],
    "exampleSentence": "来年大学を卒業します。",
    "exampleTranslation": "Me gradúo de la universidad el próximo año.",
    "notes": "Genki Lección 17 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-231",
    "kanji": "試",
    "spanish": "Probar / Examen",
    "english": "Test / Try",
    "onyomi": "シ",
    "kunyomi": "こころ・みる、ため・す",
    "strokeCount": 13,
    "radicals": "言 (palabra)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "試験",
        "furigana": "しけん",
        "romaji": "shiken",
        "meaning": "Examen / Prueba"
      }
    ],
    "exampleSentence": "来週、日本語の試験があります。",
    "exampleTranslation": "La próxima semana tengo examen de japonés.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-232",
    "kanji": "験",
    "spanish": "Verificar / Efecto / Prueba",
    "english": "Test / Verify",
    "onyomi": "ケン",
    "kunyomi": "ー",
    "strokeCount": 18,
    "radicals": "馬 (caballo)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "経験",
        "furigana": "けいけん",
        "romaji": "keiken",
        "meaning": "Experiencia"
      }
    ],
    "exampleSentence": "いい経験になりました。",
    "exampleTranslation": "Fue una buena experiencia.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-233",
    "kanji": "貸",
    "spanish": "Prestar",
    "english": "Lend",
    "onyomi": "タイ",
    "kunyomi": "か・す",
    "strokeCount": 12,
    "radicals": "貝 (concha)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "貸す",
        "furigana": "かす",
        "romaji": "kasu",
        "meaning": "Prestar"
      }
    ],
    "exampleSentence": "ペンを貸してください。",
    "exampleTranslation": "Por favor préstame un bolígrafo.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-234",
    "kanji": "図",
    "spanish": "Mapa / Diagrama / Plan",
    "english": "Map / Drawing",
    "onyomi": "ズ、ト",
    "kunyomi": "はか・る",
    "strokeCount": 7,
    "radicals": "囗 (recinto)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "図書館",
        "furigana": "としょかん",
        "romaji": "toshokan",
        "meaning": "Biblioteca"
      }
    ],
    "exampleSentence": "図書館で静かに本を読みます。",
    "exampleTranslation": "Leo libros en silencio en la biblioteca.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-235",
    "kanji": "館",
    "spanish": "Edificio público / Pabellón",
    "english": "Public building",
    "onyomi": "カン",
    "kunyomi": "やかた",
    "strokeCount": 16,
    "radicals": "食 (comer)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "映画館",
        "furigana": "えいがかん",
        "romaji": "eigakan",
        "meaning": "Cine"
      }
    ],
    "exampleSentence": "週末に映画館へ行きました。",
    "exampleTranslation": "El fin de semana fui al cine.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-236",
    "kanji": "終",
    "spanish": "Terminar / Fin",
    "english": "End / Finish",
    "onyomi": "シュウ",
    "kunyomi": "お・わる、お・える",
    "strokeCount": 11,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "終わる",
        "furigana": "おわる",
        "romaji": "owaru",
        "meaning": "Terminar"
      }
    ],
    "exampleSentence": "仕事がやっと終わりました。",
    "exampleTranslation": "Por fin terminó el trabajo.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-237",
    "kanji": "宿",
    "spanish": "Posada / Alojarse",
    "english": "Inn / Lodging",
    "onyomi": "シュク",
    "kunyomi": "やど",
    "strokeCount": 11,
    "radicals": "宀 (techo)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "宿題",
        "furigana": "しゅくだい",
        "romaji": "shukudai",
        "meaning": "Tarea escolar"
      }
    ],
    "exampleSentence": "宿題を忘れてしまいました。",
    "exampleTranslation": "Olvidé mi tarea por completo.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-238",
    "kanji": "題",
    "spanish": "Tema / Título / Problema",
    "english": "Topic / Problem",
    "onyomi": "ダイ",
    "kunyomi": "ー",
    "strokeCount": 18,
    "radicals": "頁 (página)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "問題",
        "furigana": "もんだい",
        "romaji": "mondai",
        "meaning": "Problema / Pregunta"
      }
    ],
    "exampleSentence": "この問題は少し難しいです。",
    "exampleTranslation": "Este problema es un poco difícil.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-239",
    "kanji": "春",
    "spanish": "Primavera",
    "english": "Spring",
    "onyomi": "シュン",
    "kunyomi": "はる",
    "strokeCount": 9,
    "radicals": "日 (sol)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "春",
        "furigana": "はる",
        "romaji": "haru",
        "meaning": "Primavera"
      }
    ],
    "exampleSentence": "春になると桜が咲きます。",
    "exampleTranslation": "Cuando llega la primavera florecen los cerezos.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-240",
    "kanji": "秋",
    "spanish": "Otoño",
    "english": "Autumn / Fall",
    "onyomi": "シュウ",
    "kunyomi": "あき",
    "strokeCount": 9,
    "radicals": "禾 (grano)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "秋",
        "furigana": "あき",
        "romaji": "aki",
        "meaning": "Otoño"
      }
    ],
    "exampleSentence": "日本の秋は紅葉がきれいです。",
    "exampleTranslation": "En el otoño japonés las hojas rojas son hermosas.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-241",
    "kanji": "冬",
    "spanish": "Invierno",
    "english": "Winter",
    "onyomi": "トウ",
    "kunyomi": "ふゆ",
    "strokeCount": 5,
    "radicals": "冫 (hielo)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "冬休み",
        "furigana": "ふゆやすみ",
        "romaji": "fuyuyasumi",
        "meaning": "Vacaciones de invierno"
      }
    ],
    "exampleSentence": "冬休みにスキーに行きます。",
    "exampleTranslation": "En vacaciones de invierno iré a esquiar.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-242",
    "kanji": "花",
    "spanish": "Flor",
    "english": "Flower",
    "onyomi": "カ",
    "kunyomi": "はな",
    "strokeCount": 7,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N5",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "花火",
        "furigana": "はなび",
        "romaji": "hanabi",
        "meaning": "Fuegos artificiales"
      }
    ],
    "exampleSentence": "夏に花火を見ました。",
    "exampleTranslation": "Vi fuegos artificiales en verano.",
    "notes": "Genki Lección 19 • Nivel JLPT N5"
  },
  {
    "id": "k-exp-243",
    "kanji": "様",
    "spanish": "Señor(a) / Manera / Estado",
    "english": "Mr./Ms. / Manner",
    "onyomi": "ヨウ",
    "kunyomi": "さま",
    "strokeCount": 14,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "皆様",
        "furigana": "みなさま",
        "romaji": "minasama",
        "meaning": "Todos ustedes (formal)"
      }
    ],
    "exampleSentence": "皆様、お元気ですか。",
    "exampleTranslation": "¿Cómo están todos ustedes?",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-244",
    "kanji": "不",
    "spanish": "No / Prefijo negativo",
    "english": "Non- / Un-",
    "onyomi": "フ、ブ",
    "kunyomi": "ー",
    "strokeCount": 4,
    "radicals": "一 (uno)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "不便",
        "furigana": "ふべん",
        "romaji": "fuben",
        "meaning": "Inconveniente"
      }
    ],
    "exampleSentence": "ここはバスがなくて不便です。",
    "exampleTranslation": "Aquí es inconveniente porque no hay autobuses.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-245",
    "kanji": "姉",
    "spanish": "Hermana mayor",
    "english": "Older sister",
    "onyomi": "シ",
    "kunyomi": "あね",
    "strokeCount": 8,
    "radicals": "女 (mujer)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "お姉さん",
        "furigana": "おねえさん",
        "romaji": "oneesan",
        "meaning": "Hermana mayor"
      }
    ],
    "exampleSentence": "姉は東京で働いています。",
    "exampleTranslation": "Mi hermana mayor trabaja en Tokio.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-246",
    "kanji": "兄",
    "spanish": "Hermano mayor",
    "english": "Older brother",
    "onyomi": "ケイ、キョウ",
    "kunyomi": "あに",
    "strokeCount": 5,
    "radicals": "儿 (piernas)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "兄弟",
        "furigana": "きょうだい",
        "romaji": "kyoudai",
        "meaning": "Hermanos"
      }
    ],
    "exampleSentence": "兄弟が三人います。",
    "exampleTranslation": "Tengo tres hermanos.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-247",
    "kanji": "漢",
    "spanish": "China / Dinastía Han",
    "english": "Chinese / Han",
    "onyomi": "カン",
    "kunyomi": "ー",
    "strokeCount": 13,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "漢字",
        "furigana": "かんじ",
        "romaji": "kanji",
        "meaning": "Kanji (caracteres chinos)"
      }
    ],
    "exampleSentence": "漢字の勉強は楽しいです。",
    "exampleTranslation": "El estudio de los kanjis es divertido.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-248",
    "kanji": "卒",
    "spanish": "Graduarse / Soldado",
    "english": "Graduate",
    "onyomi": "ソツ",
    "kunyomi": "ー",
    "strokeCount": 8,
    "radicals": "十 (diez)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "卒業",
        "furigana": "そつぎょう",
        "romaji": "sotsugyou",
        "meaning": "Graduación"
      }
    ],
    "exampleSentence": "大学を卒業したら日本で働きたいです。",
    "exampleTranslation": "Al graduarme de la universidad quiero trabajar en Japón.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-249",
    "kanji": "工",
    "spanish": "Construcción / Artesanía",
    "english": "Craft / Construction",
    "onyomi": "コウ、ク",
    "kunyomi": "ー",
    "strokeCount": 3,
    "radicals": "工 (trabajo)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "工場",
        "furigana": "こうじょう",
        "romaji": "koujou",
        "meaning": "Fábrica"
      }
    ],
    "exampleSentence": "父は車の工場で働いています。",
    "exampleTranslation": "Mi padre trabaja en una fábrica de autos.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-250",
    "kanji": "研",
    "spanish": "Pulir / Investigar",
    "english": "Polish / Study",
    "onyomi": "ケン",
    "kunyomi": "と・ぐ",
    "strokeCount": 9,
    "radicals": "石 (piedra)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "研究",
        "furigana": "けんきゅう",
        "romaji": "kenkyuu",
        "meaning": "Investigación"
      }
    ],
    "exampleSentence": "大学院で経済を研究しています。",
    "exampleTranslation": "Investigo economía en el posgrado.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-251",
    "kanji": "究",
    "spanish": "Investigar a fondo",
    "english": "Research / Study",
    "onyomi": "キュウ",
    "kunyomi": "きわ・める",
    "strokeCount": 7,
    "radicals": "穴 (cueva)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "研究室",
        "furigana": "けんきゅうしつ",
        "romaji": "kenkyuushitsu",
        "meaning": "Oficina del profesor / Laboratorio"
      }
    ],
    "exampleSentence": "先生の研究室に行きました。",
    "exampleTranslation": "Fui a la oficina del profesor.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-252",
    "kanji": "質",
    "spanish": "Calidad / Pregunta",
    "english": "Quality / Question",
    "onyomi": "シツ、シチ",
    "kunyomi": "ー",
    "strokeCount": 15,
    "radicals": "貝 (concha)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "質問",
        "furigana": "しつもん",
        "romaji": "shitsumon",
        "meaning": "Pregunta"
      }
    ],
    "exampleSentence": "先生に質問があります。",
    "exampleTranslation": "Tengo una pregunta para el profesor.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-253",
    "kanji": "問",
    "spanish": "Preguntar / Problema",
    "english": "Question / Ask",
    "onyomi": "モン",
    "kunyomi": "と・う",
    "strokeCount": 11,
    "radicals": "門 (puerta)",
    "jlptLevel": "N4",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "問題",
        "furigana": "もんだい",
        "romaji": "mondai",
        "meaning": "Problema / Cuestión"
      }
    ],
    "exampleSentence": "何も問題はありません。",
    "exampleTranslation": "No hay ningún problema.",
    "notes": "Genki Lección 19 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-254",
    "kanji": "多",
    "spanish": "Muchos / Abundante",
    "english": "Many / Much",
    "onyomi": "タ",
    "kunyomi": "おお・い",
    "strokeCount": 6,
    "radicals": "夕 (tarde)",
    "jlptLevel": "N5",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "多い",
        "furigana": "おおい",
        "romaji": "ooi",
        "meaning": "Numeroso / Muchos"
      }
    ],
    "exampleSentence": "東京は人がとても多いです。",
    "exampleTranslation": "En Tokio hay muchísima gente.",
    "notes": "Genki Lección 19 • Nivel JLPT N5"
  },
  {
    "id": "k-exp-255",
    "kanji": "皿",
    "spanish": "Plato",
    "english": "Plate / Dish",
    "onyomi": "ベイ",
    "kunyomi": "さら",
    "strokeCount": 5,
    "radicals": "皿 (plato)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "お皿",
        "furigana": "おさら",
        "romaji": "osara",
        "meaning": "Plato"
      }
    ],
    "exampleSentence": "お皿を洗ってください。",
    "exampleTranslation": "Por favor lava los platos.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-256",
    "kanji": "声",
    "spanish": "Voz",
    "english": "Voice",
    "onyomi": "セイ、ショウ",
    "kunyomi": "こえ",
    "strokeCount": 7,
    "radicals": "士 (samurái)",
    "jlptLevel": "N4",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "声",
        "furigana": "こえ",
        "romaji": "koe",
        "meaning": "Voz"
      }
    ],
    "exampleSentence": "もう少し大きい声で話してください。",
    "exampleTranslation": "Por favor habla con voz un poco más fuerte.",
    "notes": "Genki Lección 20 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-257",
    "kanji": "茶",
    "spanish": "Té",
    "english": "Tea",
    "onyomi": "チャ、サ",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N4",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "お茶",
        "furigana": "おちゃ",
        "romaji": "ocha",
        "meaning": "Té verde"
      }
    ],
    "exampleSentence": "温かいお茶をどうぞ。",
    "exampleTranslation": "Por favor tome té caliente.",
    "notes": "Genki Lección 20 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-258",
    "kanji": "止",
    "spanish": "Detenerse / Parar",
    "english": "Stop",
    "onyomi": "シ",
    "kunyomi": "と・まる、と・める",
    "strokeCount": 4,
    "radicals": "止 (detener)",
    "jlptLevel": "N4",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "止まる",
        "furigana": "とまる",
        "romaji": "tomaru",
        "meaning": "Detenerse"
      }
    ],
    "exampleSentence": "ここに車を止めないでください。",
    "exampleTranslation": "Por favor no estacione el auto aquí.",
    "notes": "Genki Lección 20 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-259",
    "kanji": "枚",
    "spanish": "Contador de objetos planos",
    "english": "Counter for flat objects",
    "onyomi": "マイ",
    "kunyomi": "ー",
    "strokeCount": 8,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "三枚",
        "furigana": "さんまい",
        "romaji": "sanmai",
        "meaning": "Tres hojas/boletos"
      }
    ],
    "exampleSentence": "チケットを三枚買いました。",
    "exampleTranslation": "Compré tres boletos.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-260",
    "kanji": "両",
    "spanish": "Ambos",
    "english": "Both",
    "onyomi": "リョウ",
    "kunyomi": "ー",
    "strokeCount": 6,
    "radicals": "一 (uno)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "両親",
        "furigana": "りょうしん",
        "romaji": "ryoushin",
        "meaning": "Ambos padres"
      }
    ],
    "exampleSentence": "週末に両親に電話しました。",
    "exampleTranslation": "El fin de semana llamé a mis padres.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-261",
    "kanji": "無",
    "spanish": "Nada / Sin",
    "english": "Nothing / None",
    "onyomi": "ム、ブ",
    "kunyomi": "な・い",
    "strokeCount": 12,
    "radicals": "火 (fuego)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "無料",
        "furigana": "むりょう",
        "romaji": "muryou",
        "meaning": "Gratis / Sin costo"
      }
    ],
    "exampleSentence": "このアプリは無料で使えます。",
    "exampleTranslation": "Esta aplicación se puede usar gratis.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-262",
    "kanji": "払",
    "spanish": "Pagar",
    "english": "Pay",
    "onyomi": "フツ",
    "kunyomi": "はら・う",
    "strokeCount": 5,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "払う",
        "furigana": "はらう",
        "romaji": "harau",
        "meaning": "Pagar"
      }
    ],
    "exampleSentence": "カードで払ってもいいですか。",
    "exampleTranslation": "¿Puedo pagar con tarjeta?",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-263",
    "kanji": "心",
    "spanish": "Corazón / Mente / Espíritu",
    "english": "Heart / Mind",
    "onyomi": "シン",
    "kunyomi": "こころ",
    "strokeCount": 4,
    "radicals": "心 (corazón)",
    "jlptLevel": "N4",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "安心",
        "furigana": "あんしん",
        "romaji": "anshin",
        "meaning": "Alivio / Tranquilidad"
      }
    ],
    "exampleSentence": "それを聞いて安心しました。",
    "exampleTranslation": "Me tranquilicé al escuchar eso.",
    "notes": "Genki Lección 20 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-264",
    "kanji": "笑",
    "spanish": "Reír / Sonreír",
    "english": "Laugh / Smile",
    "onyomi": "ショウ",
    "kunyomi": "わら・う、え・む",
    "strokeCount": 10,
    "radicals": "竹 (bambú)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "笑う",
        "furigana": "わらう",
        "romaji": "warau",
        "meaning": "Reír / Sonreír"
      }
    ],
    "exampleSentence": "みんなが楽しく笑っています。",
    "exampleTranslation": "Todos están riendo alegremente.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-265",
    "kanji": "絶",
    "spanish": "Absoluto / Cortar",
    "english": "Absolute / Discontinue",
    "onyomi": "ゼツ",
    "kunyomi": "た・える",
    "strokeCount": 12,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "絶対",
        "furigana": "ぜったい",
        "romaji": "zettai",
        "meaning": "Absolutamente / Sin falta"
      }
    ],
    "exampleSentence": "絶対に諦めません。",
    "exampleTranslation": "De ninguna manera me rendiré.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-266",
    "kanji": "対",
    "spanish": "Opuesto / Contra / Hacia",
    "english": "Opposite / Versus",
    "onyomi": "タイ、ツイ",
    "kunyomi": "ー",
    "strokeCount": 7,
    "radicals": "寸 (pulgada)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "反対",
        "furigana": "はんたい",
        "romaji": "hantai",
        "meaning": "Opuesto / En contra"
      }
    ],
    "exampleSentence": "私はその意見に反対です。",
    "exampleTranslation": "Estoy en contra de esa opinión.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-267",
    "kanji": "痛",
    "spanish": "Dolor / Doler",
    "english": "Pain / Hurt",
    "onyomi": "ツウ",
    "kunyomi": "いた・い",
    "strokeCount": 12,
    "radicals": "疒 (enfermedad)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "痛い",
        "furigana": "いたい",
        "romaji": "itai",
        "meaning": "Doloroso / Duele"
      }
    ],
    "exampleSentence": "朝から頭が痛いです。",
    "exampleTranslation": "Me duele la cabeza desde la mañana.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-268",
    "kanji": "最",
    "spanish": "El más / Extremo",
    "english": "Most / Extreme",
    "onyomi": "サイ",
    "kunyomi": "もっと・も",
    "strokeCount": 12,
    "radicals": "日 (sol)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "最高",
        "furigana": "さいこう",
        "romaji": "saikou",
        "meaning": "El mejor / Increíble"
      }
    ],
    "exampleSentence": "今日のコンサートは最高でした。",
    "exampleTranslation": "El concierto de hoy estuvo increíble.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-269",
    "kanji": "続",
    "spanish": "Continuar / Seguir",
    "english": "Continue",
    "onyomi": "ゾク",
    "kunyomi": "つづ・く、つづ・ける",
    "strokeCount": 13,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "続ける",
        "furigana": "つづける",
        "romaji": "tsuzukeru",
        "meaning": "Continuar haciendo"
      }
    ],
    "exampleSentence": "日本語の勉強を続けます。",
    "exampleTranslation": "Continuaré estudiando japonés.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-270",
    "kanji": "信",
    "spanish": "Creer / Confianza / Señal",
    "english": "Believe / Trust",
    "onyomi": "シン",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "人 (persona)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "信じる",
        "furigana": "しんじる",
        "romaji": "shinjiru",
        "meaning": "Creer / Confiar"
      }
    ],
    "exampleSentence": "自分を信じて頑張ってください。",
    "exampleTranslation": "Cree en ti mismo y da tu mejor esfuerzo.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-271",
    "kanji": "経",
    "spanish": "Pasar por / Sutra / Economía",
    "english": "Pass / Longitude / Manage",
    "onyomi": "ケイ、キョウ",
    "kunyomi": "へ・る",
    "strokeCount": 11,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "経済",
        "furigana": "けいざい",
        "romaji": "keizai",
        "meaning": "Economía"
      }
    ],
    "exampleSentence": "大学で経済を専攻しています。",
    "exampleTranslation": "Me especializo en economía en la universidad.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-272",
    "kanji": "台",
    "spanish": "Pedestal / Contador de máquinas",
    "english": "Stand / Machine counter",
    "onyomi": "ダイ、タイ",
    "kunyomi": "ー",
    "strokeCount": 5,
    "radicals": "口 (boca)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "台風",
        "furigana": "たいふう",
        "romaji": "taifuu",
        "meaning": "Tifón"
      }
    ],
    "exampleSentence": "強い台風が来ています。",
    "exampleTranslation": "Viene un tifón fuerte.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-273",
    "kanji": "風",
    "spanish": "Viento / Estilo",
    "english": "Wind / Style",
    "onyomi": "フウ、フ",
    "kunyomi": "かぜ",
    "strokeCount": 9,
    "radicals": "風 (viento)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "風邪",
        "furigana": "かぜ",
        "romaji": "kaze",
        "meaning": "Resfriado"
      }
    ],
    "exampleSentence": "風邪をひいてしまいました。",
    "exampleTranslation": "Me dio un resfriado.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-274",
    "kanji": "犬",
    "spanish": "Perro",
    "english": "Dog",
    "onyomi": "ケン",
    "kunyomi": "いぬ",
    "strokeCount": 4,
    "radicals": "犬 (perro)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "子犬",
        "furigana": "こいぬ",
        "romaji": "koinu",
        "meaning": "Cachorro"
      }
    ],
    "exampleSentence": "かわいい犬を飼っています。",
    "exampleTranslation": "Tengo un perro lindo de mascota.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-275",
    "kanji": "重",
    "spanish": "Pesado / Importante / Apilar",
    "english": "Heavy / Important",
    "onyomi": "ジュウ、チョウ",
    "kunyomi": "おも・い、かさ・ねる",
    "strokeCount": 9,
    "radicals": "里 (aldea)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "重い",
        "furigana": "おもい",
        "romaji": "omoi",
        "meaning": "Pesado"
      }
    ],
    "exampleSentence": "この荷物はとても重いです。",
    "exampleTranslation": "Este equipaje es muy pesado.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-276",
    "kanji": "初",
    "spanish": "Primero / Principio",
    "english": "First / Beginning",
    "onyomi": "ショ",
    "kunyomi": "はじ・めて、はつ",
    "strokeCount": 7,
    "radicals": "刀 (espada)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "初めて",
        "furigana": "はじめて",
        "romaji": "hajimete",
        "meaning": "Por primera vez"
      }
    ],
    "exampleSentence": "初めて寿司を作りました。",
    "exampleTranslation": "Hice sushi por primera vez.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-277",
    "kanji": "若",
    "spanish": "Joven",
    "english": "Young",
    "onyomi": "ジャク、ニャク",
    "kunyomi": "わか・い",
    "strokeCount": 8,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "若い",
        "furigana": "わかい",
        "romaji": "wakai",
        "meaning": "Joven"
      }
    ],
    "exampleSentence": "先生はとても若く見えます。",
    "exampleTranslation": "El profesor se ve muy joven.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-278",
    "kanji": "送",
    "spanish": "Enviar / Despedir",
    "english": "Send / Escort",
    "onyomi": "ソウ",
    "kunyomi": "おく・る",
    "strokeCount": 9,
    "radicals": "辵 (camino)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "送る",
        "furigana": "おくる",
        "romaji": "okuru",
        "meaning": "Enviar / Llevar"
      }
    ],
    "exampleSentence": "母にプレゼントを送りました。",
    "exampleTranslation": "Le envié un regalo a mi madre.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-279",
    "kanji": "計",
    "spanish": "Medir / Planear / Reloj",
    "english": "Measure / Plan",
    "onyomi": "ケイ",
    "kunyomi": "はか・る",
    "strokeCount": 9,
    "radicals": "言 (palabra)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "時計",
        "furigana": "とけい",
        "romaji": "tokei",
        "meaning": "Reloj"
      }
    ],
    "exampleSentence": "新しい腕時計を買いました。",
    "exampleTranslation": "Compré un reloj de pulsera nuevo.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-280",
    "kanji": "遅",
    "spanish": "Tarde / Lento",
    "english": "Late / Slow",
    "onyomi": "チ",
    "kunyomi": "おく・れる、おそ・い",
    "strokeCount": 12,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "遅れる",
        "furigana": "おくれる",
        "romaji": "okureru",
        "meaning": "Llegar tarde / Retrasarse"
      }
    ],
    "exampleSentence": "電車が十分遅れています。",
    "exampleTranslation": "El tren está retrasado diez minutos.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-281",
    "kanji": "配",
    "spanish": "Distribuir / Preocuparse",
    "english": "Distribute / Worry",
    "onyomi": "ハイ",
    "kunyomi": "くば・る",
    "strokeCount": 10,
    "radicals": "酉 (sake)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "心配",
        "furigana": "しんぱい",
        "romaji": "shinpai",
        "meaning": "Preocupación"
      }
    ],
    "exampleSentence": "心配しないでください。",
    "exampleTranslation": "Por favor no te preocupes.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-282",
    "kanji": "弟",
    "spanish": "Hermano menor",
    "english": "Younger brother",
    "onyomi": "テイ、ダイ",
    "kunyomi": "おとうと",
    "strokeCount": 7,
    "radicals": "弓 (arco)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "弟",
        "furigana": "おとうと",
        "romaji": "otouto",
        "meaning": "Hermano menor"
      }
    ],
    "exampleSentence": "弟は高校生です。",
    "exampleTranslation": "Mi hermano menor es estudiante de preparatoria.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-283",
    "kanji": "妹",
    "spanish": "Hermana menor",
    "english": "Younger sister",
    "onyomi": "マイ",
    "kunyomi": "いもうと",
    "strokeCount": 8,
    "radicals": "女 (mujer)",
    "jlptLevel": "N4",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "妹",
        "furigana": "いもうと",
        "romaji": "imouto",
        "meaning": "Hermana menor"
      }
    ],
    "exampleSentence": "妹はピアノが上手です。",
    "exampleTranslation": "Mi hermana menor es buena tocando el piano.",
    "notes": "Genki Lección 21 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-284",
    "kanji": "記",
    "spanish": "Anotar / Crónica",
    "english": "Write down / Record",
    "onyomi": "キ",
    "kunyomi": "しる・す",
    "strokeCount": 10,
    "radicals": "言 (palabra)",
    "jlptLevel": "N3",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "日記",
        "furigana": "にっき",
        "romaji": "nikki",
        "meaning": "Diario personal"
      }
    ],
    "exampleSentence": "毎日日本語で日記を書いています。",
    "exampleTranslation": "Escribo un diario en japonés todos los días.",
    "notes": "Genki Lección 22 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-285",
    "kanji": "銀",
    "spanish": "Plata",
    "english": "Silver",
    "onyomi": "ギン",
    "kunyomi": "ー",
    "strokeCount": 14,
    "radicals": "金 (metal)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "銀行",
        "furigana": "ぎんこう",
        "romaji": "ginkou",
        "meaning": "Banco"
      }
    ],
    "exampleSentence": "銀行でお金を下ろしました。",
    "exampleTranslation": "Retiré dinero en el banco.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-286",
    "kanji": "回",
    "spanish": "Girar / Contador de veces",
    "english": "Times / Revolve",
    "onyomi": "カイ",
    "kunyomi": "まわ・る",
    "strokeCount": 6,
    "radicals": "囗 (recinto)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "一回",
        "furigana": "いっかい",
        "romaji": "ikkai",
        "meaning": "Una vez"
      }
    ],
    "exampleSentence": "もう一回言ってください。",
    "exampleTranslation": "Por favor dígalo una vez más.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-287",
    "kanji": "夕",
    "spanish": "Tarde / Atardecer",
    "english": "Evening",
    "onyomi": "セキ",
    "kunyomi": "ゆう",
    "strokeCount": 3,
    "radicals": "夕 (tarde)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "夕方",
        "furigana": "ゆうがた",
        "romaji": "yuugata",
        "meaning": "Atardecer"
      }
    ],
    "exampleSentence": "夕方に雨が降りました。",
    "exampleTranslation": "Llovió al atardecer.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-288",
    "kanji": "黒",
    "spanish": "Negro",
    "english": "Black",
    "onyomi": "コク",
    "kunyomi": "くろ、くろ・い",
    "strokeCount": 11,
    "radicals": "黒 (negro)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "黒い",
        "furigana": "くろい",
        "romaji": "kuroi",
        "meaning": "Negro"
      }
    ],
    "exampleSentence": "黒い靴を履いています。",
    "exampleTranslation": "Llevo puestos zapatos negros.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-289",
    "kanji": "用",
    "spanish": "Usar / Asunto / Tarea",
    "english": "Use / Business",
    "onyomi": "ヨウ",
    "kunyomi": "もち・いる",
    "strokeCount": 5,
    "radicals": "用 (usar)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "用意",
        "furigana": "ようい",
        "romaji": "youi",
        "meaning": "Preparación"
      }
    ],
    "exampleSentence": "晩ご飯の用意ができました。",
    "exampleTranslation": "La preparación de la cena está lista.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-290",
    "kanji": "末",
    "spanish": "Fin / Extremo",
    "english": "End",
    "onyomi": "マツ、バツ",
    "kunyomi": "すえ",
    "strokeCount": 5,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "週末",
        "furigana": "しゅうまつ",
        "romaji": "shuumatsu",
        "meaning": "Fin de semana"
      }
    ],
    "exampleSentence": "週末はどこかへ出かけますか。",
    "exampleTranslation": "¿Sales a algún lugar el fin de semana?",
    "notes": "Genki Lección 22 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-291",
    "kanji": "待",
    "spanish": "Esperar",
    "english": "Wait",
    "onyomi": "タイ",
    "kunyomi": "ま・つ",
    "strokeCount": 9,
    "radicals": "彳 (paso)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "待つ",
        "furigana": "まつ",
        "romaji": "matsu",
        "meaning": "Esperar"
      }
    ],
    "exampleSentence": "ここで少し待っていてください。",
    "exampleTranslation": "Por favor espera aquí un momento.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-292",
    "kanji": "残",
    "spanish": "Quedar / Restar",
    "english": "Remain / Leftover",
    "onyomi": "ザン",
    "kunyomi": "のこ・る、のこ・す",
    "strokeCount": 10,
    "radicals": "歹 (hueso)",
    "jlptLevel": "N3",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "残念",
        "furigana": "ざんねん",
        "romaji": "zannen",
        "meaning": "Lamentable / Qué lástima"
      }
    ],
    "exampleSentence": "行けなくて本当に残念です。",
    "exampleTranslation": "Es realmente una lástima no poder ir.",
    "notes": "Genki Lección 22 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-293",
    "kanji": "番",
    "spanish": "Número / Turno",
    "english": "Number / Turn",
    "onyomi": "バン",
    "kunyomi": "ー",
    "strokeCount": 12,
    "radicals": "田 (campo)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "一番",
        "furigana": "いちばん",
        "romaji": "ichiban",
        "meaning": "El número uno / El más"
      }
    ],
    "exampleSentence": "果物の中でいちごが一番好きです。",
    "exampleTranslation": "De las frutas, la fresa es la que más me gusta.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-294",
    "kanji": "説",
    "spanish": "Explicar / Teoría",
    "english": "Explain / Theory",
    "onyomi": "セツ",
    "kunyomi": "と・く",
    "strokeCount": 14,
    "radicals": "言 (palabra)",
    "jlptLevel": "N4",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "説明",
        "furigana": "せつめい",
        "romaji": "setsumei",
        "meaning": "Explicación"
      }
    ],
    "exampleSentence": "先生が文法を説明してくれました。",
    "exampleTranslation": "El profesor nos explicó la gramática.",
    "notes": "Genki Lección 22 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-295",
    "kanji": "案",
    "spanish": "Guía / Propuesta",
    "english": "Guide / Plan",
    "onyomi": "アン",
    "kunyomi": "ー",
    "strokeCount": 10,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "案内",
        "furigana": "あんない",
        "romaji": "annai",
        "meaning": "Guía / Mostrar el lugar"
      }
    ],
    "exampleSentence": "京都を案内してあげます。",
    "exampleTranslation": "Te mostraré Kioto como guía.",
    "notes": "Genki Lección 22 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-296",
    "kanji": "忘",
    "spanish": "Olvidar",
    "english": "Forget",
    "onyomi": "ボウ",
    "kunyomi": "わす・れる",
    "strokeCount": 7,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "忘れる",
        "furigana": "わすれる",
        "romaji": "wasureru",
        "meaning": "Olvidar"
      }
    ],
    "exampleSentence": "傘を電車に忘れてしまいました。",
    "exampleTranslation": "Olvidé mi paraguas en el tren.",
    "notes": "Genki Lección 22 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-297",
    "kanji": "守",
    "spanish": "Proteger / Cumplir",
    "english": "Protect / Obey",
    "onyomi": "シュ、ス",
    "kunyomi": "まも・る",
    "strokeCount": 6,
    "radicals": "宀 (techo)",
    "jlptLevel": "N3",
    "genkiLesson": 22,
    "compounds": [
      {
        "word": "守る",
        "furigana": "まもる",
        "romaji": "mamoru",
        "meaning": "Proteger / Cumplir reglas"
      }
    ],
    "exampleSentence": "約束は必ず守ります。",
    "exampleTranslation": "Cumpliré la promesa sin falta.",
    "notes": "Genki Lección 22 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-298",
    "kanji": "顔",
    "spanish": "Rostro / Cara",
    "english": "Face",
    "onyomi": "ガン",
    "kunyomi": "かお",
    "strokeCount": 18,
    "radicals": "頁 (página)",
    "jlptLevel": "N4",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "笑顔",
        "furigana": "えがお",
        "romaji": "egao",
        "meaning": "Rostro sonriente"
      }
    ],
    "exampleSentence": "素敵な笑顔ですね。",
    "exampleTranslation": "Qué bonita sonrisa tienes.",
    "notes": "Genki Lección 23 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-299",
    "kanji": "情",
    "spanish": "Sentimiento / Emoción / Situación",
    "english": "Emotion / Condition",
    "onyomi": "ジョウ",
    "kunyomi": "なさ・け",
    "strokeCount": 11,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "表情",
        "furigana": "ひょうじょう",
        "romaji": "hyoujou",
        "meaning": "Expresión facial"
      }
    ],
    "exampleSentence": "明るい表情をしています。",
    "exampleTranslation": "Tiene una expresión alegre.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-300",
    "kanji": "怒",
    "spanish": "Enojarse / Ira",
    "english": "Anger / Get angry",
    "onyomi": "ド",
    "kunyomi": "いか・る、おこ・る",
    "strokeCount": 9,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "怒る",
        "furigana": "おこる",
        "romaji": "okoru",
        "meaning": "Enojarse"
      }
    ],
    "exampleSentence": "遅刻して先生に怒られました。",
    "exampleTranslation": "Llegué tarde y el profesor me regañó.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-301",
    "kanji": "変",
    "spanish": "Cambiar / Extraño",
    "english": "Change / Strange",
    "onyomi": "ヘン",
    "kunyomi": "か・わる、か・える",
    "strokeCount": 9,
    "radicals": "夂 (invierno)",
    "jlptLevel": "N4",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "大変",
        "furigana": "たいへん",
        "romaji": "taihen",
        "meaning": "Muy / Difícil / Grave"
      }
    ],
    "exampleSentence": "引っ越しは大変でした。",
    "exampleTranslation": "La mudanza fue muy pesada.",
    "notes": "Genki Lección 23 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-302",
    "kanji": "相",
    "spanish": "Mutuo / Aspecto",
    "english": "Mutual /Minister",
    "onyomi": "ソウ、ショウ",
    "kunyomi": "あい",
    "strokeCount": 9,
    "radicals": "目 (ojo)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "相談",
        "furigana": "そうだん",
        "romaji": "soudan",
        "meaning": "Consulta / Consejo"
      }
    ],
    "exampleSentence": "友達に相談してみました。",
    "exampleTranslation": "Intenté pedirle consejo a un amigo.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-303",
    "kanji": "横",
    "spanish": "Lado / Horizontal",
    "english": "Side / Horizontal",
    "onyomi": "オウ",
    "kunyomi": "よこ",
    "strokeCount": 15,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "横",
        "furigana": "よこ",
        "romaji": "yoko",
        "meaning": "Al lado de / Costado"
      }
    ],
    "exampleSentence": "机の横に本棚があります。",
    "exampleTranslation": "Al lado del escritorio hay un librero.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-304",
    "kanji": "比",
    "spanish": "Comparar",
    "english": "Compare",
    "onyomi": "ヒ",
    "kunyomi": "くら・べる",
    "strokeCount": 4,
    "radicals": "比 (comparar)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "比べる",
        "furigana": "くらべる",
        "romaji": "kuraberu",
        "meaning": "Comparar"
      }
    ],
    "exampleSentence": "去年と比べると日本語が上手になりました。",
    "exampleTranslation": "Comparado con el año pasado, mejoré en japonés.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-305",
    "kanji": "化",
    "spanish": "Cambiar / Transformarse",
    "english": "Change / Transform",
    "onyomi": "カ、ケ",
    "kunyomi": "ば・ける",
    "strokeCount": 4,
    "radicals": "匕 (cuchara)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "文化",
        "furigana": "ぶんか",
        "romaji": "bunka",
        "meaning": "Cultura"
      }
    ],
    "exampleSentence": "日本の文化に興味があります。",
    "exampleTranslation": "Tengo interés en la cultura japonesa.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-306",
    "kanji": "違",
    "spanish": "Diferir / Equivocarse",
    "english": "Differ / Mistake",
    "onyomi": "イ",
    "kunyomi": "ちが・う",
    "strokeCount": 13,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "違う",
        "furigana": "ちがう",
        "romaji": "chigau",
        "meaning": "Ser diferente / Equivocarse"
      }
    ],
    "exampleSentence": "電話番号が違っています。",
    "exampleTranslation": "El número de teléfono es incorrecto.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-307",
    "kanji": "悲",
    "spanish": "Triste / Tristeza",
    "english": "Sad",
    "onyomi": "ヒ",
    "kunyomi": "かな・しい",
    "strokeCount": 12,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "悲しい",
        "furigana": "かなしい",
        "romaji": "kanashii",
        "meaning": "Triste"
      }
    ],
    "exampleSentence": "お別れするのは悲しいです。",
    "exampleTranslation": "Es triste despedirse.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-308",
    "kanji": "調",
    "spanish": "Investigar / Tono / Condición",
    "english": "Investigate / Tone",
    "onyomi": "チョウ",
    "kunyomi": "しら・べる",
    "strokeCount": 15,
    "radicals": "言 (palabra)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "調べる",
        "furigana": "しらべる",
        "romaji": "shiraberu",
        "meaning": "Investigar / Buscar"
      }
    ],
    "exampleSentence": "辞書で新しい言葉を調べます。",
    "exampleTranslation": "Busco palabras nuevas en el diccionario.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-309",
    "kanji": "果",
    "spanish": "Fruto / Resultado",
    "english": "Fruit / Result",
    "onyomi": "カ",
    "kunyomi": "は・たす",
    "strokeCount": 8,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "結果",
        "furigana": "けっか",
        "romaji": "kekka",
        "meaning": "Resultado"
      }
    ],
    "exampleSentence": "試験の結果が楽しみです。",
    "exampleTranslation": "Espero con ansias el resultado del examen.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-310",
    "kanji": "感",
    "spanish": "Sentir / Sensación",
    "english": "Feel / Emotion",
    "onyomi": "カン",
    "kunyomi": "ー",
    "strokeCount": 13,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "感謝",
        "furigana": "かんしゃ",
        "romaji": "kansha",
        "meaning": "Gratitud / Agradecimiento"
      }
    ],
    "exampleSentence": "先生に心から感謝しています。",
    "exampleTranslation": "Agradezco de corazón al profesor.",
    "notes": "Genki Lección 23 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-311",
    "kanji": "答",
    "spanish": "Responder / Respuesta",
    "english": "Answer",
    "onyomi": "トウ",
    "kunyomi": "こた・える、こた・え",
    "strokeCount": 12,
    "radicals": "竹 (bambú)",
    "jlptLevel": "N4",
    "genkiLesson": 23,
    "compounds": [
      {
        "word": "答え",
        "furigana": "こたえ",
        "romaji": "kotae",
        "meaning": "Respuesta"
      }
    ],
    "exampleSentence": "正しい答えを選んでください。",
    "exampleTranslation": "Por favor elige la respuesta correcta.",
    "notes": "Genki Lección 23 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-312",
    "kanji": "元",
    "spanish": "Origen / Salud",
    "english": "Origin / Health",
    "onyomi": "ゲン、ガン",
    "kunyomi": "もと",
    "strokeCount": 4,
    "radicals": "儿 (piernas)",
    "jlptLevel": "N4",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "元気",
        "furigana": "げんき",
        "romaji": "genki",
        "meaning": "Saludable / Con energía"
      }
    ],
    "exampleSentence": "お元気ですか。",
    "exampleTranslation": "¿Cómo estás?",
    "notes": "Genki Lección 4 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-313",
    "kanji": "々",
    "spanish": "Marca de repetición kanji",
    "english": "Kanji repeater",
    "onyomi": "ー",
    "kunyomi": "ー",
    "strokeCount": 3,
    "radicals": "丿 (trazo)",
    "jlptLevel": "N5",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "人々",
        "furigana": "ひとびと",
        "romaji": "hitobito",
        "meaning": "La gente /Las personas"
      }
    ],
    "exampleSentence": "多くの人々が集まりました。",
    "exampleTranslation": "Se reunieron muchas personas.",
    "notes": "Genki Lección 7 • Nivel JLPT N5"
  },
  {
    "id": "k-exp-314",
    "kanji": "歩",
    "spanish": "Caminar / Paso",
    "english": "Walk / Step",
    "onyomi": "ホ、ブ",
    "kunyomi": "ある・く、あゆ・む",
    "strokeCount": 8,
    "radicals": "止 (detener)",
    "jlptLevel": "N4",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "歩く",
        "furigana": "あるく",
        "romaji": "aruku",
        "meaning": "Caminar"
      }
    ],
    "exampleSentence": "駅から家まで歩いて十分です。",
    "exampleTranslation": "Son diez minutos caminando de la estación a la casa.",
    "notes": "Genki Lección 10 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-315",
    "kanji": "洗",
    "spanish": "Lavar",
    "english": "Wash",
    "onyomi": "セン",
    "kunyomi": "あら・う",
    "strokeCount": 9,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "洗濯",
        "furigana": "せんたく",
        "romaji": "sentaku",
        "meaning": "Lavar la ropa"
      }
    ],
    "exampleSentence": "週末に洗濯をします。",
    "exampleTranslation": "Lavo la ropa el fin de semana.",
    "notes": "Genki Lección 8 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-316",
    "kanji": "眠",
    "spanish": "Dormir / Sueño",
    "english": "Sleep",
    "onyomi": "ミン",
    "kunyomi": "ねむ・る、ねむ・い",
    "strokeCount": 10,
    "radicals": "目 (ojo)",
    "jlptLevel": "N3",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "眠い",
        "furigana": "ねむい",
        "romaji": "nemui",
        "meaning": "Somnoliento / Tener sueño"
      }
    ],
    "exampleSentence": "昨日はあまり寝なかったので眠いです。",
    "exampleTranslation": "Como ayer casi no dormí, tengo sueño.",
    "notes": "Genki Lección 12 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-317",
    "kanji": "泣",
    "spanish": "Llorar",
    "english": "Cry / Weep",
    "onyomi": "キュウ",
    "kunyomi": "な・く",
    "strokeCount": 8,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "泣く",
        "furigana": "なく",
        "romaji": "naku",
        "meaning": "Llorar"
      }
    ],
    "exampleSentence": "映画を見て泣いてしまいました。",
    "exampleTranslation": "Vi la película y terminé llorando.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-318",
    "kanji": "喜",
    "spanish": "Alegrarse / Regocijo",
    "english": "Rejoice / Glad",
    "onyomi": "キ",
    "kunyomi": "よろこ・ぶ",
    "strokeCount": 12,
    "radicals": "口 (boca)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "喜ぶ",
        "furigana": "よろこぶ",
        "romaji": "yorokobu",
        "meaning": "Alegrarse"
      }
    ],
    "exampleSentence": "プレゼントをあげたら喜んでくれました。",
    "exampleTranslation": "Cuando le di el regalo se puso muy contento.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-319",
    "kanji": "驚",
    "spanish": "Sorprenderse",
    "english": "Surprise / Astonish",
    "onyomi": "キョウ",
    "kunyomi": "おどろ・く",
    "strokeCount": 22,
    "radicals": "馬 (caballo)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "驚く",
        "furigana": "おどろく",
        "romaji": "odoroku",
        "meaning": "Sorprenderse"
      }
    ],
    "exampleSentence": "そのニュースを聞いて驚きました。",
    "exampleTranslation": "Me sorprendí al escuchar esa noticia.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-320",
    "kanji": "困",
    "spanish": "Estar en problemas",
    "english": "Trouble / Distress",
    "onyomi": "コン",
    "kunyomi": "こま・る",
    "strokeCount": 7,
    "radicals": "囗 (recinto)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "困る",
        "furigana": "こまる",
        "romaji": "komaru",
        "meaning": "Tener problemas / Estar en apuros"
      }
    ],
    "exampleSentence": "財布をなくして困っています。",
    "exampleTranslation": "Estoy en apuros porque perdí mi cartera.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-321",
    "kanji": "疲",
    "spanish": "Cansarse / Fatiga",
    "english": "Get tired",
    "onyomi": "ヒ",
    "kunyomi": "つか・れる",
    "strokeCount": 10,
    "radicals": "疒 (enfermedad)",
    "jlptLevel": "N3",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "疲れる",
        "furigana": "つかれる",
        "romaji": "tsukareru",
        "meaning": "Cansarse"
      }
    ],
    "exampleSentence": "たくさん歩いて疲れました。",
    "exampleTranslation": "Me cansé de tanto caminar.",
    "notes": "Genki Lección 12 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-322",
    "kanji": "冷",
    "spanish": "Frío (al tacto) / Enfriar",
    "english": "Cold / Cool",
    "onyomi": "レイ",
    "kunyomi": "つめ・たい、ひ・える",
    "strokeCount": 7,
    "radicals": "冫 (hielo)",
    "jlptLevel": "N3",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "冷たい",
        "furigana": "つめたい",
        "romaji": "tsumetai",
        "meaning": "Frío (cosas/bebidas)"
      }
    ],
    "exampleSentence": "冷たい水を飲みました。",
    "exampleTranslation": "Bebí agua fría.",
    "notes": "Genki Lección 5 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-323",
    "kanji": "温",
    "spanish": "Cálido / Tibio",
    "english": "Warm",
    "onyomi": "オン",
    "kunyomi": "あたた・かい",
    "strokeCount": 12,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "温泉",
        "furigana": "おんせん",
        "romaji": "onsen",
        "meaning": "Aguas termales"
      }
    ],
    "exampleSentence": "箱根の温泉に入りました。",
    "exampleTranslation": "Entré a las aguas termales de Hakone.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-324",
    "kanji": "暖",
    "spanish": "Cálido (clima)",
    "english": "Warm weather",
    "onyomi": "ダン",
    "kunyomi": "あたた・かい",
    "strokeCount": 13,
    "radicals": "日 (sol)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "暖かい",
        "furigana": "あたたかい",
        "romaji": "atatakai",
        "meaning": "Cálido (clima)"
      }
    ],
    "exampleSentence": "春になって暖かくなりました。",
    "exampleTranslation": "Llegó la primavera y el clima se puso cálido.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-325",
    "kanji": "涼",
    "spanish": "Fresco (clima)",
    "english": "Cool / Refreshing",
    "onyomi": "リョウ",
    "kunyomi": "すず・しい",
    "strokeCount": 11,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "涼しい",
        "furigana": "すずしい",
        "romaji": "suzushii",
        "meaning": "Fresco (clima)"
      }
    ],
    "exampleSentence": "秋は涼しくて気持ちがいいです。",
    "exampleTranslation": "El otoño es fresco y agradable.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-326",
    "kanji": "甘",
    "spanish": "Dulce",
    "english": "Sweet",
    "onyomi": "カン",
    "kunyomi": "あま・い",
    "strokeCount": 5,
    "radicals": "甘 (dulce)",
    "jlptLevel": "N3",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "甘い",
        "furigana": "あまい",
        "romaji": "amai",
        "meaning": "Dulce"
      }
    ],
    "exampleSentence": "甘いケーキが食べたいです。",
    "exampleTranslation": "Quiero comer un pastel dulce.",
    "notes": "Genki Lección 12 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-327",
    "kanji": "辛",
    "spanish": "Picante / Duro",
    "english": "Spicy / Bitter",
    "onyomi": "シン",
    "kunyomi": "から・い、つら・い",
    "strokeCount": 7,
    "radicals": "辛 (picante)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "辛い",
        "furigana": "からい",
        "romaji": "karai",
        "meaning": "Picante"
      }
    ],
    "exampleSentence": "韓国の料理は辛くて美味しいです。",
    "exampleTranslation": "La comida coreana es picante y deliciosa.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-328",
    "kanji": "苦",
    "spanish": "Amargo / Sufrir",
    "english": "Bitter / Suffering",
    "onyomi": "ク",
    "kunyomi": "くる・しい、にが・い",
    "strokeCount": 8,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "苦手",
        "furigana": "にがて",
        "romaji": "nigate",
        "meaning": "No ser bueno en algo / Punto débil"
      }
    ],
    "exampleSentence": "私は早起きが苦手です。",
    "exampleTranslation": "Me cuesta trabajo levantarme temprano.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-329",
    "kanji": "塩",
    "spanish": "Sal",
    "english": "Salt",
    "onyomi": "エン",
    "kunyomi": "しお",
    "strokeCount": 13,
    "radicals": "土 (tierra)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "塩",
        "furigana": "しお",
        "romaji": "shio",
        "meaning": "Sal"
      }
    ],
    "exampleSentence": "少し塩を入れてください。",
    "exampleTranslation": "Por favor ponle un poco de sal.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-330",
    "kanji": "砂",
    "spanish": "Arena",
    "english": "Sand",
    "onyomi": "サ、シャ",
    "kunyomi": "すな",
    "strokeCount": 9,
    "radicals": "石 (piedra)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "砂糖",
        "furigana": "さとう",
        "romaji": "satou",
        "meaning": "Azúcar"
      }
    ],
    "exampleSentence": "コーヒーに砂糖を入れますか。",
    "exampleTranslation": "¿Le pones azúcar al café?",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-331",
    "kanji": "糖",
    "spanish": "Azúcar",
    "english": "Sugar",
    "onyomi": "トウ",
    "kunyomi": "ー",
    "strokeCount": 16,
    "radicals": "米 (arroz)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "砂糖",
        "furigana": "さとう",
        "romaji": "satou",
        "meaning": "Azúcar"
      }
    ],
    "exampleSentence": "砂糖を少しだけ入れました。",
    "exampleTranslation": "Le puse solo un poquito de azúcar.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-332",
    "kanji": "野",
    "spanish": "Campo / Silvestre",
    "english": "Field / Wild",
    "onyomi": "ヤ",
    "kunyomi": "の",
    "strokeCount": 11,
    "radicals": "里 (aldea)",
    "jlptLevel": "N4",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "野菜",
        "furigana": "やさい",
        "romaji": "yasai",
        "meaning": "Verdura / Vegetal"
      }
    ],
    "exampleSentence": "毎日野菜をたくさん食べます。",
    "exampleTranslation": "Como muchas verduras todos los días.",
    "notes": "Genki Lección 8 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-333",
    "kanji": "菜",
    "spanish": "Verdura / Platillo",
    "english": "Vegetable / Side dish",
    "onyomi": "サイ",
    "kunyomi": "な",
    "strokeCount": 11,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N4",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "野菜",
        "furigana": "やさい",
        "romaji": "yasai",
        "meaning": "Verduras"
      }
    ],
    "exampleSentence": "新鮮な野菜を買いました。",
    "exampleTranslation": "Compré verduras frescas.",
    "notes": "Genki Lección 8 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-334",
    "kanji": "菓",
    "spanish": "Dulce / Confitería",
    "english": "Candy / Pastry",
    "onyomi": "カ",
    "kunyomi": "ー",
    "strokeCount": 11,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N3",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "お菓子",
        "furigana": "おかし",
        "romaji": "okashi",
        "meaning": "Dulces / Golosinas"
      }
    ],
    "exampleSentence": "日本の伝統的なお菓子を食べました。",
    "exampleTranslation": "Comí dulces tradicionales japoneses.",
    "notes": "Genki Lección 11 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-335",
    "kanji": "酒",
    "spanish": "Sake / Alcohol",
    "english": "Alcohol / Sake",
    "onyomi": "シュ",
    "kunyomi": "さけ",
    "strokeCount": 10,
    "radicals": "酉 (sake)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "お酒",
        "furigana": "おさけ",
        "romaji": "osake",
        "meaning": "Bebida alcohólica / Sake"
      }
    ],
    "exampleSentence": "二十歳になってからお酒を飲みます。",
    "exampleTranslation": "Se bebe alcohol a partir de cumplir 20 años.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-336",
    "kanji": "氷",
    "spanish": "Hielo",
    "english": "Ice",
    "onyomi": "ヒョウ",
    "kunyomi": "こおり",
    "strokeCount": 5,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "かき氷",
        "furigana": "かきごおり",
        "romaji": "kakigoori",
        "meaning": "Raspado de hielo"
      }
    ],
    "exampleSentence": "夏はかき氷が美味しいです。",
    "exampleTranslation": "En verano el raspado de hielo es delicioso.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-337",
    "kanji": "湯",
    "spanish": "Agua caliente",
    "english": "Hot water",
    "onyomi": "トウ",
    "kunyomi": "ゆ",
    "strokeCount": 12,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "お湯",
        "furigana": "おゆ",
        "romaji": "oyu",
        "meaning": "Agua caliente"
      }
    ],
    "exampleSentence": "お湯を沸かしてお茶を入れます。",
    "exampleTranslation": "Hiervo agua caliente y preparo té.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-338",
    "kanji": "箸",
    "spanish": "Palillos chinos (hashi)",
    "english": "Chopsticks",
    "onyomi": "チョ",
    "kunyomi": "はし",
    "strokeCount": 15,
    "radicals": "竹 (bambú)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "お箸",
        "furigana": "おはし",
        "romaji": "ohashi",
        "meaning": "Palillos para comer"
      }
    ],
    "exampleSentence": "お箸の使い方が上手ですね。",
    "exampleTranslation": "Usas muy bien los palillos.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-339",
    "kanji": "机",
    "spanish": "Escritorio",
    "english": "Desk",
    "onyomi": "キ",
    "kunyomi": "つくえ",
    "strokeCount": 6,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "机",
        "furigana": "つくえ",
        "romaji": "tsukue",
        "meaning": "Escritorio"
      }
    ],
    "exampleSentence": "机の上にノートがあります。",
    "exampleTranslation": "Hay un cuaderno sobre el escritorio.",
    "notes": "Genki Lección 4 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-340",
    "kanji": "椅",
    "spanish": "Silla",
    "english": "Chair",
    "onyomi": "イ",
    "kunyomi": "ー",
    "strokeCount": 12,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "椅子",
        "furigana": "いす",
        "romaji": "isu",
        "meaning": "Silla"
      }
    ],
    "exampleSentence": "どうぞ椅子に座ってください。",
    "exampleTranslation": "Por favor siéntese en la silla.",
    "notes": "Genki Lección 4 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-341",
    "kanji": "窓",
    "spanish": "Ventana",
    "english": "Window",
    "onyomi": "ソウ",
    "kunyomi": "まど",
    "strokeCount": 11,
    "radicals": "穴 (cueva)",
    "jlptLevel": "N3",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "窓",
        "furigana": "まど",
        "romaji": "mado",
        "meaning": "Ventana"
      }
    ],
    "exampleSentence": "暑いので窓を開けました。",
    "exampleTranslation": "Como hacía calor, abrí la ventana.",
    "notes": "Genki Lección 6 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-342",
    "kanji": "鍵",
    "spanish": "Llave / Cerrojo",
    "english": "Key / Lock",
    "onyomi": "ケン",
    "kunyomi": "かぎ",
    "strokeCount": 17,
    "radicals": "金 (metal)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "鍵",
        "furigana": "かぎ",
        "romaji": "kagi",
        "meaning": "Llave"
      }
    ],
    "exampleSentence": "部屋の鍵を閉めましたか。",
    "exampleTranslation": "¿Cerraste con llave la habitación?",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-343",
    "kanji": "箱",
    "spanish": "Caja",
    "english": "Box",
    "onyomi": "ソウ",
    "kunyomi": "はこ",
    "strokeCount": 15,
    "radicals": "竹 (bambú)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "ゴミ箱",
        "furigana": "ごみばこ",
        "romaji": "gomibako",
        "meaning": "Bote de basura"
      }
    ],
    "exampleSentence": "大きな箱に本を入れました。",
    "exampleTranslation": "Metí los libros en una caja grande.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-344",
    "kanji": "袋",
    "spanish": "Bolsa / Saco",
    "english": "Bag / Sack",
    "onyomi": "タイ",
    "kunyomi": "ふくろ",
    "strokeCount": 11,
    "radicals": "衣 (ropa)",
    "jlptLevel": "N3",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "手袋",
        "furigana": "てぶくろ",
        "romaji": "tebukuro",
        "meaning": "Guantes"
      }
    ],
    "exampleSentence": "レジ袋はいりません。",
    "exampleTranslation": "No necesito bolsa de plástico.",
    "notes": "Genki Lección 14 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-345",
    "kanji": "傘",
    "spanish": "Paraguas",
    "english": "Umbrella",
    "onyomi": "サン",
    "kunyomi": "かさ",
    "strokeCount": 12,
    "radicals": "人 (persona)",
    "jlptLevel": "N3",
    "genkiLesson": 2,
    "compounds": [
      {
        "word": "日傘",
        "furigana": "ひがさ",
        "romaji": "higasa",
        "meaning": "Sombrilla"
      }
    ],
    "exampleSentence": "雨が降りそうだから傘を持って行きます。",
    "exampleTranslation": "Como parece que va a llover, llevaré paraguas.",
    "notes": "Genki Lección 2 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-346",
    "kanji": "靴",
    "spanish": "Zapatos",
    "english": "Shoes",
    "onyomi": "カ",
    "kunyomi": "くつ",
    "strokeCount": 13,
    "radicals": "革 (cuero)",
    "jlptLevel": "N3",
    "genkiLesson": 2,
    "compounds": [
      {
        "word": "靴下",
        "furigana": "くつした",
        "romaji": "kutsushita",
        "meaning": "Calcetines"
      }
    ],
    "exampleSentence": "玄関で靴を脱ぎます。",
    "exampleTranslation": "Me quito los zapatos en la entrada.",
    "notes": "Genki Lección 2 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-347",
    "kanji": "帽",
    "spanish": "Sombrero / Gorra",
    "english": "Hat / Cap",
    "onyomi": "ボウ",
    "kunyomi": "ー",
    "strokeCount": 12,
    "radicals": "巾 (tela)",
    "jlptLevel": "N3",
    "genkiLesson": 2,
    "compounds": [
      {
        "word": "帽子",
        "furigana": "ぼうし",
        "romaji": "boushi",
        "meaning": "Sombrero / Gorra"
      }
    ],
    "exampleSentence": "赤い帽子をかぶっています。",
    "exampleTranslation": "Lleva puesto un sombrero rojo.",
    "notes": "Genki Lección 2 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-348",
    "kanji": "眼",
    "spanish": "Ojo / Vista",
    "english": "Eye",
    "onyomi": "ガン",
    "kunyomi": "め",
    "strokeCount": 11,
    "radicals": "目 (ojo)",
    "jlptLevel": "N3",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "眼鏡",
        "furigana": "めがね",
        "romaji": "megane",
        "meaning": "Lentes / Gafas"
      }
    ],
    "exampleSentence": "田中さんは眼鏡をかけています。",
    "exampleTranslation": "El Sr. Tanaka lleva puestos lentes.",
    "notes": "Genki Lección 7 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-349",
    "kanji": "鏡",
    "spanish": "Espejo / Lente",
    "english": "Mirror / Lens",
    "onyomi": "キョウ",
    "kunyomi": "かがみ",
    "strokeCount": 19,
    "radicals": "金 (metal)",
    "jlptLevel": "N3",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "鏡",
        "furigana": "かがみ",
        "romaji": "kagami",
        "meaning": "Espejo"
      }
    ],
    "exampleSentence": "朝、鏡を見ます。",
    "exampleTranslation": "Me miro al espejo por la mañana.",
    "notes": "Genki Lección 7 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-350",
    "kanji": "髪",
    "spanish": "Cabello / Pelo",
    "english": "Hair",
    "onyomi": "ハツ",
    "kunyomi": "かみ",
    "strokeCount": 14,
    "radicals": "髟 (cabello)",
    "jlptLevel": "N3",
    "genkiLesson": 7,
    "compounds": [
      {
        "word": "髪の毛",
        "furigana": "かみのけ",
        "romaji": "kaminoke",
        "meaning": "Cabello"
      }
    ],
    "exampleSentence": "メアリーさんは髪が長いです。",
    "exampleTranslation": "Mary tiene el cabello largo.",
    "notes": "Genki Lección 7 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-351",
    "kanji": "歯",
    "spanish": "Diente",
    "english": "Tooth",
    "onyomi": "シ",
    "kunyomi": "は",
    "strokeCount": 12,
    "radicals": "歯 (diente)",
    "jlptLevel": "N3",
    "genkiLesson": 12,
    "compounds": [
      {
        "word": "歯医者",
        "furigana": "はいしゃ",
        "romaji": "haisha",
        "meaning": "Dentista"
      }
    ],
    "exampleSentence": "寝る前に歯を磨きます。",
    "exampleTranslation": "Me cepillo los dientes antes de dormir.",
    "notes": "Genki Lección 12 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-352",
    "kanji": "指",
    "spanish": "Dedo / Señalar",
    "english": "Finger / Point",
    "onyomi": "シ",
    "kunyomi": "ゆび、さ・す",
    "strokeCount": 9,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "指輪",
        "furigana": "ゆびわ",
        "romaji": "yubiwa",
        "meaning": "Anillo"
      }
    ],
    "exampleSentence": "きれいな指輪をしていますね。",
    "exampleTranslation": "Qué bonito anillo llevas puesto.",
    "notes": "Genki Lección 14 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-353",
    "kanji": "輪",
    "spanish": "Anillo / Rueda",
    "english": "Ring / Wheel",
    "onyomi": "リン",
    "kunyomi": "わ",
    "strokeCount": 15,
    "radicals": "車 (coche)",
    "jlptLevel": "N3",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "指輪",
        "furigana": "ゆびわ",
        "romaji": "yubiwa",
        "meaning": "Anillo"
      }
    ],
    "exampleSentence": "誕生日に指輪をもらいました。",
    "exampleTranslation": "Recibí un anillo en mi cumpleaños.",
    "notes": "Genki Lección 14 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-354",
    "kanji": "庭",
    "spanish": "Jardín / Patio",
    "english": "Garden / Yard",
    "onyomi": "テイ",
    "kunyomi": "にわ",
    "strokeCount": 10,
    "radicals": "广 (edificio)",
    "jlptLevel": "N3",
    "genkiLesson": 4,
    "compounds": [
      {
        "word": "庭",
        "furigana": "にわ",
        "romaji": "niwa",
        "meaning": "Jardín"
      }
    ],
    "exampleSentence": "庭にきれいな花が咲いています。",
    "exampleTranslation": "En el jardín florecen flores hermosas.",
    "notes": "Genki Lección 4 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-355",
    "kanji": "池",
    "spanish": "Estanque",
    "english": "Pond",
    "onyomi": "チ",
    "kunyomi": "いけ",
    "strokeCount": 6,
    "radicals": "水 (agua)",
    "jlptLevel": "N4",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "電池",
        "furigana": "でんち",
        "romaji": "denchi",
        "meaning": "Batería / Pila"
      }
    ],
    "exampleSentence": "公園の池に鯉がいます。",
    "exampleTranslation": "Hay carpas en el estanque del parque.",
    "notes": "Genki Lección 15 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-356",
    "kanji": "橋",
    "spanish": "Puente",
    "english": "Bridge",
    "onyomi": "キョウ",
    "kunyomi": "はし",
    "strokeCount": 16,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "橋",
        "furigana": "はし",
        "romaji": "hashi",
        "meaning": "Puente"
      }
    ],
    "exampleSentence": "あの橋を渡ると駅があります。",
    "exampleTranslation": "Cruzando aquel puente está la estación.",
    "notes": "Genki Lección 6 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-357",
    "kanji": "角",
    "spanish": "Esquina / Cuerno / Ángulo",
    "english": "Corner / Angle",
    "onyomi": "カク",
    "kunyomi": "かど、つの",
    "strokeCount": 7,
    "radicals": "角 (cuerno)",
    "jlptLevel": "N3",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "曲がり角",
        "furigana": "まがりかど",
        "romaji": "magarikado",
        "meaning": "Esquina para doblar"
      }
    ],
    "exampleSentence": "次の角を右に曲がってください。",
    "exampleTranslation": "Por favor dobla a la derecha en la siguiente esquina.",
    "notes": "Genki Lección 6 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-358",
    "kanji": "交",
    "spanish": "Cruzar / Intercambiar",
    "english": "Mix / Intersect",
    "onyomi": "コウ",
    "kunyomi": "まじ・わる、か・わす",
    "strokeCount": 6,
    "radicals": "亠 (tapa)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "交番",
        "furigana": "こうばん",
        "romaji": "kouban",
        "meaning": "Caseta de policía (Koban)"
      }
    ],
    "exampleSentence": "交番で道を聞きました。",
    "exampleTranslation": "Pregunté el camino en el puesto de policía.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-359",
    "kanji": "警",
    "spanish": "Amonestar / Vigilar",
    "english": "Admonish / Police",
    "onyomi": "ケイ",
    "kunyomi": "ー",
    "strokeCount": 19,
    "radicals": "言 (palabra)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "警察",
        "furigana": "けいさつ",
        "romaji": "keisatsu",
        "meaning": "Policía"
      }
    ],
    "exampleSentence": "すぐに警察に連絡しました。",
    "exampleTranslation": "Me comuniqué de inmediato con la policía.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-360",
    "kanji": "察",
    "spanish": "Inspeccionar / Adivinar",
    "english": "Inspect / Guess",
    "onyomi": "サツ",
    "kunyomi": "ー",
    "strokeCount": 14,
    "radicals": "宀 (techo)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "警察官",
        "furigana": "けいさつかん",
        "romaji": "keisatsukan",
        "meaning": "Oficial de policía"
      }
    ],
    "exampleSentence": "親切な警察官が助けてくれました。",
    "exampleTranslation": "Un amable oficial de policía me ayudó.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-361",
    "kanji": "盗",
    "spanish": "Robar / Hurtar",
    "english": "Steal",
    "onyomi": "トウ",
    "kunyomi": "ぬす・む",
    "strokeCount": 11,
    "radicals": "皿 (plato)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "盗む",
        "furigana": "ぬすむ",
        "romaji": "nusumu",
        "meaning": "Robar"
      }
    ],
    "exampleSentence": "自転車を盗まれてしまいました。",
    "exampleTranslation": "Me robaron la bicicleta.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-362",
    "kanji": "泥",
    "spanish": "Barro / Lodo",
    "english": "Mud",
    "onyomi": "デイ",
    "kunyomi": "どろ",
    "strokeCount": 8,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "泥棒",
        "furigana": "どろぼう",
        "romaji": "dorobou",
        "meaning": "Ladrón"
      }
    ],
    "exampleSentence": "家に泥棒が入りました。",
    "exampleTranslation": "Un ladrón entró a la casa.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-363",
    "kanji": "棒",
    "spanish": "Barra / Palo",
    "english": "Rod / Stick",
    "onyomi": "ボウ",
    "kunyomi": "ー",
    "strokeCount": 12,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "泥棒",
        "furigana": "どろぼう",
        "romaji": "dorobou",
        "meaning": "Ladrón"
      }
    ],
    "exampleSentence": "泥棒が警察に捕まりました。",
    "exampleTranslation": "El ladrón fue atrapado por la policía.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-364",
    "kanji": "捕",
    "spanish": "Atrapar / Capturar",
    "english": "Catch / Arrest",
    "onyomi": "ホ",
    "kunyomi": "つか・まえる、と・らえる",
    "strokeCount": 10,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "捕まる",
        "furigana": "つかまる",
        "romaji": "tsukamaru",
        "meaning": "Ser atrapado"
      }
    ],
    "exampleSentence": "犯人が無事に捕まりました。",
    "exampleTranslation": "El culpable fue capturado sin contratiempos.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-365",
    "kanji": "逃",
    "spanish": "Escapar / Huir",
    "english": "Escape / Flee",
    "onyomi": "トウ",
    "kunyomi": "に・げる",
    "strokeCount": 9,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 21,
    "compounds": [
      {
        "word": "逃げる",
        "furigana": "にげる",
        "romaji": "nigeru",
        "meaning": "Escapar / Huir"
      }
    ],
    "exampleSentence": "鳥が窓から逃げてしまいました。",
    "exampleTranslation": "El pájaro se escapó por la ventana.",
    "notes": "Genki Lección 21 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-366",
    "kanji": "助",
    "spanish": "Ayudar / Rescatar",
    "english": "Help / Rescue",
    "onyomi": "ジョ",
    "kunyomi": "たす・ける、たす・かる",
    "strokeCount": 7,
    "radicals": "力 (fuerza)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "助ける",
        "furigana": "たすける",
        "romaji": "tasukeru",
        "meaning": "Ayudar / Salvar"
      }
    ],
    "exampleSentence": "友達が仕事を手伝って助けてくれました。",
    "exampleTranslation": "Mi amigo me ayudó con el trabajo.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-367",
    "kanji": "呼",
    "spanish": "Llamar / Invitar",
    "english": "Call",
    "onyomi": "コ",
    "kunyomi": "よ・ぶ",
    "strokeCount": 8,
    "radicals": "口 (boca)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "呼ぶ",
        "furigana": "よぶ",
        "romaji": "yobu",
        "meaning": "Llamar"
      }
    ],
    "exampleSentence": "タクシーを呼びましょうか。",
    "exampleTranslation": "¿Llamamos un taxi?",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-368",
    "kanji": "届",
    "spanish": "Entregar / Alcanzar",
    "english": "Deliver / Reach",
    "onyomi": "カイ",
    "kunyomi": "とど・ける、とど・く",
    "strokeCount": 8,
    "radicals": "尸 (cuerpo)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "届く",
        "furigana": "とどく",
        "romaji": "todoku",
        "meaning": "Llegar un envío"
      }
    ],
    "exampleSentence": "日本から荷物が届きました。",
    "exampleTranslation": "Llegó un paquete desde Japón.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-369",
    "kanji": "落",
    "spanish": "Caer / Dejar caer",
    "english": "Fall / Drop",
    "onyomi": "ラク",
    "kunyomi": "お・ちる、お・とす",
    "strokeCount": 12,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "落とす",
        "furigana": "おとす",
        "romaji": "otosu",
        "meaning": "Dejar caer / Perder"
      }
    ],
    "exampleSentence": "駅で定期券を落としてしまいました。",
    "exampleTranslation": "Perdí mi pase de tren en la estación.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-370",
    "kanji": "拾",
    "spanish": "Recoger / Encontrar",
    "english": "Pick up",
    "onyomi": "シュウ",
    "kunyomi": "ひろ・う",
    "strokeCount": 9,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "拾う",
        "furigana": "ひろう",
        "romaji": "hirou",
        "meaning": "Recoger del suelo"
      }
    ],
    "exampleSentence": "道で財布を拾いました。",
    "exampleTranslation": "Recogí una cartera en la calle.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-371",
    "kanji": "壊",
    "spanish": "Romper / Destruir",
    "english": "Break / Destroy",
    "onyomi": "カイ",
    "kunyomi": "こわ・す、こわ・れる",
    "strokeCount": 16,
    "radicals": "土 (tierra)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "壊れる",
        "furigana": "こわれる",
        "romaji": "kowareru",
        "meaning": "Romperse / Descomponerse"
      }
    ],
    "exampleSentence": "洗濯機が壊れてしまいました。",
    "exampleTranslation": "La lavadora se descompuso.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-372",
    "kanji": "直",
    "spanish": "Corregir / Reparar / Directo",
    "english": "Fix / Direct / Straight",
    "onyomi": "チョク、ジキ",
    "kunyomi": "なお・す、なお・る、すぐ",
    "strokeCount": 8,
    "radicals": "目 (ojo)",
    "jlptLevel": "N4",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "直す",
        "furigana": "なおす",
        "romaji": "naosu",
        "meaning": "Reparar / Corregir"
      }
    ],
    "exampleSentence": "自転車を修理して直しました。",
    "exampleTranslation": "Reparé la bicicleta.",
    "notes": "Genki Lección 18 • Nivel JLPT N4"
  },
  {
    "id": "k-exp-373",
    "kanji": "汚",
    "spanish": "Ensuciar / Sucio",
    "english": "Dirty / Pollute",
    "onyomi": "オ",
    "kunyomi": "よご・れる、きたな・い",
    "strokeCount": 6,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "汚い",
        "furigana": "きたない",
        "romaji": "kitanai",
        "meaning": "Sucio / Desordenado"
      }
    ],
    "exampleSentence": "部屋が汚いので掃除します。",
    "exampleTranslation": "Como el cuarto está sucio, lo limpiaré.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-374",
    "kanji": "掃",
    "spanish": "Barrer / Limpiar",
    "english": "Sweep",
    "onyomi": "ソウ",
    "kunyomi": "は・く",
    "strokeCount": 11,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "掃除",
        "furigana": "そうじ",
        "romaji": "souji",
        "meaning": "Limpieza"
      }
    ],
    "exampleSentence": "毎日部屋を掃除しています。",
    "exampleTranslation": "Limpio mi habitación todos los días.",
    "notes": "Genki Lección 11 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-375",
    "kanji": "除",
    "spanish": "Eliminar / Quitar",
    "english": "Exclude / Remove",
    "onyomi": "ジョ",
    "kunyomi": "のぞ・く",
    "strokeCount": 10,
    "radicals": "阜 (colina)",
    "jlptLevel": "N3",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "掃除機",
        "furigana": "そうじき",
        "romaji": "soujiki",
        "meaning": "Aspiradora"
      }
    ],
    "exampleSentence": "掃除機をかけて部屋をきれいにしました。",
    "exampleTranslation": "Pasé la aspiradora y dejé limpio el cuarto.",
    "notes": "Genki Lección 11 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-376",
    "kanji": "並",
    "spanish": "Alinear / Hacer fila / Común",
    "english": "Line up / Ordinary",
    "onyomi": "ヘイ",
    "kunyomi": "なら・ぶ、なら・べる",
    "strokeCount": 8,
    "radicals": "一 (uno)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "並ぶ",
        "furigana": "ならぶ",
        "romaji": "narabu",
        "meaning": "Hacer fila"
      }
    ],
    "exampleSentence": "人気のラーメン屋に並びました。",
    "exampleTranslation": "Hice fila en un restaurante popular de ramen.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-377",
    "kanji": "決",
    "spanish": "Decidir",
    "english": "Decide",
    "onyomi": "ケツ",
    "kunyomi": "き・める、き・まる",
    "strokeCount": 7,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "決める",
        "furigana": "きめる",
        "romaji": "kimeru",
        "meaning": "Decidir"
      }
    ],
    "exampleSentence": "将来の目標を決めました。",
    "exampleTranslation": "Decidí mi meta para el futuro.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-378",
    "kanji": "予",
    "spanish": "De antemano / Previo",
    "english": "Beforehand",
    "onyomi": "ヨ",
    "kunyomi": "あらかじ・め",
    "strokeCount": 4,
    "radicals": "亅 (gancho)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "予定",
        "furigana": "よてい",
        "romaji": "yotei",
        "meaning": "Plan / Agenda"
      }
    ],
    "exampleSentence": "来週の予定を教えてください。",
    "exampleTranslation": "Por favor dime tus planes para la próxima semana.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-379",
    "kanji": "約",
    "spanish": "Promesa / Aproximadamente",
    "english": "Promise / Approximately",
    "onyomi": "ヤク",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "予約",
        "furigana": "よやく",
        "romaji": "yoyaku",
        "meaning": "Reservación"
      }
    ],
    "exampleSentence": "インターネットでホテルを予約しました。",
    "exampleTranslation": "Reservé el hotel por internet.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-380",
    "kanji": "準",
    "spanish": "Preparar / Estándar",
    "english": "Prepare / Semi-",
    "onyomi": "ジュン",
    "kunyomi": "ー",
    "strokeCount": 13,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "準備",
        "furigana": "じゅんび",
        "romaji": "junbi",
        "meaning": "Preparación"
      }
    ],
    "exampleSentence": "旅行の準備はもう終わりましたか。",
    "exampleTranslation": "¿Ya terminaste los preparativos del viaje?",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-381",
    "kanji": "備",
    "spanish": "Equipar / Proveer / Prepararse",
    "english": "Provide / Prepare",
    "onyomi": "ビ",
    "kunyomi": "そな・える",
    "strokeCount": 12,
    "radicals": "人 (persona)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "準備",
        "furigana": "じゅんび",
        "romaji": "junbi",
        "meaning": "Preparativos"
      }
    ],
    "exampleSentence": "試験の準備をしっかりします。",
    "exampleTranslation": "Haré bien los preparativos para el examen.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-382",
    "kanji": "談",
    "spanish": "Conversar / Discutir",
    "english": "Talk / Discuss",
    "onyomi": "ダン",
    "kunyomi": "ー",
    "strokeCount": 15,
    "radicals": "言 (palabra)",
    "jlptLevel": "N3",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "冗談",
        "furigana": "じょうだん",
        "romaji": "joudan",
        "meaning": "Broma"
      }
    ],
    "exampleSentence": "冗談を言って友達を笑わせました。",
    "exampleTranslation": "Dije una broma e hice reír a mis amigos.",
    "notes": "Genki Lección 14 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-383",
    "kanji": "絡",
    "spanish": "Entrelazar / Contactar",
    "english": "Entwine / Contact",
    "onyomi": "ラク",
    "kunyomi": "から・む",
    "strokeCount": 12,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "連絡先",
        "furigana": "れんらくさき",
        "romaji": "renrakusaki",
        "meaning": "Datos de contacto"
      }
    ],
    "exampleSentence": "連絡先を交換しましょう。",
    "exampleTranslation": "Intercambiemos nuestros datos de contacto.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-384",
    "kanji": "報",
    "spanish": "Informar / Recompensar",
    "english": "Report / Reward",
    "onyomi": "ホウ",
    "kunyomi": "むく・いる",
    "strokeCount": 12,
    "radicals": "土 (tierra)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "情報",
        "furigana": "じょうほう",
        "romaji": "jouhou",
        "meaning": "Información"
      }
    ],
    "exampleSentence": "インターネットで新しい情報を調べます。",
    "exampleTranslation": "Busco información nueva en internet.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-385",
    "kanji": "告",
    "spanish": "Anunciar / Informar",
    "english": "Tell / Announce",
    "onyomi": "コク",
    "kunyomi": "つ・げる",
    "strokeCount": 7,
    "radicals": "口 (boca)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "報告",
        "furigana": "ほうこく",
        "romaji": "houkoku",
        "meaning": "Reporte / Informe"
      }
    ],
    "exampleSentence": "部長に仕事の結果を報告しました。",
    "exampleTranslation": "Informé el resultado del trabajo al director de área.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-386",
    "kanji": "放",
    "spanish": "Soltar / Transmitir",
    "english": "Release / Broadcast",
    "onyomi": "ホウ",
    "kunyomi": "はな・す",
    "strokeCount": 8,
    "radicals": "攴 (golpear)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "放送",
        "furigana": "ほうそう",
        "romaji": "housou",
        "meaning": "Transmisión (TV/Radio)"
      }
    ],
    "exampleSentence": "ニュース番組が放送されています。",
    "exampleTranslation": "Se está transmitiendo el noticiero.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-387",
    "kanji": "組",
    "spanish": "Grupo / Armar / Equipo",
    "english": "Group / Assemble",
    "onyomi": "ソ",
    "kunyomi": "く・む、くみ",
    "strokeCount": 11,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "番組",
        "furigana": "ばんぐみ",
        "romaji": "bangumi",
        "meaning": "Programa"
      }
    ],
    "exampleSentence": "二人一組になって練習してください。",
    "exampleTranslation": "Por favor practiquen en parejas de dos.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-388",
    "kanji": "選",
    "spanish": "Elegir / Seleccionar",
    "english": "Choose / Select",
    "onyomi": "セン",
    "kunyomi": "えら・ぶ",
    "strokeCount": 15,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "選ぶ",
        "furigana": "えらぶ",
        "romaji": "erabu",
        "meaning": "Elegir / Escoger"
      }
    ],
    "exampleSentence": "母へのプレゼントを選びました。",
    "exampleTranslation": "Elegí un regalo para mi madre.",
    "notes": "Genki Lección 14 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-389",
    "kanji": "迷",
    "spanish": "Perderse / Dudar",
    "english": "Get lost / Hesitate",
    "onyomi": "メイ",
    "kunyomi": "まよ・う",
    "strokeCount": 9,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 16,
    "compounds": [
      {
        "word": "迷う",
        "furigana": "まよう",
        "romaji": "mayou",
        "meaning": "Perderse / Indeciso"
      }
    ],
    "exampleSentence": "道に迷ってしまいました。",
    "exampleTranslation": "Me perdí en el camino.",
    "notes": "Genki Lección 16 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-390",
    "kanji": "惑",
    "spanish": "Perplejidad / Tentación",
    "english": "Delusion / Perplexity",
    "onyomi": "ワク",
    "kunyomi": "まど・う",
    "strokeCount": 12,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "迷惑",
        "furigana": "めいわく",
        "romaji": "meiwaku",
        "meaning": "Molestia / Inconveniente"
      }
    ],
    "exampleSentence": "周りの人に迷惑をかけないでください。",
    "exampleTranslation": "Por favor no causes molestias a las personas alrededor.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-391",
    "kanji": "恥",
    "spanish": "Vergüenza",
    "english": "Shame / Embarrassment",
    "onyomi": "チ",
    "kunyomi": "は・じる、はずか・しい",
    "strokeCount": 10,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "恥ずかしい",
        "furigana": "はずかしい",
        "romaji": "hazukashii",
        "meaning": "Avergonzado / Tímido"
      }
    ],
    "exampleSentence": "大勢の前で話すのは恥ずかしいです。",
    "exampleTranslation": "Me da pena hablar frente a mucha gente.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-392",
    "kanji": "怖",
    "spanish": "Miedo / Aterrador",
    "english": "Fear / Scary",
    "onyomi": "フ",
    "kunyomi": "こわ・い",
    "strokeCount": 8,
    "radicals": "心 (corazón)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "怖い",
        "furigana": "こわい",
        "romaji": "kowai",
        "meaning": "Dar miedo / Aterrador"
      }
    ],
    "exampleSentence": "昨日の夜、怖い夢を見ました。",
    "exampleTranslation": "Anoche tuve una pesadilla (sueño aterrador).",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-393",
    "kanji": "危",
    "spanish": "Peligro",
    "english": "Danger",
    "onyomi": "キ",
    "kunyomi": "あぶ・ない、あや・うい",
    "strokeCount": 6,
    "radicals": "卩 (sello)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "危ない",
        "furigana": "あぶない",
        "romaji": "abunai",
        "meaning": "Peligroso / ¡Cuidado!"
      }
    ],
    "exampleSentence": "ここは車が通るので危ないですよ。",
    "exampleTranslation": "Aquí es peligroso porque pasan autos.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-394",
    "kanji": "険",
    "spanish": "Empinado / Peligroso",
    "english": "Steep / Risky",
    "onyomi": "ケン",
    "kunyomi": "けわ・しい",
    "strokeCount": 11,
    "radicals": "阜 (colina)",
    "jlptLevel": "N3",
    "genkiLesson": 17,
    "compounds": [
      {
        "word": "危険",
        "furigana": "きけん",
        "romaji": "kiken",
        "meaning": "Peligro / Riesgo"
      }
    ],
    "exampleSentence": "危険な場所には入らないでください。",
    "exampleTranslation": "Por favor no entre a lugares peligrosos.",
    "notes": "Genki Lección 17 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-395",
    "kanji": "返",
    "spanish": "Devolver / Responder",
    "english": "Return / Answer",
    "onyomi": "ヘン",
    "kunyomi": "かえ・す、かえ・る",
    "strokeCount": 7,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 6,
    "compounds": [
      {
        "word": "返事",
        "furigana": "へんじ",
        "romaji": "henji",
        "meaning": "Respuesta"
      }
    ],
    "exampleSentence": "メールの返事を書きました。",
    "exampleTranslation": "Escribí la respuesta del correo.",
    "notes": "Genki Lección 6 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-396",
    "kanji": "礼",
    "spanish": "Cortesía / Agradecimiento / Reverencia",
    "english": "Courtesy / Thanks / Bow",
    "onyomi": "レイ、ライ",
    "kunyomi": "ー",
    "strokeCount": 5,
    "radicals": "示 (altar)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "お礼",
        "furigana": "おれい",
        "romaji": "orei",
        "meaning": "Agradecimiento"
      }
    ],
    "exampleSentence": "手伝ってくれた友達にお礼を言いました。",
    "exampleTranslation": "Le di las gracias al amigo que me ayudó.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-397",
    "kanji": "祝",
    "spanish": "Celebrar / Felicitar",
    "english": "Celebrate / Congratulate",
    "onyomi": "シュク",
    "kunyomi": "いわ・う",
    "strokeCount": 9,
    "radicals": "示 (altar)",
    "jlptLevel": "N3",
    "genkiLesson": 14,
    "compounds": [
      {
        "word": "お祝い",
        "furigana": "おいわい",
        "romaji": "oiwai",
        "meaning": "Celebración / Regalo festivo"
      }
    ],
    "exampleSentence": "卒業のお祝いに時計をもらいました。",
    "exampleTranslation": "Recibí un reloj para celebrar mi graduación.",
    "notes": "Genki Lección 14 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-398",
    "kanji": "願",
    "spanish": "Desear / Pedir / Rogar",
    "english": "Wish / Request",
    "onyomi": "ガン",
    "kunyomi": "ねが・う",
    "strokeCount": 19,
    "radicals": "頁 (página)",
    "jlptLevel": "N3",
    "genkiLesson": 1,
    "compounds": [
      {
        "word": "お願い",
        "furigana": "おねがい",
        "romaji": "onegai",
        "meaning": "Petición / Por favor"
      }
    ],
    "exampleSentence": "よろしくお願いします。",
    "exampleTranslation": "Muchas gracias de antemano / Cuente conmigo.",
    "notes": "Genki Lección 1 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-399",
    "kanji": "希",
    "spanish": "Esperanza / Raro",
    "english": "Hope / Rare",
    "onyomi": "キ",
    "kunyomi": "ー",
    "strokeCount": 7,
    "radicals": "巾 (tela)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "希望",
        "furigana": "きぼう",
        "romaji": "kibou",
        "meaning": "Esperanza / Deseo"
      }
    ],
    "exampleSentence": "希望の大学に合格しました。",
    "exampleTranslation": "Aprobé el ingreso a la universidad que deseaba.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-400",
    "kanji": "望",
    "spanish": "Desear / Mirar a lo lejos",
    "english": "Hope / Look afar",
    "onyomi": "ボウ、モウ",
    "kunyomi": "のぞ・む",
    "strokeCount": 11,
    "radicals": "月 (luna)",
    "jlptLevel": "N3",
    "genkiLesson": 13,
    "compounds": [
      {
        "word": "希望",
        "furigana": "きぼう",
        "romaji": "kibou",
        "meaning": "Esperanza / Aspiración"
      }
    ],
    "exampleSentence": "将来は日本で働くことを望んでいます。",
    "exampleTranslation": "En el futuro deseo trabajar en Japón.",
    "notes": "Genki Lección 13 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-401",
    "kanji": "葉",
    "spanish": "Hoja / Palabra",
    "english": "Leaf / Word",
    "onyomi": "ヨウ",
    "kunyomi": "は",
    "strokeCount": 12,
    "radicals": "艸 (hierba)",
    "jlptLevel": "N3",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "言葉",
        "furigana": "ことば",
        "romaji": "kotoba",
        "meaning": "Palabra / Lenguaje"
      }
    ],
    "exampleSentence": "丁寧な言葉を使って話します。",
    "exampleTranslation": "Hablo usando palabras corteses.",
    "notes": "Genki Lección 8 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-402",
    "kanji": "根",
    "spanish": "Raíz",
    "english": "Root",
    "onyomi": "コン",
    "kunyomi": "ね",
    "strokeCount": 10,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 18,
    "compounds": [
      {
        "word": "屋根",
        "furigana": "やね",
        "romaji": "yane",
        "meaning": "Tejado / Techo"
      }
    ],
    "exampleSentence": "赤い屋根の家が私の家です。",
    "exampleTranslation": "La casa de tejado rojo es mi casa.",
    "notes": "Genki Lección 18 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-403",
    "kanji": "咲",
    "spanish": "Florecer",
    "english": "Blossom / Bloom",
    "onyomi": "ショウ",
    "kunyomi": "さ・く",
    "strokeCount": 9,
    "radicals": "口 (boca)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "咲く",
        "furigana": "さく",
        "romaji": "saku",
        "meaning": "Florecer"
      }
    ],
    "exampleSentence": "公園の桜がきれいに咲きました。",
    "exampleTranslation": "Los cerezos del parque florecieron hermosamente.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-404",
    "kanji": "晴",
    "spanish": "Despejado / Buen clima",
    "english": "Clear weather",
    "onyomi": "セイ",
    "kunyomi": "は・れる",
    "strokeCount": 12,
    "radicals": "日 (sol)",
    "jlptLevel": "N3",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "晴れる",
        "furigana": "はれる",
        "romaji": "hareru",
        "meaning": "Despejarse el cielo"
      }
    ],
    "exampleSentence": "明日は晴れるといいですね。",
    "exampleTranslation": "Ojalá mañana esté despejado.",
    "notes": "Genki Lección 8 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-405",
    "kanji": "曇",
    "spanish": "Nublado",
    "english": "Cloudy",
    "onyomi": "ドン",
    "kunyomi": "くも・る",
    "strokeCount": 16,
    "radicals": "日 (sol)",
    "jlptLevel": "N3",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "曇り",
        "furigana": "くもり",
        "romaji": "kumori",
        "meaning": "Nublado"
      }
    ],
    "exampleSentence": "今日は一日中曇りでした。",
    "exampleTranslation": "Hoy estuvo nublado todo el día.",
    "notes": "Genki Lección 8 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-406",
    "kanji": "雲",
    "spanish": "Nube",
    "english": "Cloud",
    "onyomi": "ウン",
    "kunyomi": "くも",
    "strokeCount": 12,
    "radicals": "雨 (lluvia)",
    "jlptLevel": "N3",
    "genkiLesson": 8,
    "compounds": [
      {
        "word": "雲",
        "furigana": "くも",
        "romaji": "kumo",
        "meaning": "Nube"
      }
    ],
    "exampleSentence": "空に白い雲が浮かんでいます。",
    "exampleTranslation": "Flotan nubes blancas en el cielo.",
    "notes": "Genki Lección 8 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-407",
    "kanji": "星",
    "spanish": "Estrella",
    "english": "Star",
    "onyomi": "セイ",
    "kunyomi": "ほし",
    "strokeCount": 9,
    "radicals": "日 (sol)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "星",
        "furigana": "ほし",
        "romaji": "hoshi",
        "meaning": "Estrella"
      }
    ],
    "exampleSentence": "今夜は星がとてもきれいです。",
    "exampleTranslation": "Esta noche las estrellas están muy hermosas.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-408",
    "kanji": "光",
    "spanish": "Luz / Brillar",
    "english": "Light / Shine",
    "onyomi": "コウ",
    "kunyomi": "ひかり、ひか・る",
    "strokeCount": 6,
    "radicals": "儿 (piernas)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "観光",
        "furigana": "かんこう",
        "romaji": "kankou",
        "meaning": "Turismo"
      }
    ],
    "exampleSentence": "週末に京都を観光しました。",
    "exampleTranslation": "El fin de semana hice turismo en Kioto.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-409",
    "kanji": "観",
    "spanish": "Observar / Vista",
    "english": "Observe / View",
    "onyomi": "カン",
    "kunyomi": "み・る",
    "strokeCount": 18,
    "radicals": "見 (ver)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "観光地",
        "furigana": "かんこうち",
        "romaji": "kankouchi",
        "meaning": "Lugar turístico"
      }
    ],
    "exampleSentence": "ここは有名な観光地です。",
    "exampleTranslation": "Este es un lugar turístico famoso.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-410",
    "kanji": "景",
    "spanish": "Paisaje / Escena",
    "english": "Scenery / View",
    "onyomi": "ケイ",
    "kunyomi": "ー",
    "strokeCount": 12,
    "radicals": "日 (sol)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "景色",
        "furigana": "けしき",
        "romaji": "keshiki",
        "meaning": "Paisaje / Vista"
      }
    ],
    "exampleSentence": "山の頂上から見る景色は最高です。",
    "exampleTranslation": "El paisaje visto desde la cima de la montaña es increíble.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-411",
    "kanji": "絵",
    "spanish": "Pintura / Dibujo",
    "english": "Picture / Painting",
    "onyomi": "カイ、エ",
    "kunyomi": "ー",
    "strokeCount": 12,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "絵画",
        "furigana": "かいが",
        "romaji": "kaiga",
        "meaning": "Pintura artística"
      }
    ],
    "exampleSentence": "美術館で有名な絵を見ました。",
    "exampleTranslation": "Vi una pintura famosa en el museo de arte.",
    "notes": "Genki Lección 11 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-412",
    "kanji": "線",
    "spanish": "Línea / Vía de tren",
    "english": "Line / Track",
    "onyomi": "セン",
    "kunyomi": "ー",
    "strokeCount": 15,
    "radicals": "糸 (hilo)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "新幹線",
        "furigana": "しんかんせん",
        "romaji": "shinkansen",
        "meaning": "Tren bala Shinkansen"
      }
    ],
    "exampleSentence": "山手線に乗って新宿へ行きます。",
    "exampleTranslation": "Tomo la línea Yamanote para ir a Shinjuku.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-413",
    "kanji": "鉄",
    "spanish": "Hierro / Ferrocarril",
    "english": "Iron",
    "onyomi": "テツ",
    "kunyomi": "ー",
    "strokeCount": 13,
    "radicals": "金 (metal)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "地下鉄",
        "furigana": "ちかてつ",
        "romaji": "chikatetsu",
        "meaning": "Metro"
      }
    ],
    "exampleSentence": "地下鉄は渋滞がないので便利です。",
    "exampleTranslation": "El metro es práctico porque no hay tráfico.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-414",
    "kanji": "席",
    "spanish": "Asiento / Lugar",
    "english": "Seat",
    "onyomi": "セキ",
    "kunyomi": "ー",
    "strokeCount": 10,
    "radicals": "巾 (tela)",
    "jlptLevel": "N3",
    "genkiLesson": 15,
    "compounds": [
      {
        "word": "自由席",
        "furigana": "じゆうせき",
        "romaji": "jiyuuseki",
        "meaning": "Asiento no reservado"
      }
    ],
    "exampleSentence": "お年寄りに席を譲りました。",
    "exampleTranslation": "Le cedí el asiento a una persona mayor.",
    "notes": "Genki Lección 15 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-415",
    "kanji": "泊",
    "spanish": "Hospedarse / Pasar la noche",
    "english": "Stay overnight",
    "onyomi": "ハク",
    "kunyomi": "と・まる、と・める",
    "strokeCount": 8,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "泊まる",
        "furigana": "とまる",
        "romaji": "tomaru",
        "meaning": "Hospedarse"
      }
    ],
    "exampleSentence": "温泉旅館に二泊しました。",
    "exampleTranslation": "Me hospedé dos noches en un ryokan de aguas termales.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-416",
    "kanji": "船",
    "spanish": "Barco / Embarcación",
    "english": "Ship / Boat",
    "onyomi": "セン",
    "kunyomi": "ふね、ふな",
    "strokeCount": 11,
    "radicals": "舟 (barco)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "船",
        "furigana": "ふね",
        "romaji": "fune",
        "meaning": "Barco"
      }
    ],
    "exampleSentence": "船で島へ渡りました。",
    "exampleTranslation": "Crucé a la isla en barco.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-417",
    "kanji": "飛",
    "spanish": "Volar",
    "english": "Fly",
    "onyomi": "ヒ",
    "kunyomi": "と・ぶ",
    "strokeCount": 9,
    "radicals": "飛 (volar)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "飛行機",
        "furigana": "ひこうき",
        "romaji": "hikouki",
        "meaning": "Avión"
      }
    ],
    "exampleSentence": "飛行機で北海道へ行きました。",
    "exampleTranslation": "Fui a Hokkaido en avión.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-418",
    "kanji": "機",
    "spanish": "Máquina / Oportunidad / Avión",
    "english": "Machine / Opportunity",
    "onyomi": "キ",
    "kunyomi": "はた",
    "strokeCount": 16,
    "radicals": "木 (árbol)",
    "jlptLevel": "N3",
    "genkiLesson": 10,
    "compounds": [
      {
        "word": "機会",
        "furigana": "きかい",
        "romaji": "kikai",
        "meaning": "Oportunidad"
      }
    ],
    "exampleSentence": "機会があればまた日本へ行きたいです。",
    "exampleTranslation": "Si tengo la oportunidad, quiero ir otra vez a Japón.",
    "notes": "Genki Lección 10 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-419",
    "kanji": "登",
    "spanish": "Subir / Escalar",
    "english": "Climb",
    "onyomi": "トウ、ト",
    "kunyomi": "のぼ・る",
    "strokeCount": 12,
    "radicals": "癶 (pasos)",
    "jlptLevel": "N3",
    "genkiLesson": 11,
    "compounds": [
      {
        "word": "登る",
        "furigana": "のぼる",
        "romaji": "noboru",
        "meaning": "Escalar / Subir"
      }
    ],
    "exampleSentence": "いつか富士山に登りたいです。",
    "exampleTranslation": "Algún día quiero escalar el Monte Fuji.",
    "notes": "Genki Lección 11 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-420",
    "kanji": "泳",
    "spanish": "Nadar",
    "english": "Swim",
    "onyomi": "エイ",
    "kunyomi": "およ・ぐ",
    "strokeCount": 8,
    "radicals": "水 (agua)",
    "jlptLevel": "N3",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "泳ぐ",
        "furigana": "およぐ",
        "romaji": "oyogu",
        "meaning": "Nadar"
      }
    ],
    "exampleSentence": "夏に海で泳ぎました。",
    "exampleTranslation": "En verano nadé en el mar.",
    "notes": "Genki Lección 5 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-421",
    "kanji": "遊",
    "spanish": "Jugar / Divertirse",
    "english": "Play / Have fun",
    "onyomi": "ユウ",
    "kunyomi": "あそ・ぶ",
    "strokeCount": 12,
    "radicals": "辵 (camino)",
    "jlptLevel": "N3",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "遊ぶ",
        "furigana": "あそぶ",
        "romaji": "asobu",
        "meaning": "Jugar / Pasar el rato"
      }
    ],
    "exampleSentence": "週末に友達と遊びました。",
    "exampleTranslation": "El fin de semana salí a divertirme con amigos.",
    "notes": "Genki Lección 5 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-422",
    "kanji": "踊",
    "spanish": "Bailar / Danza",
    "english": "Dance",
    "onyomi": "ヨウ",
    "kunyomi": "おど・る",
    "strokeCount": 14,
    "radicals": "足 (pie)",
    "jlptLevel": "N3",
    "genkiLesson": 9,
    "compounds": [
      {
        "word": "踊る",
        "furigana": "おどる",
        "romaji": "odoru",
        "meaning": "Bailar"
      }
    ],
    "exampleSentence": "お祭りでみんなで踊りました。",
    "exampleTranslation": "En el festival todos bailamos juntos.",
    "notes": "Genki Lección 9 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-423",
    "kanji": "祭",
    "spanish": "Festival / Ritual",
    "english": "Festival",
    "onyomi": "サイ",
    "kunyomi": "まつ・り",
    "strokeCount": 11,
    "radicals": "示 (altar)",
    "jlptLevel": "N3",
    "genkiLesson": 5,
    "compounds": [
      {
        "word": "お祭り",
        "furigana": "おまつり",
        "romaji": "omatsuri",
        "meaning": "Festival tradicional"
      }
    ],
    "exampleSentence": "日本の夏祭りはとても賑やかです。",
    "exampleTranslation": "Los festivales de verano de Japón son muy animados.",
    "notes": "Genki Lección 5 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-424",
    "kanji": "招",
    "spanish": "Invitar / Hacer señas",
    "english": "Invite / Beckon",
    "onyomi": "ショウ",
    "kunyomi": "まね・く",
    "strokeCount": 8,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "招待",
        "furigana": "しょうたい",
        "romaji": "shoutai",
        "meaning": "Invitación"
      }
    ],
    "exampleSentence": "結婚式に招待されました。",
    "exampleTranslation": "Fui invitado a una ceremonia de boda.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-425",
    "kanji": "客",
    "spanish": "Invitado / Cliente / Huésped",
    "english": "Guest / Customer",
    "onyomi": "キャク",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "宀 (techo)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "お客様",
        "furigana": "おきゃくさま",
        "romaji": "okyakusama",
        "meaning": "Cliente / Invitado (honorífico)"
      }
    ],
    "exampleSentence": "今日、家にお客さんが来ます。",
    "exampleTranslation": "Hoy vienen invitados a la casa.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-426",
    "kanji": "挨",
    "spanish": "Saludar",
    "english": "Greet",
    "onyomi": "アイ",
    "kunyomi": "ー",
    "strokeCount": 10,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "挨拶",
        "furigana": "あいさつ",
        "romaji": "aisatsu",
        "meaning": "Saludo"
      }
    ],
    "exampleSentence": "近所の人に元気よく挨拶します。",
    "exampleTranslation": "Saludo con energía a los vecinos.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-427",
    "kanji": "拶",
    "spanish": "Saludar",
    "english": "Greet",
    "onyomi": "サツ",
    "kunyomi": "ー",
    "strokeCount": 9,
    "radicals": "手 (mano)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "挨拶",
        "furigana": "あいさつ",
        "romaji": "aisatsu",
        "meaning": "Saludo"
      }
    ],
    "exampleSentence": "丁寧な挨拶は大切です。",
    "exampleTranslation": "Un saludo cortés es importante.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-428",
    "kanji": "尊",
    "spanish": "Respetar / Venerar / Noble",
    "english": "Respect / Revered",
    "onyomi": "ソン",
    "kunyomi": "とうと・い",
    "strokeCount": 12,
    "radicals": "寸 (pulgada)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "尊敬",
        "furigana": "そんけい",
        "romaji": "sonkei",
        "meaning": "Respeto / Admiración"
      }
    ],
    "exampleSentence": "私は両親を尊敬しています。",
    "exampleTranslation": "Yo respeto y admiro a mis padres.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-429",
    "kanji": "敬",
    "spanish": "Respeto / Reverenciar",
    "english": "Respect / Honor",
    "onyomi": "ケイ",
    "kunyomi": "うやま・う",
    "strokeCount": 12,
    "radicals": "攴 (golpear)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "敬語",
        "furigana": "けいご",
        "romaji": "keigo",
        "meaning": "Lenguaje honorífico (Keigo)"
      }
    ],
    "exampleSentence": "仕事では正しい敬語を使います。",
    "exampleTranslation": "En el trabajo uso el lenguaje honorífico adecuado.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-430",
    "kanji": "謙",
    "spanish": "Modestia / Humildad",
    "english": "Humble / Modest",
    "onyomi": "ケン",
    "kunyomi": "ー",
    "strokeCount": 17,
    "radicals": "言 (palabra)",
    "jlptLevel": "N3",
    "genkiLesson": 20,
    "compounds": [
      {
        "word": "謙譲語",
        "furigana": "けんじょうご",
        "romaji": "kenjougo",
        "meaning": "Lenguaje humilde (Kenjougo)"
      }
    ],
    "exampleSentence": "謙譲語を使って自己紹介しました。",
    "exampleTranslation": "Me presenté usando lenguaje humilde.",
    "notes": "Genki Lección 20 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-431",
    "kanji": "丁",
    "spanish": "Cortés / Exacto / Distrito",
    "english": "Polite / Exact / Ward",
    "onyomi": "テイ、チョウ",
    "kunyomi": "ー",
    "strokeCount": 2,
    "radicals": "一 (uno)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "丁寧",
        "furigana": "ていねい",
        "romaji": "teinei",
        "meaning": "Cortés / Cuidadoso"
      }
    ],
    "exampleSentence": "丁寧に説明してくれてありがとうございます。",
    "exampleTranslation": "Muchas gracias por explicarme tan amablemente.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  },
  {
    "id": "k-exp-432",
    "kanji": "寧",
    "spanish": "Cortés / Tranquilidad",
    "english": "Polite / Peaceful",
    "onyomi": "ネイ",
    "kunyomi": "ー",
    "strokeCount": 14,
    "radicals": "宀 (techo)",
    "jlptLevel": "N3",
    "genkiLesson": 19,
    "compounds": [
      {
        "word": "丁寧語",
        "furigana": "ていねいご",
        "romaji": "teineigo",
        "meaning": "Lenguaje cortés (ます/です)"
      }
    ],
    "exampleSentence": "まずは丁寧語から練習しましょう。",
    "exampleTranslation": "Practiquemos primero desde el lenguaje cortés.",
    "notes": "Genki Lección 19 • Nivel JLPT N3"
  }
];
