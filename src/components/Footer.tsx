import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MessageCircle, ExternalLink, Shield, Mail, Phone, MapPin, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [localTime, setLocalTime] = useState('');

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
                  { name: 'Architectural Works', href: '#projects' },
                  { name: 'Production Experience', href: '#experience' },
                  { name: 'Core Skillset', href: '#skills' },
                  { name: 'Live Architecture Simulator', href: '#simulator' },
                  { name: 'Verified Achievements', href: '#achievements' },
                  { name: 'Client Testimonials', href: '#testimonials' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`transition-colors duration-150 hover:text-[#FF5722] flex items-center gap-1.5 ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      <span className="text-[10px] opacity-40">/</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Core Architecture Stack */}
            <div className="lg:col-span-3 space-y-3">
              <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-900'}`}>
                System Architecture
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Node.js Microservices',
                  'BullMQ & DLQ',
                  'Redis Sub-10ms Cache',
                  'Next.js 14 App Router',
                  'PostgreSQL ACID Locks',
                  'Stripe Connect Payouts',
                  'Nginx Ingress Proxy',
                  'Docker Containers',
                  'Agora RTC Streams',
                ].map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-lg border ${
                      darkMode
                        ? 'bg-zinc-900/50 border-white/[0.06] text-zinc-300'
                        : 'bg-white border-black/[0.06] text-zinc-700 shadow-2xs'
                    }`}
                  >
                    {tech}
                  </span>
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

          {/* Top of Footer Watermark (inspired directly by Image 3) */}
          <div className="pt-8 pb-4 border-t border-dashed" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
            <div className="text-center overflow-hidden select-none pointer-events-none py-4">
              <p className={`text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.04em] whitespace-nowrap transition-colors ${
                darkMode ? 'text-zinc-900/90' : 'text-zinc-200/80'
              }`}>
                UMESH KOTWAL • FULL STACK
              </p>
            </div>
          </div>

          {/* Footer Bottom Line (Matching Image 3 copyright + legal links) */}
          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono ${
            darkMode ? 'border-white/[0.06] text-zinc-400' : 'border-black/[0.06] text-zinc-500'
          }`}>
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} Umesh Kotwal. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Terms & Conditions
              </a>
              <span className="opacity-30">•</span>
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Privacy Policy
              </a>
              <span className="opacity-30">•</span>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Disclaimer
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


