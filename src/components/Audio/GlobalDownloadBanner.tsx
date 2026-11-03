import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle2, X } from 'lucide-react';
import { audioDownloadQueue, DownloadQueueState } from '../../services/audioDownloadQueue';
import { NavTab } from '../BottomNav';

interface GlobalDownloadBannerProps {
  currentTab: NavTab;
  onNavigateToProfile: () => void;
}

export const GlobalDownloadBanner: React.FC<GlobalDownloadBannerProps> = ({
  currentTab,
  onNavigateToProfile
}) => {
  const [queueState, setQueueState] = useState<DownloadQueueState>(() => audioDownloadQueue.getState());
  const [completedDismissed, setCompletedDismissed] = useState(false);

  useEffect(() => {
    const unsubscribe = audioDownloadQueue.subscribe((st) => {
      setQueueState(st);
      if (st.status === 'completed') {
        setCompletedDismissed(false);
      }
    });
    return unsubscribe;
  }, []);

  // Auto-dismiss completed banner after 6 seconds
  useEffect(() => {
    if (queueState.status === 'completed' && !completedDismissed) {
      const timer = setTimeout(() => {
        setCompletedDismissed(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [queueState.status, completedDismissed]);

  // If user is already looking at Profile tab, hide this global mini-banner
  if (currentTab === 'profile') {
    return null;
  }

  const { isDownloading, status, progress } = queueState;
  const percent = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  if (isDownloading) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-40 max-w-md mx-auto pointer-events-auto">
        <div className="bg-white dark:bg-[#18272e] border-2 border-duo-blue rounded-2xl p-3 shadow-2xl flex flex-col gap-1.5 animate-slide-up">
          <div className="flex items-center justify-between text-xs font-black text-gray-800 dark:text-gray-100">
            <div className="flex items-center gap-2 min-w-0">
              <RefreshCw className="w-3.5 h-3.5 text-duo-blue animate-spin flex-shrink-0" />
              <span className="truncate">
                Descargando audios ({progress.completed}/{progress.total})
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <span className="text-duo-blue font-black">{percent}%</span>
              <button
                type="button"
                onClick={() => audioDownloadQueue.cancelDownload()}
                className="p-1 rounded-md text-gray-400 hover:text-rose-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                title="Cancelar descarga"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-duo-blue rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-400">
            <span className="truncate font-['Noto_Sans_JP'] max-w-[200px]">
              {progress.currentText || 'Procesando...'}
            </span>
            <button
              type="button"
              onClick={onNavigateToProfile}
              className="text-duo-blue hover:underline font-bold flex-shrink-0 ml-2 cursor-pointer"
            >
              Ver en Perfil →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'completed' && !completedDismissed && progress.succeeded > 0) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-40 max-w-md mx-auto pointer-events-auto">
        <div className="bg-emerald-600 text-white rounded-2xl p-3 shadow-2xl flex items-center justify-between gap-2 animate-bounce">
          <div className="flex items-center gap-2 min-w-0">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs font-black truncate">
              ¡Audios listos! {progress.succeeded} audios guardados offline.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setCompletedDismissed(true)}
            className="p-1 text-white/80 hover:text-white rounded-md cursor-pointer flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return null;
};
