import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  MapPin,
  Layers,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Share2,
  Server,
  Zap,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Project } from '../types';
import { SEOHead } from './SEOHead';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectDetailProps {
  project: Project;
  darkMode: boolean;
  onBack: () => void;
  onNavigate: (path: string) => void;
  onOpenAiModal?: (prompt?: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  darkMode,
  onBack,
  onNavigate,
  onOpenAiModal,
}) => {
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Project link copied to clipboard!');
  };

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-200' : 'bg-[#fafafa] text-zinc-800'
    }`}>
      {/* Dynamic SEO & Canonical Tags */}
      <SEOHead
        title={`${project.title} — Case Study & Architecture | Umesh Kotwal`}
        description={`${project.description} Engineered with ${project.techStack.slice(0, 4).join(', ')}.`}
        canonicalPath={`/projects/${project.id}`}
        keywords={[
          project.title,
          `${project.title} Case Study`,
          "Umesh Kotwal Project",
          ...project.techStack,
          "Microservices Architecture"
        ]}
        ogImage={project.image.startsWith('http') ? project.image : `https://full-stack-developer-umesh-kotwal.vercel.app${project.image}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": `https://full-stack-developer-umesh-kotwal.vercel.app/projects/${project.id}#software`,
          "name": project.title,
          "headline": project.subtitle,
          "description": project.description,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Cloud / Web",
          "author": {
            "@type": "Person",
            "name": "Umesh Kotwal",
            "url": "https://full-stack-developer-umesh-kotwal.vercel.app/"
          }
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
          <nav className="flex items-center gap-2 text-xs font-mono" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('/')}
              className="text-[#FF5722] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-500" />
            <button
              onClick={() => onNavigate('/projects')}
              className="text-zinc-500 hover:text-[#FF5722] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-500" />
            <span className={darkMode ? 'text-zinc-200 font-semibold truncate max-w-[160px] sm:max-w-xs' : 'text-zinc-900 font-semibold truncate max-w-[160px] sm:max-w-xs'}>
              {project.title}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'bg-white border-black/10 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 shadow-xs'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={onBack}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                darkMode
                  ? 'bg-zinc-900 border-white/10 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  : 'bg-white border-black/10 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
              }`}
            >
              <ArrowLeft className="w-3 h-3" />
              <span>All Projects</span>
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20 uppercase">
              {project.category}
            </span>
            {project.clientLocation && (
              <span className="flex items-center gap-1 text-xs font-mono text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>{project.clientLocation}</span>
              </span>
            )}
            <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Deployed</span>
            </span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-[#FF5722] font-semibold">
            {project.subtitle}
          </p>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 shadow-md shadow-[#FF5722]/20 transition-all inline-flex items-center gap-2"
              >
                <span>Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all inline-flex items-center gap-2 ${
                  darkMode
                    ? 'bg-zinc-900 border-white/10 text-zinc-200 hover:bg-zinc-800'
                    : 'bg-white border-black/10 text-zinc-800 hover:bg-zinc-100 shadow-xs'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}

            {onOpenAiModal && (
              <button
                onClick={() => onOpenAiModal(`Tell me about the architecture of ${project.title} and how Umesh engineered it.`)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900/60 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800'
                    : 'bg-white border-black/10 text-zinc-700 hover:bg-zinc-100 shadow-xs'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Ask AI About This Project</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-center ${
                  darkMode
                    ? 'bg-zinc-900/50 border-white/[0.08]'
                    : 'bg-white border-black/[0.06] shadow-xs'
                }`}
              >
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">Key Milestone #{idx + 1}</span>
                <span className={`text-base font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  {metric}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Architecture & Engineering Deep-Dive */}
        <div className={`p-8 rounded-3xl border space-y-8 ${
          darkMode
            ? 'bg-zinc-900/40 border-white/[0.08]'
            : 'bg-white border-black/[0.06] shadow-sm'
        }`}>
          {/* Section: Architectural Blueprint */}
          <div className="space-y-3">
            <h2 className={`text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <Cpu className="w-5 h-5 text-[#FF5722]" />
              <span>Architectural Blueprint & Core Engineering</span>
            </h2>
            <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}>
              {project.architectureDetails}
            </p>
          </div>

          {/* Section: Technical Highlights */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <Layers className="w-4 h-4 text-[#FF5722]" />
              <span>Production Deliverables & Solutions</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    darkMode ? 'bg-zinc-900/80 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.04]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Tech Stack Badges */}
          <div className="space-y-3 pt-2 border-t" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
              Technologies & Infrastructure Deployed:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs font-mono rounded-lg border font-semibold ${
                    darkMode
                      ? 'bg-zinc-900 border-white/[0.08] text-zinc-200'
                      : 'bg-zinc-100 border-black/[0.06] text-zinc-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Next & Previous Project Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <button
            onClick={() => onNavigate(`/projects/${prevProject.id}`)}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer group ${
              darkMode
                ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50'
                : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 shadow-xs'
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Case Study</span>
            </span>
            <span className={`text-sm font-bold tracking-tight block group-hover:text-[#FF5722] transition-colors ${
              darkMode ? 'text-zinc-200' : 'text-zinc-900'
            }`}>
              {prevProject.title}
            </span>
          </button>

          <button
            onClick={() => onNavigate(`/projects/${nextProject.id}`)}
            className={`p-5 rounded-2xl border text-right transition-all cursor-pointer group ${
              darkMode
                ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50'
                : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 shadow-xs'
            }`}
          >
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-end gap-1 mb-1">
              <span>Next Case Study</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className={`text-sm font-bold tracking-tight block group-hover:text-[#FF5722] transition-colors ${
              darkMode ? 'text-zinc-200' : 'text-zinc-900'
            }`}>
              {nextProject.title}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
