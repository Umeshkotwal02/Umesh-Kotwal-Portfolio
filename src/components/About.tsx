import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  ShieldCheck,
  Globe,
  Award,
  Layers,
  Server,
  Zap,
  Database,
  Workflow,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Building2,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'journey' | 'principles' | 'dubai'>('journey');
  const [selectedArchNode, setSelectedArchNode] = useState<string | null>('queue');

  const ARCHITECTURE_NODES = [
    {
      id: 'gateway',
      title: 'API Gateway & Nginx',
      role: 'Ingress & Rate Limiting',
      icon: Globe,
      description: 'Central ingress routing, SSL termination, JWT authorization validation, and token-bucket rate limiting via Redis.'
    },
    {
      id: 'microservice',
      title: 'Node.js Microservices',
      role: 'Decoupled Domain Logic',
      icon: Server,
      description: 'Modular microservice instances handling gym scheduling, event ticketing, user onboarding, and payment processing independently.'
    },
    {
      id: 'cache',
      title: 'Redis In-Memory Layer',
      role: 'Sub-40ms Fast Cache',
      icon: Zap,
      description: 'In-memory caching for trainer availability, session tokens, and high-frequency read endpoints, reducing DB load by >70%.'
    },
    {
      id: 'queue',
      title: 'BullMQ & DLQ Pipeline',
      role: 'Zero-Loss Async Engine',
      icon: Workflow,
      description: 'Fault-tolerant async queue handling push notifications, webhook payloads, and payouts. Dead Letter Queue (DLQ) guarantees zero lost events.'
    },
    {
      id: 'db',
      title: 'PostgreSQL & Prisma',
      role: 'ACID Transaction Safety',
      icon: Database,
      description: 'Relational data persistence with strict schemas, indexed foreign keys, and row-level locking for double-entry financial ledger safety.'
    }
  ];

  return (
    <section id="about" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight"
            style={{
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
              color: darkMode ? '#a1a1aa' : '#52525b'
            }}
          >
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & ARCHITECTURE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Behind the Systems
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Full Stack Engineer focused on high-concurrency microservices, resilient background queues, and responsive modern web apps.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className={`p-1.5 rounded-full border backdrop-blur-xl inline-flex flex-wrap gap-1 ${
            darkMode ? 'bg-zinc-900/60 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-xs'
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
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/25 font-semibold'
                      : darkMode
                      ? 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-black/[0.03]'
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-7 space-y-6 text-left">
                <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  Crafting Production Infrastructure from Surat to Dubai
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {PERSONAL_INFO.fullBio}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-zinc-900/40 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'}`}>
                    <div className="text-[10px] font-mono font-semibold text-[#FF5722] uppercase mb-1">BE IN COMPUTER ENGINEERING</div>
                    <div className={`text-xs font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{PERSONAL_INFO.college}</div>
                    <div className={`text-[11px] font-mono mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>CGPA: {PERSONAL_INFO.cgpa} ({PERSONAL_INFO.graduationYear})</div>
                  </div>
                  <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-zinc-900/40 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'}`}>
                    <div className="text-[10px] font-mono font-semibold text-[#FF5722] uppercase mb-1">IIT KHARAGPUR CERTIFIED</div>
                    <div className={`text-xs font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Cloud Computing & Industry 4.0 IoT</div>
                    <div className={`text-[11px] font-mono mt-1 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>NPTEL Elite Certifications</div>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 p-6 rounded-3xl border shadow-xl space-y-4 ${
                darkMode ? 'bg-zinc-900/50 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-zinc-200/50'
              }`}>
                <div className={`flex items-center justify-between font-mono text-xs font-medium border-b pb-3.5 ${
                  darkMode ? 'text-zinc-300 border-white/[0.06]' : 'text-zinc-800 border-black/[0.06]'
                }`}>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>system_specs.json</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">Node v20 LTS</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>Focus:</span>
                    <span className={`font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Microservices & Full Stack</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>Runtime:</span>
                    <span className={`font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Node.js / Express / Next.js</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>Async Queue:</span>
                    <span className="font-medium text-[#FF5722]">BullMQ + DLQ (Zero Data Loss)</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>Fast Cache:</span>
                    <span className={`font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Redis In-Memory (&lt;40ms)</span>
                  </div>
                  <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}>
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>Payments:</span>
                    <span className={`font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>Stripe Connect & Razorpay</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>DevOps:</span>
                    <span className={`font-medium ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>AWS ECS / Docker / Bitbucket CI</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'principles' && (
            <motion.div
              key="principles"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Zero-Data-Loss Architecture",
                  desc: "Fault-tolerant background jobs using BullMQ and Dead Letter Queues (DLQ) so that retries, payment webhooks, and push notifications are safely recovered with 0% data loss.",
                  icon: ShieldCheck,
                  badge: "BullMQ + DLQ"
                },
                {
                  title: "Microservice Decoupling",
                  desc: "Deconstructing heavy monoliths into domain services communicating via secure RESTful and WebSocket protocols, isolating bottlenecks and allowing horizontal scaling.",
                  icon: Layers,
                  badge: "Microservices"
                },
                {
                  title: "Sub-40ms Redis Caching",
                  desc: "In-memory caching for session tokens, active rate limiting, and hot endpoints, eliminating database strain and speeding up response times for mobile and web clients.",
                  icon: Zap,
                  badge: "In-Memory Cache"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-3xl border transition-all text-left space-y-3 ${
                      darkMode
                        ? 'bg-zinc-900/40 border-white/[0.06] hover:border-white/[0.12]'
                        : 'bg-white border-black/[0.06] shadow-xs hover:border-black/[0.1]'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl border w-fit ${
                      darkMode ? 'bg-white/[0.04] text-zinc-300 border-white/[0.08]' : 'bg-black/[0.03] text-zinc-800 border-black/[0.06]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`inline-block text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                      darkMode ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300' : 'bg-black/[0.03] border-black/[0.06] text-zinc-700'
                    }`}>
                      {item.badge}
                    </span>
                    <h4 className={`text-base font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>{item.title}</h4>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'dubai' && (
            <motion.div
              key="dubai"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={`p-7 sm:p-9 rounded-3xl border text-left space-y-6 ${
                darkMode ? 'bg-zinc-900/50 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-xs'
              }`}
            >
              <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-5 ${
                darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
              }`}>
                <div>
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                    darkMode ? 'bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722]' : 'bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722] font-semibold'
                  }`}>
                    DUBAI, UAE ENTERPRISE PROJECTS
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mt-2 ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
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
                  darkMode ? 'bg-zinc-950/60 border-white/[0.04] text-zinc-300' : 'bg-zinc-50 border-black/[0.04] text-zinc-700'
                }`}>
                  <h4 className="font-semibold text-sm text-zinc-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722]" />
                    Vyonic — Health & Gym Platform
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Backend Team Lead coordinating with mobile, frontend, and admin teams. Ran requirement workshops directly with Dubai stakeholders to build gym assessment booking flows, trainer availability scheduling, and session unlocking backed by Stripe.
                  </p>
                </div>

                <div className={`space-y-3 p-5 rounded-2xl border ${
                  darkMode ? 'bg-zinc-950/60 border-white/[0.04] text-zinc-300' : 'bg-zinc-50 border-black/[0.04] text-zinc-700'
                }`}>
                  <h4 className="font-semibold text-sm text-zinc-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5722]" />
                    Vybemena — Event & Payout Platform
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
        <div className={`pt-10 border-t space-y-8 ${darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-semibold">SYSTEM ARCHITECTURE</span>
            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
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
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 relative group ${
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
                  <div className={`text-xs font-semibold mb-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>{node.title}</div>
                  <div className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{node.role}</div>

                  {isSelected && (
                    <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Node Inspector Panel */}
          {selectedArchNode && (
            <motion.div
              key={selectedArchNode}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl border text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-5 ${
                darkMode ? 'bg-zinc-900/50 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                    darkMode ? 'bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/30 font-medium' : 'bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/30 font-medium'
                  }`}>
                    INSPECTOR
                  </span>
                  <h4 className={`text-base font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.title}
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.description}
                </p>
              </div>

              <a
                href="#simulator"
                className="px-4 py-2.5 rounded-full font-medium text-xs transition-all duration-200 shrink-0 flex items-center gap-2 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/25"
              >
                <span>Live Gateway Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

