import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MessageCircle, ExternalLink, Shield, Mail, Phone, MapPin, Building, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  onOpenResumeModal?: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenResumeModal, onNavigate }) => {
  const [localTime, setLocalTime] = useState('');
  const [activeCursor, setActiveCursor] = useState<'reticle' | 'minimal' | 'difference'>('reticle');

  useEffect(() => {
    const saved = localStorage.getItem('uk_cursor_mode') as 'reticle' | 'minimal' | 'difference';
    if (saved && (saved === 'reticle' || saved === 'minimal' || saved === 'difference')) {
      setActiveCursor(saved);
    }

    const handleStyleChange = (e: any) => {
      if (e.detail && ['reticle', 'minimal', 'difference'].includes(e.detail)) {
        setActiveCursor(e.detail);
      }
    };
    window.addEventListener('cursor-style-change', handleStyleChange);
    return () => window.removeEventListener('cursor-style-change', handleStyleChange);
  }, []);

  const handleCursorChange = (mode: 'reticle' | 'minimal' | 'difference') => {
    setActiveCursor(mode);
    localStorage.setItem('uk_cursor_mode', mode);
    window.dispatchEvent(new CustomEvent('cursor-style-change', { detail: mode }));
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/916352001332?text=${encodeURIComponent(
    'Hi Umesh, I came across your portfolio and would like to connect regarding an engineering role/project.'
  )}`;

  return (
    <>
      <footer className={`pt-20 pb-12 relative border-t overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#09090b] border-white/[0.08] text-zinc-400' : 'bg-zinc-50/70 border-black/[0.06] text-zinc-600'
      }`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Col 1: Brand & Professional Profile */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center font-mono font-bold text-sm tracking-tight ${
                  darkMode ? 'bg-zinc-900 border-white/[0.1] text-white shadow-inner' : 'bg-zinc-950 text-white border-zinc-900 shadow-md'
                }`}>
                  UK
                </div>
                <div>
                  <h3 className={`text-base font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                    Umesh Kotwal
                  </h3>
                  <p className="text-xs font-mono text-[#FF5722] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                    <span>Full-Stack Software Engineer</span>
                  </p>
                </div>
              </div>

              <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Full Stack Developer & Microservices Lead specializing in high-throughput Node.js microservices, BullMQ queues with zero data loss, and scalable Next.js web applications.
              </p>

              {/* Live Location / Time */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono ${
                darkMode ? 'bg-zinc-900/60 border-white/[0.08] text-zinc-300' : 'bg-white border-black/[0.06] text-zinc-700 shadow-xs'
              }`}>
                <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Surat, India (IST): <strong className={darkMode ? 'text-zinc-100' : 'text-zinc-950'}>{localTime}</strong></span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-3">
              <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-900'}`}>
                Quick Navigation
              </p>
              <ul className="space-y-2 text-xs">
                {[
                  { name: 'Core Overview & Bio', href: '/about' },
                  { name: 'Architectural Works', href: '/projects' },
                  { name: 'Production Experience', href: '/experience' },
                  { name: 'Engineering Services', href: '/services' },
                  { name: 'Core Skillset', href: '/skills' },
                  { name: 'Architecture Simulator', href: '/simulator' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'HTML Sitemap', href: '/sitemap' },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate(item.href);
                        } else {
                          window.location.href = item.href;
                        }
                      }}
                      className={`transition-colors duration-150 hover:text-[#FF5722] flex items-center gap-1.5 text-left cursor-pointer ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      <span className="text-[10px] opacity-40">/</span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-150 hover:text-[#FF5722] flex items-center gap-1.5 ${
                      darkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    <span className="text-[10px] opacity-40">/</span>
                    <span className="inline-flex items-center gap-1 font-mono">
                      <span>XML Sitemap</span>
                      <span className="text-[10px] px-1 py-0.2 rounded bg-[#FF5722]/10 text-[#FF5722] font-semibold">SEO</span>
                    </span>
                  </a>
                </li>
                {onOpenResumeModal && (
                  <li>
                    <button
                      type="button"
                      onClick={onOpenResumeModal}
                      className={`transition-colors duration-150 hover:text-[#FF5722] flex items-center gap-1.5 text-xs text-left cursor-pointer ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      <span className="text-[10px] opacity-40">/</span>
                      <span className="font-semibold text-[#FF5722]">Download Resume (CV)</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Col 3: Core Architecture Stack & Specialized Services */}
            <div className="lg:col-span-3 space-y-3">
              <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-900'}`}>
                Services & System Architecture
              </p>
              <div className="flex flex-col gap-1.5 text-xs">
                {[
                  { name: 'Microservices & API Architecture', slug: 'microservices-architecture' },
                  { name: 'Payment Gateways & Stripe Connect', slug: 'stripe-connect-payments' },
                  { name: 'DevOps & Cloud Automation', slug: 'devops-cloud-automation' },
                  { name: 'Real-Time WebSockets & Agora', slug: 'realtime-websockets-agora' },
                  { name: 'Full Stack SaaS Platforms', slug: 'fullstack-saas-engineering' },
                  { name: 'QA Automation & Zero-Bug Delivery', slug: 'qa-automation-testing' },
                ].map((serv) => (
                  <button
                    key={serv.slug}
                    type="button"
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate(`/services/${serv.slug}`);
                      } else {
                        window.location.href = `/services/${serv.slug}`;
                      }
                    }}
                    className={`text-left transition-colors duration-150 hover:text-[#FF5722] py-1 border-b text-[11px] font-mono flex items-center justify-between cursor-pointer group ${
                      darkMode ? 'border-white/[0.04] text-zinc-400' : 'border-black/[0.04] text-zinc-600'
                    }`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform truncate">{serv.name}</span>
                    <span className="text-[#FF5722] opacity-0 group-hover:opacity-100 text-[10px]">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Col 4: Direct Inquiries */}
            <div className="lg:col-span-2 space-y-3">
              <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-900'}`}>
                Get In Touch
              </p>
              <div className="space-y-2 text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block hover:text-[#FF5722] transition-colors truncate"
                  title={PERSONAL_INFO.email}
                >
                  <span className="text-[10px] text-zinc-500 block">Email:</span>
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="block hover:text-[#FF5722] transition-colors"
                >
                  <span className="text-[10px] text-zinc-500 block">Phone:</span>
                  <span className="font-mono">{PERSONAL_INFO.phone}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-500 hover:text-emerald-400 font-medium transition-colors pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Modern Infinite Architectural Typography Ribbon */}
          <div className="pt-10 pb-6 border-t border-dashed" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
            {/* Tech Spec Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-[10px] font-mono tracking-widest uppercase">
              <div className="flex items-center gap-2 text-[#FF5722] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping" />
                <span>// ENTERPRISE ARCHITECTURE & FULL STACK SYSTEMS</span>
              </div>
              <div className="text-zinc-500 hidden sm:block">
                NODE.JS • REDIS CACHING • BULLMQ DLQ • STRIPE CONNECT • NEXT.JS 15
              </div>
              <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SURAT / DUBAI • AVAILABLE FOR HIRE</span>
              </div>
            </div>

            {/* Seamless Infinite Marquee with Outline & Solid Typography and Kinetic Hover Animations */}
            <div
              className="relative overflow-hidden py-8 select-none group cursor-pointer"
              data-cursor="FULL STACK"
            >
              {/* Subtle edge fade masks */}
              <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r ${
                darkMode ? 'from-[#09090b] to-transparent' : 'from-[#fafafa] to-transparent'
              }`} />
              <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l ${
                darkMode ? 'from-[#09090b] to-transparent' : 'from-[#fafafa] to-transparent'
              }`} />

              <div className="animate-marquee flex items-center gap-10">
                {/* Loop Chunk 1 */}
                <div className="flex items-center gap-8 sm:gap-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] whitespace-nowrap">
                  {/* 1. FULL STACK DEVELOP */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-[#FF5722] shadow-lg shadow-[#FF5722]/40 whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>⚡ ARCHITECT & LEAD ENGINEER</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-800 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.7)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.5)]'
                    }`}>
                      FULL STACK DEVELOP
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>

                  {/* 2. UMESH KOTWAL */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-zinc-900 border border-[#FF5722]/50 shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>✦ 5+ YRS DISTRIBUTED SYSTEMS</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block text-stroke-subtle group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-700 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.8)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.6)]'
                    }`}>
                      UMESH KOTWAL
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>

                  {/* 3. FULL STACK DEVELOPER */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-[#FF5722] shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                      <span>🚀 NODE.JS • REACT • MICROSERVICES</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-800 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.7)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.5)]'
                    }`}>
                      FULL STACK DEVELOPER
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>

                  {/* 4. UMESH KOTWAL */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-[#FF5722] shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>⚡ ZERO DATA LOSS ARCHITECT</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block text-stroke-subtle group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-700 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.8)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.6)]'
                    }`}>
                      UMESH KOTWAL
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>
                </div>

                {/* Loop Chunk 2 (Identical for seamless infinite wrapping) */}
                <div className="flex items-center gap-8 sm:gap-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] whitespace-nowrap" aria-hidden="true">
                  {/* 1. FULL STACK DEVELOP */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-[#FF5722] shadow-lg shadow-[#FF5722]/40 whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>⚡ ARCHITECT & LEAD ENGINEER</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-800 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.7)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.5)]'
                    }`}>
                      FULL STACK DEVELOP
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>

                  {/* 2. UMESH KOTWAL */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-zinc-900 border border-[#FF5722]/50 shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>✦ 5+ YRS DISTRIBUTED SYSTEMS</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block text-stroke-subtle group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-700 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.8)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.6)]'
                    }`}>
                      UMESH KOTWAL
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>

                  {/* 3. FULL STACK DEVELOPER */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-[#FF5722] shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                      <span>🚀 NODE.JS • REACT • MICROSERVICES</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-800 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.7)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.5)]'
                    }`}>
                      FULL STACK DEVELOPER
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>

                  {/* 4. UMESH KOTWAL */}
                  <div className="relative group/item inline-flex items-center">
                    <span className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 -translate-y-1 group-hover/item:translate-y-0 transition-all duration-300 pointer-events-none z-20 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white bg-[#FF5722] shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>⚡ ZERO DATA LOSS ARCHITECT</span>
                    </span>
                    <span className={`transition-all duration-300 cursor-pointer inline-block text-stroke-subtle group-hover/item:scale-105 group-hover/item:tracking-wider ${
                      darkMode ? 'text-zinc-700 hover:text-[#FF5722] hover:drop-shadow-[0_0_30px_rgba(255,87,34,0.8)]' : 'text-zinc-300 hover:text-[#FF5722] hover:drop-shadow-[0_0_20px_rgba(255,87,34,0.6)]'
                    }`}>
                      UMESH KOTWAL
                    </span>
                  </div>

                  {/* Animated Star */}
                  <span className="text-[#FF5722] font-mono text-xl sm:text-3xl opacity-80 hover:rotate-180 hover:scale-150 transition-all duration-500 cursor-pointer inline-block">
                    ✦
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Line with Cursor Style Switcher + Copyright + Legal */}
          <div className={`pt-6 border-t flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] font-mono ${
            darkMode ? 'border-white/[0.06] text-zinc-400' : 'border-black/[0.06] text-zinc-500'
          }`}>
            <div className="flex flex-wrap items-center gap-3">
              <span>© {new Date().getFullYear()} Umesh Kotwal. All Rights Reserved.</span>

              {/* Cursor Style Switcher */}
              <div className="hidden md:flex items-center gap-1.5 pl-3 border-l border-zinc-500/20">
                <span className="text-zinc-500 flex items-center gap-1 text-[10px]">
                  <Sparkles className="w-2.5 h-2.5 text-[#FF5722]" />
                  <span>Cursor:</span>
                </span>
                <div className={`inline-flex p-0.5 rounded-md border ${
                  darkMode ? 'border-white/10 bg-zinc-900/90' : 'border-black/10 bg-zinc-100'
                }`}>
                  <button
                    onClick={() => handleCursorChange('reticle')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      activeCursor === 'reticle'
                        ? 'bg-[#FF5722] text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                    title="Precision Reticle with Signature Orange Core & Crosshair Ticks"
                  >
                    Reticle
                  </button>
                  <button
                    onClick={() => handleCursorChange('minimal')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      activeCursor === 'minimal'
                        ? 'bg-[#FF5722] text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                    title="Sleek Minimal Floating Ring"
                  >
                    Minimal
                  </button>
                  <button
                    onClick={() => handleCursorChange('difference')}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      activeCursor === 'difference'
                        ? 'bg-[#FF5722] text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                    title="Difference Invert Blend Mode Lens"
                  >
                    Invert
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('/terms');
                  } else {
                    window.location.href = '/terms';
                  }
                }}
                className="hover:text-[#FF5722] transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="opacity-30">•</span>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('/privacy');
                  } else {
                    window.location.href = '/privacy';
                  }
                }}
                className="hover:text-[#FF5722] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="opacity-30">•</span>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('/sitemap');
                  } else {
                    window.location.href = '/sitemap';
                  }
                }}
                className="hover:text-[#FF5722] transition-colors cursor-pointer"
              >
                HTML Sitemap
              </button>
              <span className="opacity-30">•</span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF5722] transition-colors font-mono font-medium"
                title="Google XML Sitemap"
              >
                XML Sitemap
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-full border transition-all ${
                darkMode
                  ? 'bg-zinc-900 border-white/[0.08] text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800'
                  : 'bg-white border-black/[0.06] text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 shadow-xs'
              }`}
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action with Attractive Animated Glow & Label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talk on WhatsApp with Umesh"
        className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer select-none"
      >
        {/* Animated pill badge */}
        <div className="mr-3 px-3.5 py-1.5 rounded-full bg-zinc-900/95 text-white text-xs font-semibold backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-2 transition-all duration-300 group-hover:scale-105 group-hover:border-[#25D366]/40">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="whitespace-nowrap font-display">Talk on WhatsApp</span>
        </div>

        {/* Circular WhatsApp Button with Pulse Animation */}
        <div className="relative">
          {/* Radiating radar rings */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/50 animate-ping pointer-events-none" />
          <span className="absolute -inset-2.5 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

          {/* Main button circle */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/40 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
            {/* Authentic WhatsApp vector logo */}
            <svg
              className="w-7 h-7 fill-white transition-transform group-hover:rotate-12 duration-300"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </a>
    </>
  );
};


