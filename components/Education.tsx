'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '@/data/portfolio-data';
import { useThemeAccent } from './ThemeAccentContext';

export default function Education() {
  const { accentStyles } = useThemeAccent();

  return (
    <section id="education" className="py-24 relative bg-[#040711] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS &amp; VALIDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education &amp; Professional Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal university education in Information Technology paired with continuous specialized industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Degree (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-mono uppercase tracking-wider text-slate-200">
                Academic Degree
              </h3>
            </div>

            {EDUCATION_DATA.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl glass-card border border-white/10 p-6 sm:p-8 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl glass-panel border border-cyan-400/30 text-cyan-400 shadow-glow-cyan">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {edu.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h4>
                <div className="text-sm font-semibold text-cyan-400 mb-1">
                  {edu.institution}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {edu.period}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Key Coursework */}
                <div>
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Coursework &amp; Specialization:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {edu.keyCourses.map((course, idx) => (
                      <div key={idx} className="flex items-center space-x-2 glass-panel p-2 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Academic accreditation note */}
            <div className="p-4 rounded-2xl glass-panel border border-white/5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Verified Academic Credential:</span> 4-year degree in Information Technology with specialized coursework in modern software engineering, systems administration, and database architectures.
            </div>
          </div>

          {/* Right Column: Professional Certifications & Training (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-mono uppercase tracking-wider text-slate-200">
                Industry Certifications &amp; Training
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS_DATA.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl glass-card border border-white/5 p-5 flex flex-col justify-between hover:border-cyan-400/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl glass-panel border border-white/10 text-cyan-400">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-white/10 text-slate-400">
                        {cert.dateOrStatus}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-cyan-400 font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills badges */}
                  <div className="pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/5 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Aviation & Support Compliance Badge */}
            <div className="p-5 rounded-2xl glass-panel border border-cyan-400/20 bg-cyan-950/20 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Continuous Professional Development:</span>{' '}
                Actively maintaining active readiness across IT infrastructure standards, cloud ecosystems (Microsoft 365 / Azure), and international aviation customer service protocols.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

