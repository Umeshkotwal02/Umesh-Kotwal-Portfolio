import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini lazily or safely
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Knowledge Base about Umesh Kotwal for AI Assistant
const UMESH_KNOWLEDGE_BASE = `
You are an AI Assistant representing Umesh Kotwal, a Full Stack Developer (React.js / Next.js / Node.js) based in Surat, Gujarat, India.
Contact: Email: umeshkotwal7@gmail.com | Phone: +91 6352001332 | Portfolio: https://umeshkotwal.vercel.app/ | GitHub: https://github.com/Umeshkotwal02/ | LinkedIn: https://www.linkedin.com/in/umeshkotwal07/

Key Summary:
- Full Stack Developer with 2+ years of experience building high-throughput backend architecture and modern frontend applications using React.js, Next.js, Node.js, and Express.js.
- Specialized in microservices design, Redis caching, BullMQ job queues with Dead Letter Queue (DLQ) handling for zero data loss, and WebSockets real-time features.
- Integrations: Stripe, Razorpay, Stripe Connect (KYC/payouts), Firebase Cloud Messaging (FCM), Agora SDK (live streaming).
- DevOps & Deployment: AWS ECS, Docker, Jenkins, Bitbucket CI/CD, Contabo, Vercel, Hostinger.
- Delivered solutions directly to Dubai-based enterprise clients (e.g., Vyonic health platform, Vybemena event management with Stripe Connect 48-hour payouts).
- Education: B.Tech in Computer Engineering (2019 - 2023) from KCE Society's College of Engineering & Management with CGPA 8.18.
- Certifications: NPTEL Cloud Computing (IIT Kharagpur) and NPTEL Introduction to Industry 4.0 & Industrial IoT (IIT Kharagpur).

Professional Experience:
1. Full Stack Developer at Code Expert Solutions (Mar 2026 – Present):
   - Microservices architecture, Node.js, Express, PostgreSQL/MySQL, Prisma ORM.
   - Redis caching for high-speed data access.
   - BullMQ with Dead Letter Queue (DLQ) strategy for fault-tolerant background processing and zero data loss.
   - Primary backend contact for Dubai-based enterprise stakeholders.
   - Deployment via Docker, Jenkins, Contabo, AWS ECS CI/CD pipelines.

2. MERN Stack Developer at Enterprise Web Technologies (Sep 2024 – Feb 2026):
   - React.js, Next.js, Redux Toolkit, RESTful APIs, Agora SDK live streaming.
   - Stripe & Razorpay webhooks, subscription billing, Stripe Connect KYC.
   - Document Management System (DMS) with RBAC & automated emails.
   - Fabric.js interactive PDF editor with drag-and-drop annotations.
   - Full-stack Resume Builder with Node.js/MySQL and payment gateway.
   - SEO optimization ranking Kesaria Textile on 1st page of Google.

Key Projects:
- Vyonic: Dubai Health & Fitness Platform (Backend Team Lead, gym onboarding, trainer booking, session unlocking, Stripe payments).
- Vybemena: Dubai Event Management Platform (Full stack ticketing, Stripe Connect KYC, 48h post-event payouts, 3% commission model, QR ticket check-in).
- Kesaria Textile: SEO-Optimized B2B Marketplace (Ranked #1 page Google for high-volume keywords, dynamic sitemaps, location landing pages).
- ERP Software: Sales, Inventory & Accounting Suite (Voucher transaction handling, real-time analytics).

Services & Offerings:
- Backend & Microservices Architecture (Node.js, Express, BullMQ, Redis)
- Payment Gateways & Stripe Connect Monetization (KYC, automated payouts)
- Full-Stack Web Development (React 18, Next.js 14, Tailwind CSS, TypeScript)
- QA & Software Testing (Automation & Manual: Playwright, Cypress, Jest, Postman API collections, load testing)
- DevOps & Cloud CI/CD (Docker, AWS ECS, Jenkins, Bitbucket)

Guidelines for AI Responses:
- Speak as a helpful, professional AI assistant on behalf of Umesh Kotwal.
- Be concise, confident, precise, and highlight Umesh's backend engineering strengths (microservices, queue handling, payment integrations, Dubai client experience).
- Answer recruiter/client questions accurately using the knowledge above.
`;

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', developer: 'Umesh Kotwal' });
});

app.post('/api/ai/ask', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback smart response generator when API key is missing or not configured
      const qLower = question.toLowerCase();
      let answer = "Umesh Kotwal is a Senior Full Stack Engineer specializing in microservices, Node.js, Next.js, Redis, BullMQ queues, and Stripe payment architecture with 2+ years of production experience.";
      
      if (qLower.includes('stripe') || qLower.includes('payment') || qLower.includes('vybemena')) {
        answer = "Umesh has deep experience with payment integrations, including Stripe Connect for multi-party payouts (48-hour post-event release for Vybemena), Razorpay webhook transaction state machines, and recurring subscription billing.";
      } else if (qLower.includes('microservices') || qLower.includes('bullmq') || qLower.includes('redis') || qLower.includes('backend')) {
        answer = "In backend architecture, Umesh designs microservices using Node.js and Prisma ORM, implements Redis caching to reduce database load on high-traffic endpoints, and builds BullMQ job queues with Dead Letter Queue (DLQ) retry strategies to ensure zero data loss.";
      } else if (qLower.includes('dubai') || qLower.includes('client') || qLower.includes('experience')) {
        answer = "Umesh serves as the primary backend lead for Dubai-based enterprise clients, gathering requirements, architecting systems, and delivering solutions like Vyonic (health & gym platform) and Vybemena (event ticketing & payouts).";
      } else if (qLower.includes('contact') || qLower.includes('email') || qLower.includes('hire')) {
        answer = "You can contact Umesh directly via email at umeshkotwal7@gmail.com or call +91 6352001332. He is actively open for Full Stack & Senior Backend roles!";
      }

      return res.json({ answer, source: 'fallback' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: question,
      config: {
        systemInstruction: UMESH_KNOWLEDGE_BASE,
        temperature: 0.7,
      },
    });

    const text = response.text || "Thank you for asking! Umesh is experienced in React, Next.js, Node.js microservices, Redis caching, and Stripe payments.";
    res.json({ answer: text, source: 'gemini' });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      answer: "Umesh Kotwal is a Full Stack Developer specializing in Node.js microservices, Next.js, Redis caching, and Stripe Connect integrations. Feel free to contact him directly at umeshkotwal7@gmail.com!",
      error: error.message,
    });
  }
});

// Contact API mock endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message, topic, budget } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }
  console.log(`[CONTACT RECEIVED] From: ${name} (${email}), Subject: ${subject || topic}, Budget: ${budget}`);
  res.json({
    success: true,
    message: 'Thank you for reaching out! Umesh will get back to you within 24 hours.',
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
