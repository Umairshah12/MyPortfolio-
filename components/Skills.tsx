'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  FileCode,
  Globe,
  Palette,
  Cpu,
  Database,
  Monitor,
  Terminal,
  Network,
  Users2,
  Cloud,
  Wrench,
  Bug,
  PackageCheck,
  Plane,
  QrCode,
  HeartHandshake,
  Smile,
  ShieldAlert,
  UserCheck,
  MessageSquare,
  Search,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/data/portfolio-data';
import { SkillCategory, Skill } from '@/types';
import { useThemeAccent } from './ThemeAccentContext';

// Icon mapping
const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layers,
  FileCode,
  Globe,
  Palette,
  Cpu,
  Database,
  Monitor,
  Terminal,
  Network,
  Users2,
  Cloud,
  Wrench,
  Bug,
  PackageCheck,
  Plane,
  QrCode,
  HeartHandshake,
  Smile,
  ShieldAlert,
  UserCheck,
  MessageSquare,
};

const CATEGORIES: { id: SkillCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Disciplines', count: TECHNICAL_SKILLS.length },
  {
    id: 'development',
    label: 'Software & Web Dev',
    count: TECHNICAL_SKILLS.filter((s) => s.category === 'development').length,
  },
  {
    id: 'systems',
    label: 'IT & Systems Admin',
    count: TECHNICAL_SKILLS.filter((s) => s.category === 'systems').length,
  },
  {
    id: 'aviation',
    label: 'Aviation & CX Operations',
    count: TECHNICAL_SKILLS.filter((s) => s.category === 'aviation').length,
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { accentStyles } = useThemeAccent();

  const filteredSkills = TECHNICAL_SKILLS.filter((skill) => {
    const matchesCategory =
      selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.context && skill.context.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical &amp; Operational Mastery
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies organized by real enterprise application and airport operational rigor.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    active
                      ? 'text-white glass-panel border-cyan-400/40 shadow-glow-cyan'
                      : 'text-slate-400 hover:text-white glass-panel border-white/5 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      active ? 'bg-cyan-400/20 text-cyan-300' : 'bg-white/5 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills & tech..."
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-panel text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors border border-white/10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = ICON_MAP[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-2xl glass-card border border-white/5 flex flex-col justify-between group hover:border-cyan-400/40"
                >
                  <div>
                    {/* Top row: Icon & Competency Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl glass-panel border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide border border-white/10 bg-white/5 text-slate-300">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>

                    {/* Operational Context */}
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>

                  {/* Visual Competency Indicator Strip */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="capitalize">{skill.category}</span>
                    <span className="flex items-center text-cyan-400">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="py-16 text-center text-slate-400 text-sm glass-panel rounded-2xl border border-white/5">
            No matching skills found for &ldquo;{searchQuery}&rdquo;. Try another search term.
          </div>
        )}

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-xl glass-panel border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            <strong className="text-slate-300">Authentic Competency Architecture:</strong> Skills are mapped to verified operational domains (DCS airlines, enterprise Active Directory, React/Next.js frameworks) rather than arbitrary percentage ratings.
          </p>
        </div>

      </div>
    </section>
  );
}

