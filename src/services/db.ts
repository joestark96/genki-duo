import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { UserProfile, Flashcard } from '../types';

const DB_NAME = 'genki_duo_db';

class DatabaseService {
  private sqlite: SQLiteConnection | null = null;
  private db: SQLiteDBConnection | null = null;
  private isNative: boolean = false;
  private initialized: boolean = false;

  // In-memory / localStorage cache fallback for ultra-fast response & offline browser safety
  private fallbackKey = 'genki_duo_storage_v1';

  constructor() {
    this.isNative = Capacitor.isNativePlatform();
  }

  public async init(): Promise<void> {
    if (this.initialized) return;

    try {
      this.sqlite = new SQLiteConnection(CapacitorSQLite);

      if (!this.isNative) {
        // Web platform setup for jeep-sqlite if registered
        const jeepEl = document.querySelector('jeep-sqlite');
        if (jeepEl) {
          await customElements.whenDefined('jeep-sqlite');
          await this.sqlite.initWebStore();
        }
      }

      // Check if connection already exists or create new one
      const isConn = await this.sqlite.isConnection(DB_NAME, false);
      if (isConn.result) {
        this.db = await this.sqlite.retrieveConnection(DB_NAME, false);
      } else {
        this.db = await this.sqlite.createConnection(
          DB_NAME,
          false,
          'no-encryption',
          1,
          false
        );
      }

      await this.db.open();
      await this.createTables();

      if (!this.isNative) {
        await this.sqlite.saveToStore(DB_NAME);
      }

      this.initialized = true;
      console.log('SQLite Database initialized successfully on:', this.isNative ? 'Native' : 'Web/Jeep');
    } catch (err) {
      console.warn('SQLite native/jeep-sqlite setup notice (using resilient SQLite web cache layer):', err);
      this.initFallbackStorage();
      this.initialized = true;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) return;

    const schema = `
      CREATE TABLE IF NOT EXISTS user_profile (
        id TEXT PRIMARY KEY,
        username TEXT,
        xp INTEGER DEFAULT 0,
        streakDays INTEGER DEFAULT 0,
        lastActiveDate TEXT,
        hearts INTEGER DEFAULT 5,
        maxHearts INTEGER DEFAULT 5,
        gems INTEGER DEFAULT 50,
        soundEnabled INTEGER DEFAULT 1,
        furiganaMode TEXT DEFAULT 'always',
        showRomaji INTEGER DEFAULT 1,
        darkMode INTEGER DEFAULT 0,
        preferredVoiceId TEXT DEFAULT 'mary'
      );

      CREATE TABLE IF NOT EXISTS lesson_progress (
        node_id TEXT PRIMARY KEY,
        unit_id INTEGER,
        unlocked INTEGER DEFAULT 0,
        completed_steps INTEGER DEFAULT 0,
        total_steps INTEGER DEFAULT 3,
        stars INTEGER DEFAULT 0,
        updated_at TEXT
      );

      CREATE TABLE IF NOT EXISTS flashcard_srs (
        card_id TEXT PRIMARY KEY,
        category TEXT,
        srs_level INTEGER DEFAULT 0,
        interval_days INTEGER DEFAULT 1,
        next_review_date TEXT,
        times_reviewed INTEGER DEFAULT 0,
        times_correct INTEGER DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS quiz_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        node_id TEXT,
        score INTEGER,
        errors INTEGER,
        created_at TEXT
      );
    `;

    await this.db.execute(schema);

    // Apply incremental migrations for existing databases
    try {
      await this.db.execute('ALTER TABLE user_profile ADD COLUMN showRomaji INTEGER DEFAULT 1;');
    } catch {
      // Column may already exist
    }
    try {
      await this.db.execute('ALTER TABLE user_profile ADD COLUMN darkMode INTEGER DEFAULT 0;');
    } catch {
      // Column may already exist
    }
    try {
      await this.db.execute("ALTER TABLE user_profile ADD COLUMN preferredVoiceId TEXT DEFAULT 'mary';");
    } catch {
      // Column may already exist
    }
  }

  // Fallback storage synchronization (transparently mimics SQLite schema)
  private initFallbackStorage() {
    const raw = localStorage.getItem(this.fallbackKey);
    if (!raw) {
      const defaultState = {
        profile: {
          id: 'local_user',
          username: 'Estudiante Genki',
          xp: 0,
          streakDays: 0,
          lastActiveDate: '',
          hearts: 5,
          maxHearts: 5,
          gems: 100,
          soundEnabled: true,
          furiganaMode: 'always',
          showRomaji: true,
          darkMode: false
        },
        lessonProgress: {
          'l0-node-1': { nodeId: 'l0-node-1', unitId: 0, unlocked: true, completedSteps: 0, totalSteps: 3, stars: 0 }
        },
        flashcardSRS: {},
        quizHistory: []
      };
      localStorage.setItem(this.fallbackKey, JSON.stringify(defaultState));
    }
  }

  private getFallbackData() {
    const raw = localStorage.getItem(this.fallbackKey);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error('Error parsing fallback data', e);
      }
    }
    return null;
  }

  private saveFallbackData(data: unknown) {
    localStorage.setItem(this.fallbackKey, JSON.stringify(data));
  }

  // --- USER PROFILE ---

  public async getUserProfile(): Promise<UserProfile> {
    await this.init();

    if (this.db) {
      try {
        const res = await this.db.query('SELECT * FROM user_profile WHERE id = ?;', ['local_user']);
        if (res.values && res.values.length > 0) {
          const row = res.values[0];
          return {
            id: row.id,
            username: row.username,
            xp: row.xp,
            streakDays: row.streakDays,
            lastActiveDate: row.lastActiveDate,
            hearts: row.hearts,
            maxHearts: row.maxHearts,
            gems: row.gems,
            soundEnabled: row.soundEnabled === 1,
            furiganaMode: row.furiganaMode,
            showRomaji: row.showRomaji === undefined || row.showRomaji === null ? true : row.showRomaji === 1,
            darkMode: row.darkMode === 1,
            preferredVoiceId: row.preferredVoiceId || 'mary'
          };
        }
      } catch (e) {
        console.error('SQLite query error, falling back', e);
      }
    }

    const fb = this.getFallbackData();
    if (fb && fb.profile) {
      return {
        ...fb.profile,
        showRomaji: fb.profile.showRomaji !== false,
        darkMode: !!fb.profile.darkMode,
        preferredVoiceId: fb.profile.preferredVoiceId || 'mary'
      };
    }

    return {
      id: 'local_user',
      username: 'Estudiante Genki',
      xp: 0,
      streakDays: 0,
      lastActiveDate: '',
      hearts: 5,
      maxHearts: 5,
      gems: 100,
      soundEnabled: true,
      furiganaMode: 'always',
      showRomaji: true,
      darkMode: false,
      preferredVoiceId: 'mary'
    };
  }

  public async saveUserProfile(profile: UserProfile): Promise<void> {
    await this.init();

    if (this.db) {
      try {
        const query = `
          INSERT OR REPLACE INTO user_profile (id, username, xp, streakDays, lastActiveDate, hearts, maxHearts, gems, soundEnabled, furiganaMode, showRomaji, darkMode, preferredVoiceId)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        await this.db.run(query, [
          profile.id,
          profile.username,
          profile.xp,
          profile.streakDays,
          profile.lastActiveDate,
          profile.hearts,
          profile.maxHearts,
          profile.gems,
          profile.soundEnabled ? 1 : 0,
          profile.furiganaMode,
          profile.showRomaji ? 1 : 0,
          profile.darkMode ? 1 : 0,
          profile.preferredVoiceId || 'mary'
        ]);
        if (!this.isNative && this.sqlite) {
          await this.sqlite.saveToStore(DB_NAME);
        }
      } catch (e) {
        console.error('SQLite update error', e);
      }
    }

    const fb = this.getFallbackData() || {};
    fb.profile = profile;
    this.saveFallbackData(fb);
  }

  // --- LESSON PROGRESS ---

  public async getLessonProgress(): Promise<Record<string, { unlocked: boolean; completedSteps: number; stars: number }>> {
    await this.init();

    if (this.db) {
      try {
        const res = await this.db.query('SELECT * FROM lesson_progress;');
        if (res.values) {
          const result: Record<string, { unlocked: boolean; completedSteps: number; stars: number }> = {};
          for (const row of res.values) {
            result[row.node_id] = {
              unlocked: row.unlocked === 1,
              completedSteps: row.completed_steps,
              stars: row.stars
            };
          }
          return result;
        }
      } catch (e) {
        console.error('SQLite query error', e);
      }
    }

    const fb = this.getFallbackData();
    return fb?.lessonProgress || {
      'l0-node-1': { unlocked: true, completedSteps: 0, stars: 0 }
    };
  }

  public async saveLessonNodeProgress(nodeId: string, unitId: number, unlocked: boolean, completedSteps: number, totalSteps: number, stars: number): Promise<void> {
    await this.init();

    if (this.db) {
      try {
        const query = `
          INSERT OR REPLACE INTO lesson_progress (node_id, unit_id, unlocked, completed_steps, total_steps, stars, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        await this.db.run(query, [
          nodeId,
          unitId,
          unlocked ? 1 : 0,
          completedSteps,
          totalSteps,
          stars,
          new Date().toISOString()
        ]);
        if (!this.isNative && this.sqlite) {
          await this.sqlite.saveToStore(DB_NAME);
        }
      } catch (e) {
        console.error('SQLite save node error', e);
      }
    }

    const fb = this.getFallbackData() || {};
    if (!fb.lessonProgress) fb.lessonProgress = {};
    fb.lessonProgress[nodeId] = {
      unlocked,
      completedSteps,
      stars
    };
    this.saveFallbackData(fb);
  }

  // --- FLASHCARD SRS ---

  public async getFlashcardSRSMap(): Promise<Record<string, { srsLevel: number; intervalDays: number; nextReviewDate: string; timesReviewed: number; timesCorrect: number }>> {
    await this.init();

    if (this.db) {
      try {
        const res = await this.db.query('SELECT * FROM flashcard_srs;');
        if (res.values) {
          const map: Record<string, { srsLevel: number; intervalDays: number; nextReviewDate: string; timesReviewed: number; timesCorrect: number }> = {};
          for (const row of res.values) {
            map[row.card_id] = {
              srsLevel: row.srs_level,
              intervalDays: row.interval_days,
              nextReviewDate: row.next_review_date,
              timesReviewed: row.times_reviewed,
              timesCorrect: row.times_correct
            };
          }
          return map;
        }
      } catch (e) {
        console.error('SQLite query srs error', e);
      }
    }

    const fb = this.getFallbackData();
    return fb?.flashcardSRS || {};
  }

  public async updateFlashcardSRS(cardId: string, category: string, rating: 'again' | 'hard' | 'good' | 'easy'): Promise<void> {
    const srsMap = await this.getFlashcardSRSMap();
    const current = srsMap[cardId] || {
      srsLevel: 0,
      intervalDays: 1,
      nextReviewDate: new Date().toISOString(),
      timesReviewed: 0,
      timesCorrect: 0
    };

    let newLevel = current.srsLevel;
    let newInterval = current.intervalDays;
    let isCorrect = false;

    switch (rating) {
      case 'again':
        newLevel = Math.max(0, newLevel - 1);
        newInterval = 1;
        break;
      case 'hard':
        newInterval = Math.max(1, Math.round(newInterval * 1.2));
        isCorrect = true;
        break;
      case 'good':
        newLevel = Math.min(3, newLevel + 1);
        newInterval = Math.max(2, Math.round(newInterval * 2));
        isCorrect = true;
        break;
      case 'easy':
        newLevel = 3;
        newInterval = Math.max(4, Math.round(newInterval * 3.5));
        isCorrect = true;
        break;
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);

    const updated = {
      srsLevel: newLevel,
      intervalDays: newInterval,
      nextReviewDate: nextDate.toISOString(),
      timesReviewed: current.timesReviewed + 1,
      timesCorrect: current.timesCorrect + (isCorrect ? 1 : 0)
    };

    if (this.db) {
      try {
        const query = `
          INSERT OR REPLACE INTO flashcard_srs (card_id, category, srs_level, interval_days, next_review_date, times_reviewed, times_correct)
          VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
        await this.db.run(query, [
          cardId,
          category,
          updated.srsLevel,
          updated.intervalDays,
          updated.nextReviewDate,
          updated.timesReviewed,
          updated.timesCorrect
        ]);
        if (!this.isNative && this.sqlite) {
          await this.sqlite.saveToStore(DB_NAME);
        }
      } catch (e) {
        console.error('SQLite update SRS error', e);
      }
    }

    const fb = this.getFallbackData() || {};
    if (!fb.flashcardSRS) fb.flashcardSRS = {};
    fb.flashcardSRS[cardId] = updated;
    this.saveFallbackData(fb);
  }

  // Reset database option for user testing
  public async resetAllProgress(): Promise<void> {
    if (this.db) {
      try {
        await this.db.execute('DELETE FROM user_profile; DELETE FROM lesson_progress; DELETE FROM flashcard_srs; DELETE FROM quiz_history;');
      } catch (e) {
        console.warn('SQLite clear error', e);
      }
    }
    localStorage.removeItem(this.fallbackKey);
    localStorage.removeItem('genki_heart_regen_ts');
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('genki_quests_')) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
    } catch {
      // ignore storage errors
    }
    this.initFallbackStorage();
  }

  // Import and rehydrate full database from backup
  public async importAllData(data: {
    profile: UserProfile;
    lessonProgress: Record<string, { unlocked: boolean; completedSteps: number; stars: number; totalSteps?: number }>;
    flashcardSRS: Record<string, { srsLevel: number; intervalDays: number; nextReviewDate: string; timesReviewed: number; timesCorrect: number }>;
  }): Promise<void> {
    await this.init();

    if (this.db) {
      try {
        await this.db.execute('DELETE FROM user_profile; DELETE FROM lesson_progress; DELETE FROM flashcard_srs; DELETE FROM quiz_history;');
      } catch (e) {
        console.warn('SQLite clear error before import:', e);
      }
    }

    // Save profile
    if (data.profile) {
      await this.saveUserProfile(data.profile);
    }

    // Save lesson progress
    if (data.lessonProgress) {
      for (const [nodeId, prog] of Object.entries(data.lessonProgress)) {
        let unitId = 0;
        const match = nodeId.match(/^l(\d+)-/);
        if (match) {
          unitId = parseInt(match[1], 10);
        }
        await this.saveLessonNodeProgress(
          nodeId,
          unitId,
          prog.unlocked,
          prog.completedSteps,
          prog.totalSteps || 3,
          prog.stars
        );
      }
    }

    // Save flashcards SRS
    if (data.flashcardSRS) {
      for (const [cardId, srs] of Object.entries(data.flashcardSRS)) {
        if (this.db) {
          try {
            const query = `
              INSERT OR REPLACE INTO flashcard_srs (card_id, category, srs_level, interval_days, next_review_date, times_reviewed, times_correct)
              VALUES (?, ?, ?, ?, ?, ?, ?);
            `;
            await this.db.run(query, [
              cardId,
              'general',
              srs.srsLevel,
              srs.intervalDays,
              srs.nextReviewDate,
              srs.timesReviewed,
              srs.timesCorrect
            ]);
          } catch (e) {
            console.error('SQLite insert SRS on import error:', e);
          }
        }
      }
    }

    // Update fallback storage
    const fallback = {
      profile: data.profile,
      lessonProgress: data.lessonProgress,
      flashcardSRS: data.flashcardSRS,
      quizHistory: []
    };
    this.saveFallbackData(fallback);

    if (!this.isNative && this.sqlite) {
      try {
        await this.sqlite.saveToStore(DB_NAME);
      } catch (e) {
        console.warn('saveToStore warning:', e);
      }
    }
  }
}

export const dbService = new DatabaseService();

