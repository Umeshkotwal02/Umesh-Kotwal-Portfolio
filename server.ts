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
You are an AI Assistant representing Umesh Kotwal, a Full Stack Developer (React.js / Next.js / Node.js) based in Surat, Gujarat, India.
Contact: Email: umeshkotwal658@gmail.com | Phone: +91 6352001332 | Portfolio: https://umeshkotwal.vercel.app/ | GitHub: https://github.com/Umeshkotwal02/ | LinkedIn: https://www.linkedin.com/in/umeshkotwal07/

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
        answer = "You can contact Umesh directly via email at umeshkotwal658@gmail.com or call +91 6352001332. He is actively open for Full Stack & Senior Backend roles!";
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
      answer: "Umesh Kotwal is a Full Stack Developer specializing in Node.js microservices, Next.js, Redis caching, and Stripe Connect integrations. Feel free to contact him directly at umeshkotwal658@gmail.com!",
      error: error.message,
    });
  }
});

// SEO: robots.txt for search engine crawlers
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: https://full-stack-developer-umesh-kotwal.vercel.app/sitemap.xml
`);
});

// SEO: XML Sitemap for Google, Bing & Search Engine Indexing
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#about</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#projects</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#experience</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#skills</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#architecture</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#simulator</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#services</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#achievements</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#testimonials</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://full-stack-developer-umesh-kotwal.vercel.app/#contact</loc>
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
