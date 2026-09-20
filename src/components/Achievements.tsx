import React from 'react';
import {
  Award,
  GraduationCap,
  Trophy
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

interface AchievementsProps {
  darkMode: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  return (
    <section className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <Trophy className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>CREDENTIALS & ACADEMIA</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Education & IIT Certifications
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Rigorous engineering education and advanced cloud infrastructure accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Education Card */}
          <div className={`lg:col-span-5 p-6 sm:p-7 rounded-3xl border space-y-5 ${
            darkMode ? 'bg-zinc-900/30 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-xs'
          }`}>
            <div className={`flex items-center gap-3.5 border-b pb-4 ${
              darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
            }`}>
              <div className={`p-2.5 rounded-2xl border ${
                darkMode ? 'bg-zinc-800 border-white/[0.08] text-[#FF5722]' : 'bg-zinc-100 border-black/[0.06] text-[#FF5722]'
              }`}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono tracking-wider font-semibold ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  ACADEMIC DEGREE
                </span>
                <h3 className={`text-base sm:text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  {PERSONAL_INFO.degree}
                </h3>
              </div>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className={`font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
                {PERSONAL_INFO.college}
              </p>
              <div className={`flex items-center justify-between font-mono pt-2 border-t ${
                darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
              }`}>
                <span className={darkMode ? 'text-zinc-400' : 'text-zinc-500'}>CGPA Score:</span>
                <span className="font-bold px-2.5 py-0.5 rounded-full border text-xs bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
                  {PERSONAL_INFO.cgpa} / 10.0
                </span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs">
                <span className={darkMode ? 'text-zinc-400' : 'text-zinc-500'}>Graduation Year:</span>
                <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>{PERSONAL_INFO.graduationYear}</span>
              </div>
            </div>
          </div>

          {/* Certifications List */}
          <div className="lg:col-span-7 space-y-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className={`p-5 sm:p-6 rounded-3xl border transition-all space-y-2.5 text-left ${
                  darkMode
                    ? 'bg-zinc-900/30 border-white/[0.08] hover:border-[#FF5722]/40'
                    : 'bg-white border-black/[0.06] hover:border-[#FF5722]/40 shadow-xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#FF5722] shrink-0" />
                    <h3 className={`text-sm sm:text-base font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                      {cert.title}
                    </h3>
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border w-fit ${
                    darkMode ? 'bg-zinc-800 border-white/[0.08] text-zinc-300' : 'bg-zinc-100 border-black/[0.06] text-zinc-700'
                  }`}>
                    {cert.badgeText} • {cert.year}
                  </span>
                </div>

                <p className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Issued by: {cert.issuer}
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

