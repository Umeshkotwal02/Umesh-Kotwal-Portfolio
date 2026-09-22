import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Monitor,
  Smartphone,
  Headphones,
  ArrowRight,
  Server,
  CreditCard,
  Layout,
  Radio,
  Cloud,
  ShieldCheck,
  ShoppingBag,
  Bot,
  Video,
  MessageSquare,
  Layers,
  FileSpreadsheet,
  Bell,
  Wifi
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenAiModal: () => void;
  onOpenResumeModal: () => void;
  onSelectService?: (serviceId: string) => void;
  selectedServiceId?: string | null;
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

interface MegaMenuItem {
  id: string; // target service slug/id
  title: string;
  desc: string;
  tag: string;
  icon: any;
}

interface MegaMenuCategory {
  title: string;
  badge: string;
  categoryIcon: any;
  items: MegaMenuItem[];
}

// Tailored 2-Column Mega Menu for Umesh Kotwal's Core Engineering Pillars
const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    title: "Backend & Distributed Systems",
    badge: "HIGH-THROUGHPUT ARCHITECTURE",
    categoryIcon: Server,
    items: [
      {
        id: "microservices-architecture",
        title: "Microservices & API Architecture",
        desc: "Node.js, Prisma ORM, Redis sub-50ms cache & BullMQ DLQ queues",
        tag: "Node.js • Redis • BullMQ",
        icon: Server
      },
      {
        id: "stripe-connect-payments",
        title: "Payment Gateways & Stripe Connect",
        desc: "Multi-party payouts, 48h escrow timers, KYC & webhook idempotency",
        tag: "Stripe Connect • Escrow",
        icon: CreditCard
      },
      {
        id: "devops-cloud-automation",
        title: "Cloud Infrastructure & CI/CD",
        desc: "Docker containerization, AWS ECS tasks & automated Bitbucket pipelines",
        tag: "Docker • AWS • Pipelines",
        icon: Cloud
      }
    ]
  },
  {
    title: "Frontend & Real-Time Engineering",
    badge: "LOW-LATENCY CLIENTS",
    categoryIcon: Layout,
    items: [
      {
        id: "real-time-systems",
        title: "Real-Time Systems & WebSockets",
        desc: "Agora live audio/video streaming, WebSockets & Fabric.js PDF editors",
        tag: "WebSockets • Agora RTC",
        icon: Radio
      },
      {
        id: "custom-software-development",
        title: "Custom SaaS & Full-Stack Web",
        desc: "Next.js 15 App Router, high-traffic portals, ERPs & React 18 apps",
        tag: "Next.js 15 • React • SSR",
        icon: Layout
      },
      {
        id: "qa-software-testing",
        title: "QA & Automated Testing",
        desc: "Playwright E2E regression suites, Jest unit coverage & zero-bug delivery",
        tag: "Playwright • Jest • CI",
        icon: ShieldCheck
      }
    ]
  }
];

const BASE_NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Architecture", href: "#architecture" },
  { name: "Contact", href: "#contact" }
];

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenAiModal,
  onOpenResumeModal,
  onSelectService,
  selectedServiceId,
  onNavigate,
  currentPath
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleServiceClick = (serviceId: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(`/services/${serviceId}`);
    } else if (onSelectService) {
      onSelectService(serviceId);
    } else {
      window.location.hash = `#service/${serviceId}`;
    }
  };

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (e) e.preventDefault();
    if (onNavigate) {
      if (href.startsWith('#')) {
        const section = href.substring(1);
        if (currentPath && currentPath !== '/' && currentPath !== '') {
          onNavigate(`/${section === 'hero' ? '' : section}`);
        } else {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.hash = href;
          }
        }
      } else {
        onNavigate(href);
      }
    } else {
      if (selectedServiceId && onSelectService) {
        onSelectService('');
      }
      window.location.hash = href;
    }
  };

  const handleTalkToExpert = () => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    onOpenAiModal();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'projects', 'experience', 'skills', 'architecture', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        {/* Floating Capsule Bar */}
        <div
          className={`w-full rounded-full border px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 backdrop-blur-xl ${
            scrolled ? 'shadow-xl' : 'shadow-sm'
          } ${
            darkMode
              ? 'bg-[#09090b]/85 border-white/[0.08] shadow-black/50 text-zinc-200'
              : 'bg-white/85 border-black/[0.06] shadow-zinc-200/50 text-zinc-800'
          }`}
        >
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick('#hero', e)}
            className="flex items-center gap-2.5 group shrink-0"
            id="nav-logo"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs tracking-tighter transition-transform duration-200 group-hover:scale-105 border ${
                darkMode
                  ? 'bg-zinc-900 border-white/10 text-white shadow-inner'
                  : 'bg-zinc-900 text-white border-zinc-900'
              }`}
            >
              UK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs tracking-tight leading-none group-hover:opacity-80 transition-opacity">
                Umesh Kotwal
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-500 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available</span>
              </span>
            </div>
          </a>

          {/* Center: Navigation Links with Mega Menu Services Dropdown */}
          <nav className="hidden md:flex items-center gap-1">
            {/* About link */}
            <a
              href="#about"
              onClick={(e) => handleNavClick('#about', e)}
              className={`relative px-3 py-1.5 text-xs font-medium tracking-tight rounded-full transition-colors duration-200 ${
                activeSection === 'about' && !selectedServiceId
                  ? darkMode ? 'text-white' : 'text-zinc-950'
                  : darkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {activeSection === 'about' && !selectedServiceId && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className={`absolute inset-0 rounded-full ${
                    darkMode ? 'bg-white/[0.08]' : 'bg-black/[0.05]'
                  }`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">About</span>
            </a>

            {/* SERVICES MEGA MENU DROPDOWN (Hover Trigger - Styled like Image 2) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-services-dropdown-btn"
                onClick={() => {
                  if (selectedServiceId && onSelectService) {
                    onSelectService('');
                  }
                  const el = document.getElementById('services');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = '#services';
                  }
                }}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-tight rounded-full transition-colors duration-200 flex items-center gap-1 group ${
                  activeSection === 'services' || selectedServiceId || servicesDropdownOpen
                    ? darkMode ? 'text-white bg-white/[0.08]' : 'text-zinc-950 bg-black/[0.05]'
                    : darkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-zinc-600 hover:text-zinc-900'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#FF5722]' : 'text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200'
                  }`} />
                </span>
              </button>

              {/* Mega Menu Popup Modal Card (Tailored for Umesh Kotwal's Architecture) */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] lg:w-[820px] max-w-[calc(100vw-32px)] p-6 sm:p-7 pb-0 sm:pb-0 rounded-3xl border shadow-2xl backdrop-blur-2xl z-50 overflow-hidden ${
                      darkMode
                        ? 'bg-[#0d0e12]/98 border-white/10 shadow-black/95 text-zinc-100'
                        : 'bg-white/98 border-black/[0.08] shadow-2xl shadow-zinc-400/20 text-zinc-900'
                    }`}
                  >
                    {/* Two-Column Engineering Domains */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {MEGA_MENU_CATEGORIES.map((category, catIdx) => {
                        const HeaderIcon = category.categoryIcon;
                        return (
                          <div key={catIdx} className="space-y-3.5">
                            {/* Category Header: Soft Squircle + Title + Monospace Badge */}
                            <div className="flex items-center justify-between pb-1 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                              <div className="flex items-center gap-2.5">
                                <div className={`p-2 rounded-xl border flex items-center justify-center shrink-0 ${
                                  darkMode
                                    ? 'bg-[#FF5722]/10 border-[#FF5722]/20 text-[#FF5722]'
                                    : 'bg-[#FF5722]/10 border-[#FF5722]/20 text-[#FF5722]'
                                }`}>
                                  <HeaderIcon className="w-4 h-4" />
                                </div>
                                <h3 className={`text-sm font-bold tracking-tight ${
                                  darkMode ? 'text-zinc-100' : 'text-zinc-950'
                                }`}>
                                  {category.title}
                                </h3>
                              </div>
                              <span className="text-[9px] font-mono tracking-wider font-semibold text-zinc-500 uppercase">
                                {category.badge}
                              </span>
                            </div>

                            {/* Sub-Items List with Rich Engineering Details */}
                            <div className="space-y-1">
                              {category.items.map((item, itemIdx) => {
                                const ItemIcon = item.icon;
                                const isCurrent = selectedServiceId === item.id;

                                return (
                                  <button
                                    key={itemIdx}
                                    onClick={() => handleServiceClick(item.id)}
                                    className={`w-full py-2.5 px-3 rounded-2xl text-left transition-all duration-150 flex items-start gap-3 group/item ${
                                      isCurrent
                                        ? 'bg-[#FF5722]/10 border border-[#FF5722]/30 text-[#FF5722]'
                                        : darkMode
                                        ? 'hover:bg-white/[0.05] border border-transparent text-zinc-200 hover:text-white'
                                        : 'hover:bg-zinc-100/80 border border-transparent text-zinc-800 hover:text-zinc-950'
                                    }`}
                                  >
                                    <div className={`p-2 rounded-xl mt-0.5 shrink-0 transition-colors ${
                                      isCurrent
                                        ? 'bg-[#FF5722] text-white'
                                        : darkMode
                                        ? 'bg-zinc-800/80 text-zinc-300 group-hover/item:text-[#FF5722] group-hover/item:bg-[#FF5722]/10'
                                        : 'bg-zinc-100 text-zinc-600 group-hover/item:text-[#FF5722] group-hover/item:bg-[#FF5722]/10'
                                    }`}>
                                      <ItemIcon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-xs font-bold tracking-tight truncate group-hover/item:text-[#FF5722] transition-colors">
                                          {item.title}
                                        </span>
                                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all text-[#FF5722] shrink-0" />
                                      </div>
                                      <p className={`text-[11px] leading-snug line-clamp-1 mt-0.5 ${
                                        darkMode ? 'text-zinc-400' : 'text-zinc-500'
                                      }`}>
                                        {item.desc}
                                      </p>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-zinc-500/10 text-zinc-400 font-medium">
                                          {item.tag}
                                        </span>
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Signature Consultation Banner Tailored for Umesh */}
                    <div className={`-mx-6 sm:-mx-7 p-4 sm:p-5 mt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      darkMode
                        ? 'bg-zinc-900/90 border-white/[0.08]'
                        : 'bg-zinc-50/95 border-black/[0.06]'
                    }`}>
                      {/* Left: Avatar Monogram + Consultation Info */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722] font-mono font-bold text-xs">
                          UK
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className={`text-xs sm:text-sm font-bold tracking-tight ${
                              darkMode ? 'text-zinc-100' : 'text-zinc-950'
                            }`}>
                              Need Architectural Guidance or Technical Leadership?
                            </h4>
                            <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Online
                            </span>
                          </div>
                          <p className={`text-[11px] sm:text-xs mt-0.5 leading-tight ${
                            darkMode ? 'text-zinc-400' : 'text-zinc-500'
                          }`}>
                            Talk directly with Umesh Kotwal to assess system scale, bottlenecks, or delivery timelines.
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions in Umesh's Signature Brand Colors */}
                      <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                        <button
                          onClick={handleTalkToExpert}
                          className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 shadow-md shadow-[#FF5722]/20 hover:shadow-[#FF5722]/30 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>Consult Umesh</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav links */}
            {BASE_NAV_LINKS.slice(1).map((link) => {
              const isActive = activeSection === link.href.substring(1) && !selectedServiceId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-tight rounded-full transition-colors duration-200 ${
                    isActive
                      ? darkMode
                        ? 'text-white'
                        : 'text-zinc-950'
                      : darkMode
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute inset-0 rounded-full ${
                        darkMode ? 'bg-white/[0.08]' : 'bg-black/[0.05]'
                      }`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Actions (Resume, Dark Mode, AI Assistant, Mobile Hamburger) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Full Resume Modal Trigger */}
            <button
              onClick={onOpenResumeModal}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                darkMode
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  : 'bg-zinc-100/80 border-black/5 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
              title="Open full interactive resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5722]" />
              <span>Resume</span>
            </button>

            {/* AI Assistant Trigger Button */}
            <button
              onClick={onOpenAiModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-all duration-200 shadow-xs group"
              title="Chat with Umesh's AI Bot"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-200" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full border transition-all duration-200 ${
                darkMode
                  ? 'bg-zinc-900 border-white/10 text-amber-400 hover:bg-zinc-800'
                  : 'bg-zinc-100 border-black/10 text-zinc-700 hover:bg-zinc-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full border transition-all duration-200 ${
                darkMode
                  ? 'bg-zinc-900 border-white/10 text-zinc-300'
                  : 'bg-zinc-100 border-black/10 text-zinc-700'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mt-2 p-4 rounded-3xl border shadow-2xl backdrop-blur-2xl space-y-3 ${
                darkMode
                  ? 'bg-[#09090b]/98 border-white/10 text-zinc-200'
                  : 'bg-white/98 border-black/10 text-zinc-800'
              }`}
            >
              {/* Mobile Services Accordion (Showing Both Categories) */}
              <div className={`rounded-2xl border overflow-hidden ${
                darkMode ? 'bg-zinc-900/60 border-white/10' : 'bg-slate-50 border-black/10'
              }`}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full p-3.5 text-xs font-bold flex items-center justify-between text-left"
                >
                  <span className="flex items-center gap-2 text-[#FF5722]">
                    <Monitor className="w-4 h-4" />
                    <span>Our Services & Solutions (12)</span>
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${
                    mobileServicesOpen ? 'rotate-180 text-[#FF5722]' : ''
                  }`} />
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 space-y-3 border-t border-inherit pt-3">
                    {MEGA_MENU_CATEGORIES.map((category, catIdx) => (
                      <div key={catIdx} className="space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-400 px-1 mb-1">
                          {category.title}
                        </div>
                        {category.items.map((item, itemIdx) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={itemIdx}
                              onClick={() => handleServiceClick(item.id)}
                              className={`w-full p-2 text-xs rounded-xl flex items-center gap-2.5 text-left transition-all ${
                                selectedServiceId === item.id
                                  ? 'bg-[#FF5722]/20 text-[#FF5722] font-semibold'
                                  : darkMode
                                  ? 'hover:bg-white/5 text-zinc-300'
                                  : 'hover:bg-black/5 text-zinc-700'
                              }`}
                            >
                              <ItemIcon className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
                              <span className="truncate flex-1">{item.title}</span>
                              <ChevronRight className="w-3 h-3 text-zinc-400" />
                            </button>
                          );
                        })}
                      </div>
                    ))}

                    {/* Bottom Talk to Expert in Mobile Drawer */}
                    <button
                      onClick={handleTalkToExpert}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Headphones className="w-3.5 h-3.5" />
                      <span>Talk to an Expert</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Standard Nav Grid */}
              <div className="grid grid-cols-2 gap-2">
                {BASE_NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between cursor-pointer ${
                      darkMode ? 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200' : 'bg-black/[0.04] hover:bg-black/[0.08]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl border flex items-center justify-center gap-2 ${
                    darkMode
                      ? 'bg-white text-zinc-950 border-white'
                      : 'bg-zinc-900 text-white border-zinc-900'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Resume</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAiModal();
                  }}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl border flex items-center justify-center gap-2 ${
                    darkMode
                      ? 'bg-zinc-900 border-white/10 text-zinc-200'
                      : 'bg-zinc-100 border-black/10 text-zinc-800'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Ask AI Assistant</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
