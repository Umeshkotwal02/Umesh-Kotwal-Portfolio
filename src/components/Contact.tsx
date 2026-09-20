import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  ArrowRight,
  UploadCloud,
  X,
  ChevronDown,
  Sparkles,
  Paperclip,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$5,000 - $15,000',
    subject: '',
    message: ''
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{ message: string; smtpDelivered: boolean } | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [smtpStatus, setSmtpStatus] = useState<{ configured: boolean; recipient: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/smtp/status')
      .then((res) => res.json())
      .then((data) => {
        setSmtpStatus({
          configured: Boolean(data.configured),
          recipient: data.recipient || 'umeshkotwal658@gmail.com',
        });
      })
      .catch(() => {
        setSmtpStatus({
          configured: false,
          recipient: 'umeshkotwal658@gmail.com',
        });
      });
  }, []);

  const BUDGET_OPTIONS = [
    '< $5,000 (Small Sprint / Consultation)',
    '$5,000 - $15,000 (Standard MVP / Microservices)',
    '$15,000 - $30,000 (Full-Scale Enterprise Build)',
    '$30,000+ (High-Scale Production Ecosystem)',
    'Full-Time / Contract Engineering Role'
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setImageName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorText(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          imageAttachment: uploadedImage,
          imageName: uploadedImage ? imageName : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || data.details || 'Failed to dispatch enquiry.');
      }

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setSubmitFeedback({
        message: data.message,
        smtpDelivered: Boolean(data.smtpConfigured),
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        budget: '$5,000 - $15,000',
        subject: '',
        message: ''
      });
      setUploadedImage(null);
      setImageName('');
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || 'Error dispatching message. Please try again or email umeshkotwal658@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-zinc-50 border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight font-semibold bg-[#FF5722]/10 text-[#FF5722] border-[#FF5722]/25">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>AVAILABLE FOR WORK & CONTRACTS</span>
              </div>

              <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                Let's construct <br />
                resilient systems.
              </h2>

              <p className={`text-sm leading-relaxed max-w-md ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Seeking senior full-stack roles, architecture consulting, or high-throughput microservices work. Send your project brief and I will respond within 24 hours.
              </p>
            </div>

            {/* Direct Contact Items */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                darkMode ? 'bg-zinc-900/40 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
              }`}>
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-white/[0.04] text-[#FF5722] border-white/[0.08]' : 'bg-black/[0.03] text-[#FF5722] border-black/[0.06]'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Direct Email
                    </div>
                    <div className={`text-xs sm:text-sm font-mono font-medium mt-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className={`p-2 rounded-xl border transition-colors ${
                    darkMode ? 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-black/[0.06]'
                  }`}
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#FF5722]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                darkMode ? 'bg-zinc-900/40 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
              }`}>
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-white/[0.04] text-[#FF5722] border-white/[0.08]' : 'bg-black/[0.03] text-[#FF5722] border-black/[0.06]'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Base Location
                    </div>
                    <div className={`text-xs sm:text-sm font-mono font-medium mt-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                darkMode ? 'bg-zinc-900/40 border-white/[0.06]' : 'bg-white border-black/[0.06] shadow-xs'
              }`}>
                <div className="flex items-center gap-3.5">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    darkMode ? 'bg-white/[0.04] text-[#FF5722] border-white/[0.08]' : 'bg-black/[0.03] text-[#FF5722] border-black/[0.06]'
                  }`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Phone / WhatsApp
                    </div>
                    <div className={`text-xs sm:text-sm font-mono font-medium mt-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-900'}`}>
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://wa.me/916352001332"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 rounded-xl border text-[11px] font-mono font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border-[#25D366]/30 transition-colors flex items-center gap-1"
                    title="Chat on WhatsApp"
                  >
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className={`p-2 rounded-xl border transition-colors ${
                      darkMode ? 'bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-black/[0.06]'
                    }`}
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#FF5722]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 p-3 rounded-2xl border flex items-center justify-center gap-2 font-medium transition-all ${
                  darkMode ? 'bg-zinc-900/50 border-white/[0.08] text-zinc-200 hover:border-white/20' : 'bg-white border-black/[0.06] text-zinc-800 hover:bg-zinc-100 shadow-2xs'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 p-3 rounded-2xl border flex items-center justify-center gap-2 font-medium transition-all ${
                  darkMode ? 'bg-zinc-900/50 border-white/[0.08] text-zinc-200 hover:border-white/20' : 'bg-white border-black/[0.06] text-zinc-800 hover:bg-zinc-100 shadow-2xs'
                }`}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className={`relative rounded-3xl border shadow-xl backdrop-blur-xl overflow-hidden text-left ${
              darkMode ? 'bg-zinc-900/50 border-white/[0.08]' : 'bg-white border-black/[0.06] shadow-zinc-200/50'
            }`}>
              <div className="p-7 sm:p-9">
                {/* Header status strip */}
                <div className={`flex items-center justify-between pb-4 mb-6 border-b ${
                  darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
                    <span className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Inbox: <span className="font-semibold text-[#FF5722]">{smtpStatus?.recipient || 'umeshkotwal658@gmail.com'}</span>
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                    darkMode ? 'bg-white/[0.03] border-white/10 text-zinc-400' : 'bg-black/[0.02] border-black/10 text-zinc-600'
                  }`}>
                    {smtpStatus?.configured ? 'SMTP Active' : 'Direct Mail Relay'}
                  </span>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20 flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                      Enquiry Dispatched!
                    </h3>
                    <p className={`text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {submitFeedback?.message || 'Thank you for reaching out. Umesh Kotwal has received your message and will review your specifications shortly.'}
                    </p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-mono ${
                      darkMode ? 'bg-white/[0.03] border-white/10 text-zinc-300' : 'bg-black/[0.02] border-black/10 text-zinc-700'
                    }`}>
                      <Mail className="w-3.5 h-3.5 text-[#FF5722]" />
                      <span>Notification sent to umeshkotwal658@gmail.com</span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setSubmitFeedback(null);
                        }}
                        className="px-5 py-2.5 rounded-full font-semibold text-xs transition-transform bg-[#FF5722] text-white hover:bg-[#F4511E] shadow-md shadow-[#FF5722]/25"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorText && (
                      <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <p>{errorText}</p>
                          <a
                            href={`mailto:umeshkotwal658@gmail.com?subject=${encodeURIComponent(formData.subject || 'Project Inquiry')}`}
                            className="underline font-semibold mt-1 inline-block text-rose-200"
                          >
                            Click here to email Umesh directly via your mail client
                          </a>
                        </div>
                      </div>
                    )}
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Umesh Kotwal"
                          className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm transition-all border outline-none ${
                            darkMode
                              ? 'bg-zinc-950/60 border-white/[0.08] text-zinc-100 placeholder-zinc-500 focus:border-[#FF5722]/60'
                              : 'bg-zinc-50 border-black/[0.08] text-zinc-900 placeholder-zinc-400 focus:border-[#FF5722]'
                          }`}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="hello@company.com"
                          className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm transition-all border outline-none ${
                            darkMode
                              ? 'bg-zinc-950/60 border-white/[0.08] text-zinc-100 placeholder-zinc-500 focus:border-[#FF5722]/60'
                              : 'bg-zinc-50 border-black/[0.08] text-zinc-900 placeholder-zinc-400 focus:border-[#FF5722]'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Row 2: Project Budget Dropdown & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className={`block text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          Project Budget (Dropdown) *
                        </label>
                        <div className="relative">
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className={`w-full appearance-none rounded-xl px-3.5 py-2.5 pr-10 text-xs sm:text-sm transition-all border outline-none cursor-pointer ${
                              darkMode
                                ? 'bg-zinc-950/60 border-white/[0.08] text-zinc-100 focus:border-[#FF5722]/60 [&>option]:bg-zinc-900 [&>option]:text-zinc-100'
                                : 'bg-zinc-50 border-black/[0.08] text-zinc-900 focus:border-[#FF5722] [&>option]:bg-white [&>option]:text-zinc-900'
                            }`}
                          >
                            {BUDGET_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className={`block text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          Subject
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Backend Lead Inquiry"
                          className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm transition-all border outline-none ${
                            darkMode
                              ? 'bg-zinc-950/60 border-white/[0.08] text-zinc-100 placeholder-zinc-500 focus:border-[#FF5722]/60'
                              : 'bg-zinc-50 border-black/[0.08] text-zinc-900 placeholder-zinc-400 focus:border-[#FF5722]'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Image / Mockup Upload Feature */}
                    <div className="space-y-1.5">
                      <label className={`block text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Project Diagram or Mockup (Optional)
                      </label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleImageUpload(e.target.files[0]);
                          }
                        }}
                      />

                      {uploadedImage ? (
                        <div className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                          darkMode ? 'bg-zinc-950/80 border-white/[0.1]' : 'bg-zinc-50 border-black/[0.08]'
                        }`}>
                          <div className="flex items-center gap-3 overflow-hidden">
                            <img
                              src={uploadedImage}
                              alt="Upload preview"
                              className="w-10 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                            />
                            <div className="truncate">
                              <p className={`text-xs font-mono font-medium truncate ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                                {imageName}
                              </p>
                              <span className="text-[10px] text-[#FF5722] font-mono font-semibold">Image attached ready for send</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setUploadedImage(null);
                              setImageName('');
                              if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06] transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                            darkMode
                              ? 'border-white/[0.12] hover:border-[#FF5722]/50 bg-zinc-950/30 hover:bg-zinc-950/60'
                              : 'border-black/[0.12] hover:border-[#FF5722]/50 bg-zinc-50/50 hover:bg-zinc-50'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
                            <UploadCloud className="w-4 h-4 text-[#FF5722]" />
                            <span>Click to upload architecture image or drag & drop</span>
                          </div>
                          <span className="text-[10px] text-zinc-500 block mt-1">PNG, JPG, SVG, WebP up to 10MB</span>
                        </div>
                      )}
                    </div>

                    {/* How Can I Help You? (Textarea) */}
                    <div className="space-y-1.5">
                      <label className={`block text-[11px] font-mono uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Project Requirements or Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your requirements, technology constraints, or timeline expectations..."
                        className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm transition-all border outline-none resize-none ${
                          darkMode
                            ? 'bg-zinc-950/60 border-white/[0.08] text-zinc-100 placeholder-zinc-500 focus:border-[#FF5722]/60'
                            : 'bg-zinc-50 border-black/[0.08] text-zinc-900 placeholder-zinc-400 focus:border-[#FF5722]'
                        }`}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/25"
                      >
                        {isSubmitting ? (
                          <span>Dispatching...</span>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


