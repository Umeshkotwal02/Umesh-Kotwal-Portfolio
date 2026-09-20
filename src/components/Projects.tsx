import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  X,
  Globe,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Building2
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
    <section id="projects" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <FolderGit2 className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>SELECTED WORKS & ARCHITECTURE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Featured Engineering Projects
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Production applications built for Dubai & Indian clients, featuring microservices, Stripe Connect payouts, BullMQ queues, and SEO marketplaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-1.5 scrollbar-none max-w-full">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'microservices', label: 'Microservices & Node' },
            { id: 'fullstack', label: 'Full-Stack Next.js' },
            { id: 'ecommerce', label: 'E-Commerce & SEO' },
            { id: 'realtime', label: 'Real-Time & Canvas' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedFilter(btn.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full border shrink-0 transition-all duration-200 ${
                selectedFilter === btn.id
                  ? 'bg-[#FF5722] text-white border-[#FF5722] font-semibold shadow-sm shadow-[#FF5722]/25'
                  : darkMode
                  ? 'bg-zinc-900/50 border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 hover:border-[#FF5722]/30'
                  : 'bg-white border-black/[0.06] text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 hover:border-[#FF5722]/30'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
                darkMode
                  ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/40'
                  : 'bg-white border-black/[0.06] shadow-xs hover:border-[#FF5722]/40'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-[#09090b] via-zinc-950/40' : 'from-zinc-900/70 via-zinc-900/10'} to-transparent`} />

                {/* Client Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 font-medium">
                  <Globe className="w-3 h-3 text-[#FF5722]" />
                  <span>{project.clientLocation || 'Global'}</span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-200 font-medium">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {project.subtitle}
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs leading-relaxed line-clamp-3 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Pill */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.metrics.map((m, i) => (
                      <span key={i} className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${
                        darkMode ? 'bg-white/[0.04] text-zinc-300 border-white/[0.08]' : 'bg-black/[0.03] text-zinc-700 border-black/[0.06]'
                      }`}>
                        ⚡ {m}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md border flex items-center gap-1.5 ${
                        darkMode ? 'bg-zinc-950/60 text-zinc-400 border-white/[0.06]' : 'bg-zinc-100 text-zinc-700 border-black/[0.06]'
                      }`}
                    >
                      <TechIcon name={tech} className="w-3 h-3" darkMode={darkMode} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className={`pt-4 border-t flex items-center justify-between gap-3 ${darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono font-medium text-[#FF5722] hover:text-[#F4511E] flex items-center gap-1 transition-colors font-semibold"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-xl border transition-colors ${
                          darkMode ? 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-black/[0.06]'
                        }`}
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-xl border transition-colors ${
                          darkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200 border-white' : 'bg-zinc-900 text-white hover:bg-zinc-800 border-zinc-900'
                        }`}
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Project Breakdown Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full max-w-2xl max-h-[85vh] rounded-3xl border shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-left ${
                darkMode ? 'bg-[#09090b] border-white/[0.1] text-zinc-200' : 'bg-white border-black/[0.08] text-zinc-900'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className={`absolute top-5 right-5 p-2 rounded-xl border ${
                  darkMode ? 'bg-zinc-800 text-zinc-300 border-white/[0.08] hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-700 border-black/[0.06] hover:bg-zinc-200'
                }`}
              >
                <X className="w-4 h-4" />
              </button>

              <div className={`space-y-1.5 border-b pb-4 ${darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  {activeModalProject.subtitle} • {activeModalProject.clientLocation}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  {activeModalProject.title}
                </h3>
              </div>

              {/* Real Project Screenshot Preview Banner */}
              <div className="relative w-full h-48 sm:h-60 rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 group">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    Live Production Screenshot
                  </span>
                  {activeModalProject.links.live && (
                    <a
                      href={activeModalProject.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#FF5722] text-white hover:bg-[#F4511E] transition-all shadow-md hover:shadow-orange-500/20"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <h4 className={`text-xs font-mono font-semibold flex items-center gap-1.5 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-800'
                }`}>
                  <Zap className="w-3.5 h-3.5 text-[#FF5722]" />
                  KEY ACHIEVEMENTS
                </h4>
                <ul className={`space-y-2 text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {activeModalProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Deep Dive */}
              <div className={`space-y-2 p-4 rounded-2xl border ${
                darkMode ? 'bg-zinc-950/60 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'
              }`}>
                <h4 className={`text-xs font-mono font-semibold flex items-center gap-1.5 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-800'
                }`}>
                  <Layers className="w-3.5 h-3.5 text-[#FF5722]" />
                  ARCHITECTURE & DATA FLOW
                </h4>
                <p className={`text-xs leading-relaxed font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {activeModalProject.architectureDetails}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className={`text-xs font-mono uppercase text-zinc-500`}>Technologies & Tools</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
                    <span key={tech} className={`text-[11px] font-mono px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                      darkMode ? 'bg-zinc-950 text-zinc-300 border-white/[0.06]' : 'bg-zinc-100 text-zinc-800 border-black/[0.06]'
                    }`}>
                      <TechIcon name={tech} className="w-3 h-3" darkMode={darkMode} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className={`pt-4 border-t flex justify-end gap-3 ${darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
                {activeModalProject.links.live && (
                  <a
                    href={activeModalProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full font-medium text-xs flex items-center gap-2 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/25"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className={`px-4 py-2 rounded-full font-medium text-xs border ${
                    darkMode ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-white/[0.08]' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border-black/[0.06]'
                  }`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

