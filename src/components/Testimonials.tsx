import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  return (
    <section className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-white border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>CLIENT & PEER FEEDBACK</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Endorsements & Recommendations
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Feedback from enterprise engineering directors, Dubai venture founders, and technical leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`p-7 rounded-3xl border transition-all duration-300 space-y-5 flex flex-col justify-between text-left group ${
                darkMode
                  ? 'bg-zinc-900/30 border-white/[0.08] hover:border-[#FF5722]/40 hover:bg-zinc-900/60'
                  : 'bg-zinc-50/70 border-black/[0.06] hover:border-[#FF5722]/40 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FF5722]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border text-[#FF5722] bg-[#FF5722]/10 border-[#FF5722]/25 font-semibold">
                    VERIFIED
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  "{t.quote}"
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center gap-3 ${
                darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
              }`}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className={`w-10 h-10 rounded-full object-cover border ${
                    darkMode ? 'border-white/10' : 'border-black/10'
                  }`}
                />
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    {t.name}
                  </h4>
                  <p className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {t.role} • {t.company}
                  </p>
                  <p className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

