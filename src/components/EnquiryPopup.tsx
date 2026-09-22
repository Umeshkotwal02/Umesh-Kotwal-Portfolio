import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  MessageSquare,
  Sparkles,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  Zap,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface EnquiryPopupProps {
  darkMode: boolean;
  onOpenAiModal?: (prompt?: string) => void;
}

export const EnquiryPopup: React.FC<EnquiryPopupProps> = ({ darkMode, onOpenAiModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsUntilNext, setSecondsUntilNext] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showFloatingPill, setShowFloatingPill] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'ecommerce',
    budget: '$2,500 - $5,000',
    timeline: 'Immediate (1-2 weeks)',
    message: ''
  });

  // 10-second interval trigger for Enquiry Popup
  useEffect(() => {
    // If popup is currently open or user paused, don't tick down to re-open
    if (isOpen || isPaused) return;

    const interval = setInterval(() => {
      setSecondsUntilNext((prev) => {
        if (prev <= 1) {
          setIsOpen(true);
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused]);

  const handleClose = () => {
    setIsOpen(false);
    setSecondsUntilNext(10); // Resets 10s countdown to reappear in 10s as requested
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Persist enquiry locally
    try {
      const existing = JSON.parse(localStorage.getItem('umesh_enquiries') || '[]');
      existing.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: `ENQ-${Date.now().toString().slice(-6)}`
      });
      localStorage.setItem('umesh_enquiries', JSON.stringify(existing));
    } catch {
      // Ignore local storage error if restricted
    }

    setHasSubmitted(true);
    setTimeout(() => {
      setHasSubmitted(false);
      setIsOpen(false);
      setSecondsUntilNext(10);
    }, 3000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Umesh, I'm interested in discussing a project for *${formData.service}*. My name is ${formData.name || 'Client'}, email: ${formData.email || 'N/A'}. Details: ${formData.message || 'Looking for an initial quote.'}`
    );
    window.open(`https://wa.me/919173008127?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Discreet floating trigger indicator with 10s countdown circle */}
      {showFloatingPill && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-xl shadow-[#FF5722]/35 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute opacity-75" />
              <Zap className="w-4 h-4 text-white relative z-10" />
            </div>

            <div className="text-left">
              <div className="text-xs font-bold font-display leading-tight flex items-center gap-1.5">
                <span>Quick Enquiry</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/25 text-white/90">
                  {secondsUntilNext}s
                </span>
              </div>
              <div className="text-[10px] text-white/80 leading-none">Instant Response</div>
            </div>
          </button>
        </motion.div>
      )}

      {/* Main 10-Second Recurring Enquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/65 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full max-w-xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto ${
                darkMode
                  ? 'bg-zinc-950/95 border-white/[0.12] text-zinc-100 shadow-black/80'
                  : 'bg-white/98 border-black/[0.08] text-zinc-900 shadow-zinc-400/40'
              }`}
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-500" />

              {/* Modal Header */}
              <div className="px-5 pt-4 pb-3 border-b flex items-start justify-between gap-3"
                style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)' }}
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                    <span>Instant Project Enquiry • 10s Reminder</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-extrabold tracking-tight">
                    Discuss Your Project with Umesh Kotwal
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">
                    E-Commerce, ERP & CRM, AWS Cloud, or Bespoke Full-Stack Engineering. Receive a fast technical estimate within 30 minutes.
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  className={`p-2 rounded-xl transition-all ${
                    darkMode
                      ? 'hover:bg-zinc-800 text-zinc-400 hover:text-white'
                      : 'hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900'
                  }`}
                  title="Close popup (will remind in 10s)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 max-h-[75vh] overflow-y-auto">
                {hasSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold font-display text-emerald-500">
                        Enquiry Received Successfully!
                      </h4>
                      <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                        Thank you for reaching out. Umesh Kotwal will review your project requirements and respond to <strong>{formData.email}</strong> within 30 minutes.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat Instantly on WhatsApp</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Two Column Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                            darkMode
                              ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                              : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                            darkMode
                              ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                              : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Phone / WhatsApp & Service Select */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                          WhatsApp / Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 ... or +91 ..."
                          className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all ${
                            darkMode
                              ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                              : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                          Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all cursor-pointer ${
                            darkMode
                              ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                              : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                          }`}
                        >
                          <option value="ecommerce">E-Commerce Development (Shopify / Headless)</option>
                          <option value="erp_crm">ERP & CRM Enterprise Development</option>
                          <option value="custom_software">Custom Software & SaaS Applications</option>
                          <option value="cloud_aws_azure">Cloud Infrastructure (AWS / Azure)</option>
                          <option value="microservices">Microservices & High-Throughput APIs</option>
                          <option value="qa_testing">QA Automation & Software Testing</option>
                          <option value="iot">IoT & Connected Hardware Telemetry</option>
                          <option value="maintenance">Ongoing Software Maintenance & SLA</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget & Timeline selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all cursor-pointer ${
                            darkMode
                              ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                              : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                          }`}
                        >
                          <option value="<$2,500">Tier 1: Under $2,500 (MVP / Audit)</option>
                          <option value="$2,500 - $5,000">Tier 2: $2,500 – $5,000 (Standard)</option>
                          <option value="$5,000 - $15,000">Tier 3: $5,000 – $15,000 (Complete Platform)</option>
                          <option value="$15,000+">Tier 4: $15,000+ (Enterprise Architecture)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                          Target Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all cursor-pointer ${
                            darkMode
                              ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                              : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                          }`}
                        >
                          <option value="Immediate (1-2 weeks)">Immediate (Start within 1-2 weeks)</option>
                          <option value="1 month">Within 1 month</option>
                          <option value="Quarterly planning">Planning stage / Exploring</option>
                        </select>
                      </div>
                    </div>

                    {/* Requirement details */}
                    <div>
                      <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-1 text-zinc-600 dark:text-zinc-400">
                        Brief Project Overview
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell Umesh about your goals, features, or technical requirements..."
                        className={`w-full px-3.5 py-2 rounded-xl text-xs border outline-none transition-all resize-none ${
                          darkMode
                            ? 'bg-zinc-900/80 border-white/10 focus:border-[#FF5722] text-white'
                            : 'bg-zinc-50 border-black/10 focus:border-[#FF5722] text-zinc-900'
                        }`}
                      />
                    </div>

                    {/* Actions Row */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          type="submit"
                          className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#FF5722]/30 active:scale-95 transition-all cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Enquiry</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                          title="Direct WhatsApp"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="hover:underline cursor-pointer"
                        >
                          Dismiss (re-opens in 10s)
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Bottom Re-trigger Indicator Footer */}
              <div
                className="px-5 py-2.5 border-t flex items-center justify-between text-[10px] font-mono text-zinc-500"
                style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Confidential • NDA Available</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>Recurring every 10s</span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsPaused((p) => !p);
                      if (!isPaused) handleClose();
                    }}
                    className="text-[#FF5722] hover:underline font-bold cursor-pointer"
                  >
                    {isPaused ? 'Resume 10s timer' : 'Pause timer'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
