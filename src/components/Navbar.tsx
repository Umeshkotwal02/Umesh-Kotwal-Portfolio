import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  Terminal
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenAiModal: () => void;
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
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
  onOpenResumeModal
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'architecture', 'contact'];
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
    return () => window.removeEventListener('scroll', handleScroll);
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
              ? 'bg-[#09090b]/80 border-white/[0.08] shadow-black/50 text-zinc-200'
              : 'bg-white/80 border-black/[0.06] shadow-zinc-200/50 text-zinc-800'
          }`}
        >
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
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

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-colors duration-200 ${
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

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* AI Assistant Pill */}
            <button
              onClick={onOpenAiModal}
              className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                darkMode
                  ? 'bg-white/[0.04] border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] hover:text-white'
                  : 'bg-black/[0.03] border-black/[0.06] text-zinc-700 hover:bg-black/[0.06] hover:text-zinc-950'
              }`}
              title="Ask AI Assistant about Umesh"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Ask AI</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                darkMode
                  ? 'bg-zinc-900 border-white/[0.1] text-zinc-200 hover:bg-zinc-800 hover:text-white'
                  : 'bg-zinc-100 border-black/[0.08] text-zinc-800 hover:bg-zinc-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Nomu-style Signature Coral CTA */}
            <a
              href="#contact"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 transition-all duration-200 rounded-full flex items-center gap-1.5 shadow-md shadow-[#FF5722]/25"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform hover:scale-105 duration-200 ${
                darkMode
                  ? 'bg-zinc-900 border-white/10 text-amber-400 hover:bg-zinc-800'
                  : 'bg-white border-black/10 text-zinc-700 hover:bg-zinc-100'
              }`}
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full border transition-colors ${
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
                  ? 'bg-[#09090b]/95 border-white/10 text-zinc-200'
                  : 'bg-white/95 border-black/10 text-zinc-800'
              }`}
            >
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl flex items-center justify-between ${
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


