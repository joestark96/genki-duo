export interface KanaChar {
  hira: string;
  kata: string;
  romaji: string;
  example: string;
  exampleMeaning: string;
}

export const gojuonKanaList: KanaChar[] = [
  // A row
  { hira: 'あ', kata: 'ア', romaji: 'a', example: 'ありがとう', exampleMeaning: 'Gracias' },
  { hira: 'い', kata: 'イ', romaji: 'i', example: 'いぬ', exampleMeaning: 'Perro' },
  { hira: 'う', kata: 'ウ', romaji: 'u', example: 'うみ', exampleMeaning: 'Mar' },
  { hira: 'え', kata: 'エ', romaji: 'e', example: 'えき', exampleMeaning: 'Estación' },
  { hira: 'お', kata: 'オ', romaji: 'o', example: 'お茶 (おちゃ)', exampleMeaning: 'Té' },

  // Ka row
  { hira: 'か', kata: 'カ', romaji: 'ka', example: 'かさ', exampleMeaning: 'Paraguas' },
  { hira: 'き', kata: 'キ', romaji: 'ki', example: 'きょう', exampleMeaning: 'Hoy' },
  { hira: 'く', kata: 'ク', romaji: 'ku', example: 'くるま', exampleMeaning: 'Coche' },
  { hira: 'け', kata: 'ケ', romaji: 'ke', example: 'けさ', exampleMeaning: 'Esta mañana' },
  { hira: 'こ', kata: 'コ', romaji: 'ko', example: 'こども', exampleMeaning: 'Niño' },

  // Sa row
  { hira: 'さ', kata: 'サ', romaji: 'sa', example: 'さくら', exampleMeaning: 'Flor de cerezo' },
  { hira: 'し', kata: 'シ', romaji: 'shi', example: 'しんぶん', exampleMeaning: 'Periódico' },
  { hira: 'す', kata: 'ス', romaji: 'su', example: 'すし', exampleMeaning: 'Sushi' },
  { hira: 'せ', kata: 'セ', romaji: 'se', example: 'せんせい', exampleMeaning: 'Profesor' },
  { hira: 'そ', kata: 'ソ', romaji: 'so', example: 'そこ', exampleMeaning: 'Ahí' },

  // Ta row
  { hira: 'た', kata: 'タ', romaji: 'ta', example: 'たべる', exampleMeaning: 'Comer' },
  { hira: 'ち', kata: 'チ', romaji: 'chi', example: 'ちず', exampleMeaning: 'Mapa' },
  { hira: 'つ', kata: 'ツ', romaji: 'tsu', example: 'つくえ', exampleMeaning: 'Escritorio' },
  { hira: 'て', kata: 'テ', romaji: 'te', example: 'てがみ', exampleMeaning: 'Carta' },
  { hira: 'と', kata: 'ト', romaji: 'to', example: 'ともだち', exampleMeaning: 'Amigo' },

  // Na row
  { hira: 'な', kata: 'ナ', romaji: 'na', example: 'なまえ', exampleMeaning: 'Nombre' },
  { hira: 'に', kata: 'ニ', romaji: 'ni', example: 'にほん', exampleMeaning: 'Japón' },
  { hira: 'ぬ', kata: 'ヌ', romaji: 'nu', example: 'ぬいぐるみ', exampleMeaning: 'Peluche' },
  { hira: 'ね', kata: 'ネ', romaji: 'ne', example: 'ねこ', exampleMeaning: 'Gato' },
  { hira: 'の', kata: 'ノ', romaji: 'no', example: 'のみもの', exampleMeaning: 'Bebida' },

  // Ha row
  { hira: 'は', kata: 'ハ', romaji: 'ha', example: 'はな', exampleMeaning: 'Flor / Nariz' },
  { hira: 'ひ', kata: 'ヒ', romaji: 'hi', example: 'ひと', exampleMeaning: 'Persona' },
  { hira: 'ふ', kata: 'フ', romaji: 'fu', example: 'ふね', exampleMeaning: 'Barco' },
  { hira: 'へ', kata: 'ヘ', romaji: 'he', example: 'へや', exampleMeaning: 'Habitación' },
  { hira: 'ほ', kata: 'ホ', romaji: 'ho', example: 'ほん', exampleMeaning: 'Libro' },

  // Ma row
  { hira: 'ま', kata: 'マ', romaji: 'ma', example: 'まち', exampleMeaning: 'Ciudad' },
  { hira: 'み', kata: 'ミ', romaji: 'mi', example: 'みず', exampleMeaning: 'Agua' },
  { hira: 'む', kata: 'ム', romaji: 'mu', example: 'むし', exampleMeaning: 'Insecto' },
  { hira: 'め', kata: 'メ', romaji: 'me', example: 'めがね', exampleMeaning: 'Gafas' },
  { hira: 'も', kata: 'モ', romaji: 'mo', example: 'もり', exampleMeaning: 'Bosque' },

  // Ya row
  { hira: 'や', kata: 'ヤ', romaji: 'ya', example: 'やま', exampleMeaning: 'Montaña' },
  { hira: 'ゆ', kata: 'ユ', romaji: 'yu', example: 'ゆき', exampleMeaning: 'Nieve' },
  { hira: 'よ', kata: 'ヨ', romaji: 'yo', example: 'よる', exampleMeaning: 'Noche' },

  // Ra row
  { hira: 'ら', kata: 'ラ', romaji: 'ra', example: 'らいしゅう', exampleMeaning: 'Próxima semana' },
  { hira: 'り', kata: 'リ', romaji: 'ri', example: 'りんご', exampleMeaning: 'Manzana' },
  { hira: 'る', kata: 'ル', romaji: 'ru', example: 'るす', exampleMeaning: 'Ausencia' },
  { hira: 'れ', kata: 'レ', romaji: 're', example: 'れきし', exampleMeaning: 'Historia' },
  { hira: 'ろ', kata: 'ロ', romaji: 'ro', example: 'ろうそく', exampleMeaning: 'Vela' },

  // Wa, Wo, N
  { hira: 'わ', kata: 'ワ', romaji: 'wa', example: 'わたし', exampleMeaning: 'Yo' },
  { hira: 'を', kata: 'ヲ', romaji: 'wo', example: '〜を', exampleMeaning: 'Partícula de objeto' },
  { hira: 'ん', kata: 'ン', romaji: 'n', example: 'にほん', exampleMeaning: 'Japón (sonido N final)' }
];

export const dakutenKanaList: KanaChar[] = [
  // G
  { hira: 'が', kata: 'ガ', romaji: 'ga', example: 'がっこう', exampleMeaning: 'Escuela' },
  { hira: 'ぎ', kata: 'ギ', romaji: 'gi', example: 'ぎんこう', exampleMeaning: 'Banco' },
  { hira: 'ぐ', kata: 'グ', romaji: 'gu', example: 'ぐあい', exampleMeaning: 'Condición' },
  { hira: 'げ', kata: 'ゲ', romaji: 'ge', example: 'げんき', exampleMeaning: 'Saludable / Bien' },
  { hira: 'ご', kata: 'ゴ', romaji: 'go', example: 'ごはん', exampleMeaning: 'Arroz / Comida' },

  // Z / J
  { hira: 'ざ', kata: 'ザ', romaji: 'za', example: 'ざっし', exampleMeaning: 'Revista' },
  { hira: 'じ', kata: 'ジ', romaji: 'ji', example: 'じかん', exampleMeaning: 'Tiempo / Hora' },
  { hira: 'ず', kata: 'ズ', romaji: 'zu', example: 'ずっと', exampleMeaning: 'Todo el tiempo' },
  { hira: 'ぜ', kata: 'ゼ', romaji: 'ze', example: 'ぜんぶ', exampleMeaning: 'Todo' },
  { hira: 'ぞ', kata: 'ゾ', romaji: 'zo', example: 'ぞう', exampleMeaning: 'Elefante' },

  // D
  { hira: 'だ', kata: 'ダ', romaji: 'da', example: 'だいがく', exampleMeaning: 'Universidad' },
  { hira: 'で', kata: 'デ', romaji: 'de', example: 'でんしゃ', exampleMeaning: 'Tren' },
  { hira: 'ど', kata: 'ド', romaji: 'do', example: 'どこ', exampleMeaning: 'Dónde' },

  // B
  { hira: 'ば', kata: 'バ', romaji: 'ba', example: 'ばんごはん', exampleMeaning: 'Cena' },
  { hira: 'び', kata: 'ビ', romaji: 'bi', example: 'びょういん', exampleMeaning: 'Hospital' },
  { hira: 'ぶ', kata: 'ブ', romaji: 'bu', example: 'ぶんがく', exampleMeaning: 'Literatura' },
  { hira: 'べ', kata: 'ベ', romaji: 'be', example: 'べんきょう', exampleMeaning: 'Estudio' },
  { hira: 'ぼ', kata: 'ボ', romaji: 'bo', example: 'ぼうし', exampleMeaning: 'Sombrero' },

  // P (Handakuten)
  { hira: 'ぱ', kata: 'パ', romaji: 'pa', example: 'パン', exampleMeaning: 'Pan' },
  { hira: 'ぴ', kata: 'ピ', romaji: 'pi', example: 'ピアノ', exampleMeaning: 'Piano' },
  { hira: 'ぷ', kata: 'プ', romaji: 'pu', example: 'プール', exampleMeaning: 'Piscina' },
  { hira: 'ぺ', kata: 'ペ', romaji: 'pe', example: 'ペン', exampleMeaning: 'Bolígrafo' },
  { hira: 'ぽ', kata: 'ポ', romaji: 'po', example: 'ポスト', exampleMeaning: 'Buzón' }
];
