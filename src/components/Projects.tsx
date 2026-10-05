import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Globe,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  X,
  Layers,
  Code2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { TechIcon } from './TechIcon';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section
      id="projects"
      className={`pt-16 pb-14 sm:pt-20 sm:pb-16 relative border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-[#fafafa] border-black/[0.06]'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>SELECTED WORKS & ARCHITECTURE</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Featured Engineering Projects
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Production applications built for Dubai and Indian enterprises, featuring microservices backends, Stripe Connect escrow payouts, zero-loss BullMQ queues, and search-optimized web platforms.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 scrollbar-none select-none">
          {[
            { id: 'all', label: `All Projects (${PROJECTS.length})` },
            { id: 'microservices', label: 'Microservices & APIs' },
            { id: 'fullstack', label: 'Full-Stack & ERP' },
            { id: 'ecommerce', label: 'E-Commerce & SEO' }
          ].map((btn) => {
            const isSelected = selectedFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setSelectedFilter(btn.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border shrink-0 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF5722] text-white border-[#FF5722] shadow-md shadow-[#FF5722]/30'
                    : darkMode
                    ? 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 shadow-2xs'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/70 shadow-black/40'
                    : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-zinc-300/40'
                }`}
              >
                <div>
                  {/* Clean Browser Frame Header - Badges outside screenshot so zero text is cut or obscured */}
                  <div className={`px-4 py-2.5 border-b flex items-center justify-between text-xs font-mono select-none ${
                    darkMode ? 'bg-zinc-950 border-white/[0.08]' : 'bg-zinc-100 border-black/[0.06]'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className={`ml-2 text-[10px] font-mono hidden sm:inline truncate max-w-[120px] ${
                        darkMode ? 'text-zinc-500' : 'text-zinc-600'
                      }`}>
                        {project.id}.app
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Location Badge */}
                      <div className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                        darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-white text-zinc-700 border border-zinc-200 shadow-2xs'
                      }`}>
                        <Globe className="w-2.5 h-2.5 text-[#FF5722]" />
                        <span>{project.clientLocation || 'Global'}</span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                          darkMode ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Image Preview Container - 100% Uncut Screenshot Showcase with NO overlay badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 flex items-center justify-center p-2 group-hover:bg-zinc-900/90 transition-colors">
                    {/* Ambient blurred backdrop for seamless edge transition */}
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-105 pointer-events-none"
                    />

                    {/* Main Full-Fidelity Uncut Screenshot - No badges or dark gradients covering any text */}
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="relative z-10 w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-md"
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2 pb-0.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20">
                          {project.category}
                        </span>
                        <span className={`text-[11px] font-mono ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                          {project.subtitle}
                        </span>
                      </div>

                      <h3 className={`text-xl font-display font-bold tracking-tight group-hover:text-[#FF5722] transition-colors ${
                        darkMode ? 'text-zinc-100' : 'text-zinc-900'
                      }`}>
                        {project.title}
                      </h3>

                      <p className={`text-xs leading-relaxed line-clamp-3 ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Impact Metrics Badges */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.metrics.map((m, i) => (
                          <span
                            key={i}
                            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-md border flex items-center gap-1 font-medium ${
                              darkMode
                                ? 'bg-zinc-950/80 text-zinc-300 border-white/[0.08]'
                                : 'bg-zinc-100 text-zinc-700 border-black/[0.06]'
                            }`}
                          >
                            <Zap className="w-3 h-3 text-[#FF5722]" />
                            <span>{m}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges with Official Vector Colorful Icons */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-xl border flex items-center gap-1.5 transition-all ${
                            darkMode
                              ? 'bg-zinc-950/60 text-zinc-300 border-white/[0.06] hover:border-white/20'
                              : 'bg-zinc-50 text-zinc-800 border-black/[0.06] hover:border-black/15 shadow-2xs'
                          }`}
                        >
                          <TechIcon name={tech} size={14} darkMode={darkMode} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div
                  className="px-6 py-4 border-t flex items-center justify-between gap-3 mt-4"
                  style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono font-semibold text-[#FF5722] hover:text-[#F4511E] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-xl border transition-all ${
                          darkMode
                            ? 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border-white/10'
                            : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 border-black/10'
                        }`}
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white text-xs font-semibold font-mono flex items-center gap-1.5 shadow-md shadow-[#FF5722]/25 transition-all cursor-pointer"
                        title="Open Live Application"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal: Architectural Deep Dive Inspector */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto ${
                  darkMode ? 'bg-zinc-950 border-white/15 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
                }`}
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-500" />

                <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                  {/* Modal Header */}
                  <div className={`flex items-start justify-between gap-4 border-b pb-4 ${
                    darkMode ? 'border-zinc-800/80' : 'border-zinc-200'
                  }`}>
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-bold">
                        <Code2 className="w-3.5 h-3.5 text-[#FF5722]" />
                        <span>{activeModalProject.category} System</span>
                        {activeModalProject.clientLocation && (
                          <>
                            <span className="text-zinc-400">·</span>
                            <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>{activeModalProject.clientLocation}</span>
                          </>
                        )}
                      </div>
                      <h3 className={`text-2xl sm:text-3xl font-bold font-display tracking-tight ${
                        darkMode ? 'text-zinc-100' : 'text-zinc-950'
                      }`}>
                        {activeModalProject.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-semibold text-[#FF5722]`}>
                        {activeModalProject.subtitle}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveModalProject(null)}
                      className={`p-2 rounded-xl transition-colors cursor-pointer shrink-0 ${
                        darkMode ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100'
                      }`}
                      aria-label="Close dialog"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Screenshot Preview Showcase Container */}
                  <div className={`rounded-2xl border overflow-hidden relative ${
                    darkMode ? 'bg-zinc-900/60 border-white/10' : 'bg-zinc-100 border-zinc-200'
                  }`}>
                    {/* Window Title Bar */}
                    <div className={`px-4 py-2 border-b flex items-center justify-between text-xs font-mono select-none ${
                      darkMode ? 'bg-zinc-950/90 border-white/[0.08] text-zinc-400' : 'bg-zinc-200/70 border-zinc-200 text-zinc-700 font-medium'
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="ml-2 text-[11px] truncate">{activeModalProject.title} • Production UI</span>
                      </div>
                      <span className="text-[10px] text-emerald-500 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Uncut Screenshot Preview
                      </span>
                    </div>

                    <div className="relative w-full flex items-center justify-center bg-zinc-950 p-2 sm:p-3 overflow-hidden">
                      <img
                        src={activeModalProject.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-105 pointer-events-none"
                      />
                      <img
                        src={activeModalProject.image}
                        alt={activeModalProject.title}
                        className="relative z-10 w-full h-auto max-h-[460px] object-contain rounded-lg drop-shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Project Overview Description */}
                  <div className="space-y-1.5">
                    <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      Overview & Business Purpose
                    </h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-zinc-300' : 'text-zinc-800 font-normal'
                    }`}>
                      {activeModalProject.description}
                    </p>
                  </div>

                  {/* Architecture & Data Safety Box - Crisp High Contrast */}
                  <div className={`p-4 sm:p-5 rounded-2xl border-l-4 border-l-[#FF5722] border space-y-2 ${
                    darkMode ? 'bg-zinc-900/80 border-white/10' : 'bg-zinc-50 border-zinc-200 shadow-2xs'
                  }`}>
                    <h4 className="text-xs font-mono font-bold text-[#FF5722] uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture & Data Safety Controls</span>
                    </h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-zinc-200' : 'text-zinc-900 font-medium'
                    }`}>
                      {activeModalProject.architectureDetails}
                    </p>
                  </div>

                  {/* Key Deliverables & Engineered Features */}
                  <div className="space-y-3">
                    <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-700'
                    }`}>
                      Key Deliverables & Engineered Solutions
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProject.highlights.map((h, i) => (
                        <li key={i} className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                          darkMode ? 'bg-zinc-900/40 border-white/[0.06] text-zinc-300' : 'bg-zinc-50/80 border-zinc-200 text-zinc-800'
                        }`}>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="space-y-2">
                    <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-700'
                    }`}>
                      Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono px-2.5 py-1 rounded-xl border flex items-center gap-1.5 ${
                            darkMode
                              ? 'bg-zinc-900 text-zinc-200 border-white/10'
                              : 'bg-zinc-100 text-zinc-800 border-zinc-200 shadow-2xs'
                          }`}
                        >
                          <TechIcon name={tech} size={14} darkMode={darkMode} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons in Modal */}
                  <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                    darkMode ? 'border-zinc-800/80' : 'border-zinc-200'
                  }`}>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.links.live && (
                        <a
                          href={activeModalProject.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white text-xs font-mono font-bold flex items-center gap-2 shadow-md shadow-[#FF5722]/20 transition-all active:scale-95"
                        >
                          <span>Open Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {activeModalProject.links.github && (
                        <a
                          href={activeModalProject.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 border transition-all ${
                            darkMode
                              ? 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700'
                              : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200'
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(null)}
                      className={`text-xs font-mono font-semibold transition-colors cursor-pointer px-4 py-2 rounded-xl border ${
                        darkMode ? 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-white' : 'bg-zinc-100 border-zinc-200 text-zinc-700 hover:text-zinc-950'
                      }`}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
