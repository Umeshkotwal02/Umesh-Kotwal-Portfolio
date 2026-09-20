import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

interface ServicesFloatingCloudProps {
  darkMode: boolean;
}

type CategoryType = 'all' | 'cloud' | 'web' | 'enterprise';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  techStack: string;
  brandColor: string;
  glowColor: string;
  bgLight: string;
  bgDark: string;
  borderLight: string;
  borderDark: string;
  accentTextLight: string;
  accentTextDark: string;
  icon: React.ReactNode;
  specs: string[];
  metricLabel: string;
  metricValue: string;
}

export const ServicesFloatingCloud: React.FC<ServicesFloatingCloudProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('erp_crm');
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  // 12 Services with Clean, Distinct Icons at Large Display Size
  const services: ServiceItem[] = [
    {
      id: 'erp_crm',
      title: 'ERP & CRM',
      subtitle: 'Enterprise Flow',
      category: 'enterprise',
      techStack: 'Process Automation • Lead Pipeline',
      brandColor: '#0284C7',
      glowColor: 'rgba(2, 132, 199, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-blue-200/80 hover:border-blue-500/80',
      borderDark: 'border-white/10 hover:border-blue-400/60',
      accentTextLight: 'text-blue-900',
      accentTextDark: 'text-blue-300',
      specs: ['Unified Inventory & Lead Funnel', 'Real-Time Financial Reconciliation', 'Omnichannel Deal Lifecycle Triggers'],
      metricLabel: 'Sync SLA',
      metricValue: '99.9%',
      icon: (
        // Clean Unified Enterprise ERP & CRM: Master Database / Process Core + Customer Relationship Pipeline
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 54 48" className="relative w-13 h-11 drop-shadow-md" fill="none">
            <defs>
              <linearGradient id="erp_crm_core_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="erp_crm_badge_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            {/* Interconnecting Sync Data Flow Highway */}
            <path d="M22 24 H34" stroke="#38bdf8" strokeWidth="2.4" strokeDasharray="3 2" />
            <path d="M26 21 L30 24 L26 27" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

            {/* Left: ERP Enterprise Database / Workflow Hub */}
            <g transform="translate(14, 24)">
              {/* Central Core */}
              <rect x="-9.5" y="-9.5" width="19" height="19" rx="4" fill="url(#erp_crm_core_grad)" stroke="#ffffff" strokeWidth="1.5" />
              {/* Internal System Grid */}
              <path d="M-5 0 H5 M0 -5 V5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
              {/* Orbital Satellite Nodes */}
              <circle cx="-9" cy="-13" r="2.8" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
              <circle cx="9" cy="13" r="2.8" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
            </g>

            {/* Right: CRM Customer Relationship Profile & Deal Badge */}
            <g transform="translate(39, 24)">
              <circle cx="0" cy="0" r="11" fill="url(#erp_crm_badge_grad)" stroke="#ffffff" strokeWidth="1.6" />
              {/* User Avatar Silhouette */}
              <circle cx="0" cy="-2.5" r="3.4" fill="#ffffff" />
              <path d="M-5.8 7.5 C-5 4.2 -2.5 3.2 0 3.2 C2.5 3.2 5 4.2 5.8 7.5" fill="#ffffff" />
              {/* Verified Deal Badge */}
              <circle cx="8" cy="-6" r="3.6" fill="#10b981" stroke="#ffffff" strokeWidth="1.2" />
              <path d="M6.8 -6 L7.6 -5.2 L9.2 -6.8" stroke="#ffffff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      subtitle: 'Cart & Sales',
      category: 'web',
      techStack: 'Headless Storefronts • Stripe',
      brandColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-emerald-200/80 hover:border-emerald-500/80',
      borderDark: 'border-white/10 hover:border-emerald-400/60',
      accentTextLight: 'text-emerald-800',
      accentTextDark: 'text-emerald-300',
      specs: ['Sub-second Checkout Funnel', 'Multi-Currency Payment Processing', 'Real-time Stock Reservations'],
      metricLabel: 'Conversion',
      metricValue: '+42% Lift',
      icon: (
        // Clean Modern Shopping Cart with Product Package & Sales Sparkle
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 48 48" className="relative w-12 h-12 drop-shadow-md" fill="none">
            <defs>
              <linearGradient id="ecom_cart_main" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="ecom_box_main" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            {/* Express Delivery Package inside Basket */}
            <rect x="18" y="10" width="13" height="11" rx="2.5" fill="url(#ecom_box_main)" stroke="#ffffff" strokeWidth="1.4" />
            <path d="M24.5 10 V21 M18 15.5 H31" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
            {/* Modern Shopping Cart Contour */}
            <path
              d="M7 11 H12.5 L17.2 27.5 C17.6 28.8 18.8 29.8 20.2 29.8 H36.5 C37.8 29.8 39 28.8 39.4 27.5 L42.5 16 H14"
              stroke="url(#ecom_cart_main)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dual Precision Rolling Wheels */}
            <circle cx="21" cy="37" r="3.8" fill="#059669" stroke="#ffffff" strokeWidth="1.6" />
            <circle cx="36" cy="37" r="3.8" fill="#059669" stroke="#ffffff" strokeWidth="1.6" />
            {/* Sales Conversion Star Spark */}
            <path d="M38 6.5 L39.8 9.8 L43.5 10.2 L40.8 12.6 L41.5 16.2 L38 14.5 L34.5 16.2 L35.2 12.6 L32.5 10.2 L36.2 9.8 Z" fill="#fbbf24" />
          </svg>
        </div>
      ),
    },
    {
      id: 'customsoftware',
      title: 'Customer Software',
      subtitle: 'Development',
      category: 'web',
      techStack: 'Custom Logic • Node.js • APIs',
      brandColor: '#007ACC',
      glowColor: 'rgba(0, 122, 204, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-sky-200/80 hover:border-sky-500/80',
      borderDark: 'border-white/10 hover:border-sky-400/60',
      accentTextLight: 'text-sky-900',
      accentTextDark: 'text-sky-300',
      specs: ['Custom Tailored Business Logic', 'Event-Driven Microservices', 'Enterprise RBAC Authorization'],
      metricLabel: 'Architecture',
      metricValue: 'Clean Hex',
      icon: (
        // Bold VS Code Ribbon + Node.js Hexagon
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full" />
          <svg viewBox="0 0 60 44" className="relative w-13 h-10 drop-shadow-md" fill="none">
            {/* VS Code Ribbon */}
            <path d="M20 37 L3 25 L8 21 L20 30 L28 35.5 L20 37 Z" fill="#0065A9" />
            <path d="M20 7 L3 19 L8 23 L20 14 L28 8.5 L20 7 Z" fill="#007ACC" />
            <path d="M20 14 L8 22 L20 30 Z" fill="#1F9CF0" />
            <path d="M20 7 L30 14.5 C31 15.5 31.5 16.5 31.5 18 V26 C31.5 27.5 31 28.5 30 29.5 L20 37 Z" fill="#0065A9" />
            {/* Node.js Hexagon */}
            <g transform="translate(46, 22)">
              <path d="M0 -12 L10.5 -6 V6 L0 12 L-10.5 6 V-6 Z" fill="#339933" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">JS</text>
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'qa_testing',
      title: 'QA & Testing',
      subtitle: 'Software Testing',
      category: 'enterprise',
      techStack: 'Automation • Jest • Cypress • Playwright',
      brandColor: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-emerald-200/80 hover:border-emerald-500/80',
      borderDark: 'border-white/10 hover:border-emerald-400/60',
      accentTextLight: 'text-emerald-900',
      accentTextDark: 'text-emerald-300',
      specs: ['Automated End-to-End Test Pipelines', 'API & Integration Regression Suites', 'Zero-Bug Production Release Audits'],
      metricLabel: 'Pass Rate',
      metricValue: '99.8% Green',
      icon: (
        // Bold, High-Impact Quality Assurance (QA) & Software Testing Emblem
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 54 48" className="relative w-13 h-11 drop-shadow-md" fill="none">
            <defs>
              <linearGradient id="qa_shield_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            {/* Left: Quality Assurance Shield with Checkmark */}
            <path
              d="M20 7 L34 12 V23 C34 32.5 24 39.5 20 41.5 C16 39.5 6 32.5 6 23 V12 Z"
              fill="url(#qa_shield_grad)"
              stroke="#ffffff"
              strokeWidth="1.8"
            />
            {/* Crisp Checkmark on Shield */}
            <path
              d="M13 23.5 L17.5 28 L27 18.5"
              stroke="#ffffff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right: Automated Testing Suite / Bug Hunter Radar Scanner */}
            <g transform="translate(38, 24)">
              <circle cx="0" cy="0" r="11" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.6" />
              {/* Radar Scanner Grid lines */}
              <circle cx="0" cy="0" r="6" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <line x1="-11" y1="0" x2="11" y2="0" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
              <line x1="0" y1="-11" x2="0" y2="11" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
              {/* Green Passed Test Pulse Dots */}
              <circle cx="-3" cy="-3.5" r="1.8" fill="#10b981" />
              <circle cx="4" cy="3.5" r="1.8" fill="#10b981" />
              <circle cx="4" cy="-4" r="1.8" fill="#10b981" />
              {/* Scanner sweep arm */}
              <path d="M0 0 L8 -7" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* QA Badge Tag */}
            <rect x="25" y="5" width="16" height="8" rx="2" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
            <text x="33" y="11.5" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="monospace">QA</text>
          </svg>
        </div>
      ),
    },
    {
      id: 'iot',
      title: 'IoT',
      subtitle: 'Connected Devices',
      category: 'cloud',
      techStack: 'MQTT • Sensor Edge • Telemetry',
      brandColor: '#06B6D4',
      glowColor: 'rgba(6, 182, 212, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-cyan-200/80 hover:border-cyan-500/80',
      borderDark: 'border-white/10 hover:border-cyan-400/60',
      accentTextLight: 'text-cyan-900',
      accentTextDark: 'text-cyan-300',
      specs: ['Real-Time MQTT & CoAP Telemetry', 'Sensor Mesh & Edge Computing', 'Secure Over-the-Air (OTA) Updates'],
      metricLabel: 'Telemetry',
      metricValue: '<10ms Edge',
      icon: (
        // Bold, Clean Internet of Things (IoT) Icon: Smart Edge Processor + RF Wireless Telemetry Waves + Sensor Mesh
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 52 48" className="relative w-13 h-11 drop-shadow-md" fill="none">
            <defs>
              <linearGradient id="iot_chip_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
              <linearGradient id="iot_wave_grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            {/* Wireless RF Broadcast Telemetry Arcs (Top Right) */}
            <path
              d="M32 15 C37 18 40 22 40 27"
              stroke="url(#iot_wave_grad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M36 10 C43 14 47 20 47 27"
              stroke="url(#iot_wave_grad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M28 20 C31 22 33 24 33 27"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Smart Hardware Circuit Pins (Left, Bottom) */}
            <line x1="8" y1="21" x2="15" y2="21" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="8" y1="27" x2="15" y2="27" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="8" y1="33" x2="15" y2="33" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" />

            <line x1="21" y1="39" x2="21" y2="44" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="27" y1="39" x2="27" y2="44" stroke="#0891b2" strokeWidth="2.2" strokeLinecap="round" />

            {/* Central Smart IoT Hub & Microcontroller */}
            <rect x="15" y="15" width="22" height="24" rx="5" fill="url(#iot_chip_grad)" stroke="#ffffff" strokeWidth="1.8" />
            
            {/* Integrated Circuit Core Node */}
            <circle cx="26" cy="27" r="5" fill="#ffffff" />
            <circle cx="26" cy="27" r="2.5" fill="#0891b2" />

            {/* Connected Satellite Sensor / Hardware Nodes */}
            <circle cx="8" cy="11" r="3.2" fill="#10b981" stroke="#ffffff" strokeWidth="1.2" />
            <path d="M10 13 L16 17" stroke="#10b981" strokeWidth="1.6" strokeDasharray="2 1.5" />

            <circle cx="44" cy="38" r="3.2" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.2" />
            <path d="M36 34 L42 37" stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="2 1.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 'webapp',
      title: 'Web Application',
      subtitle: 'Development',
      category: 'web',
      techStack: 'React 18 • Next.js 14 • SSR',
      brandColor: '#61DAFB',
      glowColor: 'rgba(97, 218, 251, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-cyan-200/80 hover:border-cyan-500/80',
      borderDark: 'border-white/10 hover:border-cyan-400/60',
      accentTextLight: 'text-cyan-900',
      accentTextDark: 'text-cyan-300',
      specs: ['Server Components & Dynamic Edge', 'Instant Reactive Client Hydration', 'End-to-End Type Validation'],
      metricLabel: 'Lighthouse',
      metricValue: '100/100',
      icon: (
        // Bold Next.js + React Dual Emblem
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-400/25 blur-md rounded-full" />
          <svg viewBox="0 0 60 44" className="relative w-13 h-10 drop-shadow-md" fill="none">
            {/* Next.js Badge */}
            <circle cx="17" cy="22" r="14" fill={darkMode ? '#ffffff' : '#000000'} />
            <path d="M12.5 28.5 V15.5 L23.5 28.5 H25.5 V15.5 H22.5 V24.5 L14.5 15.5 H12.5" fill={darkMode ? '#000000' : '#ffffff'} />
            {/* React Symbol */}
            <g transform="translate(42, 22)">
              <circle cx="0" cy="0" r="3.2" fill="#61DAFB" />
              <ellipse cx="0" cy="0" rx="13" ry="4.8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(0)" />
              <ellipse cx="0" cy="0" rx="13" ry="4.8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60)" />
              <ellipse cx="0" cy="0" rx="13" ry="4.8" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120)" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'software',
      title: 'Software',
      subtitle: 'Maintenance',
      category: 'enterprise',
      techStack: 'GitHub • CI/CD • SecOps',
      brandColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-emerald-200/80 hover:border-emerald-500/80',
      borderDark: 'border-white/10 hover:border-emerald-400/60',
      accentTextLight: 'text-emerald-900',
      accentTextDark: 'text-emerald-200',
      specs: ['Continuous Security Patching', 'Automated Regression Suites', 'Zero-Downtime Deployments'],
      metricLabel: 'Uptime',
      metricValue: '99.99%',
      icon: (
        // Big GitHub Octocat + Emerald Shield Badge
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full" />
          <svg viewBox="0 0 48 48" className="relative w-12 h-12 drop-shadow-md" fill="none">
            <circle cx="24" cy="24" r="19" fill={darkMode ? '#ffffff' : '#24292e'} />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 9C15.7 9 9 15.7 9 24C9 30.6 13.3 36.2 19.2 38.2C20 38.3 20.2 37.9 20.2 37.5C20.2 37.1 20.2 36 20.2 34.7C16 35.6 15.1 33 15.1 33C14.4 31.3 13.5 30.8 13.5 30.8C12.1 29.9 13.6 29.9 13.6 29.9C15.1 30 15.9 31.5 15.9 31.5C17.2 33.8 19.4 33.1 20.3 32.7C20.4 31.8 20.8 31.1 21.2 30.7C17.9 30.4 14.5 29.1 14.5 23.3C14.5 21.7 15.1 20.3 16.1 19.3C15.9 18.9 15.4 17.4 16.2 15.3C16.2 15.3 17.5 14.9 20.3 16.9C21.5 16.5 22.8 16.4 24 16.4C25.2 16.4 26.5 16.5 27.7 16.9C30.5 14.9 31.8 15.3 31.8 15.3C32.6 17.4 32.1 18.9 31.9 19.3C32.9 20.3 33.5 21.7 33.5 23.3C33.5 29.1 30 30.3 26.7 30.7C27.2 31.2 27.7 32.1 27.7 33.5C27.7 35.5 27.7 37.2 27.7 37.5C27.7 37.9 28 38.4 28.8 38.2C34.7 36.2 39 30.6 39 24C39 15.7 32.3 9 24 9Z"
              fill={darkMode ? '#24292e' : '#ffffff'}
            />
            {/* Emerald Shield Badge */}
            <circle cx="36" cy="35" r="7" fill="#10b981" stroke={darkMode ? '#18181b' : '#ffffff'} strokeWidth="1.8" />
            <path d="M33 35 L35.2 37.2 L39 33.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      id: 'aws',
      title: 'AWS',
      subtitle: 'Cloud Solutions',
      category: 'cloud',
      techStack: 'EC2 • Lambda • S3 • VPC',
      brandColor: '#FF9900',
      glowColor: 'rgba(255, 153, 0, 0.5)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-amber-200/80 hover:border-amber-500/80',
      borderDark: 'border-white/10 hover:border-amber-400/60',
      accentTextLight: 'text-amber-900',
      accentTextDark: 'text-amber-300',
      specs: ['Elastic Autoscaling Compute', 'Serverless Event Handlers', 'CloudFront Global Edge CDN'],
      metricLabel: 'Edge Latency',
      metricValue: '<15ms Global',
      icon: (
        // Bold, Highly Legible AWS Cloud Emblem with Smile Arrow
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-amber-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 100 56" className="relative w-14 h-9 drop-shadow-md" fill="none">
            <path
              d="M22 34c-2.8 0-4.9-.7-6.3-1.9-1.4-1.2-2.1-2.9-2.1-5.1 0-2.3.7-4.1 2.2-5.3 1.5-1.2 3.6-1.8 6.4-1.8h5.4v-1.6c0-1.6-.4-2.8-1.3-3.6-.9-.8-2.1-1.2-3.8-1.2-1.5 0-2.8.3-3.9.9-1.1.6-2 1.5-2.6 2.5l-3.8-2.5c1-1.6 2.4-2.9 4.3-3.8 1.9-.9 4-1.3 6.4-1.3 3 0 5.4.8 7.1 2.3 1.7 1.5 2.5 3.7 2.5 6.6V34h-5.4v-2.6c-1.5 2-3.8 2.6-6.9 2.6zm1.1-4.3c1.7 0 3.1-.5 4.2-1.5 1.1-1 1.7-2.3 1.7-4v-1.9h-5.1c-1.5 0-2.7.4-3.5 1-0.8.6-1.2 1.6-1.2 2.7 0 1.1.4 2 1.1 2.6.7.7 1.7 1.1 2.8 1.1z"
              fill={darkMode ? '#ffffff' : '#232F3E'}
            />
            <path
              d="M51 34h-5.3l-4.8-17.5h5.5l2.5 10.4 2.7-10.4h4.5l2.7 10.4 2.5-10.4h5.6L61.7 34h-5.3l-2.9-10.5L51 34z"
              fill={darkMode ? '#ffffff' : '#232F3E'}
            />
            <path
              d="M80.8 34.3c-2.5 0-4.7-.6-6.5-1.8-1.8-1.2-2.8-3-2.9-5.3l5.3-.6c.1 1.3.7 2.2 1.6 2.8.9.6 2.1.9 3.5.9 1.3 0 2.3-.3 3-.8.7-.5 1-1.2 1-2 0-.7-.3-1.3-.9-1.7-.6-.4-1.6-.8-3-1.1l-3-.7c-2.2-.5-3.8-1.3-4.7-2.3-1-1.1-1.5-2.4-1.5-4 0-2.1.8-3.8 2.5-5 1.7-1.2 3.9-1.8 6.6-1.8 2.4 0 4.4.5 5.9 1.6 1.5 1.1 2.5 2.5 2.7 4.5l-5.2.6c-.1-1-.6-1.7-1.3-2.2-.8-.5-1.8-.7-3-.7-1.1 0-2 .2-2.6.7-.6.5-.9 1.1-.9 1.8 0 .6.3 1.2.9 1.6.6.4 1.5.7 2.8 1l3 0.7c2.4.6 4.1 1.4 5.2 2.5 1.1 1.1 1.6 2.5 1.6 4.2 0 2.2-.8 3.9-2.6 5.2-1.8 1.2-4.2 1.8-7.3 1.8z"
              fill={darkMode ? '#ffffff' : '#232F3E'}
            />
            {/* Orange Smile Arrow */}
            <path
              d="M17 41c18 9 46 9 66-1.5 1.5-.8 3.2.5 2.4 2-6.8 12.2-48.8 14-70.4 1.6-1.8-.9-.4-3.2 2-2.1z"
              fill="#FF9900"
            />
            <path
              d="M84.5 38c-2 2-5 4-7.5 5-.6.2-.9-.4-.6-.9 1.4-2.2 3.5-5.2 4.3-8 .2-.9 1.1-.6 1.4.1.8 1.7 2.4 4.3 3.8 5.7.5.5.2 1-.4 1-1.4 0-3.6-1-4.7-2.1l3.7-.8z"
              fill="#FF9900"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 'azure',
      title: 'AZURE',
      subtitle: 'Cloud Infrastructure',
      category: 'cloud',
      techStack: 'AKS • App Service • VNet',
      brandColor: '#0078D4',
      glowColor: 'rgba(0, 120, 212, 0.5)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-indigo-200/80 hover:border-indigo-500/80',
      borderDark: 'border-white/10 hover:border-indigo-400/60',
      accentTextLight: 'text-indigo-900',
      accentTextDark: 'text-indigo-300',
      specs: ['Azure Kubernetes Fleets', 'Entra ID Zero-Trust Auth', 'Cosmos DB Multi-Region Data'],
      metricLabel: 'Clusters',
      metricValue: 'Multi-Zone',
      icon: (
        // Bold, Multi-Faceted Microsoft Azure 3D Geometric Emblem
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 54 48" className="relative w-12 h-11 drop-shadow-md" fill="none">
            <path
              d="M18.8 42.5L4 42.5C3 42.5 2.3 41.7 2.6 40.8L22 4.4C22.5 3.5 23.7 3.2 24.6 3.7L37.3 11.4C38.2 12 38.5 13.1 38 14L22.5 41.3C22 42.1 21 42.5 18.8 42.5Z"
              fill="url(#azure_cloud_grad1_big)"
            />
            <path
              d="M20 30L30 13.5C30.5 12.7 31.6 12.3 32.5 12.7L49.4 20.9C50.3 21.4 50.7 22.4 50.2 23.3L39.8 42.5C39.3 43.3 38.1 43.7 37 43.4L20.4 32.8C19.4 32.2 19.3 31 20 30Z"
              fill="url(#azure_cloud_grad2_big)"
            />
            <path
              d="M20.4 32.8L34 23.8L39.8 42.5C39.3 43.3 38.1 43.7 37 43.4L20.4 32.8Z"
              fill="#005BA1"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="azure_cloud_grad1_big" x1="2.6" y1="3.7" x2="38" y2="42.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0078D4" />
                <stop offset="1" stopColor="#114A8B" />
              </linearGradient>
              <linearGradient id="azure_cloud_grad2_big" x1="20" y1="12.7" x2="50.2" y2="43.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#50E6FF" />
                <stop offset="1" stopColor="#0078D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: 'app',
      title: 'App',
      subtitle: 'Mobile iOS / Android',
      category: 'web',
      techStack: 'Apple iOS • Android • Flutter',
      brandColor: '#3DDC84',
      glowColor: 'rgba(61, 220, 132, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-purple-200/80 hover:border-purple-500/80',
      borderDark: 'border-white/10 hover:border-purple-400/60',
      accentTextLight: 'text-purple-900',
      accentTextDark: 'text-purple-300',
      specs: ['Fluid 120Hz Gestures', 'Offline-First SQLite Cache', 'Biometric & Keychain Auth'],
      metricLabel: 'Frame Rate',
      metricValue: '120 FPS',
      icon: (
        // Bold Apple & Android Mobile Duo
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-400/20 blur-md rounded-full" />
          <svg viewBox="0 0 58 42" className="relative w-13 h-10 drop-shadow-md" fill="none">
            {/* Apple Silhouette */}
            <g transform="translate(12, 21) scale(0.75)">
              <path d="M0 -15 C1 -18 3 -19 5 -19 C5.2 -17 4.2 -15 3 -14 C1.8 -13 0 -13 0 -15 Z" fill={darkMode ? '#ffffff' : '#111827'} />
              <path d="M5.5 -12 C3 -12 1.5 -10.5 0 -10.5 C-1.5 -10.5 -3 -12 -5.5 -12 C-9.5 -12 -13.5 -7.5 -13.5 0 C-13.5 7.5 -8 15 -5.5 15 C-4 15 -3 14 -0.5 14 C2 14 3 15 5 15 C7.5 15 13 8 13 1 C9.5 0.5 8 -3.5 8.5 -6 C9 -9 11.5 -10.5 12 -11 C9.5 -12.5 7.5 -12 5.5 -12 Z" fill={darkMode ? '#ffffff' : '#111827'} />
            </g>
            {/* Android Robot */}
            <g transform="translate(42, 22)">
              <line x1="-5.5" y1="-9" x2="-9" y2="-14" stroke="#3DDC84" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="5.5" y1="-9" x2="9" y2="-14" stroke="#3DDC84" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M-11 -4 C-11 -11 11 -11 11 -4 Z" fill="#3DDC84" />
              <circle cx="-4" cy="-7" r="1.3" fill="#ffffff" />
              <circle cx="4" cy="-7" r="1.3" fill="#ffffff" />
              <path d="M-11 -2 H11 V8 C11 10.5 9 11 7 11 H-7 C-9 11 -11 10.5 -11 8 Z" fill="#3DDC84" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'devops',
      title: 'DevOps',
      subtitle: 'CI/CD & Cloud',
      category: 'cloud',
      techStack: 'Docker • Kubernetes • Helm',
      brandColor: '#2496ED',
      glowColor: 'rgba(36, 150, 237, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-violet-200/80 hover:border-violet-500/80',
      borderDark: 'border-white/10 hover:border-violet-400/60',
      accentTextLight: 'text-violet-900',
      accentTextDark: 'text-violet-300',
      specs: ['Automated GitHub Actions Pipelines', 'Docker Multi-Stage Optimization', 'Zero-Downtime Rolling Kubernetes Pods'],
      metricLabel: 'Build Pipeline',
      metricValue: '<90s Fast',
      icon: (
        // Bold Docker Whale & Kubernetes Helm Duo
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/25 blur-md rounded-full" />
          <svg viewBox="0 0 60 44" className="relative w-13 h-10 drop-shadow-md" fill="none">
            {/* Docker Whale */}
            <g transform="translate(3, 9)">
              <rect x="7" y="7" width="3.5" height="3.5" fill="#2496ED" rx="0.5" />
              <rect x="11.5" y="7" width="3.5" height="3.5" fill="#2496ED" rx="0.5" />
              <rect x="16" y="7" width="3.5" height="3.5" fill="#2496ED" rx="0.5" />
              <rect x="11.5" y="2.5" width="3.5" height="3.5" fill="#2496ED" rx="0.5" />
              <rect x="16" y="2.5" width="3.5" height="3.5" fill="#2496ED" rx="0.5" />
              <path d="M22 11.5 C22 11.5 24 11.5 26 9.5 C26.5 11 25.5 13.5 23 15 C21 18 16 19 9 19 C4.5 19 2 17 1 13.5 C4.5 13.5 6.5 14 8 13.5 C10 12.5 10 11.5 10 11.5 H22 Z" fill="#2496ED" />
            </g>
            {/* Kubernetes Steering Helm */}
            <g transform="translate(46, 22)">
              <circle cx="0" cy="0" r="10.5" fill="#326CE5" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
              <path d="M0 -10.5 V-6 M0 10.5 V6 M-10.5 0 H-6 M10.5 0 H6 M-7.4 -7.4 L-4.2 -4.2 M7.4 7.4 L4.2 4.2 M-7.4 7.4 L-4.2 4.2 M7.4 -7.4 L4.2 -4.2" stroke="#ffffff" strokeWidth="1.8" />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: 'seo',
      title: 'SEO',
      subtitle: 'Rankings & Vitals',
      category: 'web',
      techStack: 'Google Vitals • Lighthouse 100',
      brandColor: '#4285F4',
      glowColor: 'rgba(52, 168, 83, 0.45)',
      bgLight: 'bg-white',
      bgDark: 'bg-zinc-900',
      borderLight: 'border-emerald-200/80 hover:border-emerald-500/80',
      borderDark: 'border-white/10 hover:border-emerald-400/60',
      accentTextLight: 'text-emerald-900',
      accentTextDark: 'text-emerald-300',
      specs: ['100/100 Core Web Vitals Score', 'Automated JSON-LD Structured Data', 'Search Console Indexation Mastery'],
      metricLabel: 'Core Vitals',
      metricValue: '100% Green',
      icon: (
        // Bold Google Multicolor 'G' + Lighthouse 100 Ring
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full" />
          <svg viewBox="0 0 60 44" className="relative w-13 h-10 drop-shadow-md" fill="none">
            {/* Google Multi-Color G */}
            <g transform="translate(17, 22)">
              <path d="M11 0 C11 6.5 6 11 0 11 C-6 11 -11 6.5 -11 0 C-11 -6.5 -6 -11 0 -11 C2.8 -11 5.3 -10 7.2 -8.2 L4.6 -5.6 C3.4 -6.8 1.8 -7.5 0 -7.5 C-4.2 -7.5 -7.5 -4.2 -7.5 0 C-7.5 4.2 -4.2 7.5 0 7.5 C3.6 7.5 6.2 5.2 6.7 2 H0 V-1.8 H10.4 C10.8 -1 11 0 11 0 Z" fill="#4285F4" />
              <path d="M0 11 C3.5 11 6.5 9.8 8.6 7.8 L5.3 5.2 C4.2 6 2.4 6.7 0 6.7 C-3.4 6.7 -6.3 4.5 -7.3 1.4 L-10.7 4.1 C-8.6 8.3 -4.6 11 0 11 Z" fill="#34A853" />
              <path d="M-7.3 1.4 C-7.6 0.5 -7.7 -0.3 -7.7 -1.3 C-7.7 -2.3 -7.6 -3.2 -7.3 -4.1 L-10.7 -6.7 C-11.6 -5 -12.1 -3.2 -12.1 -1.3 C-12.1 0.6 -11.6 2.4 -10.7 4.1 L-7.3 1.4 Z" fill="#FBBC05" />
              <path d="M0 -7.5 C2 -7.5 3.6 -6.8 5 -5.5 L8.3 -8.7 C6.3 -10.6 3.4 -11.8 0 -11.8 C-4.6 -11.8 -8.6 -9 -10.7 -4.9 L-7.3 -2.2 C-6.3 -5.3 -3.4 -7.5 0 -7.5 Z" fill="#EA4335" />
            </g>
            {/* Lighthouse 100 Score Ring */}
            <g transform="translate(46, 22)">
              <circle cx="0" cy="0" r="11" stroke="#059669" strokeWidth="2.8" fill="#10b981" fillOpacity="0.15" />
              <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="900" fontFamily="monospace">100</text>
            </g>
          </svg>
        </div>
      ),
    },
  ];

  // Filtered by selected category
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const selectedService = services.find(s => s.id === (hoveredServiceId || selectedServiceId)) || services[0];

  return (
    <div className="relative w-full max-w-lg mx-auto select-none py-0.5">
      {/* Dynamic Ambient Background Glow that smoothly responds to hover */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none transition-all duration-700">
        <div
          className="w-96 h-96 rounded-full blur-3xl opacity-30 dark:opacity-20 transition-colors duration-500"
          style={{ backgroundColor: selectedService.brandColor }}
        />
      </div>

      {/* Top Filter Bar: Category Pills */}
      <div className="flex items-center justify-between gap-1.5 mb-2.5 px-0.5">
        <div className="flex items-center gap-1 p-0.5 rounded-xl bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 overflow-x-auto scrollbar-none">
          {(['all', 'cloud', 'web', 'enterprise'] as CategoryType[]).map((cat) => {
            const labels: Record<CategoryType, string> = {
              all: 'All (12)',
              cloud: 'Cloud',
              web: 'Web & App',
              enterprise: 'Enterprise',
            };
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-bold'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {labels[cat]}
              </button>
            );
          })}
        </div>

        {/* Clean Live Status Tag */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Services Stack</span>
        </div>
      </div>

      {/* 3-Column Clean Simple Service Cards Grid with Big Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((item) => {
            const isSelected = item.id === selectedServiceId;
            const isHovered = item.id === hoveredServiceId;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredServiceId(item.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                onClick={() => setSelectedServiceId(item.id)}
                className={`h-[138px] p-2.5 rounded-2xl border flex flex-col items-center text-center justify-between backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                  darkMode ? `${item.bgDark} ${item.borderDark}` : `${item.bgLight} ${item.borderLight}`
                } ${
                  isSelected
                    ? 'ring-2 ring-[#FF5722] shadow-lg shadow-[#FF5722]/15 scale-[1.02]'
                    : 'shadow-xs hover:shadow-md hover:-translate-y-0.5'
                }`}
                style={{
                  boxShadow: (isHovered || isSelected) ? `0 10px 25px -5px ${item.glowColor}` : undefined,
                }}
              >
                {/* Top indicator: Category Name + Colored Accent Dot */}
                <div className="w-full flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 truncate max-w-[75px]">
                    {item.category}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full transition-transform duration-300 shadow-xs"
                    style={{ backgroundColor: item.brandColor }}
                  />
                </div>

                {/* Big, High-Impact Clean Icon Container */}
                <div className="my-1 flex items-center justify-center h-14 w-full shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* Typography: Title + Subtitle */}
                <div className="w-full text-center px-1 shrink-0">
                  <h4
                    className={`font-display font-bold text-[12px] sm:text-[13px] leading-tight tracking-tight truncate ${
                      darkMode ? item.accentTextDark : item.accentTextLight
                    }`}
                    title={item.title}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 leading-tight truncate mt-0.5"
                    title={item.subtitle}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Selected Service Live Architecture Info Box */}
      <motion.div
        layout
        key={selectedService.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`mt-2.5 p-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          darkMode
            ? 'bg-zinc-950/80 border-white/10 shadow-lg shadow-black/40'
            : 'bg-white/95 border-black/[0.06] shadow-md shadow-zinc-200/50'
        }`}
      >
        <div
          className="flex items-center justify-between gap-2 border-b pb-2 mb-2"
          style={{ borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedService.brandColor }} />
            <span className="font-display font-bold text-xs text-zinc-900 dark:text-white">
              {selectedService.title} Architecture
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#FF5722]/10 text-[#FF5722]">
              {selectedService.techStack}
            </span>
          </div>

          <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
            <span className="text-emerald-500 font-bold">{selectedService.metricValue}</span>
            <span>{selectedService.metricLabel}</span>
          </div>
        </div>

        {/* 3 Live Capabilities Checkmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[10px]">
          {selectedService.specs.map((spec, i) => (
            <div
              key={i}
              className={`px-2 py-1 rounded-lg flex items-center gap-1.5 font-mono ${
                darkMode ? 'bg-zinc-900/60 text-zinc-300' : 'bg-zinc-50 text-zinc-700'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="truncate">{spec}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
