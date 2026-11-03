'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeAccent } from '@/types';

interface ThemeContextType {
  accent: ThemeAccent;
  setAccent: (accent: ThemeAccent) => void;
  accentStyles: {
    primary: string;
    border: string;
    glow: string;
    badge: string;
    gradient: string;
    button: string;
  };
}

const ACCENT_MAP: Record<ThemeAccent, ThemeContextType['accentStyles']> = {
  cyan: {
    primary: 'text-[#00f2fe]',
    border: 'border-[#00f2fe]/30 hover:border-[#00f2fe]/80',
    glow: 'rgba(0, 242, 254, 0.35)',
    badge: 'bg-[#00f2fe]/10 text-[#00f2fe] border-[#00f2fe]/30',
    gradient: 'from-[#00f2fe] to-[#4facfe]',
    button: 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-semibold shadow-glow-cyan',
  },
  blue: {
    primary: 'text-[#38bdf8]',
    border: 'border-[#38bdf8]/30 hover:border-[#38bdf8]/80',
    glow: 'rgba(56, 189, 248, 0.35)',
    badge: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30',
    gradient: 'from-[#38bdf8] to-[#2563eb]',
    button: 'bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-black font-semibold shadow-glow-blue',
  },
  purple: {
    primary: 'text-[#c084fc]',
    border: 'border-[#c084fc]/30 hover:border-[#c084fc]/80',
    glow: 'rgba(192, 132, 252, 0.35)',
    badge: 'bg-[#c084fc]/10 text-[#c084fc] border-[#c084fc]/30',
    gradient: 'from-[#c084fc] to-[#7f5af0]',
    button: 'bg-gradient-to-r from-[#c084fc] to-[#7f5af0] text-white font-semibold shadow-glow-purple',
  },
  emerald: {
    primary: 'text-[#34d399]',
    border: 'border-[#34d399]/30 hover:border-[#34d399]/80',
    glow: 'rgba(52, 211, 153, 0.35)',
    badge: 'bg-[#34d399]/10 text-[#34d399] border-[#34d399]/30',
    gradient: 'from-[#34d399] to-[#059669]',
    button: 'bg-gradient-to-r from-[#34d399] to-[#059669] text-black font-semibold shadow-[0_0_25px_-5px_rgba(52,211,153,0.4)]',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeAccentProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccent] = useState<ThemeAccent>('cyan');

  useEffect(() => {
    const saved = localStorage.getItem('syed_portfolio_accent') as ThemeAccent;
    if (saved && ACCENT_MAP[saved]) {
      setAccent(saved);
    }
  }, []);

  const handleSetAccent = (newAccent: ThemeAccent) => {
    setAccent(newAccent);
    localStorage.setItem('syed_portfolio_accent', newAccent);
  };

  return (
    <ThemeContext.Provider
      value={{
        accent,
        setAccent: handleSetAccent,
        accentStyles: ACCENT_MAP[accent],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeAccent() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeAccent must be used within ThemeAccentProvider');
  }
  return context;
}

