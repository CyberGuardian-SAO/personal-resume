import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIChatbot from './components/AIChatbot';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';
import WeChatWidget from './components/WeChatWidget';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  // Multilingual State: detects browser locale first, then defaults to English
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    if (typeof navigator !== 'undefined') {
      const locale = navigator.language.toLowerCase();
      if (locale.includes('zh')) {
        setCurrentLang('zh');
      } else {
        setCurrentLang('en');
      }
    }
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen bg-white text-zinc-800 font-sans selection:bg-orange-500/20 selection:text-orange-600 transition-colors duration-500 overflow-x-hidden">
      {/* Premium Cursor Follower particle */}
      <MouseFollower />

      {/* Structured Glass Header */}
      <Header
        currentLang={currentLang}
        setLang={setCurrentLang}
        onScrollTo={handleScrollTo}
      />

      {/* Main Blocks */}
      <main className="w-full">
        {/* Full Viewport Background Video Hero section */}
        <Hero
          currentLang={currentLang}
          onScrollTo={handleScrollTo}
        />

        {/* Apple Style Bento Grid stats & details */}
        <About
          currentLang={currentLang}
        />

        {/* Interactive Linear-style tech skill progress bars */}
        <Skills
          currentLang={currentLang}
        />

        {/* Notion Style Chronological Experience list */}
        <Experience
          currentLang={currentLang}
        />

        {/* Linear Style Product Galleries with overlays */}
        <Projects
          currentLang={currentLang}
        />

        {/* Interactive Gemini AI Twin assistant */}
        <AIChatbot
          currentLang={currentLang}
        />

        {/* Simple Coordinates Contact form */}
        <Contact
          currentLang={currentLang}
        />
      </main>

      {/* High-fidelity Footer Coordinates */}
      <Footer
        currentLang={currentLang}
        onScrollTo={handleScrollTo}
      />
      <WeChatWidget />
    </div>
  );
}
