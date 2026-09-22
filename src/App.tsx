import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LiveSimulator } from './components/LiveSimulator';
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
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { EnquiryPopup } from './components/EnquiryPopup';
import { SERVICES, PROJECTS } from './data/portfolioData';

type ActiveView = 'home' | 'service' | 'project' | 'privacy' | 'terms' | 'sitemap';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string | undefined>(undefined);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Sync with Hash Routing for all dedicated pages
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash || '';

      if (hash.startsWith('#service/')) {
        const query = hash.replace('#service/', '').trim();
        const found = SERVICES.find(s => s.slug === query || s.id === query);
        if (found) {
          setSelectedServiceId(found.id);
          setActiveView('service');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash.startsWith('#project/')) {
        const query = hash.replace('#project/', '').trim();
        const found = PROJECTS.find(p => p.id === query);
        if (found) {
          setSelectedProjectId(found.id);
          setActiveView('project');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash === '#privacy-policy' || hash === '#/privacy-policy') {
        setActiveView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === '#terms-of-service' || hash === '#/terms-of-service') {
        setActiveView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === '#sitemap' || hash === '#/sitemap') {
        setActiveView('sitemap');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Default home view
      setActiveView('home');
      setSelectedServiceId(null);
      setSelectedProjectId(null);

      if (hash && !hash.startsWith('#service') && !hash.startsWith('#project') && !hash.startsWith('#privacy') && !hash.startsWith('#terms') && !hash.startsWith('#sitemap')) {
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
    return () => window.removeEventListener('hashchange', parseHash);
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
    const found = SERVICES.find(s => s.id === serviceId || s.slug === serviceId);
    if (found) {
      setSelectedServiceId(found.id);
      setActiveView('service');
      window.location.hash = `#service/${found.slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProject = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setSelectedProjectId(found.id);
      setActiveView('project');
      window.location.hash = `#project/${found.id}`;
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
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path.startsWith('#service/')) {
      handleSelectService(path.replace('#service/', ''));
      return;
    }

    if (path.startsWith('#project/')) {
      handleSelectProject(path.replace('#project/', ''));
      return;
    }

    if (path === '#privacy-policy' || path === '/privacy-policy') {
      setActiveView('privacy');
      window.location.hash = '#privacy-policy';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '#terms-of-service' || path === '/terms-of-service') {
      setActiveView('terms');
      window.location.hash = '#terms-of-service';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (path === '#sitemap' || path === '/sitemap') {
      setActiveView('sitemap');
      window.location.hash = '#sitemap';
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

      {/* Boot Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
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

                <LiveSimulator darkMode={darkMode} />

                <Skills darkMode={darkMode} />

                <Experience darkMode={darkMode} />

                <Projects darkMode={darkMode} />

                <TechStack darkMode={darkMode} />

                <Services
                  darkMode={darkMode}
                  onSelectService={handleSelectService}
                  onOpenAiModal={() => {
                    setAiInitialPrompt(undefined);
                    setAiModalOpen(true);
                  }}
                />

                <Achievements darkMode={darkMode} />

                <Testimonials darkMode={darkMode} />

                <Contact darkMode={darkMode} />
              </>
            )}
          </main>

          <Footer
            darkMode={darkMode}
            onOpenResumeModal={() => setResumeModalOpen(true)}
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
        </>
      )}
    </div>
  );
}
