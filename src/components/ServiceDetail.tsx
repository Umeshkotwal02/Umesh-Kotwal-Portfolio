import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Server,
  CreditCard,
  Layout,
  Radio,
  Cloud,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Layers,
  Zap,
  Terminal,
  Clock,
  Send,
  MessageSquareCode
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { SEOHead } from './SEOHead';

interface ServiceDetailProps {
  service: Service;
  darkMode: boolean;
  onBack: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenAiModal: (initialPrompt?: string) => void;
}

const ICON_MAP: Record<string, any> = {
  Server,
  CreditCard,
  Layout,
  Radio,
  Cloud,
  ShieldCheck
};

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  darkMode,
  onBack,
  onSelectService,
  onOpenAiModal
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: `Hi Umesh, I'd like to discuss your "${service.title}" service for my project.`
  });

  const Icon = ICON_MAP[service.icon] || Server;

  // Find other services for "Other Capabilities" footer
  const otherServices = SERVICES.filter(s => s.id !== service.id);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      {/* SEO & Canonical Metadata */}
      <SEOHead
        title={`${service.title} | Umesh Kotwal`}
        description={service.shortDescription || service.description}
        canonicalPath={`/services/${service.slug}`}
        keywords={[
          service.title,
          `${service.shortTitle} Service`,
          "Umesh Kotwal Engineering Service",
          "Microservices Consulting",
          "Full Stack Architecture",
          ...(service.technologies || [])
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `https://umeshcodes.vercel.app/services/${service.slug}#service`,
          "name": service.title,
          "serviceType": service.shortTitle,
          "description": service.description,
          "provider": {
            "@type": "Person",
            "name": "Umesh Kotwal",
            "url": "https://umeshcodes.vercel.app/"
          },
          "areaServed": ["United Arab Emirates", "India", "United States", "Worldwide"]
        }}
      />

      {/* Top Breadcrumb & Back Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 group ${
              darkMode
                ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                : 'bg-white border-black/10 text-zinc-700 hover:text-zinc-950 hover:shadow-xs'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Services & Portfolio</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono">
            <button onClick={onBack} className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
              Home
            </button>
            <span className="text-zinc-400">/</span>
            <button onClick={onBack} className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
              Services
            </button>
            <span className="text-zinc-400">/</span>
            <span className="text-[#FF5722] font-semibold">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden transition-all duration-300 ${
          darkMode
            ? 'bg-zinc-900/40 border-white/10'
            : 'bg-white border-black/10 shadow-sm'
        }`}>
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
              <Icon className="w-4 h-4 text-[#FF5722]" />
              <span>PRODUCTION SERVICE • {service.technologies.slice(0, 3).join(' • ')}</span>
            </div>

            <h1 className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#FF5722] leading-relaxed">
              {service.tagline}
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              {service.fullDescription}
            </p>

            {/* Metrics Banner */}
            {service.metrics && service.metrics.length > 0 && (
              <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t ${
                darkMode ? 'border-white/10' : 'border-black/10'
              }`}>
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-black text-[#FF5722] tracking-tight">
                      {m.value}
                    </div>
                    <div className={`text-xs font-mono uppercase tracking-wider ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#service-inquiry"
                className="px-6 py-3 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#F4511E] rounded-full flex items-center gap-2 shadow-lg shadow-[#FF5722]/25 transition-all duration-200"
              >
                <span>Hire for this Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenAiModal(`Tell me about Umesh's experience with ${service.title} and his past projects in this area.`)}
                className={`px-5 py-3 text-xs font-medium rounded-full border flex items-center gap-2 transition-all duration-200 ${
                  darkMode
                    ? 'bg-zinc-800 border-white/10 text-zinc-200 hover:bg-zinc-700'
                    : 'bg-zinc-100 border-black/10 text-zinc-800 hover:bg-zinc-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Ask AI About Architecture</span>
              </button>

              <a
                href={`https://wa.me/916352001332?text=${encodeURIComponent(`Hi Umesh, I am interested in discussing your ${service.title} service.`)}`}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-3 text-xs font-medium rounded-full border flex items-center gap-2 transition-all duration-200 ${
                  darkMode
                    ? 'bg-zinc-900 border-white/10 text-emerald-400 hover:border-emerald-500/40'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                <span>WhatsApp Instant Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Architecture & Visual Diagram Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
              TECHNICAL BLUEPRINT
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              System Architecture & Core Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Diagram Card */}
            <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border space-y-6 ${
              darkMode
                ? 'bg-zinc-900/30 border-white/10'
                : 'bg-white border-black/10 shadow-sm'
            }`}>
              <div className="flex items-center justify-between border-b pb-4 border-inherit">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold">
                  <Layers className="w-4 h-4 text-[#FF5722]" />
                  <span>ARCHITECTURE SCHEMATIC</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Production Verified
                </span>
              </div>

              {/* Schematic Node Flow Graphic */}
              <div className={`p-6 rounded-2xl border font-mono text-xs space-y-4 ${
                darkMode ? 'bg-black/60 border-white/5' : 'bg-zinc-50 border-black/5'
              }`}>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-inherit">
                  <span>CLIENT REQ</span>
                  <span>INGRESS GATEWAY</span>
                  <span>CACHE / QUEUE</span>
                  <span>DATA STORE</span>
                </div>

                {/* Animated Pipeline Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className={`p-3 rounded-xl border space-y-1 ${
                    darkMode ? 'bg-zinc-900/90 border-white/10 text-zinc-200' : 'bg-white border-black/10 text-zinc-800'
                  }`}>
                    <div className="text-[10px] text-zinc-400">Layer 1</div>
                    <div className="font-bold text-xs">Client Apps</div>
                    <div className="text-[10px] text-emerald-500">React / Next / iOS</div>
                  </div>

                  <div className={`p-3 rounded-xl border space-y-1 ${
                    darkMode ? 'bg-zinc-900/90 border-white/10 text-zinc-200' : 'bg-white border-black/10 text-zinc-800'
                  }`}>
                    <div className="text-[10px] text-zinc-400">Layer 2</div>
                    <div className="font-bold text-xs">Node / Express</div>
                    <div className="text-[10px] text-[#FF5722]">Microservice API</div>
                  </div>

                  <div className={`p-3 rounded-xl border space-y-1 ${
                    darkMode ? 'bg-zinc-900/90 border-white/10 text-zinc-200' : 'bg-white border-black/10 text-zinc-800'
                  }`}>
                    <div className="text-[10px] text-zinc-400">Layer 3</div>
                    <div className="font-bold text-xs">Redis + BullMQ</div>
                    <div className="text-[10px] text-amber-500">&lt;40ms Cache & DLQ</div>
                  </div>

                  <div className={`p-3 rounded-xl border space-y-1 ${
                    darkMode ? 'bg-zinc-900/90 border-white/10 text-zinc-200' : 'bg-white border-black/10 text-zinc-800'
                  }`}>
                    <div className="text-[10px] text-zinc-400">Layer 4</div>
                    <div className="font-bold text-xs">Postgres / MySQL</div>
                    <div className="text-[10px] text-cyan-500">Prisma ORM ACID</div>
                  </div>
                </div>

                <div className={`p-3 rounded-xl text-[11px] font-sans flex items-start gap-2.5 mt-2 ${
                  darkMode ? 'bg-zinc-900/40 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                }`}>
                  <Zap className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                  <span>
                    Each service tier is isolated, with failover retry mechanisms and automated DLQ alerting ensuring zero transactional data loss.
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3">
                <div className={`text-xs font-mono font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  TECHNICAL ASSURANCES:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.architecturePoints.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className={`p-3.5 rounded-2xl border text-xs flex items-start gap-2.5 leading-relaxed ${
                        darkMode
                          ? 'bg-zinc-900/50 border-white/5 text-zinc-300'
                          : 'bg-zinc-50 border-black/5 text-zinc-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study Card */}
            {service.caseStudy && (
              <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border space-y-5 ${
                darkMode
                  ? 'bg-zinc-900/30 border-white/10'
                  : 'bg-white border-black/10 shadow-sm'
              }`}>
                <div className="flex items-center justify-between border-b pb-4 border-inherit">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold">
                    <Terminal className="w-4 h-4 text-[#FF5722]" />
                    <span>PRODUCTION CASE STUDY</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {service.caseStudy.location}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-lg font-bold tracking-tight ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-950'
                  }`}>
                    {service.caseStudy.projectTitle}
                  </h3>
                  <div className="text-xs font-mono text-[#FF5722]">
                    Client: {service.caseStudy.client}
                  </div>
                </div>

                {/* Case Study Image */}
                <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 group aspect-video">
                  <img
                    src={service.caseStudy.image}
                    alt={service.caseStudy.projectTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                    {service.caseStudy.projectTitle}
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {service.caseStudy.summary}
                </p>

                <div className={`p-3.5 rounded-2xl border text-xs font-medium ${
                  darkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                }`}>
                  <strong className="block text-[11px] uppercase tracking-wider font-mono font-bold mb-1">
                    Client Impact:
                  </strong>
                  {service.caseStudy.impact}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Deliverables & Deliverables Grid */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
              WHAT YOU RECEIVE
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Included Deliverables & Engineering Artifacts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((del, dIdx) => (
              <div
                key={dIdx}
                className={`p-5 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 group ${
                  darkMode
                    ? 'bg-zinc-900/30 border-white/5 hover:border-[#FF5722]/30'
                    : 'bg-white border-black/5 hover:border-[#FF5722]/30 hover:shadow-xs'
                }`}
              >
                <div className="w-7 h-7 rounded-xl bg-[#FF5722]/10 flex items-center justify-center text-[#FF5722] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className={`text-xs font-bold leading-snug ${
                    darkMode ? 'text-zinc-200' : 'text-zinc-900'
                  }`}>
                    {del}
                  </div>
                  <div className={`text-[11px] leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    Production-grade implementation with source code, documentation, and handover walk-through.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Delivery Workflow */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
              METHODOLOGY
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Engineering Execution Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.workflow.map((flow) => (
              <div
                key={flow.step}
                className={`p-6 rounded-3xl border space-y-3 relative ${
                  darkMode
                    ? 'bg-zinc-900/30 border-white/10'
                    : 'bg-white border-black/10 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-extrabold text-[#FF5722]">
                    {flow.step}
                  </span>
                  <Clock className="w-4 h-4 text-zinc-400" />
                </div>
                <h3 className={`text-sm font-bold ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-950'
                }`}>
                  {flow.title}
                </h3>
                <p className={`text-xs leading-relaxed ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Strip */}
        <div className={`p-8 rounded-3xl border space-y-4 ${
          darkMode ? 'bg-zinc-900/30 border-white/10' : 'bg-white border-black/10 shadow-xs'
        }`}>
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
            TECHNOLOGY ECOSYSTEM
          </div>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-medium ${
                  darkMode
                    ? 'bg-zinc-800/80 border-white/10 text-zinc-200'
                    : 'bg-zinc-100 border-black/10 text-zinc-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
              QUESTIONS & ARCHITECTURE ANSWERS
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    darkMode
                      ? 'bg-zinc-900/40 border-white/10'
                      : 'bg-white border-black/10 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-sm font-bold ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-900'
                    }`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FF5722]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t pt-3 ${
                        darkMode ? 'text-zinc-400 border-white/5' : 'text-zinc-600 border-black/5'
                      }`}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Inquiry Form & Contact Box */}
        <div id="service-inquiry" className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden ${
          darkMode ? 'bg-zinc-900/60 border-[#FF5722]/30' : 'bg-white border-[#FF5722]/30 shadow-lg'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/25">
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>DIRECT SERVICE ENGAGEMENT</span>
              </div>

              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                darkMode ? 'text-zinc-100' : 'text-zinc-950'
              }`}>
                Ready to Architect Your {service.shortTitle}?
              </h2>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                Whether you are launching a greenfield product or scaling an existing system, I can design and build your system with sub-millisecond efficiency and zero data loss.
              </p>

              <div className={`p-4 rounded-2xl border space-y-2 text-xs font-mono ${
                darkMode ? 'bg-zinc-950/60 border-white/10 text-zinc-300' : 'bg-zinc-50 border-black/10 text-zinc-700'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">Email:</span>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">WhatsApp:</span>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF5722] font-bold">Location:</span>
                  <span>{PERSONAL_INFO.location} (Remote for Dubai & Global)</span>
                </div>
              </div>
            </div>

            {/* Quick Form */}
            <div className="lg:col-span-6">
              {inquirySent ? (
                <div className={`p-8 rounded-2xl border text-center space-y-4 ${
                  darkMode ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                }`}>
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-500" />
                  <h3 className="text-lg font-bold">Inquiry Sent Successfully</h3>
                  <p className="text-xs">
                    Thank you! Umesh has received your inquiry for {service.title} and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none transition-colors ${
                          darkMode ? 'bg-zinc-950 border-white/10 focus:border-[#FF5722] text-white' : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none transition-colors ${
                          darkMode ? 'bg-zinc-950 border-white/10 focus:border-[#FF5722] text-white' : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1">Project Requirements</label>
                    <textarea
                      rows={3}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs outline-none transition-colors ${
                        darkMode ? 'bg-zinc-950 border-white/10 focus:border-[#FF5722] text-white' : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-xs font-bold text-white bg-[#FF5722] hover:bg-[#F4511E] rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#FF5722]/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Service Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Other Services Navigation Footer */}
        <div className="space-y-6 pt-8 border-t border-inherit">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Explore Other Engineering Capabilities
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-mono font-semibold text-[#FF5722] hover:underline flex items-center gap-1"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((other) => {
              const OtherIcon = ICON_MAP[other.icon] || Server;
              return (
                <button
                  key={other.id}
                  onClick={() => {
                    onSelectService(other.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 group flex items-start gap-3.5 ${
                    darkMode
                      ? 'bg-zinc-900/30 border-white/10 hover:border-[#FF5722]/40 hover:bg-zinc-900/60'
                      : 'bg-white border-black/10 hover:border-[#FF5722]/40 hover:shadow-xs'
                  }`}
                >
                  <div className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-[#FF5722]/10 text-[#FF5722] group-hover:scale-110 transition-transform">
                    <OtherIcon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`text-xs font-bold leading-snug group-hover:text-[#FF5722] transition-colors ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-950'
                    }`}>
                      {other.title}
                    </h4>
                    <p className={`text-[11px] line-clamp-2 leading-relaxed ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>
                      {other.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
