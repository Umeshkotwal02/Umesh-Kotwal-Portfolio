import React from 'react';
import { ArrowLeft, ChevronRight, Share2, Sparkles } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface StandalonePageProps {
  title: string;
  subtitle?: string;
  description: string;
  canonicalPath: string;
  darkMode: boolean;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
  keywords?: string[];
}

export const StandalonePage: React.FC<StandalonePageProps> = ({
  title,
  subtitle,
  description,
  canonicalPath,
  darkMode,
  onNavigate,
  children,
  keywords = []
}) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'
    }`}>
      {/* Dynamic SEO Tags */}
      <SEOHead
        title={`${title} | Umesh Kotwal`}
        description={description}
        canonicalPath={canonicalPath}
        keywords={[title, "Umesh Kotwal", "Full Stack Developer", "Microservices Lead", ...keywords]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `https://full-stack-developer-umesh-kotwal.vercel.app${canonicalPath}#webpage`,
          "url": `https://full-stack-developer-umesh-kotwal.vercel.app${canonicalPath}`,
          "name": `${title} | Umesh Kotwal`,
          "description": description,
          "isPartOf": {
            "@type": "WebSite",
            "url": "https://full-stack-developer-umesh-kotwal.vercel.app/"
          }
        }}
      />

      {/* Top Breadcrumbs & Back Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => onNavigate('/')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 group cursor-pointer ${
              darkMode
                ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:border-white/20'
                : 'bg-white border-black/10 text-zinc-700 hover:text-zinc-950 hover:shadow-xs'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Full Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono">
              <button onClick={() => onNavigate('/')} className="text-zinc-500 hover:text-[#FF5722] cursor-pointer">
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-zinc-500" />
              <span className="text-[#FF5722] font-semibold">{title}</span>
            </nav>

            <button
              onClick={handleCopyLink}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'bg-white border-black/10 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 shadow-xs'
              }`}
              title="Copy Page Link"
            >
              <Share2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};
