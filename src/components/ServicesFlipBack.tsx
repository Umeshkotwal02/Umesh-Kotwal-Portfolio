import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCw, Sparkles, ArrowRight, Play, Pause, CheckCircle2 } from 'lucide-react';
import { OfficialServiceIcons } from './OfficialServiceIcons';

interface ServicesFlipBackProps {
  darkMode: boolean;
  onFlipBack: () => void;
  autoFlipEnabled: boolean;
  onToggleAutoFlip: () => void;
}

type ServiceCategory = 'all' | 'cloud' | 'development' | 'enterprise';

interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge: string;
  deliverable: string;
  glowColor: string;
  brandColor: string;
  metrics: string;
  iconKey: keyof typeof OfficialServiceIcons;
}

export const ServicesFlipBack: React.FC<ServicesFlipBackProps> = ({
  darkMode,
  onFlipBack,
  autoFlipEnabled,
  onToggleAutoFlip,
}) => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // 12 Authentic Services with Official Brand Icons & Deliverables
  const servicesList: ServiceItem[] = [
    {
      id: 'erp',
      name: 'ERP Solutions',
      category: 'enterprise',
      categoryLabel: 'Resource Planning',
      badge: 'Data Pipelines',
      deliverable: 'PostgreSQL, Redis Caching, RBAC & Audit Trails',
      glowColor: 'rgba(2, 132, 199, 0.35)',
      brandColor: '#0284C7',
      metrics: 'ACID Compliant • 10M+ Row Benchmarks',
      iconKey: 'erp',
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Engines',
      category: 'enterprise',
      categoryLabel: 'Digital Storefronts',
      badge: 'Shopify / Custom',
      deliverable: 'Headless Checkout, Stripe, Cart Sync & Inventory',
      glowColor: 'rgba(149, 191, 71, 0.35)',
      brandColor: '#95BF47',
      metrics: 'Sub-second Checkout • Zero Cart Loss',
      iconKey: 'ecommerce',
    },
    {
      id: 'customsoftware',
      name: 'Customer Software',
      category: 'development',
      categoryLabel: 'Bespoke Architecture',
      badge: 'Clean Code',
      deliverable: 'Tailor-Made Internal Tools & Scalable Microservices',
      glowColor: 'rgba(0, 122, 204, 0.35)',
      brandColor: '#007ACC',
      metrics: 'Modular Codebase • Automated Tests',
      iconKey: 'customsoftware',
    },
    {
      id: 'qa',
      name: 'QA & Software Testing',
      category: 'enterprise',
      categoryLabel: 'Quality Assurance',
      badge: 'Zero-Bug Release',
      deliverable: 'Automated E2E, Cypress, Jest, Postman & Quality Gates',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      brandColor: '#10B981',
      metrics: '99.8% Test Pass • Automated CI/CD Gates',
      iconKey: 'qa',
    },
    {
      id: 'webapp',
      name: 'Web Applications',
      category: 'development',
      categoryLabel: 'Full-Stack Web',
      badge: 'Next.js / React',
      deliverable: 'Ultra-Fast React 18, Next.js & TypeScript',
      glowColor: 'rgba(97, 218, 251, 0.35)',
      brandColor: '#61DAFB',
      metrics: '<150ms TTFB • Fluid Animations',
      iconKey: 'webapp',
    },
    {
      id: 'app',
      name: 'Mobile Apps (iOS & Android)',
      category: 'development',
      categoryLabel: 'Cross-Platform',
      badge: 'React Native',
      deliverable: 'Fluid 60FPS UI, Push Notifications & App Store Deploy',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      brandColor: '#A855F7',
      metrics: 'Store Approval Ready • Offline-First',
      iconKey: 'app',
    },
    {
      id: 'software',
      name: 'Software Maintenance',
      category: 'development',
      categoryLabel: 'Security & SLAs',
      badge: '24/7 Monitoring',
      deliverable: 'Bug Fixes, Vulnerability Patching & Optimization',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      brandColor: '#10B981',
      metrics: 'Guaranteed SLA • Zero Regressions',
      iconKey: 'software',
    },
    {
      id: 'aws',
      name: 'AWS Cloud',
      category: 'cloud',
      categoryLabel: 'Cloud Infrastructure',
      badge: 'Certified',
      deliverable: 'EC2, ECS, Lambda, S3, RDS & VPC Tiering',
      glowColor: 'rgba(255, 153, 0, 0.35)',
      brandColor: '#FF9900',
      metrics: '99.99% Uptime • Zero-Cold-Start',
      iconKey: 'aws',
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      category: 'cloud',
      categoryLabel: 'Cloud Infrastructure',
      badge: 'Enterprise',
      deliverable: 'App Services, Azure Functions & CosmosDB',
      glowColor: 'rgba(0, 120, 212, 0.35)',
      brandColor: '#0078D4',
      metrics: 'Geo-Redundant • Active Failover',
      iconKey: 'azure',
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      category: 'cloud',
      categoryLabel: 'Automation & Infra',
      badge: 'Zero-Downtime',
      deliverable: 'Docker, Kubernetes, GitHub Actions & Nginx',
      glowColor: 'rgba(36, 150, 237, 0.35)',
      brandColor: '#2496ED',
      metrics: 'Automated Deployments in <2 mins',
      iconKey: 'devops',
    },
    {
      id: 'seo',
      name: 'SEO & Performance',
      category: 'enterprise',
      categoryLabel: 'Growth & Rankings',
      badge: 'Lighthouse 100',
      deliverable: 'Core Web Vitals, Dynamic SSR & JSON-LD',
      glowColor: 'rgba(52, 168, 83, 0.35)',
      brandColor: '#34A853',
      metrics: 'PageSpeed 98+ • Organic Rank Boost',
      iconKey: 'seo',
    },
    {
      id: 'crm',
      name: 'CRM Systems',
      category: 'enterprise',
      categoryLabel: 'Client Relationship',
      badge: 'Lead Automation',
      deliverable: 'Pipeline Tracking, Real-Time Webhooks & Portals',
      glowColor: 'rgba(0, 161, 224, 0.35)',
      brandColor: '#00A1E0',
      metrics: 'Instant Lead Alerts • Custom Dashboards',
      iconKey: 'crm',
    },
  ];

  const filteredServices = activeFilter === 'all'
    ? servicesList
    : servicesList.filter((s) => s.category === activeFilter);

  return (
    <div
      className={`absolute inset-0 w-full h-full rounded-3xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-2xl backface-hidden rotate-y-180 overflow-hidden select-none transition-all duration-300 ${
        darkMode
          ? 'bg-zinc-950/95 border border-white/10 shadow-2xl shadow-black/80'
          : 'bg-white/95 border border-black/10 shadow-2xl shadow-zinc-200/80'
      }`}
    >
      {/* Dynamic Ambient Background Glow (Changes smoothly with selected service) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Sleek Top Navigation Bar (NO RED BOX, NO BULKY BANNERS) */}
      <div className="flex items-center justify-between pb-2 shrink-0 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            TECHNICAL SERVICES
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-semibold">
            12 Deliverables
          </span>
        </div>

        {/* Minimal Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleAutoFlip();
            }}
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1 transition-colors ${
              autoFlipEnabled
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700'
            }`}
            title="Toggle auto flip"
          >
            {autoFlipEnabled ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
            <span>Auto</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFlipBack();
            }}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-all flex items-center gap-1 cursor-pointer shadow-xs"
            title="Flip to Portrait"
          >
            <RotateCw className="w-3 h-3 text-[#FF5722]" />
            <span>Portrait ↺</span>
          </button>
        </div>
      </div>

      {/* Minimal Category Filter Tabs (Fluid, Not boxy) */}
      <div className="py-2 shrink-0 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {(
          [
            { id: 'all', label: 'All Services' },
            { id: 'cloud', label: 'Cloud & DevOps' },
            { id: 'development', label: 'Full-Stack & Apps' },
            { id: 'enterprise', label: 'Enterprise & SEO' },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveFilter(tab.id);
            }}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono whitespace-nowrap transition-all duration-200 ${
              activeFilter === tab.id
                ? 'bg-[#FF5722] text-white font-bold shadow-xs'
                : 'bg-zinc-100 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-transparent hover:border-black/5 dark:hover:border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Flowing Staggered Stream of Interactive Service Capsules (NOT a card grid!) */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 my-1 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isSelected = selectedService === service.id;
            const IconComponent = OfficialServiceIcons[service.iconKey];

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.035,
                  type: 'spring',
                  stiffness: 260,
                  damping: 22,
                }}
                whileHover={{ scale: 1.02, x: 4 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(isSelected ? null : service.id);
                }}
                className={`group relative p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-3 ${
                  isSelected
                    ? 'border-[#FF5722] bg-[#FF5722]/5 dark:bg-[#FF5722]/10 shadow-lg'
                    : darkMode
                    ? 'bg-zinc-900/50 hover:bg-zinc-900/80 border-white/[0.06] hover:border-white/20'
                    : 'bg-zinc-50/90 hover:bg-white border-black/[0.06] hover:border-black/15 shadow-xs'
                }`}
                style={{
                  boxShadow: isSelected ? `0 10px 25px -5px ${service.glowColor}` : undefined,
                }}
              >
                {/* Official Brand Logo Icon (Sharp, recognizable official SVG) */}
                <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {IconComponent('w-9 h-9 sm:w-10 sm:h-10 drop-shadow-md')}
                  {/* Subtle brand color glow dot */}
                  <span
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-950"
                    style={{ backgroundColor: service.brandColor }}
                  />
                </div>

                {/* Service Details in Fluid Typography */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1.5">
                    <h4 className="text-xs sm:text-sm font-display font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-[#FF5722] transition-colors truncate">
                      {service.name}
                    </h4>
                    <span
                      className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md shrink-0 transition-colors"
                      style={{
                        backgroundColor: `${service.brandColor}15`,
                        color: service.brandColor,
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                    {service.deliverable}
                  </p>

                  {/* Expanded Metrics / Highlights when clicked */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono"
                      >
                        <span className="text-emerald-500 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {service.metrics}
                        </span>
                        <a
                          href="#contact"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[#FF5722] hover:underline font-bold"
                        >
                          Book Service →
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Sleek Minimal Footer (No bulky cards or red boxes) */}
      <div className="pt-2 shrink-0 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono">
        <span className="text-zinc-500 dark:text-zinc-400 text-[11px] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
          Production-Ready Architecture
        </span>

        <a
          href="#contact"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FF5722] hover:text-[#f4511e] transition-colors"
        >
          <span>Hire Umesh</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
