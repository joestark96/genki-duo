import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Undo2, RotateCcw, Eye, EyeOff, CheckCircle2, Sparkles, PenTool } from 'lucide-react';
import { sound } from '../../services/sound';

interface Point {
  x: number;
  y: number;
}

interface StrokePracticeCanvasProps {
  character: string;
  expectedStrokes?: number;
  label?: string;
}

export const StrokePracticeCanvas: React.FC<StrokePracticeCanvasProps> = ({
  character,
  expectedStrokes,
  label
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [evaluation, setEvaluation] = useState<{ score: number; message: string; passed: boolean } | null>(null);

  const canvasSize = 220;

  // Reset when character changes
  useEffect(() => {
    setStrokes([]);
    setCurrentStroke([]);
    setEvaluation(null);
  }, [character]);

  // Render grid, guide character, and user strokes
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== canvasSize * dpr || canvas.height !== canvasSize * dpr) {
      canvas.width = canvasSize * dpr;
      canvas.height = canvasSize * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // 1. Clear background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // 2. Draw calligraphy grid (Genkouyoushi style)
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Horizontal & Vertical center lines
    ctx.beginPath();
    ctx.moveTo(canvasSize / 2, 0);
    ctx.lineTo(canvasSize / 2, canvasSize);
    ctx.moveTo(0, canvasSize / 2);
    ctx.lineTo(canvasSize, canvasSize / 2);
    // Diagonal lines
    ctx.moveTo(0, 0);
    ctx.lineTo(canvasSize, canvasSize);
    ctx.moveTo(canvasSize, 0);
    ctx.lineTo(0, canvasSize);
    ctx.stroke();
    ctx.setLineDash([]);

    // 3. Draw guide character if enabled
    if (showGuide) {
      ctx.fillStyle = 'rgba(148, 163, 184, 0.28)';
      ctx.font = `bold ${Math.round(canvasSize * 0.72)}px "Noto Sans JP", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(character, canvasSize / 2, canvasSize / 2 + 4);
    }

    // 4. Draw completed strokes + stroke number indicators
    const allStrokes = currentStroke.length > 0 ? [...strokes, currentStroke] : strokes;
    allStrokes.forEach((pts, sIdx) => {
      if (pts.length === 0) return;

      ctx.strokeStyle = '#1cb0f6';
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const midX = (pts[i - 1].x + pts[i].x) / 2;
        const midY = (pts[i - 1].y + pts[i].y) / 2;
        ctx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, midX, midY);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.stroke();

      // Small numbered circle at start of stroke
      const startPt = pts[0];
      ctx.fillStyle = '#0284c7';
      ctx.beginPath();
      ctx.arc(startPt.x, startPt.y, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px Nunito, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(sIdx + 1), startPt.x, startPt.y + 0.5);
    });

    ctx.restore();
  }, [character, showGuide, strokes, currentStroke]);

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const touch = e.touches[0] || e.changedTouches[0];
      return {
        x: ((touch.clientX - rect.left) / rect.width) * canvasSize,
        y: ((touch.clientY - rect.top) / rect.height) * canvasSize
      };
    }
    return {
      x: ((e.clientX - rect.left) / rect.width) * canvasSize,
      y: ((e.clientY - rect.top) / rect.height) * canvasSize
    };
  };

  const handleStart = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setEvaluation(null);
    setIsDrawing(true);
    const pt = getCoordinates(e);
    setCurrentStroke([pt]);
  };

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pt = getCoordinates(e);
    setCurrentStroke(prev => [...prev, pt]);
  };

  const handleEnd = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentStroke.length > 0) {
      sound.playTap();
      setStrokes(prev => [...prev, currentStroke]);
      setCurrentStroke([]);
    }
  };

  const handleUndo = () => {
    sound.playTap();
    setEvaluation(null);
    setStrokes(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    sound.playTap();
    setEvaluation(null);
    setStrokes([]);
    setCurrentStroke([]);
  };

  const handleEvaluate = () => {
    if (strokes.length === 0) return;

    // Create two offscreen canvases to compare pixel overlap with target glyph
    const targetCanvas = document.createElement('canvas');
    targetCanvas.width = canvasSize;
    targetCanvas.height = canvasSize;
    const tCtx = targetCanvas.getContext('2d')!;
    tCtx.fillStyle = '#000';
    tCtx.font = `bold ${Math.round(canvasSize * 0.72)}px "Noto Sans JP", sans-serif`;
    tCtx.textAlign = 'center';
    tCtx.textBaseline = 'middle';
    tCtx.fillText(character, canvasSize / 2, canvasSize / 2 + 4);

    const userCanvas = document.createElement('canvas');
    userCanvas.width = canvasSize;
    userCanvas.height = canvasSize;
    const uCtx = userCanvas.getContext('2d')!;
    uCtx.strokeStyle = '#000';
    uCtx.lineWidth = 16;
    uCtx.lineCap = 'round';
    uCtx.lineJoin = 'round';

    strokes.forEach(pts => {
      if (pts.length === 0) return;
      uCtx.beginPath();
      uCtx.moveTo(pts[0].x, pts[0].y);
      pts.forEach(p => uCtx.lineTo(p.x, p.y));
      uCtx.stroke();
    });

    const tData = tCtx.getImageData(0, 0, canvasSize, canvasSize).data;
    const uData = uCtx.getImageData(0, 0, canvasSize, canvasSize).data;

    let targetPixels = 0;
    let coveredTargetPixels = 0;
    let userPixels = 0;
    let onTargetUserPixels = 0;

    for (let i = 3; i < tData.length; i += 4) {
      const tAlpha = tData[i] > 40;
      const uAlpha = uData[i] > 40;
      if (tAlpha) {
        targetPixels++;
        if (uAlpha) coveredTargetPixels++;
      }
      if (uAlpha) {
        userPixels++;
        if (tAlpha) onTargetUserPixels++;
      }
    }

    const recall = targetPixels > 0 ? coveredTargetPixels / targetPixels : 0;
    const precision = userPixels > 0 ? onTargetUserPixels / userPixels : 0;
    let rawScore = Math.round(((recall * 0.55 + precision * 0.45) * 125));

    // Stroke count penalty/bonus if expectedStrokes is provided
    if (expectedStrokes) {
      const diff = Math.abs(strokes.length - expectedStrokes);
      if (diff === 0) {
        rawScore += 8;
      } else {
        rawScore -= diff * 6;
      }
    }

    const finalScore = Math.max(25, Math.min(100, rawScore));
    const passed = finalScore >= 65;

    if (passed) {
      sound.playCorrect();
    } else {
      sound.playTap();
    }

    let message = '';
    if (finalScore >= 88) {
      message = '¡Caligrafía impecable! Trazos precisos.';
    } else if (finalScore >= 65) {
      message = expectedStrokes && strokes.length !== expectedStrokes
        ? `¡Bien! Nota: este carácter tiene ${expectedStrokes} trazos (dibujaste ${strokes.length}).`
        : '¡Buen trazo! Forma bien reconocible.';
    } else {
      message = 'Sigue practicando sobre la guía para mejorar la proporción.';
    }

    setEvaluation({ score: finalScore, message, passed });
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-[#131f24] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3.5 flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <PenTool className="w-4 h-4 text-duo-blue" />
          <span className="text-xs font-black uppercase tracking-wide text-gray-700 dark:text-gray-200">
            {label || `Práctica de Trazo (${character})`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-lg bg-duo-blue/15 text-duo-blue font-black text-[11px]">
            Trazos: {strokes.length}{expectedStrokes ? ` / ${expectedStrokes}` : ''}
          </span>
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              setShowGuide(prev => !prev);
            }}
            className="px-2 py-1 rounded-lg bg-white dark:bg-[#18272e] border border-gray-300 dark:border-[#283842] text-[10px] font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1 cursor-pointer"
            title="Mostrar u ocultar guía de fondo"
          >
            {showGuide ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            <span>{showGuide ? 'Guía' : 'Sin Guía'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Canvas */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-duo-blue/50 shadow-inner bg-white touch-none">
        <canvas
          ref={canvasRef}
          style={{ width: `${canvasSize}px`, height: `${canvasSize}px` }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          className="cursor-crosshair block"
        />
      </div>

      {/* Action Buttons */}
      <div className="w-full flex items-center justify-center gap-2 mt-3">
        <button
          type="button"
          onClick={handleUndo}
          disabled={strokes.length === 0}
          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#18272e] border-2 border-gray-200 dark:border-[#283842] text-xs font-black text-gray-600 dark:text-gray-300 flex items-center gap-1 disabled:opacity-40 cursor-pointer hover:border-gray-400 transition-all"
        >
          <Undo2 className="w-3.5 h-3.5" />
          <span>Deshacer</span>
        </button>

        <button
          type="button"
          onClick={handleClear}
          disabled={strokes.length === 0}
          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#18272e] border-2 border-gray-200 dark:border-[#283842] text-xs font-black text-gray-600 dark:text-gray-300 flex items-center gap-1 disabled:opacity-40 cursor-pointer hover:border-gray-400 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Limpiar</span>
        </button>

        <button
          type="button"
          onClick={handleEvaluate}
          disabled={strokes.length === 0}
          className="px-3.5 py-1.5 rounded-xl bg-duo-green hover:bg-duo-green-dark text-white text-xs font-black flex items-center gap-1 shadow-[0_3px_0_0_#46a302] active:translate-y-0.5 active:shadow-none disabled:opacity-40 cursor-pointer transition-all"
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Calificar</span>
        </button>
      </div>

      {/* Evaluation Feedback */}
      {evaluation && (
        <div
          className={`w-full mt-2.5 p-2.5 rounded-xl border flex items-center justify-between gap-2 animate-fade-in ${
            evaluation.passed
              ? 'bg-duo-green-light/50 dark:bg-duo-green/20 border-duo-green text-duo-green-dark dark:text-duo-green'
              : 'bg-amber-50 dark:bg-amber-950/40 border-amber-400 text-amber-800 dark:text-amber-300'
          }`}
        >
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            <span>{evaluation.message}</span>
          </div>
          <span className="text-sm font-black flex-shrink-0">{evaluation.score}%</span>
        </div>
      )}
    </div>
  );
};
