'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  FileDown,
  Sparkles,
  Palette,
  Send,
  Linkedin,
  Github,
} from 'lucide-react';
import { useThemeAccent } from './ThemeAccentContext';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';
import { ThemeAccent } from '@/types';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const ACCENTS: { id: ThemeAccent; label: string; color: string }[] = [
  { id: 'cyan', label: 'Electric Cyan', color: '#00f2fe' },
  { id: 'blue', label: 'Neon Blue', color: '#38bdf8' },
  { id: 'purple', label: 'Cyber Violet', color: '#c084fc' },
  { id: 'emerald', label: 'Emerald Matrix', color: '#34d399' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { accent, setAccent, accentStyles } = useThemeAccent();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#040711]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#"
            className="group flex items-center space-x-3 focus:outline-none"
            aria-label="Syed Umair Shah Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-cyan-400/50">
              <span className="text-base font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400">
                {PERSONAL_INFO.initials}
              </span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10"
                style={{ backgroundColor: accentStyles.glow }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                Portfolio & Operations
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/[0.07] shadow-glass">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-cyan-400/30 -z-10"
                      style={{
                        backgroundColor: accentStyles.glow,
                        boxShadow: `0 0 15px -3px ${accentStyles.glow}`,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Tools & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Accent Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-white/20 transition-all flex items-center justify-center text-xs space-x-1"
                title="Change Luxury Accent Glow"
                aria-label="Change Accent Glow"
              >
                <Palette className="w-4 h-4 text-slate-300" />
                <span
                  className="w-2 h-2 rounded-full ring-2 ring-black"
                  style={{ backgroundColor: ACCENTS.find((a) => a.id === accent)?.color }}
                />
              </button>

              <AnimatePresence>
                {paletteOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 p-3 w-48 glass-panel rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col space-y-1.5"
                  >
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 px-1">
                      Accent Theme
                    </div>
                    {ACCENTS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setAccent(item.id);
                          setPaletteOpen(false);
                        }}
                        className={`flex items-center space-x-2.5 px-2.5 py-1.5 rounded-lg text-xs text-left transition-all ${
                          accent === item.id
                            ? 'bg-white/10 text-white font-medium'
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CV Download Button */}
            <a
              href="/resume.pdf"
              download="Syed_Umair_Shah_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white glass-panel border border-white/10 hover:border-cyan-400/40 transition-all"
              title="Download Verified Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </a>

            {/* Let's Work Together CTA */}
            <a
              href="#contact"
              className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:brightness-110 active:scale-95 ${accentStyles.button}`}
            >
              <span>Let&apos;s Talk</span>
              <Send className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Palette quick toggle for mobile */}
            <button
              onClick={() => {
                const order: ThemeAccent[] = ['cyan', 'blue', 'purple', 'emerald'];
                const nextIdx = (order.indexOf(accent) + 1) % order.length;
                setAccent(order[nextIdx]);
              }}
              className="p-2 rounded-xl glass-panel text-slate-300 border border-white/10"
              aria-label="Toggle theme accent"
            >
              <span
                className="w-2.5 h-2.5 rounded-full block"
                style={{ backgroundColor: ACCENTS.find((a) => a.id === accent)?.color }}
              />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center border border-cyan-400/30">
                    <span className="font-bold text-cyan-400">{PERSONAL_INFO.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-400">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="flex flex-col space-y-2 mt-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <span>{link.name}</span>
                    <Sparkles className="w-4 h-4 text-cyan-400 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-6 border-t border-white/10 flex flex-col space-y-3">
              <a
                href="/resume.pdf"
                download="Syed_Umair_Shah_Resume.pdf"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl glass-panel text-sm font-semibold text-slate-200 border border-white/10"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold text-center ${accentStyles.button}`}
              >
                <span>Let&apos;s Work Together</span>
                <Send className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center space-x-4 pt-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 border border-white/10"
                    aria-label={item.name}
                  >
                    {item.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                    {item.name === 'GitHub' && <Github className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

