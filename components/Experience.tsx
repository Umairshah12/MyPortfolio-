'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Plane,
  Terminal,
  ShieldCheck,
  CheckCircle,
  Building2,
  Sparkles,
} from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolio-data';
import { useThemeAccent } from './ThemeAccentContext';

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<string>(EXPERIENCES[0].id);
  const { accentStyles } = useThemeAccent();

  return (
    <section id="experience" className="py-24 relative bg-[#040711] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering high-reliability results across national airline hubs and enterprise IT environments.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isSelected = activeExperience === exp.id;
            const isEtihad = exp.company.includes('Etihad');
            const isDXB = exp.company.includes('Dubai');

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Node Marker on the vertical line */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
                    isSelected
                      ? 'bg-cyan-400 text-black shadow-glow-cyan scale-110'
                      : 'glass-panel border border-white/20 text-slate-300 group-hover:border-cyan-400 group-hover:text-cyan-400'
                  }`}
                  onClick={() => setActiveExperience(exp.id)}
                >
                  {isEtihad ? (
                    <Plane className="w-4 h-4" />
                  ) : isDXB ? (
                    <Building2 className="w-4 h-4" />
                  ) : (
                    <Terminal className="w-4 h-4" />
                  )}
                </div>

                {/* Left floating dates on desktop */}
                <div className="hidden md:block absolute -left-36 top-7 w-24 text-right">
                  <span className="text-xs font-mono text-cyan-400/90 font-medium tracking-tight">
                    {exp.period.split('[')[0].trim()}
                  </span>
                </div>

                {/* Card Container */}
                <div
                  onClick={() => setActiveExperience(exp.id)}
                  className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'glass-card border-cyan-400/40 shadow-2xl'
                      : 'glass-panel border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Top Bar: Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-cyan-400 mt-1 flex items-center">
                        <span>{exp.company}</span>
                        <span className="mx-2 text-slate-600">•</span>
                        <span className="text-xs text-slate-400 font-normal">{exp.type}</span>
                      </div>
                    </div>

                    {/* Metadata pill */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      Key Core Responsibilities
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                      {exp.keyResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start space-x-2 glass-panel p-2.5 rounded-xl border border-white/5">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Impact */}
                  {exp.operationalImpact.length > 0 && (
                    <div className="mb-6 p-4 rounded-2xl glass-panel border border-cyan-400/20 bg-cyan-950/20">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2 flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                        Verified Operational Impact
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {exp.operationalImpact.map((impact, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Applied Tags */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 mr-2">Core Tools:</span>
                    {exp.skillsApplied.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}

