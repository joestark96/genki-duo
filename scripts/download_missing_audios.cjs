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

const existingFiles = new Set(fs.readdirSync(outDir));

// Collect all Japanese texts
const allTexts = new Set();

// 1. genkiCurriculum.ts
const curr = fs.readFileSync('src/data/genkiCurriculum.ts', 'utf8');
for (const m of curr.matchAll(/"japaneseVoiceText":\s*"([^"]+)"/g)) {
  allTexts.add(m[1]);
}
for (const m of curr.matchAll(/"left":\s*"([^"]+)"/g)) {
  if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(m[1])) {
    allTexts.add(m[1]);
  }
}
for (const m of curr.matchAll(/"wordBank":\s*\[(.*?)\]/gs)) {
  for (const w of m[1].matchAll(/"([^"]+)"/g)) {
    if (/[\u3040-\u30ff\u4e00-\u9faf]/.test(w[1])) {
      allTexts.add(w[1]);
    }
  }
}
for (const m of curr.matchAll(/"audioText":\s*"([^"]+)"/g)) {
  allTexts.add(m[1]);
}

// 2. vocabularyData.ts
const vocab = fs.readFileSync('src/data/vocabularyData.ts', 'utf8');
for (const m of vocab.matchAll(/japanese:\s*'\''([^'\'']+)'\''/g)) {
  allTexts.add(m[1]);
}

// 3. kanaTableData.ts
const kana = fs.readFileSync('src/data/kanaTableData.ts', 'utf8');
for (const m of kana.matchAll(/kana:\s*'\''([^'\'']+)'\''/g)) {
  allTexts.add(m[1]);
}

console.log(`Total raw Japanese texts discovered: ${allTexts.size}`);

// Build tasks for Mary (default universal fallback)
const tasks = [];
for (const raw of allTexts) {
  const clean = raw
    .replace(/\[.*?\]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/（.*?）/g, '')
    .trim();
  if (!clean) continue;
  if (!/[\u3040-\u30ff\u4e00-\u9faf]/.test(clean)) continue;

  const key = getOfflineAudioKey('mary', clean);
  const fileName = `${key}.mp3`;
  const filePath = path.join(outDir, fileName);

  if (!existingFiles.has(fileName) || (fs.existsSync(filePath) && fs.statSync(filePath).size < 500)) {
    tasks.push({
      text: clean,
      voice: 'jp_003',
      key
    });
  }
}

// Deduplicate tasks by key
const uniqueTasksMap = new Map();
for (const t of tasks) {
  if (!uniqueTasksMap.has(t.key)) {
    uniqueTasksMap.set(t.key, t);
  }
}
const pendingTasks = Array.from(uniqueTasksMap.values());

console.log(`Clips to download: ${pendingTasks.length}`);

async function downloadClip(task) {
  const filePath = path.join(outDir, `${task.key}.mp3`);
  const endpoint = 'https://ottsy.weilbyte.dev/api/generation';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);

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

async function run() {
  if (pendingTasks.length === 0) {
    console.log('All clips already downloaded!');
    updateManifest();
    return;
  }

  const concurrency = 8;
  let finished = 0;
  let success = 0;
  let failed = 0;
  let taskIndex = 0;
  const start = Date.now();

  async function worker() {
    while (taskIndex < pendingTasks.length) {
      const current = pendingTasks[taskIndex++];
      const ok = await downloadClip(current);
      finished++;
      if (ok) success++;
      else failed++;

      if (finished % 25 === 0 || finished === pendingTasks.length) {
        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        const percent = ((finished / pendingTasks.length) * 100).toFixed(1);
        const rate = (finished / (elapsed || 1)).toFixed(1);
        console.log(`[${finished}/${pendingTasks.length}] ${percent}% | OK: ${success}, Fail: ${failed} | ${rate} clips/s | ${elapsed}s`);
      }
    }
  }

  await Promise.all(Array(concurrency).fill(null).map(() => worker()));
  console.log(`Finished downloads. Success: ${success}, Failed: ${failed}`);

  updateManifest();
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

run();

