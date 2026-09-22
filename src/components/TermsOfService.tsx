import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Shield,
  CheckCircle2,
  Lock,
  Scale,
  Clock,
  Mail,
  Phone,
  ArrowLeft,
  Share2,
  Printer,
  ChevronRight,
  Code2,
  Server,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TermsOfServiceProps {
  darkMode: boolean;
  onNavigate: (path: string) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ darkMode, onNavigate }) => {
  const lastUpdated = "September 20, 2026";

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Terms of Service link copied to clipboard!");
  };

  return (
    <div className={`min-h-screen pt-28 pb-24 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-200' : 'bg-[#fafafa] text-zinc-800'
    }`}>
      {/* SEO & Canonical Metadata */}
      <SEOHead
        title="Terms of Service & Engineering Engagement | Umesh Kotwal"
        description="Comprehensive Terms of Service and Engineering Engagement Agreement for software development, code ownership, intellectual property rights, and SLA guarantees by Umesh Kotwal."
        canonicalPath="/terms"
        keywords={[
          "Umesh Kotwal Terms of Service",
          "Software Engineering Contract",
          "Code Ownership",
          "Intellectual Property Rights",
          "Freelance Engineering Terms",
          "Microservices SLA",
          "Full Stack Developer Agreement"
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://umeshcodes.vercel.app/terms#webpage",
          "url": "https://umeshcodes.vercel.app/terms",
          "name": "Terms of Service & Engineering Engagement | Umesh Kotwal",
          "description": "Comprehensive legal terms for technical software engineering, source code transfer, and consulting services by Umesh Kotwal.",
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
              Terms of Service
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
              title="Print Terms"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20">
            <Scale className="w-3.5 h-3.5" />
            <span>CONTRACTUAL TERMS & ENGAGEMENT</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] ${
            darkMode ? 'text-zinc-100' : 'text-zinc-950'
          }`}>
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FF5722]" />
              Last Updated: <strong>{lastUpdated}</strong>
            </span>
            <span>•</span>
            <span>Applicable to: Software Consulting, Architecture & Contract Engineering</span>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed pt-2 ${
            darkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            These Terms of Service govern the technical engagement, software engineering services, architecture consulting, and project milestones delivered by <strong>Umesh Kotwal</strong> ("Developer", "Lead Engineer") to clients, organizations, and contractors worldwide ("Client").
          </p>
        </motion.div>

        {/* Highlighted Engagement Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Code2,
              title: "100% Code Ownership",
              desc: "Complete IP transfer and repository rights to the client upon full milestone settlement."
            },
            {
              icon: Shield,
              title: "Confidentiality & NDA",
              desc: "Strict non-disclosure guarantees protecting your proprietary schemas, business logic, and credentials."
            },
            {
              icon: Server,
              title: "30-Day Bug-Free SLA",
              desc: "Guaranteed complimentary post-deployment hotfix window for agreed project specifications."
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
                <div className="p-2.5 rounded-xl w-fit bg-[#FF5722]/10 text-[#FF5722] mb-3">
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

        {/* Comprehensive Terms Sections */}
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
              <span>Engagement Scope & Statements of Work (SOW)</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                All engineering engagements, whether fixed-price deliverables, monthly retainer engineering, or hourly technical advisory, are defined by an explicit Statement of Work (SOW), GitHub issue roadmap, or written agreement via email or messaging channels.
              </p>
              <p>
                Any changes, feature expansions, or third-party integrations outside the agreed scope ("Scope Creep") will be estimated separately as additional milestones to ensure realistic timelines and architecture stability.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">02.</span>
              <span>Intellectual Property (IP) & Source Code Ownership</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                <strong>Complete IP Assignment:</strong> Upon receipt of final milestone payments, all custom source code, documentation, database schemas, and architectural diagrams created specifically for the project will be 100% assigned and transferred to the Client.
              </p>
              <p>
                <strong>Pre-Existing Tools & Open-Source:</strong> Standard open-source libraries (e.g. React, Next.js, Express, Prisma, Tailwind CSS, Redis clients) remain governed by their respective MIT, Apache, or BSD licenses. General utility functions or foundational patterns developed prior to the engagement remain non-exclusive.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">03.</span>
              <span>Milestone Schedules, Billing & Escrow</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                <strong>Fixed-Price Milestones:</strong> Standard contracts operate on a staged milestone basis (e.g., 30% Architecture & Wireframes Setup, 40% Core Backend/API Implementation & QA, 30% Production Staging, Cloud Deployment, and Handover).
              </p>
              <p>
                <strong>Accepted Payment Rails:</strong> Payments are processed securely via Stripe Connect, Wire Transfer / SWIFT, Direct Bank Transfer (NEFT/IMPS), or verified escrow platforms. Invoices are payable within 7 business days of milestone completion.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">04.</span>
              <span>Confidentiality & Non-Disclosure (NDA)</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                Both parties agree to hold all confidential project details, database credentials, API secrets, business logic, customer records, and design assets in strict confidence. Umesh Kotwal will never disclose, share, or sell any Client proprietary data or code repositories to third parties.
              </p>
              <p>
                Standard mutual Non-Disclosure Agreements (NDAs) can be executed prior to code access or sensitive architectural audits upon client request.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">05.</span>
              <span>30-Day Post-Launch Bug-Fix Guarantee & SLA</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                All delivered custom code includes a <strong>30-day complimentary warranty period</strong> starting from production launch. Any reproducible defects or bugs deviating from the agreed functional specifications will be resolved without additional charge.
              </p>
              <p>
                Bugs caused by external third-party service outages (e.g. AWS downtime, Stripe API version deprecation, changes to third-party SDKs) or unauthorized code modifications by other team members fall under ongoing maintenance support.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">06.</span>
              <span>Client Responsibilities & Third-Party Costs</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                The Client is responsible for provisioning and maintaining all necessary third-party accounts, including domain registrars, cloud infrastructure (AWS, Vercel, Contabo, DigitalOcean), email delivery services, database instances, and payment processor accounts (Stripe, Razorpay).
              </p>
              <p>
                All direct usage fees charged by third-party services (hosting, compute, API credits) are the sole responsibility of the Client.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">07.</span>
              <span>Limitation of Liability & Termination</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                To the maximum extent permitted by law, Umesh Kotwal shall not be liable for indirect, incidental, or consequential damages arising from software usage, data loss, or server downtime outside direct engineering control. The total aggregate liability shall not exceed the total fees paid under the specific project SOW.
              </p>
              <p>
                Either party may terminate an engagement with a 14-day written notice. In the event of early termination, the Client shall pay for all completed milestones and work performed up to the date of notice.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className={`text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              <span className="text-[#FF5722] font-mono text-sm">08.</span>
              <span>Governing Law & Dispute Resolution</span>
            </h2>
            <div className={`text-xs sm:text-sm leading-relaxed space-y-2.5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              <p>
                These terms shall be construed in accordance with the applicable laws of Gujarat, India, without prejudice to internationally accepted arbitration procedures for cross-border contracts (including Dubai/UAE and United States jurisdictions).
              </p>
              <p>
                Parties agree to seek amicable resolution through good-faith technical negotiation before initiating formal legal proceedings.
              </p>
            </div>
          </section>
        </div>

        {/* Contact & Inquiry Box */}
        <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
          darkMode
            ? 'bg-zinc-900/60 border-white/10'
            : 'bg-zinc-50 border-black/[0.06]'
        }`}>
          <div className="space-y-1">
            <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-950'
            }`}>
              Have Questions About Contracts or Engagement Terms?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Reach out directly to Umesh Kotwal to discuss custom SOWs, milestone structures, or NDA requirements.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('/contact')}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 shadow-md shadow-[#FF5722]/20 transition-all cursor-pointer"
            >
              Contact Umesh
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Contract%20Terms%20Inquiry`}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                darkMode
                  ? 'bg-zinc-800 border-white/10 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                  : 'bg-white border-black/10 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
              }`}
            >
              Direct Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
