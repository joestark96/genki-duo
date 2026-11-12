import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { Undo2, RotateCcw, Eye, EyeOff, CheckCircle2, Sparkles, PenTool, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { sound } from '../../services/sound';
import { getStrokePathsForCharacter } from '../../data/strokePathsData';

interface Point {
  x: number;
  y: number;
}

interface StrokePracticeCanvasProps {
  character: string;
  expectedStrokes?: number;
  label?: string;
  initialShowGuide?: boolean;
  onEvaluated?: (score: number, passed: boolean) => void;
}

export const StrokePracticeCanvas: React.FC<StrokePracticeCanvasProps> = ({
  character,
  expectedStrokes,
  label,
  initialShowGuide = true,
  onEvaluated
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(initialShowGuide);
  const [evaluation, setEvaluation] = useState<{ score: number; message: string; passed: boolean } | null>(null);

  // Stroke Order Animation State
  const [activeTab, setActiveTab] = useState<'draw' | 'demo'>('draw');
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [animStrokeIdx, setAnimStrokeIdx] = useState(0);
  const [animProgress, setAnimProgress] = useState(0); // 0 to 1 for current stroke
  const [animSpeed, setAnimSpeed] = useState<'normal' | 'slow'>('normal');
  const animFrameRef = useRef<number | null>(null);

  const canvasSize = 220;

  const strokePaths = useMemo(() => {
    return getStrokePathsForCharacter(character, expectedStrokes || 3);
  }, [character, expectedStrokes]);

  // Reset when character changes
  useEffect(() => {
    setStrokes([]);
    setCurrentStroke([]);
    setEvaluation(null);
    setShowGuide(initialShowGuide);
    setIsPlayingDemo(false);
    setAnimStrokeIdx(0);
    setAnimProgress(0);
  }, [character, initialShowGuide]);

  // Demo Animation Frame Loop
  useEffect(() => {
    if (!isPlayingDemo) {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      return;
    }

    const stepSpeed = animSpeed === 'slow' ? 0.015 : 0.035;

    const animateLoop = () => {
      setAnimProgress(prevProg => {
        const nextProg = prevProg + stepSpeed;
        if (nextProg >= 1) {
          setAnimStrokeIdx(prevIdx => {
            const nextIdx = prevIdx + 1;
            if (nextIdx >= strokePaths.length) {
              // Finished all strokes
              setIsPlayingDemo(false);
              return strokePaths.length;
            } else {
              sound.playTap();
              return nextIdx;
            }
          });
          return 0;
        }
        return nextProg;
      });

      animFrameRef.current = requestAnimationFrame(animateLoop);
    };

    animFrameRef.current = requestAnimationFrame(animateLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [isPlayingDemo, animSpeed, strokePaths.length]);

  // Render grid, guide character, and user strokes or demo animation
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

    // 3. Draw guide character if enabled or in demo mode
    if (showGuide || activeTab === 'demo') {
      ctx.fillStyle = activeTab === 'demo' ? 'rgba(203, 213, 225, 0.35)' : 'rgba(148, 163, 184, 0.28)';
      ctx.font = `bold ${Math.round(canvasSize * 0.72)}px "Noto Sans JP", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(character, canvasSize / 2, canvasSize / 2 + 4);
    }

    if (activeTab === 'demo') {
      // --- DEMO ANIMATION MODE ---
      strokePaths.forEach((strk, sIdx) => {
        if (sIdx > animStrokeIdx) return;
        const pts = strk.points.map(p => ({ x: p.x * canvasSize, y: p.y * canvasSize }));
        if (pts.length === 0) return;

        const isCurrent = sIdx === animStrokeIdx;
        const ptsToDraw = isCurrent
          ? pts.slice(0, Math.max(1, Math.floor(pts.length * animProgress)))
          : pts;

        if (ptsToDraw.length > 0) {
          ctx.strokeStyle = isCurrent ? '#0284c7' : '#0f172a';
          ctx.lineWidth = 10;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          ctx.beginPath();
          ctx.moveTo(ptsToDraw[0].x, ptsToDraw[0].y);
          for (let i = 1; i < ptsToDraw.length; i++) {
            const midX = (ptsToDraw[i - 1].x + ptsToDraw[i].x) / 2;
            const midY = (ptsToDraw[i - 1].y + ptsToDraw[i].y) / 2;
            ctx.quadraticCurveTo(ptsToDraw[i - 1].x, ptsToDraw[i - 1].y, midX, midY);
          }
          ctx.stroke();

          // Draw floating calligraphy brush cursor at current animation point
          if (isCurrent && ptsToDraw.length > 0) {
            const head = ptsToDraw[ptsToDraw.length - 1];
            ctx.fillStyle = '#0284c7';
            ctx.beginPath();
            ctx.arc(head.x, head.y, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Draw numbered badge at start of stroke
        const startPt = pts[0];
        ctx.fillStyle = isCurrent ? '#0284c7' : '#10b981';
        ctx.beginPath();
        ctx.arc(startPt.x, startPt.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px Nunito, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(sIdx + 1), startPt.x, startPt.y + 0.5);
      });
    } else {
      // --- INTERACTIVE DRAWING MODE ---
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
    }

    ctx.restore();
  }, [character, showGuide, strokes, currentStroke, activeTab, animStrokeIdx, animProgress, strokePaths]);

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
    if (activeTab === 'demo') return;
    e.preventDefault();
    setEvaluation(null);
    setIsDrawing(true);
    const pt = getCoordinates(e);
    setCurrentStroke([pt]);
  };

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (activeTab === 'demo' || !isDrawing) return;
    e.preventDefault();
    const pt = getCoordinates(e);
    setCurrentStroke(prev => [...prev, pt]);
  };

  const handleEnd = () => {
    if (activeTab === 'demo' || !isDrawing) return;
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

  const handleToggleDemoPlay = () => {
    sound.playTap();
    if (isPlayingDemo) {
      setIsPlayingDemo(false);
    } else {
      if (animStrokeIdx >= strokePaths.length) {
        setAnimStrokeIdx(0);
        setAnimProgress(0);
      }
      setIsPlayingDemo(true);
    }
  };

  const handleStepPrev = () => {
    sound.playTap();
    setIsPlayingDemo(false);
    setAnimProgress(1);
    setAnimStrokeIdx(prev => Math.max(0, prev - 1));
  };

  const handleStepNext = () => {
    sound.playTap();
    setIsPlayingDemo(false);
    setAnimProgress(1);
    setAnimStrokeIdx(prev => Math.min(strokePaths.length, prev + 1));
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
    uCtx.lineWidth = 14;
    uCtx.lineCap = 'round';
    uCtx.lineJoin = 'round';

    strokes.forEach(pts => {
      if (pts.length === 0) return;
      uCtx.beginPath();
      uCtx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        const midX = (pts[i - 1].x + pts[i].x) / 2;
        const midY = (pts[i - 1].y + pts[i].y) / 2;
        uCtx.quadraticCurveTo(pts[i - 1].x, pts[i - 1].y, midX, midY);
      }
      uCtx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      uCtx.stroke();
    });

    const targetImg = tCtx.getImageData(0, 0, canvasSize, canvasSize).data;
    const userImg = uCtx.getImageData(0, 0, canvasSize, canvasSize).data;

    let targetPixels = 0;
    let overlapPixels = 0;
    let excessPixels = 0;

    for (let i = 3; i < targetImg.length; i += 4) {
      const inTarget = targetImg[i] > 30;
      const inUser = userImg[i] > 30;

      if (inTarget) targetPixels++;
      if (inTarget && inUser) overlapPixels++;
      if (!inTarget && inUser) excessPixels++;
    }

    if (targetPixels === 0) return;

    const coverage = overlapPixels / targetPixels;
    const precision = overlapPixels / Math.max(1, overlapPixels + excessPixels * 0.4);
    let rawScore = Math.round((coverage * 0.65 + precision * 0.35) * 100);

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
    onEvaluated?.(finalScore, passed);
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-[#131f24] border-2 border-duo-gray-200 dark:border-[#283842] rounded-2xl p-3.5 flex flex-col items-center">
      {/* Header with Mode Switcher (Dibujar vs Demostración) */}
      <div className="w-full flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1 bg-gray-200/80 dark:bg-gray-800 p-0.5 rounded-xl">
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              setIsPlayingDemo(false);
              setActiveTab('draw');
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'draw'
                ? 'bg-white dark:bg-[#18272e] text-duo-blue shadow-2xs'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Dibujar</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playTap();
              setActiveTab('demo');
              setAnimStrokeIdx(0);
              setAnimProgress(0);
              setIsPlayingDemo(true);
            }}
            className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'demo'
                ? 'bg-white dark:bg-[#18272e] text-indigo-600 dark:text-indigo-400 shadow-2xs'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Animar Trazos</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {activeTab === 'draw' ? (
            <>
              <span className="px-2 py-0.5 rounded-lg bg-duo-blue/15 text-duo-blue font-black text-[11px]">
                {strokes.length}{expectedStrokes ? `/${expectedStrokes}` : ''}
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
            </>
          ) : (
            <span className="px-2 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-black text-[11px]">
              Paso {Math.min(strokePaths.length, animStrokeIdx + 1)} / {strokePaths.length}
            </span>
          )}
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
          className={`${activeTab === 'draw' ? 'cursor-crosshair' : 'cursor-default'} block`}
        />
      </div>

      {/* Controls based on active tab */}
      {activeTab === 'demo' ? (
        <div className="w-full flex flex-col gap-2 mt-3 animate-fade-in">
          {/* Playback bar */}
          <div className="flex items-center justify-between gap-1.5 p-2 rounded-xl bg-white dark:bg-[#18272e] border border-gray-200 dark:border-[#283842]">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleStepPrev}
                disabled={animStrokeIdx <= 0}
                className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 disabled:opacity-40 hover:bg-gray-200 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"
                title="Paso anterior"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleToggleDemoPlay}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center gap-1 shadow-2xs active:translate-y-0.5 transition-all cursor-pointer"
              >
                {isPlayingDemo ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlayingDemo ? 'Pausar' : animStrokeIdx >= strokePaths.length ? 'Reiniciar' : 'Animar'}</span>
              </button>

              <button
                type="button"
                onClick={handleStepNext}
                disabled={animStrokeIdx >= strokePaths.length}
                className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 disabled:opacity-40 hover:bg-gray-200 transition-colors cursor-pointer text-gray-700 dark:text-gray-300"
                title="Siguiente paso"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  sound.playTap();
                  setAnimSpeed(s => s === 'normal' ? 'slow' : 'normal');
                }}
                className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[10px] font-black text-gray-700 dark:text-gray-300 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {animSpeed === 'slow' ? '🐢 Lento' : '⚡ 1x'}
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playTap();
                  setActiveTab('draw');
                  setShowGuide(true);
                }}
                className="px-2.5 py-1 rounded-lg bg-duo-green hover:bg-duo-green-dark text-white text-[11px] font-black transition-colors cursor-pointer"
              >
                ¡Practicar!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center gap-2 mt-3 animate-fade-in">
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
      )}

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
