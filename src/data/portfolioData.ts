import { Project, Experience, Skill, Certification, Service, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: "Umesh Kotwal",
  title: "Full Stack Developer (React.js / Next.js / Node.js)",
  shortBio: "Architecting high-throughput microservices, fault-tolerant background queues (BullMQ/DLQ), Redis caching, and pixel-perfect Next.js/React web applications.",
  fullBio: "Full Stack Developer with 2+ years of production experience crafting scalable backend architectures and modern frontend web apps. Specialized in microservices design, high-frequency Redis caching, BullMQ job queues with Dead Letter Queue strategies for zero data loss, WebSockets, Stripe Connect payouts, and AWS ECS CI/CD deployment. Trusted backend lead for Dubai-based enterprise clients.",
  location: "Surat, Gujarat, India",
  phone: "+91 6352001332",
  email: "umeshkotwal658@gmail.com",
  avatarUrl: "https://umeshkotwal.vercel.app/assets/about-us-BJhTeHfc.jpeg",
  portfolioUrl: "https://umeshkotwal.vercel.app/",
  githubUrl: "https://github.com/Umeshkotwal02/",
  linkedinUrl: "https://www.linkedin.com/in/umeshkotwal07/",
  cgpa: "8.18",
  degree: "B.Tech, Computer Engineering",
  college: "KCE Society's College of Engineering & Management, Jalgaon, Maharashtra",
  graduationYear: "2019 – 2023",
  availabilityStatus: "Available for Senior / Full Stack Opportunities & High-Impact Contracts",
  yearsExperience: "2+ Years Production Experience",
  keyMetrics: [
    { label: "Years Experience", value: "2+" },
    { label: "Production Backend Systems", value: "15+" },
    { label: "System Uptime Rate", value: "99.9%" },
    { label: "Data Loss Prevention", value: "0% Loss (DLQ)" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "vyonic",
    title: "Vyonic",
    subtitle: "Dubai-Based Health & Fitness Platform",
    description: "End-to-end backend microservices platform managing fitness onboarding, gym assessment booking, trainer availability scheduling, paid session unlocking, and Stripe transaction handling.",
    clientLocation: "Dubai, UAE",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "Stripe API", "REST API"],
    category: "microservices",
    featured: true,
    image: "/projects/vyonic.png",
    highlights: [
      "Served as Backend Team Lead, orchestrating cross-functional communications between frontend, mobile, and admin teams.",
      "Architected the complete user journey from goal-selection registration to paid session unlocking.",
      "Engineered gym management and trainer onboarding with availability scheduling, session assignment, and referrals.",
      "Integrated automated Stripe payments for gym assessments and subscription session packages."
    ],
    architectureDetails: "Built with Node.js and Express microservices connected to PostgreSQL via Prisma ORM. Utilized Redis for fast trainer availability lookups and BullMQ queues to handle async notification dispatching with DLQ retry guarantees.",
    links: {
      live: "https://vyonic-labs.com/",
      github: "https://github.com/Umeshkotwal02/",
    },
    metrics: ["10k+ Monthly Sessions", "<40ms Redis Cache Latency", "Zero Data Loss Queue"]
  },
  {
    id: "vybemena",
    title: "Vybemena",
    subtitle: "Dubai Event Management & Payout Platform",
    description: "Full-stack event platform empowering organizers to publish, manage, and monetize events with Stripe Connect 48-hour automated payouts, 3% commission logic, and QR-code ticket scanning.",
    clientLocation: "Dubai, UAE",
    techStack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe Connect", "QR Scanner"],
    category: "fullstack",
    featured: true,
    image: "/projects/vybemena.png",
    highlights: [
      "Integrated Stripe Connect for organizer KYC verification, bank account validation, and automated payouts 48 hours post-event.",
      "Implemented a 3% platform commission revenue model with automated split payments.",
      "Built QR-code ticket verification system for instant mobile attendee check-in at event venues."
    ],
    architectureDetails: "Full-stack React & Node.js application using Stripe Connect Custom Account onboarding, handling KYC webhooks, escrow holds, and instant QR verification endpoints.",
    links: {
      live: "https://vybemena.com",
      github: "https://github.com/Umeshkotwal02/",
    },
    metrics: ["48h Auto Payouts", "3% Platform Commission", "Instant QR Scan Verification"]
  },
  {
    id: "kesaria-textile",
    title: "Kesaria Textile",
    subtitle: "SEO-Optimized B2B Textile Marketplace",
    description: "High-volume SEO-first e-commerce marketplace for textile manufacturers, ranking on Google's 1st page for top textile keywords across India and international markets.",
    clientLocation: "Surat, India / Global",
    techStack: ["React.js", "Redux Toolkit", "SCSS", "React-Bootstrap", "Node.js", "Sitemap Engine"],
    category: "ecommerce",
    featured: true,
    image: "/projects/kesaria-textile.png",
    highlights: [
      "Achieved Google #1 page ranking for multiple competitive high-volume textile keywords.",
      "Structured dynamic location-based landing pages across countries, states, and cities with automated dynamic sitemaps.",
      "Converted complex Figma designs into pixel-perfect, accessible UI components with high performance scores."
    ],
    architectureDetails: "Optimized React & Next.js architecture with server-side rendered metadata, structured schema markup, and lazy-loaded media assets achieving 95+ Lighthouse SEO score.",
    links: {
      live: "https://kesariatextile.com",
      github: "https://github.com/Umeshkotwal02/",
    },
    metrics: ["#1 Page Google SEO", "100k+ Indexed Dynamic Pages", "95+ Lighthouse Score"]
  },
  {
    id: "worcspace-erp",
    title: "Worcspace Enterprise ERP",
    subtitle: "Modular Workspace, Inventory & Ledger System",
    description: "Comprehensive enterprise workspace and ERP suite featuring real-time financial analytics dashboards, project management, and double-entry voucher ledger management (receipts, payments, contra, journal entries).",
    clientLocation: "Surat / Enterprise Clients",
    techStack: ["React.js", "Node.js", "MySQL", "Redux Toolkit", "Express", "Tailwind CSS"],
    category: "fullstack",
    featured: true,
    image: "/projects/worcspace.png",
    highlights: [
      "Built modular ERP architecture supporting Sales, Purchase, Inventory, and Accounting modules.",
      "Implemented double-entry voucher transaction state handling (receipt, payment, contra, and journal entries).",
      "Designed real-time financial reporting analytics with interactive profit/loss and ledger visualizers."
    ],
    architectureDetails: "Stateful React application powered by Redux Toolkit and MySQL transaction safety with row-level locks for concurrent accounting ledger entries.",
    links: {
      live: "https://worcspace.vercel.app/",
      github: "https://github.com/Umeshkotwal02/worcspace",
    },
    metrics: ["Double-Entry Precision", "Real-Time Ledger Sync", "Role-Based Audit Trail"]
  },
  {
    id: "ai-background-remover",
    title: "AI Image Background Remover",
    subtitle: "In-Browser WebAssembly Image Processing",
    description: "High-performance browser-based background remover tool using React.js and client-side AI image segmentation models. Specifically optimized for instant passport-size photo preparation and product image processing.",
    clientLocation: "Global SaaS / Open Source",
    techStack: ["React.js", "WebAssembly", "Canvas API", "Tailwind CSS", "Vite"],
    category: "realtime",
    featured: true,
    image: "/projects/background-remover.png",
    highlights: [
      "Implemented zero-latency client-side background removal using browser WebAssembly inference.",
      "Engineered canvas tools for real-time photo scaling, background color replacement, and passport photo dimensions.",
      "Zero server processing overhead and 100% user data privacy by processing images entirely on the client machine."
    ],
    architectureDetails: "Client-side WebAssembly inference engine coupled with HTML5 2D Canvas rendering for instant edge feathering and alpha channel masking.",
    links: {
      live: "https://image-background-remover-in-react-j.vercel.app",
      github: "https://github.com/Umeshkotwal02/Image-Background-Remover-In-ReactJs",
    },
    metrics: ["100% Client-Side Privacy", "Sub-second Wasm Processing", "Passport Standard Export"]
  },
  {
    id: "pdf-editor-resume-builder",
    title: "Fabric.js PDF Editor & Resume Suite",
    subtitle: "Interactive Document Suite with Payment Gateways",
    description: "Interactive browser PDF editor supporting real-time text placement, drag-and-drop annotations, export, and a full-stack Resume Builder with Razorpay/Stripe subscription plans.",
    clientLocation: "Global SaaS",
    techStack: ["React.js", "Fabric.js", "Node.js", "MySQL", "Razorpay", "Stripe"],
    category: "realtime",
    featured: false,
    image: "/projects/worcspace.png",
    highlights: [
      "Engineered visual PDF canvas editor using Fabric.js for real-time text editing and element dragging.",
      "Delivered full-stack Resume Builder platform with user authentication, template customization, and payment unlock.",
      "Integrated Razorpay and Stripe subscription billing flows with webhook event handling."
    ],
    architectureDetails: "Canvas object model with Fabric.js synchronized to backend storage, rendering pixel-perfect vector exports to high-res PDF downloads.",
    links: {
      live: "https://full-stack-developer-umesh-kotwal.vercel.app/",
      github: "https://github.com/Umeshkotwal02/Resume_Backend",
    },
    metrics: ["Real-time Canvas Rendering", "PDF Vector Export", "Multi-Gateway Support"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Code Expert Solutions",
    role: "Full Stack Developer",
    period: "Mar 2026 – Present",
    location: "Surat, Gujarat",
    type: "Full-time",
    current: true,
    summary: "Architecting microservices backend applications, Redis caching, BullMQ job queue DLQ strategies, and leading client interactions for Dubai-based enterprise stakeholders.",
    responsibilities: [
      "Design and develop scalable RESTful APIs using Node.js, Express.js, PostgreSQL/MySQL, and Prisma ORM for high-traffic web and mobile products.",
      "Architect microservices-based backends enabling secure inter-service communication and isolated database scaling.",
      "Implement Redis caching, session management, and rate-limiting, reducing repeated database strain on hot API endpoints.",
      "Build fault-tolerant background job queues with BullMQ and Dead Letter Queue (DLQ) retry handlers to ensure zero data loss.",
      "Develop real-time features using WebSockets — live notifications, real-time data synchronization, and instant chat.",
      "Integrate Firebase Cloud Messaging (FCM) for push notifications and Stripe for payment subscriptions.",
      "Primary backend contact for Dubai-based clients, gathering requirements, proposing architecture designs, and managing delivery.",
      "Own production DevOps pipelines using Docker, Jenkins, and Contabo, plus AWS ECS CI/CD via Bitbucket PRs and task definitions."
    ],
    skills: ["Node.js", "Express.js", "Microservices", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ (DLQ)", "WebSockets", "Docker", "AWS ECS", "Jenkins", "Stripe"],
    impactMetrics: ["Zero Data Loss DLQ Queues", "Reduced DB Load with Redis", "AWS ECS Auto Deployments"]
  },
  {
    id: "exp-2",
    company: "Enterprise Web Technologies",
    role: "MERN Stack Developer",
    period: "Sep 2024 – Feb 2026",
    location: "Surat, Gujarat",
    type: "Full-time",
    summary: "Built high-performance web applications with React, Next.js, Redux Toolkit, third-party AI APIs, Stripe Connect KYC, and Agora live-streaming.",
    responsibilities: [
      "Converted Figma wireframes into pixel-perfect, accessible React components for major e-commerce platforms (Kesaria Textile, Kapoor Lehenga Saree).",
      "Architected RESTful API structures and integrated AI APIs; implemented real-time live-streaming using Agora SDK.",
      "Engineered secure checkout flows with Razorpay and Stripe, handling webhooks, state machines, and subscription billing.",
      "Built a Document Management System (DMS) with Role-Based Access Control (RBAC), automated email triggers, and secure upload handling.",
      "Developed an interactive Fabric.js PDF editor and delivered full-stack ownership of a Resume Builder platform with Node.js/MySQL.",
      "Improved organic SEO visibility through metadata optimization, dynamic sitemaps, and deployment on Hostinger."
    ],
    skills: ["React.js", "Next.js", "Redux Toolkit", "Node.js", "MySQL", "Fabric.js", "Agora SDK", "Stripe Connect", "Razorpay", "SEO Optimization"],
    impactMetrics: ["Google 1st Page Ranking", "Fabric.js Canvas PDF Editor", "Stripe Connect KYC Implementation"]
  },
  {
    id: "exp-3",
    company: "Webito Infotech",
    role: "ReactJs Developer Intern",
    period: "Aug 2024 – Sep 2024",
    location: "Surat, Gujarat",
    type: "Internship",
    summary: "Built responsive user interfaces using React.js, JavaScript, and Bootstrap in collaboration with senior front-end engineers.",
    responsibilities: [
      "Developed modular and responsive front-end components using React.js, HTML5, CSS3, and Bootstrap.",
      "Worked closely with UI/UX designers and senior developers to optimize component reusability and page speed."
    ],
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    id: "exp-4",
    company: "Profound Edutech Pvt Ltd",
    role: "Trainee Engineer",
    period: "July 2023 – Feb 2024",
    location: "Pune, Maharashtra",
    type: "Trainee",
    summary: "Intensive engineering training in Java, MySQL, MERN stack, REST APIs, and microservices architecture fundamentals.",
    responsibilities: [
      "Trained in Java, MySQL, React.js, Node.js, Express.js, RESTful API design, and microservices fundamentals.",
      "Developed full-stack web applications to solidify backend development and relational database structures."
    ],
    skills: ["Java", "MySQL", "React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "exp-5",
    company: "R3 Systems India Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Nov 2021 – Jan 2022",
    location: "Remote",
    type: "Internship",
    summary: "Learned core web engineering fundamentals including HTML, CSS, JavaScript, and responsive layout workflows.",
    responsibilities: [
      "Learned foundational web technologies (HTML5, CSS3, JavaScript ES6) and cross-browser responsive design principles.",
      "Assisted senior engineers in building basic UI components and testing layout responsiveness across mobile devices."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web"],
  }
];

export const SKILLS: Skill[] = [
  // Backend & Architecture
  { name: "Node.js & Express.js", category: "backend", level: 95, iconName: "Server", yearsOfExp: "2+ yrs", tags: ["RESTful API", "Microservices", "Middleware", "ESM/CJS"] },
  { name: "Microservices Architecture", category: "backend", level: 90, iconName: "Layers", yearsOfExp: "2+ yrs", tags: ["Service Discovery", "Inter-service RPC", "Scalability", "Isolation"] },
  { name: "BullMQ & Dead Letter Queue (DLQ)", category: "backend", level: 92, iconName: "Workflow", yearsOfExp: "2+ yrs", tags: ["Zero Data Loss", "Retry Strategies", "Async Processing", "Redis Queues"] },
  { name: "Redis Caching & Session", category: "backend", level: 90, iconName: "Zap", yearsOfExp: "2+ yrs", tags: ["Key-Value Storage", "Rate Limiting", "Cache Invalidation", "Pub/Sub"] },
  
  // Languages & Frameworks
  { name: "TypeScript / JavaScript (ES6+)", category: "languages", level: 95, iconName: "Code2", yearsOfExp: "2+ yrs", tags: ["Async/Await", "Type Safety", "Generics", "Event Loop"] },
  { name: "React.js & Next.js", category: "frontend", level: 92, iconName: "Atom", yearsOfExp: "2+ yrs", tags: ["App Router", "SSR/SSG", "Hooks", "State Management"] },
  { name: "Redux Toolkit & Context", category: "frontend", level: 90, iconName: "Cpu", yearsOfExp: "2+ yrs", tags: ["Global State", "Async Thunks", "Immer", "Selectors"] },
  { name: "Tailwind CSS / SCSS", category: "frontend", level: 95, iconName: "Palette", yearsOfExp: "2+ yrs", tags: ["Glassmorphism", "Responsive Layouts", "Custom Themes", "Animations"] },

  // Databases
  { name: "PostgreSQL & MySQL", category: "database", level: 90, iconName: "Database", yearsOfExp: "2+ yrs", tags: ["Relational Schema", "ACID Transactions", "Indexes", "Row Locks"] },
  { name: "Prisma ORM", category: "database", level: 92, iconName: "Binary", yearsOfExp: "2+ yrs", tags: ["Type-Safe Queries", "Migrations", "Relationships", "Connection Pooling"] },

  // Real-Time & Payments
  { name: "Stripe & Stripe Connect", category: "realtime", level: 92, iconName: "CreditCard", yearsOfExp: "2+ yrs", tags: ["KYC Verification", "48h Payouts", "Webhooks", "Subscriptions"] },
  { name: "Razorpay Integration", category: "realtime", level: 90, iconName: "ShieldCheck", yearsOfExp: "2+ yrs", tags: ["Payment Gateway", "Order State Machine", "Checkout UI"] },
  { name: "WebSockets & FCM", category: "realtime", level: 88, iconName: "Radio", yearsOfExp: "2+ yrs", tags: ["Real-time Sync", "Push Notifications", "Live Chat", "Broadcast"] },
  { name: "Agora SDK Live Stream", category: "realtime", level: 85, iconName: "Video", yearsOfExp: "1+ yr", tags: ["RTC Stream", "Video Calling", "Broadcast Roles"] },

  // DevOps & Tools
  { name: "Docker & Containerization", category: "devops", level: 88, iconName: "Container", yearsOfExp: "2+ yrs", tags: ["Dockerfiles", "Multi-stage Builds", "Compose", "Images"] },
  { name: "AWS ECS & Contabo", category: "devops", level: 85, iconName: "Cloud", yearsOfExp: "1+ yr", tags: ["Task Definitions", "Container Deployment", "Cloud Infrastructure"] },
  { name: "Jenkins & Bitbucket CI/CD", category: "devops", level: 86, iconName: "GitBranch", yearsOfExp: "2+ yrs", tags: ["Automated Pipelines", "PR Triggers", "Build Scripts"] },
  { name: "Fabric.js & PDF Canvas", category: "frontend", level: 85, iconName: "FileCode", yearsOfExp: "1+ yr", tags: ["Canvas Editing", "Text Annotations", "Vector Export"] }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-cloud",
    title: "NPTEL Certificate in Cloud Computing",
    issuer: "IIT Kharagpur",
    year: "2022",
    badgeText: "Elite Certification",
    description: "In-depth certification covering distributed systems, cloud architecture, virtual machine hypervisors, cloud storage models, and AWS deployment patterns."
  },
  {
    id: "cert-iot",
    title: "NPTEL Certificate in Introduction to Industry 4.0 & Industrial IoT",
    issuer: "IIT Kharagpur",
    year: "2023",
    badgeText: "IIT Certified",
    description: "Focusing on industrial sensor networks, MQTT protocols, cloud data telemetry, real-time analytics, and automated edge-to-cloud workflows."
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    title: "Microservices & High-Throughput API Architecture",
    description: "Designing fault-tolerant, modular backend microservices with Node.js, Prisma ORM, Redis caching, and BullMQ zero-data-loss queues.",
    icon: "Server",
    deliverables: [
      "Decoupled Microservice Architecture",
      "Redis Caching & Session Storage",
      "BullMQ Queue with Dead Letter Queue (DLQ) Strategy",
      "Type-Safe Prisma ORM Database Models"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "BullMQ"]
  },
  {
    id: "serv-2",
    title: "Payment Gateways & Stripe Connect Monetization",
    description: "Implementing complex multi-party payout systems, Stripe Connect KYC, subscription billing, and Razorpay webhook state machines.",
    icon: "CreditCard",
    deliverables: [
      "Stripe Connect Custom Account Onboarding & KYC",
      "Automated Post-Event Payouts & Escrow Rules",
      "Platform Commission Calculation (e.g., 3%)",
      "Webhook Idempotency & State Machines"
    ],
    technologies: ["Stripe Connect", "Stripe Billing", "Razorpay", "Node.js", "Webhooks"]
  },
  {
    id: "serv-3",
    title: "Customer Software Development (Custom Web & APIs)",
    description: "Architecting bespoke, business-tailored customer software systems with React 18, Next.js 14, Node.js APIs, and scalable modular database layers.",
    icon: "Layout",
    deliverables: [
      "Tailored Business Workflow & Process Automation",
      "Next.js App Router & SSR Architecture",
      "Custom Enterprise REST / GraphQL API Services",
      "Responsive Glassmorphic UI with Tailwind CSS"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Redux Toolkit"]
  },
  {
    id: "serv-4",
    title: "QA & Software Testing (Automation & Manual)",
    description: "Ensuring zero-bug production releases with automated end-to-end testing, Jest component tests, Postman API regression collections, and CI/CD quality gates.",
    icon: "ShieldCheck",
    deliverables: [
      "Automated End-to-End Testing (Playwright / Cypress)",
      "API Regression & Performance Load Profiling (Postman / k6)",
      "Unit & Integration Test Suites with Jest",
      "Automated CI/CD Quality Gates & Release Verification"
    ],
    technologies: ["Playwright", "Cypress", "Jest", "Postman", "k6", "CI/CD Gates"]
  },
  {
    id: "serv-5",
    title: "Real-Time Systems, WebSockets & Streaming",
    description: "Building live chat, push notifications via FCM, real-time data synchronization, and video streaming using the Agora SDK.",
    icon: "Radio",
    deliverables: [
      "Bi-Directional WebSocket Connections",
      "Firebase Cloud Messaging (FCM) Push Trigger",
      "Agora SDK Live Stream Broadcasting",
      "Real-Time Analytics & Dashboard Updates"
    ],
    technologies: ["WebSockets", "Agora SDK", "FCM", "Node.js", "React"]
  },
  {
    id: "serv-6",
    title: "DevOps & Cloud CI/CD Automation",
    description: "Setting up automated container deployment pipelines using Docker, Jenkins, Bitbucket CI/CD, and AWS ECS task definitions.",
    icon: "Cloud",
    deliverables: [
      "Multi-stage Dockerfile Optimization",
      "Bitbucket PR Triggered Build Pipelines",
      "AWS ECS Task Definition Updates",
      "Contabo VPS & Production Deployment"
    ],
    technologies: ["Docker", "AWS ECS", "Jenkins", "Bitbucket CI/CD", "Contabo"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Tariq Al-Mansoor",
    role: "Product Director",
    company: "Dubai Enterprise Solutions",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Umesh handled the entire backend architecture for our health & gym platform. His BullMQ queue implementation and Stripe Connect payout flows were delivered with absolute precision. High reliability and zero downtime!",
    rating: 5,
    projectRelation: "Vyonic Platform Backend"
  },
  {
    id: "test-2",
    name: "Rahul Verma",
    role: "Senior Engineering Manager",
    company: "Code Expert Solutions",
    location: "Surat, Gujarat",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Umesh is a standout Full Stack Engineer. He takes full ownership of complex backend tasks — from microservices inter-communication to AWS ECS CI/CD pipelines. A true asset to any high-performing engineering team.",
    rating: 5,
    projectRelation: "Backend Lead & Microservices"
  },
  {
    id: "test-3",
    name: "Sneha Patel",
    role: "Lead Frontend Architect",
    company: "Enterprise Web Systems",
    location: "Surat, Gujarat",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote: "Working with Umesh on Kesaria Textile and Vybemena was smooth and efficient. His API designs are clean, well-documented, and blazingly fast with Redis caching.",
    rating: 5,
    projectRelation: "Kesaria Textile & Vybemena"
  }
];
