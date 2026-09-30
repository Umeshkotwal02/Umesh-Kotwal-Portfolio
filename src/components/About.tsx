import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  Radio,
  Server,
  Workflow,
  Sparkles,
  Code2,
  Terminal,
  Globe,
  GraduationCap,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

const ARCHITECTURE_NODES = [
  {
    id: 'api-gateway',
    title: 'API Gateway & Routing',
    category: 'Ingress & Auth',
    description: 'Stateless ingress layer handling JWT validation, SSL termination, and client rate limiting before routing to internal domain microservices.',
    metrics: '<5ms Auth Verification',
    icon: Server,
    color: '#FF5722'
  },
  {
    id: 'redis-cache',
    title: 'Redis In-Memory Tier',
    category: 'Low-Latency Cache',
    description: 'Sub-40ms key-value store caching hot user profiles, product catalogs, and token bucket counters to prevent unnecessary database hits.',
    metrics: '99.2% Cache Hit Ratio',
    icon: Zap,
    color: '#DC382D'
  },
  {
    id: 'bullmq-queues',
    title: 'BullMQ Async Queues',
    category: 'Zero-Loss Workflows',
    description: 'Decoupled queue workers processing heavy image conversions, email dispatch, push notifications, and payment webhooks with Dead Letter Queues (DLQ).',
    metrics: '0% Message Drop Guarantee',
    icon: Workflow,
    color: '#FF6600'
  },
  {
    id: 'database-tier',
    title: 'PostgreSQL & MySQL',
    category: 'Persistence Layer',
    description: 'ACID-compliant relational schemas with indexed foreign keys, Prisma ORM type-safety, and automated database connection pooling.',
    metrics: 'Optimized Query Indexes',
    icon: Database,
    color: '#4169E1'
  },
  {
    id: 'realtime-layer',
    title: 'WebSockets & Agora RTC',
    category: 'Live Data Streaming',
    description: 'Bi-directional socket connections for live venue chat, instant order status broadcasts, and low-latency audio/video streaming via Agora.',
    metrics: '<120ms Global Latency',
    icon: Radio,
    color: '#099DFD'
  }
];

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'journey' | 'principles' | 'dubai'>('journey');
  const [selectedArchNode, setSelectedArchNode] = useState<string>('api-gateway');

  return (
    <section
      id="about"
      className={`pt-16 pb-14 sm:pt-20 sm:pb-16 relative border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-white border-black/[0.05]'
      }`}
    >
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#FF5722]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 shadow-xs">
            <User className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>BACKGROUND & ARCHITECTURE</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Behind the Systems
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A deep look into Umesh Kotwal's engineering philosophy, architecture standards, and direct client delivery across Indian and Dubai enterprises.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center">
          <div className={`p-1.5 rounded-2xl border backdrop-blur-xl inline-flex flex-wrap gap-1.5 ${
            darkMode ? 'bg-zinc-900/80 border-white/[0.08]' : 'bg-zinc-100/90 border-black/[0.06] shadow-xs'
          }`}>
            {[
              { id: 'journey', label: 'Engineering Journey', icon: User },
              { id: 'principles', label: 'Core Principles', icon: ShieldCheck },
              { id: 'dubai', label: 'Dubai Enterprise Delivery', icon: Building2 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-white shadow-2xs'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
            >
              {/* Left Column: Biography & Qualifications */}
              <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#FF5722] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Surat to Dubai Production Deliverables</span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-display font-bold tracking-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    Engineering Modern Web & Microservices Systems
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-zinc-300' : 'text-zinc-600'
                  }`}>
                    {PERSONAL_INFO.fullBio}
                  </p>
                </div>

                {/* Academic & Certification Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className={`p-4 rounded-2xl border transition-all ${
                    darkMode ? 'bg-zinc-900/60 border-white/[0.08]' : 'bg-zinc-50 border-black/[0.06] shadow-xs'
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5 text-[#FF5722]">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">BE in Computer Engineering</span>
                    </div>
                    <div className={`text-xs font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      {PERSONAL_INFO.college}
                    </div>
                    <div className="text-[11px] font-mono mt-1 text-zinc-400">
                      CGPA: {PERSONAL_INFO.cgpa} • Graduated {PERSONAL_INFO.graduationYear}
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border transition-all ${
                    darkMode ? 'bg-zinc-900/60 border-white/[0.08]' : 'bg-zinc-50 border-black/[0.06] shadow-xs'
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5 text-blue-500">
                      <Award className="w-4 h-4" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">IIT Kharagpur Certified</span>
                    </div>
                    <div className={`text-xs font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      Cloud Computing & Industry 4.0 IoT
                    </div>
                    <div className="text-[11px] font-mono mt-1 text-zinc-400">
                      NPTEL Elite Certifications
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Tech System Specs Card */}
              <div className={`lg:col-span-5 p-6 sm:p-7 rounded-3xl border shadow-xl flex flex-col justify-between ${
                darkMode
                  ? 'bg-zinc-950/80 border-white/[0.08] shadow-black/40'
                  : 'bg-zinc-900 text-white border-zinc-800 shadow-zinc-400/20'
              }`}>
                <div>
                  <div className="flex items-center justify-between font-mono text-xs font-medium border-b border-zinc-800 pb-3 mb-4">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Terminal className="w-4 h-4 text-[#FF5722]" />
                      <span>production_specs.env</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Node v20 LTS
                    </span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span className="text-zinc-500">ENGINEERING_FOCUS=</span>
                      <span className="text-zinc-200 font-semibold">Microservices & Full-Stack</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span className="text-zinc-500">CORE_RUNTIME=</span>
                      <span className="text-zinc-200 font-semibold">Node.js / Express / Next 14</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span className="text-zinc-500">ASYNC_QUEUES=</span>
                      <span className="text-[#FF5722] font-semibold">BullMQ + DLQ (Zero-Loss)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span className="text-zinc-500">CACHE_ENGINE=</span>
                      <span className="text-red-400 font-semibold">Redis (&lt;10ms In-Memory)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-800/80">
                      <span className="text-zinc-500">PAYMENT_ESCROW=</span>
                      <span className="text-purple-400 font-semibold">Stripe Connect & Razorpay</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-zinc-500">CLOUD_DEPLOYMENT=</span>
                      <span className="text-blue-400 font-semibold">AWS ECS / Docker / Bitbucket</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified Production Ready</span>
                  </div>
                  <span>Surat / Dubai</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'principles' && (
            <motion.div
              key="principles"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Zero-Data-Loss Architecture",
                  desc: "Fault-tolerant background jobs engineered using BullMQ and Dead Letter Queues (DLQ). Failed jobs are automatically retried with exponential backoff and logged for complete transaction recovery with 0% data drop.",
                  icon: ShieldCheck,
                  badge: "BullMQ + DLQ",
                  color: "#FF5722"
                },
                {
                  title: "Microservice Decoupling",
                  desc: "Deconstructing monolithic codebases into isolated, domain-driven services that communicate over low-latency REST and WebSocket gateways, ensuring isolated scalability and high fault tolerance.",
                  icon: Layers,
                  badge: "Microservices",
                  color: "#3B82F6"
                },
                {
                  title: "Sub-40ms Redis Caching",
                  desc: "In-memory caching for session tokens, active rate limiting, and hot database read queries, eliminating database strain and speeding up response times for mobile and web clients.",
                  icon: Zap,
                  badge: "In-Memory Cache",
                  color: "#DC382D"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-7 rounded-3xl border transition-all text-left space-y-4 group hover:shadow-lg ${
                      darkMode
                        ? 'bg-zinc-900/50 border-white/[0.08] hover:border-white/20'
                        : 'bg-white border-black/[0.06] shadow-xs hover:border-black/15'
                    }`}
                  >
                    <div
                      className="p-3 rounded-2xl border w-fit"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}30`,
                        color: item.color
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className="inline-block text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${item.color}10`,
                        borderColor: `${item.color}25`,
                        color: item.color
                      }}
                    >
                      {item.badge}
                    </span>

                    <h4 className={`text-base sm:text-lg font-bold ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-950'
                    }`}>
                      {item.title}
                    </h4>

                    <p className={`text-xs leading-relaxed ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'dubai' && (
            <motion.div
              key="dubai"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={`p-6 sm:p-9 rounded-3xl border text-left space-y-6 ${
                darkMode ? 'bg-zinc-900/60 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-xs'
              }`}
            >
              <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-5 ${
                darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
              }`}>
                <div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722] font-semibold inline-flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[#FF5722]" />
                    <span>DUBAI, UAE ENTERPRISE PROJECTS</span>
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mt-2 ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-950'
                  }`}>
                    Direct Backend Lead for Dubai Stakeholders
                  </h3>
                </div>

                <div className={`text-xs font-mono border px-3.5 py-2 rounded-xl ${
                  darkMode ? 'text-zinc-300 bg-zinc-950 border-white/[0.08]' : 'text-zinc-800 bg-zinc-50 border-black/[0.06] font-medium'
                }`}>
                  Vyonic & Vybemena
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed">
                <div className={`space-y-3 p-5 rounded-2xl border ${
                  darkMode ? 'bg-zinc-950/60 border-white/[0.06] text-zinc-300' : 'bg-zinc-50 border-black/[0.06] text-zinc-700'
                }`}>
                  <h4 className={`font-semibold text-sm flex items-center gap-2 ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722]" />
                    <span>Vyonic — Health & Gym Platform</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Backend Team Lead coordinating with mobile, frontend, and admin teams. Ran requirement workshops directly with Dubai stakeholders to build gym assessment booking flows, trainer availability scheduling, and session unlocking backed by Stripe.
                  </p>
                </div>

                <div className={`space-y-3 p-5 rounded-2xl border ${
                  darkMode ? 'bg-zinc-950/60 border-white/[0.06] text-zinc-300' : 'bg-zinc-50 border-black/[0.06] text-zinc-700'
                }`}>
                  <h4 className={`font-semibold text-sm flex items-center gap-2 ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722]" />
                    <span>Vybemena — Event & Payout Platform</span>
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Engineered Stripe Connect multi-party payouts with 48-hour post-event escrow release, KYC verification, bank validation, and automated 3% platform commission calculations alongside venue QR-code ticket scanning.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Architecture Pipeline Cards */}
        <div className={`pt-8 border-t space-y-6 ${darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-semibold">
              SYSTEM ARCHITECTURE
            </span>
            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Production Microservices Stack
            </h3>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Select any component to inspect data flow, caching strategies, and resilience controls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {ARCHITECTURE_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedArchNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedArchNode(node.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 relative group cursor-pointer ${
                    isSelected
                      ? darkMode
                        ? 'bg-zinc-900 border-[#FF5722]/80 shadow-lg shadow-[#FF5722]/10 ring-1 ring-[#FF5722]/40'
                        : 'bg-white border-[#FF5722] shadow-md shadow-[#FF5722]/10 ring-1 ring-[#FF5722]/30'
                      : darkMode
                      ? 'bg-zinc-900/40 border-white/[0.06] hover:border-[#FF5722]/40 hover:bg-zinc-900/70'
                      : 'bg-white/80 border-black/[0.06] hover:border-[#FF5722]/40 shadow-2xs'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border w-fit mb-3 transition-transform duration-200 group-hover:scale-105 ${
                    isSelected
                      ? 'bg-[#FF5722] text-white border-[#FF5722]'
                      : darkMode
                      ? 'bg-zinc-950 text-zinc-300 border-white/[0.08]'
                      : 'bg-zinc-100 text-zinc-800 border-black/[0.06]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <h4 className={`text-xs font-bold leading-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-950'
                  }`}>
                    {node.title}
                  </h4>
                  <span className={`text-[10px] font-mono block mt-1 ${
                    darkMode ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    {node.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Inspector Card */}
          {selectedArchNode && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left ${
                darkMode ? 'bg-zinc-950/70 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-sm'
              }`}
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#FF5722] font-semibold uppercase">
                    ACTIVE NODE INSPECTOR
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-xs font-mono font-medium text-emerald-500">
                    {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.metrics}
                  </span>
                </div>
                <h4 className={`text-base font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.description}
                </p>
              </div>

              <a
                href="#projects"
                className="px-4 py-2.5 rounded-full font-medium text-xs transition-all duration-200 shrink-0 flex items-center gap-2 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/25 self-start sm:self-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};
