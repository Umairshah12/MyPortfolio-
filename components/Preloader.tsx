'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 400);
          return 100;
        }
        // Random incremental bump for realistic loading feel
        const step = Math.floor(Math.random() * 15) + 10;
        return Math.min(100, prev + step);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          {/* Ambient background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

          <div className="relative flex flex-col items-center z-10 px-6 text-center">
            {/* Monogram emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 w-20 h-20 rounded-2xl glass-panel border border-cyan-400/30 flex items-center justify-center shadow-glow-cyan"
            >
              <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400">
                SUS
              </span>
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 animate-pulse-glow" />
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-medium tracking-wide text-slate-200"
            >
              Syed Umair Shah
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs tracking-widest uppercase text-slate-500 mt-1 mb-8"
            >
              IT Support • Software Engineer • Aviation CX
            </motion.p>

            {/* Progress bar container */}
            <div className="w-56 sm:w-64 h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative border border-slate-700/40">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Counter */}
            <div className="mt-3 flex items-center justify-between w-56 sm:w-64 text-xs font-mono text-cyan-400/80">
              <span>INITIALIZING</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

