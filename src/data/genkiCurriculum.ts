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
            prompt: 'Forma la palabra "azul" (あお / ao):',
            promptSub: 'あお (ao)',
            japaneseVoiceText: 'あお',
            wordBank: ['お', 'あ'],
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
            prompt: 'Arma la palabra "estación de tren" (えき / eki):',
            promptSub: 'えき (eki)',
            japaneseVoiceText: 'えき',
            wordBank: ['き', 'え'],
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
            prompt: 'Forma la palabra "allí / ese lugar" (そこ / soko):',
            promptSub: 'そこ (soko)',
            japaneseVoiceText: 'そこ',
            wordBank: ['こ', 'そ'],
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
            prompt: 'Forma la palabra "metro / subterráneo" (ちかてつ):',
            promptSub: 'ちかてつ (chikatetsu)',
            japaneseVoiceText: 'ちかてつ',
            wordBank: ['つ', 'て', 'か', 'ち'],
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
            prompt: 'Forma la palabra "nombre" (なまえ / namae):',
            promptSub: 'なまえ (namae)',
            japaneseVoiceText: 'なまえ',
            wordBank: ['え', 'ま', 'な'],
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
            prompt: 'Arma la palabra "barco" (ふね / fune):',
            promptSub: 'ふね (fune)',
            japaneseVoiceText: 'ふね',
            wordBank: ['ね', 'ふ'],
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
            prompt: 'Forma la palabra "ciudad" (まち / machi):',
            promptSub: 'まち (machi)',
            japaneseVoiceText: 'まち',
            wordBank: ['ち', 'ま'],
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
            prompt: 'Arma la palabra "montaña" (やま / yama):',
            promptSub: 'やま (yama)',
            japaneseVoiceText: 'やま',
            wordBank: ['ま', 'や'],
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
            prompt: 'Forma la palabra "manzana" (りんご / ringo):',
            promptSub: 'りんご (ringo)',
            japaneseVoiceText: 'りんご',
            wordBank: ['ご', 'ん', 'り'],
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
            prompt: 'Forma la palabra "Japón" (にほん / Nihon):',
            promptSub: 'にほん (nihon)',
            japaneseVoiceText: 'にほん',
            wordBank: ['ん', 'ほ', 'に'],
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
            prompt: 'Forma la palabra "taxi" (タクシー):',
            promptSub: 'タクシー (takushii)',
            japaneseVoiceText: 'タクシー',
            wordBank: ['ー', 'シ', 'ク', 'タ'],
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
            prompt: 'Forma la palabra "café" (コーヒー / koohii):',
            promptSub: 'コーヒー (koohii)',
            japaneseVoiceText: 'コーヒー',
            wordBank: ['ー', 'ヒ', 'ー', 'コ'],
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
            prompt: 'Forma la frase clásica de cierre: "Mucho gusto / Cuento con su favor":',
            promptSub: 'よろしくおねがいします',
            japaneseVoiceText: 'よろしくおねがいします',
            wordBank: ['おねがいします', 'よろしく'],
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
            promptSub: '45 = 40 (よんじゅう) + 5 (ご)',
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
            prompt: 'Del Workbook: Resuelve la suma 8 + 4 = 12 en japonés:',
            promptSub: 'はち ＋ よん ＝ じゅうに (12)',
            japaneseVoiceText: 'じゅうに',
            wordBank: ['に', 'じゅう'],
            correctSentence: ['じゅう', 'に'],
            explanation: '10 (じゅう) + 2 (に) = 12 (じゅうに).'
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
            prompt: 'Ordena la pregunta del libro: "¿Qué hora es ahora?":',
            promptSub: '今、何時ですか。',
            japaneseVoiceText: 'いまなんじですか',
            wordBank: ['か', 'なんじ', 'いま', 'です'],
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
            prompt: 'Traduce: "Mary es estadounidense."',
            promptSub: 'メアリーさんはアメリカ人です。',
            japaneseVoiceText: 'メアリーさんはアメリカじんです',
            wordBank: ['アメリカじん', 'です', 'メアリーさん', 'は'],
            correctSentence: ['メアリーさん', 'は', 'アメリカじん', 'です'],
            explanation: 'País + 人 (じん) = Nacionalidad. メアリーさんはアメリカ人です。'
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
            prompt: 'Ordena la pregunta del diálogo de Genki: "¿Takeshi es estudiante?":',
            promptSub: 'たけしさんは学生ですか。',
            japaneseVoiceText: 'たけしさんはがくせいですか',
            wordBank: ['か', 'がくせい', 'は', 'です', 'たけしさん'],
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
            prompt: 'Traduce: "Mi padre es empleado de empresa":',
            promptSub: '父は会社員です。',
            japaneseVoiceText: 'ちちはかいしゃいんです',
            wordBank: ['かいしゃいん', 'は', 'ちち', 'です'],
            correctSentence: ['ちち', 'は', 'かいしゃいん', 'です'],
            explanation: '会社員 (かいしゃいん / kaishain) = empleado de oficina.'
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
            prompt: 'Forma la frase de Mary: "Mi especialidad es la lengua japonesa":',
            promptSub: '専攻は日本語です。',
            japaneseVoiceText: 'せんこうはにほんごです',
            wordBank: ['にほんご', 'は', 'せんこう', 'です'],
            correctSentence: ['せんこう', 'は', 'にほんご', 'です'],
            explanation: '専攻 (せんこう / senkou) = especialidad / carrera universitaria.'
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
            prompt: 'Ordena la pregunta del Workbook: "¿Cuántos años tienes?":',
            promptSub: '何歳ですか。',
            japaneseVoiceText: 'なんさいですか',
            wordBank: ['か', 'なんさい', 'です'],
            correctSentence: ['なんさい', 'です', 'か'],
            explanation: '何歳 (なんさい / nansai) = cuántos años.'
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
            prompt: 'Traduce: "Estudiante de la Universidad Sakura":',
            promptSub: 'さくら大学の学生',
            japaneseVoiceText: 'さくらだいがくのがくせい',
            wordBank: ['がくせい', 'の', 'さくらだいがく'],
            correctSentence: ['さくらだいがく', 'の', 'がくせい'],
            explanation: 'En japonés lo general/institución va primero, seguido de の y la persona.'
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
            prompt: 'Del Workbook: Traduce "El amigo de Takeshi":',
            promptSub: 'たけしさんのともだち',
            japaneseVoiceText: 'たけしさんのともだち',
            wordBank: ['ともだち', 'の', 'たけしさん'],
            correctSentence: ['たけしさん', 'の', 'ともだち'],
            explanation: 'Poseedor (Takeshi) + の + posesión/vínculo (amigo).'
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
            prompt: 'Ordena la pregunta: "¿Cuál es tu número de teléfono?":',
            promptSub: '電話番号は何番ですか。',
            japaneseVoiceText: 'でんわばんごうはなんばんですか',
            wordBank: ['か', 'なんばん', 'でんわばんごう', 'です', 'は'],
            correctSentence: ['でんわばんごう', 'は', 'なんばん', 'です', 'か'],
            explanation: '何番 (なんばん / nanban) = qué número.'
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
            prompt: 'Arma la auto-presentación completa de Takeshi del libro:',
            promptSub: 'たけしです。さくら大学の学生です。',
            japaneseVoiceText: 'たけしですさくらだいがくのがくせいです',
            wordBank: ['がくせい', 'たけし', 'の', 'さくらだいがく', 'です', 'です'],
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

