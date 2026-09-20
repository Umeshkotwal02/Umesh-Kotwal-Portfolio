import React from 'react';
import { motion } from 'motion/react';
import { RotateCw, Pause, Play, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesFlipGridProps {
  darkMode: boolean;
  onFlipBack: () => void;
  autoFlipEnabled: boolean;
  onToggleAutoFlip: () => void;
}

export const ServicesFlipGrid: React.FC<ServicesFlipGridProps> = ({
  darkMode,
  onFlipBack,
  autoFlipEnabled,
  onToggleAutoFlip,
}) => {
  const services = [
    {
      id: 'erp',
      title: 'ERP',
      subtitle: 'Enterprise Resource Planning',
      bgLight: 'bg-teal-50/90 border-teal-100 hover:bg-teal-100/70',
      bgDark: 'bg-teal-950/40 border-teal-800/40 hover:bg-teal-900/40',
      textLight: 'text-teal-950',
      textDark: 'text-teal-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* 3D colorful Pie & Bar chart from screenshot */}
          <circle cx="24" cy="24" r="18" fill="#38bdf8" fillOpacity="0.25" />
          <path d="M24 6 A18 18 0 0 1 42 24 L24 24 Z" fill="#0284c7" />
          <path d="M24 24 L42 24 A18 18 0 0 1 24 42 Z" fill="#38bdf8" />
          <path d="M24 24 L24 42 A18 18 0 0 1 6 24 Z" fill="#0ea5e9" />
          {/* Offset 3D pie slice */}
          <path d="M22 22 L7 22 A18 18 0 0 1 22 7 Z" fill="#fbbf24" className="translate-x-[-2px] translate-y-[-2px]" />
          {/* Bar indicator */}
          <rect x="33" y="14" width="7" height="20" rx="3" fill="#f59e0b" />
          <rect x="38" y="20" width="7" height="14" rx="3" fill="#38bdf8" />
        </svg>
      ),
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      subtitle: 'Stores & Checkout Architecture',
      bgLight: 'bg-sky-50/90 border-sky-100 hover:bg-sky-100/70',
      bgDark: 'bg-sky-950/40 border-sky-800/40 hover:bg-sky-900/40',
      textLight: 'text-sky-950',
      textDark: 'text-sky-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Shopping cart with green grocery basket from screenshot */}
          <path d="M8 12 H14 L18 30 H36 L40 16 H16" fill="none" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="21" cy="36" r="3.5" fill="#0284c7" />
          <circle cx="34" cy="36" r="3.5" fill="#0284c7" />
          {/* Basket contents */}
          <rect x="21" y="18" width="14" height="9" rx="2" fill="#10b981" />
          <path d="M24 18 V15 A3 3 0 0 1 32 15 V18" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'customsoftware',
      title: 'Customer Software',
      subtitle: 'Development',
      bgLight: 'bg-sky-50/90 border-sky-100 hover:bg-sky-100/70',
      bgDark: 'bg-sky-950/40 border-sky-800/40 hover:bg-sky-900/40',
      textLight: 'text-sky-950',
      textDark: 'text-sky-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Code browser card with sparkles from screenshot */}
          <rect x="7" y="10" width="34" height="26" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
          <rect x="10" y="13" width="28" height="4" fill="#0369a1" rx="1.5" />
          <text x="24" y="29" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">&lt; / &gt;</text>
          {/* Sparkles */}
          <path d="M39 10 L40 7 L43 6 L40 5 L39 2 L38 5 L35 6 L38 7 Z" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: 'qatesting',
      title: 'QA & Testing',
      subtitle: 'Software Test Automation',
      bgLight: 'bg-emerald-50/90 border-emerald-100 hover:bg-emerald-100/70',
      bgDark: 'bg-emerald-950/40 border-emerald-800/40 hover:bg-emerald-900/40',
      textLight: 'text-emerald-950',
      textDark: 'text-emerald-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          <path
            d="M24 7 L39 12 V23 C39 31.5 29.5 39 24 41 C18.5 39 9 31.5 9 23 V12 Z"
            fill="#34d399"
            fillOpacity="0.25"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M17 23.5 L21.5 28 L31 18.5" fill="none" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="37" cy="12" r="5" fill="#0284c7" />
          <text x="37" y="15" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="monospace">QA</text>
        </svg>
      ),
    },
    {
      id: 'crm',
      title: 'CRM',
      subtitle: 'Client & Pipeline Management',
      bgLight: 'bg-rose-50/90 border-rose-100 hover:bg-rose-100/70',
      bgDark: 'bg-rose-950/40 border-rose-800/40 hover:bg-rose-900/40',
      textLight: 'text-rose-950',
      textDark: 'text-rose-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* ID Card with notification badge '1' from screenshot */}
          <rect x="6" y="10" width="36" height="28" rx="6" fill="#38bdf8" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="2.5" />
          <circle cx="17" cy="22" r="5" fill="#0ea5e9" />
          <rect x="25" y="18" width="12" height="3" rx="1.5" fill="#0284c7" />
          <rect x="25" y="24" width="9" height="3" rx="1.5" fill="#38bdf8" />
          <rect x="12" y="30" width="24" height="2.5" rx="1" fill="#94a3b8" />
          {/* Red notification badge '1' */}
          <circle cx="38" cy="11" r="5.5" fill="#ef4444" />
          <text x="38" y="14.5" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">1</text>
        </svg>
      ),
    },
    {
      id: 'webapp',
      title: 'Web Application',
      subtitle: 'Development',
      bgLight: 'bg-cyan-50/90 border-cyan-100 hover:bg-cyan-100/70',
      bgDark: 'bg-cyan-950/40 border-cyan-800/40 hover:bg-cyan-900/40',
      textLight: 'text-cyan-950',
      textDark: 'text-cyan-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Blue cog gear with golden sparkles from screenshot */}
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#38bdf8" fillOpacity="0.15" />
          <circle cx="24" cy="24" r="10" fill="#0ea5e9" />
          <circle cx="24" cy="24" r="4.5" fill="#ffffff" />
          {/* Gear teeth */}
          <rect x="22" y="10" width="4" height="5" rx="1.5" fill="#0284c7" />
          <rect x="22" y="33" width="4" height="5" rx="1.5" fill="#0284c7" />
          <rect x="10" y="22" width="5" height="4" rx="1.5" fill="#0284c7" />
          <rect x="33" y="22" width="5" height="4" rx="1.5" fill="#0284c7" />
          {/* Sparkles */}
          <path d="M38 12 L39 9 L42 8 L39 7 L38 4 L37 7 L34 8 L37 9 Z" fill="#fbbf24" />
          <path d="M38 38 L39 36 L41 35 L39 34 L38 32 L37 34 L35 35 L37 36 Z" fill="#f59e0b" />
        </svg>
      ),
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      subtitle: 'Pixel-Perfect Interfaces',
      bgLight: 'bg-blue-50/90 border-blue-100 hover:bg-blue-100/70',
      bgDark: 'bg-blue-950/40 border-blue-800/40 hover:bg-blue-900/40',
      textLight: 'text-blue-950',
      textDark: 'text-blue-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Browser window wireframe with pen drafting from screenshot */}
          <rect x="7" y="11" width="32" height="24" rx="5" fill="#ffffff" stroke="#3b82f6" strokeWidth="2.5" />
          <path d="M7 18 H39" stroke="#93c5fd" strokeWidth="2" />
          <circle cx="12" cy="14.5" r="1.5" fill="#ef4444" />
          <circle cx="16" cy="14.5" r="1.5" fill="#f59e0b" />
          <circle cx="20" cy="14.5" r="1.5" fill="#10b981" />
          <rect x="12" y="22" width="12" height="8" rx="2" fill="#dbeafe" />
          <rect x="27" y="22" width="9" height="2" fill="#93c5fd" />
          <rect x="27" y="26" width="7" height="2" fill="#93c5fd" />
          {/* Drafting pencil */}
          <path d="M26 36 L39 23 L42 26 L29 39 Z" fill="#38bdf8" />
          <polygon points="26,36 24,41 29,39" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      subtitle: 'AWS & Microservices',
      bgLight: 'bg-purple-50/90 border-purple-100 hover:bg-purple-100/70',
      bgDark: 'bg-purple-950/40 border-purple-800/40 hover:bg-purple-900/40',
      textLight: 'text-purple-950',
      textDark: 'text-purple-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Cloud with sparkles from screenshot */}
          <path
            d="M17 33 H34 A9 9 0 0 0 34 15 A12 12 0 0 0 13 22 A7.5 7.5 0 0 0 17 33 Z"
            fill="#ffffff"
            stroke="#0284c7"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Sparkles */}
          <path d="M37 13 L38 9 L42 8 L38 7 L37 3 L36 7 L32 8 L36 9 Z" fill="#f59e0b" />
          <path d="M12 17 L13 14 L16 13 L13 12 L12 9 L11 12 L8 13 L11 14 Z" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: 'systemmaint',
      title: 'System',
      subtitle: 'Maintenance',
      bgLight: 'bg-emerald-50/90 border-emerald-100 hover:bg-emerald-100/70',
      bgDark: 'bg-emerald-950/40 border-emerald-800/40 hover:bg-emerald-900/40',
      textLight: 'text-emerald-950',
      textDark: 'text-emerald-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Mint green shield with checkmark & sparkles from screenshot */}
          <path
            d="M24 8 L38 13 V23 C38 31 29 38 24 40 C19 38 10 31 10 23 V13 Z"
            fill="#34d399"
            fillOpacity="0.25"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M18 23 L22 27 L30 19" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 11 L39 8 L42 7 L39 6 L38 3 L37 6 L34 7 L37 8 Z" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: 'softwaremaint',
      title: 'Software',
      subtitle: 'Maintenance',
      bgLight: 'bg-blue-50/90 border-blue-100 hover:bg-blue-100/70',
      bgDark: 'bg-blue-950/40 border-blue-800/40 hover:bg-blue-900/40',
      textLight: 'text-blue-950',
      textDark: 'text-blue-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Soft blue shield with vibrant green checkmark from screenshot */}
          <path
            d="M24 7 L39 12 V23 C39 31.5 29.5 39 24 41 C18.5 39 9 31.5 9 23 V12 Z"
            fill="#60a5fa"
            fillOpacity="0.25"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M18 23.5 L22.5 28 L30.5 19" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37 13 L38 10 L41 9 L38 8 L37 5 L36 8 L33 9 L36 10 Z" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: 'hrms',
      title: 'HRMS',
      subtitle: 'Workforce & Attendance',
      bgLight: 'bg-blue-50/90 border-blue-100 hover:bg-blue-100/70',
      bgDark: 'bg-blue-950/40 border-blue-800/40 hover:bg-blue-900/40',
      textLight: 'text-blue-950',
      textDark: 'text-blue-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* HRMS 3 avatar group from screenshot */}
          {/* Center Blue User */}
          <circle cx="24" cy="18" r="6" fill="#0284c7" />
          <path d="M15 36 C15 28 20 27 24 27 C28 27 33 28 33 36 Z" fill="#0284c7" />
          {/* Left Green User */}
          <circle cx="14" cy="22" r="4.5" fill="#10b981" />
          <path d="M7 36 C7 31 11 30 14 30 C16 30 19 31 20 33" fill="#10b981" />
          {/* Right Yellow/Orange User */}
          <circle cx="34" cy="22" r="4.5" fill="#f59e0b" />
          <path d="M41 36 C41 31 37 30 34 30 C32 30 29 31 28 33" fill="#f59e0b" />
        </svg>
      ),
    },
    {
      id: 'itsupport',
      title: 'IT Support &',
      subtitle: 'Consultancy',
      bgLight: 'bg-violet-50/90 border-violet-100 hover:bg-violet-100/70',
      bgDark: 'bg-violet-950/40 border-violet-800/40 hover:bg-violet-900/40',
      textLight: 'text-violet-950',
      textDark: 'text-violet-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Headset support agent from screenshot */}
          <circle cx="24" cy="22" r="8" fill="#fed7aa" />
          <path d="M12 38 C12 30 18 29 24 29 C30 29 36 30 36 38 Z" fill="#38bdf8" />
          {/* Blue Headset */}
          <path d="M14 22 A10 10 0 0 1 34 22" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
          <rect x="12" y="19" width="4" height="8" rx="2" fill="#1d4ed8" />
          <rect x="32" y="19" width="4" height="8" rx="2" fill="#1d4ed8" />
          <path d="M34 25 C34 29 30 32 26 32 H24" fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="23" cy="32" r="2" fill="#ef4444" />
          {/* Yellow conversation bubble */}
          <circle cx="38" cy="14" r="4" fill="#fbbf24" />
        </svg>
      ),
    },
    {
      id: 'woocommerce',
      title: 'WooCommerce',
      subtitle: '& Shopify Expert',
      bgLight: 'bg-fuchsia-50/90 border-fuchsia-100 hover:bg-fuchsia-100/70',
      bgDark: 'bg-fuchsia-950/40 border-fuchsia-800/40 hover:bg-fuchsia-900/40',
      textLight: 'text-fuchsia-950',
      textDark: 'text-fuchsia-100',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8 drop-shadow-xs">
          {/* Purple WooCommerce pill + Shopping badge */}
          <rect x="7" y="12" width="34" height="24" rx="8" fill="#9333ea" />
          <text x="24" y="27" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Woo</text>
          {/* Little shopping bag badge */}
          <circle cx="36" cy="32" r="6" fill="#f59e0b" />
          <text x="36" y="35.5" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">S</text>
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`absolute inset-0 w-full h-full rounded-3xl border p-4 sm:p-5 space-y-3 backdrop-blur-xl backface-hidden rotate-y-180 flex flex-col justify-between overflow-y-auto transition-all duration-300 ${
        darkMode
          ? 'bg-zinc-950/95 border-[#FF5722]/35 shadow-2xl shadow-black/80'
          : 'bg-white/98 border-[#FF5722]/30 shadow-xl shadow-orange-100/70'
      }`}
    >
      {/* Top Bar for Services Flip View */}
      <div
        className="flex items-center justify-between text-[11px] font-mono border-b pb-2 shrink-0"
        style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping" />
          <span className="font-semibold text-[#FF5722] tracking-tight">
            SERVICES WE PROVIDE
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Auto-flip status indicator & pause toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleAutoFlip();
            }}
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1 transition-colors ${
              autoFlipEnabled
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700'
            }`}
            title={autoFlipEnabled ? 'Auto-flip is active (every 2.5s). Click to pause.' : 'Auto-flip is paused. Click to enable.'}
          >
            {autoFlipEnabled ? (
              <>
                <Pause className="w-2.5 h-2.5" />
                <span>Auto: 2.5s</span>
              </>
            ) : (
              <>
                <Play className="w-2.5 h-2.5" />
                <span>Paused</span>
              </>
            )}
          </button>

          {/* Flip to Photo Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFlipBack();
            }}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] transition-all duration-200 flex items-center gap-1 shadow-2xs cursor-pointer active:scale-95"
            title="Flip back to profile photo"
          >
            <RotateCw className="w-3 h-3" />
            <span>Photo ↺</span>
          </button>
        </div>
      </div>

      {/* Enterprise Affiliation Center Badge */}
      <div
        className={`px-3 py-1.5 rounded-xl border flex items-center justify-between gap-2 shrink-0 ${
          darkMode
            ? 'bg-zinc-900/60 border-white/[0.08]'
            : 'bg-orange-50/60 border-orange-200/50'
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Engineering studio logo icon */}
          <div className="w-5 h-5 rounded-md bg-white p-0.5 shadow-2xs flex items-center justify-center">
            <span className="font-bold text-[10px] text-[#FF5722] leading-none">UK</span>
          </div>
          <div>
            <div className="text-[11px] font-bold font-display tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
              Full-Stack Engineering Studio
            </div>
            <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400">
              High-Throughput Systems • Microservices & Web
            </div>
          </div>
        </div>

        <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20">
          12+ Solutions
        </span>
      </div>

      {/* Grid of Soft Colorful Rounded Tiles (Direct Match with Screenshot 2) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 flex-1 overflow-y-auto pr-0.5 py-1">
        {services.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.04, y: -2 }}
            transition={{ duration: 0.18 }}
            className={`p-2 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-200 shadow-xs cursor-pointer ${
              darkMode ? item.bgDark : item.bgLight
            }`}
          >
            {/* 3D Styled Icon */}
            <div className="mb-1 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Label */}
            <div className={`font-display text-[11px] font-bold leading-tight ${
              darkMode ? item.textDark : item.textLight
            }`}>
              {item.title}
            </div>
            <div className={`text-[9px] leading-tight font-medium opacity-80 mt-0.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-500'
            }`}>
              {item.subtitle}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Action Strip */}
      <div
        className="pt-2 flex items-center justify-between gap-2 border-t shrink-0"
        style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onFlipBack();
          }}
          className={`text-[11px] font-mono font-medium flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-lg border ${
            darkMode
              ? 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-white'
              : 'bg-zinc-100 border-black/10 text-zinc-700 hover:text-zinc-950'
          }`}
        >
          <RotateCw className="w-3 h-3 text-[#FF5722]" />
          <span>Flip to Portrait</span>
        </button>

        <a
          href="#contact"
          className="text-[11px] font-mono font-semibold flex items-center gap-1 text-white bg-[#FF5722] hover:bg-[#F4511E] px-3 py-1 rounded-lg transition-colors shadow-2xs"
        >
          <span>Hire for Service</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
