import React from 'react';
import {
  Camera,
  ExternalLink,
  MapPin,
  Mail,
  Sparkles,
  Github,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DeveloperPortfolioCardProps {
  darkMode: boolean;
  photoUrl: string;
  onOpenPhotoModal: () => void;
  onOpenTerminal: () => void;
  showTerminal: boolean;
  onOpenAiModal: () => void;
}

export const DeveloperPortfolioCard: React.FC<DeveloperPortfolioCardProps> = ({
  darkMode,
  photoUrl,
  onOpenPhotoModal,
  onOpenTerminal,
  showTerminal,
  onOpenAiModal,
}) => {
  return (
    <div
      className={`w-full rounded-3xl border backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden ${
        darkMode
          ? 'bg-zinc-950/85 border-white/[0.08] shadow-black/70'
          : 'bg-white/95 border-black/[0.06] shadow-zinc-200/60'
      }`}
    >
      {/* Sleek Top Header for Developer Profile (Tabs removed as requested) */}
      <div
        className="px-4 py-2.5 border-b flex items-center justify-between gap-2"
        style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)' }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
          <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
            darkMode ? 'text-zinc-200' : 'text-zinc-800'
          }`}>
            Developer Profile
          </span>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Hire</span>
          </span>
        </div>
      </div>

      {/* Developer Profile Card Content */}
      <div className="p-3 sm:p-3.5 space-y-3">
        {/* Developer Hero Portrait Frame */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3.8] group bg-zinc-950 shadow-inner">
          {/* Technical Corner Brackets */}
          <div className="absolute top-2.5 left-2.5 z-20 font-mono text-[10px] text-white/50 pointer-events-none">
            ┌ uk.portfolio
          </div>
          <div className="absolute top-2.5 right-2.5 z-20 font-mono text-[10px] text-white/50 pointer-events-none">
            v2.4 ┐
          </div>

          <img
            src={photoUrl}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-all duration-700 ease-out"
          />

          {/* Subtle digital vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

          {/* Bottom Overlay Badge Info */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FF5722] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-1 shadow-xs">
                Full-Stack Dev • 2+ Yrs
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white leading-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-[11px] text-zinc-300 font-mono flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3 h-3 text-[#FF5722]" />
                <span>Surat, India • Dubai Client Lead</span>
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenPhotoModal();
              }}
              className="p-2 rounded-xl bg-black/60 backdrop-blur-md hover:bg-[#FF5722] text-white transition-colors cursor-pointer shadow-md"
              title="Change Photo"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Contact & Action Buttons */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className={`p-2.5 rounded-xl border flex items-center gap-2 transition-colors ${
              darkMode
                ? 'bg-zinc-900/60 border-white/[0.06] text-zinc-300 hover:text-white hover:border-[#FF5722]/50'
                : 'bg-zinc-50 border-black/[0.06] text-zinc-700 hover:text-zinc-950 hover:border-[#FF5722]/50'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
            <span className="truncate">{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl border flex items-center justify-between transition-colors ${
              darkMode
                ? 'bg-zinc-900/60 border-white/[0.06] text-zinc-300 hover:text-white hover:border-[#FF5722]/50'
                : 'bg-zinc-50 border-black/[0.06] text-zinc-700 hover:text-zinc-950 hover:border-[#FF5722]/50'
            }`}
          >
            <div className="flex items-center gap-2 truncate">
              <Github className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
              <span className="truncate">GitHub Profile</span>
            </div>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>

        {/* Developer Terminal and AI Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-0.5">
          <button
            type="button"
            onClick={onOpenTerminal}
            className={`text-xs font-mono font-medium flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-colors cursor-pointer flex-1 justify-center ${
              darkMode
                ? 'bg-zinc-900 border-white/[0.08] text-zinc-300 hover:text-white'
                : 'bg-white border-black/[0.06] text-zinc-700 hover:text-zinc-950 shadow-2xs'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>{showTerminal ? 'Close CLI' : 'Developer CLI'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenAiModal}
            className="text-xs font-medium flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 hover:bg-amber-500/20 transition-colors cursor-pointer flex-1 justify-center"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Ask AI Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );
};
