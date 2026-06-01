import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, Terminal, Download, Moon, Sun } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  currentLang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  onScrollTo: (sectionId: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ currentLang, setLang, onScrollTo, theme, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const words = ['郭鑫', 'Bill Guo'];
    let timer: any;

    const handleType = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];

      if (!isDeleting) {
        setDisplayText(fullWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === fullWord) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1800); // pause on full word
          return;
        }
      } else {
        setDisplayText(fullWord.substring(0, displayText.length - 1));
        setTypingSpeed(80); // erasing is significantly faster

        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(400); // brief pause before next word starts typing
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    about: currentLang === 'zh' ? '关于我' : 'About',
    skills: currentLang === 'zh' ? '技能栈' : 'Skills',
    experience: currentLang === 'zh' ? '履历' : 'Experience',
    projects: currentLang === 'zh' ? '项目' : 'Projects',
    assistant: currentLang === 'zh' ? 'AI 助理' : 'AI Twin',
    contact: currentLang === 'zh' ? '联系我' : 'Contact',
  };

  const navItems = [
    { label: t.about, id: 'about' },
    { label: t.skills, id: 'skills' },
    { label: t.experience, id: 'experience' },
    { label: t.projects, id: 'projects' },
    { label: t.assistant, id: 'assistant' },
    { label: t.contact, id: 'contact' },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-orange-500/10 dark:border-white/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => onScrollTo('hero')}
            className="flex items-center gap-2.5 group focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-105 shrink-0">
              <Terminal className="w-4.5 h-4.5 animate-pulse" />
            </div>
            <span className={`font-sans font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 flex items-center justify-start select-none whitespace-nowrap overflow-hidden min-w-[120px] sm:min-w-[140px] text-left ${
              isScrolled ? 'text-zinc-800 dark:text-white' : 'text-white drop-shadow-md'
            }`}>
              {displayText}
              <span className="w-1 h-5 ml-1 bg-orange-500 animate-pulse rounded-full shrink-0 inline-block" />
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 shrink-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`relative font-sans font-bold text-sm sm:text-[15px] transition-colors duration-300 focus:outline-none py-1 group/item ${
                isScrolled ? 'text-zinc-700 dark:text-white hover:text-orange-500' : 'text-white hover:text-orange-200 drop-shadow-md'
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full group-hover/item:left-0" />
            </button>
          ))}
        </nav>

        {/* Global Controls */}
        <div className="flex items-center justify-end gap-3 flex-1">
          {/* Resume Link */}
          <button
            onClick={() => {
              window.open(currentLang === 'zh' ? '/Resume_CN.html' : '/Resume_EN.html', '_blank');
            }}
            className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none cursor-pointer hover:bg-white/10 ${
              isScrolled ? 'border-zinc-200 text-zinc-800 dark:border-white/20 dark:text-white dark:hover:bg-white/10' : 'border-white/30 text-white shadow-sm hover:bg-white/20 backdrop-blur-md drop-shadow-md'
            }`}
            title={currentLang === 'zh' ? '简历' : 'Resume'}
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span>{currentLang === 'zh' ? '简历' : 'Resume'}</span>
          </button>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            className={`clickable flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 pointer-events-auto focus:outline-none ${
              isScrolled
                ? 'border-zinc-200 text-zinc-800 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10'
                : 'border-white/30 text-white shadow-sm hover:bg-white/20 backdrop-blur-md drop-shadow-md'
            }`}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Language Switch */}
          <button
            onClick={() => setLang(currentLang === 'zh' ? 'en' : 'zh')}
            aria-label={currentLang === 'zh' ? 'Switch language to English' : '切换语言为中文'}
            className={`clickable flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 pointer-events-auto focus:outline-none ${
              isScrolled
                ? 'border-zinc-200 text-zinc-800 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10'
                : 'border-white/30 text-white shadow-sm hover:bg-white/20 backdrop-blur-md drop-shadow-md'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className={`md:hidden p-2 rounded-full border focus:outline-none transition-colors ${
              isScrolled
                ? 'border-zinc-200 text-zinc-800 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10'
                : 'border-white/30 text-white shadow-sm hover:bg-white/20 backdrop-blur-md drop-shadow-md'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-orange-500/10 dark:border-white/10 shadow-lg md:hidden z-50 py-4 px-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollTo(item.id);
                }}
                className="w-full text-left py-2 border-b border-gray-100 dark:border-zinc-800 font-sans font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:pl-2 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Resume Download Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.open(currentLang === 'zh' ? '/Resume_CN.html' : '/Resume_EN.html', '_blank');
              }}
              className="w-full flex items-center justify-center gap-2 mt-2 py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white font-sans font-bold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300 cursor-pointer pointer-events-auto z-[9999]"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>{currentLang === 'zh' ? '简历' : 'Resume'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
