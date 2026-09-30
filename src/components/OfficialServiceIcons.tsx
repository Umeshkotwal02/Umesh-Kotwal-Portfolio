import React from 'react';

// Authentic, vibrant SVG brand & domain symbols for all 12 services
// Designed with crisp vector paths and rich color palettes for maximum clarity in both light & dark mode.
export const OfficialServiceIcons: Record<string, (className?: string) => React.JSX.Element> = {
  // 1. AWS - Official Amazon Web Services cloud logo with signature orange smile arrow
  aws: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="awsBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#232F3E" />
          <stop offset="1" stopColor="#131921" />
        </linearGradient>
        <linearGradient id="awsSmile" x1="16" y1="42" x2="48" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9900" />
          <stop offset="1" stopColor="#FFB84D" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#awsBg)" />
      {/* AWS Typography */}
      <path
        d="M20.2 31.8c-.3-1.6-.7-3.4-.7-4.8 0-3.3 1.8-4.9 4.8-4.9 3.1 0 4.8 1.6 4.8 4.9 0 1.4-.4 3.2-.7 4.8h-8.2zm4.1-12.7c-5.7 0-9.2 3.3-9.2 9.5 0 2.2.5 4.6 1.1 6.8h5.3c-.3-1.4-.5-2.9-.5-4.3 0-1.8.8-2.8 2.5-2.8h1.7c.4 2.4.9 4.8 1.5 7.1h4.9c.7-2.3 1.1-4.7 1.5-7.1h1.7c1.7 0 2.5 1 2.5 2.8 0 1.4-.2 2.9-.5 4.3h5.3c.6-2.2 1.1-4.6 1.1-6.8 0-6.2-3.5-9.5-9.2-9.5-2.4 0-4.3.7-5.6 2.2-1.4-1.5-3.3-2.2-5.6-2.2z"
        fill="#FFFFFF"
      />
      {/* Signature AWS Orange Smile Arrow */}
      <path
        d="M17.5 41.5c7.2 4.3 16.5 4.5 24.2.8.8-.4 1.7.3 1.3 1.1-3.6 6.3-17.8 7.8-27.2 1.3-.9-.6-.2-1.9 1.7-3.2z"
        fill="url(#awsSmile)"
      />
      <path
        d="M44.5 40.2c-.9 1.2-2.9 2.5-4.3 3-.4.2-.6-.2-.4-.5.9-1.4 2.2-3.3 2.7-5 .2-.6.7-.4.9.1.5 1.1 1.5 2.8 2.4 3.6.3.3.1.6-.3.6-.9 0-2.3-.6-3-1.3l2-.5z"
        fill="url(#awsSmile)"
      />
    </svg>
  ),

  // 2. AZURE - Official Microsoft Azure folded geometric cloud logo
  azure: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="azureBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#001F3F" />
          <stop offset="1" stopColor="#00142A" />
        </linearGradient>
        <linearGradient id="azureRearGrad" x1="2.4" y1="4.7" x2="31.8" y2="40.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#114A8B" />
          <stop offset="1" stopColor="#0078D4" />
        </linearGradient>
        <linearGradient id="azureFrontGrad" x1="16.9" y1="12.7" x2="42" y2="41.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0078D4" />
          <stop offset="1" stopColor="#50E6FF" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#azureBg)" />
      <g transform="translate(10, 10)">
        {/* Rear angled facet */}
        <path
          d="M15.8 40.5L3.5 40.5C2.7 40.5 2.1 39.8 2.4 39.1L18.4 5.3C18.8 4.5 19.8 4.2 20.6 4.7L31.2 11.2C31.9 11.6 32.2 12.5 31.8 13.3L18.7 39.4C18.3 40.1 17.5 40.5 15.8 40.5Z"
          fill="url(#azureRearGrad)"
        />
        {/* Front folded facet */}
        <path
          d="M16.9 29.5L25.2 13.5C25.6 12.7 26.5 12.3 27.3 12.7L41.3 20.3C42.1 20.7 42.4 21.6 42 22.4L33.3 40.2C32.9 41 31.9 41.4 31 41.1L17.2 31.8C16.4 31.3 16.3 30.3 16.9 29.5Z"
          fill="url(#azureFrontGrad)"
        />
        {/* Shadow facet */}
        <path
          d="M17.2 31.8L28.5 23.4L33.3 40.2C32.9 41 31.9 41.4 31 41.1L17.2 31.8Z"
          fill="#005BA1"
          opacity="0.8"
        />
      </g>
    </svg>
  ),

  // 3. DevOps - Official Docker & Kubernetes CI/CD Infinite Pipeline Loop
  devops: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="devopsBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E1A2E" />
          <stop offset="1" stopColor="#09101C" />
        </linearGradient>
        <linearGradient id="devopsTrackGrad" x1="11" y1="22" x2="53" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2496ED" />
          <stop offset="50%" stopColor="#326CE5" />
          <stop offset="100%" stopColor="#FF5722" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#devopsBg)" />
      {/* Gradient infinity track */}
      <path
        d="M22 22 C15 22 11 26 11 32 C11 38 15 42 22 42 C29 42 35 22 42 22 C49 22 53 26 53 32 C53 38 49 42 42 42 C35 42 29 22 22 22 Z"
        stroke="url(#devopsTrackGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Docker Whale containers inside left loop */}
      <circle cx="21" cy="32" r="5" fill="#2496ED" />
      <rect x="17.5" y="28" width="2" height="2" rx="0.5" fill="#FFFFFF" />
      <rect x="20.5" y="28" width="2" height="2" rx="0.5" fill="#FFFFFF" />
      <rect x="19" y="25" width="2" height="2" rx="0.5" fill="#FFFFFF" />
      {/* Kubernetes Helm / Deployment gear inside right loop */}
      <circle cx="43" cy="32" r="5" fill="#326CE5" />
      <circle cx="43" cy="32" r="2.2" fill="#FFFFFF" />
      <line x1="43" y1="25" x2="43" y2="39" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="32" x2="50" y2="32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // 4. ERP & CRM - Enterprise Flow, Multi-tenant Ledger & Real-Time Sync Nodes
  erp: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="erpBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#082138" />
          <stop offset="1" stopColor="#041220" />
        </linearGradient>
        <linearGradient id="erpCylinder" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#erpBg)" />
      {/* Enterprise Database Stack + Real-time Data Sync */}
      <ellipse cx="32" cy="18" rx="17" ry="5.5" fill="#0284C7" />
      <ellipse cx="32" cy="18" rx="17" ry="5.5" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M15 18V27C15 30 22.5 32.5 32 32.5C41.5 32.5 49 30 49 27V18" stroke="#38BDF8" strokeWidth="2.5" />
      <path d="M15 27V36C15 39 22.5 41.5 32 41.5C41.5 41.5 49 39 49 36V27" stroke="#0EA5E9" strokeWidth="2.5" />
      <path d="M15 36V45C15 48 22.5 50.5 32 50.5C41.5 50.5 49 48 49 45V36" stroke="#0284C7" strokeWidth="2.5" />
      {/* Connected enterprise sync nodes with glowing pulses */}
      <line x1="45" y1="22" x2="53" y2="28" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="53" cy="28" r="4" fill="#F59E0B" />
      <circle cx="53" cy="28" r="1.5" fill="#FFFFFF" />
      <line x1="18" y1="42" x2="10" y2="47" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="10" cy="47" r="3.5" fill="#10B981" />
    </svg>
  ),

  // 5. E-Commerce - Modern Headless Storefront & Digital Cart Sales
  ecommerce: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="ecomBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B261A" />
          <stop offset="1" stopColor="#05170F" />
        </linearGradient>
        <linearGradient id="ecomBag" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#ecomBg)" />
      {/* Shopping Bag Contour */}
      <path
        d="M20 22 C20 15 25 10 32 10 C39 10 44 15 44 22 L48 50 C48 53 46 55 43 55 L21 55 C18 55 16 53 16 50 Z"
        fill="url(#ecomBag)"
      />
      {/* Bag Handle */}
      <path
        d="M25 22 C25 17.5 28 14 32 14 C36 14 39 17.5 39 22"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Glowing Currency / Price Tag Symbol */}
      <circle cx="32" cy="36" r="9" fill="#064E3B" stroke="#A7F3D0" strokeWidth="1.5" />
      <text x="32" y="41" textAnchor="middle" fill="#A7F3D0" fontSize="13" fontWeight="bold" fontFamily="monospace">$</text>
      {/* Checkout sparkles */}
      <circle cx="45" cy="18" r="2.5" fill="#34D399" />
    </svg>
  ),

  // 6. Customer Software - Bespoke Software Engine & Code Window
  customsoftware: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="customSoftBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A162B" />
          <stop offset="1" stopColor="#060C18" />
        </linearGradient>
        <linearGradient id="codeBrackets" x1="16" y1="20" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#customSoftBg)" />
      {/* IDE Window Frame */}
      <rect x="12" y="14" width="40" height="36" rx="6" fill="#132238" stroke="#1E3A5F" strokeWidth="1.8" />
      {/* Window Controls */}
      <circle cx="18" cy="20" r="1.8" fill="#EF4444" />
      <circle cx="23" cy="20" r="1.8" fill="#F59E0B" />
      <circle cx="28" cy="20" r="1.8" fill="#10B981" />
      <line x1="12" y1="25" x2="52" y2="25" stroke="#1E3A5F" strokeWidth="1.2" />
      {/* Code Brackets < / > */}
      <path d="M22 34L17 38L22 42" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 34L47 38L42 42" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="34" y1="31" x2="30" y2="45" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // 7. QA & Testing - Software Testing, Automated CI/CD Gates & Shield of Quality
  qa: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="qaBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07241A" />
          <stop offset="1" stopColor="#03140E" />
        </linearGradient>
        <linearGradient id="qaShieldGrad" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#qaBg)" />
      {/* Security & QA Shield */}
      <path
        d="M32 12L48 18V32C48 42 39 50 32 53C25 50 16 42 16 32V18L32 12Z"
        fill="url(#qaShieldGrad)"
        stroke="#34D399"
        strokeWidth="2"
      />
      {/* Bold Verified Checkmark */}
      <path
        d="M24 33L29 38L40 25"
        stroke="#FFFFFF"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // 8. IoT - Connected Devices, Sensor Microchip & Real-time Telemetry Antennas
  iot: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="iotBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#05222E" />
          <stop offset="1" stopColor="#03141C" />
        </linearGradient>
        <linearGradient id="chipGrad" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#0891B2" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#iotBg)" />
      {/* Microcontroller Silicon Die */}
      <rect x="21" y="21" width="22" height="22" rx="4" fill="url(#chipGrad)" stroke="#22D3EE" strokeWidth="1.5" />
      {/* Microchip Pins (Top & Bottom) */}
      <line x1="26" y1="15" x2="26" y2="21" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="15" x2="32" y2="21" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="15" x2="38" y2="21" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="43" x2="26" y2="49" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="43" x2="32" y2="49" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="43" x2="38" y2="49" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      {/* Microchip Pins (Left & Right) */}
      <line x1="15" y1="26" x2="21" y2="26" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="32" x2="21" y2="32" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="38" x2="21" y2="38" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="43" y1="26" x2="49" y2="26" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="43" y1="32" x2="49" y2="32" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <line x1="43" y1="38" x2="49" y2="38" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      {/* Wireless Signal Radiating from Center */}
      <circle cx="32" cy="32" r="3.5" fill="#FFFFFF" />
      <path d="M28 28C30.2 26 33.8 26 36 28" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M25 25C29 21.5 35 21.5 39 25" stroke="#67E8F9" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),

  // 9. Web Applications - React 18 Atom + Next.js App Router Architecture
  webapp: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="webappBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1B36" />
          <stop offset="1" stopColor="#061021" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#webappBg)" />
      {/* React Atom Ellipses */}
      <ellipse cx="32" cy="32" rx="19" ry="7" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
      <ellipse cx="32" cy="32" rx="19" ry="7" transform="rotate(60 32 32)" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
      <ellipse cx="32" cy="32" rx="19" ry="7" transform="rotate(120 32 32)" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
      {/* Core Nucleus */}
      <circle cx="32" cy="32" r="4.2" fill="#61DAFB" />
      {/* Next.js Badge */}
      <circle cx="48" cy="18" r="7" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
      <text x="48" y="22.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">N</text>
    </svg>
  ),

  // 10. Software Maintenance - Proactive Health, Security Hardening & Continuous Support
  software: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="softBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#082218" />
          <stop offset="1" stopColor="#03140E" />
        </linearGradient>
        <linearGradient id="softShield" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#softBg)" />
      {/* Maintenance Shield */}
      <path
        d="M32 10L49 17V32C49 42.5 39 51 32 54C25 51 15 42.5 15 32V17L32 10Z"
        fill="url(#softShield)"
        stroke="#34D399"
        strokeWidth="2.5"
      />
      {/* Synchronized Gear / Wrench maintenance icon */}
      <circle cx="32" cy="31" r="7" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="3 2" />
      <circle cx="32" cy="31" r="3" fill="#FFFFFF" />
      {/* Continuous SLA pulse dot */}
      <circle cx="43" cy="20" r="3.5" fill="#34D399" stroke="#064E3B" strokeWidth="1.5" />
    </svg>
  ),

  // 11. Microservices & APIs - Distributed Microservice Mesh & API Gateway Nodes
  microservices: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="msBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C0F38" />
          <stop offset="1" stopColor="#0F0820" />
        </linearGradient>
        <linearGradient id="msNode" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#msBg)" />
      {/* Interconnecting Service Mesh Lines */}
      <line x1="32" y1="20" x2="19" y2="42" stroke="#A855F7" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="32" y1="20" x2="45" y2="42" stroke="#A855F7" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="19" y1="42" x2="45" y2="42" stroke="#C084FC" strokeWidth="2" strokeDasharray="3 2" />
      <line x1="32" y1="20" x2="32" y2="35" stroke="#E9D5FF" strokeWidth="2" />
      {/* Central API Gateway Router Hub */}
      <circle cx="32" cy="35" r="5" fill="#C084FC" />
      <circle cx="32" cy="35" r="2" fill="#FFFFFF" />
      {/* Service Node 1 (Auth & Users) */}
      <circle cx="32" cy="18" r="6" fill="url(#msNode)" stroke="#D8B4FE" strokeWidth="2" />
      <circle cx="32" cy="18" r="2.5" fill="#FFFFFF" />
      {/* Service Node 2 (Catalog / Orders) */}
      <circle cx="18" cy="43" r="6" fill="url(#msNode)" stroke="#D8B4FE" strokeWidth="2" />
      <circle cx="18" cy="43" r="2.5" fill="#FFFFFF" />
      {/* Service Node 3 (BullMQ Worker) */}
      <circle cx="46" cy="43" r="6" fill="url(#msNode)" stroke="#D8B4FE" strokeWidth="2" />
      <circle cx="46" cy="43" r="2.5" fill="#FFFFFF" />
    </svg>
  ),

  // 12. Stripe & Payments - Stripe Connect, Escrow Timed Vault & Secure Payouts
  payments: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="payBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#250E28" />
          <stop offset="1" stopColor="#140616" />
        </linearGradient>
        <linearGradient id="cardGrad" x1="12" y1="18" x2="52" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EC4899" />
          <stop offset="1" stopColor="#BE185D" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#payBg)" />
      {/* Front Smart Payment Card */}
      <rect x="14" y="20" width="36" height="24" rx="4" fill="url(#cardGrad)" stroke="#F472B6" strokeWidth="1.5" />
      {/* Magnetic Stripe / Contactless Wave */}
      <rect x="14" y="25" width="36" height="5" fill="#831843" />
      {/* EMV Security Chip */}
      <rect x="19" y="33" width="7" height="6" rx="1" fill="#FDE047" stroke="#CA8A04" strokeWidth="0.8" />
      {/* Escrow Lock / Verified Payment Stamp */}
      <circle cx="42" cy="36" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.2" />
      <path d="M40 36L41.5 37.5L44 34.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // Supplemental: SEO & Search Performance
  seo: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="seoBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A2518" />
          <stop offset="1" stopColor="#04140D" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#seoBg)" />
      <circle cx="28" cy="27" r="13" stroke="#34D399" strokeWidth="4" fill="#10B981" fillOpacity="0.1" />
      <path d="M38 37L50 49" stroke="#34A853" strokeWidth="5" strokeLinecap="round" />
      <path d="M21 32L26 27L30 30L35 22" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="45" cy="18" r="6" fill="#10B981" />
      <text x="45" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="monospace">100</text>
    </svg>
  ),

  // Supplemental: CRM Salesforce Cloud
  crm: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="crmBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#001F3F" />
          <stop offset="1" stopColor="#001020" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#crmBg)" />
      <path
        d="M22 44C16.5 44 12 39.5 12 34C12 29.5 15 25.5 19.5 24.5C21 17.5 27 12 34 12C41.5 12 47.5 17 48.5 24C53 25 56 29 56 33.5C56 39.3 51.3 44 45.5 44H22Z"
        fill="#00A1E0"
      />
      <circle cx="32" cy="27" r="4.5" fill="#FFFFFF" />
      <path d="M24 39C24 35 27.5 32.5 32 32.5C36.5 32.5 40 35 40 39" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // Supplemental: Mobile Apps (Apple + Android)
  app: (className = "w-10 h-10") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="appBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A102F" />
          <stop offset="1" stopColor="#0C0617" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#appBg)" />
      {/* Apple on Left */}
      <g transform="translate(10, 15) scale(0.65)">
        <path
          d="M15.2 12.9C15.2 8.3 19 6 19.2 5.8C17 2.6 13.6 2.1 12.4 2C9.5 1.7 6.8 3.7 5.3 3.7C3.8 3.7 1.6 2 0.8 2C-1.8 2.4 -4.8 4.7 -6.2 7.7C-9 13.6 -6.9 22.3 -4.2 26.9C-2.9 29.1 -1.4 31.6 0.6 31.5C2.5 31.4 3.3 30.3 5.6 30.3C7.9 30.3 8.6 31.5 10.6 31.5C12.7 31.5 14 29.3 15.3 27.1C16.8 24.6 17.4 22.1 17.5 22C17.3 21.9 15.2 21 15.2 12.9Z"
          fill="#FFFFFF"
          transform="translate(10, 0)"
        />
        <path
          d="M20.2 0C21.4 -1.5 22.2 -3.6 22 -5.7C20.1 -5.6 17.9 -4.4 16.7 -2.9C15.6 -1.5 14.7 0.6 15 2.7C17.1 2.8 19.1 1.5 20.2 0Z"
          fill="#FFFFFF"
        />
      </g>
      {/* Android on Right */}
      <g transform="translate(32, 22)">
        <line x1="6" y1="4" x2="3" y2="0" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="4" x2="19" y2="0" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 14 C2 7 6.5 2 11 2 C15.5 2 20 7 20 14 Z" fill="#3DDC84" />
        <circle cx="6.5" cy="8.5" r="1.3" fill="#FFFFFF" />
        <circle cx="15.5" cy="8.5" r="1.3" fill="#FFFFFF" />
        <rect x="2" y="16" width="18" height="12" rx="3" fill="#3DDC84" />
      </g>
    </svg>
  )
};
