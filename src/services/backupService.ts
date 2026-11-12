import { dbService } from './db';
import { UserProfile } from '../types';

export interface NihonGoBackupPayload {
  appName: 'NihonGo!';
  version: string;
  exportedAt: string;
  profile: UserProfile;
  lessonProgress: Record<string, { unlocked: boolean; completedSteps: number; stars: number; totalSteps?: number }>;
  flashcardSRS: Record<string, { srsLevel: number; intervalDays: number; nextReviewDate: string; timesReviewed: number; timesCorrect: number }>;
  quests?: Record<string, any>;
  dailyStats?: Record<string, any>;
}

const BACKUP_TIMESTAMP_KEY = 'nihongo_last_backup_at';

export const backupService = {
  getLastBackupDate(): string | null {
    try {
      return localStorage.getItem(BACKUP_TIMESTAMP_KEY);
    } catch {
      return null;
    }
  },

  async exportBackupData(): Promise<NihonGoBackupPayload> {
    const nowIso = new Date().toISOString();
    try {
      localStorage.setItem(BACKUP_TIMESTAMP_KEY, nowIso);
    } catch {
      // ignore
    }

    const profile = await dbService.getUserProfile();
    const lessonProgress = await dbService.getLessonProgress();
    const flashcardSRS = await dbService.getFlashcardSRSMap();

    // Collect daily quests and stats from localStorage
    const quests: Record<string, any> = {};
    const dailyStats: Record<string, any> = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('genki_quests_')) {
          quests[key] = JSON.parse(localStorage.getItem(key) || '{}');
        } else if (key && key.startsWith('genki_daily_stats_')) {
          dailyStats[key] = JSON.parse(localStorage.getItem(key) || '{}');
        }
      }
    } catch {
      // ignore
    }

    return {
      appName: 'NihonGo!',
      version: '1.1.2',
      exportedAt: nowIso,
      profile,
      lessonProgress,
      flashcardSRS,
      quests,
      dailyStats,
    };
  },

  downloadBackupFile(jsonString: string, fileName: string): void {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  async exportToDriveOrShare(): Promise<{ shared: boolean; fileName: string }> {
    const payload = await this.exportBackupData();
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const datePart = `${yyyy}-${mm}-${dd}`;
    const fileName = `nihongo-respaldo-${datePart}.json`;
    const jsonString = JSON.stringify(payload, null, 2);
    const file = new File([jsonString], fileName, { type: 'application/json' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `Respaldo NihonGo! (${datePart})`,
        text: 'Guarda este archivo en tu Google Drive para respaldar tu progreso de NihonGo!.',
        files: [file],
      });
      return { shared: true, fileName };
    } else {
      this.downloadBackupFile(jsonString, fileName);
      return { shared: false, fileName };
    }
  },

  async importBackupData(payload: Partial<NihonGoBackupPayload>): Promise<boolean> {
    if (!payload || typeof payload !== 'object') {
      throw new Error('El archivo de respaldo no es válido.');
    }

    const hasValidKeys =
      payload.appName === 'NihonGo!' ||
      payload.profile !== undefined ||
      payload.lessonProgress !== undefined ||
      payload.flashcardSRS !== undefined;

    if (!hasValidKeys) {
      throw new Error('El archivo seleccionado no pertenece a un respaldo de NihonGo!.');
    }

    // Rehydrate SQLite & fallback
    await dbService.importAllData({
      profile: payload.profile || (await dbService.getUserProfile()),
      lessonProgress: payload.lessonProgress || {},
      flashcardSRS: payload.flashcardSRS || {},
    });

    // Rehydrate quests & daily stats
    if (payload.quests && typeof payload.quests === 'object') {
      for (const [k, v] of Object.entries(payload.quests)) {
        try {
          localStorage.setItem(k, JSON.stringify(v));
        } catch {}
      }
    }
    if (payload.dailyStats && typeof payload.dailyStats === 'object') {
      for (const [k, v] of Object.entries(payload.dailyStats)) {
        try {
          localStorage.setItem(k, JSON.stringify(v));
        } catch {}
      }
    }

    try {
      localStorage.setItem(BACKUP_TIMESTAMP_KEY, new Date().toISOString());
    } catch {}

    return true;
  },
};
