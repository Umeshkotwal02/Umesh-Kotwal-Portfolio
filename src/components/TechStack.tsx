import React from 'react';
import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';
import { TechIcon } from './TechIcon';

interface TechStackProps {
  darkMode: boolean;
}

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
  return (
    <section className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight"
            style={{
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
              color: darkMode ? '#a1a1aa' : '#52525b'
            }}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>ECOSYSTEM & ARCHITECTURE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Production Infrastructure Stack
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Battle-tested technologies Umesh leverages daily to construct high-throughput, low-latency microservice architectures.
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
                    : 'bg-white border-black/[0.06] hover:border-black/20 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-2xl border transition-transform group-hover:scale-105 shrink-0 ${
                    darkMode ? 'bg-zinc-800/80 border-white/[0.08]' : 'bg-zinc-100 border-black/[0.06]'
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
    </section>
  );
};

