'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import { PROJECTS } from '@/data/portfolio-data';
import { ProjectItem } from '@/types';
import ProjectModal from './ProjectModal';
import { useThemeAccent } from './ThemeAccentContext';

type FilterType = 'all' | 'web' | 'software' | 'it-solutions' | 'creative';

const FILTER_TABS: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'software', label: 'Software Development' },
  { id: 'it-solutions', label: 'IT Solutions' },
  { id: 'creative', label: 'Creative Projects' },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const { accentStyles } = useThemeAccent();

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK &amp; PROTOTYPES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineering &amp; Solutions Showcase
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Production-grade architectures blending full-stack software development with mission-critical IT infrastructure.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {FILTER_TABS.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all ${
                  active
                    ? 'text-white glass-panel border-cyan-400/40 shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white glass-panel border-white/5 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl glass-card border border-white/5 overflow-hidden flex flex-col justify-between hover:border-cyan-400/40"
              >
                <div>
                  {/* Image Thumbnail with Overlay */}
                  <div
                    className="relative aspect-video overflow-hidden cursor-pointer bg-slate-900"
                    onClick={() => setActiveModalProject(project)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/40 to-transparent" />

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-cyan-400/50 flex items-center space-x-1.5 shadow-glow-cyan">
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer mb-2 leading-snug"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="p-6 pt-0 border-t border-white/5 mt-auto flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Details</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-panel text-slate-400 hover:text-white border border-white/10 transition-colors"
                        aria-label="View source code"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-panel text-slate-400 hover:text-cyan-300 border border-white/10 transition-colors"
                        aria-label="View live demo"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Realistic Concept Notice */}
        <div className="mt-12 p-4 rounded-xl glass-panel border border-white/5 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            <strong className="text-slate-300">Portfolio Project Disclaimer:</strong> Projects shown represent realistic production architectures, design prototypes, and case studies engineered to demonstrate system design and coding standards.
          </p>
        </div>

      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

