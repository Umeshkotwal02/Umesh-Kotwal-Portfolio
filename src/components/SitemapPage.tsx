import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Map,
  Compass,
  FileCode2,
  FolderGit2,
  Wrench,
  ShieldAlert,
  ArrowLeft,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowUpRight,
  FileText,
  Search,
  X,
  Tag,
  Flame,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { SERVICES, PROJECTS } from '../data/portfolioData';

interface SitemapPageProps {
  darkMode: boolean;
  onNavigate: (path: string) => void;
}

interface CoreSectionItem {
  title: string;
  path: string;
  desc: string;
  priority: string;
  freq: string;
  keywords: string[];
}

interface LegalLinkItem {
  title: string;
  path: string;
  desc: string;
  priority: string;
  freq: string;
  keywords: string[];
  external?: boolean;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ darkMode, onNavigate }) => {
  const currentOrigin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://umeshcodes.vercel.app';
  const BASE_URL = currentOrigin;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'projects' | 'services' | 'legal'>('all');

  const FAMOUS_SEARCHES = [
    { label: '🔥 Dubai Full-Stack', query: 'Dubai' },
    { label: '⚡ Node.js & Microservices', query: 'Microservices' },
    { label: '💳 Stripe Connect Payouts', query: 'Stripe' },
    { label: '📦 BullMQ & Redis Queues', query: 'BullMQ' },
    { label: '🏢 ERP Software Surat', query: 'ERP' },
    { label: '🛒 Kesaria Textile SEO', query: 'Kesaria' },
    { label: '🏋️ Vyonic Health & Fitness', query: 'Vyonic' },
    { label: '🎪 Vybemena Events', query: 'Vybemena' },
    { label: '🏠 The Magic Homes Portal', query: 'Magic Homes' },
    { label: '👗 Kapoor Lehenga Saree', query: 'Kapoor' },
    { label: '☁️ AWS ECS & Docker', query: 'AWS' },
    { label: '🔍 React SSR SEO', query: 'SEO' },
    { label: '🧪 QA Automation & Playwright', query: 'Testing' }
  ];

  const coreSections: CoreSectionItem[] = [
    {
      title: 'Home Portfolio',
      path: '/',
      desc: 'Primary portfolio homepage featuring hero, overview, key metrics, and architectural highlights.',
      priority: '1.0',
      freq: 'Daily',
      keywords: ['Home', 'Portfolio', 'Full Stack Developer', 'Dubai', 'Surat', 'Overview']
    },
    {
      title: 'About Umesh Kotwal',
      path: '/about',
      desc: 'Background, B.Tech education, engineering philosophy, and full developer biography.',
      priority: '0.9',
      freq: 'Monthly',
      keywords: ['About', 'Biography', 'Education', 'B.Tech', 'Philosophy', 'Dubai Remote']
    },
    {
      title: 'Core Technical Skills',
      path: '/skills',
      desc: 'Comprehensive proficiency matrix covering Backend, Frontend, Cloud, and Databases.',
      priority: '0.85',
      freq: 'Monthly',
      keywords: ['Skills', 'Node.js', 'React.js', 'PostgreSQL', 'Docker', 'Redis', 'TypeScript']
    },
    {
      title: 'Production Experience',
      path: '/experience',
      desc: 'Work history at CodExpert Solutions, ProfoundEdutech, client deliverables, and milestones.',
      priority: '0.9',
      freq: 'Monthly',
      keywords: ['Experience', 'Work History', 'CodExpert Solutions', 'ProfoundEdutech', 'Enterprise']
    },
    {
      title: 'Architectural Projects',
      path: '/projects',
      desc: 'Full case study portfolio of 6 production applications, microservices, and client platforms.',
      priority: '0.95',
      freq: 'Weekly',
      keywords: ['Projects', 'Case Studies', 'Vyonic', 'Vybemena', 'ERP Software', 'Kesaria Textile', 'Magic Homes', 'Kapoor Lehenga']
    },
    {
      title: 'Engineering Services',
      path: '/services',
      desc: 'High-throughput microservices, payments, QA automation, double-entry ERP, and cloud consulting.',
      priority: '0.95',
      freq: 'Weekly',
      keywords: ['Services', 'Consulting', 'Architecture', 'SaaS', 'Stripe Connect', 'DevOps']
    },
    {
      title: 'Verified Achievements',
      path: '/achievements',
      desc: 'Quantified system metrics: 99.9% uptime, zero data loss queues, and sub-40ms cache latencies.',
      priority: '0.8',
      freq: 'Monthly',
      keywords: ['Achievements', 'Uptime', 'Metrics', 'Zero Data Loss', 'High Availability']
    },
    {
      title: 'Client Testimonials',
      path: '/testimonials',
      desc: 'Endorsements and enterprise recommendations from Dubai (DALVE) and Surat stakeholders.',
      priority: '0.8',
      freq: 'Monthly',
      keywords: ['Testimonials', 'Reviews', 'Recommendations', 'Sona Makaryan', 'Nikunj Gadhiya', 'Anand Makhanasa']
    },
    {
      title: 'Contact & Consultation',
      path: '/contact',
      desc: 'Direct inquiry dispatch with live SMTP email, phone, and WhatsApp contact.',
      priority: '0.9',
      freq: 'Weekly',
      keywords: ['Contact', 'Inquiry', 'Email', 'WhatsApp', 'Hire Full Stack Developer']
    },
  ];

  const legalLinks: LegalLinkItem[] = [
    {
      title: 'Terms of Service',
      path: '/terms',
      desc: 'Engineering engagement agreement, milestone billing, IP ownership, and 30-day warranty.',
      priority: '0.7',
      freq: 'Monthly',
      keywords: ['Terms', 'Agreement', 'Legal', 'Contract', 'Warranty']
    },
    {
      title: 'Privacy Policy',
      path: '/privacy',
      desc: 'GDPR & CCPA compliance, confidential client specs protection, and zero data selling policy.',
      priority: '0.7',
      freq: 'Monthly',
      keywords: ['Privacy', 'GDPR', 'Compliance', 'Security', 'Confidentiality']
    },
    {
      title: 'HTML Sitemap & Search',
      path: '/sitemap',
      desc: 'Complete visual and searchable directory of all public routes, services, and case studies.',
      priority: '0.8',
      freq: 'Weekly',
      keywords: ['Sitemap', 'Directory', 'Search', 'Index', 'Routes']
    },
    {
      title: 'XML Sitemap (Raw Machine Feed)',
      path: '/sitemap.xml',
      desc: 'Machine-readable XML sitemap specification for Google Search Console and Bing Webmaster.',
      priority: '0.7',
      freq: 'Weekly',
      keywords: ['XML', 'Google Search Console', 'Crawlers', 'SEO Feed'],
      external: true
    },
  ];

  // Search filtering logic
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCore = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'core') return [];
    if (!normalizedQuery) return coreSections;
    return coreSections.filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.desc.toLowerCase().includes(normalizedQuery) ||
      item.path.toLowerCase().includes(normalizedQuery) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery, selectedCategory]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'projects') return [];
    if (!normalizedQuery) return PROJECTS;
    return PROJECTS.filter((proj) =>
      proj.title.toLowerCase().includes(normalizedQuery) ||
      proj.subtitle.toLowerCase().includes(normalizedQuery) ||
      proj.description.toLowerCase().includes(normalizedQuery) ||
      proj.clientLocation?.toLowerCase().includes(normalizedQuery) ||
      proj.category.toLowerCase().includes(normalizedQuery) ||
      proj.techStack.some((tech) => tech.toLowerCase().includes(normalizedQuery)) ||
      proj.highlights.some((h) => h.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery, selectedCategory]);

  const filteredServices = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'services') return [];
    if (!normalizedQuery) return SERVICES;
    return SERVICES.filter((serv) =>
      serv.title.toLowerCase().includes(normalizedQuery) ||
      serv.shortTitle.toLowerCase().includes(normalizedQuery) ||
      serv.description.toLowerCase().includes(normalizedQuery) ||
      serv.fullDescription.toLowerCase().includes(normalizedQuery) ||
      serv.slug.toLowerCase().includes(normalizedQuery) ||
      serv.technologies.some((tech) => tech.toLowerCase().includes(normalizedQuery)) ||
      serv.deliverables.some((d) => d.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery, selectedCategory]);

  const filteredLegal = useMemo(() => {
    if (selectedCategory !== 'all' && selectedCategory !== 'legal') return [];
    if (!normalizedQuery) return legalLinks;
    return legalLinks.filter((item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.desc.toLowerCase().includes(normalizedQuery) ||
      item.path.toLowerCase().includes(normalizedQuery) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(normalizedQuery))
    );
  }, [normalizedQuery, selectedCategory]);

  const totalResults =
    filteredCore.length +
    filteredProjects.length +
    filteredServices.length +
    filteredLegal.length;

  const totalPossible =
    coreSections.length + PROJECTS.length + SERVICES.length + legalLinks.length;

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-200' : 'bg-[#fafafa] text-zinc-800'
    }`}>
      {/* SEO & Canonical Metadata */}
      <SEOHead
        title="HTML Sitemap & Searchable Directory | Umesh Kotwal"
        description="Searchable HTML sitemap and page directory for Umesh Kotwal's Full-Stack & Microservices engineering portfolio. Explore all 6 projects, 12 specialized services, and famous search terms."
        canonicalPath="/sitemap"
        keywords={[
          "Umesh Kotwal Sitemap",
          "Portfolio Directory",
          "Software Engineering Pages",
          "Full Stack Developer Dubai",
          "Node.js Microservices",
          "Stripe Connect Payouts",
          "BullMQ Redis Queues",
          "ERP Software Surat",
          "Kesaria Textile SEO",
          "Vyonic Health Platform",
          "Vybemena Events",
          "The Magic Homes Portal",
          "Kapoor Lehenga Saree"
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://umeshcodes.vercel.app/sitemap#webpage",
          "url": "https://umeshcodes.vercel.app/sitemap",
          "name": "HTML Sitemap & Directory | Umesh Kotwal",
          "description": "Comprehensive index of all web pages, architectural services, and production case studies on Umesh Kotwal's portfolio.",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://umeshcodes.vercel.app/"
          }
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Breadcrumb & Machine Feed link */}
        <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
          <nav className="flex items-center gap-2 text-xs font-mono" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('/')}
              className="text-[#FF5722] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-500" />
            <span className={darkMode ? 'text-zinc-200 font-semibold' : 'text-zinc-900 font-semibold'}>
              Sitemap & Search Directory
            </span>
          </nav>

          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#FF5722] hover:underline flex items-center gap-1.5"
          >
            <span>View XML Machine Sitemap</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20">
            <Map className="w-3.5 h-3.5" />
            <span>FULL SYSTEM DIRECTORY & KEYWORD SEARCH</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Website Sitemap & Topic Search
          </h1>

          <p className={`text-sm sm:text-base leading-relaxed max-w-3xl ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            An indexed directory of all production routes, architectural service disciplines, in-depth project case studies, and compliance specifications. Use the real-time search or quick search terms below to find specific engineering topics.
          </p>
        </motion.div>

        {/* Search & Filter Control Center */}
        <div className={`p-6 rounded-3xl border space-y-5 transition-all shadow-sm ${
          darkMode
            ? 'bg-zinc-900/50 border-white/10'
            : 'bg-white border-black/10 shadow-zinc-200/50'
        }`}>
          {/* Main Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#FF5722]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sitemap by title, keyword, tech stack, or topic (e.g., 'Stripe', 'ERP', 'Dubai', 'BullMQ')..."
              className={`w-full pl-12 pr-10 py-3.5 rounded-2xl border text-sm outline-none transition-all ${
                darkMode
                  ? 'bg-zinc-950/80 border-white/10 focus:border-[#FF5722] text-white placeholder-zinc-500'
                  : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900 placeholder-zinc-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Famous Search Queries (Most Popular Search Terms) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-zinc-400 font-semibold">
                <Flame className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Famous & High-Intent Searches:</span>
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#FF5722] hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Search</span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {FAMOUS_SEARCHES.map((item) => {
                const isActive = searchQuery.toLowerCase() === item.query.toLowerCase();
                return (
                  <button
                    key={item.label}
                    onClick={() => setSearchQuery(item.query)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all cursor-pointer border flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#FF5722] text-white border-[#FF5722] shadow-sm shadow-[#FF5722]/30 scale-[1.02]'
                        : darkMode
                        ? 'bg-zinc-950/60 hover:bg-zinc-800 text-zinc-300 border-white/10 hover:border-[#FF5722]/40'
                        : 'bg-zinc-100/80 hover:bg-zinc-200 text-zinc-700 border-black/5 hover:border-[#FF5722]/40'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Tabs & Result Counter */}
          <div className="pt-3 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: `All Resources (${totalResults})` },
                { id: 'core', label: `Core Pages (${filteredCore.length})` },
                { id: 'projects', label: `Projects (${filteredProjects.length})` },
                { id: 'services', label: `Services (${filteredServices.length})` },
                { id: 'legal', label: `Legal (${filteredLegal.length})` }
              ].map((tab) => {
                const isSelected = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FF5722]/15 text-[#FF5722] border-[#FF5722]/40 font-bold'
                        : darkMode
                        ? 'bg-transparent text-zinc-400 border-white/5 hover:bg-zinc-800'
                        : 'bg-transparent text-zinc-600 border-black/5 hover:bg-zinc-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono text-zinc-400">
              Showing <strong>{totalResults}</strong> of {totalPossible} indexed items
            </div>
          </div>
        </div>

        {/* Empty State when no results found */}
        {totalResults === 0 && (
          <div className={`p-12 rounded-3xl border text-center space-y-4 ${
            darkMode ? 'bg-zinc-900/40 border-white/10' : 'bg-white border-black/10'
          }`}>
            <Search className="w-10 h-10 text-zinc-500 mx-auto" />
            <h3 className="text-lg font-bold">No Sitemap Entries Found</h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              No pages or topics matched &ldquo;{searchQuery}&rdquo;. Try another keyword or browse the famous searches above.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-[#FF5722] text-white hover:bg-[#F4511E] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search Filter</span>
            </button>
          </div>
        )}

        {/* Category 1: Core Navigation Pages */}
        {filteredCore.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#FF5722]" />
                <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  Core Portfolio Sections ({filteredCore.length} Routes)
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">Indexed Sections</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCore.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onNavigate(item.path);
                    }
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between block ${
                    darkMode
                      ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80 shadow-xs'
                      : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold group-hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono">
                        <span className="px-1.5 py-0.5 rounded bg-zinc-500/10 text-zinc-500 font-semibold">Priority: {item.priority}</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#FF5722]/10 text-[#FF5722] font-semibold">{item.freq}</span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-inherit">
                    <div className="flex flex-wrap gap-1">
                      {item.keywords.map((kw) => (
                        <span key={kw} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-400">
                          #{kw}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors block truncate">
                      {BASE_URL}{item.path === '/' ? '' : item.path}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Category 2: Production Case Studies & Projects */}
        {filteredProjects.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-2.5">
                <FolderGit2 className="w-5 h-5 text-[#FF5722]" />
                <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  Production Case Studies ({filteredProjects.length} Projects)
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">Production Deployed</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((proj) => {
                const projectPath = `/projects/${proj.id}`;
                return (
                  <a
                    key={proj.id}
                    href={projectPath}
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                        e.preventDefault();
                        onNavigate(projectPath);
                      }
                    }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between block ${
                      darkMode
                        ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80 shadow-xs'
                        : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-sm font-bold group-hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                          <span>{proj.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-500/10 text-zinc-400 font-semibold uppercase">
                          {proj.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mb-2 leading-relaxed">
                        {proj.subtitle} — {proj.clientLocation || 'Global'}
                      </p>
                      <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                        {proj.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-inherit">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1">
                        {proj.techStack.slice(0, 5).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF5722]/10 text-[#FF5722] font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-zinc-400 group-hover:text-[#FF5722] transition-colors truncate">
                          {BASE_URL}{projectPath}
                        </span>
                        <span className="text-[#FF5722] shrink-0 font-semibold">
                          {proj.metrics?.[0] || 'Production'}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* Category 3: Specialized Engineering Services */}
        {filteredServices.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-2.5">
                <Wrench className="w-5 h-5 text-[#FF5722]" />
                <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  Specialized Engineering Services ({filteredServices.length} Offerings)
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">Direct Consultation</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredServices.map((serv) => {
                const servicePath = `/services/${serv.slug}`;
                return (
                  <a
                    key={serv.id}
                    href={servicePath}
                    onClick={(e) => {
                      if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                        e.preventDefault();
                        onNavigate(servicePath);
                      }
                    }}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between block ${
                      darkMode
                        ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80 shadow-xs'
                        : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-sm font-bold group-hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                          <span>{serv.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#FF5722]/10 text-[#FF5722] font-semibold">
                          Weekly
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mb-2 leading-relaxed">
                        {serv.tagline}
                      </p>
                      <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                        {serv.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-inherit">
                      <div className="flex flex-wrap gap-1">
                        {serv.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-zinc-400 group-hover:text-[#FF5722] transition-colors truncate">
                          {BASE_URL}{servicePath}
                        </span>
                        <span className="text-emerald-500 shrink-0 font-semibold">
                          Ready SLA
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* Category 4: Legal & Policy Documentation */}
        {filteredLegal.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-[#FF5722]" />
                <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                  Legal, Compliance & Machine Sitemaps ({filteredLegal.length} Docs)
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">Compliance</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredLegal.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (item.external) return;
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onNavigate(item.path);
                    }
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between block ${
                    darkMode
                      ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80 shadow-xs'
                      : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold group-hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#FF5722]/10 text-[#FF5722] font-semibold">
                        Priority: {item.priority}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-inherit">
                    <div className="flex flex-wrap gap-1">
                      {item.keywords.map((kw) => (
                        <span key={kw} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-400">
                          #{kw}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors block truncate">
                      {BASE_URL}{item.path}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
