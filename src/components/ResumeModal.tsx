import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  FileText,
  X,
  Download,
  Copy,
  Check,
  Printer,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { downloadResume } from '../utils/resumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode = true }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.4 } });
      const success = downloadResume();
      if (success) {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 3500);
      }
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
UMESH KOTWAL
${PERSONAL_INFO.title}
${PERSONAL_INFO.location} | Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
Portfolio: ${PERSONAL_INFO.portfolioUrl} | GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.fullBio}

PROFESSIONAL EXPERIENCE
${EXPERIENCES.map((e) => `• ${e.role} at ${e.company} (${e.period}, ${e.location})\n  - ${e.summary}\n  Key Highlights:\n${e.responsibilities.map((r) => `    * ${r}`).join('\n')}`).join('\n\n')}

KEY PROJECTS
${PROJECTS.map((p) => `• ${p.title} (${p.subtitle}): ${p.description}\n  Tech: ${p.techStack.join(', ')}\n${p.highlights.map((h) => `    * ${h}`).join('\n')}`).join('\n\n')}

EDUCATION & CERTIFICATIONS
${PERSONAL_INFO.degree} (${PERSONAL_INFO.graduationYear}) - ${PERSONAL_INFO.college} - CGPA: ${PERSONAL_INFO.cgpa}
${CERTIFICATIONS.map((c) => `• ${c.title} - ${c.issuer} (${c.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className={`relative w-full max-w-4xl h-[90vh] sm:h-[85vh] border rounded-3xl shadow-2xl flex flex-col overflow-hidden text-left ${
          darkMode ? 'bg-[#09090b] border-white/[0.1] text-zinc-300' : 'bg-white border-black/[0.08] text-zinc-800'
        }`}
      >
        {/* Header */}
        <div className={`px-4 sm:px-6 py-3.5 border-b flex flex-wrap items-center justify-between gap-2 shrink-0 ${
          darkMode ? 'bg-zinc-950/80 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border ${
              darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-300' : 'bg-zinc-100 border-black/[0.06] text-zinc-700'
            }`}>
              <FileText className="w-4 h-4 text-[#FF5722]" />
            </div>
            <div>
              <h3 className={`text-sm sm:text-base font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                Umesh Kotwal — Curriculum Vitae
              </h3>
              <p className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Full Stack Developer & Microservices Lead</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className={`hidden sm:flex px-3 py-1.5 rounded-full text-xs font-mono items-center gap-1.5 border transition-colors ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-black/[0.06]'
              }`}
              title="Copy Resume Plain Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className={`hidden md:flex px-3 py-1.5 rounded-full text-xs font-mono items-center gap-1.5 border transition-colors ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-black/[0.06]'
              }`}
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/30 active:scale-95 cursor-pointer disabled:opacity-75"
              id="btn-download-resume-pdf"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>{downloading ? 'Generating...' : 'Download PDF'}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-full border transition-colors ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-black/[0.06]'
              }`}
              aria-label="Close Resume Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-7 font-sans text-xs print:p-0">
          {/* Header Info */}
          <div className={`flex flex-col sm:flex-row items-center gap-5 border-b pb-6 text-center sm:text-left ${
            darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
          }`}>
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-md">
              <img
                src={localStorage.getItem('umesh_custom_photo') || PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 flex-1">
              <h1 className={`text-xl sm:text-2xl font-bold tracking-tight uppercase ${
                darkMode ? 'text-zinc-100' : 'text-zinc-950'
              }`}>
                UMESH KOTWAL
              </h1>
              <p className="text-xs font-mono font-semibold text-[#FF5722]">
                FULL STACK DEVELOPER (REACT.JS / NEXT.JS / NODE.JS)
              </p>
              <p className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Surat, Gujarat, India | +91 6352001332 | {PERSONAL_INFO.email}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 text-xs font-mono pt-1">
                <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#FF5722] underline underline-offset-2">Portfolio</a>
                <span className="text-zinc-600">•</span>
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#FF5722] underline underline-offset-2">GitHub</a>
                <span className="text-zinc-600">•</span>
                <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#FF5722] underline underline-offset-2">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-wider border-b pb-1 ${
              darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
            }`}>
              PROFESSIONAL SUMMARY
            </h2>
            <p className={`leading-relaxed text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {PERSONAL_INFO.fullBio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-wider border-b pb-1 ${
              darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
            }`}>
              TECHNICAL SKILLS & CORE COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className={`p-3 rounded-2xl border ${darkMode ? 'bg-zinc-950/60 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'}`}>
                <div className={`font-mono font-medium uppercase mb-2 text-[10px] ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Languages & Frameworks</div>
                <div className="flex flex-wrap gap-1.5">
                  {["JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"].map((s) => (
                    <span key={s} className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-mono ${
                      darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-300' : 'bg-white border-black/[0.06] text-zinc-800'
                    }`}>
                      <TechIcon name={s} className="w-3 h-3" darkMode={darkMode} />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-3 rounded-2xl border ${darkMode ? 'bg-zinc-950/60 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'}`}>
                <div className={`font-mono font-medium uppercase mb-2 text-[10px] ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Backend & Databases</div>
                <div className="flex flex-wrap gap-1.5">
                  {["RESTful API", "Microservices", "PostgreSQL", "MySQL", "Prisma ORM", "Redis", "BullMQ DLQ"].map((s) => (
                    <span key={s} className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-mono ${
                      darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-300' : 'bg-white border-black/[0.06] text-zinc-800'
                    }`}>
                      <TechIcon name={s} className="w-3 h-3" darkMode={darkMode} />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-3 rounded-2xl border ${darkMode ? 'bg-zinc-950/60 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'}`}>
                <div className={`font-mono font-medium uppercase mb-2 text-[10px] ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Real-Time & Payments</div>
                <div className="flex flex-wrap gap-1.5">
                  {["WebSockets", "FCM Push", "Agora SDK", "Stripe", "Razorpay", "Stripe Connect"].map((s) => (
                    <span key={s} className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-mono ${
                      darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-300' : 'bg-white border-black/[0.06] text-zinc-800'
                    }`}>
                      <TechIcon name={s} className="w-3 h-3" darkMode={darkMode} />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-3 rounded-2xl border ${darkMode ? 'bg-zinc-950/60 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'}`}>
                <div className={`font-mono font-medium uppercase mb-2 text-[10px] ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>DevOps & Cloud Tools</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Docker", "AWS ECS", "Jenkins", "Bitbucket CI/CD", "Git", "Vercel", "Hostinger"].map((s) => (
                    <span key={s} className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-mono ${
                      darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-300' : 'bg-white border-black/[0.06] text-zinc-800'
                    }`}>
                      <TechIcon name={s} className="w-3 h-3" darkMode={darkMode} />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-wider border-b pb-1 ${
              darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
            }`}>
              PROFESSIONAL EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className={`flex justify-between items-baseline font-bold text-xs sm:text-sm ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-950'
                }`}>
                  <span>{exp.role} — <span className="text-[#FF5722]">{exp.company}</span></span>
                  <span className={`font-mono text-[11px] ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{exp.period} | {exp.location}</span>
                </div>
                <ul className={`list-disc pl-4 space-y-1 text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-wider border-b pb-1 ${
              darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
            }`}>
              KEY PROJECTS
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className={`flex justify-between font-bold text-xs sm:text-sm ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  <span>{proj.title} — <span className="text-zinc-400 font-mono text-xs">{proj.subtitle}</span></span>
                  <span className={`font-mono text-[11px] ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{proj.techStack.join(', ')}</span>
                </div>
                <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{proj.description}</p>
                <ul className={`list-disc pl-4 space-y-0.5 text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {proj.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-1.5">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider border-b pb-1 ${
                darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
              }`}>
                EDUCATION
              </h2>
              <div className={`font-bold text-xs ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>{PERSONAL_INFO.degree}</div>
              <div className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{PERSONAL_INFO.college}</div>
              <div className={`font-mono text-[11px] ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>CGPA: {PERSONAL_INFO.cgpa} ({PERSONAL_INFO.graduationYear})</div>
            </div>

            <div className="space-y-1.5">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-wider border-b pb-1 ${
                darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
              }`}>
                CERTIFICATIONS
              </h2>
              {CERTIFICATIONS.map((c) => (
                <div key={c.id}>
                  <div className={`font-bold text-xs ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>{c.title}</div>
                  <div className={`font-mono text-[11px] ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{c.issuer} ({c.year})</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

