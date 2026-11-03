const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function md5(string) {
  return crypto.createHash('md5').update(string).digest('hex');
}

function getOfflineAudioKey(charId, text) {
  const clean = (text || '')
    .replace(/\[.*?\]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/（.*?）/g, '')
    .replace(/[。、！？!?\s「」『』（）()・〜~ー-]/g, '')
    .trim()
    .toLowerCase();
  const hash = md5(`${charId}:${clean}`).slice(0, 12);
  return `${charId}_${hash}`;
}

const outDir = path.join(process.cwd(), 'public', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Identify and remove any files generated with bad voice jp_003 (created between 10:43 and 10:48 on Nov 1)
const files = fs.readdirSync(outDir);
let purgedBadJp003 = 0;
for (const f of files) {
  if (f.startsWith('mary_') && f.endsWith('.mp3')) {
    const fullP = path.join(outDir, f);
    const mtime = fs.statSync(fullP).mtime;
    const mtimeHours = mtime.getUTCHours();
    const mtimeMins = mtime.getUTCMinutes();
    // 16:44 to 16:47 UTC
    if (mtime.toISOString().startsWith('2026-11-01T16:4')) {
      // Except mary_dd7dbadc74db.mp3 which was already fixed with jp_005 at 17:25
      if (f !== 'mary_dd7dbadc74db.mp3') {
        fs.unlinkSync(fullP);
        purgedBadJp003++;
      }
    }
  }
}
console.log(`Purged ${purgedBadJp003} audio files that were generated with the glitched jp_003 voice.`);

// Refresh existing files set
const existingFiles = new Set(fs.readdirSync(outDir));

// Collect all Japanese texts across the app
const allTexts = new Set();

// 1. genkiCurriculum.ts
const curr = fs.readFileSync('src/data/genkiCurriculum.ts', 'utf8');
for (const m of curr.matchAll(/"japaneseVoiceText":\s*"([^"]+)"/g)) allTexts.add(m[1]);
for (const m of curr.matchAll(/"left":\s*"([^"]+)"/g)) {
  if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(m[1])) allTexts.add(m[1]);
}
for (const m of curr.matchAll(/"wordBank":\s*\[(.*?)\]/gs)) {
  for (const w of m[1].matchAll(/"([^"]+)"/g)) {
    if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(w[1])) allTexts.add(w[1]);
  }
}
for (const m of curr.matchAll(/"audioText":\s*"([^"]+)"/g)) allTexts.add(m[1]);

// 2. vocabularyData.ts
const vocab = fs.readFileSync('src/data/vocabularyData.ts', 'utf8');
for (const m of vocab.matchAll(/japanese:\s*['"]([^'"]+)['"]/g)) allTexts.add(m[1]);

// 3. kanaTableData.ts
const kana = fs.readFileSync('src/data/kanaTableData.ts', 'utf8');
for (const m of kana.matchAll(/hira:\s*['"]([^'"]+)['"]/g)) allTexts.add(m[1]);
for (const m of kana.matchAll(/kata:\s*['"]([^'"]+)['"]/g)) allTexts.add(m[1]);
for (const m of kana.matchAll(/example:\s*['"]([^'"]+)['"]/g)) allTexts.add(m[1]);

console.log(`Discovered ${allTexts.size} distinct Japanese text items.`);

// Character definitions with their genuine neural voice IDs
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

// Clean texts
const cleanedTexts = [];
for (const raw of allTexts) {
  const clean = raw
    .replace(/\[.*?\]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/（.*?）/g, '')
    .trim();
  if (clean && /[\u3040-\u30ff\u4e00-\u9faf]/.test(clean)) {
    cleanedTexts.push(clean);
  }
}

// Build task list: Mary, Takeshi, Yamashita first, then remaining characters
const tasks = [];
for (const char of CHARACTERS) {
  for (const text of cleanedTexts) {
    const key = getOfflineAudioKey(char.id, text);
    const fileName = `${key}.mp3`;
    const filePath = path.join(outDir, fileName);

    if (!existingFiles.has(fileName) || (fs.existsSync(filePath) && fs.statSync(filePath).size < 500)) {
      tasks.push({
        charId: char.id,
        voice: char.voice,
        text,
        key
      });
    }
  }
}

console.log(`Total missing clips to generate: ${tasks.length}`);

async function downloadClip(task) {
  const filePath = path.join(outDir, `${task.key}.mp3`);
  const endpoint = 'https://ottsy.weilbyte.dev/api/generation';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);

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

function updateManifest() {
  const allAudioFiles = fs.readdirSync(outDir).filter(f => f.endsWith('.mp3'));
  console.log(`Total MP3 files in public/audio: ${allAudioFiles.length}`);

  const manifest = {};
  for (const f of allAudioFiles) {
    const key = f.replace('.mp3', '');
    manifest[key] = `/audio/${f}`;
  }

  const content = `export const LOCAL_AUDIO_MANIFEST: Record<string, string> = ${JSON.stringify(manifest, null, 2)};\n`;
  fs.writeFileSync('src/data/localAudioManifest.ts', content, 'utf8');
  console.log(`Updated src/data/localAudioManifest.ts with ${allAudioFiles.length} keys.`);
}

async function run() {
  if (tasks.length === 0) {
    console.log('All character clips already present!');
    updateManifest();
    return;
  }

  const concurrency = 10;
  let finished = 0;
  let success = 0;
  let failed = 0;
  let taskIndex = 0;
  const start = Date.now();

  async function worker() {
    while (taskIndex < tasks.length) {
      const current = tasks[taskIndex++];
      const ok = await downloadClip(current);
      finished++;
      if (ok) success++;
      else failed++;

      if (finished % 50 === 0 || finished === tasks.length) {
        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        const percent = ((finished / tasks.length) * 100).toFixed(1);
        const rate = (finished / (elapsed || 1)).toFixed(1);
        console.log(`[${finished}/${tasks.length}] ${percent}% | OK: ${success}, Fail: ${failed} | ${rate} clips/s | ${elapsed}s`);
      }
    }
  }

  await Promise.all(Array(concurrency).fill(null).map(() => worker()));
  console.log(`Finished generation. Success: ${success}, Failed: ${failed}`);

  updateManifest();
}

run();

