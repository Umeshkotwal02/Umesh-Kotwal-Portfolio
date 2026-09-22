import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// HTML string escaping helper
function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Lazy SMTP Transporter builder
function getSmtpTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === 'true' : port === 465;
  const user = process.env.SMTP_USER || 'umeshkotwal658@gmail.com';
  const pass = process.env.SMTP_PASS;

  if (!pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

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
You are the interactive, highly skilled AI Architecture Assistant representing Umesh Kotwal, an experienced Full Stack Developer & Microservices Lead based in Surat, Gujarat, India.

Contact & Profiles:
- Full Name: Umesh Kotwal
- Email: umeshkotwal658@gmail.com
- Phone / WhatsApp: +91 6352001332
- Portfolio: https://umeshcodes.vercel.app/
- LinkedIn: https://www.linkedin.com/in/umeshkotwal07/
- GitHub: https://github.com/Umeshkotwal02/
- Availability: Open for Full-Time Roles, Technical Consulting, and Contract Engagements (Worldwide / Remote / On-Site Dubai / India).

Core Background & Superpowers:
- 2+ years of production experience crafting scalable, high-throughput microservices, fault-tolerant background queues, and responsive full-stack applications.
- Current Position: Full Stack Developer at Code Expert Solutions (Mar 2026 – Present). Primary backend architecture lead for Dubai-based enterprise clients.
- Previous Position: MERN Stack Developer at Enterprise Web Technologies (Sep 2024 – Feb 2026).
- Core Stack: React 18/19, Next.js 14/15, Node.js, Express, TypeScript, Redis, BullMQ (with Dead Letter Queue strategy for zero data loss), PostgreSQL, MySQL, Prisma ORM, WebSockets.
- Payment Engineering: Advanced Stripe integrations, Stripe Connect (multi-vendor KYC onboarding, automated 48-hour post-event payouts for Dubai platforms like Vybemena), Razorpay webhooks with transactional idempotency.
- Cloud & Infrastructure: AWS ECS, Docker containerization, Jenkins CI/CD, Contabo, Vercel, Hostinger.
- Real-Time & Media: Agora SDK live streaming, Firebase Cloud Messaging (FCM), Fabric.js interactive PDF canvas editor.
- High-Profile Projects:
  1. Vyonic (Dubai Health & Gym Ecosystem): Backend Team Lead; engineered trainer booking, session unlocking, member onboarding, and recurring subscription billing.
  2. Vybemena (Dubai Event Management Platform): Full-stack ticketing platform with Stripe Connect KYC, 48-hour post-event payouts, 3% platform fee splitting, and secure QR check-in scanner.
  3. Kesaria Textile: High-volume B2B marketplace optimized for SEO, achieving #1 page Google rank for competitive national keywords.
  4. Enterprise ERP: Sales, accounting, and inventory suite with double-entry voucher state management and real-time ledger reporting.
- Education: B.Tech in Computer Engineering (2019 - 2023) from KCE Society's College of Engineering & Management with CGPA 8.18.
- Certifications: NPTEL Cloud Computing (IIT Kharagpur) and NPTEL Industry 4.0 & Industrial IoT (IIT Kharagpur).

Response Guidelines:
1. Always be conversational, helpful, natural, and engaging. Never repeat robotic, generic one-liners.
2. If the user asks for code (e.g., "i want to cafe website code in js", "how to write a Redis queue worker", "create an AI agent"), provide high-quality, practical code snippets with modern JavaScript/TypeScript best practices, and explain how Umesh can build or scale this into a production-ready solution.
3. If the user asks about collaboration (e.g., "can i create the ai agent from Umesh", "can Umesh build my app?"), explain enthusiastically how Umesh architects full-stack AI agents, backend APIs, and web apps, and invite them to discuss their requirements or reach out at umeshkotwal658@gmail.com / +91 6352001332.
4. If the user asks about Umesh's background, projects, fees, or technologies, answer accurately using the verified knowledge above.
5. Format your answers with clear markdown headers, bold highlights, bullet points, and code blocks for readability.
`;

// Helper: Smart contextual fallback when AI API is unavailable
function generateSmartFallback(question: string): string {
  const q = question.toLowerCase();

  if (q.includes('cafe') || q.includes('restaurant') || q.includes('food')) {
    return `### Building a Modern Cafe Website

Umesh can build a complete, high-performance Cafe & Restaurant web platform! Here is a core JavaScript/React architecture blueprint:

\`\`\`javascript
// Sample Cafe Menu & Order Cart Component (React / Next.js)
import React, { useState } from 'react';

export default function CafeMenu() {
  const [cart, setCart] = useState([]);
  
  const menuItems = [
    { id: 1, name: 'Artisan Espresso', price: 4.50, category: 'Coffee' },
    { id: 2, name: 'Vanilla Bean Latte', price: 5.25, category: 'Coffee' },
    { id: 3, name: 'Almond Croissant', price: 4.00, category: 'Pastry' },
  ];

  const addToCart = (item) => setCart((prev) => [...prev, item]);

  return (
    <div className="cafe-container p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Artisan Cafe & Roastery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map(item => (
          <div key={item.id} className="border p-4 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-zinc-500">\${item.price.toFixed(2)}</p>
            </div>
            <button 
              onClick={() => addToCart(item)}
              className="bg-amber-600 text-white px-3 py-1.5 rounded-lg"
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-zinc-100 rounded-xl">
        <p className="font-bold">Total Items: {cart.length}</p>
      </div>
    </div>
  );
}
\`\`\`

**Enterprise Features Umesh Typically Implements for F&B Clients:**
- **Online Table Booking & Live Order Tracking** (WebSockets)
- **Stripe / Razorpay Instant Checkout** with automatic invoice generation
- **Menu Management Dashboard** with real-time inventory updates
- **SEO & Google Local Business optimization**

Feel free to connect with Umesh directly at **umeshkotwal658@gmail.com** to architect your cafe platform!`;
  }

  if (q.includes('agent') || q.includes('ai') || q.includes('bot') || q.includes('llm')) {
    return `### Building AI Agents with Umesh Kotwal

**Yes, absolutely!** You can definitely build an intelligent AI agent, autonomous assistant, or LLM-integrated workflow with Umesh.

**How Umesh Architects AI Agents:**
1. **Agent Logic & Reasoning:** Integrating Gemini SDK, OpenAI Assistants, or LangChain with custom system prompts and function calling.
2. **Backend Tool Calling (APIs & Databases):** Hooking agents into PostgreSQL/Prisma or REST endpoints so the agent can query databases, perform bookings, or dispatch emails.
3. **Queue & Background Execution:** Using **BullMQ with Redis** to handle long-running agent tasks asynchronously without blocking web requests.
4. **Interactive UI:** Building fast, responsive chat interfaces in React / Next.js with streaming responses (SSE).

Let's turn your AI idea into a deployed product! Reach out directly via:
- **Email:** [umeshkotwal658@gmail.com](mailto:umeshkotwal658@gmail.com)
- **Phone / WhatsApp:** +91 6352001332`;
  }

  if (q.includes('stripe') || q.includes('payment') || q.includes('payout') || q.includes('vybemena')) {
    return `### Umesh's Stripe Connect & Payment Architecture

Umesh has engineered production multi-party payment systems for Dubai clients like **Vybemena**:
- **Stripe Connect KYC:** Automated merchant onboarding & bank verification.
- **Timed Escrow Payouts:** Automated payout releases 48 hours post-event.
- **Platform Monetization:** Automatic splitting of platform commission (e.g., 3%) and merchant revenue.
- **Webhook State Machines:** Idempotent event processing with Redis locks to prevent duplicate credit cards charges.

Interested in integrating robust payment gateways? Contact Umesh at **umeshkotwal658@gmail.com**!`;
  }

  if (q.includes('microservice') || q.includes('bullmq') || q.includes('redis') || q.includes('queue') || q.includes('backend')) {
    return `### Umesh's Backend & Microservices Architecture

Umesh specializes in fault-tolerant, high-concurrency Node.js microservices:
- **BullMQ + Dead Letter Queue (DLQ):** Background job orchestration with automatic retry exponential backoff for guaranteed zero data loss.
- **Redis Caching:** Sub-millisecond latency for hot database queries and distributed rate limiting.
- **Prisma & PostgreSQL:** Clean relational schema design with transactional consistency.
- **AWS ECS & Docker:** Containerized zero-downtime CI/CD deployments.

Have a backend scalability challenge? Reach Umesh at **umeshkotwal658@gmail.com**!`;
  }

  if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('available') || q.includes('rate') || q.includes('cost')) {
    return `### Contact & Hiring Umesh Kotwal

Umesh is actively available for **Full-Time Software Engineering Roles**, **Contract Backend Engineering**, and **Full-Stack Project Development**!

- **Email:** [umeshkotwal658@gmail.com](mailto:umeshkotwal658@gmail.com)
- **Phone / WhatsApp:** +91 6352001332
- **Location:** Surat, Gujarat, India (Available for Remote Worldwide & Dubai Onsite)
- **LinkedIn:** [linkedin.com/in/umeshkotwal07](https://www.linkedin.com/in/umeshkotwal07/)
- **GitHub:** [github.com/Umeshkotwal02](https://github.com/Umeshkotwal02/)

Feel free to send a message via the Contact section below or email directly to schedule a technical discussion!`;
  }

  return `Hello! I am Umesh Kotwal's AI Architecture Assistant. 

Umesh is a Full Stack Developer & Microservices Lead with 2+ years of production experience specializing in **Node.js, Next.js, React, Redis caching, BullMQ queues, and Stripe Connect payment workflows**.

How can I assist you today? I can help you with:
- **Architecture & System Design** (Microservices, Redis, BullMQ, WebSockets)
- **Custom App & Web Development** (React 19, Next.js 15, Node.js)
- **Payment & Fintech Integrations** (Stripe Connect, Razorpay)
- **Hiring & Collaboration Inquiries** for Umesh Kotwal (umeshkotwal658@gmail.com)`;
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', developer: 'Umesh Kotwal' });
});

app.post('/api/ai/ask', async (req, res) => {
  try {
    const { question, history } = req.body;
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      const fallbackText = generateSmartFallback(question);
      return res.json({ answer: fallbackText, source: 'smart-fallback' });
    }

    // Prepare multi-turn conversational contents
    let contents: any = question;
    if (Array.isArray(history) && history.length > 0) {
      const formattedHistory: any[] = [];
      for (const msg of history) {
        if (!msg || typeof msg.text !== 'string' || !msg.text.trim()) continue;
        formattedHistory.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: String(msg.text) }],
        });
      }
      formattedHistory.push({
        role: 'user',
        parts: [{ text: question }],
      });
      contents = formattedHistory;
    }

    // Try primary recommended model first, then fallback models if 503 or transient failure
    const candidateModels = [
      'gemini-flash-latest',
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
    ];

    let generatedText: string | null = null;
    let successfulModel: string | null = null;
    let lastError: any = null;

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction: UMESH_KNOWLEDGE_BASE,
            temperature: 0.7,
          },
        });

        if (response && response.text) {
          generatedText = response.text;
          successfulModel = modelName;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} encountered error:`, err?.message?.slice(0, 120));
      }
    }

    if (generatedText) {
      return res.json({
        answer: generatedText,
        source: 'gemini',
        model: successfulModel,
      });
    }

    console.error('All Gemini candidate models failed, engaging smart fallback:', lastError?.message);
    const fallbackAnswer = generateSmartFallback(question);
    return res.json({
      answer: fallbackAnswer,
      source: 'smart-fallback',
      notice: 'Served via contextual offline engine.',
    });
  } catch (error: any) {
    console.error('General AI Route Error:', error);
    const safeFallback = generateSmartFallback(req.body?.question || '');
    res.json({
      answer: safeFallback,
      source: 'error-fallback',
    });
  }
});

// SEO: robots.txt for search engine crawlers
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://umeshcodes.vercel.app/sitemap.xml
`);
});

// SEO: XML Sitemap for Google, Bing & Search Engine Indexing
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://umeshcodes.vercel.app/</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#about</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#projects</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#experience</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#skills</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#architecture</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#simulator</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#services</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#service/microservices-architecture</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#service/stripe-connect-payments</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#service/custom-software-development</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#service/qa-software-testing</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#service/real-time-systems</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#service/devops-cloud-cicd</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#achievements</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#testimonials</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://umeshcodes.vercel.app/#contact</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`);
});

// Resume Direct Download Endpoints
app.get(['/api/resume/download', '/Umesh_Kotwal_Resume.pdf'], (req, res) => {
  // Plain text fallback formatted CV if directly fetched via curl/browser
  const resumePlainText = `UMESH KOTWAL — CURRICULUM VITAE
Full Stack Developer (React.js / Next.js / Node.js)
Surat, Gujarat, India | Phone: +91 6352001332 | Email: umeshkotwal658@gmail.com
Portfolio: https://umeshkotwal.vercel.app/ | GitHub: https://github.com/Umeshkotwal02/ | LinkedIn: https://www.linkedin.com/in/umeshkotwal07/

PROFESSIONAL SUMMARY:
Full Stack Developer with 2+ years of production experience crafting scalable backend architectures and modern frontend web apps. Specialized in microservices design, high-frequency Redis caching, BullMQ job queues with Dead Letter Queue strategies for zero data loss, WebSockets, Stripe Connect payouts, and AWS ECS CI/CD deployment. Trusted backend lead for Dubai-based enterprise clients.

CORE TECHNICAL SKILLS:
- Backend: Node.js, Express.js, Microservices, REST APIs, WebSockets, BullMQ (DLQ), Redis Caching
- Frontend: React 18, Next.js 14, TypeScript, Tailwind CSS, Redux Toolkit
- Databases: PostgreSQL, MySQL, Prisma ORM, ACID Transactions
- DevOps & Cloud: Docker Containers, AWS (ECS, S3, EC2), Jenkins, Bitbucket CI/CD, Contabo
- Payments & Realtime: Stripe Connect, Razorpay, Agora RTC Video Stream, FCM Push
- QA & Testing: Playwright, Cypress, Jest, Postman API Regression Suites

PROFESSIONAL EXPERIENCE:
1. Full Stack Developer | Code Expert Solutions (Mar 2026 – Present, Surat / Remote)
   - Architected decoupled Node.js microservices with Prisma ORM.
   - Designed BullMQ background queue with Dead Letter Queue (DLQ) retry strategies for zero data loss.
   - Primary technical backend lead for Dubai-based clients.
2. MERN Stack Developer | Enterprise Web Technologies (Sep 2024 – Feb 2026, Surat, India)
   - Built full-stack SaaS apps with Next.js, Agora SDK live streaming, and Stripe Connect.
   - Spearheaded SEO optimization strategies ranking Kesaria Textile on 1st page of Google.

KEY PROJECTS:
- Vyonic: Dubai Health & Fitness Platform (Microservices, trainer availability, Stripe billing)
- Vybemena: Dubai Event Ticketing & Stripe Connect Payouts (48-hour escrow release, 3% commission)
- Kesaria Textile: SEO-optimized B2B marketplace ranking #1 on Google

EDUCATION:
- B.Tech in Computer Engineering (2019 – 2023) | CGPA: 8.18
  KCE Society's College of Engineering & Management, Jalgaon
`;

  res.setHeader('Content-Disposition', 'attachment; filename="Umesh_Kotwal_Resume.txt"');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send(resumePlainText);
});

// SMTP Status Endpoint
app.get('/api/smtp/status', (req, res) => {
  res.json({
    configured: Boolean(process.env.SMTP_PASS),
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || '465',
    user: process.env.SMTP_USER || 'umeshkotwal658@gmail.com',
    recipient: process.env.CONTACT_RECIPIENT_EMAIL || 'umeshkotwal658@gmail.com',
  });
});

// Contact & Enquiry API endpoint with SMTP Email Dispatch
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, topic, budget, imageAttachment, imageName } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const inquirySubject = subject || topic || 'New Client / Project Inquiry';
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'umeshkotwal658@gmail.com';
    const senderSmtpUser = process.env.SMTP_USER || 'umeshkotwal658@gmail.com';

    console.log(`[ENQUIRY RECEIVED] From: ${name} (${email}) | Subject: ${inquirySubject} | Budget: ${budget || 'N/A'}`);

    // Parse image attachments if visitor uploaded a diagram/mockup
    const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
    if (imageAttachment && typeof imageAttachment === 'string' && imageAttachment.startsWith('data:')) {
      const match = imageAttachment.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        attachments.push({
          filename: imageName || 'project-architecture.png',
          content: Buffer.from(match[2], 'base64'),
          contentType: match[1],
        });
      }
    }

    const transporter = getSmtpTransporter();

    // If SMTP_PASS is not provided yet, fallback gracefully with log
    if (!transporter) {
      console.warn(
        `[SMTP NOTICE] SMTP_PASS is not set in environment. Enquiry logged from ${name} (${email}) for recipient ${recipientEmail}. ` +
        `To dispatch live emails, add SMTP_PASS in project settings.`
      );

      return res.json({
        success: true,
        smtpConfigured: false,
        message: 'Thank you for reaching out! Umesh Kotwal has received your enquiry and will respond within 24 hours.',
        note: 'SMTP credentials pending configuration in environment variables.',
      });
    }

    // Modern HTML email template for Umesh
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Enquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0d12; color: #f1f5f9; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #161821; border-radius: 16px; overflow: hidden; border: 1px solid #272a38; }
    .header { background: linear-gradient(135deg, #FF5722 0%, #D84315 100%); padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.95; font-family: monospace; }
    .content { padding: 32px; }
    .meta-table { width: 100%; border-collapse: collapse; }
    .meta-row { border-bottom: 1px solid #232736; }
    .label { padding: 11px 0; width: 140px; color: #94a3b8; font-family: monospace; font-size: 11px; text-transform: uppercase; font-weight: 600; }
    .val { padding: 11px 0; color: #ffffff; font-weight: 600; font-size: 14px; }
    .val a { color: #FF7043; text-decoration: none; }
    .pill { display: inline-block; background: rgba(255, 87, 34, 0.15); color: #FF7043; border: 1px solid rgba(255, 87, 34, 0.35); padding: 3px 10px; border-radius: 9999px; font-size: 12px; font-weight: 600; }
    .msg-title { font-size: 11px; font-family: monospace; text-transform: uppercase; color: #94a3b8; margin: 24px 0 8px 0; font-weight: 700; }
    .msg-box { background: #0c0d12; border: 1px solid #272a38; border-radius: 12px; padding: 20px; color: #e2e8f0; font-size: 14px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; }
    .cta-container { text-align: center; margin-top: 28px; }
    .btn { display: inline-block; background: #FF5722; color: #ffffff !important; font-weight: 700; font-size: 14px; padding: 13px 28px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 12px rgba(255,87,34,0.35); }
    .footer { padding: 18px 32px; background: #0c0d12; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #232736; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🚀 New Client Enquiry Received</h1>
      <p>Source: Umesh Kotwal Portfolio (Contact System)</p>
    </div>
    <div class="content">
      <table class="meta-table">
        <tr class="meta-row">
          <td class="label">Sender Name</td>
          <td class="val">${escapeHtml(name)}</td>
        </tr>
        <tr class="meta-row">
          <td class="label">Client Email</td>
          <td class="val"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr class="meta-row">
          <td class="label">Budget / Scope</td>
          <td class="val"><span class="pill">${escapeHtml(budget || 'General Consultation')}</span></td>
        </tr>
        <tr class="meta-row">
          <td class="label">Subject</td>
          <td class="val">${escapeHtml(inquirySubject)}</td>
        </tr>
        <tr class="meta-row">
          <td class="label">Received At</td>
          <td class="val" style="color: #94a3b8; font-size: 12px; font-family: monospace;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST</td>
        </tr>
      </table>

      <div class="msg-title">Project Requirements / Client Message:</div>
      <div class="msg-box">${escapeHtml(message)}</div>

      ${attachments.length > 0 ? `<p style="margin-top: 16px; font-size: 12px; color: #38bdf8; font-family: monospace;">📎 Attachment: <strong>${escapeHtml(attachments[0].filename)}</strong> (attached to this email)</p>` : ''}

      <div class="cta-container">
        <a href="mailto:${escapeHtml(email)}?subject=Re: ${encodeURIComponent(inquirySubject)}" class="btn">
          Direct Reply to ${escapeHtml(name)} &rarr;
        </a>
      </div>
    </div>
    <div class="footer">
      Dispatched via Node.js SMTP service &bull; Recipient: ${recipientEmail}
    </div>
  </div>
</body>
</html>
`;

    // Plain text fallback
    const textContent = `
NEW CLIENT ENQUIRY - UMESH KOTWAL PORTFOLIO
===========================================
From: ${name} (${email})
Subject: ${inquirySubject}
Budget: ${budget || 'Not specified'}
Date: ${new Date().toISOString()}

Message:
--------
${message}

${attachments.length > 0 ? `Attachment included: ${attachments[0].filename}` : ''}

Direct Reply: mailto:${email}
`;

    const mailOptions = {
      from: `"${name} via Portfolio" <${senderSmtpUser}>`,
      to: recipientEmail,
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio Enquiry] ${inquirySubject} - ${name}`,
      text: textContent,
      html: htmlContent,
      attachments,
    };

    const sendResult = await transporter.sendMail(mailOptions);
    console.log(`[SMTP SUCCESS] Enquiry email dispatched! MessageId: ${sendResult.messageId}`);

    // Optional automated polite receipt to client
    try {
      await transporter.sendMail({
        from: `"Umesh Kotwal" <${senderSmtpUser}>`,
        to: email,
        subject: `Thank you for reaching out, ${name}! | Umesh Kotwal`,
        text: `Hi ${name},\n\nThank you for getting in touch regarding "${inquirySubject}".\n\nI have received your enquiry and will review your specifications. You can expect a response within 24 hours.\n\nBest regards,\nUmesh Kotwal\nFull Stack Developer & Microservices Lead\nSurat, Gujarat, India\nPhone: +91 6352001332 | Email: umeshkotwal658@gmail.com\nPortfolio: https://umeshkotwal.vercel.app/`,
        html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1e293b; max-width: 540px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
  <h2 style="color: #FF5722; margin-top: 0; font-size: 20px;">Hi ${escapeHtml(name)},</h2>
  <p style="font-size: 14px; line-height: 1.6; color: #334155;">Thank you for getting in touch! I have successfully received your enquiry regarding <strong>${escapeHtml(inquirySubject)}</strong>.</p>
  <p style="font-size: 14px; line-height: 1.6; color: #334155;">I will review your project requirements and follow up with you within <strong>24 hours</strong>.</p>
  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
  <p style="font-size: 13px; color: #0f172a; margin-bottom: 2px;"><strong>Umesh Kotwal</strong></p>
  <p style="font-size: 12px; color: #64748b; margin: 0 0 2px 0;">Full Stack Developer (React.js / Next.js / Node.js Microservices)</p>
  <p style="font-size: 12px; color: #64748b; margin: 0;">Surat, Gujarat, India &bull; Phone: +91 6352001332</p>
  <p style="font-size: 12px; margin-top: 10px;">
    <a href="https://umeshkotwal.vercel.app/" style="color: #FF5722; text-decoration: none; font-weight: 600;">View Portfolio</a> &bull; 
    <a href="https://github.com/Umeshkotwal02/" style="color: #FF5722; text-decoration: none; font-weight: 600;">GitHub Profile</a> &bull;
    <a href="https://www.linkedin.com/in/umeshkotwal07/" style="color: #FF5722; text-decoration: none; font-weight: 600;">LinkedIn</a>
  </p>
</div>
        `,
      });
    } catch (ackError) {
      console.warn('[AUTO-REPLY NOTE] Automated receipt not sent to visitor:', ackError);
    }

    res.json({
      success: true,
      smtpConfigured: true,
      message: 'Your enquiry has been dispatched directly to Umesh Kotwal via SMTP!',
      messageId: sendResult.messageId,
    });
  } catch (error: any) {
    console.error('[SMTP DISPATCH ERROR] Failed to send enquiry email:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to dispatch email via SMTP server.',
      details: error.message,
    });
  }
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
