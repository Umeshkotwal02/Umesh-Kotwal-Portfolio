import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  return (
    <section id="experience" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-white border-black/[0.05]'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <Briefcase className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>CAREER PATHWAY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Professional Experience
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            2+ years building production systems, microservices backends, Stripe Connect payouts, and SEO-optimized web applications.
          </p>
        </div>

        {/* Timeline List */}
        <div className={`relative pl-6 sm:pl-8 border-l space-y-10 sm:space-y-12 ${
          darkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'
        }`}>
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-3 w-4 h-4 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    exp.current
                      ? 'bg-[#FF5722] border-[#FF5722] ring-4 ring-[#FF5722]/25'
                      : darkMode
                      ? 'bg-zinc-800 border-white/20'
                      : 'bg-zinc-300 border-black/10'
                  }`}
                />

                {/* Timeline Card */}
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 space-y-5 ${
                  darkMode
                    ? 'bg-zinc-900/30 border-white/[0.08] hover:border-[#FF5722]/40'
                    : 'bg-zinc-50/80 border-black/[0.06] hover:border-[#FF5722]/40 shadow-xs'
                }`}>
                  {/* Card Header */}
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 ${
                    darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                          darkMode ? 'text-zinc-300 bg-white/[0.04] border-white/[0.08]' : 'text-zinc-700 bg-black/[0.03] border-black/[0.06]'
                        }`}>
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border text-[#FF5722] bg-[#FF5722]/10 border-[#FF5722]/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className={`text-lg sm:text-xl font-bold mt-2 ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                        {exp.role} <span className="text-zinc-400 font-normal">@ {exp.company}</span>
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                      <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        darkMode ? 'bg-zinc-950/60 border-white/[0.06] text-zinc-400' : 'bg-white border-black/[0.06] text-zinc-600'
                      }`}>
                        <Calendar className="w-3 h-3 text-zinc-400" />
                        {exp.period}
                      </span>
                      <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                        darkMode ? 'bg-zinc-950/60 border-white/[0.06] text-zinc-400' : 'bg-white border-black/[0.06] text-zinc-600'
                      }`}>
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Role Summary */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {exp.summary}
                  </p>

                  {/* Impact Metrics Badges */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.impactMetrics.map((metric, i) => (
                        <span
                          key={i}
                          className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border flex items-center gap-1.5 ${
                            darkMode
                              ? 'bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25'
                              : 'bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 font-medium'
                          }`}
                        >
                          <Zap className="w-3 h-3 text-[#FF5722]" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                          darkMode ? 'bg-zinc-950/40 text-zinc-400 border-white/[0.06]' : 'bg-white text-zinc-700 border-black/[0.06]'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Detailed Accomplishments */}
                  <div className="pt-2">
                    <button
                      onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                      className="text-xs font-mono font-medium text-[#FF5722] hover:text-[#F4511E] flex items-center gap-1 transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Key Responsibilities' : 'View Key Responsibilities & Achievements'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`mt-4 space-y-2 text-xs list-none pt-3 border-t ${
                            darkMode ? 'text-zinc-400 border-white/[0.06]' : 'text-zinc-600 border-black/[0.06]'
                          }`}
                        >
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

