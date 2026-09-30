import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Search,
  X,
  Layers,
  Server,
  Database,
  CreditCard,
  Cloud,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { TechIcon } from './TechIcon';

interface SkillsProps {
  darkMode: boolean;
}

interface SkillItem {
  name: string;
  tag: string;
  level?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & UI Engineering",
    tagline: "High-performance interfaces, atomic component design & SSR",
    icon: Layers,
    accentColor: "#61DAFB",
    skills: [
      { name: "React.js", tag: "Hooks & Virtual DOM Architecture", level: "Core" },
      { name: "Next.js", tag: "App Router & SSR / SSG", level: "Production" },
      { name: "TypeScript", tag: "Strict Types & Safe Interfaces", level: "Core" },
      { name: "Tailwind CSS", tag: "Utility-first Responsive Systems", level: "Production" },
      { name: "JavaScript (ES6+)", tag: "Modern Async & Event Loop", level: "Core" },
      { name: "Redux Toolkit", tag: "Centralized Predictable State", level: "Production" },
      { name: "HTML5", tag: "Semantic Markup & Accessibility", level: "Core" },
      { name: "CSS3 / SCSS", tag: "Flexbox, Grid & Animations", level: "Core" },
      { name: "Figma-to-Code", tag: "Pixel-Perfect Conversion", level: "Expert" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Microservices",
    tagline: "Scalable API gateways, event queues & real-time messaging",
    icon: Server,
    accentColor: "#5FA04E",
    skills: [
      { name: "Node.js", tag: "High-Throughput V8 Engine", level: "Core" },
      { name: "Express.js", tag: "RESTful Endpoints & Middleware", level: "Core" },
      { name: "Microservices Architecture", tag: "Decoupled Service Meshes", level: "Architecture" },
      { name: "RESTful API", tag: "OpenAPI & Swagger Specs", level: "Core" },
      { name: "Redis", tag: "Sub-10ms Caching & Pub/Sub", level: "Production" },
      { name: "BullMQ", tag: "Fault-Tolerant Queues & DLQ", level: "Specialist" },
      { name: "WebSockets", tag: "Full-Duplex Live Sockets", level: "Production" },
      { name: "FCM", tag: "Firebase Push Delivery", level: "Production" },
      { name: "Agora SDK", tag: "Low-Latency RTC Audio & Video", level: "Integrated" }
    ]
  },
  {
    id: "databases",
    title: "Databases & ORM",
    tagline: "Relational integrity, NoSQL flexibility & optimized queries",
    icon: Database,
    accentColor: "#4169E1",
    skills: [
      { name: "PostgreSQL", tag: "ACID Compliance & Complex Joins", level: "Core" },
      { name: "MySQL", tag: "Indexed Schemas & Transactions", level: "Core" },
      { name: "MongoDB", tag: "Flexible Document Collections", level: "Production" },
      { name: "Prisma ORM", tag: "Type-Safe Queries & Migrations", level: "Production" }
    ]
  },
  {
    id: "payments",
    title: "Payment Systems & Fintech",
    tagline: "Secure escrow, multi-vendor commission & webhook pipelines",
    icon: CreditCard,
    accentColor: "#635BFF",
    skills: [
      { name: "Stripe", tag: "Hosted Checkout & Subscriptions", level: "Production" },
      { name: "Razorpay", tag: "UPI & Instant Regional Payments", level: "Production" },
      { name: "Stripe Connect", tag: "KYC Onboarding & Custom Payouts", level: "Specialist" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud Infrastructure",
    tagline: "Containerization, automated CI/CD & edge deployments",
    icon: Cloud,
    accentColor: "#FF9900",
    skills: [
      { name: "Docker", tag: "Multi-stage Container Builds", level: "Production" },
      { name: "AWS ECS", tag: "Elastic Container Task Runners", level: "Production" },
      { name: "Jenkins", tag: "Automated Build & Test Pipelines", level: "Production" },
      { name: "Bitbucket CI/CD", tag: "Deployment Pipelines", level: "Production" },
      { name: "Git", tag: "Branching Strategies & Versioning", level: "Core" },
      { name: "GitHub", tag: "Actions & Repository Governance", level: "Core" },
      { name: "Vercel", tag: "Serverless Edge Deployment", level: "Production" },
      { name: "Hostinger", tag: "Cloud DNS & Web Hosting", level: "Configured" }
    ]
  },
  {
    id: "qa",
    title: "QA & Reliability Testing",
    tagline: "Automated test suites, API validation & regression workflows",
    icon: CheckCircle2,
    accentColor: "#00BF88",
    skills: [
      { name: "Jest", tag: "Unit & Integration Test Suites", level: "Production" },
      { name: "Postman", tag: "Automated API Collections & Monitoring", level: "Core" },
      { name: "Manual QA", tag: "Exploratory & Edge-Case Bug Hunting", level: "Verified" }
    ]
  }
];

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Total skill count
  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  // Filtered categories and skills based on search and category tab
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return SKILL_CATEGORIES.map((cat) => {
      // If category filter is active and doesn't match, return null skills
      if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
        return null;
      }

      // Filter skills by search query
      const matchingSkills = cat.skills.filter((skill) => {
        if (!q) return true;
        return (
          skill.name.toLowerCase().includes(q) ||
          skill.tag.toLowerCase().includes(q) ||
          cat.title.toLowerCase().includes(q)
        );
      });

      if (matchingSkills.length === 0) return null;

      return {
        ...cat,
        skills: matchingSkills
      };
    }).filter(Boolean) as SkillCategory[];
  }, [selectedCategory, searchQuery]);

  const matchedSkillsCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section
      id="skills"
      className={`pt-16 pb-14 sm:pt-20 sm:pb-16 relative border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50/80 border-black/[0.06]'
      }`}
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FF5722]/5 via-amber-500/5 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25 shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-[#FF5722]" />
            <span>PRODUCTION ARSENAL & TOOLCHAIN</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Technical Arsenal
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Verified production technologies featuring official color brand vectors. Every tool has been stress-tested across distributed microservices, fintech payment gateways, and high-concurrency cloud environments.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              darkMode ? 'bg-zinc-900/80 border-white/10 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-2xs'
            }`}>
              <Sparkles className="w-3 h-3 text-[#FF5722]" />
              <span>{totalSkillsCount}+ Verified Technologies</span>
            </span>

            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              darkMode ? 'bg-zinc-900/80 border-white/10 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-2xs'
            }`}>
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span>100% Vector Color SVGs</span>
            </span>

            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              darkMode ? 'bg-zinc-900/80 border-white/10 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-2xs'
            }`}>
              <Check className="w-3 h-3 text-[#06B6D4]" />
              <span>Tailwind & React Native Ready</span>
            </span>
          </div>
        </div>

        {/* Interactive Filter & Search Controls */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Search Box */}
          <div
            className={`relative flex items-center rounded-2xl border transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF5722]/20 focus-within:border-[#FF5722] ${
              darkMode
                ? 'bg-zinc-900/90 border-white/10'
                : 'bg-white border-zinc-200 shadow-sm'
            }`}
          >
            <div className="pl-4 pr-2 text-zinc-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. React, Tailwind, Docker, Redis, Stripe, Jest)..."
              className={`w-full py-3 pr-10 text-xs sm:text-sm bg-transparent outline-none font-medium ${
                darkMode ? 'text-white placeholder-zinc-500' : 'text-zinc-900 placeholder-zinc-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none justify-start sm:justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30 font-semibold'
                  : darkMode
                  ? 'bg-zinc-900/60 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                  : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 shadow-2xs'
              }`}
            >
              All Technologies ({totalSkillsCount})
            </button>

            {SKILL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/30 font-semibold'
                      : darkMode
                      ? 'bg-zinc-900/60 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800'
                      : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 shadow-2xs'
                  }`}
                >
                  <span>{cat.title.split('&')[0].trim()}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : darkMode
                      ? 'bg-zinc-800 text-zinc-400'
                      : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search status if query active */}
        {searchQuery && (
          <div className="text-center text-xs font-mono text-zinc-500">
            Showing {matchedSkillsCount} matching result{matchedSkillsCount === 1 ? '' : 's'} for "{searchQuery}"
          </div>
        )}

        {/* Categories & Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group hover:shadow-xl ${
                    darkMode
                      ? 'bg-zinc-900/40 border-white/[0.08] hover:border-white/20 hover:bg-zinc-900/70 shadow-black/40'
                      : 'bg-white border-black/[0.06] hover:border-black/20 hover:shadow-zinc-200/50'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Category Header */}
                    <div className="space-y-1.5 border-b pb-4"
                      style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)' }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="p-1.5 rounded-xl border flex items-center justify-center"
                            style={{
                              backgroundColor: `${cat.accentColor}15`,
                              borderColor: `${cat.accentColor}30`,
                              color: cat.accentColor
                            }}
                          >
                            <CategoryIcon className="w-4 h-4" />
                          </div>
                          <h3 className={`text-sm sm:text-base font-bold tracking-tight ${
                            darkMode ? 'text-zinc-100' : 'text-zinc-900'
                          }`}>
                            {cat.title}
                          </h3>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          darkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
                        }`}>
                          {cat.skills.length} tools
                        </span>
                      </div>

                      <p className={`text-xs leading-relaxed ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-500'
                      }`}>
                        {cat.tagline}
                      </p>
                    </div>

                    {/* Skill Cards Grid */}
                    <div className="grid grid-cols-1 gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`p-2.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group/skill cursor-default ${
                            darkMode
                              ? 'bg-zinc-950/50 border-white/[0.06] hover:bg-zinc-800/80 hover:border-white/15'
                              : 'bg-zinc-50/80 border-black/[0.05] hover:bg-white hover:border-black/15 hover:shadow-xs'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Authentic Colorful Vector Icon */}
                            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover/skill:scale-110 ${
                              darkMode ? 'bg-zinc-900/90 border-white/10' : 'bg-white border-black/10 shadow-2xs'
                            }`}>
                              <TechIcon name={skill.name} size={20} darkMode={darkMode} />
                            </div>

                            {/* Skill Name & Subtitle Tag */}
                            <div className="min-w-0">
                              <div className={`text-xs sm:text-[13px] font-semibold tracking-tight truncate ${
                                darkMode ? 'text-zinc-200 group-hover/skill:text-white' : 'text-zinc-900'
                              }`}>
                                {skill.name}
                              </div>
                              <div className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate font-mono">
                                {skill.tag}
                              </div>
                            </div>
                          </div>

                          {/* Level Badge */}
                          {skill.level && (
                            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full shrink-0 font-medium ${
                              skill.level === 'Core'
                                ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20'
                                : skill.level === 'Specialist' || skill.level === 'Expert'
                                ? 'bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20'
                                : darkMode
                                ? 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                                : 'bg-zinc-200/60 text-zinc-600 border border-zinc-300'
                            }`}>
                              {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Trust Note */}
                  <div
                    className="pt-4 mt-5 border-t text-[10px] font-mono flex items-center justify-between"
                    style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                  >
                    <span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>
                      Enterprise Tier
                    </span>
                    <span className="text-emerald-500 font-medium inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Production Verified
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State when Search Yields No Results */}
        {filteredCategories.length === 0 && (
          <div className="py-16 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-400 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-zinc-300">
              No matching technologies found
            </h4>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              No tools matched "{searchQuery}". Try searching for React, Tailwind, Docker, PostgreSQL, or Stripe.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#FF5722] text-white text-xs font-semibold hover:bg-[#F4511E] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
