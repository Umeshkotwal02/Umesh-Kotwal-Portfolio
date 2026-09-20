import React from 'react';
import { motion } from 'motion/react';
import {
  Server,
  CreditCard,
  Layout,
  Radio,
  Cloud,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  darkMode: boolean;
}

const ICON_MAP: Record<string, any> = {
  Server,
  CreditCard,
  Layout,
  Radio,
  Cloud,
  ShieldCheck
};

export const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  return (
    <section id="services" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-white border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <Server className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>SOLUTIONS & OFFERINGS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Engineering Capabilities & Services
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            High-value engineering services backed by 2+ years of production experience in microservices, Stripe Connect payouts, and full-stack React/Next.js platforms.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((serv, idx) => {
            const Icon = ICON_MAP[serv.icon] || Server;
            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-7 rounded-3xl border transition-all duration-300 space-y-5 flex flex-col justify-between group ${
                  darkMode
                    ? 'bg-zinc-900/30 border-white/[0.08] hover:border-[#FF5722]/40 hover:bg-zinc-900/60'
                    : 'bg-zinc-50/70 border-black/[0.06] hover:border-[#FF5722]/40 hover:bg-white hover:shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className={`p-2.5 rounded-2xl border w-fit group-hover:scale-105 group-hover:border-[#FF5722]/40 group-hover:text-[#FF5722] transition-all ${
                    darkMode ? 'bg-zinc-800 border-white/[0.08] text-zinc-200' : 'bg-white border-black/[0.06] text-zinc-900 shadow-xs'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    {serv.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {serv.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className={`text-[10px] font-mono tracking-wider font-semibold ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      KEY DELIVERABLES:
                    </div>
                    <ul className={`space-y-1.5 text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {serv.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`pt-4 border-t flex flex-wrap gap-1.5 ${
                  darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
                }`}>
                  {serv.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                        darkMode ? 'bg-zinc-900 border-white/[0.06] text-zinc-300' : 'bg-white border-black/[0.06] text-zinc-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

