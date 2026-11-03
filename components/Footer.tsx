'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Heart, Linkedin, Github, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';
import { useThemeAccent } from './ThemeAccentContext';

export default function Footer() {
  const { accentStyles } = useThemeAccent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-white/[0.08] text-slate-400 text-xs overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl glass-panel border border-cyan-400/30 flex items-center justify-center">
                <span className="font-black text-cyan-400 text-sm tracking-wider">
                  {PERSONAL_INFO.initials}
                </span>
              </div>
              <span className="text-base font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              &ldquo;{PERSONAL_INFO.headline}&rdquo;
            </p>

            <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Technical Support &amp; Engineering Roles</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors text-slate-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Artifacts (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-mono text-white uppercase tracking-wider">
              Connect &amp; Assets
            </div>
            <p className="text-xs text-slate-400">
              Connect on verified platforms or download authenticated resume documentation.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all hover:scale-105"
                  aria-label={item.name}
                >
                  {item.name === 'LinkedIn' && <Linkedin className="w-4 h-4 text-cyan-400" />}
                  {item.name === 'GitHub' && <Github className="w-4 h-4 text-purple-400" />}
                  {item.name === 'Email' && <Mail className="w-4 h-4 text-blue-400" />}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Syed_Umair_Shah_Resume.pdf"
                className="px-3.5 py-2 rounded-xl glass-panel border border-cyan-400/30 text-cyan-300 hover:text-white text-xs font-mono font-medium transition-colors"
              >
                Resume.pdf
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar with Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-all group"
            aria-label="Scroll back to top"
          >
            <span className="text-xs font-mono">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

