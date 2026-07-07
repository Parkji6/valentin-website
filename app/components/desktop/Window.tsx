'use client';

import { useEffect, useRef, useState } from 'react';

interface WindowProps {
  title: string;
  zIndex: number;
  initialPos: { x: number; y: number };
  width?: number;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

// Retro OS window: title bar with traffic lights + close button, draggable
// via pointer events on desktop; a full-screen sheet on mobile.
export default function Window({ title, zIndex, initialPos, width = 480, onClose, onFocus, children }: WindowProps) {
  const [pos, setPos] = useState(initialPos);
  const [isMobile, setIsMobile] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragRef.current) return;
      const { startX, startY, baseX, baseY } = dragRef.current;
      setPos({
        x: Math.max(0, baseX + e.clientX - startX),
        y: Math.max(40, baseY + e.clientY - startY),
      });
    }
    function onUp() {
      dragRef.current = null;
    }
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  function startDrag(e: React.PointerEvent) {
    if (isMobile) return;
    dragRef.current = { startX: e.clientX, startY: e.clientY, baseX: pos.x, baseY: pos.y };
  }

  const frameStyle: React.CSSProperties = isMobile
    ? { zIndex }
    : { zIndex, left: pos.x, top: pos.y, width };

  return (
    <div
      onPointerDown={onFocus}
      style={frameStyle}
      className={
        isMobile
          ? 'fixed inset-0 flex flex-col bg-white dark:bg-ink-900'
          : 'fixed flex flex-col max-h-[72vh] bg-white dark:bg-ink-900 border border-gray-300 dark:border-ink-600 rounded-2xl shadow-card dark:shadow-card-dark overflow-hidden'
      }
    >
      {/* Title bar */}
      <div
        onPointerDown={startDrag}
        className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200 dark:border-ink-700 bg-gray-50 dark:bg-ink-800 select-none cursor-grab active:cursor-grabbing shrink-0"
      >
        <span className="flex gap-1.5">
          <button
            onClick={onClose}
            aria-label="Close window"
            className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"
          />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
        </span>
        <span className="flex-1 text-center text-xs font-semibold text-gray-600 dark:text-gray-300 truncate pr-8">
          {title}
        </span>
        <button
          onClick={onClose}
          aria-label="Close window"
          className="md:hidden text-gray-500 dark:text-gray-400 text-xl leading-none px-1"
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto p-5 md:p-6">{children}</div>
    </div>
  );
}
