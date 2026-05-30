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
import { portfolioData } from './data/portfolioData';

export default function App() {
  // Multilingual State: detects browser locale first, then defaults to English
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
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

      {/* Footer credits */}
      <footer className="bg-zinc-900 border-t border-zinc-850 text-zinc-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold text-lg text-white select-none">
              {portfolioData.name[currentLang]}
              <span className="text-orange-500">.</span>
            </span>
          </div>

          <p className="font-sans text-xs text-zinc-500 select-none">
            &copy; {currentYear} {portfolioData.name[currentLang]}. 
            {currentLang === 'zh' ? ' 橙白极简品牌设计 · 像素级追求' : ' Premium minimalist styling in Orange-white.'}
          </p>
        </div>
      </footer>
      <WeChatWidget />
    </div>
  );
}
