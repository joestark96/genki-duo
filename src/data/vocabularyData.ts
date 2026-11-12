export interface VocabWord {
  id: string;
  lesson: number; // 0 for intro/greetings, 1-23 for Genki lessons
  japanese: string;
  furigana: string;
  romaji: string;
  spanish: string;
  pos: 'noun' | 'verb-u' | 'verb-ru' | 'verb-irr' | 'adj-i' | 'adj-na' | 'expression' | 'adverb';
  exampleSentence?: string;
  exampleTranslation?: string;
  audioText?: string;
}

export const genkiVocabulary: VocabWord[] = [
  // --- LECCIÓN 0 / INTRO: SALUDOS Y EXPRESIONES BÁSICAS ---
  { id: 'v0-1', lesson: 0, japanese: 'おはよう', furigana: 'おはよう', romaji: 'ohayou', spanish: 'Buenos días (informal)', pos: 'expression', exampleSentence: 'おはよう、けん！', exampleTranslation: '¡Buenos días, Ken!' },
  { id: 'v0-2', lesson: 0, japanese: 'おはようございます', furigana: 'おはようございます', romaji: 'ohayou gozaimasu', spanish: 'Buenos días (formal)', pos: 'expression', exampleSentence: '先生、おはようございます。', exampleTranslation: 'Profesor, buenos días.' },
  { id: 'v0-3', lesson: 0, japanese: 'こんにちは', furigana: 'こんにちは', romaji: 'konnichiwa', spanish: 'Hola / Buenas tardes', pos: 'expression', exampleSentence: 'みなさん、こんにちは。', exampleTranslation: 'Hola a todos.' },
  { id: 'v0-4', lesson: 0, japanese: 'こんばんは', furigana: 'こんばんは', romaji: 'konbanwa', spanish: 'Buenas noches (al saludar)', pos: 'expression', exampleSentence: 'こんばんは、お元気ですか。', exampleTranslation: 'Buenas noches, ¿cómo estás?' },
  { id: 'v0-5', lesson: 0, japanese: 'さようなら', furigana: 'さようなら', romaji: 'sayounara', spanish: 'Adiós / Hasta luego', pos: 'expression' },
  { id: 'v0-6', lesson: 0, japanese: 'じゃあ、また', furigana: 'じゃあ、また', romaji: 'jaa, mata', spanish: 'Hasta luego / Nos vemos (casual)', pos: 'expression' },
  { id: 'v0-7', lesson: 0, japanese: 'ありがとうございます', furigana: 'ありがとうございます', romaji: 'arigatou gozaimasu', spanish: 'Muchas gracias (formal)', pos: 'expression' },
  { id: 'v0-8', lesson: 0, japanese: 'どういたしまして', furigana: 'どういたしまして', romaji: 'dou itashimashite', spanish: 'De nada / Por nada', pos: 'expression' },
  { id: 'v0-9', lesson: 0, japanese: 'すみません', furigana: 'すみません', romaji: 'sumimasen', spanish: 'Disculpe / Perdón / Gracias', pos: 'expression' },
  { id: 'v0-10', lesson: 0, japanese: 'はい', furigana: 'はい', romaji: 'hai', spanish: 'Sí', pos: 'expression' },
  { id: 'v0-11', lesson: 0, japanese: 'いいえ', furigana: 'いいえ', romaji: 'iie', spanish: 'No', pos: 'expression' },
  { id: 'v0-12', lesson: 0, japanese: 'はじめまして', furigana: 'はじめまして', romaji: 'hajimemashite', spanish: 'Mucho gusto (primera vez)', pos: 'expression' },
  { id: 'v0-13', lesson: 0, japanese: 'よろしくお願いします', furigana: 'よろしくおねがいします', romaji: 'yoroshiku onegaishimasu', spanish: 'Encantado / Cuente conmigo', pos: 'expression' },

  // --- LECCIÓN 1: NUEVOS AMIGOS (Nacionalidades, Carreras, Tiempo) ---
  { id: 'v1-1', lesson: 1, japanese: '学生', furigana: 'がくせい', romaji: 'gakusei', spanish: 'Estudiante', pos: 'noun', exampleSentence: 'メアリーさんは学生です。', exampleTranslation: 'Mary es estudiante.' },
  { id: 'v1-2', lesson: 1, japanese: '先生', furigana: 'せんせい', romaji: 'sensei', spanish: 'Profesor / Maestro', pos: 'noun' },
  { id: 'v1-3', lesson: 1, japanese: '留学生', furigana: 'りゅうがくせい', romaji: 'ryuugakusei', spanish: 'Estudiante de intercambio extranjero', pos: 'noun' },
  { id: 'v1-4', lesson: 1, japanese: '大学', furigana: 'だいがく', romaji: 'daigaku', spanish: 'Universidad', pos: 'noun' },
  { id: 'v1-5', lesson: 1, japanese: '高校', furigana: 'こうこう', romaji: 'koukou', spanish: 'Preparatoria / Escuela secundaria superior', pos: 'noun' },
  { id: 'v1-6', lesson: 1, japanese: '友達', furigana: 'ともだち', romaji: 'tomodachi', spanish: 'Amigo / Amiga', pos: 'noun' },
  { id: 'v1-7', lesson: 1, japanese: '専攻', furigana: 'せんこう', romaji: 'senkou', spanish: 'Especialidad / Carrera universitaria', pos: 'noun' },
  { id: 'v1-8', lesson: 1, japanese: '日本', furigana: 'にほん', romaji: 'nihon', spanish: 'Japón', pos: 'noun' },
  { id: 'v1-9', lesson: 1, japanese: '日本語', furigana: 'にほんご', romaji: 'nihongo', spanish: 'Idioma japonés', pos: 'noun' },
  { id: 'v1-10', lesson: 1, japanese: '日本人', furigana: 'にほんじん', romaji: 'nihonjin', spanish: 'Persona japonesa', pos: 'noun' },
  { id: 'v1-11', lesson: 1, japanese: 'アメリカ', furigana: 'アメリカ', romaji: 'amerika', spanish: 'Estados Unidos', pos: 'noun' },
  { id: 'v1-12', lesson: 1, japanese: 'イギリス', furigana: 'イギリス', romaji: 'igirisu', spanish: 'Reino Unido / Inglaterra', pos: 'noun' },
  { id: 'v1-13', lesson: 1, japanese: '今', furigana: 'いま', romaji: 'ima', spanish: 'Ahora', pos: 'adverb' },
  { id: 'v1-14', lesson: 1, japanese: '何時', furigana: 'なんじ', romaji: 'nanji', spanish: '¿Qué hora?', pos: 'noun' },
  { id: 'v1-15', lesson: 1, japanese: '半', furigana: 'はん', romaji: 'han', spanish: 'Y media (en horas)', pos: 'noun' },
  { id: 'v1-16', lesson: 1, japanese: '電話番号', furigana: 'でんわばんごう', romaji: 'denwa bangou', spanish: 'Número telefónico', pos: 'noun' },
  { id: 'v1-17', lesson: 1, japanese: '名前', furigana: 'なまえ', romaji: 'namae', spanish: 'Nombre', pos: 'noun' },

  // --- LECCIÓN 2: DE COMPRAS (Precios, Comida, Cosas cotidianas) ---
  { id: 'v2-1', lesson: 2, japanese: 'これ', furigana: 'これ', romaji: 'kore', spanish: 'Este / Esto (cerca del hablante)', pos: 'noun' },
  { id: 'v2-2', lesson: 2, japanese: 'それ', furigana: 'それ', romaji: 'sore', spanish: 'Ese / Eso (cerca del oyente)', pos: 'noun' },
  { id: 'v2-3', lesson: 2, japanese: 'あれ', furigana: 'あれ', romaji: 'are', spanish: 'Aquel / Aquello (lejos de ambos)', pos: 'noun' },
  { id: 'v2-4', lesson: 2, japanese: 'どれ', furigana: 'どれ', romaji: 'dore', spanish: '¿Cuál?', pos: 'noun' },
  { id: 'v2-5', lesson: 2, japanese: '本', furigana: 'ほん', romaji: 'hon', spanish: 'Libro', pos: 'noun' },
  { id: 'v2-6', lesson: 2, japanese: '雑誌', furigana: 'ざっし', romaji: 'zasshi', spanish: 'Revista', pos: 'noun' },
  { id: 'v2-7', lesson: 2, japanese: '辞書', furigana: 'じしょ', romaji: 'jisho', spanish: 'Diccionario', pos: 'noun' },
  { id: 'v2-8', lesson: 2, japanese: '傘', furigana: 'かさ', romaji: 'kasa', spanish: 'Paraguas', pos: 'noun' },
  { id: 'v2-9', lesson: 2, japanese: '鞄', furigana: 'かばん', romaji: 'kaban', spanish: 'Bolso / Maletín / Mochila', pos: 'noun' },
  { id: 'v2-10', lesson: 2, japanese: '時計', furigana: 'とけい', romaji: 'tokei', spanish: 'Reloj', pos: 'noun' },
  { id: 'v2-11', lesson: 2, japanese: '帽子', furigana: 'ぼうし', romaji: 'boushi', spanish: 'Sombrero / Gorra', pos: 'noun' },
  { id: 'v2-12', lesson: 2, japanese: '靴', furigana: 'くつ', romaji: 'kutsu', spanish: 'Zapatos', pos: 'noun' },
  { id: 'v2-13', lesson: 2, japanese: '財布', furigana: 'さいふ', romaji: 'saifu', spanish: 'Cartera / Billetera', pos: 'noun' },
  { id: 'v2-14', lesson: 2, japanese: 'いくら', furigana: 'いくら', romaji: 'ikura', spanish: '¿Cuánto cuesta?', pos: 'noun' },
  { id: 'v2-15', lesson: 2, japanese: '円', furigana: 'えん', romaji: 'en', spanish: 'Yen (moneda japonesa)', pos: 'noun' },
  { id: 'v2-16', lesson: 2, japanese: '誰', furigana: 'だれ', romaji: 'dare', spanish: '¿Quién?', pos: 'noun' },
  { id: 'v2-17', lesson: 2, japanese: '美味しい', furigana: 'おいしい', romaji: 'oishii', spanish: 'Delicioso / Rico', pos: 'adj-i' },

  // --- LECCIÓN 3: HACER PLANES (Verbos cotidianos, Días, Rutina) ---
  { id: 'v3-1', lesson: 3, japanese: '飲む', furigana: 'のむ', romaji: 'nomu', spanish: 'Beber / Tomar', pos: 'verb-u', exampleSentence: 'お茶を飲みます。', exampleTranslation: 'Bebo té verde.' },
  { id: 'v3-2', lesson: 3, japanese: '食べる', furigana: 'たべる', romaji: 'taberu', spanish: 'Comer', pos: 'verb-ru', exampleSentence: '昼ご飯を食べます。', exampleTranslation: 'Como el almuerzo.' },
  { id: 'v3-3', lesson: 3, japanese: '行く', furigana: 'いく', romaji: 'iku', spanish: 'Ir', pos: 'verb-u', exampleSentence: '学校に行きます。', exampleTranslation: 'Voy a la escuela.' },
  { id: 'v3-4', lesson: 3, japanese: '来る', furigana: 'くる', romaji: 'kuru', spanish: 'Venir', pos: 'verb-irr', exampleSentence: '友達がうちに来ます。', exampleTranslation: 'Un amigo viene a mi casa.' },
  { id: 'v3-5', lesson: 3, japanese: '帰る', furigana: 'かえる', romaji: 'kaeru', spanish: 'Regresar / Volver a casa', pos: 'verb-u' },
  { id: 'v3-6', lesson: 3, japanese: '聞く', furigana: 'きく', romaji: 'kiku', spanish: 'Escuchar / Oír / Preguntar', pos: 'verb-u' },
  { id: 'v3-7', lesson: 3, japanese: '見る', furigana: 'みる', romaji: 'miru', spanish: 'Mirar / Ver', pos: 'verb-ru' },
  { id: 'v3-8', lesson: 3, japanese: '読む', furigana: 'よむ', romaji: 'yomu', spanish: 'Leer', pos: 'verb-u' },
  { id: 'v3-9', lesson: 3, japanese: '話す', furigana: 'はなす', romaji: 'hanasu', spanish: 'Hablar', pos: 'verb-u' },
  { id: 'v3-10', lesson: 3, japanese: '起きる', furigana: 'おきる', romaji: 'okiru', spanish: 'Despertarse / Levantarse', pos: 'verb-ru' },
  { id: 'v3-11', lesson: 3, japanese: '寝る', furigana: 'ねる', romaji: 'neru', spanish: 'Dormir / Ir a la cama', pos: 'verb-ru' },
  { id: 'v3-12', lesson: 3, japanese: '勉強する', furigana: 'べんきょうする', romaji: 'benkyou suru', spanish: 'Estudiar', pos: 'verb-irr' },
  { id: 'v3-13', lesson: 3, japanese: '朝ご飯', furigana: 'あさごはん', romaji: 'asagohan', spanish: 'Desayuno', pos: 'noun' },
  { id: 'v3-14', lesson: 3, japanese: '昼ご飯', furigana: 'ひるごはん', romaji: 'hirugohan', spanish: 'Almuerzo', pos: 'noun' },
  { id: 'v3-15', lesson: 3, japanese: '晩ご飯', furigana: 'ばんごはん', romaji: 'bangohan', spanish: 'Cena', pos: 'noun' },
  { id: 'v3-16', lesson: 3, japanese: '毎日', furigana: 'まいにち', romaji: 'mainichi', spanish: 'Todos los días', pos: 'adverb' },
  { id: 'v3-17', lesson: 3, japanese: '週末', furigana: 'しゅうまつ', romaji: 'shuumatsu', spanish: 'Fin de semana', pos: 'noun' },

  // --- LECCIÓN 4: EL PRIMER ENCUENTRO (Existencia, Ubicación, Pasado) ---
  { id: 'v4-1', lesson: 4, japanese: 'ある', furigana: 'ある', romaji: 'aru', spanish: 'Haber / Estar (para objetos inanimados)', pos: 'verb-u' },
  { id: 'v4-2', lesson: 4, japanese: 'いる', furigana: 'いる', romaji: 'iru', spanish: 'Haber / Estar (para seres vivos: personas y animales)', pos: 'verb-ru' },
  { id: 'v4-3', lesson: 4, japanese: '上', furigana: 'うえ', romaji: 'ue', spanish: 'Arriba / Encima', pos: 'noun' },
  { id: 'v4-4', lesson: 4, japanese: '下', furigana: 'した', romaji: 'shita', spanish: 'Abajo / Debajo', pos: 'noun' },
  { id: 'v4-5', lesson: 4, japanese: '前', furigana: 'まえ', romaji: 'mae', spanish: 'Delante / Frente a', pos: 'noun' },
  { id: 'v4-6', lesson: 4, japanese: '後ろ', furigana: 'うしろ', romaji: 'ushiro', spanish: 'Detrás', pos: 'noun' },
  { id: 'v4-7', lesson: 4, japanese: '中', furigana: 'なか', romaji: 'naka', spanish: 'Dentro / En el interior', pos: 'noun' },
  { id: 'v4-8', lesson: 4, japanese: '隣', furigana: 'となり', romaji: 'tonari', spanish: 'Al lado (de la misma categoría)', pos: 'noun' },
  { id: 'v4-9', lesson: 4, japanese: '近く', furigana: 'ちかく', romaji: 'chikaku', spanish: 'Cerca de', pos: 'noun' },
  { id: 'v4-10', lesson: 4, japanese: '間', furigana: 'あいだ', romaji: 'aida', spanish: 'Entre (A y B)', pos: 'noun' },
  { id: 'v4-11', lesson: 4, japanese: '犬', furigana: 'いぬ', romaji: 'inu', spanish: 'Perro', pos: 'noun' },
  { id: 'v4-12', lesson: 4, japanese: '猫', furigana: 'ねこ', romaji: 'neko', spanish: 'Gato', pos: 'noun' },
  { id: 'v4-13', lesson: 4, japanese: '写真', furigana: 'しゃしん', romaji: 'shashin', spanish: 'Fotografía', pos: 'noun' },
  { id: 'v4-14', lesson: 4, japanese: '撮る', furigana: 'とる', romaji: 'toru', spanish: 'Tomar (fotos)', pos: 'verb-u' },
  { id: 'v4-15', lesson: 4, japanese: '待つ', furigana: 'まつ', romaji: 'matsu', spanish: 'Esperar', pos: 'verb-u' },

  // --- LECCIÓN 5: VIAJE DE VACACIONES (Adjetivos, Clima, Gustos) ---
  { id: 'v5-1', lesson: 5, japanese: '新しい', furigana: 'あたらしい', romaji: 'atarashii', spanish: 'Nuevo', pos: 'adj-i' },
  { id: 'v5-2', lesson: 5, japanese: '古い', furigana: 'ふるい', romaji: 'furui', spanish: 'Viejo / Antiguo', pos: 'adj-i' },
  { id: 'v5-3', lesson: 5, japanese: '暑い', furigana: 'あつい', romaji: 'atsui', spanish: 'Caluroso (clima)', pos: 'adj-i' },
  { id: 'v5-4', lesson: 5, japanese: '寒い', furigana: 'さむい', romaji: 'samui', spanish: 'Frío (clima)', pos: 'adj-i' },
  { id: 'v5-5', lesson: 5, japanese: '冷たい', furigana: 'つめたい', romaji: 'tsumetai', spanish: 'Frío (al tacto / bebidas)', pos: 'adj-i' },
  { id: 'v5-6', lesson: 5, japanese: '忙しい', furigana: 'いそがしい', romaji: 'isogashii', spanish: 'Ocupado', pos: 'adj-i' },
  { id: 'v5-7', lesson: 5, japanese: '暇', furigana: 'ひま', romaji: 'hima', spanish: 'Libre / Con tiempo libre', pos: 'adj-na' },
  { id: 'v5-8', lesson: 5, japanese: '静か', furigana: 'しずか', romaji: 'shizuka', spanish: 'Silencioso / Tranquilo', pos: 'adj-na' },
  { id: 'v5-9', lesson: 5, japanese: '賑やか', furigana: 'にぎやか', romaji: 'nigiyaka', spanish: 'Animado / Ruidoso / Concurrido', pos: 'adj-na' },
  { id: 'v5-10', lesson: 5, japanese: '好き', furigana: 'すき', romaji: 'suki', spanish: 'Gustar / Favorito', pos: 'adj-na' },
  { id: 'v5-11', lesson: 5, japanese: '嫌い', furigana: 'きらい', romaji: 'kirai', spanish: 'Disgustar / Odiar', pos: 'adj-na' },
  { id: 'v5-12', lesson: 5, japanese: '旅行', furigana: 'りょこう', romaji: 'ryokou', spanish: 'Viaje', pos: 'noun' },
  { id: 'v5-13', lesson: 5, japanese: '海', furigana: 'うみ', romaji: 'umi', spanish: 'Mar / Playa', pos: 'noun' },
  { id: 'v5-14', lesson: 5, japanese: '山', furigana: 'やま', romaji: 'yama', spanish: 'Montaña', pos: 'noun' },
  { id: 'v5-15', lesson: 5, japanese: '天気', furigana: 'てんき', romaji: 'tenki', spanish: 'Clima / Tiempo meteorológico', pos: 'noun' },

  // --- LECCIÓN 6: UN DÍA CON UN AMIGO (Forma Te, Peticiones, Permisos) ---
  { id: 'v6-1', lesson: 6, japanese: '教える', furigana: 'おしえる', romaji: 'oshieru', spanish: 'Enseñar / Informar', pos: 'verb-ru' },
  { id: 'v6-2', lesson: 6, japanese: '降りる', furigana: 'おりる', romaji: 'oriru', spanish: 'Bajar (de un transporte)', pos: 'verb-ru' },
  { id: 'v6-3', lesson: 6, japanese: '借りる', furigana: 'かりる', romaji: 'kariru', spanish: 'Pedir prestado', pos: 'verb-ru' },
  { id: 'v6-4', lesson: 6, japanese: '返す', furigana: 'かえす', romaji: 'kaesu', spanish: 'Devolver (algo a alguien)', pos: 'verb-u' },
  { id: 'v6-5', lesson: 6, japanese: '手伝う', furigana: 'てつだう', romaji: 'tetsudau', spanish: 'Ayudar', pos: 'verb-u' },
  { id: 'v6-6', lesson: 6, japanese: '急ぐ', furigana: 'いそぐ', romaji: 'isogu', spanish: 'Darse prisa', pos: 'verb-u' },
  { id: 'v6-7', lesson: 6, japanese: '開ける', furigana: 'あける', romaji: 'akeru', spanish: 'Abrir', pos: 'verb-ru' },
  { id: 'v6-8', lesson: 6, japanese: '閉める', furigana: 'しめる', romaji: 'shimeru', spanish: 'Cerrar', pos: 'verb-ru' },
  { id: 'v6-9', lesson: 6, japanese: 'つける', furigana: 'つける', romaji: 'tsukeru', spanish: 'Encender (luces, tv)', pos: 'verb-ru' },
  { id: 'v6-10', lesson: 6, japanese: '消す', furigana: 'けす', romaji: 'kesu', spanish: 'Apagar / Borrar', pos: 'verb-u' },
  { id: 'v6-11', lesson: 6, japanese: '電話をかける', furigana: 'でんわをかける', romaji: 'denwa o kakeru', spanish: 'Hacer una llamada telefónica', pos: 'verb-ru' },
  { id: 'v6-12', lesson: 6, japanese: '連れてくる', furigana: 'つれてくる', romaji: 'tsuretekuru', spanish: 'Traer (a una persona)', pos: 'verb-irr' },
  { id: 'v6-13', lesson: 6, japanese: '持ってくる', furigana: 'もってくる', romaji: 'mottekuru', spanish: 'Traer (un objeto)', pos: 'verb-irr' },

  // --- LECCIÓN 7: FOTOGRAFÍA FAMILIAR (Te iru, Apariencia, Conectar oraciones) ---
  { id: 'v7-1', lesson: 7, japanese: '家族', furigana: 'かぞく', romaji: 'kazoku', spanish: 'Familia', pos: 'noun' },
  { id: 'v7-2', lesson: 7, japanese: '父', furigana: 'ちち', romaji: 'chichi', spanish: 'Mi padre (humilde)', pos: 'noun' },
  { id: 'v7-3', lesson: 7, japanese: '母', furigana: 'はは', romaji: 'haha', spanish: 'Mi madre (humilde)', pos: 'noun', audioText: '母' },
  { id: 'v7-4', lesson: 7, japanese: 'お父さん', furigana: 'おとうさん', romaji: 'otousan', spanish: 'Padre (de otra persona / respetuoso)', pos: 'noun' },
  { id: 'v7-5', lesson: 7, japanese: 'お母さん', furigana: 'おかあさん', romaji: 'okaasan', spanish: 'Madre (de otra persona / respetuoso)', pos: 'noun' },
  { id: 'v7-6', lesson: 7, japanese: '兄', furigana: 'あに', romaji: 'ani', spanish: 'Mi hermano mayor', pos: 'noun' },
  { id: 'v7-7', lesson: 7, japanese: '姉', furigana: 'あね', romaji: 'ane', spanish: 'Mi hermana mayor', pos: 'noun' },
  { id: 'v7-8', lesson: 7, japanese: '弟', furigana: 'おとうと', romaji: 'otouto', spanish: 'Hermano menor', pos: 'noun' },
  { id: 'v7-9', lesson: 7, japanese: '妹', furigana: 'いもうと', romaji: 'imouto', spanish: 'Hermana menor', pos: 'noun' },
  { id: 'v7-10', lesson: 7, japanese: '結婚する', furigana: 'けっこんする', romaji: 'kekkon suru', spanish: 'Casarse', pos: 'verb-irr' },
  { id: 'v7-11', lesson: 7, japanese: '住む', furigana: 'すむ', romaji: 'sumu', spanish: 'Vivir / Residir', pos: 'verb-u' },
  { id: 'v7-12', lesson: 7, japanese: '勤める', furigana: 'つとめる', romaji: 'tsutomeru', spanish: 'Trabajar para (una empresa)', pos: 'verb-ru' },
  { id: 'v7-13', lesson: 7, japanese: '知る', furigana: 'しる', romaji: 'shiru', spanish: 'Llegar a saber / Conocer', pos: 'verb-u' },
  { id: 'v7-14', lesson: 7, japanese: '太る', furigana: 'ふとる', romaji: 'futoru', spanish: 'Engordar / Ganar peso', pos: 'verb-u' },
  { id: 'v7-15', lesson: 7, japanese: '痩せる', furigana: 'やせる', romaji: 'yaseru', spanish: 'Adelgazar', pos: 'verb-ru' },
  { id: 'v7-16', lesson: 7, japanese: '着る', furigana: 'きる', romaji: 'kiru', spanish: 'Vestir / Ponerse ropa (arriba de la cintura)', pos: 'verb-ru' },
  { id: 'v7-17', lesson: 7, japanese: '履く', furigana: 'はく', romaji: 'haku', spanish: 'Ponerse calzado / pantalones', pos: 'verb-u' },
  { id: 'v7-18', lesson: 7, japanese: '背が高い', furigana: 'せがたかい', romaji: 'se ga takai', spanish: 'Alto de estatura', pos: 'adj-i' },
  { id: 'v7-19', lesson: 7, japanese: '背が低い', furigana: 'せがひくい', romaji: 'se ga hikui', spanish: 'Bajo de estatura', pos: 'adj-i' },

  // --- LECCIÓN 8: PARRILLADA / BARBACOA (Forma Corta, Opiniones, Citas) ---
  { id: 'v8-1', lesson: 8, japanese: '思う', furigana: 'おもう', romaji: 'omou', spanish: 'Pensar / Opinar', pos: 'verb-u' },
  { id: 'v8-2', lesson: 8, japanese: '言う', furigana: 'いう', romaji: 'iu', spanish: 'Decir', pos: 'verb-u' },
  { id: 'v8-3', lesson: 8, japanese: '要る', furigana: 'いる', romaji: 'iru', spanish: 'Necesitar', pos: 'verb-u' },
  { id: 'v8-4', lesson: 8, japanese: '遅くなる', furigana: 'おそくなる', romaji: 'osokunaru', spanish: 'Hacerse tarde / Llegar tarde', pos: 'verb-u' },
  { id: 'v8-5', lesson: 8, japanese: 'お風呂に入る', furigana: 'おふろにはいる', romaji: 'ofuro ni hairu', spanish: 'Tomar un baño japonés', pos: 'verb-u' },
  { id: 'v8-6', lesson: 8, japanese: '雨が降る', furigana: 'あめがふる', romaji: 'ame ga furu', spanish: 'Llover', pos: 'verb-u' },
  { id: 'v8-7', lesson: 8, japanese: '洗う', furigana: 'あらう', romaji: 'arau', spanish: 'Lavar', pos: 'verb-u' },
  { id: 'v8-8', lesson: 8, japanese: '乾杯', furigana: 'かんぱい', romaji: 'kanpai', spanish: '¡Salud! (brindis)', pos: 'expression' },
  { id: 'v8-9', lesson: 8, japanese: '残念', furigana: 'ざんねん', romaji: 'zannen', spanish: 'Lamentable / Una lástima', pos: 'adj-na' },
  { id: 'v8-10', lesson: 8, japanese: '上手', furigana: 'じょうず', romaji: 'jouzu', spanish: 'Habilidoso / Bueno para algo', pos: 'adj-na' },
  { id: 'v8-11', lesson: 8, japanese: '下手', furigana: 'へた', romaji: 'heta', spanish: 'Malo / Torpe en algo', pos: 'adj-na' },

  // --- LECCIÓN 9: EN EL KABUKI (Modificación de Sustantivos, Pasado Corto) ---
  { id: 'v9-1', lesson: 9, japanese: '歌う', furigana: 'うたう', romaji: 'utau', spanish: 'Cantar', pos: 'verb-u' },
  { id: 'v9-2', lesson: 9, japanese: '弾く', furigana: 'ひく', romaji: 'hiku', spanish: 'Tocar (instrumento de cuerda o teclado)', pos: 'verb-u' },
  { id: 'v9-3', lesson: 9, japanese: '吹く', furigana: 'ふく', romaji: 'fuku', spanish: 'Soplar / Tocar (viento)', pos: 'verb-u' },
  { id: 'v9-4', lesson: 9, japanese: '踊る', furigana: 'おどる', romaji: 'odoru', spanish: 'Bailar', pos: 'verb-u' },
  { id: 'v9-5', lesson: 9, japanese: '終わる', furigana: 'おわる', romaji: 'owaru', spanish: 'Terminar / Finalizar', pos: 'verb-u' },
  { id: 'v9-6', lesson: 9, japanese: '始まる', furigana: 'はじまる', romaji: 'hajimaru', spanish: 'Empezar / Comenzar', pos: 'verb-u' },
  { id: 'v9-7', lesson: 9, japanese: '映画館', furigana: 'えいがかん', romaji: 'eigakan', spanish: 'Cine (edificio)', pos: 'noun' },
  { id: 'v9-8', lesson: 9, japanese: '歌手', furigana: 'かしゅ', romaji: 'kashu', spanish: 'Cantante', pos: 'noun' },
  { id: 'v9-9', lesson: 9, japanese: '作家', furigana: 'さっか', romaji: 'sakka', spanish: 'Escritor / Autor', pos: 'noun' },
  { id: 'v9-10', lesson: 9, japanese: '歌舞伎', furigana: 'かぶき', romaji: 'kabuki', spanish: 'Kabuki (teatro tradicional)', pos: 'noun' },

  // --- LECCIÓN 10: VIAJE DE INVIERNO (Comparaciones, Superlativos, Medio de transporte) ---
  { id: 'v10-1', lesson: 10, japanese: '歩いて', furigana: 'あるいて', romaji: 'aruite', spanish: 'A pie / Caminando', pos: 'adverb' },
  { id: 'v10-2', lesson: 10, japanese: '新幹線', furigana: 'しんかんせん', romaji: 'shinkansen', spanish: 'Tren bala Shinkansen', pos: 'noun' },
  { id: 'v10-3', lesson: 10, japanese: '飛行機', furigana: 'ひこうき', romaji: 'hikouki', spanish: 'Avión', pos: 'noun' },
  { id: 'v10-4', lesson: 10, japanese: '地下鉄', furigana: 'ちかてつ', romaji: 'chikatetsu', spanish: 'Metro / Subterráneo', pos: 'noun' },
  { id: 'v10-5', lesson: 10, japanese: '船', furigana: 'ふね', romaji: 'fune', spanish: 'Barco', pos: 'noun' },
  { id: 'v10-6', lesson: 10, japanese: '季節', furigana: 'きせつ', romaji: 'kisetsu', spanish: 'Estación del año', pos: 'noun' },
  { id: 'v10-7', lesson: 10, japanese: '春', furigana: 'はる', romaji: 'haru', spanish: 'Primavera', pos: 'noun' },
  { id: 'v10-8', lesson: 10, japanese: '夏', furigana: 'なつ', romaji: 'natsu', spanish: 'Verano', pos: 'noun' },
  { id: 'v10-9', lesson: 10, japanese: '秋', furigana: 'あき', romaji: 'aki', spanish: 'Otoño', pos: 'noun' },
  { id: 'v10-10', lesson: 10, japanese: '冬', furigana: 'ふゆ', romaji: 'fuyu', spanish: 'Invierno', pos: 'noun' },
  { id: 'v10-11', lesson: 10, japanese: '泊まる', furigana: 'とまる', romaji: 'tomaru', spanish: 'Hospedarse / Quedarse en un hotel', pos: 'verb-u' },
  { id: 'v10-12', lesson: 10, japanese: '一番', furigana: 'いちばん', romaji: 'ichiban', spanish: 'El más / El número uno (superlativo)', pos: 'adverb' },

  // --- LECCIÓN 11: DESPUÉS DE LA FIESTA (Deseo たい, Experiencia たことがある, Ejemplos たり〜たり) ---
  { id: 'v11-1', lesson: 11, japanese: '登る', furigana: 'のぼる', romaji: 'noboru', spanish: 'Escalar / Subir (montañas)', pos: 'verb-u' },
  { id: 'v11-2', lesson: 11, japanese: '泊まる', furigana: 'とまる', romaji: 'tomaru', spanish: 'Hospedarse en hotel', pos: 'verb-u' },
  { id: 'v11-3', lesson: 11, japanese: '掃除する', furigana: 'そうじする', romaji: 'souji suru', spanish: 'Limpiar el cuarto', pos: 'verb-irr' },
  { id: 'v11-4', lesson: 11, japanese: '洗濯する', furigana: 'せんたくする', romaji: 'sentaku suru', spanish: 'Lavar la ropa', pos: 'verb-irr' },
  { id: 'v11-5', lesson: 11, japanese: '練習する', furigana: 'れんしゅうする', romaji: 'renshuu suru', spanish: 'Practicar', pos: 'verb-irr' },
  { id: 'v11-6', lesson: 11, japanese: '神社', furigana: 'じんじゃ', romaji: 'jinja', spanish: 'Santuario sintoísta', pos: 'noun' },
  { id: 'v11-7', lesson: 11, japanese: 'お寺', furigana: 'おてら', romaji: 'otera', spanish: 'Templo budista', pos: 'noun' },
  { id: 'v11-8', lesson: 11, japanese: '温泉', furigana: 'おんせん', romaji: 'onsen', spanish: 'Aguas termales onsen', pos: 'noun' },

  // --- LECCIÓN 12: SENTIRSE MAL (Enfermedad, Deber なければいけない, Explicaciones んだ) ---
  { id: 'v12-1', lesson: 12, japanese: '風邪をひく', furigana: 'かぜをひく', romaji: 'kaze o hiku', spanish: 'Pescar un resfriado', pos: 'verb-u' },
  { id: 'v12-2', lesson: 12, japanese: '熱がある', furigana: 'ねつがある', romaji: 'netsu ga aru', spanish: 'Tener fiebre', pos: 'verb-u' },
  { id: 'v12-3', lesson: 12, japanese: '薬', furigana: 'くすり', romaji: 'kusuri', spanish: 'Medicina / Medicamento', pos: 'noun' },
  { id: 'v12-4', lesson: 12, japanese: '病院', furigana: 'びょういん', romaji: 'byouin', spanish: 'Hospital / Clínica', pos: 'noun' },
  { id: 'v12-5', lesson: 12, japanese: '喉が渇く', furigana: 'のどがかわく', romaji: 'nodo ga kawaku', spanish: 'Tener sed', pos: 'verb-u' },
  { id: 'v12-6', lesson: 12, japanese: 'お腹が痛い', furigana: 'おなかがいたい', romaji: 'onaka ga itai', spanish: 'Doler el estómago', pos: 'adj-i' },
  { id: 'v12-7', lesson: 12, japanese: '頭が痛い', furigana: 'あたまがいたい', romaji: 'atama ga itai', spanish: 'Doler la cabeza', pos: 'adj-i' },
  { id: 'v12-8', lesson: 12, japanese: 'お大事に', furigana: 'おだいじに', romaji: 'odaiji ni', spanish: '¡Que te mejores pronto!', pos: 'expression' },

  // --- GENKI II: LECCIÓN 13: BUSCANDO TRABAJO (Potencial られる, Razones し, Parece そう) ---
  { id: 'v13-1', lesson: 13, japanese: '経験', furigana: 'けいけん', romaji: 'keiken', spanish: 'Experiencia', pos: 'noun' },
  { id: 'v13-2', lesson: 13, japanese: '約束', furigana: 'やくそく', romaji: 'yakusoku', spanish: 'Promesa / Cita pactada', pos: 'noun' },
  { id: 'v13-3', lesson: 13, japanese: '履歴書', furigana: 'りれきしょ', romaji: 'rirekisho', spanish: 'Curriculum Vitae (CV)', pos: 'noun' },
  { id: 'v13-4', lesson: 13, japanese: '面接', furigana: 'めんせつ', romaji: 'mensetsu', spanish: 'Entrevista de trabajo', pos: 'noun' },
  { id: 'v13-5', lesson: 13, japanese: 'アルバイト', furigana: 'アルバイト', romaji: 'arubaito', spanish: 'Trabajo de medio tiempo', pos: 'noun' },
  { id: 'v13-6', lesson: 13, japanese: '給料', furigana: 'きゅうりょう', romaji: 'kyuuryou', spanish: 'Salario / Sueldo', pos: 'noun' },
  { id: 'v13-7', lesson: 13, japanese: '募集', furigana: 'ぼしゅう', romaji: 'boshuu', spanish: 'Reclutamiento / Convocatoria', pos: 'noun' },

  // --- GENKI II: LECCIÓN 14: DÍA DE SAN VALENTÍN (Probar てみる, Si なら, Dar y Recibir) ---
  { id: 'v14-1', lesson: 14, japanese: '相談する', furigana: 'そうだんする', romaji: 'soudan suru', spanish: 'Consultar / Pedir consejo', pos: 'verb-irr' },
  { id: 'v14-2', lesson: 14, japanese: 'プレゼント', furigana: 'プレゼント', romaji: 'purezento', spanish: 'Regalo', pos: 'noun' },
  { id: 'v14-3', lesson: 14, japanese: 'あげる', furigana: 'あげる', romaji: 'ageru', spanish: 'Dar (hacia otros)', pos: 'verb-ru' },
  { id: 'v14-4', lesson: 14, japanese: 'くれる', furigana: 'くれる', romaji: 'kureru', spanish: 'Dar (hacia mí / mi círculo íntimo)', pos: 'verb-ru' },
  { id: 'v14-5', lesson: 14, japanese: 'もらう', furigana: 'もらう', romaji: 'morau', spanish: 'Recibir (de parte de alguien)', pos: 'verb-u' },
  { id: 'v14-6', lesson: 14, japanese: '指輪', furigana: 'ゆびわ', romaji: 'yubiwa', spanish: 'Anillo', pos: 'noun' },
  { id: 'v14-7', lesson: 14, japanese: 'ぬいぐるみ', furigana: 'ぬいぐるみ', romaji: 'nuigurumi', spanish: 'Peluche', pos: 'noun' },

  // --- GENKI II: LECCIÓN 15: VIAJE A NAGANO (Volitivo, Preparación ておく, Proposiciones relativas) ---
  { id: 'v15-1', lesson: 15, japanese: '予約する', furigana: 'よやくする', romaji: 'yoyaku suru', spanish: 'Reservar (hotel, mesa)', pos: 'verb-irr' },
  { id: 'v15-2', lesson: 15, japanese: '準備する', furigana: 'じゅんびする', romaji: 'junbi suru', spanish: 'Preparar / Hacer preparativos', pos: 'verb-irr' },
  { id: 'v15-3', lesson: 15, japanese: '調べる', furigana: 'しらべる', romaji: 'shiraberu', spanish: 'Investigar / Averiguar', pos: 'verb-ru' },
  { id: 'v15-4', lesson: 15, japanese: '旅館', furigana: 'りょかん', romaji: 'ryokan', spanish: 'Posada tradicional japonesa', pos: 'noun' },
  { id: 'v15-5', lesson: 15, japanese: '温泉', furigana: 'おんせん', romaji: 'onsen', spanish: 'Aguas termales', pos: 'noun' },
  { id: 'v15-6', lesson: 15, japanese: '地図', furigana: 'ちず', romaji: 'chizu', spanish: 'Mapa', pos: 'noun' },

  // --- GENKI II: LECCIÓN 16: OBJETOS PERDIDOS (Favor てくれる/てもらう, Esperar てほしい) ---
  { id: 'v16-1', lesson: 16, japanese: '締め切り', furigana: 'しめきり', romaji: 'shimekiri', spanish: 'Fecha límite / Plazo de entrega', pos: 'noun' },
  { id: 'v16-2', lesson: 16, japanese: '落とす', furigana: 'おとす', romaji: 'otosu', spanish: 'Dejar caer / Perder (algo)', pos: 'verb-u' },
  { id: 'v16-3', lesson: 16, japanese: '拾う', furigana: 'ひろう', romaji: 'hirou', spanish: 'Recoger del suelo', pos: 'verb-u' },
  { id: 'v16-4', lesson: 16, japanese: '届ける', furigana: 'とどける', romaji: 'todokeru', spanish: 'Entregar / Reportar a la policía', pos: 'verb-ru' },
  { id: 'v16-5', lesson: 16, japanese: '交番', furigana: 'こうばん', romaji: 'kouban', spanish: 'Puesto de policía de barrio (koban)', pos: 'noun' },
  { id: 'v16-6', lesson: 16, japanese: '忘れ物', furigana: 'わすれもの', romaji: 'wasuremono', spanish: 'Objeto perdido u olvidado', pos: 'noun' },

  // --- GENKI II: LECCIÓN 17: QUEJAS Y CHISMES (Chismes そうだ, Condicional たら, Sin なくて) ---
  { id: 'v17-1', lesson: 17, japanese: '宝くじ', furigana: 'たからくじ', romaji: 'takarakuji', spanish: 'Lotería', pos: 'noun' },
  { id: 'v17-2', lesson: 17, japanese: '当たる', furigana: 'あたる', romaji: 'ataru', spanish: 'Acertar / Ganar (la lotería)', pos: 'verb-u' },
  { id: 'v17-3', lesson: 17, japanese: '噂', furigana: 'うわさ', romaji: 'uwasa', spanish: 'Rumor / Chisme', pos: 'noun' },
  { id: 'v17-4', lesson: 17, japanese: '文句', furigana: 'もんく', romaji: 'monku', spanish: 'Queja / Reclamo', pos: 'noun' },
  { id: 'v17-5', lesson: 17, japanese: '信じる', furigana: 'しんじる', romaji: 'shinjiru', spanish: 'Creer / Confiar', pos: 'verb-ru' },
  { id: 'v17-6', lesson: 17, japanese: '別れる', furigana: 'わかれる', romaji: 'wakareru', spanish: 'Separarse / Terminar una relación', pos: 'verb-ru' },

  // --- GENKI II: LECCIÓN 18: DÍA DE MUDANZA (Transitivos e Intransitivos, Completitud てしまう) ---
  { id: 'v18-1', lesson: 18, japanese: '壊れる', furigana: 'こわれる', romaji: 'kowareru', spanish: 'Romperse / Descomponerse (intransitivo)', pos: 'verb-ru' },
  { id: 'v18-2', lesson: 18, japanese: '壊す', furigana: 'こわす', romaji: 'kowasu', spanish: 'Romper / Dañar (transitivo)', pos: 'verb-u' },
  { id: 'v18-3', lesson: 18, japanese: '落ちる', furigana: 'おちる', romaji: 'ochiru', spanish: 'Caerse (intransitivo)', pos: 'verb-ru' },
  { id: 'v18-4', lesson: 18, japanese: '引っ越す', furigana: 'ひっこす', romaji: 'hikkosu', spanish: 'Mudarse de casa', pos: 'verb-u' },
  { id: 'v18-5', lesson: 18, japanese: '片付ける', furigana: 'かたづける', romaji: 'katadukeru', spanish: 'Ordenar / Limpiar el desorden', pos: 'verb-ru' },
  { id: 'v18-6', lesson: 18, japanese: '段ボール', furigana: 'だんボール', romaji: 'danbooru', spanish: 'Caja de cartón', pos: 'noun' },

  // --- GENKI II: LECCIÓN 19: REUNIÓN CON EL JEFE (Honorífico Sonkeigo, Respeto) ---
  { id: 'v19-1', lesson: 19, japanese: 'いらっしゃる', furigana: 'いらっしゃる', romaji: 'irassharu', spanish: 'Estar / Ir / Venir (Honorífico respetuoso)', pos: 'verb-u' },
  { id: 'v19-2', lesson: 19, japanese: '召し上がる', furigana: 'めしあがる', romaji: 'meshiagaru', spanish: 'Comer / Beber (Honorífico)', pos: 'verb-u' },
  { id: 'v19-3', lesson: 19, japanese: 'おっしゃる', furigana: 'おっしゃる', romaji: 'ossharu', spanish: 'Decir (Honorífico)', pos: 'verb-u' },
  { id: 'v19-4', lesson: 19, japanese: 'なさる', furigana: 'なさる', romaji: 'nasaru', spanish: 'Hacer (Honorífico de する)', pos: 'verb-u' },
  { id: 'v19-5', lesson: 19, japanese: 'ご覧になる', furigana: 'ごらんになる', romaji: 'goran ni naru', spanish: 'Mirar / Ver (Honorífico)', pos: 'verb-u' },
  { id: 'v19-6', lesson: 19, japanese: '部長', furigana: 'ぶちょう', romaji: 'buchou', spanish: 'Director de departamento / Jefe de área', pos: 'noun' },
  { id: 'v19-7', lesson: 19, japanese: '社長', furigana: 'しゃちょう', romaji: 'shachou', spanish: 'Presidente de la compañía', pos: 'noun' },

  // --- GENKI II: LECCIÓN 20: VISITA DE NEGOCIOS (Humilde Kenjougo, Modestia) ---
  { id: 'v20-1', lesson: 20, japanese: '参る', furigana: 'まいる', romaji: 'mairu', spanish: 'Ir / Venir (Humilde de 行く・来る)', pos: 'verb-u' },
  { id: 'v20-2', lesson: 20, japanese: '申す', furigana: 'もうす', romaji: 'mousu', spanish: 'Decir / Llamarse (Humilde de 言う)', pos: 'verb-u' },
  { id: 'v20-3', lesson: 20, japanese: '致す', furigana: 'いたす', romaji: 'itasu', spanish: 'Hacer (Humilde de する)', pos: 'verb-u' },
  { id: 'v20-4', lesson: 20, japanese: 'いただく', furigana: 'いただく', romaji: 'itadaku', spanish: 'Comer / Beber / Recibir (Humilde)', pos: 'verb-u' },
  { id: 'v20-5', lesson: 20, japanese: 'お目にかかる', furigana: 'おめにかかる', romaji: 'ome ni kakaru', spanish: 'Ver / Conocer a alguien (Humilde de 会う)', pos: 'verb-u' },
  { id: 'v20-6', lesson: 20, japanese: '名刺', furigana: 'めいし', romaji: 'meishi', spanish: 'Tarjeta de presentación de negocios', pos: 'noun' },

  // --- GENKI II: LECCIÓN 21: EL ROBO (Voz Pasiva, Pasiva de Adversidad) ---
  { id: 'v21-1', lesson: 21, japanese: '泥棒', furigana: 'どろぼう', romaji: 'dorobou', spanish: 'Ladrón', pos: 'noun' },
  { id: 'v21-2', lesson: 21, japanese: '盗む', furigana: 'ぬすむ', romaji: 'nusumu', spanish: 'Robar / Hurtar', pos: 'verb-u' },
  { id: 'v21-3', lesson: 21, japanese: '踏む', furigana: 'ふむ', romaji: 'fumu', spanish: 'Pisar', pos: 'verb-u' },
  { id: 'v21-4', lesson: 21, japanese: '叱る', furigana: 'しかる', romaji: 'shikaru', spanish: 'Regañar / Reprender', pos: 'verb-u' },
  { id: 'v21-5', lesson: 21, japanese: '頼む', furigana: 'たのむ', romaji: 'tanomu', spanish: 'Pedir / Encargar un favor', pos: 'verb-u' },
  { id: 'v21-6', lesson: 21, japanese: '警察', furigana: 'けいさつ', romaji: 'keisatsu', spanish: 'Policía', pos: 'noun' },

  // --- GENKI II: LECCIÓN 22: EL DÍA DE LA GRADUACIÓN (Causativo させる, Directivas) ---
  { id: 'v22-1', lesson: 22, japanese: '卒業する', furigana: 'そつぎょうする', romaji: 'sotsugyou suru', spanish: 'Graduarse', pos: 'verb-irr' },
  { id: 'v22-2', lesson: 22, japanese: '通う', furigana: 'かよう', romaji: 'kayou', spanish: 'Asistir con frecuencia / Concurrir', pos: 'verb-u' },
  { id: 'v22-3', lesson: 22, japanese: '卒業式', furigana: 'そつぎょうしき', romaji: 'sotsugyoushiki', spanish: 'Ceremonia de graduación', pos: 'noun' },
  { id: 'v22-4', lesson: 22, japanese: '夢', furigana: 'ゆめ', romaji: 'yume', spanish: 'Sueño / Ilusión', pos: 'noun' },
  { id: 'v22-5', lesson: 22, japanese: '将来', furigana: 'しょうらい', romaji: 'shourai', spanish: 'Futuro (carrera personal)', pos: 'noun' },
  { id: 'v22-6', lesson: 22, japanese: '後悔する', furigana: 'こうかいする', romaji: 'koukai suru', spanish: 'Arrepentirse', pos: 'verb-irr' },

  // --- GENKI II: LECCIÓN 23: BUENOS RECUERDOS (Causativo-Pasivo させられる, A pesar de のに) ---
  { id: 'v23-1', lesson: 23, japanese: 'お世話になる', furigana: 'おせわになる', romaji: 'osewa ni naru', spanish: 'Recibir favores y cuidados', pos: 'verb-u' },
  { id: 'v23-2', lesson: 23, japanese: '見送る', furigana: 'みおくる', romaji: 'miokuru', spanish: 'Despedir a alguien (en aeropuerto o estación)', pos: 'verb-u' },
  { id: 'v23-3', lesson: 23, japanese: '空港', furigana: 'くうこう', romaji: 'kuukou', spanish: 'Aeropuerto', pos: 'noun' },
  { id: 'v23-4', lesson: 23, japanese: '出発', furigana: 'しゅっぱつ', romaji: 'shuppatsu', spanish: 'Salida / Partida de viaje', pos: 'noun' },
  { id: 'v23-5', lesson: 23, japanese: '思い出', furigana: 'おもいで', romaji: 'omoide', spanish: 'Recuerdos entrañables', pos: 'noun' },
  { id: 'v23-6', lesson: 23, japanese: '忘れない', furigana: 'わすれない', romaji: 'wasurenai', spanish: 'Inolvidable / No olvidar', pos: 'expression' }
];

