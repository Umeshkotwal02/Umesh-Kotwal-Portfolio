import React from 'react';
import { motion } from 'motion/react';
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
  FileText
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { SERVICES, PROJECTS } from '../data/portfolioData';

interface SitemapPageProps {
  darkMode: boolean;
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ darkMode, onNavigate }) => {
  const BASE_URL = 'https://umeshcodes.vercel.app';

  const coreSections = [
    { title: 'Home Portfolio', path: '/', desc: 'Primary portfolio homepage featuring hero, overview, and architectural highlights.', priority: '1.0', freq: 'Weekly' },
    { title: 'About Umesh Kotwal', path: '/about', desc: 'Background, education, engineering philosophy, and full developer biography.', priority: '0.9', freq: 'Monthly' },
    { title: 'Core Technical Skills', path: '/skills', desc: 'Comprehensive proficiency matrix covering Backend, Frontend, Cloud, and Databases.', priority: '0.85', freq: 'Monthly' },
    { title: 'Production Experience', path: '/experience', desc: 'Work history at Code Expert Solutions, Enterprise Web Technologies, and deliverables.', priority: '0.9', freq: 'Monthly' },
    { title: 'Architectural Projects', path: '/projects', desc: 'Full case study portfolio of production applications and microservices.', priority: '0.9', freq: 'Weekly' },
    { title: 'Engineering Services', path: '/services', desc: 'High-throughput microservices, payments, QA automation, and cloud consulting.', priority: '0.9', freq: 'Weekly' },
    { title: 'Architecture Simulator', path: '/simulator', desc: 'Interactive real-time Redis cache, BullMQ queue, and DLQ simulation engine.', priority: '0.85', freq: 'Monthly' },
    { title: 'Verified Achievements', path: '/achievements', desc: 'Quantified system metrics: 99.9% uptime, zero data loss, sub-40ms cache latencies.', priority: '0.8', freq: 'Monthly' },
    { title: 'Client Testimonials', path: '/testimonials', desc: 'Endorsements and enterprise recommendations from Dubai and global stakeholders.', priority: '0.8', freq: 'Monthly' },
    { title: 'Contact & Consultation', path: '/contact', desc: 'Direct inquiry dispatch, calendar scheduling, phone, and WhatsApp contact.', priority: '0.9', freq: 'Monthly' },
  ];

  const legalLinks = [
    { title: 'Terms of Service', path: '/terms', desc: 'Engineering engagement agreement, milestone billing, IP ownership, and 30-day bug warranty.', priority: '0.7', freq: 'Monthly' },
    { title: 'Privacy Policy', path: '/privacy', desc: 'GDPR & CCPA compliance, confidential client specs protection, zero data selling policy.', priority: '0.7', freq: 'Monthly' },
    { title: 'HTML Sitemap', path: '/sitemap', desc: 'Complete visual directory index of all public web pages and case studies.', priority: '0.7', freq: 'Monthly' },
    { title: 'XML Sitemap (Raw)', path: '/sitemap.xml', desc: 'Machine-readable XML sitemap specification for Google Search Console and Bing Webmaster.', priority: '0.7', freq: 'Weekly', external: true },
  ];

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-200' : 'bg-[#fafafa] text-zinc-800'
    }`}>
      {/* SEO & Canonical Metadata */}
      <SEOHead
        title="HTML Sitemap & Directory | Umesh Kotwal Portfolio"
        description="Comprehensive HTML sitemap and page directory for Umesh Kotwal's Full-Stack & Microservices engineering portfolio. Discover all case studies, services, and legal docs."
        canonicalPath="/sitemap"
        keywords={[
          "Umesh Kotwal Sitemap",
          "Portfolio Directory",
          "Software Engineering Pages",
          "Full Stack Developer Case Studies",
          "Microservices Architecture Index"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Breadcrumb */}
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
              Sitemap Directory
            </span>
          </nav>

          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#FF5722] hover:underline flex items-center gap-1.5"
          >
            <span>View XML Sitemap</span>
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
            <span>FULL SYSTEM DIRECTORY & SEO INDEX</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Website Sitemap
          </h1>

          <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A comprehensive index of all routes, architectural offerings, in-depth case studies, and legal documentation across the portfolio for both human navigation and search engine crawlers.
          </p>
        </motion.div>

        {/* Category 1: Core Navigation Pages */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
            <Compass className="w-5 h-5 text-[#FF5722]" />
            <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
              Core Portfolio Sections ({coreSections.length} Routes)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreSections.map((item) => (
              <div
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer group ${
                  darkMode
                    ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80'
                    : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                }`}
              >
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
                <p className="text-xs text-zinc-500 mb-2 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors">
                  {BASE_URL}{item.path === '/' ? '' : item.path}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Category 2: Specialized Engineering Services */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
            <Wrench className="w-5 h-5 text-[#FF5722]" />
            <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
              Specialized Engineering Services ({SERVICES.length} Dedicated Service Pages)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((serv) => {
              const servicePath = `/services/${serv.slug}`;
              return (
                <div
                  key={serv.id}
                  onClick={() => onNavigate(servicePath)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer group ${
                    darkMode
                      ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80'
                      : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                  }`}
                >
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
                    {serv.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors">
                      {BASE_URL}{servicePath}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-400">
                      SLA: {serv.deliverables?.[0] ? 'Production Ready' : 'Architecture'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category 3: Case Studies & Production Projects */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
            <FolderGit2 className="w-5 h-5 text-[#FF5722]" />
            <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
              Production Case Studies & Projects ({PROJECTS.length} Dedicated Case Studies)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((proj) => {
              const projectPath = `/projects/${proj.id}`;
              return (
                <div
                  key={proj.id}
                  onClick={() => onNavigate(projectPath)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer group ${
                    darkMode
                      ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80'
                      : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold group-hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-500/10 text-zinc-400 font-semibold">
                      {proj.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-2 leading-relaxed">
                    {proj.subtitle} — {proj.clientLocation}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors">
                      {BASE_URL}{projectPath}
                    </span>
                    <span className="text-[10px] font-mono text-[#FF5722]">
                      {proj.metrics?.[0] || 'Verified Metrics'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Category 4: Legal & Policy Documentation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
            <ShieldAlert className="w-5 h-5 text-[#FF5722]" />
            <h2 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
              Legal, Compliance & Machine Sitemaps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {legalLinks.map((item) => (
              <div
                key={item.path}
                onClick={() => {
                  if (item.external) {
                    window.open(item.path, '_blank');
                  } else {
                    onNavigate(item.path);
                  }
                }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer group ${
                  darkMode
                    ? 'bg-zinc-900/40 border-white/[0.08] hover:border-[#FF5722]/50 hover:bg-zinc-900/80'
                    : 'bg-white border-black/[0.06] hover:border-[#FF5722]/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-bold group-hover:text-[#FF5722] transition-colors flex items-center gap-1.5">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#FF5722]/10 text-[#FF5722] font-semibold">
                    {item.priority}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-2 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-[11px] font-mono text-zinc-400 group-hover:text-[#FF5722] transition-colors">
                  {BASE_URL}{item.path}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
