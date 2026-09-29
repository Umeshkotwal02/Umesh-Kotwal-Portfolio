import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiRabbitmq,
  SiSocketdotio,
  SiFirebase,
  SiAgora,
  SiStripe,
  SiRazorpay,
  SiDocker,
  SiJenkins,
  SiBitbucket,
  SiGit,
  SiGithub,
  SiVercel,
  SiHostinger,
  SiJest,
  SiCypress,
  SiPostman,
  SiK6,
  SiOpenapiinitiative,
  SiKubernetes
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
  darkMode?: boolean;
}

// Dedicated Multi-color Figma SVG
const FigmaColorIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-5 h-5", size }) => (
  <svg viewBox="0 0 38 57" fill="none" className={className} width={size} height={size} aria-label="Figma">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
  </svg>
);

// Dedicated Multi-color Playwright SVG
const PlaywrightColorIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-5 h-5", size }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} width={size} height={size} aria-label="Playwright">
    <circle cx="21" cy="12" r="8" fill="#2EAD33" />
    <circle cx="11" cy="18" r="8" fill="#C21325" />
    <circle cx="22" cy="11.5" r="2.5" fill="#FFFFFF" />
    <circle cx="10" cy="17.5" r="2.5" fill="#FFFFFF" />
  </svg>
);

// Dedicated Manual QA Bug Hunting Icon
const ManualQaIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-5 h-5", size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width={size} height={size}>
    <path d="m8 2 1.88 1.88" />
    <path d="M14.12 3.88 16 2" />
    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
    <path d="M12 20v-9" />
    <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
    <path d="M6 13H2" />
    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
    <path d="M22 13h-4" />
    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
  </svg>
);

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = "w-5 h-5",
  size,
  darkMode = true
}) => {
  const n = (name || '').toLowerCase().trim();
  const iconProps = {
    className: `${className} shrink-0 transition-transform duration-200`,
    style: size ? { width: size, height: size } : undefined
  };

  // Frontend & UI
  if (n.includes('javascript') || n === 'js') {
    return <SiJavascript {...iconProps} color="#F7DF1E" />;
  }
  if (n.includes('typescript') || n === 'ts') {
    return <SiTypescript {...iconProps} color="#3178C6" />;
  }
  if (n.includes('react.js') || n.includes('react')) {
    return <SiReact {...iconProps} color="#61DAFB" />;
  }
  if (n.includes('next.js') || n.includes('next')) {
    return <SiNextdotjs {...iconProps} color={darkMode ? '#FFFFFF' : '#000000'} />;
  }
  if (n.includes('redux')) {
    return <SiRedux {...iconProps} color="#764ABC" />;
  }
  if (n.includes('tailwind')) {
    return <SiTailwindcss {...iconProps} color="#06B6D4" />;
  }
  if (n.includes('html5') || n === 'html') {
    return <SiHtml5 {...iconProps} color="#E34F26" />;
  }
  if (n.includes('css3') || n === 'css') {
    return <SiCss {...iconProps} color="#1572B6" />;
  }
  if (n.includes('scss') || n.includes('sass')) {
    return <SiSass {...iconProps} color="#CC6699" />;
  }
  if (n.includes('figma')) {
    return <FigmaColorIcon className={className} size={size} />;
  }

  // Backend & Microservices
  if (n.includes('node.js') || n.includes('node')) {
    return <SiNodedotjs {...iconProps} color="#5FA04E" />;
  }
  if (n.includes('express.js') || n.includes('express')) {
    return <SiExpress {...iconProps} color={darkMode ? '#FFFFFF' : '#000000'} />;
  }
  if (n.includes('restful') || n.includes('rest') || n.includes('api')) {
    return <SiOpenapiinitiative {...iconProps} color="#85EA2D" />;
  }
  if (n.includes('microservice')) {
    return <SiKubernetes {...iconProps} color="#326CE5" />;
  }
  if (n.includes('redis')) {
    return <SiRedis {...iconProps} color="#DC382D" />;
  }
  if (n.includes('bullmq') || n.includes('rabbitmq') || n.includes('queue')) {
    return <SiRabbitmq {...iconProps} color="#FF6600" />;
  }
  if (n.includes('websocket') || n.includes('socket')) {
    return <SiSocketdotio {...iconProps} color={darkMode ? '#00E676' : '#010101'} />;
  }
  if (n.includes('fcm') || n.includes('firebase')) {
    return <SiFirebase {...iconProps} color="#FFCA28" />;
  }
  if (n.includes('agora')) {
    return <SiAgora {...iconProps} color="#099DFD" />;
  }

  // Databases & ORM
  if (n.includes('postgresql') || n.includes('postgres')) {
    return <SiPostgresql {...iconProps} color="#4169E1" />;
  }
  if (n.includes('mysql')) {
    return <SiMysql {...iconProps} color="#4479A1" />;
  }
  if (n.includes('mongodb') || n.includes('mongo')) {
    return <SiMongodb {...iconProps} color="#47A248" />;
  }
  if (n.includes('prisma')) {
    return <SiPrisma {...iconProps} color={darkMode ? '#FFFFFF' : '#2D3748'} />;
  }

  // Payment Gateways
  if (n.includes('stripe')) {
    return <SiStripe {...iconProps} color="#635BFF" />;
  }
  if (n.includes('razorpay')) {
    return <SiRazorpay {...iconProps} color="#008CFF" />;
  }

  // DevOps & Cloud
  if (n.includes('docker')) {
    return <SiDocker {...iconProps} color="#2496ED" />;
  }
  if (n.includes('aws') || n.includes('ecs')) {
    return <FaAws {...iconProps} color="#FF9900" />;
  }
  if (n.includes('jenkins')) {
    return <SiJenkins {...iconProps} color="#D24939" />;
  }
  if (n.includes('bitbucket')) {
    return <SiBitbucket {...iconProps} color="#0052CC" />;
  }
  if (n.includes('github')) {
    return <SiGithub {...iconProps} color={darkMode ? '#FFFFFF' : '#181717'} />;
  }
  if (n.includes('git')) {
    return <SiGit {...iconProps} color="#F05032" />;
  }
  if (n.includes('vercel')) {
    return <SiVercel {...iconProps} color={darkMode ? '#FFFFFF' : '#000000'} />;
  }
  if (n.includes('hostinger')) {
    return <SiHostinger {...iconProps} color="#673AB7" />;
  }

  // QA & Testing
  if (n.includes('jest')) {
    return <SiJest {...iconProps} color="#C21325" />;
  }
  if (n.includes('playwright')) {
    return <PlaywrightColorIcon className={className} size={size} />;
  }
  if (n.includes('cypress')) {
    return <SiCypress {...iconProps} color="#00BF88" />;
  }
  if (n.includes('postman')) {
    return <SiPostman {...iconProps} color="#FF6C37" />;
  }
  if (n.includes('k6')) {
    return <SiK6 {...iconProps} color="#7D64FF" />;
  }
  if (n.includes('manual') || n.includes('qa') || n.includes('test')) {
    return <ManualQaIcon className={className} size={size} />;
  }

  // Fallback with styled badge
  return (
    <span
      className={`rounded-lg flex items-center justify-center font-mono font-bold text-[10px] ${
        darkMode ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-orange-50 text-orange-600 border border-orange-200'
      }`}
      style={{ width: size || 20, height: size || 20 }}
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
};
