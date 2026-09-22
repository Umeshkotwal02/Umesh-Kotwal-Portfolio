import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  FileCheck,
  Server,
  ArrowLeft,
  Share2,
  Printer,
  ChevronRight,
  Clock,
  Mail,
  UserCheck,
  Cookie,
  Globe2
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PrivacyPolicyProps {
  darkMode: boolean;
  onNavigate: (path: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ darkMode, onNavigate }) => {
  const lastUpdated = "September 20, 2026";

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Privacy Policy link copied to clipboard!");
  };

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-200' : 'bg-[#fafafa] text-zinc-800'
    }`}>
      {/* SEO & Canonical Metadata */}
      <SEOHead
        title="Privacy Policy | Umesh Kotwal Portfolio"
        description="Comprehensive Privacy Policy detailing how Umesh Kotwal collects, secures, and handles personal data, technical inquiries, and client code under GDPR and global privacy standards."
        canonicalPath="/privacy"
        keywords={[
          "Umesh Kotwal Privacy Policy",
          "Data Protection",
          "GDPR Compliance",
          "Developer Confidentiality",
          "Client Data Privacy",
          "Software Engineering Security"
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://umeshcodes.vercel.app/privacy#webpage",
          "url": "https://umeshcodes.vercel.app/privacy",
          "name": "Privacy Policy | Umesh Kotwal",
          "description": "Comprehensive Privacy Policy detailing how personal data and technical requirements are protected by Umesh Kotwal.",
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://umeshcodes.vercel.app/"
          },
          "about": {
            "@type": "Person",
            "name": "Umesh Kotwal"
          },
          "datePublished": "2024-01-01",
          "dateModified": "2026-09-20"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Breadcrumb & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
          <nav className="flex items-center gap-2 text-xs font-mono" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate('/')}
              className="text-[#FF5722] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-500" />
            <span className="text-zinc-500">Legal</span>
            <ChevronRight className="w-3 h-3 text-zinc-500" />
            <span className={darkMode ? 'text-zinc-200 font-semibold' : 'text-zinc-900 font-semibold'}>
              Privacy Policy
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'bg-white border-black/10 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 shadow-xs'
              }`}
              title="Copy URL"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share Link</span>
            </button>

            <button
              onClick={handlePrint}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'bg-white border-black/10 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 shadow-xs'
              }`}
              title="Print Policy"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>GDPR & GLOBAL PRIVACY COMPLIANCE</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
              Last Updated: <strong>{lastUpdated}</strong>
            </span>
            <span>•</span>
            <span>Data Controller: Umesh Kotwal (Surat, Gujarat, India)</span>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed pt-2 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Your privacy and intellectual property are treated with paramount seriousness. This Privacy Policy details the exact types of information collected when you browse this portfolio, communicate via technical inquiry forms, or engage <strong>Umesh Kotwal</strong> for engineering contracts.
          </p>
        </motion.div>

        {/* Highlighted Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Lock,
              title: "Zero Data Selling",
              desc: "Your email, phone number, and technical specifications are NEVER shared, rented, or sold to third parties."
            },
            {
              icon: FileCheck,
              title: "Confidential Specs",
              desc: "All submitted architecture diagrams, budgets, and project scopes remain strictly private and NDA-protected."
            },
            {
              icon: UserCheck,
              title: "GDPR User Rights",
              desc: "You have complete rights to request data access, export, or complete permanent erasure at any time."
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-zinc-900/50 border-white/[0.08]'
                    : 'bg-white border-black/[0.06] shadow-xs'
                }`}
              >
                <div className="p-2.5 rounded-xl w-fit bg-emerald-500/10 text-emerald-500 mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className={`text-sm font-bold tracking-tight mb-1 ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-950'
                }`}>
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Policy Sections */}
        <div className={`p-8 sm:p-10 rounded-3xl border space-y-10 ${
          darkMode
            ? 'bg-zinc-900/30 border-white/[0.08]'
            : 'bg-white border-black/[0.06] shadow-md'
        }`}>
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">01.</span>
              <span>Information We Collect</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                We only collect information that you voluntarily provide or that is technically required to serve the web application:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Contact Inquiries:</strong> When you send a message through the contact form, we collect your Name, Email address, Subject, Topic/Budget preference, and Message text.</li>
                <li><strong>Uploaded Architecture Diagrams:</strong> If you attach an image or diagram to a project inquiry, the Base64 image payload is processed strictly to forward the file attachment to Umesh Kotwal via SMTP email.</li>
                <li><strong>AI Assistant Conversations:</strong> If you interact with the interactive AI Architecture Bot, your questions and recent chat context are processed to provide contextually accurate technical answers.</li>
                <li><strong>Technical Logs:</strong> Server logs may temporarily record anonymized IP addresses, browser user-agents, and request timestamps for cybersecurity and DDoS prevention.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">02.</span>
              <span>How Your Information Is Used</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                The information collected is used solely for professional, engineering, and contractual purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Evaluating your software specifications, architecture challenges, and project requirements.</li>
                <li>Preparing comprehensive technical proposals, Statements of Work (SOW), and timeline estimates.</li>
                <li>Communicating directly regarding milestones, status updates, and production deliverables.</li>
                <li>Transmitting automated receipt confirmations via email so you know your enquiry was safely received.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">03.</span>
              <span>Cookies & Local Storage</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                This portfolio does <strong>not</strong> use invasive third-party ad tracking, fingerprinting, or marketing cookie pixels.
              </p>
              <p>
                We use standard client-side browser <code>localStorage</code> strictly for user experience enhancements:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><code>uk_theme</code>: Remembers your preferred Dark / Light mode color theme.</li>
                <li><code>uk_cursor_mode</code>: Remembers your custom interactive cursor preference (Reticle, Minimal, Invert).</li>
              </ul>
              <p>You can clear your browser storage at any time with no loss of application functionality.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">04.</span>
              <span>Third-Party Processors & Infrastructure</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                To provide enterprise-grade reliability, certain trusted third-party service providers are utilized:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>SMTP Email Services:</strong> Encrypted Nodemailer dispatch via standard TLS/SSL SMTP to route contact submissions securely to <code>umeshkotwal658@gmail.com</code>.</li>
                <li><strong>Hosting & Edge Delivery:</strong> Hosted on secure Cloud Run / Vercel container infrastructure with global SSL encryption (HTTPS).</li>
                <li><strong>Google Gemini API:</strong> The optional AI Architecture Assistant uses the official Google Gemini SDK to process technical prompts without retaining personal identifiers.</li>
                <li><strong>Stripe Connect:</strong> In production projects, payments and payouts are processed directly through Stripe's PCI-DSS Level 1 certified vault. No credit card details are ever stored on this server.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">05.</span>
              <span>Client Source Code & Confidentiality Guarantee</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                For all contract development and client engagements:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>All proprietary client source code, database credentials, server SSH keys, and business schemas are held under strict confidential custody.</li>
                <li>Zero client code is ever committed to public repositories or shared with unauthorized individuals.</li>
                <li>Client credentials and environment variables are stored in encrypted vaults (e.g. AWS Secrets Manager, 1Password, Doppler) and purged upon project handover.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">06.</span>
              <span>Your Data Rights (GDPR / CCPA)</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                Regardless of your geographic location, you retain full rights regarding any personal data:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Right to Access:</strong> Request a copy of any personal data or communications retained.</li>
                <li><strong>Right to Rectification:</strong> Request correction of any inaccurate or outdated information.</li>
                <li><strong>Right to Erasure ("Right to Be Forgotten"):</strong> Request that all email records, contact history, and attachments be permanently deleted from our records.</li>
                <li><strong>Right to Object:</strong> Withdraw consent for technical correspondence at any time.</li>
              </ul>
              <p>To exercise any of these rights, email <strong>umeshkotwal658@gmail.com</strong> with the subject line "Data Privacy Request". We will fulfill verified requests within 7 business days.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">07.</span>
              <span>Data Protection Contact</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                If you have questions, feedback, or privacy-related concerns, please contact the Data Controller directly:
              </p>
              <div className="p-4 rounded-xl border bg-zinc-500/5 font-mono text-xs space-y-1">
                <div><strong>Data Controller:</strong> Umesh Kotwal</div>
                <div><strong>Email:</strong> umeshkotwal658@gmail.com</div>
                <div><strong>Phone / WhatsApp:</strong> +91 6352001332</div>
                <div><strong>Location:</strong> Surat, Gujarat, India (IST)</div>
              </div>
            </div>
          </section>
        </div>

        {/* Contact CTA */}
        <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
          darkMode
            ? 'bg-zinc-900/60 border-white/10'
            : 'bg-zinc-50 border-black/[0.06]'
        }`}>
          <div className="space-y-1">
            <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Require a Signed Mutual Non-Disclosure Agreement (NDA)?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              We routinely execute mutual NDAs prior to reviewing proprietary codebases, pitch decks, or backend architectures.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('/contact')}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 shadow-md shadow-[#FF5722]/20 transition-all cursor-pointer"
            >
              Request Mutual NDA
            </button>
            <button
              onClick={() => onNavigate('/terms')}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-800 border-white/10 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                  : 'bg-white border-black/10 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
              }`}
            >
              View Terms of Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
