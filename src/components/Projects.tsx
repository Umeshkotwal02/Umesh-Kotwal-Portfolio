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
                  {/* Image Preview Container */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top Left: Client / Location Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200 font-medium">
                      <Globe className="w-3 h-3 text-[#FF5722]" />
                      <span>{project.clientLocation || 'Global'}</span>
                    </div>

                    {/* Top Right: Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-[10px] font-mono text-amber-300 font-medium">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Quick Category overlay chip at bottom left of image */}
                    <div className="absolute bottom-3 left-3.5">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FF5722]/90 text-white shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono font-medium text-zinc-400 uppercase tracking-wider">
                        {project.subtitle}
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
                  darkMode ? 'bg-zinc-950 border-white/15 text-white' : 'bg-white border-black/10 text-zinc-900'
                }`}
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-500" />

                <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                  <div className="flex items-start justify-between gap-4 border-b pb-4 border-zinc-800/40">
                    <div>
                      <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-semibold">
                        <Code2 className="w-3 h-3 text-[#FF5722]" />
                        <span>{activeModalProject.category} System</span>
                      </div>
                      <h3 className="text-2xl font-bold font-display mt-1">
                        {activeModalProject.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        {activeModalProject.subtitle} • {activeModalProject.clientLocation}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Architecture Details Box */}
                  <div className={`p-4 rounded-2xl border space-y-2 ${
                    darkMode ? 'bg-zinc-900/60 border-white/10' : 'bg-zinc-50 border-black/10'
                  }`}>
                    <h4 className="text-xs font-mono font-bold text-[#FF5722] uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture & Data Safety Controls</span>
                    </h4>
                    <p className="text-xs leading-relaxed text-zinc-300">
                      {activeModalProject.architectureDetails}
                    </p>
                  </div>

                  {/* Deliverable Highlights */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                      Key Deliverables & Engineered Features
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons in Modal */}
                  <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.links.github && (
                        <a
                          href={activeModalProject.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono font-medium flex items-center gap-2 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {activeModalProject.links.live && (
                        <a
                          href={activeModalProject.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white text-xs font-mono font-medium flex items-center gap-2 shadow-md transition-colors"
                        >
                          <span>Open Live Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="text-xs font-mono text-zinc-400 hover:text-white"
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
