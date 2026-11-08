'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileDown,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
  ShieldCheck,
  Plane,
  Terminal,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';
import { useThemeAccent } from './ThemeAccentContext';

export default function Hero() {
  const { accentStyles } = useThemeAccent();
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotating roles timer
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030712]"
    >
      {/* Background Interactive Ambient Grid & Radial Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Floating Glowing Orbs */}
      <div
        className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-[140px] pointer-events-none opacity-40 animate-pulse-glow"
        style={{ backgroundColor: accentStyles.glow }}
      />
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-purple-600/20 blur-[150px] pointer-events-none opacity-40 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {PERSONAL_INFO.availability}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-cyan-400" />
                Islamabad, Pakistan
              </span>
            </div>

            {/* Candidate Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3"
            >
              Syed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Umair Shah</span>
            </motion.h1>

            {/* Rotating Roles Tagline */}
            <div className="h-10 sm:h-12 mb-4 flex items-center text-lg sm:text-2xl font-mono">
              <span className="text-slate-400 mr-2">I am an</span>
              <span className="relative overflow-hidden font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {PERSONAL_INFO.roles[roleIndex]}
                </motion.span>
              </span>
            </div>

            {/* Primary Editorial Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-wide mb-4 max-w-2xl leading-relaxed">
              &ldquo;{PERSONAL_INFO.secondaryHeadline}&rdquo;
            </h2>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl">
              {PERSONAL_INFO.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 ${accentStyles.button}`}
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Syed_Umair_Shah_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white glass-panel border border-white/10 hover:border-cyan-400/50 transition-all hover:bg-white/5 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download My CV</span>
              </a>
            </div>

            {/* Social Connectivity Strip */}
            <div className="flex items-center space-x-4 pt-2 border-t border-white/[0.06] w-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                Connect
              </span>
              <div className="flex items-center space-x-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all hover:scale-110"
                    aria-label={item.name}
                    title={item.name}
                  >
                    {item.name === 'LinkedIn' && <Linkedin className="w-4 h-4 text-cyan-400" />}
                    {item.name === 'GitHub' && <Github className="w-4 h-4 text-purple-400" />}
                    {item.name === 'Email' && <Mail className="w-4 h-4 text-blue-400" />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Futuristic Visual Card / Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Glowing Ring Border */}
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-75 blur-2xl -z-10 transition-all"
                style={{
                  background: `linear-gradient(135deg, ${accentStyles.glow}, rgba(127,90,240,0.3))`,
                }}
              />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl glass-card p-6 border border-white/10 overflow-hidden shadow-2xl">
                {/* Tech Status Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 tracking-wider">
                    VERIFIED CANDIDATE PROFILE
                  </span>
                </div>

                {/* Profile Avatar Frame / Cinematic Graphic */}
                <div className="relative my-6 aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 via-navy-850 to-slate-950 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.png"
                    alt={PERSONAL_INFO.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/profile';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent" />

                  {/* Corner Accent Badges */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-lg glass-panel border border-white/10 bg-black/60 backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                  {/* Identification Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl glass-panel border border-white/10 bg-black/70 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{PERSONAL_INFO.name}</div>
                      <div className="text-[10px] font-mono text-cyan-400">IT &amp; Aviation Professional</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Active</span>
                  </div>
                </div>

                {/* Micro Metric Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl glass-panel border border-white/5 flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Full-Stack & IT</div>
                      <div className="text-[10px] text-slate-400">React • C++ • AD • M365</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl glass-panel border border-white/5 flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Aviation Ops</div>
                      <div className="text-[10px] text-slate-400">Etihad & DXB Terminal CX</div>
                    </div>
                  </div>
                </div>

                {/* Bottom verified badge */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Ready for Deployment
                  </span>
                  <span className="font-mono text-slate-500">ID: SUS-DXB-2026</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

