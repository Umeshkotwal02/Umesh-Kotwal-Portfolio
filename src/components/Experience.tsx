import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  Sparkles,
  Layers,
  Clock,
  Code2,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

// Calculate exact tenure in real time, matching LinkedIn's calculation format
export function calculateTenure(period: string, isCurrent?: boolean, format: 'short' | 'long' = 'short'): string {
  const monthMap: Record<string, number> = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
  };

  const parts = period.split(/[–—-]/).map((p) => p.trim());
  if (parts.length < 2) return '';

  const parseMonthYear = (str: string): { year: number; month: number } => {
    if (!str || str.toLowerCase().includes('present')) {
      const now = new Date();
      return { year: now.getFullYear(), month: now.getMonth() };
    }
    const tokens = str.split(/\s+/);
    let m = 0;
    let y = 2024;
    for (const t of tokens) {
      const lower = t.toLowerCase().slice(0, 3);
      if (monthMap[lower] !== undefined) {
        m = monthMap[lower];
      } else {
        const parsed = parseInt(t, 10);
        if (!isNaN(parsed) && parsed > 1900) {
          y = parsed;
        }
      }
    }
    return { year: y, month: m };
  };

  const start = parseMonthYear(parts[0]);
  const end = isCurrent || parts[1].toLowerCase().includes('present')
    ? { year: new Date().getFullYear(), month: new Date().getMonth() }
    : parseMonthYear(parts[1]);

  let totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (format === 'long') {
    if (years > 0 && remainingMonths > 0) {
      return `${years} ${years > 1 ? 'years' : 'year'} ${remainingMonths} ${remainingMonths > 1 ? 'months' : 'month'}`;
    } else if (years > 0) {
      return `${years} ${years > 1 ? 'years' : 'year'}`;
    } else {
      return `${totalMonths} ${totalMonths > 1 ? 'months' : 'month'}`;
    }
  }

  if (years > 0 && remainingMonths > 0) {
    return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} yr${years > 1 ? 's' : ''}`;
  } else {
    return `${totalMonths} mo${totalMonths > 1 ? 's' : ''}`;
  }
}

// Calculate total cumulative software engineering tenure across all roles
export function calculateTotalExperience(experiences: typeof EXPERIENCES): { short: string; long: string } {
  let totalMonths = 0;
  experiences.forEach((exp) => {
    const tenureShort = calculateTenure(exp.period, exp.current);
    // Parse months from calculated tenure
    const parts = exp.period.split(/[–—-]/).map((p) => p.trim());
    if (parts.length >= 2) {
      const monthMap: Record<string, number> = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
      };
      const parseMonthYear = (str: string) => {
        if (!str || str.toLowerCase().includes('present')) {
          const now = new Date();
          return { year: now.getFullYear(), month: now.getMonth() };
        }
        const tokens = str.split(/\s+/);
        let m = 0, y = 2024;
        for (const t of tokens) {
          const lower = t.toLowerCase().slice(0, 3);
          if (monthMap[lower] !== undefined) m = monthMap[lower];
          else {
            const parsed = parseInt(t, 10);
            if (!isNaN(parsed) && parsed > 1900) y = parsed;
          }
        }
        return { year: y, month: m };
      };
      const start = parseMonthYear(parts[0]);
      const end = exp.current || parts[1].toLowerCase().includes('present')
        ? { year: new Date().getFullYear(), month: new Date().getMonth() }
        : parseMonthYear(parts[1]);
      const months = (end.year - start.year) * 12 + (end.month - start.month) + 1;
      totalMonths += Math.max(1, months);
    }
  });

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const short = years > 0 && remainingMonths > 0
    ? `${years} yrs ${remainingMonths} mos`
    : (years > 0 ? `${years} yrs` : `${totalMonths} mos`);

  const long = years > 0 && remainingMonths > 0
    ? `${years} years ${remainingMonths} months`
    : (years > 0 ? `${years} years` : `${totalMonths} months`);

  return { short, long };
}

// Company branding color accents
const COMPANY_ACCENTS: Record<string, { gradient: string; text: string; bg: string; border: string; monogram: string }> = {
  "CodExpert Solutions": {
    gradient: "from-[#FF5722] to-amber-500",
    text: "#FF5722",
    bg: "rgba(255, 87, 34, 0.08)",
    border: "rgba(255, 87, 34, 0.25)",
    monogram: "CES"
  },
  "Code Expert Solutions": {
    gradient: "from-[#FF5722] to-amber-500",
    text: "#FF5722",
    bg: "rgba(255, 87, 34, 0.08)",
    border: "rgba(255, 87, 34, 0.25)",
    monogram: "CES"
  },
  "ProfoundEdutech": {
    gradient: "from-purple-500 to-indigo-600",
    text: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.25)",
    monogram: "PE"
  },
  "Profound Edutech Pvt Ltd": {
    gradient: "from-purple-500 to-indigo-600",
    text: "#8B5CF6",
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.25)",
    monogram: "PE"
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
    if (filterType === 'training') return exp.type.toLowerCase().includes('trainee');
    return true;
  });

  // Calculate real-time current tenure
  const currentRole = EXPERIENCES.find((e) => e.current);
  const currentTenureShort = currentRole ? calculateTenure(currentRole.period, true, 'short') : '2 yrs 8 mos';
  const currentTenureLong = currentRole ? calculateTenure(currentRole.period, true, 'long') : '2 years 8 months';
  const totalExp = calculateTotalExperience(EXPERIENCES);

  return (
    <section
      id="experience"
      className={`pt-16 pb-14 sm:pt-20 sm:pb-16 relative border-t transition-colors duration-300 overflow-hidden ${
        darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-[#fafafa] border-zinc-200'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>CAREER PATHWAY & PRODUCTION ROLES</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Professional Experience
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-700'
          }`}>
            Proven engineering track record delivering scalable distributed backends, BullMQ job queues, Stripe Connect payouts, and accessible Next.js interfaces for Dubai and global enterprise stakeholders.
          </p>

          {/* LinkedIn-Inspired Real-Time Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-2xl mx-auto">
            <div className={`p-3.5 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-[#FF5722]">{totalExp.short}</div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-0.5">Total Career Tenure</div>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-[#FF5722]">{currentTenureShort}</div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-0.5">CodExpert Solutions</div>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-purple-500">8 mos</div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-0.5">ProfoundEdutech</div>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="text-lg sm:text-xl font-bold font-mono text-emerald-500">Dubai & Global</div>
              <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-0.5">Client Stakeholders</div>
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
                    : 'bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 shadow-2xs'
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
        <div ref={containerRef} className="relative pt-2">
          
          {/* Background Timeline Spine (Static Rail) */}
          <div
            className={`absolute left-[20px] sm:left-[28px] -translate-x-1/2 top-4 bottom-4 w-[3px] rounded-full transition-colors ${
              darkMode ? 'bg-zinc-800/80' : 'bg-zinc-200'
            }`}
          />

          {/* Foreground Animated Laser Beam Spine (Scroll-Linked) */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-[20px] sm:left-[28px] -translate-x-1/2 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-[#FF5722] via-orange-400 to-amber-400 shadow-[0_0_12px_rgba(255,87,34,0.6)] z-10"
          />

          {/* Experience Cards Stack */}
          <div className="space-y-8 sm:space-y-10">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = !!expandedCards[exp.id];
              const accent = COMPANY_ACCENTS[exp.company] || {
                gradient: "from-zinc-500 to-zinc-700",
                text: "#A1A1AA",
                bg: "rgba(161, 161, 170, 0.08)",
                border: "rgba(161, 161, 170, 0.25)",
                monogram: "EXP"
              };

              // Real-time LinkedIn style duration (short and long)
              const durationShort = calculateTenure(exp.period, exp.current, 'short');
              const durationLong = calculateTenure(exp.period, exp.current, 'long');

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Glowing Node Beacon */}
                  <div
                    className={`absolute left-[20px] sm:left-[28px] top-7 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center z-20 ${
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

                  {/* Redesigned Experience Card */}
                  <div
                    className={`rounded-3xl border transition-all duration-300 overflow-hidden relative ${
                      exp.current
                        ? darkMode
                          ? 'bg-zinc-900/60 border-[#FF5722]/30 shadow-xl shadow-black/40 hover:border-[#FF5722]/50'
                          : 'bg-white border-[#FF5722]/40 shadow-xl shadow-orange-500/5 hover:border-[#FF5722]/60'
                        : darkMode
                        ? 'bg-zinc-900/35 border-white/[0.08] hover:border-white/20 hover:bg-zinc-900/60 shadow-lg shadow-black/20'
                        : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-md'
                    }`}
                  >
                    {/* Top Accent Gradient Bar for Current / Highlight Role */}
                    {exp.current && (
                      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-500" />
                    )}

                    <div className="p-6 sm:p-8 space-y-5">
                      
                      {/* Top Header Row: Company Emblem, Title, Period & Real-Time Duration */}
                      <div className={`flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b pb-5 ${
                        darkMode ? 'border-white/[0.08]' : 'border-zinc-200'
                      }`}>
                        <div className="flex items-start gap-4">
                          {/* Company Emblem with Monogram */}
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-extrabold text-sm tracking-tight text-white shrink-0 bg-gradient-to-br ${accent.gradient} shadow-md mt-0.5`}
                          >
                            {accent.monogram}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className={`text-lg sm:text-xl font-display font-bold tracking-tight ${
                                darkMode ? 'text-zinc-100' : 'text-zinc-950'
                              }`}>
                                {exp.role}
                              </h3>

                              {exp.current && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/30">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                                  <span>Current Role</span>
                                </span>
                              )}
                            </div>

                            {/* Clean LinkedIn-Style Unboxed Subtitle */}
                            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                              <span className={darkMode ? 'text-zinc-200' : 'text-zinc-900'}>
                                {exp.company}
                              </span>
                              <span className="text-zinc-400">·</span>
                              <span className={`text-xs font-mono font-normal ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                {exp.type}
                              </span>
                            </div>

                            {/* LinkedIn-style Tenure & Location line */}
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-zinc-500 mt-1.5">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-[#FF5722]" />
                                <span className={darkMode ? 'text-zinc-300 font-medium' : 'text-zinc-800 font-medium'}>
                                  {exp.period}
                                </span>
                              </span>
                              <span className="text-zinc-400">·</span>
                              <span className="font-bold text-[#FF5722]">
                                {durationLong}
                              </span>
                              <span className="text-zinc-400">·</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-zinc-400" />
                                <span>{exp.location}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Expand / Collapse Button */}
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className={`self-start lg:self-center px-3 py-1.5 rounded-xl border text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                            darkMode
                              ? 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-white'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:text-zinc-950 shadow-2xs'
                          }`}
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-[#FF5722]" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-[#FF5722]" />
                          )}
                        </button>
                      </div>

                      {/* Role Executive Summary */}
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-zinc-300 font-normal' : 'text-zinc-800 font-normal'
                      }`}>
                        {exp.summary}
                      </p>

                      {/* Expandable Key Responsibilities & Architectural Deliverables */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 pt-2 overflow-hidden"
                          >
                            <div className="space-y-2.5">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF5722] font-bold block">
                                Core Production Deliverables:
                              </span>
                              <ul className="space-y-2.5">
                                {exp.responsibilities.map((resp, i) => (
                                  <li
                                    key={i}
                                    className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                                      darkMode ? 'text-zinc-300' : 'text-zinc-800'
                                    }`}
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Impact Metrics Pills */}
                            {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                              <div className="pt-2">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                                  Verified Performance Metrics:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {exp.impactMetrics.map((metric, i) => (
                                    <span
                                      key={i}
                                      className={`px-3 py-1 rounded-xl text-xs font-mono font-medium border flex items-center gap-1.5 ${
                                        darkMode
                                          ? 'bg-zinc-950/70 border-white/10 text-emerald-400'
                                          : 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
                                      }`}
                                    >
                                      <Sparkles className="w-3 h-3 text-emerald-500" />
                                      <span>{metric}</span>
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* LinkedIn-Style Skills Used List */}
                            {exp.skills && exp.skills.length > 0 && (
                              <div className={`pt-3 border-t ${
                                darkMode ? 'border-white/[0.06]' : 'border-zinc-200'
                              }`}>
                                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                                  <span className={`font-mono font-semibold ${
                                    darkMode ? 'text-zinc-400' : 'text-zinc-600'
                                  }`}>
                                    Skills:
                                  </span>
                                  {exp.skills.map((skill, i) => (
                                    <span
                                      key={skill}
                                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border ${
                                        darkMode
                                          ? 'bg-zinc-800/60 border-white/10 text-zinc-300'
                                          : 'bg-zinc-100 border-zinc-200 text-zinc-800 font-medium'
                                      }`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bottom Toggle Bar */}
                      <div className={`pt-3 border-t flex items-center justify-between ${
                        darkMode ? 'border-white/[0.06]' : 'border-zinc-200'
                      }`}>
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className={`text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                            darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                          }`}
                        >
                          {isExpanded ? (
                            <>
                              <span>Collapse Details</span>
                              <ChevronUp className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              <span>Show All Responsibilities ({exp.responsibilities.length})</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>

                        <div className="text-[11px] font-mono text-zinc-500">
                          {exp.location}
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
