import React from 'react';

// Official, authentic SVG brand icons for the 12 services
export const OfficialServiceIcons: Record<string, (className?: string) => React.JSX.Element> = {
  // 1. AWS - Official Amazon Web Services logo with signature orange smile
  aws: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#232F3E" />
      {/* AWS typography */}
      <path
        d="M20.2 31.8c-.3-1.6-.7-3.4-.7-4.8 0-3.3 1.8-4.9 4.8-4.9 3.1 0 4.8 1.6 4.8 4.9 0 1.4-.4 3.2-.7 4.8h-8.2zm4.1-12.7c-5.7 0-9.2 3.3-9.2 9.5 0 2.2.5 4.6 1.1 6.8h5.3c-.3-1.4-.5-2.9-.5-4.3 0-1.8.8-2.8 2.5-2.8h1.7c.4 2.4.9 4.8 1.5 7.1h4.9c.7-2.3 1.1-4.7 1.5-7.1h1.7c1.7 0 2.5 1 2.5 2.8 0 1.4-.2 2.9-.5 4.3h5.3c.6-2.2 1.1-4.6 1.1-6.8 0-6.2-3.5-9.5-9.2-9.5-2.4 0-4.3.7-5.6 2.2-1.4-1.5-3.3-2.2-5.6-2.2z"
        fill="#FFFFFF"
      />
      {/* Signature AWS Orange Smile Arrow */}
      <path
        d="M17.5 41.5c7.2 4.3 16.5 4.5 24.2.8.8-.4 1.7.3 1.3 1.1-3.6 6.3-17.8 7.8-27.2 1.3-.9-.6-.2-1.9 1.7-3.2z"
        fill="#FF9900"
      />
      <path
        d="M44.5 40.2c-.9 1.2-2.9 2.5-4.3 3-.4.2-.6-.2-.4-.5.9-1.4 2.2-3.3 2.7-5 .2-.6.7-.4.9.1.5 1.1 1.5 2.8 2.4 3.6.3.3.1.6-.3.6-.9 0-2.3-.6-3-1.3l2-.5z"
        fill="#FF9900"
      />
    </svg>
  ),

  // 2. AZURE - Official Microsoft Azure folded geometric cloud logo
  azure: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#001833" />
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
      <defs>
        <linearGradient id="azureRearGrad" x1="2.4" y1="4.7" x2="31.8" y2="40.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#114A8B" />
          <stop offset="1" stopColor="#0078D4" />
        </linearGradient>
        <linearGradient id="azureFrontGrad" x1="16.9" y1="12.7" x2="42" y2="41.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0078D4" />
          <stop offset="1" stopColor="#50E6FF" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // 3. DevOps - Official Docker & Kubernetes & CI/CD Infinite Loop
  devops: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#0E1726" />
      {/* Gradient infinity track */}
      <path
        d="M22 22 C15 22 11 26 11 32 C11 38 15 42 22 42 C29 42 35 22 42 22 C49 22 53 26 53 32 C53 38 49 42 42 42 C35 42 29 22 22 22 Z"
        stroke="url(#devopsTrackGrad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Docker Whale silhouette inside left loop */}
      <circle cx="21" cy="32" r="4.5" fill="#2496ED" />
      <rect x="17" y="27" width="2" height="2" rx="0.5" fill="#FFFFFF" />
      <rect x="20" y="27" width="2" height="2" rx="0.5" fill="#FFFFFF" />
      <rect x="23" y="27" width="2" height="2" rx="0.5" fill="#FFFFFF" />
      {/* Kubernetes helm / Git commit wheel inside right loop */}
      <circle cx="43" cy="32" r="4.5" fill="#326CE5" />
      <circle cx="43" cy="32" r="2" fill="#FFFFFF" />
      <defs>
        <linearGradient id="devopsTrackGrad" x1="11" y1="22" x2="53" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2496ED" />
          <stop offset="50%" stopColor="#326CE5" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // 4. SEO - Official Google Search / Lighthouse Performance & Rankings
  seo: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#0A2518" />
      {/* Google-colored magnifier with rising rank metrics */}
      <circle cx="28" cy="27" r="14" stroke="url(#seoRingGrad)" strokeWidth="4.5" fill="#10B981" fillOpacity="0.1" />
      <path d="M38 37L50 49" stroke="#34A853" strokeWidth="6" strokeLinecap="round" />
      {/* Rising growth chart arrows inside */}
      <path d="M20 33L26 27L30 30L36 21" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 21H36V25" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* 100/100 Core Web Vitals badge */}
      <circle cx="46" cy="18" r="7" fill="#10B981" />
      <text x="46" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">100</text>
      <defs>
        <linearGradient id="seoRingGrad" x1="14" y1="13" x2="42" y2="41" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="35%" stopColor="#EA4335" />
          <stop offset="70%" stopColor="#FBBC05" />
          <stop offset="100%" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // 5. ERP - Enterprise Resource Planning (SAP / Database System Flow)
  erp: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#051C2C" />
      {/* Enterprise Database Stack + Real-time Data Sync */}
      <ellipse cx="32" cy="17" rx="18" ry="6" fill="#0284C7" />
      <path d="M14 17V26C14 29.3 22 32 32 32C42 32 50 29.3 50 26V17" fill="none" stroke="#38BDF8" strokeWidth="3" />
      <path d="M14 26V35C14 38.3 22 41 32 41C42 41 50 38.3 50 35V26" fill="none" stroke="#0EA5E9" strokeWidth="3" />
      <path d="M14 35V44C14 47.3 22 50 32 50C42 50 50 47.3 50 44V35" fill="none" stroke="#0284C7" strokeWidth="3" />
      {/* Connected enterprise sync nodes */}
      <circle cx="47" cy="20" r="4.5" fill="#F59E0B" />
      <circle cx="17" cy="42" r="4" fill="#10B981" />
    </svg>
  ),

  // 6. E-Commerce - Official Shopify & Digital Commerce Cart
  ecommerce: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#0D2418" />
      {/* Official Shopify Shopping Bag style */}
      <path
        d="M20 22 C20 15 25 10 32 10 C39 10 44 15 44 22 L49 48 C49 51 47 54 44 54 L20 54 C17 54 15 51 15 48 Z"
        fill="#95BF47"
      />
      <path
        d="M26 22 C26 18 29 15 32 15 C35 15 38 18 38 22"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Signature white 'S' / checkout tag */}
      <path
        d="M36 31 C36 29 34 27.5 31.5 27.5 C29 27.5 28 29 28 30.5 C28 34 36 34.5 36 38.5 C36 41.5 33.5 43 31 43 C28 43 26.5 41 26.5 39"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  // 7. CRM - Official Salesforce & Client Portal Engine
  crm: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#001F3F" />
      {/* Salesforce style iconic blue cloud */}
      <path
        d="M22 44C16.5 44 12 39.5 12 34C12 29.5 15 25.5 19.5 24.5C21 17.5 27 12 34 12C41.5 12 47.5 17 48.5 24C53 25 56 29 56 33.5C56 39.3 51.3 44 45.5 44H22Z"
        fill="#00A1E0"
      />
      {/* People / Client contact silhouette inside */}
      <circle cx="32" cy="27" r="4.5" fill="#FFFFFF" />
      <path d="M24 39C24 35 27.5 32.5 32 32.5C36.5 32.5 40 35 40 39" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  // 8. Web Application - Official React Atom + Next.js Mark
  webapp: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#0A192F" />
      {/* React Atom Ellipses */}
      <ellipse cx="32" cy="32" rx="20" ry="7.5" fill="none" stroke="#61DAFB" strokeWidth="2.5" />
      <ellipse cx="32" cy="32" rx="20" ry="7.5" transform="rotate(60 32 32)" fill="none" stroke="#61DAFB" strokeWidth="2.5" />
      <ellipse cx="32" cy="32" rx="20" ry="7.5" transform="rotate(120 32 32)" fill="none" stroke="#61DAFB" strokeWidth="2.5" />
      {/* Center nucleus */}
      <circle cx="32" cy="32" r="4.5" fill="#61DAFB" />
      {/* Next.js N badge */}
      <circle cx="48" cy="18" r="6" fill="#000000" stroke="#FFFFFF" strokeWidth="1.5" />
      <text x="48" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">N</text>
    </svg>
  ),

  // 9. Software (Maintenance & Code Integrity) - Verified Shield & Git
  software: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#091E14" />
      {/* Cyber Security & Maintenance Shield */}
      <path
        d="M32 10L49 17V32C49 42.5 39 51 32 54C25 51 15 42.5 15 32V17L32 10Z"
        fill="url(#shieldGrad)"
        stroke="#10B981"
        strokeWidth="3"
      />
      {/* Verified checkmark */}
      <path d="M24 32L30 38L41 26" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="shieldGrad" x1="15" y1="10" x2="49" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // 10. Customer Software (Custom Software Development) - Official VS Code & Code Brackets
  customsoftware: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#0B132B" />
      {/* Official Visual Studio Code folded ribbon */}
      <g transform="translate(10, 10)">
        <path d="M33 3.5L25 10L14.5 18.5L3 27L14.5 35.5L25 44L33 50.5C34.5 51.5 37 50.5 37 48.5V5.5C37 3.5 34.5 2.5 33 3.5Z" fill="#0065A9" />
        <path d="M33 50.5L14.5 35.5L3 44.5L1.5 43C0.5 42 0.5 40.5 1.5 39.5L11.5 32L1.5 24.5C0.5 23.5 0.5 22 1.5 21L3 19.5L14.5 28.5L33 13.5V50.5Z" fill="#007ACC" />
        <path d="M25 44L37 35.5V18.5L25 10L18 27L25 44Z" fill="#1F9CF0" />
      </g>
    </svg>
  ),

  // 11. App (Mobile Apps) - Official Apple + Android Duo
  app: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#1A102F" />
      {/* Apple Logo on Left */}
      <g transform="translate(12, 16) scale(0.65)">
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
      {/* Android Robot Head on Right */}
      <g transform="translate(32, 22)">
        {/* Antennas */}
        <line x1="6" y1="4" x2="3" y2="0" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="4" x2="19" y2="0" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" />
        {/* Semi-circle head */}
        <path d="M2 14 C2 7 6.5 2 11 2 C15.5 2 20 7 20 14 Z" fill="#3DDC84" />
        {/* Eyes */}
        <circle cx="6.5" cy="8.5" r="1.3" fill="#FFFFFF" />
        <circle cx="15.5" cy="8.5" r="1.3" fill="#FFFFFF" />
        {/* Body */}
        <rect x="2" y="16" width="18" height="12" rx="3" fill="#3DDC84" />
      </g>
    </svg>
  ),

  // 12. QA - Quality Assurance & Software Testing (Shield with Checkmark)
  qa: (className = "w-7 h-7") => (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect width="64" height="64" rx="14" fill="#06281E" />
      <g transform="translate(14, 10)">
        {/* Shield */}
        <path
          d="M18 4 L33 9 V18 C33 27 24 33.5 18 35.5 C12 33.5 3 27 3 18 V9 Z"
          fill="url(#qaShieldGrad)"
          stroke="#34D399"
          strokeWidth="2"
        />
        {/* Checkmark */}
        <path
          d="M11 18.5 L15.5 23 L24 13.5"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient id="qaShieldGrad" x1="3" y1="4" x2="33" y2="35.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
