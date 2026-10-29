import { Unit } from '../types';

export const genkiCurriculum: Unit[] = [
  // ==========================================
  // UNIDAD 0: FUNDAMENTOS KANA (Hiragana & Katakana Fila por Fila)
  // ==========================================
  {
    id: 0,
    genkiBook: 'Kanas',
    title: 'Unidad 0: Los Alfabetos Kana',
    subtitle: 'Hiragana y Katakana Completos (Fila por Fila)',
    description: 'Domina cada fila del silabario japonés con pronunciación, lectura y palabras base.',
    themeColor: '#58cc02',
    nodes: [
      // 1. HIRAGANA - FILA A
      {
        id: 'l0-node-1',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila A (あ・い・う・え・お)',
        japaneseTitle: 'あ行のひらがな',
        description: 'Las 5 vocales base del idioma japonés',
        icon: 'Sparkles',
        color: 'green',
        totalSteps: 3,
        unlocked: true,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-a1',
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
            explanation: '「あ」 es el primer caracter Hiragana y representa la vocal "a".'
          },
          {
            id: 'ex-0-a2',
            type: 'match-pairs',
            prompt: 'Une las vocales Hiragana con su Romaji:',
            pairs: [
              { id: 'p1', left: 'あ', leftSub: 'Vocal 1', right: 'a' },
              { id: 'p2', left: 'い', leftSub: 'Vocal 2', right: 'i' },
              { id: 'p3', left: 'う', leftSub: 'Vocal 3', right: 'u' },
              { id: 'p4', left: 'え', leftSub: 'Vocal 4', right: 'e' }
            ],
            explanation: 'El orden de las vocales en japonés siempre es: a, i, u, e, o.'
          },
          {
            id: 'ex-0-a3',
            type: 'listening',
            prompt: 'Escucha el audio y selecciona el caracter correcto:',
            japaneseVoiceText: 'お',
            options: [
              { id: 'opt-1', text: 'お (o)', isCorrect: true },
              { id: 'opt-2', text: 'あ (a)' },
              { id: 'opt-3', text: 'え (e)' },
              { id: 'opt-4', text: 'い (i)' }
            ],
            correctAnswerId: 'opt-1',
            explanation: 'El sonido escuchado fue "o", correspondiente a 「お」.'
          },
          {
            id: 'ex-0-a4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "azul":',
            japaneseVoiceText: 'あお',
            wordBank: ['お', 'あ', 'い', 'え'],
            correctSentence: ['あ', 'お'],
            explanation: '「あ」 (a) + 「お」 (o) = あお (azul en japonés).'
          }
        ]
      },

      // 2. HIRAGANA - FILA KA
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
            prompt: 'Empareja los caracteres de la fila Ka:',
            pairs: [
              { id: 'p1', left: 'か', right: 'ka' },
              { id: 'p2', left: 'き', right: 'ki' },
              { id: 'p3', left: 'く', right: 'ku' },
              { id: 'p4', left: 'こ', right: 'ko' }
            ],
            explanation: 'La fila Ka se combina con las 5 vocales: ka, ki, ku, ke, ko.'
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
          },
          {
            id: 'ex-0-k4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "estación de tren":',
            japaneseVoiceText: 'えき',
            wordBank: ['き', 'え', 'か', 'い'],
            correctSentence: ['え', 'き'],
            explanation: '「え」 + 「き」 = えき (estación de tren en Genki).'
          }
        ]
      },

      // 3. HIRAGANA - FILA SA
      {
        id: 'l0-node-3',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Sa (さ・し・す・せ・そ)',
        japaneseTitle: 'さ行のひらがな',
        description: 'Sonidos con S y el especial 「し」 (shi)',
        icon: 'Sparkles',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-s1',
            type: 'multiple-choice',
            prompt: 'Ojo con la excepción: ¿Cómo se pronuncia 「し」?',
            promptSub: 'し',
            japaneseVoiceText: 'し',
            options: [
              { id: 's-shi', text: 'shi (como en inglés "she")', isCorrect: true },
              { id: 's-si', text: 'si' },
              { id: 's-chi', text: 'chi' },
              { id: 's-hi', text: 'hi' }
            ],
            correctAnswerId: 's-shi',
            explanation: 'En japonés no existe el sonido "si" natural; se pronuncia "shi" (し).'
          },
          {
            id: 'ex-0-s2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Sa:',
            pairs: [
              { id: 'sp1', left: 'さ', right: 'sa' },
              { id: 'sp2', left: 'し', right: 'shi' },
              { id: 'sp3', left: 'す', right: 'su' },
              { id: 'sp4', left: 'そ', right: 'so' }
            ],
            explanation: 'Fila Sa: sa, shi, su, se, so.'
          },
          {
            id: 'ex-0-s3',
            type: 'listening',
            prompt: 'Escucha el audio y selecciona la palabra:',
            japaneseVoiceText: 'すし',
            options: [
              { id: 's-opt1', text: 'すし (sushi)', isCorrect: true },
              { id: 's-opt2', text: 'さし (sashi)' },
              { id: 's-opt3', text: 'すき (suki)' },
              { id: 's-opt4', text: 'そこ (soko)' }
            ],
            correctAnswerId: 's-opt1',
            explanation: 'Escuchaste 「すし」 (sushi).'
          },
          {
            id: 'ex-0-s4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "allí / ese lugar":',
            japaneseVoiceText: 'そこ',
            wordBank: ['こ', 'そ', 'さ', 'す'],
            correctSentence: ['そ', 'こ'],
            explanation: '「そ」 (so) + 「こ」 (ko) = そこ (soko, allí).'
          }
        ]
      },

      // 4. HIRAGANA - FILA TA
      {
        id: 'l0-node-4',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Ta (た・ち・つ・て・と)',
        japaneseTitle: 'た行のひらがな',
        description: 'Sonidos con T y las excepciones 「ち」(chi) y 「つ」(tsu)',
        icon: 'Flame',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-t1',
            type: 'multiple-choice',
            prompt: '¿Cuáles son las dos lecturas irregulares de la fila Ta?',
            promptSub: 'ち y つ',
            japaneseVoiceText: 'ち つ',
            options: [
              { id: 't-irr', text: 'chi (ち) y tsu (つ)', isCorrect: true },
              { id: 't-reg', text: 'ti y tu' },
              { id: 't-oth', text: 'shi y su' }
            ],
            correctAnswerId: 't-irr',
            explanation: 'La fila Ta es: ta (た), chi (ち), tsu (つ), te (て), to (と).'
          },
          {
            id: 'ex-0-t2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Ta:',
            pairs: [
              { id: 'tp1', left: 'た', right: 'ta' },
              { id: 'tp2', left: 'ち', right: 'chi' },
              { id: 'tp3', left: 'つ', right: 'tsu' },
              { id: 'tp4', left: 'て', right: 'te' }
            ],
            explanation: 'Ta, Chi, Tsu, Te, To son fundamentales en Genki.'
          },
          {
            id: 'ex-0-t3',
            type: 'listening',
            prompt: 'Escucha el audio y reconoce el caracter:',
            japaneseVoiceText: 'つ',
            options: [
              { id: 't-tsu', text: 'つ (tsu)', isCorrect: true },
              { id: 't-chi', text: 'ち (chi)' },
              { id: 't-te', text: 'て (te)' },
              { id: 't-ta', text: 'た (ta)' }
            ],
            correctAnswerId: 't-tsu',
            explanation: 'Escuchaste 「つ」 (tsu, como en tsunami).'
          },
          {
            id: 'ex-0-t4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "metro / subterráneo":',
            japaneseVoiceText: 'ちかてつ',
            wordBank: ['つ', 'て', 'か', 'ち', 'た', 'す'],
            correctSentence: ['ち', 'か', 'て', 'つ'],
            explanation: 'ち + か + て + つ = ちかてつ (chikatetsu, metro).'
          }
        ]
      },

      // 5. HIRAGANA - FILA NA
      {
        id: 'l0-node-5',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Na (な・に・ぬ・ね・の)',
        japaneseTitle: 'な行のひらがな',
        description: 'Sonidos nasales con N',
        icon: 'BookOpen',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-n1',
            type: 'multiple-choice',
            prompt: '¿Cómo se lee 「いぬ」 (perro)?',
            promptSub: 'いぬ',
            japaneseVoiceText: 'いぬ',
            options: [
              { id: 'n-inu', text: 'inu (perro)', isCorrect: true },
              { id: 'n-neko', text: 'neko (gato)' },
              { id: 'n-tori', text: 'tori (pájaro)' }
            ],
            correctAnswerId: 'n-inu',
            explanation: '「い」 (i) + 「ぬ」 (nu) = いぬ (perro).'
          },
          {
            id: 'ex-0-n2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Na:',
            pairs: [
              { id: 'np1', left: 'な', right: 'na' },
              { id: 'np2', left: 'に', right: 'ni' },
              { id: 'np3', left: 'ね', right: 'ne' },
              { id: 'np4', left: 'の', right: 'no' }
            ],
            explanation: 'Fila Na: na, ni, nu, ne, no.'
          },
          {
            id: 'ex-0-n3',
            type: 'listening',
            prompt: 'Escucha y selecciona la palabra:',
            japaneseVoiceText: 'ねこ',
            options: [
              { id: 'n-neko-opt', text: 'ねこ (neko - gato)', isCorrect: true },
              { id: 'n-inu-opt', text: 'いぬ (inu - perro)' },
              { id: 'n-nani-opt', text: 'なに (nani - qué)' }
            ],
            correctAnswerId: 'n-neko-opt',
            explanation: 'Escuchaste 「ねこ」 (gato en japonés).'
          },
          {
            id: 'ex-0-n4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "nombre":',
            japaneseVoiceText: 'なまえ',
            wordBank: ['え', 'ま', 'な', 'ね', 'み'],
            correctSentence: ['な', 'ま', 'え'],
            explanation: 'な + ま + え = なまえ (nombre de persona).'
          }
        ]
      },

      // 6. HIRAGANA - FILA HA
      {
        id: 'l0-node-6',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Ha (は・ひ・ふ・へ・ほ)',
        japaneseTitle: 'は行のひらがな',
        description: 'Sonidos con H y el sonido soplado 「ふ」 (fu)',
        icon: 'Sparkles',
        color: 'red',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-h1',
            type: 'multiple-choice',
            prompt: '¿Cómo se pronuncia 「ふ」 en japonés?',
            promptSub: 'ふ',
            japaneseVoiceText: 'ふ',
            options: [
              { id: 'h-fu', text: 'fu (soplando suavemente entre los labios)', isCorrect: true },
              { id: 'h-hu', text: 'hu gutural fuerte' },
              { id: 'h-pu', text: 'pu' }
            ],
            correctAnswerId: 'h-fu',
            explanation: '「ふ」 se pronuncia como una "f/h" muy suave sin morder el labio inferior.'
          },
          {
            id: 'ex-0-h2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Ha:',
            pairs: [
              { id: 'hp1', left: 'は', right: 'ha' },
              { id: 'hp2', left: 'ひ', right: 'hi' },
              { id: 'hp3', left: 'ふ', right: 'fu' },
              { id: 'hp4', left: 'ほ', right: 'ho' }
            ],
            explanation: 'Fila Ha: ha, hi, fu, he, ho.'
          },
          {
            id: 'ex-0-h3',
            type: 'listening',
            prompt: 'Escucha con atención:',
            japaneseVoiceText: 'はな',
            options: [
              { id: 'h-hana', text: 'はな (hana - flor / nariz)', isCorrect: true },
              { id: 'h-hune', text: 'ふね (fune - barco)' },
              { id: 'h-heya', text: 'へや (heya - habitación)' }
            ],
            correctAnswerId: 'h-hana',
            explanation: 'Escuchaste 「はな」 (hana).'
          },
          {
            id: 'ex-0-h4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "barco":',
            japaneseVoiceText: 'ふね',
            wordBank: ['ね', 'ふ', 'ほ', 'へ'],
            correctSentence: ['ふ', 'ね'],
            explanation: '「ふ」 + 「ね」 = ふね (barco).'
          }
        ]
      },

      // 7. HIRAGANA - FILA MA
      {
        id: 'l0-node-7',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Ma (ま・み・む・め・も)',
        japaneseTitle: 'ま行のひらがな',
        description: 'Sonidos bilabiales con M',
        icon: 'Coffee',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-m1',
            type: 'multiple-choice',
            prompt: '¿Cómo se lee 「みず」 (agua)?',
            promptSub: 'みず',
            japaneseVoiceText: 'みず',
            options: [
              { id: 'm-mizu', text: 'mizu (agua)', isCorrect: true },
              { id: 'm-machi', text: 'machi (ciudad)' },
              { id: 'm-mori', text: 'mori (bosque)' }
            ],
            correctAnswerId: 'm-mizu',
            explanation: '「み」 + 「ず」 = みず (mizu, agua).'
          },
          {
            id: 'ex-0-m2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Ma:',
            pairs: [
              { id: 'mp1', left: 'ま', right: 'ma' },
              { id: 'mp2', left: 'み', right: 'mi' },
              { id: 'mp3', left: 'む', right: 'mu' },
              { id: 'mp4', left: 'め', right: 'me' }
            ],
            explanation: 'Fila Ma: ma, mi, mu, me, mo.'
          },
          {
            id: 'ex-0-m3',
            type: 'listening',
            prompt: 'Escucha el audio y selecciona el caracter:',
            japaneseVoiceText: 'も',
            options: [
              { id: 'm-mo', text: 'も (mo)', isCorrect: true },
              { id: 'm-ma', text: 'ま (ma)' },
              { id: 'm-me', text: 'め (me)' }
            ],
            correctAnswerId: 'm-mo',
            explanation: 'Escuchaste 「も」 (mo, que también es la partícula "también").'
          },
          {
            id: 'ex-0-m4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "ciudad / pueblo":',
            japaneseVoiceText: 'まち',
            wordBank: ['ち', 'ま', 'み', 'て'],
            correctSentence: ['ま', 'ち'],
            explanation: '「ま」 + 「ち」 = まち (machi, pueblo / ciudad).'
          }
        ]
      },

      // 8. HIRAGANA - FILA YA
      {
        id: 'l0-node-8',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Ya (や・ゆ・よ)',
        japaneseTitle: 'や行のひらがな',
        description: 'Las 3 semivocales con Y (ya, yu, yo)',
        icon: 'Sparkles',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-y1',
            type: 'multiple-choice',
            prompt: '¿Cuántos caracteres tiene la fila Ya en el silabario moderno?',
            promptSub: 'や・ゆ・よ',
            options: [
              { id: 'y-3', text: 'Solo 3 caracteres (ya, yu, yo)', isCorrect: true },
              { id: 'y-5', text: '5 caracteres' },
              { id: 'y-4', text: '4 caracteres' }
            ],
            correctAnswerId: 'y-3',
            explanation: 'Los sonidos "yi" y "ye" se fusionaron con "i" y "e", dejando solo や, ゆ, よ.'
          },
          {
            id: 'ex-0-y2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Ya:',
            pairs: [
              { id: 'yp1', left: 'や', right: 'ya' },
              { id: 'yp2', left: 'ゆ', right: 'yu' },
              { id: 'yp3', left: 'よ', right: 'yo' },
              { id: 'yp4', left: 'やま', right: 'montaña' }
            ],
            explanation: 'Ya (や), Yu (ゆ), Yo (よ).'
          },
          {
            id: 'ex-0-y3',
            type: 'listening',
            prompt: 'Escucha y selecciona la palabra:',
            japaneseVoiceText: 'ゆき',
            options: [
              { id: 'y-yuki', text: 'ゆき (yuki - nieve)', isCorrect: true },
              { id: 'y-yama', text: 'やま (yama - montaña)' },
              { id: 'y-yoru', text: 'よる (yoru - noche)' }
            ],
            correctAnswerId: 'y-yuki',
            explanation: 'Escuchaste 「ゆき」 (nieve en japonés).'
          },
          {
            id: 'ex-0-y4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "montaña":',
            japaneseVoiceText: 'やま',
            wordBank: ['ま', 'や', 'ゆ', 'わ'],
            correctSentence: ['や', 'ま'],
            explanation: '「や」 + 「ま」 = やま (montaña, como el Monte Fuji).'
          }
        ]
      },

      // 9. HIRAGANA - FILA RA
      {
        id: 'l0-node-9',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Ra (ら・り・る・れ・ろ)',
        japaneseTitle: 'ら行のひらがな',
        description: 'La R suave japonesa (entre "r" y "l")',
        icon: 'Flame',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-r1',
            type: 'multiple-choice',
            prompt: '¿Cómo suena la R en japonés?',
            promptSub: 'ら・り・る・れ・ろ',
            japaneseVoiceText: 'ら り る れ ろ',
            options: [
              { id: 'r-soft', text: 'Suave, como la "r" en "caro" (un toque de lengua)', isCorrect: true },
              { id: 'r-hard', text: 'Fuerte como la "rr" de "perro"' },
              { id: 'r-eng', text: 'Como la "r" inglesa' }
            ],
            correctAnswerId: 'r-soft',
            explanation: 'En japonés la R es una vibrante simple alveolar suave.'
          },
          {
            id: 'ex-0-r2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Ra:',
            pairs: [
              { id: 'rp1', left: 'ら', right: 'ra' },
              { id: 'rp2', left: 'り', right: 'ri' },
              { id: 'rp3', left: 'る', right: 'ru' },
              { id: 'rp4', left: 'れ', right: 're' }
            ],
            explanation: 'Fila Ra: ra, ri, ru, re, ro.'
          },
          {
            id: 'ex-0-r3',
            type: 'listening',
            prompt: 'Escucha el audio y selecciona la palabra:',
            japaneseVoiceText: 'くるま',
            options: [
              { id: 'r-kuruma', text: 'くるま (kuruma - auto / coche)', isCorrect: true },
              { id: 'r-kasa', text: 'かさ (kasa - paraguas)' },
              { id: 'r-sakura', text: 'さくら (sakura - cerezo)' }
            ],
            correctAnswerId: 'r-kuruma',
            explanation: 'Escuchaste 「くるま」 (kuruma, auto/vehículo).'
          },
          {
            id: 'ex-0-r4',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "manzana":',
            japaneseVoiceText: 'りんご',
            wordBank: ['ご', 'ん', 'り', 'る', 'れ'],
            correctSentence: ['り', 'ん', 'ご'],
            explanation: 'り + ん + ご = りんご (manzana).'
          }
        ]
      },

      // 10. HIRAGANA - FILA WA, WO, N
      {
        id: 'l0-node-10',
        unitId: 0,
        lessonNumber: 0,
        title: 'Fila Wa, Wo, N (わ・を・ん)',
        japaneseTitle: 'わ行 と 「ん」',
        description: 'Kanas especiales y la única consonante solitaria',
        icon: 'Award',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-w1',
            type: 'multiple-choice',
            prompt: '¿Cuál es el único sonido en japonés que es una consonante sola?',
            promptSub: 'ん',
            japaneseVoiceText: 'ん',
            options: [
              { id: 'w-n', text: '「ん」 (n nasal)', isCorrect: true },
              { id: 'w-wa', text: '「わ」 (wa)' },
              { id: 'w-wo', text: '「を」 (wo)' }
            ],
            correctAnswerId: 'w-n',
            explanation: '「ん」 (n) es el único caracter japonés que no lleva vocal añadida.'
          },
          {
            id: 'ex-0-w2',
            type: 'multiple-choice',
            prompt: '¿Para qué se utiliza casi exclusivamente el caracter 「を」?',
            promptSub: 'を (wo / o)',
            japaneseVoiceText: 'を',
            options: [
              { id: 'w-part', text: 'Como partícula gramatical de objeto directo', isCorrect: true },
              { id: 'w-noun', text: 'Para escribir nombres comunes' },
              { id: 'w-verb', text: 'Como terminación de verbos' }
            ],
            correctAnswerId: 'w-part',
            explanation: 'Genki enseña: 「を」 se pronuncia "o" y se usa únicamente como partícula gramatical.'
          },
          {
            id: 'ex-0-w3',
            type: 'word-order',
            prompt: 'Traduce al japonés la palabra "Japón":',
            japaneseVoiceText: 'にほん',
            wordBank: ['ん', 'ほ', 'に', 'は', 'こ'],
            correctSentence: ['に', 'ほ', 'ん'],
            explanation: 'に + ほ + ん = にほん (Nihon, Japón).'
          },
          {
            id: 'ex-0-w4',
            type: 'listening',
            prompt: 'Escucha el audio:',
            japaneseVoiceText: 'わたし',
            options: [
              { id: 'w-watashi', text: 'わたし (watashi - yo)', isCorrect: true },
              { id: 'w-tomodachi', text: 'ともだち (amigo)' },
              { id: 'w-sensei', text: 'せんせい (profesor)' }
            ],
            correctAnswerId: 'w-watashi',
            explanation: 'Escuchaste 「わたし」 (watashi, la palabra estándar para "yo").'
          }
        ]
      },

      // 11. HIRAGANA - MODIFICADOS DAKUTEN (゛)
      {
        id: 'l0-node-11',
        unitId: 0,
        lessonNumber: 0,
        title: 'Dakuten (が・ざ・だ・ば)',
        japaneseTitle: '濁点（だくてん）',
        description: 'Las dos comitas (゛) que transforman K, S, T, H en G, Z, D, B',
        icon: 'Sparkles',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-dak1',
            type: 'multiple-choice',
            prompt: 'Al poner tenten (゛) a la fila Ka (か), ¿en qué sonido se convierte?',
            promptSub: 'か ➔ が',
            japaneseVoiceText: 'が',
            options: [
              { id: 'd-ga', text: 'Fila Ga (ga, gi, gu, ge, go)', isCorrect: true },
              { id: 'd-ba', text: 'Fila Ba' },
              { id: 'd-da', text: 'Fila Da' }
            ],
            correctAnswerId: 'd-ga',
            explanation: 'Ka + ゛ = Ga, Sa + ゛ = Za/Ji, Ta + ゛ = Da/Ji/Zu, Ha + ゛ = Ba.'
          },
          {
            id: 'ex-0-dak2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres Dakuten con su sonido:',
            pairs: [
              { id: 'dp1', left: 'が', right: 'ga' },
              { id: 'dp2', left: 'じ', right: 'ji' },
              { id: 'dp3', left: 'で', right: 'de' },
              { id: 'dp4', left: 'ば', right: 'ba' }
            ],
            explanation: 'El Dakuten hace vibrar las cuerdas vocales (sonido sonoro).'
          },
          {
            id: 'ex-0-dak3',
            type: 'listening',
            prompt: 'Escucha y selecciona la palabra:',
            japaneseVoiceText: 'げんき',
            options: [
              { id: 'd-genki', text: 'げんき (genki - bien / con energía)', isCorrect: true },
              { id: 'd-ginko', text: 'ぎんこう (banco)' },
              { id: 'd-gakusei', text: 'がくせい (estudiante)' }
            ],
            correctAnswerId: 'd-genki',
            explanation: '¡Escuchaste 「げんき」, la palabra que le da nombre a tu libro de texto Genki!'
          }
        ]
      },

      // 12. HIRAGANA - MODIFICADOS HANDAKUTEN (゜)
      {
        id: 'l0-node-12',
        unitId: 0,
        lessonNumber: 0,
        title: 'Handakuten (ぱ・ぴ・ぷ・ぺ・ぽ)',
        japaneseTitle: '半濁点（はんだくてん）',
        description: 'El circulito (゜) que convierte Ha en Pa',
        icon: 'Flame',
        color: 'red',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-han1',
            type: 'multiple-choice',
            prompt: '¿A qué fila se le puede agregar el circulito Handakuten (゜)?',
            promptSub: 'ぱ・ぴ・ぷ・ぺ・ぽ',
            options: [
              { id: 'han-ha', text: 'Solo a la fila Ha (は ➔ ぱ)', isCorrect: true },
              { id: 'han-all', text: 'A todas las filas' },
              { id: 'han-ka', text: 'A la fila Ka' }
            ],
            correctAnswerId: 'han-ha',
            explanation: 'El Handakuten solo se usa con la fila Ha para producir el sonido "p": pa, pi, pu, pe, po.'
          },
          {
            id: 'ex-0-han2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres de la fila Pa:',
            pairs: [
              { id: 'pp1', left: 'ぱ', right: 'pa' },
              { id: 'pp2', left: 'ぴ', right: 'pi' },
              { id: 'pp3', left: 'ぷ', right: 'pu' },
              { id: 'pp4', left: 'ぽ', right: 'po' }
            ],
            explanation: 'Pa, pi, pu, pe, po.'
          },
          {
            id: 'ex-0-han3',
            type: 'listening',
            prompt: 'Escucha el audio:',
            japaneseVoiceText: 'しんぱい',
            options: [
              { id: 'p-shinpai', text: 'しんぱい (shinpai - preocupación)', isCorrect: true },
              { id: 'p-kanpai', text: 'かんぱい (kanpai - salud/brindis)' }
            ],
            correctAnswerId: 'p-shinpai',
            explanation: 'Escuchaste 「しんぱい」 (shinpai).'
          }
        ]
      },

      // 13. HIRAGANA - COMBINACIONES YOON
      {
        id: 'l0-node-13',
        unitId: 0,
        lessonNumber: 0,
        title: 'Sonidos Contraídos (Yoon)',
        japaneseTitle: '拗音（ようおん）きゃ・しゅ・ちょ',
        description: 'Combina caracteres con un pequeño ゃ, ゅ, ょ',
        icon: 'Sparkles',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-yoon1',
            type: 'multiple-choice',
            prompt: '¿Cómo se lee 「きょう」 (hoy)?',
            promptSub: 'きょう',
            japaneseVoiceText: 'きょう',
            options: [
              { id: 'yo-kyou', text: 'kyou (una sola sílaba combinada)', isCorrect: true },
              { id: 'yo-kiyou', text: 'ki-yo-u (tres sílabas separadas)' }
            ],
            correctAnswerId: 'yo-kyou',
            explanation: 'Cuando や, ゆ, よ se escriben en tamaño pequeño (ゃ, ゅ, ょ), forman una sola sílaba combinada.'
          },
          {
            id: 'ex-0-yoon2',
            type: 'match-pairs',
            prompt: 'Empareja las combinaciones Yoon:',
            pairs: [
              { id: 'yp1', left: 'きゃ', right: 'kya' },
              { id: 'yp2', left: 'しゃ', right: 'sha' },
              { id: 'yp3', left: 'ちゃ', right: 'cha' },
              { id: 'yp4', left: 'りょ', right: 'ryo' }
            ],
            explanation: 'Muy comunes en palabras como お茶 (おちゃ / té) y 旅行 (りょこう / viaje).'
          },
          {
            id: 'ex-0-yoon3',
            type: 'listening',
            prompt: 'Escucha y selecciona la palabra:',
            japaneseVoiceText: 'おちゃ',
            options: [
              { id: 'y-ocha', text: 'おちゃ (ocha - té japonés)', isCorrect: true },
              { id: 'y-oto', text: 'おと (sonido)' },
              { id: 'y-oni', text: 'おに (ogro)' }
            ],
            correctAnswerId: 'y-ocha',
            explanation: 'Escuchaste 「おちゃ」 (té verde japonés).'
          }
        ]
      },

      // 14. KATAKANA - FILAS A Y KA
      {
        id: 'l0-node-14',
        unitId: 0,
        lessonNumber: 0,
        title: 'Katakana: Filas A y Ka',
        japaneseTitle: 'カタカナ：ア行・カ行',
        description: 'Caracteres rectos para palabras extranjeras: ア〜オ y カ〜コ',
        icon: 'BookOpen',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-kt1',
            type: 'multiple-choice',
            prompt: '¿Qué palabra extranjera es 「アメリカ」?',
            promptSub: 'アメリカ',
            japaneseVoiceText: 'アメリカ',
            options: [
              { id: 'kt-usa', text: 'América / Estados Unidos', isCorrect: true },
              { id: 'kt-af', text: 'África' },
              { id: 'kt-eu', text: 'Europa' }
            ],
            correctAnswerId: 'kt-usa',
            explanation: 'アメリカ (Amerika) se escribe en Katakana por ser nombre de país extranjero.'
          },
          {
            id: 'ex-0-kt2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres Katakana de las filas A y Ka:',
            pairs: [
              { id: 'ktp1', left: 'ア', right: 'a' },
              { id: 'ktp2', left: 'イ', right: 'i' },
              { id: 'ktp3', left: 'カ', right: 'ka' },
              { id: 'ktp4', left: 'コ', right: 'ko' }
            ],
            explanation: 'A, I, U, E, O y Ka, Ki, Ku, Ke, Ko en Katakana.'
          },
          {
            id: 'ex-0-kt3',
            type: 'listening',
            prompt: 'Escucha la palabra en Katakana:',
            japaneseVoiceText: 'カメラ',
            options: [
              { id: 'kt-cam', text: 'カメラ (kamera - cámara)', isCorrect: true },
              { id: 'kt-col', text: 'コーラ (koola - cola)' }
            ],
            correctAnswerId: 'kt-cam',
            explanation: 'Escuchaste 「カメラ」 (cámara).'
          }
        ]
      },

      // 15. KATAKANA - FILAS SA Y TA
      {
        id: 'l0-node-15',
        unitId: 0,
        lessonNumber: 0,
        title: 'Katakana: Filas Sa y Ta',
        japaneseTitle: 'カタカナ：サ行・タ行',
        description: 'Aprende サ〜ソ y タ〜ト con palabras modernas',
        icon: 'ShoppingBag',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-kst1',
            type: 'multiple-choice',
            prompt: '¿Qué palabra es 「テスト」?',
            promptSub: 'テスト',
            japaneseVoiceText: 'テスト',
            options: [
              { id: 'kst-test', text: 'Test / Examen', isCorrect: true },
              { id: 'kst-toast', text: 'Tostada' },
              { id: 'kst-text', text: 'Texto' }
            ],
            correctAnswerId: 'kst-test',
            explanation: 'テスト (tesuto) viene del inglés "test".'
          },
          {
            id: 'ex-0-kst2',
            type: 'match-pairs',
            prompt: 'Empareja Katakana con su lectura:',
            pairs: [
              { id: 'stp1', left: 'サ', right: 'sa' },
              { id: 'stp2', left: 'シ', right: 'shi' },
              { id: 'stp3', left: 'タ', right: 'ta' },
              { id: 'stp4', left: 'ト', right: 'to' }
            ],
            explanation: 'Ten cuidado con 「シ」 (shi) y 「ツ」 (tsu); la dirección de los trazos es clave.'
          },
          {
            id: 'ex-0-kst3',
            type: 'word-order',
            prompt: 'Traduce al Katakana la palabra "taxi":',
            japaneseVoiceText: 'タクシー',
            wordBank: ['ー', 'シ', 'ク', 'タ', 'ス', 'チ'],
            correctSentence: ['タ', 'ク', 'シ', 'ー'],
            explanation: 'タ + ク + シ + ー = タクシー (taxi con sonido largo).'
          }
        ]
      },

      // 16. KATAKANA - FILAS NA, HA, MA
      {
        id: 'l0-node-16',
        unitId: 0,
        lessonNumber: 0,
        title: 'Katakana: Filas Na, Ha, Ma',
        japaneseTitle: 'カタカナ：ナ行・ハ行・マ行',
        description: 'Katakana para ナ〜ノ, ハ〜ホ, マ〜モ',
        icon: 'Coffee',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-nhm1',
            type: 'multiple-choice',
            prompt: '¿Qué alimento cotidiano es 「パン」?',
            promptSub: 'パン',
            japaneseVoiceText: 'パン',
            options: [
              { id: 'p-bread', text: 'Pan (del portugués "pão")', isCorrect: true },
              { id: 'p-pen', text: 'Bolígrafo' },
              { id: 'p-pin', text: 'Pin' }
            ],
            correctAnswerId: 'p-bread',
            explanation: 'パン (pan) llegó a Japón con los comerciantes portugueses en el siglo XVI.'
          },
          {
            id: 'ex-0-nhm2',
            type: 'match-pairs',
            prompt: 'Empareja los caracteres Katakana:',
            pairs: [
              { id: 'nhmp1', left: 'ナ', right: 'na' },
              { id: 'nhmp2', left: 'ハ', right: 'ha' },
              { id: 'nhmp3', left: 'マ', right: 'ma' },
              { id: 'nhmp4', left: 'ホ', right: 'ho' }
            ],
            explanation: 'Na, Ha, Ma, Ho en Katakana.'
          },
          {
            id: 'ex-0-nhm3',
            type: 'listening',
            prompt: 'Escucha el audio:',
            japaneseVoiceText: 'ホテル',
            options: [
              { id: 'nhm-hotel', text: 'ホテル (hoteru - hotel)', isCorrect: true },
              { id: 'nhm-terebi', text: 'テレビ (televisión)' }
            ],
            correctAnswerId: 'nhm-hotel',
            explanation: 'Escuchaste 「ホテル」 (hotel).'
          }
        ]
      },

      // 17. KATAKANA - FILAS YA, RA, WA, N Y SONIDO LARGO (ー)
      {
        id: 'l0-node-17',
        unitId: 0,
        lessonNumber: 0,
        title: 'Katakana Final y Sonido Largo (ー)',
        japaneseTitle: 'カタカナの完成 と 長音符（ー）',
        description: 'Domina ヤ〜ヨ, ラ〜ロ, ワ, ン y la barra de vocal larga',
        icon: 'Award',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-0-kfin1',
            type: 'multiple-choice',
            prompt: '¿Para qué sirve la línea horizontal 「ー」 en Katakana?',
            promptSub: 'コーヒー / ケーキ',
            japaneseVoiceText: 'コーヒー',
            options: [
              { id: 'kf-long', text: 'Alarga la vocal precedente (chouon)', isCorrect: true },
              { id: 'kf-stop', text: 'Es un punto y seguido' },
              { id: 'kf-sil', text: 'Indica silencio' }
            ],
            correctAnswerId: 'kf-long',
            explanation: 'La barra horizontal (ー) alarga el sonido de la vocal en Katakana (ej. ko-o-hi-i).'
          },
          {
            id: 'ex-0-kfin2',
            type: 'word-order',
            prompt: 'Traduce al Katakana la palabra "café":',
            japaneseVoiceText: 'コーヒー',
            wordBank: ['ー', 'ヒ', 'ー', 'コ', 'カ', 'ホ'],
            correctSentence: ['コ', 'ー', 'ヒ', 'ー'],
            explanation: 'コ + ー + ヒ + ー = コーヒー (café).'
          },
          {
            id: 'ex-0-kfin3',
            type: 'match-pairs',
            prompt: 'Empareja los Katakanas finales:',
            pairs: [
              { id: 'kfp1', left: 'ヤ', right: 'ya' },
              { id: 'kfp2', left: 'ラ', right: 'ra' },
              { id: 'kfp3', left: 'ワ', right: 'wa' },
              { id: 'kfp4', left: 'ン', right: 'n' }
            ],
            explanation: '¡Felicidades! Con estos caracteres completas el silabario Katakana.'
          },
          {
            id: 'ex-0-kfin4',
            type: 'listening',
            prompt: 'Escucha la palabra final de la Unidad 0:',
            japaneseVoiceText: 'トイレ',
            options: [
              { id: 'kf-toire', text: 'トイレ (toire - baño/servicio)', isCorrect: true },
              { id: 'kf-rajio', text: 'ラジオ (radio)' }
            ],
            correctAnswerId: 'kf-toire',
            explanation: 'Escuchaste 「トイレ」 (toire, baño en japonés).'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 1: GENKI LECCIÓN 1 (Nuevos Amigos - Libro y Cuaderno de Ejercicios)
  // ==========================================
  {
    id: 1,
    genkiBook: 'Genki I',
    title: 'Genki Lección 1: Nuevos Amigos (新しい友達)',
    subtitle: 'Currículo Completo: Textbook + Workbook Exercises',
    description: 'Aprende presentaciones, nacionalidades, carreras, números 0-100, la hora, edades, teléfonos y partículas は, か, の.',
    themeColor: '#1cb0f6',
    nodes: [
      // 1. SALUDOS Y EXPRESIONES DE ENCUENTRO (Textbook Dialogue I & II)
      {
        id: 'l1-node-1',
        unitId: 1,
        lessonNumber: 1,
        title: 'Saludos y Presentaciones',
        japaneseTitle: 'あいさつ と 自己紹介',
        description: 'Frases esenciales de presentación de Genki L1',
        icon: 'MessageCircle',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-1-1',
            type: 'multiple-choice',
            prompt: '¿Qué frase se dice AL INICIO de presentarse por primera vez?',
            promptSub: 'Mucho gusto (encantado)',
            japaneseVoiceText: 'はじめまして',
            options: [
              { id: 'h1', text: 'はじめまして (Hajimemashite)', isCorrect: true },
              { id: 'h2', text: 'さようなら (Sayounara)' },
              { id: 'h3', text: 'じゃあ、また (Jaa, mata)' },
              { id: 'h4', text: 'ただいま (Tadaima)' }
            ],
            correctAnswerId: 'h1',
            explanation: '「はじめまして」 proviene de はじめる (comenzar) y se usa la primera vez que conoces a alguien.'
          },
          {
            id: 'ex-1-1-2',
            type: 'word-order',
            prompt: 'Forma la frase: "Mucho gusto / Cuento con su favor":',
            japaneseVoiceText: 'よろしくおねがいします',
            wordBank: ['おねがいします', 'よろしく', 'こんにちは', 'ありがとう'],
            correctSentence: ['よろしく', 'おねがいします'],
            explanation: '「よろしくお願いします」 es la frase indispensable para cerrar cualquier presentación.'
          },
          {
            id: 'ex-1-1-3',
            type: 'match-pairs',
            prompt: 'Empareja los saludos cotidianos de Genki:',
            pairs: [
              { id: 'p1', left: 'おはようございます', right: 'Buenos días' },
              { id: 'p2', left: 'こんにちは', right: 'Buenas tardes / Hola' },
              { id: 'p3', left: 'こんばんは', right: 'Buenas noches (saludo)' },
              { id: 'p4', left: 'おやすみなさい', right: 'Buenas noches (despedida)' }
            ],
            explanation: 'Genki distingue claramente los saludos diurnos de la despedida nocturna.'
          },
          {
            id: 'ex-1-1-4',
            type: 'listening',
            prompt: 'Escucha el audio y selecciona la traducción adecuada:',
            japaneseVoiceText: 'すみません',
            options: [
              { id: 'sumi-1', text: 'Disculpe / Perdón', isCorrect: true },
              { id: 'sumi-2', text: 'De nada' },
              { id: 'sumi-3', text: 'Hasta luego' }
            ],
            correctAnswerId: 'sumi-1',
            explanation: '「すみません」 sirve tanto para disculparse como para llamar la atención del mesero o profesor.'
          }
        ]
      },

      // 2. NÚMEROS 0 AL 100 (Workbook Practice: Numbers)
      {
        id: 'l1-node-2',
        unitId: 1,
        lessonNumber: 1,
        title: 'Números 0 al 100',
        japaneseTitle: 'すうじ（０〜１００）',
        description: 'Conteo y operaciones matemáticas del libro de ejercicios',
        icon: 'Flame',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-2-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se lee el número 45 en japonés?',
            promptSub: '45',
            japaneseVoiceText: 'よんじゅうご',
            options: [
              { id: 'n45-1', text: 'よんじゅうご (yonjuugo)', isCorrect: true },
              { id: 'n45-2', text: 'しじゅうご (shijuugo)' },
              { id: 'n45-3', text: 'ごじゅうよん (gojuuyon)' }
            ],
            correctAnswerId: 'n45-1',
            explanation: 'En las decenas, 40 se dice siempre よんじゅう (yonjuu).'
          },
          {
            id: 'ex-1-2-2',
            type: 'match-pairs',
            prompt: 'Empareja las decenas:',
            pairs: [
              { id: 'dp1', left: '二十 (20)', right: 'にじゅう' },
              { id: 'dp2', left: '三十 (30)', right: 'さんじゅう' },
              { id: 'dp3', left: '七十 (70)', right: 'ななじゅう' },
              { id: 'dp4', left: '百 (100)', right: 'ひゃく' }
            ],
            explanation: '100 se dice 「ひゃく」 (hyaku), no "ichi-hyaku".'
          },
          {
            id: 'ex-1-2-3',
            type: 'word-order',
            prompt: 'Del Workbook: Resuelve la suma 8 + 4 en japonés:',
            japaneseVoiceText: 'じゅうに',
            wordBank: ['に', 'じゅう', 'さん', 'よん'],
            correctSentence: ['じゅう', 'に'],
            explanation: '8 + 4 = 12. En japonés 12 se dice: じゅう (10) + に (2) = じゅうに.'
          },
          {
            id: 'ex-1-2-4',
            type: 'listening',
            prompt: 'Escucha el número dictado en japonés:',
            japaneseVoiceText: 'きゅうじゅうきゅう',
            options: [
              { id: 'n-99', text: '99', isCorrect: true },
              { id: 'n-89', text: '89' },
              { id: 'n-19', text: '19' }
            ],
            correctAnswerId: 'n-99',
            explanation: 'きゅうじゅう (90) + きゅう (9) = 99.'
          }
        ]
      },

      // 3. LA HORA Y MEDIA HORA (Textbook & Workbook Practice: Time)
      {
        id: 'l1-node-3',
        unitId: 1,
        lessonNumber: 1,
        title: 'La Hora: 〜時 y 〜時半',
        japaneseTitle: 'じかん（何時・何時半）',
        description: 'Aprende a decir la hora y las 3 horas irregulares clave',
        icon: 'Sparkles',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-3-1',
            type: 'multiple-choice',
            prompt: '¡Cuidado con las 3 horas irregulares de Genki! ¿Cómo se dice "las 4 en punto"?',
            promptSub: '4:00',
            japaneseVoiceText: 'よじ',
            options: [
              { id: 't4-yo', text: 'よじ (yoji - irregular)', isCorrect: true },
              { id: 't4-yon', text: 'よんじ (yonji)' },
              { id: 't4-shi', text: 'しじ (shiji)' }
            ],
            correctAnswerId: 't4-yo',
            explanation: 'Regla de oro de Genki: 4:00 es よじ (yoji), 7:00 es しちじ (shichiji) y 9:00 es くじ (kuji).'
          },
          {
            id: 'ex-1-3-2',
            type: 'match-pairs',
            prompt: 'Empareja las horas con su lectura:',
            pairs: [
              { id: 'tp1', left: '1:00', right: 'いちじ (ichiji)' },
              { id: 'tp2', left: '7:00', right: 'しちじ (shichiji)' },
              { id: 'tp3', left: '9:00', right: 'くじ (kuji)' },
              { id: 'tp4', left: '2:30', right: 'にじはん (niji han)' }
            ],
            explanation: '半 (はん / han) significa "y media".'
          },
          {
            id: 'ex-1-3-3',
            type: 'word-order',
            prompt: 'Traduce al japonés la pregunta: "¿Qué hora es ahora?":',
            japaneseVoiceText: 'いまなんじですか',
            wordBank: ['か', 'なんじ', 'いま', 'です', 'は', 'どこ'],
            correctSentence: ['いま', 'なんじ', 'です', 'か'],
            explanation: 'いま (ahora) + なんじ (qué hora) + ですか (es?).'
          },
          {
            id: 'ex-1-3-4',
            type: 'listening',
            prompt: 'Escucha la hora que dice el audio:',
            japaneseVoiceText: 'さんじはんです',
            options: [
              { id: 't-330', text: '3:30 (3 y media)', isCorrect: true },
              { id: 't-230', text: '2:30' },
              { id: 't-300', text: '3:00' }
            ],
            correctAnswerId: 't-330',
            explanation: 'さんじ (3:00) + はん (y media) + です = 3:30.'
          }
        ]
      },

      // 4. ESTRUCTURA X は Y です (Grammar 1: Identity & Nationalities)
      {
        id: 'l1-node-4',
        unitId: 1,
        lessonNumber: 1,
        title: 'Estructura X は Y です',
        japaneseTitle: '文法１：X は Y です',
        description: 'Afirmaciones de identidad y nacionalidades con 〜人',
        icon: 'BookOpen',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-4-1',
            type: 'word-order',
            prompt: 'Traduce al japonés: "Mary es estadounidense":',
            japaneseVoiceText: 'メアリーさんはアメリカじんです',
            wordBank: ['アメリカじん', 'です', 'メアリーさん', 'は', 'にほんじん', 'が'],
            correctSentence: ['メアリーさん', 'は', 'アメリカじん', 'です'],
            explanation: 'Sujeto + は + País-人 (じん) + です。'
          },
          {
            id: 'ex-1-4-2',
            type: 'match-pairs',
            prompt: 'Empareja los países con su gentilicio en japonés:',
            pairs: [
              { id: 'np1', left: '日本 (Japón)', right: 'にほんじん' },
              { id: 'np2', left: 'アメリカ (EE.UU.)', right: 'アメリカじん' },
              { id: 'np3', left: 'イギリス (Reino Unido)', right: 'イギリスじん' },
              { id: 'np4', left: '中国 (China)', right: 'ちゅうごくじん' }
            ],
            explanation: 'En japonés, basta con sufijar 「人」(jin) al nombre de cualquier país.'
          },
          {
            id: 'ex-1-4-3',
            type: 'multiple-choice',
            prompt: 'En la frase 「わたしはメアリーです」, ¿cuál es la función de 「は」?',
            promptSub: 'Partícula tema',
            options: [
              { id: 'wa-top', text: 'Marca el tema sobre el que se va a hablar ("En cuanto a mí...")', isCorrect: true },
              { id: 'wa-verb', text: 'Es el verbo de la oración' },
              { id: 'wa-adj', text: 'Indica el objeto directo' }
            ],
            correctAnswerId: 'wa-top',
            explanation: 'は es la partícula marcadora de tema por excelencia en el idioma japonés.'
          },
          {
            id: 'ex-1-4-4',
            type: 'listening',
            prompt: 'Escucha la oración:',
            japaneseVoiceText: 'たけしさんはにほんじんです',
            options: [
              { id: 'l-tak-jap', text: 'Takeshi es japonés.', isCorrect: true },
              { id: 'l-tak-stu', text: 'Takeshi es estudiante.' }
            ],
            correctAnswerId: 'l-tak-jap',
            explanation: 'Takeshi-san wa nihonjin desu (Takeshi es japonés).'
          }
        ]
      },

      // 5. PREGUNTAS CON か (Grammar 2: Question Sentences)
      {
        id: 'l1-node-5',
        unitId: 1,
        lessonNumber: 1,
        title: 'Preguntas con la Partícula か',
        japaneseTitle: '文法２：質問の「か」',
        description: 'Preguntas directas y respuestas con はい / いいえ',
        icon: 'HelpCircle',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-5-1',
            type: 'multiple-choice',
            prompt: '¿Cómo conviertes una oración afirmativa en pregunta en japonés?',
            promptSub: '学生です ➔ ¿Es estudiante?',
            options: [
              { id: 'q-ka', text: 'Agregando la partícula 「か」 al final', isCorrect: true },
              { id: 'q-inv', text: 'Invirtiendo el sujeto y el verbo como en inglés' },
              { id: 'q-not', text: 'Solo cambiando la entonación sin ninguna palabra' }
            ],
            correctAnswerId: 'q-ka',
            explanation: 'No se altera el orden de las palabras; simplemente se añade 「か」 al final.'
          },
          {
            id: 'ex-1-5-2',
            type: 'word-order',
            prompt: 'Traduce al japonés la pregunta: "¿Takeshi es estudiante?":',
            japaneseVoiceText: 'たけしさんはがくせいですか',
            wordBank: ['か', 'がくせい', 'は', 'です', 'たけしさん', 'せんせい', 'の'],
            correctSentence: ['たけしさん', 'は', 'がくせい', 'です', 'か'],
            explanation: 'Sujeto + は + Atributo + です + か.'
          },
          {
            id: 'ex-1-5-3',
            type: 'match-pairs',
            prompt: 'Empareja la pregunta con su respuesta afirmativa o negativa:',
            pairs: [
              { id: 'qp1', left: '学生ですか。', right: 'はい、学生です。' },
              { id: 'qp2', left: 'アメリカ人ですか。', right: 'いいえ、日本人です。' },
              { id: 'qp3', left: '専攻は何ですか。', right: '日本語です。' },
              { id: 'qp4', left: '先生ですか。', right: 'はい、先生です。' }
            ],
            explanation: 'はい (sí) y いいえ (no) son las respuestas estándar aprendidas en el libro.'
          },
          {
            id: 'ex-1-5-4',
            type: 'listening',
            prompt: 'Escucha la pregunta:',
            japaneseVoiceText: 'りゅうがくせいですか',
            options: [
              { id: 'ans-ryu', text: '¿Eres estudiante de intercambio?', isCorrect: true },
              { id: 'ans-daig', text: '¿Eres universitario?' },
              { id: 'ans-sensei', text: '¿Eres profesor?' }
            ],
            correctAnswerId: 'ans-ryu',
            explanation: '留学生 (りゅうがくせい / ryuugakusei) = estudiante internacional.'
          }
        ]
      },

      // 6. OCUPACIONES Y ROLES SOCIALES (Textbook & Workbook Vocabulary)
      {
        id: 'l1-node-6',
        unitId: 1,
        lessonNumber: 1,
        title: 'Ocupaciones y Roles Sociales',
        japaneseTitle: '職業（しょくぎょう）',
        description: 'Vocabulario de oficios y roles de los personajes de Genki',
        icon: 'Users',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-6-1',
            type: 'match-pairs',
            prompt: 'Empareja las ocupaciones de Genki Lección 1:',
            pairs: [
              { id: 'op1', left: '先生 (せんせい)', right: 'Profesor / Maestro' },
              { id: 'op2', left: '学生 (がくせい)', right: 'Estudiante' },
              { id: 'op3', left: '会社員 (かいしゃいん)', right: 'Empleado de empresa' },
              { id: 'op4', left: '主婦 (しゅふ)', right: 'Ama de casa' }
            ],
            explanation: 'Estas son las 4 ocupaciones principales presentadas en el vocabulario de Genki L1.'
          },
          {
            id: 'ex-1-6-2',
            type: 'multiple-choice',
            prompt: '¿Cómo se le dice respetuosamente al profesor Yamashita?',
            promptSub: 'Mr. Yamashita / Profesor Yamashita',
            options: [
              { id: 'yam-1', text: '山下先生 (Yamashita-sensei)', isCorrect: true },
              { id: 'yam-2', text: '山下さん (Yamashita-san)' },
              { id: 'yam-3', text: '山下くん (Yamashita-kun)' }
            ],
            correctAnswerId: 'yam-1',
            explanation: 'En las escuelas japonesas y en Genki, a los maestros se les llama con el título 「先生」.'
          },
          {
            id: 'ex-1-6-3',
            type: 'word-order',
            prompt: 'Traduce al japonés: "Mi padre es empleado de oficina":',
            japaneseVoiceText: 'ちちはかいしゃいんです',
            wordBank: ['かいしゃいん', 'は', 'ちち', 'です', 'はは', 'せんせい'],
            correctSentence: ['ちち', 'は', 'かいしゃいん', 'です'],
            explanation: 'ちち (mi padre) + は + 会社員 (かいしゃいん) + です.'
          }
        ]
      },

      // 7. ESPECIALIDADES Y AÑOS UNIVERSITARIOS (Textbook & Workbook Practice: Majors)
      {
        id: 'l1-node-7',
        unitId: 1,
        lessonNumber: 1,
        title: 'Carreras Universitarias y Cursos',
        japaneseTitle: '専攻（せんこう）と 学年',
        description: 'Expresar qué estudias y tu año de estudio (1.º a 4.º año)',
        icon: 'BookOpen',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-7-1',
            type: 'match-pairs',
            prompt: 'Empareja las especialidades (専攻 / senkou):',
            pairs: [
              { id: 'mp1', left: 'けいざい (keizai)', right: 'Economía' },
              { id: 'mp2', left: 'れきし (rekishi)', right: 'Historia' },
              { id: 'mp3', left: 'ぶんがく (bungaku)', right: 'Literatura' },
              { id: 'mp4', left: 'ビジネス (bijinesu)', right: 'Negocios' }
            ],
            explanation: 'Genki L1 enseña las carreras universitarias más comunes en el campus.'
          },
          {
            id: 'ex-1-7-2',
            type: 'word-order',
            prompt: 'Traduce al japonés: "Mi especialidad es el idioma japonés":',
            japaneseVoiceText: 'せんこうはにほんごです',
            wordBank: ['にほんご', 'は', 'せんこう', 'です', 'えいご', 'の'],
            correctSentence: ['せんこう', 'は', 'にほんご', 'です'],
            explanation: '専攻 (せんこう / senkou) = especialidad + は + 日本語 + です.'
          },
          {
            id: 'ex-1-7-3',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice "Estudiante de segundo año" (sofomoro en la universidad)?',
            promptSub: '2.º año',
            japaneseVoiceText: 'にねんせい',
            options: [
              { id: 'yr-2', text: '二年生 (にねんせい / ninensei)', isCorrect: true },
              { id: 'yr-1', text: '一年生 (いちねんせい)' },
              { id: 'yr-3', text: '三年生 (さんねんせい)' }
            ],
            correctAnswerId: 'yr-2',
            explanation: 'Número + 年生 (ねんせい / nensei) indica el grado escolar.'
          },
          {
            id: 'ex-1-7-4',
            type: 'listening',
            prompt: 'Escucha la carrera que menciona el audio:',
            japaneseVoiceText: 'コンピューター',
            options: [
              { id: 'l-comp', text: 'Computación / Informática', isCorrect: true },
              { id: 'l-econ', text: 'Economía' }
            ],
            correctAnswerId: 'l-comp',
            explanation: 'コンピューター (konpyuutaa) se escribe en Katakana.'
          }
        ]
      },

      // 8. EDAD: 〜才 / 〜歳 (Textbook & Workbook Practice: Age)
      {
        id: 'l1-node-8',
        unitId: 1,
        lessonNumber: 1,
        title: 'Edad: 〜才 (Años de edad)',
        japaneseTitle: '年齢（〜さい・はたち）',
        description: 'Preguntar la edad y las excepciones irregulares: 1, 8 y 20 años',
        icon: 'Flame',
        color: 'red',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-8-1',
            type: 'multiple-choice',
            prompt: '¡Excepción cultural súper importante! ¿Cómo se dice "20 años de edad" (mayoría de edad tradicional)?',
            promptSub: '20 años',
            japaneseVoiceText: 'はたち',
            options: [
              { id: 'age-hatachi', text: 'はたち (hatachi - lectura especial tradicional)', isCorrect: true },
              { id: 'age-nijusai', text: 'にじゅっさい (nijussai)' },
              { id: 'age-nisai', text: 'にさい (nisai)' }
            ],
            correctAnswerId: 'age-hatachi',
            explanation: 'Cumplir 20 años en Japón se celebra en el Seijin no Hi y se dice tradicionalmente 「はたち」.'
          },
          {
            id: 'ex-1-8-2',
            type: 'match-pairs',
            prompt: 'Empareja las edades con sus lecturas irregulares:',
            pairs: [
              { id: 'ap1', left: '1 año', right: 'いっさい (issai)' },
              { id: 'ap2', left: '8 años', right: 'はっさい (hassai)' },
              { id: 'ap3', left: '10 años', right: 'じゅっさい (jussai)' },
              { id: 'ap4', left: '19 años', right: 'じゅうきゅうさい' }
            ],
            explanation: '1, 8 y 10 tienen asimilación consonántica con tsu pequeño (っ).'
          },
          {
            id: 'ex-1-8-3',
            type: 'word-order',
            prompt: 'Traduce al japonés la pregunta: "¿Cuántos años tienes?":',
            japaneseVoiceText: 'なんさいですか',
            wordBank: ['か', 'なんさい', 'です', 'なんじ', 'は'],
            correctSentence: ['なんさい', 'です', 'か'],
            explanation: '何歳 (なんさい / nansai) + です + か.'
          }
        ]
      },

      // 9. PARTÍCULA MODIFICADORA の (Grammar 3: Noun1 の Noun2)
      {
        id: 'l1-node-9',
        unitId: 1,
        lessonNumber: 1,
        title: 'La Partícula の (Conexión)',
        japaneseTitle: '文法３：名詞１ の 名詞２',
        description: 'Posesión, pertenencia y afiliación universitaria',
        icon: 'Sparkles',
        color: 'purple',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-9-1',
            type: 'word-order',
            prompt: 'Traduce al japonés la frase: "Estudiante de la Universidad Sakura":',
            japaneseVoiceText: 'さくらだいがくのがくせい',
            wordBank: ['がくせい', 'の', 'さくらだいがく', 'は', 'せんせい'],
            correctSentence: ['さくらだいがく', 'の', 'がくせい'],
            explanation: 'En japonés la institución/organización va primero, seguida de の y el rol de la persona.'
          },
          {
            id: 'ex-1-9-2',
            type: 'multiple-choice',
            prompt: '¿Cómo se dice "Profesor de idioma japonés"?',
            promptSub: 'Profesor de japonés',
            japaneseVoiceText: 'にほんごのせんせい',
            options: [
              { id: 'no-nihon', text: '日本語の先生 (nihongo no sensei)', isCorrect: true },
              { id: 'no-inv', text: '先生の日本語 (sensei no nihongo)' },
              { id: 'no-wa', text: '日本語は先生 (nihongo wa sensei)' }
            ],
            correctAnswerId: 'no-nihon',
            explanation: 'El sustantivo 1 (日本語) califica y describe al sustantivo 2 (先生).'
          },
          {
            id: 'ex-1-9-3',
            type: 'word-order',
            prompt: 'Del Workbook: Traduce al japonés "El amigo de Takeshi":',
            japaneseVoiceText: 'たけしさんのともだち',
            wordBank: ['ともだち', 'の', 'たけしさん', 'は', 'わたし'],
            correctSentence: ['たけしさん', 'の', 'ともだち'],
            explanation: 'Poseedor (Takeshi-san) + の + posesión o vínculo (ともだち).'
          },
          {
            id: 'ex-1-9-4',
            type: 'listening',
            prompt: 'Escucha la frase con partícula の:',
            japaneseVoiceText: 'わたしのでんわばんごう',
            options: [
              { id: 'no-ph', text: 'Mi número de teléfono', isCorrect: true },
              { id: 'no-name', text: 'Mi nombre' },
              { id: 'no-univ', text: 'Mi universidad' }
            ],
            correctAnswerId: 'no-ph',
            explanation: 'わたしの (mi) + でんわばんごう (número de teléfono).'
          }
        ]
      },

      // 10. TELÉFONOS Y CONTACTO (Textbook & Workbook Practice: Phone numbers)
      {
        id: 'l1-node-10',
        unitId: 1,
        lessonNumber: 1,
        title: 'Teléfonos y Preguntar Contacto',
        japaneseTitle: '電話番号（でんわばんごう）',
        description: 'Cómo leer números de teléfono con の como guión',
        icon: 'PhoneCall',
        color: 'blue',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-10-1',
            type: 'multiple-choice',
            prompt: '¿Cómo se lee el guion en un número telefónico en japonés (ej. 283-9541)?',
            promptSub: '283 - 9541',
            options: [
              { id: 'ph-no', text: 'Se pronuncia con la partícula 「の」(no)', isCorrect: true },
              { id: 'ph-hai', text: 'Se dice "hyphen"' },
              { id: 'ph-sil', text: 'Se deja una pausa larga en silencio' }
            ],
            correctAnswerId: 'ph-no',
            explanation: 'En números telefónicos, los guiones separadores se dicen en voz alta como 「の」.'
          },
          {
            id: 'ex-1-10-2',
            type: 'word-order',
            prompt: 'Traduce al japonés la pregunta: "¿Cuál es tu número de teléfono?":',
            japaneseVoiceText: 'でんわばんごうはなんばんですか',
            wordBank: ['か', 'なんばん', 'でんわばんごう', 'です', 'は', 'なんさい', 'ここ'],
            correctSentence: ['でんわばんごう', 'は', 'なんばん', 'です', 'か'],
            explanation: 'でんわばんごう + は + なんばん + です + か.'
          },
          {
            id: 'ex-1-10-3',
            type: 'listening',
            prompt: 'Escucha el número telefónico que se dicta:',
            japaneseVoiceText: 'ゼロきゅうゼロのいちにさん',
            options: [
              { id: 'p-090', text: '090 - 123', isCorrect: true },
              { id: 'p-080', text: '080 - 123' },
              { id: 'p-090-4', text: '090 - 456' }
            ],
            correctAnswerId: 'p-090',
            explanation: 'ゼロ (0) + きゅう (9) + ゼロ (0) + の (-) + いち (1) + に (2) + さん (3).'
          }
        ]
      },

      // 11. WORKBOOK: COMPRENSIÓN AUDITIVA (Workbook Listening Practice)
      {
        id: 'l1-node-11',
        unitId: 1,
        lessonNumber: 1,
        title: 'Workbook: Práctica Auditiva',
        japaneseTitle: 'ワークブック：リスニング問題',
        description: 'Ejercicios de escucha idénticos a los del cuaderno oficial',
        icon: 'Headphones',
        color: 'green',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-11-1',
            type: 'listening',
            prompt: 'Ejercicio de escucha del Workbook: ¿Quién está hablando?',
            japaneseVoiceText: 'はじめまして。メアリー・ハートです。アリゾナだいがくのがくせいです。にねんせいです。',
            options: [
              { id: 'wb-m1', text: 'Mary Hart, estudiante de 2.º año de la Univ. de Arizona', isCorrect: true },
              { id: 'wb-m2', text: 'Takeshi, estudiante de 3.º año de Sakura' },
              { id: 'wb-m3', text: 'Profesor Yamashita' }
            ],
            correctAnswerId: 'wb-m1',
            explanation: 'Mary se presenta: estudiante de Arizona de segundo año (にねんせい).'
          },
          {
            id: 'ex-1-11-2',
            type: 'listening',
            prompt: 'Escucha la conversación entre Takeshi y Mary:',
            japaneseVoiceText: 'メアリーさん、せんこうはなんですか。ー にほんごです。',
            options: [
              { id: 'wb-ans-nih', text: 'Takeshi pregunta la carrera de Mary y ella responde "japonés".', isCorrect: true },
              { id: 'wb-ans-eng', text: 'Pregunta la hora de la clase.' },
              { id: 'wb-ans-ph', text: 'Pregunta su número de teléfono.' }
            ],
            correctAnswerId: 'wb-ans-nih',
            explanation: 'せんこうはなんですか (¿Cuál es tu especialidad?) -> 日本語です (Japonés).'
          },
          {
            id: 'ex-1-11-3',
            type: 'listening',
            prompt: 'Escucha la edad que dice Takeshi:',
            japaneseVoiceText: 'にじゅういっさいです',
            options: [
              { id: 'wb-21', text: '21 años (にじゅういっさい)', isCorrect: true },
              { id: 'wb-20', text: '20 años (はたち)' },
              { id: 'wb-22', text: '22 años' }
            ],
            correctAnswerId: 'wb-21',
            explanation: '20 (にじゅう) + 1 año con asimilación (いっさい) = 21 años.'
          }
        ]
      },

      // 12. WORKBOOK: EVALUACIÓN INTEGRADORA (Review & Self-Introduction Dialogue)
      {
        id: 'l1-node-12',
        unitId: 1,
        lessonNumber: 1,
        title: 'Workbook: Integración y Diálogo',
        japaneseTitle: 'ワークブック：総合問題 と 自己紹介',
        description: 'Prueba final de la Lección 1 combinando todo lo aprendido',
        icon: 'Award',
        color: 'orange',
        totalSteps: 3,
        unlocked: false,
        completedSteps: 0,
        stars: 0,
        exercises: [
          {
            id: 'ex-1-12-1',
            type: 'word-order',
            prompt: 'Arma la auto-presentación: "Soy Takeshi. Estudiante de la Universidad Sakura":',
            japaneseVoiceText: 'たけしですさくらだいがくのがくせいです',
            wordBank: ['がくせい', 'たけし', 'の', 'さくらだいがく', 'です', 'です', 'メアリー', 'は'],
            correctSentence: ['たけし', 'です', 'さくらだいがく', 'の', 'がくせい', 'です'],
            explanation: 'Takeshi desu. Sakura daigaku no gakusei desu.'
          },
          {
            id: 'ex-1-12-2',
            type: 'multiple-choice',
            prompt: 'Encuentra el error del Workbook: ¿Cuál de estas 3 oraciones tiene un error de partícula?',
            options: [
              { id: 'err-1', text: 'メアリーさん は アメリカ人 の です。(Uso incorrecto de の al final)', isCorrect: true },
              { id: 'err-2', text: 'メアリーさんはアメリカ人です。(Correcta)' },
              { id: 'err-3', text: 'メアリーさんは学生ですか。(Correcta)' }
            ],
            correctAnswerId: 'err-1',
            explanation: 'No se pone 「の」 antes de です sin un sustantivo posterior.'
          },
          {
            id: 'ex-1-12-3',
            type: 'match-pairs',
            prompt: 'Empareja las preguntas clave de la Lección 1 con su significado:',
            pairs: [
              { id: 'rev1', left: 'おなまえは？', right: '¿Cuál es su nombre?' },
              { id: 'rev2', left: 'ごせんこうは？', right: '¿Cuál es su especialidad?' },
              { id: 'rev3', left: 'おいくつですか？', right: '¿Qué edad tiene?' },
              { id: 'rev4', left: 'いまなんじですか？', right: '¿Qué hora es ahora?' }
            ],
            explanation: '¡Has dominado todas las preguntas comunicativas de la Lección 1 de Genki!'
          },
          {
            id: 'ex-1-12-4',
            type: 'listening',
            prompt: 'Escucha el mensaje final de despedida de la Lección 1:',
            japaneseVoiceText: 'どうぞよろしくおねがいします',
            options: [
              { id: 'fin-yoro', text: 'Encantado de conocerle, cuento con su favor.', isCorrect: true },
              { id: 'fin-ohay', text: 'Buenos días por la mañana.' }
            ],
            correctAnswerId: 'fin-yoro',
            explanation: '¡Felicitaciones! Has completado el currículo íntegro de la Lección 1 de Genki.'
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
            "id": "l2-node-1",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Vocabulario: Cosas Cotidianas",
            "japaneseTitle": "たんご：日用品（にちようひん）",
            "description": "Aprende los objetos cotidianos clave de Genki: paraguas, reloj, libro, etc.",
            "icon": "ShoppingBag",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-1-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se dice \"reloj de pulsera\" en japonés?",
                        "options": [
                              {
                                    "id": "t1",
                                    "text": "とけい (tokei)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "t2",
                                    "text": "さいふ (saifu)"
                              },
                              {
                                    "id": "t3",
                                    "text": "かばん (kaban)"
                              },
                              {
                                    "id": "t4",
                                    "text": "ぼうし (boushi)"
                              }
                        ],
                        "correctAnswerId": "t1",
                        "explanation": "「時計」(とけい / tokei) significa reloj (tanto de pared como de pulsera)."
                  },
                  {
                        "id": "ex-2-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los objetos de la Lección 2 de Genki:",
                        "pairs": [
                              {
                                    "id": "o1",
                                    "left": "かさ",
                                    "right": "Paraguas"
                              },
                              {
                                    "id": "o2",
                                    "left": "さいふ",
                                    "right": "Cartera / Billetera"
                              },
                              {
                                    "id": "o3",
                                    "left": "ぼうし",
                                    "right": "Sombrero / Gorra"
                              },
                              {
                                    "id": "o4",
                                    "left": "じてんしゃ",
                                    "right": "Bicicleta"
                              }
                        ],
                        "explanation": "Vocabulario esencial que Mary y sus amigos usan al ir de compras en Genki."
                  },
                  {
                        "id": "ex-2-1-3",
                        "type": "listening",
                        "prompt": "Escucha la palabra que se pronuncia:",
                        "japaneseVoiceText": "しんぶん",
                        "options": [
                              {
                                    "id": "l-shin",
                                    "text": "Periódico (しんぶん)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-hon",
                                    "text": "Libro (ほん)"
                              },
                              {
                                    "id": "l-zash",
                                    "text": "Revista (ざっし)"
                              }
                        ],
                        "correctAnswerId": "l-shin",
                        "explanation": "「新聞」(しんぶん / shinbun) = periódico."
                  }
            ]
      },
      {
            "id": "l2-node-2",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Demostrativos: これ・それ・あれ",
            "japaneseTitle": "これ・それ・あれ・どれ",
            "description": "Señalar esto, eso y aquello según la distancia física",
            "icon": "Package",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-2-1",
                        "type": "multiple-choice",
                        "prompt": "Tienes un objeto en tus manos y preguntas qué es. ¿Cuál demostrativo usas?",
                        "options": [
                              {
                                    "id": "k1",
                                    "text": "これ (kore - cerca de quien habla)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "k2",
                                    "text": "それ (sore - cerca del oyente)"
                              },
                              {
                                    "id": "k3",
                                    "text": "あれ (are - lejos de ambos)"
                              }
                        ],
                        "correctAnswerId": "k1",
                        "explanation": "「これ」 se usa para lo que está en posesión o alcance del hablante."
                  },
                  {
                        "id": "ex-2-2-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la pregunta: \"¿Qué es eso (cerca de ti)?\":",
                        "japaneseVoiceText": "それはなんですか",
                        "wordBank": [
                              "なん",
                              "それ",
                              "か",
                              "は",
                              "です",
                              "これ",
                              "どれ"
                        ],
                        "correctSentence": [
                              "それ",
                              "は",
                              "なん",
                              "です",
                              "か"
                        ],
                        "explanation": "それ (eso) + は + 何 (なん / qué) + です + か."
                  },
                  {
                        "id": "ex-2-2-3",
                        "type": "multiple-choice",
                        "prompt": "Ves un edificio allá a lo lejos en la distancia. ¿Cuál usas?",
                        "options": [
                              {
                                    "id": "a1",
                                    "text": "あれ (are - lejos de ambos)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "a2",
                                    "text": "これ (kore)"
                              },
                              {
                                    "id": "a3",
                                    "text": "それ (sore)"
                              }
                        ],
                        "correctAnswerId": "a1",
                        "explanation": "「あれ」 se refiere a objetos o lugares alejados tanto del que habla como del que escucha."
                  }
            ]
      },
      {
            "id": "l2-node-3",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Demostrativos: この・その・あの",
            "japaneseTitle": "この・その・あの + 名詞",
            "description": "Este libro, ese reloj y aquel paraguas (+ sustantivo obligatorio)",
            "icon": "BookOpen",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-3-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cuál es la diferencia entre 「これ」 y 「この」?",
                        "options": [
                              {
                                    "id": "diff1",
                                    "text": "「この」 SIEMPRE debe ir seguido de un sustantivo (ej. この本)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "diff2",
                                    "text": "「これ」 solo se usa con personas"
                              },
                              {
                                    "id": "diff3",
                                    "text": "Significan exactamente lo mismo y son intercambiables"
                              }
                        ],
                        "correctAnswerId": "diff1",
                        "explanation": "Regla de oro de Genki: この, その, あの y どの nunca pueden estar solos; modifican a un sustantivo."
                  },
                  {
                        "id": "ex-2-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la pregunta: \"¿Cuánto cuesta este libro?\":",
                        "japaneseVoiceText": "このほんはいくらですか",
                        "wordBank": [
                              "いくら",
                              "このほん",
                              "か",
                              "は",
                              "です",
                              "そのほん",
                              "どれ"
                        ],
                        "correctSentence": [
                              "このほん",
                              "は",
                              "いくら",
                              "です",
                              "か"
                        ],
                        "explanation": "「この本」 (este libro) + は + いくら (cuánto) + です + か."
                  },
                  {
                        "id": "ex-2-3-3",
                        "type": "match-pairs",
                        "prompt": "Empareja las frases demostrativas con su traducción:",
                        "pairs": [
                              {
                                    "id": "p-kono",
                                    "left": "このかさ",
                                    "right": "Este paraguas"
                              },
                              {
                                    "id": "p-sono",
                                    "left": "そのとけい",
                                    "right": "Ese reloj"
                              },
                              {
                                    "id": "p-ano",
                                    "left": "あのかばん",
                                    "right": "Aquel bolso"
                              },
                              {
                                    "id": "p-dono",
                                    "left": "どのおる",
                                    "right": "¿Cuál toalla?"
                              }
                        ],
                        "explanation": "Ko-So-A-Do seguido del objeto específico."
                  }
            ]
      },
      {
            "id": "l2-node-4",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Ubicaciones: ここ・そこ・あそこ",
            "japaneseTitle": "場所の指示詞（ここ・そこ・あそこ・どこ）",
            "description": "Preguntar y dar ubicaciones en el campus y en la ciudad",
            "icon": "MapPin",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-4-1",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la frase más útil del viajero: \"¿Dónde está el baño?\":",
                        "japaneseVoiceText": "トイレはどこですか",
                        "wordBank": [
                              "どこ",
                              "トイレ",
                              "です",
                              "は",
                              "か",
                              "ここ",
                              "いくら"
                        ],
                        "correctSentence": [
                              "トイレ",
                              "は",
                              "どこ",
                              "です",
                              "か"
                        ],
                        "explanation": "トイレ (baño / WC) + は + どこ (dónde) + です + か."
                  },
                  {
                        "id": "ex-2-4-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los lugares de Genki Lección 2:",
                        "pairs": [
                              {
                                    "id": "pl1",
                                    "left": "としょかん",
                                    "right": "Biblioteca"
                              },
                              {
                                    "id": "pl2",
                                    "left": "ぎんこう",
                                    "right": "Banco (financiero)"
                              },
                              {
                                    "id": "pl3",
                                    "left": "ゆうびんきょく",
                                    "right": "Oficina de correos"
                              },
                              {
                                    "id": "pl4",
                                    "left": "だいがく",
                                    "right": "Universidad"
                              }
                        ],
                        "explanation": "Lugares clave que se aprenden para pedir direcciones."
                  },
                  {
                        "id": "ex-2-4-3",
                        "type": "listening",
                        "prompt": "Escucha la indicación que da el audio:",
                        "japaneseVoiceText": "ゆうびんきょくはあそこです",
                        "options": [
                              {
                                    "id": "loc-aso",
                                    "text": "La oficina de correos está allá.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "loc-koko",
                                    "text": "La biblioteca está aquí."
                              },
                              {
                                    "id": "loc-soko",
                                    "text": "El banco está ahí cerca."
                              }
                        ],
                        "correctAnswerId": "loc-aso",
                        "explanation": "あそこ (asoko) indica una ubicación alejada de ambos."
                  }
            ]
      },
      {
            "id": "l2-node-5",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Números Grandes: 100 a 10,000",
            "japaneseTitle": "百（ひゃく）・千（せん）・万（まん）",
            "description": "Los cientos, miles y las 6 lecturas irregulares de dinero",
            "icon": "Sparkles",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-5-1",
                        "type": "multiple-choice",
                        "prompt": "¡Cuidado con las irregularidades! ¿Cómo se dice 300 en japonés?",
                        "options": [
                              {
                                    "id": "h3-san",
                                    "text": "さんびゃく (sanbyaku - con dakuten)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "h3-norm",
                                    "text": "さんひゃく (sanhyaku)"
                              },
                              {
                                    "id": "h3-pya",
                                    "text": "さんぴゃく (sanpyaku)"
                              }
                        ],
                        "correctAnswerId": "h3-san",
                        "explanation": "Las 3 irregularidades en cientos son: 300 = さんびゃく, 600 = ろっぴゃく, 800 = はっぴゃく."
                  },
                  {
                        "id": "ex-2-5-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los números con su lectura especial:",
                        "pairs": [
                              {
                                    "id": "bp1",
                                    "left": "600",
                                    "right": "ろっぴゃく (roppyaku)"
                              },
                              {
                                    "id": "bp2",
                                    "left": "800",
                                    "right": "はっぴゃく (happyaku)"
                              },
                              {
                                    "id": "bp3",
                                    "left": "3,000",
                                    "right": "さんぜん (sanzen)"
                              },
                              {
                                    "id": "bp4",
                                    "left": "8,000",
                                    "right": "はっせん (hassen)"
                              }
                        ],
                        "explanation": "En los miles: 3,000 es sanzen (con z) y 8,000 es hassen (con s geminada)."
                  },
                  {
                        "id": "ex-2-5-3",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se dice 10,000 en japonés?",
                        "options": [
                              {
                                    "id": "man-1",
                                    "text": "いちまん (ichiman)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "man-sen",
                                    "text": "じゅうせん (juusen)"
                              },
                              {
                                    "id": "man-hyaku",
                                    "text": "ひゃくひゃく"
                              }
                        ],
                        "correctAnswerId": "man-1",
                        "explanation": "El sistema numérico japonés agrupa de 4 en 4 ceros: 10,000 es la unidad base 「万」(まん / man)."
                  }
            ]
      },
      {
            "id": "l2-node-6",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Precios: 〜はいくらですか",
            "japaneseTitle": "値段（ねだん）と 買い物（かいもの）",
            "description": "Preguntar cuánto cuesta y pagar en yenes (円 / えん)",
            "icon": "Tag",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-6-1",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la pregunta: \"¿Cuánto cuesta este reloj?\":",
                        "japaneseVoiceText": "このとけいはいくらですか",
                        "wordBank": [
                              "このとけい",
                              "いくら",
                              "は",
                              "です",
                              "か",
                              "そのとけい",
                              "だれ"
                        ],
                        "correctSentence": [
                              "このとけい",
                              "は",
                              "いくら",
                              "です",
                              "か"
                        ],
                        "explanation": "この時計 + は + いくら (cuánto) + ですか."
                  },
                  {
                        "id": "ex-2-6-2",
                        "type": "listening",
                        "prompt": "Escucha el precio que dice el vendedor:",
                        "japaneseVoiceText": "にせんごひゃくえんです",
                        "options": [
                              {
                                    "id": "pr-2500",
                                    "text": "¥2,500 yenes",
                                    "isCorrect": true
                              },
                              {
                                    "id": "pr-2050",
                                    "text": "¥2,050 yenes"
                              },
                              {
                                    "id": "pr-1500",
                                    "text": "¥1,500 yenes"
                              }
                        ],
                        "correctAnswerId": "pr-2500",
                        "explanation": "にせん (2,000) + ごひゃく (500) + えん (yenes) = 2,500 yenes."
                  },
                  {
                        "id": "ex-2-6-3",
                        "type": "multiple-choice",
                        "prompt": "En la tienda, ¿qué frase dices cuando decides comprar algo y entregas el dinero?",
                        "options": [
                              {
                                    "id": "buy-kore",
                                    "text": "これをください (Kore o kudasai - Deme esto por favor)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "buy-say",
                                    "text": "さようなら"
                              },
                              {
                                    "id": "buy-oka",
                                    "text": "おかえりなさい"
                              }
                        ],
                        "correctAnswerId": "buy-kore",
                        "explanation": "「これをください」(Deme esto, por favor) es la frase estándar de compras en Genki."
                  }
            ]
      },
      {
            "id": "l2-node-7",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Posesión: ¿De quién es? (だれの)",
            "japaneseTitle": "だれの + 名詞（だれのかばん）",
            "description": "Preguntar de quién es un objeto extraviado o una pertenencia",
            "icon": "HelpCircle",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-7-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo preguntas \"¿De quién es esta billetera?\" en japonés?",
                        "options": [
                              {
                                    "id": "dare-1",
                                    "text": "これはだれのさいふですか。",
                                    "isCorrect": true
                              },
                              {
                                    "id": "dare-2",
                                    "text": "これはなんのさいふですか。"
                              },
                              {
                                    "id": "dare-3",
                                    "text": "だれはさいふですか。"
                              }
                        ],
                        "correctAnswerId": "dare-1",
                        "explanation": "「だれの」(dare no) = de quién."
                  },
                  {
                        "id": "ex-2-7-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la respuesta: \"Es el bolso de Mary\":",
                        "japaneseVoiceText": "メアリーさんのかばんです",
                        "wordBank": [
                              "かばん",
                              "メアリーさん",
                              "の",
                              "です",
                              "は",
                              "ほん"
                        ],
                        "correctSentence": [
                              "メアリーさん",
                              "の",
                              "かばん",
                              "です"
                        ],
                        "explanation": "Mary-san no kaban desu (Es el bolso de Mary)."
                  },
                  {
                        "id": "ex-2-7-3",
                        "type": "listening",
                        "prompt": "Escucha a quién pertenece el objeto:",
                        "japaneseVoiceText": "これはやましたせんせいのほんです",
                        "options": [
                              {
                                    "id": "l-yama-bk",
                                    "text": "Este es el libro del profesor Yamashita.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-yama-wat",
                                    "text": "Este es el reloj de Takeshi."
                              },
                              {
                                    "id": "l-yama-stu",
                                    "text": "Este es el libro del estudiante."
                              }
                        ],
                        "correctAnswerId": "l-yama-bk",
                        "explanation": "Yamashita-sensei no hon desu."
                  }
            ]
      },
      {
            "id": "l2-node-8",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "La Partícula も (También)",
            "japaneseTitle": "助詞「も」（〜も〜）",
            "description": "Cómo expresar \"yo también\" o \"este también\" reemplazando la partícula は",
            "icon": "Sparkles",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-8-1",
                        "type": "multiple-choice",
                        "prompt": "Takeshi dice: 「わたしは学生です」. Si tú también eres estudiante, ¿cómo respondes?",
                        "options": [
                              {
                                    "id": "mo-cor",
                                    "text": "わたしも学生です。(Watashi mo gakusei desu.)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "mo-wa",
                                    "text": "わたしはも学生です。"
                              },
                              {
                                    "id": "mo-no",
                                    "text": "わたしの学生です。"
                              }
                        ],
                        "correctAnswerId": "mo-cor",
                        "explanation": "La partícula 「も」 sustituye COMPLETAMENTE a 「は」. Nunca se dicen juntas."
                  },
                  {
                        "id": "ex-2-8-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Este paraguas también cuesta 1,000 yenes\":",
                        "japaneseVoiceText": "このかさもせんえんです",
                        "wordBank": [
                              "このかさ",
                              "せんえん",
                              "も",
                              "です",
                              "は",
                              "いくら"
                        ],
                        "correctSentence": [
                              "このかさ",
                              "も",
                              "せんえん",
                              "です"
                        ],
                        "explanation": "Kono kasa mo sen-en desu."
                  },
                  {
                        "id": "ex-2-8-3",
                        "type": "match-pairs",
                        "prompt": "Empareja la frase original con su réplica con も:",
                        "pairs": [
                              {
                                    "id": "mop1",
                                    "left": "メアリーさんはアメリカ人です。",
                                    "right": "スミスさんもアメリカ人です。"
                              },
                              {
                                    "id": "mop2",
                                    "left": "これは私のペンです。",
                                    "right": "それも私のペンです。"
                              },
                              {
                                    "id": "mop3",
                                    "left": "たけしさんは2年生です。",
                                    "right": "ロバートさんも2年生です。"
                              }
                        ],
                        "explanation": "も vincula oraciones con propiedades idénticas."
                  }
            ]
      },
      {
            "id": "l2-node-9",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Negación: 〜じゃありません",
            "japaneseTitle": "否定形（じゃありません）",
            "description": "Decir \"no es...\" de forma educada en conversación",
            "icon": "ShieldAlert",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-9-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo transformas 「肉です」(Es carne) a negativo educado?",
                        "options": [
                              {
                                    "id": "neg-ja",
                                    "text": "肉じゃありません (Niku ja arimasen)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "neg-nai",
                                    "text": "肉ではないです"
                              },
                              {
                                    "id": "neg-no",
                                    "text": "肉じゃありませんでした"
                              }
                        ],
                        "correctAnswerId": "neg-ja",
                        "explanation": "Para negar con です, se cambia por 「じゃありません」."
                  },
                  {
                        "id": "ex-2-9-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"No soy profesor de japonés\":",
                        "japaneseVoiceText": "にほんごのせんせいじゃありません",
                        "wordBank": [
                              "じゃありません",
                              "にほんご",
                              "せんせい",
                              "の",
                              "です",
                              "は"
                        ],
                        "correctSentence": [
                              "にほんご",
                              "の",
                              "せんせい",
                              "じゃありません"
                        ],
                        "explanation": "Nihongo no sensei ja arimasen."
                  },
                  {
                        "id": "ex-2-9-3",
                        "type": "listening",
                        "prompt": "Escucha la oración negativa:",
                        "japaneseVoiceText": "あれはたけしさんのじてんしゃじゃありません",
                        "options": [
                              {
                                    "id": "l-neg-bike",
                                    "text": "Aquella no es la bicicleta de Takeshi.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-neg-car",
                                    "text": "Aquella es la bicicleta de Mary."
                              },
                              {
                                    "id": "l-neg-yes",
                                    "text": "Takeshi tiene una bicicleta nueva."
                              }
                        ],
                        "correctAnswerId": "l-neg-bike",
                        "explanation": "Takeshi-san no jitensha ja arimasen."
                  }
            ]
      },
      {
            "id": "l2-node-10",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Partículas Finales: ね y よ",
            "japaneseTitle": "終助詞「ね」と「よ」",
            "description": "Buscar acuerdo (¿verdad?) y compartir información nueva o enfática",
            "icon": "Smile",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-10-1",
                        "type": "multiple-choice",
                        "prompt": "Pruebas un plato delicioso con tu amigo y buscas su confirmación (\"Está rico, ¿verdad?\"). ¿Cuál usas?",
                        "options": [
                              {
                                    "id": "part-ne",
                                    "text": "おいしいですね (Oishii desu ne - buscando acuerdo)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "part-yo",
                                    "text": "おいしいですよ (dando info nueva al otro)"
                              },
                              {
                                    "id": "part-ka",
                                    "text": "おいしいですか (pregunta pura de si está rico)"
                              }
                        ],
                        "correctAnswerId": "part-ne",
                        "explanation": "「ね」 busca complicidad o confirmación del oyente (¿a que sí?)."
                  },
                  {
                        "id": "ex-2-10-2",
                        "type": "multiple-choice",
                        "prompt": "Tu amigo va a comprar un libro y tú le adviertes que es muy caro (él no lo sabe). ¿Qué partícula usas?",
                        "options": [
                              {
                                    "id": "part-yo2",
                                    "text": "たかいですよ (Takai desu yo - informando con certeza)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "part-ne2",
                                    "text": "たかいですね"
                              }
                        ],
                        "correctAnswerId": "part-yo2",
                        "explanation": "「よ」 se usa cuando el hablante tiene una información que el oyente desconoce."
                  },
                  {
                        "id": "ex-2-10-3",
                        "type": "listening",
                        "prompt": "Escucha la entonación de la frase:",
                        "japaneseVoiceText": "これはおいしいですね",
                        "options": [
                              {
                                    "id": "l-ne-agree",
                                    "text": "Esto está delicioso, ¿verdad?",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-ne-warn",
                                    "text": "¡Te advierto que esto está delicioso!"
                              }
                        ],
                        "correctAnswerId": "l-ne-agree",
                        "explanation": "Kore wa oishii desu ne."
                  }
            ]
      },
      {
            "id": "l2-node-11",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Workbook: Escucha en la Tienda",
            "japaneseTitle": "ワークブック：買い物のリスニング",
            "description": "Ejercicios de escucha idénticos a los del cuaderno oficial de compras",
            "icon": "Headphones",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-11-1",
                        "type": "listening",
                        "prompt": "Escucha la conversación en la tienda:",
                        "japaneseVoiceText": "すみません、そのとけいはいくらですか。ー さんぜんごひゃくえんです。",
                        "options": [
                              {
                                    "id": "wb2-p1",
                                    "text": "Pregunta el precio del reloj y cuesta 3,500 yenes.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wb2-p2",
                                    "text": "Pregunta por el bolso y cuesta 5,300 yenes."
                              },
                              {
                                    "id": "wb2-p3",
                                    "text": "Pregunta dónde está la tienda."
                              }
                        ],
                        "correctAnswerId": "wb2-p1",
                        "explanation": "その時計はいくらですか (3,500 yenes = さんぜんごひゃくえん)."
                  },
                  {
                        "id": "ex-2-11-2",
                        "type": "listening",
                        "prompt": "Escucha el objeto que decide comprar el cliente:",
                        "japaneseVoiceText": "じゃあ、このあおいかさをください",
                        "options": [
                              {
                                    "id": "wb2-blue-umb",
                                    "text": "El paraguas azul (あおいかさ)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wb2-red-hat",
                                    "text": "El sombrero rojo"
                              },
                              {
                                    "id": "wb2-black-bag",
                                    "text": "La cartera negra"
                              }
                        ],
                        "correctAnswerId": "wb2-blue-umb",
                        "explanation": "「この青い傘をください」(Deme este paraguas azul, por favor)."
                  },
                  {
                        "id": "ex-2-11-3",
                        "type": "listening",
                        "prompt": "Escucha la respuesta del encargado:",
                        "japaneseVoiceText": "ぎんこうはあそこですよ",
                        "options": [
                              {
                                    "id": "wb2-bank-adv",
                                    "text": "Le informa que el banco está allá.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wb2-bank-cl",
                                    "text": "El banco está cerrado."
                              },
                              {
                                    "id": "wb2-post",
                                    "text": "Correos está aquí."
                              }
                        ],
                        "correctAnswerId": "wb2-bank-adv",
                        "explanation": "Ginkou wa asoko desu yo."
                  }
            ]
      },
      {
            "id": "l2-node-12",
            "unitId": 2,
            "lessonNumber": 2,
            "title": "Workbook: Integración y Restaurante",
            "japaneseTitle": "ワークブック：レストランの会話 と 総合問題",
            "description": "Pedir el menú, ordenar platillos y diálogo completo de Genki",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-2-12-1",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la frase en el restaurante: \"El menú, por favor\":",
                        "japaneseVoiceText": "メニューをください",
                        "wordBank": [
                              "メニュー",
                              "ください",
                              "を",
                              "は",
                              "これ"
                        ],
                        "correctSentence": [
                              "メニュー",
                              "を",
                              "ください"
                        ],
                        "explanation": "メニュー (menú) + を (partícula de objeto directo) + ください (por favor)."
                  },
                  {
                        "id": "ex-2-12-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo preguntas cortésmente al mesero \"¿Cuánto es en total?\" al pagar la cuenta?",
                        "options": [
                              {
                                    "id": "bill-ikura",
                                    "text": "いくらですか。 (Ikura desu ka)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "bill-doko",
                                    "text": "どこですか。"
                              },
                              {
                                    "id": "bill-dare",
                                    "text": "だれですか。"
                              }
                        ],
                        "correctAnswerId": "bill-ikura",
                        "explanation": "いくらですか = ¿cuánto es / cuánto cuesta?."
                  },
                  {
                        "id": "ex-2-12-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los platillos típicos del diálogo de Genki Lección 2:",
                        "pairs": [
                              {
                                    "id": "dp1",
                                    "left": "とんかつ",
                                    "right": "Chuleta de cerdo empanizada"
                              },
                              {
                                    "id": "dp2",
                                    "left": "にく",
                                    "right": "Carne"
                              },
                              {
                                    "id": "dp3",
                                    "left": "さかな",
                                    "right": "Pescado"
                              },
                              {
                                    "id": "dp4",
                                    "left": "みず",
                                    "right": "Agua"
                              }
                        ],
                        "explanation": "Comidas que Mary y Takeshi piden en el restaurante en Genki L2."
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
            "id": "l3-node-1",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Vocabulario: Verbos de Vida Diaria",
            "japaneseTitle": "たんご：毎日の動詞（どうし）",
            "description": "Comer, beber, ver, escuchar, leer, dormir y levantarse",
            "icon": "Coffee",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-1-1",
                        "type": "match-pairs",
                        "prompt": "Empareja los verbos de rutina en su forma educada:",
                        "pairs": [
                              {
                                    "id": "v1",
                                    "left": "たべます",
                                    "right": "Comer"
                              },
                              {
                                    "id": "v2",
                                    "left": "のみます",
                                    "right": "Beber"
                              },
                              {
                                    "id": "v3",
                                    "left": "みます",
                                    "right": "Ver / Mirar"
                              },
                              {
                                    "id": "v4",
                                    "left": "ききます",
                                    "right": "Escuchar"
                              }
                        ],
                        "explanation": "Los 4 verbos sensoriales y de alimentación más básicos de Genki."
                  },
                  {
                        "id": "ex-3-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los verbos de movimiento y sueño:",
                        "pairs": [
                              {
                                    "id": "v5",
                                    "left": "おきます",
                                    "right": "Levantarse / Despertar"
                              },
                              {
                                    "id": "v6",
                                    "left": "ねます",
                                    "right": "Acostarse / Dormir"
                              },
                              {
                                    "id": "v7",
                                    "left": "いきます",
                                    "right": "Ir"
                              },
                              {
                                    "id": "v8",
                                    "left": "かえります",
                                    "right": "Regresar (a casa)"
                              }
                        ],
                        "explanation": "Verbos clave para describir tu día a día."
                  },
                  {
                        "id": "ex-3-1-3",
                        "type": "listening",
                        "prompt": "Escucha el verbo que se pronuncia:",
                        "japaneseVoiceText": "べんきょうします",
                        "options": [
                              {
                                    "id": "l-ben",
                                    "text": "Estudiar (べんきょうします)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-kai",
                                    "text": "Comprar (かいます)"
                              },
                              {
                                    "id": "l-han",
                                    "text": "Hablar (はなします)"
                              }
                        ],
                        "correctAnswerId": "l-ben",
                        "explanation": "勉強します (べんきょうします / benkyou shimasu) = estudiar."
                  }
            ]
      },
      {
            "id": "l3-node-2",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Los 3 Grupos de Verbos",
            "japaneseTitle": "動詞の３つのグループ",
            "description": "Aprende a clasificar los verbos U, Ru e Irregulares",
            "icon": "Layers",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-2-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cuáles son los ÚNICOS dos verbos irregulares de todo el idioma japonés?",
                        "options": [
                              {
                                    "id": "irr-pair",
                                    "text": "する (hacer) y くる (venir)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "irr-tab",
                                    "text": "たべる (comer) y のむ (beber)"
                              },
                              {
                                    "id": "irr-ik",
                                    "text": "いく (ir) y みる (ver)"
                              }
                        ],
                        "correctAnswerId": "irr-pair",
                        "explanation": "En japonés solo hay 2 verbos irregulares: する y くる. ¡Todos los demás son regulares!"
                  },
                  {
                        "id": "ex-3-2-2",
                        "type": "multiple-choice",
                        "prompt": "El verbo 「たべる」(comer) termina en \"-eru\". ¿A qué grupo pertenece?",
                        "options": [
                              {
                                    "id": "g-ru",
                                    "text": "Grupo 2: Ru-verbs (一段動詞 - Ichidan)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "g-u",
                                    "text": "Grupo 1: U-verbs (五段動詞 - Godan)"
                              },
                              {
                                    "id": "g-irr",
                                    "text": "Grupo 3: Irregular"
                              }
                        ],
                        "correctAnswerId": "g-ru",
                        "explanation": "La gran mayoría de verbos que terminan en -eru e -iru son Ru-verbs (se quita る y se añade ます)."
                  },
                  {
                        "id": "ex-3-2-3",
                        "type": "match-pairs",
                        "prompt": "Empareja el verbo con su forma de diccionario:",
                        "pairs": [
                              {
                                    "id": "vg1",
                                    "left": "のみます",
                                    "right": "のむ (nomu - beber)"
                              },
                              {
                                    "id": "vg2",
                                    "left": "たべます",
                                    "right": "たべる (taberu - comer)"
                              },
                              {
                                    "id": "vg3",
                                    "left": "します",
                                    "right": "する (suru - hacer)"
                              },
                              {
                                    "id": "vg4",
                                    "left": "きます",
                                    "right": "くる (kuru - venir)"
                              }
                        ],
                        "explanation": "Correspondencia entre forma educada 〜ます y diccionario."
                  }
            ]
      },
      {
            "id": "l3-node-3",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Conjugación: 〜ます y 〜ません",
            "japaneseTitle": "現在形（〜ます・〜ません）",
            "description": "Afirmación y negación de hábitos diarios y planes futuros",
            "icon": "CheckCircle2",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-3-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo dices \"No como carne\" de forma educada?",
                        "options": [
                              {
                                    "id": "neg-tabe",
                                    "text": "たべません (tabemasen)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "neg-tabu",
                                    "text": "たべないです"
                              },
                              {
                                    "id": "neg-mash",
                                    "text": "たべました"
                              }
                        ],
                        "correctAnswerId": "neg-tabe",
                        "explanation": "Para negar en presente educado habitual, se sustituye 〜ます por 〜ません."
                  },
                  {
                        "id": "ex-3-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la frase afirmativa: \"Escucho música\":",
                        "japaneseVoiceText": "おんがくをききます",
                        "wordBank": [
                              "おんがく",
                              "ききます",
                              "を",
                              "は",
                              "のみます"
                        ],
                        "correctSentence": [
                              "おんがく",
                              "を",
                              "ききます"
                        ],
                        "explanation": "音楽 (おんがく / ongaku) + を + 聞きます (ききます / kikimasu)."
                  },
                  {
                        "id": "ex-3-3-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los afirmativos con sus negativos correspondientes:",
                        "pairs": [
                              {
                                    "id": "c-n1",
                                    "left": "のみます (bebo)",
                                    "right": "のみません (no bebo)"
                              },
                              {
                                    "id": "c-n2",
                                    "left": "みます (veo)",
                                    "right": "みません (no veo)"
                              },
                              {
                                    "id": "c-n3",
                                    "left": "いきます (voy)",
                                    "right": "いきません (no voy)"
                              },
                              {
                                    "id": "c-n4",
                                    "left": "します (hago)",
                                    "right": "しません (no hago)"
                              }
                        ],
                        "explanation": "〜ます ➔ 〜ません es la regla universal."
                  }
            ]
      },
      {
            "id": "l3-node-4",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Partícula を: Objeto Directo",
            "japaneseTitle": "助詞「を」（目的語）",
            "description": "Marca el objeto sobre el que recae la acción física del verbo",
            "icon": "Target",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-4-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se pronuncia la partícula 「を」 cuando se habla en japonés natural?",
                        "options": [
                              {
                                    "id": "wo-o",
                                    "text": "Se pronuncia exactamente como \"o\" (la \"w\" es muda)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wo-w",
                                    "text": "Se pronuncia fuertemente \"wo\""
                              },
                              {
                                    "id": "wo-wa",
                                    "text": "Se pronuncia \"wa\""
                              }
                        ],
                        "correctAnswerId": "wo-o",
                        "explanation": "En japonés moderno, la partícula 「を」 siempre se pronuncia simplemente como vocal \"o\"."
                  },
                  {
                        "id": "ex-3-4-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Leo el periódico\":",
                        "japaneseVoiceText": "しんぶんをよみます",
                        "wordBank": [
                              "しんぶん",
                              "よみます",
                              "を",
                              "は",
                              "で",
                              "かきます"
                        ],
                        "correctSentence": [
                              "しんぶん",
                              "を",
                              "よみます"
                        ],
                        "explanation": "新聞 (しんぶん) + を + 読みます (よみます)."
                  },
                  {
                        "id": "ex-3-4-3",
                        "type": "listening",
                        "prompt": "Escucha qué acción realiza la persona:",
                        "japaneseVoiceText": "コーヒーをのみます",
                        "options": [
                              {
                                    "id": "l-cof",
                                    "text": "Bebo café.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-tea",
                                    "text": "Bebo té verde."
                              },
                              {
                                    "id": "l-wat",
                                    "text": "Compro café."
                              }
                        ],
                        "correctAnswerId": "l-cof",
                        "explanation": "Koohii o nomimasu."
                  }
            ]
      },
      {
            "id": "l3-node-5",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Partícula で: Lugar de Acción",
            "japaneseTitle": "助詞「で」（動作の場所）",
            "description": "Indica el lugar donde se realiza una actividad o evento",
            "icon": "MapPin",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-5-1",
                        "type": "multiple-choice",
                        "prompt": "¿Qué partícula indica el lugar donde estás estudiando o comiendo?",
                        "options": [
                              {
                                    "id": "p-de",
                                    "text": "で (de)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "p-ni",
                                    "text": "に (ni)"
                              },
                              {
                                    "id": "p-wo",
                                    "text": "を (wo)"
                              }
                        ],
                        "correctAnswerId": "p-de",
                        "explanation": "「で」 marca el escenario o lugar donde ocurre una acción activa."
                  },
                  {
                        "id": "ex-3-5-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Estudio en la biblioteca\":",
                        "japaneseVoiceText": "としょかんでべんきょうします",
                        "wordBank": [
                              "としょかん",
                              "べんきょうします",
                              "で",
                              "を",
                              "に",
                              "うち"
                        ],
                        "correctSentence": [
                              "としょかん",
                              "で",
                              "べんきょうします"
                        ],
                        "explanation": "Lugar + で + Acción: としょかんでべんきょうします."
                  },
                  {
                        "id": "ex-3-5-3",
                        "type": "listening",
                        "prompt": "Escucha dónde ocurre la acción:",
                        "japaneseVoiceText": "うちでテレビをみます",
                        "options": [
                              {
                                    "id": "l-tv-home",
                                    "text": "Veo la televisión en casa.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-tv-cafe",
                                    "text": "Veo la televisión en el café."
                              },
                              {
                                    "id": "l-tv-school",
                                    "text": "Veo la televisión en la escuela."
                              }
                        ],
                        "correctAnswerId": "l-tv-home",
                        "explanation": "うちで (en casa) + テレビをみます (veo la televisión)."
                  }
            ]
      },
      {
            "id": "l3-node-6",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Partículas に y へ: Destinos",
            "japaneseTitle": "助詞「に」と「へ」（移動の目標と方向）",
            "description": "Ir a la escuela y volver a casa con verbos de movimiento",
            "icon": "Compass",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-6-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se pronuncia la partícula de dirección 「へ」 cuando acompaña a verbos de movimiento?",
                        "options": [
                              {
                                    "id": "he-e",
                                    "text": "Se pronuncia siempre \"e\" (igual que la vocal え)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "he-he",
                                    "text": "Se pronuncia \"he\""
                              },
                              {
                                    "id": "he-ha",
                                    "text": "Se pronuncia \"ha\""
                              }
                        ],
                        "correctAnswerId": "he-e",
                        "explanation": "Al igual que は se lee \"wa\", la partícula へ siempre se lee \"e\"."
                  },
                  {
                        "id": "ex-3-6-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Voy a la escuela\":",
                        "japaneseVoiceText": "がっこうにいきます",
                        "wordBank": [
                              "がくせい",
                              "がっこう",
                              "いきます",
                              "に",
                              "で",
                              "を"
                        ],
                        "correctSentence": [
                              "がっこう",
                              "に",
                              "いきます"
                        ],
                        "explanation": "がっこう (escuela) + に (meta) + いきます (voy)."
                  },
                  {
                        "id": "ex-3-6-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los destinos con su verbo habitual:",
                        "pairs": [
                              {
                                    "id": "mov1",
                                    "left": "うちにかえります",
                                    "right": "Regresar a casa"
                              },
                              {
                                    "id": "mov2",
                                    "left": "にほんにいきます",
                                    "right": "Ir a Japón"
                              },
                              {
                                    "id": "mov3",
                                    "left": "だいがくにきます",
                                    "right": "Venir a la universidad"
                              }
                        ],
                        "explanation": "Destino + に/へ + いきます / きます / かえります."
                  }
            ]
      },
      {
            "id": "l3-node-7",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "La Partícula に con Horas y Tiempo",
            "japaneseTitle": "時間と助詞「に」のルール",
            "description": "La regla de oro de Genki: cuándo se usa に y cuándo está prohibido",
            "icon": "Clock",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-7-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cuál de estas expresiones de tiempo NUNCA lleva la partícula 「に」?",
                        "options": [
                              {
                                    "id": "no-ni-rel",
                                    "text": "きょう (hoy) y まいにち (todos los días)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ni-time",
                                    "text": "7時 (a las 7:00)"
                              },
                              {
                                    "id": "ni-day",
                                    "text": "にちようび (el domingo)"
                              }
                        ],
                        "correctAnswerId": "no-ni-rel",
                        "explanation": "Regla de Genki: las palabras temporales relativas (hoy, mañana, todos los días, la próxima semana) NO llevan に."
                  },
                  {
                        "id": "ex-3-7-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Me levanto a las siete\":",
                        "japaneseVoiceText": "しちじにおきます",
                        "wordBank": [
                              "おきます",
                              "しちじ",
                              "に",
                              "で",
                              "を",
                              "ねます"
                        ],
                        "correctSentence": [
                              "しちじ",
                              "に",
                              "おきます"
                        ],
                        "explanation": "Hora numérica + に + Verbo: しちじにおきます."
                  },
                  {
                        "id": "ex-3-7-3",
                        "type": "listening",
                        "prompt": "Escucha a qué hora se acuesta la persona:",
                        "japaneseVoiceText": "じゅういちじはんにねます",
                        "options": [
                              {
                                    "id": "l-slp-1130",
                                    "text": "Me duermo a las 11:30.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l-slp-1030",
                                    "text": "Me duermo a las 10:30."
                              },
                              {
                                    "id": "l-slp-1100",
                                    "text": "Me duermo a las 11:00."
                              }
                        ],
                        "correctAnswerId": "l-slp-1130",
                        "explanation": "じゅういちじはん (11:30) + に + ねます."
                  }
            ]
      },
      {
            "id": "l3-node-8",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Frecuencia: まいにち, よく, あまり",
            "japaneseTitle": "頻度の副詞（ひんどのふくし）",
            "description": "Expresar qué tan seguido haces cosas y los adverbios negativos",
            "icon": "Flame",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-8-1",
                        "type": "multiple-choice",
                        "prompt": "El adverbio 「あまり」(amari = casi no) tiene una regla estricta. ¿Cuál es?",
                        "options": [
                              {
                                    "id": "am-neg",
                                    "text": "SIEMPRE debe ir acompañado de un verbo en negativo (〜ません)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "am-pos",
                                    "text": "Solo se usa con verbos afirmativos"
                              },
                              {
                                    "id": "am-past",
                                    "text": "Solo se usa en tiempo pasado"
                              }
                        ],
                        "correctAnswerId": "am-neg",
                        "explanation": "「あまり」 y 「ぜんぜん」 exigen obligatoriamente terminación negativa (ej. あまり食べません = casi no como)."
                  },
                  {
                        "id": "ex-3-8-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los adverbios de frecuencia en orden decreciente:",
                        "pairs": [
                              {
                                    "id": "fr1",
                                    "left": "まいにち",
                                    "right": "Todos los días (100%)"
                              },
                              {
                                    "id": "fr2",
                                    "left": "よく",
                                    "right": "Frecuentemente / A menudo (80%)"
                              },
                              {
                                    "id": "fr3",
                                    "left": "ときどき",
                                    "right": "A veces (50%)"
                              },
                              {
                                    "id": "fr4",
                                    "left": "ぜんぜん + neg",
                                    "right": "Nunca / Para nada (0%)"
                              }
                        ],
                        "explanation": "Escala de frecuencia de Genki Lección 3."
                  },
                  {
                        "id": "ex-3-8-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"A menudo veo películas\":",
                        "japaneseVoiceText": "よくえいがをみます",
                        "wordBank": [
                              "えいが",
                              "みます",
                              "よく",
                              "を",
                              "あまり",
                              "で"
                        ],
                        "correctSentence": [
                              "よく",
                              "えいが",
                              "を",
                              "みます"
                        ],
                        "explanation": "Yoku eiga o mimasu (A menudo veo películas)."
                  }
            ]
      },
      {
            "id": "l3-node-9",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Invitaciones: 〜ませんか",
            "japaneseTitle": "提案・勧誘（〜ませんか）",
            "description": "Cómo invitar a alguien a salir de manera cortés y sugerente",
            "icon": "Heart",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-9-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo invitas a alguien diciendo: \"¿Por qué no tomamos un café?\" en Genki?",
                        "options": [
                              {
                                    "id": "inv-cof",
                                    "text": "コーヒーをのみませんか。(Koohii o nomimasen ka)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "inv-pos",
                                    "text": "コーヒーをのみますか。"
                              },
                              {
                                    "id": "inv-sh",
                                    "text": "コーヒーをのんでください。"
                              }
                        ],
                        "correctAnswerId": "inv-cof",
                        "explanation": "La forma negativa interrogativa 〜ませんか es la manera más educada y clásica de invitar a alguien."
                  },
                  {
                        "id": "ex-3-9-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la invitación: \"¿Almorzamos juntos? (¿Comemos el almuerzo?)\":",
                        "japaneseVoiceText": "ひるごはんをたべませんか",
                        "wordBank": [
                              "ひるごはん",
                              "たべませんか",
                              "を",
                              "は",
                              "で",
                              "のみませんか"
                        ],
                        "correctSentence": [
                              "ひるごはん",
                              "を",
                              "たべませんか"
                        ],
                        "explanation": "Hirugohan o tabemasen ka."
                  },
                  {
                        "id": "ex-3-9-3",
                        "type": "multiple-choice",
                        "prompt": "Cuando alguien te invita con 〜ませんか y quieres aceptar entusiasmado, ¿qué respondes?",
                        "options": [
                              {
                                    "id": "ans-ii",
                                    "text": "いいですね。(¡Me parece bien! / ¡Excelente idea!)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ans-iie",
                                    "text": "いいえ、だめです。"
                              },
                              {
                                    "id": "ans-gom",
                                    "text": "ごめんなさい。"
                              }
                        ],
                        "correctAnswerId": "ans-ii",
                        "explanation": "「いいですね」(Ii desu ne) es la respuesta entusiasta por excelencia en Genki."
                  }
            ]
      },
      {
            "id": "l3-node-10",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Workbook: Escucha de Rutinas y Citas",
            "japaneseTitle": "ワークブック：リスニング問題（週末の予定）",
            "description": "Ejercicios de escucha idénticos a los del cuaderno sobre fines de semana",
            "icon": "Headphones",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-10-1",
                        "type": "listening",
                        "prompt": "Escucha el plan de Takeshi para el sábado:",
                        "japaneseVoiceText": "どようびにきょうとへいきます",
                        "options": [
                              {
                                    "id": "wb3-kyo",
                                    "text": "El sábado va a Kioto.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wb3-tok",
                                    "text": "El domingo va a Tokio."
                              },
                              {
                                    "id": "wb3-hom",
                                    "text": "Se queda en casa a estudiar."
                              }
                        ],
                        "correctAnswerId": "wb3-kyo",
                        "explanation": "どようび (sábado) + に + きょうとへいきます (va a Kioto)."
                  },
                  {
                        "id": "ex-3-10-2",
                        "type": "listening",
                        "prompt": "Escucha qué hace Mary los domingos:",
                        "japaneseVoiceText": "にちようびによくテニスをします",
                        "options": [
                              {
                                    "id": "wb3-ten",
                                    "text": "Los domingos a menudo juega tenis.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wb3-stu",
                                    "text": "Los domingos estudia en la biblioteca."
                              },
                              {
                                    "id": "wb3-swi",
                                    "text": "Los domingos nada en la piscina."
                              }
                        ],
                        "correctAnswerId": "wb3-ten",
                        "explanation": "Nichiyoubi ni yoku tenisu o shimasu."
                  },
                  {
                        "id": "ex-3-10-3",
                        "type": "listening",
                        "prompt": "Escucha la invitación que hace Takeshi a Mary:",
                        "japaneseVoiceText": "こんばん、えいがをみませんか。ー ええ、いいですね。",
                        "options": [
                              {
                                    "id": "wb3-mov-ok",
                                    "text": "La invita a ver una película esta noche y Mary acepta.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "wb3-mov-no",
                                    "text": "La invita a cenar pero Mary no puede."
                              },
                              {
                                    "id": "wb3-mov-sun",
                                    "text": "Pregunta si mañana hay clases."
                              }
                        ],
                        "correctAnswerId": "wb3-mov-ok",
                        "explanation": "Konban eiga o mimasen ka. - Ee, ii desu ne."
                  }
            ]
      },
      {
            "id": "l3-node-11",
            "unitId": 3,
            "lessonNumber": 3,
            "title": "Workbook: Integración y Cita del Sábado",
            "japaneseTitle": "ワークブック：第３課 総合問題",
            "description": "Prueba final de la Lección 3 unificando horarios, lugares y partículas",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-3-11-1",
                        "type": "multiple-choice",
                        "prompt": "Encuentra el error de partículas del Workbook: 「あした 学校 で 行きます」. ¿Cuál es el error?",
                        "options": [
                              {
                                    "id": "err-part-de",
                                    "text": "Debe ser 「学校 に / へ 行きます」(con verbos de movimiento se usa に o へ, no で)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "err-part-ash",
                                    "text": "あした debe llevar に"
                              },
                              {
                                    "id": "err-part-ik",
                                    "text": "El verbo 行きます está mal conjugado"
                              }
                        ],
                        "correctAnswerId": "err-part-de",
                        "explanation": "で indica el lugar donde se realiza una acción estática. Para movimiento y metas se usa に o へ."
                  },
                  {
                        "id": "ex-3-11-2",
                        "type": "word-order",
                        "prompt": "Arma la oración completa de rutina: \"Todos los días estudio japonés en la universidad\":",
                        "japaneseVoiceText": "まいにちだいがくでにほんごをべんきょうします",
                        "wordBank": [
                              "べんきょうします",
                              "だいがく",
                              "まいにち",
                              "にほんご",
                              "で",
                              "を",
                              "に"
                        ],
                        "correctSentence": [
                              "まいにち",
                              "だいがく",
                              "で",
                              "にほんご",
                              "を",
                              "べんきょうします"
                        ],
                        "explanation": "まいにち (tiempo relativo) + だいがくで (lugar) + 日本語を (objeto) + べんきょうします (verbo)."
                  },
                  {
                        "id": "ex-3-11-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los días de la semana de Genki Lección 3:",
                        "pairs": [
                              {
                                    "id": "day1",
                                    "left": "げつようび",
                                    "right": "Lunes"
                              },
                              {
                                    "id": "day2",
                                    "left": "きんようび",
                                    "right": "Viernes"
                              },
                              {
                                    "id": "day3",
                                    "left": "どようび",
                                    "right": "Sábado"
                              },
                              {
                                    "id": "day4",
                                    "left": "にちようび",
                                    "right": "Domingo"
                              }
                        ],
                        "explanation": "Días indispensables para coordinar citas y planes semanales."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 4: GENKI LECCIÓN 4: LA PRIMERA CITA
  // ==========================================
  {
    id: 4,
    genkiBook: 'Genki I',
    title: 'Genki Lección 4: La Primera Cita',
    subtitle: 'Pasado 〜ました y Existencia (あります/います)',
    description: 'Existencia de objetos y personas, palabras de posición y oraciones en pasado.',
    themeColor: '#ff4b4b',
    nodes: [
      {
            "id": "l4-node-1",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Vocabulario: Lugares de la Ciudad",
            "japaneseTitle": "町の場所（デパート・公園・病院）",
            "description": "Parque, restaurante, tienda departamental y parada de autobús",
            "icon": "MapPin",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-1-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se dice \"parque\" en japonés?",
                        "options": [
                              {
                                    "id": "u4-p1",
                                    "text": "こうえん (kouen)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "u4-p2",
                                    "text": "びょういん (byouin)"
                              },
                              {
                                    "id": "u4-p3",
                                    "text": "ぎんこう (ginkou)"
                              }
                        ],
                        "correctAnswerId": "u4-p1",
                        "explanation": "「公園」(こうえん / kouen) = parque público."
                  },
                  {
                        "id": "ex-4-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los lugares de la ciudad de Genki L4:",
                        "pairs": [
                              {
                                    "id": "p4-1",
                                    "left": "デパート",
                                    "right": "Tienda por departamentos"
                              },
                              {
                                    "id": "p4-2",
                                    "left": "バスてい",
                                    "right": "Parada de autobús"
                              },
                              {
                                    "id": "p4-3",
                                    "left": "びょういん",
                                    "right": "Hospital"
                              },
                              {
                                    "id": "p4-4",
                                    "left": "ほんや",
                                    "right": "Librería"
                              }
                        ],
                        "explanation": "Vocabulario clave para acordar lugares de encuentro en citas."
                  },
                  {
                        "id": "ex-4-1-3",
                        "type": "listening",
                        "prompt": "Escucha el lugar que menciona el audio:",
                        "japaneseVoiceText": "きっさてん",
                        "options": [
                              {
                                    "id": "l4-cafe",
                                    "text": "Cafetería tradicional (きっさてん)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l4-rest",
                                    "text": "Restaurante"
                              },
                              {
                                    "id": "l4-hotel",
                                    "text": "Hotel"
                              }
                        ],
                        "correctAnswerId": "l4-cafe",
                        "explanation": "喫茶店 (きっさてん / kissaten) = cafetería clásica japonesa."
                  }
            ]
      },
      {
            "id": "l4-node-2",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Existencia: あります vs います",
            "japaneseTitle": "存在動詞：あります と います",
            "description": "La gran distinción: cosas inanimadas (あります) vs seres vivos (います)",
            "icon": "Heart",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-2-1",
                        "type": "multiple-choice",
                        "prompt": "Hay un gato (ねこ / neko) en el jardín. ¿Qué verbo de existencia debes usar?",
                        "options": [
                              {
                                    "id": "ex4-v-i",
                                    "text": "います (imasu - para seres vivos y animales animados)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ex4-v-a",
                                    "text": "あります (arimasu - solo para objetos inanimados)"
                              }
                        ],
                        "correctAnswerId": "ex4-v-i",
                        "explanation": "Para personas y animales que se mueven por su cuenta se usa 「います」."
                  },
                  {
                        "id": "ex-4-2-2",
                        "type": "multiple-choice",
                        "prompt": "Hay una televisión (テレビ) en la sala. ¿Qué verbo debes usar?",
                        "options": [
                              {
                                    "id": "ex4-v-a2",
                                    "text": "あります (arimasu - para cosas inanimadas y plantas)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ex4-v-i2",
                                    "text": "います"
                              }
                        ],
                        "correctAnswerId": "ex4-v-a2",
                        "explanation": "Los objetos inanimados y plantas usan 「あります」."
                  },
                  {
                        "id": "ex-4-2-3",
                        "type": "match-pairs",
                        "prompt": "Empareja el sujeto con el verbo de existencia correcto:",
                        "pairs": [
                              {
                                    "id": "ep1",
                                    "left": "いぬ (perro)",
                                    "right": "います"
                              },
                              {
                                    "id": "ep2",
                                    "left": "本 (libro)",
                                    "right": "あります"
                              },
                              {
                                    "id": "ep3",
                                    "left": "学生 (estudiante)",
                                    "right": "います"
                              },
                              {
                                    "id": "ep4",
                                    "left": "机 (escritorio)",
                                    "right": "あります"
                              }
                        ],
                        "explanation": "Ser vivo ➔ います / Objeto inerte ➔ あります."
                  }
            ]
      },
      {
            "id": "l4-node-3",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Ubicación: [Lugar] に [Cosa] があります",
            "japaneseTitle": "場所 に 物/人 が あります/います",
            "description": "Estructura para indicar qué hay o quién está en un lugar",
            "icon": "Package",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-3-1",
                        "type": "multiple-choice",
                        "prompt": "En la estructura de existencia, ¿qué partícula marca el lugar y cuál marca lo que existe?",
                        "options": [
                              {
                                    "id": "part-ex-cor",
                                    "text": "Lugar に Objeto が あります/います",
                                    "isCorrect": true
                              },
                              {
                                    "id": "part-ex-inv",
                                    "text": "Lugar で Objeto を あります"
                              },
                              {
                                    "id": "part-ex-wa",
                                    "text": "Lugar は Objeto に います"
                              }
                        ],
                        "correctAnswerId": "part-ex-cor",
                        "explanation": "「に」 marca la ubicación estática y 「が」 marca el sujeto que existe."
                  },
                  {
                        "id": "ex-4-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Hay un banco en ese lugar (ahí)\":",
                        "japaneseVoiceText": "そこにぎんこうがあります",
                        "wordBank": [
                              "ぎんこう",
                              "あります",
                              "そこ",
                              "に",
                              "が",
                              "います",
                              "で"
                        ],
                        "correctSentence": [
                              "そこ",
                              "に",
                              "ぎんこう",
                              "が",
                              "あります"
                        ],
                        "explanation": "Soko (lugar) + ni + ginkou (banco) + ga + arimasu."
                  },
                  {
                        "id": "ex-4-3-3",
                        "type": "listening",
                        "prompt": "Escucha quién se encuentra en el aula:",
                        "japaneseVoiceText": "きょうしつにやましたせんせいがいます",
                        "options": [
                              {
                                    "id": "l4-sensei",
                                    "text": "El profesor Yamashita está en el aula.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l4-take",
                                    "text": "Takeshi está en el aula."
                              },
                              {
                                    "id": "l4-mary",
                                    "text": "Mary está en la cafetería."
                              }
                        ],
                        "correctAnswerId": "l4-sensei",
                        "explanation": "Kyoushitsu ni Yamashita-sensei ga imasu."
                  }
            ]
      },
      {
            "id": "l4-node-4",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Posición Relativa: 上, 下, 前, 後ろ",
            "japaneseTitle": "位置の言葉（うえ・した・まえ・うしろ）",
            "description": "Arriba, abajo, delante, detrás, dentro, al lado y cerca",
            "icon": "Compass",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-4-1",
                        "type": "match-pairs",
                        "prompt": "Empareja las palabras de posición espacial:",
                        "pairs": [
                              {
                                    "id": "pos1",
                                    "left": "うえ (上)",
                                    "right": "Arriba / Encima"
                              },
                              {
                                    "id": "pos2",
                                    "left": "した (下)",
                                    "right": "Abajo / Debajo"
                              },
                              {
                                    "id": "pos3",
                                    "left": "まえ (前)",
                                    "right": "Delante / Frente a"
                              },
                              {
                                    "id": "pos4",
                                    "left": "うしろ (後ろ)",
                                    "right": "Detrás / Espaldas"
                              }
                        ],
                        "explanation": "Las 4 posiciones cardinales de Genki L4."
                  },
                  {
                        "id": "ex-4-4-2",
                        "type": "match-pairs",
                        "prompt": "Empareja las posiciones de proximidad:",
                        "pairs": [
                              {
                                    "id": "pos5",
                                    "left": "なか (中)",
                                    "right": "Dentro / En el interior"
                              },
                              {
                                    "id": "pos6",
                                    "left": "となり (隣)",
                                    "right": "Al lado (misma categoría)"
                              },
                              {
                                    "id": "pos7",
                                    "left": "ちかく (近く)",
                                    "right": "Cerca de"
                              },
                              {
                                    "id": "pos8",
                                    "left": "あいだ (間)",
                                    "right": "Entre (A y B)"
                              }
                        ],
                        "explanation": "Posiciones relativas con の (ej. つくえの上 = sobre el escritorio)."
                  },
                  {
                        "id": "ex-4-4-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"El gato está debajo de la mesa (escritorio)\":",
                        "japaneseVoiceText": "ねこはつくえのしたにいます",
                        "wordBank": [
                              "つくえ",
                              "の",
                              "した",
                              "に",
                              "います",
                              "ねこ",
                              "は",
                              "あります"
                        ],
                        "correctSentence": [
                              "ねこ",
                              "は",
                              "つくえ",
                              "の",
                              "した",
                              "に",
                              "います"
                        ],
                        "explanation": "Neko wa tsukue no shita ni imasu."
                  }
            ]
      },
      {
            "id": "l4-node-5",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Verbos en Pasado: 〜ました y 〜ませんでした",
            "japaneseTitle": "動詞の過去形（〜ました・〜ませんでした）",
            "description": "Comí, bebí, fui, no estudié: acciones pasadas educadas",
            "icon": "Clock",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-5-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo dices \"Ayer estudié japonés\" en tiempo pasado educado?",
                        "options": [
                              {
                                    "id": "pst-ben",
                                    "text": "きのう 日本語を 勉強しました (benkyou shimashita)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "pst-ben-pres",
                                    "text": "きのう 日本語を 勉強します"
                              },
                              {
                                    "id": "pst-ben-desu",
                                    "text": "きのう 日本語を 勉強でした"
                              }
                        ],
                        "correctAnswerId": "pst-ben",
                        "explanation": "El sufijo de pasado afirmativo educado es 「〜ました」."
                  },
                  {
                        "id": "ex-4-5-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo dices \"No desayuné esta mañana\" (pasado negativo)?",
                        "options": [
                              {
                                    "id": "pst-neg-tab",
                                    "text": "あさごはんを たべませんでした (tabemasen deshita)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "pst-neg-pres",
                                    "text": "あさごはんを たべません"
                              },
                              {
                                    "id": "pst-neg-mash",
                                    "text": "あさごはんを たべました"
                              }
                        ],
                        "correctAnswerId": "pst-neg-tab",
                        "explanation": "El pasado negativo educado es 「〜ませんでした」."
                  },
                  {
                        "id": "ex-4-5-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Ayer fui a Kioto\":",
                        "japaneseVoiceText": "きのうきょうとへいきました",
                        "wordBank": [
                              "きのう",
                              "きょうと",
                              "へ",
                              "いきました",
                              "いきます",
                              "に",
                              "で"
                        ],
                        "correctSentence": [
                              "きのう",
                              "きょうと",
                              "へ",
                              "いきました"
                        ],
                        "explanation": "Kinou Kyouto e ikimashita."
                  }
            ]
      },
      {
            "id": "l4-node-6",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Pasado de です: 〜でした y 〜じゃありませんでした",
            "japaneseTitle": "ですの過去形（でした・じゃありませんでした）",
            "description": "Decir \"era / fue\" y \"no era / no fue\" con sustantivos",
            "icon": "RotateCcw",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-6-1",
                        "type": "multiple-choice",
                        "prompt": "Ayer fue domingo. ¿Cómo se dice en japonés?",
                        "options": [
                              {
                                    "id": "pst-deshita",
                                    "text": "きのうは 日曜日でした (nichiyoubi deshita)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "pst-desu",
                                    "text": "きのうは 日曜日です"
                              },
                              {
                                    "id": "pst-mash",
                                    "text": "きのうは 日曜日ました"
                              }
                        ],
                        "correctAnswerId": "pst-deshita",
                        "explanation": "El pasado de 「です」 es 「でした」."
                  },
                  {
                        "id": "ex-4-6-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se dice \"Ayer no fue día libre / descanso\"?",
                        "options": [
                              {
                                    "id": "pst-neg-ja",
                                    "text": "きのうは やすみじゃありませんでした",
                                    "isCorrect": true
                              },
                              {
                                    "id": "pst-neg-des",
                                    "text": "きのうは やすみではありません"
                              },
                              {
                                    "id": "pst-neg-mash2",
                                    "text": "きのうは やすみませんでした"
                              }
                        ],
                        "correctAnswerId": "pst-neg-ja",
                        "explanation": "El pasado negativo de です es 「〜じゃありませんでした」."
                  },
                  {
                        "id": "ex-4-6-3",
                        "type": "listening",
                        "prompt": "Escucha la oración sobre el día de ayer:",
                        "japaneseVoiceText": "きのうはいいおてんきでした",
                        "options": [
                              {
                                    "id": "l4-wth-good",
                                    "text": "Ayer hizo buen clima.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l4-wth-bad",
                                    "text": "Ayer hizo mal clima."
                              },
                              {
                                    "id": "l4-wth-rain",
                                    "text": "Ayer llovió mucho."
                              }
                        ],
                        "correctAnswerId": "l4-wth-good",
                        "explanation": "Kinou wa ii otenki deshita."
                  }
            ]
      },
      {
            "id": "l4-node-7",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Partícula と: Conexión y Compañía",
            "japaneseTitle": "助詞「と」（並列 と 一緒）",
            "description": "\"A y B\" (pan y café) o hacer cosas con alguien (con Takeshi)",
            "icon": "Sparkles",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-7-1",
                        "type": "multiple-choice",
                        "prompt": "En la frase 「メアリーさんは たけしさん と 映画を見ました」, ¿qué significa 「と」?",
                        "options": [
                              {
                                    "id": "to-comp",
                                    "text": "Indica compañía (\"con\" Takeshi)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "to-dest",
                                    "text": "Indica el destino"
                              },
                              {
                                    "id": "to-obj",
                                    "text": "Indica el objeto directo"
                              }
                        ],
                        "correctAnswerId": "to-comp",
                        "explanation": "Persona + と = \"en compañía de / con\"."
                  },
                  {
                        "id": "ex-4-7-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Fui al restaurante con Mary\":",
                        "japaneseVoiceText": "メアリーさんとレストランへいきました",
                        "wordBank": [
                              "メアリーさん",
                              "と",
                              "レストラン",
                              "へ",
                              "いきました",
                              "は",
                              "で"
                        ],
                        "correctSentence": [
                              "メアリーさん",
                              "と",
                              "レストラン",
                              "へ",
                              "いきました"
                        ],
                        "explanation": "Mary-san to resutoran e ikimashita."
                  },
                  {
                        "id": "ex-4-7-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los dos usos de la partícula と:",
                        "pairs": [
                              {
                                    "id": "tp1",
                                    "left": "パン と ミルク",
                                    "right": "Pan Y leche (conector \"y\")"
                              },
                              {
                                    "id": "tp2",
                                    "left": "ともだち と 行く",
                                    "right": "Ir CON amigos (compañía)"
                              },
                              {
                                    "id": "tp3",
                                    "left": "ペン と ノート",
                                    "right": "Bolígrafo Y cuaderno"
                              }
                        ],
                        "explanation": "と une sustantivos exhaustivos o marca compañía."
                  }
            ]
      },
      {
            "id": "l4-node-8",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Partículas から y まで: Desde y Hasta",
            "japaneseTitle": "助詞「から」と「まで」（起点と終点）",
            "description": "Expresar horarios y distancias: de 9 a 5, de Tokio a Kioto",
            "icon": "ArrowRight",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-8-1",
                        "type": "multiple-choice",
                        "prompt": "La clase de japonés es de 9:00 a 10:30. ¿Cómo se expresa?",
                        "options": [
                              {
                                    "id": "km-cor",
                                    "text": "くじ から じゅうじはん まで です",
                                    "isCorrect": true
                              },
                              {
                                    "id": "km-inv",
                                    "text": "くじ まで じゅうじはん から です"
                              },
                              {
                                    "id": "km-ni",
                                    "text": "くじ に じゅうじはん で です"
                              }
                        ],
                        "correctAnswerId": "km-cor",
                        "explanation": "から = desde / まで = hasta."
                  },
                  {
                        "id": "ex-4-8-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Estudié de 2:00 a 4:00\":",
                        "japaneseVoiceText": "にじからよじまでべんきょうしました",
                        "wordBank": [
                              "にじ",
                              "から",
                              "よじ",
                              "まで",
                              "べんきょうしました",
                              "に",
                              "で"
                        ],
                        "correctSentence": [
                              "にじ",
                              "から",
                              "よじ",
                              "まで",
                              "べんきょうしました"
                        ],
                        "explanation": "Niji kara yoji made benkyou shimashita."
                  },
                  {
                        "id": "ex-4-8-3",
                        "type": "listening",
                        "prompt": "Escucha el horario bancario del audio:",
                        "japaneseVoiceText": "ぎんこうはくじからさんじまでです",
                        "options": [
                              {
                                    "id": "l4-bank-hrs",
                                    "text": "El banco abre de 9:00 a 3:00.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l4-bank-4",
                                    "text": "El banco abre de 9:00 a 4:00."
                              },
                              {
                                    "id": "l4-bank-10",
                                    "text": "El banco abre de 10:00 a 5:00."
                              }
                        ],
                        "correctAnswerId": "l4-bank-hrs",
                        "explanation": "Ginkou wa kuji kara sanji made desu."
                  }
            ]
      },
      {
            "id": "l4-node-9",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Workbook: Escucha de la Primera Cita",
            "japaneseTitle": "ワークブック：初めてのデートの会話",
            "description": "Diálogo oficial del libro: Mary y Takeshi esperando junto al restaurante",
            "icon": "Headphones",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-9-1",
                        "type": "listening",
                        "prompt": "Escucha la conversación entre Takeshi y Mary:",
                        "japaneseVoiceText": "きのう、どこへいきましたか。ー ともだちときょうとへいきました。",
                        "options": [
                              {
                                    "id": "l4-dt1",
                                    "text": "Takeshi pregunta a dónde fue ayer y Mary responde que fue a Kioto con amigos.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l4-dt2",
                                    "text": "Mary invita a Takeshi a cenar a Kioto hoy."
                              },
                              {
                                    "id": "l4-dt3",
                                    "text": "Mary se quedó en casa estudiando todo el día."
                              }
                        ],
                        "correctAnswerId": "l4-dt1",
                        "explanation": "Kinou doko e ikimashita ka. - Tomodachi to Kyouto e ikimashita."
                  },
                  {
                        "id": "ex-4-9-2",
                        "type": "listening",
                        "prompt": "Escucha el punto de encuentro convenido:",
                        "japaneseVoiceText": "マクドナルドのまえでまちました",
                        "options": [
                              {
                                    "id": "l4-mac-front",
                                    "text": "Esperó frente a McDonald's.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l4-mac-in",
                                    "text": "Esperó dentro del restaurante."
                              },
                              {
                                    "id": "l4-mac-sta",
                                    "text": "Esperó en la estación de tren."
                              }
                        ],
                        "correctAnswerId": "l4-mac-front",
                        "explanation": "Makudonarudo no mae de machimashita."
                  },
                  {
                        "id": "ex-4-9-3",
                        "type": "multiple-choice",
                        "prompt": "¿Qué expresión dice Takeshi para disculparse por llegar un poco tarde?",
                        "options": [
                              {
                                    "id": "ap-late",
                                    "text": "すみません、おそくなりました (Disculpa, se me hizo tarde)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ap-genki",
                                    "text": "おげんきですか"
                              },
                              {
                                    "id": "ap-oyasumi",
                                    "text": "おやすみなさい"
                              }
                        ],
                        "correctAnswerId": "ap-late",
                        "explanation": "Expresión clásica de disculpa en citas de Genki L4."
                  }
            ]
      },
      {
            "id": "l4-node-10",
            "unitId": 4,
            "lessonNumber": 4,
            "title": "Workbook: Integración Lección 4",
            "japaneseTitle": "ワークブック：第４課 総合問題",
            "description": "Evaluación final combinando pasado, existencia y partículas espaciales",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-4-10-1",
                        "type": "word-order",
                        "prompt": "Arma la oración completa de la Lección 4: \"Ayer compré un libro en la librería\":",
                        "japaneseVoiceText": "きのうほんやでほんをかいました",
                        "wordBank": [
                              "きのう",
                              "ほんや",
                              "で",
                              "ほん",
                              "を",
                              "かいました",
                              "に",
                              "買います"
                        ],
                        "correctSentence": [
                              "きのう",
                              "ほんや",
                              "で",
                              "ほん",
                              "を",
                              "かいました"
                        ],
                        "explanation": "Kinou hon'ya de hon o kaimashita."
                  },
                  {
                        "id": "ex-4-10-2",
                        "type": "multiple-choice",
                        "prompt": "Encuentra el error del Workbook: 「机 の 上 で ペン が あります」. ¿Cuál es el error?",
                        "options": [
                              {
                                    "id": "err-4-de",
                                    "text": "Debe ser 「机の上 に ペンがあります」(para existencia estática se usa に, no で)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "err-4-ue",
                                    "text": "Debe usarse した en vez de 上"
                              },
                              {
                                    "id": "err-4-pen",
                                    "text": "Debe usarse います en vez de あります"
                              }
                        ],
                        "correctAnswerId": "err-4-de",
                        "explanation": "Regla de Genki: La ubicación de existencia siempre lleva に, jamás で."
                  },
                  {
                        "id": "ex-4-10-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los términos temporales del pasado:",
                        "pairs": [
                              {
                                    "id": "pst1",
                                    "left": "きのう (昨日)",
                                    "right": "Ayer"
                              },
                              {
                                    "id": "pst2",
                                    "left": "おととい (一昨日)",
                                    "right": "Antier / Anteayer"
                              },
                              {
                                    "id": "pst3",
                                    "left": "せんしゅう (先週)",
                                    "right": "La semana pasada"
                              },
                              {
                                    "id": "pst4",
                                    "left": "きのうのばん",
                                    "right": "Anoche (ayer por la noche)"
                              }
                        ],
                        "explanation": "Términos de tiempo pasado indispensables en Genki L4."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 5: GENKI LECCIÓN 5: VIAJE A OKINAWA
  // ==========================================
  {
    id: 5,
    genkiBook: 'Genki I',
    title: 'Genki Lección 5: Viaje a Okinawa',
    subtitle: 'Adjetivos い y な, Gustos (好き/嫌い)',
    description: 'Describe personas, lugares y comidas en presente y pasado con adjetivos japoneses.',
    themeColor: '#00cd9c',
    nodes: [
      {
            "id": "l5-node-1",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Vocabulario: Adjetivos y Viajes",
            "japaneseTitle": "たんご：形容詞（けいようし）と 旅行",
            "description": "Interesante, divertido, caluroso, frío, hermoso, ocupado y libre",
            "icon": "Sun",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-1-1",
                        "type": "match-pairs",
                        "prompt": "Empareja los い-adjetivos sensoriales y de clima:",
                        "pairs": [
                              {
                                    "id": "adj1",
                                    "left": "おもしろい",
                                    "right": "Interesante / Gracioso"
                              },
                              {
                                    "id": "adj2",
                                    "left": "たのしい",
                                    "right": "Divertido"
                              },
                              {
                                    "id": "adj3",
                                    "left": "あつい (暑い)",
                                    "right": "Caluroso (clima)"
                              },
                              {
                                    "id": "adj4",
                                    "left": "さむい (寒い)",
                                    "right": "Frío (clima)"
                              }
                        ],
                        "explanation": "Los adjetivos en い terminan intrínsecamente en sonido -i."
                  },
                  {
                        "id": "ex-5-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los な-adjetivos de estado:",
                        "pairs": [
                              {
                                    "id": "adj5",
                                    "left": "きれい",
                                    "right": "Hermoso / Limpio"
                              },
                              {
                                    "id": "adj6",
                                    "left": "しずか",
                                    "right": "Silencioso / Tranquilo"
                              },
                              {
                                    "id": "adj7",
                                    "left": "ひま",
                                    "right": "Libre / Con tiempo libre"
                              },
                              {
                                    "id": "adj8",
                                    "left": "にぎやか",
                                    "right": "Animado / Concurrido"
                              }
                        ],
                        "explanation": "Ojo con きれい: aunque termina en \"i\", es un な-adjetivo."
                  },
                  {
                        "id": "ex-5-1-3",
                        "type": "listening",
                        "prompt": "Escucha el adjetivo que describe el viaje:",
                        "japaneseVoiceText": "とてもたのしかったです",
                        "options": [
                              {
                                    "id": "l5-fun-pst",
                                    "text": "Fue muy divertido (たのしかったです).",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l5-bor-pst",
                                    "text": "Fue muy aburrido."
                              },
                              {
                                    "id": "l5-cold-pst",
                                    "text": "Hizo mucho frío."
                              }
                        ],
                        "correctAnswerId": "l5-fun-pst",
                        "explanation": "Totemo tanoshikatta desu."
                  }
            ]
      },
      {
            "id": "l5-node-2",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Los 2 Tipos de Adjetivos: い vs な",
            "japaneseTitle": "い形容詞 と な形容詞の区別",
            "description": "Aprende a identificarlos y la famosa trampa de きれい y ゆうめい",
            "icon": "Layers",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-2-1",
                        "type": "multiple-choice",
                        "prompt": "El adjetivo 「きれい」(hermoso/limpio) termina en \"i\". ¿A qué tipo pertenece?",
                        "options": [
                              {
                                    "id": "adj-kirei-na",
                                    "text": "Es un な-adjetivo (excepción clásica de kanji 綺麗)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "adj-kirei-i",
                                    "text": "Es un い-adjetivo regular"
                              }
                        ],
                        "correctAnswerId": "adj-kirei-na",
                        "explanation": "¡Regla de oro de Genki! きれい y ゆうめい (famoso) son な-adjetivos."
                  },
                  {
                        "id": "ex-5-2-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo modifican a un sustantivo (ej. \"persona\") los な-adjetivos?",
                        "options": [
                              {
                                    "id": "adj-mod-na",
                                    "text": "Se les debe agregar 「な」 obligatoriamente: きれい な 人",
                                    "isCorrect": true
                              },
                              {
                                    "id": "adj-mod-no",
                                    "text": "Se les agrega の: きれい の 人"
                              },
                              {
                                    "id": "adj-mod-none",
                                    "text": "Van solos sin nada"
                              }
                        ],
                        "correctAnswerId": "adj-mod-na",
                        "explanation": "Por eso se llaman な-adjetivos: necesitan な para modificar a un sustantivo."
                  },
                  {
                        "id": "ex-5-2-3",
                        "type": "match-pairs",
                        "prompt": "Clasifica los adjetivos en su grupo correcto:",
                        "pairs": [
                              {
                                    "id": "cl1",
                                    "left": "たかい (caro/alto)",
                                    "right": "い-adjetivo"
                              },
                              {
                                    "id": "cl2",
                                    "left": "げんき (enérgico/sano)",
                                    "right": "な-adjetivo"
                              },
                              {
                                    "id": "cl3",
                                    "left": "あたらしい (nuevo)",
                                    "right": "い-adjetivo"
                              },
                              {
                                    "id": "cl4",
                                    "left": "しずか (tranquilo)",
                                    "right": "な-adjetivo"
                              }
                        ],
                        "explanation": "Reconocimiento morfológico de adjetivos."
                  }
            ]
      },
      {
            "id": "l5-node-3",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Conjugación de い-adjetivos: Presente",
            "japaneseTitle": "い形容詞の現在形（〜いです・〜くないです）",
            "description": "Es caro (たかいです) vs No es caro (たかくないです)",
            "icon": "CheckCircle2",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-3-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se forma el presente negativo de un い-adjetivo como 「さむい」(frío)?",
                        "options": [
                              {
                                    "id": "i-neg-rule",
                                    "text": "Se quita la última 「い」 y se añade 「くないです」(さむくないです)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "i-neg-ja",
                                    "text": "Se añade じゃありません: さむいじゃありません"
                              },
                              {
                                    "id": "i-neg-nai",
                                    "text": "さむいじゃないです"
                              }
                        ],
                        "correctAnswerId": "i-neg-rule",
                        "explanation": "Los い-adjetivos NUNCA usan じゃありません; cambian su terminación a 〜くないです."
                  },
                  {
                        "id": "ex-5-3-2",
                        "type": "multiple-choice",
                        "prompt": "¡Excepción irregular clave! ¿Cuál es el negativo de 「いい」(bueno)?",
                        "options": [
                              {
                                    "id": "ii-yoku",
                                    "text": "よくないです (yokunai desu - de su raíz antigua よい)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ii-ikunai",
                                    "text": "いくないです"
                              },
                              {
                                    "id": "ii-ja",
                                    "text": "いいじゃありません"
                              }
                        ],
                        "correctAnswerId": "ii-yoku",
                        "explanation": "「いい」 siempre se conjuga a partir de su forma base 「よい」(yoi ➔ yokunai)."
                  },
                  {
                        "id": "ex-5-3-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Esta comida no es picante\":",
                        "japaneseVoiceText": "このたべものはからくないです",
                        "wordBank": [
                              "このたべもの",
                              "は",
                              "からくないです",
                              "からいです",
                              "じゃありません"
                        ],
                        "correctSentence": [
                              "このたべもの",
                              "は",
                              "からくないです"
                        ],
                        "explanation": "Kono tabemono wa karakunai desu."
                  }
            ]
      },
      {
            "id": "l5-node-4",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Conjugación de い-adjetivos: Pasado",
            "japaneseTitle": "い形容詞の過去形（〜かったです・〜くなかったです）",
            "description": "Estuvo divertido (たのしかったです) vs No estuvo divertido",
            "icon": "RotateCcw",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-4-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo dices \"El examen de ayer fue difícil\" en japonés?",
                        "options": [
                              {
                                    "id": "i-pst-muz",
                                    "text": "きのうのテストは むずかしかったです (muzukashikatta desu)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "i-pst-desh",
                                    "text": "きのうのテストは むずかしいでした"
                              },
                              {
                                    "id": "i-pst-mash",
                                    "text": "きのうのテストは むずかしました"
                              }
                        ],
                        "correctAnswerId": "i-pst-muz",
                        "explanation": "Regla: Se quita la い final y se añade 「〜かったです」."
                  },
                  {
                        "id": "ex-5-4-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo dices \"El clima de Okinawa no estuvo caluroso\" (pasado negativo)?",
                        "options": [
                              {
                                    "id": "i-pst-neg-at",
                                    "text": "あつくなかったです (atsukunakatta desu)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "i-pst-neg-ja",
                                    "text": "あつくありませんでした"
                              },
                              {
                                    "id": "i-pst-neg-desh",
                                    "text": "あついくないでした"
                              }
                        ],
                        "correctAnswerId": "i-pst-neg-at",
                        "explanation": "Pasado negativo de い-adjetivo: se quita い y se añade 「〜くなかったです」."
                  },
                  {
                        "id": "ex-5-4-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"La película de ayer estuvo muy buena\":",
                        "japaneseVoiceText": "きのうのえいがはとてもよかったです",
                        "wordBank": [
                              "きのうのえいが",
                              "は",
                              "とても",
                              "よかったです",
                              "いいでした",
                              "おもしろい"
                        ],
                        "correctSentence": [
                              "きのうのえいが",
                              "は",
                              "とても",
                              "よかったです"
                        ],
                        "explanation": "Kinou no eiga wa totemo yokatta desu."
                  }
            ]
      },
      {
            "id": "l5-node-5",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Conjugación de な-adjetivos: Presente y Pasado",
            "japaneseTitle": "な形容詞の活用（です・じゃありません・でした）",
            "description": "Los な-adjetivos se conjugan exactamente igual que los sustantivos con です",
            "icon": "Sparkles",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-5-1",
                        "type": "match-pairs",
                        "prompt": "Empareja las 4 formas del な-adjetivo 「しずか」(tranquilo):",
                        "pairs": [
                              {
                                    "id": "na-p1",
                                    "left": "Presente Afirmativo",
                                    "right": "しずかです (es tranquilo)"
                              },
                              {
                                    "id": "na-p2",
                                    "left": "Presente Negativo",
                                    "right": "しずかじゃありません (no es tranquilo)"
                              },
                              {
                                    "id": "na-p3",
                                    "left": "Pasado Afirmativo",
                                    "right": "しずかでした (era tranquilo)"
                              },
                              {
                                    "id": "na-p4",
                                    "left": "Pasado Negativo",
                                    "right": "しずかじゃありませんでした"
                              }
                        ],
                        "explanation": "Los な-adjetivos copian exactamente la conjugación de です."
                  },
                  {
                        "id": "ex-5-5-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"El pueblo de Takeshi era muy tranquilo\":",
                        "japaneseVoiceText": "たけしさんのまちはとてもしずかでした",
                        "wordBank": [
                              "たけしさんのまち",
                              "は",
                              "とても",
                              "しずかでした",
                              "しずかかったです",
                              "きれい"
                        ],
                        "correctSentence": [
                              "たけしさんのまち",
                              "は",
                              "とても",
                              "しずかでした"
                        ],
                        "explanation": "Takeshi-san no machi wa totemo shizuka deshita."
                  },
                  {
                        "id": "ex-5-5-3",
                        "type": "listening",
                        "prompt": "Escucha el estado de Robert la semana pasada:",
                        "japaneseVoiceText": "せんしゅうはあまりひまじゃありませんでした",
                        "options": [
                              {
                                    "id": "l5-rob-busy",
                                    "text": "La semana pasada no tuvo casi tiempo libre (estuvo ocupado).",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l5-rob-free",
                                    "text": "La semana pasada estuvo completamente libre."
                              },
                              {
                                    "id": "l5-rob-sick",
                                    "text": "La semana pasada estuvo enfermo."
                              }
                        ],
                        "correctAnswerId": "l5-rob-busy",
                        "explanation": "Senshuu wa amari hima ja arimasen deshita."
                  }
            ]
      },
      {
            "id": "l5-node-6",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Gustos y Preferencias: 好き y 嫌い",
            "japaneseTitle": "好嫌表現：すき・きらい（助詞「が」）",
            "description": "Decir lo que te gusta (好き) y lo que te disgusta (嫌い) con partícula が",
            "icon": "Heart",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-6-1",
                        "type": "multiple-choice",
                        "prompt": "¿Qué partícula marca OBLIGATORIAMENTE el objeto de gusto con 「好き」(suki)?",
                        "options": [
                              {
                                    "id": "suki-ga",
                                    "text": "La partícula が (ga): [Cosa] が すきです",
                                    "isCorrect": true
                              },
                              {
                                    "id": "suki-wo",
                                    "text": "La partícula を (wo)"
                              },
                              {
                                    "id": "suki-ni",
                                    "text": "La partícula に (ni)"
                              }
                        ],
                        "correctAnswerId": "suki-ga",
                        "explanation": "En japonés, 好き es un adjetivo (\"ser agradable para mí\"), por lo que lleva 「が」, ¡nunca 「を」!"
                  },
                  {
                        "id": "ex-5-6-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"A Mary le gusta mucho el café\":",
                        "japaneseVoiceText": "メアリーさんはコーヒーがだいすきです",
                        "wordBank": [
                              "メアリーさん",
                              "は",
                              "コーヒー",
                              "が",
                              "だいすきです",
                              "を",
                              "すきじゃない"
                        ],
                        "correctSentence": [
                              "メアリーさん",
                              "は",
                              "コーヒー",
                              "が",
                              "だいすきです"
                        ],
                        "explanation": "Mary-san wa koohii ga daisuki desu."
                  },
                  {
                        "id": "ex-5-6-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los niveles de preferencia en Genki:",
                        "pairs": [
                              {
                                    "id": "pref1",
                                    "left": "だいすき (大好き)",
                                    "right": "Me encanta / Me gusta muchísimo"
                              },
                              {
                                    "id": "pref2",
                                    "left": "すき (好き)",
                                    "right": "Me gusta"
                              },
                              {
                                    "id": "pref3",
                                    "left": "きらい (嫌い)",
                                    "right": "Me disgusta / No me gusta"
                              },
                              {
                                    "id": "pref4",
                                    "left": "だいきらい (大嫌い)",
                                    "right": "Lo detesto / Odio"
                              }
                        ],
                        "explanation": "Escala afectiva de Genki L5 con partícula が."
                  }
            ]
      },
      {
            "id": "l5-node-7",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Sugerencias Activas: 〜ましょう y 〜ましょうか",
            "japaneseTitle": "提案表現（〜ましょう・〜ましょうか）",
            "description": "¡Hagámoslo! (〜ましょう) vs ¿Te ayudo? / ¿Lo hacemos juntos? (〜ましょうか)",
            "icon": "Sparkles",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-7-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo dices entusiasmado: \"¡Vamos juntos!\" en japonés?",
                        "options": [
                              {
                                    "id": "mashou-go",
                                    "text": "いっしょに いきましょう！ (Ikimashou)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "mashou-ka",
                                    "text": "いきましょうか"
                              },
                              {
                                    "id": "mashou-masen",
                                    "text": "いきません"
                              }
                        ],
                        "correctAnswerId": "mashou-go",
                        "explanation": "「〜ましょう」 expresa una propuesta entusiasta compartida (\"¡Vamos a...!\")."
                  },
                  {
                        "id": "ex-5-7-2",
                        "type": "multiple-choice",
                        "prompt": "Ves a tu amigo cargando maletas pesadas y le ofreces ayuda: \"¿Llevo tu equipaje?\". ¿Cuál usas?",
                        "options": [
                              {
                                    "id": "mashou-offer",
                                    "text": "にもつを持ちましょうか (Mochimashou ka - ofreciendo ayuda proactiva)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "mashou-cmd",
                                    "text": "持ちましょう"
                              }
                        ],
                        "correctAnswerId": "mashou-offer",
                        "explanation": "「〜ましょうか」 ofrece amablemente ayuda o propone una acción al otro."
                  },
                  {
                        "id": "ex-5-7-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la propuesta: \"Descansemos un poco en ese café\":",
                        "japaneseVoiceText": "あのカフェでちょっとやすみましょう",
                        "wordBank": [
                              "あのカフェ",
                              "で",
                              "ちょっと",
                              "やすみましょう",
                              "に",
                              "やすみます"
                        ],
                        "correctSentence": [
                              "あのカフェ",
                              "で",
                              "ちょっと",
                              "やすみましょう"
                        ],
                        "explanation": "Ano kafe de chotto yasumimashou."
                  }
            ]
      },
      {
            "id": "l5-node-8",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Workbook: Escucha de Vacaciones en Okinawa",
            "japaneseTitle": "ワークブック：沖縄旅行のリスニング",
            "description": "Robert y sus amigos describen las playas, comida y el mar de Okinawa",
            "icon": "Headphones",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-8-1",
                        "type": "listening",
                        "prompt": "Escucha cómo describe Robert el mar de Okinawa:",
                        "japaneseVoiceText": "おきなわのうみはとてもきれいで、あおかったです",
                        "options": [
                              {
                                    "id": "l5-sea-blue",
                                    "text": "El mar de Okinawa era muy hermoso y azul.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l5-sea-cold",
                                    "text": "El mar de Okinawa estaba muy frío y oscuro."
                              },
                              {
                                    "id": "l5-sea-dirty",
                                    "text": "La playa estaba muy sucia."
                              }
                        ],
                        "correctAnswerId": "l5-sea-blue",
                        "explanation": "Okinawa no umi wa totemo kirei de, aokatta desu."
                  },
                  {
                        "id": "ex-5-8-2",
                        "type": "listening",
                        "prompt": "Escucha la opinión sobre la comida okinawense:",
                        "japaneseVoiceText": "りょうりはおいしかったですが、ちょっとからかったです",
                        "options": [
                              {
                                    "id": "l5-food-spicy",
                                    "text": "La comida estaba rica pero un poco picante.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l5-food-bad",
                                    "text": "La comida no le gustó para nada."
                              },
                              {
                                    "id": "l5-food-cheap",
                                    "text": "La comida fue sumamente barata."
                              }
                        ],
                        "correctAnswerId": "l5-food-spicy",
                        "explanation": "Ryouri wa oishikatta desu ga, chotto karakatta desu."
                  },
                  {
                        "id": "ex-5-8-3",
                        "type": "multiple-choice",
                        "prompt": "¿Qué palabra se usó en el diálogo para conectar oraciones opuestas (\"..., pero...\")?",
                        "options": [
                              {
                                    "id": "ga-but",
                                    "text": "が (ga) al final de la primera cláusula",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ga-soshite",
                                    "text": "そして"
                              },
                              {
                                    "id": "ga-kara",
                                    "text": "から"
                              }
                        ],
                        "correctAnswerId": "ga-but",
                        "explanation": "おいしかったですが... (Estaba rico, PERO...)."
                  }
            ]
      },
      {
            "id": "l5-node-9",
            "unitId": 5,
            "lessonNumber": 5,
            "title": "Workbook: Integración Lección 5",
            "japaneseTitle": "ワークブック：第５課 総合問題",
            "description": "Evaluación integradora de adjetivos, gustos y sugerencias",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-5-9-1",
                        "type": "word-order",
                        "prompt": "Arma la oración completa: \"Ayer compré un paraguas nuevo y barato\":",
                        "japaneseVoiceText": "きのうあたらしくてやすいかさをかいました",
                        "wordBank": [
                              "きのう",
                              "あたらしくて",
                              "やすい",
                              "かさ",
                              "を",
                              "かいました",
                              "で",
                              "きれい"
                        ],
                        "correctSentence": [
                              "きのう",
                              "あたらしくて",
                              "やすい",
                              "かさ",
                              "を",
                              "かいました"
                        ],
                        "explanation": "Kinou atarashikute yasui kasa o kaimashita."
                  },
                  {
                        "id": "ex-5-9-2",
                        "type": "multiple-choice",
                        "prompt": "Encuentra el error del Workbook: 「わたし は 日本料理 を 好きです」. ¿Cuál es el error?",
                        "options": [
                              {
                                    "id": "err-5-wo",
                                    "text": "Con 好き debe usarse la partícula が: 日本料理 が 好きです",
                                    "isCorrect": true
                              },
                              {
                                    "id": "err-5-wa",
                                    "text": "Debe eliminarse わたしは"
                              },
                              {
                                    "id": "err-5-suki",
                                    "text": "好き es un verbo y debe terminar en ます"
                              }
                        ],
                        "correctAnswerId": "err-5-wo",
                        "explanation": "Error clásico de exámenes JLPT y Genki: 好き siempre toma が."
                  },
                  {
                        "id": "ex-5-9-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los opuestos adjetivales de Genki L5:",
                        "pairs": [
                              {
                                    "id": "op-adj1",
                                    "left": "たかい (caro)",
                                    "right": "やすい (barato)"
                              },
                              {
                                    "id": "op-adj2",
                                    "left": "あつい (caluroso)",
                                    "right": "さむい (frío)"
                              },
                              {
                                    "id": "op-adj3",
                                    "left": "あたらしい (nuevo)",
                                    "right": "ふるい (viejo / antiguo)"
                              },
                              {
                                    "id": "op-adj4",
                                    "left": "むずかしい (difícil)",
                                    "right": "やさしい (fácil / amable)"
                              }
                        ],
                        "explanation": "Pares de adjetivos opuestos de Genki."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 6: GENKI LECCIÓN 6: UN DÍA EN LA VIDA DE ROBERT
  // ==========================================
  {
    id: 6,
    genkiBook: 'Genki I',
    title: 'Genki Lección 6: Un Día en la Vida de Robert',
    subtitle: 'La Famosa Forma Te (〜て形)',
    description: 'Conecta acciones en secuencia, pide favores (〜てください) y permisos (〜てもいいですか).',
    themeColor: '#1cb0f6',
    nodes: [
      {
            "id": "l6-node-1",
            "unitId": 6,
            "lessonNumber": 6,
            "title": "La Canción de la Forma Te (て形)",
            "japaneseTitle": "て形のルール と て形のうた",
            "description": "Aprende las reglas de conjugación para verbos Ru, U e Irregulares",
            "icon": "Music",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-6-1-1",
                        "type": "multiple-choice",
                        "prompt": "Para los Ru-verbs (Grupo 2 como 食べる y 見る), ¿cómo se forma la forma Te?",
                        "options": [
                              {
                                    "id": "te-ru-rule",
                                    "text": "Simplemente se quita る y se añade て (たべて, みて)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "te-ru-tte",
                                    "text": "Se cambia る por って"
                              },
                              {
                                    "id": "te-ru-nde",
                                    "text": "Se cambia る por んで"
                              }
                        ],
                        "correctAnswerId": "te-ru-rule",
                        "explanation": "Los Ru-verbs son los más sencillos: る ➔ て."
                  },
                  {
                        "id": "ex-6-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja las terminaciones de U-verbs con su forma Te según la canción de Genki:",
                        "pairs": [
                              {
                                    "id": "tr1",
                                    "left": "う・つ・る (ej. かう・まつ・とる)",
                                    "right": "〜って (かって・まって・とって)"
                              },
                              {
                                    "id": "tr2",
                                    "left": "む・ぶ・ぬ (ej. のむ・あそぶ・しぬ)",
                                    "right": "〜んで (のんで・あそんで・しんで)"
                              },
                              {
                                    "id": "tr3",
                                    "left": "く (ej. かく)",
                                    "right": "〜いて (かいて)"
                              },
                              {
                                    "id": "tr4",
                                    "left": "す (ej. はなす)",
                                    "right": "〜して (はなして)"
                              }
                        ],
                        "explanation": "La famosa canción de la forma Te de Genki."
                  },
                  {
                        "id": "ex-6-1-3",
                        "type": "multiple-choice",
                        "prompt": "¡Excepción irregular número 1 de la forma Te! ¿Cuál es la forma Te de 「行く」(いく / ir)?",
                        "options": [
                              {
                                    "id": "te-iku-exc",
                                    "text": "いって (itte - con tsu pequeño って, no iite)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "te-iku-iite",
                                    "text": "いいて (iite)"
                              }
                        ],
                        "correctAnswerId": "te-iku-exc",
                        "explanation": "「行く」(いく) es la única excepción de los verbos en -ku: cambia a 「いって」."
                  }
            ]
      },
      {
            "id": "l6-node-2",
            "unitId": 6,
            "lessonNumber": 6,
            "title": "Pedir Favores: 〜てください",
            "japaneseTitle": "依頼表現（〜てください）",
            "description": "Por favor come, por favor lee, por favor escucha atentamente",
            "icon": "MessageSquare",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-6-2-1",
                        "type": "multiple-choice",
                        "prompt": "El profesor Yamashita le pide a los alumnos: \"Por favor abran la página 10\". ¿Cómo se construye?",
                        "options": [
                              {
                                    "id": "te-kuda-rule",
                                    "text": "Verbo en forma Te + ください (あけてください)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "te-kuda-masu",
                                    "text": "Verbo en forma Masu + ください"
                              },
                              {
                                    "id": "te-kuda-plain",
                                    "text": "Verbo diccionario + ください"
                              }
                        ],
                        "correctAnswerId": "te-kuda-rule",
                        "explanation": "Forma Te + ください es la petición educada estándar."
                  },
                  {
                        "id": "ex-6-2-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la petición: \"Por favor habla despacio / lento\":",
                        "japaneseVoiceText": "ゆっくりはなしてください",
                        "wordBank": [
                              "ゆっくり",
                              "はなして",
                              "ください",
                              "はなす",
                              "を",
                              "ちょっと"
                        ],
                        "correctSentence": [
                              "ゆっくり",
                              "はなして",
                              "ください"
                        ],
                        "explanation": "Yukkuri hanashite kudasai."
                  },
                  {
                        "id": "ex-6-2-3",
                        "type": "listening",
                        "prompt": "Escucha el favor que solicita el audio:",
                        "japaneseVoiceText": "ちょっとまってください",
                        "options": [
                              {
                                    "id": "l6-wait",
                                    "text": "Por favor espera un momento (Chotto matte kudasai).",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l6-look",
                                    "text": "Por favor mira aquí."
                              },
                              {
                                    "id": "l6-eat",
                                    "text": "Por favor come un poco."
                              }
                        ],
                        "correctAnswerId": "l6-wait",
                        "explanation": "まつ ➔ まって + ください (Chotto matte kudasai)."
                  }
            ]
      },
      {
            "id": "l6-node-3",
            "unitId": 6,
            "lessonNumber": 6,
            "title": "Permiso y Prohibición: 〜てもいい vs 〜てはいけない",
            "japaneseTitle": "許可（〜てもいい）と 禁止（〜てはいけない）",
            "description": "¿Puedo tomar fotos? (〜てもいいですか) vs No debes fumar (〜てはいけません)",
            "icon": "ShieldAlert",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-6-3-1",
                        "type": "multiple-choice",
                        "prompt": "Estás en un museo y preguntas cortésmente: \"¿Puedo tomar una foto?\". ¿Cuál usas?",
                        "options": [
                              {
                                    "id": "perm-shashin",
                                    "text": "しゃしんをとってもいいですか。(Shashin o totte mo ii desu ka)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "perm-kudasai",
                                    "text": "しゃしんをとってください。"
                              },
                              {
                                    "id": "perm-dame",
                                    "text": "しゃしんをとってはいけません。"
                              }
                        ],
                        "correctAnswerId": "perm-shashin",
                        "explanation": "Forma Te + もいいですか = \"¿Está bien si hago...? / ¿Puedo...?\"."
                  },
                  {
                        "id": "ex-6-3-2",
                        "type": "multiple-choice",
                        "prompt": "Ves a alguien intentando entrar a una zona prohibida. ¿Cómo expresas prohibición estricta?",
                        "options": [
                              {
                                    "id": "prohib-wa",
                                    "text": "ここに入ってはいけません。(Haitte wa ikemasen - No debes entrar)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "prohib-ii",
                                    "text": "入ってもいいです"
                              },
                              {
                                    "id": "prohib-kuda",
                                    "text": "入ってください"
                              }
                        ],
                        "correctAnswerId": "prohib-wa",
                        "explanation": "Forma Te + はいけません = \"No debes... / Está prohibido...\"."
                  },
                  {
                        "id": "ex-6-3-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"¿Puedo ver este libro?\":",
                        "japaneseVoiceText": "このほんをみてもいいですか",
                        "wordBank": [
                              "このほん",
                              "を",
                              "みて",
                              "もいいですか",
                              "はいけません",
                              "は"
                        ],
                        "correctSentence": [
                              "このほん",
                              "を",
                              "みて",
                              "もいいですか"
                        ],
                        "explanation": "Kono hon o mite mo ii desu ka."
                  }
            ]
      },
      {
            "id": "l6-node-4",
            "unitId": 6,
            "lessonNumber": 6,
            "title": "Conectar Acciones en Secuencia: V1-て, V2-て...",
            "japaneseTitle": "動作の連続（〜て、〜て、〜ます）",
            "description": "Me levanté a las 7, desayuné y luego fui a la escuela",
            "icon": "ArrowRight",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-6-4-1",
                        "type": "multiple-choice",
                        "prompt": "Al conectar varias acciones con la forma Te, ¿dónde se marca el tiempo verbal (presente o pasado)?",
                        "options": [
                              {
                                    "id": "seq-tense-last",
                                    "text": "Solo en el ÚLTIMO verbo de la oración (los anteriores quedan en forma Te)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "seq-tense-all",
                                    "text": "En cada uno de los verbos se pone 〜ました"
                              },
                              {
                                    "id": "seq-tense-first",
                                    "text": "Solo en el primer verbo"
                              }
                        ],
                        "correctAnswerId": "seq-tense-last",
                        "explanation": "Regla fundamental: La forma Te no tiene tiempo; el tiempo final lo define el último verbo."
                  },
                  {
                        "id": "ex-6-4-2",
                        "type": "word-order",
                        "prompt": "Arma la rutina secuencial: \"Ayer me levanté a las 6:00, comí pan y fui a la universidad\":",
                        "japaneseVoiceText": "きのうろくじにおきてパンをたべてだいがくへいきました",
                        "wordBank": [
                              "きのう",
                              "ろくじ",
                              "に",
                              "おきて",
                              "パン",
                              "を",
                              "たべて",
                              "だいがく",
                              "へ",
                              "いきました"
                        ],
                        "correctSentence": [
                              "きのう",
                              "ろくじ",
                              "に",
                              "おきて",
                              "パン",
                              "を",
                              "たべて",
                              "だいがく",
                              "へ",
                              "いきました"
                        ],
                        "explanation": "Kinou rokuji ni okite pan o tabete daigaku e ikimashita."
                  },
                  {
                        "id": "ex-6-4-3",
                        "type": "listening",
                        "prompt": "Escucha las acciones que realizó Robert:",
                        "japaneseVoiceText": "としょかんへいってほんをかりました",
                        "options": [
                              {
                                    "id": "l6-lib-seq",
                                    "text": "Fue a la biblioteca y pidió prestado un libro.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l6-lib-ret",
                                    "text": "Fue a la biblioteca a devolver un libro."
                              },
                              {
                                    "id": "l6-lib-buy",
                                    "text": "Fue a la librería a comprar un libro."
                              }
                        ],
                        "correctAnswerId": "l6-lib-seq",
                        "explanation": "Toshokan e itte hon o karimashita."
                  }
            ]
      },
      {
            "id": "l6-node-5",
            "unitId": 6,
            "lessonNumber": 6,
            "title": "Causa y Razón: 〜から",
            "japaneseTitle": "理由の「から」（〜ですから / 〜から）",
            "description": "Explicar por qué haces algo: \"Porque tengo examen mañana...\"",
            "icon": "Lightbulb",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-6-5-1",
                        "type": "multiple-choice",
                        "prompt": "En japonés, ¿en qué orden se pone la causa y el resultado con 「から」?",
                        "options": [
                              {
                                    "id": "kara-order",
                                    "text": "[Causa / Razón] から、[Resultado / Acción]",
                                    "isCorrect": true
                              },
                              {
                                    "id": "kara-inv",
                                    "text": "[Resultado] から、[Causa]"
                              }
                        ],
                        "correctAnswerId": "kara-order",
                        "explanation": "En japonés siempre se enuncia la razón primero: \"Porque X, haré Y\"."
                  },
                  {
                        "id": "ex-6-5-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Porque mañana tengo examen, hoy estudiaré en casa\":",
                        "japaneseVoiceText": "あしたテストがありますからきょういえでべんきょうします",
                        "wordBank": [
                              "あした",
                              "テスト",
                              "が",
                              "ありますから",
                              "きょう",
                              "いえ",
                              "で",
                              "べんきょうします",
                              "に"
                        ],
                        "correctSentence": [
                              "あした",
                              "テスト",
                              "が",
                              "ありますから",
                              "きょう",
                              "いえ",
                              "で",
                              "べんきょうします"
                        ],
                        "explanation": "Ashita tesuto ga arimasu kara kyou ie de benkyou shimasu."
                  },
                  {
                        "id": "ex-6-5-3",
                        "type": "listening",
                        "prompt": "Escucha la razón por la que Robert se va a dormir temprano:",
                        "japaneseVoiceText": "つかれましたから、はやくねます",
                        "options": [
                              {
                                    "id": "l6-tired",
                                    "text": "Porque está cansado, se dormirá temprano.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l6-sick",
                                    "text": "Porque está enfermo, irá al hospital."
                              },
                              {
                                    "id": "l6-bored",
                                    "text": "Porque está aburrido, saldrá a caminar."
                              }
                        ],
                        "correctAnswerId": "l6-tired",
                        "explanation": "Tsukaremashita kara, hayaku nemasu."
                  }
            ]
      },
      {
            "id": "l6-node-6",
            "unitId": 6,
            "lessonNumber": 6,
            "title": "Workbook: Integración Lección 6",
            "japaneseTitle": "ワークブック：第６課 総合問題",
            "description": "Evaluación final de la forma Te, secuencias, favores y permisos",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-6-6-1",
                        "type": "word-order",
                        "prompt": "Arma la oración del diálogo de Robert: \"¿Puedo prestarte mi dinero? (¿Te presto dinero?)\":",
                        "japaneseVoiceText": "おかねをかしましょうか",
                        "wordBank": [
                              "おかね",
                              "を",
                              "かしましょうか",
                              "かりましょうか",
                              "は"
                        ],
                        "correctSentence": [
                              "おかね",
                              "を",
                              "かしましょうか"
                        ],
                        "explanation": "Okane o kashimashou ka (Ofreciendo prestar dinero)."
                  },
                  {
                        "id": "ex-6-6-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los verbos en forma Masu con su forma Te irregular:",
                        "pairs": [
                              {
                                    "id": "tp-irr1",
                                    "left": "します (hacer)",
                                    "right": "して"
                              },
                              {
                                    "id": "tp-irr2",
                                    "left": "きます (venir)",
                                    "right": "きて"
                              },
                              {
                                    "id": "tp-irr3",
                                    "left": "いきます (ir)",
                                    "right": "いって"
                              },
                              {
                                    "id": "tp-irr4",
                                    "left": "かえります (regresar)",
                                    "right": "かえって"
                              }
                        ],
                        "explanation": "Formas Te indispensables para dominar Genki L6."
                  },
                  {
                        "id": "ex-6-6-3",
                        "type": "listening",
                        "prompt": "Escucha las instrucciones del profesor en el aula:",
                        "japaneseVoiceText": "きょうかしょをあけて、よんでください",
                        "options": [
                              {
                                    "id": "l6-cls-cmd",
                                    "text": "Abran el libro de texto y lean, por favor.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l6-cls-wr",
                                    "text": "Abran el cuaderno y escriban, por favor."
                              },
                              {
                                    "id": "l6-cls-lst",
                                    "text": "Cierren el libro y escuchen el audio."
                              }
                        ],
                        "correctAnswerId": "l6-cls-cmd",
                        "explanation": "Kyoukasho o akete, yonde kudasai."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 7: GENKI LECCIÓN 7: FOTO FAMILIAR
  // ==========================================
  {
    id: 7,
    genkiBook: 'Genki I',
    title: 'Genki Lección 7: Foto Familiar',
    subtitle: 'Acciones en Curso (〜ています) y Descripciones',
    description: 'Aprende a describir la familia, estados continuos y apariencias físicas.',
    themeColor: '#ff9600',
    nodes: [
      {
            "id": "l7-node-1",
            "unitId": 7,
            "lessonNumber": 7,
            "title": "Vocabulario: Familia y Términos de Respeto",
            "japaneseTitle": "かぞくのたんご（内と外）",
            "description": "Mi familia (humilde) vs La familia de otros (respetuosa)",
            "icon": "Users",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-7-1-1",
                        "type": "match-pairs",
                        "prompt": "Empareja los términos para tu propia familia (Uchi / humilde):",
                        "pairs": [
                              {
                                    "id": "fm1",
                                    "left": "ちち (父)",
                                    "right": "Mi padre"
                              },
                              {
                                    "id": "fm2",
                                    "left": "はは (母)",
                                    "right": "Mi madre"
                              },
                              {
                                    "id": "fm3",
                                    "left": "あに (兄)",
                                    "right": "Mi hermano mayor"
                              },
                              {
                                    "id": "fm4",
                                    "left": "あね (姉)",
                                    "right": "Mi hermana mayor"
                              }
                        ],
                        "explanation": "Para hablar de tu familia con extraños se usan términos humildes."
                  },
                  {
                        "id": "ex-7-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los términos respetuosos para la familia de otros (Soto):",
                        "pairs": [
                              {
                                    "id": "fm5",
                                    "left": "おとうさん",
                                    "right": "El padre de alguien / Papá"
                              },
                              {
                                    "id": "fm6",
                                    "left": "おかあさん",
                                    "right": "La madre de alguien / Mamá"
                              },
                              {
                                    "id": "fm7",
                                    "left": "おにいさん",
                                    "right": "El hermano mayor de alguien"
                              },
                              {
                                    "id": "fm8",
                                    "left": "おねえさん",
                                    "right": "La hermana mayor de alguien"
                              }
                        ],
                        "explanation": "Términos honoríficos con お y さん."
                  },
                  {
                        "id": "ex-7-1-3",
                        "type": "listening",
                        "prompt": "Escucha qué pariente se menciona en el audio:",
                        "japaneseVoiceText": "いもうと",
                        "options": [
                              {
                                    "id": "l7-sis",
                                    "text": "Hermana menor (いもうと)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l7-bro",
                                    "text": "Hermano menor (おとうと)"
                              },
                              {
                                    "id": "l7-mom",
                                    "text": "Madre (はは)"
                              }
                        ],
                        "correctAnswerId": "l7-sis",
                        "explanation": "妹 (いもうと / imouto) = hermana menor."
                  }
            ]
      },
      {
            "id": "l7-node-2",
            "unitId": 7,
            "lessonNumber": 7,
            "title": "Acciones en Progreso: 〜ています",
            "japaneseTitle": "現在進行（〜ています）",
            "description": "Estoy comiendo, estoy leyendo, está lloviendo en este momento",
            "icon": "Activity",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-7-2-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se expresa una acción que está ocurriendo en este instante (presente continuo)?",
                        "options": [
                              {
                                    "id": "te-iru-rule",
                                    "text": "Forma Te del verbo + います (ej. たべています)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "te-iru-masu",
                                    "text": "Forma Masu + います"
                              },
                              {
                                    "id": "te-iru-desu",
                                    "text": "Forma Te + です"
                              }
                        ],
                        "correctAnswerId": "te-iru-rule",
                        "explanation": "Verbo en forma Te + います expresa acción continua (\"estar haciendo\")."
                  },
                  {
                        "id": "ex-7-2-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Ahora estoy leyendo un libro en mi habitación\":",
                        "japaneseVoiceText": "いまいえでほんをよんでいます",
                        "wordBank": [
                              "いま",
                              "いえ",
                              "で",
                              "ほん",
                              "を",
                              "よんでいます",
                              "よみます",
                              "に"
                        ],
                        "correctSentence": [
                              "いま",
                              "いえ",
                              "で",
                              "ほん",
                              "を",
                              "よんでいます"
                        ],
                        "explanation": "Ima ie de hon o yonde imasu."
                  },
                  {
                        "id": "ex-7-2-3",
                        "type": "listening",
                        "prompt": "Escucha qué está haciendo Takeshi ahora mismo:",
                        "japaneseVoiceText": "たけしさんはテレビをみています",
                        "options": [
                              {
                                    "id": "l7-act-tv",
                                    "text": "Takeshi está viendo televisión.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l7-act-slp",
                                    "text": "Takeshi está durmiendo."
                              },
                              {
                                    "id": "l7-act-stu",
                                    "text": "Takeshi está estudiando."
                              }
                        ],
                        "correctAnswerId": "l7-act-tv",
                        "explanation": "Takeshi-san wa terebi o mite imasu."
                  }
            ]
      },
      {
            "id": "l7-node-3",
            "unitId": 7,
            "lessonNumber": 7,
            "title": "Estados Resultantes: 〜ています",
            "japaneseTitle": "状態の継続（結婚しています・知っています・住んでいます）",
            "description": "Estar casado, saber/conocer y residir: la trampa de Genki",
            "icon": "CheckCircle2",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-7-3-1",
                        "type": "multiple-choice",
                        "prompt": "Para decir que alguien \"está casado\" en japonés, ¿qué forma se usa?",
                        "options": [
                              {
                                    "id": "st-kek",
                                    "text": "けっこんしています (kekkon shite imasu - estado continuo)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "st-kek-m",
                                    "text": "けっこんします (se casará en el futuro)"
                              },
                              {
                                    "id": "st-kek-d",
                                    "text": "けっこんです"
                              }
                        ],
                        "correctAnswerId": "st-kek",
                        "explanation": "Casarse es un cambio de estado; estar casado es el estado continuo 〜ています."
                  },
                  {
                        "id": "ex-7-3-2",
                        "type": "multiple-choice",
                        "prompt": "¡Gran trampa de Genki! Si te preguntan si conoces al profesor Yamashita y NO lo conoces, ¿qué respondes?",
                        "options": [
                              {
                                    "id": "st-shir-neg",
                                    "text": "しりません (shirimasen - ¡NUNCA shitte imasen!)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "st-shir-te",
                                    "text": "しっていません"
                              }
                        ],
                        "correctAnswerId": "st-shir-neg",
                        "explanation": "Saber se dice 「しっています」, pero \"no saber\" es la famosa excepción 「しりません」."
                  },
                  {
                        "id": "ex-7-3-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Vivo en Tokio\":",
                        "japaneseVoiceText": "とうきょうにすんでいます",
                        "wordBank": [
                              "とうきょう",
                              "に",
                              "すんでいます",
                              "で",
                              "すみます",
                              "を"
                        ],
                        "correctSentence": [
                              "とうきょう",
                              "に",
                              "すんでいます"
                        ],
                        "explanation": "Tokyo ni sunde imasu."
                  }
            ]
      },
      {
            "id": "l7-node-4",
            "unitId": 7,
            "lessonNumber": 7,
            "title": "Descripción Física: [Persona] は [Parte] が [Adjetivo]",
            "japaneseTitle": "身体の特徴（目が大きい・背が高い）",
            "description": "Ojos grandes, cabello largo y estatura alta",
            "icon": "Smile",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-7-4-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se dice \"Mary es alta de estatura\" en japonés correcto de Genki?",
                        "options": [
                              {
                                    "id": "desc-se",
                                    "text": "メアリーさんは せが たかいです (Mary-san wa se ga takai desu)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "desc-se-wa",
                                    "text": "メアリーさんは たかいです"
                              },
                              {
                                    "id": "desc-se-no",
                                    "text": "メアリーさんのせは たかいです"
                              }
                        ],
                        "correctAnswerId": "desc-se",
                        "explanation": "Estructura canónica: Sujeto は Parte del cuerpo が Adjetivo です."
                  },
                  {
                        "id": "ex-7-4-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Takeshi tiene el cabello corto\":",
                        "japaneseVoiceText": "たけしさんはかみがみじかいです",
                        "wordBank": [
                              "たけしさん",
                              "は",
                              "かみ",
                              "が",
                              "みじかいです",
                              "を",
                              "ながいです"
                        ],
                        "correctSentence": [
                              "たけしさん",
                              "は",
                              "かみ",
                              "が",
                              "みじかいです"
                        ],
                        "explanation": "Takeshi-san wa kami ga mijikai desu."
                  },
                  {
                        "id": "ex-7-4-3",
                        "type": "listening",
                        "prompt": "Escucha los rasgos de la persona descrita:",
                        "japaneseVoiceText": "めがおおきくて、とてもかわいいです",
                        "options": [
                              {
                                    "id": "l7-eyes-cute",
                                    "text": "Tiene ojos grandes y es muy linda.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l7-hair-tall",
                                    "text": "Tiene cabello largo y es muy alta."
                              },
                              {
                                    "id": "l7-eyes-sm",
                                    "text": "Tiene ojos pequeños y es seria."
                              }
                        ],
                        "correctAnswerId": "l7-eyes-cute",
                        "explanation": "Me ga ookikute, totemo kawaii desu."
                  }
            ]
      },
      {
            "id": "l7-node-5",
            "unitId": 7,
            "lessonNumber": 7,
            "title": "Conectar Adjetivos: Forma Te",
            "japaneseTitle": "形容詞のて形（安くておいしい・静かで綺麗）",
            "description": "Cómo unir varios adjetivos: \"barato Y rico\", \"tranquilo Y hermoso\"",
            "icon": "Sparkles",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-7-5-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se une el い-adjetivo 「やすい」(barato) con otro adjetivo (\"barato y rico\")?",
                        "options": [
                              {
                                    "id": "i-te-rule",
                                    "text": "Se quita い y se pone くて (やすくて おいしい)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "i-te-to",
                                    "text": "やすい と おいしい"
                              },
                              {
                                    "id": "i-te-de",
                                    "text": "やすいで おいしい"
                              }
                        ],
                        "correctAnswerId": "i-te-rule",
                        "explanation": "Forma Te de い-adjetivo: い ➔ くて. ¡「と」 nunca une adjetivos!"
                  },
                  {
                        "id": "ex-7-5-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se une el な-adjetivo 「しずか」(tranquilo) con otro adjetivo?",
                        "options": [
                              {
                                    "id": "na-te-rule",
                                    "text": "Se le añade で (しずかで きれい)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "na-te-kute",
                                    "text": "しずかくて きれい"
                              },
                              {
                                    "id": "na-te-to",
                                    "text": "しずか と きれい"
                              }
                        ],
                        "correctAnswerId": "na-te-rule",
                        "explanation": "Forma Te de な-adjetivo / sustantivo: se añade 「で」."
                  },
                  {
                        "id": "ex-7-5-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Ese restaurante es barato y delicioso\":",
                        "japaneseVoiceText": "そのレストランはやすくておいしいです",
                        "wordBank": [
                              "そのレストラン",
                              "は",
                              "やすくて",
                              "おいしいです",
                              "やすいと",
                              "きれい"
                        ],
                        "correctSentence": [
                              "そのレストラン",
                              "は",
                              "やすくて",
                              "おいしいです"
                        ],
                        "explanation": "Sono resutoran wa yasukute oishii desu."
                  }
            ]
      },
      {
            "id": "l7-node-6",
            "unitId": 7,
            "lessonNumber": 7,
            "title": "Workbook: Integración Lección 7",
            "japaneseTitle": "ワークブック：第７課 総合問題",
            "description": "Evaluación final de acciones en curso, familia y descripciones físicas",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-7-6-1",
                        "type": "listening",
                        "prompt": "Escucha la descripción de la foto familiar:",
                        "japaneseVoiceText": "あねはけっこんしていて、とうきょうにすんでいます",
                        "options": [
                              {
                                    "id": "l7-sis-mar",
                                    "text": "Mi hermana mayor está casada y vive en Tokio.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l7-sis-stu",
                                    "text": "Mi hermana mayor es estudiante y vive en Kioto."
                              },
                              {
                                    "id": "l7-sis-sgl",
                                    "text": "Mi hermana mayor no está casada."
                              }
                        ],
                        "correctAnswerId": "l7-sis-mar",
                        "explanation": "Ane wa kekkon shite ite, Tokyo ni sunde imasu."
                  },
                  {
                        "id": "ex-7-6-2",
                        "type": "word-order",
                        "prompt": "Arma la oración del Workbook: \"El profesor Yamashita enseña japonés en la universidad\":",
                        "japaneseVoiceText": "やましたせんせいはだいがくでにほんごをおしえています",
                        "wordBank": [
                              "やましたせんせい",
                              "は",
                              "だいがく",
                              "で",
                              "にほんご",
                              "を",
                              "おしえています",
                              "に"
                        ],
                        "correctSentence": [
                              "やましたせんせい",
                              "は",
                              "だいがく",
                              "で",
                              "にほんご",
                              "を",
                              "おしえています"
                        ],
                        "explanation": "Yamashita-sensei wa daigaku de nihongo o oshiete imasu."
                  },
                  {
                        "id": "ex-7-6-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los contadores de personas de Genki L7:",
                        "pairs": [
                              {
                                    "id": "cnt1",
                                    "left": "ひとり (一人)",
                                    "right": "1 persona (irregular)"
                              },
                              {
                                    "id": "cnt2",
                                    "left": "ふたり (二人)",
                                    "right": "2 personas (irregular)"
                              },
                              {
                                    "id": "cnt3",
                                    "left": "さんにん (三人)",
                                    "right": "3 personas"
                              },
                              {
                                    "id": "cnt4",
                                    "left": "よにん (四人)",
                                    "right": "4 personas (irregular fonético)"
                              }
                        ],
                        "explanation": "Contadores esenciales de personas."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 8: GENKI LECCIÓN 8: BARBECUE
  // ==========================================
  {
    id: 8,
    genkiBook: 'Genki I',
    title: 'Genki Lección 8: Barbecue',
    subtitle: 'Estilo Informal (Forma Corta) y Opiniones',
    description: 'Habla de forma casual, cita a otras personas y expresa opiniones con 〜と思います.',
    themeColor: '#ce82ff',
    nodes: [
      {
            "id": "l8-node-1",
            "unitId": 8,
            "lessonNumber": 8,
            "title": "Estilo Informal: La Forma Corta (普通体)",
            "japaneseTitle": "普通形（ショートフォーム）のルール",
            "description": "Cómo hablar casualmente entre amigos y la base de la gramática avanzada",
            "icon": "MessageCircle",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-8-1-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cuál es la forma corta presente afirmativa de cualquier verbo (ej. 食べる)?",
                        "options": [
                              {
                                    "id": "sf-dic",
                                    "text": "Su forma de diccionario original: 食べる (taberu)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "sf-masu",
                                    "text": "食べます"
                              },
                              {
                                    "id": "sf-te",
                                    "text": "食べて"
                              }
                        ],
                        "correctAnswerId": "sf-dic",
                        "explanation": "La forma corta afirmativa presente es exactamente la forma de diccionario."
                  },
                  {
                        "id": "ex-8-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja el verbo educado con su forma corta informal de diccionario:",
                        "pairs": [
                              {
                                    "id": "sfp1",
                                    "left": "のみます",
                                    "right": "のむ (beber)"
                              },
                              {
                                    "id": "sfp2",
                                    "left": "いきます",
                                    "right": "いく (ir)"
                              },
                              {
                                    "id": "sfp3",
                                    "left": "します",
                                    "right": "する (hacer)"
                              },
                              {
                                    "id": "sfp4",
                                    "left": "きます",
                                    "right": "くる (venir)"
                              }
                        ],
                        "explanation": "Correspondencia educada e informal."
                  },
                  {
                        "id": "ex-8-1-3",
                        "type": "listening",
                        "prompt": "Escucha el verbo informal en conversación casual:",
                        "japaneseVoiceText": "あしたどこにいく？",
                        "options": [
                              {
                                    "id": "l8-cas-go",
                                    "text": "¿A dónde vas mañana? (casual entre amigos)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l8-cas-eat",
                                    "text": "¿Qué vas a comer mañana?"
                              },
                              {
                                    "id": "l8-cas-who",
                                    "text": "¿Con quién vas mañana?"
                              }
                        ],
                        "correctAnswerId": "l8-cas-go",
                        "explanation": "Ashita doko ni iku?"
                  }
            ]
      },
      {
            "id": "l8-node-2",
            "unitId": 8,
            "lessonNumber": 8,
            "title": "Negación Informal: La Forma 〜ない",
            "japaneseTitle": "ない形（現在の否定ショートフォーム）",
            "description": "No como (たべない), no bebo (のまない), no voy (いかない)",
            "icon": "ShieldAlert",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-8-2-1",
                        "type": "multiple-choice",
                        "prompt": "Para los U-verbs (ej. 書く / kaku), ¿cómo se forma el negativo informal 〜ない?",
                        "options": [
                              {
                                    "id": "nai-u-rule",
                                    "text": "El sonido final \"-u\" cambia a la fila \"-a\" + ない (かく ➔ かかない)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "nai-u-i",
                                    "text": "Cambia a \"-i\" + ない (かきない)"
                              },
                              {
                                    "id": "nai-u-ru",
                                    "text": "Se quita el sonido y se pone ない"
                              }
                        ],
                        "correctAnswerId": "nai-u-rule",
                        "explanation": "U-verbs: columna -u ➔ columna -a + ない (のむ ➔ のまない, いく ➔ いかない)."
                  },
                  {
                        "id": "ex-8-2-2",
                        "type": "match-pairs",
                        "prompt": "Empareja las formas ない de los verbos clave:",
                        "pairs": [
                              {
                                    "id": "np1",
                                    "left": "たべる (Ru-verb)",
                                    "right": "たべない (no comer)"
                              },
                              {
                                    "id": "np2",
                                    "left": "はなす (U-verb)",
                                    "right": "はなさない (no hablar)"
                              },
                              {
                                    "id": "np3",
                                    "left": "する (Irregular)",
                                    "right": "しない (no hacer)"
                              },
                              {
                                    "id": "np4",
                                    "left": "くる (Irregular)",
                                    "right": "こない (no venir - ¡ojo con la lectura ko!)"
                              }
                        ],
                        "explanation": "くる cambia su lectura a こない."
                  },
                  {
                        "id": "ex-8-2-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés en estilo informal: \"Hoy no tomaré café\":",
                        "japaneseVoiceText": "きょうコーヒーをのまない",
                        "wordBank": [
                              "きょう",
                              "コーヒー",
                              "を",
                              "のまない",
                              "のみません",
                              "は"
                        ],
                        "correctSentence": [
                              "きょう",
                              "コーヒー",
                              "を",
                              "のまない"
                        ],
                        "explanation": "Kyou koohii o nomanai."
                  }
            ]
      },
      {
            "id": "l8-node-3",
            "unitId": 8,
            "lessonNumber": 8,
            "title": "Opinar con 〜と思います: \"Creo que...\"",
            "japaneseTitle": "意見の表現（〜とおもいます）",
            "description": "Pienso que es caro, creo que vendrá mañana: expresar opiniones personales",
            "icon": "Lightbulb",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-8-3-1",
                        "type": "multiple-choice",
                        "prompt": "¿Qué forma verbal debe usarse inmediatamente ANTES de 「〜と思います」(Pienso que...)?",
                        "options": [
                              {
                                    "id": "omo-form",
                                    "text": "SIEMPRE la forma corta informal (ショートフォーム)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "omo-masu",
                                    "text": "La forma educada 〜ます"
                              },
                              {
                                    "id": "omo-te",
                                    "text": "La forma Te"
                              }
                        ],
                        "correctAnswerId": "omo-form",
                        "explanation": "En japonés las cláusulas subordinadas antes de と siempre van en forma corta."
                  },
                  {
                        "id": "ex-8-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Pienso que el idioma japonés es interesante\":",
                        "japaneseVoiceText": "にほんごはおもしろいとおもいます",
                        "wordBank": [
                              "にほんご",
                              "は",
                              "おもしろい",
                              "とおもいます",
                              "おもしろいです",
                              "を"
                        ],
                        "correctSentence": [
                              "にほんご",
                              "は",
                              "おもしろい",
                              "とおもいます"
                        ],
                        "explanation": "Nihongo wa omoshiroi to omoimasu."
                  },
                  {
                        "id": "ex-8-3-3",
                        "type": "listening",
                        "prompt": "Escucha la opinión que expresa Mary sobre Takeshi:",
                        "japaneseVoiceText": "たけしさんはやさしいとおもいます",
                        "options": [
                              {
                                    "id": "l8-tak-kind",
                                    "text": "Pienso que Takeshi es muy amable/atento.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l8-tak-busy",
                                    "text": "Pienso que Takeshi está ocupado."
                              },
                              {
                                    "id": "l8-tak-late",
                                    "text": "Pienso que Takeshi llegará tarde."
                              }
                        ],
                        "correctAnswerId": "l8-tak-kind",
                        "explanation": "Takeshi-san wa yasashii to omoimasu."
                  }
            ]
      },
      {
            "id": "l8-node-4",
            "unitId": 8,
            "lessonNumber": 8,
            "title": "Discurso Indirecto: 〜と言っていました",
            "japaneseTitle": "引用（〜といっていました：dijo que...）",
            "description": "Citar lo que otra persona dijo: \"Robert dijo que no come carne\"",
            "icon": "MessageSquare",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-8-4-1",
                        "type": "multiple-choice",
                        "prompt": "Robert dijo: 「私は肉を食べません」. ¿Cómo lo citas indirectamente?",
                        "options": [
                              {
                                    "id": "quote-cor",
                                    "text": "ロバートさんは 肉を食べない と言っていました (en forma corta ない)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "quote-masu",
                                    "text": "ロバートさんは 肉を食べません と言っていました"
                              }
                        ],
                        "correctAnswerId": "quote-cor",
                        "explanation": "Al citar indirectamente, la oración se pasa a forma corta (たべない)."
                  },
                  {
                        "id": "ex-8-4-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Mary dijo que mañana irá a Tokio\":",
                        "japaneseVoiceText": "メアリーさんはあしたとうきょうへいくといっていました",
                        "wordBank": [
                              "メアリーさん",
                              "は",
                              "あした",
                              "とうきょう",
                              "へ",
                              "いく",
                              "といっていました",
                              "いきます"
                        ],
                        "correctSentence": [
                              "メアリーさん",
                              "は",
                              "あした",
                              "とうきょう",
                              "へ",
                              "いく",
                              "といっていました"
                        ],
                        "explanation": "Mary-san wa ashita Tokyo e iku to itte imashita."
                  },
                  {
                        "id": "ex-8-4-3",
                        "type": "listening",
                        "prompt": "Escucha qué dijo el profesor Yamashita:",
                        "japaneseVoiceText": "あしたテストはないといっていました",
                        "options": [
                              {
                                    "id": "l8-test-none",
                                    "text": "Dijo que mañana no habrá examen.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l8-test-hard",
                                    "text": "Dijo que el examen será difícil."
                              },
                              {
                                    "id": "l8-test-post",
                                    "text": "Dijo que el examen se canceló."
                              }
                        ],
                        "correctAnswerId": "l8-test-none",
                        "explanation": "Ashita tesuto wa nai to itte imashita."
                  }
            ]
      },
      {
            "id": "l8-node-5",
            "unitId": 8,
            "lessonNumber": 8,
            "title": "Peticiones Negativas: 〜ないでください",
            "japaneseTitle": "否定の依頼（〜ないでください：Por favor no hagas...）",
            "description": "Por favor no tomes fotos, por favor no olvides tu pasaporte",
            "icon": "ShieldAlert",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-8-5-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se construye la frase para pedir cortésmente que NO hagan algo?",
                        "options": [
                              {
                                    "id": "naide-rule",
                                    "text": "Verbo en forma ない + でください (ej. 行かないでください)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "naide-te",
                                    "text": "Forma Te + ないでください"
                              },
                              {
                                    "id": "naide-masen",
                                    "text": "Forma ません + ください"
                              }
                        ],
                        "correctAnswerId": "naide-rule",
                        "explanation": "Forma ない + でください = \"Por favor no hagas...\"."
                  },
                  {
                        "id": "ex-8-5-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la advertencia en el hospital: \"Por favor no use el teléfono celular aquí\":",
                        "japaneseVoiceText": "ここででんわをつかわないでください",
                        "wordBank": [
                              "ここ",
                              "で",
                              "でんわ",
                              "を",
                              "つかわないでください",
                              "つかう",
                              "に"
                        ],
                        "correctSentence": [
                              "ここ",
                              "で",
                              "でんわ",
                              "を",
                              "つかわないでください"
                        ],
                        "explanation": "Koko de denwa o tsukawanaide kudasai."
                  },
                  {
                        "id": "ex-8-5-3",
                        "type": "listening",
                        "prompt": "Escucha la petición que hace el hablante:",
                        "japaneseVoiceText": "しゃしんをとらないでください",
                        "options": [
                              {
                                    "id": "l8-no-photo",
                                    "text": "Por favor no tome fotografías.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l8-no-enter",
                                    "text": "Por favor no entre."
                              },
                              {
                                    "id": "l8-no-eat",
                                    "text": "Por favor no coma aquí."
                              }
                        ],
                        "correctAnswerId": "l8-no-photo",
                        "explanation": "Shashin o toranaide kudasai."
                  }
            ]
      },
      {
            "id": "l8-node-6",
            "unitId": 8,
            "lessonNumber": 8,
            "title": "Workbook: Integración Lección 8",
            "japaneseTitle": "ワークブック：第８課 総合問題",
            "description": "Evaluación de estilo informal, citas, opiniones y peticiones negativas",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-8-6-1",
                        "type": "word-order",
                        "prompt": "Arma la oración completa de afición: \"Me gusta cocinar comida japonesa\":",
                        "japaneseVoiceText": "にほんりょうりをつくるのがすきです",
                        "wordBank": [
                              "にほんりょうり",
                              "を",
                              "つくる",
                              "の",
                              "が",
                              "すきです",
                              "は",
                              "つくります"
                        ],
                        "correctSentence": [
                              "にほんりょうり",
                              "を",
                              "つくる",
                              "の",
                              "が",
                              "すきです"
                        ],
                        "explanation": "Nihon ryouri o tsukuru no ga suki desu (Forma diccionario + の nominalizador)."
                  },
                  {
                        "id": "ex-8-6-2",
                        "type": "multiple-choice",
                        "prompt": "En conversación informal con amigos íntimos, ¿cómo dices \"¿Vamos?\" sin です ni ます?",
                        "options": [
                              {
                                    "id": "cas-ikou",
                                    "text": "行く？ (Iku? - con entonación ascendente y omitiendo か)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "cas-ikuka",
                                    "text": "行くか。"
                              },
                              {
                                    "id": "cas-ikimasu",
                                    "text": "行きますか。"
                              }
                        ],
                        "correctAnswerId": "cas-ikou",
                        "explanation": "En estilo informal las preguntas se hacen con forma diccionario y entonación hacia arriba."
                  },
                  {
                        "id": "ex-8-6-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los verbos formales con su forma negativa corta ない:",
                        "pairs": [
                              {
                                    "id": "np-irr1",
                                    "left": "ありません (no hay/objeto)",
                                    "right": "ない (la forma corta de ありません es simplemente ない)"
                              },
                              {
                                    "id": "np-irr2",
                                    "left": "いません (no hay/ser vivo)",
                                    "right": "いない"
                              },
                              {
                                    "id": "np-irr3",
                                    "left": "しません (no hago)",
                                    "right": "しない"
                              },
                              {
                                    "id": "np-irr4",
                                    "left": "きません (no vengo)",
                                    "right": "こない"
                              }
                        ],
                        "explanation": "Negativos informales imprescindibles."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 9: GENKI LECCIÓN 9: TEATRO KABUKI
  // ==========================================
  {
    id: 9,
    genkiBook: 'Genki I',
    title: 'Genki Lección 9: Teatro Kabuki',
    subtitle: 'Pasado Informal (〜た) y Oraciones Relativas',
    description: 'Modifica sustantivos con oraciones complejas y expresa acciones incompletas.',
    themeColor: '#2b70c9',
    nodes: [
      {
            "id": "l9-node-1",
            "unitId": 9,
            "lessonNumber": 9,
            "title": "Pasado Informal: La Forma 〜た",
            "japaneseTitle": "過去のショートフォーム（た形）",
            "description": "La forma Ta se conjuga exactamente igual que la forma Te, pero terminando en -a",
            "icon": "RotateCcw",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-9-1-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cuál es el gran truco de Genki para formar el pasado informal (Forma Ta)?",
                        "options": [
                              {
                                    "id": "ta-rule",
                                    "text": "Es idéntica a la forma Te, cambiando -te por -ta y -de por -da (たべて➔たべた, のんで➔のんだ)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ta-diff",
                                    "text": "Tiene reglas completamente distintas y arbitrarias"
                              }
                        ],
                        "correctAnswerId": "ta-rule",
                        "explanation": "Si dominas la forma Te, ¡ya dominas la forma Ta al 100%!"
                  },
                  {
                        "id": "ex-9-1-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los verbos con su forma Ta de pasado informal:",
                        "pairs": [
                              {
                                    "id": "tp-ta1",
                                    "left": "たべました (comí)",
                                    "right": "たべた"
                              },
                              {
                                    "id": "tp-ta2",
                                    "left": "のみました (bebí)",
                                    "right": "のんだ"
                              },
                              {
                                    "id": "tp-ta3",
                                    "left": "いきました (fui)",
                                    "right": "いった (excepción)"
                              },
                              {
                                    "id": "tp-ta4",
                                    "left": "しました (hice)",
                                    "right": "した"
                              }
                        ],
                        "explanation": "Forma Ta de verbos comunes."
                  },
                  {
                        "id": "ex-9-1-3",
                        "type": "listening",
                        "prompt": "Escucha la pregunta casual en pasado:",
                        "japaneseVoiceText": "きのうなにをたべた？",
                        "options": [
                              {
                                    "id": "l9-what-eat",
                                    "text": "¿Qué comiste ayer? (informal)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l9-what-buy",
                                    "text": "¿Qué compraste ayer?"
                              },
                              {
                                    "id": "l9-where-go",
                                    "text": "¿A dónde fuiste ayer?"
                              }
                        ],
                        "correctAnswerId": "l9-what-eat",
                        "explanation": "Kinou nani o tabeta?"
                  }
            ]
      },
      {
            "id": "l9-node-2",
            "unitId": 9,
            "lessonNumber": 9,
            "title": "Oraciones Relativas: Modificar Sustantivos con Verbos",
            "japaneseTitle": "名詞修飾（動詞＋名詞：Oraciones Relativas）",
            "description": "\"El libro que compré\", \"La persona que habla con Takeshi\"",
            "icon": "Layers",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-9-2-1",
                        "type": "multiple-choice",
                        "prompt": "En español decimos \"El libro [que compré ayer]\". En japonés, ¿dónde se coloca la frase calificadora?",
                        "options": [
                              {
                                    "id": "rel-before",
                                    "text": "SIEMPRE antes del sustantivo, en forma corta (きのう買った 本)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "rel-after",
                                    "text": "Después del sustantivo"
                              },
                              {
                                    "id": "rel-que",
                                    "text": "Se usa una palabra especial para \"que\""
                              }
                        ],
                        "correctAnswerId": "rel-before",
                        "explanation": "En japonés los modificadores siempre van antes: [Oración en forma corta] + Sustantivo."
                  },
                  {
                        "id": "ex-9-2-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la frase con cláusula relativa: \"La persona que está leyendo un libro es Mary\":",
                        "japaneseVoiceText": "ほんをよんでいるひとはメアリーさんです",
                        "wordBank": [
                              "ほん",
                              "を",
                              "よんでいる",
                              "ひと",
                              "は",
                              "メアリーさんです",
                              "よみます"
                        ],
                        "correctSentence": [
                              "ほん",
                              "を",
                              "よんでいる",
                              "ひと",
                              "は",
                              "メアリーさんです"
                        ],
                        "explanation": "Hon o yonde iru hito wa Mary-san desu."
                  },
                  {
                        "id": "ex-9-2-3",
                        "type": "listening",
                        "prompt": "Escucha el sustantivo modificado por una acción:",
                        "japaneseVoiceText": "きのうみたえいがはおもしろかったです",
                        "options": [
                              {
                                    "id": "l9-rel-mov",
                                    "text": "La película que vi ayer estuvo interesante.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l9-rel-bk",
                                    "text": "El libro que leí ayer estuvo aburrido."
                              },
                              {
                                    "id": "l9-rel-food",
                                    "text": "La comida que comí ayer estuvo deliciosa."
                              }
                        ],
                        "correctAnswerId": "l9-rel-mov",
                        "explanation": "Kinou mita eiga wa omoshirokatta desu."
                  }
            ]
      },
      {
            "id": "l9-node-3",
            "unitId": 9,
            "lessonNumber": 9,
            "title": "Acciones Incompletas: まだ〜ていません",
            "japaneseTitle": "まだ〜ていません（Todavía no he...）",
            "description": "Expresar que aún no has terminado algo: \"Todavía no he almorzado\"",
            "icon": "Clock",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-9-3-1",
                        "type": "multiple-choice",
                        "prompt": "Si alguien te pregunta: 「もう 昼ごはんを食べましたか」(¿Ya almorzaste?) y aún no lo has hecho, ¿qué respondes?",
                        "options": [
                              {
                                    "id": "mada-te-cor",
                                    "text": "いいえ、まだ食べていません (Iie, mada tabete imasen)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "mada-te-mash",
                                    "text": "いいえ、食べませんでした (error: significa que decidiste no comer)"
                              },
                              {
                                    "id": "mada-te-nai",
                                    "text": "まだ食べないです"
                              }
                        ],
                        "correctAnswerId": "mada-te-cor",
                        "explanation": "「まだ〜ていません」 indica que la acción no ha ocurrido todavía pero se espera hacer."
                  },
                  {
                        "id": "ex-9-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Todavía no he hecho la tarea\":",
                        "japaneseVoiceText": "まだしゅくだいをしていません",
                        "wordBank": [
                              "まだ",
                              "しゅくだい",
                              "を",
                              "していません",
                              "しませんでした",
                              "は"
                        ],
                        "correctSentence": [
                              "まだ",
                              "しゅくだい",
                              "を",
                              "していません"
                        ],
                        "explanation": "Mada shukudai o shite imasen."
                  },
                  {
                        "id": "ex-9-3-3",
                        "type": "listening",
                        "prompt": "Escucha la respuesta sobre el viaje a Kioto:",
                        "japaneseVoiceText": "まだきょうとへいっていません",
                        "options": [
                              {
                                    "id": "l9-not-yet-kyo",
                                    "text": "Todavía no he ido a Kioto.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l9-went-kyo",
                                    "text": "Ya fui a Kioto la semana pasada."
                              },
                              {
                                    "id": "l9-never-kyo",
                                    "text": "Nunca iré a Kioto."
                              }
                        ],
                        "correctAnswerId": "l9-not-yet-kyo",
                        "explanation": "Mada Kyouto e itte imasen."
                  }
            ]
      },
      {
            "id": "l9-node-4",
            "unitId": 9,
            "lessonNumber": 9,
            "title": "Workbook: Integración Lección 9",
            "japaneseTitle": "ワークブック：第９課 総合問題",
            "description": "Evaluación de oraciones relativas, pasado informal y formas Ta",
            "icon": "Award",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-9-4-1",
                        "type": "word-order",
                        "prompt": "Arma la oración completa de la obra Kabuki: \"El boleto de Kabuki que compré ayer era caro\":",
                        "japaneseVoiceText": "きのうかったかぶきのきっぷはたかかったです",
                        "wordBank": [
                              "きのう",
                              "かった",
                              "かぶき",
                              "の",
                              "きっぷ",
                              "は",
                              "たかかったです",
                              "たかいでした"
                        ],
                        "correctSentence": [
                              "きのう",
                              "かった",
                              "かぶき",
                              "の",
                              "きっぷ",
                              "は",
                              "たかかったです"
                        ],
                        "explanation": "Kinou katta kabuki no kippu wa takakatta desu."
                  },
                  {
                        "id": "ex-9-4-2",
                        "type": "match-pairs",
                        "prompt": "Empareja los términos culturales del teatro japonés de Genki L9:",
                        "pairs": [
                              {
                                    "id": "kb1",
                                    "left": "かぶき (歌舞伎)",
                                    "right": "Teatro tradicional dramático japonés"
                              },
                              {
                                    "id": "kb2",
                                    "left": "きっぷ (切符)",
                                    "right": "Boleto / Entrada"
                              },
                              {
                                    "id": "kb3",
                                    "left": "おんせん (温泉)",
                                    "right": "Aguas termales naturales"
                              },
                              {
                                    "id": "kb4",
                                    "left": "え (絵)",
                                    "right": "Pintura / Cuadro de arte"
                              }
                        ],
                        "explanation": "Vocabulario cultural de Genki L9."
                  },
                  {
                        "id": "ex-9-4-3",
                        "type": "listening",
                        "prompt": "Escucha la descripción de la persona con anteojos:",
                        "japaneseVoiceText": "めがねをかけているひとは山下先生です",
                        "options": [
                              {
                                    "id": "l9-gls-sensei",
                                    "text": "La persona que lleva anteojos/lentes es el profesor Yamashita.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l9-gls-take",
                                    "text": "La persona que lleva sombrero es Takeshi."
                              },
                              {
                                    "id": "l9-gls-mary",
                                    "text": "La persona de camisa blanca es Mary."
                              }
                        ],
                        "correctAnswerId": "l9-gls-sensei",
                        "explanation": "Megane o kakete iru hito wa Yamashita-sensei desu."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 10: GENKI LECCIÓN 10: PLANES DE VACACIONES
  // ==========================================
  {
    id: 10,
    genkiBook: 'Genki I',
    title: 'Genki Lección 10: Planes de Vacaciones',
    subtitle: 'Comparaciones (A のほうが B より) y Superlativos',
    description: 'Aprende a comparar opciones, expresar superlativos con 一番 y proyectar intenciones (〜つもり).',
    themeColor: '#ff4b4b',
    nodes: [
      {
            "id": "l10-node-1",
            "unitId": 10,
            "lessonNumber": 10,
            "title": "Comparaciones: A のほうが B より",
            "japaneseTitle": "比較表現（A のほうが B より）",
            "description": "Comparar dos elementos: \"El tren es más rápido que el autobús\"",
            "icon": "Layers",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-10-1-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se expresa la estructura \"A es más [Adjetivo] que B\" en japonés?",
                        "options": [
                              {
                                    "id": "cmp-rule",
                                    "text": "A のほうが B より [Adjetivo] です",
                                    "isCorrect": true
                              },
                              {
                                    "id": "cmp-inv",
                                    "text": "A より B のほうが [Adjetivo] です"
                              },
                              {
                                    "id": "cmp-to",
                                    "text": "A と B は [Adjetivo] です"
                              }
                        ],
                        "correctAnswerId": "cmp-rule",
                        "explanation": "「〜のほうが」 marca el elemento que tiene mayor grado y 「〜より」 marca la referencia (\"más que...\")."
                  },
                  {
                        "id": "ex-10-1-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"El tren bala es más rápido que el autobús\":",
                        "japaneseVoiceText": "しんかんせんのほうがバスよりはやいです",
                        "wordBank": [
                              "しんかんせん",
                              "のほうが",
                              "バス",
                              "より",
                              "はやいです",
                              "おそいです",
                              "は"
                        ],
                        "correctSentence": [
                              "しんかんせん",
                              "のほうが",
                              "バス",
                              "より",
                              "はやいです"
                        ],
                        "explanation": "Shinkansen no hou ga basu yori hayai desu."
                  },
                  {
                        "id": "ex-10-1-3",
                        "type": "listening",
                        "prompt": "Escucha la comparación de precios:",
                        "japaneseVoiceText": "くるまのほうがじてんしゃよりたかいです",
                        "options": [
                              {
                                    "id": "l10-car-exp",
                                    "text": "El automóvil es más caro que la bicicleta.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l10-bike-exp",
                                    "text": "La bicicleta es más cara que el automóvil."
                              },
                              {
                                    "id": "l10-same-pr",
                                    "text": "Cuestan lo mismo."
                              }
                        ],
                        "correctAnswerId": "l10-car-exp",
                        "explanation": "Kuruma no hou ga jitensha yori takai desu."
                  }
            ]
      },
      {
            "id": "l10-node-2",
            "unitId": 10,
            "lessonNumber": 10,
            "title": "Preguntar Comparaciones: どちらのほうが",
            "japaneseTitle": "比較の質問（A と B と どちら）",
            "description": "¿Cuál es más frío, Tokio o Kioto? (どちら)",
            "icon": "HelpCircle",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-10-2-1",
                        "type": "multiple-choice",
                        "prompt": "Al comparar dos opciones específicas (\"¿cuál de los dos?\"), ¿qué palabra interrogativa se usa?",
                        "options": [
                              {
                                    "id": "doch-word",
                                    "text": "どちら (dochira / formal) o どっち (dotchi / informal)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "dore-word",
                                    "text": "どれ (solo para 3 o más elementos)"
                              },
                              {
                                    "id": "doko-word",
                                    "text": "どこ"
                              }
                        ],
                        "correctAnswerId": "doch-word",
                        "explanation": "Regla de Genki: entre 2 opciones se usa どちら. どれ solo se usa entre 3 o más."
                  },
                  {
                        "id": "ex-10-2-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la pregunta: \"¿Cuál es más divertido, el verano o el invierno?\":",
                        "japaneseVoiceText": "なつとふゆとどちらのほうがたのしいですか",
                        "wordBank": [
                              "なつ",
                              "と",
                              "ふゆ",
                              "と",
                              "どちらのほうが",
                              "たのしいですか",
                              "どれ",
                              "は"
                        ],
                        "correctSentence": [
                              "なつ",
                              "と",
                              "ふゆ",
                              "と",
                              "どちらのほうが",
                              "たのしいですか"
                        ],
                        "explanation": "Natsu to fuyu to dochira no hou ga tanoshii desu ka."
                  },
                  {
                        "id": "ex-10-2-3",
                        "type": "listening",
                        "prompt": "Escucha la preferencia entre carne y pescado:",
                        "japaneseVoiceText": "にくのほうがすきです",
                        "options": [
                              {
                                    "id": "l10-pref-meat",
                                    "text": "Me gusta más la carne que el pescado.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l10-pref-fish",
                                    "text": "Me gusta más el pescado que la carne."
                              },
                              {
                                    "id": "l10-pref-veg",
                                    "text": "Prefiero las verduras."
                              }
                        ],
                        "correctAnswerId": "l10-pref-meat",
                        "explanation": "Niku no hou ga suki desu."
                  }
            ]
      },
      {
            "id": "l10-node-3",
            "unitId": 10,
            "lessonNumber": 10,
            "title": "Superlativos: 一番 (El número uno / El más)",
            "japaneseTitle": "最上級（〜の中で 一番〜）",
            "description": "De todas las estaciones, el otoño es la que más me gusta",
            "icon": "Award",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-10-3-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se dice \"el más / el número uno\" en japonés?",
                        "options": [
                              {
                                    "id": "ich-rule",
                                    "text": "一番 (いちばん / ichiban)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ich-motto",
                                    "text": "もっと"
                              },
                              {
                                    "id": "ich-totemo",
                                    "text": "とても"
                              }
                        ],
                        "correctAnswerId": "ich-rule",
                        "explanation": "「一番」(ichiban) colocado antes de un adjetivo expresa el grado superlativo absoluto."
                  },
                  {
                        "id": "ex-10-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"De todas las comidas, el sushi es el más delicioso\":",
                        "japaneseVoiceText": "たべもののなかですしがいちばんおいしいです",
                        "wordBank": [
                              "たべもの",
                              "のなかで",
                              "すし",
                              "が",
                              "いちばん",
                              "おいしいです",
                              "は",
                              "より"
                        ],
                        "correctSentence": [
                              "たべもの",
                              "のなかで",
                              "すし",
                              "が",
                              "いちばん",
                              "おいしいです"
                        ],
                        "explanation": "Tabemono no naka de sushi ga ichiban oishii desu."
                  },
                  {
                        "id": "ex-10-3-3",
                        "type": "listening",
                        "prompt": "Escucha cuál es la estación del año favorita:",
                        "japaneseVoiceText": "きせつのなかであきがいちばんすきです",
                        "options": [
                              {
                                    "id": "l10-fav-fall",
                                    "text": "De las cuatro estaciones, el otoño es mi favorita.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l10-fav-spr",
                                    "text": "De las cuatro estaciones, la primavera es mi favorita."
                              },
                              {
                                    "id": "l10-fav-sum",
                                    "text": "El verano es mi favorito."
                              }
                        ],
                        "correctAnswerId": "l10-fav-fall",
                        "explanation": "Kisetsu no naka de aki ga ichiban suki desu."
                  }
            ]
      },
      {
            "id": "l10-node-4",
            "unitId": 10,
            "lessonNumber": 10,
            "title": "Planes e Intenciones: 〜つもりだ",
            "japaneseTitle": "意図・計画（動詞辞書形＋つもりです）",
            "description": "Tengo la intención de ir a Japón / No pienso comprar ese auto",
            "icon": "Compass",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-10-4-1",
                        "type": "multiple-choice",
                        "prompt": "¿Qué forma verbal debe usarse antes de 「〜つもりです」(Tengo la intención de...)?",
                        "options": [
                              {
                                    "id": "tsu-form",
                                    "text": "Verbo en forma corta de diccionario (ej. 行く つもりです)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "tsu-masu",
                                    "text": "Verbo en forma Masu"
                              },
                              {
                                    "id": "tsu-te",
                                    "text": "Verbo en forma Te"
                              }
                        ],
                        "correctAnswerId": "tsu-form",
                        "explanation": "Forma corta + つもりです expresa planes o intenciones personales."
                  },
                  {
                        "id": "ex-10-4-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"En las vacaciones de invierno tengo la intención de regresar a mi país\":",
                        "japaneseVoiceText": "ふゆ休みにくにへかえるつもりです",
                        "wordBank": [
                              "ふゆ休みに",
                              "くに",
                              "へ",
                              "かえる",
                              "つもりです",
                              "かえります",
                              "は"
                        ],
                        "correctSentence": [
                              "ふゆ休みに",
                              "くに",
                              "へ",
                              "かえる",
                              "つもりです"
                        ],
                        "explanation": "Fuyuyasumi ni kuni e kaeru tsumori desu."
                  },
                  {
                        "id": "ex-10-4-3",
                        "type": "listening",
                        "prompt": "Escucha el plan de fin de semana que expresa Robert:",
                        "japaneseVoiceText": "こんしゅうのしゅうまつはべんきょうしないつもりです",
                        "options": [
                              {
                                    "id": "l10-no-study",
                                    "text": "Tiene la intención de NO estudiar este fin de semana.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l10-study-all",
                                    "text": "Tiene la intención de estudiar todo el fin de semana."
                              },
                              {
                                    "id": "l10-travel",
                                    "text": "Tiene la intención de viajar a Okinawa."
                              }
                        ],
                        "correctAnswerId": "l10-no-study",
                        "explanation": "Konshuu no shuumatsu wa benkyou shinai tsumori desu."
                  }
            ]
      },
      {
            "id": "l10-node-5",
            "unitId": 10,
            "lessonNumber": 10,
            "title": "Cambio de Estado con なる (Volverse / Hacerse)",
            "japaneseTitle": "変化の「なる」（〜くなる・〜になる）",
            "description": "Hacerse caluroso (あつくなる) vs Volverse famoso (ゆうめいになる)",
            "icon": "Sparkles",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-10-5-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se une el verbo 「なる」(volverse/hacerse) con un い-adjetivo como あたたかい (cálido)?",
                        "options": [
                              {
                                    "id": "naru-i-rule",
                                    "text": "Se quita la última い y se añade くなる: あたたかくなる",
                                    "isCorrect": true
                              },
                              {
                                    "id": "naru-i-ni",
                                    "text": "あたたかい に なる"
                              },
                              {
                                    "id": "naru-i-to",
                                    "text": "あたたかい と なる"
                              }
                        ],
                        "correctAnswerId": "naru-i-rule",
                        "explanation": "い-adjetivo ➔ 〜くなる / な-adjetivo o sustantivo ➔ 〜になる."
                  },
                  {
                        "id": "ex-10-5-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"En el futuro quiero ser profesor de japonés\":",
                        "japaneseVoiceText": "しょうらいにほんごのせんせいになりたいです",
                        "wordBank": [
                              "しょうらい",
                              "にほんごのせんせい",
                              "に",
                              "なりたいです",
                              "で",
                              "なります"
                        ],
                        "correctSentence": [
                              "しょうらい",
                              "にほんごのせんせい",
                              "に",
                              "なりたいです"
                        ],
                        "explanation": "Shourai nihongo no sensei ni naritai desu."
                  },
                  {
                        "id": "ex-10-5-3",
                        "type": "match-pairs",
                        "prompt": "Empareja las transformaciones con なる:",
                        "pairs": [
                              {
                                    "id": "nr1",
                                    "left": "さむい (frío)",
                                    "right": "さむくなる (enfriarse / hacerse frío)"
                              },
                              {
                                    "id": "nr2",
                                    "left": "げんき (sano)",
                                    "right": "げんきになる (recuperarse / ponerse bien)"
                              },
                              {
                                    "id": "nr3",
                                    "left": "いしゃ (médico)",
                                    "right": "いしゃになる (convertirse en médico)"
                              }
                        ],
                        "explanation": "Reglas de transformación de estado con なる."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 11: GENKI LECCIÓN 11: DESPUÉS DE VACACIONES
  // ==========================================
  {
    id: 11,
    genkiBook: 'Genki I',
    title: 'Genki Lección 11: Después de Vacaciones',
    subtitle: 'Deseos (〜たい) y Experiencias (〜ことがある)',
    description: 'Expresa lo que quieres hacer, tus experiencias de vida y listas de actividades de ejemplo.',
    themeColor: '#00cd9c',
    nodes: [
      {
            "id": "l11-node-1",
            "unitId": 11,
            "lessonNumber": 11,
            "title": "Expresar Deseos: 〜たい (Quiero hacer...)",
            "japaneseTitle": "願望（動詞のます幹＋たいです）",
            "description": "Quiero comer sushi, quiero viajar a Japón, no quiero regresar",
            "icon": "Heart",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-11-1-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se conjuga un verbo para expresar \"quiero hacer X\" en Genki?",
                        "options": [
                              {
                                    "id": "tai-rule",
                                    "text": "Raíz Masu (quitando 〜ます) + たいです (ej. たべたいです)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "tai-dic",
                                    "text": "Forma Diccionario + たいです"
                              },
                              {
                                    "id": "tai-te",
                                    "text": "Forma Te + たいです"
                              }
                        ],
                        "correctAnswerId": "tai-rule",
                        "explanation": "Se quita ます y se coloca たい. Se conjuga exactamente como un い-adjetivo."
                  },
                  {
                        "id": "ex-11-1-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Quiero ir a Japón el próximo año\":",
                        "japaneseVoiceText": "らいねんにほんへいきたいです",
                        "wordBank": [
                              "らいねん",
                              "にほん",
                              "へ",
                              "いきたいです",
                              "いきます",
                              "に",
                              "たいです"
                        ],
                        "correctSentence": [
                              "らいねん",
                              "にほん",
                              "へ",
                              "いきたいです"
                        ],
                        "explanation": "Rainen Nihon e ikitai desu."
                  },
                  {
                        "id": "ex-11-1-3",
                        "type": "match-pairs",
                        "prompt": "Empareja las 4 conjugaciones de 〜たい (igual que un い-adjetivo):",
                        "pairs": [
                              {
                                    "id": "taip1",
                                    "left": "Presente Afirmativo",
                                    "right": "いきたいです (quiero ir)"
                              },
                              {
                                    "id": "taip2",
                                    "left": "Presente Negativo",
                                    "right": "いきたくないです (no quiero ir)"
                              },
                              {
                                    "id": "taip3",
                                    "left": "Pasado Afirmativo",
                                    "right": "いきたかったです (quería ir)"
                              },
                              {
                                    "id": "taip4",
                                    "left": "Pasado Negativo",
                                    "right": "いきたくなかったです (no quería ir)"
                              }
                        ],
                        "explanation": "たい se conjuga exactamente igual que un い-adjetivo."
                  }
            ]
      },
      {
            "id": "l11-node-2",
            "unitId": 11,
            "lessonNumber": 11,
            "title": "Acciones de Ejemplo: 〜たり〜たりする",
            "japaneseTitle": "例示（〜たり〜たりします：hacer cosas como A y B）",
            "description": "Los fines de semana hago cosas como leer libros, escuchar música y limpiar",
            "icon": "ListFilter",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-11-2-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se forma la estructura 〜たり〜たりする para listar actividades de muestra?",
                        "options": [
                              {
                                    "id": "tari-rule",
                                    "text": "Forma Ta de los verbos + り + します (ej. 本を読んだり、音楽を聞いたりします)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "tari-te",
                                    "text": "Forma Te + り"
                              },
                              {
                                    "id": "tari-masu",
                                    "text": "Forma Masu + たり"
                              }
                        ],
                        "correctAnswerId": "tari-rule",
                        "explanation": "Verbo en forma Ta + り + ... + します al final."
                  },
                  {
                        "id": "ex-11-2-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"En mis días libres hago cosas como ver películas y limpiar\":",
                        "japaneseVoiceText": "やすみのひはえいがをみたりそうじしたりします",
                        "wordBank": [
                              "やすみのひは",
                              "えいがをみたり",
                              "そうじしたりします",
                              "みます",
                              "そうじします",
                              "で"
                        ],
                        "correctSentence": [
                              "やすみのひは",
                              "えいがをみたり",
                              "そうじしたりします"
                        ],
                        "explanation": "Yasumi no hi wa eiga o mitari souji shitari shimasu."
                  },
                  {
                        "id": "ex-11-2-4",
                        "type": "listening",
                        "prompt": "Escucha las actividades que realizó Mary:",
                        "japaneseVoiceText": "かいものをしたり、ともだちとおちゃをのんだりしました",
                        "options": [
                              {
                                    "id": "l11-tari-mary",
                                    "text": "Hizo cosas como compras y tomó el té con amigos.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l11-tari-study",
                                    "text": "Estudió en la biblioteca todo el día."
                              },
                              {
                                    "id": "l11-tari-trip",
                                    "text": "Viajó sola a Osaka."
                              }
                        ],
                        "correctAnswerId": "l11-tari-mary",
                        "explanation": "Kaimono o shitari, tomodachi to ocha o nondari shimashita."
                  }
            ]
      },
      {
            "id": "l11-node-3",
            "unitId": 11,
            "lessonNumber": 11,
            "title": "Experiencia Pasada: 〜ことがある",
            "japaneseTitle": "経験（動詞た形＋ことがあります：Alguna vez he...）",
            "description": "¿Alguna vez has comido natto? ¿Has subido al Monte Fuji?",
            "icon": "Award",
            "color": "blue",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-11-3-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se expresa \"He tenido la experiencia de hacer X\" en japonés?",
                        "options": [
                              {
                                    "id": "koto-rule",
                                    "text": "Verbo en forma Ta (pasado informal) + ことがあります (ej. 行った ことがあります)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "koto-te",
                                    "text": "Verbo en forma Te + ことがあります"
                              },
                              {
                                    "id": "koto-dic",
                                    "text": "Verbo diccionario + ことがあります"
                              }
                        ],
                        "correctAnswerId": "koto-rule",
                        "explanation": "Forma Ta + ことがあります = \"He [hecho algo] alguna vez\"."
                  },
                  {
                        "id": "ex-11-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la pregunta: \"¿Alguna vez has subido al Monte Fuji?\":",
                        "japaneseVoiceText": "ふじさんにのぼったことがありますか",
                        "wordBank": [
                              "ふじさん",
                              "に",
                              "のぼった",
                              "ことがありますか",
                              "のぼる",
                              "を"
                        ],
                        "correctSentence": [
                              "ふじさん",
                              "に",
                              "のぼった",
                              "ことがありますか"
                        ],
                        "explanation": "Fujisan ni nobotta koto ga arimasu ka."
                  },
                  {
                        "id": "ex-11-3-3",
                        "type": "listening",
                        "prompt": "Escucha la experiencia gastronómica que relata Takeshi:",
                        "japaneseVoiceText": "なっとうをたべたことがありません",
                        "options": [
                              {
                                    "id": "l11-no-natto",
                                    "text": "Nunca he probado / comido natto en mi vida.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l11-eat-natto",
                                    "text": "A menudo como natto en el desayuno."
                              },
                              {
                                    "id": "l11-hate-natto",
                                    "text": "El natto es mi comida favorita."
                              }
                        ],
                        "correctAnswerId": "l11-no-natto",
                        "explanation": "Nattou o tabeta koto ga arimasen."
                  }
            ]
      }
]
  },

  // ==========================================
  // UNIDAD 12: GENKI LECCIÓN 12: SALUD Y BIENESTAR
  // ==========================================
  {
    id: 12,
    genkiBook: 'Genki I',
    title: 'Genki Lección 12: Salud y Bienestar',
    subtitle: 'Modo Explicativo (〜んです), Consejos y Deberes',
    description: 'Explica razones, expresa excesos (〜すぎる), da consejos médicos y domina la obligación.',
    themeColor: '#ce82ff',
    nodes: [
      {
            "id": "l12-node-1",
            "unitId": 12,
            "lessonNumber": 12,
            "title": "Modo Explicativo: 〜んです / 〜のだ",
            "japaneseTitle": "説明の「〜んです」（理由・弁解・状況説明）",
            "description": "Dar explicaciones, justificaciones o pedir contexto de forma natural",
            "icon": "HelpCircle",
            "color": "orange",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-12-1-1",
                        "type": "multiple-choice",
                        "prompt": "El profesor te ve con mala cara y pregunta qué pasó. Para explicar \"Es que me duele la cabeza...\", ¿qué usas?",
                        "options": [
                              {
                                    "id": "ndes-rule",
                                    "text": "あたまがいたいんです (Atama ga itai n desu - con modo explicativo んです)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ndes-plain",
                                    "text": "あたまがいたいです"
                              },
                              {
                                    "id": "ndes-kara",
                                    "text": "あたまがいたいから"
                              }
                        ],
                        "correctAnswerId": "ndes-rule",
                        "explanation": "「〜んです」 se usa para dar una explicación, contexto o justificación emocional/física."
                  },
                  {
                        "id": "ex-12-1-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés la justificación: \"Es que tengo examen mañana\":",
                        "japaneseVoiceText": "あしたテストがあるんです",
                        "wordBank": [
                              "あした",
                              "テスト",
                              "が",
                              "あるんです",
                              "あります",
                              "は",
                              "で"
                        ],
                        "correctSentence": [
                              "あした",
                              "テスト",
                              "が",
                              "あるんです"
                        ],
                        "explanation": "Ashita tesuto ga aru n desu."
                  },
                  {
                        "id": "ex-12-1-3",
                        "type": "listening",
                        "prompt": "Escucha la pregunta con modo explicativo:",
                        "japaneseVoiceText": "どうしたんですか。ー おなかがいたいんです。",
                        "options": [
                              {
                                    "id": "l12-stomach",
                                    "text": "Pregunta \"¿Qué te ocurrió?\" y responde \"Es que me duele el estómago\".",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l12-headache",
                                    "text": "Pregunta qué hora es y responde que tiene que irse."
                              },
                              {
                                    "id": "l12-lost",
                                    "text": "Pregunta dónde está la estación."
                              }
                        ],
                        "correctAnswerId": "l12-stomach",
                        "explanation": "Doushita n desu ka. - Onaka ga itai n desu."
                  }
            ]
      },
      {
            "id": "l12-node-2",
            "unitId": 12,
            "lessonNumber": 12,
            "title": "Excesos: 〜すぎる (Demasiado / En exceso)",
            "japaneseTitle": "過度の表現（〜すぎる：comer demasiado, ser demasiado caro）",
            "description": "Comí demasiado (たべすぎました), estudié demasiado, es demasiado difícil",
            "icon": "Flame",
            "color": "red",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-12-2-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se une el sufijo de exceso 「〜すぎる」 con los verbos?",
                        "options": [
                              {
                                    "id": "sugi-v-rule",
                                    "text": "Raíz Masu (sin 〜ます) + すぎる (ej. たべすぎる)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "sugi-v-te",
                                    "text": "Forma Te + すぎる"
                              },
                              {
                                    "id": "sugi-v-dic",
                                    "text": "Forma diccionario + すぎる"
                              }
                        ],
                        "correctAnswerId": "sugi-v-rule",
                        "explanation": "Verbo raíz + すぎます = \"hacer en exceso / demasiado\"."
                  },
                  {
                        "id": "ex-12-2-2",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se une 「〜すぎる」 con un い-adjetivo como たかい (caro)?",
                        "options": [
                              {
                                    "id": "sugi-adj-rule",
                                    "text": "Se quita la última い: たかすぎる (takasugiru - demasiado caro)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "sugi-adj-i",
                                    "text": "たかいすぎる"
                              }
                        ],
                        "correctAnswerId": "sugi-adj-rule",
                        "explanation": "Adjetivo sin い + すぎます = \"demasiado [adjetivo]\"."
                  },
                  {
                        "id": "ex-12-2-3",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Ayer comí demasiado en la fiesta\":",
                        "japaneseVoiceText": "きのうパーティーでたべすぎました",
                        "wordBank": [
                              "きのう",
                              "パーティー",
                              "で",
                              "たべすぎました",
                              "たべました",
                              "に"
                        ],
                        "correctSentence": [
                              "きのう",
                              "パーティー",
                              "で",
                              "たべすぎました"
                        ],
                        "explanation": "Kinou paatii de tabesugimashita."
                  }
            ]
      },
      {
            "id": "l12-node-3",
            "unitId": 12,
            "lessonNumber": 12,
            "title": "Consejos: 〜ほうがいいです (Sería mejor que...)",
            "japaneseTitle": "助言（〜ほうがいいです：sería mejor hacer/no hacer）",
            "description": "Sería mejor que vayas al hospital / Sería mejor que no tomes alcohol",
            "icon": "Lightbulb",
            "color": "green",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-12-3-1",
                        "type": "multiple-choice",
                        "prompt": "Para dar un consejo afirmativo (\"Sería mejor que tomes medicina\"), ¿qué forma verbal se usa?",
                        "options": [
                              {
                                    "id": "adv-ta",
                                    "text": "Verbo en forma Ta de pasado: くすりを 飲んだ ほうがいいです",
                                    "isCorrect": true
                              },
                              {
                                    "id": "adv-dic",
                                    "text": "Verbo en forma diccionario"
                              },
                              {
                                    "id": "adv-masu",
                                    "text": "Verbo en forma Masu"
                              }
                        ],
                        "correctAnswerId": "adv-ta",
                        "explanation": "Consejo afirmativo: Forma Ta + ほうがいいです. Consejo negativo: Forma ない + ほうがいいです."
                  },
                  {
                        "id": "ex-12-3-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés el consejo médico: \"Sería mejor que hoy duermas temprano en casa\":",
                        "japaneseVoiceText": "きょういえではやくねたほうがいいです",
                        "wordBank": [
                              "きょう",
                              "いえ",
                              "で",
                              "はやく",
                              "ねたほうがいいです",
                              "ねる",
                              "に"
                        ],
                        "correctSentence": [
                              "きょう",
                              "いえ",
                              "で",
                              "はやく",
                              "ねたほうがいいです"
                        ],
                        "explanation": "Kyou ie de hayaku neta hou ga ii desu."
                  },
                  {
                        "id": "ex-12-3-3",
                        "type": "listening",
                        "prompt": "Escucha el consejo de salud que da el doctor:",
                        "japaneseVoiceText": "きょうはおふろにはいらないほうがいいですよ",
                        "options": [
                              {
                                    "id": "l12-no-bath",
                                    "text": "Hoy sería mejor que no tomes un baño caliente.",
                                    "isCorrect": true
                              },
                              {
                                    "id": "l12-take-bath",
                                    "text": "Hoy toma un baño largo."
                              },
                              {
                                    "id": "l12-go-out",
                                    "text": "Hoy sería mejor que salgas a caminar."
                              }
                        ],
                        "correctAnswerId": "l12-no-bath",
                        "explanation": "Kyou wa ofuro ni hairanai hou ga ii desu yo."
                  }
            ]
      },
      {
            "id": "l12-node-4",
            "unitId": 12,
            "lessonNumber": 12,
            "title": "Obligación: 〜なければいけません (Tengo que...)",
            "japaneseTitle": "義務表現（〜なければいけません：Tener que / Deber）",
            "description": "Tengo que tomar medicina, tengo que ir a la embajada, debo estudiar",
            "icon": "ShieldAlert",
            "color": "purple",
            "totalSteps": 3,
            "unlocked": false,
            "completedSteps": 0,
            "stars": 0,
            "exercises": [
                  {
                        "id": "ex-12-4-1",
                        "type": "multiple-choice",
                        "prompt": "¿Cómo se forma la frase de obligación \"Tengo que hacer X\" a partir de la forma ない?",
                        "options": [
                              {
                                    "id": "ob-rule",
                                    "text": "Se quita la い de la forma ない y se añade ければいけません (ej. いかなければいけません)",
                                    "isCorrect": true
                              },
                              {
                                    "id": "ob-masu",
                                    "text": "Forma Masu + いけません"
                              },
                              {
                                    "id": "ob-te",
                                    "text": "Forma Te + いけません"
                              }
                        ],
                        "correctAnswerId": "ob-rule",
                        "explanation": "ない ➔ なければいけません (o en conversación casual: 〜なくちゃいけない)."
                  },
                  {
                        "id": "ex-12-4-2",
                        "type": "word-order",
                        "prompt": "Traduce al japonés: \"Tengo fiebre, así que debo ir al hospital\":",
                        "japaneseVoiceText": "ねつがありますからびょういんへいかなければいけません",
                        "wordBank": [
                              "ねつが",
                              "ありますから",
                              "びょういん",
                              "へ",
                              "いかなければいけません",
                              "いきます",
                              "で"
                        ],
                        "correctSentence": [
                              "ねつが",
                              "ありますから",
                              "びょういん",
                              "へ",
                              "いかなければいけません"
                        ],
                        "explanation": "Netsu ga arimasu kara byouin e ikanakereba ikemasen."
                  },
                  {
                        "id": "ex-12-4-3",
                        "type": "match-pairs",
                        "prompt": "Empareja los síntomas y partes del cuerpo de Genki L12:",
                        "pairs": [
                              {
                                    "id": "sym1",
                                    "left": "あたま (頭)",
                                    "right": "Cabeza"
                              },
                              {
                                    "id": "sym2",
                                    "left": "のど (喉)",
                                    "right": "Garganta"
                              },
                              {
                                    "id": "sym3",
                                    "left": "おなか (お腹)",
                                    "right": "Estómago / Panza"
                              },
                              {
                                    "id": "sym4",
                                    "left": "ねつ (熱)",
                                    "right": "Fiebre"
                              }
                        ],
                        "explanation": "Partes del cuerpo y síntomas médicos de la Lección 12."
                  }
            ]
      }
]
  },

    // ==========================================
  // UNIDAD 13: GENKI LECCIÓN 13: BUSCANDO UN TRABAJO
  // ==========================================
  {
      "id": 13,
      "genkiBook": "Genki II",
      "title": "Genki Lección 13: Buscando un Trabajo",
      "subtitle": "Verbos Potenciales, 〜し〜し, 〜そうです y 〜てみる",
      "description": "Expresa tus habilidades e idiomas con la forma potencial, enumera múltiples razones, describe apariencias y prueba cosas nuevas.",
      "themeColor": "#e5a100",
      "nodes": [
          {
              "id": "l13-node-1",
              "unitId": 13,
              "lessonNumber": 13,
              "title": "Vocabulario: Trabajos e Idiomas",
              "japaneseTitle": "アルバイトと言語（ウェイター・経験・給料）",
              "description": "Empleos de medio tiempo, idiomas, instrumentos musicales y experiencia laboral",
              "icon": "Briefcase",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-13-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se dice \"experiencia\" (por ejemplo, experiencia laboral) en japonés?",
                      "options": [
                          {
                              "id": "u13-v1",
                              "text": "けいけん (経験 / keiken)",
                              "isCorrect": true
                          },
                          {
                              "id": "u13-v2",
                              "text": "きゅうりょう (給料 / kyuuryou)"
                          },
                          {
                              "id": "u13-v3",
                              "text": "やくそく (約束 / yakusoku)"
                          }
                      ],
                      "correctAnswerId": "u13-v1",
                      "explanation": "けいけん (経験) significa \"experiencia\". きゅうりょう (給料) es \"sueldo/salario\"."
                  },
                  {
                      "id": "ex-13-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario de trabajo de la Lección 13:",
                      "pairs": [
                          {
                              "id": "l13p1",
                              "left": "きゅうりょう (給料)",
                              "right": "Salario / Sueldo"
                          },
                          {
                              "id": "l13p2",
                              "left": "てんいん (店員)",
                              "right": "Empleado de tienda"
                          },
                          {
                              "id": "l13p3",
                              "left": "がいこくご (外国語)",
                              "right": "Idioma extranjero"
                          },
                          {
                              "id": "l13p4",
                              "left": "がっき (楽器)",
                              "right": "Instrumento musical"
                          }
                      ],
                      "explanation": "Vocabulario esencial de Genki II Lección 13 sobre búsqueda de empleo."
                  },
                  {
                      "id": "ex-13-1-3",
                      "type": "listening",
                      "prompt": "Escucha la frase sobre el trabajo de medio tiempo:",
                      "japaneseVoiceText": "いっしゅうかんにさんかいアルバイトをします",
                      "options": [
                          {
                              "id": "l13-lis1",
                              "text": "Trabajo a medio tiempo tres veces por semana.",
                              "isCorrect": true
                          },
                          {
                              "id": "l13-lis2",
                              "text": "Trabajo tres horas todos los días."
                          },
                          {
                              "id": "l13-lis3",
                              "text": "Busco un trabajo de tres meses."
                          }
                      ],
                      "correctAnswerId": "l13-lis1",
                      "explanation": "Isshuukan ni sankai arubaito o shimasu (Tres veces por semana hago arubaito)."
                  }
              ]
          },
          {
              "id": "l13-node-2",
              "unitId": 13,
              "lessonNumber": 13,
              "title": "Verbos Potenciales (可能形)",
              "japaneseTitle": "可能動詞（〜られる・〜える・できる）",
              "description": "Expresa lo que sabes y puedes hacer (hablar japonés, nadar, cocinar)",
              "icon": "Award",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-13-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se conjuga el verbo U 「はなす」 (hablar) a su forma potencial (\"poder hablar\")?",
                      "options": [
                          {
                              "id": "pot-hanaseru",
                              "text": "はなせる (hanaseru - sonido -u cambia a -e + る)",
                              "isCorrect": true
                          },
                          {
                              "id": "pot-hanasareru",
                              "text": "はなされる (hanasareru)"
                          },
                          {
                              "id": "pot-hanashireru",
                              "text": "はなしれる (hanashireru)"
                          }
                      ],
                      "correctAnswerId": "pot-hanaseru",
                      "explanation": "En los verbos U, la vocal final \"-u\" pasa a \"-e\" y se agrega る: はなす ➔ はなせる."
                  },
                  {
                      "id": "ex-13-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Puedo hablar un poco de japonés\":",
                      "japaneseVoiceText": "にほんごがすこしはなせます",
                      "wordBank": [
                          "にほんご",
                          "が",
                          "すこし",
                          "はなせます",
                          "はなします",
                          "を"
                      ],
                      "correctSentence": [
                          "にほんご",
                          "が",
                          "すこし",
                          "はなせます"
                      ],
                      "explanation": "Con verbos potenciales, el objeto suele marcarse con la partícula が: Nihongo ga sukoshi hanasemasu."
                  },
                  {
                      "id": "ex-13-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo con su forma potencial correcta:",
                      "pairs": [
                          {
                              "id": "potp1",
                              "left": "たべる (Ru-verb)",
                              "right": "たべられる (poder comer)"
                          },
                          {
                              "id": "potp2",
                              "left": "いく (U-verb)",
                              "right": "いける (poder ir)"
                          },
                          {
                              "id": "potp3",
                              "left": "およぐ (U-verb)",
                              "right": "およげる (poder nadar)"
                          },
                          {
                              "id": "potp4",
                              "left": "くる (Irregular)",
                              "right": "こられる (poder venir)"
                          }
                      ],
                      "explanation": "Ru-verbs: 〜られる. U-verbs: columna -e + る. Irregulares: する➔できる, くる➔こられる."
                  }
              ]
          },
          {
              "id": "l13-node-3",
              "unitId": 13,
              "lessonNumber": 13,
              "title": "Múltiples Razones: 〜し、〜し",
              "japaneseTitle": "理由の列挙（〜し、〜し：además de A, también B）",
              "description": "Dar varias razones o cualidades que justifican una conclusión",
              "icon": "ListFilter",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-13-3-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué forma gramatical va antes de 「し」 al enumerar razones en Genki L13?",
                      "options": [
                          {
                              "id": "shi-short",
                              "text": "Forma corta (con だ para sustantivos y な-adjetivos en presente afirmativo)",
                              "isCorrect": true
                          },
                          {
                              "id": "shi-te",
                              "text": "Siempre la forma Te"
                          },
                          {
                              "id": "shi-stem",
                              "text": "La raíz Masu sin desinencia"
                          }
                      ],
                      "correctAnswerId": "shi-short",
                      "explanation": "Se usa forma corta + し (ej. やすいし、おいしいし / 静かだし、きれいだし)."
                  },
                  {
                      "id": "ex-13-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Como esta tienda es barata y además deliciosa, me gusta\":",
                      "japaneseVoiceText": "このみせはやすいしおいしいしすきです",
                      "wordBank": [
                          "このみせは",
                          "やすいし",
                          "おいしいし",
                          "すきです",
                          "やすくて",
                          "だから"
                      ],
                      "correctSentence": [
                          "このみせは",
                          "やすいし",
                          "おいしいし",
                          "すきです"
                      ],
                      "explanation": "Kono mise wa yasui shi, oishii shi, suki desu."
                  },
                  {
                      "id": "ex-13-3-3",
                      "type": "listening",
                      "prompt": "Escucha por qué Ivan eligió ese trabajo:",
                      "japaneseVoiceText": "きゅうりょうもいいし、ちかいし、このアルバイトをします",
                      "options": [
                          {
                              "id": "l13-shi-1",
                              "text": "El sueldo es bueno y además queda cerca, así que tomará ese trabajo.",
                              "isCorrect": true
                          },
                          {
                              "id": "l13-shi-2",
                              "text": "El sueldo es bajo pero el horario es corto."
                          },
                          {
                              "id": "l13-shi-3",
                              "text": "Queda lejos pero sus amigos trabajan ahí."
                          }
                      ],
                      "correctAnswerId": "l13-shi-1",
                      "explanation": "Kyuuryou mo ii shi, chikai shi, kono arubaito o shimasu."
                  }
              ]
          },
          {
              "id": "l13-node-4",
              "unitId": 13,
              "lessonNumber": 13,
              "title": "Apariencia (〜そうです) y Probar (〜てみる)",
              "japaneseTitle": "様態の「〜そうです」と試行の「〜てみる」",
              "description": "Se ve delicioso (おいしそう) e intentar hacer algo para ver qué tal (〜てみる)",
              "icon": "Sparkles",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-13-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se dice \"parece bueno / se ve bien\" usando el adjetivo irregular いい + そうです?",
                      "options": [
                          {
                              "id": "sou-yosa",
                              "text": "よさそうです (yosasou desu)",
                              "isCorrect": true
                          },
                          {
                              "id": "sou-iisou",
                              "text": "いいそうです (iisou desu)"
                          },
                          {
                              "id": "sou-yokatta",
                              "text": "よかったです (yokatta desu)"
                          }
                      ],
                      "correctAnswerId": "sou-yosa",
                      "explanation": "¡Excepción clave! Con apariencia visual, いい cambia a よさそうです. Los demás い-adjetivos pierden la い (おいしそう)."
                  },
                  {
                      "id": "ex-13-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Este pastel se ve delicioso, así que probaré comerlo\":",
                      "japaneseVoiceText": "このケーキはおいしそうですからたべてみます",
                      "wordBank": [
                          "このケーキは",
                          "おいしそうですから",
                          "たべてみます",
                          "おいしいですから",
                          "たべます"
                      ],
                      "correctSentence": [
                          "このケーキは",
                          "おいしそうですから",
                          "たべてみます"
                      ],
                      "explanation": "Kono keeki wa oishisou desu kara, tabete mimasu (〜てみる = probar a hacer)."
                  },
                  {
                      "id": "ex-13-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada expresión de 〜そうです o 〜てみる con su significado:",
                      "pairs": [
                          {
                              "id": "sm1",
                              "left": "おいしそうですね",
                              "right": "Se ve delicioso, ¿verdad?"
                          },
                          {
                              "id": "sm2",
                              "left": "ひまそうですね",
                              "right": "Parece que estás libre / desocupado"
                          },
                          {
                              "id": "sm3",
                              "left": "きてみます",
                              "right": "Me lo probaré (ropa)"
                          },
                          {
                              "id": "sm4",
                              "left": "きいてみます",
                              "right": "Intentaré preguntar"
                          }
                      ],
                      "explanation": "Apariencias con 〜そうです y pruebas/intentos con 〜てみる."
                  }
              ]
          },
          {
              "id": "l13-node-5",
              "unitId": 13,
              "lessonNumber": 13,
              "title": "Workbook: Entrevista de Trabajo y なら",
              "japaneseTitle": "ワークブック総合（なら・一週間に〜回）",
              "description": "Práctica integradora de la Lección 13: entrevistas, frecuencia y recomendaciones con なら",
              "icon": "Headphones",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-13-5-1",
                      "type": "multiple-choice",
                      "prompt": "Alguien pregunta: \"¿Dónde puedo comprar pescado fresco?\". Si respondes \"Si se trata de pescado, el supermercado Yamakawa es bueno\", ¿qué partícula usas?",
                      "options": [
                          {
                              "id": "nara-1",
                              "text": "さかな なら、山川スーパーがいいですよ",
                              "isCorrect": true
                          },
                          {
                              "id": "nara-2",
                              "text": "さかな を、山川スーパーがいいですよ"
                          },
                          {
                              "id": "nara-3",
                              "text": "さかな で、山川スーパーがいいですよ"
                          }
                      ],
                      "correctAnswerId": "nara-1",
                      "explanation": "「Sustantivo + なら」 retoma un tema mencionado por el interlocutor (\"Si hablamos de X / En cuanto a X...\")."
                  },
                  {
                      "id": "ex-13-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Puedo trabajar tres días a la semana\":",
                      "japaneseVoiceText": "いっしゅうかんにみっかはたらけます",
                      "wordBank": [
                          "いっしゅうかん",
                          "に",
                          "みっか",
                          "はたらけます",
                          "はたらきます",
                          "で"
                      ],
                      "correctSentence": [
                          "いっしゅうかん",
                          "に",
                          "みっか",
                          "はたらけます"
                      ],
                      "explanation": "Isshuukan ni mikka hatarakemasu (Frecuencia con に + verbo potencial)."
                  },
                  {
                      "id": "ex-13-5-3",
                      "type": "listening",
                      "prompt": "Escucha el diálogo de la entrevista de trabajo de John:",
                      "japaneseVoiceText": "ジョンさんはなにようびにこれますか。ー げつようびとすいようびならこれます。",
                      "options": [
                          {
                              "id": "l13-wb-1",
                              "text": "Pregunta qué días puede venir; responde que si es lunes y miércoles, sí puede.",
                              "isCorrect": true
                          },
                          {
                              "id": "l13-wb-2",
                              "text": "Dice que no puede trabajar ni lunes ni miércoles."
                          },
                          {
                              "id": "l13-wb-3",
                              "text": "Dice que solo puede trabajar los fines de semana."
                          }
                      ],
                      "correctAnswerId": "l13-wb-1",
                      "explanation": "Getsuyoubi to suiyoubi nara koremasu (Si es lunes y miércoles, puedo venir)."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 14: GENKI LECCIÓN 14: DÍA DE SAN VALENTÍN
  // ==========================================
  {
      "id": 14,
      "genkiBook": "Genki II",
      "title": "Genki Lección 14: Día de San Valentín",
      "subtitle": "ほしい, 〜かもしれません y あげる・くれる・もらう",
      "description": "Expresa qué objetos deseas, habla de posibilidades, domina los verbos de dar y recibir regalos y da consejos con 〜たらどうですか.",
      "themeColor": "#ff4b4b",
      "nodes": [
          {
              "id": "l14-node-1",
              "unitId": 14,
              "lessonNumber": 14,
              "title": "Vocabulario: Regalos y Contadores",
              "japaneseTitle": "プレゼントと助数詞（指輪・ぬいぐるみ・〜個・〜冊）",
              "description": "Regalos, objetos personales y contadores frecuentes (冊, 個, 本, 匹, 台)",
              "icon": "Gift",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-14-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué contador se utiliza en japonés para contar objetos cilíndricos y alargados (paraguas, botellas, lápices)?",
                      "options": [
                          {
                              "id": "cnt-hon",
                              "text": "〜ほん / 〜ぼん / 〜ぽん (本)",
                              "isCorrect": true
                          },
                          {
                              "id": "cnt-satsu",
                              "text": "〜さつ (冊 - para libros)"
                          },
                          {
                              "id": "cnt-hiki",
                              "text": "〜ひき (匹 - para animales pequeños)"
                          }
                      ],
                      "correctAnswerId": "cnt-hon",
                      "explanation": "〜本 (ほん) cuenta objetos largos y cilíndricos; cambia a ぽん (1, 6, 8, 10) y ぼん (3)."
                  },
                  {
                      "id": "ex-14-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja cada contador de la Lección 14 con lo que cuenta:",
                      "pairs": [
                          {
                              "id": "c14-1",
                              "left": "〜さつ (冊)",
                              "right": "Libros, revistas y cuadernos"
                          },
                          {
                              "id": "c14-2",
                              "left": "〜ひき (匹)",
                              "right": "Animales pequeños (gatos, perros, peces)"
                          },
                          {
                              "id": "c14-3",
                              "left": "〜こ (個)",
                              "right": "Objetos pequeños y redondos (manzanas, dulces)"
                          },
                          {
                              "id": "c14-4",
                              "left": "〜だい (台)",
                              "right": "Máquinas y vehículos (autos, PCs)"
                          }
                      ],
                      "explanation": "Contadores fundamentales de Genki II Lección 14."
                  },
                  {
                      "id": "ex-14-1-3",
                      "type": "listening",
                      "prompt": "Escucha cuántos gatos tiene Michiko:",
                      "japaneseVoiceText": "みちこさんはねこをさんびきかっています",
                      "options": [
                          {
                              "id": "l14-cat3",
                              "text": "Cría / tiene 3 gatos (さんびき).",
                              "isCorrect": true
                          },
                          {
                              "id": "l14-cat1",
                              "text": "Tiene 1 gato (いっぴき)."
                          },
                          {
                              "id": "l14-cat2",
                              "text": "Tiene 2 perros."
                          }
                      ],
                      "correctAnswerId": "l14-cat3",
                      "explanation": "Michiko-san wa neko o sanbiki katte imasu (3 animales pequeños = さんびき con sonorización)."
                  }
              ]
          },
          {
              "id": "l14-node-2",
              "unitId": 14,
              "lessonNumber": 14,
              "title": "Querer Objetos (ほしい) y Posibilidad (〜かもしれません)",
              "japaneseTitle": "願望「ほしい」と推量「〜かもしれません」",
              "description": "Quiero un coche nuevo (がほしい) y tal vez llueva mañana (〜かもしれません)",
              "icon": "Heart",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-14-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué tipo de palabra es 「ほしい」 (querer un objeto) y con qué partícula marca el objeto deseado?",
                      "options": [
                          {
                              "id": "hoshi-i",
                              "text": "Es un い-adjetivo y marca el objeto con が (ej. 新しいパソコンがほしいです)",
                              "isCorrect": true
                          },
                          {
                              "id": "hoshi-na",
                              "text": "Es un な-adjetivo y usa を"
                          },
                          {
                              "id": "hoshi-v",
                              "text": "Es un verbo Ru"
                          }
                      ],
                      "correctAnswerId": "hoshi-i",
                      "explanation": "ほしい es un い-adjetivo (negativo: ほしくないです, pasado: ほしかったです) y lleva partícula が."
                  },
                  {
                      "id": "ex-14-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Tal vez mañana nieve\":",
                      "japaneseVoiceText": "あしたゆきがふるかもしれません",
                      "wordBank": [
                          "あした",
                          "ゆきが",
                          "ふる",
                          "かもしれません",
                          "ふります",
                          "だ"
                      ],
                      "correctSentence": [
                          "あした",
                          "ゆきが",
                          "ふる",
                          "かもしれません"
                      ],
                      "explanation": "Ashita yuki ga furu kamoshiremasen (Forma corta + かもしれません = quizás / puede que...)."
                  },
                  {
                      "id": "ex-14-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las oraciones con ほしい y かもしれません:",
                      "pairs": [
                          {
                              "id": "hm1",
                              "left": "ぬいぐるみがほしいです",
                              "right": "Quiero un peluche"
                          },
                          {
                              "id": "hm2",
                              "left": "なにもほしくないです",
                              "right": "No quiero nada"
                          },
                          {
                              "id": "hm3",
                              "left": "かれはこないかもしれません",
                              "right": "Quizás él no venga"
                          },
                          {
                              "id": "hm4",
                              "left": "ほんとうかもしれません",
                              "right": "Tal vez sea verdad"
                          }
                      ],
                      "explanation": "Con sustantivos y な-adjetivos en presente afirmativo NO se pone だ antes de かもしれません."
                  }
              ]
          },
          {
              "id": "l14-node-3",
              "unitId": 14,
              "lessonNumber": 14,
              "title": "Dar y Recibir: あげる・くれる・もらう",
              "japaneseTitle": "授受表現（あげる・くれる・もらう）",
              "description": "La dirección del regalo: dar a otros (あげる), darme a mí (くれる) y recibir (もらう)",
              "icon": "Users",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-14-3-1",
                      "type": "multiple-choice",
                      "prompt": "Si tu amigo Carlos te dio flores A TI (o a alguien de tu familia), ¿qué verbo de \"dar\" debes usar?",
                      "options": [
                          {
                              "id": "ag-kureru",
                              "text": "くれる (カルロスさんは わたしに 花を くれました)",
                              "isCorrect": true
                          },
                          {
                              "id": "ag-ageru",
                              "text": "あげる (カルロスさんは わたしに 花を あげました)"
                          },
                          {
                              "id": "ag-morau",
                              "text": "もらう"
                          }
                      ],
                      "correctAnswerId": "ag-kureru",
                      "explanation": "Cuando alguien da algo hacia el hablante (\"a mí\" o mi círculo íntimo), SIEMPRE se usa くれる, nunca あげる."
                  },
                  {
                      "id": "ex-14-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Recibí chocolates de parte de Mary\":",
                      "japaneseVoiceText": "わたしはメアリーさんにチョコレートをもらいました",
                      "wordBank": [
                          "わたしは",
                          "メアリーさんに",
                          "チョコレートを",
                          "もらいました",
                          "くれました",
                          "あげました"
                      ],
                      "correctSentence": [
                          "わたしは",
                          "メアリーさんに",
                          "チョコレートを",
                          "もらいました"
                      ],
                      "explanation": "Watashi wa Mearii-san ni chokoreeto o moraimashita (Receptor は Donante に Objeto を もらう)."
                  },
                  {
                      "id": "ex-14-3-3",
                      "type": "match-pairs",
                      "prompt": "Empareja los tres verbos de intercambio de objetos:",
                      "pairs": [
                          {
                              "id": "gv1",
                              "left": "あげる",
                              "right": "Yo doy a otro / Otro da a un tercero"
                          },
                          {
                              "id": "gv2",
                              "left": "くれる",
                              "right": "Alguien me da a mí (o a mi familia)"
                          },
                          {
                              "id": "gv3",
                              "left": "もらう",
                              "right": "Yo u otra persona recibe algo (de に/から)"
                          }
                      ],
                      "explanation": "Trilogía esencial de verbos de transferencia en japonés."
                  }
              ]
          },
          {
              "id": "l14-node-4",
              "unitId": 14,
              "lessonNumber": 14,
              "title": "Sugerencias (〜たらどうですか) y Cantidad (も / しか)",
              "japaneseTitle": "助言「〜たらどうですか」と数量強調「〜も・〜しか」",
              "description": "¿Por qué no haces X? (〜たらどうですか), \"tantos como...\" (も) y \"solo...\" (しか＋negativo)",
              "icon": "Lightbulb",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-14-4-1",
                      "type": "multiple-choice",
                      "prompt": "Para decir \"Solo tengo 1,000 yenes\" enfatizando que es poco con 「しか」, ¿cómo debe terminar el verbo?",
                      "options": [
                          {
                              "id": "shika-neg",
                              "text": "Siempre en NEGATIVO: 千円しか ありません",
                              "isCorrect": true
                          },
                          {
                              "id": "shika-aff",
                              "text": "En afirmativo: 千円しか あります"
                          },
                          {
                              "id": "shika-pot",
                              "text": "En pasado afirmativo"
                          }
                      ],
                      "correctAnswerId": "shika-neg",
                      "explanation": "「Número + しか」 reemplaza a を/が y exige obligatoriamente que el verbo vaya en negativo."
                  },
                  {
                      "id": "ex-14-4-2",
                      "type": "word-order",
                      "prompt": "Traduce la sugerencia: \"¿Qué tal si consultas con el profesor?\":",
                      "japaneseVoiceText": "せんせいにそうだんしたらどうですか",
                      "wordBank": [
                          "せんせいに",
                          "そうだんしたら",
                          "どうですか",
                          "そうだんする",
                          "を"
                      ],
                      "correctSentence": [
                          "せんせいに",
                          "そうだんしたら",
                          "どうですか"
                      ],
                      "explanation": "Sensei ni soudan shitara dou desu ka (Forma Ta + らどうですか = ¿por qué no...?)."
                  },
                  {
                      "id": "ex-14-4-3",
                      "type": "listening",
                      "prompt": "Escucha cuántos libros leyó Takeshi esta semana:",
                      "japaneseVoiceText": "こんしゅうはほんをごさつもよみました",
                      "options": [
                          {
                              "id": "l14-mo-5",
                              "text": "¡Leyó nada menos que 5 libros esta semana! (ごさつも)",
                              "isCorrect": true
                          },
                          {
                              "id": "l14-mo-1",
                              "text": "Solo leyó 1 libro esta semana."
                          },
                          {
                              "id": "l14-mo-0",
                              "text": "No leyó ningún libro."
                          }
                      ],
                      "correctAnswerId": "l14-mo-5",
                      "explanation": "「Número + も」 enfatiza que la cantidad es sorprendentemente grande: go-satsu mo yomimashita."
                  }
              ]
          },
          {
              "id": "l14-node-5",
              "unitId": 14,
              "lessonNumber": 14,
              "title": "Workbook: San Valentín y Consejos",
              "japaneseTitle": "ワークブック総合（バレンタインと相談）",
              "description": "Integración de la Lección 14: regalos de San Valentín, dudas y recomendaciones",
              "icon": "Headphones",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-14-5-1",
                      "type": "multiple-choice",
                      "prompt": "Encuentra la oración gramaticalmente CORRECTA según Genki L14:",
                      "options": [
                          {
                              "id": "l14-cor",
                              "text": "母は わたしに セーターを くれました。",
                              "isCorrect": true
                          },
                          {
                              "id": "l14-err1",
                              "text": "母は わたしに セーターを あげました。"
                          },
                          {
                              "id": "l14-err2",
                              "text": "わたしは 母に セーターを くれました。"
                          }
                      ],
                      "correctAnswerId": "l14-cor",
                      "explanation": "Mi madre me dio a mí ➔ 母はわたしに〜をくれました."
                  },
                  {
                      "id": "ex-14-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Ayer solo dormí cuatro horas\":",
                      "japaneseVoiceText": "きのうはよじかんしかねませんでした",
                      "wordBank": [
                          "きのうは",
                          "よじかん",
                          "しか",
                          "ねませんでした",
                          "ねました",
                          "も"
                      ],
                      "correctSentence": [
                          "きのうは",
                          "よじかん",
                          "しか",
                          "ねませんでした"
                      ],
                      "explanation": "Kinou wa yojikan shika nemasen deshita (しか + negativo)."
                  },
                  {
                      "id": "ex-14-5-3",
                      "type": "listening",
                      "prompt": "Escucha el diálogo de San Valentín:",
                      "japaneseVoiceText": "バレンタインデーになにをもらいましたか。ー なにももらいませんでした。",
                      "options": [
                          {
                              "id": "l14-val-0",
                              "text": "Le preguntan qué recibió en San Valentín y responde que no recibió nada.",
                              "isCorrect": true
                          },
                          {
                              "id": "l14-val-1",
                              "text": "Recibió muchos chocolates y una corbata."
                          },
                          {
                              "id": "l14-val-2",
                              "text": "Regaló flores a su novia."
                          }
                      ],
                      "correctAnswerId": "l14-val-0",
                      "explanation": "Nani mo moraimasen deshita (No recibí nada)."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 15: GENKI LECCIÓN 15: UN VIAJE A NAGANO
  // ==========================================
  {
      "id": 15,
      "genkiBook": "Genki II",
      "title": "Genki Lección 15: Un Viaje a Nagano",
      "subtitle": "Forma Volitiva (〜よう), 〜ておく y Cláusulas Relativas",
      "description": "Propón planes con amigos usando la forma volitiva, haz preparativos por adelantado con 〜ておく y califica sustantivos con oraciones completas.",
      "themeColor": "#1cb0f6",
      "nodes": [
          {
              "id": "l15-node-1",
              "unitId": 15,
              "lessonNumber": 15,
              "title": "Vocabulario: Turismo y Reservas",
              "japaneseTitle": "旅行と旅館（温泉・予約・観光・保険）",
              "description": "Aguas termales, posadas tradicionales, reservas de hotel, mapas y preparación de viaje",
              "icon": "Compass",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-15-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se dice \"hacer una reservación\" en japonés?",
                      "options": [
                          {
                              "id": "u15-yoyaku",
                              "text": "よやくする (予約する / yoyaku suru)",
                              "isCorrect": true
                          },
                          {
                              "id": "u15-junbi",
                              "text": "じゅんびする (準備する / junbi suru)"
                          },
                          {
                              "id": "u15-soudan",
                              "text": "そうだんする (相談する / soudan suru)"
                          }
                      ],
                      "correctAnswerId": "u15-yoyaku",
                      "explanation": "予約 (よやく) significa \"reserva / reservación\"."
                  },
                  {
                      "id": "ex-15-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario turístico de la Lección 15:",
                      "pairs": [
                          {
                              "id": "t15-1",
                              "left": "おんせん (温泉)",
                              "right": "Aguas termales (Onsen)"
                          },
                          {
                              "id": "t15-2",
                              "left": "りょかん (旅館)",
                              "right": "Posada tradicional japonesa"
                          },
                          {
                              "id": "t15-3",
                              "left": "かんこう (観光)",
                              "right": "Turismo / Visita turística"
                          },
                          {
                              "id": "t15-4",
                              "left": "じしん (地震)",
                              "right": "Terremoto / Sismo"
                          }
                      ],
                      "explanation": "Palabras clave del viaje a Nagano en Genki II."
                  },
                  {
                      "id": "ex-15-1-3",
                      "type": "listening",
                      "prompt": "Escucha lo que preguntan en la recepción del hotel:",
                      "japaneseVoiceText": "チェックインをおねがいします。よやくしたスミスです。",
                      "options": [
                          {
                              "id": "l15-chk",
                              "text": "Pide hacer el check-in y dice que es Smith, quien hizo una reservación.",
                              "isCorrect": true
                          },
                          {
                              "id": "l15-chk2",
                              "text": "Pide cancelar su habitación de hotel."
                          },
                          {
                              "id": "l15-chk3",
                              "text": "Pregunta a qué hora sirven el desayuno."
                          }
                      ],
                      "correctAnswerId": "l15-chk",
                      "explanation": "Chekku-in o onegaishimasu. Yoyaku shita Sumisu desu."
                  }
              ]
          },
          {
              "id": "l15-node-2",
              "unitId": 15,
              "lessonNumber": 15,
              "title": "Forma Volitiva (意向形: 〜よう / 〜おう)",
              "japaneseTitle": "意向形（「〜ましょう」のカジュアル形）",
              "description": "El equivalente casual de 〜ましょう (\"¡Comamos!\", \"¡Vayamos!\") y planes con 〜と思っています",
              "icon": "Flame",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-15-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se forma la forma volitiva de un verbo U como 「いく」 (ir)?",
                      "options": [
                          {
                              "id": "vol-ikou",
                              "text": "いこう (ikou - el sonido -u pasa a la columna -o + う)",
                              "isCorrect": true
                          },
                          {
                              "id": "vol-ikiyou",
                              "text": "いきよう (ikiyou)"
                          },
                          {
                              "id": "vol-ikeru",
                              "text": "いける (ikeru)"
                          }
                      ],
                      "correctAnswerId": "vol-ikou",
                      "explanation": "U-verbs: vocal -u ➔ -o + う (いく➔いこう, のむ➔のもう, まつ➔まとう). Ru-verbs: 〜よう (たべる➔たべよう)."
                  },
                  {
                      "id": "ex-15-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Estoy pensando en comprar una cámara nueva\":",
                      "japaneseVoiceText": "あたらしいカメラをかおうとおもっています",
                      "wordBank": [
                          "あたらしい",
                          "カメラを",
                          "かおう",
                          "とおもっています",
                          "かう",
                          "に"
                      ],
                      "correctSentence": [
                          "あたらしい",
                          "カメラを",
                          "かおう",
                          "とおもっています"
                      ],
                      "explanation": "Forma volitiva (かおう) + と思っています expresa una determinación o plan firme en curso."
                  },
                  {
                      "id": "ex-15-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo con su Forma Volitiva correcta:",
                      "pairs": [
                          {
                              "id": "vp1",
                              "left": "たべる (Ru-verb)",
                              "right": "たべよう (¡comamos!)"
                          },
                          {
                              "id": "vp2",
                              "left": "やすむ (U-verb)",
                              "right": "やすもう (¡descansemos!)"
                          },
                          {
                              "id": "vp3",
                              "left": "する (Irregular)",
                              "right": "しよう (¡hagamos!)"
                          },
                          {
                              "id": "vp4",
                              "left": "くる (Irregular)",
                              "right": "こよう (¡vengamos!)"
                          }
                      ],
                      "explanation": "Reglas de conjugación de la Forma Volitiva (意向形)."
                  }
              ]
          },
          {
              "id": "l15-node-3",
              "unitId": 15,
              "lessonNumber": 15,
              "title": "Preparación Anticipada: 〜ておく",
              "japaneseTitle": "準備の「〜ておく」（前もって〜する）",
              "description": "Hacer algo de antemano como preparación para el futuro (reservar hotel, sacar dinero)",
              "icon": "Clock",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-15-3-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué expresa la estructura 「Verbo Forma Te + おく」 (y su contracción oral 〜とく)?",
                      "options": [
                          {
                              "id": "teoku-1",
                              "text": "Realizar una acción por adelantado como preparación para algo futuro",
                              "isCorrect": true
                          },
                          {
                              "id": "teoku-2",
                              "text": "Hacer una acción por primera vez"
                          },
                          {
                              "id": "teoku-3",
                              "text": "Estar prohibido hacer una acción"
                          }
                      ],
                      "correctAnswerId": "teoku-1",
                      "explanation": "〜ておく indica dejar algo listo o preparado de antemano (ej. ホテルを予約しておきます)."
                  },
                  {
                      "id": "ex-15-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Antes del viaje, compraré los boletos por adelantado\":",
                      "japaneseVoiceText": "りょこうのまえにきっぷをかっておきます",
                      "wordBank": [
                          "りょこうのまえに",
                          "きっぷを",
                          "かっておきます",
                          "かいます",
                          "かります"
                      ],
                      "correctSentence": [
                          "りょこうのまえに",
                          "きっぷを",
                          "かっておきます"
                      ],
                      "explanation": "Ryokou no mae ni kippu o katte okimasu."
                  },
                  {
                      "id": "ex-15-3-3",
                      "type": "listening",
                      "prompt": "Escucha lo que hará Takeshi antes del examen:",
                      "japaneseVoiceText": "テストのまえにたんごをおぼえておきます",
                      "options": [
                          {
                              "id": "l15-tok1",
                              "text": "Se aprenderá de memoria el vocabulario por adelantado antes del examen.",
                              "isCorrect": true
                          },
                          {
                              "id": "l15-tok2",
                              "text": "Olvidó estudiar el vocabulario para el examen."
                          },
                          {
                              "id": "l15-tok3",
                              "text": "Comprará un diccionario después del examen."
                          }
                      ],
                      "correctAnswerId": "l15-tok1",
                      "explanation": "Tesuto no mae ni tango o oboete okimasu."
                  }
              ]
          },
          {
              "id": "l15-node-4",
              "unitId": 15,
              "lessonNumber": 15,
              "title": "Calificar Sustantivos con Oraciones",
              "japaneseTitle": "名詞修飾節（きのう買った本・母が作った料理）",
              "description": "El libro que compré ayer, el hotel donde me hospedé la semana pasada",
              "icon": "BookOpen",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-15-4-1",
                      "type": "multiple-choice",
                      "prompt": "En una cláusula relativa que modifica a un sustantivo (ej. \"el pastel que hizo Mary\": メアリーさんが作ったケーキ), ¿qué partícula lleva el sujeto dentro de la cláusula subordinada?",
                      "options": [
                          {
                              "id": "rel-ga",
                              "text": "Lleva が (o の), NUNCA la partícula de tema は",
                              "isCorrect": true
                          },
                          {
                              "id": "rel-wa",
                              "text": "Siempre lleva は"
                          },
                          {
                              "id": "rel-wo",
                              "text": "Lleva を"
                          }
                      ],
                      "correctAnswerId": "rel-ga",
                      "explanation": "Dentro de la oración subordinada que califica al sustantivo, el sujeto se marca con が (メアリーさんが作ったケーキ)."
                  },
                  {
                      "id": "ex-15-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Este es el libro que compré ayer en Tokio\":",
                      "japaneseVoiceText": "これはきのうとうきょうでかったほんです",
                      "wordBank": [
                          "これは",
                          "きのう",
                          "とうきょうで",
                          "かった",
                          "ほんです",
                          "かいました",
                          "の"
                      ],
                      "correctSentence": [
                          "これは",
                          "きのう",
                          "とうきょうで",
                          "かった",
                          "ほんです"
                      ],
                      "explanation": "Kore wa [kinou Toukyou de katta] hon desu (Oración en forma corta directamente antes del sustantivo)."
                  },
                  {
                      "id": "ex-15-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las frases con cláusulas calificadoras:",
                      "pairs": [
                          {
                              "id": "rc1",
                              "left": "きのう見た映画",
                              "right": "La película que vi ayer"
                          },
                          {
                              "id": "rc2",
                              "left": "ともだちがくれた時計",
                              "right": "El reloj que me regaló mi amigo"
                          },
                          {
                              "id": "rc3",
                              "left": "わたしが住んでいる町",
                              "right": "La ciudad donde vivo"
                          },
                          {
                              "id": "rc4",
                              "left": "来週行く旅館",
                              "right": "La posada a la que iré la próxima semana"
                          }
                      ],
                      "explanation": "En japonés no existe el pronombre \"que\"; la oración en forma corta antecede directamente al sustantivo."
                  }
              ]
          },
          {
              "id": "l15-node-5",
              "unitId": 15,
              "lessonNumber": 15,
              "title": "Workbook: Planificando el Viaje a Nagano",
              "japaneseTitle": "ワークブック総合（長野旅行の計画）",
              "description": "Práctica integradora de la Lección 15: armar itinerarios y describir lugares",
              "icon": "Headphones",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-15-5-1",
                      "type": "multiple-choice",
                      "prompt": "En conversación coloquial, ¿en qué se contrae la terminación 「〜ておきます / 〜ておく」 (ej. 買っておく)?",
                      "options": [
                          {
                              "id": "toku-1",
                              "text": "〜とく (買っとく / かっとく)",
                              "isCorrect": true
                          },
                          {
                              "id": "toku-2",
                              "text": "〜ちゃう (買っちゃう)"
                          },
                          {
                              "id": "toku-3",
                              "text": "〜てる (買ってる)"
                          }
                      ],
                      "correctAnswerId": "toku-1",
                      "explanation": "〜ておく se contrae a 〜とく (y 〜でおく a 〜どく, ej. 飲んでおく ➔ 飲んどく)."
                  },
                  {
                      "id": "ex-15-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Vayamos juntos a las aguas termales\":",
                      "japaneseVoiceText": "いっしょにおんせんにいこう",
                      "wordBank": [
                          "いっしょに",
                          "おんせんに",
                          "いこう",
                          "いく",
                          "いって"
                      ],
                      "correctSentence": [
                          "いっしょに",
                          "おんせんに",
                          "いこう"
                      ],
                      "explanation": "Issho ni onsen ni ikou (Propuesta casual con forma volitiva)."
                  },
                  {
                      "id": "ex-15-5-3",
                      "type": "listening",
                      "prompt": "Escucha la conversación sobre los preparativos de viaje:",
                      "japaneseVoiceText": "ホテルはもうよやくしておきましたか。ー はい、きのうよやくしておきました。",
                      "options": [
                          {
                              "id": "l15-wb-1",
                              "text": "Pregunta si ya dejó reservado el hotel; responde que sí, lo dejó reservado ayer.",
                              "isCorrect": true
                          },
                          {
                              "id": "l15-wb-2",
                              "text": "Dice que todavía no ha reservado el hotel."
                          },
                          {
                              "id": "l15-wb-3",
                              "text": "Prefiere quedarse en casa de un amigo."
                          }
                      ],
                      "correctAnswerId": "l15-wb-1",
                      "explanation": "Hoteru wa mou yoyaku shite okimashita ka. - Hai, kinou yoyaku shite okimashita."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 16: GENKI LECCIÓN 16: OBJETOS PERDIDOS
  // ==========================================
  {
      "id": 16,
      "genkiBook": "Genki II",
      "title": "Genki Lección 16: Objetos Perdidos",
      "subtitle": "〜てあげる・〜てくれる・〜てもらう, 〜時 y 〜といいですね",
      "description": "Agradece y pide favores con verbos en forma Te, domina las cláusulas temporales con 時 y pide disculpas por acciones específicas.",
      "themeColor": "#58cc02",
      "nodes": [
          {
              "id": "l16-node-1",
              "unitId": 16,
              "lessonNumber": 16,
              "title": "Vocabulario: Vida Universitaria y Estación",
              "japaneseTitle": "忘れ物と大学生活（駅員・奨学金・締め切り・推薦状）",
              "description": "Empleado de estación, becas, fechas límite, cartas de recomendación y objetos extraviados",
              "icon": "Train",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-16-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se dice \"fecha límite / plazo de entrega\" en japonés?",
                      "options": [
                          {
                              "id": "u16-shimekiri",
                              "text": "しめきり (締め切り / shimekiri)",
                              "isCorrect": true
                          },
                          {
                              "id": "u16-shougakukin",
                              "text": "しょうがくきん (奨学金 / shougakukin)"
                          },
                          {
                              "id": "u16-jugyou",
                              "text": "じゅぎょう (授業 / jugyou)"
                          }
                      ],
                      "correctAnswerId": "u16-shimekiri",
                      "explanation": "締め切り (しめきり) es \"fecha límite\". 奨学金 (しょうがくきん) es \"beca\"."
                  },
                  {
                      "id": "ex-16-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario de la Lección 16:",
                      "pairs": [
                          {
                              "id": "v16-1",
                              "left": "えきいん (駅員)",
                              "right": "Personal / Empleado de la estación"
                          },
                          {
                              "id": "v16-2",
                              "left": "しょうがくきん (奨学金)",
                              "right": "Beca escolar"
                          },
                          {
                              "id": "v16-3",
                              "left": "すいせんじょう (推薦状)",
                              "right": "Carta de recomendación"
                          },
                          {
                              "id": "v16-4",
                              "left": "わすれもの (忘れ物)",
                              "right": "Objeto olvidado / perdido"
                          }
                      ],
                      "explanation": "Vocabulario clave de Genki II Lección 16."
                  },
                  {
                      "id": "ex-16-1-3",
                      "type": "listening",
                      "prompt": "Escucha lo que le ocurrió al estudiante en el tren:",
                      "japaneseVoiceText": "でんしゃのなかにかさをわすれてしまいました",
                      "options": [
                          {
                              "id": "l16-umb",
                              "text": "Dejó olvidado su paraguas dentro del tren.",
                              "isCorrect": true
                          },
                          {
                              "id": "l16-umb2",
                              "text": "Compró un paraguas en la estación."
                          },
                          {
                              "id": "l16-umb3",
                              "text": "Le prestó un paraguas a un amigo."
                          }
                      ],
                      "correctAnswerId": "l16-umb",
                      "explanation": "Densha no naka ni kasa o wasurete shimaimashita."
                  }
              ]
          },
          {
              "id": "l16-node-2",
              "unitId": 16,
              "lessonNumber": 16,
              "title": "Dar y Recibir Favores: 〜てあげる・〜てくれる・〜てもらう",
              "japaneseTitle": "恩恵の授受（〜てあげる・〜てくれる・〜てもらう）",
              "description": "Hacer algo por alguien, que alguien haga algo por mí y recibir ayuda",
              "icon": "Heart",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-16-2-1",
                      "type": "multiple-choice",
                      "prompt": "Para decir \"Mi amigo me ayudó con la tarea (hizo el favor hacia mí)\", ¿qué combinación es la más natural?",
                      "options": [
                          {
                              "id": "fav-kureru",
                              "text": "ともだちが 宿題を 手伝ってくれました",
                              "isCorrect": true
                          },
                          {
                              "id": "fav-ageru",
                              "text": "ともだちが 宿題を 手伝ってあげました"
                          },
                          {
                              "id": "fav-oku",
                              "text": "ともだちが 宿題を 手伝っておきました"
                          }
                      ],
                      "correctAnswerId": "fav-kureru",
                      "explanation": "Forma Te + くれる indica que otra persona realiza una acción beneficiosa para mí."
                  },
                  {
                      "id": "ex-16-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Recibí el favor de que el profesor corrigiera mi ensayo\":",
                      "japaneseVoiceText": "せんせいにさくぶんをなおしてもらいました",
                      "wordBank": [
                          "せんせいに",
                          "さくぶんを",
                          "なおして",
                          "もらいました",
                          "くれました",
                          "あげました"
                      ],
                      "correctSentence": [
                          "せんせいに",
                          "さくぶんを",
                          "なおして",
                          "もらいました"
                      ],
                      "explanation": "Sensei ni sakubun o naoshite moraimashita (Persona に + Verbo Te + もらう)."
                  },
                  {
                      "id": "ex-16-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las peticiones de favores según su nivel de cortesía (L16):",
                      "pairs": [
                          {
                              "id": "req1",
                              "left": "〜ていただけませんか",
                              "right": "Muy cortés (a un profesor o jefe)"
                          },
                          {
                              "id": "req2",
                              "left": "〜てくれませんか",
                              "right": "Cortés estándar (a conocidos)"
                          },
                          {
                              "id": "req3",
                              "left": "〜てくれない？",
                              "right": "Casual / Informal (a amigos cercanos)"
                          }
                      ],
                      "explanation": "Los 3 grados de cortesía para pedir un favor en Genki L16."
                  }
              ]
          },
          {
              "id": "l16-node-3",
              "unitId": 16,
              "lessonNumber": 16,
              "title": "Esperanzas: 〜といいですね / 〜といいんですが",
              "japaneseTitle": "希望の表現（〜といいですね・〜といいんですが）",
              "description": "Deseando buena suerte a otros (\"¡Ojalá haga buen clima!\") o para uno mismo",
              "icon": "Sparkles",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-16-3-1",
                      "type": "multiple-choice",
                      "prompt": "Tu amigo perdió su billetera. ¿Cómo le dices \"¡Ojalá que aparezca / se encuentre!\"?",
                      "options": [
                          {
                              "id": "toii-1",
                              "text": "みつかるといいですね (Mitsukaru to ii desu ne)",
                              "isCorrect": true
                          },
                          {
                              "id": "toii-2",
                              "text": "みつかればいいですか"
                          },
                          {
                              "id": "toii-3",
                              "text": "みつかっておきますね"
                          }
                      ],
                      "correctAnswerId": "toii-1",
                      "explanation": "Verbo en forma corta + といいですね expresa el deseo de que algo bueno le ocurra al interlocutor."
                  },
                  {
                      "id": "ex-16-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés tu propio deseo: \"Ojalá que el examen sea fácil...\":",
                      "japaneseVoiceText": "テストがやさしいといいんですが",
                      "wordBank": [
                          "テストが",
                          "やさしい",
                          "といいんですが",
                          "やさしいだ",
                          "といいですね"
                      ],
                      "correctSentence": [
                          "テストが",
                          "やさしい",
                          "といいんですが"
                      ],
                      "explanation": "Cuando el deseo es sobre uno mismo, se prefiere 〜といいんですが (o 〜といいんだけど)."
                  },
                  {
                      "id": "ex-16-3-3",
                      "type": "listening",
                      "prompt": "Escucha el buen deseo para el viaje de mañana:",
                      "japaneseVoiceText": "あしたあめがふらないといいですね",
                      "options": [
                          {
                              "id": "l16-rain",
                              "text": "¡Ojalá que mañana no llueva!",
                              "isCorrect": true
                          },
                          {
                              "id": "l16-rain2",
                              "text": "Parece que mañana va a llover mucho."
                          },
                          {
                              "id": "l16-rain3",
                              "text": "Aunque llueva mañana, iremos."
                          }
                      ],
                      "correctAnswerId": "l16-rain",
                      "explanation": "Ashita ame ga furanai to ii desu ne (Forma corta negativa + といいですね)."
                  }
              ]
          },
          {
              "id": "l16-node-4",
              "unitId": 16,
              "lessonNumber": 16,
              "title": "Cláusulas con 〜時 (とき) y Disculpas (〜てすみません)",
              "japaneseTitle": "「〜時（とき）」の時制と「〜てすみませんでした」",
              "description": "La diferencia crucial entre \"cuando voy\" vs \"cuando fui\" con 時, y pedir perdón",
              "icon": "Clock",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-16-4-1",
                      "type": "multiple-choice",
                      "prompt": "Compara: 1) 日本へ行く時、かばんを買いました vs 2) 日本へ行った時、かばんを買いました. ¿Dónde compró el bolso en la oración 1 (行く時)?",
                      "options": [
                          {
                              "id": "toki-1",
                              "text": "En su país, ANTES de llegar a Japón (mientras iba rumbo a Japón)",
                              "isCorrect": true
                          },
                          {
                              "id": "toki-2",
                              "text": "Dentro de Japón, después de haber aterrizado"
                          },
                          {
                              "id": "toki-3",
                              "text": "Al regresar de Japón"
                          }
                      ],
                      "correctAnswerId": "toki-1",
                      "explanation": "Verbo diccionario + 時 indica que la acción principal ocurre ANTES de completarse el verbo. Forma Ta + 時 (行った時) indica DESPUÉS de llegar."
                  },
                  {
                      "id": "ex-16-4-2",
                      "type": "word-order",
                      "prompt": "Traduce la disculpa: \"Perdón por haber llegado tarde hoy\":",
                      "japaneseVoiceText": "きょうはおくれてすみませんでした",
                      "wordBank": [
                          "きょうは",
                          "おくれて",
                          "すみませんでした",
                          "おくれます",
                          "から"
                      ],
                      "correctSentence": [
                          "きょうは",
                          "おくれて",
                          "すみませんでした"
                      ],
                      "explanation": "Kyou wa okurete sumimasen deshita (Verbo Forma Te + すみませんでした)."
                  },
                  {
                      "id": "ex-16-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cómo se une cada palabra con 時 (とき):",
                      "pairs": [
                          {
                              "id": "tk1",
                              "left": "ひまな時 (な-adj)",
                              "right": "Cuando estoy libre"
                          },
                          {
                              "id": "tk2",
                              "left": "こどもの時 (Sustantivo)",
                              "right": "Cuando era niño"
                          },
                          {
                              "id": "tk3",
                              "left": "さびしい時 (い-adj)",
                              "right": "Cuando me siento triste/solo"
                          },
                          {
                              "id": "tk4",
                              "left": "つかれた時 (Verbo Ta)",
                              "right": "Cuando me canso (ya cansado)"
                          }
                      ],
                      "explanation": "Con な-adjetivos va な, con sustantivos va の, y con い-adjetivos/verbos va directo."
                  }
              ]
          },
          {
              "id": "l16-node-5",
              "unitId": 16,
              "lessonNumber": 16,
              "title": "Workbook: En la Oficina de Objetos Perdidos",
              "japaneseTitle": "ワークブック総合（忘れ物取扱所とお願い）",
              "description": "Práctica integradora de la Lección 16: pedir cartas de recomendación y recuperar objetos",
              "icon": "Headphones",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-16-5-1",
                      "type": "multiple-choice",
                      "prompt": "Quieres pedirle a tu profesor que te escriba una carta de recomendación (すいせんじょう). ¿Cuál es la forma más apropiada?",
                      "options": [
                          {
                              "id": "prof-req",
                              "text": "先生、推薦状を書いていただけませんか。",
                              "isCorrect": true
                          },
                          {
                              "id": "prof-req2",
                              "text": "先生、推薦状を書いてくれない？"
                          },
                          {
                              "id": "prof-req3",
                              "text": "先生、推薦状を書いてあげましょうか。"
                          }
                      ],
                      "correctAnswerId": "prof-req",
                      "explanation": "Con un superior o profesor se usa 〜ていただけませんか."
                  },
                  {
                      "id": "ex-16-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Perdón por no haber llamado ayer\":",
                      "japaneseVoiceText": "きのうでんわしなくてすみませんでした",
                      "wordBank": [
                          "きのう",
                          "でんわしなくて",
                          "すみませんでした",
                          "でんわしない",
                          "で"
                      ],
                      "correctSentence": [
                          "きのう",
                          "でんわしなくて",
                          "すみませんでした"
                      ],
                      "explanation": "Forma negativa Te (〜なくて) + すみませんでした: Kinou denwa shinakute sumimasen deshita."
                  },
                  {
                      "id": "ex-16-5-3",
                      "type": "listening",
                      "prompt": "Escucha lo que hizo el empleado de la estación por Mary:",
                      "japaneseVoiceText": "えきいんさんがわすれものをさがしてくれました",
                      "options": [
                          {
                              "id": "l16-wb-1",
                              "text": "El empleado de la estación tuvo la amabilidad de buscar el objeto perdido por ella.",
                              "isCorrect": true
                          },
                          {
                              "id": "l16-wb-2",
                              "text": "Mary ayudó al empleado de la estación."
                          },
                          {
                              "id": "l16-wb-3",
                              "text": "El empleado no pudo encontrar el tren."
                          }
                      ],
                      "correctAnswerId": "l16-wb-1",
                      "explanation": "Ekiin-san ga wasuremono o sagashite kuremashita."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 17: GENKI LECCIÓN 17: QUEJAS Y CHISMES
  // ==========================================
  {
      "id": 17,
      "genkiBook": "Genki II",
      "title": "Genki Lección 17: Quejas y Chismes",
      "subtitle": "Reporte 〜そうです / 〜って, Condicional 〜たら y 〜なくてもいい",
      "description": "Transmite noticias o rumores (\"escuché que...\"), plantea condiciones con 〜たら y expresa falta de obligación con 〜なくてもいいです.",
      "themeColor": "#ce82ff",
      "nodes": [
          {
              "id": "l17-node-1",
              "unitId": 17,
              "lessonNumber": 17,
              "title": "Vocabulario: Noticias y Vida Cotidiana",
              "japaneseTitle": "ニュースと日常（宝くじ・ひげ・かぎ・お湯）",
              "description": "Lotería, noticias, llaves, agua caliente, electrodomésticos y situaciones domésticas",
              "icon": "MessageCircle",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-17-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se dice \"ganarse la lotería\" en japonés según Genki L17?",
                      "options": [
                          {
                              "id": "u17-lot",
                              "text": "たからくじに あたる (宝くじに当たる)",
                              "isCorrect": true
                          },
                          {
                              "id": "u17-lot2",
                              "text": "たからくじを ひく"
                          },
                          {
                              "id": "u17-lot3",
                              "text": "たからくじが こわれる"
                          }
                      ],
                      "correctAnswerId": "u17-lot",
                      "explanation": "宝くじに当たる (takarakuji ni ataru) significa \"acertar / ganar la lotería\"."
                  },
                  {
                      "id": "ex-17-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario de la Lección 17:",
                      "pairs": [
                          {
                              "id": "v17-1",
                              "left": "かぎ (鍵)",
                              "right": "Llave / Cerradura"
                          },
                          {
                              "id": "v17-2",
                              "left": "おゆ (お湯)",
                              "right": "Agua caliente"
                          },
                          {
                              "id": "v17-3",
                              "left": "ひげ (髭)",
                              "right": "Barba / Bigote"
                          },
                          {
                              "id": "v17-4",
                              "left": "ぬぐ (脱ぐ)",
                              "right": "Quitarse (ropa o zapatos)"
                          }
                      ],
                      "explanation": "Vocabulario esencial de Genki II Lección 17."
                  },
                  {
                      "id": "ex-17-1-3",
                      "type": "listening",
                      "prompt": "Escucha el rumor que cuentan en la oficina:",
                      "japaneseVoiceText": "たなかさんはらいげつけっこんするそうです",
                      "options": [
                          {
                              "id": "l17-rum1",
                              "text": "Dicen / Escuché que el Sr. Tanaka se casa el próximo mes.",
                              "isCorrect": true
                          },
                          {
                              "id": "l17-rum2",
                              "text": "El Sr. Tanaka se divorció el mes pasado."
                          },
                          {
                              "id": "l17-rum3",
                              "text": "Parece que el Sr. Tanaka no quiere casarse."
                          }
                      ],
                      "correctAnswerId": "l17-rum1",
                      "explanation": "Tanaka-san wa raigetsu kekkon suru sou desu (Forma corta + そうです = escuché que...)."
                  }
              ]
          },
          {
              "id": "l17-node-2",
              "unitId": 17,
              "lessonNumber": 17,
              "title": "Reporte de Oídas: 〜そうです y 〜って",
              "japaneseTitle": "伝聞の「〜そうです」とカジュアルな「〜って」",
              "description": "Diferencia entre \"se ve delicioso\" (L13) y \"escuché que es delicioso\" (L17)",
              "icon": "HelpCircle",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-17-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se distingue gramaticalmente \"Se ve delicioso\" (L13, apariencia) de \"Escuché que es delicioso\" (L17, reporte de oídas)?",
                      "options": [
                          {
                              "id": "sou-diff",
                              "text": "Apariencia quita la い (おいしそうです); Reporte conserva la forma corta completa (おいしいそうです)",
                              "isCorrect": true
                          },
                          {
                              "id": "sou-diff2",
                              "text": "Ambos se escriben exactamente igual"
                          },
                          {
                              "id": "sou-diff3",
                              "text": "Reporte usa la forma Te"
                          }
                      ],
                      "correctAnswerId": "sou-diff",
                      "explanation": "Para reportar información oída, se deja la oración en forma corta intacta + そうです (おいしいそうです / 先生だそうです)."
                  },
                  {
                      "id": "ex-17-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Según el pronóstico del tiempo, dicen que mañana hará frío\":",
                      "japaneseVoiceText": "てんきよほうによるとあしたはさむいそうです",
                      "wordBank": [
                          "てんきよほうによると",
                          "あしたは",
                          "さむい",
                          "そうです",
                          "さむそう",
                          "です"
                      ],
                      "correctSentence": [
                          "てんきよほうによると",
                          "あしたは",
                          "さむい",
                          "そうです"
                      ],
                      "explanation": "Tenki yohou ni yoru to, ashita wa samui sou desu (〜によると = según...)."
                  },
                  {
                      "id": "ex-17-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las expresiones coloquiales con 〜って (L17):",
                      "pairs": [
                          {
                              "id": "tte1",
                              "left": "メアリーさん、来ないって",
                              "right": "Dicen que Mary no vendrá"
                          },
                          {
                              "id": "tte2",
                              "left": "今日テストがあるって",
                              "right": "Escuché que hoy hay examen"
                          },
                          {
                              "id": "tte3",
                              "left": "「ありがとう」って言って",
                              "right": "Dijo \"gracias\""
                          }
                      ],
                      "explanation": "En conversación informal, 〜って al final equivale a 〜そうです o 〜と言っていました."
                  }
              ]
          },
          {
              "id": "l17-node-3",
              "unitId": 17,
              "lessonNumber": 17,
              "title": "El Condicional 〜たら (Si / Cuando...)",
              "japaneseTitle": "条件の「〜たら」（もし〜たら）",
              "description": "Si me gano la lotería, si hace buen tiempo, cuando llegue a casa",
              "icon": "Sparkles",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-17-3-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se construye el condicional 「〜たら」 para cualquier verbo, adjetivo o sustantivo?",
                      "options": [
                          {
                              "id": "tara-rule",
                              "text": "Tomando la forma corta en PASADO (Forma Ta) y añadiendo ら (ej. 行ったら、安かったら、雨だったら)",
                              "isCorrect": true
                          },
                          {
                              "id": "tara-dic",
                              "text": "Forma diccionario + たら"
                          },
                          {
                              "id": "tara-masu",
                              "text": "Raíz Masu + たら"
                          }
                      ],
                      "correctAnswerId": "tara-rule",
                      "explanation": "¡Muy fácil! Cualquier palabra en pasado corto (〜た / 〜だった / 〜かった) + ら forma el condicional 〜たら."
                  },
                  {
                      "id": "ex-17-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Si está barato, compraré una computadora\":",
                      "japaneseVoiceText": "やすかったらパソコンをかいます",
                      "wordBank": [
                          "やすかったら",
                          "パソコンを",
                          "かいます",
                          "やすいら",
                          "かったら"
                      ],
                      "correctSentence": [
                          "やすかったら",
                          "パソコンを",
                          "かいます"
                      ],
                      "explanation": "Yasukattara pasokon o kaimasu (やすい ➔ やすかった + ら)."
                  },
                  {
                      "id": "ex-17-3-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada condición con 〜たら y su significado:",
                      "pairs": [
                          {
                              "id": "tr1",
                              "left": "あめがふったら",
                              "right": "Si llueve..."
                          },
                          {
                              "id": "tr2",
                              "left": "おかねがあったら",
                              "right": "Si tuviera dinero..."
                          },
                          {
                              "id": "tr3",
                              "left": "ひまだったら",
                              "right": "Si estás libre..."
                          },
                          {
                              "id": "tr4",
                              "left": "うちへかえったら",
                              "right": "Cuando llegue a casa..."
                          }
                      ],
                      "explanation": "〜たら sirve tanto para condiciones hipotéticas (\"si...\") como temporales (\"cuando haya ocurrido...\")."
                  }
              ]
          },
          {
              "id": "l17-node-4",
              "unitId": 17,
              "lessonNumber": 17,
              "title": "〜なくてもいいです y 〜みたいです",
              "japaneseTitle": "不必要「〜なくてもいいです」と比況「〜みたいです」",
              "description": "No hace falta que te quites los zapatos (〜なくてもいい) y \"parece como...\" (〜みたい)",
              "icon": "Check",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-17-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se dice \"No es necesario que pagues / No hace falta pagar\" usando el verbo はらう (pagar)?",
                      "options": [
                          {
                              "id": "naku-1",
                              "text": "はらわなくてもいいです (harawanakute mo ii desu)",
                              "isCorrect": true
                          },
                          {
                              "id": "naku-2",
                              "text": "はらわないほうがいいです"
                          },
                          {
                              "id": "naku-3",
                              "text": "はらってはいけません"
                          }
                      ],
                      "correctAnswerId": "naku-1",
                      "explanation": "Forma ない (はらわない) ➔ se quita い y se agrega くてもいいです (\"no hace falta hacer X\")."
                  },
                  {
                      "id": "ex-17-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Antes de salir, cierro la ventana\":",
                      "japaneseVoiceText": "でかけるまえにまどをしめます",
                      "wordBank": [
                          "でかける",
                          "まえに",
                          "まどを",
                          "しめます",
                          "でかけた",
                          "てから"
                      ],
                      "correctSentence": [
                          "でかける",
                          "まえに",
                          "まどを",
                          "しめます"
                      ],
                      "explanation": "Verbo en forma diccionario + まえに (antes de salir): Dekakeru mae ni mado o shimemasu."
                  },
                  {
                      "id": "ex-17-4-3",
                      "type": "listening",
                      "prompt": "Escucha lo que dicen sobre el examen de mañana:",
                      "japaneseVoiceText": "あしたはやすみですから、はやくおきなくてもいいですよ",
                      "options": [
                          {
                              "id": "l17-sleep",
                              "text": "Como mañana es día libre, no hace falta que te levantes temprano.",
                              "isCorrect": true
                          },
                          {
                              "id": "l17-sleep2",
                              "text": "Mañana debes levantarte muy temprano."
                          },
                          {
                              "id": "l17-sleep3",
                              "text": "Está prohibido levantarse temprano mañana."
                          }
                      ],
                      "correctAnswerId": "l17-sleep",
                      "explanation": "Ashita wa yasumi desu kara, hayaku okinakute mo ii desu yo."
                  }
              ]
          },
          {
              "id": "l17-node-5",
              "unitId": 17,
              "lessonNumber": 17,
              "title": "Workbook: 〜前に vs 〜てから",
              "japaneseTitle": "ワークブック総合（〜前に・〜てから・伝聞）",
              "description": "Secuencia de eventos antes (前に) y después (てから) y repaso de rumores",
              "icon": "Headphones",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-17-5-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué tiempo verbal se coloca SIEMPRE antes de 「まえに」 (antes de...), incluso si toda la oración ocurrió ayer?",
                      "options": [
                          {
                              "id": "mae-dic",
                              "text": "Siempre el verbo en Forma Diccionario (ej. 寝る前に本を読みました)",
                              "isCorrect": true
                          },
                          {
                              "id": "mae-ta",
                              "text": "El verbo en pasado (Forma Ta)"
                          },
                          {
                              "id": "mae-te",
                              "text": "El verbo en Forma Te"
                          }
                      ],
                      "correctAnswerId": "mae-dic",
                      "explanation": "Antes de 前に el verbo SIEMPRE va en presente de diccionario (寝る前に), sin importar si la oración final es pasada."
                  },
                  {
                      "id": "ex-17-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Después de lavarme las manos, cené\":",
                      "japaneseVoiceText": "てをあらってからばんごはんをたべました",
                      "wordBank": [
                          "てを",
                          "あらってから",
                          "ばんごはんを",
                          "たべました",
                          "あらうまえに"
                      ],
                      "correctSentence": [
                          "てを",
                          "あらってから",
                          "ばんごはんを",
                          "たべました"
                      ],
                      "explanation": "Te o aratte kara bangohan o tabemashita (Forma Te + から = después de hacer)."
                  },
                  {
                      "id": "ex-17-5-3",
                      "type": "listening",
                      "prompt": "Escucha qué haría Kenji si ganara la lotería:",
                      "japaneseVoiceText": "たからくじにあたったら、せかいりょこうがしたいです",
                      "options": [
                          {
                              "id": "l17-wb-1",
                              "text": "Si se ganara la lotería, querría hacer un viaje alrededor del mundo.",
                              "isCorrect": true
                          },
                          {
                              "id": "l17-wb-2",
                              "text": "Ya se ganó la lotería y viajó por el mundo."
                          },
                          {
                              "id": "l17-wb-3",
                              "text": "Nunca compra billetes de lotería."
                          }
                      ],
                      "correctAnswerId": "l17-wb-1",
                      "explanation": "Takarakuji ni atattara, sekai ryokou ga shitai desu."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 18: GENKI LECCIÓN 18: EL TRABAJO DE JOHN
  // ==========================================
  {
      "id": 18,
      "genkiBook": "Genki II",
      "title": "Genki Lección 18: El Trabajo de John",
      "subtitle": "Transitivos vs. Intransitivos, 〜てしまう, 〜と y 〜ながら",
      "description": "Domina los pares de verbos transitivos e intransitivos, describe estados con 〜ています, acciones accidentales con 〜てしまう y arrepentimientos con 〜ばよかったです.",
      "themeColor": "#ff9600",
      "nodes": [
          {
              "id": "l18-node-1",
              "unitId": 18,
              "lessonNumber": 18,
              "title": "Pares Transitivos e Intransitivos",
              "japaneseTitle": "他動詞と自動詞（開ける/開く・つける/つく・壊す/壊れる）",
              "description": "Diferencia entre \"yo abro la puerta\" (を開ける) y \"la puerta se abre\" (が開く)",
              "icon": "Flame",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-18-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cuál es la diferencia fundamental de partículas entre un verbo Transitivo (他動詞, ej. あける) y uno Intransitivo (自動詞, ej. あく)?",
                      "options": [
                          {
                              "id": "tr-intr",
                              "text": "El Transitivo lleva objeto directo con を (ドアを開ける); el Intransitivo lleva sujeto con が (ドアが開く)",
                              "isCorrect": true
                          },
                          {
                              "id": "tr-intr2",
                              "text": "Ambos usan siempre la partícula を"
                          },
                          {
                              "id": "tr-intr3",
                              "text": "El Intransitivo solo se usa con personas"
                          }
                      ],
                      "correctAnswerId": "tr-intr",
                      "explanation": "Transitivo = un agente actúa sobre un objeto (を). Intransitivo = la cosa cambia por sí sola o describe su estado (が)."
                  },
                  {
                      "id": "ex-18-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo Transitivo (を) con su pareja Intransitiva (が):",
                      "pairs": [
                          {
                              "id": "ti1",
                              "left": "つける (encender algo)",
                              "right": "つく (encenderse)"
                          },
                          {
                              "id": "ti2",
                              "left": "けす (apagar algo)",
                              "right": "きえる (apagarse)"
                          },
                          {
                              "id": "ti3",
                              "left": "こわす (romper algo)",
                              "right": "こわれる (romperse)"
                          },
                          {
                              "id": "ti4",
                              "left": "おとす (dejar caer algo)",
                              "right": "おちる (caerse)"
                          }
                      ],
                      "explanation": "Pares esenciales de verbos transitivos e intransitivos de la Lección 18."
                  },
                  {
                      "id": "ex-18-1-3",
                      "type": "word-order",
                      "prompt": "Traduce al japonés describing el estado actual: \"La ventana está abierta\":",
                      "japaneseVoiceText": "まどがあいています",
                      "wordBank": [
                          "まど",
                          "が",
                          "あいています",
                          "あけています",
                          "を"
                      ],
                      "correctSentence": [
                          "まど",
                          "が",
                          "あいています"
                      ],
                      "explanation": "Verbo Intransitivo en forma Te + います describe el estado resultante actual: Mado ga aite imasu."
                  }
              ]
          },
          {
              "id": "l18-node-2",
              "unitId": 18,
              "lessonNumber": 18,
              "title": "Finalización o Accidente: 〜てしまう (〜ちゃう)",
              "japaneseTitle": "完了・遺憾の「〜てしまう」（〜ちゃう・〜じゃう）",
              "description": "Terminar por completo una tarea o hacer algo por error / con pesar",
              "icon": "ShieldAlert",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-18-2-1",
                      "type": "multiple-choice",
                      "prompt": "En conversación casual, ¿cómo se contraen 「〜てしまう」 y 「〜でしまう」 (ej. 食べてしまう / 飲んでしまう)?",
                      "options": [
                          {
                              "id": "chau-1",
                              "text": "〜てしまう ➔ 〜ちゃう (食べちゃう) / 〜でしまう ➔ 〜じゃう (飲んじゃう)",
                              "isCorrect": true
                          },
                          {
                              "id": "chau-2",
                              "text": "〜てしまう ➔ 〜とく / 〜でしまう ➔ 〜どく"
                          },
                          {
                              "id": "chau-3",
                              "text": "〜てしまう ➔ 〜てる"
                          }
                      ],
                      "correctAnswerId": "chau-1",
                      "explanation": "Contracción oral súper frecuente: 〜てしまう ➔ 〜ちゃう, 〜でしまう ➔ 〜じゃう."
                  },
                  {
                      "id": "ex-18-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés con matiz de lamento: \"¡Olvidé mi tarea en casa!\":",
                      "japaneseVoiceText": "うちにしくじをわすれてしまいました",
                      "wordBank": [
                          "うちに",
                          "しゅくだいを",
                          "わすれてしまいました",
                          "わすれました",
                          "わすれておきました"
                      ],
                      "correctSentence": [
                          "うちに",
                          "しゅくだいを",
                          "わすれてしまいました"
                      ],
                      "explanation": "Uchi ni shukudai o wasurete shimaimashita (〜てしまいました expresa accidente o pesar)."
                  },
                  {
                      "id": "ex-18-2-3",
                      "type": "listening",
                      "prompt": "Escucha lo que pasó con el helado en el refrigerador:",
                      "japaneseVoiceText": "おとうとがアイスクリームをぜんぶたべちゃった",
                      "options": [
                          {
                              "id": "l18-ice",
                              "text": "Mi hermano menor se comió todito el helado (たべちゃった).",
                              "isCorrect": true
                          },
                          {
                              "id": "l18-ice2",
                              "text": "Mi hermano menor compró helado para todos."
                          },
                          {
                              "id": "l18-ice3",
                              "text": "El helado se derritió en la mesa."
                          }
                      ],
                      "correctAnswerId": "l18-ice",
                      "explanation": "Otouto ga aisukuriimu o zenbu tabechatta (たべてしまった ➔ たべちゃった)."
                  }
              ]
          },
          {
              "id": "l18-node-3",
              "unitId": 18,
              "lessonNumber": 18,
              "title": "Consecuencia Natural (〜と) y Simultaneidad (〜ながら)",
              "japaneseTitle": "必然の条件「〜と」と同時進行「〜ながら」",
              "description": "Siempre que llega la primavera hace calor (〜と) y estudiar mientras escuchas música (〜ながら)",
              "icon": "Music",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-18-3-1",
                      "type": "multiple-choice",
                      "prompt": "En la cláusula condicional con 「〜と」 (\"siempre que pasa A, automáticamente ocurre B\"), ¿qué restricción existe para la segunda parte (B)?",
                      "options": [
                          {
                              "id": "to-res",
                              "text": "B debe ser un hecho automático/natural; NO puede ser una invitación (〜ましょう), deseo (〜たい) ni petición (〜てください)",
                              "isCorrect": true
                          },
                          {
                              "id": "to-res2",
                              "text": "B siempre debe ser una orden"
                          },
                          {
                              "id": "to-res3",
                              "text": "A debe estar en pasado"
                          }
                      ],
                      "correctAnswerId": "to-res",
                      "explanation": "Con 〜と la consecuencia es automática o inevitable (ej. このボタンを押すと、お釣りが出ます)."
                  },
                  {
                      "id": "ex-18-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Estudio mientras escucho música\":",
                      "japaneseVoiceText": "おんがくをききながらべんきょうします",
                      "wordBank": [
                          "おんがくを",
                          "ききながら",
                          "べんきょうします",
                          "きくながら",
                          "きいてながら"
                      ],
                      "correctSentence": [
                          "おんがくを",
                          "ききながら",
                          "べんきょうします"
                      ],
                      "explanation": "Raíz Masu (きき) + ながら + acción principal: Ongaku o kikinagara benkyou shimasu."
                  },
                  {
                      "id": "ex-18-3-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las oraciones con 〜と y 〜ながら:",
                      "pairs": [
                          {
                              "id": "tn1",
                              "left": "春になると暖かくなります",
                              "right": "Cuando llega la primavera, se pone cálido"
                          },
                          {
                              "id": "tn2",
                              "left": "右へ曲がると駅があります",
                              "right": "Si giras a la derecha, está la estación"
                          },
                          {
                              "id": "tn3",
                              "left": "アルバイトをしながら大学に通う",
                              "right": "Ir a la universidad mientras se trabaja"
                          },
                          {
                              "id": "tn4",
                              "left": "お茶を飲みながら話しましょう",
                              "right": "Conversemos mientras tomamos té"
                          }
                      ],
                      "explanation": "Consecuencia automática con 〜と y acciones simultáneas con 〜ながら."
                  }
              ]
          },
          {
              "id": "l18-node-4",
              "unitId": 18,
              "lessonNumber": 18,
              "title": "Arrepentimiento: 〜ばよかったです",
              "japaneseTitle": "後悔の表現（〜ばよかったです：Ojalá hubiera...）",
              "description": "Ojalá hubiera estudiado más, ojalá no hubiera ido a esa fiesta",
              "icon": "HelpCircle",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-18-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se expresa \"Ojalá hubiera estudiado más\" usando el verbo べんきょうする?",
                      "options": [
                          {
                              "id": "bayo-1",
                              "text": "もっと 勉強すれば よかったです (benkyou sureba yokatta desu)",
                              "isCorrect": true
                          },
                          {
                              "id": "bayo-2",
                              "text": "もっと 勉強したら いいです"
                          },
                          {
                              "id": "bayo-3",
                              "text": "もっと 勉強しなくて よかったです"
                          }
                      ],
                      "correctAnswerId": "bayo-1",
                      "explanation": "Forma condicional ば + よかったです expresa arrepentimiento sobre el pasado (\"ojalá hubiera...\")."
                  },
                  {
                      "id": "ex-18-4-2",
                      "type": "word-order",
                      "prompt": "Traduce el arrepentimiento negativo: \"Ojalá NO hubiera comprado este reloj\":",
                      "japaneseVoiceText": "このとけいをかわなければよかったです",
                      "wordBank": [
                          "このとけいを",
                          "かわなければ",
                          "よかったです",
                          "かえば",
                          "かわない"
                      ],
                      "correctSentence": [
                          "このとけいを",
                          "かわなければ",
                          "よかったです"
                      ],
                      "explanation": "Para \"ojalá NO hubiera hecho X\", se usa Forma ない sin い + ければよかったです (かわなければよかったです)."
                  },
                  {
                      "id": "ex-18-4-3",
                      "type": "listening",
                      "prompt": "Escucha de qué se arrepiente Mary después del viaje:",
                      "japaneseVoiceText": "もっとしゃしんをとればよかったです",
                      "options": [
                          {
                              "id": "l18-reg",
                              "text": "Se arrepiente: \"¡Ojalá hubiera tomado más fotos!\".",
                              "isCorrect": true
                          },
                          {
                              "id": "l18-reg2",
                              "text": "Se alegra de haber tomado muchas fotos."
                          },
                          {
                              "id": "l18-reg3",
                              "text": "Quiere comprar una cámara nueva mañana."
                          }
                      ],
                      "correctAnswerId": "l18-reg",
                      "explanation": "Motto shashin o toreba yokatta desu (とる ➔ とれば + よかったです)."
                  }
              ]
          },
          {
              "id": "l18-node-5",
              "unitId": 18,
              "lessonNumber": 18,
              "title": "Workbook: Estados y Accidentes en la Tienda",
              "japaneseTitle": "ワークブック総合（自動詞の「〜ています」と「〜ちゃう」）",
              "description": "Práctica integradora de la Lección 18: describir desperfectos y situaciones cotidianas",
              "icon": "Headphones",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-18-5-1",
                      "type": "multiple-choice",
                      "prompt": "Ves que tu camisa tiene una mancha y quieres decir \"La camisa está sucia\". ¿Cuál es la forma correcta?",
                      "options": [
                          {
                              "id": "shirt-1",
                              "text": "シャツが よごれています (Intransitivo よごれる + ています)",
                              "isCorrect": true
                          },
                          {
                              "id": "shirt-2",
                              "text": "シャツを よごしています"
                          },
                          {
                              "id": "shirt-3",
                              "text": "シャツが よごします"
                          }
                      ],
                      "correctAnswerId": "shirt-1",
                      "explanation": "よごれる (ensuciarse, intransitivo) en 〜ています significa \"está sucio\"."
                  },
                  {
                      "id": "ex-18-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Como el aire acondicionado está encendido, hace frío\":",
                      "japaneseVoiceText": "エアコンがついていますからさむいです",
                      "wordBank": [
                          "エアコンが",
                          "ついていますから",
                          "さむいです",
                          "つけていますから",
                          "を"
                      ],
                      "correctSentence": [
                          "エアコンが",
                          "ついていますから",
                          "さむいです"
                      ],
                      "explanation": "Eakon ga tsuite imasu kara samui desu (つく = estar encendido)."
                  },
                  {
                      "id": "ex-18-5-3",
                      "type": "listening",
                      "prompt": "Escucha lo que pasó con la computadora de John:",
                      "japaneseVoiceText": "パソコンがこわれてしまいました。なおさなければいけません。",
                      "options": [
                          {
                              "id": "l18-wb-1",
                              "text": "La computadora se descompuso por completo; tiene que repararla.",
                              "isCorrect": true
                          },
                          {
                              "id": "l18-wb-2",
                              "text": "John compró una computadora nueva hoy."
                          },
                          {
                              "id": "l18-wb-3",
                              "text": "La computadora funciona perfectamente."
                          }
                      ],
                      "correctAnswerId": "l18-wb-1",
                      "explanation": "Pasokon ga kowarete shimaimashita. Naosanakereba ikemasen."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 19: GENKI LECCIÓN 19: CONOCIENDO AL JEFE
  // ==========================================
  {
      "id": 19,
      "genkiBook": "Genki II",
      "title": "Genki Lección 19: Conociendo al Jefe",
      "subtitle": "Lenguaje Honorífico (尊敬語), 〜てくれてありがとう y 〜はずです",
      "description": "Habla con respeto sobre las acciones de tus superiores o clientes con Sonkeigo, agradece favores específicos y expresa suposiciones lógicas.",
      "themeColor": "#00cd9c",
      "nodes": [
          {
              "id": "l19-node-1",
              "unitId": 19,
              "lessonNumber": 19,
              "title": "Vocabulario: Etiqueta Empresarial y Oficina",
              "japaneseTitle": "会社とマナー（部長・奥様・招待・お礼）",
              "description": "Jefe de departamento, esposa de otra persona, invitaciones, agradecimientos y modales corporativos",
              "icon": "Briefcase",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-19-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se refiere uno respetuosamente a la esposa de otra persona (por ejemplo, la esposa del jefe) en japonés?",
                      "options": [
                          {
                              "id": "u19-okusama",
                              "text": "おくさま (奥様 / okusama)",
                              "isCorrect": true
                          },
                          {
                              "id": "u19-tsuma",
                              "text": "つま (妻 / tsuma - solo para la propia esposa)"
                          },
                          {
                              "id": "u19-haha",
                              "text": "はは (母)"
                          }
                      ],
                      "correctAnswerId": "u19-okusama",
                      "explanation": "奥様 (おくさま) u 奥さん se usa para la esposa de otra persona; 妻 (つま) es para la propia."
                  },
                  {
                      "id": "ex-19-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario formal de la Lección 19:",
                      "pairs": [
                          {
                              "id": "v19-1",
                              "left": "ぶちょう (部長)",
                              "right": "Jefe de departamento / Gerente"
                          },
                          {
                              "id": "v19-2",
                              "left": "おれい (お礼)",
                              "right": "Agradecimiento / Expresión de gratitud"
                          },
                          {
                              "id": "v19-3",
                              "left": "しょうたいする (招待する)",
                              "right": "Invitar formalmente"
                          },
                          {
                              "id": "v19-4",
                              "left": "けいご (敬語)",
                              "right": "Lenguaje honorífico / de respeto"
                          }
                      ],
                      "explanation": "Vocabulario corporativo y de cortesía de Genki II Lección 19."
                  },
                  {
                      "id": "ex-19-1-3",
                      "type": "listening",
                      "prompt": "Escucha lo que el recepcionista le dice al visitante:",
                      "japaneseVoiceText": "こちらへどうぞ。しょうしょうおまちください。",
                      "options": [
                          {
                              "id": "l19-wait",
                              "text": "Por aquí, por favor. Espere un momento, por favor.",
                              "isCorrect": true
                          },
                          {
                              "id": "l19-wait2",
                              "text": "La oficina ya cerró por hoy."
                          },
                          {
                              "id": "l19-wait3",
                              "text": "Por favor firme este documento."
                          }
                      ],
                      "correctAnswerId": "l19-wait",
                      "explanation": "Kochira e douzo. Shoushou omachi kudasai (お + Raíz Masu + ください)."
                  }
              ]
          },
          {
              "id": "l19-node-2",
              "unitId": 19,
              "lessonNumber": 19,
              "title": "Verbos Honoríficos (尊敬語 - Sonkeigo)",
              "japaneseTitle": "尊敬語（いらっしゃる・召し上がる・おっしゃる・お〜になる）",
              "description": "Eleva las acciones del profesor, jefe o cliente con los verbos honoríficos especiales y regulares",
              "icon": "Award",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-19-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿A qué tres verbos básicos reemplaza el verbo honorífico especial 「いらっしゃる」 (en presente cortés: いらっしゃいます)?",
                      "options": [
                          {
                              "id": "son-ira",
                              "text": "いく (ir), くる (venir) e いる (estar)",
                              "isCorrect": true
                          },
                          {
                              "id": "son-ira2",
                              "text": "たべる (comer), のむ (beber) y みる (ver)"
                          },
                          {
                              "id": "son-ira3",
                              "text": "いう (decir), する (hacer) y ねる (dormir)"
                          }
                      ],
                      "correctAnswerId": "son-ira",
                      "explanation": "いらっしゃる es el honorífico para いく, くる e いる. Su forma Masu irregular es いらっしゃいます."
                  },
                  {
                      "id": "ex-19-2-2",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo común con su equivalente Honorífico (尊敬語):",
                      "pairs": [
                          {
                              "id": "sp1",
                              "left": "たべる / のむ (comer/beber)",
                              "right": "めしあがる (召し上がる)"
                          },
                          {
                              "id": "sp2",
                              "left": "いう (decir)",
                              "right": "おっしゃる (おっしゃいます)"
                          },
                          {
                              "id": "sp3",
                              "left": "みる (ver / mirar)",
                              "right": "ごらんになる (ご覧になる)"
                          },
                          {
                              "id": "sp4",
                              "left": "する (hacer)",
                              "right": "なさる (なさいます)"
                          }
                      ],
                      "explanation": "Tabla esencial de verbos irregulares de respeto (Sonkeigo) en Genki L19."
                  },
                  {
                      "id": "ex-19-2-3",
                      "type": "word-order",
                      "prompt": "Para verbos sin forma especial (como かえる), usa お + Raíz Masu + になります: \"¿A qué hora regresa el profesor?\":",
                      "japaneseVoiceText": "せんせいはなんじにおかえりになりますか",
                      "wordBank": [
                          "せんせいは",
                          "なんじに",
                          "おかえりに",
                          "なりますか",
                          "かえりますか",
                          "を"
                      ],
                      "correctSentence": [
                          "せんせいは",
                          "なんじに",
                          "おかえりに",
                          "なりますか"
                      ],
                      "explanation": "Sensei wa nanji ni okaeri ni narimasu ka (お + かえり + になります)."
                  }
              ]
          },
          {
              "id": "l19-node-3",
              "unitId": 19,
              "lessonNumber": 19,
              "title": "Agradecer (〜てくれてありがとう) y Alegrarse (〜てよかったです)",
              "japaneseTitle": "感謝「〜てくださってありがとう」と安堵「〜てよかったです」",
              "description": "Gracias por ayudarme y \"¡Qué bueno que estudié japonés!\"",
              "icon": "Heart",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-19-3-1",
                      "type": "multiple-choice",
                      "prompt": "Para agradecerle de forma MUY cortés a un superior por haberte invitado (\"Muchas gracias por haberme invitado\"), ¿qué expresión usas?",
                      "options": [
                          {
                              "id": "thx-1",
                              "text": "招待してくださって、ありがとうございました",
                              "isCorrect": true
                          },
                          {
                              "id": "thx-2",
                              "text": "招待してくれて、ありがとう"
                          },
                          {
                              "id": "thx-3",
                              "text": "招待してあげて、ありがとうございました"
                          }
                      ],
                      "correctAnswerId": "thx-1",
                      "explanation": "Con superiores se usa 〜てくださってありがとうございました; con amigos se usa 〜てくれてありがとう."
                  },
                  {
                      "id": "ex-19-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"¡Qué bueno que vine a Japón! (Me alegra haber venido)\":",
                      "japaneseVoiceText": "にほんへきてよかったです",
                      "wordBank": [
                          "にほんへ",
                          "きて",
                          "よかったです",
                          "くれば",
                          "きたら"
                      ],
                      "correctSentence": [
                          "にほんへ",
                          "きて",
                          "よかったです"
                      ],
                      "explanation": "Verbo en Forma Te + よかったです expresa alivio o satisfacción real por algo que sí ocurrió (Nihon e kite yokatta desu)."
                  },
                  {
                      "id": "ex-19-3-3",
                      "type": "listening",
                      "prompt": "Escucha el agradecimiento de Mary a su amiga:",
                      "japaneseVoiceText": "きのうはてつだってくれてありがとう",
                      "options": [
                          {
                              "id": "l19-thx",
                              "text": "¡Gracias por haberme ayudado ayer!",
                              "isCorrect": true
                          },
                          {
                              "id": "l19-thx2",
                              "text": "Perdón por no haberte ayudado ayer."
                          },
                          {
                              "id": "l19-thx3",
                              "text": "¿Puedes ayudarme mañana?"
                          }
                      ],
                      "correctAnswerId": "l19-thx",
                      "explanation": "Kinou wa tetsudatte kurete arigatou."
                  }
              ]
          },
          {
              "id": "l19-node-4",
              "unitId": 19,
              "lessonNumber": 19,
              "title": "Suposición Lógica: 〜はずです",
              "japaneseTitle": "当然の推量（〜はずです：Se supone que... / Debería...）",
              "description": "Expresa certeza basada en razones lógicas (\"Ella vivió en Japón, así que debe saber hablar japonés\")",
              "icon": "Lightbulb",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-19-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se unen un な-adjetivo (ej. ひま) y un Sustantivo (ej. やすみ) antes de 「はずです」 en presente afirmativo?",
                      "options": [
                          {
                              "id": "hazu-rule",
                              "text": "な-adjetivo lleva な (ひまなはずです) y Sustantivo lleva の (やすみのはずです)",
                              "isCorrect": true
                          },
                          {
                              "id": "hazu-rule2",
                              "text": "Ambos llevan だ (ひまだはずです)"
                          },
                          {
                              "id": "hazu-rule3",
                              "text": "Ambos van sin partícula"
                          }
                      ],
                      "correctAnswerId": "hazu-rule",
                      "explanation": "¡Atención! Antes de はずです: Verbo/い-adj en forma corta, な-adj + な, y Sustantivo + の."
                  },
                  {
                      "id": "ex-19-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Se supone que Takeshi llegará pronto\":",
                      "japaneseVoiceText": "たけしさんはもうすぐつくはずです",
                      "wordBank": [
                          "たけしさんは",
                          "もうすぐ",
                          "つく",
                          "はずです",
                          "つきます",
                          "の"
                      ],
                      "correctSentence": [
                          "たけしさんは",
                          "もうすぐ",
                          "つく",
                          "はずです"
                      ],
                      "explanation": "Takeshi-san wa mousugu tsuku hazu desu (Se supone / Debería llegar pronto)."
                  },
                  {
                      "id": "ex-19-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las frases con 〜はずです y 〜てよかったです:",
                      "pairs": [
                          {
                              "id": "hz1",
                              "left": "今日は休みのはずです",
                              "right": "Se supone que hoy es día libre (Sust + の)"
                          },
                          {
                              "id": "hz2",
                              "left": "あの店は高いはずです",
                              "right": "Esa tienda debería ser cara (い-adj)"
                          },
                          {
                              "id": "hz3",
                              "left": "傘を持っていってよかったです",
                              "right": "Qué bueno que llevé paraguas"
                          },
                          {
                              "id": "hz4",
                              "left": "あきらめないでよかったです",
                              "right": "Qué bueno que no me rendí (〜ないで)"
                          }
                      ],
                      "explanation": "Estructuras clave de certeza lógica y satisfacción en Genki L19."
                  }
              ]
          },
          {
              "id": "l19-node-5",
              "unitId": 19,
              "lessonNumber": 19,
              "title": "Workbook: Carta de Agradecimiento y Keigo",
              "japaneseTitle": "ワークブック総合（尊敬語とお礼の手紙）",
              "description": "Práctica integradora de la Lección 19: diálogos con el jefe y consejos corteses con お〜ください",
              "icon": "Headphones",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-19-5-1",
                      "type": "multiple-choice",
                      "prompt": "El jefe de departamento (部長) está leyendo el periódico. ¿Cómo describes esta acción usando Sonkeigo?",
                      "options": [
                          {
                              "id": "bucho-1",
                              "text": "部長は 新聞を お読みになっています (o ご覧になっています)",
                              "isCorrect": true
                          },
                          {
                              "id": "bucho-2",
                              "text": "部長は 新聞を 読んでいらっしゃいます"
                          },
                          {
                              "id": "bucho-3",
                              "text": "Ambas opciones son correctas en lenguaje honorífico",
                              "isCorrect": true
                          }
                      ],
                      "correctAnswerId": "bucho-1",
                      "explanation": "Tanto お＋Raíz＋になっています como 〜ていらっしゃいます son formas honoríficas válidas en Genki L19."
                  },
                  {
                      "id": "ex-19-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce la invitación honorífica \"Por favor, sírvase / coma con confianza (召し上がる)\":",
                      "japaneseVoiceText": "どうぞめしあがってください",
                      "wordBank": [
                          "どうぞ",
                          "めしあがって",
                          "ください",
                          "たべて",
                          "おっしゃって"
                      ],
                      "correctSentence": [
                          "どうぞ",
                          "めしあがって",
                          "ください"
                      ],
                      "explanation": "Douzo meshiagatte kudasai (召し上がる = comer/beber en honorífico)."
                  },
                  {
                      "id": "ex-19-5-3",
                      "type": "listening",
                      "prompt": "Escucha la pregunta honorífica que le hacen al profesor:",
                      "japaneseVoiceText": "せんせいはどこにすんでいらっしゃいますか",
                      "options": [
                          {
                              "id": "l19-wb-1",
                              "text": "¿Dónde vive usted, profesor? (すんでいらっしゃいますか)",
                              "isCorrect": true
                          },
                          {
                              "id": "l19-wb-2",
                              "text": "¿A qué hora llegó usted hoy, profesor?"
                          },
                          {
                              "id": "l19-wb-3",
                              "text": "¿Qué libro escribió usted, profesor?"
                          }
                      ],
                      "correctAnswerId": "l19-wb-1",
                      "explanation": "Sensei wa doko ni sunde irasshaimasu ka (〜ています ➔ 〜ていらっしゃいます)."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 20: GENKI LECCIÓN 20: MARY VA DE COMPRAS
  // ==========================================
  {
      "id": 20,
      "genkiBook": "Genki II",
      "title": "Genki Lección 20: Mary va de Compras",
      "subtitle": "Lenguaje Humilde (謙譲語), 〜ないで, Preguntas Incrustadas y 〜やすい/にくい",
      "description": "Habla con modestia sobre tus propias acciones ante superiores con Kenjougo, inserta preguntas dentro de oraciones y expresa facilidad o dificultad.",
      "themeColor": "#1cb0f6",
      "nodes": [
          {
              "id": "l20-node-1",
              "unitId": 20,
              "lessonNumber": 20,
              "title": "Lenguaje Humilde / Modesto (謙譲語 - Kenjougo)",
              "japaneseTitle": "謙譲語（参る・いたす・いただく・伺う・お〜する）",
              "description": "Rebajar respetuosamente tus propias acciones al hablar con jefes, profesores o clientes",
              "icon": "ShoppingBag",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-20-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cuál es la diferencia esencial entre Sonkeigo (L19) y Kenjougo (L20)?",
                      "options": [
                          {
                              "id": "keigo-diff",
                              "text": "Sonkeigo eleva las acciones DEL SUPERIOR; Kenjougo rebaja con humildad LAS PROPIAS ACCIONES del hablante",
                              "isCorrect": true
                          },
                          {
                              "id": "keigo-diff2",
                              "text": "Sonkeigo es para amigos y Kenjougo es para niños"
                          },
                          {
                              "id": "keigo-diff3",
                              "text": "No hay diferencia, son intercambiables"
                          }
                      ],
                      "correctAnswerId": "keigo-diff",
                      "explanation": "Sonkeigo = sujeto es el superior. Kenjougo = sujeto soy YO (o mi empresa/familia) actuando con humildad hacia el superior."
                  },
                  {
                      "id": "ex-20-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo básico con su forma Humilde / Modesta (謙譲語):",
                      "pairs": [
                          {
                              "id": "kj1",
                              "left": "いく / くる (ir / venir)",
                              "right": "まいる (参ります)"
                          },
                          {
                              "id": "kj2",
                              "left": "たべる / のむ / もらう",
                              "right": "いただく (いただきます)"
                          },
                          {
                              "id": "kj3",
                              "left": "いう (decir)",
                              "right": "もうす (申します)"
                          },
                          {
                              "id": "kj4",
                              "left": "きく / いく (preguntar/visitar)",
                              "right": "うかがう (伺います)"
                          }
                      ],
                      "explanation": "Verbos humildes esenciales de la Lección 20."
                  },
                  {
                      "id": "ex-20-1-3",
                      "type": "word-order",
                      "prompt": "Para ofrecer ayuda humildemente a un superior se usa お + Raíz Masu + します. Traduce: \"Yo llevaré su equipaje\":",
                      "japaneseVoiceText": "おにもつをおもちします",
                      "wordBank": [
                          "おにもつを",
                          "おもちします",
                          "おもちになります",
                          "もちます"
                      ],
                      "correctSentence": [
                          "おにもつを",
                          "おもちします"
                      ],
                      "explanation": "Onimotsu o omochi shimasu (お + Raíz Masu + します = hacer algo humildemente por el otro)."
                  }
              ]
          },
          {
              "id": "l20-node-2",
              "unitId": 20,
              "lessonNumber": 20,
              "title": "Hacer algo sin...: 〜ないで",
              "japaneseTitle": "「〜ないで」（辞書を使わないで読みます）",
              "description": "Leer sin usar el diccionario, salir de casa sin desayunar, tomar café sin ponerle azúcar",
              "icon": "Flame",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-20-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se expresa \"Hago B sin hacer A\" en japonés según Genki L20?",
                      "options": [
                          {
                              "id": "naide-1",
                              "text": "Verbo A en forma ない + で + Verbo B (ej. 朝ご飯を食べないで来ました)",
                              "isCorrect": true
                          },
                          {
                              "id": "naide-2",
                              "text": "Verbo A en forma なくて + Verbo B"
                          },
                          {
                              "id": "naide-3",
                              "text": "Verbo A en forma diccionario + ないで"
                          }
                      ],
                      "correctAnswerId": "naide-1",
                      "explanation": "Forma ない + で significa \"sin hacer [verbo]\" (ej. 傘を持たないで出かけました = salí sin llevar paraguas)."
                  },
                  {
                      "id": "ex-20-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Anoche me dormí sin apagar la luz\":",
                      "japaneseVoiceText": "ゆうべでんきをけさないでねました",
                      "wordBank": [
                          "ゆうべ",
                          "でんきを",
                          "けさないで",
                          "ねました",
                          "けさなくて",
                          "けす"
                      ],
                      "correctSentence": [
                          "ゆうべ",
                          "でんきを",
                          "けさないで",
                          "ねました"
                      ],
                      "explanation": "Yuube denki o kesanaide nemashita (けす ➔ けさない + で = sin apagar)."
                  },
                  {
                      "id": "ex-20-2-3",
                      "type": "listening",
                      "prompt": "Escucha cómo lee Takeshi los mangas en japonés:",
                      "japaneseVoiceText": "じしょをつかわないでまんがをよみます",
                      "options": [
                          {
                              "id": "l20-dict",
                              "text": "Lee mangas sin usar el diccionario.",
                              "isCorrect": true
                          },
                          {
                              "id": "l20-dict2",
                              "text": "Siempre usa un diccionario electrónico para leer."
                          },
                          {
                              "id": "l20-dict3",
                              "text": "No puede leer mangas todavía."
                          }
                      ],
                      "correctAnswerId": "l20-dict",
                      "explanation": "Jisho o tsukawanaide manga o yomimasu."
                  }
              ]
          },
          {
              "id": "l20-node-3",
              "unitId": 20,
              "lessonNumber": 20,
              "title": "Preguntas Incrustadas: 〜か y 〜かどうか",
              "japaneseTitle": "疑問詞＋か / 〜かどうか（埋め込み疑問文）",
              "description": "No sé a qué hora llega (何時に来るか) y no sé si vendrá o no (来るかどうか)",
              "icon": "HelpCircle",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-20-3-1",
                      "type": "multiple-choice",
                      "prompt": "Cuando incrustas una pregunta de Sí/No (\"No sé SI mañana habrá clases O NO\"), ¿qué estructura usas?",
                      "options": [
                          {
                              "id": "kadouka-1",
                              "text": "Oración en forma corta + かどうか (ej. 明日クラスがあるかどうかわかりません)",
                              "isCorrect": true
                          },
                          {
                              "id": "kadouka-2",
                              "text": "Oración en forma Masu + か"
                          },
                          {
                              "id": "kadouka-3",
                              "text": "Oración con だ + かどうか"
                          }
                      ],
                      "correctAnswerId": "kadouka-1",
                      "explanation": "Para preguntas sin palabra interrogativa (\"si... o no\"), se usa Forma Corta (sin だ) + かどうか."
                  },
                  {
                      "id": "ex-20-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"No recuerdo dónde compré este libro\":",
                      "japaneseVoiceText": "どこでこのほんをかったかおぼえていません",
                      "wordBank": [
                          "どこで",
                          "このほんを",
                          "かったか",
                          "おぼえていません",
                          "かいましたか",
                          "かどうか"
                      ],
                      "correctSentence": [
                          "どこで",
                          "このほんを",
                          "かったか",
                          "おぼえていません"
                      ],
                      "explanation": "Con palabra interrogativa (どこで), se usa Forma Corta + か: Doko de kono hon o katta ka oboete imasen."
                  },
                  {
                      "id": "ex-20-3-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las oraciones con preguntas incrustadas:",
                      "pairs": [
                          {
                              "id": "eq1",
                              "left": "何時に始まるか知っていますか",
                              "right": "¿Sabes a qué hora empieza?"
                          },
                          {
                              "id": "eq2",
                              "left": "おいしいかどうかわかりません",
                              "right": "No sé si está rico o no"
                          },
                          {
                              "id": "eq3",
                              "left": "だれが来るか教えてください",
                              "right": "Dime quién va a venir, por favor"
                          }
                      ],
                      "explanation": "Preguntas con interrogativo llevan 〜か; preguntas de sí/no llevan 〜かどうか."
                  }
              ]
          },
          {
              "id": "l20-node-4",
              "unitId": 20,
              "lessonNumber": 20,
              "title": "〜という (Llamado...) y 〜やすい / 〜にくい",
              "japaneseTitle": "名称「〜という」と難易「〜やすい・〜にくい」",
              "description": "Un perro llamado Pochi (という) y ser fácil/difícil de usar (使いやすい / 使いにくい)",
              "icon": "Sparkles",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-20-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se unen 「〜やすい」 (fácil de hacer) y 「〜にくい」 (difícil de hacer) a un verbo?",
                      "options": [
                          {
                              "id": "yasui-1",
                              "text": "A la Raíz Masu (quitando 〜ます): わかりやすい (fácil de entender), 歩きにくい (difícil de caminar)",
                              "isCorrect": true
                          },
                          {
                              "id": "yasui-2",
                              "text": "A la Forma Diccionario"
                          },
                          {
                              "id": "yasui-3",
                              "text": "A la Forma Te"
                          }
                      ],
                      "correctAnswerId": "yasui-1",
                      "explanation": "Raíz Masu + やすい / にくい forma un い-adjetivo compuesto."
                  },
                  {
                      "id": "ex-20-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Estos zapatos son muy fáciles de caminar (cómodos)\":",
                      "japaneseVoiceText": "このくつはとてもあるきやすいです",
                      "wordBank": [
                          "このくつは",
                          "とても",
                          "あるきやすいです",
                          "あるくやすいです",
                          "あるきにくいです"
                      ],
                      "correctSentence": [
                          "このくつは",
                          "とても",
                          "あるきやすいです"
                      ],
                      "explanation": "Kono kutsu wa totemo arukiyasui desu (あるく ➔ あるき + やすい)."
                  },
                  {
                      "id": "ex-20-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las expresiones con 〜という, 〜やすい y 〜にくい:",
                      "pairs": [
                          {
                              "id": "yn1",
                              "left": "「タマ」という猫",
                              "right": "Un gato llamado \"Tama\""
                          },
                          {
                              "id": "yn2",
                              "left": "かきやすいペン",
                              "right": "Una pluma con la que es fácil escribir"
                          },
                          {
                              "id": "yn3",
                              "left": "よみにくい漢字",
                              "right": "Un kanji difícil de leer"
                          },
                          {
                              "id": "yn4",
                              "left": "おぼえやすい言葉",
                              "right": "Una palabra fácil de memorizar"
                          }
                      ],
                      "explanation": "Usos de 〜という y los sufijos adjetivales 〜やすい / 〜にくい."
                  }
              ]
          },
          {
              "id": "l20-node-5",
              "unitId": 20,
              "lessonNumber": 20,
              "title": "Workbook: Presentación Formal y Atención al Cliente",
              "japaneseTitle": "ワークブック総合（謙譲語・でございます・百貨店）",
              "description": "Práctica integradora de la Lección 20: presentarse formalmente con 申します y compras en tienda departamental",
              "icon": "Headphones",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-20-5-1",
                      "type": "multiple-choice",
                      "prompt": "En una entrevista o llamada de negocios, ¿cómo dices humildemente \"Me llamo Tanaka\" (literalmente: \"digo Tanaka\")?",
                      "options": [
                          {
                              "id": "mousu-1",
                              "text": "田中と申します (Tanaka to moushimasu)",
                              "isCorrect": true
                          },
                          {
                              "id": "mousu-2",
                              "text": "田中とおっしゃいます"
                          },
                          {
                              "id": "mousu-3",
                              "text": "田中をご覧になります"
                          }
                      ],
                      "correctAnswerId": "mousu-1",
                      "explanation": "申す (もうす) es el verbo humilde para いう (decir); 「[Nombre]と申します」 es la presentación formal estándar."
                  },
                  {
                      "id": "ex-20-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: El empleado de la tienda dice muy cortésmente \"El baño está en el segundo piso\" usando でございます:",
                      "japaneseVoiceText": "おてあらいはにかいでございます",
                      "wordBank": [
                          "おてあらいは",
                          "にかい",
                          "でございます",
                          "におります",
                          "を"
                      ],
                      "correctSentence": [
                          "おてあらいは",
                          "にかい",
                          "でございます"
                      ],
                      "explanation": "Otearai wa nikai de gozaimasu (でございます es el equivalente extra-cortés de です)."
                  },
                  {
                      "id": "ex-20-5-3",
                      "type": "listening",
                      "prompt": "Escucha lo que dice el vendedor en la tienda departamental:",
                      "japaneseVoiceText": "ただいまてんちょうはがいしゅつしております",
                      "options": [
                          {
                              "id": "l20-wb-1",
                              "text": "En este momento el gerente de la tienda ha salido (está fuera).",
                              "isCorrect": true
                          },
                          {
                              "id": "l20-wb-2",
                              "text": "El gerente lo atenderá enseguida."
                          },
                          {
                              "id": "l20-wb-3",
                              "text": "La tienda está a punto de cerrar."
                          }
                      ],
                      "correctAnswerId": "l20-wb-1",
                      "explanation": "おります es la forma humilde de います (usada al hablar del propio jefe frente a un cliente externo)."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 21: GENKI LECCIÓN 21: EL ROBO
  // ==========================================
  {
      "id": 21,
      "genkiBook": "Genki II",
      "title": "Genki Lección 21: El Robo",
      "subtitle": "Forma Pasiva (受身形), 〜てある, 〜間に y 〜てほしい",
      "description": "Domina la voz pasiva japonesa (incluyendo la pasiva de adversidad), describe preparativos intencionales con 〜てある y pide que otros hagan algo con 〜てほしい.",
      "themeColor": "#ff4b4b",
      "nodes": [
          {
              "id": "l21-node-1",
              "unitId": 21,
              "lessonNumber": 21,
              "title": "Vocabulario: Seguridad, Incidentes y Sociedad",
              "japaneseTitle": "事件と防犯（どろぼう・警察・犯人・留守）",
              "description": "Ladrón, policía, culpable, ausencia de casa (留守), discursos y quejas",
              "icon": "ShieldAlert",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-21-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué significa la palabra 「るす」 (留守 / rusu) en japonés?",
                      "options": [
                          {
                              "id": "u21-rusu",
                              "text": "No estar en casa / Ausencia del hogar",
                              "isCorrect": true
                          },
                          {
                              "id": "u21-rusu2",
                              "text": "Estación de policía"
                          },
                          {
                              "id": "u21-rusu3",
                              "text": "Cerrar con llave"
                          }
                      ],
                      "correctAnswerId": "u21-rusu",
                      "explanation": "留守 (るす) significa estar ausente de casa (ej. 留守の間に = mientras no estaba en casa)."
                  },
                  {
                      "id": "ex-21-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario de la Lección 21:",
                      "pairs": [
                          {
                              "id": "v21-1",
                              "left": "どろぼう (泥棒)",
                              "right": "Ladrón / Ratero"
                          },
                          {
                              "id": "v21-2",
                              "left": "けいさつ (警察)",
                              "right": "Policía"
                          },
                          {
                              "id": "v21-3",
                              "left": "ぬすむ (盗む)",
                              "right": "Robar / Hurtar"
                          },
                          {
                              "id": "v21-4",
                              "left": "ふむ (踏む)",
                              "right": "Pisar (por ejemplo, el pie en el tren)"
                          }
                      ],
                      "explanation": "Vocabulario clave del episodio del robo en Genki II Lección 21."
                  },
                  {
                      "id": "ex-21-1-3",
                      "type": "listening",
                      "prompt": "Escucha lo que le pasó a Takeshi en el tren lleno:",
                      "japaneseVoiceText": "でんしゃのなかでとなりのひとにあしをふまれました",
                      "options": [
                          {
                              "id": "l21-step",
                              "text": "En el tren, la persona de al lado le pisó el pie (あしをふまれました).",
                              "isCorrect": true
                          },
                          {
                              "id": "l21-step2",
                              "text": "Cedió su asiento a una persona mayor."
                          },
                          {
                              "id": "l21-step3",
                              "text": "Encontró una cartera en el tren."
                          }
                      ],
                      "correctAnswerId": "l21-step",
                      "explanation": "Tonari no hito ni ashi o fumaremashita (Pasiva deふむ ➔ ふまれる)."
                  }
              ]
          },
          {
              "id": "l21-node-2",
              "unitId": 21,
              "lessonNumber": 21,
              "title": "La Forma Pasiva (受身形 - Ukemi)",
              "japaneseTitle": "受身形（〜られる・〜れる・被害の受身）",
              "description": "Cómo conjugar verbos a la voz pasiva y cómo expresar que sufriste una molestia",
              "icon": "Flame",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-21-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se conjuga un verbo U como 「ぬすむ」 (robar) o 「かく」 (escribir) a la Forma Pasiva?",
                      "options": [
                          {
                              "id": "pas-rule",
                              "text": "La vocal final \"-u\" cambia a la columna \"-a\" + れる (ぬすまれる, かかれる)",
                              "isCorrect": true
                          },
                          {
                              "id": "pas-rule2",
                              "text": "La vocal \"-u\" cambia a \"-e\" + る"
                          },
                          {
                              "id": "pas-rule3",
                              "text": "Se añade 〜させる"
                          }
                      ],
                      "correctAnswerId": "pas-rule",
                      "explanation": "U-verbs en pasiva: columna -a + れる (con う ➔ われる, ej. いう➔いわれる). Ru-verbs: 〜られる."
                  },
                  {
                      "id": "ex-21-2-2",
                      "type": "word-order",
                      "prompt": "Traduce usando la \"pasiva sufriente\": \"Un ladrón me robó la cámara\":",
                      "japaneseVoiceText": "わたしはどろぼうにカメラをぬすまれました",
                      "wordBank": [
                          "わたしは",
                          "どろぼうに",
                          "カメラを",
                          "ぬすまれました",
                          "ぬすみました",
                          "が"
                      ],
                      "correctSentence": [
                          "わたしは",
                          "どろぼうに",
                          "カメラを",
                          "ぬすまれました"
                      ],
                      "explanation": "[Víctima] は [Agente] に [Objeto poseído] を + Verbo Pasivo: Watashi wa dorobou ni kamera o nusumaremashita."
                  },
                  {
                      "id": "ex-21-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo con su Forma Pasiva correcta:",
                      "pairs": [
                          {
                              "id": "psp1",
                              "left": "ほめる (Ru-verb: elogiar)",
                              "right": "ほめられる (ser elogiado)"
                          },
                          {
                              "id": "psp2",
                              "left": "たのむ (U-verb: pedir)",
                              "right": "たのまれる (ser solicitado)"
                          },
                          {
                              "id": "psp3",
                              "left": "わらう (U-verb en -u: reír)",
                              "right": "わらわれる (ser objeto de burla)"
                          },
                          {
                              "id": "psp4",
                              "left": "くる (Irregular: venir)",
                              "right": "こられる (que alguien venga y moleste)"
                          }
                      ],
                      "explanation": "Reglas de formación pasiva para verbos Ru, U e irregulares (する➔される, くる➔こられる)."
                  }
              ]
          },
          {
              "id": "l21-node-3",
              "unitId": 21,
              "lessonNumber": 21,
              "title": "Estado Intencional (〜てある) y Durante (〜間に)",
              "japaneseTitle": "結果の状態「〜てある」と期間内「〜間に」",
              "description": "Diferencia entre \"está abierto\" (開いている) y \"ha sido dejado abierto a propósito\" (開けてある)",
              "icon": "Clock",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-21-3-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué tipo de verbo se usa con 「〜てある」 y qué matiz transmite (ej. ホテルが予約してあります)?",
                      "options": [
                          {
                              "id": "tearu-1",
                              "text": "Se usa un verbo TRANSITIVO y expresa el estado resultante de una acción hecha a propósito / como preparación",
                              "isCorrect": true
                          },
                          {
                              "id": "tearu-2",
                              "text": "Se usa un verbo intransitivo para fenómenos naturales"
                          },
                          {
                              "id": "tearu-3",
                              "text": "Expresa una obligación futura"
                          }
                      ],
                      "correctAnswerId": "tearu-1",
                      "explanation": "Transitivo + てある indica que alguien ya dejó hecho algo con un propósito (la partícula Objeto を suele pasar a が)."
                  },
                  {
                      "id": "ex-21-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Mientras el bebé duerme, leo un libro\":",
                      "japaneseVoiceText": "あかちゃんがねているあいだにほんをよみます",
                      "wordBank": [
                          "あかちゃんが",
                          "ねている",
                          "あいだに",
                          "ほんを",
                          "よみます",
                          "ねた"
                      ],
                      "correctSentence": [
                          "あかちゃんが",
                          "ねている",
                          "あいだに",
                          "ほんを",
                          "よみます"
                      ],
                      "explanation": "〜間に (あいだに) indica que una acción puntual ocurre dentro del lapso en que dura otro estado."
                  },
                  {
                      "id": "ex-21-3-3",
                      "type": "match-pairs",
                      "prompt": "Compara 〜ている (L18), 〜ておく (L15) y 〜てある (L21):",
                      "pairs": [
                          {
                              "id": "cmp1",
                              "left": "窓が開いています (Intransitivo)",
                              "right": "La ventana está abierta (simple descripción)"
                          },
                          {
                              "id": "cmp2",
                              "left": "窓が開けてあります (Transitivo)",
                              "right": "La ventana ha sido dejada abierta (con intención)"
                          },
                          {
                              "id": "cmp3",
                              "left": "窓を開けておきます (Transitivo)",
                              "right": "Abriré la ventana por adelantado (acción)"
                          }
                      ],
                      "explanation": "El trío clásico de estados y preparativos del nivel N4."
                  }
              ]
          },
          {
              "id": "l21-node-4",
              "unitId": 21,
              "lessonNumber": 21,
              "title": "Quiero que tú hagas: 〜てほしい y Adjetivo + する",
              "japaneseTitle": "他者への願望「〜てほしい」と変化「〜くする・〜にする」",
              "description": "Quiero que mi amigo me ayude (手伝ってほしい) y limpiar el cuarto (きれいにする)",
              "icon": "Heart",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-21-4-1",
                      "type": "multiple-choice",
                      "prompt": "Compara: 1) わたしは 行きたいです vs 2) わたしは あなたに 行ってほしいです. ¿Qué expresa 「Persona に + Verbo Te + ほしいです」?",
                      "options": [
                          {
                              "id": "tehoshi-1",
                              "text": "Quiero que OTRA PERSONA realice la acción (\"Quiero que tú vayas\")",
                              "isCorrect": true
                          },
                          {
                              "id": "tehoshi-2",
                              "text": "Yo mismo quiero ir"
                          },
                          {
                              "id": "tehoshi-3",
                              "text": "Otra persona quiere un objeto"
                          }
                      ],
                      "correctAnswerId": "tehoshi-1",
                      "explanation": "〜たい es para lo que YO quiero hacer; [Persona] に 〜てほしい es para lo que quiero que OTRO haga."
                  },
                  {
                      "id": "ex-21-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Quiero que mi gobierno baje los precios (hacerlos baratos: 安くする)\":",
                      "japaneseVoiceText": "わたしはぶっかをやすくしてほしいです",
                      "wordBank": [
                          "わたしは",
                          "ぶっかを",
                          "やすくして",
                          "ほしいです",
                          "やすくなって",
                          "たいです"
                      ],
                      "correctSentence": [
                          "わたしは",
                          "ぶっかを",
                          "やすくして",
                          "ほしいです"
                      ],
                      "explanation": "い-adj (やすい) ➔ やすくする (hacer que sea barato) + てほしいです."
                  },
                  {
                      "id": "ex-21-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja los cambios voluntarios con する (L21) frente a なる (L10):",
                      "pairs": [
                          {
                              "id": "sn1",
                              "left": "部屋がきれいになる",
                              "right": "El cuarto se vuelve limpio (estado)"
                          },
                          {
                              "id": "sn2",
                              "left": "部屋をきれいにする",
                              "right": "Limpiar / Hacer que el cuarto quede limpio"
                          },
                          {
                              "id": "sn3",
                              "left": "音を小さくする",
                              "right": "Bajar el volumen (hacer pequeño el sonido)"
                          },
                          {
                              "id": "sn4",
                              "left": "いかないでほしいです",
                              "right": "Quiero que NO te vayas (〜ないでほしい)"
                          }
                      ],
                      "explanation": "Adjetivo + なる = volverse; Adjetivo + する = hacer que algo se vuelva."
                  }
              ]
          },
          {
              "id": "l21-node-5",
              "unitId": 21,
              "lessonNumber": 21,
              "title": "Workbook: Reportando a la Policía y Preparativos",
              "japaneseTitle": "ワークブック総合（受身・〜てある・〜てほしい）",
              "description": "Práctica integradora de la Lección 21: experiencias de adversidad y organización de eventos",
              "icon": "Headphones",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-21-5-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué significa la famosa oración de pasiva de adversidad: 「きのう、雨に降られました」 (Kinou, ame ni furaremashita)?",
                      "options": [
                          {
                              "id": "rain-pas",
                              "text": "Ayer me llovió encima (sufrí el inconveniente de que lloviera)",
                              "isCorrect": true
                          },
                          {
                              "id": "rain-pas2",
                              "text": "Me gusta mucho caminar bajo la lluvia"
                          },
                          {
                              "id": "rain-pas3",
                              "text": "Ayer no llovió en absoluto"
                          }
                      ],
                      "correctAnswerId": "rain-pas",
                      "explanation": "En japonés incluso verbos intransitivos como 降る (llover) o 泣く (llorar) forman pasiva para expresar que el hablante se vio afectado."
                  },
                  {
                      "id": "ex-21-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Mientras no estaba en casa (留守の間に), entró un ladrón\":",
                      "japaneseVoiceText": "るすのあいだにどろぼうがはいりました",
                      "wordBank": [
                          "るすの",
                          "あいだに",
                          "どろぼうが",
                          "はいりました",
                          "いれました"
                      ],
                      "correctSentence": [
                          "るすの",
                          "あいだに",
                          "どろぼうが",
                          "はいりました"
                      ],
                      "explanation": "Rusu no aida ni dorobou ga hairimashita."
                  },
                  {
                      "id": "ex-21-5-3",
                      "type": "listening",
                      "prompt": "Escucha los preparativos para la fiesta de esta noche:",
                      "japaneseVoiceText": "のみものはもうかってあります。りょうりもつくってあります。",
                      "options": [
                          {
                              "id": "l21-wb-1",
                              "text": "Las bebidas ya están compradas y la comida también ya está preparada.",
                              "isCorrect": true
                          },
                          {
                              "id": "l21-wb-2",
                              "text": "Todavía falta comprar las bebidas y cocinar."
                          },
                          {
                              "id": "l21-wb-3",
                              "text": "La fiesta fue cancelada."
                          }
                      ],
                      "correctAnswerId": "l21-wb-1",
                      "explanation": "Nomimono wa mou katte arimasu. Ryouri mo tsukutte arimasu (〜てあります)."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 22: GENKI LECCIÓN 22: EDUCACIÓN EN JAPÓN
  // ==========================================
  {
      "id": 22,
      "genkiBook": "Genki II",
      "title": "Genki Lección 22: Educación en Japón",
      "subtitle": "Forma Causativa (使役形), 〜なさい, Condicional 〜ば y 〜のに",
      "description": "Expresa \"hacer que alguien haga\" o \"dejar hacer\" con la forma causativa, da órdenes con 〜なさい, domina el condicional 〜ば y contrasta con 〜のに.",
      "themeColor": "#ce82ff",
      "nodes": [
          {
              "id": "l22-node-1",
              "unitId": 22,
              "lessonNumber": 22,
              "title": "Vocabulario: Educación, Crianza y Sociedad",
              "japaneseTitle": "教育と社会（塾・自由・先輩・部活・徹夜）",
              "description": "Escuelas intensivas (Juku), libertad, veteranos (Senpai), clubes escolares y desvelarse",
              "icon": "GraduationCap",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-22-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué es un 「じゅく」 (塾 / juku) en el sistema educativo japonés?",
                      "options": [
                          {
                              "id": "u22-juku",
                              "text": "Una academia privada vespertina de refuerzo escolar y preparación de exámenes",
                              "isCorrect": true
                          },
                          {
                              "id": "u22-juku2",
                              "text": "El comedor escolar de una primaria"
                          },
                          {
                              "id": "u22-juku3",
                              "text": "Una beca deportiva"
                          }
                      ],
                      "correctAnswerId": "u22-juku",
                      "explanation": "塾 (じゅく) es la escuela privada vespertina (\"cram school\") a la que asisten muchos estudiantes japoneses."
                  },
                  {
                      "id": "ex-22-1-2",
                      "type": "match-pairs",
                      "prompt": "Empareja el vocabulario de la Lección 22:",
                      "pairs": [
                          {
                              "id": "v22-1",
                              "left": "せんぱい (先輩)",
                              "right": "Compañero de grado superior / Veterano"
                          },
                          {
                              "id": "v22-2",
                              "left": "こうはい (後輩)",
                              "right": "Compañero de grado inferior / Menor"
                          },
                          {
                              "id": "v22-3",
                              "left": "じゆう (自由)",
                              "right": "Libertad / Libre"
                          },
                          {
                              "id": "v22-4",
                              "left": "てつやする (徹夜する)",
                              "right": "Pasar la noche en vela / Desvelarse"
                          }
                      ],
                      "explanation": "Vocabulario cultural y educativo de Genki II Lección 22."
                  },
                  {
                      "id": "ex-22-1-3",
                      "type": "listening",
                      "prompt": "Escucha lo que pide la madre antes de la cena:",
                      "japaneseVoiceText": "はやくしゅくだいをしなさい",
                      "options": [
                          {
                              "id": "l22-nasai",
                              "text": "¡Haz tu tarea rápido! (Orden de padres/maestros con 〜なさい).",
                              "isCorrect": true
                          },
                          {
                              "id": "l22-nasai2",
                              "text": "No hace falta que hagas la tarea hoy."
                          },
                          {
                              "id": "l22-nasai3",
                              "text": "¿Quieres que te ayude con la tarea?"
                          }
                      ],
                      "correctAnswerId": "l22-nasai",
                      "explanation": "Raíz Masu + なさい (しなさい) se usa de padres a hijos o en instrucciones de exámenes."
                  }
              ]
          },
          {
              "id": "l22-node-2",
              "unitId": 22,
              "lessonNumber": 22,
              "title": "La Forma Causativa (使役形 - Shieki)",
              "japaneseTitle": "使役形（〜させる・〜せる・〜させてくれる）",
              "description": "Hacer que alguien haga algo (obligar) o permitir que alguien haga algo (〜させてくれる)",
              "icon": "Users",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-22-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se conjuga un verbo U como 「いく」 (ir) o 「よむ」 (leer) a la Forma Causativa?",
                      "options": [
                          {
                              "id": "caus-rule",
                              "text": "La vocal final \"-u\" cambia a la columna \"-a\" + せる (いかせる, よませる)",
                              "isCorrect": true
                          },
                          {
                              "id": "caus-rule2",
                              "text": "La vocal \"-u\" cambia a \"-a\" + れる"
                          },
                          {
                              "id": "caus-rule3",
                              "text": "La vocal \"-u\" cambia a \"-e\" + る"
                          }
                      ],
                      "correctAnswerId": "caus-rule",
                      "explanation": "U-verbs en causativa: columna -a + せる (いく➔いかせる, かう➔かわせる). Ru-verbs: 〜させる (たべる➔たべさせる)."
                  },
                  {
                      "id": "ex-22-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés pidiendo permiso cortésmente: \"Por favor, déjeme pensarlo un poco\":",
                      "japaneseVoiceText": "すこしかんがえさせてください",
                      "wordBank": [
                          "すこし",
                          "かんがえさせて",
                          "ください",
                          "かんがえて",
                          "かんがえられて"
                      ],
                      "correctSentence": [
                          "すこし",
                          "かんがえさせて",
                          "ください"
                      ],
                      "explanation": "Forma Causativa en Te + ください = \"Permítame / Déjeme hacer X\" (Sukoshi kangaesasete kudasai)."
                  },
                  {
                      "id": "ex-22-2-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo y expresión causativa con su significado:",
                      "pairs": [
                          {
                              "id": "cp1",
                              "left": "たべさせる (Ru-verb)",
                              "right": "Hacer comer / Dar de comer"
                          },
                          {
                              "id": "cp2",
                              "left": "てつだわせる (U-verb en -u)",
                              "right": "Hacer que alguien ayude"
                          },
                          {
                              "id": "cp3",
                              "left": "する ➔ させる",
                              "right": "Hacer que haga / Permitir hacer"
                          },
                          {
                              "id": "cp4",
                              "left": "りょうしんは私に行かせてくれた",
                              "right": "Mis padres me dejaron ir"
                          }
                      ],
                      "explanation": "Cuando la causativa se combina con 〜てくれる / 〜てもらう / 〜てください significa \"dejar / permitir\"."
                  }
              ]
          },
          {
              "id": "l22-node-3",
              "unitId": 22,
              "lessonNumber": 22,
              "title": "El Condicional 〜ば (Si...)",
              "japaneseTitle": "仮定条件「〜ば」（安ければ・行けば・どうすればいいですか）",
              "description": "Reglas de conjugación del condicional 〜ば y cómo pedir consejo (\"¿Qué debería hacer?\")",
              "icon": "Lightbulb",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-22-3-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se conjuga un verbo (Ru o U) y un い-adjetivo al condicional 「〜ば」?",
                      "options": [
                          {
                              "id": "ba-rule",
                              "text": "Verbos: vocal final \"-u\" pasa a \"-e\" + ば (いけば, たべれば); い-adjetivos: quitar い + ければ (やすければ)",
                              "isCorrect": true
                          },
                          {
                              "id": "ba-rule2",
                              "text": "Verbos: forma Ta + ば"
                          },
                          {
                              "id": "ba-rule3",
                              "text": "Verbos: raíz Masu + ば"
                          }
                      ],
                      "correctAnswerId": "ba-rule",
                      "explanation": "¡Exacto! Verbos: columna -e + ば (いく➔いけば, みる➔みれば, する➔すれば, くる➔くれば). い-adj: 〜ければ."
                  },
                  {
                      "id": "ex-22-3-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Si preguntas al profesor, lo entenderás enseguida\":",
                      "japaneseVoiceText": "せんせいにきけばすぐにわかります",
                      "wordBank": [
                          "せんせいに",
                          "きけば",
                          "すぐに",
                          "わかります",
                          "きいたらば",
                          "きくば"
                      ],
                      "correctSentence": [
                          "せんせいに",
                          "きけば",
                          "すぐに",
                          "わかります"
                      ],
                      "explanation": "Sensei ni kikeba sugu ni wakarimasu (きく ➔ きけば)."
                  },
                  {
                      "id": "ex-22-3-3",
                      "type": "listening",
                      "prompt": "Escucha esta pregunta muy común para pedir orientación:",
                      "japaneseVoiceText": "かぎをなくしてしまいました。どうすればいいですか。",
                      "options": [
                          {
                              "id": "l22-dou",
                              "text": "Perdí mi llave. ¿Qué debería hacer? (どうすればいいですか).",
                              "isCorrect": true
                          },
                          {
                              "id": "l22-dou2",
                              "text": "Encontré una llave. ¿De quién será?"
                          },
                          {
                              "id": "l22-dou3",
                              "text": "No hace falta cerrar con llave."
                          }
                      ],
                      "correctAnswerId": "l22-dou",
                      "explanation": "「どうすればいいですか」 es una frase clave que significa \"¿Cómo debería proceder? / ¿Qué debería hacer?\"."
                  }
              ]
          },
          {
              "id": "l22-node-4",
              "unitId": 22,
              "lessonNumber": 22,
              "title": "A pesar de (〜のに) y Como (〜のような / 〜のように)",
              "japaneseTitle": "逆接「〜のに」と例示「〜のような・〜のように」",
              "description": "Aunque estudié mucho no aprobé (〜のに) y hablar japonés como un nativo (〜のように)",
              "icon": "Sparkles",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-22-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué matiz expresa 「〜のに」 (\"a pesar de que...\") y cómo se une a un な-adjetivo o Sustantivo en presente afirmativo?",
                      "options": [
                          {
                              "id": "noni-1",
                              "text": "Expresa frustración o sorpresa ante un resultado inesperado, y lleva な (ej. 日曜日なのに働きます)",
                              "isCorrect": true
                          },
                          {
                              "id": "noni-2",
                              "text": "Se usa para pedir permiso y lleva の"
                          },
                          {
                              "id": "noni-3",
                              "text": "Expresa causa lógica igual que から"
                          }
                      ],
                      "correctAnswerId": "noni-1",
                      "explanation": "〜のに contrasta un hecho real con un resultado inesperado/frustrante. Con Sustantivos y な-adj en presente usa な (静かなのに / 休みなのに)."
                  },
                  {
                      "id": "ex-22-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"A pesar de que tomé la medicina, no me recupero\":",
                      "japaneseVoiceText": "くすりをのんだのになおりません",
                      "wordBank": [
                          "くすりを",
                          "のんだのに",
                          "なおりません",
                          "のむのに",
                          "だから"
                      ],
                      "correctSentence": [
                          "くすりを",
                          "のんだのに",
                          "なおりません"
                      ],
                      "explanation": "Kusuri o nonda noni, naorimasen."
                  },
                  {
                      "id": "ex-22-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las expresiones con 〜のような (modifica sustantivo) y 〜のように (modifica verbo/adj):",
                      "pairs": [
                          {
                              "id": "yo1",
                              "left": "東京のような大きい町",
                              "right": "Una ciudad grande como Tokio (+ Sust)"
                          },
                          {
                              "id": "yo2",
                              "left": "日本人のように話す",
                              "right": "Hablar como un japonés (+ Verbo)"
                          },
                          {
                              "id": "yo3",
                              "left": "氷のように冷たい",
                              "right": "Frío como el hielo (+ Adjetivo)"
                          },
                          {
                              "id": "yo4",
                              "left": "高いのに買いました",
                              "right": "A pesar de que es caro, lo compré"
                          }
                      ],
                      "explanation": "〜のような + Sustantivo; 〜のように + Verbo o Adjetivo."
                  }
              ]
          },
          {
              "id": "l22-node-5",
              "unitId": 22,
              "lessonNumber": 22,
              "title": "Workbook: Debate sobre Educación y Reglas",
              "japaneseTitle": "ワークブック総合（使役形・〜ば・〜のに）",
              "description": "Práctica integradora de la Lección 22: crianza de los hijos, permisos y contrastes",
              "icon": "Headphones",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-22-5-1",
                      "type": "multiple-choice",
                      "prompt": "Un padre dice: \"Hago que mi hijo limpie su cuarto\". ¿Cuál es la oración correcta en japonés?",
                      "options": [
                          {
                              "id": "kid-clean",
                              "text": "わたしは 子どもに 部屋を 掃除させます。",
                              "isCorrect": true
                          },
                          {
                              "id": "kid-clean2",
                              "text": "わたしは 子どもに 部屋を 掃除されます。"
                          },
                          {
                              "id": "kid-clean3",
                              "text": "子どもは わたしに 部屋を 掃除させます。"
                          }
                      ],
                      "correctAnswerId": "kid-clean",
                      "explanation": "En oraciones causativas con verbo transitivo, la persona que realiza la acción se marca con に: 子どもに部屋を掃除させます."
                  },
                  {
                      "id": "ex-22-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook: Traduce \"Quiero hablar japonés con fluidez como mi profesor\":",
                      "japaneseVoiceText": "せんせいのようにじょうずににほんごがはなしたいです",
                      "wordBank": [
                          "せんせいのように",
                          "じょうずに",
                          "にほんごが",
                          "はなしたいです",
                          "せんせいのような"
                      ],
                      "correctSentence": [
                          "せんせいのように",
                          "じょうずに",
                          "にほんごが",
                          "はなしたいです"
                      ],
                      "explanation": "Sensei no you ni jouzu ni nihongo ga hanashitai desu."
                  },
                  {
                      "id": "ex-22-5-3",
                      "type": "listening",
                      "prompt": "Escucha la queja de Takeshi sobre su cita:",
                      "japaneseVoiceText": "やくそくしたのに、かのじょはきませんでした",
                      "options": [
                          {
                              "id": "l22-wb-1",
                              "text": "A pesar de que lo habían prometido, ella no vino.",
                              "isCorrect": true
                          },
                          {
                              "id": "l22-wb-2",
                              "text": "Como hicieron una promesa, se vieron a tiempo."
                          },
                          {
                              "id": "l22-wb-3",
                              "text": "Él olvidó la promesa que le hizo a su novia."
                          }
                      ],
                      "correctAnswerId": "l22-wb-1",
                      "explanation": "Yakusoku shita noni, kanojo wa kimasen deshita."
                  }
              ]
          }
      ]
  },

  // ==========================================
  // UNIDAD 23: GENKI LECCIÓN 23: ¡ADIÓS, JAPÓN!
  // ==========================================
  {
      "id": 23,
      "genkiBook": "Genki II",
      "title": "Genki Lección 23: ¡Adiós, Japón!",
      "subtitle": "Causativa-Pasiva (使役受身), 〜ても, 〜ことにする/なる y 〜方",
      "description": "¡La gran graduación de Genki II y del nivel JLPT N4! Domina la forma causativa-pasiva, concesiones con 〜ても, decisiones con 〜ことにする y maneras con 〜方.",
      "themeColor": "#e5a100",
      "nodes": [
          {
              "id": "l23-node-1",
              "unitId": 23,
              "lessonNumber": 23,
              "title": "La Forma Causativa-Pasiva (使役受身形)",
              "japaneseTitle": "使役受身形（〜させられる・〜される：Ser obligado a hacer）",
              "description": "Expresa que te obligaron o hicieron hacer algo sin ganas (ej. \"Mi jefe me hizo trabajar horas extra\")",
              "icon": "Flame",
              "color": "red",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-23-1-1",
                      "type": "multiple-choice",
                      "prompt": "¿Qué expresa la Forma Causativa-Pasiva (使役受身形) y cómo se forma su versión abreviada en los verbos U (excepto los terminados en 〜す)?",
                      "options": [
                          {
                              "id": "cpas-1",
                              "text": "Expresa \"ser obligado a hacer algo\"; en verbos U la vocal \"-u\" pasa a \"-a\" + される (ej. 書かされる, 待たされる, 飲まされる)",
                              "isCorrect": true
                          },
                          {
                              "id": "cpas-2",
                              "text": "Expresa \"poder hacer algo\" y termina en 〜える"
                          },
                          {
                              "id": "cpas-3",
                              "text": "Expresa un deseo propio"
                          }
                      ],
                      "correctAnswerId": "cpas-1",
                      "explanation": "Ru-verbs: 〜させられる (食べさせられる). U-verbs (salvo -su): columna -a + される (待たされる, 行かされる, 買わされる). Verbos en -su: 話させられる."
                  },
                  {
                      "id": "ex-23-1-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Cuando era niño, mi madre me obligaba a comer verduras\":",
                      "japaneseVoiceText": "こどものときははにやさいをたべさせられました",
                      "wordBank": [
                          "こどものとき",
                          "ははに",
                          "やさいを",
                          "たべさせられました",
                          "たべさせました",
                          "たべられました"
                      ],
                      "correctSentence": [
                          "こどものとき",
                          "ははに",
                          "やさいを",
                          "たべさせられました"
                      ],
                      "explanation": "Kodomo no toki, haha ni yasai o tabesaseraremashita (たべる ➔ たべさせられる)."
                  },
                  {
                      "id": "ex-23-1-3",
                      "type": "match-pairs",
                      "prompt": "Empareja cada verbo con su Forma Causativa-Pasiva:",
                      "pairs": [
                          {
                              "id": "cpp1",
                              "left": "まつ (esperar - U-verb)",
                              "right": "またされる (que te hagan esperar)"
                          },
                          {
                              "id": "cpp2",
                              "left": "かく (escribir - U-verb)",
                              "right": "かかされる (ser obligado a escribir)"
                          },
                          {
                              "id": "cpp3",
                              "left": "たべる (comer - Ru-verb)",
                              "right": "たべさせられる (ser obligado a comer)"
                          },
                          {
                              "id": "cpp4",
                              "left": "する (hacer - Irregular)",
                              "right": "させられる (ser obligado a hacer)"
                          }
                      ],
                      "explanation": "Dominar la causativa-pasiva cierra el ciclo de todas las conjugaciones verbales de Genki I y II."
                  }
              ]
          },
          {
              "id": "l23-node-2",
              "unitId": 23,
              "lessonNumber": 23,
              "title": "Incluso si / Aunque: 〜ても",
              "japaneseTitle": "逆接の仮定「〜ても」（雨が降っても・いくら高くても）",
              "description": "Incluso si llueve iré (降っても行きます) y por más que busqué no lo encontré (いくら〜ても)",
              "icon": "Sparkles",
              "color": "blue",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-23-2-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se construye 「〜ても」 (\"incluso si / aunque...\") con verbos, い-adjetivos y な-adjetivos/sustantivos?",
                      "options": [
                          {
                              "id": "temo-1",
                              "text": "Forma Te + も (Verb: 行っても, い-adj: 高くても, な-adj/Sust: 静かでも / 雨でも)",
                              "isCorrect": true
                          },
                          {
                              "id": "temo-2",
                              "text": "Forma diccionario + ても"
                          },
                          {
                              "id": "temo-3",
                              "text": "Raíz Masu + ても"
                          }
                      ],
                      "correctAnswerId": "temo-1",
                      "explanation": "Se toma cualquier palabra en Forma Te (〜て / 〜くて / 〜で) y se añade も."
                  },
                  {
                      "id": "ex-23-2-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Incluso si regreso a mi país, continuaré estudiando japonés\":",
                      "japaneseVoiceText": "くにへかえってもにほんごのべんきょうをつづけます",
                      "wordBank": [
                          "くにへ",
                          "かえっても",
                          "にほんごの",
                          "べんきょうを",
                          "つづけます",
                          "かえったら"
                      ],
                      "correctSentence": [
                          "くにへ",
                          "かえっても",
                          "にほんごの",
                          "べんきょうを",
                          "つづけます"
                      ],
                      "explanation": "Kuni e kaette mo, nihongo no benkyou o tsuzukemasu."
                  },
                  {
                      "id": "ex-23-2-3",
                      "type": "listening",
                      "prompt": "Escucha la frase con 「いくら〜ても」 (\"por más que...\"):",
                      "japaneseVoiceText": "いくらたべてもふとりません",
                      "options": [
                          {
                              "id": "l23-ikura",
                              "text": "Por más que coma, no engordo.",
                              "isCorrect": true
                          },
                          {
                              "id": "l23-ikura2",
                              "text": "Si como mucho, engordo enseguida."
                          },
                          {
                              "id": "l23-ikura3",
                              "text": "He decidido no comer dulces."
                          }
                      ],
                      "correctAnswerId": "l23-ikura",
                      "explanation": "Ikura tabete mo futorimasen (いくら + Te-mo = por más que...)."
                  }
              ]
          },
          {
              "id": "l23-node-3",
              "unitId": 23,
              "lessonNumber": 23,
              "title": "Decisiones: 〜ことにする vs 〜ことになる",
              "japaneseTitle": "決定「〜ことにする」と決まり「〜ことになる」",
              "description": "Decidir por voluntad propia (ことにする) vs quedar decidido por circunstancias o reglas (ことになる)",
              "icon": "Compass",
              "color": "green",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-23-3-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cuál es la diferencia entre 「日本へ行くことにしました」 y 「日本へ行くことになりました」?",
                      "options": [
                          {
                              "id": "koto-diff",
                              "text": "ことにしました = YO decidí ir por mi propia voluntad; ことになりました = quedó decidido que iré (por mi empresa, beca o circunstancia)",
                              "isCorrect": true
                          },
                          {
                              "id": "koto-diff2",
                              "text": "Ambos significan exactamente lo mismo"
                          },
                          {
                              "id": "koto-diff3",
                              "text": "ことにしました es para el pasado y ことになりました para el futuro"
                          }
                      ],
                      "correctAnswerId": "koto-diff",
                      "explanation": "Verbo (diccionario o ない) + ことにする = decisión personal. + ことになる = decisión externa/institucional o resultado."
                  },
                  {
                      "id": "ex-23-3-2",
                      "type": "word-order",
                      "prompt": "Traduce el hábito adoptado (〜ことにしています): \"Por mi salud, tengo por norma correr todos los días\":",
                      "japaneseVoiceText": "けんこうのためにまいにちはしることにしています",
                      "wordBank": [
                          "けんこうのために",
                          "まいにち",
                          "はしる",
                          "ことにしています",
                          "ことになります"
                      ],
                      "correctSentence": [
                          "けんこうのために",
                          "まいにち",
                          "はしる",
                          "ことにしています"
                      ],
                      "explanation": "〜ことにしています expresa una resolución personal que se practica como hábito constante."
                  },
                  {
                      "id": "ex-23-3-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las expresiones de decisión de la Lección 23:",
                      "pairs": [
                          {
                              "id": "kd1",
                              "left": "たばこを吸わないことにしました",
                              "right": "Decidí no fumar (decisión propia)"
                          },
                          {
                              "id": "kd2",
                              "left": "来月結婚することになりました",
                              "right": "Quedó decidido que nos casaremos el próximo mes"
                          },
                          {
                              "id": "kd3",
                              "left": "毎日野菜を食べることにしています",
                              "right": "Tengo por costumbre decidida comer verduras a diario"
                          }
                      ],
                      "explanation": "Contraste fundamental del japonés N4 entre する (agente activo) y なる (resultado/acuerdo)."
                  }
              ]
          },
          {
              "id": "l23-node-4",
              "unitId": 23,
              "lessonNumber": 23,
              "title": "Hasta que (〜まで) y Manera de hacer (〜方)",
              "japaneseTitle": "期限「〜まで」と方法「〜方（かた）」",
              "description": "Estaré aquí hasta que me gradúe (卒業するまで) y cómo usar los palillos (お箸の使い方)",
              "icon": "BookOpen",
              "color": "purple",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-23-4-1",
                      "type": "multiple-choice",
                      "prompt": "¿Cómo se forma el sustantivo que significa \"la manera / forma de hacer [Verbo]\" (ej. cómo escribir, cómo leer, cómo usar)?",
                      "options": [
                          {
                              "id": "kata-1",
                              "text": "Raíz Masu (sin 〜ます) + 方 (かた): 書き方 (kakikata), 読み方 (yomikata), 使い方 (tsukaikata)",
                              "isCorrect": true
                          },
                          {
                              "id": "kata-2",
                              "text": "Forma Diccionario + 方"
                          },
                          {
                              "id": "kata-3",
                              "text": "Forma Te + 方"
                          }
                      ],
                      "correctAnswerId": "kata-1",
                      "explanation": "Raíz Masu + 方 (かた) convierte el verbo en un sustantivo (\"modo de hacer X\")."
                  },
                  {
                      "id": "ex-23-4-2",
                      "type": "word-order",
                      "prompt": "Traduce al japonés: \"Por favor enséñame cómo hacer sushi (la forma de preparar sushi)\":",
                      "japaneseVoiceText": "すしのつくりかたをおしえてください",
                      "wordBank": [
                          "すしの",
                          "つくりかたを",
                          "おしえてください",
                          "つくるかたを",
                          "つくりて"
                      ],
                      "correctSentence": [
                          "すしの",
                          "つくりかたを",
                          "おしえてください"
                      ],
                      "explanation": "Sushi no tsukurikata o oshiete kudasai (つくる ➔ つくり + かた)."
                  },
                  {
                      "id": "ex-23-4-3",
                      "type": "match-pairs",
                      "prompt": "Empareja las expresiones con 〜方 y 〜まで:",
                      "pairs": [
                          {
                              "id": "kt1",
                              "left": "漢字の読み方",
                              "right": "La manera de leer el kanji"
                          },
                          {
                              "id": "kt2",
                              "left": "切符の買い方",
                              "right": "Cómo comprar un boleto"
                          },
                          {
                              "id": "kt3",
                              "left": "雨がやむまで待ちます",
                              "right": "Esperaré hasta que deje de llover"
                          },
                          {
                              "id": "kt4",
                              "left": "卒業するまで日本にいます",
                              "right": "Estaré en Japón hasta que me gradúe"
                          }
                      ],
                      "explanation": "Verbo en forma diccionario + まで significa \"hasta que ocurra X\"."
                  }
              ]
          },
          {
              "id": "l23-node-5",
              "unitId": 23,
              "lessonNumber": 23,
              "title": "Workbook Final: ¡Graduación de Genki II (JLPT N4)!",
              "japaneseTitle": "ワークブック総合（さようなら日本・N4総まとめ）",
              "description": "El diálogo final de despedida de Mary y evaluación integradora de todo Genki II",
              "icon": "Award",
              "color": "orange",
              "totalSteps": 3,
              "unlocked": false,
              "completedSteps": 0,
              "stars": 0,
              "exercises": [
                  {
                      "id": "ex-23-5-1",
                      "type": "multiple-choice",
                      "prompt": "En el diálogo final de Genki II, Mary se despide de su familia anfitriona diciendo: 「いろいろお世話になりました」. ¿Qué significa esta expresión cultural?",
                      "options": [
                          {
                              "id": "osewa-1",
                              "text": "Muchas gracias por todo su cuidado y atenciones hacia mí durante este tiempo",
                              "isCorrect": true
                          },
                          {
                              "id": "osewa-2",
                              "text": "Perdón por llegar tarde hoy"
                          },
                          {
                              "id": "osewa-3",
                              "text": "Buen provecho antes de comer"
                          }
                      ],
                      "correctAnswerId": "osewa-1",
                      "explanation": "「お世話になりました」 es la fórmula japonesa de gratitud profunda al despedirse de quienes nos cuidaron o apoyaron."
                  },
                  {
                      "id": "ex-23-5-2",
                      "type": "word-order",
                      "prompt": "Del Workbook Final: Traduce \"Aunque estemos lejos, sigamos en contacto\":",
                      "japaneseVoiceText": "とおくにいてもれんらくしましょう",
                      "wordBank": [
                          "とおくに",
                          "いても",
                          "れんらくしましょう",
                          "いたら",
                          "いるも"
                      ],
                      "correctSentence": [
                          "とおくに",
                          "いても",
                          "れんらくしましょう"
                      ],
                      "explanation": "Tooku ni ite mo, renraku shimashou."
                  },
                  {
                      "id": "ex-23-5-3",
                      "type": "listening",
                      "prompt": "Escucha el mensaje de despedida al completar Genki II:",
                      "japaneseVoiceText": "にほんへきてほんとうによかったです。これからもにほんごをべんきょうしつづけます。",
                      "options": [
                          {
                              "id": "l23-grad",
                              "text": "¡Qué bueno de verdad que vine a Japón! De ahora en adelante seguiré estudiando japonés.",
                              "isCorrect": true
                          },
                          {
                              "id": "l23-grad2",
                              "text": "Ya no estudiaré más japonés al volver a mi país."
                          },
                          {
                              "id": "l23-grad3",
                              "text": "Apenas voy a empezar la Lección 1 mañana."
                          }
                      ],
                      "correctAnswerId": "l23-grad",
                      "explanation": "¡Felicidades! Has completado las 23 lecciones de Genki I y Genki II (Nivel JLPT N4 completo)."
                  }
              ]
          }
      ]
  }
];
