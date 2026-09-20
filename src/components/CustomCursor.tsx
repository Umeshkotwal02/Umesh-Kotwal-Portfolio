import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.onclick !== null ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isInteractive);
      }
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isEnabled || isHidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? "rgba(34, 211, 238, 0.9)" : "rgba(34, 211, 238, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
    </div>
  );
};
