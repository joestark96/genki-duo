const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function md5(string) {
  return crypto.createHash('md5').update(string).digest('hex');
}

function getOfflineAudioKey(charId, text) {
  const clean = (text || '')
    .replace(/\[.*?\]/g, '')
    .replace(/[。、！？!?\s「」『』（）()・〜~ー-]/g, '')
    .trim()
    .toLowerCase();
  const hash = md5(`${charId}:${clean}`).slice(0, 12);
  return `${charId}_${hash}`;
}

const CHARACTERS = [
  { id: 'mary', voice: 'jp_005' },
  { id: 'takeshi', voice: 'jp_male_shuichiro' },
  { id: 'yamashita', voice: 'jp_male_osada' },
  { id: 'michiko', voice: 'jp_001' },
  { id: 'robert', voice: 'jp_male_matsudake' },
  { id: 'sora', voice: 'jp_female_rei' },
  { id: 'ken', voice: 'jp_006' },
  { id: 'sue', voice: 'jp_001' }
];

const samplePhrases = [
  { charId: 'mary', text: 'こんにちは！メアリーです。よろしくお願いします！' },
  { charId: 'takeshi', text: 'やあ、ぼくはたけしです。いっしょに勉強しよう！' },
  { charId: 'yamashita', text: 'みなさん、こんにちは。今日も日本語をがんばりましょう。' },
  { charId: 'michiko', text: 'はじめまして、みちこです。いいお天気ですね。' },
  { charId: 'robert', text: 'こんにちは、ロバートです。日本語がおもしろいです！' },
  { charId: 'sora', text: 'こんにちは！ソラといっしょに楽しく練習しましょう！' },
  { charId: 'ken', text: 'こんにちは、けんです。ゆっくり話しましょう。' },
  { charId: 'sue', text: 'こんにちは、スーです。毎日少しずつ練習しています。' }
];

// Collect all unique non-reading texts
const curr = fs.readFileSync('src/data/genkiCurriculum.ts', 'utf8');
const lines = curr.split('\n');
let isReadingNode = false;
const generalTexts = new Set();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('"title":') || line.includes('"japaneseTitle":')) {
    if (line.includes('読み書き編') || line.includes('lectura del libro') || line.includes('Lectura Inicial')) {
      isReadingNode = true;
    } else {
      isReadingNode = false;
    }
  }
  const m = line.match(/"japaneseVoiceText":\s*"([^"]+)"/);
  if (m) {
    const text = m[1].replace(/\[.*?\]/g, '').trim();
    if (text && !isReadingNode) {
      generalTexts.add(text);
    }
  }
}

// Add common phrases
generalTexts.add('ありがとうございます');

console.log('Total non-reading general texts to prepare for each character:', generalTexts.size);

const outDir = path.join(process.cwd(), 'public', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Build list of download tasks
const tasks = [];

// 1. Add sample phrases for each character
for (const sp of samplePhrases) {
  const char = CHARACTERS.find(c => c.id === sp.charId);
  const key = getOfflineAudioKey(sp.charId, sp.text);
  tasks.push({
    charId: sp.charId,
    voice: char.voice,
    text: sp.text,
    key
  });
}

// 2. Add all general non-reading texts for each character
for (const char of CHARACTERS) {
  for (const text of generalTexts) {
    const key = getOfflineAudioKey(char.id, text);
    tasks.push({
      charId: char.id,
      voice: char.voice,
      text,
      key
    });
  }
}

console.log('Total potential clips across all characters:', tasks.length);

// Filter out already existing valid clips
const pendingTasks = [];
for (const t of tasks) {
  const filePath = path.join(outDir, `${t.key}.mp3`);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).size < 500) {
    pendingTasks.push(t);
  }
}

console.log('Clips already present on disk:', tasks.length - pendingTasks.length);
console.log('Clips pending download:', pendingTasks.length);

async function downloadSingleClip(task) {
  const filePath = path.join(outDir, `${task.key}.mp3`);

  // Special fast-path: if character is 'sue' and 'michiko' file exists for same text, copy it!
  if (task.charId === 'sue') {
    const michikoKey = getOfflineAudioKey('michiko', task.text);
    const michikoPath = path.join(outDir, `${michikoKey}.mp3`);
    if (fs.existsSync(michikoPath) && fs.statSync(michikoPath).size > 500) {
      fs.copyFileSync(michikoPath, filePath);
      return true;
    }
  }

  const endpoint = 'https://ottsy.weilbyte.dev/api/generation';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: task.text,
        voice: task.voice
      }),
      signal: controller.signal
    });
    clearTimeout(timer);

    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.data) {
        const buf = Buffer.from(data.data, 'base64');
        fs.writeFileSync(filePath, buf);
        return true;
      }
    }
  } catch (err) {
    clearTimeout(timer);
  }
  return false;
}

async function runDownloads() {
  const concurrency = 6;
  let finishedCount = 0;
  let successCount = 0;
  let failCount = 0;
  const startTime = Date.now();
  let taskIdx = 0;

  async function worker(workerId) {
    while (taskIdx < pendingTasks.length) {
      const task = pendingTasks[taskIdx++];
      const ok = await downloadSingleClip(task);
      finishedCount++;
      if (ok) {
        successCount++;
      } else {
        failCount++;
      }

      if (finishedCount % 50 === 0 || finishedCount === pendingTasks.length) {
        const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
        const rate = (finishedCount / (elapsedSec || 1)).toFixed(1);
        console.log(`[Progress] ${finishedCount}/${pendingTasks.length} (${((finishedCount/pendingTasks.length)*100).toFixed(1)}%) - Success: ${successCount}, Fail: ${failCount} - ${rate} clips/s - Elapsed: ${elapsedSec}s`);
      }
    }
  }

  const workers = Array(concurrency).fill(null).map((_, id) => worker(id));
  await Promise.all(workers);

  console.log(`\nAll downloads finished! Success: ${successCount}, Failed: ${failCount}`);

  // Re-read all mp3 files in public/audio and regenerate localAudioManifest.ts
  const allAudioFiles = fs.readdirSync(outDir).filter(f => f.endsWith('.mp3'));
  console.log(`Total MP3 files in public/audio: ${allAudioFiles.length}`);

  const manifestEntries = {};
  for (const f of allAudioFiles) {
    const key = f.replace('.mp3', '');
    manifestEntries[key] = `/audio/${f}`;
  }

  const manifestContent = `export const LOCAL_AUDIO_MANIFEST: Record<string, string> = ${JSON.stringify(manifestEntries, null, 2)};\n`;
  fs.writeFileSync('src/data/localAudioManifest.ts', manifestContent, 'utf8');
  console.log(`Updated src/data/localAudioManifest.ts with ${allAudioFiles.length} keys.`);
}

runDownloads();

