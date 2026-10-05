import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { ServiceDetail } from './components/ServiceDetail';
import { ProjectDetail } from './components/ProjectDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { SitemapPage } from './components/SitemapPage';
import { StandalonePage } from './components/StandalonePage';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { EnquiryPopup } from './components/EnquiryPopup';
import { SERVICES, PROJECTS } from './data/portfolioData';

type ActiveView =
  | 'home'
  | 'service'
  | 'project'
  | 'privacy'
  | 'terms'
  | 'sitemap'
  | 'about'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'services'
  | 'achievements'
  | 'testimonials'
  | 'contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string | undefined>(undefined);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Sync with Hash & Path Routing for all dedicated pages
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash || '';
      const rawPathname = window.location.pathname || '';
      const pathname = rawPathname.replace(/\/+$/, '') || '/';

      // Project Detail page via hash (#project/id) or path (/projects/id)
      if (
        hash.startsWith('#project/') ||
        hash.startsWith('#/project/') ||
        hash.startsWith('#projects/') ||
        hash.startsWith('#/projects/')
      ) {
        const query = hash.replace(/^#(projects?\/|\/projects?\/)/, '').replace(/\/+$/, '').trim().toLowerCase();
        const found = PROJECTS.find(p => p.id.toLowerCase() === query);
        if (found) {
          setSelectedProjectId(found.id);
          setSelectedServiceId(null);
          setActiveView('project');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (pathname.startsWith('/projects/') || pathname.startsWith('/project/')) {
        const query = pathname.replace(/^\/(projects?\/)/, '').replace(/\/+$/, '').trim().toLowerCase();
        const found = PROJECTS.find(p => p.id.toLowerCase() === query);
        if (found) {
          setSelectedProjectId(found.id);
          setSelectedServiceId(null);
          setActiveView('project');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // Service Detail page via hash (#service/slug) or path (/services/slug)
      if (
        hash.startsWith('#service/') ||
        hash.startsWith('#/service/') ||
        hash.startsWith('#services/') ||
        hash.startsWith('#/services/')
      ) {
        const query = hash.replace(/^#(services?\/|\/services?\/)/, '').replace(/\/+$/, '').trim().toLowerCase();
        const found = SERVICES.find(s => (s.slug && s.slug.toLowerCase() === query) || s.id.toLowerCase() === query);
        if (found) {
          setSelectedServiceId(found.id);
          setSelectedProjectId(null);
          setActiveView('service');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (pathname.startsWith('/services/') || pathname.startsWith('/service/')) {
        const query = pathname.replace(/^\/(services?\/)/, '').replace(/\/+$/, '').trim().toLowerCase();
        const found = SERVICES.find(s => (s.slug && s.slug.toLowerCase() === query) || s.id.toLowerCase() === query);
        if (found) {
          setSelectedServiceId(found.id);
          setSelectedProjectId(null);
          setActiveView('service');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // Terms of Service
      if (
        hash === '#terms' ||
        hash === '#/terms' ||
        hash === '#terms-of-service' ||
        hash === '#/terms-of-service' ||
        pathname === '/terms' ||
        pathname === '/terms-of-service'
      ) {
        setActiveView('terms');
        setSelectedServiceId(null);
        setSelectedProjectId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Privacy Policy
      if (
        hash === '#privacy' ||
        hash === '#/privacy' ||
        hash === '#privacy-policy' ||
        hash === '#/privacy-policy' ||
        pathname === '/privacy' ||
        pathname === '/privacy-policy'
      ) {
        setActiveView('privacy');
        setSelectedServiceId(null);
        setSelectedProjectId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // HTML Sitemap
      if (
        hash === '#sitemap' ||
        hash === '#/sitemap' ||
        pathname === '/sitemap'
      ) {
        setActiveView('sitemap');
        setSelectedServiceId(null);
        setSelectedProjectId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Standalone Core Pages (when accessed directly via clean path)
      if (pathname === '/about') {
        setActiveView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/skills') {
        setActiveView('skills');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/experience') {
        setActiveView('experience');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/projects') {
        setActiveView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/services') {
        setActiveView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/achievements' || pathname === '/education') {
        setActiveView('achievements');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/testimonials') {
        setActiveView('testimonials');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/contact') {
        setActiveView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Default home view
      setActiveView('home');
      setSelectedServiceId(null);
      setSelectedProjectId(null);

      if (hash && hash !== '#') {
        const targetId = hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    window.addEventListener('popstate', parseHash);
    return () => {
      window.removeEventListener('hashchange', parseHash);
      window.removeEventListener('popstate', parseHash);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSelectService = (serviceId: string) => {
    if (!serviceId) {
      handleNavigate('/');
      return;
    }
    const cleanId = serviceId.replace(/\/+$/, '').toLowerCase();
    const found = SERVICES.find(
      s => s.id.toLowerCase() === cleanId || (s.slug && s.slug.toLowerCase() === cleanId)
    );
    if (found) {
      setSelectedServiceId(found.id);
      setSelectedProjectId(null);
      setActiveView('service');
      const targetPath = `/services/${found.slug || found.id}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProject = (projectId: string) => {
    const cleanId = projectId.replace(/\/+$/, '').toLowerCase();
    const found = PROJECTS.find(p => p.id.toLowerCase() === cleanId);
    if (found) {
      setSelectedProjectId(found.id);
      setSelectedServiceId(null);
      setActiveView('project');
      const targetPath = `/projects/${found.id}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigate = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
      return;
    }

    if (path === '/' || path === '') {
      setActiveView('home');
      setSelectedServiceId(null);
      setSelectedProjectId(null);
      if (window.location.pathname !== '/' || window.location.hash) {
        window.history.pushState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      path.startsWith('#service/') ||
      path.startsWith('/services/') ||
      path.startsWith('/service/')
    ) {
      const slug = path.replace(/^(#services?\/|\/services?\/)/, '').replace(/\/+$/, '');
      handleSelectService(slug);
      return;
    }

    if (
      path.startsWith('#project/') ||
      path.startsWith('/projects/') ||
      path.startsWith('/project/')
    ) {
      const id = path.replace(/^(#projects?\/|\/projects?\/)/, '').replace(/\/+$/, '');
      handleSelectProject(id);
      return;
    }

    if (
      path === '/terms' ||
      path === '#terms' ||
      path === '/terms-of-service' ||
      path === '#terms-of-service'
    ) {
      setActiveView('terms');
      setSelectedServiceId(null);
      setSelectedProjectId(null);
      window.history.pushState(null, '', '/terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      path === '/privacy' ||
      path === '#privacy' ||
      path === '/privacy-policy' ||
      path === '#privacy-policy'
    ) {
      setActiveView('privacy');
      setSelectedServiceId(null);
      setSelectedProjectId(null);
      window.history.pushState(null, '', '/privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '#sitemap' || path === '/sitemap') {
      setActiveView('sitemap');
      setSelectedServiceId(null);
      setSelectedProjectId(null);
      window.history.pushState(null, '', '/sitemap');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/about') {
      setActiveView('about');
      window.history.pushState(null, '', '/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/skills') {
      setActiveView('skills');
      window.history.pushState(null, '', '/skills');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/experience') {
      setActiveView('experience');
      window.history.pushState(null, '', '/experience');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/projects') {
      setActiveView('projects');
      window.history.pushState(null, '', '/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/services') {
      setActiveView('services');
      window.history.pushState(null, '', '/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/achievements' || path === '/education') {
      setActiveView('achievements');
      window.history.pushState(null, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/testimonials') {
      setActiveView('testimonials');
      window.history.pushState(null, '', '/testimonials');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '/contact') {
      setActiveView('contact');
      window.history.pushState(null, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Standard section anchor
    setActiveView('home');
    setSelectedServiceId(null);
    setSelectedProjectId(null);
    const targetHash = path.startsWith('#') ? path : `#${path}`;
    window.location.hash = targetHash;
    const targetId = targetHash.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const activeService = selectedServiceId
    ? SERVICES.find(s => s.id === selectedServiceId)
    : null;

  const activeProject = selectedProjectId
    ? PROJECTS.find(p => p.id === selectedProjectId)
    : null;

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${darkMode ? 'dark bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
      <CustomCursor />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenAiModal={() => {
          setAiInitialPrompt(undefined);
          setAiModalOpen(true);
        }}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onSelectService={handleSelectService}
        selectedServiceId={selectedServiceId}
        onNavigate={handleNavigate}
        currentPath={window.location.hash || window.location.pathname}
      />

          <main>
            {activeView === 'service' && activeService && (
              <ServiceDetail
                service={activeService}
                darkMode={darkMode}
                onBack={() => handleNavigate('/#services')}
                onSelectService={handleSelectService}
                onOpenAiModal={(prompt) => {
                  setAiInitialPrompt(prompt);
                  setAiModalOpen(true);
                }}
              />
            )}

            {activeView === 'project' && activeProject && (
              <ProjectDetail
                project={activeProject}
                darkMode={darkMode}
                onBack={() => handleNavigate('/#projects')}
                onNavigate={handleNavigate}
                onOpenAiModal={(prompt) => {
                  setAiInitialPrompt(prompt);
                  setAiModalOpen(true);
                }}
              />
            )}

            {activeView === 'privacy' && (
              <PrivacyPolicy
                darkMode={darkMode}
                onNavigate={handleNavigate}
              />
            )}

            {activeView === 'terms' && (
              <TermsOfService
                darkMode={darkMode}
                onNavigate={handleNavigate}
              />
            )}

            {activeView === 'sitemap' && (
              <SitemapPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
              />
            )}

            {activeView === 'about' && (
              <StandalonePage
                title="About Umesh Kotwal"
                subtitle="Background, Engineering Leadership & Philosophy"
                description="Learn about Umesh Kotwal's journey as a Full-Stack Engineer, B.Tech Computer Engineering background, and technical philosophy."
                canonicalPath="/about"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["About Umesh Kotwal", "Full Stack Developer", "Engineering Bio", "Dubai Remote"]}
              >
                <About darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'skills' && (
              <StandalonePage
                title="Technical Skills & Proficiencies"
                subtitle="Backend, Frontend, Cloud & Databases Matrix"
                description="Explore Umesh Kotwal's technical skills matrix across Node.js microservices, React.js, PostgreSQL, Redis, BullMQ, and Docker."
                canonicalPath="/skills"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Technical Skills", "Node.js", "React.js", "PostgreSQL", "Docker", "BullMQ"]}
              >
                <Skills darkMode={darkMode} />
                <TechStack darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'experience' && (
              <StandalonePage
                title="Professional Experience"
                subtitle="Production Roles & Engineering Milestones"
                description="Review Umesh Kotwal's work history as Full Stack Developer at CodExpert Solutions and Trainee at ProfoundEdutech."
                canonicalPath="/experience"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Work Experience", "CodExpert Solutions", "ProfoundEdutech", "Backend Lead"]}
              >
                <Experience darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'projects' && (
              <StandalonePage
                title="Production Projects & Case Studies"
                subtitle="Microservices, E-Commerce & Full-Stack Systems"
                description="Explore 6 production projects engineered by Umesh Kotwal including Vyonic, Vybemena, ERP Software, Kesaria Textile, The Magic Homes, and Kapoor Lehenga."
                canonicalPath="/projects"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Projects", "Vyonic", "Vybemena", "ERP Software", "Kesaria Textile", "Magic Homes", "Kapoor Lehenga"]}
              >
                <Projects darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'services' && (
              <StandalonePage
                title="Engineering Services"
                subtitle="Specialized Consulting & Development Offerings"
                description="Specialized software engineering services by Umesh Kotwal: Microservices Architecture, Stripe Connect, Custom ERP, QA Automation, and DevOps."
                canonicalPath="/services"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Services", "Microservices Architecture", "Stripe Connect", "ERP CRM", "QA Testing"]}
              >
                <Services
                  darkMode={darkMode}
                  onSelectService={handleSelectService}
                  onOpenAiModal={() => {
                    setAiInitialPrompt(undefined);
                    setAiModalOpen(true);
                  }}
                />
              </StandalonePage>
            )}

            {activeView === 'achievements' && (
              <StandalonePage
                title="Quantified Achievements"
                subtitle="Performance SLAs & System Uptime"
                description="System performance milestones achieved by Umesh Kotwal: 99.9% uptime, zero data loss queues, and sub-40ms cache latencies."
                canonicalPath="/achievements"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Achievements", "Uptime", "Zero Data Loss", "System Reliability"]}
              >
                <Achievements darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'testimonials' && (
              <StandalonePage
                title="Client Testimonials & Endorsements"
                subtitle="Stakeholder Feedback & Recommendations"
                description="Read client testimonials and recommendations for Umesh Kotwal from Dubai enterprise stakeholders and manufacturing clients."
                canonicalPath="/testimonials"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Testimonials", "Client Reviews", "Recommendations", "Dubai Enterprise"]}
              >
                <Testimonials darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'contact' && (
              <StandalonePage
                title="Contact & Consultation"
                subtitle="Direct Inquiries & Project Discussion"
                description="Get in touch with Umesh Kotwal for full-stack engineering roles, microservices architecture, and technical consulting."
                canonicalPath="/contact"
                darkMode={darkMode}
                onNavigate={handleNavigate}
                keywords={["Contact", "Hire Developer", "Software Consultation", "Email", "WhatsApp"]}
              >
                <Contact darkMode={darkMode} />
              </StandalonePage>
            )}

            {activeView === 'home' && (
              <>
                <Hero
                  onOpenAiModal={() => {
                    setAiInitialPrompt(undefined);
                    setAiModalOpen(true);
                  }}
                  onOpenResumeModal={() => setResumeModalOpen(true)}
                  darkMode={darkMode}
                />

                <About darkMode={darkMode} />

                <Experience darkMode={darkMode} />

                <Skills darkMode={darkMode} />

                <Projects darkMode={darkMode} />

                <Achievements darkMode={darkMode} />

                <TechStack darkMode={darkMode} />

                <Services
                  darkMode={darkMode}
                  onSelectService={handleSelectService}
                  onOpenAiModal={() => {
                    setAiInitialPrompt(undefined);
                    setAiModalOpen(true);
                  }}
                />

                <Testimonials darkMode={darkMode} />

                <Contact darkMode={darkMode} />
              </>
            )}
          </main>

          <Footer
            darkMode={darkMode}
            onOpenResumeModal={() => setResumeModalOpen(true)}
            onNavigate={handleNavigate}
          />

          {/* 10-Second Recurring Enquiry Popup */}
          <EnquiryPopup
            darkMode={darkMode}
            onOpenAiModal={(prompt) => {
              setAiInitialPrompt(prompt);
              setAiModalOpen(true);
            }}
          />

          {/* AI Bot Assistant Modal */}
          <AiAssistantModal
            darkMode={darkMode}
            isOpen={aiModalOpen}
            onClose={() => {
              setAiModalOpen(false);
              setAiInitialPrompt(undefined);
            }}
            initialQuestion={aiInitialPrompt}
          />

          {/* Full Resume Modal */}
          <ResumeModal
            darkMode={darkMode}
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />
        </div>
      );
    }
