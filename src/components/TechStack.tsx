import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Server, Zap, Workflow, Database, Radio, ArrowRight, Layers } from 'lucide-react';
import { TechIcon } from './TechIcon';

interface TechStackProps {
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

const TECH_ITEMS = [
  {
    name: "Node.js & Express.js",
    category: "Backend Microservices",
    iconName: "Node.js",
    note: "High-concurrency RESTful APIs, inter-service RPC communication, and WebSocket real-time gateways."
  },
  {
    name: "BullMQ & DLQ",
    category: "Async Job Queues",
    iconName: "BullMQ",
    note: "Fault-tolerant background job execution with exponential backoff and DLQ capture ensuring 0% data loss."
  },
  {
    name: "Redis In-Memory",
    category: "In-Memory Store",
    iconName: "Redis",
    note: "Sub-40ms key-value caching, session management, and API rate-limiting token buckets."
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Relational Database",
    iconName: "PostgreSQL",
    note: "ACID-compliant schemas, type-safe queries, migration pipelines, and transaction row locks."
  },
  {
    name: "Stripe Connect",
    category: "Payment Infrastructure",
    iconName: "Stripe",
    note: "KYC onboarding, multi-party 48-hour post-event payouts, 3% commission logic, and webhook state machines."
  },
  {
    name: "React.js & Next.js",
    category: "Frontend Architecture",
    iconName: "Next.js",
    note: "App Router, SSR/SSG rendering, Redux Toolkit state management, and pixel-perfect Tailwind CSS."
  },
  {
    name: "Docker & AWS ECS",
    category: "DevOps & Containerization",
    iconName: "Docker",
    note: "Multi-stage Docker builds, AWS ECS task definitions, Jenkins & Bitbucket CI/CD automated deployment."
  },
  {
    name: "Agora & FCM Push",
    category: "Real-Time & Notifications",
    iconName: "Agora RTC",
    note: "Live video broadcasting via Agora RTC SDK and cross-platform push notifications via FCM."
  }
];

export const TechStack: React.FC<TechStackProps> = ({ darkMode }) => {
  const [selectedArchNode, setSelectedArchNode] = useState<string>('api-gateway');

  return (
    <section id="architecture" className={`py-20 lg:py-28 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>SYSTEM ARCHITECTURE & INFRASTRUCTURE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Distributed System Architecture
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            High-throughput, low-latency microservices engineered for zero data loss, sub-40ms cache latencies, and resilient cloud execution.
          </p>
        </div>

        {/* Interactive Architecture Pipeline Cards */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-semibold">
              CORE TOPOLOGY BLUEPRINT
            </span>
            <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Click any tier below to inspect data flow, queue durability, and caching boundaries.
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
                      : 'bg-white border-zinc-200 hover:border-[#FF5722]/40 shadow-xs'
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
                    darkMode ? 'text-zinc-500' : 'text-zinc-500'
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
                darkMode ? 'bg-zinc-950/70 border-white/[0.08]' : 'bg-white border-zinc-200 shadow-sm'
              }`}
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#FF5722] font-semibold uppercase">
                    ACTIVE TIER INSPECTOR
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-xs font-mono font-medium text-emerald-500">
                    {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.metrics}
                  </span>
                </div>
                <h4 className={`text-base font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {ARCHITECTURE_NODES.find((n) => n.id === selectedArchNode)?.description}
                </p>
              </div>

              <a
                href="#projects"
                className="px-4 py-2.5 rounded-full font-medium text-xs transition-all duration-200 shrink-0 flex items-center gap-2 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/25 self-start sm:self-center"
              >
                <span>View Realized Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          )}
        </div>

        {/* Infrastructure Technologies Grid */}
        <div className="space-y-6 pt-4 border-t" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-semibold">
              PRODUCTION INFRASTRUCTURE TECH
            </span>
            <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Technologies and platforms powering Umesh's enterprise deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TECH_ITEMS.map((item, idx) => {
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 space-y-3.5 text-left group ${
                    darkMode
                      ? 'bg-zinc-900/30 border-white/[0.08] hover:border-white/20 hover:bg-zinc-900/60'
                      : 'bg-white border-zinc-200 hover:border-[#FF5722]/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-2xl border transition-transform group-hover:scale-105 shrink-0 ${
                      darkMode ? 'bg-zinc-800/80 border-white/[0.08]' : 'bg-zinc-100 border-zinc-200'
                    }`}>
                      <TechIcon name={item.iconName} size={20} />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>{item.name}</h3>
                      <span className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{item.category}</span>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed font-sans ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {item.note}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

