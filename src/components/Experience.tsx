import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Zap,
  Building2,
  Sparkles,
  ArrowUpRight,
  Filter,
  Layers,
  Award
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface ExperienceProps {
  darkMode: boolean;
}

// Company branding color accents
const COMPANY_ACCENTS: Record<string, { gradient: string; text: string; bg: string; border: string }> = {
  "Code Expert Solutions": {
    gradient: "from-[#FF5722] to-amber-500",
    text: "#FF5722",
    bg: "rgba(255, 87, 34, 0.08)",
    border: "rgba(255, 87, 34, 0.25)"
  },
  "Enterprise Web Technologies": {
    gradient: "from-blue-500 to-indigo-600",
    text: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.25)"
  },
  "Webito Infotech": {
    gradient: "from-emerald-500 to-teal-600",
    text: "#10B981",
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.25)"
  },
  "Profound Edutech Pvt Ltd": {
    gradient: "from-purple-500 to-violet-600",
    text: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.25)"
  },
  "R3 Systems India Pvt. Ltd.": {
    gradient: "from-cyan-500 to-blue-500",
    text: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.08)",
    border: "rgba(6, 182, 212, 0.25)"
  }
};

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll Progress Animation on the Timeline Spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // State
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = (expand: boolean) => {
    const nextState: Record<string, boolean> = {};
    EXPERIENCES.forEach((exp) => {
      nextState[exp.id] = expand;
    });
    setExpandedCards(nextState);
  };

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filterType === 'all') return true;
    if (filterType === 'fulltime') return exp.type.toLowerCase().includes('full-time');
    if (filterType === 'internship') return exp.type.toLowerCase().includes('internship');
    if (filterType === 'training') return exp.type.toLowerCase().includes('trainee');
    return true;
  });

  return (
    <section
      id="experience"
      className={`py-24 sm:py-32 relative border-t transition-colors duration-300 overflow-hidden ${
        darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-[#fafafa] border-black/[0.06]'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>CAREER PATHWAY & ROLES</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Professional Experience
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Proven engineering track record delivering scalable distributed backends, BullMQ job queues, Stripe Connect payouts, and accessible Next.js interfaces for Dubai and global enterprise stakeholders.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-2xl mx-auto">
            <div className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-[#FF5722]">2+ Years</div>
              <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">Production Code</div>
            </div>

            <div className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-emerald-500">0% Loss</div>
              <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">BullMQ DLQ</div>
            </div>

            <div className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-blue-500">Dubai & Global</div>
              <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">Client Delivery</div>
            </div>

            <div className={`p-3 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-amber-500">5 Roles</div>
              <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider mt-0.5">Career Progression</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Expand Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none select-none">
            {[
              { id: 'all', label: `All Roles (${EXPERIENCES.length})` },
              { id: 'fulltime', label: 'Full-Time' },
              { id: 'internship', label: 'Internships' },
              { id: 'training', label: 'Training' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30 font-semibold'
                    : darkMode
                    ? 'bg-zinc-900/60 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 shadow-2xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Toggle All Details Button */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={() => {
                const areAnyCollapsed = EXPERIENCES.some((e) => !expandedCards[e.id]);
                handleExpandAll(areAnyCollapsed);
              }}
              className={`text-xs font-mono font-medium px-3 py-1.5 rounded-xl border transition-colors flex items-center gap-1.5 cursor-pointer ${
                darkMode
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:text-zinc-900 shadow-2xs'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Toggle All Details</span>
            </button>
          </div>
        </div>

        {/* Dynamic Animated Timeline Section */}
        <div ref={containerRef} className="relative pt-4">
          
          {/* Background Timeline Spine (Static Rail) */}
          <div
            className={`absolute left-[19px] sm:left-[27px] top-6 bottom-6 w-[3px] rounded-full transition-colors ${
              darkMode ? 'bg-zinc-800/80' : 'bg-zinc-200'
            }`}
          />

          {/* Foreground Animated Laser Beam Spine (Scroll-Linked) */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[19px] sm:left-[27px] top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#FF5722] via-orange-400 to-amber-400 shadow-[0_0_12px_rgba(255,87,34,0.6)] z-10"
          />

          {/* Experience Cards Stack */}
          <div className="space-y-8 sm:space-y-12">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = !!expandedCards[exp.id];
              const accent = COMPANY_ACCENTS[exp.company] || {
                gradient: "from-zinc-500 to-zinc-700",
                text: "#A1A1AA",
                bg: "rgba(161, 161, 170, 0.08)",
                border: "rgba(161, 161, 170, 0.25)"
              };

              // Initials for company avatar
              const initials = exp.company
                .split(' ')
                .map((w) => w[0])
                .slice(0, 3)
                .join('');

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Glowing Node Beacon */}
                  <div
                    className={`absolute left-[10px] sm:left-[18px] top-7 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center z-20 ${
                      exp.current
                        ? 'bg-[#FF5722] border-white dark:border-zinc-900 ring-4 ring-[#FF5722]/30 shadow-lg shadow-[#FF5722]/40 scale-110'
                        : darkMode
                        ? 'bg-zinc-900 border-zinc-700 group-hover:border-[#FF5722] group-hover:scale-110'
                        : 'bg-white border-zinc-300 group-hover:border-[#FF5722] group-hover:scale-110 shadow-sm'
                    }`}
                  >
                    {exp.current ? (
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#FF5722] transition-colors" />
                    )}
                  </div>

                  {/* Modern Glassmorphic Experience Card */}
                  <div
                    className={`rounded-3xl border transition-all duration-300 overflow-hidden relative ${
                      exp.current
                        ? darkMode
                          ? 'bg-zinc-900/60 border-[#FF5722]/30 shadow-xl shadow-black/40 hover:border-[#FF5722]/50'
                          : 'bg-white border-[#FF5722]/30 shadow-xl shadow-orange-500/5 hover:border-[#FF5722]/50'
                        : darkMode
                        ? 'bg-zinc-900/35 border-white/[0.08] hover:border-white/20 hover:bg-zinc-900/60 shadow-lg shadow-black/20'
                        : 'bg-white border-black/[0.06] hover:border-black/15 hover:shadow-md'
                    }`}
                  >
                    {/* Top Accent Gradient Bar for Current / Highlight Role */}
                    {exp.current && (
                      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-500" />
                    )}

                    <div className="p-6 sm:p-8 space-y-5">
                      
                      {/* Top Header Row: Company Emblem, Title & Period */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-5"
                        style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)' }}
                      >
                        <div className="flex items-start sm:items-center gap-3.5">
                          {/* Company Avatar with Gradient */}
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-extrabold text-sm tracking-tight text-white shrink-0 bg-gradient-to-br ${accent.gradient} shadow-md`}
                          >
                            {initials}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className={`text-lg sm:text-xl font-display font-bold tracking-tight ${
                                darkMode ? 'text-zinc-100' : 'text-zinc-900'
                              }`}>
                                {exp.role}
                              </h3>

                              {exp.current && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/30">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                                  <span>Current Role</span>
                                </span>
                              )}

                              <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${
                                darkMode ? 'bg-zinc-800/80 text-zinc-300 border-white/10' : 'bg-zinc-100 text-zinc-600 border-black/10'
                              }`}>
                                {exp.type}
                              </span>
                            </div>

                            <div className={`text-sm font-semibold flex items-center gap-1.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                              <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        {/* Date & Location Badges */}
                        <div className="flex flex-wrap items-center gap-2 self-start lg:self-center">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium ${
                            darkMode ? 'bg-zinc-950/80 border-white/10 text-zinc-300' : 'bg-zinc-50 border-black/10 text-zinc-700'
                          }`}>
                            <Calendar className="w-3.5 h-3.5 text-[#FF5722]" />
                            <span>{exp.period}</span>
                          </span>

                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-medium ${
                            darkMode ? 'bg-zinc-950/80 border-white/10 text-zinc-300' : 'bg-zinc-50 border-black/10 text-zinc-700'
                          }`}>
                            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Summary Paragraph */}
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}>
                        {exp.summary}
                      </p>

                      {/* Impact Metrics Badges (High Visibility) */}
                      {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                            <Award className="w-3 h-3 text-[#FF5722]" />
                            <span>Verified Production Impact</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.impactMetrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                className={`px-3 py-1 rounded-xl border text-xs font-mono font-medium flex items-center gap-2 transition-transform hover:scale-[1.02] ${
                                  darkMode
                                    ? 'bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25'
                                    : 'bg-[#FF5722]/10 text-[#F4511E] border-[#FF5722]/25 shadow-2xs'
                                }`}
                              >
                                <Zap className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
                                <span>{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Responsibilities Accordion */}
                      <div className="pt-1">
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="group/btn inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#FF5722] hover:text-[#F4511E] transition-colors cursor-pointer py-1"
                        >
                          <span>{isExpanded ? 'Hide Key Responsibilities' : `View Key Responsibilities (${exp.responsibilities.length})`}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                          ) : (
                            <ChevronDown className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
                          )}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div
                                className={`mt-3 pt-3 border-t grid grid-cols-1 gap-2.5 ${
                                  darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
                                }`}
                              >
                                {exp.responsibilities.map((resp, rIdx) => (
                                  <div
                                    key={rIdx}
                                    className={`p-2.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 transition-colors ${
                                      darkMode
                                        ? 'bg-zinc-950/40 border-white/[0.04] text-zinc-300'
                                        : 'bg-zinc-50 border-black/[0.04] text-zinc-700'
                                    }`}
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Skills & Technologies Pills with Official Colorful Icons */}
                      <div className="pt-2 border-t"
                        style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                      >
                        <div className="text-[10px] font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                          Applied Stack & Toolchain
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <div
                              key={skill}
                              className={`px-2.5 py-1 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-default ${
                                darkMode
                                  ? 'bg-zinc-950/60 border-white/[0.08] text-zinc-300 hover:border-white/20'
                                  : 'bg-zinc-50 border-black/10 text-zinc-800 hover:border-black/20 shadow-2xs'
                              }`}
                            >
                              <TechIcon name={skill} size={15} darkMode={darkMode} />
                              <span className="text-[11px] font-mono">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
