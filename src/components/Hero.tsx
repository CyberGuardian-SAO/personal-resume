import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, ChevronDown, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  currentLang: 'zh' | 'en';
  onScrollTo: (sectionId: string) => void;
}

function Typewriter({ text }: { text: string; key?: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    
    const delayTimer = setTimeout(() => {
      const timer = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(timer);
        }
      }, 100); // 100ms per character typing speed
      
      return () => clearInterval(timer);
    }, 1000); // 1s start delay to ensure fully mounted and visible

    return () => {
      clearTimeout(delayTimer);
    };
  }, [text]);

  return (
    <span className="font-sans text-sm md:text-base text-orange-400 font-semibold tracking-wide flex items-center gap-1">
      <span>{displayedText}</span>
      <span className="w-1.5 h-4 bg-orange-500 animate-custom-blink inline-block" />
    </span>
  );
}

export default function Hero({ currentLang, onScrollTo }: HeroProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nameText = portfolioData.name[currentLang];
  const titleText = portfolioData.title[currentLang];
  const subtitleText = portfolioData.subtitle[currentLang];

  const ctaText = currentLang === 'zh' ? '联系我' : 'Get in Touch';
  const exploreProjects = currentLang === 'zh' ? '探索项目' : 'View Projects';

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-black"
    >
      {!isMobile && (
        <video
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          src="https://static.alibabagroup.com/static/da78a56f-a7c3-499d-bf10-239569640ff5.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      {/* Floating Interface directly over the abstract app background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl mt-12">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.03, 1],
              boxShadow: [
                "0px 0px 0px rgba(249, 115, 22, 0)",
                "0px 0px 14px rgba(249, 115, 22, 0.3)",
                "0px 0px 0px rgba(249, 115, 22, 0)"
              ]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 },
              scale: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
              boxShadow: { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 hover:bg-orange-100 backdrop-blur-md rounded-full border border-orange-200 text-orange-600 font-sans text-xs font-bold mb-6 shadow-sm tracking-wider uppercase cursor-pointer transition-all duration-300"
            onClick={() => onScrollTo('assistant')}
          >
            <Bot className="w-4.5 h-4.5 text-orange-500 animate-bounce" />
            <span>{currentLang === 'zh' ? '点击与AI助理对话' : 'Ask Career AI'}</span>
          </motion.div>

          {/* Heading Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans font-extrabold text-5xl md:text-7xl text-white tracking-tight leading-[1.1] mb-4 text-shadow-md select-none"
          >
            {nameText}
          </motion.h1>

          {/* Core Title */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-xl md:text-3xl text-orange-500 font-semibold tracking-wide mb-6 text-shadow select-none"
          >
            {titleText}
          </motion.h2>

          {/* Subtitle Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base md:text-xl text-white/90 leading-relaxed mb-3 text-shadow-sm max-w-2xl select-none"
          >
            {subtitleText}
          </motion.p>

          {/* Slogan Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-8 flex items-center mb-10"
          >
            <Typewriter 
              key={currentLang}
              text={currentLang === 'zh' ? '无法重来的一生，请你尽量自由' : 'Live as freely as possible in this life that can never be replayed'}
            />
          </motion.div>

          {/* Navigation CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onScrollTo('contact')}
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 font-sans font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] flex items-center gap-2 text-sm md:text-base group"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onScrollTo('projects')}
              className="px-8 py-4 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/20 font-sans font-semibold text-white transition-all duration-300 active:scale-[0.98] text-sm md:text-base flex items-center gap-1.5"
            >
              <span>{exploreProjects}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Slide-down Scroll Tip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest cursor-pointer select-none"
        onClick={() => onScrollTo('about')}
      >
        <span>{currentLang === 'zh' ? '向下滚动' : 'SCROLL DOWN'}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown className="w-4 h-4 text-orange-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
