'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Code2,
  Globe2,
  Network,
  PlaneTakeoff,
  Users2,
  ShieldCheck,
  CheckCircle,
  FileCheck2,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { useThemeAccent } from './ThemeAccentContext';

const PILLARS = [
  {
    icon: Wrench,
    title: 'IT Support & Troubleshooting',
    description:
      'Rigorous hardware/software diagnosis, Windows and Linux environments, rapid incident resolution, and SLA adherence.',
  },
  {
    icon: Code2,
    title: 'Software & Web Engineering',
    description:
      'Developing responsive full-stack applications with React, Next.js, TypeScript, C++, and relational SQL databases.',
  },
  {
    icon: Network,
    title: 'Networking & Systems Admin',
    description:
      'Enterprise Active Directory, Microsoft 365 governance, TCP/IP, VLANs, domain policies, and secure multi-site configurations.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Aviation Customer Experience',
    description:
      'Handling international check-in, boarding gates, transfer desks, and VIP passenger assistance across AUH and DXB.',
  },
];

export default function About() {
  const { accentStyles } = useThemeAccent();

  return (
    <section id="about" className="py-24 relative bg-[#040711] overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bridging Technology, Innovation &amp; Exceptional Customer Service
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A rare intersection of deep enterprise IT engineering and front-line international aviation operations.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait & Editorial Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Visual Headshot / ID Frame */}
            <div className="relative rounded-3xl glass-card p-6 border border-white/10 overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-white/10 bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 group">
                {/* User Portfolio Picture */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/portfolio-image.png"
                  alt={PERSONAL_INFO.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/Portfolio image.png';
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/25 to-transparent" />

                {/* Verified ID Floating Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass-panel border border-cyan-400/30 text-[10px] font-mono text-cyan-300 flex items-center space-x-1.5 shadow-glow-cyan bg-black/50 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Identity</span>
                </div>

                {/* Bottom details overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl glass-panel border border-white/10 bg-black/60 backdrop-blur-md text-left">
                  <h3 className="text-base font-bold text-white leading-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-[11px] text-cyan-400 font-mono mt-0.5">
                    IT Support Specialist • Software Developer
                  </p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300 font-mono">
                    <span>Islamabad, Pakistan</span>
                    <span>Etihad &amp; DXB Ops</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Quote */}
              <div className="mt-4 p-4 rounded-xl glass-panel border border-white/5">
                <p className="text-xs italic text-slate-300 leading-relaxed">
                  &ldquo;High-stakes airport operations taught me that true technical excellence isn&apos;t just about code—it&apos;s about delivering certainty and calm when systems and people need it most.&rdquo;
                </p>
                <div className="mt-2 text-[10px] font-mono text-cyan-400 text-right">
                  — Syed Umair Shah
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Core Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Bio Narrative */}
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.detailedBio.map((paragraph, idx) => (
                <p key={idx} className="glass-panel p-4 rounded-2xl border border-white/5">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {PILLARS.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl glass-card border border-white/5 hover:border-cyan-400/30 transition-all group"
                  >
                    <div className="p-2.5 w-11 h-11 rounded-xl glass-panel border border-white/10 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 transition-all mb-3 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Aviation Operational Competencies List */}
            <div className="p-5 rounded-2xl glass-panel border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center">
                <FileCheck2 className="w-4 h-4 mr-2" />
                Specialized Airport Operational Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>DCS Passenger Check-in Verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Gate Reconciliations &amp; Boarding Control</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Transfer Desk Re-booking &amp; Contingency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Al Majlis VIP Lounge &amp; Dignitary Care</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

