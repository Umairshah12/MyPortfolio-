'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useThemeAccent } from './ThemeAccentContext';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { accentStyles } = useThemeAccent();

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer ambient glow */}
      <motion.div
        className="fixed -left-6 -top-6 rounded-full blur-xl pointer-events-none transition-all duration-150"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 80 : 48,
          height: isPointer ? 80 : 48,
          backgroundColor: accentStyles.glow,
          opacity: 0.6,
        }}
      />
      {/* Inner sharp dot */}
      <motion.div
        className="fixed -left-1.5 -top-1.5 rounded-full pointer-events-none bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 12 : 6,
          height: isPointer ? 12 : 6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </div>
  );
}

