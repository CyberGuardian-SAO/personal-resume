import { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MouseFollower from './components/MouseFollower';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

// Lazy loading heavy non-critical components to improve initial load speed
const LatestNews = lazy(() => import('./components/LatestNews'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const AIChatbot = lazy(() => import('./components/AIChatbot'));
const Contact = lazy(() => import('./components/Contact'));
const WeChatWidget = lazy(() => import('./components/WeChatWidget'));
const NatureEffects = lazy(() => import('./components/NatureEffects'));

export default function App() {
  // Multilingual State: detects browser locale first, then defaults to English
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);

      // Theme init
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      }
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

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
      return newTheme;
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-zinc-300 font-sans selection:bg-orange-500/20 selection:text-orange-600 transition-colors duration-500 overflow-x-hidden">
      
      {/* Global Abstract Frosted Glass Haze Background */}
      <div className="fixed inset-0 z-[-1] bg-slate-50/50 dark:bg-[#050505] transition-colors duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-100/60 dark:bg-orange-500/10 mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-100/60 dark:bg-indigo-600/10 mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-orange-50/60 dark:bg-amber-500/10 mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        {/* Additional frost overlay to ensure text contrast isn't heavily impacted */}
        <div className="absolute inset-0 bg-white/40 dark:bg-[#030303]/40 backdrop-blur-[100px] transition-colors duration-500" style={{ backdropFilter: 'blur(120px)', WebkitBackdropFilter: 'blur(120px)' }} />
      </div>

      <Suspense fallback={null}>
        <NatureEffects />
      </Suspense>

      {/* Premium Cursor Follower particle */}
      <MouseFollower />

      {/* Structured Glass Header */}
      <Header
        currentLang={currentLang}
        setLang={setCurrentLang}
        onScrollTo={handleScrollTo}
        theme={theme}
        toggleTheme={toggleTheme}
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

        <Suspense fallback={<div className="h-40 w-full" />}>
          {/* Apple style Glassmorphism dynamic timeline */}
          <LatestNews currentLang={currentLang} />
          
          {/* Interactive Linear-style tech skill progress bars */}
          <Skills currentLang={currentLang} />
          
          {/* Notion Style Chronological Experience list */}
          <Experience currentLang={currentLang} />
          
          {/* Linear Style Product Galleries with overlays */}
          <Projects currentLang={currentLang} />
          
          {/* Interactive Gemini AI Twin assistant */}
          <AIChatbot currentLang={currentLang} />
          
          {/* Simple Coordinates Contact form */}
          <Contact currentLang={currentLang} />
        </Suspense>
      </main>

      {/* High-fidelity Footer Coordinates */}
      <Footer
        currentLang={currentLang}
        onScrollTo={handleScrollTo}
      />
      <Suspense fallback={null}>
        <WeChatWidget />
      </Suspense>
    </div>
  );
}
