import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { TechIcon } from './TechIcon';

interface SkillsProps {
  darkMode: boolean;
}

// Skill Categories
const SKILLS_LIST = [
  {
    title: "FRONTEND & UI DEVELOPMENT",
    skills: [
      { name: "JavaScript (ES6+)", tag: "Modern Syntax & Async" },
      { name: "React.js", tag: "Hooks & Virtual DOM" },
      { name: "Next.js", tag: "SSR & App Router" },
      { name: "Redux Toolkit", tag: "Global State Management" },
      { name: "HTML5", tag: "Semantic Markup" },
      { name: "CSS3/SCSS", tag: "Responsive Styling & Mixins" },
      { name: "Figma-to-code", tag: "Pixel Perfect UI Conversion" }
    ]
  },
  {
    title: "BACKEND & MICROSERVICES",
    skills: [
      { name: "Node.js", tag: "Event Loop & Runtime" },
      { name: "Express.js", tag: "REST APIs & Middleware" },
      { name: "RESTful API", tag: "OpenAPI Standards" },
      { name: "Microservices Architecture", tag: "Distributed Services" },
      { name: "Redis", tag: "Caching & Pub/Sub" },
      { name: "BullMQ", tag: "Job Queues & DLQ" },
      { name: "WebSockets", tag: "Real-time Bi-directional Data" },
      { name: "FCM", tag: "Firebase Cloud Push Notifications" },
      { name: "Agora SDK", tag: "Audio/Video Live Streaming" }
    ]
  },
  {
    title: "DATABASES & ORM",
    skills: [
      { name: "PostgreSQL", tag: "Relational Indexing & Views" },
      { name: "MySQL", tag: "ACID Transactions" },
      { name: "Prisma ORM", tag: "Type-safe Database Queries" }
    ]
  },
  {
    title: "PAYMENT GATEWAYS",
    skills: [
      { name: "Stripe", tag: "Checkout & Subscriptions" },
      { name: "Razorpay", tag: "UPI & INR Payments" },
      { name: "Stripe Connect (KYC/payouts)", tag: "Multi-vendor Merchant Payouts" }
    ]
  },
  {
    title: "DEVOPS, CLOUD & WORKFLOW",
    skills: [
      { name: "Docker", tag: "Containerization" },
      { name: "AWS ECS", tag: "Elastic Container Service" },
      { name: "Jenkins", tag: "Automated Build Pipelines" },
      { name: "Bitbucket CI/CD", tag: "Continuous Integration" },
      { name: "Git", tag: "Version Control" },
      { name: "GitHub", tag: "Code Collaboration & Actions" },
      { name: "Vercel", tag: "Edge Deployments" },
      { name: "Hostinger", tag: "Cloud Web Hosting" }
    ]
  },
  {
    title: "QA & SOFTWARE TESTING",
    skills: [
      { name: "Jest", tag: "Unit & Integration Testing" },
      { name: "Playwright", tag: "Automated End-to-End (E2E)" },
      { name: "Cypress", tag: "Component & Web Testing" },
      { name: "Postman", tag: "API Collections & Runner" },
      { name: "k6", tag: "Performance & Stress Testing" },
      { name: "Manual QA", tag: "Bug Hunting & Exploratory Testing" }
    ]
  }
];

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <Code2 className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>CORE TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Technical Arsenal
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Production technologies, microservices architectures, payment flows, and cloud infrastructure verified in high-volume web systems.
          </p>
        </div>

        {/* Arsenal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_LIST.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                darkMode
                  ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/40'
                  : 'bg-white border-black/[0.06] hover:border-[#FF5722]/40 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className={`flex items-center justify-between border-b pb-3 ${darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'}`}>
                  <h3 className={`text-[11px] font-bold font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {cat.title}
                  </h3>
                  <span className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Skill Pills Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-2.5 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all duration-200 cursor-default ${
                        darkMode
                          ? 'bg-zinc-950/60 border-white/[0.06] text-zinc-300 hover:border-[#FF5722]/40 hover:text-white'
                          : 'bg-zinc-100 border-black/[0.06] text-zinc-800 hover:bg-zinc-200/70 hover:border-[#FF5722]/40'
                      }`}
                      title={`${skill.name} • ${skill.tag}`}
                    >
                      <TechIcon name={skill.name} className="w-3.5 h-3.5" darkMode={darkMode} />
                      <span className="font-sans font-medium tracking-tight text-[12px]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pt-4 mt-5 border-t text-[10px] font-mono flex items-center justify-between ${
                darkMode ? 'border-white/[0.06] text-zinc-400' : 'border-black/[0.06] text-zinc-500'
              }`}>
                <span>Standard compliance</span>
                <span className="text-[#FF5722] font-semibold">Production Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



