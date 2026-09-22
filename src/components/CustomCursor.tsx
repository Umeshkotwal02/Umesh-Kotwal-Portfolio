import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type CursorStyleMode = 'reticle' | 'minimal' | 'difference';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [cursorMode, setCursorMode] = useState<CursorStyleMode>('reticle');
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const clickIdRef = useRef(0);

  useEffect(() => {
    // Load saved cursor mode if any
    const saved = localStorage.getItem('uk_cursor_mode') as CursorStyleMode;
    if (saved && (saved === 'reticle' || saved === 'minimal' || saved === 'difference')) {
      setCursorMode(saved);
    }

    const handleStyleChange = (e: any) => {
      if (e.detail && ['reticle', 'minimal', 'difference'].includes(e.detail)) {
        setCursorMode(e.detail);
      }
    };
    window.addEventListener('cursor-style-change', handleStyleChange);
    return () => window.removeEventListener('cursor-style-change', handleStyleChange);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target) {
        const interactiveEl = target.closest('button, a, input, textarea, [role="button"], select');
        const isInteractive = Boolean(interactiveEl);
        setIsPointer(isInteractive);

        // Check if target has data-cursor label
        const cursorLabel = target.getAttribute('data-cursor') || target.closest('[data-cursor]')?.getAttribute('data-cursor');
        setHoverText(cursorLabel || null);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const id = ++clickIdRef.current;
      setClicks((prev) => [...prev.slice(-3), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 600);
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Click Ripples */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 0.8, scale: 0.3 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed rounded-full border border-[#FF5722]"
            style={{
              left: click.x - 24,
              top: click.y - 24,
              width: 48,
              height: 48,
            }}
          />
        ))}
      </AnimatePresence>

      {/* DIFFERENCE MODE */}
      {cursorMode === 'difference' && (
        <>
          {/* Blend Lens */}
          <motion.div
            className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none"
            animate={{
              x: position.x - (isPointer ? 28 : 16),
              y: position.y - (isPointer ? 28 : 16),
              width: isPointer ? 56 : 32,
              height: isPointer ? 56 : 32,
              scale: isClicking ? 0.85 : 1,
            }}
            transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.1 }}
          />
          {/* Micro Orange Core */}
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FF5722]"
            animate={{
              x: position.x - 3,
              y: position.y - 3,
            }}
            transition={{ type: 'spring', stiffness: 1200, damping: 50 }}
          />
        </>
      )}

      {/* MINIMAL MODE */}
      {cursorMode === 'minimal' && (
        <>
          {/* Glowing Center Dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_12px_#FF5722]"
            animate={{
              x: position.x - 4,
              y: position.y - 4,
              scale: isPointer ? 1.4 : 1,
            }}
            transition={{ type: 'spring', stiffness: 1200, damping: 45 }}
          />
          {/* Sleek Minimal Floating Ring */}
          <motion.div
            className="fixed top-0 left-0 rounded-full border border-[#FF5722]/60 bg-[#FF5722]/5"
            animate={{
              x: position.x - (isPointer ? 22 : 14),
              y: position.y - (isPointer ? 22 : 14),
              width: isPointer ? 44 : 28,
              height: isPointer ? 44 : 28,
              scale: isClicking ? 0.75 : 1,
              borderColor: isPointer ? 'rgba(255, 87, 34, 0.9)' : 'rgba(255, 87, 34, 0.5)',
            }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          />
        </>
      )}

      {/* RETICLE MODE (DEFAULT: Precision Architectural Crosshair) */}
      {cursorMode === 'reticle' && (
        <>
          {/* Sharp Precision Center Dot with Ambient Core */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722,0_0_16px_rgba(255,87,34,0.6)]"
            animate={{
              x: position.x - 4,
              y: position.y - 4,
              scale: isPointer ? 0.8 : isClicking ? 0.5 : 1,
            }}
            transition={{ type: 'spring', stiffness: 1400, damping: 50, mass: 0.08 }}
          />

          {/* Precision Reticle Outer Ring with Crosshair Ticks */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none"
            animate={{
              x: position.x - (isPointer ? 24 : 16),
              y: position.y - (isPointer ? 24 : 16),
              width: isPointer ? 48 : 32,
              height: isPointer ? 48 : 32,
              scale: isClicking ? 0.75 : 1,
              rotate: isPointer ? 45 : 0,
            }}
            transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.15 }}
          >
            {/* Fine Outer Hairline Ring */}
            <div
              className={`w-full h-full rounded-full border transition-colors duration-200 ${
                isPointer
                  ? 'border-[#FF5722] shadow-[0_0_15px_rgba(255,87,34,0.4)]'
                  : 'border-[#FF5722]/55'
              }`}
              style={{
                background: isPointer
                  ? 'radial-gradient(circle, rgba(255,87,34,0.12) 0%, transparent 70%)'
                  : 'transparent',
              }}
            />

            {/* 4 Precision Micro-Ticks (North, South, East, West) */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-[1.5px] h-[3px] bg-[#FF5722]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-[1.5px] h-[3px] bg-[#FF5722]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] h-[1.5px] w-[3px] bg-[#FF5722]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] h-[1.5px] w-[3px] bg-[#FF5722]" />
          </motion.div>

          {/* Interactive Hover Pill Tag if on interactive element */}
          {isPointer && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-zinc-950/90 text-[#FF5722] border border-[#FF5722]/40 shadow-lg pointer-events-none"
              style={{
                transform: `translate3d(${position.x + 18}px, ${position.y + 14}px, 0)`,
              }}
            >
              {hoverText || 'SELECT'}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};
