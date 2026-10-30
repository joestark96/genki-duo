/**
 * Japanese Speech Normalization and Comparison Utility
 * 
 * Resolves discrepancies between Google/Capacitor Automatic Speech Recognition (ASR)
 * and Genki curriculum dialogue lines.
 * 
 * Handles:
 * - Arabic / Kanji numbers: "12時半です" <-> "じゅうにじはんです"
 * - Full-width / half-width digits & characters
 * - Time & counter expressions (時, 分, 半, 年生, 歳, 円, 人, 月, 日)
 * - Katakana to Hiragana conversion
 * - High-frequency Genki Kanji to Hiragana dictionary
 * - Romaji conversion and phonetic matching
 * - Levenshtein string similarity
 */

const KANJI_TO_HIRAGANA: [string, string][] = [
  // Greetings & Conversational formulas
  ['初めまして', 'はじめまして'],
  ['有難うございます', 'ありがとうございます'],
  ['有難う御座います', 'ありがとうございます'],
  ['ありがとうございます', 'ありがとうございます'],
  ['有難う', 'ありがとう'],
  ['お早うございます', 'おはようございます'],
  ['お早う', 'おはよう'],
  ['今日は', 'こんにちは'],
  ['今晩は', 'こんばんは'],
  ['頂きます', 'いただきます'],
  ['御馳走様でした', 'ごちそうさまでした'],
  ['御馳走さまでした', 'ごちそうさまでした'],
  ['宜しくお願いします', 'よろしくおねがいします'],
  ['よろしくお願いします', 'よろしくおねがいします'],
  ['よろしくお願いしま', 'よろしくおねがいしま'],
  ['宜しく', 'よろしく'],
  ['失礼します', 'しつれいします'],
  ['失礼しました', 'しつれいしました'],
  ['すいません', 'すみません'],
  ['どういたしまして', 'どういたしまして'],

  // Numbers, Questions & Time expressions
  ['何時', 'なんじ'],
  ['何分', 'なんぷん'],
  ['何年生', 'なんねんせい'],
  ['何歳', 'なんさい'],
  ['何才', 'なんさい'],
  ['何人', 'なんにん'],
  ['何月', 'なんがつ'],
  ['何日', 'なんにち'],
  ['何曜日', 'なんようび'],
  ['何番', 'なんばん'],
  ['何語', 'なんご'],
  ['今何時', 'いまなんじ'],
  ['時半', 'じはん'],
  ['半', 'はん'],
  ['午前', 'ごぜん'],
  ['午後', 'ごご'],
  ['朝ご飯', 'あさごはん'],
  ['昼ご飯', 'ひるごはん'],
  ['晩ご飯', 'ばんごはん'],
  ['朝', 'あさ'],
  ['昼', 'ひる'],
  ['晩', 'ばん'],
  ['夜', 'よる'],
  ['今朝', 'けさ'],
  ['今晩', 'こんばん'],
  ['今日', 'きょう'],
  ['明日', 'あした'],
  ['昨日', 'きのう'],
  ['一昨日', 'おととい'],
  ['明後日', 'あさって'],
  ['毎日', 'まいにち'],
  ['毎朝', 'まいあさ'],
  ['毎晩', 'まいばん'],
  ['今週', 'こんしゅう'],
  ['先週', 'せんしゅう'],
  ['来週', 'らいしゅう'],
  ['週末', 'しゅうまつ'],
  ['今年', 'ことし'],
  ['去年', 'きょねん'],
  ['来年', 'らいねん'],
  ['時間', 'じかん'],
  ['月曜日', 'げつようび'],
  ['火曜日', 'かようび'],
  ['水曜日', 'すいようび'],
  ['木曜日', 'もくようび'],
  ['金曜日', 'きんようび'],
  ['土曜日', 'どようび'],
  ['日曜日', 'にちようび'],

  // People, Roles & Education
  ['大学院生', 'だいがくいんせい'],
  ['大学生', 'だいがくせい'],
  ['高校生', 'こうこうせい'],
  ['留学生', 'りゅうがくせい'],
  ['学生', 'がくせい'],
  ['先生', 'せんせい'],
  ['大学', 'だいがく'],
  ['高校', 'こうこう'],
  ['学校', 'がっこう'],
  ['図書館', 'としょかん'],
  ['郵便局', 'ゆうびんきょく'],
  ['銀行', 'ぎんこう'],
  ['病院', 'びょういん'],
  ['喫茶店', 'きっさてん'],
  ['会社員', 'かいしゃいん'],
  ['会社', 'かいしゃ'],
  ['医者', 'いしゃ'],
  ['弁護士', 'べんごし'],
  ['主婦', 'しゅふ'],
  ['仕事', 'しごと'],
  ['専攻', 'せんこう'],
  ['専門', 'せんもん'],
  ['日本語', 'にほんご'],
  ['英語', 'えいご'],
  ['日本', 'にほん'],
  ['友達', 'ともだち'],
  ['友だち', 'ともだち'],
  ['名前', 'なまえ'],
  ['電話番号', 'でんわばんごう'],
  ['電話', 'でんわ'],
  ['番号', 'ばんごう'],
  ['私', 'わたし'],
  ['僕', 'ぼく'],
  ['誰', 'だれ'],
  ['何', 'なん'],
  ['今', 'いま'],
  ['父', 'ちち'],
  ['母', 'はは'],
  ['お父さん', 'おとうさん'],
  ['お母さん', 'おかあさん'],
  ['お兄さん', 'おにいさん'],
  ['お姉さん', 'おねえさん'],
  ['兄', 'あに'],
  ['姉', 'あね'],
  ['弟', 'おとうと'],
  ['妹', 'いもうと'],
  ['家族', 'かぞく'],

  // Verbs (Polite and basic stems)
  ['勉強します', 'べんきょうします'],
  ['勉強する', 'べんきょうする'],
  ['勉強', 'べんきょう'],
  ['話せます', 'はなせます'],
  ['話せません', 'はなせません'],
  ['話します', 'はなします'],
  ['話す', 'はなす'],
  ['食べます', 'たべます'],
  ['食べません', 'たべません'],
  ['食べた', 'たべた'],
  ['食べる', 'たべる'],
  ['飲みます', 'のみます'],
  ['飲みません', 'のみません'],
  ['飲む', 'のむ'],
  ['行きます', 'いきます'],
  ['行きません', 'いきません'],
  ['行く', 'いく'],
  ['行った', 'いった'],
  ['来ます', 'きます'],
  ['来ません', 'きません'],
  ['来る', 'くる'],
  ['来た', 'きた'],
  ['帰ります', 'かえります'],
  ['帰りません', 'かえりません'],
  ['帰る', 'かえる'],
  ['見ます', 'みます'],
  ['見ません', 'みません'],
  ['見る', 'みる'],
  ['聞きます', 'ききます'],
  ['聞きません', 'ききません'],
  ['聞く', 'きく'],
  ['読みます', 'よみます'],
  ['読みません', 'よみません'],
  ['読む', 'よむ'],
  ['書きます', 'かきます'],
  ['書きません', 'かきません'],
  ['書く', 'かく'],
  ['買います', 'かいます'],
  ['買いません', 'かいません'],
  ['買う', 'かう'],
  ['起きます', 'おきます'],
  ['寝ます', 'ねます'],

  // Adjectives & Expressions
  ['少し', 'すこし'],
  ['大丈夫', 'だいじょうぶ'],
  ['大変', 'たいへん'],
  ['面白い', 'おもしろい'],
  ['忙しい', 'いそがしい'],
  ['高い', 'たかい'],
  ['安い', 'やすい'],
  ['大きい', 'おおきい'],
  ['小さい', 'ちいさい'],
  ['新しい', 'あたらしい'],
  ['古い', 'ふるい'],
  ['暑い', 'あつい'],
  ['寒い', 'さむい'],
  ['好き', 'すき'],
  ['嫌い', 'きらい'],
  ['静か', 'しずか'],
  ['元気', 'げんき'],
  ['綺麗', 'きれい'],
  ['本当', 'ほんとう'],
  ['結構', 'けっこう'],
  ['部屋', 'へや'],
  ['家', 'いえ']
];

const KANJI_DIGITS: Record<string, number> = {
  '〇': 0, '零': 0, '一': 1, '二': 2, '三': 3, '四': 4,
  '五': 5, '六': 6, '七': 7, '八': 8, '九': 9
};

export function fullWidthToHalfWidth(str: string): string {
  return str
    .replace(/[０-９]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
    .replace(/[Ａ-Ｚ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
    .replace(/[ａ-ｚ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
    .replace(/：/g, ':');
}

export function katakanaToHiragana(str: string): string {
  return str.replace(/[\u30a1-\u30f6]/g, ch => 
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
}

export function kanjiNumberToDigits(str: string): string {
  return str.replace(/([一二三四五六七八九]?十[一二三四五六七八九]?|[一二三四五六七八九]+)/g, (match) => {
    if (match.includes('十')) {
      const parts = match.split('十');
      const tens = parts[0] ? (KANJI_DIGITS[parts[0]] ?? 1) : 1;
      const ones = parts[1] ? (KANJI_DIGITS[parts[1]] ?? 0) : 0;
      return String(tens * 10 + ones);
    }
    let numStr = '';
    for (const c of match) {
      if (KANJI_DIGITS[c] !== undefined) numStr += KANJI_DIGITS[c];
      else return match;
    }
    return numStr || match;
  });
}

export function numberToHiragana(num: number | string): string {
  const n = typeof num === 'string' ? parseInt(num, 10) : num;
  if (isNaN(n)) return '';
  if (n === 0) return 'ぜろ';

  const ones = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];

  if (n < 10) return ones[n];
  if (n === 10) return 'じゅう';
  if (n < 20) return 'じゅう' + ones[n % 10];
  if (n < 100) {
    const t = Math.floor(n / 10);
    const o = n % 10;
    return (t === 1 ? 'じゅう' : ones[t] + 'じゅう') + (o > 0 ? ones[o] : '');
  }
  if (n === 100) return 'ひゃく';
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const rem = n % 100;
    let hStr = '';
    if (h === 1) hStr = 'ひゃく';
    else if (h === 3) hStr = 'さんびゃく';
    else if (h === 6) hStr = 'ろっぴゃく';
    else if (h === 8) hStr = 'はっぴゃく';
    else hStr = ones[h] + 'ひゃく';
    return hStr + (rem > 0 ? numberToHiragana(rem) : '');
  }
  if (n === 1000) return 'せん';
  if (n < 10000) {
    const th = Math.floor(n / 1000);
    const rem = n % 1000;
    let thStr = '';
    if (th === 1) thStr = 'せん';
    else if (th === 3) thStr = 'さんぜん';
    else if (th === 8) thStr = 'はっせん';
    else thStr = ones[th] + 'せん';
    return thStr + (rem > 0 ? numberToHiragana(rem) : '');
  }
  return String(n);
}

function normalizeHours(h: string): string {
  const num = parseInt(h, 10);
  if (num === 4) return 'よじ';
  if (num === 7) return 'しちじ';
  if (num === 9) return 'くじ';
  if (num === 14) return 'じゅうよじ';
  if (num === 17) return 'じゅうしちじ';
  if (num === 19) return 'じゅうくじ';
  return numberToHiragana(num) + 'じ';
}

function normalizeMinutes(m: string): string {
  const num = parseInt(m, 10);
  if (num === 0) return '';
  if (num === 30) return 'さんじゅっぷん';
  const specialMin: Record<number, string> = {
    1: 'いっぷん', 2: 'にふん', 3: 'さんぷん', 4: 'よんぷん', 5: 'ごふん',
    6: 'ろっぷん', 7: 'ななふん', 8: 'はっぷん', 9: 'きゅうふん', 10: 'じゅっぷん',
    15: 'じゅうごふん', 20: 'にじゅっぷん', 45: 'よんじゅうごふん', 50: 'ごじゅっぷん'
  };
  if (specialMin[num]) return specialMin[num];
  return numberToHiragana(num) + 'ふん';
}

/**
 * Normalizes Japanese text for robust speech-to-text comparison.
 * Handles numbers, time, counters, kanji compounds, katakana and punctuation.
 */
export function normalizeJapaneseSpeechText(raw: string): string {
  if (!raw) return '';
  let str = fullWidthToHalfWidth(raw.trim());

  // 1. Convert Kanji numbers (十二時 -> 12時)
  str = kanjiNumberToDigits(str);

  // 2. Time expressions (e.g. 12:30 -> 12時半, 12時半 -> じゅうにじはん)
  str = str.replace(/(\d+):30/g, '$1時半');
  str = str.replace(/(\d+):(\d+)/g, (_, h, m) => `${h}時${m}分`);
  str = str.replace(/(\d+)時半/g, (_, h) => normalizeHours(h) + 'はん');
  str = str.replace(/(\d+)時/g, (_, h) => normalizeHours(h));
  str = str.replace(/(\d+)分/g, (_, m) => normalizeMinutes(m));

  // 3. Counters (e.g. 1年生 -> いちねんせい, 20歳 -> はたち, 100円 -> ひゃくえん)
  str = str.replace(/(\d+)年生/g, (_, n) => {
    const num = parseInt(n, 10);
    return (num === 4 ? 'よ' : numberToHiragana(num)) + 'ねんせい';
  });
  str = str.replace(/20(歳|才)/g, 'はたち');
  str = str.replace(/(\d+)(歳|才)/g, (_, n) => {
    const num = parseInt(n, 10);
    if (num === 1) return 'いっさい';
    if (num === 8) return 'はっさい';
    if (num === 18) return 'じゅうはっさい';
    return numberToHiragana(num) + 'さい';
  });
  str = str.replace(/(\d+)円/g, (_, n) => numberToHiragana(n) + 'えん');
  str = str.replace(/1人/g, 'ひとり');
  str = str.replace(/2人/g, 'ふたり');
  str = str.replace(/4人/g, 'よにん');
  str = str.replace(/(\d+)人/g, (_, n) => numberToHiragana(n) + 'にん');

  // Convert standalone digits
  str = str.replace(/\d+/g, n => numberToHiragana(n));

  // 4. Kanji compounds dictionary
  for (const [kanji, hira] of KANJI_TO_HIRAGANA) {
    if (str.includes(kanji)) {
      str = str.split(kanji).join(hira);
    }
  }

  // 5. Katakana to Hiragana
  str = katakanaToHiragana(str);

  // 6. Remove symbols, punctuation, spaces, prolonged sound marks
  str = str.replace(/[。、！？!?\s「」『』（）()・〜~ー\-_:;\.,\/]/g, '');

  return str.toLowerCase();
}

/**
 * Basic Kana to Romaji converter for secondary phonetic matching
 */
const KANA_ROMAJI_MAP: Record<string, string> = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
  しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho',
  にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
  みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
  ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
  ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', を: 'wo', ん: 'n',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  っ: 't'
};

export function kanaToRomaji(hira: string): string {
  let res = '';
  for (let i = 0; i < hira.length; i++) {
    const two = hira.slice(i, i + 2);
    if (KANA_ROMAJI_MAP[two]) {
      res += KANA_ROMAJI_MAP[two];
      i++;
      continue;
    }
    const one = hira[i];
    if (KANA_ROMAJI_MAP[one]) {
      res += KANA_ROMAJI_MAP[one];
    } else {
      res += one;
    }
  }
  return res;
}

export function levenshteinSimilarity(s1: string, s2: string): number {
  if (s1 === s2) return 100;
  if (!s1 || !s2) return 0;
  const longer = s1.length >= s2.length ? s1 : s2;
  const shorter = s1.length < s2.length ? s1 : s2;
  if (longer.length === 0) return 100;

  if (longer.includes(shorter)) {
    return Math.round((shorter.length / longer.length) * 100);
  }

  const costs: number[] = [];
  for (let i = 0; i <= longer.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= shorter.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[shorter.length] = lastValue;
  }
  const editDistance = costs[shorter.length];
  return Math.max(0, Math.round(((longer.length - editDistance) / longer.length) * 100));
}

/**
 * Computes speech match score (0-100) between user spoken transcript and expected targets.
 */
export function computeJapaneseSpeechMatch(
  spoken: string,
  targets: (string | undefined | null)[]
): number {
  if (!spoken) return 0;

  const validTargets = targets.filter((t): t is string => typeof t === 'string' && t.trim().length > 0);
  if (validTargets.length === 0) return 0;

  const normSpoken = normalizeJapaneseSpeechText(spoken);
  const romajiSpoken = kanaToRomaji(normSpoken);

  let bestScore = 0;

  for (const rawTarget of validTargets) {
    // 1. Direct Japanese normalization
    const normTarget = normalizeJapaneseSpeechText(rawTarget);
    if (normSpoken && normTarget) {
      if (normSpoken === normTarget) return 100;
      if (normTarget.includes(normSpoken) || normSpoken.includes(normTarget)) {
        const ratio = Math.round(
          (Math.min(normSpoken.length, normTarget.length) / Math.max(normSpoken.length, normTarget.length)) * 100
        );
        bestScore = Math.max(bestScore, Math.max(88, ratio));
      } else {
        const sc = levenshteinSimilarity(normSpoken, normTarget);
        bestScore = Math.max(bestScore, sc);
      }
    }

    // 2. Romaji comparison (especially when rawTarget is already romaji like "Juuniji han desu.")
    const cleanRawRomaji = rawTarget
      .replace(/[。、！？!?\s「」『』（）()・〜~ー\-_:;\.,\/]/g, '')
      .toLowerCase();

    if (/^[a-z]+$/.test(cleanRawRomaji)) {
      if (romajiSpoken === cleanRawRomaji) return 100;
      if (romajiSpoken.includes(cleanRawRomaji) || cleanRawRomaji.includes(romajiSpoken)) {
        bestScore = Math.max(bestScore, 88);
      } else {
        const sc = levenshteinSimilarity(romajiSpoken, cleanRawRomaji);
        bestScore = Math.max(bestScore, sc);
      }
    } else {
      const romajiTarget = kanaToRomaji(normTarget);
      if (romajiSpoken && romajiTarget) {
        if (romajiSpoken === romajiTarget) return 100;
        const sc = levenshteinSimilarity(romajiSpoken, romajiTarget);
        bestScore = Math.max(bestScore, sc);
      }
    }
  }

  return bestScore;
}
