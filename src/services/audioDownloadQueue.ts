import { audioStorage, DownloadTaskItem } from './audioStorage';
import { sound } from './sound';

export interface DownloadQueueProgress {
  completed: number;
  total: number;
  currentText: string;
  succeeded: number;
  failed: number;
  unitId: number;
  unitTitle: string;
}

export type DownloadQueueStatus = 'idle' | 'downloading' | 'completed' | 'cancelled' | 'error';

export interface DownloadQueueState {
  isDownloading: boolean;
  status: DownloadQueueStatus;
  progress: DownloadQueueProgress;
  statusMessage: string | null;
}

class AudioDownloadQueueService {
  private state: DownloadQueueState = {
    isDownloading: false,
    status: 'idle',
    progress: {
      completed: 0,
      total: 0,
      currentText: '',
      succeeded: 0,
      failed: 0,
      unitId: 1,
      unitTitle: ''
    },
    statusMessage: null
  };

  private listeners = new Set<(state: DownloadQueueState) => void>();
  private abortController: AbortController | null = null;
  private wakeLockSentinel: any = null;
  private remainingTasks: DownloadTaskItem[] = [];
  private isProcessing = false;

  constructor() {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.handleAppResume();
        }
      });
    }
  }

  public getState(): DownloadQueueState {
    return {
      ...this.state,
      progress: { ...this.state.progress }
    };
  }

  public subscribe(listener: (state: DownloadQueueState) => void): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const currentState = this.getState();
    this.listeners.forEach(fn => {
      try {
        fn(currentState);
      } catch (e) {
        console.warn('Listener error in AudioDownloadQueue:', e);
      }
    });
  }

  private async acquireWakeLock() {
    try {
      if (typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
        this.wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
        if (this.wakeLockSentinel) {
          this.wakeLockSentinel.addEventListener('release', () => {
            this.wakeLockSentinel = null;
          });
        }
      }
    } catch {
      // Screen WakeLock is optional; ignore if denied or unsupported
    }
  }

  private async releaseWakeLock() {
    try {
      if (this.wakeLockSentinel) {
        await this.wakeLockSentinel.release();
        this.wakeLockSentinel = null;
      }
    } catch {
      // Ignore
    }
  }

  private async handleAppResume() {
    if (this.state.isDownloading) {
      if (!this.wakeLockSentinel) {
        await this.acquireWakeLock();
      }
      if (!this.isProcessing && this.remainingTasks.length > 0) {
        this.processQueue();
      }
    }
  }

  public async startDownload(
    tasks: DownloadTaskItem[],
    unitId: number,
    unitTitle: string
  ): Promise<void> {
    if (this.state.isDownloading) {
      return;
    }

    if (tasks.length === 0) {
      this.state = {
        isDownloading: false,
        status: 'idle',
        progress: { completed: 0, total: 0, currentText: '', succeeded: 0, failed: 0, unitId, unitTitle },
        statusMessage: 'No se encontraron audios nuevos para descargar en esta unidad.'
      };
      this.notify();
      return;
    }

    this.abortController = new AbortController();
    this.remainingTasks = [...tasks];

    this.state = {
      isDownloading: true,
      status: 'downloading',
      progress: {
        completed: 0,
        total: tasks.length,
        currentText: 'Iniciando descarga...',
        succeeded: 0,
        failed: 0,
        unitId,
        unitTitle
      },
      statusMessage: null
    };
    this.notify();

    await this.acquireWakeLock();
    await this.processQueue();
  }

  private async processQueue() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    const concurrency = 2;
    const signal = this.abortController?.signal;

    const worker = async () => {
      while (this.remainingTasks.length > 0) {
        if (signal?.aborted) break;

        const currentTask = this.remainingTasks.shift();
        if (!currentTask) break;

        this.state.progress.currentText = currentTask.text;
        this.notify();

        let ok = false;
        try {
          ok = await audioStorage.downloadAudioClip(
            currentTask.charId,
            currentTask.voiceId,
            currentTask.text,
            signal
          );

          // Retry once on failure if not aborted
          if (!ok && !signal?.aborted) {
            await new Promise(r => setTimeout(r, 600));
            ok = await audioStorage.downloadAudioClip(
              currentTask.charId,
              currentTask.voiceId,
              currentTask.text,
              signal
            );
          }
        } catch {
          ok = false;
        }

        if (ok) {
          this.state.progress.succeeded++;
        } else {
          this.state.progress.failed++;
        }

        this.state.progress.completed++;
        this.notify();
      }
    };

    try {
      const workers = Array.from(
        { length: Math.min(concurrency, this.remainingTasks.length || 1) },
        () => worker()
      );
      await Promise.all(workers);
    } finally {
      this.isProcessing = false;
    }

    // Check completion state
    if (signal?.aborted) {
      this.state.isDownloading = false;
      this.state.status = 'cancelled';
      this.state.statusMessage = 'Descarga cancelada.';
      await this.releaseWakeLock();
      this.notify();
    } else if (this.remainingTasks.length === 0) {
      this.state.isDownloading = false;
      this.state.status = 'completed';
      this.state.statusMessage = `¡Descarga lista! ${this.state.progress.succeeded} audios guardados para uso 100% offline.`;
      await this.releaseWakeLock();
      this.notify();
      sound.playLessonComplete();
    }
  }

  public cancelDownload() {
    if (this.abortController) {
      this.abortController.abort();
    }
    this.remainingTasks = [];
    this.state.isDownloading = false;
    this.state.status = 'cancelled';
    this.state.statusMessage = 'Descarga cancelada.';
    this.releaseWakeLock();
    this.notify();
  }

  public clearStatusMessage() {
    this.state.statusMessage = null;
    this.notify();
  }
}

export const audioDownloadQueue = new AudioDownloadQueueService();
