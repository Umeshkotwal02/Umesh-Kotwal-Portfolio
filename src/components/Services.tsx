import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Server,
  ArrowRight,
  Sparkles,
  Cpu,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ExternalLink
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { OfficialServiceIcons } from './OfficialServiceIcons';

interface ServicesProps {
  darkMode: boolean;
  onSelectService?: (serviceId: string) => void;
  onOpenAiModal?: () => void;
}

type CategoryFilter = 'all' | 'cloud' | 'web' | 'enterprise';

interface ServiceGridCard {
  id: string;
  serviceSlug: string;
  category: 'enterprise' | 'web' | 'cloud';
  categoryLabel: string;
  statusColor: string; // Hex for indicator dot
  title: string;
  subtitle: string;
  iconKey: string;
  highlightPill: string;
  summary: string;
  metrics: string;
}

// 12 Defined Services directly matching Image 2
const IMAGE_2_SERVICES: ServiceGridCard[] = [
  {
    id: 'erp_crm',
    serviceSlug: 'erp-crm-development',
    category: 'enterprise',
    categoryLabel: 'ENTERPRISE',
    statusColor: '#38bdf8', // Blue dot
    title: 'ERP & CRM',
    subtitle: 'Enterprise Flow',
    iconKey: 'erp',
    highlightPill: 'Double-Entry Accounting & Pipelines',
    summary: 'Custom ERP workflows, automated ledger reconciliation, and end-to-end sales lead pipelines.',
    metrics: '100% Exact'
  },
  {
    id: 'ecommerce',
    serviceSlug: 'ecommerce-development',
    category: 'web',
    categoryLabel: 'WEB',
    statusColor: '#10b981', // Green dot
    title: 'E-Commerce',
    subtitle: 'Cart & Sales',
    iconKey: 'ecommerce',
    highlightPill: 'Headless Next.js & Shopify Plus',
    summary: 'High-conversion headless storefronts, multi-currency checkout, and automated catalog indexing.',
    metrics: '<700ms Load'
  },
  {
    id: 'customer_software',
    serviceSlug: 'custom-software-development',
    category: 'web',
    categoryLabel: 'WEB',
    statusColor: '#0ea5e9', // Sky blue dot
    title: 'Customer Software',
    subtitle: 'Development',
    iconKey: 'customsoftware',
    highlightPill: 'Bespoke Web SaaS & APIs',
    summary: 'Modern, purpose-built business web platforms with clean architecture and high accessibility.',
    metrics: '95+ Lighthouse'
  },
  {
    id: 'qa_testing',
    serviceSlug: 'qa-software-testing',
    category: 'enterprise',
    categoryLabel: 'ENTERPRISE',
    statusColor: '#10b981', // Green dot
    title: 'QA & Testing',
    subtitle: 'Software Testing',
    iconKey: 'qa',
    highlightPill: 'Playwright & Automated CI/CD Gates',
    summary: 'Zero-bug production releases with automated E2E test suites, Postman API collections, and regression suites.',
    metrics: '100% Critical Flow'
  },
  {
    id: 'iot',
    serviceSlug: 'iot-connected-devices',
    category: 'cloud',
    categoryLabel: 'CLOUD',
    statusColor: '#06b6d4', // Cyan dot
    title: 'IoT',
    subtitle: 'Connected Devices',
    iconKey: 'devops',
    highlightPill: 'MQTT Brokers & Telemetry Ingestion',
    summary: 'Low-overhead MQTT message brokers, time-series telemetry pipelines, and live hardware dashboards.',
    metrics: '10k+ msgs/sec'
  },
  {
    id: 'web_applications',
    serviceSlug: 'custom-software-development',
    category: 'web',
    categoryLabel: 'WEB',
    statusColor: '#6366f1', // Indigo dot
    title: 'Web Applications',
    subtitle: 'Development',
    iconKey: 'webapp',
    highlightPill: 'React 18 & Next.js 14 App Router',
    summary: 'Interactive frontend user interfaces powered by server-side rendering and scalable state management.',
    metrics: 'Sub-second SSR'
  },
  {
    id: 'software_maintenance',
    serviceSlug: 'software-maintenance',
    category: 'enterprise',
    categoryLabel: 'ENTERPRISE',
    statusColor: '#10b981', // Green dot
    title: 'Software',
    subtitle: 'Maintenance',
    iconKey: 'software',
    highlightPill: 'Continuous Security & SLA Support',
    summary: 'Proactive dependency patching, slow database query optimization, and guaranteed bug-fix SLAs.',
    metrics: '99.9% Uptime SLA'
  },
  {
    id: 'aws',
    serviceSlug: 'cloud-aws',
    category: 'cloud',
    categoryLabel: 'CLOUD',
    statusColor: '#f97316', // Orange dot
    title: 'AWS',
    subtitle: 'Cloud Solutions',
    iconKey: 'aws',
    highlightPill: 'AWS ECS, S3, RDS & CloudFront',
    summary: 'Production Amazon Web Services cloud architecture, containerized clusters, and auto-scaling topology.',
    metrics: '99.95% Availability'
  },
  {
    id: 'azure',
    serviceSlug: 'cloud-azure',
    category: 'cloud',
    categoryLabel: 'CLOUD',
    statusColor: '#0284c7', // Azure blue dot
    title: 'AZURE',
    subtitle: 'Cloud Infrastructure',
    iconKey: 'azure',
    highlightPill: 'Azure App Services & Azure SQL',
    summary: 'Enterprise Microsoft Azure deployments, zone-redundant storage, and Azure DevOps pipelines.',
    metrics: 'Enterprise Grade'
  },
  {
    id: 'microservices',
    serviceSlug: 'microservices-architecture',
    category: 'web',
    categoryLabel: 'WEB',
    statusColor: '#8b5cf6', // Purple dot
    title: 'Microservices & APIs',
    subtitle: 'Distributed Systems',
    iconKey: 'webapp',
    highlightPill: 'Node.js, Express & Redis Cache',
    summary: 'Decoupled domain services, asynchronous BullMQ queues, and high-throughput REST/GraphQL APIs.',
    metrics: '<10ms Latency'
  },
  {
    id: 'devops',
    serviceSlug: 'devops-cloud-cicd',
    category: 'cloud',
    categoryLabel: 'CLOUD',
    statusColor: '#3b82f6', // Blue dot
    title: 'DevOps & CI/CD',
    subtitle: 'Automated Pipelines',
    iconKey: 'devops',
    highlightPill: 'Docker Multi-Stage & Jenkins',
    summary: 'Automated continuous integration and deployment pipelines with zero-downtime rolling updates.',
    metrics: '<3 Min Deploys'
  },
  {
    id: 'payments',
    serviceSlug: 'stripe-connect-payments',
    category: 'web',
    categoryLabel: 'WEB',
    statusColor: '#ec4899', // Pink dot
    title: 'Stripe & Payments',
    subtitle: 'Fintech & Escrow',
    iconKey: 'ecommerce',
    highlightPill: 'Stripe Connect & Timed Escrow',
    summary: 'Multi-party merchant payouts, KYC verification, and idempotent webhook state machines.',
    metrics: 'Zero Double-Charge'
  }
];

export const Services: React.FC<ServicesProps> = ({ darkMode, onSelectService, onOpenAiModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedCardId, setSelectedCardId] = useState<string>('erp_crm');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Filter 12 cards based on selected category pill
  const filteredCards = activeCategory === 'all'
    ? IMAGE_2_SERVICES
    : IMAGE_2_SERVICES.filter((item) => item.category === activeCategory);

  const activeCard = IMAGE_2_SERVICES.find((c) => c.id === (hoveredCardId || selectedCardId)) || IMAGE_2_SERVICES[0];

  const handleCardClick = (card: ServiceGridCard) => {
    setSelectedCardId(card.id);
    if (onSelectService) {
      onSelectService(card.serviceSlug);
    }
  };

  return (
    <section id="services" className={`py-24 sm:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-white border-black/[0.05]'
    }`}>
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
            <Cpu className="w-3.5 h-3.5" />
            <span>SERVICES WE PROVIDE</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Engineering Services & Architecture
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Battle-tested technical execution across E-Commerce, ERP & CRM platforms, AWS/Azure cloud architecture, and high-throughput microservices.
          </p>

          {/* Filter Bar exactly like Image 2: All (12), Cloud, Web & App, Enterprise + Status Pill */}
          <div className="flex items-center justify-between gap-3 pt-3 flex-wrap max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-inner">
              {[
                { key: 'all', label: 'All (12)' },
                { key: 'cloud', label: 'Cloud' },
                { key: 'web', label: 'Web & App' },
                { key: 'enterprise', label: 'Enterprise' },
              ].map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key as CategoryFilter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.key
                      ? 'bg-[#FF5722] text-white shadow-md shadow-[#FF5722]/25 font-bold'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Live Services Available Pill (Right side, matching Image 2) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl border text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-500 border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Services Available</span>
            </div>
          </div>
        </div>

        {/* 12 Service Cards Grid matching Image 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, idx) => {
              const IconRenderer = OfficialServiceIcons[card.iconKey] || OfficialServiceIcons.webapp;
              const isSelected = selectedCardId === card.id;

              return (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => handleCardClick(card)}
                  className={`p-4 rounded-2xl border flex flex-col justify-between group transition-all duration-300 cursor-pointer select-none relative overflow-hidden ${
                    darkMode
                      ? 'bg-zinc-900/60 border-white/[0.08] hover:border-[#FF5722]/60 hover:bg-zinc-900'
                      : 'bg-white border-black/[0.07] hover:border-[#FF5722]/60 hover:shadow-lg hover:shadow-[#FF5722]/5'
                  } ${
                    isSelected
                      ? 'ring-2 ring-[#FF5722] shadow-lg shadow-[#FF5722]/15 scale-[1.02]'
                      : 'hover:-translate-y-1'
                  }`}
                >
                  {/* Top metadata row: Category Tag Left + Status Dot Right */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500">
                      {card.categoryLabel}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-transform duration-300 shadow-xs group-hover:scale-125"
                      style={{ backgroundColor: card.statusColor }}
                    />
                  </div>

                  {/* Centered Large Official SVG Icon */}
                  <div className="my-2 flex items-center justify-center h-16 w-full shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                    {IconRenderer('w-12 h-12')}
                  </div>

                  {/* Title & Subtitle Matching Image 2 */}
                  <div className="text-center w-full mt-2 space-y-0.5">
                    <h3 className={`font-display font-bold text-sm sm:text-base leading-tight tracking-tight ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-900'
                    }`}>
                      {card.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 leading-tight">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Hover Inspect Prompt */}
                  <div className="mt-3 pt-2.5 border-t w-full flex items-center justify-between text-[10px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors"
                    style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Live Architecture Inspector Drawer for Selected Service */}
        <motion.div
          layout
          key={activeCard.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-3xl border backdrop-blur-xl transition-all shadow-xl ${
            darkMode
              ? 'bg-zinc-950/80 border-white/10 shadow-black/50'
              : 'bg-zinc-50 border-black/[0.07] shadow-zinc-200/50'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: activeCard.statusColor }}
                />
                <span className="font-display font-extrabold text-base sm:text-lg text-zinc-900 dark:text-white">
                  {activeCard.title} Architecture & Consulting
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20">
                  {activeCard.highlightPill}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {activeCard.summary}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => onSelectService && onSelectService(activeCard.serviceSlug)}
                className="flex-1 lg:flex-initial px-5 py-2.5 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#FF5722]/25 active:scale-95 transition-all cursor-pointer"
              >
                <span>Read Full Service Specification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.hash = '#contact';
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-white'
                    : 'bg-white border-black/10 text-zinc-700 hover:text-zinc-950'
                }`}
              >
                <span>Inquire Directly</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Direct Technical Consultation Card with Umesh */}
        <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl transition-all ${
          darkMode
            ? 'bg-zinc-900/60 border-white/10 shadow-black/60'
            : 'bg-zinc-50 border-black/[0.06] shadow-zinc-300/30'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722] font-mono font-bold text-base shadow-sm">
              UK
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-950'
                }`}>
                  Need Custom E-Commerce or ERP Engineering?
                </h3>
                <span className="hidden sm:inline-flex text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Contracts
                </span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Book a 30-minute architectural consultation to review your technical requirements, cloud budget, and roadmap.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = '#contact';
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 shadow-md shadow-[#FF5722]/25 hover:shadow-[#FF5722]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Consult Umesh</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenAiModal && (
              <button
                onClick={onOpenAiModal}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-800/80 border-white/10 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                    : 'bg-white border-black/10 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#FF5722]" />
                <span className="hidden sm:inline">AI Planner</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
