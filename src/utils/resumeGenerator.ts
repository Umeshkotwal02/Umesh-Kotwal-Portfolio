import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, SKILLS } from '../data/portfolioData';

export function generateResumePdf(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 16;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 15) {
      doc.addPage();
      y = 16;
      return true;
    }
    return false;
  };

  // Top Accent Bar (Brand Orange: #FF5722 -> RGB: 255, 87, 34)
  doc.setFillColor(255, 87, 34);
  doc.rect(0, 0, pageWidth, 4, 'F');

  // Header: Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(24, 24, 27); // Dark zinc
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y);
  y += 7;

  // Header: Professional Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(255, 87, 34); // Accent Orange
  doc.text(PERSONAL_INFO.title.toUpperCase(), margin, y);
  y += 5.5;

  // Header: Contact & Links Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(82, 82, 91); // zinc-600
  const contactText = `${PERSONAL_INFO.location}  |  Phone: ${PERSONAL_INFO.phone}  |  Email: ${PERSONAL_INFO.email}`;
  doc.text(contactText, margin, y);
  y += 4.5;

  const linksText = `Portfolio: ${PERSONAL_INFO.portfolioUrl}  |  GitHub: ${PERSONAL_INFO.githubUrl}  |  LinkedIn: ${PERSONAL_INFO.linkedinUrl}`;
  doc.text(linksText, margin, y);
  y += 6;

  // Divider Line
  doc.setDrawColor(228, 228, 231); // zinc-200
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  // Helper: Section Header
  const renderSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(24, 24, 27);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;

    doc.setDrawColor(255, 87, 34); // Accent underline
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + 28, y);

    doc.setDrawColor(228, 228, 231); // Light continuation line
    doc.setLineWidth(0.2);
    doc.line(margin + 28, y, pageWidth - margin, y);
    y += 4.5;
  };

  // Section 1: Professional Summary
  renderSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(63, 63, 70);
  const bioLines = doc.splitTextToSize(PERSONAL_INFO.fullBio, contentWidth);
  doc.text(bioLines, margin, y);
  y += bioLines.length * 3.8 + 3.5;

  // Section 2: Core Technical Skills
  renderSectionHeader('Core Technical Skills');
  const skillCategories = [
    { label: 'Backend Architecture', skills: 'Node.js, Express.js, Microservices, REST APIs, WebSockets, BullMQ (DLQ), Redis Caching' },
    { label: 'Frontend Engineering', skills: 'React 18, Next.js 14 (App Router & SSR), TypeScript, Tailwind CSS, Redux Toolkit, Motion' },
    { label: 'Databases & ORM', skills: 'PostgreSQL, MySQL, MongoDB (Mongoose), Prisma ORM, ACID Transactions, Connection Pooling' },
    { label: 'Cloud, DevOps & CI/CD', skills: 'Docker Containers, AWS (ECS, S3, EC2), Jenkins, Bitbucket CI/CD, Nginx Proxy, Contabo' },
    { label: 'Payment & Real-Time', skills: 'Stripe Connect (KYC & Escrow Payouts), Razorpay Webhooks, Agora RTC Video Stream, Firebase FCM' },
    { label: 'QA & Testing Automation', skills: 'Playwright, Cypress, Jest Unit Tests, Postman API Regression Suites, CI/CD Quality Gates' }
  ];

  skillCategories.forEach((cat) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(39, 39, 42);
    doc.text(`• ${cat.label}: `, margin + 1, y);

    const labelWidth = doc.getTextWidth(`• ${cat.label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const splitSkills = doc.splitTextToSize(cat.skills, contentWidth - labelWidth - 2);
    doc.text(splitSkills, margin + 1 + labelWidth, y);
    y += splitSkills.length * 3.6 + 1;
  });
  y += 2.5;

  // Section 3: Professional Experience
  renderSectionHeader('Professional Experience');
  EXPERIENCES.forEach((exp) => {
    checkPageBreak(25);
    // Role & Company
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(24, 24, 27);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 87, 34);
    const companyText = ` |  ${exp.company}`;
    doc.text(companyText, margin + doc.getTextWidth(exp.role), y);

    // Period & Location (Right Aligned)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(113, 113, 122);
    const periodText = `${exp.period}  •  ${exp.location}`;
    doc.text(periodText, pageWidth - margin - doc.getTextWidth(periodText), y);
    y += 4.5;

    // Summary
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(82, 82, 91);
    const summaryLines = doc.splitTextToSize(exp.summary, contentWidth);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 3.6 + 1.5;

    // Key Achievements Bullets
    exp.responsibilities.forEach((bullet) => {
      checkPageBreak(7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(63, 63, 70);
      doc.text('–', margin + 2, y);
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 6);
      doc.text(bulletLines, margin + 5, y);
      y += bulletLines.length * 3.4 + 0.8;
    });
    y += 2.5;
  });

  // Section 4: Key Featured Projects
  renderSectionHeader('Key Production Projects');
  PROJECTS.slice(0, 3).forEach((proj) => {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(24, 24, 27);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(113, 113, 122);
    const subtitleText = ` (${proj.subtitle}  •  ${proj.clientLocation || 'Enterprise'})`;
    doc.text(subtitleText, margin + doc.getTextWidth(proj.title), y);
    y += 4;

    // Tech Stack Pill text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(255, 87, 34);
    doc.text(`Technologies: ${proj.techStack.join(' • ')}`, margin, y);
    y += 3.5;

    // Highlights Bullets
    proj.highlights.slice(0, 2).forEach((h) => {
      checkPageBreak(6);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(63, 63, 70);
      doc.text('•', margin + 2, y);
      const lines = doc.splitTextToSize(h, contentWidth - 6);
      doc.text(lines, margin + 5, y);
      y += lines.length * 3.3 + 0.6;
    });
    y += 2;
  });

  // Section 5: Education & Certifications
  renderSectionHeader('Education & Professional Certifications');
  checkPageBreak(15);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(24, 24, 27);
  doc.text(`${PERSONAL_INFO.degree} (CGPA: ${PERSONAL_INFO.cgpa})`, margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(113, 113, 122);
  const gradText = `${PERSONAL_INFO.graduationYear}`;
  doc.text(gradText, pageWidth - margin - doc.getTextWidth(gradText), y);
  y += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(82, 82, 91);
  doc.text(PERSONAL_INFO.college, margin, y);
  y += 5;

  CERTIFICATIONS.forEach((cert) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(39, 39, 42);
    doc.text(`• ${cert.title} — ${cert.issuer} (${cert.year})`, margin, y);
    y += 3.5;
  });

  // Footer on all pages: Page numbers & Verification watermark
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(161, 161, 170);
    const footerLeft = `Umesh Kotwal — Full Stack Developer CV  |  ${PERSONAL_INFO.portfolioUrl}`;
    doc.text(footerLeft, margin, pageHeight - 8);

    const footerRight = `Page ${i} of ${totalPages}`;
    doc.text(footerRight, pageWidth - margin - doc.getTextWidth(footerRight), pageHeight - 8);

    doc.setDrawColor(244, 244, 245);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 11, pageWidth - margin, pageHeight - 11);
  }

  return doc;
}

/**
 * Downloads the resume PDF directly to the user's computer or mobile device.
 * Triggers native download attribute so it works seamlessly even within iframes.
 */
export function downloadResume(): boolean {
  try {
    const doc = generateResumePdf();
    const fileName = 'Umesh_Kotwal_Resume.pdf';

    // Method 1: jspdf native save
    doc.save(fileName);

    // Also create Blob fallback download link for bulletproof reliability across iframes
    const blob = doc.output('blob');
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 1500);

    return true;
  } catch (err) {
    console.error('Failed to generate PDF directly:', err);
    // Fallback: direct window or API trigger
    window.location.href = '/api/resume/download';
    return false;
  }
}
