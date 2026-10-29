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
  }
];
