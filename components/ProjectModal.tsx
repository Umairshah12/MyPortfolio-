'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '@/types';
import { useThemeAccent } from './ThemeAccentContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { accentStyles } = useThemeAccent();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#030712]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-white/10 shadow-2xl z-10 p-6 sm:p-8 bg-[#080e1e]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-panel border border-white/10 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
              <span>Architectural Concept &amp; Prototype</span>
              <span>Case Study</span>
            </div>
          </div>

          {/* Deep Description */}
          <div className="space-y-4 mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center">
              <Layers className="w-4 h-4 mr-1.5 text-cyan-400" />
              Technical Architecture &amp; System Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed glass-panel p-4 rounded-2xl border border-white/5">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Capabilities &amp; Design Specs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2 text-xs text-slate-300 glass-panel p-3 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold ${accentStyles.button}`}
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

