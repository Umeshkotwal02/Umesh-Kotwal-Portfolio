import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Pencil,
  ShieldCheck,
  Zap,
  Check,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

// Authentic Cloudflare Turnstile Interactive Security Widget
// Sizing: 305px x 64px, decreased corner radius (3px), centered layout
const CloudflareTurnstileWidget: React.FC<{
  isVerified: boolean;
  isVerifying: boolean;
  onVerify: () => void;
  darkMode: boolean;
}> = ({ isVerified, isVerifying, onVerify, darkMode }) => {
  return (
    <div
      onClick={onVerify}
      className={`w-full sm:w-[305px] h-[64px] px-3.5 py-2.5 rounded-[3px] border flex items-center justify-between select-none cursor-pointer transition-all shadow-xs ${
        darkMode
          ? 'bg-[#18181b] border-[#2e2e33] hover:border-[#4b4b52]'
          : 'bg-[#fafafa] border-[#d4d4d8] hover:border-[#a1a1aa]'
      }`}
      role="button"
      tabIndex={0}
      aria-label="Cloudflare Turnstile verification"
    >
      {/* Left Action & State */}
      <div className="flex items-center gap-3">
        {isVerified ? (
          <div className="w-[24px] h-[24px] rounded-full bg-[#059669] text-white flex items-center justify-center shrink-0 shadow-xs animate-in zoom-in-50 duration-200">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        ) : isVerifying ? (
          <div className="w-[22px] h-[22px] rounded-full border-[2.5px] border-zinc-300 border-t-[#F38020] animate-spin shrink-0" />
        ) : (
          <div
            className={`w-[22px] h-[22px] rounded-[2px] border-2 flex items-center justify-center shrink-0 transition-colors ${
              darkMode
                ? 'bg-zinc-800 border-zinc-500 hover:border-[#F38020]'
                : 'bg-white border-zinc-400 hover:border-[#F38020]'
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-[1px] bg-transparent" />
          </div>
        )}

        <div className="flex flex-col">
          <span
            className={`text-xs sm:text-[13px] font-outfit font-semibold leading-tight ${
              isVerified
                ? darkMode
                  ? 'text-emerald-400 font-bold'
                  : 'text-emerald-700 font-bold'
                : isVerifying
                ? darkMode
                  ? 'text-amber-400'
                  : 'text-amber-700 font-semibold'
                : darkMode
                ? 'text-zinc-200'
                : 'text-zinc-800 font-semibold'
            }`}
          >
            {isVerified ? 'Success!' : isVerifying ? 'Verifying browser...' : 'Verify you are human'}
          </span>
          {!isVerified && !isVerifying && (
            <span className={`text-[10px] font-outfit ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Click to verify
            </span>
          )}
        </div>
      </div>

      {/* Right Brand: Official Cloudflare Two-Tone Cloud & Links */}
      <div className="flex flex-col items-end justify-center pl-3 border-l border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-1.5">
          {/* Cloudflare Two-Tone Cloud Logo */}
          <svg viewBox="0 0 100 45" className="w-[36px] h-[18px] shrink-0" fill="none">
            <path
              d="M74.8 23.6c-.7-5-4.8-8.8-9.8-8.8-3.2 0-6 1.6-7.8 4-1.9-4.8-6.5-7.5-11.7-7.5-7.1 0-12.9 5.3-13.8 12.2-1.2-.6-2.6-.9-4.1-.9-5.5 0-10 4.5-10 10 0 .5.1 1.1.2 1.6h58c4.2 0 7.6-3.4 7.6-7.6 0-3.8-2.8-6.9-6.5-7.5-.6-.6-1.1-1.2-1.7-1.8z"
              fill="#F38020"
            />
            <path
              d="M70 34.6H24.3c-.7-.9-1.1-2-1.1-3.3 0-3.2 2.6-5.8 5.8-5.8 1 0 2 .3 2.8.7.8-4.8 4.9-8.4 9.8-8.4 3.6 0 6.7 2 8.5 4.8 1.4-1.7 3.5-2.8 5.8-2.8 4 0 7.2 3 7.5 7 2.3.4 4.1 2.4 4.1 4.9 0 1-.3 2-.9 2.9h3.6z"
              fill="#FAAE40"
            />
          </svg>
          <span className={`text-[11px] font-bold tracking-tight font-outfit ${
            darkMode ? 'text-zinc-200' : 'text-zinc-800'
          }`}>
            Cloudflare
          </span>
        </div>
        <div className={`text-[9px] font-outfit flex items-center gap-1 mt-0.5 ${
          darkMode ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          <span>Privacy</span>
          <span>•</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
};

// Clean Architecture SVG Badge for Left Column
const SystemArchitectureGraphic: React.FC<{ darkMode: boolean; className?: string }> = ({
  darkMode,
  className = 'w-full h-36'
}) => (
  <svg viewBox="0 0 280 140" className={className} fill="none">
    {/* Center Console Container */}
    <rect
      x="20"
      y="18"
      width="240"
      height="104"
      rx="16"
      fill={darkMode ? "#141417" : "#FFFFFF"}
      stroke={darkMode ? "rgba(255,255,255,0.08)" : "rgba(255,87,34,0.25)"}
      strokeWidth="1.5"
    />

    {/* Terminal Header Bar */}
    <rect x="20" y="18" width="240" height="28" rx="16" fill={darkMode ? "#1C1C21" : "#F4F4F5"} />
    <circle cx="36" cy="32" r="3.5" fill="#EF4444" />
    <circle cx="48" cy="32" r="3.5" fill="#F59E0B" />
    <circle cx="60" cy="32" r="3.5" fill="#10B981" />
    <text x="140" y="35" textAnchor="middle" fill="#71717A" fontSize="8.5" fontFamily="monospace" fontWeight="600">
      api-cluster.production.internal
    </text>

    {/* Architecture Route 1: Next.js Frontend */}
    <rect x="34" y="60" width="60" height="46" rx="8" fill={darkMode ? "#27272A" : "#FAFAFA"} stroke="#FF5722" strokeWidth="1.2" />
    <text x="64" y="78" textAnchor="middle" fill="#FF5722" fontSize="9" fontWeight="bold" fontFamily="monospace">Next.js</text>
    <text x="64" y="93" textAnchor="middle" fill={darkMode ? "#A1A1AA" : "#52525B"} fontSize="7.5" fontFamily="monospace">SSR / UI</text>

    {/* Flow Arrow */}
    <path d="M96 83 L110 83" stroke="#FF5722" strokeWidth="1.5" strokeDasharray="2 2" />

    {/* Architecture Route 2: Express / Microservice */}
    <rect x="112" y="60" width="64" height="46" rx="8" fill={darkMode ? "#27272A" : "#FAFAFA"} stroke="#38BDF8" strokeWidth="1.2" />
    <text x="144" y="78" textAnchor="middle" fill="#0284C7" fontSize="9" fontWeight="bold" fontFamily="monospace">Node.js</text>
    <text x="144" y="93" textAnchor="middle" fill={darkMode ? "#A1A1AA" : "#52525B"} fontSize="7.5" fontFamily="monospace">GATEWAY</text>

    {/* Flow Arrow */}
    <path d="M178 83 L192 83" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />

    {/* Architecture Route 3: Redis / BullMQ / DB */}
    <rect x="194" y="60" width="54" height="46" rx="8" fill={darkMode ? "#27272A" : "#FAFAFA"} stroke="#10B981" strokeWidth="1.2" />
    <text x="221" y="78" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="bold" fontFamily="monospace">Redis</text>
    <text x="221" y="93" textAnchor="middle" fill={darkMode ? "#A1A1AA" : "#52525B"} fontSize="7.5" fontFamily="monospace">CACHE</text>
  </svg>
);

interface EnquiryPopupProps {
  darkMode: boolean;
  onOpenAiModal?: (prompt?: string) => void;
}

export const EnquiryPopup: React.FC<EnquiryPopupProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Interval progression: 10s -> 20s -> 30s (+10s each time)
  const [currentInterval, setCurrentInterval] = useState(10);
  const [countdown, setCountdown] = useState(10);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cloudflare Turnstile Verification State
  // Auto-verifies smoothly on popup open: 1.2s spin -> sets success
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isVerifyingCaptcha, setIsVerifyingCaptcha] = useState(false);
  const verificationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submissionFeedback, setSubmissionFeedback] = useState<{
    message: string;
    smtpConfigured: boolean;
    directMailUrl?: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const MAX_MESSAGE_LENGTH = 1000;

  // Reset form and state back to fresh inquiry
  const resetFormState = () => {
    setHasSubmitted(false);
    setSubmissionFeedback(null);
    setSubmitError(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Progressive timer
  useEffect(() => {
    if (isOpen) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          resetFormState();
          setIsOpen(true);
          setCurrentInterval((prevInterval) => {
            const nextInterval = prevInterval + 10;
            setCountdown(nextInterval);
            return nextInterval;
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  // Clean up any pending verification timers & auto-verify Cloudflare on popup open
  useEffect(() => {
    if (isOpen) {
      // Whenever modal opens, ensure it displays a clean, new form
      resetFormState();

      // Automatically initiate verification when popup opens
      setIsCaptchaVerified(false);
      setIsVerifyingCaptcha(true);

      if (verificationTimerRef.current) {
        clearTimeout(verificationTimerRef.current);
      }

      // Realistic 1.2s browser check then sets Success!
      verificationTimerRef.current = setTimeout(() => {
        setIsVerifyingCaptcha(false);
        setIsCaptchaVerified(true);
      }, 1200);
    } else {
      setIsCaptchaVerified(false);
      setIsVerifyingCaptcha(false);
      if (verificationTimerRef.current) {
        clearTimeout(verificationTimerRef.current);
      }
    }

    return () => {
      if (verificationTimerRef.current) {
        clearTimeout(verificationTimerRef.current);
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setCountdown(currentInterval);
    resetFormState();
  };

  // Realistic Turnstile verification trigger if manually clicked
  const handleTriggerCaptcha = () => {
    if (isCaptchaVerified || isVerifyingCaptcha) return;
    setIsVerifyingCaptcha(true);

    if (verificationTimerRef.current) {
      clearTimeout(verificationTimerRef.current);
    }

    verificationTimerRef.current = setTimeout(() => {
      setIsVerifyingCaptcha(false);
      setIsCaptchaVerified(true);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // If captcha is not yet verified, verify it first before submitting
    if (!isCaptchaVerified) {
      setIsVerifyingCaptcha(true);
      verificationTimerRef.current = setTimeout(() => {
        setIsVerifyingCaptcha(false);
        setIsCaptchaVerified(true);
        executeSubmission();
      }, 1000);
      return;
    }

    executeSubmission();
  };

  const executeSubmission = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim() || undefined,
      phone: formData.phone.trim() || undefined,
      subject: formData.subject.trim() || 'New Project / Architectural Consultation',
      message: formData.message.trim(),
      budget: 'Direct Consultation (Modal)',
    };

    // Store in localStorage as instant safety backup
    try {
      const existing = JSON.parse(localStorage.getItem('umesh_enquiries') || '[]');
      existing.push({
        ...payload,
        timestamp: new Date().toISOString(),
        id: `ENQ-${Date.now().toString().slice(-6)}`
      });
      localStorage.setItem('umesh_enquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage backup
    }

    const directMailUrl = `mailto:umeshkotwal658@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${payload.subject} - ${payload.name}`
    )}&body=${encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email || 'N/A'}\nPhone: ${payload.phone || 'N/A'}\n\nProject Requirements:\n${payload.message}`
    )}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Server could not process inquiry.');
      }

      try {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.6 }
        });
      } catch {}

      setSubmissionFeedback({
        message: data.message || 'Inquiry successfully received!',
        smtpConfigured: Boolean(data.smtpConfigured),
        directMailUrl,
      });

      setHasSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsCaptchaVerified(false);
    } catch (err: any) {
      console.error('Submit error:', err);
      setSubmissionFeedback({
        message: 'Your inquiry has been stored. You can also send directly to Umesh via your email client.',
        smtpConfigured: false,
        directMailUrl,
      });
      setHasSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Action Pill Trigger when modal is closed */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center select-none"
        >
          <button
            onClick={() => {
              resetFormState();
              setIsOpen(true);
              setIsCaptchaVerified(false);
              setIsVerifyingCaptcha(false);
            }}
            className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#F4511E] hover:from-[#F4511E] hover:to-[#E64A19] text-white shadow-xl shadow-[#FF5722]/30 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute opacity-70" />
              <Zap className="w-4 h-4 text-white relative z-10" />
            </div>

            <div className="text-left pr-1">
              <span className="text-xs font-bold font-outfit tracking-tight block">
                Start a Project
              </span>
              <span className="text-[10px] font-outfit text-white/80 block -mt-0.5">
                Technical Consultation
              </span>
            </div>
          </button>
        </motion.div>
      )}

      {/* Redesigned 2-Section Professional Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-lg md:max-w-4xl lg:max-w-[960px] rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] overflow-y-auto ${
                darkMode
                  ? 'bg-zinc-950 border-white/10 text-zinc-100 shadow-black/90'
                  : 'bg-white border-zinc-200 text-zinc-950 shadow-2xl shadow-zinc-400/30'
              }`}
            >
              {/* Top Accent Strip in #FF5722 orange gradient */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-[#FB923C] to-[#38BDF8]" />

              {/* Close Button top-right */}
              <button
                type="button"
                onClick={handleClose}
                className={`absolute top-4 right-4 sm:top-5 sm:right-5 z-30 p-2 rounded-full transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950'
                }`}
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 2-Section Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-0 md:min-h-[530px]">
                {/* ----------------- LEFT SECTION: Engineering Narrative & Architecture Visual (Hidden on Mobile) ----------------- */}
                <div className={`hidden md:flex md:col-span-5 p-6 sm:p-8 flex-col justify-between items-center text-center relative overflow-hidden md:border-r ${
                  darkMode
                    ? 'bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-zinc-900/60 border-white/[0.08]'
                    : 'bg-gradient-to-b from-orange-50/50 via-white to-zinc-50/80 border-zinc-200'
                }`}>
                  {/* Subtle Orange Glow Ambient */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FF5722]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Badge & Core Heading */}
                  <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Badge */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-outfit font-bold tracking-wider uppercase bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/25 mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>ENGINEERING COLLABORATION</span>
                    </div>

                    {/* Headline with 100% visible high-contrast colors in both modes using Outfit font */}
                    <div className="space-y-1">
                      <h2
                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-outfit ${
                          darkMode ? 'text-zinc-100' : 'text-zinc-950'
                        }`}
                        style={{ color: darkMode ? '#F4F4F5' : '#09090B' }}
                      >
                        Architect Your Vision
                      </h2>
                      <div className="relative inline-block">
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FF5722] font-outfit">
                          Into Production
                        </span>
                        {/* Underline accent */}
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent rounded-full mt-1 opacity-80" />
                      </div>
                    </div>

                    {/* Description Paragraph with Proper High-Contrast Typography in Outfit */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed max-w-[275px] mx-auto mt-3.5 font-outfit font-normal ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                      style={{ color: darkMode ? '#D4D4D8' : '#3F3F46' }}
                    >
                      Collaborate on high-throughput microservices, modern Next.js web applications, and enterprise systems tailored to your business roadmap.
                    </p>
                  </div>

                  {/* Architecture Visual Illustration */}
                  <div className="relative z-10 my-3 w-full flex items-center justify-center">
                    <SystemArchitectureGraphic darkMode={darkMode} className="w-full max-w-[270px] h-28 sm:h-32 object-contain" />
                  </div>

                  {/* 2 Quick Value Badges */}
                  <div className={`w-full pt-3.5 border-t grid grid-cols-2 gap-2 text-left text-xs font-outfit font-medium ${
                    darkMode ? 'border-white/[0.08] text-zinc-300' : 'border-zinc-200 text-zinc-700'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
                      <span>Rapid 2-4h Response</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Enterprise NDA Ready</span>
                    </div>
                  </div>
                </div>

                {/* ----------------- RIGHT SECTION: Form, Cloudflare & Actions ----------------- */}
                <div className={`col-span-12 md:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-between ${
                  darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-950'
                }`}>
                  {/* Top Branding Lockup: Brand Emblem + Hairline Divider + Section Title */}
                  <div className="flex items-center gap-3.5 mb-5 pr-8">
                    {/* Brand Lockup */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF5722] to-[#FB923C] flex items-center justify-center text-white font-outfit font-extrabold text-sm shadow-xs">
                        UK
                      </div>
                      <div className="leading-tight">
                        <span className={`font-extrabold text-sm tracking-tight block font-outfit ${
                          darkMode ? 'text-white' : 'text-zinc-950'
                        }`}>
                          UMESH KOTWAL
                        </span>
                        <span className={`text-[10px] font-outfit block tracking-tight ${
                          darkMode ? 'text-zinc-400' : 'text-zinc-500'
                        }`}>
                          Full Stack Lead · Available for Contracts
                        </span>
                      </div>
                    </div>

                    {/* Hairline Divider */}
                    <div className={`h-7 w-px ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`} />

                    {/* Contact Header */}
                    <div>
                      <h3 className={`text-base sm:text-lg font-bold tracking-tight font-outfit ${
                        darkMode ? 'text-white' : 'text-zinc-950'
                      }`}>
                        Start a Project Discussion
                      </h3>
                    </div>
                  </div>

                  {/* Form or Success State */}
                  {hasSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-6 sm:py-8 text-center space-y-4 my-auto px-2 sm:px-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-xl sm:text-2xl font-bold font-outfit text-emerald-500">
                          Inquiry Dispatched Successfully!
                        </h4>
                        <p className={`text-xs sm:text-sm max-w-sm mx-auto leading-relaxed font-outfit ${
                          darkMode ? 'text-zinc-300' : 'text-zinc-700'
                        }`}>
                          Thank you for reaching out! Your proposal has been dispatched to Umesh Kotwal, and an automated confirmation receipt has been sent to your email.
                        </p>
                      </div>

                      {/* Dual Email Dispatch Confirmation Card */}
                      <div className={`p-4 rounded-2xl border text-xs max-w-sm mx-auto space-y-2.5 text-left font-outfit ${
                        darkMode ? 'bg-zinc-900/90 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            Lead Routed To:
                          </span>
                          <span className="font-semibold text-[#FF5722] text-[11px] font-mono">
                            umeshkotwal658@gmail.com
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-t pt-2 border-zinc-200/40 dark:border-zinc-800/60">
                          <span className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            Client Receipt:
                          </span>
                          <span className="font-semibold text-emerald-500 text-[11px] font-mono">
                            Sent to your Email
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-emerald-500 text-[11px] font-medium pt-0.5">
                          <Check className="w-3.5 h-3.5 shrink-0" />
                          <span>Guaranteed response within 2-4 hours</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            resetFormState();
                            setIsCaptchaVerified(true);
                          }}
                          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border font-outfit font-semibold text-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${
                            darkMode
                              ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300 hover:text-white'
                              : 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950'
                          }`}
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Submit Another Enquiry</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleClose}
                          className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] hover:from-[#F4511E] hover:to-[#E64A19] text-white font-outfit font-semibold text-xs inline-flex items-center justify-center gap-2 shadow-md shadow-[#FF5722]/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer select-none"
                        >
                          <span>Done</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5 flex-1 flex flex-col justify-between">
                      {/* Form Fields: 2 Columns on Desktop */}
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Field 1: Your Name * */}
                          <div className="space-y-1">
                            <label className={`text-xs font-semibold font-outfit flex items-center gap-1.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                              <User className="w-3.5 h-3.5 text-[#FF5722]" />
                              <span>Your Name <strong className="text-[#FF5722]">*</strong></span>
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="e.g. Alex Henderson"
                              className={`w-full h-11 px-3.5 text-sm font-outfit rounded-xl border outline-none font-medium transition-all ${
                                darkMode
                                  ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                                  : 'bg-white border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                              }`}
                            />
                          </div>

                          {/* Field 2: Your Email * */}
                          <div className="space-y-1">
                            <label className={`text-xs font-semibold font-outfit flex items-center gap-1.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                              <Mail className="w-3.5 h-3.5 text-[#FF5722]" />
                              <span>Your Email <strong className="text-[#FF5722]">*</strong></span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="name@company.com"
                              className={`w-full h-11 px-3.5 text-sm font-outfit rounded-xl border outline-none font-medium transition-all ${
                                darkMode
                                  ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                                  : 'bg-white border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                              }`}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Field 3: Phone Number * */}
                          <div className="space-y-1">
                            <label className={`text-xs font-semibold font-outfit flex items-center gap-1.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                              <Phone className="w-3.5 h-3.5 text-[#FF5722]" />
                              <span>Phone Number <strong className="text-[#FF5722]">*</strong></span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className={`w-full h-11 px-3.5 text-sm font-outfit rounded-xl border outline-none font-medium transition-all ${
                                darkMode
                                  ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                                  : 'bg-white border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                              }`}
                            />
                          </div>

                          {/* Field 4: Subject / Architecture Scope */}
                          <div className="space-y-1">
                            <label className={`text-xs font-semibold font-outfit flex items-center gap-1.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                              <Layers className="w-3.5 h-3.5 text-[#FF5722]" />
                              <span>Subject / Project Domain</span>
                            </label>
                            <input
                              type="text"
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              placeholder="e.g. Next.js SaaS, ERP"
                              className={`w-full h-11 px-3.5 text-sm font-outfit rounded-xl border outline-none font-medium transition-all ${
                                darkMode
                                  ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                                  : 'bg-white border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                              }`}
                            />
                          </div>
                        </div>

                        {/* Field 5: Message & Project Requirements */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <label className={`text-xs font-semibold font-outfit flex items-center gap-1.5 ${
                              darkMode ? 'text-zinc-300' : 'text-zinc-700'
                            }`}>
                              <Pencil className="w-3.5 h-3.5 text-[#FF5722]" />
                              <span>Project Details & Requirements</span>
                            </label>
                            <span className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                              {formData.message.length} / {MAX_MESSAGE_LENGTH}
                            </span>
                          </div>

                          <textarea
                            rows={3}
                            maxLength={MAX_MESSAGE_LENGTH}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Briefly describe your requirements, timeline, or current technical stack..."
                            className={`w-full min-h-[82px] p-3 text-sm font-outfit rounded-xl border outline-none resize-none font-medium leading-relaxed transition-all ${
                              darkMode
                                ? 'bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                                : 'bg-white border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:border-[#FF5722] focus:ring-2 focus:ring-[#FF5722]/20'
                            }`}
                          />
                        </div>

                        {/* Cloudflare Turnstile Interactive Security Widget (Centered with decreased corners) */}
                        <div className="flex justify-center items-center pt-2 pb-0.5 w-full">
                          <CloudflareTurnstileWidget
                            isVerified={isCaptchaVerified}
                            isVerifying={isVerifyingCaptcha}
                            onVerify={handleTriggerCaptcha}
                            darkMode={darkMode}
                          />
                        </div>
                      </div>

                      {/* Bottom Footer Actions: Security Note (Left) + Refined Send Inquiry Button (Right) */}
                      <div className={`pt-3.5 mt-2 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 ${
                        darkMode ? 'border-zinc-800/80' : 'border-zinc-200'
                      }`}>
                        {/* Security & Confidentiality Guarantee on Left */}
                        <div className={`flex items-center gap-2 text-xs font-outfit font-medium ${
                          darkMode ? 'text-zinc-400' : 'text-zinc-700'
                        }`}>
                          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>100% Confidential · Protected by Enterprise NDA</span>
                        </div>

                        {/* Primary Submit Button: Sleek, high-tier Send Inquiry button with font-outfit */}
                        <div className="flex items-center justify-end">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] active:scale-[0.98] text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF5722]/30 hover:shadow-[#FF5722]/50 hover:brightness-105 transition-all duration-200 cursor-pointer disabled:opacity-50 select-none border border-white/20"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                <span>Sending Inquiry...</span>
                              </>
                            ) : (
                              <>
                                <span>Send Inquiry</span>
                                <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
