import { Unit } from '../types';

export const genkiCurriculum: Unit[] = [
  // ==========================================
  // UNIDAD 0: UNIDAD 0: LOS ALFABETOS KANA
  // ==========================================
  {
    "id": 0,
    "genkiBook": "Kanas",
    "title": "Unidad 0: Los Alfabetos Kana",
    "subtitle": "Hiragana y Katakana Completos (Fila por Fila)",
    "description": "Domina cada fila del silabario japonés con pronunciación, lectura y palabras base.",
    "themeColor": "#58cc02",
    "nodes": [
      {
        "id": "l0-node-1",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila A (あ・い・う・え・お)",
        "japaneseTitle": "あ行のひらがな",
        "description": "Las 5 vocales base del idioma japonés",
        "icon": "Sparkles",
        "color": "green",
        "totalSteps": 3,
        "unlocked": true,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-a1",
            "type": "multiple-choice",
            "prompt": "¿Qué sonido representa este caracter?",
            "promptSub": "あ",
            "japaneseVoiceText": "あ",
            "options": [
              {
                "id": "opt-a",
                "text": "a",
                "isCorrect": true
              },
              {
                "id": "opt-o",
                "text": "o"
              },
              {
                "id": "opt-e",
                "text": "e"
              },
              {
                "id": "opt-u",
                "text": "u"
              }
            ],
            "correctAnswerId": "opt-a",
            "explanation": "「あ」 es el primer caracter Hiragana y representa la vocal \"a\"."
          },
          {
            "id": "ex-0-a2",
            "type": "match-pairs",
            "prompt": "Une las vocales Hiragana con su Romaji:",
            "pairs": [
              {
                "id": "p1",
                "left": "あ",
                "leftSub": "Vocal 1",
                "right": "a"
              },
              {
                "id": "p2",
                "left": "い",
                "leftSub": "Vocal 2",
                "right": "i"
              },
              {
                "id": "p3",
                "left": "う",
                "leftSub": "Vocal 3",
                "right": "u"
              },
              {
                "id": "p4",
                "left": "え",
                "leftSub": "Vocal 4",
                "right": "e"
              }
            ],
            "explanation": "El orden de las vocales en japonés siempre es: a, i, u, e, o."
          },
          {
            "id": "ex-0-a3",
            "type": "listening",
            "prompt": "Escucha el audio y selecciona el caracter correcto:",
            "japaneseVoiceText": "お",
            "options": [
              {
                "id": "opt-1",
                "text": "お (o)",
                "isCorrect": true
              },
              {
                "id": "opt-2",
                "text": "あ (a)"
              },
              {
                "id": "opt-3",
                "text": "え (e)"
              },
              {
                "id": "opt-4",
                "text": "い (i)"
              }
            ],
            "correctAnswerId": "opt-1",
            "explanation": "El sonido escuchado fue \"o\", correspondiente a 「お」."
          },
          {
            "id": "ex-0-a4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"azul\":",
            "japaneseVoiceText": "あお",
            "wordBank": [
              "お",
              "あ",
              "い",
              "え"
            ],
            "correctSentence": [
              "あ",
              "お"
            ],
            "explanation": "「あ」 (a) + 「お」 (o) = あお (azul en japonés)."
          }
        ]
      },
      {
        "id": "l0-node-2",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Ka (か・き・く・け・こ)",
        "japaneseTitle": "か行のひらがな",
        "description": "Sonidos consonánticos con K",
        "icon": "Flame",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-k1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se lee 「かさ」 (paraguas)?",
            "promptSub": "かさ",
            "japaneseVoiceText": "かさ",
            "options": [
              {
                "id": "o1",
                "text": "kasa",
                "isCorrect": true
              },
              {
                "id": "o2",
                "text": "saka"
              },
              {
                "id": "o3",
                "text": "kawa"
              },
              {
                "id": "o4",
                "text": "sora"
              }
            ],
            "correctAnswerId": "o1",
            "explanation": "「か」 (ka) + 「さ」 (sa) = かさ (kasa, paraguas)."
          },
          {
            "id": "ex-0-k2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Ka:",
            "pairs": [
              {
                "id": "p1",
                "left": "か",
                "right": "ka"
              },
              {
                "id": "p2",
                "left": "き",
                "right": "ki"
              },
              {
                "id": "p3",
                "left": "く",
                "right": "ku"
              },
              {
                "id": "p4",
                "left": "こ",
                "right": "ko"
              }
            ],
            "explanation": "La fila Ka se combina con las 5 vocales: ka, ki, ku, ke, ko."
          },
          {
            "id": "ex-0-k3",
            "type": "listening",
            "prompt": "Escucha con atención y selecciona la sílaba correcta:",
            "japaneseVoiceText": "き",
            "options": [
              {
                "id": "opt-ki",
                "text": "き (ki)",
                "isCorrect": true
              },
              {
                "id": "opt-ku",
                "text": "く (ku)"
              },
              {
                "id": "opt-ke",
                "text": "け (ke)"
              },
              {
                "id": "opt-ko",
                "text": "こ (ko)"
              }
            ],
            "correctAnswerId": "opt-ki",
            "explanation": "Escuchaste 「き」 (ki)."
          },
          {
            "id": "ex-0-k4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"estación de tren\":",
            "japaneseVoiceText": "えき",
            "wordBank": [
              "き",
              "え",
              "か",
              "い"
            ],
            "correctSentence": [
              "え",
              "き"
            ],
            "explanation": "「え」 + 「き」 = えき (estación de tren en Genki)."
          }
        ]
      },
      {
        "id": "l0-node-3",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Sa (さ・し・す・せ・そ)",
        "japaneseTitle": "さ行のひらがな",
        "description": "Sonidos con S y el especial 「し」 (shi)",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-s1",
            "type": "multiple-choice",
            "prompt": "Ojo con la excepción: ¿Cómo se pronuncia 「し」?",
            "promptSub": "し",
            "japaneseVoiceText": "し",
            "options": [
              {
                "id": "s-shi",
                "text": "shi (como en inglés \"she\")",
                "isCorrect": true
              },
              {
                "id": "s-si",
                "text": "si"
              },
              {
                "id": "s-chi",
                "text": "chi"
              },
              {
                "id": "s-hi",
                "text": "hi"
              }
            ],
            "correctAnswerId": "s-shi",
            "explanation": "En japonés no existe el sonido \"si\" natural; se pronuncia \"shi\" (し)."
          },
          {
            "id": "ex-0-s2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Sa:",
            "pairs": [
              {
                "id": "sp1",
                "left": "さ",
                "right": "sa"
              },
              {
                "id": "sp2",
                "left": "し",
                "right": "shi"
              },
              {
                "id": "sp3",
                "left": "す",
                "right": "su"
              },
              {
                "id": "sp4",
                "left": "そ",
                "right": "so"
              }
            ],
            "explanation": "Fila Sa: sa, shi, su, se, so."
          },
          {
            "id": "ex-0-s3",
            "type": "listening",
            "prompt": "Escucha el audio y selecciona la palabra:",
            "japaneseVoiceText": "すし",
            "options": [
              {
                "id": "s-opt1",
                "text": "すし (sushi)",
                "isCorrect": true
              },
              {
                "id": "s-opt2",
                "text": "さし (sashi)"
              },
              {
                "id": "s-opt3",
                "text": "すき (suki)"
              },
              {
                "id": "s-opt4",
                "text": "そこ (soko)"
              }
            ],
            "correctAnswerId": "s-opt1",
            "explanation": "Escuchaste 「すし」 (sushi)."
          },
          {
            "id": "ex-0-s4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"allí / ese lugar\":",
            "japaneseVoiceText": "そこ",
            "wordBank": [
              "こ",
              "そ",
              "さ",
              "す"
            ],
            "correctSentence": [
              "そ",
              "こ"
            ],
            "explanation": "「そ」 (so) + 「こ」 (ko) = そこ (soko, allí)."
          }
        ]
      },
      {
        "id": "l0-node-4",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Ta (た・ち・つ・て・と)",
        "japaneseTitle": "た行のひらがな",
        "description": "Sonidos con T y las excepciones 「ち」(chi) y 「つ」(tsu)",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-t1",
            "type": "multiple-choice",
            "prompt": "¿Cuáles son las dos lecturas irregulares de la fila Ta?",
            "promptSub": "ち y つ",
            "japaneseVoiceText": "ち つ",
            "options": [
              {
                "id": "t-irr",
                "text": "chi (ち) y tsu (つ)",
                "isCorrect": true
              },
              {
                "id": "t-reg",
                "text": "ti y tu"
              },
              {
                "id": "t-oth",
                "text": "shi y su"
              }
            ],
            "correctAnswerId": "t-irr",
            "explanation": "La fila Ta es: ta (た), chi (ち), tsu (つ), te (て), to (と)."
          },
          {
            "id": "ex-0-t2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Ta:",
            "pairs": [
              {
                "id": "tp1",
                "left": "た",
                "right": "ta"
              },
              {
                "id": "tp2",
                "left": "ち",
                "right": "chi"
              },
              {
                "id": "tp3",
                "left": "つ",
                "right": "tsu"
              },
              {
                "id": "tp4",
                "left": "て",
                "right": "te"
              }
            ],
            "explanation": "Ta, Chi, Tsu, Te, To son fundamentales en Genki."
          },
          {
            "id": "ex-0-t3",
            "type": "listening",
            "prompt": "Escucha el audio y reconoce el caracter:",
            "japaneseVoiceText": "つ",
            "options": [
              {
                "id": "t-tsu",
                "text": "つ (tsu)",
                "isCorrect": true
              },
              {
                "id": "t-chi",
                "text": "ち (chi)"
              },
              {
                "id": "t-te",
                "text": "て (te)"
              },
              {
                "id": "t-ta",
                "text": "た (ta)"
              }
            ],
            "correctAnswerId": "t-tsu",
            "explanation": "Escuchaste 「つ」 (tsu, como en tsunami)."
          },
          {
            "id": "ex-0-t4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"metro / subterráneo\":",
            "japaneseVoiceText": "ちかてつ",
            "wordBank": [
              "つ",
              "て",
              "か",
              "ち",
              "た",
              "す"
            ],
            "correctSentence": [
              "ち",
              "か",
              "て",
              "つ"
            ],
            "explanation": "ち + か + て + つ = ちかてつ (chikatetsu, metro)."
          }
        ]
      },
      {
        "id": "l0-node-5",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Na (な・に・ぬ・ね・の)",
        "japaneseTitle": "な行のひらがな",
        "description": "Sonidos nasales con N",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-n1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se lee 「いぬ」 (perro)?",
            "promptSub": "いぬ",
            "japaneseVoiceText": "いぬ",
            "options": [
              {
                "id": "n-inu",
                "text": "inu (perro)",
                "isCorrect": true
              },
              {
                "id": "n-neko",
                "text": "neko (gato)"
              },
              {
                "id": "n-tori",
                "text": "tori (pájaro)"
              }
            ],
            "correctAnswerId": "n-inu",
            "explanation": "「い」 (i) + 「ぬ」 (nu) = いぬ (perro)."
          },
          {
            "id": "ex-0-n2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Na:",
            "pairs": [
              {
                "id": "np1",
                "left": "な",
                "right": "na"
              },
              {
                "id": "np2",
                "left": "に",
                "right": "ni"
              },
              {
                "id": "np3",
                "left": "ね",
                "right": "ne"
              },
              {
                "id": "np4",
                "left": "の",
                "right": "no"
              }
            ],
            "explanation": "Fila Na: na, ni, nu, ne, no."
          },
          {
            "id": "ex-0-n3",
            "type": "listening",
            "prompt": "Escucha y selecciona la palabra:",
            "japaneseVoiceText": "ねこ",
            "options": [
              {
                "id": "n-neko-opt",
                "text": "ねこ (neko - gato)",
                "isCorrect": true
              },
              {
                "id": "n-inu-opt",
                "text": "いぬ (inu - perro)"
              },
              {
                "id": "n-nani-opt",
                "text": "なに (nani - qué)"
              }
            ],
            "correctAnswerId": "n-neko-opt",
            "explanation": "Escuchaste 「ねこ」 (gato en japonés)."
          },
          {
            "id": "ex-0-n4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"nombre\":",
            "japaneseVoiceText": "なまえ",
            "wordBank": [
              "え",
              "ま",
              "な",
              "ね",
              "み"
            ],
            "correctSentence": [
              "な",
              "ま",
              "え"
            ],
            "explanation": "な + ま + え = なまえ (nombre de persona)."
          }
        ]
      },
      {
        "id": "l0-node-6",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Ha (は・ひ・ふ・へ・ほ)",
        "japaneseTitle": "は行のひらがな",
        "description": "Sonidos con H y el sonido soplado 「ふ」 (fu)",
        "icon": "Sparkles",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-h1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se pronuncia 「ふ」 en japonés?",
            "promptSub": "ふ",
            "japaneseVoiceText": "ふ",
            "options": [
              {
                "id": "h-fu",
                "text": "fu (soplando suavemente entre los labios)",
                "isCorrect": true
              },
              {
                "id": "h-hu",
                "text": "hu gutural fuerte"
              },
              {
                "id": "h-pu",
                "text": "pu"
              }
            ],
            "correctAnswerId": "h-fu",
            "explanation": "「ふ」 se pronuncia como una \"f/h\" muy suave sin morder el labio inferior."
          },
          {
            "id": "ex-0-h2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Ha:",
            "pairs": [
              {
                "id": "hp1",
                "left": "は",
                "right": "ha"
              },
              {
                "id": "hp2",
                "left": "ひ",
                "right": "hi"
              },
              {
                "id": "hp3",
                "left": "ふ",
                "right": "fu"
              },
              {
                "id": "hp4",
                "left": "ほ",
                "right": "ho"
              }
            ],
            "explanation": "Fila Ha: ha, hi, fu, he, ho."
          },
          {
            "id": "ex-0-h3",
            "type": "listening",
            "prompt": "Escucha con atención:",
            "japaneseVoiceText": "はな",
            "options": [
              {
                "id": "h-hana",
                "text": "はな (hana - flor / nariz)",
                "isCorrect": true
              },
              {
                "id": "h-hune",
                "text": "ふね (fune - barco)"
              },
              {
                "id": "h-heya",
                "text": "へや (heya - habitación)"
              }
            ],
            "correctAnswerId": "h-hana",
            "explanation": "Escuchaste 「はな」 (hana)."
          },
          {
            "id": "ex-0-h4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"barco\":",
            "japaneseVoiceText": "ふね",
            "wordBank": [
              "ね",
              "ふ",
              "ほ",
              "へ"
            ],
            "correctSentence": [
              "ふ",
              "ね"
            ],
            "explanation": "「ふ」 + 「ね」 = ふね (barco)."
          }
        ]
      },
      {
        "id": "l0-node-7",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Ma (ま・み・む・め・も)",
        "japaneseTitle": "ま行のひらがな",
        "description": "Sonidos bilabiales con M",
        "icon": "Coffee",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-m1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se lee 「みず」 (agua)?",
            "promptSub": "みず",
            "japaneseVoiceText": "みず",
            "options": [
              {
                "id": "m-mizu",
                "text": "mizu (agua)",
                "isCorrect": true
              },
              {
                "id": "m-machi",
                "text": "machi (ciudad)"
              },
              {
                "id": "m-mori",
                "text": "mori (bosque)"
              }
            ],
            "correctAnswerId": "m-mizu",
            "explanation": "「み」 + 「ず」 = みず (mizu, agua)."
          },
          {
            "id": "ex-0-m2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Ma:",
            "pairs": [
              {
                "id": "mp1",
                "left": "ま",
                "right": "ma"
              },
              {
                "id": "mp2",
                "left": "み",
                "right": "mi"
              },
              {
                "id": "mp3",
                "left": "む",
                "right": "mu"
              },
              {
                "id": "mp4",
                "left": "め",
                "right": "me"
              }
            ],
            "explanation": "Fila Ma: ma, mi, mu, me, mo."
          },
          {
            "id": "ex-0-m3",
            "type": "listening",
            "prompt": "Escucha el audio y selecciona el caracter:",
            "japaneseVoiceText": "も",
            "options": [
              {
                "id": "m-mo",
                "text": "も (mo)",
                "isCorrect": true
              },
              {
                "id": "m-ma",
                "text": "ま (ma)"
              },
              {
                "id": "m-me",
                "text": "め (me)"
              }
            ],
            "correctAnswerId": "m-mo",
            "explanation": "Escuchaste 「も」 (mo, que también es la partícula \"también\")."
          },
          {
            "id": "ex-0-m4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"ciudad / pueblo\":",
            "japaneseVoiceText": "まち",
            "wordBank": [
              "ち",
              "ま",
              "み",
              "て"
            ],
            "correctSentence": [
              "ま",
              "ち"
            ],
            "explanation": "「ま」 + 「ち」 = まち (machi, pueblo / ciudad)."
          }
        ]
      },
      {
        "id": "l0-node-8",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Ya (や・ゆ・よ)",
        "japaneseTitle": "や行のひらがな",
        "description": "Las 3 semivocales con Y (ya, yu, yo)",
        "icon": "Sparkles",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-y1",
            "type": "multiple-choice",
            "prompt": "¿Cuántos caracteres tiene la fila Ya en el silabario moderno?",
            "promptSub": "や・ゆ・よ",
            "options": [
              {
                "id": "y-3",
                "text": "Solo 3 caracteres (ya, yu, yo)",
                "isCorrect": true
              },
              {
                "id": "y-5",
                "text": "5 caracteres"
              },
              {
                "id": "y-4",
                "text": "4 caracteres"
              }
            ],
            "correctAnswerId": "y-3",
            "explanation": "Los sonidos \"yi\" y \"ye\" se fusionaron con \"i\" y \"e\", dejando solo や, ゆ, よ."
          },
          {
            "id": "ex-0-y2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Ya:",
            "pairs": [
              {
                "id": "yp1",
                "left": "や",
                "right": "ya"
              },
              {
                "id": "yp2",
                "left": "ゆ",
                "right": "yu"
              },
              {
                "id": "yp3",
                "left": "よ",
                "right": "yo"
              },
              {
                "id": "yp4",
                "left": "やま",
                "right": "montaña"
              }
            ],
            "explanation": "Ya (や), Yu (ゆ), Yo (よ)."
          },
          {
            "id": "ex-0-y3",
            "type": "listening",
            "prompt": "Escucha y selecciona la palabra:",
            "japaneseVoiceText": "ゆき",
            "options": [
              {
                "id": "y-yuki",
                "text": "ゆき (yuki - nieve)",
                "isCorrect": true
              },
              {
                "id": "y-yama",
                "text": "やま (yama - montaña)"
              },
              {
                "id": "y-yoru",
                "text": "よる (yoru - noche)"
              }
            ],
            "correctAnswerId": "y-yuki",
            "explanation": "Escuchaste 「ゆき」 (nieve en japonés)."
          },
          {
            "id": "ex-0-y4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"montaña\":",
            "japaneseVoiceText": "やま",
            "wordBank": [
              "ま",
              "や",
              "ゆ",
              "わ"
            ],
            "correctSentence": [
              "や",
              "ま"
            ],
            "explanation": "「や」 + 「ま」 = やま (montaña, como el Monte Fuji)."
          }
        ]
      },
      {
        "id": "l0-node-9",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Ra (ら・り・る・れ・ろ)",
        "japaneseTitle": "ら行のひらがな",
        "description": "La R suave japonesa (entre \"r\" y \"l\")",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-r1",
            "type": "multiple-choice",
            "prompt": "¿Cómo suena la R en japonés?",
            "promptSub": "ら・り・る・れ・ろ",
            "japaneseVoiceText": "ら り る れ ろ",
            "options": [
              {
                "id": "r-soft",
                "text": "Suave, como la \"r\" en \"caro\" (un toque de lengua)",
                "isCorrect": true
              },
              {
                "id": "r-hard",
                "text": "Fuerte como la \"rr\" de \"perro\""
              },
              {
                "id": "r-eng",
                "text": "Como la \"r\" inglesa"
              }
            ],
            "correctAnswerId": "r-soft",
            "explanation": "En japonés la R es una vibrante simple alveolar suave."
          },
          {
            "id": "ex-0-r2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Ra:",
            "pairs": [
              {
                "id": "rp1",
                "left": "ら",
                "right": "ra"
              },
              {
                "id": "rp2",
                "left": "り",
                "right": "ri"
              },
              {
                "id": "rp3",
                "left": "る",
                "right": "ru"
              },
              {
                "id": "rp4",
                "left": "れ",
                "right": "re"
              }
            ],
            "explanation": "Fila Ra: ra, ri, ru, re, ro."
          },
          {
            "id": "ex-0-r3",
            "type": "listening",
            "prompt": "Escucha el audio y selecciona la palabra:",
            "japaneseVoiceText": "くるま",
            "options": [
              {
                "id": "r-kuruma",
                "text": "くるま (kuruma - auto / coche)",
                "isCorrect": true
              },
              {
                "id": "r-kasa",
                "text": "かさ (kasa - paraguas)"
              },
              {
                "id": "r-sakura",
                "text": "さくら (sakura - cerezo)"
              }
            ],
            "correctAnswerId": "r-kuruma",
            "explanation": "Escuchaste 「くるま」 (kuruma, auto/vehículo)."
          },
          {
            "id": "ex-0-r4",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"manzana\":",
            "japaneseVoiceText": "りんご",
            "wordBank": [
              "ご",
              "ん",
              "り",
              "る",
              "れ"
            ],
            "correctSentence": [
              "り",
              "ん",
              "ご"
            ],
            "explanation": "り + ん + ご = りんご (manzana)."
          }
        ]
      },
      {
        "id": "l0-node-10",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Fila Wa, Wo, N (わ・を・ん)",
        "japaneseTitle": "わ行 と 「ん」",
        "description": "Kanas especiales y la única consonante solitaria",
        "icon": "Award",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-w1",
            "type": "multiple-choice",
            "prompt": "¿Cuál es el único sonido en japonés que es una consonante sola?",
            "promptSub": "ん",
            "japaneseVoiceText": "ん",
            "options": [
              {
                "id": "w-n",
                "text": "「ん」 (n nasal)",
                "isCorrect": true
              },
              {
                "id": "w-wa",
                "text": "「わ」 (wa)"
              },
              {
                "id": "w-wo",
                "text": "「を」 (wo)"
              }
            ],
            "correctAnswerId": "w-n",
            "explanation": "「ん」 (n) es el único caracter japonés que no lleva vocal añadida."
          },
          {
            "id": "ex-0-w2",
            "type": "multiple-choice",
            "prompt": "¿Para qué se utiliza casi exclusivamente el caracter 「を」?",
            "promptSub": "を (wo / o)",
            "japaneseVoiceText": "を",
            "options": [
              {
                "id": "w-part",
                "text": "Como partícula gramatical de objeto directo",
                "isCorrect": true
              },
              {
                "id": "w-noun",
                "text": "Para escribir nombres comunes"
              },
              {
                "id": "w-verb",
                "text": "Como terminación de verbos"
              }
            ],
            "correctAnswerId": "w-part",
            "explanation": "Genki enseña: 「を」 se pronuncia \"o\" y se usa únicamente como partícula gramatical."
          },
          {
            "id": "ex-0-w3",
            "type": "word-order",
            "prompt": "Traduce al japonés la palabra \"Japón\":",
            "japaneseVoiceText": "にほん",
            "wordBank": [
              "ん",
              "ほ",
              "に",
              "は",
              "こ"
            ],
            "correctSentence": [
              "に",
              "ほ",
              "ん"
            ],
            "explanation": "に + ほ + ん = にほん (Nihon, Japón)."
          },
          {
            "id": "ex-0-w4",
            "type": "listening",
            "prompt": "Escucha el audio:",
            "japaneseVoiceText": "わたし",
            "options": [
              {
                "id": "w-watashi",
                "text": "わたし (watashi - yo)",
                "isCorrect": true
              },
              {
                "id": "w-tomodachi",
                "text": "ともだち (amigo)"
              },
              {
                "id": "w-sensei",
                "text": "せんせい (profesor)"
              }
            ],
            "correctAnswerId": "w-watashi",
            "explanation": "Escuchaste 「わたし」 (watashi, la palabra estándar para \"yo\")."
          }
        ]
      },
      {
        "id": "l0-node-11",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Dakuten (が・ざ・だ・ば)",
        "japaneseTitle": "濁点（だくてん）",
        "description": "Las dos comitas (゛) que transforman K, S, T, H en G, Z, D, B",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-dak1",
            "type": "multiple-choice",
            "prompt": "Al poner tenten (゛) a la fila Ka (か), ¿en qué sonido se convierte?",
            "promptSub": "か ➔ が",
            "japaneseVoiceText": "が",
            "options": [
              {
                "id": "d-ga",
                "text": "Fila Ga (ga, gi, gu, ge, go)",
                "isCorrect": true
              },
              {
                "id": "d-ba",
                "text": "Fila Ba"
              },
              {
                "id": "d-da",
                "text": "Fila Da"
              }
            ],
            "correctAnswerId": "d-ga",
            "explanation": "Ka + ゛ = Ga, Sa + ゛ = Za/Ji, Ta + ゛ = Da/Ji/Zu, Ha + ゛ = Ba."
          },
          {
            "id": "ex-0-dak2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres Dakuten con su sonido:",
            "pairs": [
              {
                "id": "dp1",
                "left": "が",
                "right": "ga"
              },
              {
                "id": "dp2",
                "left": "じ",
                "right": "ji"
              },
              {
                "id": "dp3",
                "left": "で",
                "right": "de"
              },
              {
                "id": "dp4",
                "left": "ば",
                "right": "ba"
              }
            ],
            "explanation": "El Dakuten hace vibrar las cuerdas vocales (sonido sonoro)."
          },
          {
            "id": "ex-0-dak3",
            "type": "listening",
            "prompt": "Escucha y selecciona la palabra:",
            "japaneseVoiceText": "げんき",
            "options": [
              {
                "id": "d-genki",
                "text": "げんき (genki - bien / con energía)",
                "isCorrect": true
              },
              {
                "id": "d-ginko",
                "text": "ぎんこう (banco)"
              },
              {
                "id": "d-gakusei",
                "text": "がくせい (estudiante)"
              }
            ],
            "correctAnswerId": "d-genki",
            "explanation": "¡Escuchaste 「げんき」, la palabra que le da nombre a tu libro de texto Genki!"
          }
        ]
      },
      {
        "id": "l0-node-12",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Handakuten (ぱ・ぴ・ぷ・ぺ・ぽ)",
        "japaneseTitle": "半濁点（はんだくてん）",
        "description": "El circulito (゜) que convierte Ha en Pa",
        "icon": "Flame",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-han1",
            "type": "multiple-choice",
            "prompt": "¿A qué fila se le puede agregar el circulito Handakuten (゜)?",
            "promptSub": "ぱ・ぴ・ぷ・ぺ・ぽ",
            "options": [
              {
                "id": "han-ha",
                "text": "Solo a la fila Ha (は ➔ ぱ)",
                "isCorrect": true
              },
              {
                "id": "han-all",
                "text": "A todas las filas"
              },
              {
                "id": "han-ka",
                "text": "A la fila Ka"
              }
            ],
            "correctAnswerId": "han-ha",
            "explanation": "El Handakuten solo se usa con la fila Ha para producir el sonido \"p\": pa, pi, pu, pe, po."
          },
          {
            "id": "ex-0-han2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres de la fila Pa:",
            "pairs": [
              {
                "id": "pp1",
                "left": "ぱ",
                "right": "pa"
              },
              {
                "id": "pp2",
                "left": "ぴ",
                "right": "pi"
              },
              {
                "id": "pp3",
                "left": "ぷ",
                "right": "pu"
              },
              {
                "id": "pp4",
                "left": "ぽ",
                "right": "po"
              }
            ],
            "explanation": "Pa, pi, pu, pe, po."
          },
          {
            "id": "ex-0-han3",
            "type": "listening",
            "prompt": "Escucha el audio:",
            "japaneseVoiceText": "しんぱい",
            "options": [
              {
                "id": "p-shinpai",
                "text": "しんぱい (shinpai - preocupación)",
                "isCorrect": true
              },
              {
                "id": "p-kanpai",
                "text": "かんぱい (kanpai - salud/brindis)"
              }
            ],
            "correctAnswerId": "p-shinpai",
            "explanation": "Escuchaste 「しんぱい」 (shinpai)."
          }
        ]
      },
      {
        "id": "l0-node-13",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Sonidos Contraídos (Yoon)",
        "japaneseTitle": "拗音（ようおん）きゃ・しゅ・ちょ",
        "description": "Combina caracteres con un pequeño ゃ, ゅ, ょ",
        "icon": "Sparkles",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-yoon1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se lee 「きょう」 (hoy)?",
            "promptSub": "きょう",
            "japaneseVoiceText": "きょう",
            "options": [
              {
                "id": "yo-kyou",
                "text": "kyou (una sola sílaba combinada)",
                "isCorrect": true
              },
              {
                "id": "yo-kiyou",
                "text": "ki-yo-u (tres sílabas separadas)"
              }
            ],
            "correctAnswerId": "yo-kyou",
            "explanation": "Cuando や, ゆ, よ se escriben en tamaño pequeño (ゃ, ゅ, ょ), forman una sola sílaba combinada."
          },
          {
            "id": "ex-0-yoon2",
            "type": "match-pairs",
            "prompt": "Empareja las combinaciones Yoon:",
            "pairs": [
              {
                "id": "yp1",
                "left": "きゃ",
                "right": "kya"
              },
              {
                "id": "yp2",
                "left": "しゃ",
                "right": "sha"
              },
              {
                "id": "yp3",
                "left": "ちゃ",
                "right": "cha"
              },
              {
                "id": "yp4",
                "left": "りょ",
                "right": "ryo"
              }
            ],
            "explanation": "Muy comunes en palabras como お茶 (おちゃ / té) y 旅行 (りょこう / viaje)."
          },
          {
            "id": "ex-0-yoon3",
            "type": "listening",
            "prompt": "Escucha y selecciona la palabra:",
            "japaneseVoiceText": "おちゃ",
            "options": [
              {
                "id": "y-ocha",
                "text": "おちゃ (ocha - té japonés)",
                "isCorrect": true
              },
              {
                "id": "y-oto",
                "text": "おと (sonido)"
              },
              {
                "id": "y-oni",
                "text": "おに (ogro)"
              }
            ],
            "correctAnswerId": "y-ocha",
            "explanation": "Escuchaste 「おちゃ」 (té verde japonés)."
          }
        ]
      },
      {
        "id": "l0-node-14",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Katakana: Filas A y Ka",
        "japaneseTitle": "カタカナ：ア行・カ行",
        "description": "Caracteres rectos para palabras extranjeras: ア〜オ y カ〜コ",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-kt1",
            "type": "multiple-choice",
            "prompt": "¿Qué palabra extranjera es 「アメリカ」?",
            "promptSub": "アメリカ",
            "japaneseVoiceText": "アメリカ",
            "options": [
              {
                "id": "kt-usa",
                "text": "América / Estados Unidos",
                "isCorrect": true
              },
              {
                "id": "kt-af",
                "text": "África"
              },
              {
                "id": "kt-eu",
                "text": "Europa"
              }
            ],
            "correctAnswerId": "kt-usa",
            "explanation": "アメリカ (Amerika) se escribe en Katakana por ser nombre de país extranjero."
          },
          {
            "id": "ex-0-kt2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres Katakana de las filas A y Ka:",
            "pairs": [
              {
                "id": "ktp1",
                "left": "ア",
                "right": "a"
              },
              {
                "id": "ktp2",
                "left": "イ",
                "right": "i"
              },
              {
                "id": "ktp3",
                "left": "カ",
                "right": "ka"
              },
              {
                "id": "ktp4",
                "left": "コ",
                "right": "ko"
              }
            ],
            "explanation": "A, I, U, E, O y Ka, Ki, Ku, Ke, Ko en Katakana."
          },
          {
            "id": "ex-0-kt3",
            "type": "listening",
            "prompt": "Escucha la palabra en Katakana:",
            "japaneseVoiceText": "カメラ",
            "options": [
              {
                "id": "kt-cam",
                "text": "カメラ (kamera - cámara)",
                "isCorrect": true
              },
              {
                "id": "kt-col",
                "text": "コーラ (koola - cola)"
              }
            ],
            "correctAnswerId": "kt-cam",
            "explanation": "Escuchaste 「カメラ」 (cámara)."
          }
        ]
      },
      {
        "id": "l0-node-15",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Katakana: Filas Sa y Ta",
        "japaneseTitle": "カタカナ：サ行・タ行",
        "description": "Aprende サ〜ソ y タ〜ト con palabras modernas",
        "icon": "ShoppingBag",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-kst1",
            "type": "multiple-choice",
            "prompt": "¿Qué palabra es 「テスト」?",
            "promptSub": "テスト",
            "japaneseVoiceText": "テスト",
            "options": [
              {
                "id": "kst-test",
                "text": "Test / Examen",
                "isCorrect": true
              },
              {
                "id": "kst-toast",
                "text": "Tostada"
              },
              {
                "id": "kst-text",
                "text": "Texto"
              }
            ],
            "correctAnswerId": "kst-test",
            "explanation": "テスト (tesuto) viene del inglés \"test\"."
          },
          {
            "id": "ex-0-kst2",
            "type": "match-pairs",
            "prompt": "Empareja Katakana con su lectura:",
            "pairs": [
              {
                "id": "stp1",
                "left": "サ",
                "right": "sa"
              },
              {
                "id": "stp2",
                "left": "シ",
                "right": "shi"
              },
              {
                "id": "stp3",
                "left": "タ",
                "right": "ta"
              },
              {
                "id": "stp4",
                "left": "ト",
                "right": "to"
              }
            ],
            "explanation": "Ten cuidado con 「シ」 (shi) y 「ツ」 (tsu); la dirección de los trazos es clave."
          },
          {
            "id": "ex-0-kst3",
            "type": "word-order",
            "prompt": "Traduce al Katakana la palabra \"taxi\":",
            "japaneseVoiceText": "タクシー",
            "wordBank": [
              "ー",
              "シ",
              "ク",
              "タ",
              "ス",
              "チ"
            ],
            "correctSentence": [
              "タ",
              "ク",
              "シ",
              "ー"
            ],
            "explanation": "タ + ク + シ + ー = タクシー (taxi con sonido largo)."
          }
        ]
      },
      {
        "id": "l0-node-16",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Katakana: Filas Na, Ha, Ma",
        "japaneseTitle": "カタカナ：ナ行・ハ行・マ行",
        "description": "Katakana para ナ〜ノ, ハ〜ホ, マ〜モ",
        "icon": "Coffee",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-nhm1",
            "type": "multiple-choice",
            "prompt": "¿Qué alimento cotidiano es 「パン」?",
            "promptSub": "パン",
            "japaneseVoiceText": "パン",
            "options": [
              {
                "id": "p-bread",
                "text": "Pan (del portugués \"pão\")",
                "isCorrect": true
              },
              {
                "id": "p-pen",
                "text": "Bolígrafo"
              },
              {
                "id": "p-pin",
                "text": "Pin"
              }
            ],
            "correctAnswerId": "p-bread",
            "explanation": "パン (pan) llegó a Japón con los comerciantes portugueses en el siglo XVI."
          },
          {
            "id": "ex-0-nhm2",
            "type": "match-pairs",
            "prompt": "Empareja los caracteres Katakana:",
            "pairs": [
              {
                "id": "nhmp1",
                "left": "ナ",
                "right": "na"
              },
              {
                "id": "nhmp2",
                "left": "ハ",
                "right": "ha"
              },
              {
                "id": "nhmp3",
                "left": "マ",
                "right": "ma"
              },
              {
                "id": "nhmp4",
                "left": "ホ",
                "right": "ho"
              }
            ],
            "explanation": "Na, Ha, Ma, Ho en Katakana."
          },
          {
            "id": "ex-0-nhm3",
            "type": "listening",
            "prompt": "Escucha el audio:",
            "japaneseVoiceText": "ホテル",
            "options": [
              {
                "id": "nhm-hotel",
                "text": "ホテル (hoteru - hotel)",
                "isCorrect": true
              },
              {
                "id": "nhm-terebi",
                "text": "テレビ (televisión)"
              }
            ],
            "correctAnswerId": "nhm-hotel",
            "explanation": "Escuchaste 「ホテル」 (hotel)."
          }
        ]
      },
      {
        "id": "l0-node-17",
        "unitId": 0,
        "lessonNumber": 0,
        "title": "Katakana Final y Sonido Largo (ー)",
        "japaneseTitle": "カタカナの完成 と 長音符（ー）",
        "description": "Domina ヤ〜ヨ, ラ〜ロ, ワ, ン y la barra de vocal larga",
        "icon": "Award",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-0-kfin1",
            "type": "multiple-choice",
            "prompt": "¿Para qué sirve la línea horizontal 「ー」 en Katakana?",
            "promptSub": "コーヒー / ケーキ",
            "japaneseVoiceText": "コーヒー",
            "options": [
              {
                "id": "kf-long",
                "text": "Alarga la vocal precedente (chouon)",
                "isCorrect": true
              },
              {
                "id": "kf-stop",
                "text": "Es un punto y seguido"
              },
              {
                "id": "kf-sil",
                "text": "Indica silencio"
              }
            ],
            "correctAnswerId": "kf-long",
            "explanation": "La barra horizontal (ー) alarga el sonido de la vocal en Katakana (ej. ko-o-hi-i)."
          },
          {
            "id": "ex-0-kfin2",
            "type": "word-order",
            "prompt": "Traduce al Katakana la palabra \"café\":",
            "japaneseVoiceText": "コーヒー",
            "wordBank": [
              "ー",
              "ヒ",
              "ー",
              "コ",
              "カ",
              "ホ"
            ],
            "correctSentence": [
              "コ",
              "ー",
              "ヒ",
              "ー"
            ],
            "explanation": "コ + ー + ヒ + ー = コーヒー (café)."
          },
          {
            "id": "ex-0-kfin3",
            "type": "match-pairs",
            "prompt": "Empareja los Katakanas finales:",
            "pairs": [
              {
                "id": "kfp1",
                "left": "ヤ",
                "right": "ya"
              },
              {
                "id": "kfp2",
                "left": "ラ",
                "right": "ra"
              },
              {
                "id": "kfp3",
                "left": "ワ",
                "right": "wa"
              },
              {
                "id": "kfp4",
                "left": "ン",
                "right": "n"
              }
            ],
            "explanation": "¡Felicidades! Con estos caracteres completas el silabario Katakana."
          },
          {
            "id": "ex-0-kfin4",
            "type": "listening",
            "prompt": "Escucha la palabra final de la Unidad 0:",
            "japaneseVoiceText": "トイレ",
            "options": [
              {
                "id": "kf-toire",
                "text": "トイレ (toire - baño/servicio)",
                "isCorrect": true
              },
              {
                "id": "kf-rajio",
                "text": "ラジオ (radio)"
              }
            ],
            "correctAnswerId": "kf-toire",
            "explanation": "Escuchaste 「トイレ」 (toire, baño en japonés)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 1: GENKI LECCIÓN 1: NUEVOS AMIGOS (新しい友達)
  // ==========================================
  {
    "id": 1,
    "genkiBook": "Genki I",
    "title": "Genki Lección 1: Nuevos Amigos (新しい友達)",
    "subtitle": "Currículo Completo: Textbook + Workbook Exercises",
    "description": "Aprende presentaciones, nacionalidades, carreras, números 0-100, la hora, edades, teléfonos y partículas は, か, の.",
    "themeColor": "#1cb0f6",
    "nodes": [
      {
        "id": "l1-node-0",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Lectura Inicial: Nuevos Amigos (会話)",
        "japaneseTitle": "第1課 会話：あたらしいともだち",
        "description": "Lee y escucha el diálogo de apertura de la Lección 1: Mary conoce a Takeshi y al profesor en el campus",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Mary pregunta la hora en el campus",
            "dialogueContext": "Mary Hart, estudiante de intercambio en Japón, busca su salón y conversa con Takeshi Kimura.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "すみません。いま なんじですか。",
                "romaji": "Sumimasen. Ima nanji desu ka.",
                "spanish": "Disculpe. ¿Qué hora es ahora?",
                "audioText": "すみません。いまなんじですか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "じゅうにじはんです。",
                "romaji": "Juuniji han desu.",
                "spanish": "Son las doce y media (12:30).",
                "audioText": "じゅうにじはんです"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ありがとうございます。",
                "romaji": "Arigatou gozaimasu.",
                "spanish": "Muchas gracias.",
                "audioText": "ありがとうございます"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "いいえ。",
                "romaji": "Iie.",
                "spanish": "De nada / No hay de qué.",
                "audioText": "いいえ"
              }
            ],
            "prompt": "Según el Diálogo I que acabas de leer y escuchar, ¿qué hora le dice Takeshi a Mary?",
            "options": [
              {
                "id": "d1-1-a",
                "text": "Son las 12:30",
                "isCorrect": true
              },
              {
                "id": "d1-1-b",
                "text": "Son las 2:30"
              },
              {
                "id": "d1-1-c",
                "text": "Son las 10:00"
              }
            ],
            "correctAnswerId": "d1-1-a",
            "explanation": "Takeshi responde: 「じゅうにじはんです」 (Son las 12 y media)."
          },
          {
            "id": "ex-1-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Presentándose por primera vez",
            "dialogueContext": "Takeshi conversa con Mary sobre su universidad y año escolar.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "あのう、りゅうがくせいですか。",
                "romaji": "Anou, ryuugakusei desu ka.",
                "spanish": "Disculpe... ¿eres estudiante de intercambio?",
                "audioText": "あのう、りゅうがくせいですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ええ。アリゾナだいがくの がくせいです。",
                "romaji": "Ee. Arizona daigaku no gakusei desu.",
                "spanish": "Sí. Soy estudiante de la Universidad de Arizona.",
                "audioText": "ええ。アリゾナだいがくのがくせいです"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "そうですか。せんこうは なんですか。",
                "romaji": "Sou desu ka. Senkou wa nan desu ka.",
                "spanish": "¿Ah, sí? ¿Cuál es tu especialidad?",
                "audioText": "そうですか。せんこうはなんですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "にほんごです。いま にねんせいです。",
                "romaji": "Nihongo desu. Ima ninensei desu.",
                "spanish": "Es idioma japonés. Ahora estoy en segundo año.",
                "audioText": "にほんごです。いまにねんせいです"
              }
            ],
            "prompt": "Según el Diálogo II, ¿cuál es la especialidad (せんこう) y el año universitario de Mary?",
            "options": [
              {
                "id": "d1-2-a",
                "text": "Estudia japonés y está en segundo año",
                "isCorrect": true
              },
              {
                "id": "d1-2-b",
                "text": "Estudia historia y está en primer año"
              },
              {
                "id": "d1-2-c",
                "text": "Estudia negocios y está en cuarto año"
              }
            ],
            "correctAnswerId": "d1-2-a",
            "explanation": "Mary dice: 「にほんごです。いま にねんせいです。」"
          },
          {
            "id": "ex-1-0-3",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo III: ¡Mucho gusto!",
            "dialogueContext": "Mary y Takeshi dicen sus nombres formales de presentación.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "はじめまして。メアリー・ハートです。どうぞよろしく。",
                "romaji": "Hajimemashite. Mearii Haato desu. Douzo yoroshiku.",
                "spanish": "Mucho gusto. Soy Mary Hart. Encantada de conocerte.",
                "audioText": "はじめまして。メアリーハートです。どうぞよろしく"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "きむらたけしです。こちらこそ、よろしくおねがいします。",
                "romaji": "Kimura Takeshi desu. Kochira koso, yoroshiku onegaishimasu.",
                "spanish": "Soy Takeshi Kimura. El gusto es mío, mucho gusto.",
                "audioText": "きむらたけしです。こちらこそ、よろしくおねがいします"
              }
            ],
            "prompt": "En los nombres japoneses como 「きむら たけし」 (木村 たけし), ¿qué parte va primero?",
            "options": [
              {
                "id": "d1-3-a",
                "text": "Primero va el apellido (Kimura) y después el nombre de pila (Takeshi)",
                "isCorrect": true
              },
              {
                "id": "d1-3-b",
                "text": "Primero el nombre de pila y luego el apellido"
              },
              {
                "id": "d1-3-c",
                "text": "Los japoneses no usan apellidos al presentarse"
              }
            ],
            "correctAnswerId": "d1-3-a",
            "explanation": "En Japón el orden tradicional siempre es Apellido (きむら) + Nombre (たけし)."
          }
        ]
      },
      {
        "id": "l1-node-1",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Saludos y Presentaciones",
        "japaneseTitle": "あいさつ と 自己紹介",
        "description": "Frases esenciales de presentación de Genki L1",
        "icon": "MessageCircle",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-1-1",
            "type": "multiple-choice",
            "prompt": "¿Qué frase se dice AL INICIO de presentarse por primera vez?",
            "promptSub": "Mucho gusto (encantado)",
            "japaneseVoiceText": "はじめまして",
            "options": [
              {
                "id": "h1",
                "text": "はじめまして (Hajimemashite)",
                "isCorrect": true
              },
              {
                "id": "h2",
                "text": "さようなら (Sayounara)"
              },
              {
                "id": "h3",
                "text": "じゃあ、また (Jaa, mata)"
              },
              {
                "id": "h4",
                "text": "ただいま (Tadaima)"
              }
            ],
            "correctAnswerId": "h1",
            "explanation": "「はじめまして」 proviene de はじめる (comenzar) y se usa la primera vez que conoces a alguien."
          },
          {
            "id": "ex-1-1-2",
            "type": "word-order",
            "prompt": "Forma la frase: \"Mucho gusto / Cuento con su favor\":",
            "japaneseVoiceText": "よろしくおねがいします",
            "wordBank": [
              "おねがいします",
              "よろしく",
              "こんにちは",
              "ありがとう"
            ],
            "correctSentence": [
              "よろしく",
              "おねがいします"
            ],
            "explanation": "「よろしくお願いします」 es la frase indispensable para cerrar cualquier presentación."
          },
          {
            "id": "ex-1-1-3",
            "type": "match-pairs",
            "prompt": "Empareja los saludos cotidianos de Genki:",
            "pairs": [
              {
                "id": "p1",
                "left": "おはようございます",
                "right": "Buenos días"
              },
              {
                "id": "p2",
                "left": "こんにちは",
                "right": "Buenas tardes / Hola"
              },
              {
                "id": "p3",
                "left": "こんばんは",
                "right": "Buenas noches (saludo)"
              },
              {
                "id": "p4",
                "left": "おやすみなさい",
                "right": "Buenas noches (despedida)"
              }
            ],
            "explanation": "Genki distingue claramente los saludos diurnos de la despedida nocturna."
          },
          {
            "id": "ex-1-1-4",
            "type": "listening",
            "prompt": "Escucha el audio y selecciona la traducción adecuada:",
            "japaneseVoiceText": "すみません",
            "options": [
              {
                "id": "sumi-1",
                "text": "Disculpe / Perdón",
                "isCorrect": true
              },
              {
                "id": "sumi-2",
                "text": "De nada"
              },
              {
                "id": "sumi-3",
                "text": "Hasta luego"
              }
            ],
            "correctAnswerId": "sumi-1",
            "explanation": "「すみません」 sirve tanto para disculparse como para llamar la atención del mesero o profesor."
          }
        ]
      },
      {
        "id": "l1-node-2",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Números 0 al 100",
        "japaneseTitle": "すうじ（０〜１００）",
        "description": "Conteo y operaciones matemáticas del libro de ejercicios",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-2-1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se lee el número 45 en japonés?",
            "promptSub": "45",
            "japaneseVoiceText": "よんじゅうご",
            "options": [
              {
                "id": "n45-1",
                "text": "よんじゅうご (yonjuugo)",
                "isCorrect": true
              },
              {
                "id": "n45-2",
                "text": "しじゅうご (shijuugo)"
              },
              {
                "id": "n45-3",
                "text": "ごじゅうよん (gojuuyon)"
              }
            ],
            "correctAnswerId": "n45-1",
            "explanation": "En las decenas, 40 se dice siempre よんじゅう (yonjuu)."
          },
          {
            "id": "ex-1-2-2",
            "type": "match-pairs",
            "prompt": "Empareja las decenas:",
            "pairs": [
              {
                "id": "dp1",
                "left": "二十 (20)",
                "right": "にじゅう"
              },
              {
                "id": "dp2",
                "left": "三十 (30)",
                "right": "さんじゅう"
              },
              {
                "id": "dp3",
                "left": "七十 (70)",
                "right": "ななじゅう"
              },
              {
                "id": "dp4",
                "left": "百 (100)",
                "right": "ひゃく"
              }
            ],
            "explanation": "100 se dice 「ひゃく」 (hyaku), no \"ichi-hyaku\"."
          },
          {
            "id": "ex-1-2-3",
            "type": "word-order",
            "prompt": "Del Workbook: Resuelve la suma 8 + 4 en japonés:",
            "japaneseVoiceText": "じゅうに",
            "wordBank": [
              "に",
              "じゅう",
              "さん",
              "よん"
            ],
            "correctSentence": [
              "じゅう",
              "に"
            ],
            "explanation": "8 + 4 = 12. En japonés 12 se dice: じゅう (10) + に (2) = じゅうに."
          },
          {
            "id": "ex-1-2-4",
            "type": "listening",
            "prompt": "Escucha el número dictado en japonés:",
            "japaneseVoiceText": "きゅうじゅうきゅう",
            "options": [
              {
                "id": "n-99",
                "text": "99",
                "isCorrect": true
              },
              {
                "id": "n-89",
                "text": "89"
              },
              {
                "id": "n-19",
                "text": "19"
              }
            ],
            "correctAnswerId": "n-99",
            "explanation": "きゅうじゅう (90) + きゅう (9) = 99."
          }
        ]
      },
      {
        "id": "l1-node-3",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "La Hora: 〜時 y 〜時半",
        "japaneseTitle": "じかん（何時・何時半）",
        "description": "Aprende a decir la hora y las 3 horas irregulares clave",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-3-1",
            "type": "multiple-choice",
            "prompt": "¡Cuidado con las 3 horas irregulares de Genki! ¿Cómo se dice \"las 4 en punto\"?",
            "promptSub": "4:00",
            "japaneseVoiceText": "よじ",
            "options": [
              {
                "id": "t4-yo",
                "text": "よじ (yoji - irregular)",
                "isCorrect": true
              },
              {
                "id": "t4-yon",
                "text": "よんじ (yonji)"
              },
              {
                "id": "t4-shi",
                "text": "しじ (shiji)"
              }
            ],
            "correctAnswerId": "t4-yo",
            "explanation": "Regla de oro de Genki: 4:00 es よじ (yoji), 7:00 es しちじ (shichiji) y 9:00 es くじ (kuji)."
          },
          {
            "id": "ex-1-3-2",
            "type": "match-pairs",
            "prompt": "Empareja las horas con su lectura:",
            "pairs": [
              {
                "id": "tp1",
                "left": "1:00",
                "right": "いちじ (ichiji)"
              },
              {
                "id": "tp2",
                "left": "7:00",
                "right": "しちじ (shichiji)"
              },
              {
                "id": "tp3",
                "left": "9:00",
                "right": "くじ (kuji)"
              },
              {
                "id": "tp4",
                "left": "2:30",
                "right": "にじはん (niji han)"
              }
            ],
            "explanation": "半 (はん / han) significa \"y media\"."
          },
          {
            "id": "ex-1-3-3",
            "type": "word-order",
            "prompt": "Traduce al japonés la pregunta: \"¿Qué hora es ahora?\":",
            "japaneseVoiceText": "いまなんじですか",
            "wordBank": [
              "か",
              "なんじ",
              "いま",
              "です",
              "は",
              "どこ"
            ],
            "correctSentence": [
              "いま",
              "なんじ",
              "です",
              "か"
            ],
            "explanation": "いま (ahora) + なんじ (qué hora) + ですか (es?)."
          },
          {
            "id": "ex-1-3-4",
            "type": "listening",
            "prompt": "Escucha la hora que dice el audio:",
            "japaneseVoiceText": "さんじはんです",
            "options": [
              {
                "id": "t-330",
                "text": "3:30 (3 y media)",
                "isCorrect": true
              },
              {
                "id": "t-230",
                "text": "2:30"
              },
              {
                "id": "t-300",
                "text": "3:00"
              }
            ],
            "correctAnswerId": "t-330",
            "explanation": "さんじ (3:00) + はん (y media) + です = 3:30."
          }
        ]
      },
      {
        "id": "l1-node-4",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Estructura X は Y です",
        "japaneseTitle": "文法１：X は Y です",
        "description": "Afirmaciones de identidad y nacionalidades con 〜人",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-4-1",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Mary es estadounidense\":",
            "japaneseVoiceText": "メアリーさんはアメリカじんです",
            "wordBank": [
              "アメリカじん",
              "です",
              "メアリーさん",
              "は",
              "にほんじん",
              "が"
            ],
            "correctSentence": [
              "メアリーさん",
              "は",
              "アメリカじん",
              "です"
            ],
            "explanation": "Sujeto + は + País-人 (じん) + です。"
          },
          {
            "id": "ex-1-4-2",
            "type": "match-pairs",
            "prompt": "Empareja los países con su gentilicio en japonés:",
            "pairs": [
              {
                "id": "np1",
                "left": "日本 (Japón)",
                "right": "にほんじん"
              },
              {
                "id": "np2",
                "left": "アメリカ (EE.UU.)",
                "right": "アメリカじん"
              },
              {
                "id": "np3",
                "left": "イギリス (Reino Unido)",
                "right": "イギリスじん"
              },
              {
                "id": "np4",
                "left": "中国 (China)",
                "right": "ちゅうごくじん"
              }
            ],
            "explanation": "En japonés, basta con sufijar 「人」(jin) al nombre de cualquier país."
          },
          {
            "id": "ex-1-4-3",
            "type": "multiple-choice",
            "prompt": "En la frase 「わたしはメアリーです」, ¿cuál es la función de 「は」?",
            "promptSub": "Partícula tema",
            "options": [
              {
                "id": "wa-top",
                "text": "Marca el tema sobre el que se va a hablar (\"En cuanto a mí...\")",
                "isCorrect": true
              },
              {
                "id": "wa-verb",
                "text": "Es el verbo de la oración"
              },
              {
                "id": "wa-adj",
                "text": "Indica el objeto directo"
              }
            ],
            "correctAnswerId": "wa-top",
            "explanation": "は es la partícula marcadora de tema por excelencia en el idioma japonés."
          },
          {
            "id": "ex-1-4-4",
            "type": "listening",
            "prompt": "Escucha la oración:",
            "japaneseVoiceText": "たけしさんはにほんじんです",
            "options": [
              {
                "id": "l-tak-jap",
                "text": "Takeshi es japonés.",
                "isCorrect": true
              },
              {
                "id": "l-tak-stu",
                "text": "Takeshi es estudiante."
              }
            ],
            "correctAnswerId": "l-tak-jap",
            "explanation": "Takeshi-san wa nihonjin desu (Takeshi es japonés)."
          }
        ]
      },
      {
        "id": "l1-node-5",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Preguntas con la Partícula か",
        "japaneseTitle": "文法２：質問の「か」",
        "description": "Preguntas directas y respuestas con はい / いいえ",
        "icon": "HelpCircle",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-5-1",
            "type": "multiple-choice",
            "prompt": "¿Cómo conviertes una oración afirmativa en pregunta en japonés?",
            "promptSub": "学生です ➔ ¿Es estudiante?",
            "options": [
              {
                "id": "q-ka",
                "text": "Agregando la partícula 「か」 al final",
                "isCorrect": true
              },
              {
                "id": "q-inv",
                "text": "Invirtiendo el sujeto y el verbo como en inglés"
              },
              {
                "id": "q-not",
                "text": "Solo cambiando la entonación sin ninguna palabra"
              }
            ],
            "correctAnswerId": "q-ka",
            "explanation": "No se altera el orden de las palabras; simplemente se añade 「か」 al final."
          },
          {
            "id": "ex-1-5-2",
            "type": "word-order",
            "prompt": "Traduce al japonés la pregunta: \"¿Takeshi es estudiante?\":",
            "japaneseVoiceText": "たけしさんはがくせいですか",
            "wordBank": [
              "か",
              "がくせい",
              "は",
              "です",
              "たけしさん",
              "せんせい",
              "の"
            ],
            "correctSentence": [
              "たけしさん",
              "は",
              "がくせい",
              "です",
              "か"
            ],
            "explanation": "Sujeto + は + Atributo + です + か."
          },
          {
            "id": "ex-1-5-3",
            "type": "match-pairs",
            "prompt": "Empareja la pregunta con su respuesta afirmativa o negativa:",
            "pairs": [
              {
                "id": "qp1",
                "left": "学生ですか。",
                "right": "はい、学生です。"
              },
              {
                "id": "qp2",
                "left": "アメリカ人ですか。",
                "right": "いいえ、日本人です。"
              },
              {
                "id": "qp3",
                "left": "専攻は何ですか。",
                "right": "日本語です。"
              },
              {
                "id": "qp4",
                "left": "先生ですか。",
                "right": "はい、先生です。"
              }
            ],
            "explanation": "はい (sí) y いいえ (no) son las respuestas estándar aprendidas en el libro."
          },
          {
            "id": "ex-1-5-4",
            "type": "listening",
            "prompt": "Escucha la pregunta:",
            "japaneseVoiceText": "りゅうがくせいですか",
            "options": [
              {
                "id": "ans-ryu",
                "text": "¿Eres estudiante de intercambio?",
                "isCorrect": true
              },
              {
                "id": "ans-daig",
                "text": "¿Eres universitario?"
              },
              {
                "id": "ans-sensei",
                "text": "¿Eres profesor?"
              }
            ],
            "correctAnswerId": "ans-ryu",
            "explanation": "留学生 (りゅうがくせい / ryuugakusei) = estudiante internacional."
          }
        ]
      },
      {
        "id": "l1-node-6",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Ocupaciones y Roles Sociales",
        "japaneseTitle": "職業（しょくぎょう）",
        "description": "Vocabulario de oficios y roles de los personajes de Genki",
        "icon": "Users",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-6-1",
            "type": "match-pairs",
            "prompt": "Empareja las ocupaciones de Genki Lección 1:",
            "pairs": [
              {
                "id": "op1",
                "left": "先生 (せんせい)",
                "right": "Profesor / Maestro"
              },
              {
                "id": "op2",
                "left": "学生 (がくせい)",
                "right": "Estudiante"
              },
              {
                "id": "op3",
                "left": "会社員 (かいしゃいん)",
                "right": "Empleado de empresa"
              },
              {
                "id": "op4",
                "left": "主婦 (しゅふ)",
                "right": "Ama de casa"
              }
            ],
            "explanation": "Estas son las 4 ocupaciones principales presentadas en el vocabulario de Genki L1."
          },
          {
            "id": "ex-1-6-2",
            "type": "multiple-choice",
            "prompt": "¿Cómo se le dice respetuosamente al profesor Yamashita?",
            "promptSub": "Mr. Yamashita / Profesor Yamashita",
            "options": [
              {
                "id": "yam-1",
                "text": "山下先生 (Yamashita-sensei)",
                "isCorrect": true
              },
              {
                "id": "yam-2",
                "text": "山下さん (Yamashita-san)"
              },
              {
                "id": "yam-3",
                "text": "山下くん (Yamashita-kun)"
              }
            ],
            "correctAnswerId": "yam-1",
            "explanation": "En las escuelas japonesas y en Genki, a los maestros se les llama con el título 「先生」."
          },
          {
            "id": "ex-1-6-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Mi padre es empleado de oficina\":",
            "japaneseVoiceText": "ちちはかいしゃいんです",
            "wordBank": [
              "かいしゃいん",
              "は",
              "ちち",
              "です",
              "はは",
              "せんせい"
            ],
            "correctSentence": [
              "ちち",
              "は",
              "かいしゃいん",
              "です"
            ],
            "explanation": "ちち (mi padre) + は + 会社員 (かいしゃいん) + です."
          }
        ]
      },
      {
        "id": "l1-node-7",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Carreras Universitarias y Cursos",
        "japaneseTitle": "専攻（せんこう）と 学年",
        "description": "Expresar qué estudias y tu año de estudio (1.º a 4.º año)",
        "icon": "BookOpen",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-7-1",
            "type": "match-pairs",
            "prompt": "Empareja las especialidades (専攻 / senkou):",
            "pairs": [
              {
                "id": "mp1",
                "left": "けいざい (keizai)",
                "right": "Economía"
              },
              {
                "id": "mp2",
                "left": "れきし (rekishi)",
                "right": "Historia"
              },
              {
                "id": "mp3",
                "left": "ぶんがく (bungaku)",
                "right": "Literatura"
              },
              {
                "id": "mp4",
                "left": "ビジネス (bijinesu)",
                "right": "Negocios"
              }
            ],
            "explanation": "Genki L1 enseña las carreras universitarias más comunes en el campus."
          },
          {
            "id": "ex-1-7-2",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Mi especialidad es el idioma japonés\":",
            "japaneseVoiceText": "せんこうはにほんごです",
            "wordBank": [
              "にほんご",
              "は",
              "せんこう",
              "です",
              "えいご",
              "の"
            ],
            "correctSentence": [
              "せんこう",
              "は",
              "にほんご",
              "です"
            ],
            "explanation": "専攻 (せんこう / senkou) = especialidad + は + 日本語 + です."
          },
          {
            "id": "ex-1-7-3",
            "type": "multiple-choice",
            "prompt": "¿Cómo se dice \"Estudiante de segundo año\" (sofomoro en la universidad)?",
            "promptSub": "2.º año",
            "japaneseVoiceText": "にねんせい",
            "options": [
              {
                "id": "yr-2",
                "text": "二年生 (にねんせい / ninensei)",
                "isCorrect": true
              },
              {
                "id": "yr-1",
                "text": "一年生 (いちねんせい)"
              },
              {
                "id": "yr-3",
                "text": "三年生 (さんねんせい)"
              }
            ],
            "correctAnswerId": "yr-2",
            "explanation": "Número + 年生 (ねんせい / nensei) indica el grado escolar."
          },
          {
            "id": "ex-1-7-4",
            "type": "listening",
            "prompt": "Escucha la carrera que menciona el audio:",
            "japaneseVoiceText": "コンピューター",
            "options": [
              {
                "id": "l-comp",
                "text": "Computación / Informática",
                "isCorrect": true
              },
              {
                "id": "l-econ",
                "text": "Economía"
              }
            ],
            "correctAnswerId": "l-comp",
            "explanation": "コンピューター (konpyuutaa) se escribe en Katakana."
          }
        ]
      },
      {
        "id": "l1-node-8",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Edad: 〜才 (Años de edad)",
        "japaneseTitle": "年齢（〜さい・はたち）",
        "description": "Preguntar la edad y las excepciones irregulares: 1, 8 y 20 años",
        "icon": "Flame",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-8-1",
            "type": "multiple-choice",
            "prompt": "¡Excepción cultural súper importante! ¿Cómo se dice \"20 años de edad\" (mayoría de edad tradicional)?",
            "promptSub": "20 años",
            "japaneseVoiceText": "はたち",
            "options": [
              {
                "id": "age-hatachi",
                "text": "はたち (hatachi - lectura especial tradicional)",
                "isCorrect": true
              },
              {
                "id": "age-nijusai",
                "text": "にじゅっさい (nijussai)"
              },
              {
                "id": "age-nisai",
                "text": "にさい (nisai)"
              }
            ],
            "correctAnswerId": "age-hatachi",
            "explanation": "Cumplir 20 años en Japón se celebra en el Seijin no Hi y se dice tradicionalmente 「はたち」."
          },
          {
            "id": "ex-1-8-2",
            "type": "match-pairs",
            "prompt": "Empareja las edades con sus lecturas irregulares:",
            "pairs": [
              {
                "id": "ap1",
                "left": "1 año",
                "right": "いっさい (issai)"
              },
              {
                "id": "ap2",
                "left": "8 años",
                "right": "はっさい (hassai)"
              },
              {
                "id": "ap3",
                "left": "10 años",
                "right": "じゅっさい (jussai)"
              },
              {
                "id": "ap4",
                "left": "19 años",
                "right": "じゅうきゅうさい"
              }
            ],
            "explanation": "1, 8 y 10 tienen asimilación consonántica con tsu pequeño (っ)."
          },
          {
            "id": "ex-1-8-3",
            "type": "word-order",
            "prompt": "Traduce al japonés la pregunta: \"¿Cuántos años tienes?\":",
            "japaneseVoiceText": "なんさいですか",
            "wordBank": [
              "か",
              "なんさい",
              "です",
              "なんじ",
              "は"
            ],
            "correctSentence": [
              "なんさい",
              "です",
              "か"
            ],
            "explanation": "何歳 (なんさい / nansai) + です + か."
          }
        ]
      },
      {
        "id": "l1-node-9",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "La Partícula の (Conexión)",
        "japaneseTitle": "文法３：名詞１ の 名詞２",
        "description": "Posesión, pertenencia y afiliación universitaria",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-9-1",
            "type": "word-order",
            "prompt": "Traduce al japonés la frase: \"Estudiante de la Universidad Sakura\":",
            "japaneseVoiceText": "さくらだいがくのがくせい",
            "wordBank": [
              "がくせい",
              "の",
              "さくらだいがく",
              "は",
              "せんせい"
            ],
            "correctSentence": [
              "さくらだいがく",
              "の",
              "がくせい"
            ],
            "explanation": "En japonés la institución/organización va primero, seguida de の y el rol de la persona."
          },
          {
            "id": "ex-1-9-2",
            "type": "multiple-choice",
            "prompt": "¿Cómo se dice \"Profesor de idioma japonés\"?",
            "promptSub": "Profesor de japonés",
            "japaneseVoiceText": "にほんごのせんせい",
            "options": [
              {
                "id": "no-nihon",
                "text": "日本語の先生 (nihongo no sensei)",
                "isCorrect": true
              },
              {
                "id": "no-inv",
                "text": "先生の日本語 (sensei no nihongo)"
              },
              {
                "id": "no-wa",
                "text": "日本語は先生 (nihongo wa sensei)"
              }
            ],
            "correctAnswerId": "no-nihon",
            "explanation": "El sustantivo 1 (日本語) califica y describe al sustantivo 2 (先生)."
          },
          {
            "id": "ex-1-9-3",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce al japonés \"El amigo de Takeshi\":",
            "japaneseVoiceText": "たけしさんのともだち",
            "wordBank": [
              "ともだち",
              "の",
              "たけしさん",
              "は",
              "わたし"
            ],
            "correctSentence": [
              "たけしさん",
              "の",
              "ともだち"
            ],
            "explanation": "Poseedor (Takeshi-san) + の + posesión o vínculo (ともだち)."
          },
          {
            "id": "ex-1-9-4",
            "type": "listening",
            "prompt": "Escucha la frase con partícula の:",
            "japaneseVoiceText": "わたしのでんわばんごう",
            "options": [
              {
                "id": "no-ph",
                "text": "Mi número de teléfono",
                "isCorrect": true
              },
              {
                "id": "no-name",
                "text": "Mi nombre"
              },
              {
                "id": "no-univ",
                "text": "Mi universidad"
              }
            ],
            "correctAnswerId": "no-ph",
            "explanation": "わたしの (mi) + でんわばんごう (número de teléfono)."
          }
        ]
      },
      {
        "id": "l1-node-10",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Teléfonos y Preguntar Contacto",
        "japaneseTitle": "電話番号（でんわばんごう）",
        "description": "Cómo leer números de teléfono con の como guión",
        "icon": "PhoneCall",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-10-1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se lee el guion en un número telefónico en japonés (ej. 283-9541)?",
            "promptSub": "283 - 9541",
            "options": [
              {
                "id": "ph-no",
                "text": "Se pronuncia con la partícula 「の」(no)",
                "isCorrect": true
              },
              {
                "id": "ph-hai",
                "text": "Se dice \"hyphen\""
              },
              {
                "id": "ph-sil",
                "text": "Se deja una pausa larga en silencio"
              }
            ],
            "correctAnswerId": "ph-no",
            "explanation": "En números telefónicos, los guiones separadores se dicen en voz alta como 「の」."
          },
          {
            "id": "ex-1-10-2",
            "type": "word-order",
            "prompt": "Traduce al japonés la pregunta: \"¿Cuál es tu número de teléfono?\":",
            "japaneseVoiceText": "でんわばんごうはなんばんですか",
            "wordBank": [
              "か",
              "なんばん",
              "でんわばんごう",
              "です",
              "は",
              "なんさい",
              "ここ"
            ],
            "correctSentence": [
              "でんわばんごう",
              "は",
              "なんばん",
              "です",
              "か"
            ],
            "explanation": "でんわばんごう + は + なんばん + です + か."
          },
          {
            "id": "ex-1-10-3",
            "type": "listening",
            "prompt": "Escucha el número telefónico que se dicta:",
            "japaneseVoiceText": "ゼロきゅうゼロのいちにさん",
            "options": [
              {
                "id": "p-090",
                "text": "090 - 123",
                "isCorrect": true
              },
              {
                "id": "p-080",
                "text": "080 - 123"
              },
              {
                "id": "p-090-4",
                "text": "090 - 456"
              }
            ],
            "correctAnswerId": "p-090",
            "explanation": "ゼロ (0) + きゅう (9) + ゼロ (0) + の (-) + いち (1) + に (2) + さん (3)."
          }
        ]
      },
      {
        "id": "l1-node-tb-1",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Libro de Teoría: Práctica de Entrevista (練習)",
        "japaneseTitle": "教科書・練習：自己紹介とインタビュー",
        "description": "Ejercicios del libro de texto: preguntar nacionalidad, carrera, edad y teléfono a compañeros",
        "icon": "Users",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-tb-1",
            "type": "multiple-choice",
            "prompt": "Del Libro de Teoría (pág. 48): Si te preguntan 「おなまえは？」, ¿qué te están preguntando de forma cortés?",
            "options": [
              {
                "id": "tb1-1",
                "text": "¿Cuál es su nombre?",
                "isCorrect": true
              },
              {
                "id": "tb1-2",
                "text": "¿De qué país es usted?"
              },
              {
                "id": "tb1-3",
                "text": "¿Cuántos años tiene?"
              }
            ],
            "correctAnswerId": "tb1-1",
            "explanation": "おなまえは？ es una forma cortés y común de preguntar \"¿Cuál es tu/su nombre?\"."
          },
          {
            "id": "ex-1-tb-2",
            "type": "word-order",
            "prompt": "Ejercicio del Libro: Responde \"El Sr. Yamashita es profesor de la Universidad de Sakura\":",
            "japaneseVoiceText": "やましたさんはさくらだいがくのせんせいです",
            "wordBank": [
              "やましたさんは",
              "さくらだいがくの",
              "せんせいです",
              "がくせい",
              "は"
            ],
            "correctSentence": [
              "やましたさんは",
              "さくらだいがくの",
              "せんせいです"
            ],
            "explanation": "Yamashita-san wa Sakura daigaku no sensei desu."
          },
          {
            "id": "ex-1-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja a los personajes de Genki I con sus perfiles oficiales del libro:",
            "pairs": [
              {
                "id": "gp1",
                "left": "メアリー (Mary)",
                "right": "2.º año, Univ. de Arizona (19 años)"
              },
              {
                "id": "gp2",
                "left": "たけし (Takeshi)",
                "right": "4.º año, Historia (22 años)"
              },
              {
                "id": "gp3",
                "left": "ソラ (Sora)",
                "right": "3.er año, Univ. de Seúl (20 años)"
              },
              {
                "id": "gp4",
                "left": "ロバート (Robert)",
                "right": "4.º año, Negocios en Londres (22 años)"
              }
            ],
            "explanation": "Tabla oficial de personajes de la sección de práctica de Genki I Lección 1."
          }
        ]
      },
      {
        "id": "l1-node-11",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Workbook: Práctica Auditiva",
        "japaneseTitle": "ワークブック：リスニング問題",
        "description": "Ejercicios de escucha idénticos a los del cuaderno oficial",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-11-1",
            "type": "listening",
            "prompt": "Ejercicio de escucha del Workbook: ¿Quién está hablando?",
            "japaneseVoiceText": "はじめまして。メアリー・ハートです。アリゾナだいがくのがくせいです。にねんせいです。",
            "options": [
              {
                "id": "wb-m1",
                "text": "Mary Hart, estudiante de 2.º año de la Univ. de Arizona",
                "isCorrect": true
              },
              {
                "id": "wb-m2",
                "text": "Takeshi, estudiante de 3.º año de Sakura"
              },
              {
                "id": "wb-m3",
                "text": "Profesor Yamashita"
              }
            ],
            "correctAnswerId": "wb-m1",
            "explanation": "Mary se presenta: estudiante de Arizona de segundo año (にねんせい)."
          },
          {
            "id": "ex-1-11-2",
            "type": "listening",
            "prompt": "Escucha la conversación entre Takeshi y Mary:",
            "japaneseVoiceText": "メアリーさん、せんこうはなんですか。ー にほんごです。",
            "options": [
              {
                "id": "wb-ans-nih",
                "text": "Takeshi pregunta la carrera de Mary y ella responde \"japonés\".",
                "isCorrect": true
              },
              {
                "id": "wb-ans-eng",
                "text": "Pregunta la hora de la clase."
              },
              {
                "id": "wb-ans-ph",
                "text": "Pregunta su número de teléfono."
              }
            ],
            "correctAnswerId": "wb-ans-nih",
            "explanation": "せんこうはなんですか (¿Cuál es tu especialidad?) -> 日本語です (Japonés)."
          },
          {
            "id": "ex-1-11-3",
            "type": "listening",
            "prompt": "Escucha la edad que dice Takeshi:",
            "japaneseVoiceText": "にじゅういっさいです",
            "options": [
              {
                "id": "wb-21",
                "text": "21 años",
                "isCorrect": true
              },
              {
                "id": "wb-20",
                "text": "20 años"
              },
              {
                "id": "wb-22",
                "text": "22 años"
              }
            ],
            "correctAnswerId": "wb-21",
            "explanation": "20 (にじゅう) + 1 año con asimilación (いっさい) = 21 años."
          }
        ]
      },
      {
        "id": "l1-node-12",
        "unitId": 1,
        "lessonNumber": 1,
        "title": "Workbook: Integración y Diálogo",
        "japaneseTitle": "ワークブック：総合問題 と 自己紹介",
        "description": "Prueba final de la Lección 1 combinando todo lo aprendido",
        "icon": "Award",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-1-12-1",
            "type": "word-order",
            "prompt": "Arma la auto-presentación: \"Soy Takeshi. Estudiante de la Universidad Sakura\":",
            "japaneseVoiceText": "たけしですさくらだいがくのがくせいです",
            "wordBank": [
              "がくせい",
              "たけし",
              "の",
              "さくらだいがく",
              "です",
              "です",
              "メアリー",
              "は"
            ],
            "correctSentence": [
              "たけし",
              "です",
              "さくらだいがく",
              "の",
              "がくせい",
              "です"
            ],
            "explanation": "Takeshi desu. Sakura daigaku no gakusei desu."
          },
          {
            "id": "ex-1-12-2",
            "type": "multiple-choice",
            "prompt": "Encuentra el error del Workbook: ¿Cuál de estas 3 oraciones tiene un error de partícula?",
            "options": [
              {
                "id": "err-1",
                "text": "メアリーさん は アメリカ人 の です。",
                "isCorrect": true
              },
              {
                "id": "err-2",
                "text": "メアリーさんはアメリカ人です。"
              },
              {
                "id": "err-3",
                "text": "メアリーさんは学生ですか。"
              }
            ],
            "correctAnswerId": "err-1",
            "explanation": "No se pone 「の」 antes de です sin un sustantivo posterior."
          },
          {
            "id": "ex-1-12-3",
            "type": "match-pairs",
            "prompt": "Empareja las preguntas clave de la Lección 1 con su significado:",
            "pairs": [
              {
                "id": "rev1",
                "left": "おなまえは？",
                "right": "¿Cuál es su nombre?"
              },
              {
                "id": "rev2",
                "left": "ごせんこうは？",
                "right": "¿Cuál es su especialidad?"
              },
              {
                "id": "rev3",
                "left": "おいくつですか？",
                "right": "¿Qué edad tiene?"
              },
              {
                "id": "rev4",
                "left": "いまなんじですか？",
                "right": "¿Qué hora es ahora?"
              }
            ],
            "explanation": "¡Has dominado todas las preguntas comunicativas de la Lección 1 de Genki!"
          },
          {
            "id": "ex-1-12-4",
            "type": "listening",
            "prompt": "Escucha el mensaje final de despedida de la Lección 1:",
            "japaneseVoiceText": "どうぞよろしくおねがいします",
            "options": [
              {
                "id": "fin-yoro",
                "text": "Encantado de conocerle, cuento con su favor.",
                "isCorrect": true
              },
              {
                "id": "fin-ohay",
                "text": "Buenos días por la mañana."
              }
            ],
            "correctAnswerId": "fin-yoro",
            "explanation": "¡Felicitaciones! Has completado el currículo íntegro de la Lección 1 de Genki."
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 2: GENKI LECCIÓN 2: DE COMPRAS
  // ==========================================
  {
    "id": 2,
    "genkiBook": "Genki I",
    "title": "Genki Lección 2: De Compras",
    "subtitle": "Demostrativos y Precios",
    "description": "Aprende これ, それ, あれ, どれ, números grandes y comprar en tiendas.",
    "themeColor": "#ff9600",
    "nodes": [
      {
        "id": "l2-node-0",
        "unitId": 2,
        "lessonNumber": 2,
        "title": "Lectura Inicial: De Compras (会話)",
        "japaneseTitle": "第2課 会話：かいもの",
        "description": "Lee y escucha el diálogo inicial de la Lección 2: Mary va al mercado de pulgas y a un restaurante japonés",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-2-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En el mercado de pulgas (フリーマーケット)",
            "dialogueContext": "Mary pregunta los precios de varios relojes en un puesto.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "すみません。これは いくらですか。",
                "romaji": "Sumimasen. Kore wa ikura desu ka.",
                "spanish": "Disculpe. ¿Cuánto cuesta esto?",
                "audioText": "すみません。これはいくらですか"
              },
              {
                "speaker": "みせのひと (Vendedor)",
                "japanese": "それは さんぜんえんです。",
                "romaji": "Sore wa sanzen-en desu.",
                "spanish": "Eso cuesta 3,000 yenes.",
                "audioText": "それはさんぜんえんです"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "たかいですね。じゃあ、あの とけいは いくらですか。",
                "romaji": "Takai desu ne. Jaa, ano tokei wa ikura desu ka.",
                "spanish": "Es caro, ¿verdad? Entonces, ¿cuánto cuesta aquel reloj?",
                "audioText": "たかいですね。じゃあ、あのとけいはいくらですか"
              },
              {
                "speaker": "みせのひと (Vendedor)",
                "japanese": "あれも さんぜんえんです。",
                "romaji": "Are mo sanzen-en desu.",
                "spanish": "Aquel también cuesta 3,000 yenes.",
                "audioText": "あれもさんぜんえんです"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "そうですか。じゃあ、あの とけいを ください。",
                "romaji": "Sou desu ka. Jaa, ano tokei o kudasai.",
                "spanish": "Ya veo. Entonces, deme aquel reloj, por favor.",
                "audioText": "そうですか。じゃあ、あのとけいをください"
              }
            ],
            "prompt": "Según el Diálogo I, ¿cuánto cuesta el reloj que finalmente compra Mary?",
            "options": [
              {
                "id": "d2-1-a",
                "text": "3,000 yenes",
                "isCorrect": true
              },
              {
                "id": "d2-1-b",
                "text": "300 yenes"
              },
              {
                "id": "d2-1-c",
                "text": "3,500 yenes"
              }
            ],
            "correctAnswerId": "d2-1-a",
            "explanation": "El vendedor dice: 「あれも さんぜんえんです」 (Aquel también cuesta 3,000 yenes)."
          },
          {
            "id": "ex-2-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: En el restaurante tradicional",
            "dialogueContext": "Mary mira el menú en japonés y le pregunta al mesero.",
            "dialogueLines": [
              {
                "speaker": "ウェーター (Mesero)",
                "japanese": "いらっしゃいませ。メニューを どうぞ。",
                "romaji": "Irasshaimase. Menyuu o douzo.",
                "spanish": "¡Bienvenido! Aquí tiene el menú, por favor.",
                "audioText": "いらっしゃいませ。メニューをどうぞ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "すみません。これは なんですか。",
                "romaji": "Sumimasen. Kore wa nan desu ka.",
                "spanish": "Disculpe. ¿Qué es esto?",
                "audioText": "すみません。これはなんですか"
              },
              {
                "speaker": "ウェーター (Mesero)",
                "japanese": "とんかつです。ぶたにくですよ。",
                "romaji": "Tonkatsu desu. Butaniku desu yo.",
                "spanish": "Es tonkatsu (chuleta empanizada). Es carne de cerdo.",
                "audioText": "とんかつです。ぶたにくですよ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "じゃあ、これを おねがいします。",
                "romaji": "Jaa, kore o onegaishimasu.",
                "spanish": "Entonces, me da esto, por favor.",
                "audioText": "じゃあ、これをおねがいします"
              }
            ],
            "prompt": "¿Qué platillo pide Mary en el restaurante y de qué carne está hecho?",
            "options": [
              {
                "id": "d2-2-a",
                "text": "Tonkatsu, que es carne de cerdo",
                "isCorrect": true
              },
              {
                "id": "d2-2-b",
                "text": "Yakitori, que es carne de pollo"
              },
              {
                "id": "d2-2-c",
                "text": "Sushi de pescado"
              }
            ],
            "correctAnswerId": "d2-2-a",
            "explanation": "El mesero le explica: 「とんかつです。ぶたにくですよ。」"
          },
          {
            "id": "ex-2-0-3",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo III: Preguntando por el baño y el cajero",
            "dialogueContext": "Mary necesita saber dónde está el sanitario del restaurante.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "あのう、すみません。トイレは どこですか。",
                "romaji": "Anou, sumimasen. Toire wa doko desu ka.",
                "spanish": "Disculpe... ¿dónde está el baño?",
                "audioText": "あのう、すみません。トイレはどこですか"
              },
              {
                "speaker": "ウェーター (Mesero)",
                "japanese": "あそこです。",
                "romaji": "Asoko desu.",
                "spanish": "Está allá.",
                "audioText": "あそこです"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ありがとうございます。",
                "romaji": "Arigatou gozaimasu.",
                "spanish": "Muchas gracias.",
                "audioText": "ありがとうございます"
              }
            ],
            "prompt": "¿Qué palabra demostrativa de lugar usa el mesero para señalar un sitio alejado de ambos?",
            "options": [
              {
                "id": "d2-3-a",
                "text": "あそこ (allá)",
                "isCorrect": true
              },
              {
                "id": "d2-3-b",
                "text": "ここ (aquí)"
              },
              {
                "id": "d2-3-c",
                "text": "そこ (ahí)"
              }
            ],
            "correctAnswerId": "d2-3-a",
            "explanation": "あそこ señala un lugar distante tanto del hablante como del oyente."
          }
        ]
      },
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
                "text": "Periódico",
                "isCorrect": true
              },
              {
                "id": "l-hon",
                "text": "Libro"
              },
              {
                "id": "l-zash",
                "text": "Revista"
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
                "text": "肉じゃありません",
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
                "text": "El paraguas azul",
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
  // UNIDAD 3: GENKI LECCIÓN 3: HACIENDO PLANES
  // ==========================================
  {
    "id": 3,
    "genkiBook": "Genki I",
    "title": "Genki Lección 3: Haciendo Planes",
    "subtitle": "Verbos 〜ます y Rutinas",
    "description": "Conjugaciones de verbos en presente educado y partículas を, で, に, へ.",
    "themeColor": "#ce82ff",
    "nodes": [
      {
        "id": "l3-node-0",
        "unitId": 3,
        "lessonNumber": 3,
        "title": "Lectura Inicial: Haciendo Planes (会話)",
        "japaneseTitle": "第3課 会話：デートの約束",
        "description": "Lee y escucha el diálogo inicial de la Lección 3: Takeshi conversa con Mary sobre películas y la invita a salir el sábado",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-3-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Gustos y rutina de fin de semana",
            "dialogueContext": "Takeshi y Mary platican en la cafetería sobre lo que suelen hacer.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "メアリーさん、よく えいがを みますか。",
                "romaji": "Mearii-san, yoku eiga o mimasu ka.",
                "spanish": "Mary, ¿ves películas a menudo?",
                "audioText": "メアリーさん、よくえいがをみますか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "いいえ、あまり みません。でも、よく テレビを みます。",
                "romaji": "Iie, amari mimasen. Demo, yoku terebi o mimasu.",
                "spanish": "No, no veo muchas. Pero veo televisión a menudo.",
                "audioText": "いいえ、あまりみません。でも、よくテレビをみます"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "そうですか。どようび、なにを しますか。",
                "romaji": "Sou desu ka. Doyoubi, nani o shimasu ka.",
                "spanish": "Ya veo. ¿Qué harás el sábado?",
                "audioText": "そうですか。どようび、なにをしますか"
              }
            ],
            "prompt": "Según el Diálogo I, ¿qué hace Mary con frecuencia?",
            "options": [
              {
                "id": "d3-1-a",
                "text": "No ve muchas películas, pero ve televisión a menudo",
                "isCorrect": true
              },
              {
                "id": "d3-1-b",
                "text": "Va al cine todos los días"
              },
              {
                "id": "d3-1-c",
                "text": "Nunca ve televisión ni películas"
              }
            ],
            "correctAnswerId": "d3-1-a",
            "explanation": "Mary dice: 「いいえ、あまりみません。でも、よくテレビをみます。」"
          },
          {
            "id": "ex-3-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: La invitación a Kioto",
            "dialogueContext": "Takeshi invita a Mary a ver una película en Kioto este sábado.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "どようび、きょうとで えいがを みませんか。",
                "romaji": "Doyoubi, Kyouto de eiga o mimasen ka.",
                "spanish": "El sábado, ¿no te gustaría ver una película en Kioto?",
                "audioText": "どようび、きょうとでえいがをみませんか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "いいですね。なんじに あいますか。",
                "romaji": "Ii desu ne. Nanji ni aimasu ka.",
                "spanish": "¡Suena bien! ¿A qué hora nos vemos?",
                "audioText": "いいですね。なんじにあいますか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "じゅういちじはんで どうですか。",
                "romaji": "Juuichiji han de dou desu ka.",
                "spanish": "¿Qué te parece a las once y media (11:30)?",
                "audioText": "じゅういちじはんでどうですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "いいですよ。じゃあ、どようびに。",
                "romaji": "Ii desu yo. Jaa, doyoubi ni.",
                "spanish": "¡Está bien! Entonces, nos vemos el sábado.",
                "audioText": "いいですよ。じゃあ、どようびに"
              }
            ],
            "prompt": "¿Dónde y a qué hora quedaron de verse Takeshi y Mary el sábado?",
            "options": [
              {
                "id": "d3-2-a",
                "text": "En Kioto a las 11:30",
                "isCorrect": true
              },
              {
                "id": "d3-2-b",
                "text": "En Tokio a las 9:00"
              },
              {
                "id": "d3-2-c",
                "text": "En la universidad a las 12:30"
              }
            ],
            "correctAnswerId": "d3-2-a",
            "explanation": "Quedan de ver una película en Kioto a las 11:30 (じゅういちじはん)."
          }
        ]
      },
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
                "text": "Estudiar",
                "isCorrect": true
              },
              {
                "id": "l-kai",
                "text": "Comprar"
              },
              {
                "id": "l-han",
                "text": "Hablar"
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
                "left": "のみます",
                "right": "のみません"
              },
              {
                "id": "c-n2",
                "left": "みます",
                "right": "みません"
              },
              {
                "id": "c-n3",
                "left": "いきます",
                "right": "いきません"
              },
              {
                "id": "c-n4",
                "left": "します",
                "right": "しません"
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
                "text": "コーヒーをのみませんか。",
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
    "id": 4,
    "genkiBook": "Genki I",
    "title": "Genki Lección 4: La Primera Cita",
    "subtitle": "Pasado 〜ました y Existencia (あります/います)",
    "description": "Existencia de objetos y personas, palabras de posición y oraciones en pasado.",
    "themeColor": "#ff4b4b",
    "nodes": [
      {
        "id": "l4-node-0",
        "unitId": 4,
        "lessonNumber": 4,
        "title": "Lectura Inicial: La Primera Cita (会話)",
        "japaneseTitle": "第4課 会話：初めてのデート",
        "description": "Lee y escucha el diálogo inicial de la Lección 4: Mary busca a Takeshi en la estación y hablan de su fin de semana",
        "icon": "BookOpen",
        "color": "red",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-4-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Takeshi llega una hora tarde en Kioto",
            "dialogueContext": "Mary esperó una hora a Takeshi frente a la estación de Kioto.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "たけしさん、どこに いましたか。いちじかん まちましたよ。",
                "romaji": "Takeshi-san, doko ni imashita ka. Ichijikan machimashita yo.",
                "spanish": "Takeshi, ¿dónde estabas? ¡Esperé una hora!",
                "audioText": "たけしさん、どこにいましたか。いちじかんまちましたよ"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ごめんなさい！ きたぐちに いました。",
                "romaji": "Gomen nasai! Kitaguchi ni imashita.",
                "spanish": "¡Perdóname! Estaba en la salida norte.",
                "audioText": "ごめんなさい！きたぐちにいました"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "えっ、ほんとうですか。わたしは みなみぐちに いました。",
                "romaji": "E, hontou desu ka. Watashi wa minamiguchi ni imashita.",
                "spanish": "¿Eh, de verdad? Yo estaba en la salida sur.",
                "audioText": "えっ、ほんとうですか。わたしはみなみぐちにいました"
              }
            ],
            "prompt": "¿Por qué no se encontraban Takeshi y Mary en la estación?",
            "options": [
              {
                "id": "d4-1-a",
                "text": "Porque Takeshi estaba en la salida norte y Mary en la salida sur",
                "isCorrect": true
              },
              {
                "id": "d4-1-b",
                "text": "Porque Takeshi se quedó dormido en su casa"
              },
              {
                "id": "d4-1-c",
                "text": "Porque Mary fue otro día"
              }
            ],
            "correctAnswerId": "d4-1-a",
            "explanation": "Takeshi esperó en la salida norte (北口) y Mary en la salida sur (南口) durante 1 hora."
          },
          {
            "id": "ex-4-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Buscando un restaurante cerca de la estación",
            "dialogueContext": "Ya juntos, buscan dónde comer.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "あのう、駅の 近くに いい レストランが ありますよ。",
                "romaji": "Anou, eki no chikaku ni ii resutoran ga arimasu yo.",
                "spanish": "Oye, cerca de la estación hay un buen restaurante.",
                "audioText": "あのう、えきのちかくにいいレストランがありますよ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "どこですか。",
                "romaji": "Doko desu ka.",
                "spanish": "¿Dónde está?",
                "audioText": "どこですか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "デパートの となりです。いきましょう。",
                "romaji": "Depaato no tonari desu. Ikimashou.",
                "spanish": "Está al lado de la tienda departamental. ¡Vamos!",
                "audioText": "デパートのとなりです。いきましょう"
              }
            ],
            "prompt": "¿Dónde está ubicado el restaurante que recomienda Takeshi?",
            "options": [
              {
                "id": "d4-2-a",
                "text": "Cerca de la estación, al lado de la tienda departamental",
                "isCorrect": true
              },
              {
                "id": "d4-2-b",
                "text": "Dentro del hospital"
              },
              {
                "id": "d4-2-c",
                "text": "Detrás de la biblioteca"
              }
            ],
            "correctAnswerId": "d4-2-a",
            "explanation": "Está cerca de la estación (駅の近く) y al lado de la tienda departamental (デパートのとなり)."
          }
        ]
      },
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
                "text": "Cafetería tradicional",
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
                "left": "いぬ",
                "right": "います"
              },
              {
                "id": "ep2",
                "left": "ほん",
                "right": "あります"
              },
              {
                "id": "ep3",
                "left": "がくせい",
                "right": "います"
              },
              {
                "id": "ep4",
                "left": "つくえ",
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
                "text": "きのう 日本語を 勉強しました",
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
                "text": "あさごはんを たべませんでした",
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
                "text": "きのうは 日曜日でした",
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
    "id": 5,
    "genkiBook": "Genki I",
    "title": "Genki Lección 5: Viaje a Okinawa",
    "subtitle": "Adjetivos い y な, Gustos (好き/嫌い)",
    "description": "Describe personas, lugares y comidas en presente y pasado con adjetivos japoneses.",
    "themeColor": "#00cd9c",
    "nodes": [
      {
        "id": "l5-node-0",
        "unitId": 5,
        "lessonNumber": 5,
        "title": "Lectura Inicial: Viaje a Okinawa (会話)",
        "japaneseTitle": "第5課 会話：沖縄旅行",
        "description": "Lee y escucha el diálogo inicial de la Lección 5: Mary y Takeshi en la playa de Okinawa y hablando de su viaje",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-5-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En la playa de Okinawa",
            "dialogueContext": "Mary y Takeshi están en la playa, pero las olas son grandes hoy.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "あついですね。うみが とても きれいですね。およぎましょうか。",
                "romaji": "Atsui desu ne. Umi ga totemo kirei desu ne. Oyogimashou ka.",
                "spanish": "Hace calor, ¿verdad? El mar es muy hermoso. ¿Nadamos?",
                "audioText": "あついですね。うみがとてもきれいですね。およぎましょうか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "きょうは なみが たかいですよ。サーフィンは どうですか。",
                "romaji": "Kyou wa nami ga takai desu yo. Saafin wa dou desu ka.",
                "spanish": "Hoy las olas están altas. ¿Qué tal hacer surf?",
                "audioText": "きょうはなみがたかいですよ。サーフィンはどうですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "むずかしいですよ。わたしは サーフィンが すきじゃありません。",
                "romaji": "Muzukashii desu yo. Watashi wa saafin ga suki ja arimasen.",
                "spanish": "Es difícil. A mí no me gusta el surf.",
                "audioText": "むずかしいですよ。わたしはサーフィンがすきじゃありません"
              }
            ],
            "prompt": "¿Por qué Mary no quiere hacer surf en el Diálogo I?",
            "options": [
              {
                "id": "d5-1-a",
                "text": "Porque es difícil (むずかしい) y no le gusta el surf",
                "isCorrect": true
              },
              {
                "id": "d5-1-b",
                "text": "Porque hace mucho frío en Okinawa"
              },
              {
                "id": "d5-1-c",
                "text": "Porque olvidó su traje de baño"
              }
            ],
            "correctAnswerId": "d5-1-a",
            "explanation": "Mary dice: 「むずかしいですよ。わたしはサーフィンがすきじゃありません。」"
          },
          {
            "id": "ex-5-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: De regreso en la universidad",
            "dialogueContext": "Robert le pregunta a Mary cómo estuvo su viaje a Okinawa.",
            "dialogueLines": [
              {
                "speaker": "ロバート (Robert)",
                "japanese": "メアリーさん、おきなわの りょこうは どうでしたか。",
                "romaji": "Mearii-san, Okinawa no ryokou wa dou deshita ka.",
                "spanish": "Mary, ¿qué tal estuvo el viaje a Okinawa?",
                "audioText": "メアリーさん、おきなわのりょこうはどうでしたか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "とても たのしかったです。でも、ひこうきは たかかったです。",
                "romaji": "Totemo tanoshikatta desu. Demo, hikouki wa takakatta desu.",
                "spanish": "Fue muy divertido. Pero el avión estuvo caro.",
                "audioText": "とてもたのしかったです。でも、ひこうきはたかかったです"
              }
            ],
            "prompt": "Según el Diálogo II, ¿cómo estuvo el viaje y qué opinó Mary del avión?",
            "options": [
              {
                "id": "d5-2-a",
                "text": "Fue muy divertido (たのしかったです), pero el avión fue caro (たかかったです)",
                "isCorrect": true
              },
              {
                "id": "d5-2-b",
                "text": "Fue aburrido y el boleto fue barato"
              },
              {
                "id": "d5-2-c",
                "text": "Fue en barco porque no había aviones"
              }
            ],
            "correctAnswerId": "d5-2-a",
            "explanation": "Pasado de い-adjetivos: たのしい ➔ たのしかったです, たかい ➔ たかかったです."
          }
        ]
      },
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
                "text": "Fue muy divertido.",
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
                "text": "きのうのテストは むずかしかったです",
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
                "text": "あつくなかったです",
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
                "text": "いっしょに いきましょう！",
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
        "id": "l5-node-tb-1",
        "unitId": 5,
        "lessonNumber": 5,
        "title": "Libro de Teoría: Lectura de Postales (読み書き編)",
        "japaneseTitle": "教科書・読み書き：絵はがき（Postales de Viaje）",
        "description": "Ejercicios de lectura del libro: leer postales sobre vacaciones, clima y comida",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-5-tb-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de la postal de Genki L5: 「海はとてもきれいでした。天気もよかったです。」 ¿Cómo estuvo el clima?",
            "options": [
              {
                "id": "tb5-1",
                "text": "Estuvo bueno (よかったです = pasado de いい)",
                "isCorrect": true
              },
              {
                "id": "tb5-2",
                "text": "Estuvo lluvioso y frío"
              },
              {
                "id": "tb5-3",
                "text": "Estuvo nublado"
              }
            ],
            "correctAnswerId": "tb5-1",
            "explanation": "いい es irregular y su pasado es よかったです."
          },
          {
            "id": "ex-5-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Compré cinco estampillas de 80 yenes\":",
            "japaneseVoiceText": "はちじゅうえんのきってをごまいかいました",
            "wordBank": [
              "はちじゅうえんの",
              "きってを",
              "ごまい",
              "かいました",
              "ごさつ"
            ],
            "correctSentence": [
              "はちじゅうえんの",
              "きってを",
              "ごまい",
              "かいました"
            ],
            "explanation": "〜まい (枚) es el contador para objetos planos como estampillas, hojas o camisetas."
          },
          {
            "id": "ex-5-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja los adjetivos opuestos del ejercicio del Libro (L5):",
            "pairs": [
              {
                "id": "op5-1",
                "left": "あつい (caliente)",
                "right": "つめたい / さむい (frío)"
              },
              {
                "id": "op5-2",
                "left": "おもしろい (interesante)",
                "right": "つまらない (aburrido)"
              },
              {
                "id": "op5-3",
                "left": "いそがしい (ocupado)",
                "right": "ひま (libre / desocupado)"
              },
              {
                "id": "op5-4",
                "left": "しずか (tranquilo)",
                "right": "にぎやか (animado / bullicioso)"
              }
            ],
            "explanation": "Pares de antónimos de la práctica del capítulo 5."
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
    "id": 6,
    "genkiBook": "Genki I",
    "title": "Genki Lección 6: Un Día en la Vida de Robert",
    "subtitle": "La Famosa Forma Te (〜て形)",
    "description": "Conecta acciones en secuencia, pide favores (〜てください) y permisos (〜てもいいですか).",
    "themeColor": "#1cb0f6",
    "nodes": [
      {
        "id": "l6-node-0",
        "unitId": 6,
        "lessonNumber": 6,
        "title": "Lectura Inicial: Un Día con Robert (会話)",
        "japaneseTitle": "第6課 会話：ロバートさんの一日",
        "description": "Lee y escucha el diálogo inicial de la Lección 6: el profesor Yamashita le pide ayuda a Robert y Robert va a Okinawa",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-6-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En la oficina del profesor Yamashita",
            "dialogueContext": "Robert ayuda al profesor a llevar libros y recibe el folleto de reglas.",
            "dialogueLines": [
              {
                "speaker": "ロバート (Robert)",
                "japanese": "先生、荷物を 持ちましょうか。",
                "romaji": "Sensei, nimotsu o mochimashou ka.",
                "spanish": "Profesor, ¿le llevo su equipaje/cosas?",
                "audioText": "せんせい、にもつをもちましょうか"
              },
              {
                "speaker": "山下先生 (Prof. Yamashita)",
                "japanese": "ありがとう。じゃあ、これを あの 机の 上に 置いてください。",
                "romaji": "Arigatou. Jaa, kore o ano tsukue no ue ni oite kudasai.",
                "spanish": "Gracias. Entonces, por favor pon esto encima de aquel escritorio.",
                "audioText": "ありがとう。じゃあ、これをあのつくえのうえにおいてください"
              },
              {
                "speaker": "ロバート (Robert)",
                "japanese": "はい。あのう、この 本を 借りてもいいですか。",
                "romaji": "Hai. Anou, kono hon o karite mo ii desu ka.",
                "spanish": "Sí. Disculpe, ¿puedo tomar prestado este libro?",
                "audioText": "はい。あのう、このほんをかりてもいいですか"
              },
              {
                "speaker": "山下先生 (Prof. Yamashita)",
                "japanese": "いいですよ。どうぞ。",
                "romaji": "Ii desu yo. Douzo.",
                "spanish": "Claro que sí. Adelante.",
                "audioText": "いいですよ。どうぞ"
              }
            ],
            "prompt": "Según el Diálogo I, ¿qué ofrece hacer Robert y qué permiso pide después?",
            "options": [
              {
                "id": "d6-1-a",
                "text": "Ofrece llevar las cosas del profesor (持ちましょうか) y pide permiso para tomar prestado un libro (借りてもいいですか)",
                "isCorrect": true
              },
              {
                "id": "d6-1-b",
                "text": "Pide permiso para faltar a clase mañana"
              },
              {
                "id": "d6-1-c",
                "text": "Le regala un diccionario al profesor"
              }
            ],
            "correctAnswerId": "d6-1-a",
            "explanation": "Usa 〜ましょうか (ofrecer ayuda), 〜てください (pedir un favor) y 〜てもいいですか (pedir permiso)."
          },
          {
            "id": "ex-6-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Reglas del examen",
            "dialogueContext": "El profesor explica qué está prohibido durante la prueba.",
            "dialogueLines": [
              {
                "speaker": "山下先生 (Prof. Yamashita)",
                "japanese": "みなさん、よく 聞いてください。テストの 時、辞書を 使ってはいけません。",
                "romaji": "Minasan, yoku kiite kudasai. Tesuto no toki, jisho o tsukatte wa ikemasen.",
                "spanish": "Todos, escuchen bien por favor. Durante el examen, no deben usar el diccionario.",
                "audioText": "みなさん、よくきいてください。テストのとき、じしょをつかってはいけません"
              },
              {
                "speaker": "学生 (Estudiante)",
                "japanese": "先生、えんぴつで 書いてもいいですか。",
                "romaji": "Sensei, enpitsu de kaite mo ii desu ka.",
                "spanish": "Profesor, ¿está bien si escribo con lápiz?",
                "audioText": "せんせい、えんぴつでかいてもいいですか"
              },
              {
                "speaker": "山下先生 (Prof. Yamashita)",
                "japanese": "ええ、いいですよ。名前を 忘れないでくださいね。",
                "romaji": "Ee, ii desu yo. Namae o wasurenaide kudasai ne.",
                "spanish": "Sí, está bien. No olviden poner su nombre, por favor.",
                "audioText": "ええ、いいですよ。なまえをわすれないでくださいね"
              }
            ],
            "prompt": "¿Qué está prohibido hacer durante el examen según el profesor Yamashita?",
            "options": [
              {
                "id": "d6-2-a",
                "text": "Usar el diccionario (辞書を使ってはいけません)",
                "isCorrect": true
              },
              {
                "id": "d6-2-b",
                "text": "Escribir con lápiz"
              },
              {
                "id": "d6-2-c",
                "text": "Escribir el nombre"
              }
            ],
            "correctAnswerId": "d6-2-a",
            "explanation": "〜てはいけません expresa prohibición: 辞書を使ってはいけません."
          }
        ]
      },
      {
        "id": "l6-node-vocab",
        "unitId": 6,
        "lessonNumber": 6,
        "title": "Vocabulario: Electricidad, Reglas y Verbos L6",
        "japaneseTitle": "第6課の単語（電気・窓・開ける・閉める・つける・消す）",
        "description": "Vocabulario esencial de la Lección 6: abrir, cerrar, encender, apagar, apurarse y devolver",
        "icon": "Sparkles",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-6-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja los verbos opuestos de la Lección 6:",
            "pairs": [
              {
                "id": "v6o1",
                "left": "あける (開ける)",
                "right": "Abrir (puerta/ventana)"
              },
              {
                "id": "v6o2",
                "left": "しめる (閉める)",
                "right": "Cerrar (puerta/ventana)"
              },
              {
                "id": "v6o3",
                "left": "つける",
                "right": "Encender (luz/TV)"
              },
              {
                "id": "v6o4",
                "left": "けす (消す)",
                "right": "Apagar / Borrar"
              }
            ],
            "explanation": "Cuatro verbos indispensables para pedir favores cotidianos con 〜てください."
          },
          {
            "id": "ex-6-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Cómo se dice \"traer a una persona\" vs \"traer una cosa\" en Genki L6?",
            "options": [
              {
                "id": "v6-tsure",
                "text": "Persona: つれてくる (連れてくる) / Cosa: もってくる (持ってくる)",
                "isCorrect": true
              },
              {
                "id": "v6-tsure2",
                "text": "Ambos se dicen もってくる"
              },
              {
                "id": "v6-tsure3",
                "text": "Persona: かえす / Cosa: かりる"
              }
            ],
            "correctAnswerId": "v6-tsure",
            "explanation": "持ってくる (traer objetos) vs 連れてくる (traer a una persona o mascota)."
          },
          {
            "id": "ex-6-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Por favor apaga la luz\":",
            "japaneseVoiceText": "でんきをけしてください",
            "wordBank": [
              "でんきを",
              "けしてください",
              "つけてください",
              "あけて"
            ],
            "correctSentence": [
              "でんきを",
              "けしてください"
            ],
            "explanation": "Denki o keshite kudasai."
          }
        ]
      },
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
                "text": "しゃしんをとってもいいですか。",
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
                "text": "ここに入ってはいけません。",
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
        "id": "l6-node-tb-1",
        "unitId": 6,
        "lessonNumber": 6,
        "title": "Libro de Teoría: Ofrecer Ayuda (〜ましょうか)",
        "japaneseTitle": "教科書・練習：〜ましょうか（Ofrecer ayuda al oyente）",
        "description": "Práctica del libro de texto: ofrecer cargar bolsas, cerrar la ventana o enseñar inglés",
        "icon": "Heart",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-6-tb-1",
            "type": "multiple-choice",
            "prompt": "Tu amigo tiene frío porque la ventana está abierta. ¿Cómo te ofreces a cerrarla?",
            "options": [
              {
                "id": "tb6-1",
                "text": "まどを しめましょうか",
                "isCorrect": true
              },
              {
                "id": "tb6-2",
                "text": "まどを しめてください"
              },
              {
                "id": "tb6-3",
                "text": "まどを しめてはいけません"
              }
            ],
            "correctAnswerId": "tb6-1",
            "explanation": "Raíz Masu + ましょうか sirve para ofrecer tu ayuda voluntariamente al interlocutor."
          },
          {
            "id": "ex-6-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"¿Te llevo tu equipaje?\":",
            "japaneseVoiceText": "にもつをもちましょうか",
            "wordBank": [
              "にもつを",
              "もちましょうか",
              "もってください",
              "もってもいい"
            ],
            "correctSentence": [
              "にもつを",
              "もちましょうか"
            ],
            "explanation": "Nimotsu o mochimashou ka."
          },
          {
            "id": "ex-6-tb-3",
            "type": "listening",
            "prompt": "Escucha cómo se dan indicaciones de camino con Forma Te en el libro:",
            "japaneseVoiceText": "つぎのかどをみぎにまがってください",
            "options": [
              {
                "id": "tb6-lis",
                "text": "Por favor gira a la derecha en la siguiente esquina.",
                "isCorrect": true
              },
              {
                "id": "tb6-lis2",
                "text": "Sigue derecho hasta el hospital."
              },
              {
                "id": "tb6-lis3",
                "text": "No cruces la calle aquí."
              }
            ],
            "correctAnswerId": "tb6-lis",
            "explanation": "Tsugi no kado o migi ni magatte kudasai."
          }
        ]
      },
      {
        "id": "l6-node-wb-1",
        "unitId": 6,
        "lessonNumber": 6,
        "title": "Workbook: Conjugación Intensiva Forma Te",
        "japaneseTitle": "ワークブック：て形の活用ドリル",
        "description": "Ejercicios del Workbook pág. 54-56: transformar verbos U, Ru e irregulares sin errores",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-6-wb-1",
            "type": "match-pairs",
            "prompt": "Del Workbook: Empareja cada verbo con su Forma Te exacta:",
            "pairs": [
              {
                "id": "w6p1",
                "left": "いく (ir - excepción)",
                "right": "いって"
              },
              {
                "id": "w6p2",
                "left": "およぐ (nadar - gu)",
                "right": "およいで"
              },
              {
                "id": "w6p3",
                "left": "あそぶ (jugar - bu)",
                "right": "あそんで"
              },
              {
                "id": "w6p4",
                "left": "はなす (hablar - su)",
                "right": "はなして"
              }
            ],
            "explanation": "いく es excepción (いって); ぐ➔いで; ぶ/む/ぬ➔んで; す➔して."
          },
          {
            "id": "ex-6-wb-2",
            "type": "word-order",
            "prompt": "Del Workbook: Une las dos acciones \"Salí del hotel y tomé un taxi\":",
            "japaneseVoiceText": "ホテルをでてタクシーにのりました",
            "wordBank": [
              "ホテルを",
              "でて",
              "タクシーに",
              "のりました",
              "を"
            ],
            "correctSentence": [
              "ホテルを",
              "でて",
              "タクシーに",
              "のりました"
            ],
            "explanation": "Salir de un lugar usa を + 出る (ホテルを出て); subir a un transporte usa に + 乗る."
          },
          {
            "id": "ex-6-wb-3",
            "type": "listening",
            "prompt": "Ejercicio auditivo del Workbook L6:",
            "japaneseVoiceText": "ここではしゃしんをとってはいけません",
            "options": [
              {
                "id": "w6-photo",
                "text": "Aquí está prohibido tomar fotografías.",
                "isCorrect": true
              },
              {
                "id": "w6-photo2",
                "text": "Por favor tómame una fotografía aquí."
              },
              {
                "id": "w6-photo3",
                "text": "¿Puedo tomar fotografías aquí?"
              }
            ],
            "correctAnswerId": "w6-photo",
            "explanation": "Koko de wa shashin o totte wa ikemasen."
          }
        ]
      },
      {
        "id": "l6-node-wb-listen",
        "unitId": 6,
        "lessonNumber": 6,
        "title": "Workbook: Comprensión Auditiva en el Hospital y Escuela",
        "japaneseTitle": "ワークブック聞き取り：病院と学校のルール",
        "description": "Práctica auditiva del Workbook L6: escuchar indicaciones, permisos y secuencias de actividades",
        "icon": "Headphones",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-6-wbl-1",
            "type": "listening",
            "prompt": "Escucha la instrucción del profesor en clase:",
            "japaneseVoiceText": "きょうかしょのろくじゅうページをあけて、つぎのぶんをよんでください",
            "options": [
              {
                "id": "wbl6-1",
                "text": "Abran la página 60 del libro de texto y lean la siguiente oración, por favor.",
                "isCorrect": true
              },
              {
                "id": "wbl6-2",
                "text": "Cierren el libro y entreguen la tarea."
              },
              {
                "id": "wbl6-3",
                "text": "No abran el libro durante el examen."
              }
            ],
            "correctAnswerId": "wbl6-1",
            "explanation": "Kyoukasho no rokujuu-peeji o akete, tsugi no bun o yonde kudasai."
          },
          {
            "id": "ex-6-wbl-2",
            "type": "listening",
            "prompt": "Escucha por qué Takeshi tiene que irse temprano:",
            "japaneseVoiceText": "あしたはやくおきなければいけませんから、もうかえります",
            "options": [
              {
                "id": "wbl6-2a",
                "text": "Como mañana tiene que levantarse temprano, ya se regresa a casa.",
                "isCorrect": true
              },
              {
                "id": "wbl6-2b",
                "text": "Se quedará hasta muy tarde en la fiesta."
              },
              {
                "id": "wbl6-2c",
                "text": "Mañana no tiene clases."
              }
            ],
            "correctAnswerId": "wbl6-2a",
            "explanation": "Usa から para dar la razón de su acción."
          },
          {
            "id": "ex-6-wbl-3",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Mañana te devolveré el libro\":",
            "japaneseVoiceText": "あしたほんをかえします",
            "wordBank": [
              "あした",
              "ほんを",
              "かえします",
              "かります",
              "に"
            ],
            "correctSentence": [
              "あした",
              "ほんを",
              "かえします"
            ],
            "explanation": "返す (かえす) significa \"devolver un objeto\"."
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
    "id": 7,
    "genkiBook": "Genki I",
    "title": "Genki Lección 7: Foto Familiar",
    "subtitle": "Acciones en Curso (〜ています) y Descripciones",
    "description": "Aprende a describir la familia, estados continuos y apariencias físicas.",
    "themeColor": "#ff9600",
    "nodes": [
      {
        "id": "l7-node-0",
        "unitId": 7,
        "lessonNumber": 7,
        "title": "Lectura Inicial: Foto Familiar (会話)",
        "japaneseTitle": "第7課 会話：家族の写真",
        "description": "Lee y escucha el diálogo inicial de la Lección 7: Mary le muestra a Takeshi una foto de su familia y hermanos",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-7-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Mirando la fotografía familiar de Mary",
            "dialogueContext": "Takeshi mira una foto donde aparece la hermana mayor de Mary.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "メアリーさん、これは かぞくの しゃしんですか。",
                "romaji": "Mearii-san, kore wa kazoku no shashin desu ka.",
                "spanish": "Mary, ¿esta es una foto de tu familia?",
                "audioText": "メアリーさん、これはかぞくのしゃしんですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ええ。めがねを かけている 人は あねです。",
                "romaji": "Ee. Megane o kakete iru hito wa ane desu.",
                "spanish": "Sí. La persona que lleva puestos lentes es mi hermana mayor.",
                "audioText": "ええ。めがねをかけているひとはあねです"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "おねえさんは せが たかいですね。どこに すんでいますか。",
                "romaji": "Oneesan wa se ga takai desu ne. Doko ni sunde imasu ka.",
                "spanish": "Tu hermana mayor es alta, ¿verdad? ¿Dónde vive?",
                "audioText": "おねえさんはせがたかいですね。どこにすんでいますか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "シカゴに すんでいます。だいがくで おしえています。",
                "romaji": "Shikago ni sunde imasu. Daigaku de oshiete imasu.",
                "spanish": "Vive en Chicago. Enseña en una universidad.",
                "audioText": "シカゴにすんでいます。だいがくでおしえています"
              }
            ],
            "prompt": "Según el Diálogo I, ¿cómo es la hermana mayor de Mary y a qué se dedica?",
            "options": [
              {
                "id": "d7-1-a",
                "text": "Usa lentes, es alta, vive en Chicago y enseña en una universidad",
                "isCorrect": true
              },
              {
                "id": "d7-1-b",
                "text": "Es baja, vive en Tokio y trabaja en un banco"
              },
              {
                "id": "d7-1-c",
                "text": "Es estudiante de preparatoria en Arizona"
              }
            ],
            "correctAnswerId": "d7-1-a",
            "explanation": "Usa 〜ている tanto para llevar puestos accesorios (めがねをかけている) como para residencia y ocupación (すんでいます / おしえています)."
          },
          {
            "id": "ex-7-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: La familia de Takeshi",
            "dialogueContext": "Mary le pregunta a Takeshi cuántos hermanos tiene.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "たけしさんは きょうだいが いますか。",
                "romaji": "Takeshi-san wa kyoudai ga imasu ka.",
                "spanish": "Takeshi, ¿tienes hermanos?",
                "audioText": "たけしさんはきょうだいがいますか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "あにが ひとり います。かいしゃに つとめています。",
                "romaji": "Ani ga hitori imasu. Kaisha ni tsutomete imasu.",
                "spanish": "Tengo un hermano mayor. Trabaja para una empresa.",
                "audioText": "あにがひとりいます。かいしゃにつとめています"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "おにいさんは けっこんしていますか。",
                "romaji": "Oniisan wa kekkon shite imasu ka.",
                "spanish": "¿Tu hermano mayor está casado?",
                "audioText": "おにいさんはけっこんしていますか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ええ、きょねん けっこんしました。",
                "romaji": "Ee, kyonen kekkon shimashita.",
                "spanish": "Sí, se casó el año pasado.",
                "audioText": "ええ、きょねんけっこんしました"
              }
            ],
            "prompt": "Observa cómo Mary llama al hermano de Takeshi「おにいさん」y Takeshi lo llama「あに」. ¿Por qué?",
            "options": [
              {
                "id": "d7-2-a",
                "text": "Porque para hablar de la propia familia se usan términos modestos (あに, あね) y para la familia ajena términos de respeto (おにいさん, おねえさん)",
                "isCorrect": true
              },
              {
                "id": "d7-2-b",
                "text": "Porque son dos palabras sin ninguna diferencia de uso"
              },
              {
                "id": "d7-2-c",
                "text": "Porque あに significa hermano menor"
              }
            ],
            "correctAnswerId": "d7-2-a",
            "explanation": "Distinción cultural esencial en Genki L7: familia propia (ちち, はは, あに, あね) vs. familia de otro (おとうさん, おかあさん, おにいさん, おねえさん)."
          }
        ]
      },
      {
        "id": "l7-node-vocab",
        "unitId": 7,
        "lessonNumber": 7,
        "title": "Vocabulario: Familia Propia vs Familia Ajena",
        "japaneseTitle": "第7課の単語：家族の呼び方と身体・服装",
        "description": "Términos humildes para tu familia y respetuosos para la familia de otra persona",
        "icon": "Users",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-7-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja el miembro de TU familia con el término para la familia DE OTRA PERSONA:",
            "pairs": [
              {
                "id": "fam7-1",
                "left": "ちち (mi padre)",
                "right": "おとうさん (el padre de otro)"
              },
              {
                "id": "fam7-2",
                "left": "はは (mi madre)",
                "right": "おかあさん (la madre de otro)"
              },
              {
                "id": "fam7-3",
                "left": "あに (mi hermano mayor)",
                "right": "おにいさん (el hermano mayor de otro)"
              },
              {
                "id": "fam7-4",
                "left": "이もうと (mi hermana menor)",
                "right": "いもうとさん (la hermana menor de otro)"
              }
            ],
            "explanation": "En japonés siempre se distingue entre hablar de la propia familia hacia afuera y hablar de la familia del oyente."
          },
          {
            "id": "ex-7-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Cómo se dice \"ponerse de pie\" y \"sentarse\" en japonés (Genki L7)?",
            "options": [
              {
                "id": "v7-st",
                "text": "Ponerse de pie: たつ (立つ) / Sentarse: すわる (座る)",
                "isCorrect": true
              },
              {
                "id": "v7-st2",
                "text": "Ponerse de pie: のる / Sentarse: おりる"
              },
              {
                "id": "v7-st3",
                "text": "Ponerse de pie: ふとる / Sentarse: やせる"
              }
            ],
            "correctAnswerId": "v7-st",
            "explanation": "立つ (たつ = pararse) y 座る (すわる = sentarse)."
          },
          {
            "id": "ex-7-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Mi padre trabaja en un banco\":",
            "japaneseVoiceText": "ちちはぎんこうにつとめています",
            "wordBank": [
              "ちちは",
              "ぎんこうに",
              "つとめています",
              "おとうさんは",
              "を"
            ],
            "correctSentence": [
              "ちちは",
              "ぎんこうに",
              "つとめています"
            ],
            "explanation": "Chichi wa ginkou ni tsutomete imasu (つとめる lleva に para la empresa)."
          }
        ]
      },
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
                "text": "Hermana menor",
                "isCorrect": true
              },
              {
                "id": "l7-bro",
                "text": "Hermano menor"
              },
              {
                "id": "l7-mom",
                "text": "Madre"
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
                "text": "メアリーさんは せが たかいです",
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
        "id": "l7-node-tb-1",
        "unitId": 7,
        "lessonNumber": 7,
        "title": "Libro de Teoría: Verbos de Vestir (着る・履く・かぶる)",
        "japaneseTitle": "教科書・練習：着る・履く・かぶる・かける",
        "description": "Práctica del libro: qué verbo usar según la prenda (torso, piernas/pies, cabeza, lentes)",
        "icon": "ShoppingBag",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-7-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría: Empareja cada prenda con el verbo de \"llevar puesto\" que le corresponde en japonés:",
            "pairs": [
              {
                "id": "w7v1",
                "left": "シャツ / ジャケット (torso)",
                "right": "きている (着ている)"
              },
              {
                "id": "w7v2",
                "left": "ジーンズ / くつ (de cintura abajo)",
                "right": "はいている (履いている)"
              },
              {
                "id": "w7v3",
                "left": "ぼうし (sombrero/gorra)",
                "right": "かぶっている"
              },
              {
                "id": "w7v4",
                "left": "めがね (lentes/gafas)",
                "right": "かけている"
              }
            ],
            "explanation": "En japonés el verbo \"ponerse / llevar puesto\" cambia según la parte del cuerpo."
          },
          {
            "id": "ex-7-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Fui a la biblioteca a pedir prestado un libro\":",
            "japaneseVoiceText": "としょかんへほんをかりにいきました",
            "wordBank": [
              "としょかんへ",
              "ほんを",
              "かりに",
              "いきました",
              "かりて"
            ],
            "correctSentence": [
              "としょかんへ",
              "ほんを",
              "かりに",
              "いきました"
            ],
            "explanation": "[Lugar] へ + [Raíz Masu] に + 行く/来る = ir a un lugar con el propósito de hacer X."
          },
          {
            "id": "ex-7-tb-3",
            "type": "multiple-choice",
            "prompt": "¿Cómo se cuentan 1 persona y 2 personas en japonés (excepciones nativas)?",
            "options": [
              {
                "id": "cnt-peo",
                "text": "1 persona = ひとり (一人), 2 personas = ふたり (二人), de 3 en adelante = 〜にん (さんにん)",
                "isCorrect": true
              },
              {
                "id": "cnt-peo2",
                "text": "いちにん, ににん, さんにん"
              },
              {
                "id": "cnt-peo3",
                "text": "いっこ, にこ, さんこ"
              }
            ],
            "correctAnswerId": "cnt-peo",
            "explanation": "ひとり (1 persona) y ふたり (2 personas) son lecturas nativas irregulares."
          }
        ]
      },
      {
        "id": "l7-node-wb-1",
        "unitId": 7,
        "lessonNumber": 7,
        "title": "Workbook: Describir Atributos Físicos (〜は〜が)",
        "japaneseTitle": "ワークブック：身体特徴の表現（髪が長い・目が大きい）",
        "description": "Ejercicios del Workbook L7: describir cabello, ojos y estatura y contar personas",
        "icon": "Sparkles",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-7-wb-1",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Tomoko tiene el cabello largo\":",
            "japaneseVoiceText": "ともこさんはかみがながいです",
            "wordBank": [
              "ともこさんは",
              "かみが",
              "ながいです",
              "かみを",
              "せが"
            ],
            "correctSentence": [
              "ともこさんは",
              "かみが",
              "ながいです"
            ],
            "explanation": "[Persona] は [Parte del cuerpo] が [Adjetivo] です: Tomoko-san wa kami ga nagai desu."
          },
          {
            "id": "ex-7-wb-2",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L7:",
            "japaneseVoiceText": "このクラスにはがくせいがよにんいます",
            "options": [
              {
                "id": "w7-4stu",
                "text": "En esta clase hay 4 estudiantes.",
                "isCorrect": true
              },
              {
                "id": "w7-4stu2",
                "text": "En esta clase hay 2 estudiantes."
              },
              {
                "id": "w7-4stu3",
                "text": "En esta clase hay 40 estudiantes."
              }
            ],
            "correctAnswerId": "w7-4stu",
            "explanation": "4 personas se lee よにん (四人), nunca \"yon-nin\"."
          },
          {
            "id": "ex-7-wb-3",
            "type": "multiple-choice",
            "prompt": "Compara: 「しっています」(lo sé) vs ¿cómo se dice \"NO lo sé\" en japonés según Genki L7?",
            "options": [
              {
                "id": "shira-1",
                "text": "しりません (shirimasen — nunca \"shitte imasen\")",
                "isCorrect": true
              },
              {
                "id": "shira-2",
                "text": "しっていません"
              },
              {
                "id": "shira-3",
                "text": "しりませんでした"
              }
            ],
            "correctAnswerId": "shira-1",
            "explanation": "¡Regla clave de Genki L7! Afirmativo: 知っています (lo sé). Negativo: 知りません (no lo sé)."
          }
        ]
      },
      {
        "id": "l7-node-wb-listen",
        "unitId": 7,
        "lessonNumber": 7,
        "title": "Workbook: Comprensión Auditiva y Lectura de Correo de Mary",
        "japaneseTitle": "ワークブック聞き取りと読み書き編（メアリーさんのメール）",
        "description": "Escucha descripciones de personas en una fiesta y lee el correo de Mary a sus padres",
        "icon": "Headphones",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-7-wbl-1",
            "type": "listening",
            "prompt": "Escucha la descripción de la hermana menor de Takeshi:",
            "japaneseVoiceText": "いもうとはめがおおきくて、とてもかわいいです",
            "options": [
              {
                "id": "wbl7-1",
                "text": "Mi hermana menor tiene los ojos grandes y es muy linda.",
                "isCorrect": true
              },
              {
                "id": "wbl7-2",
                "text": "Mi hermana menor es muy alta y seria."
              },
              {
                "id": "wbl7-3",
                "text": "Mi hermana menor vive en Osaka."
              }
            ],
            "correctAnswerId": "wbl7-1",
            "explanation": "Imouto wa me ga ookikute, totemo kawaii desu (Unión de adjetivos con 〜くて)."
          },
          {
            "id": "ex-7-wbl-2",
            "type": "word-order",
            "prompt": "Del Workbook: Une los dos adjetivos \"Esta cafetería es tranquila y barata\":",
            "japaneseVoiceText": "このきっさてんはしずかでやすいです",
            "wordBank": [
              "このきっさてんは",
              "しずかで",
              "やすいです",
              "しずかくて",
              "やすいで"
            ],
            "correctSentence": [
              "このきっさてんは",
              "しずかで",
              "やすいです"
            ],
            "explanation": "Los な-adjetivos y sustantivos se unen con で: しずかでやすいです."
          },
          {
            "id": "ex-7-wbl-3",
            "type": "multiple-choice",
            "prompt": "¿Cómo se une el adjetivo irregular 「いい」 (bueno) con otra oración usando la forma Te (\"es barato y bueno / es bueno y barato\")?",
            "options": [
              {
                "id": "ii-te",
                "text": "よくて (yokute — ej. 頭がよくて、やさしいです = es inteligente y amable)",
                "isCorrect": true
              },
              {
                "id": "ii-te2",
                "text": "いいくて"
              },
              {
                "id": "ii-te3",
                "text": "いいで"
              }
            ],
            "correctAnswerId": "ii-te",
            "explanation": "La forma Te de いい es よくて (頭がいい ➔ 頭がよくて)."
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
    "id": 8,
    "genkiBook": "Genki I",
    "title": "Genki Lección 8: Barbecue",
    "subtitle": "Estilo Informal (Forma Corta) y Opiniones",
    "description": "Habla de forma casual, cita a otras personas y expresa opiniones con 〜と思います.",
    "themeColor": "#ce82ff",
    "nodes": [
      {
        "id": "l8-node-0",
        "unitId": 8,
        "lessonNumber": 8,
        "title": "Lectura Inicial: Barbacoa (会話)",
        "japaneseTitle": "第8課 会話：バーベキュー",
        "description": "Lee y escucha el diálogo inicial de la Lección 8: Takeshi, Mary y Robert conversan en estilo informal durante una barbacoa",
        "icon": "BookOpen",
        "color": "orange",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-8-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En la barbacoa del club",
            "dialogueContext": "Takeshi y Robert hablan sobre cocinar y lo que piensan del examen.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ロバートさん、料理を するのが 好き？",
                "romaji": "Robaato-san, ryouri o suru no ga suki?",
                "spanish": "Robert, ¿te gusta cocinar?",
                "audioText": "ロバートさん、りょうりをするのがすき？"
              },
              {
                "speaker": "ロバート (Robert)",
                "japanese": "うん、大好きだよ。でも、あまり 上手じゃないと 思う。",
                "romaji": "Un, daisuki da yo. Demo, amari jouzu ja nai to omou.",
                "spanish": "Sí, me encanta. Pero creo que no soy muy bueno haciéndolo.",
                "audioText": "うん、だいすきだよ。でも、あまりじょうずじゃないとおもう"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "そんなこと ないよ。この やきそば、すごく おいしいよ！",
                "romaji": "Sonna koto nai yo. Kono yakisoba, sugoku oishii yo!",
                "spanish": "¡Claro que no! ¡Este yakisoba está riquísimo!",
                "audioText": "そんなことないよ。このやきそば、すごくおいしいよ"
              }
            ],
            "prompt": "Según el Diálogo I, ¿qué opina Robert de su propia habilidad para cocinar?",
            "options": [
              {
                "id": "d8-1-a",
                "text": "Le encanta cocinar (大好き), pero cree que no es muy bueno (あまり上手じゃないと思う)",
                "isCorrect": true
              },
              {
                "id": "d8-1-b",
                "text": "Odia cocinar y nunca prepara nada"
              },
              {
                "id": "d8-1-c",
                "text": "Dice que es un chef profesional"
              }
            ],
            "correctAnswerId": "d8-1-a",
            "explanation": "Usa el nominalizador の (料理をするのが好き) y opinión con と思う (上手じゃないと思う)."
          },
          {
            "id": "ex-8-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: El clima de mañana y lo que dijo el profesor",
            "dialogueContext": "Hablan en forma corta sobre las noticias y la tarea.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "あした 雨が 降るかな。",
                "romaji": "Ashita ame ga furu kana.",
                "spanish": "Me pregunto si mañana lloverá.",
                "audioText": "あしたあめがふるかな"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ううん、降らないと 思うよ。",
                "romaji": "Uun, furanai to omou yo.",
                "spanish": "No, creo que no va a llover.",
                "audioText": "ううん、ふらないとおもうよ"
              },
              {
                "speaker": "ロバート (Robert)",
                "japanese": "あ、山下先生が あした テストが あると 言っていたよ。",
                "romaji": "A, Yamashita-sensei ga ashita tesuto ga aru to itte ita yo.",
                "spanish": "Ah, el profesor Yamashita dijo que mañana hay examen.",
                "audioText": "あ、やましたせんせいがあしたテストがあるといっていたよ"
              }
            ],
            "prompt": "En conversación informal japonesa, ¿qué significan 「うん」 y 「ううん」?",
            "options": [
              {
                "id": "d8-2-a",
                "text": "うん = Sí (informal de はい) / ううん = No (informal de いいえ)",
                "isCorrect": true
              },
              {
                "id": "d8-2-b",
                "text": "Ambos significan Sí"
              },
              {
                "id": "d8-2-c",
                "text": "Son saludos de despedida"
              }
            ],
            "correctAnswerId": "d8-2-a",
            "explanation": "En habla casual entre amigos: うん (sí) y ううん (no)."
          }
        ]
      },
      {
        "id": "l8-node-vocab",
        "unitId": 8,
        "lessonNumber": 8,
        "title": "Vocabulario: Clima, Estaciones y Vida Diaria L8",
        "japaneseTitle": "第8課の単語（天気予報・季節・洗濯・掃除・料理）",
        "description": "Pronóstico del tiempo, estaciones del año, labores del hogar y verbos U/Ru de la Lección 8",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-8-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja las 4 estaciones del año y vocabulario de la Lección 8:",
            "pairs": [
              {
                "id": "s8-1",
                "left": "はる (春)",
                "right": "Primavera"
              },
              {
                "id": "s8-2",
                "left": "なつ (夏)",
                "right": "Verano"
              },
              {
                "id": "s8-3",
                "left": "あき (秋)",
                "right": "Otoño"
              },
              {
                "id": "s8-4",
                "left": "ふゆ (冬)",
                "right": "Invierno"
              }
            ],
            "explanation": "Las cuatro estaciones del año (四季) en Japón."
          },
          {
            "id": "ex-8-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Por qué el verbo 「かえる」 (帰る = regresar a casa) y 「きる」 (切る = cortar) se conjugan como verbos U (かえらない, きらない) a pesar de terminar en -eru/-iru?",
            "options": [
              {
                "id": "u-exc",
                "text": "Porque son excepciones U-verb cuyos radicales terminan en -r (no son Ru-verbs)",
                "isCorrect": true
              },
              {
                "id": "u-exc2",
                "text": "Porque son verbos irregulares como する"
              },
              {
                "id": "u-exc3",
                "text": "Porque solo se usan en pasado"
              }
            ],
            "correctAnswerId": "u-exc",
            "explanation": "帰る (かえらない), 切る (きらない), 知る (しらない) y 入る (はいらない) son verbos U."
          },
          {
            "id": "ex-8-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Mi padre siempre llega tarde a casa del trabajo\":",
            "japaneseVoiceText": "ちちはいつもおそくかえってきます",
            "wordBank": [
              "ちちは",
              "いつも",
              "おそく",
              "かえってきます",
              "かえります"
            ],
            "correctSentence": [
              "ちちは",
              "いつも",
              "おそく",
              "かえってきます"
            ],
            "explanation": "帰ってくる significa \"regresar (hacia donde estoy yo, en casa)\"."
          }
        ]
      },
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
        "id": "l8-node-tb-1",
        "unitId": 8,
        "lessonNumber": 8,
        "title": "Libro de Teoría: Citar a otros (〜と言っていました)",
        "japaneseTitle": "教科書・練習：伝言「〜と言っていました」と「〜ないでください」",
        "description": "Práctica del libro: transmitir lo que dijo un tercero y pedir que NO hagan algo",
        "icon": "MessageCircle",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-8-tb-1",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Takeshi dijo que mañana no vendrá\":",
            "japaneseVoiceText": "たけしさんはあしたこないといっていました",
            "wordBank": [
              "たけしさんは",
              "あした",
              "こない",
              "といっていました",
              "きません"
            ],
            "correctSentence": [
              "たけしさんは",
              "あした",
              "こない",
              "といっていました"
            ],
            "explanation": "[Oración en forma corta] + と言っていました sirve para citar lo que alguien dijo."
          },
          {
            "id": "ex-8-tb-2",
            "type": "multiple-choice",
            "prompt": "¿Cómo se conjuga el verbo irregular 「くる」 (venir) y 「する」 (hacer) a la forma negativa corta (Forma Nai)?",
            "options": [
              {
                "id": "nai-irr",
                "text": "くる ➔ こない (konai) / する ➔ しない (shinai)",
                "isCorrect": true
              },
              {
                "id": "nai-irr2",
                "text": "くる ➔ きない / する ➔ すない"
              },
              {
                "id": "nai-irr3",
                "text": "くる ➔ くらない / する ➔ しらない"
              }
            ],
            "correctAnswerId": "nai-irr",
            "explanation": "¡Muy importante! くる en negativo corto es こない (konai), y する es しない (shinai)."
          },
          {
            "id": "ex-8-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja cada verbo U con su Forma Nai (negativo corto):",
            "pairs": [
              {
                "id": "n8-1",
                "left": "かう (comprar - termina en う)",
                "right": "かわない (kawanai - usa わ)"
              },
              {
                "id": "n8-2",
                "left": "まつ (esperar - termina en つ)",
                "right": "またない (matanai - usa た)"
              },
              {
                "id": "n8-3",
                "left": "ある (haber/tener - excepción)",
                "right": "ない (nai)"
              },
              {
                "id": "n8-4",
                "left": "のむ (beber - termina en む)",
                "right": "のまない (nomanai)"
              }
            ],
            "explanation": "Los verbos terminados en う cambian a わ+ない (かわない), y el negativo corto de ある es simplemente ない."
          }
        ]
      },
      {
        "id": "l8-node-wb-1",
        "unitId": 8,
        "lessonNumber": 8,
        "title": "Workbook: Diálogos Informales y なにか / なにも",
        "japaneseTitle": "ワークブック：普通体の会話と「何か・何も」",
        "description": "Ejercicios del Workbook L8: preguntas en habla casual y pronombres indefinidos",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-8-wb-1",
            "type": "multiple-choice",
            "prompt": "Del Workbook L8: En una pregunta informal con un な-adjetivo o sustantivo (ej. \"¿Hoy estás libre?\"), ¿qué pasa con 「だ」?",
            "options": [
              {
                "id": "w8-da",
                "text": "Se elimina だ en la pregunta: 「今日、ひま？」 (nunca \"ひまだ？\")",
                "isCorrect": true
              },
              {
                "id": "w8-da2",
                "text": "Se agrega だか al final"
              },
              {
                "id": "w8-da3",
                "text": "Se cambia a です"
              }
            ],
            "correctAnswerId": "w8-da",
            "explanation": "En preguntas informales se omite だ y se sube la entonación: 今日ひま？"
          },
          {
            "id": "ex-8-wb-2",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Esta mañana no comí nada\":",
            "japaneseVoiceText": "けさはなにもたべませんでした",
            "wordBank": [
              "けさは",
              "なにも",
              "たべませんでした",
              "なにかを",
              "たべました"
            ],
            "correctSentence": [
              "けさは",
              "なにも",
              "たべませんでした"
            ],
            "explanation": "なにも (nada) va sin partícula を/が y exige verbo en negativo: Kesa wa nani mo tabemasen deshita."
          },
          {
            "id": "ex-8-wb-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L8:",
            "japaneseVoiceText": "わたしはまいあさしんぶんをよむのがすきです",
            "options": [
              {
                "id": "w8-news",
                "text": "Me gusta leer el periódico todas las mañanas.",
                "isCorrect": true
              },
              {
                "id": "w8-news2",
                "text": "Olvidé leer el periódico esta mañana."
              },
              {
                "id": "w8-news3",
                "text": "Por favor no tires el periódico."
              }
            ],
            "correctAnswerId": "w8-news",
            "explanation": "Shinbun o yomu no ga suki desu (Verbo diccionario + のがすきです)."
          }
        ]
      },
      {
        "id": "l8-node-tb-reading",
        "unitId": 8,
        "lessonNumber": 8,
        "title": "Libro de Teoría: Encuesta sobre Trabajadores Japoneses (読み書き編)",
        "japaneseTitle": "教科書・読み書き：日本の会社員アンケート",
        "description": "Comprensión de lectura del capítulo 8: resultados de una encuesta a oficinistas en Japón",
        "icon": "BookOpen",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-8-tbr-1",
            "type": "multiple-choice",
            "prompt": "Si olvidas la palabra exacta al hablar de tu pasatiempo y dices: \"Olvidé hacer mi tarea\" usando el nominalizador の, ¿cuál es correcta?",
            "options": [
              {
                "id": "no-wasure",
                "text": "宿題を するのを 忘れました (Verbo diccionario + のを忘れました)",
                "isCorrect": true
              },
              {
                "id": "no-wasure2",
                "text": "宿題を してを 忘れました"
              },
              {
                "id": "no-wasure3",
                "text": "宿題を しますの 忘れました"
              }
            ],
            "correctAnswerId": "no-wasure",
            "explanation": "Verbo en forma diccionario + のを忘れる significa \"olvidar hacer [verbo]\"."
          },
          {
            "id": "ex-8-tbr-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Por favor no abras esa ventana\":",
            "japaneseVoiceText": "あのまどをあけないでください",
            "wordBank": [
              "あのまどを",
              "あけないでください",
              "あけてください",
              "あかないで"
            ],
            "correctSentence": [
              "あのまどを",
              "あけないでください"
            ],
            "explanation": "Ano mado o akenaide kudasai (Forma Nai + でください)."
          },
          {
            "id": "ex-8-tbr-3",
            "type": "listening",
            "prompt": "Escucha la opinión de Mary en el ejercicio del Libro L8:",
            "japaneseVoiceText": "にほんのぶっかはたかいとおもいます",
            "options": [
              {
                "id": "tbr8-1",
                "text": "Creo que el costo de vida / los precios en Japón son altos.",
                "isCorrect": true
              },
              {
                "id": "tbr8-2",
                "text": "Creo que las cosas en Japón son muy baratas."
              },
              {
                "id": "tbr8-3",
                "text": "Me gusta ir de compras en Japón."
              }
            ],
            "correctAnswerId": "tbr8-1",
            "explanation": "Nihon no bukka wa takai to omoimasu (物価 = precios / costo de la vida)."
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
    "id": 9,
    "genkiBook": "Genki I",
    "title": "Genki Lección 9: Teatro Kabuki",
    "subtitle": "Pasado Informal (〜た) y Oraciones Relativas",
    "description": "Modifica sustantivos con oraciones complejas y expresa acciones incompletas.",
    "themeColor": "#2b70c9",
    "nodes": [
      {
        "id": "l9-node-0",
        "unitId": 9,
        "lessonNumber": 9,
        "title": "Lectura Inicial: Teatro Kabuki (会話)",
        "japaneseTitle": "第9課 会話：歌舞伎",
        "description": "Lee y escucha el diálogo inicial de la Lección 9: Mary, Takeshi y Sue hablan sobre una función de Kabuki",
        "icon": "BookOpen",
        "color": "red",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-9-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Después de ver Kabuki",
            "dialogueContext": "Mary y Sue comentan qué les pareció el espectáculo tradicional de Kabuki.",
            "dialogueLines": [
              {
                "speaker": "スー (Sue)",
                "japanese": "かぶきは どうだった？",
                "romaji": "Kabuki wa dou datta?",
                "spanish": "¿Qué tal estuvo el Kabuki?",
                "audioText": "かぶきはどうだった？"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "すごく よかったよ。もう いちど 見たいな。",
                "romaji": "Sugoku yokatta yo. Mou ichido mitai na.",
                "spanish": "¡Estuvo buenísimo! Quiero verlo una vez más.",
                "audioText": "すごくよかったよ。もういちどみたいな"
              },
              {
                "speaker": "スー (Sue)",
                "japanese": "あの おどりをおどっている 人は だれ？",
                "romaji": "Ano odori o odotte iru hito wa dare?",
                "spanish": "¿Quién es aquella persona que está bailando?",
                "audioText": "あのおどりをおどっているひとはだれ？"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ああ、あれは 有名な かぶきの 俳優だよ。",
                "romaji": "Aa, are wa yuumei na kabuki no haiyuu da yo.",
                "spanish": "Ah, aquel es un famoso actor de Kabuki.",
                "audioText": "ああ、あれはゆうめいなかぶきのはいゆうだよ"
              }
            ],
            "prompt": "Según el Diálogo I, ¿cómo identifica Sue a la persona por la que pregunta?",
            "options": [
              {
                "id": "d9-1-a",
                "text": "Como \"aquella persona que está bailando\" (あのおどりをおどっている人)",
                "isCorrect": true
              },
              {
                "id": "d9-1-b",
                "text": "Como \"la persona que está tocando el piano\""
              },
              {
                "id": "d9-1-c",
                "text": "Como \"el profesor que lleva lentes\""
              }
            ],
            "correctAnswerId": "d9-1-a",
            "explanation": "En la Lección 9 se aprende a calificar sustantivos con verbos en forma corta: 踊っている人 (la persona que baila)."
          },
          {
            "id": "ex-9-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Planes para después del teatro",
            "dialogueContext": "Takeshi invita a las chicas a tomar té, pero Sue ya comió.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "これから いっしょに 晩ご飯を 食べない？",
                "romaji": "Korekara issho ni bangohan o tabenai?",
                "spanish": "¿No quieren cenar juntos ahora?",
                "audioText": "これからいっしょにばんごはんをたべない？"
              },
              {
                "speaker": "スー (Sue)",
                "japanese": "ごめん、わたしは もう 食べたから、帰るね。あした 試験が あるから、勉強しなくちゃ。",
                "romaji": "Gomen, watashi wa mou tabeta kara, kaeru ne. Ashita shiken ga aru kara, benkyou shinakucha.",
                "spanish": "Perdón, como yo ya comí, me regreso a casa. Como mañana tengo examen, tengo que estudiar.",
                "audioText": "ごめん、わたしはもうたべたから、かえるね。あしたしけんがあるから、べんきょうしなくちゃ"
              }
            ],
            "prompt": "¿Por qué Sue regresa a casa en lugar de ir a cenar?",
            "options": [
              {
                "id": "d9-2-a",
                "text": "Porque ya comió (もう食べた) y mañana tiene un examen",
                "isCorrect": true
              },
              {
                "id": "d9-2-b",
                "text": "Porque no tiene dinero hoy"
              },
              {
                "id": "d9-2-c",
                "text": "Porque perdió el último tren"
              }
            ],
            "correctAnswerId": "d9-2-a",
            "explanation": "Usa もう＋Pasado (もう食べた = ya comí) y razón con から."
          }
        ]
      },
      {
        "id": "l9-node-vocab",
        "unitId": 9,
        "lessonNumber": 9,
        "title": "Vocabulario: ArteTradicional, Colores y Verbos L9",
        "japaneseTitle": "第9課の単語（歌舞伎・着物・楽器・覚える・出る・散歩する）",
        "description": "Vocabulario de cultura tradicional japonesa, colores (青い, 赤い, 黒い, 白い) y verbos de la Lección 9",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-9-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja los 4 colores que son い-adjetivos en japonés (L9):",
            "pairs": [
              {
                "id": "col9-1",
                "left": "あおい (青い)",
                "right": "Azul"
              },
              {
                "id": "col9-2",
                "left": "あかい (赤い)",
                "right": "Rojo"
              },
              {
                "id": "col9-3",
                "left": "くろい (黒い)",
                "right": "Negro"
              },
              {
                "id": "col9-4",
                "left": "しろい (白い)",
                "right": "Blanco"
              }
            ],
            "explanation": "En japonés, 青い, 赤い, 黒い, 白い y 茶色い (café) funcionan directamente como い-adjetivos."
          },
          {
            "id": "ex-9-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Qué significa el verbo 「おぼえる」 (覚える) en japonés?",
            "options": [
              {
                "id": "v9-oboe",
                "text": "Memorizar / Aprender de memoria",
                "isCorrect": true
              },
              {
                "id": "v9-oboe2",
                "text": "Olvidar por completo"
              },
              {
                "id": "v9-oboe3",
                "text": "Bailar en un festival"
              }
            ],
            "correctAnswerId": "v9-oboe",
            "explanation": "覚える (おぼえる) es \"memorizar\" (su opuesto es 忘れる = olvidar)."
          },
          {
            "id": "ex-9-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Cuando era niño, el Sr. Tanaka era delgado (やせていた)\":",
            "japaneseVoiceText": "たなかさんはこどものときやせていました",
            "wordBank": [
              "たなかさんは",
              "こどものとき",
              "やせていました",
              "ふとっていました"
            ],
            "correctSentence": [
              "たなかさんは",
              "こどものとき",
              "やせていました"
            ],
            "explanation": "やせている (ser delgado) en pasado: やせていました."
          }
        ]
      },
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
        "id": "l9-node-tb-1",
        "unitId": 9,
        "lessonNumber": 9,
        "title": "Libro de Teoría: Pasado Informal (た形 y なかった)",
        "japaneseTitle": "教科書・練習：過去形の普通体（〜た・〜なかった・〜だった）",
        "description": "Ejercicios del libro: conjugar verbos, adjetivos y sustantivos al pasado corto afirmativo y negativo",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-9-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría: Empareja cada palabra con su Pasado Corto (Informal):",
            "pairs": [
              {
                "id": "p9-1",
                "left": "いく (ir - afirmativo)",
                "right": "いった (itta)"
              },
              {
                "id": "p9-2",
                "left": "いく (ir - negativo)",
                "right": "いかなかった (ikanakatta)"
              },
              {
                "id": "p9-3",
                "left": "いい (bueno - afirmativo)",
                "right": "よかった (yokatta)"
              },
              {
                "id": "p9-4",
                "left": "しずか (tranquilo - negativo)",
                "right": "しずかじゃなかった"
              }
            ],
            "explanation": "Tabla completa del pasado en forma corta (普通体過去) de Genki L9."
          },
          {
            "id": "ex-9-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce en estilo informal \"Ayer no estudié porque estaba cansado\":",
            "japaneseVoiceText": "きのうはつかれたからべんきょうしなかった",
            "wordBank": [
              "きのうは",
              "つかれたから",
              "べんきょうしなかった",
              "べんきょうしない",
              "で"
            ],
            "correctSentence": [
              "きのうは",
              "つかれたから",
              "べんきょうしなかった"
            ],
            "explanation": "Kinou wa tsukareta kara benkyou shinakatta."
          },
          {
            "id": "ex-9-tb-3",
            "type": "multiple-choice",
            "prompt": "¿Cómo se cuentan objetos pequeños en japonés con la serie nativa (1 a 4 cosas: 〜つ)?",
            "options": [
              {
                "id": "tsu-cnt",
                "text": "ひとつ (1), ふたつ (2), みっつ (3), よっつ (4)",
                "isCorrect": true
              },
              {
                "id": "tsu-cnt2",
                "text": "いちつ, につ, さんつ, よんつ"
              },
              {
                "id": "tsu-cnt3",
                "text": "ひとり, ふたり, さんにん, よにん"
              }
            ],
            "correctAnswerId": "tsu-cnt",
            "explanation": "El contador general nativo 〜つ (ひとつ, ふたつ, みっつ, よっつ... とお) sirve para objetos pequeños y conceptos."
          }
        ]
      },
      {
        "id": "l9-node-tb-2",
        "unitId": 9,
        "lessonNumber": 9,
        "title": "Libro de Teoría: Lectura del Diario de Sora (読み書き編)",
        "japaneseTitle": "教科書・読み書き：ソラさんの日記",
        "description": "Práctica de lectura y comprensión del diario escrito en estilo informal pasado",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-9-tb2-1",
            "type": "multiple-choice",
            "prompt": "En el diario de Sora: 「まだ宿題をしていない。」 ¿Cómo se responde \"Todavía no\" a una pregunta con もう (ya)?",
            "options": [
              {
                "id": "mada-1",
                "text": "いいえ、まだ [Verbo en Te + いません / いない] (ej. いいえ、まだ食べていません)",
                "isCorrect": true
              },
              {
                "id": "mada-2",
                "text": "いいえ、まだ食べませんでした"
              },
              {
                "id": "mada-3",
                "text": "いいえ、もう食べません"
              }
            ],
            "correctAnswerId": "mada-1",
            "explanation": "¡Regla clave de Genki L9! Para decir \"todavía no he hecho X\", se usa まだ + 〜ていません (no pasado negativo)."
          },
          {
            "id": "ex-9-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Todavía no he comprado el boleto\":",
            "japaneseVoiceText": "まだきっぷをかっていません",
            "wordBank": [
              "まだ",
              "きっぷを",
              "かっていません",
              "かいませんでした",
              "もう"
            ],
            "correctSentence": [
              "まだ",
              "きっぷを",
              "かっていません"
            ],
            "explanation": "Mada kippu o katte imasen."
          },
          {
            "id": "ex-9-tb2-3",
            "type": "listening",
            "prompt": "Escucha la descripción de quién es quién en la fiesta (Workbook L9):",
            "japaneseVoiceText": "あそこできものをきているひとはやまださんです",
            "options": [
              {
                "id": "w9-kimono",
                "text": "La persona que lleva puesto un kimono allá es la Sra. Yamada.",
                "isCorrect": true
              },
              {
                "id": "w9-kimono2",
                "text": "La Sra. Yamada compró un kimono ayer."
              },
              {
                "id": "w9-kimono3",
                "text": "La persona que está cantando es Yamada."
              }
            ],
            "correctAnswerId": "w9-kimono",
            "explanation": "Asoko de kimono o kite iru hito wa Yamada-san desu."
          }
        ]
      },
      {
        "id": "l9-node-wb-1",
        "unitId": 9,
        "lessonNumber": 9,
        "title": "Workbook: Práctica Escrita de Cláusulas y Contadores 〜つ",
        "japaneseTitle": "ワークブック：名詞修飾と「ひとつ・ふたつ」の練習",
        "description": "Ejercicios del Workbook L9 pág. 83-88: identificar personas por sus acciones y contar con 〜つ",
        "icon": "ListFilter",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-9-wb1-1",
            "type": "match-pairs",
            "prompt": "Del Workbook L9: Empareja los números nativos del 5 al 8 (〜つ):",
            "pairs": [
              {
                "id": "ts9-5",
                "left": "いつつ (五つ)",
                "right": "5 cosas"
              },
              {
                "id": "ts9-6",
                "left": "むっつ (六つ)",
                "right": "6 cosas"
              },
              {
                "id": "ts9-7",
                "left": "ななつ (七つ)",
                "right": "7 cosas"
              },
              {
                "id": "ts9-8",
                "left": "やっつ (八つ)",
                "right": "8 cosas"
              }
            ],
            "explanation": "5 = いつつ, 6 = むっつ, 7 = ななつ, 8 = やっつ, 9 = ここのつ, 10 = とお."
          },
          {
            "id": "ex-9-wb1-2",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Nos trajeron tres cafés y dos pasteles\":",
            "japaneseVoiceText": "コーヒーをみっつとケーキをふたつください",
            "wordBank": [
              "コーヒーを",
              "みっつと",
              "ケーキを",
              "ふたつ",
              "ください",
              "に"
            ],
            "correctSentence": [
              "コーヒーを",
              "みっつと",
              "ケーキを",
              "ふたつ",
              "ください"
            ],
            "explanation": "Koohii o mittsu to keeki o futatsu kudasai."
          },
          {
            "id": "ex-9-wb1-3",
            "type": "listening",
            "prompt": "Comprensión auditiva del Workbook L9:",
            "japaneseVoiceText": "きのうはあたまがいたかったから、早くねました",
            "options": [
              {
                "id": "wbl9-1",
                "text": "Como ayer me dolía la cabeza, me dormí temprano.",
                "isCorrect": true
              },
              {
                "id": "wbl9-2",
                "text": "Ayer estudié hasta muy tarde."
              },
              {
                "id": "wbl9-3",
                "text": "Hoy me duele el estómago."
              }
            ],
            "correctAnswerId": "wbl9-1",
            "explanation": "Kinou wa atama ga itakatta kara, hayaku nemashita."
          }
        ]
      },
      {
        "id": "l9-node-wb-2",
        "unitId": 9,
        "lessonNumber": 9,
        "title": "Workbook: Comprensión Auditiva de Conversación Casual",
        "japaneseTitle": "ワークブック聞き取り：過去形のカジュアル会話",
        "description": "Escucha diálogos entre amigos sobre el fin de semana pasado en forma corta",
        "icon": "Headphones",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-9-wb2-1",
            "type": "listening",
            "prompt": "Escucha cómo estuvo el examen de ayer según Ken:",
            "japaneseVoiceText": "きのうのしけん、あまりむずかしくなかったよ",
            "options": [
              {
                "id": "w9l-1",
                "text": "El examen de ayer no estuvo muy difícil.",
                "isCorrect": true
              },
              {
                "id": "w9l-2",
                "text": "El examen de ayer estuvo dificilísimo."
              },
              {
                "id": "w9l-3",
                "text": "El examen será la próxima semana."
              }
            ],
            "correctAnswerId": "w9l-1",
            "explanation": "Pasado negativo corto de むずかしい: むずかしくなかった."
          },
          {
            "id": "ex-9-wb2-2",
            "type": "multiple-choice",
            "prompt": "¿Cuál es el pasado negativo en forma corta del adjetivo irregular 「いい」?",
            "options": [
              {
                "id": "yoku-na",
                "text": "よくなかった",
                "isCorrect": true
              },
              {
                "id": "yoku-na2",
                "text": "いくなかった"
              },
              {
                "id": "yoku-na3",
                "text": "いいじゃなかった"
              }
            ],
            "correctAnswerId": "yoku-na",
            "explanation": "いい ➔ よくない (presente neg.) ➔ よくなかった (pasado neg.)."
          },
          {
            "id": "ex-9-wb2-3",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"La persona que está leyendo el periódico es mi padre\":",
            "japaneseVoiceText": "しんぶんをよんでいるひとはちちです",
            "wordBank": [
              "しんぶんを",
              "よんでいる",
              "ひとは",
              "ちちです",
              "よみます"
            ],
            "correctSentence": [
              "しんぶんを",
              "よんでいる",
              "ひとは",
              "ちちです"
            ],
            "explanation": "[Shinbun o yonde iru] hito wa chichi desu."
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
    "id": 10,
    "genkiBook": "Genki I",
    "title": "Genki Lección 10: Planes de Vacaciones",
    "subtitle": "Comparaciones (A のほうが B より) y Superlativos",
    "description": "Aprende a comparar opciones, expresar superlativos con 一番 y proyectar intenciones (〜つもり).",
    "themeColor": "#ff4b4b",
    "nodes": [
      {
        "id": "l10-node-0",
        "unitId": 10,
        "lessonNumber": 10,
        "title": "Lectura Inicial: Planes de Vacaciones (会話)",
        "japaneseTitle": "第10課 会話：冬休みの計画",
        "description": "Lee y escucha el diálogo inicial de la Lección 10: Takeshi y Mary en la agencia de viajes comparando tren bala, avión y autobús",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-10-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En la agencia de viajes",
            "dialogueContext": "Mary planea su viaje de invierno y compara medios de transporte.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "冬休みに 九州へ 行くつもりです。新幹線と 飛行機と どちらが いいですか。",
                "romaji": "Fuyuyasumi ni Kyuushuu e iku tsumori desu. Shinkansen to hikouki to dochira ga ii desu ka.",
                "spanish": "En las vacaciones de invierno pienso ir a Kyushu. Entre el tren bala y el avión, ¿cuál es mejor?",
                "audioText": "ふゆやすみにきゅうしゅうへいくつもりです。しんかんせんとひこうきとどちらがいいですか"
              },
              {
                "speaker": "旅行会社の人 (Agente)",
                "japanese": "飛行機の ほうが 速いですが、新幹線の ほうが 便利ですよ。",
                "romaji": "Hikouki no hou ga hayai desu ga, shinkansen no hou ga benri desu yo.",
                "spanish": "El avión es más rápido, pero el tren bala es más conveniente.",
                "audioText": "ひこうきのほうがはやいですが、しんかんせんのほうがべんりですよ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "いちばん 安いのは 何ですか。",
                "romaji": "Ichiban yasui no wa nan desu ka.",
                "spanish": "¿Cuál es el más barato de todos?",
                "audioText": "いちばんやすいのはなんですか"
              },
              {
                "speaker": "旅行会社の人 (Agente)",
                "japanese": "バスが いちばん 安いです。でも、じゅうにじかんぐらい かかりますよ。",
                "romaji": "Basu ga ichiban yasui desu. Demo, juunijikan gurai kakarimasu yo.",
                "spanish": "El autobús es el más barato. Pero toma alrededor de 12 horas.",
                "audioText": "バスがいちばんやすいです。でも、じゅうにじかんぐらいかかりますよ"
              }
            ],
            "prompt": "Según el Diálogo I, ¿cuál es el medio de transporte más barato a Kyushu y cuánto tiempo tarda?",
            "options": [
              {
                "id": "d10-1-a",
                "text": "El autobús es el más barato (いちばん安い), pero tarda unas 12 horas",
                "isCorrect": true
              },
              {
                "id": "d10-1-b",
                "text": "El tren bala es el más barato y tarda 1 hora"
              },
              {
                "id": "d10-1-c",
                "text": "El avión es el más barato"
              }
            ],
            "correctAnswerId": "d10-1-a",
            "explanation": "Compara con のほうが (más que) y superlativo con いちばん (el más)."
          },
          {
            "id": "ex-10-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: El clima de invierno",
            "dialogueContext": "Hablan sobre cómo cambia la estación y dónde se hospedará Mary.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "だんだん 寒く なりましたね。どこに 泊まるつもりですか。",
                "romaji": "Dandan samuku narimashita ne. Doko ni tomaru tsumori desu ka.",
                "spanish": "Poco a poco se ha puesto frío, ¿verdad? ¿Dónde piensas hospedarte?",
                "audioText": "だんだんさむくなりましたね。どこにとまるつもりですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "友だちの うちに 泊まるつもりです。",
                "romaji": "Tomodachi no uchi ni tomaru tsumori desu.",
                "spanish": "Pienso quedarme en la casa de un amigo.",
                "audioText": "ともだちのうちにとまるつもりです"
              }
            ],
            "prompt": "¿Qué estructura usa Takeshi para decir \"se ha puesto frío\"?",
            "options": [
              {
                "id": "d10-2-a",
                "text": "寒くなりました (い-adjetivo sin い + くなる)",
                "isCorrect": true
              },
              {
                "id": "d10-2-b",
                "text": "寒いに なりました"
              },
              {
                "id": "d10-2-c",
                "text": "寒く しました"
              }
            ],
            "correctAnswerId": "d10-2-a",
            "explanation": "Con い-adjetivos, la い cambia a く antes de なる: さむい ➔ さむくなる."
          }
        ]
      },
      {
        "id": "l10-node-vocab",
        "unitId": 10,
        "lessonNumber": 10,
        "title": "Vocabulario: Transporte, Estaciones y Viajes L10",
        "japaneseTitle": "第10課の単語（新幹線・飛行機・泊まる・決める・練習する）",
        "description": "Vocabulario esencial de la Lección 10: medios de transporte, hospedarse, decidir y estaciones",
        "icon": "Train",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-10-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja el vocabulario de la Lección 10:",
            "pairs": [
              {
                "id": "v10-1",
                "left": "とまる (泊まる)",
                "right": "Hospedarse / Quedarse en un hotel"
              },
              {
                "id": "v10-2",
                "left": "きめる (決める)",
                "right": "Decidir"
              },
              {
                "id": "v10-3",
                "left": "かかる",
                "right": "Tomar / Costar (tiempo o dinero)"
              },
              {
                "id": "v10-4",
                "left": "れんしゅうする (練習する)",
                "right": "Practicar / Entrenar"
              }
            ],
            "explanation": "Verbos fundamentales del capítulo 10."
          },
          {
            "id": "ex-10-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Cómo se pregunta \"¿Cuánto tiempo y cuánto dinero toma/cuesta?\" usando el verbo かかる?",
            "options": [
              {
                "id": "kak-1",
                "text": "Tiempo: どのぐらいかかりますか / Dinero: いくらかかりますか",
                "isCorrect": true
              },
              {
                "id": "kak-2",
                "text": "Ambos usan だれが"
              },
              {
                "id": "kak-3",
                "text": "Ambos usan どこに"
              }
            ],
            "correctAnswerId": "kak-1",
            "explanation": "どのぐらい (cuánto tiempo/distancia) e いくら (cuánto dinero) se combinan con かかります."
          },
          {
            "id": "ex-10-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Todavía no he decidido mis planes para el fin de semana\":",
            "japaneseVoiceText": "まだしゅうまつのよていをきめていません",
            "wordBank": [
              "まだ",
              "しゅうまつの",
              "よていを",
              "きめていません",
              "きめました"
            ],
            "correctSentence": [
              "まだ",
              "しゅうまつの",
              "よていを",
              "きめていません"
            ],
            "explanation": "Mada shuumatsu no yotei o kimete imasen."
          }
        ]
      },
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
      },
      {
        "id": "l10-node-tb-reading",
        "unitId": 10,
        "lessonNumber": 10,
        "title": "Libro de Teoría: Lectura \"El Cuento de Kasajizou\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：かさじぞう（El Cuento de los Sombreros de Paja）",
        "description": "Comprensión de lectura tradicional japonesa del capítulo 10: la bondad de los ancianos en Año Nuevo",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-10-tbr-1",
            "type": "multiple-choice",
            "prompt": "En el cuento tradicional japonés 「かさじぞう」 (Kasajizou) de Genki L10, ¿qué hace el anciano bondadoso cuando ve a las estatuas de Jizou cubiertas de nieve?",
            "options": [
              {
                "id": "kasa-1",
                "text": "Les pone los sombreros de paja (かさ) que iba a vender y hasta su propio pañuelo para que no pasen frío",
                "isCorrect": true
              },
              {
                "id": "kasa-2",
                "text": "Vende las estatuas en el mercado"
              },
              {
                "id": "kasa-3",
                "text": "Pasa de largo sin mirarlas"
              }
            ],
            "correctAnswerId": "kasa-1",
            "explanation": "Por su bondad, esa noche las estatuas Jizou les llevan arroz y regalos de Año Nuevo a su casa."
          },
          {
            "id": "ex-10-tbr-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Este año me volví más ocupado que el año pasado\":",
            "japaneseVoiceText": "ことしはきょねんよりいそがしくなりました",
            "wordBank": [
              "ことしは",
              "きょねんより",
              "いそがしく",
              "なりました",
              "いそがしいに"
            ],
            "correctSentence": [
              "ことしは",
              "きょねんより",
              "いそがしく",
              "なりました"
            ],
            "explanation": "Kotoshi wa kyonen yori isogashiku narimashita."
          },
          {
            "id": "ex-10-tbr-3",
            "type": "match-pairs",
            "prompt": "Empareja las preguntas de superlativos según la categoría (L10):",
            "pairs": [
              {
                "id": "sup10-1",
                "left": "Cosa / Objeto (季節の中で)",
                "right": "何が いちばん好きですか"
              },
              {
                "id": "sup10-2",
                "left": "Lugar (日本の中で)",
                "right": "どこが いちばん有名ですか"
              },
              {
                "id": "sup10-3",
                "left": "Persona (クラスの中で)",
                "right": "だれが いちばん背が高いですか"
              },
              {
                "id": "sup10-4",
                "left": "Tiempo (一年の中で)",
                "right": "いつが いちばん寒いですか"
              }
            ],
            "explanation": "Según la categoría se usa 何が, どこが, だれが o いつが con いちばん."
          }
        ]
      },
      {
        "id": "l10-node-wb-1",
        "unitId": 10,
        "lessonNumber": 10,
        "title": "Workbook: Integración y Comprensión Auditiva L10",
        "japaneseTitle": "ワークブック総合：比較・最上級・つもりです",
        "description": "Ejercicios del Workbook L10: comparar ciudades, planes con つもり y duración de viajes",
        "icon": "Headphones",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-10-wb-1",
            "type": "listening",
            "prompt": "Escucha la comparación entre dos platillos en el Workbook L10:",
            "japaneseVoiceText": "すしとてんぷらとどちらがすきですか。ー どちらもすきです。",
            "options": [
              {
                "id": "w10l-1",
                "text": "Pregunta cuál le gusta más entre sushi y tempura; responde que le gustan ambos.",
                "isCorrect": true
              },
              {
                "id": "w10l-2",
                "text": "Dice que no le gusta ninguno de los dos."
              },
              {
                "id": "w10l-3",
                "text": "Prefiere el ramen."
              }
            ],
            "correctAnswerId": "w10l-1",
            "explanation": "どちらも significa \"ambos\" (tanto con verbos afirmativos como negativos)."
          },
          {
            "id": "ex-10-wb-2",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"No tengo intención de comprar un coche\":",
            "japaneseVoiceText": "くるまをかわないつもりです",
            "wordBank": [
              "くるまを",
              "かわない",
              "つもりです",
              "かうない",
              "に"
            ],
            "correctSentence": [
              "くるまを",
              "かわない",
              "つもりです"
            ],
            "explanation": "Verbo en Forma Nai + つもりです = tener la intención de NO hacer X."
          },
          {
            "id": "ex-10-wb-3",
            "type": "multiple-choice",
            "prompt": "Elige la oración correcta para decir \"Mi habitación se volvió limpia\":",
            "options": [
              {
                "id": "cln10-1",
                "text": "部屋が きれいに なりました (な-adjetivo + になる)",
                "isCorrect": true
              },
              {
                "id": "cln10-2",
                "text": "部屋が きれく なりました"
              },
              {
                "id": "cln10-3",
                "text": "部屋が きれいだ なりました"
              }
            ],
            "correctAnswerId": "cln10-1",
            "explanation": "きれい es un な-adjetivo, por lo que lleva に antes de なる (きれいになる)."
          }
        ]
      },
      {
        "id": "l10-node-tb-1",
        "unitId": 10,
        "lessonNumber": 10,
        "title": "Libro de Teoría: El Pronombre の y 〜で (Medio)",
        "japaneseTitle": "教科書・練習：代名詞の「の」と交通手段の「で」",
        "description": "Práctica del libro: reemplazar sustantivos repetidos con の (\"el rojo\") e indicar medios de transporte",
        "icon": "Train",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-10-tb-1",
            "type": "multiple-choice",
            "prompt": "Para no repetir la palabra セーター (suéter) al decir \"Tengo uno rojo\" (あかいセーター ➔ あかいの), ¿qué partícula funciona como pronombre (\"uno/el\")?",
            "options": [
              {
                "id": "no-pron",
                "text": "La partícula の (あかいのを持っています = tengo uno rojo)",
                "isCorrect": true
              },
              {
                "id": "no-pron2",
                "text": "La partícula こと"
              },
              {
                "id": "no-pron3",
                "text": "La partícula と"
              }
            ],
            "correctAnswerId": "no-pron",
            "explanation": "Adjetivo + の reemplaza al sustantivo ya conocido en la conversación (\"el [adjetivo]\")."
          },
          {
            "id": "ex-10-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Voy a la universidad a pie (caminando)\":",
            "japaneseVoiceText": "あるいてだいがくへいきます",
            "wordBank": [
              "あるいて",
              "だいがくへ",
              "いきます",
              "あるきで",
              "バスで"
            ],
            "correctSentence": [
              "あるいて",
              "だいがくへ",
              "いきます"
            ],
            "explanation": "Todos los transportes usan で (電車で, バスで), ¡pero \"a pie\" se dice 歩いて (aruite, en Forma Te)!"
          },
          {
            "id": "ex-10-tb-3",
            "type": "listening",
            "prompt": "Escucha cuánto tiempo toma llegar a la estación (Workbook L10):",
            "japaneseVoiceText": "うちからえきまでバスでじゅうごふんかかります",
            "options": [
              {
                "id": "w10-15m",
                "text": "Desde mi casa hasta la estación toma 15 minutos en autobús.",
                "isCorrect": true
              },
              {
                "id": "w10-15m2",
                "text": "Camino 50 minutos hasta la estación."
              },
              {
                "id": "w10-15m3",
                "text": "El autobús pasa cada 15 minutos."
              }
            ],
            "correctAnswerId": "w10-15m",
            "explanation": "Uchi kara eki made basu de juugofun kakarimasu."
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 11: GENKI LECCIÓN 11: DESPUÉS DE VACACIONES
  // ==========================================
  {
    "id": 11,
    "genkiBook": "Genki I",
    "title": "Genki Lección 11: Después de Vacaciones",
    "subtitle": "Deseos (〜たい) y Experiencias (〜ことがある)",
    "description": "Expresa lo que quieres hacer, tus experiencias de vida y listas de actividades de ejemplo.",
    "themeColor": "#00cd9c",
    "nodes": [
      {
        "id": "l11-node-0",
        "unitId": 11,
        "lessonNumber": 11,
        "title": "Lectura Inicial: Después de Vacaciones (会話)",
        "japaneseTitle": "第11課 会話：休みのあと",
        "description": "Lee y escucha el diálogo inicial de la Lección 11: Mary y Takeshi platican sobre lo que hicieron en vacaciones y sus sueños futuros",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-11-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: ¿Qué hiciste en las vacaciones?",
            "dialogueContext": "Comienza el nuevo semestre y Takeshi le pregunta a Mary por sus vacaciones.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "メアリーさん、やすみは どうだった？",
                "romaji": "Mearii-san, yasumi wa dou datta?",
                "spanish": "Mary, ¿qué tal estuvieron tus vacaciones?",
                "audioText": "メアリーさん、やすみはどうだった？"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "とても 楽しかったよ。買い物を したり、温泉に 入ったり したよ。",
                "romaji": "Totemo tanoshikatta yo. Kaimono o shitari, onsen ni haittari shita yo.",
                "spanish": "¡Estuvieron muy divertidas! Hice cosas como ir de compras y entrar a aguas termales.",
                "audioText": "とてもたのしかったよ。かいものをしたり、おんせんにはいったりしたよ"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "いいなあ。ぼくは アルバイトを したり、家で 寝たり していたよ。",
                "romaji": "Ii naa. Boku wa arubaito o shitari, ie de netari shite ita yo.",
                "spanish": "¡Qué envidia! Yo estuve haciendo cosas como trabajar a medio tiempo y dormir en casa.",
                "audioText": "いいなあ。ぼくはアルバイトをしたり、いえでねたりしていたよ"
              }
            ],
            "prompt": "¿Qué actividades menciona Mary como ejemplos de lo que hizo en sus vacaciones?",
            "options": [
              {
                "id": "d11-1-a",
                "text": "Cosas como ir de compras y entrar a aguas termales (買い物をしたり、温泉に入ったりした)",
                "isCorrect": true
              },
              {
                "id": "d11-1-b",
                "text": "Estudiar en la biblioteca todos los días"
              },
              {
                "id": "d11-1-c",
                "text": "Subir al Monte Fuji en bicicleta"
              }
            ],
            "correctAnswerId": "d11-1-a",
            "explanation": "〜たり〜たりする sirve para dar ejemplos no exhaustivos de actividades realizadas."
          },
          {
            "id": "ex-11-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Sueños y experiencias",
            "dialogueContext": "Hablan sobre lo que quieren hacer en el futuro.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "メアリーさんは 将来、何を したい？",
                "romaji": "Mearii-san wa shourai, nani o shitai?",
                "spanish": "Mary, ¿qué quieres hacer en el futuro?",
                "audioText": "メアリーさんはしょうらい、なにをしたい？"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "卒業した あとで、日本の 会社で 働きたいな。",
                "romaji": "Sotsugyou shita ato de, Nihon no kaisha de hatarakitai na.",
                "spanish": "Después de graduarme, quiero trabajar en una empresa japonesa.",
                "audioText": "そつぎょうしたあとで、にほんのかいしゃではたらきたいな"
              }
            ],
            "prompt": "¿Qué quiere hacer Mary después de graduarse?",
            "options": [
              {
                "id": "d11-2-a",
                "text": "Quiere trabajar en una empresa japonesa (日本の会社で働きたい)",
                "isCorrect": true
              },
              {
                "id": "d11-2-b",
                "text": "Quiere regresar inmediatamente a Arizona"
              },
              {
                "id": "d11-2-c",
                "text": "Quiere abrir un restaurante en Australia"
              }
            ],
            "correctAnswerId": "d11-2-a",
            "explanation": "はたらく (trabajar) ➔ はたらきたい (quiero trabajar)."
          }
        ]
      },
      {
        "id": "l11-node-vocab",
        "unitId": 11,
        "lessonNumber": 11,
        "title": "Vocabulario: Pasatiempos, Viajes y Profesiones L11",
        "japaneseTitle": "第11課の単語（外国・キャンプ・ドライブ・習う・登る・疲れる）",
        "description": "Vocabulario esencial de la Lección 11: acampar, escalar, aprender un arte, cansarse y países",
        "icon": "Sparkles",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-11-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja los verbos de la Lección 11:",
            "pairs": [
              {
                "id": "v11p1",
                "left": "ならう (習う)",
                "right": "Aprender (con un maestro/instructor)"
              },
              {
                "id": "v11p2",
                "left": "のぼる (登る)",
                "right": "Subir / Escalar (una montaña)"
              },
              {
                "id": "v11p3",
                "left": "つかれる (疲れる)",
                "right": "Cansarse / Fatigarse"
              },
              {
                "id": "v11p4",
                "left": "やめる",
                "right": "Renunciar / Dejar de hacer"
              }
            ],
            "explanation": "Verbos esenciales del capítulo 11 de Genki I."
          },
          {
            "id": "ex-11-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Qué partícula se usa con el verbo 「のぼる」 (subir/escalar) para indicar la montaña a la que subes?",
            "options": [
              {
                "id": "nob-ni",
                "text": "La partícula に: 山に登る (yama ni noboru)",
                "isCorrect": true
              },
              {
                "id": "nob-de",
                "text": "La partícula で"
              },
              {
                "id": "nob-to",
                "text": "La partícula と"
              }
            ],
            "correctAnswerId": "nob-ni",
            "explanation": "Con 登る el destino/montaña se marca con に (富士山に登る)."
          },
          {
            "id": "ex-11-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Ayer discutí / peleé con mi amigo (けんかする)\":",
            "japaneseVoiceText": "きのうともだちとけんかしました",
            "wordBank": [
              "きのう",
              "ともだちと",
              "けんかしました",
              "ともだちに",
              "を"
            ],
            "correctSentence": [
              "きのう",
              "ともだちと",
              "けんかしました"
            ],
            "explanation": "Kinou tomodachi to kenka shimashita."
          }
        ]
      },
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
      },
      {
        "id": "l11-node-tb-1",
        "unitId": 11,
        "lessonNumber": 11,
        "title": "Libro de Teoría: 〜や〜 (Entre otros) y 〜だけ (Solo)",
        "japaneseTitle": "教科書・練習：列挙の「や」と限定の「だけ」",
        "description": "Práctica del libro: listar sustantivos de ejemplo con や (a diferencia de と) y limitar con だけ",
        "icon": "ListFilter",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-11-tb-1",
            "type": "multiple-choice",
            "prompt": "¿Cuál es la diferencia entre 「A と B」 y 「A や B」 al enumerar sustantivos?",
            "options": [
              {
                "id": "ya-to",
                "text": "と enumera la lista completa (A y B); や enumera ejemplos (\"cosas como A y B, entre otras\")",
                "isCorrect": true
              },
              {
                "id": "ya-to2",
                "text": "や solo se usa para verbos"
              },
              {
                "id": "ya-to3",
                "text": "No hay ninguna diferencia"
              }
            ],
            "correctAnswerId": "ya-to",
            "explanation": "や es el equivalente en sustantivos de 〜たり〜たりする en verbos: da una lista de ejemplos."
          },
          {
            "id": "ex-11-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Compré cosas como fruta y pan en el supermercado\":",
            "japaneseVoiceText": "スーパーでくだものやパンをかいました",
            "wordBank": [
              "スーパーで",
              "くだものや",
              "パンを",
              "かいました",
              "たり"
            ],
            "correctSentence": [
              "スーパーで",
              "くだものや",
              "パンを",
              "かいました"
            ],
            "explanation": "Suupaa de kudamono ya pan o kaimashita."
          },
          {
            "id": "ex-11-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja el vocabulario de profesiones y sueños de Genki L11:",
            "pairs": [
              {
                "id": "v11-1",
                "left": "しょうらい (将来)",
                "right": "El futuro (personal)"
              },
              {
                "id": "v11-2",
                "left": "ゆめ (夢)",
                "right": "Sueño / Meta"
              },
              {
                "id": "v11-3",
                "left": "しゃちょう (社長)",
                "right": "Presidente de una empresa"
              },
              {
                "id": "v11-4",
                "left": "さっか (作家)",
                "right": "Escritor / Autor"
              }
            ],
            "explanation": "Vocabulario clave del capítulo 11 de Genki I."
          }
        ]
      },
      {
        "id": "l11-node-tb-2",
        "unitId": 11,
        "lessonNumber": 11,
        "title": "Libro de Teoría: Deseos de Terceros (〜たがっている) y 紹介する",
        "japaneseTitle": "教科書・練習：第三者の願望「〜たがっています」",
        "description": "Práctica del libro: cómo hablar de lo que otra persona quiere hacer con 〜たがっている",
        "icon": "Users",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-11-tb2-1",
            "type": "multiple-choice",
            "prompt": "Como 「〜たいです」 expresa deseos propios (1.ª persona), ¿qué sufijo usa Genki L11 para decir \"Mary quiere ir a Okinawa\" (observando su deseo)?",
            "options": [
              {
                "id": "tagaru-1",
                "text": "Raíz Masu + たがっています (メアリーさんは沖縄へ 行きたがっています)",
                "isCorrect": true
              },
              {
                "id": "tagaru-2",
                "text": "Raíz Masu + たいすぎます"
              },
              {
                "id": "tagaru-3",
                "text": "Forma Te + あります"
              }
            ],
            "correctAnswerId": "tagaru-1",
            "explanation": "Para los deseos de una tercera persona se usa 〜たがっています o 〜たいと言っています."
          },
          {
            "id": "ex-11-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Mi amigo me presentó a una persona amable\":",
            "japaneseVoiceText": "ともだちがやさしいひとをしょうかいしてくれました",
            "wordBank": [
              "ともだちが",
              "やさしいひとを",
              "しょうかいして",
              "くれました",
              "しました"
            ],
            "correctSentence": [
              "ともだちが",
              "やさしいひとを",
              "しょうかいして",
              "くれました"
            ],
            "explanation": "紹介する (しょうかいする) significa \"presentar a alguien\"."
          },
          {
            "id": "ex-11-tb2-3",
            "type": "listening",
            "prompt": "Escucha las vacaciones ideales en el ejercicio del Libro L11:",
            "japaneseVoiceText": "こんどのやすみはキャンプをしたり、つりをしたりしたいです",
            "options": [
              {
                "id": "tb11-cmp",
                "text": "En las próximas vacaciones quiero hacer cosas como acampar y pescar.",
                "isCorrect": true
              },
              {
                "id": "tb11-cmp2",
                "text": "Ya fui a acampar y pescar la semana pasada."
              },
              {
                "id": "tb11-cmp3",
                "text": "Nunca he ido de campamento."
              }
            ],
            "correctAnswerId": "tb11-cmp",
            "explanation": "〜たり〜たり + したいです = \"quiero hacer cosas como A y B\"."
          }
        ]
      },
      {
        "id": "l11-node-wb-2",
        "unitId": 11,
        "lessonNumber": 11,
        "title": "Workbook: Evaluación Integradora Lección 11",
        "japaneseTitle": "ワークブック総合問題：〜たい・〜たり・〜ことがある",
        "description": "Repaso completo del Workbook L11: combinar deseos, experiencias pasadas y listas de actividades",
        "icon": "Award",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-11-wb2-1",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Cuando era niño, quería convertirme en astronauta (宇宙飛行士)\":",
            "japaneseVoiceText": "こどものときうちゅうひこうしになりたかったです",
            "wordBank": [
              "こどものとき",
              "うちゅうひこうしに",
              "なりたかったです",
              "なりたいです"
            ],
            "correctSentence": [
              "こどものとき",
              "うちゅうひこうしに",
              "なりたかったです"
            ],
            "explanation": "なる ➔ なりたい ➔ pasado: なりたかったです (quería convertirme en)."
          },
          {
            "id": "ex-11-wb2-2",
            "type": "multiple-choice",
            "prompt": "Encuentra la oración gramaticalmente CORRECTA según Genki L11:",
            "options": [
              {
                "id": "w11-cor",
                "text": "週末は 本を 読んだり、音楽を 聞いたり します。",
                "isCorrect": true
              },
              {
                "id": "w11-err1",
                "text": "週末は 本を 読むたり、音楽を 聞くたり します。"
              },
              {
                "id": "w11-err2",
                "text": "週末は 本を 読んだり、音楽を 聞いたりです。"
              }
            ],
            "correctAnswerId": "w11-cor",
            "explanation": "〜たり〜たり siempre se forma con la Forma Ta y debe cerrarse con el verbo する (します/しました)."
          },
          {
            "id": "ex-11-wb2-3",
            "type": "listening",
            "prompt": "Escucha el diálogo final del Workbook L11:",
            "japaneseVoiceText": "いままでうそをついたことがありますか。ー いいえ、いちどもありません。",
            "options": [
              {
                "id": "w11-lie",
                "text": "Pregunta si alguna vez ha dicho una mentira; responde que no, ni una sola vez.",
                "isCorrect": true
              },
              {
                "id": "w11-lie2",
                "text": "Dice que miente a menudo."
              },
              {
                "id": "w11-lie3",
                "text": "Pregunta si alguna vez ha perdido el tren."
              }
            ],
            "correctAnswerId": "w11-lie",
            "explanation": "うそをつく = decir una mentira; いちどもありません = ni una sola vez."
          }
        ]
      },
      {
        "id": "l11-node-wb-1",
        "unitId": 11,
        "lessonNumber": 11,
        "title": "Workbook: Entrevista de Experiencias y Lectura",
        "japaneseTitle": "ワークブック総合：経験インタビューと友だち探し",
        "description": "Ejercicios del Workbook L11 y sección de lectura \"Buscando amigos por correspondencia\"",
        "icon": "Headphones",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-11-wb-1",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Tengo un amigo que viene de Australia (usando がいる)\":",
            "japaneseVoiceText": "オーストラリアからきたともだちがいます",
            "wordBank": [
              "オーストラリアから",
              "きた",
              "ともだちが",
              "います",
              "あります"
            ],
            "correctSentence": [
              "オーストラリアから",
              "きた",
              "ともだちが",
              "います"
            ],
            "explanation": "Oosutoraria kara kita tomodachi ga imasu."
          },
          {
            "id": "ex-11-wb-2",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L11:",
            "japaneseVoiceText": "わたしはとりがすきですから、らいねんペットをかいたいです",
            "options": [
              {
                "id": "w11-pet",
                "text": "Como me gustan las aves, el próximo año quiero tener una mascota.",
                "isCorrect": true
              },
              {
                "id": "w11-pet2",
                "text": "Nunca he tenido una mascota en casa."
              },
              {
                "id": "w11-pet3",
                "text": "No me gustan los animales."
              }
            ],
            "correctAnswerId": "w11-pet",
            "explanation": "かう (飼う = criar/tener mascota) ➔ かいたいです."
          },
          {
            "id": "ex-11-wb-3",
            "type": "multiple-choice",
            "prompt": "Para decir \"Solo tengo libre el domingo\" en una oración afirmativa, ¿qué partícula usas?",
            "options": [
              {
                "id": "dake-1",
                "text": "だけ (日曜日だけひまです)",
                "isCorrect": true
              },
              {
                "id": "dake-2",
                "text": "たり"
              },
              {
                "id": "dake-3",
                "text": "や"
              }
            ],
            "correctAnswerId": "dake-1",
            "explanation": "だけ significa \"solo / únicamente\" y se usa con verbos afirmativos o negativos."
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIDAD 12: GENKI LECCIÓN 12: SALUD Y BIENESTAR
  // ==========================================
  {
    "id": 12,
    "genkiBook": "Genki I",
    "title": "Genki Lección 12: Salud y Bienestar",
    "subtitle": "Modo Explicativo (〜んです), Consejos y Deberes",
    "description": "Explica razones, expresa excesos (〜すぎる), da consejos médicos y domina la obligación.",
    "themeColor": "#ce82ff",
    "nodes": [
      {
        "id": "l12-node-0",
        "unitId": 12,
        "lessonNumber": 12,
        "title": "Lectura Inicial: Sintiendo Malestar (会話)",
        "japaneseTitle": "第12課 会話：どうしたんですか",
        "description": "Lee y escucha el diálogo inicial de la Lección 12: Mary va a la clínica porque tiene dolor de garganta y fiebre",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-12-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En el consultorio médico",
            "dialogueContext": "El médico le pregunta a Mary qué síntomas tiene.",
            "dialogueLines": [
              {
                "speaker": "医者 (Médico)",
                "japanese": "どうしたんですか。",
                "romaji": "Doushita n desu ka.",
                "spanish": "¿Qué le sucede? / ¿Qué le pasó?",
                "audioText": "どうしたんですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "きのうから のどが 痛いんです。熱も すこし あるんです。",
                "romaji": "Kinou kara nodo ga itai n desu. Netsu mo sukoshi aru n desu.",
                "spanish": "Es que desde ayer me duele la garganta. También tengo un poco de fiebre.",
                "audioText": "きのうからのどがいたいんです。ねつもすこしあるんです"
              },
              {
                "speaker": "医者 (Médico)",
                "japanese": "そうですか。口を あけてください。ああ、かぜですね。",
                "romaji": "Sou desu ka. Kuchi o akete kudasai. Aa, kaze desu ne.",
                "spanish": "Ya veo. Abra la boca, por favor. Ah, es un resfriado.",
                "audioText": "そうですか。くちをあけてください。ああ、かぜですね"
              }
            ],
            "prompt": "Según el Diálogo I, ¿qué síntomas tiene Mary y cuál es el diagnóstico del médico?",
            "options": [
              {
                "id": "d12-1-a",
                "text": "Le duele la garganta, tiene un poco de fiebre y el médico le diagnostica un resfriado (かぜ)",
                "isCorrect": true
              },
              {
                "id": "d12-1-b",
                "text": "Le duele una muela y necesita cirugía"
              },
              {
                "id": "d12-1-c",
                "text": "Se lastimó el pie haciendo deporte"
              }
            ],
            "correctAnswerId": "d12-1-a",
            "explanation": "Mary usa 〜んです para explicar sus síntomas: のどが痛いんです y 熱もすこしあるんです."
          },
          {
            "id": "ex-12-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Consejos del médico",
            "dialogueContext": "El doctor le da indicaciones a Mary para recuperarse pronto.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "あしたから 旅行に 行くんですが…。",
                "romaji": "Ashita kara ryokou ni iku n desu ga...",
                "spanish": "Es que a partir de mañana voy de viaje...",
                "audioText": "あしたからりょこうにいくんですが"
              },
              {
                "speaker": "医者 (Médico)",
                "japanese": "きょうは 薬を 飲んで、早く 寝たほうが いいですよ。あまり 無理を しないでください。",
                "romaji": "Kyou wa kusuri o nonde, hayaku neta hou ga ii desu yo. Amari muri o shinaide kudasai.",
                "spanish": "Hoy sería mejor que tome medicina y duerma temprano. Por favor no se esfuerce demasiado.",
                "audioText": "きょうはくすりをのんで、はやくねたほうがいいですよ。あまりむりをしないでください"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "はい、ありがとうございました。お大事に。",
                "romaji": "Hai, arigatou gozaimashita.",
                "spanish": "Sí, muchas gracias.",
                "audioText": "はい、ありがとうございました"
              }
            ],
            "prompt": "¿Qué consejo médico le da el doctor a Mary?",
            "options": [
              {
                "id": "d12-2-a",
                "text": "Que tome medicina, duerma temprano (早く寝たほうがいい) y no se exceda (無理をしないで)",
                "isCorrect": true
              },
              {
                "id": "d12-2-b",
                "text": "Que haga mucho ejercicio al aire libre"
              },
              {
                "id": "d12-2-c",
                "text": "Que no tome ningún medicamento"
              }
            ],
            "correctAnswerId": "d12-2-a",
            "explanation": "Usa 〜たほうがいいですよ para aconsejar y 無理をしないでください (no se sobreexija)."
          }
        ]
      },
      {
        "id": "l12-node-vocab",
        "unitId": 12,
        "lessonNumber": 12,
        "title": "Vocabulario: Síntomas Médicos, Cuerpo y Clima L12",
        "japaneseTitle": "第12課の単語（風邪・熱・咳・薬・天気・気温）",
        "description": "Partes del cuerpo, enfermedades, medicamentos y términos meteorológicos de la Lección 12",
        "icon": "Heart",
        "color": "red",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-12-voc-1",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones médicas de la Lección 12:",
            "pairs": [
              {
                "id": "m12-1",
                "left": "かぜを ひく (風邪をひく)",
                "right": "Atrapar un resfriado / Resfriarse"
              },
              {
                "id": "m12-2",
                "left": "くすりを のむ (薬を飲む)",
                "right": "Tomar medicina"
              },
              {
                "id": "m12-3",
                "left": "ねつが ある (熱がある)",
                "right": "Tener fiebre"
              },
              {
                "id": "m12-4",
                "left": "けがを する",
                "right": "Lastimarse / Sufrir una herida"
              }
            ],
            "explanation": "En japonés \"resfriarse\" es 風邪をひく y \"tomar medicina\" usa el verbo 飲む (beber/tragar)."
          },
          {
            "id": "ex-12-voc-2",
            "type": "multiple-choice",
            "prompt": "¿Qué expresión se le dice a alguien que está enfermo o resfriado para desearle pronta recuperación?",
            "options": [
              {
                "id": "odaiji-1",
                "text": "おだいじに (お大事に — \"¡Cuídese mucho / Que se mejore!\")",
                "isCorrect": true
              },
              {
                "id": "odaiji-2",
                "text": "ごちそうさまでした"
              },
              {
                "id": "odaiji-3",
                "text": "いってらっしゃい"
              }
            ],
            "correctAnswerId": "odaiji-1",
            "explanation": "お大事に es la frase japonesa estándar para quien está enfermo o lesionado."
          },
          {
            "id": "ex-12-voc-3",
            "type": "word-order",
            "prompt": "Traduce al japonés: \"Hoy hace veinte grados (20度) y está fresco\":",
            "japaneseVoiceText": "きょうはにじゅうどですずしいです",
            "wordBank": [
              "きょうは",
              "にじゅうどで",
              "すずしいです",
              "あついです"
            ],
            "correctSentence": [
              "きょうは",
              "にじゅうどで",
              "すずしいです"
            ],
            "explanation": "〜度 (ど) se usa para grados de temperatura."
          }
        ]
      },
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
      },
      {
        "id": "l12-node-tb-1",
        "unitId": 12,
        "lessonNumber": 12,
        "title": "Libro de Teoría: Predicciones (〜でしょう) y Causa (〜ので)",
        "japaneseTitle": "教科書・練習：推量の「〜でしょう」と丁寧な理由「〜ので」",
        "description": "Práctica del libro: pronóstico del tiempo con 〜でしょう y dar razones corteses con 〜ので",
        "icon": "Compass",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-12-tb-1",
            "type": "multiple-choice",
            "prompt": "¿Cómo se une la conjunción causal suave 「〜ので」 (\"dado que / como...\") a un sustantivo o な-adjetivo en presente afirmativo?",
            "options": [
              {
                "id": "node-na",
                "text": "Se inserta な: 静かなので / 病気なので (igual que con んです)",
                "isCorrect": true
              },
              {
                "id": "node-da",
                "text": "Se usa だ: 病気だので"
              },
              {
                "id": "node-no",
                "text": "Se usa の: 病気のので"
              }
            ],
            "correctAnswerId": "node-na",
            "explanation": "〜ので es más suave y formal que から; con sustantivos y な-adjetivos lleva な (雨なので、行きません)."
          },
          {
            "id": "ex-12-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce el pronóstico \"Mañana probablemente lloverá\":",
            "japaneseVoiceText": "あしたはあめがふるでしょう",
            "wordBank": [
              "あしたは",
              "あめが",
              "ふる",
              "でしょう",
              "ふります"
            ],
            "correctSentence": [
              "あしたは",
              "あめが",
              "ふる",
              "でしょう"
            ],
            "explanation": "Forma corta (sin だ) + でしょう expresa predicción probable: Ashita wa ame ga furu deshou."
          },
          {
            "id": "ex-12-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja el vocabulario del clima y salud de Genki L12:",
            "pairs": [
              {
                "id": "v12-1",
                "left": "せきが でる (咳が出る)",
                "right": "Tener tos / Toser"
              },
              {
                "id": "v12-2",
                "left": "はれ (晴れ)",
                "right": "Despejado / Soleado"
              },
              {
                "id": "v12-3",
                "left": "くもり (曇り)",
                "right": "Nublado"
              },
              {
                "id": "v12-4",
                "left": "おだいじに (お大事に)",
                "right": "¡Que se mejore pronto!"
              }
            ],
            "explanation": "Expresiones esenciales del capítulo 12."
          }
        ]
      },
      {
        "id": "l12-node-wb-2",
        "unitId": 12,
        "lessonNumber": 12,
        "title": "Workbook: Examen Integrador de Graduación Genki I (N5)",
        "japaneseTitle": "ワークブック総合：Genki I（第1課〜第12課）総まとめ",
        "description": "Evaluación final de la primera mitad del curso (Genki I completo / Nivel JLPT N5)",
        "icon": "Award",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-12-wb2-1",
            "type": "multiple-choice",
            "prompt": "En conversación informal, ¿cómo se abrevia la obligación 「〜なければいけません」 (ej. 行かなければいけません)?",
            "options": [
              {
                "id": "nakucha-1",
                "text": "〜なくちゃいけない o 〜なきゃいけない (行かなくちゃ / 行かなきゃ)",
                "isCorrect": true
              },
              {
                "id": "nakucha-2",
                "text": "〜たりいけない"
              },
              {
                "id": "nakucha-3",
                "text": "〜そういけない"
              }
            ],
            "correctAnswerId": "nakucha-1",
            "explanation": "En el habla diaria, 〜なければいけません suele acortarse a 〜なくちゃ o 〜なきゃ."
          },
          {
            "id": "ex-12-wb2-2",
            "type": "word-order",
            "prompt": "Examen Genki I: Traduce \"Como esta pregunta es demasiado difícil, no puedo responder\":",
            "japaneseVoiceText": "このもんだいはむずかしすぎるのでこたえられません",
            "wordBank": [
              "このもんだいは",
              "むずかしすぎるので",
              "こたえられません",
              "むずかしいすぎる"
            ],
            "correctSentence": [
              "このもんだいは",
              "むずかしすぎるので",
              "こたえられません"
            ],
            "explanation": "むずかしい ➔ むずかしすぎる + ので (como es demasiado difícil)."
          },
          {
            "id": "ex-12-wb2-3",
            "type": "listening",
            "prompt": "Escucha el mensaje de felicitación por terminar Genki I:",
            "japaneseVoiceText": "げんきいちがおわりました。つぎはげんきにをがんばりましょう！",
            "options": [
              {
                "id": "g1-done",
                "text": "¡Terminaste Genki I! ¡Ahora demos nuestro mejor esfuerzo en Genki II!",
                "isCorrect": true
              },
              {
                "id": "g1-done2",
                "text": "Apenas empieza la Lección 1."
              },
              {
                "id": "g1-done3",
                "text": "Hoy no habrá clase de japonés."
              }
            ],
            "correctAnswerId": "g1-done",
            "explanation": "Genki I ga owarimashita. Tsugi wa Genki II o ganbarimashou!"
          }
        ]
      },
      {
        "id": "l12-node-wb-1",
        "unitId": 12,
        "lessonNumber": 12,
        "title": "Workbook: Lectura de Tanabata (七夕) y Repaso Genki I",
        "japaneseTitle": "ワークブック・読み書き編：七夕祭りと総まとめ",
        "description": "Lectura cultural del festival de Tanabata y ejercicios integradores del Workbook L12",
        "icon": "Sparkles",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-12-wb-1",
            "type": "multiple-choice",
            "prompt": "Según la lectura de la Lección 12 sobre el Festival de Tanabata (七夕), ¿cuándo se celebra y cuántas veces al año pueden verse Orihime y Hikoboshi?",
            "options": [
              {
                "id": "tana-1",
                "text": "Se celebra el 7 de julio y solo pueden encontrarse una vez al año (一年に一回)",
                "isCorrect": true
              },
              {
                "id": "tana-2",
                "text": "Se celebra el 1 de enero y se ven todas las semanas"
              },
              {
                "id": "tana-3",
                "text": "Se celebra en diciembre"
              }
            ],
            "correctAnswerId": "tana-1",
            "explanation": "En la lectura de Genki I L12, Orihime y Hikoboshi cruzan la Vía Láctea una sola vez al año, el 7 de julio (七月七日)."
          },
          {
            "id": "ex-12-wb-2",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Como tengo un compromiso (用事), hoy debo regresar temprano\":",
            "japaneseVoiceText": "ようじがあるのできょうははやくかえらなければいけません",
            "wordBank": [
              "ようじがあるので",
              "きょうは",
              "はやく",
              "かえらなければいけません",
              "かえる"
            ],
            "correctSentence": [
              "ようじがあるので",
              "きょうは",
              "はやく",
              "かえらなければいけません"
            ],
            "explanation": "Youji ga aru node, kyou wa hayaku kaeranakereba ikemasen."
          },
          {
            "id": "ex-12-wb-3",
            "type": "listening",
            "prompt": "Escucha la conversación médica final de Genki I:",
            "japaneseVoiceText": "きのうおさけをのみすぎたんです。あたまがいたいんです。",
            "options": [
              {
                "id": "w12-alc",
                "text": "Es que ayer bebí demasiado alcohol y me duele la cabeza.",
                "isCorrect": true
              },
              {
                "id": "w12-alc2",
                "text": "Ayer no bebí nada de alcohol."
              },
              {
                "id": "w12-alc3",
                "text": "Quiero tomar medicina para la garganta."
              }
            ],
            "correctAnswerId": "w12-alc",
            "explanation": "Kinou osake o nomisugita n desu. Atama ga itai n desu."
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
        "id": "l13-node-0",
        "unitId": 13,
        "lessonNumber": 13,
        "title": "Lectura Inicial: Buscando Trabajo (会話)",
        "japaneseTitle": "第13課 会話：アルバイト探し",
        "description": "Lee y escucha el diálogo inicial de Genki II Lección 13: John habla con el gerente de un restaurante sobre un empleo de medio tiempo",
        "icon": "BookOpen",
        "color": "orange",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-13-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: John habla de sus habilidades",
            "dialogueContext": "John conversa con Mary sobre encontrar un trabajo de medio tiempo en Japón.",
            "dialogueLines": [
              {
                "speaker": "ジョン (John)",
                "japanese": "メアリーさん、いい アルバイトを さがしているんですが…。",
                "romaji": "Mearii-san, ii arubaito o sagashite iru n desu ga...",
                "spanish": "Mary, es que estoy buscando un buen trabajo de medio tiempo...",
                "audioText": "メアリーさん、いいアルバイトをさがしているんですが"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "英語を 教える アルバイトなら、ありますよ。ジョンさんは 日本語も 話せるし、いいと 思いますよ。",
                "romaji": "Eigo o oshieru arubaito nara, arimasu yo. Jon-san wa nihongo mo hanaseru shi, ii to omoimasu yo.",
                "spanish": "Si se trata de un trabajo enseñando inglés, sí hay. Tú además puedes hablar japonés, así que creo que sería bueno.",
                "audioText": "えいごをおしえるアルバイトなら、ありますよ。ジョンさんはにほんごもはなせるし、いいとおもいますよ"
              },
              {
                "speaker": "ジョン (John)",
                "japanese": "おもしろそうですね。でも、教えた 経験が ないんです。",
                "romaji": "Omoshirosou desu ne. Demo, oshieta keiken ga nai n desu.",
                "spanish": "Se ve interesante, ¿verdad? Pero es que no tengo experiencia enseñando.",
                "audioText": "おもしろそうですね。でも、おしえたけいけんがないんです"
              }
            ],
            "prompt": "Según el Diálogo I, ¿por qué duda John sobre el trabajo de enseñar inglés?",
            "options": [
              {
                "id": "d13-1-a",
                "text": "Porque aunque parece interesante (おもしろそう), no tiene experiencia enseñando (教えた経験がない)",
                "isCorrect": true
              },
              {
                "id": "d13-1-b",
                "text": "Porque no sabe hablar nada de inglés"
              },
              {
                "id": "d13-1-c",
                "text": "Porque queda muy lejos de su casa"
              }
            ],
            "correctAnswerId": "d13-1-a",
            "explanation": "John dice: 「おもしろそうですね。でも、教えた経験がないんです。」"
          },
          {
            "id": "ex-13-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Entrevista con el gerente de la tienda",
            "dialogueContext": "John va a una entrevista en una tienda y le preguntan qué días puede trabajar.",
            "dialogueLines": [
              {
                "speaker": "店長 (Gerente)",
                "japanese": "ジョンさんは 一週間に 何日 働けますか。",
                "romaji": "Jon-san wa isshuukan ni nannichi hatarakemasu ka.",
                "spanish": "John, ¿cuántos días por semana puedes trabajar?",
                "audioText": "ジョンさんはいっしゅうかんになんにちはたらけますか"
              },
              {
                "speaker": "ジョン (John)",
                "japanese": "月曜日と 水曜日と 金曜日なら 働けます。",
                "romaji": "Getsuyoubi to suiyoubi to kinyoubi nara hatarakemasu.",
                "spanish": "Si es lunes, miércoles y viernes, sí puedo trabajar.",
                "audioText": "げつようびとすいようびときんようびならはたらけます"
              },
              {
                "speaker": "店長 (Gerente)",
                "japanese": "じゃあ、来週から 来てみてください。",
                "romaji": "Jaa, raishuu kara kite mite kudasai.",
                "spanish": "Entonces, por favor prueba venir a partir de la próxima semana.",
                "audioText": "じゃあ、らいしゅうからきてみてください"
              }
            ],
            "prompt": "¿Qué días de la semana puede trabajar John y cuándo empezará a probar?",
            "options": [
              {
                "id": "d13-2-a",
                "text": "Puede lunes, miércoles y viernes, y probará ir desde la próxima semana (来週から来てみてください)",
                "isCorrect": true
              },
              {
                "id": "d13-2-b",
                "text": "Solo sábados y domingos"
              },
              {
                "id": "d13-2-c",
                "text": "No fue aceptado en el trabajo"
              }
            ],
            "correctAnswerId": "d13-2-a",
            "explanation": "El gerente usa 〜てみてください (prueba venir) y John usa なら + 働けます (potencial)."
          }
        ]
      },
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
        "id": "l13-node-tb-1",
        "unitId": 13,
        "lessonNumber": 13,
        "title": "Libro de Teoría: Práctica de Verbos Potenciales (練習)",
        "japaneseTitle": "教科書・練習：可能形の変換と「〜ことができます」",
        "description": "Ejercicios del libro: transformar verbos U/Ru a potencial y comparar con 〜ことができます",
        "icon": "Flame",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-13-tb-1",
            "type": "multiple-choice",
            "prompt": "Del Libro de Teoría: ¿Cuál de estas dos oraciones significa exactamente lo mismo que 「漢字が読めます」?",
            "options": [
              {
                "id": "tb13-1",
                "text": "漢字を 読むことが できます (Forma diccionario + ことができます)",
                "isCorrect": true
              },
              {
                "id": "tb13-2",
                "text": "漢字を 読んだことが あります"
              },
              {
                "id": "tb13-3",
                "text": "漢字を 読むつもりです"
              }
            ],
            "correctAnswerId": "tb13-1",
            "explanation": "[Verbo diccionario] + ことができます es la versión más formal/larga equivalente al verbo potencial."
          },
          {
            "id": "ex-13-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Hoy no puedo salir porque tengo mucha tarea\":",
            "japaneseVoiceText": "きょうはしゅくだいがおおいしでかけられません",
            "wordBank": [
              "きょうは",
              "しゅくだいがおおいし",
              "でかけられません",
              "でかけます",
              "に"
            ],
            "correctSentence": [
              "きょうは",
              "しゅくだいがおおいし",
              "でかけられません"
            ],
            "explanation": "でかける (Ru-verb) ➔ でかけられません (no puedo salir)."
          },
          {
            "id": "ex-13-tb-3",
            "type": "match-pairs",
            "prompt": "Del Libro: Empareja los verbos con su forma potencial negativa (\"no poder...\"):",
            "pairs": [
              {
                "id": "p13n1",
                "left": "おきられない",
                "right": "No poder levantarse temprano"
              },
              {
                "id": "p13n2",
                "left": "かえない",
                "right": "No poder comprar (かう➔かえる)"
              },
              {
                "id": "p13n3",
                "left": "まてない",
                "right": "No poder esperar (まつ➔まてる)"
              },
              {
                "id": "p13n4",
                "left": "こられない",
                "right": "No poder venir (くる➔こられる)"
              }
            ],
            "explanation": "Todos los potenciales se niegan como Ru-verbs: 〜ない / 〜ません."
          }
        ]
      },
      {
        "id": "l13-node-tb-2",
        "unitId": 13,
        "lessonNumber": 13,
        "title": "Libro de Teoría: Lectura \"Experiencias en Japón\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：日本のおもしろい経験",
        "description": "Comprensión de lectura del capítulo 13: ensayos de estudiantes sobre comida y baños termales",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-13-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de Genki L13, un estudiante dice: 「最初は納豆がおいしそうじゃなかったけど、食べてみました。」 ¿Qué significa 「おいしそうじゃなかった」?",
            "options": [
              {
                "id": "tb13-2a",
                "text": "No se veía delicioso (negativo pasado de apariencia 〜そうです)",
                "isCorrect": true
              },
              {
                "id": "tb13-2b",
                "text": "Estaba muy delicioso"
              },
              {
                "id": "tb13-2c",
                "text": "Era demasiado caro"
              }
            ],
            "correctAnswerId": "tb13-2a",
            "explanation": "El negativo de 〜そうです (apariencia) es 〜そうじゃない / 〜そうじゃありません."
          },
          {
            "id": "ex-13-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Como parece que no tengo tiempo, hoy no iré\":",
            "japaneseVoiceText": "じかんがなさそうですからきょうはいきません",
            "wordBank": [
              "じかんが",
              "なさそうですから",
              "きょうは",
              "いきません",
              "ないそうです"
            ],
            "correctSentence": [
              "じかんが",
              "なさそうですから",
              "きょうは",
              "いきません"
            ],
            "explanation": "ない + そうです cambia a なさそうです (parece que no hay)."
          },
          {
            "id": "ex-13-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio de práctica del Libro L13:",
            "japaneseVoiceText": "このセーターはとてもあたたかそうですね。きてみてもいいですか。",
            "options": [
              {
                "id": "tb13-sw",
                "text": "Este suéter se ve muy abrigador. ¿Puedo probármelo?",
                "isCorrect": true
              },
              {
                "id": "tb13-sw2",
                "text": "Este suéter es muy caro. No lo compraré."
              },
              {
                "id": "tb13-sw3",
                "text": "Ya compré este suéter ayer."
              }
            ],
            "correctAnswerId": "tb13-sw",
            "explanation": "Atatakasou desu ne. Kite mite mo ii desu ka (〜てみる + 〜てもいいですか)."
          }
        ]
      },
      {
        "id": "l13-node-wb-1",
        "unitId": 13,
        "lessonNumber": 13,
        "title": "Workbook: Gramática de 〜そうです y 〜てみる",
        "japaneseTitle": "ワークブック：様態「〜そうです」と「〜てみる」の練習",
        "description": "Ejercicios escritos del Workbook L13 pág. 15-18: transformar adjetivos y verbos",
        "icon": "Sparkles",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-13-wb1-1",
            "type": "match-pairs",
            "prompt": "Del Workbook L13: Empareja cada palabra con su forma de apariencia 〜そうです:",
            "pairs": [
              {
                "id": "w13s1",
                "left": "いい (bueno - irregular)",
                "right": "よさそうです"
              },
              {
                "id": "w13s2",
                "left": "ない (no haber - irregular)",
                "right": "なさそうです"
              },
              {
                "id": "w13s3",
                "left": "たのしい (divertido - い-adj)",
                "right": "たのしそうです"
              },
              {
                "id": "w13s4",
                "left": "まじめ (serio - な-adj)",
                "right": "まじめそうです"
              }
            ],
            "explanation": "Tabla completa de transformación a 〜そうです del Workbook."
          },
          {
            "id": "ex-13-wb1-2",
            "type": "word-order",
            "prompt": "Del Workbook: Traduce \"Un día al mes voy al cine\":",
            "japaneseVoiceText": "いっかげつにいちどえいがをみにいきます",
            "wordBank": [
              "いっかげつに",
              "いちど",
              "えいがを",
              "みにいきます",
              "で"
            ],
            "correctSentence": [
              "いっかげつに",
              "いちど",
              "えいがを",
              "みにいきます"
            ],
            "explanation": "Ikkagetsu ni ichido (una vez al mes) eiga o mi ni ikimasu."
          },
          {
            "id": "ex-13-wb1-3",
            "type": "listening",
            "prompt": "Comprensión auditiva del Workbook L13:",
            "japaneseVoiceText": "あたらしいレストランにいってみました。りょうりもおいしいし、ねだんもやすいし、とてもよかったです。",
            "options": [
              {
                "id": "w13-res",
                "text": "Fue a probar el nuevo restaurante; la comida es rica y además barata, así que estuvo muy bien.",
                "isCorrect": true
              },
              {
                "id": "w13-res2",
                "text": "El restaurante nuevo aún no ha abierto."
              },
              {
                "id": "w13-res3",
                "text": "La comida era rica pero demasiado cara."
              }
            ],
            "correctAnswerId": "w13-res",
            "explanation": "Combina 〜てみました con 〜し、〜し."
          }
        ]
      },
      {
        "id": "l13-node-wb-grammar",
        "unitId": 13,
        "lessonNumber": 13,
        "title": "Workbook L13: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第13課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 13: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-13-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 13): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-13-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-13-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-13-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-13-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-13-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L13: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-13-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L13):",
            "pairs": [
              {
                "id": "wbp-13-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-13-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-13-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-13-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l13-node-wb-listening",
        "unitId": 13,
        "lessonNumber": 13,
        "title": "Workbook L13: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第13課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 13: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-13-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L13 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-13-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-13-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-13-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-13-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-13-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L13):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-13-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-13-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-13-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-13-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-13-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L13: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l14-node-0",
        "unitId": 14,
        "lessonNumber": 14,
        "title": "Lectura Inicial: Día de San Valentín (会話)",
        "japaneseTitle": "第14課 会話：バレンタインデー",
        "description": "Lee y escucha el diálogo inicial de la Lección 14: Michiko y Mary hablan sobre los chocolates de San Valentín y el regalo para Takeshi",
        "icon": "BookOpen",
        "color": "red",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-14-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Consejos para el regalo de Takeshi",
            "dialogueContext": "Se acerca el cumpleaños de Takeshi y Mary le pide consejo a Michiko.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "来週、たけしさんの 誕生日なんです。何を あげたら いいでしょうか。",
                "romaji": "Raishuu, Takeshi-san no tanjoubi nan desu. Nani o agetara ii deshou ka.",
                "spanish": "Es que la próxima semana es el cumpleaños de Takeshi. ¿Qué sería bueno regalarle?",
                "audioText": "らいしゅう、たけしさんのたんじょうびなんです。なにをあげたらいいでしょうか"
              },
              {
                "speaker": "みちこ (Michiko)",
                "japanese": "たけしさんは 冬物の セーターが ほしいと 言っていましたよ。セーターを あげたら どうですか。",
                "romaji": "Takeshi-san wa fuyumono no seetaa ga hoshii to itte imashita yo. Seetaa o agetara dou desu ka.",
                "spanish": "Takeshi dijo que quería un suéter de invierno. ¿Qué tal si le regalas un suéter?",
                "audioText": "たけしさんはふゆもののセーターがほしいといっていましたよ。セーターをあげたらどうですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "そうですね。でも、サイズが わからないかもしれません。マフラーに します。",
                "romaji": "Sou desu ne. Demo, saizu ga wakaranai kamoshiremasen. Mafuraa ni shimasu.",
                "spanish": "Tienes razón. Pero tal vez no sepa su talla. Me decidiré por una bufanda.",
                "audioText": "そうですね。でも、サイズがわからないかもしれません。マフラーにします"
              }
            ],
            "prompt": "Según el Diálogo I, ¿por qué Mary decide regalarle una bufanda (マフラー) en vez de un suéter?",
            "options": [
              {
                "id": "d14-1-a",
                "text": "Porque tal vez no sepa la talla de Takeshi (サイズがわからないかもしれません)",
                "isCorrect": true
              },
              {
                "id": "d14-1-b",
                "text": "Porque a Takeshi no le gustan los suéteres"
              },
              {
                "id": "d14-1-c",
                "text": "Porque en Japón siempre hace calor"
              }
            ],
            "correctAnswerId": "d14-1-a",
            "explanation": "Usa 〜がほしい (querer un objeto), 〜たらどうですか (sugerencia) y 〜かもしれません (quizás)."
          },
          {
            "id": "ex-14-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: El 14 de febrero en Japón",
            "dialogueContext": "Takeshi y Robert cuentan cuántos chocolates recibieron.",
            "dialogueLines": [
              {
                "speaker": "ロバート (Robert)",
                "japanese": "たけしさん、バレンタインデーに チョコレートを もらいましたか。",
                "romaji": "Takeshi-san, Barentain-dee ni chokoreeto o moraimashita ka.",
                "spanish": "Takeshi, ¿recibiste chocolates en San Valentín?",
                "audioText": "たけしさん、バレンタインデーにチョコレートをもらいましたか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "はい、メアリーさんが チョコレートを くれました。母も 一個 くれましたよ。",
                "romaji": "Hai, Mearii-san ga chokoreeto o kuremashita. Haha mo ikko kuremashita yo.",
                "spanish": "Sí, Mary me dio chocolates. ¡Mi mamá también me dio uno!",
                "audioText": "はい、メアリーさんがチョコレートをくれました。ははもいっこくれましたよ"
              }
            ],
            "prompt": "¿De quiénes recibió chocolates Takeshi?",
            "options": [
              {
                "id": "d14-2-a",
                "text": "De Mary y también uno de su mamá (母も一個くれました)",
                "isCorrect": true
              },
              {
                "id": "d14-2-b",
                "text": "No recibió chocolates de nadie"
              },
              {
                "id": "d14-2-c",
                "text": "De cinco compañeras de su trabajo"
              }
            ],
            "correctAnswerId": "d14-2-a",
            "explanation": "Tanto Mary como su madre le dieron chocolates a él (くれました)."
          }
        ]
      },
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
                "text": "Cría / tiene 3 gatos.",
                "isCorrect": true
              },
              {
                "id": "l14-cat1",
                "text": "Tiene 1 gato."
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
                "text": "¡Leyó nada menos que 5 libros esta semana!",
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
        "id": "l14-node-tb-1",
        "unitId": 14,
        "lessonNumber": 14,
        "title": "Libro de Teoría: Práctica de Contadores (助数詞)",
        "japaneseTitle": "教科書・練習：助数詞と「〜も / 〜しか」のドリル",
        "description": "Ejercicios del libro de texto: cambios fonéticos al contar con 本, 匹, 冊 y 個",
        "icon": "ListFilter",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-14-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría: Empareja las lecturas con cambio fonético de los contadores:",
            "pairs": [
              {
                "id": "c14p1",
                "left": "1 objeto largo (一本)",
                "right": "いっぽん (ippon)"
              },
              {
                "id": "c14p2",
                "left": "3 objetos largos (三本)",
                "right": "さんぼん (sanbon)"
              },
              {
                "id": "c14p3",
                "left": "6 animales pequeños (六匹)",
                "right": "ろっぴき (roppiki)"
              },
              {
                "id": "c14p4",
                "left": "8 libros (八冊)",
                "right": "はっさつ (hassatsu)"
              }
            ],
            "explanation": "Con 1, 6, 8 y 10 suele ocurrir geminación (っ + p/s/k), y con 3 sonorización (b)."
          },
          {
            "id": "ex-14-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Mi profesor me regaló un diccionario\":",
            "japaneseVoiceText": "せんせいがわたしにじしょをくれました",
            "wordBank": [
              "せんせいが",
              "わたしに",
              "じしょを",
              "くれました",
              "あげました"
            ],
            "correctSentence": [
              "せんせいが",
              "わたしに",
              "じしょを",
              "くれました"
            ],
            "explanation": "Sensei ga watashi ni jisho o kuremashita."
          },
          {
            "id": "ex-14-tb-3",
            "type": "multiple-choice",
            "prompt": "Cuando preguntas \"¿Qué quiere Mary para su cumpleaños?\" hablando de una TERCERA persona en presente, ¿cómo se usa ほしい?",
            "options": [
              {
                "id": "hoshi-3p",
                "text": "Se usa ほしがっています (o 〜がほしいと言っています) porque ほしい directo expresa sentimientos en 1.ª/2.ª persona",
                "isCorrect": true
              },
              {
                "id": "hoshi-3p2",
                "text": "ほしい nunca se puede usar con objetos"
              },
              {
                "id": "hoshi-3p3",
                "text": "Se usa たいです para objetos"
              }
            ],
            "correctAnswerId": "hoshi-3p",
            "explanation": "Al igual que 〜たい, para terceras personas se suele usar ほしがっています o citar con と言っています."
          }
        ]
      },
      {
        "id": "l14-node-tb-2",
        "unitId": 14,
        "lessonNumber": 14,
        "title": "Libro de Teoría: Lectura \"Columna de Consejos\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：悩みの相談室",
        "description": "Comprensión de lectura del capítulo 14: cartas pidiendo consejo sobre relaciones y trabajo",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-14-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la columna de consejos de Genki L14, el consejero responde: 「もっと彼女と話したらどうですか。」 ¿Qué le está recomendando?",
            "options": [
              {
                "id": "adv14-1",
                "text": "¿Qué tal si hablas más con ella / con tu novia?",
                "isCorrect": true
              },
              {
                "id": "adv14-2",
                "text": "No hables más con ella"
              },
              {
                "id": "adv14-3",
                "text": "Ya hablaste demasiado con ella"
              }
            ],
            "correctAnswerId": "adv14-1",
            "explanation": "話したらどうですか = ¿Por qué no hablas / Qué tal si hablas...?"
          },
          {
            "id": "ex-14-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Yo le di flores a mi madre en su cumpleaños\":",
            "japaneseVoiceText": "わたしはたんじょうびにははにはなをあげました",
            "wordBank": [
              "わたしは",
              "たんじょうびに",
              "ははに",
              "はなを",
              "あげました",
              "くれました"
            ],
            "correctSentence": [
              "わたしは",
              "たんじょうびに",
              "ははに",
              "はなを",
              "あげました"
            ],
            "explanation": "Cuando YO doy algo a otra persona, siempre uso あげる: haha ni hana o agemashita."
          },
          {
            "id": "ex-14-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L14:",
            "japaneseVoiceText": "かれはおかねもちかもしれません。くるまをさんだいももっていますよ。",
            "options": [
              {
                "id": "w14-rich",
                "text": "Tal vez él sea rico. ¡Tiene nada menos que 3 automóviles!",
                "isCorrect": true
              },
              {
                "id": "w14-rich2",
                "text": "Él solo tiene una bicicleta."
              },
              {
                "id": "w14-rich3",
                "text": "Él quiere comprar un auto usado."
              }
            ],
            "correctAnswerId": "w14-rich",
            "explanation": "Okane-mochi kamoshiremasen. Kuruma o san-dai mo motte imasu yo."
          }
        ]
      },
      {
        "id": "l14-node-wb-grammar",
        "unitId": 14,
        "lessonNumber": 14,
        "title": "Workbook L14: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第14課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 14: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-14-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 14): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-14-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-14-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-14-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-14-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-14-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L14: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-14-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L14):",
            "pairs": [
              {
                "id": "wbp-14-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-14-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-14-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-14-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l14-node-wb-listening",
        "unitId": 14,
        "lessonNumber": 14,
        "title": "Workbook L14: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第14課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 14: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-14-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L14 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-14-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-14-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-14-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-14-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-14-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L14):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-14-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-14-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-14-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-14-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-14-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L14: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l15-node-0",
        "unitId": 15,
        "lessonNumber": 15,
        "title": "Lectura Inicial: Un Viaje a Nagano (会話)",
        "japaneseTitle": "第15課 会話：長野への旅行",
        "description": "Lee y escucha el diálogo inicial de la Lección 15: Takeshi, Mary y Sue organizan un viaje a las aguas termales de Nagano",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-15-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: ¡Vayamos de viaje juntos!",
            "dialogueContext": "Takeshi propone a Mary y Sue ir a esquiar y a un onsen en Nagano.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "今度の 休みに みんなで 長野へ 行こうよ。",
                "romaji": "Kondo no yasumi ni minna de Nagano e ikou yo.",
                "spanish": "En el próximo descanso, ¡vayamos todos a Nagano!",
                "audioText": "こんどのやすみにみんなでながのへいこうよ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "いいね！ わたし、温泉が ある 旅館に 泊まりたいな。",
                "romaji": "Ii ne! Watashi, onsen ga aru ryokan ni tomaritai na.",
                "spanish": "¡Qué bien! Yo quiero hospedarme en una posada que tenga aguas termales.",
                "audioText": "いいね！わたし、おんせんがあるりょかんにとまりたいな"
              },
              {
                "speaker": "スー (Sue)",
                "japanese": "じゃあ、インターネットで 安い 旅館を さがしておくね。",
                "romaji": "Jaa, intaanetto de yasui ryokan o sagashite oku ne.",
                "spanish": "Entonces, buscaré por adelantado una posada barata en internet.",
                "audioText": "じゃあ、インターネットでやすいりょかんをさがしておくね"
              }
            ],
            "prompt": "Según el Diálogo I, ¿en qué tipo de lugar quiere hospedarse Mary y qué hará Sue de antemano?",
            "options": [
              {
                "id": "d15-1-a",
                "text": "Mary quiere una posada que tenga aguas termales (温泉がある旅館) y Sue buscará una por adelantado (さがしておく)",
                "isCorrect": true
              },
              {
                "id": "d15-1-b",
                "text": "Mary quiere acampar en la montaña y Sue comprará comida"
              },
              {
                "id": "d15-1-c",
                "text": "Deciden cancelar el viaje"
              }
            ],
            "correctAnswerId": "d15-1-a",
            "explanation": "Usa forma volitiva (行こうよ), cláusula relativa (温泉がある旅館) y preparación (さがしておく)."
          },
          {
            "id": "ex-15-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Repartiendo las tareas antes del viaje",
            "dialogueContext": "Se dividen qué preparará cada quien antes de salir.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ぼくは 駅の みどりの窓口で 新幹線の 切符を 買っておくよ。",
                "romaji": "Boku wa eki no Midori no Madoguchi de shinkansen no kippu o katte oku yo.",
                "spanish": "Yo dejaré comprados los boletos del tren bala en la taquilla de la estación.",
                "audioText": "ぼくはえきのみどりのまどぐちでしんかんせんのきっぷをかっておくよ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ありがとう。わたしは お金を おろしておくね。",
                "romaji": "Arigatou. Watashi wa okane o oroshite oku ne.",
                "spanish": "Gracias. Yo sacaré dinero del cajero por adelantado.",
                "audioText": "ありがとう。わたしはおかねをおろしておくね"
              }
            ],
            "prompt": "¿Qué preparativo hará Mary antes del viaje?",
            "options": [
              {
                "id": "d15-2-a",
                "text": "Retirará dinero del banco/cajero por adelantado (お金をおろしておく)",
                "isCorrect": true
              },
              {
                "id": "d15-2-b",
                "text": "Comprará un auto nuevo"
              },
              {
                "id": "d15-2-c",
                "text": "Venderá sus boletos de tren"
              }
            ],
            "correctAnswerId": "d15-2-a",
            "explanation": "お金をおろす significa \"sacar / retirar dinero del banco\"."
          }
        ]
      },
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
        "id": "l15-node-tb-1",
        "unitId": 15,
        "lessonNumber": 15,
        "title": "Libro de Teoría: Ofrecimientos con Volitiva (〜ようか)",
        "japaneseTitle": "教科書・練習：申し出の「〜ようか」と計画「〜ようと思っています」",
        "description": "Práctica del libro: ofrecer ayuda a amigos (\"¿Te ayudo?: 手伝おうか\") y planes personales",
        "icon": "Heart",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-15-tb-1",
            "type": "multiple-choice",
            "prompt": "¿Cuál es el equivalente casual entre amigos de 「手伝いましょうか」 (\"¿Te ayudo?\")?",
            "options": [
              {
                "id": "vol-off",
                "text": "てつだおうか (Tetsudaou ka - Forma Volitiva + か)",
                "isCorrect": true
              },
              {
                "id": "vol-off2",
                "text": "てつだえるか"
              },
              {
                "id": "vol-off3",
                "text": "てつだったか"
              }
            ],
            "correctAnswerId": "vol-off",
            "explanation": "Forma Volitiva + か sirve para ofrecer ayuda o sugerir algo en tono casual."
          },
          {
            "id": "ex-15-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Estoy pensando en no salir este fin de semana\":",
            "japaneseVoiceText": "こんしゅうまつはでかけないとおもっています",
            "wordBank": [
              "こんしゅうまつは",
              "でかけない",
              "とおもっています",
              "でかけよう",
              "に"
            ],
            "correctSentence": [
              "こんしゅうまつは",
              "でかけない",
              "とおもっています"
            ],
            "explanation": "Con planes afirmativos se usa Volitiva + と思っています; en negativo se usa Forma Nai + と思っています."
          },
          {
            "id": "ex-15-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja el vocabulario de preparativos de Genki L15:",
            "pairs": [
              {
                "id": "v15p1",
                "left": "おかねを おろす",
                "right": "Sacar / Retirar dinero del cajero"
              },
              {
                "id": "v15p2",
                "left": "よていを たてる",
                "right": "Hacer un plan / itinerario"
              },
              {
                "id": "v15p3",
                "left": "ほけんに はいる",
                "right": "Contratar / Entrar a un seguro"
              },
              {
                "id": "v15p4",
                "left": "じゅんびする (準備する)",
                "right": "Preparar / Hacer preparativos"
              }
            ],
            "explanation": "Colocaciones verbales clave de la Lección 15."
          }
        ]
      },
      {
        "id": "l15-node-tb-2",
        "unitId": 15,
        "lessonNumber": 15,
        "title": "Libro de Teoría: Lectura \"Mi Lugar Favorito\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：わたしの好きな所",
        "description": "Comprensión de lectura del capítulo 15: ensayos con cláusulas relativas sobre lugares de Japón",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-15-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de Genki L15: 「京都は古いお寺がたくさんある町です。」 ¿Qué califica al sustantivo 町 (ciudad)?",
            "options": [
              {
                "id": "rel15-1",
                "text": "古いお寺がたくさんある (\"que tiene muchos templos antiguos\")",
                "isCorrect": true
              },
              {
                "id": "rel15-2",
                "text": "京都は (\"Kioto\")"
              },
              {
                "id": "rel15-3",
                "text": "です (\"es\")"
              }
            ],
            "correctAnswerId": "rel15-1",
            "explanation": "[古いお寺がたくさんある] 町 = una ciudad donde hay muchos templos antiguos."
          },
          {
            "id": "ex-15-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Leí el libro que me prestó mi amigo\":",
            "japaneseVoiceText": "ともだちがかしてくれたほんをよみました",
            "wordBank": [
              "ともだちが",
              "かしてくれた",
              "ほんを",
              "よみました",
              "ともだちは"
            ],
            "correctSentence": [
              "ともだちが",
              "かしてくれた",
              "ほんを",
              "よみました"
            ],
            "explanation": "[Tomodachi ga kashite kureta] hon o yomimashita."
          },
          {
            "id": "ex-15-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L15:",
            "japaneseVoiceText": "あしたパーティーがありますから、きょうへやをそうじしておきます",
            "options": [
              {
                "id": "w15-cln",
                "text": "Como mañana hay fiesta, hoy dejaré limpia la habitación por adelantado.",
                "isCorrect": true
              },
              {
                "id": "w15-cln2",
                "text": "Limpiaré la habitación después de la fiesta."
              },
              {
                "id": "w15-cln3",
                "text": "Ayer no pude limpiar la habitación."
              }
            ],
            "correctAnswerId": "w15-cln",
            "explanation": "Kyou heya o souji shite okimasu."
          }
        ]
      },
      {
        "id": "l15-node-wb-grammar",
        "unitId": 15,
        "lessonNumber": 15,
        "title": "Workbook L15: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第15課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 15: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-15-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 15): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-15-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-15-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-15-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-15-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-15-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L15: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-15-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L15):",
            "pairs": [
              {
                "id": "wbp-15-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-15-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-15-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-15-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l15-node-wb-listening",
        "unitId": 15,
        "lessonNumber": 15,
        "title": "Workbook L15: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第15課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 15: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-15-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L15 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-15-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-15-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-15-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-15-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-15-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L15):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-15-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-15-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-15-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-15-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-15-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L15: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l16-node-0",
        "unitId": 16,
        "lessonNumber": 16,
        "title": "Lectura Inicial: Objetos Perdidos (会話)",
        "japaneseTitle": "第16課 会話：忘れ物",
        "description": "Lee y escucha el diálogo inicial de la Lección 16: Mary pide una carta de recomendación al profesor y olvida su carpeta en el tren",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-16-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Pidiendo una carta de recomendación para una beca",
            "dialogueContext": "Mary visita la oficina del profesor Yamashita.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "先生、すみません。奨学金を もらいたいんですが、推薦状を 書いていただけませんか。",
                "romaji": "Sensei, sumimasen. Shougakukin o moraitai n desu ga, suisenjou o kaite itadakemasen ka.",
                "spanish": "Profesor, disculpe. Es que quiero recibir una beca; ¿sería tan amable de escribirme una carta de recomendación?",
                "audioText": "せんせい、すみません。しょうがくきんをもらいたいんですが、すいせんじょうをかいていただけませんか"
              },
              {
                "speaker": "山下先生 (Prof. Yamashita)",
                "japanese": "いいですよ。締め切りは いつですか。",
                "romaji": "Ii desu yo. Shimekiri wa itsu desu ka.",
                "spanish": "Claro que sí. ¿Cuándo es la fecha límite?",
                "audioText": "いいですよ。しめきりはいつですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "来週の 木曜日です。",
                "romaji": "Raishuu no mokuyoubi desu.",
                "spanish": "Es el jueves de la próxima semana.",
                "audioText": "らいしゅうのもくようびです"
              },
              {
                "speaker": "山下先生 (Prof. Yamashita)",
                "japanese": "わかりました。奨学金が もらえると いいですね。",
                "romaji": "Wakarimashita. Shougakukin ga moraeru to ii desu ne.",
                "spanish": "Entendido. ¡Ojalá que puedas recibir la beca!",
                "audioText": "わかりました。しょうがくきんがもらえるといいですね"
              }
            ],
            "prompt": "Según el Diálogo I, ¿para qué necesita Mary la carta de recomendación y cuándo es la fecha límite?",
            "options": [
              {
                "id": "d16-1-a",
                "text": "Para solicitar una beca (奨学金), y la fecha límite es el jueves de la próxima semana",
                "isCorrect": true
              },
              {
                "id": "d16-1-b",
                "text": "Para cambiar de universidad mañana mismo"
              },
              {
                "id": "d16-1-c",
                "text": "Para alquilar un departamento"
              }
            ],
            "correctAnswerId": "d16-1-a",
            "explanation": "Mary pide cortésmente con 〜ていただけませんか y el profesor le desea éxito con もらえるといいですね."
          },
          {
            "id": "ex-16-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: ¡Olvidé mis documentos en el tren!",
            "dialogueContext": "Mary llega tarde a su cita con Takeshi porque perdió su carpeta.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "たけしさん、遅れて すみませんでした。",
                "romaji": "Takeshi-san, okurete sumimasen deshita.",
                "spanish": "Takeshi, perdón por haber llegado tarde.",
                "audioText": "たけしさん、おくれてすみませんでした"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "どうしたんですか。",
                "romaji": "Doushita n desu ka.",
                "spanish": "¿Qué te pasó?",
                "audioText": "どうしたんですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "電車を 降りる 時、かばんを 忘れてしまったんです。でも、駅員さんが さがしてくれました。",
                "romaji": "Densha o oriru toki, kaban o wasurete shimatta n desu. Demo, ekiin-san ga sagashite kuremashita.",
                "spanish": "Es que al bajar del tren olvidé mi bolso. Pero el empleado de la estación me hizo el favor de buscarlo.",
                "audioText": "でんしゃをおりるとき、かばんをわすれてしまったんです。でも、えきいんさんがさがしてくれました"
              }
            ],
            "prompt": "¿Cuándo se dio cuenta o cuándo olvidó Mary su bolso y quién la ayudó?",
            "options": [
              {
                "id": "d16-2-a",
                "text": "Al bajar del tren (電車を降りる時), y el empleado de la estación lo buscó por ella (さがしてくれました)",
                "isCorrect": true
              },
              {
                "id": "d16-2-b",
                "text": "En la cafetería, y el profesor lo encontró"
              },
              {
                "id": "d16-2-c",
                "text": "En el autobús, y todavía no aparece"
              }
            ],
            "correctAnswerId": "d16-2-a",
            "explanation": "Usa 〜時 (電車を降りる時), disculpa con 遅れてすみませんでした y favor con さがしてくれました."
          }
        ]
      },
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
                "text": "みつかるといいですね",
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
        "id": "l16-node-tb-1",
        "unitId": 16,
        "lessonNumber": 16,
        "title": "Libro de Teoría: Práctica de 〜時 (Presente vs Pasado)",
        "japaneseTitle": "教科書・練習：「〜時」の現在形と過去形の使い分け",
        "description": "Ejercicios del libro de texto: distinguir acciones antes o después del evento con 時",
        "icon": "Clock",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-16-tb-1",
            "type": "multiple-choice",
            "prompt": "En Japón te quitas los zapatos ANTES de entrar a la casa. ¿Cómo se dice \"Cuando entro a casa, me quito los zapatos\"?",
            "options": [
              {
                "id": "tb16-1",
                "text": "うちに 入る時、靴を 脱ぎます (Verbo diccionario 入る + 時)",
                "isCorrect": true
              },
              {
                "id": "tb16-2",
                "text": "うちに 入った時、靴を 脱ぎます"
              },
              {
                "id": "tb16-3",
                "text": "うちに 入って時、靴を 脱ぎます"
              }
            ],
            "correctAnswerId": "tb16-1",
            "explanation": "Como te quitas los zapatos en el genkan ANTES de pisar adentro, se usa presente diccionario: 家に入る時."
          },
          {
            "id": "ex-16-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Cuando me duele la cabeza, tomo esta medicina\":",
            "japaneseVoiceText": "あたまがいたいときこのくすりをのみます",
            "wordBank": [
              "あたまが",
              "いたいとき",
              "このくすりを",
              "のみます",
              "いたいのとき"
            ],
            "correctSentence": [
              "あたまが",
              "いたいとき",
              "このくすりを",
              "のみます"
            ],
            "explanation": "Atama ga itai toki, kono kusuri o nomimasu."
          },
          {
            "id": "ex-16-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja cada situación con el favor correspondiente (L16):",
            "pairs": [
              {
                "id": "f16-1",
                "left": "わたしは妹に本を読んであげた",
                "right": "Le leí un libro a mi hermanita"
              },
              {
                "id": "f16-2",
                "left": "友だちが私にお金を貸してくれた",
                "right": "Mi amigo me prestó dinero a mí"
              },
              {
                "id": "f16-3",
                "left": "私は友だちに駅まで送ってもらった",
                "right": "Mi amigo me llevó hasta la estación"
              }
            ],
            "explanation": "Contraste de perspectiva entre 〜てあげる, 〜てくれる y 〜てもらう."
          }
        ]
      },
      {
        "id": "l16-node-tb-2",
        "unitId": 16,
        "lessonNumber": 16,
        "title": "Libro de Teoría: Lectura \"El Cuento de Momotaro\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：桃太郎（ももたろう）",
        "description": "Comprensión de lectura tradicional japonesa: Momotaro les da dango a sus compañeros",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-16-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de Genki L16 sobre el cuento tradicional japonés: ¿Qué tres animales acompañan a Momotaro después de que él les da きびだんご (dumplings)?",
            "options": [
              {
                "id": "momo-1",
                "text": "Un perro (いぬ), un mono (さる) y un faisán (きじ)",
                "isCorrect": true
              },
              {
                "id": "momo-2",
                "text": "Un gato, un caballo y un ratón"
              },
              {
                "id": "momo-3",
                "text": "Un oso, un zorro y un conejo"
              }
            ],
            "correctAnswerId": "momo-1",
            "explanation": "En el cuento clásico de Momotaro, el perro, el mono y el faisán reciben きびだんご y lo ayudan a vencer a los ogros (おに)."
          },
          {
            "id": "ex-16-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Los abuelos le hicieron ropa a Momotaro\":",
            "japaneseVoiceText": "おじいさんとおばあさんはももたろうにふくをつくってあげました",
            "wordBank": [
              "おじいさんとおばあさんは",
              "ももたろうに",
              "ふくを",
              "つくってあげました",
              "つくってもらいました"
            ],
            "correctSentence": [
              "おじいさんとおばあさんは",
              "ももたろうに",
              "ふくを",
              "つくってあげました"
            ],
            "explanation": "Cuando un tercero hace un favor a otro tercero, se usa 〜てあげました."
          },
          {
            "id": "ex-16-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L16:",
            "japaneseVoiceText": "みちにまよったとき、しんせつなひとがちずをかいてくれました",
            "options": [
              {
                "id": "w16-map",
                "text": "Cuando me perdí en el camino, una persona amable me dibujó un mapa.",
                "isCorrect": true
              },
              {
                "id": "w16-map2",
                "text": "Compré un mapa antes de salir de viaje."
              },
              {
                "id": "w16-map3",
                "text": "Le dibujé un mapa a un turista extranjero."
              }
            ],
            "correctAnswerId": "w16-map",
            "explanation": "Michi ni mayotta toki, shinsetsu na hito ga chizu o kaite kuremashita."
          }
        ]
      },
      {
        "id": "l16-node-wb-grammar",
        "unitId": 16,
        "lessonNumber": 16,
        "title": "Workbook L16: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第16課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 16: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-16-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 16): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-16-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-16-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-16-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-16-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-16-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L16: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-16-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L16):",
            "pairs": [
              {
                "id": "wbp-16-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-16-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-16-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-16-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l16-node-wb-listening",
        "unitId": 16,
        "lessonNumber": 16,
        "title": "Workbook L16: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第16課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 16: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-16-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L16 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-16-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-16-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-16-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-16-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-16-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L16):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-16-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-16-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-16-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-16-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-16-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L16: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l17-node-0",
        "unitId": 17,
        "lessonNumber": 17,
        "title": "Lectura Inicial: Quejas y Chismes (会話)",
        "japaneseTitle": "第17課 会話：ぐちと噂話",
        "description": "Lee y escucha el diálogo inicial de la Lección 17: John y Takeshi comentan rumores y qué harían si tuvieran más tiempo libre",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-17-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Noticias sorprendentes",
            "dialogueContext": "Michiko les cuenta a Mary y Takeshi una noticia que acaba de oír.",
            "dialogueLines": [
              {
                "speaker": "みちこ (Michiko)",
                "japanese": "ねえ、聞いた？ 山下先生、来月 結婚するそうよ。",
                "romaji": "Nee, kiita? Yamashita-sensei, raigetsu kekkon suru sou yo.",
                "spanish": "Oigan, ¿escucharon? Dicen que el profesor Yamashita se casa el próximo mes.",
                "audioText": "ねえ、きいた？やましたせんせい、らいげつけっこんするそうよ"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "えっ、ほんとう？ 奥さんに なる 人は どんな 人？",
                "romaji": "E, hontou? Okusan ni naru hito wa donna hito?",
                "spanish": "¿Eh, de verdad? ¿Cómo es la persona que será su esposa?",
                "audioText": "えっ、ほんとう？おくさんになるひとはどんなひと？"
              },
              {
                "speaker": "みちこ (Michiko)",
                "japanese": "すごく きれいで、わかい 人だって。",
                "romaji": "Sugoku kirei de, wakai hito datte.",
                "spanish": "Dicen que es una persona muy guapa y joven.",
                "audioText": "すごくきれいで、わかいひとだって"
              }
            ],
            "prompt": "Según lo que escuchó Michiko en el Diálogo I, ¿qué noticia hay sobre el profesor Yamashita?",
            "options": [
              {
                "id": "d17-1-a",
                "text": "Dicen que se casa el próximo mes (結婚するそうよ) con alguien muy guapa y joven",
                "isCorrect": true
              },
              {
                "id": "d17-1-b",
                "text": "Dicen que se jubila la próxima semana"
              },
              {
                "id": "d17-1-c",
                "text": "Dicen que se mudará a otro país"
              }
            ],
            "correctAnswerId": "d17-1-a",
            "explanation": "Usa 〜そうです / 〜そうよ y 〜だって para reportar rumores."
          },
          {
            "id": "ex-17-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Quejas del trabajo",
            "dialogueContext": "Takeshi llega agotado de su trabajo y platica con John.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ああ、つかれた。毎日 忙しくて、ぜんぜん 暇が ないよ。",
                "romaji": "Aa, tsukareta. Mainichi isogashikute, zenzen hima ga nai yo.",
                "spanish": "Ay, qué cansado. Todos los días estoy ocupado y no tengo nada de tiempo libre.",
                "audioText": "ああ、つかれた。まいにちいそがしくて、ぜんぜんひまがないよ"
              },
              {
                "speaker": "ジョン (John)",
                "japanese": "あしたは 祝日だから、働かなくてもいいでしょう？",
                "romaji": "Ashita wa shukujitsu dakara, hatarakanakute mo ii deshou?",
                "spanish": "Como mañana es día festivo, no tienes que trabajar, ¿verdad?",
                "audioText": "あしたはしゅくじつだから、はたらかなくてもいいでしょう？"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "もし 暇だったら、一日中 寝たいよ。",
                "romaji": "Moshi hima dattara, ichinichijuu netai yo.",
                "spanish": "Si estuviera libre, querría dormir todo el día.",
                "audioText": "もしひまだったら、いちにちじゅうねたいよ"
              }
            ],
            "prompt": "¿Qué querría hacer Takeshi si tuviera el día libre (もし暇だったら)?",
            "options": [
              {
                "id": "d17-2-a",
                "text": "Dormir durante todo el día (一日中寝たい)",
                "isCorrect": true
              },
              {
                "id": "d17-2-b",
                "text": "Salir a correr al parque"
              },
              {
                "id": "d17-2-c",
                "text": "Trabajar horas extra"
              }
            ],
            "correctAnswerId": "d17-2-a",
            "explanation": "Usa 〜なくてもいい (no tener que trabajar) y condicional もし暇だったら (si estuviera libre)."
          }
        ]
      },
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
                "text": "はらわなくてもいいです",
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
        "id": "l17-node-tb-1",
        "unitId": 17,
        "lessonNumber": 17,
        "title": "Libro de Teoría: Práctica de 〜みたいです (Semejanza y Conjetura)",
        "japaneseTitle": "教科書・練習：「〜みたいです」の活用と使い方",
        "description": "Ejercicios del libro: \"parece como un niño\" (子どもみたいです) y \"parece que llovió\" (降ったみたいです)",
        "icon": "Sparkles",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-17-tb-1",
            "type": "multiple-choice",
            "prompt": "Ves que la calle está mojada y deduces: \"Parece que anoche llovió\". ¿Cómo lo dices con 〜みたいです?",
            "options": [
              {
                "id": "mitai-1",
                "text": "ゆうべ 雨が 降ったみたいです (Oración corta + みたいです)",
                "isCorrect": true
              },
              {
                "id": "mitai-2",
                "text": "ゆうべ 雨が 降りそうです"
              },
              {
                "id": "mitai-3",
                "text": "ゆうべ 雨が 降ったたら"
              }
            ],
            "correctAnswerId": "mitai-1",
            "explanation": "〜みたいです expresa una conjetura basada en evidencia indirecta (como ver el piso mojado) o semejanza."
          },
          {
            "id": "ex-17-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Hoy hace calor; parece como si fuera verano\":",
            "japaneseVoiceText": "きょうはあついです。なつみたいです。",
            "wordBank": [
              "きょうはあついです。",
              "なつ",
              "みたいです。",
              "なつだ",
              "そうです"
            ],
            "correctSentence": [
              "きょうはあついです。",
              "なつ",
              "みたいです。"
            ],
            "explanation": "Con sustantivos y な-adjetivos NO se pone だ antes de みたいです: 夏みたいです."
          },
          {
            "id": "ex-17-tb-3",
            "type": "match-pairs",
            "prompt": "Compara los tres usos de \"parece / dicen\" vistos hasta la Lección 17:",
            "pairs": [
              {
                "id": "m17-1",
                "left": "雨が降りそうです (L13)",
                "right": "Está a punto de llover (veo nubes negras)"
              },
              {
                "id": "m17-2",
                "left": "雨が降るそうです (L17)",
                "right": "Escuché que lloverá (lo vi en las noticias)"
              },
              {
                "id": "m17-3",
                "left": "雨が降ったみたいです (L17)",
                "right": "Parece que llovió (el suelo está mojado)"
              }
            ],
            "explanation": "Distinción clave de examen N4 entre Apariencia, Reporte y Conjetura con みたい."
          }
        ]
      },
      {
        "id": "l17-node-tb-2",
        "unitId": 17,
        "lessonNumber": 17,
        "title": "Libro de Teoría: Lectura \"Biografía de Yoko Ono\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：オノ・ヨーコ（Biografía y Cronología）",
        "description": "Comprensión de lectura del capítulo 17: eventos cronológicos con 〜てから y 〜前に",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-17-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura biográfica de Genki L17 se usa frecuentemente 「〜てから」. ¿Qué indica 「大学を卒業してから、結婚しました」?",
            "options": [
              {
                "id": "bio17-1",
                "text": "Después de haberse graduado de la universidad, se casó",
                "isCorrect": true
              },
              {
                "id": "bio17-2",
                "text": "Antes de graduarse de la universidad, se casó"
              },
              {
                "id": "bio17-3",
                "text": "Como no se graduó, no se casó"
              }
            ],
            "correctAnswerId": "bio17-1",
            "explanation": "Forma Te + から significa \"después de haber hecho X\"."
          },
          {
            "id": "ex-17-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Si llegas tarde, por favor llámame\":",
            "japaneseVoiceText": "おそくなったらでんわしてください",
            "wordBank": [
              "おそくなったら",
              "でんわしてください",
              "おそいったら",
              "から"
            ],
            "correctSentence": [
              "おそくなったら",
              "でんわしてください"
            ],
            "explanation": "Osoku nattara, denwa shite kudasai."
          },
          {
            "id": "ex-17-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L17:",
            "japaneseVoiceText": "くつをぬいでからはいってください。スリッパははかなくてもいいですよ。",
            "options": [
              {
                "id": "w17-slp",
                "text": "Entre después de quitarse los zapatos. No hace falta que se ponga pantuflas.",
                "isCorrect": true
              },
              {
                "id": "w17-slp2",
                "text": "No se quite los zapatos al entrar."
              },
              {
                "id": "w17-slp3",
                "text": "Es obligatorio usar pantuflas."
              }
            ],
            "correctAnswerId": "w17-slp",
            "explanation": "Kutsu o nuide kara haitte kudasai. Surippa wa hakanakute mo ii desu yo."
          }
        ]
      },
      {
        "id": "l17-node-wb-grammar",
        "unitId": 17,
        "lessonNumber": 17,
        "title": "Workbook L17: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第17課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 17: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-17-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 17): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-17-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-17-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-17-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-17-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-17-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L17: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-17-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L17):",
            "pairs": [
              {
                "id": "wbp-17-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-17-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-17-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-17-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l17-node-wb-listening",
        "unitId": 17,
        "lessonNumber": 17,
        "title": "Workbook L17: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第17課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 17: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-17-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L17 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-17-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-17-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-17-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-17-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-17-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L17):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-17-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-17-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-17-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-17-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-17-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L17: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l18-node-0",
        "unitId": 18,
        "lessonNumber": 18,
        "title": "Lectura Inicial: El Trabajo de John (会話)",
        "japaneseTitle": "第18課 会話：ジョンさんのアルバイト",
        "description": "Lee y escucha el diálogo inicial de la Lección 18: John trabaja en la tienda de electrónica y ocurren varios percances",
        "icon": "BookOpen",
        "color": "orange",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-18-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Cerrando la tienda por la noche",
            "dialogueContext": "El gerente revisa la tienda con John antes de irse.",
            "dialogueLines": [
              {
                "speaker": "店長 (Gerente)",
                "japanese": "ジョンさん、奥の 窓が まだ 開いていますよ。閉めておいてください。",
                "romaji": "Jon-san, oku no mado ga mada aite imasu yo. Shimete oite kudasai.",
                "spanish": "John, la ventana del fondo todavía está abierta. Por favor déjala cerrada.",
                "audioText": "ジョンさん、おくのまどがまだあいていますよ。しめておいてください"
              },
              {
                "speaker": "ジョン (John)",
                "japanese": "すみません！ エアコンも まだ ついていますね。今 消します。",
                "romaji": "Sumimasen! Eakon mo mada tsuite imasu ne. Ima keshimasu.",
                "spanish": "¡Disculpe! El aire acondicionado también sigue encendido, ¿verdad? Ahora mismo lo apago.",
                "audioText": "すみません！エアコンもまだついていますね。いまけします"
              },
              {
                "speaker": "店長 (Gerente)",
                "japanese": "ありがとう。あ、この 時計、壊れていますね。",
                "romaji": "Arigatou. A, kono tokei, kowarete imasu ne.",
                "spanish": "Gracias. Ah, este reloj está descompuesto, ¿verdad?",
                "audioText": "ありがとう。あ、このとけい、こわれていますね"
              }
            ],
            "prompt": "Observa los estados en el Diálogo I: ¿Cómo estaban la ventana, el aire acondicionado y el reloj?",
            "options": [
              {
                "id": "d18-1-a",
                "text": "La ventana estaba abierta (開いています), el aire encendido (ついています) y el reloj roto (壊れています)",
                "isCorrect": true
              },
              {
                "id": "d18-1-b",
                "text": "Todo estaba cerrado y apagado"
              },
              {
                "id": "d18-1-c",
                "text": "El reloj era nuevo y funcionaba bien"
              }
            ],
            "correctAnswerId": "d18-1-a",
            "explanation": "Tres verbos intransitivos en 〜ています que describen el estado actual: 開いている, ついている, 壊れている."
          },
          {
            "id": "ex-18-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Un error accidental",
            "dialogueContext": "John se disculpa por un accidente mientras limpiaba.",
            "dialogueLines": [
              {
                "speaker": "ジョン (John)",
                "japanese": "店長、すみません。掃除を しながら 歩いていたら、お皿を 落としてしまいました。",
                "romaji": "Tenchou, sumimasen. Souji o shinagara aruite itara, osara o otoshite shimaimashita.",
                "spanish": "Gerente, disculpe. Mientras caminaba limpiando, dejé caer un plato por accidente.",
                "audioText": "てんちょう、すみません。そうじをしながらあるいていたら、おさらをおとしてしまいました"
              },
              {
                "speaker": "店長 (Gerente)",
                "japanese": "けがは ありませんか。気をつけてくださいね。",
                "romaji": "Kega wa arimasen ka. Ki o tsukete kudasai ne.",
                "spanish": "¿No te lastimaste? Ten cuidado, por favor.",
                "audioText": "けがはありませんか。きをつけてくださいね"
              },
              {
                "speaker": "ジョン (John)",
                "japanese": "はい。もっと 気をつければ よかったです。",
                "romaji": "Hai. Motto ki o tsukereba yokatta desu.",
                "spanish": "Sí. Ojalá hubiera tenido más cuidado.",
                "audioText": "はい。もっときをつければよかったです"
              }
            ],
            "prompt": "¿Qué accidente tuvo John y de qué se arrepiente?",
            "options": [
              {
                "id": "d18-2-a",
                "text": "Dejó caer un plato (落としてしまいました) y dice \"ojalá hubiera tenido más cuidado\" (気をつければよかったです)",
                "isCorrect": true
              },
              {
                "id": "d18-2-b",
                "text": "Llegó dos horas tarde al trabajo"
              },
              {
                "id": "d18-2-c",
                "text": "Perdió las llaves de la tienda"
              }
            ],
            "correctAnswerId": "d18-2-a",
            "explanation": "Integra 〜ながら (mientras), 〜てしまいました (accidente) y 〜ばよかったです (arrepentimiento)."
          }
        ]
      },
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
                "text": "Mi hermano menor se comió todito el helado.",
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
                "text": "もっと 勉強すれば よかったです",
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
        "id": "l18-node-tb-1",
        "unitId": 18,
        "lessonNumber": 18,
        "title": "Libro de Teoría: Tabla Completa Transitivos vs Intransitivos",
        "japaneseTitle": "教科書・練習：他動詞と自動詞のペア完全マスター",
        "description": "Práctica intensiva del libro de texto: distinguir pares como 入れる/入る, 出す/出る, 閉める/閉まる",
        "icon": "ListFilter",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-18-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría (pág. 142): Empareja cada verbo Transitivo (を) con su pareja Intransitiva (が):",
            "pairs": [
              {
                "id": "ti18-1",
                "left": "いれる (meter / preparar café)",
                "right": "はいる (entrar / caber)"
              },
              {
                "id": "ti18-2",
                "left": "だす (sacar / entregar)",
                "right": "でる (salir)"
              },
              {
                "id": "ti18-3",
                "left": "しめる (cerrar algo)",
                "right": "しまる (cerrarse)"
              },
              {
                "id": "ti18-4",
                "left": "わかす (hervir agua)",
                "right": "わく (hervirse el agua)"
              }
            ],
            "explanation": "Dominar estos pares es indispensable para hablar japonés con precisión."
          },
          {
            "id": "ex-18-tb-2",
            "type": "multiple-choice",
            "prompt": "Elige la partícula y el verbo correctos para decir: \"Metí el libro dentro del bolso\":",
            "options": [
              {
                "id": "bag18-1",
                "text": "かばんに 本を 入れました (Transitivo 入れる con を)",
                "isCorrect": true
              },
              {
                "id": "bag18-2",
                "text": "かばんに 本を 入りました"
              },
              {
                "id": "bag18-3",
                "text": "かばんに 本が 入れました"
              }
            ],
            "correctAnswerId": "bag18-1",
            "explanation": "Como tú realizas la acción de meter el libro, usas el verbo transitivo 入れる (いれる) con を."
          },
          {
            "id": "ex-18-tb-3",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"El agua caliente ya está hervida (lista)\":",
            "japaneseVoiceText": "おゆがもうわいています",
            "wordBank": [
              "おゆが",
              "もう",
              "わいています",
              "わかしています",
              "を"
            ],
            "correctSentence": [
              "おゆが",
              "もう",
              "わいています"
            ],
            "explanation": "Oyu ga mou waite imasu (わく intransitivo + ています)."
          }
        ]
      },
      {
        "id": "l18-node-tb-2",
        "unitId": 18,
        "lessonNumber": 18,
        "title": "Libro de Teoría: Lectura \"Diario de un Estudiante\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：大学生の失敗談（Anécdotas y Errores）",
        "description": "Comprensión de lectura del capítulo 18: historias de cosas olvidadas y arrepentimientos",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-18-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de Genki L18: 「夜遅くまでゲームをしてしまった。早く寝ればよかった。」 ¿Por qué se arrepiente el autor?",
            "options": [
              {
                "id": "gam18-1",
                "text": "Porque terminó jugando videojuegos hasta tarde en la noche y ojalá se hubiera dormido temprano",
                "isCorrect": true
              },
              {
                "id": "gam18-2",
                "text": "Porque no pudo jugar videojuegos"
              },
              {
                "id": "gam18-3",
                "text": "Porque se durmió muy temprano"
              }
            ],
            "correctAnswerId": "gam18-1",
            "explanation": "してしまった (hice con pesar) + 早く寝ればよかった (ojalá me hubiera dormido temprano)."
          },
          {
            "id": "ex-18-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Cuando leo en el autobús, me mareo (気分が悪くなります)\":",
            "japaneseVoiceText": "バスのなかでほんをよむときぶんがわるくなります",
            "wordBank": [
              "バスのなかで",
              "ほんをよむと",
              "きぶんが",
              "わるくなります",
              "よめばよかった"
            ],
            "correctSentence": [
              "バスのなかで",
              "ほんをよむと",
              "きぶんが",
              "わるくなります"
            ],
            "explanation": "Consecuencia natural/fisiológica con 〜と: Basu no naka de hon o yomu to, kibun ga waruku narimasu."
          },
          {
            "id": "ex-18-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L18:",
            "japaneseVoiceText": "あるきながらスマホをみるのはあぶないですよ",
            "options": [
              {
                "id": "w18-phn",
                "text": "Mirar el smartphone mientras caminas es peligroso.",
                "isCorrect": true
              },
              {
                "id": "w18-phn2",
                "text": "Perdí mi smartphone mientras caminaba."
              },
              {
                "id": "w18-phn3",
                "text": "Compré un smartphone nuevo."
              }
            ],
            "correctAnswerId": "w18-phn",
            "explanation": "Arukinagara sumaho o miru no wa abunai desu yo."
          }
        ]
      },
      {
        "id": "l18-node-wb-grammar",
        "unitId": 18,
        "lessonNumber": 18,
        "title": "Workbook L18: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第18課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 18: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-18-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 18): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-18-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-18-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-18-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-18-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-18-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L18: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-18-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L18):",
            "pairs": [
              {
                "id": "wbp-18-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-18-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-18-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-18-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l18-node-wb-listening",
        "unitId": 18,
        "lessonNumber": 18,
        "title": "Workbook L18: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第18課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 18: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-18-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L18 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-18-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-18-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-18-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-18-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-18-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L18):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-18-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-18-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-18-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-18-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-18-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L18: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l19-node-0",
        "unitId": 19,
        "lessonNumber": 19,
        "title": "Lectura Inicial: Conociendo al Jefe (会話)",
        "japaneseTitle": "第19課 会話：出迎えと敬語",
        "description": "Lee y escucha el diálogo inicial de la Lección 19: Takeshi y Sue conversan con el jefe de departamento usando lenguaje honorífico (Sonkeigo)",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-19-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Invitación a casa del jefe de departamento (部長)",
            "dialogueContext": "Sue fue invitada a cenar a casa del jefe de su oficina y le agradece al día siguiente.",
            "dialogueLines": [
              {
                "speaker": "スー (Sue)",
                "japanese": "部長、きのうは ごちそうさまでした。招待してくださって、ありがとうございました。",
                "romaji": "Buchou, kinou wa gochisousama deshita. Shoutai shite kudasatte, arigatou gozaimashita.",
                "spanish": "Jefe, muchas gracias por la deliciosa comida de ayer. Muchas gracias por haberme invitado.",
                "audioText": "ぶちょう、きのうはごちそうさまでした。しょうたいしてくださって、ありがとうございました"
              },
              {
                "speaker": "部長 (Jefe)",
                "japanese": "いいえ。スーさん、日本の 生活には もう 慣れましたか。",
                "romaji": "Iie. Suu-san, Nihon no seikatsu ni wa mou naremashita ka.",
                "spanish": "No hay de qué. Sue, ¿ya te acostumbraste a la vida en Japón?",
                "audioText": "いいえ。スーさん、にほんのせいかつにはもうなれましたか"
              },
              {
                "speaker": "スー (Sue)",
                "japanese": "はい、おかげさまで。奥様が 作ってくださった お料理、ほんとうに おいしかったです。",
                "romaji": "Hai, okagesama de. Okusama ga tsukutte kudasatta oryouri, hontou ni oishikatta desu.",
                "spanish": "Sí, gracias a usted. La comida que su esposa tuvo la bondad de preparar estuvo realmente deliciosa.",
                "audioText": "はい、おかげさまで。おくさまがつくってくださったおりょうり、ほんとうにおいしかったです"
              }
            ],
            "prompt": "Según el Diálogo I, ¿por qué le da las gracias Sue a su jefe?",
            "options": [
              {
                "id": "d19-1-a",
                "text": "Por haberla invitado ayer (招待してくださって) y por la deliciosa comida que preparó la esposa del jefe",
                "isCorrect": true
              },
              {
                "id": "d19-1-b",
                "text": "Por darle vacaciones de un mes"
              },
              {
                "id": "d19-1-c",
                "text": "Por prestarle su automóvil"
              }
            ],
            "correctAnswerId": "d19-1-a",
            "explanation": "Usa el honorífico くださる en Forma Te (招待してくださって) y modificando sustantivo (奥様が作ってくださったお料理)."
          },
          {
            "id": "ex-19-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Preguntando con respeto (Sonkeigo)",
            "dialogueContext": "Sue conversa respetuosamente con el jefe sobre sus pasatiempos.",
            "dialogueLines": [
              {
                "speaker": "スー (Sue)",
                "japanese": "部長は 休みの 日に 何を なさいますか。",
                "romaji": "Buchou wa yasumi no hi ni nani o nasaimasu ka.",
                "spanish": "Jefe, ¿qué hace usted (honorífico) en sus días de descanso?",
                "audioText": "ぶちょうはやすみのひになにをなさいますか"
              },
              {
                "speaker": "部長 (Jefe)",
                "japanese": "よく ゴルフを しますよ。あ、山田くんは もう 来ましたか。",
                "romaji": "Yoku gorufu o shimasu yo. A, Yamada-kun wa mou kimashita ka.",
                "spanish": "Juego golf a menudo. Ah, ¿ya llegó Yamada?",
                "audioText": "よくゴルフをしますよ。あ、やまだくんはもうきましたか"
              },
              {
                "speaker": "スー (Sue)",
                "japanese": "いいえ、まだですが、もうすぐ 来るはずです。",
                "romaji": "Iie, mada desu ga, mousugu kuru hazu desu.",
                "spanish": "No, todavía no, pero se supone que debe llegar muy pronto.",
                "audioText": "いいえ、まだですが、もうすぐくるはずです"
              }
            ],
            "prompt": "¿Qué verbo honorífico usa Sue en lugar de しますか para preguntar al jefe qué hace en sus días libres?",
            "options": [
              {
                "id": "d19-2-a",
                "text": "なさいますか (de なさる = honorífico de する)",
                "isCorrect": true
              },
              {
                "id": "d19-2-b",
                "text": "おっしゃいますか"
              },
              {
                "id": "d19-2-c",
                "text": "めしあがりますか"
              }
            ],
            "correctAnswerId": "d19-2-a",
            "explanation": "なさる (なさいます) es el verbo honorífico especial para する."
          }
        ]
      },
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
        "id": "l19-node-tb-1",
        "unitId": 19,
        "lessonNumber": 19,
        "title": "Libro de Teoría: Práctica de Instrucciones Cortés (お〜ください)",
        "japaneseTitle": "教科書・練習：丁寧な指示「お＋ます幹＋ください」",
        "description": "Ejercicios del libro: avisos de tiendas, trenes y oficinas con お待ちください y お入りください",
        "icon": "Sparkles",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-19-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría: Empareja cada instrucción honorífica (お〜ください) con su significado:",
            "pairs": [
              {
                "id": "o19-1",
                "left": "おまちください (お待ちください)",
                "right": "Por favor espere (de まつ)"
              },
              {
                "id": "o19-2",
                "left": "おはいりください (お入りください)",
                "right": "Por favor pase / entre (de はいる)"
              },
              {
                "id": "o19-3",
                "left": "おかけください (お掛けください)",
                "right": "Por favor tome asiento (de かける)"
              },
              {
                "id": "o19-4",
                "left": "おきをつけください (お気をつけください)",
                "right": "Por favor tenga cuidado"
              }
            ],
            "explanation": "お + Raíz Masu + ください es la forma honorífica de 〜てください para clientes e invitados."
          },
          {
            "id": "ex-19-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Se supone que ayer NO era día festivo (usando はず)\":",
            "japaneseVoiceText": "きのうはやすみじゃなかったはずです",
            "wordBank": [
              "きのうは",
              "やすみじゃなかった",
              "はずです",
              "やすみだった",
              "の"
            ],
            "correctSentence": [
              "きのうは",
              "やすみじゃなかった",
              "はずです"
            ],
            "explanation": "Con formas pasadas o negativas antes de はずです se usa la forma corta directamente: 休みじゃなかったはずです."
          },
          {
            "id": "ex-19-tb-3",
            "type": "multiple-choice",
            "prompt": "¿Por qué los 5 verbos honoríficos いらっしゃる, おっしゃる, なさる, くださる y ござる son especiales al conjugarse a la forma Masu?",
            "options": [
              {
                "id": "aru-masu",
                "text": "Porque aunque son verbos U terminados en 〜る, cambian る por い (いらっしゃいます, おっしゃいます, なさいます)",
                "isCorrect": true
              },
              {
                "id": "aru-masu2",
                "text": "Porque no tienen tiempo pasado"
              },
              {
                "id": "aru-masu3",
                "text": "Porque son adjetivos"
              }
            ],
            "correctAnswerId": "aru-masu",
            "explanation": "¡Regla clave de Genki L19! Esos verbos cambian る a い antes de ます (nunca \"irassharimasu\", sino いらっしゃいます)."
          }
        ]
      },
      {
        "id": "l19-node-tb-2",
        "unitId": 19,
        "lessonNumber": 19,
        "title": "Libro de Teoría: Lectura \"Cartas de Agradecimiento\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：お礼の手紙と季節の挨拶",
        "description": "Comprensión de lectura del capítulo 19: estructura formal de una carta japonesa (拝啓・敬具)",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-19-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de Genki L19 sobre cómo escribir una carta formal en Japón, ¿qué incluye siempre el primer párrafo después de 拝啓 (Estimado...)?",
            "options": [
              {
                "id": "let19-1",
                "text": "Un saludo sobre el clima o la estación del año (季節の挨拶) y preguntar por la salud del destinatario",
                "isCorrect": true
              },
              {
                "id": "let19-2",
                "text": "Pedir dinero prestado inmediatamente"
              },
              {
                "id": "let19-3",
                "text": "Una lista de compras"
              }
            ],
            "correctAnswerId": "let19-1",
            "explanation": "Las cartas formales japonesas siempre inician con una mención poética a la estación del año y la salud del receptor."
          },
          {
            "id": "ex-19-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Muchas gracias por haberme enseñado muchas cosas\":",
            "japaneseVoiceText": "いろいろおしえてくださってありがとうございました",
            "wordBank": [
              "いろいろ",
              "おしえてくださって",
              "ありがとうございました",
              "おしえてあげて"
            ],
            "correctSentence": [
              "いろいろ",
              "おしえてくださって",
              "ありがとうございました"
            ],
            "explanation": "Iroiro oshiete kudasatte arigatou gozaimashita."
          },
          {
            "id": "ex-19-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L19:",
            "japaneseVoiceText": "しゃちょうはもうおかえりになりましたよ",
            "options": [
              {
                "id": "w19-pres",
                "text": "El presidente de la compañía ya se retiró / regresó a casa.",
                "isCorrect": true
              },
              {
                "id": "w19-pres2",
                "text": "El presidente acaba de llegar a la oficina."
              },
              {
                "id": "w19-pres3",
                "text": "El presidente está en una reunión ahora."
              }
            ],
            "correctAnswerId": "w19-pres",
            "explanation": "Shachou wa mou okaeri ni narimashita yo."
          }
        ]
      },
      {
        "id": "l19-node-wb-grammar",
        "unitId": 19,
        "lessonNumber": 19,
        "title": "Workbook L19: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第19課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 19: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-19-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 19): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-19-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-19-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-19-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-19-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-19-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L19: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-19-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L19):",
            "pairs": [
              {
                "id": "wbp-19-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-19-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-19-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-19-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l19-node-wb-listening",
        "unitId": 19,
        "lessonNumber": 19,
        "title": "Workbook L19: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第19課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 19: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-19-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L19 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-19-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-19-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-19-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-19-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-19-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L19):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-19-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-19-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-19-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-19-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-19-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L19: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
                "text": "¿Dónde vive usted, profesor?",
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
        "id": "l20-node-0",
        "unitId": 20,
        "lessonNumber": 20,
        "title": "Lectura Inicial: Mary va de Compras (会話)",
        "japaneseTitle": "第20課 会話：メアリーさんの買い物",
        "description": "Lee y escucha el diálogo inicial de la Lección 20: Mary cambia un pañuelo en la tienda departamental y escucha lenguaje humilde y extra-cortés",
        "icon": "BookOpen",
        "color": "blue",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-20-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: En la tienda departamental",
            "dialogueContext": "El vendedor atiende a Mary usando lenguaje humilde (Kenjougo) y extra-cortés (Teineigo).",
            "dialogueLines": [
              {
                "speaker": "店員 (Vendedor)",
                "japanese": "いらっしゃいませ。何か おさがしですか。",
                "romaji": "Irasshaimase. Nanika osagashi desu ka.",
                "spanish": "¡Bienvenida! ¿Está buscando algo en especial?",
                "audioText": "いらっしゃいませ。なにかおさがしですか"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "あのう、きのう ここで 買った ハンカチなんですが、ちょっと 汚れが あるので、取り替えていただけませんか。",
                "romaji": "Anou, kinou koko de katta hankachi nan desu ga, chotto yogore ga aru node, torikaete itadakemasen ka.",
                "spanish": "Disculpe, es sobre este pañuelo que compré aquí ayer: como tiene una pequeña mancha, ¿podrían cambiármelo?",
                "audioText": "あのう、きのうここでかったハンカチなんですが、ちょっとよごれがあるので、とりかえていただけませんか"
              },
              {
                "speaker": "店員 (Vendedor)",
                "japanese": "大変 申し訳ございません。すぐに 新しい ものを お持ちします。",
                "romaji": "Taihen moushiwake gozaimasen. Sugu ni atarashii mono o omochi shimasu.",
                "spanish": "Le ofrezco una enorme disculpa. Enseguida le traigo (humilde) uno nuevo.",
                "audioText": "たいへんもうしわけございません。すぐにあたらしいものをおもちします"
              }
            ],
            "prompt": "Según el Diálogo I, ¿por qué pide Mary cambiar el pañuelo y cómo responde el vendedor?",
            "options": [
              {
                "id": "d20-1-a",
                "text": "Porque tiene una mancha (汚れがある), y el vendedor se disculpa formalmente y dice que enseguida le traerá uno nuevo (お持ちします)",
                "isCorrect": true
              },
              {
                "id": "d20-1-b",
                "text": "Porque no le gustó el color y el vendedor se niega"
              },
              {
                "id": "d20-1-c",
                "text": "Porque olvidó su recibo"
              }
            ],
            "correctAnswerId": "d20-1-a",
            "explanation": "El vendedor usa 申し訳ございません (disculpa muy formal) y お持ちします (forma humilde de 持つ)."
          },
          {
            "id": "ex-20-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Eligiendo unos zapatos cómodos",
            "dialogueContext": "Mary busca unos zapatos fáciles de caminar.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "この 靴は とても 軽くて、歩きやすいですね。",
                "romaji": "Kono kutsu wa totemo karukute, arukiyasui desu ne.",
                "spanish": "Estos zapatos son muy ligeros y fáciles para caminar, ¿verdad?",
                "audioText": "このくつはとてもかるくて、あるきやすいですね"
              },
              {
                "speaker": "店員 (Vendedor)",
                "japanese": "はい、そちらは 三千円 でございます。いかがですか。",
                "romaji": "Hai, sochira wa sanzen-en de gozaimasu. Ikaga desu ka.",
                "spanish": "Sí, esos cuestan 3,000 yenes (extra-cortés). ¿Qué le parecen?",
                "audioText": "はい、そちらはさんぜんえんでございます。いかがですか"
              }
            ],
            "prompt": "¿Qué cualidades destaca Mary de los zapatos?",
            "options": [
              {
                "id": "d20-2-a",
                "text": "Que son muy ligeros (軽くて) y fáciles para caminar (歩きやすい)",
                "isCorrect": true
              },
              {
                "id": "d20-2-b",
                "text": "Que son pesados y difíciles de caminar"
              },
              {
                "id": "d20-2-c",
                "text": "Que son de cuero importado"
              }
            ],
            "correctAnswerId": "d20-2-a",
            "explanation": "あるく ➔ あるきやすい (fácil de caminar) y でございます (es, extra-cortés)."
          }
        ]
      },
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
        "id": "l20-node-tb-1",
        "unitId": 20,
        "lessonNumber": 20,
        "title": "Libro de Teoría: Contraste Completo Sonkeigo vs Kenjougo",
        "japaneseTitle": "教科書・練習：尊敬語と謙譲語の使い分けマスター",
        "description": "Ejercicios del libro de texto: elegir la forma correcta según si el sujeto es el superior o soy yo",
        "icon": "Award",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-20-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría (pág. 186): Empareja el verbo Honorífico (del jefe) con el verbo Humilde (mío):",
            "pairs": [
              {
                "id": "sk20-1",
                "left": "いらっしゃる (Jefe va/viene/está)",
                "right": "まいる / おる (Yo voy/vengo / estoy)"
              },
              {
                "id": "sk20-2",
                "left": "めしあがる (Jefe come/bebe)",
                "right": "いただく (Yo como/bebo/recibo)"
              },
              {
                "id": "sk20-3",
                "left": "おっしゃる (Jefe dice)",
                "right": "もうす (Yo digo)"
              },
              {
                "id": "sk20-4",
                "left": "ごらんになる (Jefe mira)",
                "right": "はいけんする (Yo miro)"
              }
            ],
            "explanation": "La tabla comparativa más importante de todo el Keigo japonés."
          },
          {
            "id": "ex-20-tb-2",
            "type": "multiple-choice",
            "prompt": "Dices a tu profesor: \"Profesor, leí con humildad (拝見する) la carta que usted escribió\". ¿Cuál es correcta?",
            "options": [
              {
                "id": "haiken-1",
                "text": "先生が お書きになった 手紙を 拝見しました",
                "isCorrect": true
              },
              {
                "id": "haiken-2",
                "text": "先生が 拝見した 手紙を ご覧になりました"
              },
              {
                "id": "haiken-3",
                "text": "わたしが お書きになった 手紙です"
              }
            ],
            "correctAnswerId": "haiken-1",
            "explanation": "El profesor escribió (お書きになった - honorífico) y yo miré/leí (拝見しました - humilde)."
          },
          {
            "id": "ex-20-tb-3",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Tengo un gato de tres años (usando 〜おります humilde)\":",
            "japaneseVoiceText": "さんさいのねこをかっております",
            "wordBank": [
              "さんさいの",
              "ねこを",
              "かっております",
              "かっていらっしゃいます"
            ],
            "correctSentence": [
              "さんさいの",
              "ねこを",
              "かっております"
            ],
            "explanation": "〜ております es la forma modesta/humilde de 〜ています."
          }
        ]
      },
      {
        "id": "l20-node-tb-2",
        "unitId": 20,
        "lessonNumber": 20,
        "title": "Libro de Teoría: Lectura \"El Gato que Vivió un Millón de Veces\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：猫の物語と埋め込み疑問文",
        "description": "Comprensión de lectura del capítulo 20: cuentos con 〜という y preguntas incrustadas",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-20-tb2-1",
            "type": "multiple-choice",
            "prompt": "En una lectura narrativa ves: 「むかし、竹取翁（たけとりのおきな）というおじいさんがいました。」 ¿Qué significa 「〜というおじいさん」?",
            "options": [
              {
                "id": "toiu20-1",
                "text": "Un anciano llamado Taketori no Okina",
                "isCorrect": true
              },
              {
                "id": "toiu20-2",
                "text": "Un anciano que dijo algo"
              },
              {
                "id": "toiu20-3",
                "text": "Un anciano muy rico"
              }
            ],
            "correctAnswerId": "toiu20-1",
            "explanation": "[Nombre] という [Sustantivo] se usa en cuentos y conversaciones para introducir el nombre de algo por primera vez."
          },
          {
            "id": "ex-20-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Por favor enséñame cómo usar esta máquina (o qué botón presionar)\":",
            "japaneseVoiceText": "どのボタンをおすかおしえてください",
            "wordBank": [
              "どのボタンを",
              "おすか",
              "おしえてください",
              "おしますか",
              "かどうか"
            ],
            "correctSentence": [
              "どのボタンを",
              "おすか",
              "おしえてください"
            ],
            "explanation": "Dono botan o osu ka oshiete kudasai (Pregunta incrustada con どの)."
          },
          {
            "id": "ex-20-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L20:",
            "japaneseVoiceText": "かのじょがプレゼントをよろこぶかどうかしんぱいです",
            "options": [
              {
                "id": "w20-gft",
                "text": "Me preocupa si a ella le gustará (se alegrará con) el regalo o no.",
                "isCorrect": true
              },
              {
                "id": "w20-gft2",
                "text": "Sé exactamente qué regalo quiere ella."
              },
              {
                "id": "w20-gft3",
                "text": "Salí sin comprar el regalo."
              }
            ],
            "correctAnswerId": "w20-gft",
            "explanation": "Kanojo ga purezento o yorokobu ka dou ka shinpai desu."
          }
        ]
      },
      {
        "id": "l20-node-wb-grammar",
        "unitId": 20,
        "lessonNumber": 20,
        "title": "Workbook L20: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第20課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 20: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-20-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 20): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-20-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-20-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-20-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-20-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-20-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L20: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-20-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L20):",
            "pairs": [
              {
                "id": "wbp-20-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-20-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-20-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-20-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l20-node-wb-listening",
        "unitId": 20,
        "lessonNumber": 20,
        "title": "Workbook L20: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第20課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 20: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-20-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L20 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-20-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-20-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-20-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-20-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-20-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L20):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-20-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-20-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-20-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-20-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-20-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L20: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
                "text": "田中と申します",
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
        "id": "l21-node-0",
        "unitId": 21,
        "lessonNumber": 21,
        "title": "Lectura Inicial: El Robo (会話)",
        "japaneseTitle": "第21課 会話：どろぼう",
        "description": "Lee y escucha el diálogo inicial de la Lección 21: un ladrón entró al departamento de Takeshi mientras no estaba y habla con la policía",
        "icon": "BookOpen",
        "color": "red",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-21-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: ¡Entró un ladrón a mi cuarto!",
            "dialogueContext": "Takeshi regresa a su departamento y llama a la policía al ver todo revuelto.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "おまわりさん、留守の 間に どろぼうに 入られたんです！",
                "romaji": "Omawarisan, rusu no aida ni dorobou ni hairareta n desu!",
                "spanish": "¡Oficial de policía, mientras no estaba en casa se metió un ladrón!",
                "audioText": "おまわりさん、るすのあいだにどろぼうにはいられたんです"
              },
              {
                "speaker": "警官 (Policía)",
                "japanese": "窓に かぎが かけてありましたか。",
                "romaji": "Mado ni kagi ga kakete arimashita ka.",
                "spanish": "¿La ventana había sido dejada cerrada con seguro?",
                "audioText": "まどにかぎがかけてありましたか"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "いいえ、窓が 開けてあったんです。古い カメラを 盗まれました。",
                "romaji": "Iie, mado ga akete atta n desu. Furui kamera o nusumaremashita.",
                "spanish": "No, es que la ventana había quedado abierta. Me robaron mi cámara vieja.",
                "audioText": "いいえ、まどがあけてあったんです。ふるいカメラをぬすまれました"
              }
            ],
            "prompt": "Según el Diálogo I, ¿cómo entró el ladrón y qué le robó a Takeshi?",
            "options": [
              {
                "id": "d21-1-a",
                "text": "La ventana había sido dejada abierta sin seguro (開けてあった) y le robaron una cámara vieja (古いカメラを盗まれました)",
                "isCorrect": true
              },
              {
                "id": "d21-1-b",
                "text": "Rompió la puerta principal y se llevó su televisión"
              },
              {
                "id": "d21-1-c",
                "text": "No se llevó absolutamente nada"
              }
            ],
            "correctAnswerId": "d21-1-a",
            "explanation": "Integra 留守の間に (mientras estaba ausente), 〜てあった (estado dejado) y pasiva 盗まれました."
          },
          {
            "id": "ex-21-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Contándole a Mary lo sucedido",
            "dialogueContext": "Takeshi desea que la policía atrape pronto al culpable.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "それは 大変でしたね。でも、けがが なくて よかったですね。",
                "romaji": "Sore wa taihen deshita ne. Demo, kega ga nakute yokatta desu ne.",
                "spanish": "Qué terrible fue eso. Pero qué bueno que no resultaste herido.",
                "audioText": "それはたいへんでしたね。でも、けががなくてよかったですね"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "うん。警察に 早く 犯人を つかまえてほしいよ。",
                "romaji": "Un. Keisatsu ni hayaku hannin o tsukamaete hoshii yo.",
                "spanish": "Sí. Quiero que la policía atrape pronto al culpable.",
                "audioText": "うん。けいさつにはやくはんにんをつかまえてほしいよ"
              }
            ],
            "prompt": "¿Qué desea Takeshi que haga la policía (警察に〜てほしい)?",
            "options": [
              {
                "id": "d21-2-a",
                "text": "Que atrape pronto al culpable/delincuente (早く犯人をつかまえてほしい)",
                "isCorrect": true
              },
              {
                "id": "d21-2-b",
                "text": "Que le compre una cámara nueva"
              },
              {
                "id": "d21-2-c",
                "text": "Que limpie su departamento"
              }
            ],
            "correctAnswerId": "d21-2-a",
            "explanation": "[Persona/Entidad] に + Verbo Te + ほしい = querer que otro realice una acción."
          }
        ]
      },
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
                "text": "En el tren, la persona de al lado le pisó el pie.",
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
        "id": "l21-node-tb-1",
        "unitId": 21,
        "lessonNumber": 21,
        "title": "Libro de Teoría: Pasiva Directa e Histórica (〜によって)",
        "japaneseTitle": "教科書・練習：受身文と「〜によって」（Creado/Escrito por）",
        "description": "Práctica del libro: hablar de obras escritas o inventadas (〜によって書かれました) y pasiva cotidiana",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-21-tb-1",
            "type": "multiple-choice",
            "prompt": "Cuando el sujeto de una oración pasiva es una obra, edificio o invento (\"El Cuento de Genji fue escrito por Murasaki Shikibu\"), ¿qué expresión marca al autor/creador?",
            "options": [
              {
                "id": "niyotte-1",
                "text": "〜によって (源氏物語は紫式部によって書かれました)",
                "isCorrect": true
              },
              {
                "id": "niyotte-2",
                "text": "〜ながら"
              },
              {
                "id": "niyotte-3",
                "text": "〜のために"
              }
            ],
            "correctAnswerId": "niyotte-1",
            "explanation": "Con inventos, libros o edificios en voz pasiva, el autor/creador se marca con によって."
          },
          {
            "id": "ex-21-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Mi madre leyó mi diario (sufrí que mi madre leyera mi diario)\":",
            "japaneseVoiceText": "わたしはははににっきをよまれました",
            "wordBank": [
              "わたしは",
              "ははに",
              "にっきを",
              "よまれました",
              "よみました"
            ],
            "correctSentence": [
              "わたしは",
              "ははに",
              "にっきを",
              "よまれました"
            ],
            "explanation": "Watashi wa haha ni nikki o yomaremashita (よむ ➔ よまれる)."
          },
          {
            "id": "ex-21-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja las situaciones de pasiva cotidiana del Libro (L21):",
            "pairs": [
              {
                "id": "p21s1",
                "left": "先生にほめられました",
                "right": "Fui elogiado por el profesor"
              },
              {
                "id": "p21s2",
                "left": "犬に手をかまれました",
                "right": "Un perro me mordió la mano"
              },
              {
                "id": "p21s3",
                "left": "赤ちゃんに泣かれました",
                "right": "El bebé se puso a llorar (y no pude dormir)"
              },
              {
                "id": "p21s4",
                "left": "友だちに笑われました",
                "right": "Mis amigos se rieron de mí"
              }
            ],
            "explanation": "Ejemplos clásicos de la práctica de la Lección 21."
          }
        ]
      },
      {
        "id": "l21-node-tb-2",
        "unitId": 21,
        "lessonNumber": 21,
        "title": "Libro de Teoría: Lectura \"Yakudoshi - Años de Mala Suerte\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：厄年（やくどし）と日本の伝統",
        "description": "Comprensión de lectura del capítulo 21: creencias tradicionales japonesas sobre los años críticos",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-21-tb2-1",
            "type": "multiple-choice",
            "prompt": "Según la lectura cultural de Genki L21, ¿qué es el 「厄年」 (やくどし / Yakudoshi) en Japón?",
            "options": [
              {
                "id": "yaku-1",
                "text": "Ciertas edades consideradas tradicionalmente de infortunio o cambio físico, en las que la gente va al santuario/templo a pedir protección",
                "isCorrect": true
              },
              {
                "id": "yaku-2",
                "text": "El primer año de escuela primaria"
              },
              {
                "id": "yaku-3",
                "text": "El festival de fuegos artificiales de verano"
              }
            ],
            "correctAnswerId": "yaku-1",
            "explanation": "Yakudoshi son edades específicas (como los 33 en mujeres y 42 en hombres) donde se cree que hay que tener especial cuidado."
          },
          {
            "id": "ex-21-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Quiero que no olvides nuestra promesa\":",
            "japaneseVoiceText": "やくそくをわすれないでほしいです",
            "wordBank": [
              "やくそくを",
              "わすれないで",
              "ほしいです",
              "わすれて",
              "たいです"
            ],
            "correctSentence": [
              "やくそくを",
              "わすれないで",
              "ほしいです"
            ],
            "explanation": "Negativo de 〜てほしい: Forma Nai + でほしいです (わすれないでほしいです)."
          },
          {
            "id": "ex-21-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L21:",
            "japaneseVoiceText": "テーブルのうえにおさらがならべてあります",
            "options": [
              {
                "id": "w21-tbl",
                "text": "Los platos ya han sido colocados / acomodados sobre la mesa.",
                "isCorrect": true
              },
              {
                "id": "w21-tbl2",
                "text": "Los platos se cayeron de la mesa."
              },
              {
                "id": "w21-tbl3",
                "text": "Por favor guarda los platos."
              }
            ],
            "correctAnswerId": "w21-tbl",
            "explanation": "Teeburu no ue ni osara ga narabete arimasu (ならべる transitivo + てあります)."
          }
        ]
      },
      {
        "id": "l21-node-wb-grammar",
        "unitId": 21,
        "lessonNumber": 21,
        "title": "Workbook L21: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第21課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 21: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-21-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 21): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-21-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-21-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-21-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-21-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-21-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L21: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-21-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L21):",
            "pairs": [
              {
                "id": "wbp-21-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-21-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-21-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-21-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l21-node-wb-listening",
        "unitId": 21,
        "lessonNumber": 21,
        "title": "Workbook L21: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第21課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 21: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-21-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L21 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-21-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-21-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-21-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-21-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-21-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L21):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-21-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-21-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-21-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-21-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-21-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L21: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l22-node-0",
        "unitId": 22,
        "lessonNumber": 22,
        "title": "Lectura Inicial: Educación en Japón (会話)",
        "japaneseTitle": "第22課 会話：日本の教育",
        "description": "Lee y escucha el diálogo inicial de la Lección 22: padres e hijos debaten sobre la escuela, las tareas y la libertad",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-22-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Conversación sobre crianza y estudios",
            "dialogueContext": "Dos colegas en la oficina hablan sobre cómo educan a sus hijos.",
            "dialogueLines": [
              {
                "speaker": "川راتさん (Sr. Kawai)",
                "japanese": "うちでは 毎日 子どもに ピアノを 練習させています。塾にも 行かせているんですよ。",
                "romaji": "Uchi de wa mainichi kodomo ni piano o renshuu sasete imasu. Juku ni mo ikasete iru n desu yo.",
                "spanish": "En mi casa todos los días hacemos que nuestro hijo practique piano. También lo hacemos ir a la academia Juku.",
                "audioText": "うちではまいにちこどもにピアノをれんしゅうさせています。じゅくにもいかせているんですよ"
              },
              {
                "speaker": "林さん (Sra. Hayashi)",
                "japanese": "大変ですね。うちは 子どもの 自由を 大切に しています。好きな ことを させてあげたいんです。",
                "romaji": "Taihen desu ne. Uchi wa kodomo no jiyuu o taisetsu ni shite imasu. Suki na koto o sasete agetai n desu.",
                "spanish": "Qué intenso. En nuestra casa valoramos la libertad de los niños. Queremos dejarlos hacer las cosas que les gustan.",
                "audioText": "たいへんそうですね。うちはこどものじゆうをたいせつにしています。すきなことをさせてあげたいんです"
              }
            ],
            "prompt": "Compara los dos estilos educativos del Diálogo I: ¿En qué se diferencian el Sr. Kawai y la Sra. Hayashi?",
            "options": [
              {
                "id": "d22-1-a",
                "text": "El Sr. Kawai hace que su hijo practique piano y vaya al Juku (練習させて・行かせて), mientras que la Sra. Hayashi prefiere dejarlo hacer lo que le gusta (好きなことをさせてあげたい)",
                "isCorrect": true
              },
              {
                "id": "d22-1-b",
                "text": "Ambos prohíben cualquier actividad extraescolar"
              },
              {
                "id": "d22-1-c",
                "text": "Ninguno de los dos tiene hijos"
              }
            ],
            "correctAnswerId": "d22-1-a",
            "explanation": "Muestra los dos usos de la forma causativa: obligar/hacer que haga (練習させる) vs permitir/dejar hacer (させてあげる)."
          },
          {
            "id": "ex-22-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: Pidiendo permiso a los padres",
            "dialogueContext": "Yumi pide permiso a sus padres para vivir sola.",
            "dialogueLines": [
              {
                "speaker": "ゆみ (Yumi)",
                "japanese": "お父さん、もう 大学生なんだから、ひとり暮らしを させてよ。",
                "romaji": "Otousan, mou daigakusei nan dakara, hitorigurashi o sasete yo.",
                "spanish": "Papá, como ya soy estudiante universitaria, déjame vivir sola.",
                "audioText": "おとうさん、もうだいがくせいなんだから、ひとりぐらしをさせてよ"
              },
              {
                "speaker": "お父さん (Padre)",
                "japanese": "だめだ。自分ひとりで お金を 払えるように なれば いいが、今は まだ 早い。まずは しっかり 勉強しなさい。",
                "romaji": "Dame da. Jibun hitori de okane o haraeru you ni nareba ii ga, ima wa mada hayai. Mazu wa shikkari benkyou shinasai.",
                "spanish": "No. Si llegaras a poder pagar el dinero por ti misma estaría bien, pero ahora aún es pronto. Primero estudia con firmeza.",
                "audioText": "だめだ。じぶんひとりでおかねをはらえるようになればいいが、いまはまだはやい。まずはしっかりべんきょうしなさい"
              }
            ],
            "prompt": "¿Qué condición le pone el padre a Yumi y qué orden le da con 〜なさい?",
            "options": [
              {
                "id": "d22-2-a",
                "text": "Que pueda pagar sus gastos por sí misma (払えるようになれば) y le ordena que primero estudie bien (勉強しなさい)",
                "isCorrect": true
              },
              {
                "id": "d22-2-b",
                "text": "Le da permiso inmediatamente"
              },
              {
                "id": "d22-2-c",
                "text": "Le pide que deje la universidad"
              }
            ],
            "correctAnswerId": "d22-2-a",
            "explanation": "Integra させて (déjame), condicional 〜ば (なれば) e imperativo paterno 〜なさい."
          }
        ]
      },
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
                "text": "¡Haz tu tarea rápido! (Orden de padres/maestros).",
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
                "text": "Perdí mi llave. ¿Qué debería hacer?",
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
        "id": "l22-node-tb-1",
        "unitId": 22,
        "lessonNumber": 22,
        "title": "Libro de Teoría: Partículas en Oraciones Causativas (に vs を)",
        "japaneseTitle": "教科書・練習：使役文の助詞と「〜させてください」",
        "description": "Práctica del libro: cuándo marcar al causado con に o con を y pedir asumir tareas",
        "icon": "Users",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-22-tb-1",
            "type": "multiple-choice",
            "prompt": "En el trabajo hay un proyecto interesante y quieres decirle a tu jefe: \"¡Por favor déjeme ir a mí a ese viaje de negocios!\". ¿Cómo lo dices?",
            "options": [
              {
                "id": "letme-1",
                "text": "ぜひ わたしに 行かせてください",
                "isCorrect": true
              },
              {
                "id": "letme-2",
                "text": "ぜひ わたしを 行かれてください"
              },
              {
                "id": "letme-3",
                "text": "ぜひ わたしに 行ってください"
              }
            ],
            "correctAnswerId": "letme-1",
            "explanation": "Causativa + てください es la forma estándar y cortés para ofrecerse o pedir permiso para hacer algo."
          },
          {
            "id": "ex-22-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"Si el clima está bueno mañana, vayamos de picnic\":",
            "japaneseVoiceText": "あしたてんきがよければピクニックにいきましょう",
            "wordBank": [
              "あした",
              "てんきが",
              "よければ",
              "ピクニックに",
              "いきましょう",
              "いいば"
            ],
            "correctSentence": [
              "あした",
              "てんきが",
              "よければ",
              "ピクニックに",
              "いきましょう"
            ],
            "explanation": "El condicional 〜ば del adjetivo irregular いい es よければ."
          },
          {
            "id": "ex-22-tb-3",
            "type": "match-pairs",
            "prompt": "Empareja cada adjetivo o verbo con su forma condicional 〜ば:",
            "pairs": [
              {
                "id": "b22-1",
                "left": "いい (bueno - irregular)",
                "right": "よければ (si está bien)"
              },
              {
                "id": "b22-2",
                "left": "たかい (caro - い-adj)",
                "right": "たかければ (si es caro)"
              },
              {
                "id": "b22-3",
                "left": "はなす (hablar - U-verb)",
                "right": "はなせば (si hablas)"
              },
              {
                "id": "b22-4",
                "left": "こない (no venir - negativo)",
                "right": "こなければ (si no viene)"
              }
            ],
            "explanation": "Tabla de conjugación del condicional 〜ば en Genki L22."
          }
        ]
      },
      {
        "id": "l22-node-tb-2",
        "unitId": 22,
        "lessonNumber": 22,
        "title": "Libro de Teoría: Lectura \"ElDiario de Tomomi\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：友美さんの日記（先輩と後輩）",
        "description": "Comprensión de lectura del capítulo 22: relaciones Senpai-Kouhai en clubes universitarios",
        "icon": "BookOpen",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-22-tb2-1",
            "type": "multiple-choice",
            "prompt": "En la lectura de Genki L22: 「先輩はいつもわたしたち後輩にいろいろな仕事をさせます。」 ¿Qué hace el Senpai (veterano)?",
            "options": [
              {
                "id": "senp22-1",
                "text": "Siempre hace que nosotros los Kouhai (de menor grado) hagamos varios trabajos",
                "isCorrect": true
              },
              {
                "id": "senp22-2",
                "text": "Hace todo el trabajo él solo sin pedir nada"
              },
              {
                "id": "senp22-3",
                "text": "Nunca va al club escolar"
              }
            ],
            "correctAnswerId": "senp22-1",
            "explanation": "仕事をさせます = hacer que alguien realice un trabajo."
          },
          {
            "id": "ex-22-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"A pesar de que es domingo, hoy tengo que trabajar\":",
            "japaneseVoiceText": "にちようびなのにきょうははたらかなければいけません",
            "wordBank": [
              "にちようび",
              "なのに",
              "きょうは",
              "はたらかなければいけません",
              "だのに"
            ],
            "correctSentence": [
              "にちようび",
              "なのに",
              "きょうは",
              "はたらかなければいけません"
            ],
            "explanation": "Con sustantivos en presente afirmativo se usa なのに: 日曜日なのに."
          },
          {
            "id": "ex-22-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo del Workbook L22:",
            "japaneseVoiceText": "このケーキはプロがつくったようにおいしいですね",
            "options": [
              {
                "id": "w22-ck",
                "text": "Este pastel está tan delicioso como si lo hubiera hecho un profesional.",
                "isCorrect": true
              },
              {
                "id": "w22-ck2",
                "text": "Este pastel fue comprado en una pastelería famosa."
              },
              {
                "id": "w22-ck3",
                "text": "Este pastel no quedó muy bien."
              }
            ],
            "correctAnswerId": "w22-ck",
            "explanation": "Puro ga tsukutta you ni oishii desu ne (〜ように modifica al adjetivo おいしい)."
          }
        ]
      },
      {
        "id": "l22-node-wb-grammar",
        "unitId": 22,
        "lessonNumber": 22,
        "title": "Workbook L22: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第22課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 22: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-22-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 22): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-22-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-22-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-22-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-22-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-22-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L22: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-22-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L22):",
            "pairs": [
              {
                "id": "wbp-22-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-22-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-22-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-22-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l22-node-wb-listening",
        "unitId": 22,
        "lessonNumber": 22,
        "title": "Workbook L22: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第22課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 22: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-22-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L22 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-22-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-22-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-22-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-22-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-22-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L22):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-22-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-22-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-22-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-22-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-22-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L22: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
        "id": "l23-node-0",
        "unitId": 23,
        "lessonNumber": 23,
        "title": "Lectura Inicial: ¡Adiós, Japón! (会話)",
        "japaneseTitle": "第23課 会話：さようなら、日本",
        "description": "Lee y escucha el emotivo diálogo final de Genki II: Mary se despide en el aeropuerto de su familia anfitriona y de Takeshi",
        "icon": "BookOpen",
        "color": "orange",
        "totalSteps": 2,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-23-0-1",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo I: Despedida de la familia anfitriona",
            "dialogueContext": "El programa de intercambio de Mary termina y regresa a Estados Unidos.",
            "dialogueLines": [
              {
                "speaker": "メアリー (Mary)",
                "japanese": "お父さん、お母さん、一年間 いろいろ お世話に なりました。",
                "romaji": "Otousan, okaasan, ichinenkan iroiro osewa ni narimashita.",
                "spanish": "Papá, mamá (anfitriones), durante este año muchas gracias por todas sus atenciones.",
                "audioText": "おとうさん、おかあさん、いちねんかんいろいろおせわになりました"
              },
              {
                "speaker": "ホストファーザー (Padre anfitrión)",
                "japanese": "最初は 日本語の 話し方も わからなかったのに、本当に 上手に なったね。",
                "romaji": "Saisho wa nihongo no hanashikata mo wakaranakatta noni, hontou ni jouzu ni natta ne.",
                "spanish": "A pesar de que al principio ni siquiera sabías la manera de hablar japonés, de verdad te volviste muy buena.",
                "audioText": "さいしょはにほんごのはなしかたもわからなかったのに、ほんとうにじょうずになったね"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "ありがとうございます。アメリカへ 帰っても、毎日 日本語を 使うことに します。",
                "romaji": "Arigatou gozaimasu. Amerika e kaette mo, mainichi nihongo o tsukau koto ni shimasu.",
                "spanish": "Muchas gracias. Incluso cuando regrese a Estados Unidos, he decidido usar el japonés todos los días.",
                "audioText": "ありがとうございます。アメリカへかえっても、まいにちにほんごをつかうことにします"
              }
            ],
            "prompt": "Según el Diálogo I, ¿qué resolución personal (〜ことにします) toma Mary para cuando regrese a Estados Unidos?",
            "options": [
              {
                "id": "d23-1-a",
                "text": "Incluso al regresar a EE. UU. (帰っても), decide usar el japonés todos los días (毎日日本語を使うことにします)",
                "isCorrect": true
              },
              {
                "id": "d23-1-b",
                "text": "Decide dejar de estudiar japonés"
              },
              {
                "id": "d23-1-c",
                "text": "Se quedará a vivir en Kioto diez años más"
              }
            ],
            "correctAnswerId": "d23-1-a",
            "explanation": "Integra 話し方 (manera de hablar), 〜のに (a pesar de), 〜ても (incluso si) y 〜ことにします (decidir)."
          },
          {
            "id": "ex-23-0-2",
            "type": "dialogue-reading",
            "dialogueTitle": "Diálogo II: La despedida de Takeshi y Mary",
            "dialogueContext": "Takeshi despide a Mary antes de que aborde el avión.",
            "dialogueLines": [
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "メアリーさん、卒業するまで アメリカに いるの？",
                "romaji": "Mearii-san, sotsugyou suru made Amerika ni iru no?",
                "spanish": "Mary, ¿estarás en Estados Unidos hasta que te gradúes?",
                "audioText": "メアリーさん、そつぎょうするまでアメリカにいるの？"
              },
              {
                "speaker": "メアリー (Mary)",
                "japanese": "うん。でも、卒業したら、また 日本へ 帰ってくることに したよ。",
                "romaji": "Un. Demo, sotsugyou shitara, mata Nihon e kaette kuru koto ni shita yo.",
                "spanish": "Sí. Pero he decidido que cuando me gradúe, regresaré otra vez a Japón.",
                "audioText": "うん。でも、そつぎょうしたら、またにほんへかえってくることにしたよ"
              },
              {
                "speaker": "たけし (Takeshi)",
                "japanese": "ほんとう？ どんなに 遠くに いても、ずっと 待っているよ。元気でね！",
                "romaji": "Hontou? Donna ni tooku ni ite mo, zutto matte iru yo. Genki de ne!",
                "spanish": "¿De verdad? No importa qué tan lejos estés, siempre te estaré esperando. ¡Cuídate mucho!",
                "audioText": "ほんとう？どんなにとおくにいても、ずっとまっているよ。げんきでね"
              }
            ],
            "prompt": "¿Qué le promete Takeshi a Mary al despedirse?",
            "options": [
              {
                "id": "d23-2-a",
                "text": "Que sin importar qué tan lejos esté (どんなに遠くにいても), la estará esperando siempre",
                "isCorrect": true
              },
              {
                "id": "d23-2-b",
                "text": "Que nunca más volverán a escribirse"
              },
              {
                "id": "d23-2-c",
                "text": "Que él se mudará mañana a Londres"
              }
            ],
            "correctAnswerId": "d23-2-a",
            "explanation": "El emotivo cierre de Genki II entre Takeshi y Mary usando 〜まで, 〜ことにした y 〜ても."
          }
        ]
      },
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
        "id": "l23-node-tb-1",
        "unitId": 23,
        "lessonNumber": 23,
        "title": "Libro de Teoría: Contraste Pasiva, Causativa y Causativa-Pasiva",
        "japaneseTitle": "教科書・練習：受身・使役・使役受身の総整理",
        "description": "Práctica del libro de texto: distinguir \"me robaron\", \"hice que fuera\" y \"me obligaron a ir\"",
        "icon": "Flame",
        "color": "blue",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-23-tb-1",
            "type": "match-pairs",
            "prompt": "Del Libro de Teoría: Empareja las 4 grandes conjugaciones del verbo いく (ir) vistas en Genki II:",
            "pairs": [
              {
                "id": "all23-1",
                "left": "いける (Potencial - L13)",
                "right": "Poder ir"
              },
              {
                "id": "all23-2",
                "left": "いかれる (Pasiva / Honorífico - L19/21)",
                "right": "Sufrir que alguien vaya / Ir (respetuoso)"
              },
              {
                "id": "all23-3",
                "left": "いかせる (Causativa - L22)",
                "right": "Hacer que alguien vaya / Dejar ir"
              },
              {
                "id": "all23-4",
                "left": "いかされる (Causativa-Pasiva - L23)",
                "right": "Ser obligado a ir"
              }
            ],
            "explanation": "¡Resumen maestro de las transformaciones verbales de Genki II!"
          },
          {
            "id": "ex-23-tb-2",
            "type": "word-order",
            "prompt": "Del Libro (練習): Traduce \"En la clase de japonés nos hacen aprender de memoria muchos kanjis\":",
            "japaneseVoiceText": "にほんごのクラスでかんじをたくさんおぼえさせられます",
            "wordBank": [
              "にほんごのクラスで",
              "かんじを",
              "たくさん",
              "おぼえさせられます",
              "おぼえさせます"
            ],
            "correctSentence": [
              "にほんごのクラスで",
              "かんじを",
              "たくさん",
              "おぼえさせられます"
            ],
            "explanation": "おぼえる (Ru-verb) ➔ おぼえさせられます (ser obligado a memorizar)."
          },
          {
            "id": "ex-23-tb-3",
            "type": "multiple-choice",
            "prompt": "¿Por qué el verbo U 「はなす」 (hablar) NO puede usar la forma corta 〜される en causativa-pasiva y siempre dice 「はなさせられる」?",
            "options": [
              {
                "id": "hanasu-cp",
                "text": "Porque en verbos terminados en 〜す quedaría \"はなされる\", que se confundiría con la forma pasiva simple",
                "isCorrect": true
              },
              {
                "id": "hanasu-cp2",
                "text": "Porque はなす es un verbo Ru"
              },
              {
                "id": "hanasu-cp3",
                "text": "Porque はなす no tiene causativa"
              }
            ],
            "correctAnswerId": "hanasu-cp",
            "explanation": "¡Exacto! Todos los U-verbs pueden abreviar 〜せられる a 〜される (書かされる, 待たされる), EXCEPTO los terminados en 〜す (話させられる)."
          }
        ]
      },
      {
        "id": "l23-node-tb-2",
        "unitId": 23,
        "lessonNumber": 23,
        "title": "Libro de Teoría: Lectura Final \"Expresiones de Emoción\" (読み書き編)",
        "japaneseTitle": "教科書・読み書き：日本の思い出と感謝のエッセイ",
        "description": "Lectura final del libro Genki II: ensayo de despedida y reflexión sobre el aprendizaje",
        "icon": "BookOpen",
        "color": "purple",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-23-tb2-1",
            "type": "multiple-choice",
            "prompt": "En el ensayo final de Genki L23: 「最初は漢字の書き方も読み方もわかりませんでしたが、今は新聞も読めるようになりました。」 ¿Qué logro celebra el estudiante?",
            "options": [
              {
                "id": "ess23-1",
                "text": "Que aunque al inicio no sabía ni cómo escribir ni cómo leer kanjis, ahora ha llegado a poder leer incluso el periódico",
                "isCorrect": true
              },
              {
                "id": "ess23-2",
                "text": "Que ya no necesita leer kanjis nunca más"
              },
              {
                "id": "ess23-3",
                "text": "Que solo usa romaji"
              }
            ],
            "correctAnswerId": "ess23-1",
            "explanation": "Combina 〜方 (書き方・読み方) con Potencial + ようになる (読めるようになりました = llegar a poder leer)."
          },
          {
            "id": "ex-23-tb2-2",
            "type": "word-order",
            "prompt": "Del Libro: Traduce \"Se decidió que el próximo mes iré a Tokio en viaje de negocios\":",
            "japaneseVoiceText": "らいげつとうきょうへしゅっちょうすることになりました",
            "wordBank": [
              "らいげつ",
              "とうきょうへ",
              "しゅっちょうする",
              "ことになりました",
              "ことにしました"
            ],
            "correctSentence": [
              "らいげつ",
              "とうきょうへ",
              "しゅっちょうする",
              "ことになりました"
            ],
            "explanation": "Como un viaje de negocios lo decide la empresa, se usa ことになりました."
          },
          {
            "id": "ex-23-tb2-3",
            "type": "listening",
            "prompt": "Escucha el ejercicio auditivo final del Workbook L23:",
            "japaneseVoiceText": "どんなにむずかしくても、あきらめないでがんばります",
            "options": [
              {
                "id": "w23-fin",
                "text": "Por más difícil que sea, daré mi mejor esfuerzo sin rendirme.",
                "isCorrect": true
              },
              {
                "id": "w23-fin2",
                "text": "Como es difícil, prefiero dejarlo para después."
              },
              {
                "id": "w23-fin3",
                "text": "Fue muy fácil desde el principio."
              }
            ],
            "correctAnswerId": "w23-fin",
            "explanation": "Donna ni muzukashikute mo, akiramenaide ganbarimasu!"
          }
        ]
      },
      {
        "id": "l23-node-wb-grammar",
        "unitId": 23,
        "lessonNumber": 23,
        "title": "Workbook L23: Ejercicios de Gramática y Transformación",
        "japaneseTitle": "第23課 ワークブック：文法ドリルと文作り",
        "description": "Práctica escrita del Workbook de la Lección 23: conjugación, partículas y construcción de frases",
        "icon": "Flame",
        "color": "orange",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-23-wbg-1",
            "type": "multiple-choice",
            "prompt": "Repaso de precisión gramatical del Workbook (Lección 23): ¿Cuál de las siguientes afirmaciones sobre las estructuras de N4 es verdadera?",
            "options": [
              {
                "id": "wbg-23-a",
                "text": "En cláusulas subordinadas (como 〜時, 〜たら, 〜のに, 〜ので) el sujeto específico lleva が en lugar de は",
                "isCorrect": true
              },
              {
                "id": "wbg-23-b",
                "text": "Los verbos en forma Masu siempre van antes de ので y のに en lenguaje casual"
              },
              {
                "id": "wbg-23-c",
                "text": "Las partículas nunca cambian con verbos potenciales o pasivos"
              }
            ],
            "correctAnswerId": "wbg-23-a",
            "explanation": "En japonés, dentro de cláusulas subordinadas temporales, condicionales o adjetivales, el sujeto se marca con が."
          },
          {
            "id": "ex-23-wbg-2",
            "type": "word-order",
            "prompt": "Del Workbook L23: Ordena correctamente la oración de práctica:",
            "japaneseVoiceText": "まいにちにほんごではなすれんしゅうをしています",
            "wordBank": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています",
              "に"
            ],
            "correctSentence": [
              "まいにち",
              "にほんごで",
              "はなす",
              "れんしゅうを",
              "しています"
            ],
            "explanation": "Mainichi nihongo de hanasu renshuu o shite imasu (Todos los días practico hablar en japonés)."
          },
          {
            "id": "ex-23-wbg-3",
            "type": "match-pairs",
            "prompt": "Empareja las expresiones clave de repaso (Workbook L23):",
            "pairs": [
              {
                "id": "wbp-23-1",
                "left": "できるだけ",
                "right": "Tanto como sea posible / En la medida de lo posible"
              },
              {
                "id": "wbp-23-2",
                "left": "このあいだ",
                "right": "El otro día / Recientemente"
              },
              {
                "id": "wbp-23-3",
                "left": "ぜひ",
                "right": "Sin falta / Con mucho gusto"
              },
              {
                "id": "wbp-23-4",
                "left": "じつは (実は)",
                "right": "En realidad / La verdad es que..."
              }
            ],
            "explanation": "Adverbios y conectores conversacionales indispensables en los diálogos del Workbook de Genki II."
          }
        ]
      },
      {
        "id": "l23-node-wb-listening",
        "unitId": 23,
        "lessonNumber": 23,
        "title": "Workbook L23: Comprensión Auditiva (聞き取り練習)",
        "japaneseTitle": "第23課 ワークブック：リスニング総合",
        "description": "Sección de escucha del Workbook de la Lección 23: diálogos a velocidad natural y preguntas de situación",
        "icon": "Headphones",
        "color": "green",
        "totalSteps": 3,
        "unlocked": false,
        "completedSteps": 0,
        "stars": 0,
        "exercises": [
          {
            "id": "ex-23-wblis-1",
            "type": "listening",
            "prompt": "Escucha el diálogo del Workbook L23 y selecciona qué decidieron hacer:",
            "japaneseVoiceText": "こんしゅうまつはてんきがよさそうですから、みんなでうみへいきましょう",
            "options": [
              {
                "id": "wbl-23-1",
                "text": "Como parece que habrá buen clima este fin de semana, irán todos al mar.",
                "isCorrect": true
              },
              {
                "id": "wbl-23-2",
                "text": "Se quedarán estudiando en la biblioteca porque lloverá."
              },
              {
                "id": "wbl-23-3",
                "text": "Cancelaron el viaje por falta de tiempo."
              }
            ],
            "correctAnswerId": "wbl-23-1",
            "explanation": "Konshuumatsu wa tenki ga yosasou desu kara, minna de umi e ikimashou."
          },
          {
            "id": "ex-23-wblis-2",
            "type": "listening",
            "prompt": "Escucha el aviso en la estación de tren (Práctica Auditiva L23):",
            "japaneseVoiceText": "まもなくにばんせんにでんしゃがまいります。あぶないですから、きいろいせんのうしろまでおさがりください。",
            "options": [
              {
                "id": "wbl-23-2a",
                "text": "En breve llegará un tren al andén 2; por seguridad, retroceda detrás de la línea amarilla.",
                "isCorrect": true
              },
              {
                "id": "wbl-23-2b",
                "text": "El último tren de hoy ha sido cancelado."
              },
              {
                "id": "wbl-23-2c",
                "text": "Los boletos se venden en el segundo piso."
              }
            ],
            "correctAnswerId": "wbl-23-2a",
            "explanation": "Anuncio real de las estaciones de Japón usando まいります y おさがりください."
          },
          {
            "id": "ex-23-wblis-3",
            "type": "word-order",
            "prompt": "Del Workbook L23: Traduce \"La verdad es que todavía no he terminado el reporte\":",
            "japaneseVoiceText": "じつはまだレポートがおわっていません",
            "wordBank": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません",
              "おわりませんでした"
            ],
            "correctSentence": [
              "じつは",
              "まだ",
              "レポートが",
              "おわっていません"
            ],
            "explanation": "Jitsu wa mada repooto ga owatte imasen."
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
