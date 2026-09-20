import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Code2,
  Sparkles,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Camera,
  ChevronDown,
  ChevronUp,
  Activity,
  Zap,
  Layers,
  Database,
  Server,
  Shield,
  MessageCircle,
  ExternalLink,
  Cpu,
  RotateCw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { ServicesFloatingCloud } from './ServicesFloatingCloud';
import { DeveloperPortfolioCard } from './DeveloperPortfolioCard';

interface HeroProps {
  onOpenAiModal: () => void;
  onOpenResumeModal: () => void;
  darkMode: boolean;
}

const UMESH_OFFICIAL_PHOTO = "https://umeshkotwal.vercel.app/assets/about-us-BJhTeHfc.jpeg";

const TECH_FOCUS_PILLS = [
  { name: 'React 18', category: 'Frontend', icon: 'react' },
  { name: 'Next.js 14', category: 'SSR & Vitals', icon: 'next.js' },
  { name: 'Node.js', category: 'Backend Engine', icon: 'node.js' },
  { name: 'Express.js', category: 'Microservices', icon: 'express' },
  { name: 'MongoDB', category: 'NoSQL Database', icon: 'mongodb' },
  { name: 'PostgreSQL', category: 'ACID Relational', icon: 'postgresql' },
  { name: 'Redis', category: 'sub-10ms Cache', icon: 'redis' },
  { name: 'BullMQ', category: '0% Data Loss DLQ', icon: 'bullmq' },
  { name: 'TypeScript', category: 'Strict Types', icon: 'typescript' },
  { name: 'Docker', category: 'Containers', icon: 'docker' },
  { name: 'Stripe', category: 'Escrow Payouts', icon: 'stripe' },
];

const ROTATING_SKILLS = [
  'Full-Stack Developer',
  'Next.js & React 18 Specialist',
  'Node.js & Express Architect',
  'Microservices & Distributed Systems',
  'BullMQ & Zero-Loss Queue Engineer'
];

export const Hero: React.FC<HeroProps> = ({ onOpenAiModal, onOpenResumeModal, darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotating subtitle index
  const [skillIdx, setSkillIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSkillIdx((prev) => (prev + 1) % ROTATING_SKILLS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  // Active showcase state: always starts on 'portrait' (Developer Portfolio),
  // then flips to 'services' after 3s, and continues flipping every 3s
  const [activeShowcase, setActiveShowcase] = useState<'services' | 'portrait'>('portrait');
  const [isAutoFlipping, setIsAutoFlipping] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoFlipping || isHovered) return;

    const timer = setInterval(() => {
      setActiveShowcase((prev) => (prev === 'portrait' ? 'services' : 'portrait'));
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoFlipping, isHovered]);

  // Photo state (defaults strictly to Umesh's requested photo URL)
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('umesh_custom_photo') || UMESH_OFFICIAL_PHOTO;
  });
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [customPhotoInput, setCustomPhotoInput] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Terminal state
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<
    Array<{ command: string; output: string | React.ReactNode }>
  >([
    {
      command: 'whoami',
      output: 'Umesh Kotwal — Full-Stack Developer & Software Engineer (React.js, Next.js 14, Node.js, Express, MongoDB, PostgreSQL, Redis, BullMQ)',
    },
    {
      command: 'stack --production',
      output: 'Frontend: React 18, Next.js 14, Tailwind, Motion | Backend: Node.js, Express microservices | DBs: MongoDB, PostgreSQL, Prisma | Queues: BullMQ + Redis | Cloud: Docker, AWS ECS',
    }
  ]);

  // Subtle interactive background particle mesh
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(width / 60), 20);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = darkMode ? 'rgba(255, 87, 34, 0.25)' : 'rgba(255, 87, 34, 0.2)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = darkMode
              ? `rgba(255, 255, 255, ${0.04 * (1 - dist / 110)})`
              : `rgba(255, 87, 34, ${0.06 * (1 - dist / 110)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = terminalInput.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = '';

    if (trimmed === 'help') {
      response = (
        <div className="space-y-1 text-zinc-400">
          <p><span className="text-[#FF5722] font-semibold">whoami</span> — Overview of Umesh Kotwal</p>
          <p><span className="text-[#FF5722] font-semibold">stack</span> — Core frontend, backend, and DB technologies</p>
          <p><span className="text-[#FF5722] font-semibold">projects</span> — Key production enterprise apps</p>
          <p><span className="text-[#FF5722] font-semibold">contact</span> — Direct email, phone, and WhatsApp</p>
          <p><span className="text-[#FF5722] font-semibold">clear</span> — Wipe terminal output</p>
        </div>
      );
    } else if (trimmed === 'whoami') {
      response = "Umesh Kotwal — Full-Stack Developer with 2+ years of production experience crafting responsive Next.js frontends and resilient Node.js microservices for Dubai & Indian enterprises.";
    } else if (trimmed === 'stack') {
      response = "Frontend: React 18, Next.js 14, Tailwind CSS, Motion\nBackend: Node.js, Express.js, Microservices, REST APIs, WebSockets\nDatabases: MongoDB (Mongoose), PostgreSQL, MySQL, Prisma ORM\nCaching & Queues: Redis (sub-10ms), BullMQ (Dead Letter Queues)\nIntegrations: Stripe Connect, Razorpay, Agora RTC, AWS S3, Docker";
    } else if (trimmed === 'projects') {
      response = "1. Vyonic — Dubai Fitness & Gym SaaS (Microservices, Stripe, Redis)\n2. Vybemena — Dubai Event Management Platform with 48h Stripe Connect Payouts\n3. Kesaria Textile — High-SEO B2B Marketplace with Google Page 1 Rankings\n4. Cloud ERP — Comprehensive Inventory, Ledger & Sales Accounting System";
    } else if (trimmed === 'contact') {
      response = "Email: umeshkotwal658@gmail.com | Phone: +91 6352001332 | Location: Surat, Gujarat, India";
    } else if (trimmed === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else {
      response = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, { command: terminalInput, output: response }]);
    setTerminalInput('');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('umeshkotwal658@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappUrl = `https://wa.me/916352001332?text=${encodeURIComponent(
    'Hi Umesh, I reviewed your Full-Stack Developer portfolio and would like to discuss a project or role with you.'
  )}`;

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Background Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Modern Ambient Radial Glows */}
      <div className={`absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none ${
        darkMode ? 'bg-[#FF5722]/10' : 'bg-[#FF5722]/12'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
        darkMode ? 'bg-orange-500/8' : 'bg-amber-400/15'
      }`} />

      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-14">
        {/* Main 2-Column Hero: Left Typography & Pitch + Right Digital Developer Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Digital Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Eyebrow Badges: Status + Affiliation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {/* Available for Hire Badge */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-tight backdrop-blur-md shadow-2xs"
                style={{
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.95)',
                  borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                }}
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className={darkMode ? 'text-zinc-300 font-medium' : 'text-zinc-700 font-semibold'}>
                  Available for Hire • <strong className={darkMode ? 'text-white' : 'text-zinc-950'}>Full-Stack Engineer</strong>
                </span>
              </div>

              {/* Dynamic Digital Role Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/25 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {ROTATING_SKILLS[skillIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* High-Impact Digital Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#FF5722] uppercase">
                &lt; Full-Stack Software Engineer /&gt;
              </div>

              <h1 className={`font-display text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.08] ${
                darkMode ? 'text-zinc-100' : 'text-zinc-950'
              }`}>
                Hi, I'm <span className="text-[#FF5722]">Umesh Kotwal</span>.
                <span className="block mt-2 sm:mt-2.5 font-bold text-3xl sm:text-5xl lg:text-[54px] tracking-tight leading-[1.15]">
                  Building modern web apps & resilient backend systems.
                </span>
              </h1>

              <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                I combine pixel-perfect <strong className={`font-bold transition-colors ${darkMode ? 'text-white' : 'text-zinc-950'}`}>Next.js 14 & React 18</strong> user experiences with high-throughput <strong className="font-bold text-[#FF5722]">Node.js & Express microservices</strong>, sub-10ms Redis caching, and zero-data-loss BullMQ queues for UAE and global enterprises.
              </p>
            </motion.div>

            {/* Action Buttons: Vibrant Orange + Secondary Controls */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1"
            >
              {/* Primary Signature Orange CTA */}
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#FF5722] hover:bg-[#F4511E] active:scale-95 transition-all duration-200 rounded-full flex items-center gap-2 shadow-lg shadow-[#FF5722]/30 group"
              >
                <span>Let's Discuss a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* View Projects CTA */}
              <a
                href="#projects"
                className={`px-5 py-3.5 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-200 flex items-center gap-2 ${
                  darkMode
                    ? 'bg-zinc-900/80 border-white/[0.1] text-zinc-200 hover:bg-zinc-800 hover:border-white/20'
                    : 'bg-white border-black/[0.08] text-zinc-800 hover:bg-zinc-100 shadow-xs'
                }`}
              >
                <Code2 className="w-4 h-4 text-zinc-500" />
                <span>Featured Work</span>
              </a>

              {/* Download Resume / CV */}
              <button
                onClick={onOpenResumeModal}
                className={`px-4 py-3.5 text-xs font-medium rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                  darkMode
                    ? 'bg-transparent border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/20'
                    : 'bg-transparent border-black/[0.08] text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                <Download className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>Resume</span>
              </button>

              {/* Copy Email Fast */}
              <button
                onClick={copyEmail}
                className={`px-3.5 py-3.5 text-xs font-mono rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                  darkMode
                    ? 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white'
                    : 'bg-zinc-50 border-black/[0.08] text-zinc-600 hover:text-zinc-900'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Key Production Proof Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              {[
                { value: '2+ Yrs', label: 'Production Experience', highlight: true },
                { value: '15+', label: 'Apps & Systems Deployed', highlight: false },
                { value: '<10ms', label: 'Redis Cache Response', highlight: false },
                { value: '99.9%', label: 'Production SLA Uptime', highlight: false },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 text-left ${
                    darkMode
                      ? 'bg-zinc-900/50 border-white/[0.06] hover:border-white/[0.12]'
                      : 'bg-white/95 border-black/[0.05] hover:border-black/[0.1] shadow-xs'
                  }`}
                >
                  <div className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${
                    metric.highlight ? 'text-[#FF5722]' : darkMode ? 'text-zinc-100' : 'text-zinc-950'
                  }`}>
                    {metric.value}
                  </div>
                  <div className={`text-[11px] font-medium leading-snug mt-0.5 ${
                    darkMode ? 'text-zinc-400' : 'text-zinc-500'
                  }`}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Switcher + Showcase (Exactly identical to uploaded image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-start"
          >
            {/* Top Switcher Bar with Dark Pill + High-Tech Digital Status */}
            <div className="flex items-center justify-between mb-3 w-full max-w-lg px-1">
              {/* Segmented Pill Switcher: Developer Portfolio first, then Services */}
              <div className="inline-flex p-1 rounded-full bg-zinc-800/90 dark:bg-zinc-800/90 backdrop-blur-md border border-zinc-700/50 shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveShowcase('portrait')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-display transition-all duration-300 cursor-pointer ${
                    activeShowcase === 'portrait'
                      ? 'bg-[#FF5722] text-white shadow-md'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  Developer Portfolio
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShowcase('services')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-display transition-all duration-300 cursor-pointer ${
                    activeShowcase === 'services'
                      ? 'bg-[#FF5722] text-white shadow-md'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  Services We Provide
                </button>
              </div>

              {/* Tap change button: flips between Developer Portfolio and Services on tap */}
              <button
                type="button"
                onClick={() => setActiveShowcase((prev) => (prev === 'portrait' ? 'services' : 'portrait'))}
                title="Tap to change view"
                className="flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer select-none bg-[#FF5722]/10 hover:bg-[#FF5722]/20 border-[#FF5722]/30 text-[#FF5722] active:scale-95 shadow-xs"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#FF5722] transition-transform duration-300 group-active:rotate-180" />
                <span>Tap change</span>
              </button>
            </div>

            {/* Showcase Container: 3D Flip between Developer Portfolio & Services We Provide */}
            <div
              className="w-full max-w-lg"
              style={{ perspective: 1200 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {activeShowcase === 'services' ? (
                  <motion.div
                    key="services"
                    initial={{ opacity: 0, rotateY: 75, scale: 0.96 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -75, scale: 0.96 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <ServicesFloatingCloud darkMode={darkMode} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="portrait"
                    initial={{ opacity: 0, rotateY: -75, scale: 0.96 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: 75, scale: 0.96 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <DeveloperPortfolioCard
                      darkMode={darkMode}
                      photoUrl={photoUrl}
                      onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
                      onOpenTerminal={() => setShowTerminal((prev) => !prev)}
                      showTerminal={showTerminal}
                      onOpenAiModal={onOpenAiModal}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Digital Tech Stack Ribbon: Full-Stack Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-3 pt-2"
        >
          <div className="text-center">
            <span className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${
              darkMode ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              CORE PRODUCTION TECHNOLOGY STACK
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto px-2">
            {TECH_FOCUS_PILLS.map((tech) => (
              <div
                key={tech.name}
                className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-medium flex items-center gap-2 transition-all duration-200 shadow-2xs ${
                  darkMode
                    ? 'bg-zinc-900/60 border-white/[0.08] text-zinc-300 hover:border-[#FF5722]/50 hover:text-white'
                    : 'bg-white border-black/[0.06] text-zinc-700 hover:border-[#FF5722]/60 hover:text-zinc-950'
                }`}
              >
                <TechIcon name={tech.icon} className="w-4 h-4 shrink-0" darkMode={darkMode} />
                <span>{tech.name}</span>
                <span className="text-[10px] text-zinc-400 font-normal">({tech.category})</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expandable Developer CLI Terminal */}
        <AnimatePresence>
          {showTerminal && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden max-w-4xl mx-auto w-full pt-4"
            >
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs text-zinc-200 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-zinc-400 ml-2">umesh@fullstack-gateway:~</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">type 'help' for command list</span>
                </div>

                {/* History Output */}
                <div className="space-y-3 max-h-56 overflow-y-auto pr-2">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-[#FF5722]">❯</span>
                        <span className="text-zinc-200 font-semibold">{item.command}</span>
                      </div>
                      <div className="text-zinc-300 pl-4 whitespace-pre-line leading-relaxed">
                        {item.output}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Input Form */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-800/60">
                  <span className="text-[#FF5722] font-bold">❯</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="whoami | stack | projects | contact | clear"
                    className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none font-mono text-xs"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 rounded-md bg-[#FF5722]/20 text-[#FF5722] hover:bg-[#FF5722]/30 text-[11px] font-mono transition-colors"
                  >
                    Execute
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Photo URL Customization Modal */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`w-full max-w-md rounded-2xl border p-6 space-y-4 shadow-2xl ${
                darkMode ? 'bg-zinc-900 border-white/[0.1] text-zinc-100' : 'bg-white border-black/[0.1] text-zinc-900'
              }`}
            >
              <h3 className="text-lg font-bold font-display">Update Profile Portrait</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Provide an image URL to customize the hero portrait.
              </p>

              <input
                type="url"
                value={customPhotoInput}
                onChange={(e) => setCustomPhotoInput(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className={`w-full px-3 py-2 text-xs rounded-xl border font-mono ${
                  darkMode ? 'bg-zinc-800 border-white/10 text-white' : 'bg-zinc-50 border-black/10 text-black'
                }`}
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setPhotoUrl(UMESH_OFFICIAL_PHOTO);
                    localStorage.removeItem('umesh_custom_photo');
                    setIsPhotoModalOpen(false);
                  }}
                  className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-mono"
                >
                  Reset Default
                </button>
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="px-3 py-1.5 text-xs rounded-xl border border-zinc-700 hover:bg-zinc-800 transition-colors font-mono"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (customPhotoInput.trim()) {
                      setPhotoUrl(customPhotoInput.trim());
                      localStorage.setItem('umesh_custom_photo', customPhotoInput.trim());
                    }
                    setIsPhotoModalOpen(false);
                  }}
                  className="px-4 py-1.5 text-xs rounded-xl bg-[#FF5722] hover:bg-[#F4511E] text-white font-medium transition-colors font-mono"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
