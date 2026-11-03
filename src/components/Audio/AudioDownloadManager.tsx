import React, { useState, useEffect } from 'react';
import { Download, CheckCircle2, Trash2, HardDrive, RefreshCw, AlertCircle, XCircle } from 'lucide-react';
import { audioStorage, AudioStorageStats } from '../../services/audioStorage';
import { audioDownloadQueue, DownloadQueueState } from '../../services/audioDownloadQueue';
import { Unit } from '../../types';
import { sound } from '../../services/sound';

interface AudioDownloadManagerProps {
  units: Unit[];
}

export const AudioDownloadManager: React.FC<AudioDownloadManagerProps> = ({ units }) => {
  const [stats, setStats] = useState<AudioStorageStats>({ count: 0, totalSizeBytes: 0, totalSizeMb: '0.0' });
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [queueState, setQueueState] = useState<DownloadQueueState>(() => audioDownloadQueue.getState());
  const [localMessage, setLocalMessage] = useState<string | null>(null);

  const refreshStats = async () => {
    try {
      const s = await audioStorage.getStorageStats();
      setStats(s);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    refreshStats();
    const unsubscribe = audioDownloadQueue.subscribe((st) => {
      setQueueState(st);
      if (st.status === 'completed') {
        refreshStats();
      }
    });
    return unsubscribe;
  }, []);

  const handleDownloadUnit = async (targetUnitId?: number) => {
    const unitToDownload = targetUnitId !== undefined ? targetUnitId : selectedUnitId;
    sound.playTap();
    setLocalMessage(null);

    const tasks = unitToDownload === -1
      ? units.flatMap(u => audioStorage.getUnitAudioTasks(u.id))
      : audioStorage.getUnitAudioTasks(unitToDownload);

    const unitObj = units.find(u => u.id === unitToDownload);
    const unitTitle = unitToDownload === -1
      ? 'Todas las Unidades'
      : (unitObj ? `Unidad ${unitObj.id}: ${unitObj.title}` : `Unidad ${unitToDownload}`);

    await audioDownloadQueue.startDownload(tasks, unitToDownload, unitTitle);
  };

  const handleCancelDownload = () => {
    sound.playTap();
    audioDownloadQueue.cancelDownload();
  };

  const handleClearStorage = async () => {
    sound.playTap();
    if (window.confirm('¿Seguro que deseas borrar los audios descargados? Las lecturas precargadas en el APK seguirán intactas.')) {
      await audioStorage.clearAll();
      await refreshStats();
      setLocalMessage('Almacenamiento de audios liberado.');
      audioDownloadQueue.clearStatusMessage();
    }
  };

  const { isDownloading, progress, statusMessage } = queueState;
  const displayMessage = localMessage || statusMessage;

  const progressPercent = progress.total > 0
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  return (
    <div className="w-full bg-white dark:bg-[#18272e] rounded-3xl p-4 sm:p-5 border-2 border-duo-gray-200 dark:border-[#283842] shadow-duo-card mb-4 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-duo-blue flex-shrink-0" />
          <h3 className="text-sm font-black text-gray-800 dark:text-gray-100">
            Descargas y Voces Offline
          </h3>
        </div>
        <button
          type="button"
          onClick={() => {
            sound.playTap();
            refreshStats();
          }}
          className="p-1.5 rounded-lg text-gray-400 hover:text-duo-blue hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          title="Actualizar estado"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-3">
        Guarda los audios en tu celular para practicar sin conexión a internet y mantener el APK liviano:
      </p>

      {/* Status Badges */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* Pre-bundled APK badge */}
        <div className="p-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-2 min-w-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <div className="text-[11px] font-black text-emerald-800 dark:text-emerald-200 leading-tight truncate">
              Lecturas en APK
            </div>
            <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              100% Offline
            </div>
          </div>
        </div>

        {/* Device Storage Stats badge */}
        <div className="p-2.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 flex items-start gap-2 min-w-0">
          <HardDrive className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <div className="text-[11px] font-black text-sky-800 dark:text-sky-200 leading-tight truncate">
              En Celular
            </div>
            <div className="text-[10px] font-bold text-sky-600 dark:text-sky-400 truncate">
              {stats.count} audios ({stats.totalSizeMb} MB)
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar (Visible while downloading in background) */}
      {isDownloading && (
        <div className="mb-4 p-3 rounded-2xl bg-blue-50 dark:bg-[#131f24] border border-blue-200 dark:border-[#283842]">
          <div className="flex items-center justify-between text-xs font-black text-gray-700 dark:text-gray-200 mb-1.5">
            <span className="flex items-center gap-1.5 min-w-0">
              <RefreshCw className="w-3.5 h-3.5 text-duo-blue animate-spin flex-shrink-0" />
              <span className="truncate">Descargando ({progress.completed}/{progress.total})</span>
            </span>
            <span className="text-duo-blue flex-shrink-0 ml-2">{progressPercent}%</span>
          </div>

          {/* Progress track */}
          <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-duo-blue rounded-full transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] text-gray-500 dark:text-gray-400 truncate font-['Noto_Sans_JP'] max-w-[200px]">
              {progress.currentText || 'Descargando audios...'}
            </span>
            <button
              type="button"
              onClick={handleCancelDownload}
              className="px-2 py-0.5 rounded-md text-[10px] font-bold text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950/50 transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
            >
              <XCircle className="w-3 h-3" />
              <span>Cancelar</span>
            </button>
          </div>
        </div>
      )}

      {/* Status message */}
      {displayMessage && !isDownloading && (
        <div className="mb-3 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-duo-blue flex-shrink-0" />
          <span className="break-words flex-1">{displayMessage}</span>
        </div>
      )}

      {/* Downloader Controls */}
      <div className="flex flex-col gap-2">
        <select
          value={selectedUnitId}
          onChange={(e) => setSelectedUnitId(parseInt(e.target.value))}
          disabled={isDownloading}
          className="w-full min-w-0 px-3 py-2.5 bg-gray-50 dark:bg-[#131f24] border border-gray-300 dark:border-[#283842] rounded-xl text-xs font-bold text-gray-800 dark:text-gray-100 focus:outline-none focus:border-duo-blue disabled:opacity-60"
        >
          <option value={-1}>🌟 Todas las Unidades (1 al 23)</option>
          {units.filter(u => u.id >= 1).map(u => (
            <option key={u.id} value={u.id}>
              Unidad {u.id}: {u.title}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={isDownloading}
          onClick={() => handleDownloadUnit()}
          className="w-full py-2.5 px-4 bg-duo-blue border-b-2 border-duo-blue-dark text-white rounded-xl text-xs font-black shadow-duo-btn-sm active:translate-y-0.5 hover:bg-blue-400 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          <span>{isDownloading ? 'Descargando en segundo plano...' : 'Descargar Audios de la Unidad'}</span>
        </button>

        {/* Clear Storage Button */}
        {stats.count > 0 && (
          <button
            type="button"
            disabled={isDownloading}
            onClick={handleClearStorage}
            className="self-center sm:self-end text-[11px] font-bold text-gray-400 hover:text-rose-500 transition-colors flex items-center gap-1 py-1 px-2 cursor-pointer mt-1"
          >
            <Trash2 className="w-3 h-3" />
            <span>Liberar {stats.totalSizeMb} MB ({stats.count} audios)</span>
          </button>
        )}
      </div>

      {/* Note */}
      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 italic text-center sm:text-left">
        💡 Las descargas continúan automáticamente aunque cambies de pantalla o salgas de la app.
      </p>
    </div>
  );
};
