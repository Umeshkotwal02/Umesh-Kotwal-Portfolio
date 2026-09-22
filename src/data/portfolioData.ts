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
      live: "https://umeshcodes.vercel.app/",
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
    slug: "microservices-architecture",
    title: "Microservices & High-Throughput API Architecture",
    shortTitle: "Microservices & APIs",
    tagline: "High-throughput, decoupled microservices with sub-50ms Redis caching and zero-data-loss BullMQ queues.",
    description: "Designing fault-tolerant, modular backend microservices with Node.js, Prisma ORM, Redis caching, and BullMQ zero-data-loss queues.",
    fullDescription: "I architect resilient, high-concurrency microservices systems engineered to withstand heavy enterprise traffic. By decomposing monolithic bottlenecks into decoupled domain services, I implement sub-millisecond Redis caching, idempotent Prisma transactions on PostgreSQL/MySQL, and BullMQ background queues with Dead Letter Queue (DLQ) retry policies guaranteeing zero lost events during peak traffic.",
    icon: "Server",
    image: "/projects/vyonic.png",
    deliverables: [
      "Decoupled Microservice Architecture with Independent Scalability",
      "High-Frequency Redis Caching & Distributed Session Management",
      "BullMQ Queue with Dead Letter Queue (DLQ) Exponential Retry Strategy",
      "Type-Safe Prisma ORM Database Models with Connection Pooling",
      "Standardized OpenAPI / Swagger Documentation & Postman Suites",
      "Dockerized Service Containers with Health Check Endpoints"
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ", "Docker", "TypeScript"],
    architecturePoints: [
      "Sub-40ms Redis cache hit response time for frequently queried endpoints",
      "BullMQ worker processes isolated from HTTP request threads to prevent blocking",
      "Dead Letter Queue (DLQ) automated alerting and persistent retry logs for zero data loss",
      "Prisma transaction isolation levels preventing dirty reads and race conditions"
    ],
    caseStudy: {
      projectId: "vyonic",
      projectTitle: "Vyonic – Dubai Health & Fitness Platform",
      client: "Vyonic Labs (Dubai, UAE)",
      location: "Dubai, UAE",
      image: "/projects/vyonic.png",
      summary: "Led backend engineering for a multi-tenant fitness platform handling gym onboarding, trainer slot booking, and paid session unlock flows for Dubai users.",
      impact: "Zero downtime deployment with 99.9% uptime and sub-45ms trainer lookup latency across thousands of concurrent users."
    },
    workflow: [
      { step: "01", title: "Domain Analysis & Boundary Mapping", desc: "Decompose application domains into isolated microservices with strictly defined REST/gRPC interfaces." },
      { step: "02", title: "Data Modeling & Cache Topology", desc: "Design PostgreSQL schemas with Prisma ORM and map high-read queries to Redis key-value cache with TTL policies." },
      { step: "03", title: "Queue & DLQ Engine Implementation", desc: "Configure BullMQ background job queues with exponential backoff and Dead Letter Queues to guarantee zero data loss." },
      { step: "04", title: "Load Profiling & Docker Deployment", desc: "Perform k6 load testing, containerize via Docker, and deploy with health-checks to AWS ECS or Contabo VPS." }
    ],
    faqs: [
      {
        q: "How do you ensure zero data loss during high-traffic spikes?",
        a: "I decouple heavy write operations from the HTTP cycle using BullMQ on Redis. If an external service or database slows down, jobs remain safely buffered in the queue with exponential backoff retries and fallback into a Dead Letter Queue (DLQ) for inspection."
      },
      {
        q: "What database architecture do you recommend for microservices?",
        a: "Depending on domain boundaries, I recommend PostgreSQL or MySQL with Prisma ORM for relational consistency and ACID guarantees, complemented by Redis as an in-memory cache and session layer."
      },
      {
        q: "Can you migrate an existing monolithic backend to microservices?",
        a: "Yes. I follow the Strangler Fig pattern to progressively decouple high-demand services without breaking existing production traffic or requiring a risky complete rewrite."
      }
    ],
    metrics: [
      { label: "Query Latency Reduction", value: "70%" },
      { label: "Queue Data Loss Rate", value: "0.00%" },
      { label: "System Uptime SLA", value: "99.9%" }
    ]
  },
  {
    id: "serv-2",
    slug: "stripe-connect-payments",
    title: "Payment Gateways & Stripe Connect Monetization",
    shortTitle: "Stripe & Payments",
    tagline: "Enterprise multi-party payout systems, automated Stripe Connect KYC, and bulletproof webhook state machines.",
    description: "Implementing complex multi-party payout systems, Stripe Connect KYC, subscription billing, and Razorpay webhook state machines.",
    fullDescription: "From multi-vendor marketplace payouts to automated subscription billing, I engineer secure financial infrastructure. Having built production payout systems for Dubai platforms like Vybemena, I specialize in Stripe Connect Custom/Express onboarding, automated 48-hour post-event payout escrow releases, custom commission splitting (e.g. 3% platform fee), and idempotent webhook processing with Redis locks to eliminate double-charges.",
    icon: "CreditCard",
    image: "/projects/vybemena.png",
    deliverables: [
      "Stripe Connect Custom/Express Account Onboarding & KYC",
      "Automated Timed Escrow Payouts (e.g. 48 hours post-event)",
      "Multi-Party Commission Splitting & Transaction Fee Calculation",
      "Idempotent Webhook State Machine with Redis Distributed Locks",
      "Razorpay Order Creation & Payment Signature Verification",
      "Automated PDF Invoice Generation & Customer Receipt Dispatch"
    ],
    technologies: ["Stripe Connect", "Stripe Billing", "Razorpay", "Node.js", "Redis Locks", "Webhooks", "PostgreSQL"],
    architecturePoints: [
      "Distributed Redis mutex locks on webhook endpoints preventing double-credit or race conditions",
      "Automated transfer schedules holding funds in escrow until fulfillment conditions are verified",
      "Compliant merchant KYC identity and bank account verification workflows",
      "Complete audit trail of all transactions, fee deductions, and currency conversions"
    ],
    caseStudy: {
      projectId: "vybemena",
      projectTitle: "Vybemena – Dubai Event Management & Payouts",
      client: "Vybemena LLC (Dubai, UAE)",
      location: "Dubai, UAE",
      image: "/projects/vybemena.png",
      summary: "Engineered full-stack ticketing engine with Stripe Connect KYC, automatic 3% commission deductions, and timed 48-hour post-event payout releases.",
      impact: "Processed tens of thousands in AED ticket volume with 100% payout reconciliation accuracy."
    },
    workflow: [
      { step: "01", title: "Monetization & Escrow Architecture", desc: "Map fee structures, commission formulas, currency conversion rules, and merchant onboarding models." },
      { step: "02", title: "Gateway & KYC Integration", desc: "Integrate Stripe Connect OAuth / Account Links or Razorpay Orders with strict webhook signature verification." },
      { step: "03", title: "Idempotency & State Machine", desc: "Implement transactional state machine with Redis locks to ensure each payment event executes exactly once." },
      { step: "04", title: "Automated Payouts & Audit Logging", desc: "Automate background cron jobs for scheduled escrow releases and generate financial settlement reports." }
    ],
    faqs: [
      {
        q: "How do you handle Dubai / UAE international payment flows?",
        a: "I configure Stripe Connect to support AED along with multi-currency conversions (USD, EUR, GBP), handling local card schemes, Apple Pay, Google Pay, and UAE bank account IBAN verification."
      },
      {
        q: "What prevents a customer from being charged twice if a webhook retries?",
        a: "I enforce strict idempotency keys and Redis-backed distributed locks. Every incoming webhook event ID is recorded transactionally before processing so redundant webhooks return 200 OK immediately."
      },
      {
        q: "Can you implement custom escrow release timers (e.g. 48 hours post-event)?",
        a: "Yes. Using scheduled background tasks and database state flags, funds are captured and held securely in Stripe before automated transfer triggers execute exactly 48 hours after event completion."
      }
    ],
    metrics: [
      { label: "Payout Accuracy", value: "100%" },
      { label: "Webhook Idempotency", value: "Zero Duplication" },
      { label: "Supported Gateways", value: "Stripe, Razorpay" }
    ]
  },
  {
    id: "serv-3",
    slug: "custom-software-development",
    title: "Customer Software Development (Custom Web & APIs)",
    shortTitle: "Custom Software",
    tagline: "Bespoke SaaS applications, high-performance Next.js web platforms, and modular enterprise software.",
    description: "Architecting bespoke, business-tailored customer software systems with React 18, Next.js 14, Node.js APIs, and scalable modular database layers.",
    fullDescription: "I build modern, purpose-built web software from scratch or scale legacy systems into high-performance platforms. From complex enterprise ERP suites with double-entry accounting to high-volume SEO marketplaces ranking #1 on Google, I combine clean architecture, modular component systems, and intuitive user experiences with high performance and accessibility scores.",
    icon: "Layout",
    image: "/projects/kesaria-textile.png",
    deliverables: [
      "Custom Full-Stack Web Application (React 18 / Next.js 14+)",
      "Role-Based Access Control (RBAC) & Secure JWT/Session Auth",
      "Dynamic SEO Engine (Dynamic Sitemaps, OpenGraph, JSON-LD Schema)",
      "Interactive Dashboards with Analytics, Charts & Real-Time Filters",
      "Modular Database Schema Design with Migration History",
      "Responsive Glassmorphic UI with Strict WCAG Accessibility"
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "PostgreSQL", "MySQL"],
    architecturePoints: [
      "Next.js App Router with Server-Side Rendering (SSR) and Static Site Generation (SSG)",
      "Strict TypeScript typing end-to-end between frontend and backend APIs",
      "Lighthouse 95+ performance, accessibility, best practices, and SEO score guarantees",
      "Modular design system with reusable atomic components and Tailwind utility styling"
    ],
    caseStudy: {
      projectId: "kesaria-textile",
      projectTitle: "Kesaria Textile – B2B E-Commerce Marketplace",
      client: "Kesaria Textile (Surat / Global)",
      location: "Surat, India",
      image: "/projects/kesaria-textile.png",
      summary: "Engineered SEO-first B2B e-commerce platform with automated location landing pages and dynamic sitemaps for 100k+ products.",
      impact: "Achieved Google #1 page ranking across multiple competitive textile search terms and 3x organic lead volume."
    },
    workflow: [
      { step: "01", title: "Requirements & UX Wireframing", desc: "Collaborate on user stories, database entities, and technical specifications to ensure complete alignment." },
      { step: "02", title: "Architecture & Component Design", desc: "Set up the Next.js/React project scaffolding, Tailwind design tokens, and modular state management with Redux/Zustand." },
      { step: "03", title: "Full-Stack Implementation", desc: "Develop clean API endpoints, business logic, role-based auth, and responsive UI components with smooth animations." },
      { step: "04", title: "SEO, Performance & Launch", desc: "Implement structured JSON-LD schemas, optimize Core Web Vitals, and deploy to Vercel or cloud VPS." }
    ],
    faqs: [
      {
        q: "Why choose Next.js for custom business web applications?",
        a: "Next.js provides the best of both worlds: instant client-side interactivity paired with lightning-fast server-side rendering for optimal search engine indexing and initial page load speeds."
      },
      {
        q: "How do you handle role-based permissions in enterprise software?",
        a: "I build fine-grained Role-Based Access Control (RBAC) middleware verifying permissions on both the client UI (conditional rendering) and backend API route guards (JWT payload validation)."
      },
      {
        q: "Can you provide ongoing support after deployment?",
        a: "Yes. I provide post-launch warranties, performance monitoring, feature expansions, and technical documentation for your in-house team."
      }
    ],
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Google 1st Page SEO", value: "Top Keywords" },
      { label: "Full Responsive Range", value: "Mobile to 4K" }
    ]
  },
  {
    id: "serv-4",
    slug: "qa-software-testing",
    title: "QA & Software Testing (Automation & Manual)",
    shortTitle: "QA & Automated Testing",
    tagline: "Bulletproof test automation, API regression suites, and CI/CD quality gates ensuring zero-bug releases.",
    description: "Ensuring zero-bug production releases with automated end-to-end testing, Jest component tests, Postman API regression collections, and CI/CD quality gates.",
    fullDescription: "Reliability is non-negotiable in production software. I implement comprehensive Quality Assurance frameworks combining automated End-to-End (E2E) testing with Playwright or Cypress, Jest unit test suites for complex business logic, Postman API regression suites with environment chaining, and k6 load testing to guarantee stability under extreme load.",
    icon: "ShieldCheck",
    image: "/projects/worcspace.png",
    deliverables: [
      "Playwright / Cypress Automated End-to-End Test Suites",
      "Jest & React Testing Library Unit & Integration Tests",
      "Postman API Automated Regression Collections & Monitors",
      "k6 Performance & Concurrency Stress Load Testing",
      "Automated CI/CD Quality Gates (blocking broken PRs)",
      "Comprehensive Bug Matrix & Test Coverage Audit Reports"
    ],
    technologies: ["Playwright", "Cypress", "Jest", "Postman", "k6", "CI/CD Gates", "Docker"],
    architecturePoints: [
      "Automated browser matrix testing across Chromium, Firefox, WebKit, and mobile viewports",
      "Mocking external payment and SMS APIs for deterministic, non-flaky test execution",
      "Performance threshold enforcement (e.g. failing builds if API latency exceeds 200ms)",
      "Headless test executions integrated directly into Bitbucket / GitHub Actions pipelines"
    ],
    caseStudy: {
      projectId: "worcspace-erp",
      projectTitle: "Worcspace ERP – Financial Ledger Validation",
      client: "Enterprise Clients",
      location: "Surat, Gujarat",
      image: "/projects/worcspace.png",
      summary: "Created automated regression test suites verifying double-entry voucher accounting balances and preventing ledger corruption.",
      impact: "Eliminated accounting voucher discrepancies with 100% test coverage on critical financial transaction calculation paths."
    },
    workflow: [
      { step: "01", title: "Test Plan & Risk Assessment", desc: "Identify high-risk user journeys, checkout flows, payment webhooks, and critical state calculations." },
      { step: "02", title: "Unit & Integration Test Suite", desc: "Write isolated unit tests using Jest for utility functions, math calculations, and state machines." },
      { step: "03", title: "E2E & API Regression Automation", desc: "Build Playwright / Postman test suites simulating real user behaviors and cross-browser sessions." },
      { step: "04", title: "CI/CD Gate Integration", desc: "Hook test suites into Bitbucket/GitHub CI/CD pipelines to prevent unverified code from reaching production." }
    ],
    faqs: [
      {
        q: "What testing framework do you prefer for modern web apps?",
        a: "I prefer Playwright for End-to-End testing due to its blazingly fast execution, built-in parallelization, robust auto-wait assertions, and native multi-browser support."
      },
      {
        q: "How do you test payment gateways like Stripe without incurring real charges?",
        a: "I write comprehensive test suites utilizing Stripe's test clock, simulated webhook triggers, and official mock test cards to test success, decline, fraud, and refund branches."
      },
      {
        q: "Can you set up automated tests for an already existing codebase?",
        a: "Yes. I can audit your live endpoints and critical user journeys, create an automated Postman regression suite, and layer on Playwright E2E tests without disrupting your workflow."
      }
    ],
    metrics: [
      { label: "Critical Flow Coverage", value: "100%" },
      { label: "Regression Defect Rate", value: "<1%" },
      { label: "Automated Test Runtime", value: "<3 mins" }
    ]
  },
  {
    id: "serv-5",
    slug: "real-time-systems",
    title: "Real-Time Systems, WebSockets & Streaming",
    shortTitle: "Real-Time & WebSockets",
    tagline: "Ultra-low latency bi-directional WebSockets, Firebase push notifications, and Agora video streaming.",
    description: "Building live chat, push notifications via FCM, real-time data synchronization, and video streaming using the Agora SDK.",
    fullDescription: "I engineer reactive, real-time experiences where users receive instant state updates without manual page refreshes. Having delivered real-time document annotation tools with Fabric.js, live streaming with Agora SDK, and Firebase Cloud Messaging (FCM) push notifications, I create bi-directional communication channels that keep thousands of clients perfectly synchronized.",
    icon: "Radio",
    image: "/projects/background-remover.png",
    deliverables: [
      "Bi-directional WebSocket Architecture with Reconnection Backoff",
      "Agora SDK Audio/Video Real-Time Interactive Live Streaming",
      "Firebase Cloud Messaging (FCM) Automated Device Push Notifications",
      "Real-Time Collaborative Canvas / Interactive Document Tools (Fabric.js)",
      "Live Presence, Typing Indicators & Instant Messaging Channels",
      "Redis Pub/Sub Architecture for Horizontal WebSocket Node Scaling"
    ],
    technologies: ["WebSockets", "Agora SDK", "Firebase FCM", "Redis Pub/Sub", "Fabric.js", "Node.js", "React.js"],
    architecturePoints: [
      "Redis Pub/Sub adapter allowing multi-server WebSocket clustering without message drops",
      "Heartbeat ping-pong mechanisms detecting dead client connections within seconds",
      "JWT-authenticated WebSocket handshake with role-based channel access controls",
      "Optimistic UI updates on the client for instant perceived responsiveness"
    ],
    caseStudy: {
      projectId: "pdf-editor-resume-builder",
      projectTitle: "Interactive PDF Canvas & Document Suite",
      client: "Global SaaS Users",
      location: "Global",
      image: "/projects/worcspace.png",
      summary: "Engineered browser-based interactive canvas editor using Fabric.js for real-time text annotations, document manipulation, and instant PDF vector exports.",
      impact: "Sub-16ms 60FPS canvas rendering performance with instant vector manipulation."
    },
    workflow: [
      { step: "01", title: "Protocol & Architecture Selection", desc: "Choose between raw WebSockets, Socket.IO, Server-Sent Events (SSE), or WebRTC based on latency and throughput targets." },
      { step: "02", title: "Socket Gateway & Auth Handshake", desc: "Build secure WebSocket connection gateways verifying JWT tokens before granting access to specific rooms." },
      { step: "03", title: "Redis Pub/Sub Clustering", desc: "Integrate Redis Pub/Sub channels to broadcast messages seamlessly across multiple backend instances." },
      { step: "04", title: "Client Reconnection & Optimistic UI", desc: "Implement robust client reconnection state machines with exponential backoff and offline queueing." }
    ],
    faqs: [
      {
        q: "How do you scale WebSockets when multiple servers are running?",
        a: "I deploy a Redis Pub/Sub backplane. When a client sends a message to Server A, Redis instantly broadcasts it to Server B and C so connected subscribers across all server instances receive the event simultaneously."
      },
      {
        q: "What is your experience with Agora SDK live streaming?",
        a: "I have integrated the Agora RTC Web SDK for high-definition, sub-400ms video streaming, handling role assignment (broadcaster vs audience), token authentication, and mute/unmute states."
      },
      {
        q: "How do you deliver push notifications when a user's browser is closed?",
        a: "I integrate Firebase Cloud Messaging (FCM) using Web Push service workers to wake up the browser and display rich actionable notifications even when the web app is minimized or closed."
      }
    ],
    metrics: [
      { label: "Socket Sync Latency", value: "<50ms" },
      { label: "WebRTC Video Latency", value: "<400ms" },
      { label: "Canvas Render FPS", value: "60 FPS" }
    ]
  },
  {
    id: "serv-6",
    slug: "devops-cloud-cicd",
    title: "DevOps & Cloud CI/CD Automation",
    shortTitle: "DevOps & CI/CD",
    tagline: "Automated zero-downtime deployment pipelines with Docker, Jenkins, Bitbucket CI/CD, and AWS ECS.",
    description: "Setting up automated container deployment pipelines using Docker, Jenkins, Bitbucket CI/CD, and AWS ECS task definitions.",
    fullDescription: "I bridge software engineering and reliable cloud infrastructure. I build automated Continuous Integration and Continuous Deployment (CI/CD) pipelines using Docker multi-stage builds, Jenkins automation servers, Bitbucket PR webhooks, and AWS ECS container task definitions. I ensure every code push is tested, built, containerized, and deployed with zero production downtime.",
    icon: "Cloud",
    image: "/projects/vyonic.png",
    deliverables: [
      "Optimized Multi-Stage Dockerfile Configurations (<150MB images)",
      "Automated Jenkins & Bitbucket CI/CD Build & Test Pipelines",
      "AWS ECS Cluster Deployment with Task Definition Updates",
      "Contabo Linux VPS Hardening & Nginx Reverse Proxy Setup",
      "SSL Certificate Automation & Domain DNS Propagation",
      "Centralized Logging, Health Probes & Uptime Alerting"
    ],
    technologies: ["Docker", "AWS ECS", "Jenkins", "Bitbucket CI/CD", "Contabo", "Nginx", "Linux", "SSL/TLS"],
    architecturePoints: [
      "Multi-stage Docker builds separating compiler dependencies from production runtime",
      "Automated Git PR trigger verifying lint and test passes before merging",
      "Zero-downtime rolling deployment updating ECS task instances without dropping traffic",
      "Nginx reverse proxy with gzip compression, HTTP/2, and security headers (HSTS, CSP)"
    ],
    caseStudy: {
      projectId: "vyonic",
      projectTitle: "Vyonic – Cloud Container Deployment",
      client: "Dubai Enterprise Stakeholders",
      location: "Dubai / Germany",
      image: "/projects/vyonic.png",
      summary: "Configured automated CI/CD deployment pipelines on Contabo VPS and AWS ECS clusters with automated health check rollbacks.",
      impact: "Reduced deployment lead time from 45 minutes of manual SSH commands to an automated 3-minute Git push pipeline."
    },
    workflow: [
      { step: "01", title: "Infrastructure Audit & Blueprint", desc: "Assess resource requirements, memory allocation, container networking, and security parameters." },
      { step: "02", title: "Docker Containerization", desc: "Write lean, secure multi-stage Dockerfiles caching node_modules and running under non-root permissions." },
      { step: "03", title: "CI/CD Pipeline Automation", desc: "Configure Jenkins / Bitbucket pipeline scripts triggered on git push to run linter, tests, build, and image registry push." },
      { step: "04", title: "Zero-Downtime Rollout", desc: "Deploy new container versions via rolling updates, ensuring old containers remain alive until new health checks pass." }
    ],
    faqs: [
      {
        q: "Why use Docker multi-stage builds?",
        a: "Multi-stage builds allow us to compile TypeScript and install devDependencies in a temporary build container, then copy only the compiled JS and production dependencies into a lightweight runtime image, saving up to 80% disk space."
      },
      {
        q: "How do you achieve zero downtime during deployment?",
        a: "Using AWS ECS or Nginx upstream rolling deployments, new container versions boot and pass health probes before traffic is shifted from the old container, guaranteeing no user requests are dropped."
      },
      {
        q: "Can you set up CI/CD on a budget VPS like Contabo or DigitalOcean?",
        a: "Yes. I frequently configure lean Docker Compose + Jenkins / Webhook automation on affordable Linux VPS instances, complete with Nginx reverse proxying and automated Let's Encrypt SSL."
      }
    ],
    metrics: [
      { label: "Deployment Duration", value: "<3 Mins" },
      { label: "Container Size Reduction", value: "Up to 80%" },
      { label: "Rollout Downtime", value: "Zero (0s)" }
    ]
  },
  {
    id: "serv-7",
    slug: "ecommerce-development",
    title: "E-Commerce Development & Custom Storefronts",
    shortTitle: "E-Commerce",
    subtitle: "Cart & Sales",
    category: "web",
    tagline: "High-conversion headless storefronts, multi-vendor marketplaces, and sub-second checkout architectures.",
    description: "Engineering scalable e-commerce platforms, Shopify Plus integrations, custom headless storefronts with Next.js Commerce, and high-conversion cart & payment flows.",
    fullDescription: "I build high-performance e-commerce engines that turn visitors into loyal customers. Having delivered high-volume platforms like Kesaria Textile handling 100,000+ SKU catalogs and Vybemena multi-vendor ticketing, I engineer lightning-fast product filtering, automated inventory synchronization, Abandoned Cart email triggers, and seamless payment processing with Stripe, PayPal, and Razorpay.",
    icon: "CreditCard",
    image: "/projects/kesaria-textile.png",
    deliverables: [
      "Headless E-Commerce Storefront (Next.js 14 / React 18 / Tailwind)",
      "Shopify Plus / WooCommerce Custom API Integrations",
      "Sub-Second Faceted Search & Catalog Filtering (Algolia / Meilisearch)",
      "Multi-Currency Checkout & Real-Time Tax & Shipping Calculators",
      "Abandoned Cart Recovery Webhooks & WhatsApp Notification Triggers",
      "Multi-Vendor Marketplace Vendor Portals & Automatic Split Settlements"
    ],
    technologies: ["Next.js Commerce", "Shopify Storefront API", "Stripe Checkout", "Node.js", "Redis", "PostgreSQL", "Tailwind CSS"],
    techBadges: ["Next.js Commerce", "Shopify API", "Stripe Checkout", "Node.js", "Redis", "PostgreSQL", "Tailwind CSS"],
    architecturePoints: [
      "Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR) for instant catalog indexing",
      "Optimistic cart state updates with zero lag during quantity increment/decrement",
      "PCI-DSS compliant tokenized checkout flows with Stripe Elements and Apple Pay",
      "Redis caching for top 50,000 product pages and collection hierarchies"
    ],
    caseStudy: {
      projectId: "kesaria-textile",
      projectTitle: "Kesaria Textile – High-Volume B2B E-Commerce Marketplace",
      client: "Kesaria Textile Ltd.",
      location: "Surat, Gujarat",
      image: "/projects/kesaria-textile.png",
      summary: "Architected end-to-end B2B textile e-commerce platform with 100,000+ SKUs, automated WhatsApp lead inquiries, and localized city landing pages.",
      impact: "Surpassed 200,000 monthly organic catalog visits and reduced page load times from 4.2s to 650ms."
    },
    workflow: [
      { step: "01", title: "Catalog & Funnel Architecture", desc: "Define SKU structures, variation matrices, inventory sync points, and conversion-optimized checkout steps." },
      { step: "02", title: "Headless Storefront Development", desc: "Build modular Next.js storefront with instant faceted search, micro-animations, and mobile-first cart trays." },
      { step: "03", title: "Payment Gateways & Tax Rules", desc: "Integrate multi-currency payment rails (Stripe, Razorpay, COD, Apple Pay) with automated VAT/GST invoices." },
      { step: "04", title: "Speed Optimization & SEO Launch", desc: "Implement schema product rich snippets, Core Web Vitals optimizations, and dynamic sitemaps." }
    ],
    faqs: [
      {
        q: "What e-commerce tech stack do you recommend for scaling?",
        a: "For maximum speed, SEO ranking, and customization, I recommend a headless architecture using Next.js 14 on the frontend connected to a Node.js/PostgreSQL microservice backend or Shopify/Medusa for commerce logic."
      },
      {
        q: "Can you build multi-vendor marketplaces with split payouts?",
        a: "Yes. I specialize in multi-vendor architectures using Stripe Connect Custom/Express accounts, allowing each vendor to manage their catalog while the platform automatically deducts commission fees and routes net payouts."
      },
      {
        q: "How do you optimize e-commerce mobile checkout conversion?",
        a: "I build 1-click Express Checkout flows supporting Apple Pay, Google Pay, and saved billing tokens, combined with auto-address completion and zero page reloads."
      }
    ],
    metrics: [
      { label: "Catalog Page Speed", value: "<700ms" },
      { label: "Cart Conversion Boost", value: "+38%" },
      { label: "Catalog SKUs Supported", value: "100k+" }
    ]
  },
  {
    id: "serv-8",
    slug: "erp-crm-development",
    title: "ERP & CRM Development (Enterprise Flow)",
    shortTitle: "ERP & CRM",
    subtitle: "Enterprise Flow",
    category: "enterprise",
    tagline: "Enterprise workflow automation, double-entry financial ledgers, and end-to-end CRM pipelines.",
    description: "Developing custom Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) platforms tailored to manufacturing, trade, and service organizations.",
    fullDescription: "Off-the-shelf ERP and CRM software often forces businesses into rigid workflows. I architect bespoke ERP & CRM enterprise suites built around your exact operational workflows. Drawing from production experience on platforms like Worcspace ERP, I design robust double-entry accounting ledgers, purchase order generation, automated inventory audits, lead pipeline deal stages, and multi-tenant organizational hierarchies.",
    icon: "Server",
    image: "/projects/worcspace.png",
    deliverables: [
      "Custom ERP Suite (Accounting, Inventory, Procurement, HR & Payroll)",
      "Sales CRM Pipeline with Kanban Stages, Activity Logs & Deal Scoring",
      "Double-Entry Accounting Engine with Automated Balance Sheets & P&L",
      "Role-Based Access Control (RBAC) with Granular Department Permissions",
      "Automated PDF Invoices, Purchase Orders & Delivery Challans",
      "Real-Time Executive Analytics Dashboards & Custom Exportable Reports"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React.js", "Redis", "Docker", "Prisma ORM"],
    techBadges: ["Node.js", "Express", "PostgreSQL", "React.js", "Redis", "Docker", "Prisma ORM"],
    architecturePoints: [
      "ACID-compliant transactional database operations preventing financial ledger imbalances",
      "Audit logging for every record update, deletion, or permission escalation with user IP tracking",
      "Event-driven background jobs for batch invoicing and monthly payroll calculations",
      "Multi-tenant data isolation guaranteeing strict tenant privacy and enterprise security"
    ],
    caseStudy: {
      projectId: "worcspace-erp",
      projectTitle: "Worcspace ERP – Industrial Enterprise Accounting Suite",
      client: "Industrial & Manufacturing Enterprise Clients",
      location: "Surat, Gujarat",
      image: "/projects/worcspace.png",
      summary: "Developed mission-critical double-entry accounting ERP module handling thousands of daily invoice vouchers, journal entries, and automated bank reconciliations.",
      impact: "Saved client finance teams 25+ hours per week in manual ledger verification with zero data discrepancy."
    },
    workflow: [
      { step: "01", title: "Enterprise Workflow Audit", desc: "Map departmental handoffs, quotation lifecycles, approval matrixes, and financial reporting requirements." },
      { step: "02", title: "Relational Schema & Ledger Design", desc: "Architect normalized PostgreSQL schemas with foreign key constraints, indexes, and transactional locks." },
      { step: "03", title: "Module Development & Integration", desc: "Build responsive React dashboards for sales leads, inventory tracking, and double-entry voucher journals." },
      { step: "04", title: "Role Hardening & Data Migration", desc: "Implement department-level RBAC rules, migrate historical enterprise data, and execute stress tests." }
    ],
    faqs: [
      {
        q: "How do you guarantee financial data accuracy in custom ERPs?",
        a: "I enforce strict double-entry accounting principles at the database transaction layer. Every debit must equal every credit inside an atomic transaction, ensuring ledgers can never become unbalanced."
      },
      {
        q: "Can the CRM integrate with WhatsApp, Email, and VoIP?",
        a: "Yes. I integrate WhatsApp Cloud API for automated quotation dispatches, SendGrid/SES for email activity tracking, and Twilio for click-to-call event logging."
      },
      {
        q: "Can custom ERP software replace expensive SAP or Zoho subscriptions?",
        a: "Yes. Bespoke ERPs eliminate recurring per-user licensing fees and adapt 100% to your unique manufacturing, textile, or service processes without cumbersome bloat."
      }
    ],
    metrics: [
      { label: "Ledger Reconciliation", value: "100% Exact" },
      { label: "Process Time Saved", value: "25+ Hrs/Wk" },
      { label: "Licensing Cost Reduction", value: "Up to 70%" }
    ]
  },
  {
    id: "serv-9",
    slug: "cloud-aws",
    title: "AWS Cloud Solutions & Infrastructure",
    shortTitle: "AWS",
    subtitle: "Cloud Solutions",
    category: "cloud",
    tagline: "Scalable Amazon Web Services architecture, containerized ECS clusters, and cloud-native automation.",
    description: "Architecting, provisioning, and managing scalable AWS cloud infrastructure utilizing ECS, EC2, S3, RDS PostgreSQL, Lambda, and CloudFront CDN.",
    fullDescription: "I design and manage cost-effective, high-availability AWS cloud environments. From Docker container orchestration on AWS ECS to serverless API routes with AWS Lambda and low-latency global asset distribution via CloudFront, I ensure your web applications operate with 99.9% uptime and auto-scale dynamically with traffic spikes.",
    icon: "Cloud",
    image: "/projects/vyonic.png",
    deliverables: [
      "AWS ECS Docker Container Task Definitions & Service Deployments",
      "S3 Bucket Storage with Signed URLs & CloudFront CDN Caching",
      "RDS PostgreSQL / MySQL Multi-AZ Provisioning & Auto-Backups",
      "Serverless AWS Lambda Functions & API Gateway Integrations",
      "Route 53 DNS Configuration & ACM SSL Automated Certificates",
      "CloudWatch Metric Alarms & Cost Optimization Audits"
    ],
    technologies: ["AWS ECS", "AWS S3", "AWS RDS", "AWS Lambda", "CloudFront", "Docker", "Route 53", "Terraform"],
    techBadges: ["AWS ECS", "AWS S3", "AWS RDS", "AWS Lambda", "CloudFront", "Docker", "Route 53"],
    architecturePoints: [
      "Private VPC subnets isolating database instances from public internet access",
      "Auto-scaling policies triggered by CPU and memory utilization metrics",
      "Least-privilege IAM roles and access key management",
      "S3 Lifecycle rules archiving historical logs to Glacier for cost reduction"
    ],
    caseStudy: {
      projectId: "vyonic-aws",
      projectTitle: "Vyonic Platform – AWS Cloud Infrastructure",
      client: "Vyonic Dubai Stakeholders",
      location: "Dubai, UAE",
      image: "/projects/vyonic.png",
      summary: "Designed scalable AWS container infrastructure running microservices on ECS with CloudWatch monitoring and automated health check rollbacks.",
      impact: "Zero unplanned downtime during peak traffic surges and 35% reduction in monthly AWS compute costs."
    },
    workflow: [
      { step: "01", title: "Cloud Architecture Blueprint", desc: "Design VPC network topology, compute sizing, security groups, and storage strategies." },
      { step: "02", title: "Infrastructure Provisioning", desc: "Deploy ECS clusters, RDS relational databases, and S3 asset buckets with IAM permissions." },
      { step: "03", title: "CI/CD Pipeline Connection", desc: "Automate Docker builds and ECS task definition updates on Git master branch merges." },
      { step: "04", title: "Monitoring & Security Hardening", desc: "Configure CloudWatch latency alerts, WAF firewalls, and automated daily database snapshots." }
    ],
    faqs: [
      {
        q: "Why choose AWS ECS over standard EC2 virtual machines?",
        a: "AWS ECS provides managed container orchestration, automated health check restarts, zero-downtime rolling updates, and easy vertical/horizontal scaling without manual server maintenance."
      },
      {
        q: "How do you prevent unexpected high AWS bills?",
        a: "I set up strict AWS Budgets with email alerts, configure auto-scaling scale-down schedules during off-peak hours, and utilize reserved instances or savings plans."
      }
    ],
    metrics: [
      { label: "Cloud Uptime SLA", value: "99.95%" },
      { label: "Monthly Cost Savings", value: "Up to 35%" },
      { label: "Deploy Time", value: "<4 Mins" }
    ]
  },
  {
    id: "serv-10",
    slug: "cloud-azure",
    title: "Microsoft Azure Cloud Infrastructure",
    shortTitle: "AZURE",
    subtitle: "Cloud Infrastructure",
    category: "cloud",
    tagline: "Enterprise Azure App Services, Azure SQL databases, and secure Microsoft Cloud deployments.",
    description: "Configuring enterprise Microsoft Azure infrastructure, including Azure App Services, Azure SQL, Blob Storage, and Azure DevOps CI/CD pipelines.",
    fullDescription: "For corporate and enterprise organizations invested in the Microsoft ecosystem, I provide end-to-end Azure cloud engineering. I configure scalable Azure App Services, deploy high-performance Azure SQL managed instances, secure file assets in Azure Blob Storage, and establish automated Azure DevOps pipelines.",
    icon: "Cloud",
    image: "/projects/worcspace.png",
    deliverables: [
      "Azure App Services Deployment with Custom Domain & Auto-SSL",
      "Azure SQL Database Provisioning with Geo-Replication & Backups",
      "Azure Blob Storage Integration for Secure Enterprise File Archival",
      "Azure Active Directory (Entra ID) Single Sign-On (SSO) Integration",
      "Azure DevOps Repos, Pipelines & Release Gate Management",
      "Network Security Groups (NSG) & Virtual Network Peering"
    ],
    technologies: ["Microsoft Azure", "Azure App Services", "Azure SQL", "Azure Blob", "Azure DevOps", "Entra ID", "Docker"],
    techBadges: ["Microsoft Azure", "Azure App Services", "Azure SQL", "Azure Blob", "Azure DevOps", "Entra ID"],
    architecturePoints: [
      "Managed identity authentication eliminating hardcoded connection strings",
      "Automatic database performance tuning and query performance insights",
      "High-availability zone redundant storage (ZRS) for critical documents",
      "Containerized deployments using Azure Container Instances (ACI)"
    ],
    caseStudy: {
      projectId: "enterprise-azure",
      projectTitle: "Enterprise ERP Cloud Migration to Azure",
      client: "Corporate Client",
      location: "Surat, Gujarat",
      image: "/projects/worcspace.png",
      summary: "Migrated legacy on-premise accounting system to Azure App Services and Azure SQL with automated geo-backups.",
      impact: "Eliminated server hardware failures and improved multi-branch query speeds by 65%."
    },
    workflow: [
      { step: "01", title: "Workload Assessment", desc: "Audit compute, storage, memory, and database requirements for Azure sizing." },
      { step: "02", title: "Resource Group & Network Setup", desc: "Configure resource groups, virtual networks, and database connection pools." },
      { step: "03", title: "App Service Deployment", desc: "Deploy Node.js/React application containers with environment variable vault integration." },
      { step: "04", title: "Backup & Uptime SLA Monitoring", desc: "Establish automated backup retention policies and monitor health endpoints." }
    ],
    faqs: [
      {
        q: "How does Azure compare to AWS for Node.js & React applications?",
        a: "Both platforms excel, but Azure is especially beneficial for organizations already using Microsoft 365, Active Directory (Entra ID), or Microsoft enterprise agreements."
      }
    ],
    metrics: [
      { label: "Data Redundancy", value: "Zone Redundant" },
      { label: "Migration Uptime", value: "99.9%" },
      { label: "Security Compliance", value: "Enterprise Grade" }
    ]
  },
  {
    id: "serv-11",
    slug: "iot-connected-devices",
    title: "IoT Solutions & Connected Device Architecture",
    shortTitle: "IoT",
    subtitle: "Connected Devices",
    category: "cloud",
    tagline: "Low-overhead MQTT message brokers, hardware telemetry dashboards, and real-time sensor streams.",
    description: "Building resilient IoT server backends, MQTT broker clusters, real-time device telemetry ingestion pipelines, and interactive hardware monitoring dashboards.",
    fullDescription: "I bridge the physical and digital worlds by building high-throughput IoT backends. Using lightweight protocols like MQTT, WebSockets, and TimescaleDB, I build systems capable of ingesting thousands of device telemetry packets per second, detecting anomalies in real-time, and presenting actionable metrics on responsive React dashboards.",
    icon: "Radio",
    image: "/projects/background-remover.png",
    deliverables: [
      "Lightweight MQTT Device Broker Setup (Mosquitto / EMQX)",
      "Real-Time Telemetry Data Ingestion Pipeline with TimescaleDB / InfluxDB",
      "Interactive IoT Fleet Management Dashboard (React 18 / Recharts)",
      "Automated Device Health Alerting (SMS, Email, Push Notifications)",
      "Firmware Over-The-Air (FOTA) Update State Management",
      "Device Authentication & Cryptographic Token Verification"
    ],
    technologies: ["MQTT", "WebSockets", "Node.js", "TimescaleDB", "Redis", "Docker", "React.js"],
    techBadges: ["MQTT", "WebSockets", "Node.js", "TimescaleDB", "Redis", "Docker", "React.js"],
    architecturePoints: [
      "Time-series database partitioning for billions of historical telemetry datapoints",
      "Sub-100ms real-time event broadcasting to operator monitoring screens",
      "Device heartbeat tracking detecting offline sensors immediately",
      "Secure TLS-encrypted device socket connections"
    ],
    caseStudy: {
      projectId: "iot-telemetry",
      projectTitle: "Industrial Sensor Telemetry Dashboard",
      client: "Industrial Automation Stakeholders",
      location: "Gujarat, India",
      image: "/projects/background-remover.png",
      summary: "Engineered real-time telemetry ingestion server tracking temperature, vibration, and power metrics across 500+ factory sensors.",
      impact: "Processed 1.5M daily sensor readings with sub-second alert triggers on threshold breaches."
    },
    workflow: [
      { step: "01", title: "Protocol & Payload Specification", desc: "Design compact JSON/binary telemetry payloads and MQTT topic hierarchies." },
      { step: "02", title: "Broker & Ingestion Engine", desc: "Deploy high-concurrency MQTT broker with Redis message buffering." },
      { step: "03", title: "Time-Series Data Storage", desc: "Implement hypertable schemas with automatic data compression." },
      { step: "04", title: "Live Monitoring UI", desc: "Build responsive React dashboard displaying real-time gauges, charts, and device maps." }
    ],
    faqs: [
      {
        q: "What protocols do you use for IoT communications?",
        a: "I utilize MQTT for low-bandwidth, battery-efficient device-to-cloud messaging, and WebSockets/SSE for pushing live updates to user browser dashboards."
      }
    ],
    metrics: [
      { label: "Telemetry Throughput", value: "10k+ msgs/sec" },
      { label: "Alert Dispatch Delay", value: "<150ms" },
      { label: "Device Heartbeat Interval", value: "Real-Time" }
    ]
  },
  {
    id: "serv-12",
    slug: "software-maintenance",
    title: "Software Maintenance & Continuous Support",
    shortTitle: "Software",
    subtitle: "Maintenance",
    category: "enterprise",
    tagline: "Proactive bug fixes, security patch upgrades, performance tuning, and 24/7 technical stability.",
    description: "Providing comprehensive software maintenance, dependency vulnerability patching, database optimization, and SLA-backed engineering support for production apps.",
    fullDescription: "Software applications require proactive care to remain secure, fast, and bug-free. I provide continuous engineering maintenance for live web applications, including Node.js and React dependency upgrades, database query optimization, security vulnerability patching, SSL renewals, and priority bug resolution under guaranteed response SLAs.",
    icon: "ShieldCheck",
    image: "/projects/vyonic.png",
    deliverables: [
      "Regular Node.js, React, and npm Security Dependency Audits",
      "Database Indexing & Slow Query Optimization (PostgreSQL / MongoDB)",
      "Automated Server Health Probes & Uptime Monitoring",
      "Critical Hotfix Bug Resolution with Fast Turnaround",
      "SSL Certificate Auto-Renewal & DNS Health Checks",
      "Monthly Technical Performance & Vulnerability Audit Reports"
    ],
    technologies: ["Node.js", "React.js", "PostgreSQL", "MongoDB", "Nginx", "Linux", "GitHub Actions", "Docker"],
    techBadges: ["Node.js", "React.js", "PostgreSQL", "MongoDB", "Nginx", "Linux", "GitHub Actions"],
    architecturePoints: [
      "Zero-breakage staging environment regression testing before production patch releases",
      "Automated database snapshots before every major migration or library update",
      "Log aggregation monitoring error spikes and unhandled promise rejections",
      "Code refactoring removing technical debt and improving maintainability"
    ],
    caseStudy: {
      projectId: "software-maintenance-suite",
      projectTitle: "Production SaaS Uptime & Maintenance",
      client: "Ongoing Retainer Clients",
      location: "Dubai & India",
      image: "/projects/vyonic.png",
      summary: "Maintained 99.9% uptime across multiple client production servers, handling security patching, database optimization, and feature additions.",
      impact: "Prevented downtime incidents and reduced database query response times by 45% through index tuning."
    },
    workflow: [
      { step: "01", title: "Codebase & Infrastructure Audit", desc: "Scan repository for outdated packages, security advisories, and performance bottlenecks." },
      { step: "02", title: "Automated Monitoring Setup", desc: "Deploy uptime monitors, error tracking, and automated backup routines." },
      { step: "03", title: "Scheduled Maintenance Cycles", desc: "Apply non-breaking package updates and database index optimizations bi-weekly." },
      { step: "04", title: "On-Call Priority Support", desc: "Rapid response SLA to investigate and resolve unexpected production issues immediately." }
    ],
    faqs: [
      {
        q: "What does your software maintenance service cover?",
        a: "It covers bug fixes, library/framework security patches, database backups, performance monitoring, server OS updates, and small feature improvements under a flexible retainer."
      },
      {
        q: "How fast do you respond to critical production bugs?",
        a: "For critical production outages, my response time is typically within 1 hour to diagnose the root cause and deploy an immediate hotfix."
      }
    ],
    metrics: [
      { label: "Production Uptime Guarantee", value: "99.9%" },
      { label: "Critical Bug Response SLA", value: "<1 Hour" },
      { label: "Security Patch Cadence", value: "Continuous" }
    ]
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
