import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  GraduationCap,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Network,
  ExternalLink,
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

interface AchievementsProps {
  darkMode: boolean;
}

interface CredentialModalData {
  title: string;
  issuer: string;
  year: string;
  badgeText: string;
  description: string;
  topics: string[];
  accreditationAuthority: string;
  deliveryFormat: string;
}

const CERTIFICATION_DETAILS: Record<string, CredentialModalData> = {
  'cert-cloud': {
    title: 'Cloud Computing & Distributed Systems',
    issuer: 'IIT Kharagpur (Indian Institute of Technology, Kharagpur)',
    year: '2022',
    badgeText: 'Elite Certification',
    description: 'Advanced postgraduate-level engineering curriculum covering distributed hypervisors, cloud storage paradigms, multi-tenant resource scheduling, and AWS cloud virtualization topologies.',
    topics: [
      'Virtual Machine Hypervisors (Type 1 & Type 2 Architecture)',
      'Distributed Storage Models (Block, Object, S3, EBS)',
      'Multi-Tenant Resource Isolation & SLA Management',
      'AWS Cloud Infrastructure & Container Deployment Topology',
      'Elastic Auto-Scaling & Load Balancing Mathematics',
      'Fault Tolerance & Distributed Consensus Protocols'
    ],
    accreditationAuthority: 'NPTEL · Ministry of Education, Government of India',
    deliveryFormat: '12-Week Rigorous Proctored Examination & Case Studies'
  },
  'cert-iot': {
    title: 'Introduction to Industry 4.0 & Industrial IoT',
    issuer: 'IIT Kharagpur (Indian Institute of Technology, Kharagpur)',
    year: '2023',
    badgeText: 'IIT Certified Credential',
    description: 'Comprehensive study of high-throughput industrial telemetry, low-latency MQTT message protocols, sensor networks, edge compute gateways, and automated data ingestion pipelines.',
    topics: [
      'MQTT & CoAP Low-Bandwidth Broker Architectures',
      'Industrial Sensor Networks & Wireless Telemetry Nodes',
      'Time-Series Telemetry Ingestion & Stream Processing',
      'Edge Computing & Real-Time Event-Driven Triggers',
      'Industrial Cybersecurity & Zero-Trust Device Hardware Keys',
      'SCADA Integration & Cloud Analytics Pipelines'
    ],
    accreditationAuthority: 'NPTEL · Ministry of Education, Government of India',
    deliveryFormat: '12-Week Rigorous Proctored Examination & Practical Labs'
  }
};

const CS_FOUNDATION_PILLARS = [
  {
    icon: Database,
    title: 'ACID Transactions & Data Integrity',
    desc: 'Row-level locking, B-tree indexing, and idempotent state machines for financial systems.'
  },
  {
    icon: Layers,
    title: 'Distributed Systems & Queues',
    desc: 'Decoupled domain microservices, BullMQ worker pools, and Dead Letter Queue recovery.'
  },
  {
    icon: Cpu,
    title: 'Algorithmic Complexity & Profiling',
    desc: 'O(1) Redis caching lookups, sub-second latency profiling, and Node.js event-loop tuning.'
  },
  {
    icon: Network,
    title: 'Network Protocols & Telemetry',
    desc: 'High-frequency WebSockets, MQTT broker subscriptions, and HTTP/2 multiplexing.'
  }
];

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const [activeModalCred, setActiveModalCred] = useState<CredentialModalData | null>(null);

  return (
    <section
      id="education"
      className={`py-24 sm:py-32 relative border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-[#FAFAFA] border-zinc-200'
      }`}
    >
      <span id="achievements" className="sr-only" />
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & ACADEMIA</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Education & IIT Certifications
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-700'
          }`}>
            Rigorous Computer Engineering academic foundations paired with elite postgraduate-level accreditations from the prestigious Indian Institute of Technology (IIT) Kharagpur.
          </p>
        </div>

        {/* Flagship Bento: Academic Degree (Left) + IIT Accreditations (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Flagship Academic Degree Card (5 Columns on Desktop) */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-sm ${
              darkMode
                ? 'bg-zinc-900/60 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900'
                : 'bg-white border-zinc-200 hover:border-[#FF5722]/50 hover:shadow-xl hover:shadow-[#FF5722]/5'
            }`}
          >
            {/* Top Academic Tag & Crest Accent */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono tracking-wider font-bold uppercase ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  ACADEMIC FOUNDATION
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  darkMode
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  First Class with Distinction
                </span>
              </div>

              {/* Institution & Degree Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl border shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    darkMode
                      ? 'bg-zinc-800 border-white/10 text-[#FF5722]'
                      : 'bg-[#FF5722]/10 border-[#FF5722]/20 text-[#FF5722]'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight leading-tight ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-950'
                    }`}>
                      {PERSONAL_INFO.degree}
                    </h3>
                    <p className={`text-xs font-semibold ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      Computer Engineering Specialization
                    </p>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed pt-2 font-medium ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {PERSONAL_INFO.college}
                </p>
              </div>

              {/* Distinction Metrics Showcase */}
              <div className={`grid grid-cols-2 gap-3 p-4 rounded-2xl border ${
                darkMode ? 'bg-zinc-950/60 border-white/[0.06]' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div>
                  <div className={`text-[10px] font-mono uppercase font-bold ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    Graduation Score
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#FF5722] font-mono tracking-tight">
                    {PERSONAL_INFO.cgpa} <span className="text-xs font-medium text-zinc-500">/ 10.0</span>
                  </div>
                  <div className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    High Academic Honors
                  </div>
                </div>

                <div>
                  <div className={`text-[10px] font-mono uppercase font-bold ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    Cohort Duration
                  </div>
                  <div className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    2019 – 2023
                  </div>
                  <div className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    4-Year Full-Time B.Tech
                  </div>
                </div>
              </div>

              {/* Core Computer Science Foundations */}
              <div className="space-y-2">
                <span className={`text-[11px] font-mono uppercase font-bold tracking-wider ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  Core Academic Coursework
                </span>
                <div className={`text-xs leading-relaxed flex flex-wrap gap-x-2 gap-y-1 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  <span>Data Structures & Algorithms</span>
                  <span className="text-zinc-400">·</span>
                  <span>Database Management (SQL/RDBMS)</span>
                  <span className="text-zinc-400">·</span>
                  <span>Operating Systems & Concurrency</span>
                  <span className="text-zinc-400">·</span>
                  <span>Computer Networks & TCP/IP</span>
                  <span className="text-zinc-400">·</span>
                  <span>Object-Oriented Design</span>
                  <span className="text-zinc-400">·</span>
                  <span>Distributed Systems</span>
                </div>
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono font-medium ${
              darkMode ? 'border-white/[0.06] text-zinc-400' : 'border-zinc-100 text-zinc-600'
            }`}>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF5722]" />
                University Verified Degree
              </span>
              <span>Jalgaon, MH</span>
            </div>
          </div>

          {/* IIT Kharagpur Elite Certifications Stack (7 Columns on Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Institutional Header Banner */}
            <div className={`p-4 sm:p-5 rounded-2xl border flex items-center justify-between gap-4 ${
              darkMode
                ? 'bg-amber-950/20 border-amber-500/20 text-amber-200'
                : 'bg-amber-50/90 border-amber-200 text-amber-950 shadow-xs'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400 font-bold">
                  IIT
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                    Indian Institute of Technology (IIT) Kharagpur
                  </h4>
                  <p className="text-[11px] opacity-80">
                    National Programme on Technology Enhanced Learning (NPTEL) · Ministry of Education, Govt. of India
                  </p>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                <Sparkles className="w-3 h-3" />
                Elite Tier
              </div>
            </div>

            {/* Certification Cards */}
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => {
                const details = CERTIFICATION_DETAILS[cert.id];
                return (
                  <div
                    key={cert.id}
                    className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 space-y-4 text-left group shadow-xs ${
                      darkMode
                        ? 'bg-zinc-900/60 border-white/[0.08] hover:border-amber-500/40 hover:bg-zinc-900'
                        : 'bg-white border-zinc-200 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5'
                    }`}
                  >
                    {/* Top Status & Tier */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <span className={`text-[10px] font-mono tracking-wider font-bold uppercase ${
                            darkMode ? 'text-zinc-400' : 'text-zinc-600'
                          }`}>
                            IIT KHARAGPUR · {cert.year}
                          </span>
                          <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                            darkMode ? 'text-zinc-100' : 'text-zinc-950'
                          }`}>
                            {cert.title}
                          </h3>
                        </div>
                      </div>

                      <span className={`text-[11px] font-mono px-3 py-1 rounded-full border w-fit font-bold shrink-0 ${
                        darkMode
                          ? 'bg-amber-950/40 border-amber-500/30 text-amber-300'
                          : 'bg-amber-50 border-amber-200 text-amber-800'
                      }`}>
                        {cert.badgeText}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      {cert.description}
                    </p>

                    {/* Highlights & View Syllabus Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-zinc-100 dark:border-white/[0.06]">
                      <div className={`text-[11px] font-mono flex items-center gap-2 ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        <span>Issued by {cert.issuer}</span>
                      </div>

                      {details && (
                        <button
                          type="button"
                          onClick={() => setActiveModalCred(details)}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                            darkMode
                              ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-white/10 hover:text-white'
                              : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-200'
                          }`}
                        >
                          <span>Inspect Syllabus & Skills</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Foundational CS Pillars applied in production */}
        <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
          darkMode ? 'bg-zinc-900/40 border-white/[0.06]' : 'bg-white border-zinc-200 shadow-xs'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 border-zinc-100 dark:border-white/[0.06]">
            <div>
              <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                darkMode ? 'text-zinc-100' : 'text-zinc-950'
              }`}>
                Engineering Principles in Daily Production
              </h3>
              <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                How academic computer science theorems translate into reliable full-stack applications.
              </p>
            </div>
            <span className={`text-[11px] font-mono font-semibold ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Production Architecture Standards
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CS_FOUNDATION_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border space-y-2 transition-all duration-200 ${
                    darkMode
                      ? 'bg-zinc-950/60 border-white/[0.06] hover:border-[#FF5722]/40'
                      : 'bg-zinc-50 border-zinc-200/80 hover:border-[#FF5722]/40 hover:bg-white'
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FF5722]/10 border border-[#FF5722]/25 flex items-center justify-center text-[#FF5722]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className={`text-xs sm:text-sm font-bold leading-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Credential Syllabus & Accreditation Inspector Modal */}
      <AnimatePresence>
        {activeModalCred && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalCred(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className={`relative w-full max-w-xl rounded-3xl border p-6 sm:p-8 space-y-6 shadow-2xl z-10 overflow-hidden ${
                darkMode ? 'bg-[#0f0f12] border-white/10 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                    <Sparkles className="w-3 h-3" />
                    {activeModalCred.badgeText} · {activeModalCred.year}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                    {activeModalCred.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {activeModalCred.issuer}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalCred(null)}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {activeModalCred.description}
              </p>

              {/* Curriculum Breakdown */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Mastered Curriculum & Verified Competencies
                </h4>
                <div className="space-y-2">
                  {activeModalCred.topics.map((topic, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2.5 text-xs p-2.5 rounded-xl border ${
                        darkMode ? 'bg-zinc-900/60 border-white/[0.06] text-zinc-300' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-medium leading-tight">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accreditation Note */}
              <div className={`p-4 rounded-2xl border text-xs space-y-1 ${
                darkMode ? 'bg-amber-950/20 border-amber-500/20 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>Accreditation & Quality Benchmark</span>
                </div>
                <p className="text-[11px] opacity-80 leading-relaxed">
                  {activeModalCred.accreditationAuthority} • {activeModalCred.deliveryFormat}
                </p>
              </div>

              {/* Modal Footer Close */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModalCred(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold text-xs shadow-md shadow-[#FF5722]/20 transition-all cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const Education = Achievements;
