import { getOfflineAudioKey } from '../utils/audioHash';
import { genkiCurriculum } from '../data/genkiCurriculum';
import { genkiVocabulary } from '../data/vocabularyData';

export interface StoredAudioRecord {
  key: string;
  blob: Blob;
  text: string;
  charId: string;
  createdAt: number;
  size: number;
}

export interface AudioStorageStats {
  count: number;
  totalSizeBytes: number;
  totalSizeMb: string;
}

export interface DownloadTaskItem {
  charId: string;
  voiceId: string;
  text: string;
  key: string;
}

const DB_NAME = 'NihongoDojoAudioDB';
const STORE_NAME = 'audio_clips';
const DB_VERSION = 1;

class AudioStorageService {
  private dbPromise: Promise<IDBDatabase> | null = null;
  private urlCache: Map<string, string> = new Map();

  private openDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        return reject(new Error('IndexedDB not supported in this environment'));
      }

      const req = window.indexedDB.open(DB_NAME, DB_VERSION);

      req.onupgradeneeded = (e) => {
        const db = (e.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        }
      };

      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });

    return this.dbPromise;
  }

  public async hasAudio(key: string): Promise<boolean> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.count(key);
        req.onsuccess = () => resolve(req.result > 0);
        req.onerror = () => resolve(false);
      });
    } catch {
      return false;
    }
  }

  public async getAudioBlob(key: string): Promise<Blob | null> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(key);
        req.onsuccess = () => {
          const record = req.result as StoredAudioRecord | undefined;
          resolve(record ? record.blob : null);
        };
        req.onerror = () => resolve(null);
      });
    } catch {
      return null;
    }
  }

  public async getAudioUrl(key: string): Promise<string | null> {
    if (this.urlCache.has(key)) {
      return this.urlCache.get(key)!;
    }

    const blob = await this.getAudioBlob(key);
    if (!blob) return null;

    const url = URL.createObjectURL(blob);
    this.urlCache.set(key, url);
    return url;
  }

  public async saveAudioBlob(key: string, blob: Blob, text: string = '', charId: string = ''): Promise<void> {
    try {
      const db = await this.openDB();
      const record: StoredAudioRecord = {
        key,
        blob,
        text,
        charId,
        createdAt: Date.now(),
        size: blob.size
      };

      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(record);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });

      // Update in-memory object URL if already cached
      if (this.urlCache.has(key)) {
        URL.revokeObjectURL(this.urlCache.get(key)!);
      }
      this.urlCache.set(key, URL.createObjectURL(blob));
    } catch (err) {
      console.warn('Failed to save audio to IndexedDB:', err);
    }
  }

  public async saveBase64Audio(key: string, base64: string, text: string = '', charId: string = ''): Promise<void> {
    try {
      const binary = window.atob(base64);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes.buffer], { type: 'audio/mp3' });
      await this.saveAudioBlob(key, blob, text, charId);
    } catch (err) {
      console.warn('Failed to convert base64 to Blob:', err);
    }
  }

  public async getStorageStats(): Promise<AudioStorageStats> {
    try {
      const db = await this.openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        let count = 0;
        let totalSizeBytes = 0;

        const cursorReq = store.openCursor();
        cursorReq.onsuccess = (e) => {
          const cursor = (e.target as IDBRequest).result as IDBCursorWithValue | null;
          if (cursor) {
            count++;
            const rec = cursor.value as StoredAudioRecord;
            if (rec && typeof rec.size === 'number') {
              totalSizeBytes += rec.size;
            } else if (rec && rec.blob && rec.blob.size) {
              totalSizeBytes += rec.blob.size;
            }
            cursor.continue();
          } else {
            resolve({
              count,
              totalSizeBytes,
              totalSizeMb: (totalSizeBytes / (1024 * 1024)).toFixed(1)
            });
          }
        };
        cursorReq.onerror = () => {
          resolve({ count: 0, totalSizeBytes: 0, totalSizeMb: '0.0' });
        };
      });
    } catch {
      return { count: 0, totalSizeBytes: 0, totalSizeMb: '0.0' };
    }
  }

  public async clearAll(): Promise<void> {
    try {
      // Revoke any created Object URLs
      for (const url of this.urlCache.values()) {
        try { URL.revokeObjectURL(url); } catch {}
      }
      this.urlCache.clear();

      const db = await this.openDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.clear();
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch (err) {
      console.warn('Failed to clear audio database:', err);
    }
  }

  // Download a single audio clip from the neural TTS API and save to IndexedDB
  public async downloadAudioClip(
    charId: string,
    voiceId: string,
    text: string,
    abortSignal?: AbortSignal
  ): Promise<boolean> {
    const cleanText = text
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/（.*?）/g, '')
      .trim();

    if (!cleanText || !/[\u3040-\u30ff\u4e00-\u9faf]/.test(cleanText)) return false;

    const key = getOfflineAudioKey(charId, cleanText);

    // If already downloaded and saved, no need to re-download
    if (await this.hasAudio(key)) return true;

    try {
      const endpoint = 'https://ottsy.weilbyte.dev/api/generation';
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 12000);

      if (abortSignal) {
        abortSignal.addEventListener('abort', () => controller.abort());
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: cleanText.replace(/(^|[^ぁ-んァ-ン一-龥])はは([^ぁ-んァ-ン一-龥]|$)/g, '$1ハハ$2'),
          voice: voiceId
        }),
        signal: controller.signal
      });
      window.clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          await this.saveBase64Audio(key, json.data, cleanText, charId);
          return true;
        }
      }
    } catch {
      // Network or abort error
    }
    return false;
  }

  // Get list of all audio items that belong to a specific unit (or 0 for Kana/Intro)
  public getUnitAudioTasks(unitId: number): DownloadTaskItem[] {
    const tasks: DownloadTaskItem[] = [];
    const seenKeys = new Set<string>();

    const charVoiceMap: Record<string, string> = {
      mary: 'jp_005',
      takeshi: 'jp_male_shuichiro',
      yamashita: 'jp_male_osada',
      michiko: 'jp_001',
      robert: 'jp_male_matsudake',
      sora: 'jp_female_rei',
      ken: 'jp_006',
      sue: 'jp_001'
    };

    const addText = (charId: string, rawText: string) => {
      const clean = (rawText || '')
        .replace(/\[.*?\]/g, '')
        .replace(/\(.*?\)/g, '')
        .replace(/（.*?）/g, '')
        .trim();
      if (!clean || !/[\u3040-\u30ff\u4e00-\u9faf]/.test(clean)) return;

      const voiceId = charVoiceMap[charId] || 'jp_005';
      const key = getOfflineAudioKey(charId, clean);
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        tasks.push({ charId, voiceId, text: clean, key });
      }
    };

    // 1. Exercises from this unit in genkiCurriculum
    const unit = genkiCurriculum.find(u => u.id === unitId);
    if (unit) {
      unit.nodes.forEach(node => {
        node.exercises.forEach(ex => {
          if (ex.japaneseVoiceText) addText('mary', ex.japaneseVoiceText);
          if (ex.promptSub && /[\u3040-\u30ff\u4e00-\u9faf]/.test(ex.promptSub)) addText('mary', ex.promptSub);
          if (ex.wordBank) {
            ex.wordBank.forEach(w => addText('mary', w));
          }
          if (ex.pairs) {
            ex.pairs.forEach(p => {
              if (p.left) addText('mary', p.left);
              if (p.right && /[\u3040-\u30ff\u4e00-\u9faf]/.test(p.right)) addText('mary', p.right);
            });
          }
          if (ex.dialogueLines) {
            ex.dialogueLines.forEach(l => {
              const spk = (l.speaker || 'mary').toLowerCase();
              let cid = 'mary';
              if (spk.includes('たけし') || spk.includes('takeshi')) cid = 'takeshi';
              else if (spk.includes('ロバート') || spk.includes('robert')) cid = 'robert';
              else if (spk.includes('やました') || spk.includes('先生') || spk.includes('profesor')) cid = 'yamashita';
              else if (spk.includes('みちこ') || spk.includes('michiko')) cid = 'michiko';
              else if (spk.includes('けん') || spk.includes('ken')) cid = 'ken';
              else if (spk.includes('スー') || spk.includes('sue')) cid = 'sue';
              else if (spk.includes('ソラ') || spk.includes('sora')) cid = 'sora';

              addText(cid, l.audioText || l.japanese);
            });
          }
        });
      });
    }

    // 2. Vocabulary words from vocabularyData for this lesson
    const vocab = genkiVocabulary.filter(v => v.lesson === unitId);
    vocab.forEach(v => {
      addText('mary', v.japanese);
    });

    return tasks;
  }

  // Batch download audio tasks with concurrency control and progress tracking
  public async downloadBatch(
    tasks: DownloadTaskItem[],
    onProgress?: (completed: number, total: number, currentText: string) => void,
    abortSignal?: AbortSignal
  ): Promise<{ succeeded: number; failed: number }> {
    let completed = 0;
    let succeeded = 0;
    let failed = 0;

    const total = tasks.length;
    if (total === 0) return { succeeded: 0, failed: 0 };

    // Concurrency limit = 2 (respectful to free TTS endpoint)
    const concurrency = 2;
    let taskIdx = 0;

    const worker = async () => {
      while (taskIdx < total) {
        if (abortSignal?.aborted) break;

        const currentTask = tasks[taskIdx++];
        if (!currentTask) break;

        try {
          const ok = await this.downloadAudioClip(
            currentTask.charId,
            currentTask.voiceId,
            currentTask.text,
            abortSignal
          );
          if (ok) succeeded++;
          else failed++;
        } catch {
          failed++;
        }

        completed++;
        if (onProgress) {
          onProgress(completed, total, currentTask.text);
        }
      }
    };

    const workers = Array.from({ length: Math.min(concurrency, total) }, () => worker());
    await Promise.all(workers);

    return { succeeded, failed };
  }
}

export const audioStorage = new AudioStorageService();

