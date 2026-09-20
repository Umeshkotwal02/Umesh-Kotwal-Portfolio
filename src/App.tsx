import React, { useState } from 'react';
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
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${darkMode ? 'bg-[#09090b] text-zinc-100' : 'bg-[#fafafa] text-zinc-900'}`}>
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
            onOpenAiModal={() => setAiModalOpen(true)}
            onOpenResumeModal={() => setResumeModalOpen(true)}
          />

          <main>
            <Hero
              onOpenAiModal={() => setAiModalOpen(true)}
              onOpenResumeModal={() => setResumeModalOpen(true)}
              darkMode={darkMode}
            />

            <About darkMode={darkMode} />

            <LiveSimulator darkMode={darkMode} />

            <Skills darkMode={darkMode} />

            <Experience darkMode={darkMode} />

            <Projects darkMode={darkMode} />

            <TechStack darkMode={darkMode} />

            <Services darkMode={darkMode} />

            <Achievements darkMode={darkMode} />

            <Testimonials darkMode={darkMode} />

            <Contact darkMode={darkMode} />
          </main>

          <Footer darkMode={darkMode} />

          {/* AI Bot Assistant Modal */}
          <AiAssistantModal
            darkMode={darkMode}
            isOpen={aiModalOpen}
            onClose={() => setAiModalOpen(false)}
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
