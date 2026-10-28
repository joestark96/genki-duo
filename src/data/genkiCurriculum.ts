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

