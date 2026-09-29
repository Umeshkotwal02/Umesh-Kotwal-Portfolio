import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Pencil,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Official WhatsApp Vector Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

interface EnquiryPopupProps {
  darkMode: boolean;
  onOpenAiModal?: (prompt?: string) => void;
}

export const EnquiryPopup: React.FC<EnquiryPopupProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Interval progression: 1st time 10s, 2nd time 20s, 3rd time 30s (+10s each time)
  const [currentInterval, setCurrentInterval] = useState(10);
  const [countdown, setCountdown] = useState(10);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State matching the clean reference
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const MAX_MESSAGE_LENGTH = 1000;

  // Progressive timer: 10s -> 20s -> 30s ... (+10s each time)
  useEffect(() => {
    if (isOpen) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
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

  const handleClose = () => {
    setIsOpen(false);
    setCountdown(currentInterval);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem('umesh_enquiries') || '[]');
      existing.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: `ENQ-${Date.now().toString().slice(-6)}`
      });
      localStorage.setItem('umesh_enquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);

      setTimeout(() => {
        setHasSubmitted(false);
        setIsOpen(false);
        setCurrentInterval((prev) => {
          const next = prev + 10;
          setCountdown(next);
          return next;
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 2600);
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Umesh,\n\nName: ${formData.name || 'Client'}\nEmail: ${formData.email || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${formData.subject || 'Project Enquiry'}\n\nMessage: ${formData.message || 'I would like to discuss a project with you.'}`
    );
    window.open(`https://wa.me/919173008127?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Pill Trigger when modal is closed */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center select-none"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#F4511E] text-white shadow-xl shadow-[#FF5722]/30 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute opacity-70" />
              <Zap className="w-4 h-4 text-white relative z-10" />
            </div>

            <div className="text-left pr-1">
              <span className="text-xs font-bold font-display tracking-tight block">
                Quick Enquiry
              </span>
              <span className="text-[10px] text-white/80 block -mt-0.5">
                Direct with Umesh
              </span>
            </div>
          </button>
        </motion.div>
      )}

      {/* Modern Enquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-md sm:max-w-xl md:max-w-2xl rounded-2xl sm:rounded-3xl border shadow-2xl overflow-hidden z-10 my-auto ${
                darkMode
                  ? 'bg-zinc-950/95 border-white/[0.12] text-zinc-100 shadow-black/80'
                  : 'bg-white/95 border-black/[0.08] text-zinc-900 shadow-zinc-400/30'
              } backdrop-blur-xl`}
            >
              {/* Top Gradient Stripe */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5722] via-orange-400 to-amber-500" />

              {/* Header */}
              <div
                className="px-5 sm:px-6 pt-5 pb-3 border-b flex items-start justify-between gap-3"
                style={{
                  borderColor: darkMode
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20">
                    <Sparkles className="w-3 h-3 text-[#FF5722]" />
                    <span>Quick Project Enquiry</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold tracking-tight">
                    Let's Build Something Exceptional
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Share your requirements with Umesh Kotwal for a fast response.
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  className={`p-2 rounded-xl transition-all ${
                    darkMode
                      ? 'hover:bg-zinc-800/80 text-zinc-400 hover:text-white'
                      : 'hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900'
                  }`}
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-5 sm:p-6 max-h-[78vh] overflow-y-auto">
                {hasSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold font-display text-emerald-500">
                        Enquiry Sent Successfully!
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. Umesh will review your project details and contact you promptly.
                      </p>
                    </div>
                    <div className="pt-2 flex justify-center">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-[15px] inline-flex items-center gap-2.5 shadow-lg shadow-[#25D366]/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-white" />
                        <span>Chat on WhatsApp</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Responsive Grid: Desktop (2 Columns) & Mobile (1 Column Stack) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {/* Field 1: Your Name * */}
                      <div
                        className={`group relative flex items-center rounded-2xl border transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF5722]/20 focus-within:border-[#FF5722] ${
                          darkMode
                            ? 'bg-zinc-900/80 border-white/10 hover:border-white/20'
                            : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                        }`}
                      >
                        <div className="pl-4 pr-3 flex items-center justify-center text-[#FF5722]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name *"
                          className={`w-full py-3.5 pr-4 text-xs bg-transparent outline-none font-medium transition-all ${
                            darkMode
                              ? 'text-white placeholder-zinc-500'
                              : 'text-zinc-900 placeholder-zinc-400'
                          }`}
                        />
                      </div>

                      {/* Field 2: Your Email */}
                      <div
                        className={`group relative flex items-center rounded-2xl border transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF5722]/20 focus-within:border-[#FF5722] ${
                          darkMode
                            ? 'bg-zinc-900/80 border-white/10 hover:border-white/20'
                            : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                        }`}
                      >
                        <div className="pl-4 pr-3 flex items-center justify-center text-[#FF5722]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your Email"
                          className={`w-full py-3.5 pr-4 text-xs bg-transparent outline-none font-medium transition-all ${
                            darkMode
                              ? 'text-white placeholder-zinc-500'
                              : 'text-zinc-900 placeholder-zinc-400'
                          }`}
                        />
                      </div>

                      {/* Field 3: Phone Number * */}
                      <div
                        className={`group relative flex items-center rounded-2xl border transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF5722]/20 focus-within:border-[#FF5722] ${
                          darkMode
                            ? 'bg-zinc-900/80 border-white/10 hover:border-white/20'
                            : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                        }`}
                      >
                        <div className="pl-4 pr-3 flex items-center justify-center text-[#FF5722]">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number *"
                          className={`w-full py-3.5 pr-4 text-xs bg-transparent outline-none font-medium transition-all ${
                            darkMode
                              ? 'text-white placeholder-zinc-500'
                              : 'text-zinc-900 placeholder-zinc-400'
                          }`}
                        />
                      </div>

                      {/* Field 4: Subject */}
                      <div
                        className={`group relative flex items-center rounded-2xl border transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF5722]/20 focus-within:border-[#FF5722] ${
                          darkMode
                            ? 'bg-zinc-900/80 border-white/10 hover:border-white/20'
                            : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                        }`}
                      >
                        <div className="pl-4 pr-3 flex items-center justify-center text-[#FF5722]">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Subject"
                          className={`w-full py-3.5 pr-4 text-xs bg-transparent outline-none font-medium transition-all ${
                            darkMode
                              ? 'text-white placeholder-zinc-500'
                              : 'text-zinc-900 placeholder-zinc-400'
                          }`}
                        />
                      </div>

                      {/* Field 5: Your Message (Full Width on Desktop sm:col-span-2) */}
                      <div
                        className={`col-span-1 sm:col-span-2 group relative flex flex-col rounded-2xl border transition-all duration-200 focus-within:ring-2 focus-within:ring-[#FF5722]/20 focus-within:border-[#FF5722] p-3.5 ${
                          darkMode
                            ? 'bg-zinc-900/80 border-white/10 hover:border-white/20'
                            : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm'
                        }`}
                      >
                        {/* Label with icon matching reference */}
                        <div className="flex items-center gap-2 mb-1.5 text-[#FF5722]">
                          <Pencil className="w-4 h-4" />
                          <span className={`text-xs font-semibold ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                            Your Message
                          </span>
                        </div>

                        {/* Textarea */}
                        <textarea
                          rows={3}
                          maxLength={MAX_MESSAGE_LENGTH}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project or requirement..."
                          className={`w-full text-xs bg-transparent outline-none resize-none font-medium leading-relaxed pl-6 ${
                            darkMode
                              ? 'text-white placeholder-zinc-500'
                              : 'text-zinc-900 placeholder-zinc-400'
                          }`}
                        />

                        {/* Character Counter */}
                        <div className="flex justify-end pt-1">
                          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                            {formData.message.length} / {MAX_MESSAGE_LENGTH}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Row - Responsive, Bold, and Large Buttons */}
                    <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="grid grid-cols-1 sm:flex sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                        {/* Send Enquiry Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative px-6 py-3.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#FF5722] to-[#F4511E] hover:from-[#F4511E] hover:to-[#E64A19] text-white font-bold text-sm sm:text-[15px] flex items-center justify-center gap-2.5 shadow-lg shadow-[#FF5722]/30 hover:shadow-[#FF5722]/45 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50 select-none"
                        >
                          <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                        </button>

                        {/* WhatsApp Button with Official WhatsApp Logo */}
                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="group px-6 py-3.5 sm:py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-[15px] flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/45 active:scale-[0.98] transition-all duration-200 cursor-pointer select-none"
                        >
                          <WhatsAppIcon className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                          <span>WhatsApp</span>
                        </button>
                      </div>

                      {/* Dismiss Action */}
                      <button
                        type="button"
                        onClick={handleClose}
                        className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer py-1.5 px-2 text-center sm:text-right"
                      >
                        Dismiss
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Bottom Subtle Trust Badge */}
              <div
                className="px-5 sm:px-6 py-2.5 border-t flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400"
                style={{
                  borderColor: darkMode
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'rgba(0, 0, 0, 0.06)'
                }}
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Confidential • Direct Developer Access</span>
                </div>

                <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
