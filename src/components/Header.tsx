import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, Terminal, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  currentLang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ currentLang, setLang, onScrollTo }: HeaderProps) {
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
          ? 'bg-white/80 backdrop-blur-md border-b border-orange-500/10 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onScrollTo('hero')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Terminal className="w-4.5 h-4.5" />
          </div>
          <span className={`font-sans font-extrabold text-xl tracking-tight transition-colors duration-300 flex items-center select-none w-24 sm:w-28 shrink-0 ${
            isScrolled ? 'text-zinc-950' : 'text-white drop-shadow-md'
          }`}>
            <span className="inline-block truncate">{displayText}</span>
            <span className="w-1 h-4 ml-1 bg-orange-500 animate-pulse rounded-full shrink-0" />
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`relative font-sans font-medium text-sm transition-colors duration-300 hover:text-orange-500 focus:outline-none py-1 group/item ${
                isScrolled ? 'text-gray-700' : 'text-white hover:text-orange-400 drop-shadow-sm'
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover/item:w-full group-hover/item:left-0" />
            </button>
          ))}
        </nav>

        {/* Global Controls */}
        <div className="flex items-center gap-3">
          {/* Dynamic PDF Export Link via Native Print */}
          <button
            onClick={() => window.print()}
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
              isScrolled
                ? 'border-orange-500/20 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
            title={currentLang === 'zh' ? '触发打印/另存为 PDF 简历' : 'Trigger Print / Save CV as PDF'}
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span>{currentLang === 'zh' ? '简历下载' : 'Resume Download'}</span>
          </button>

          {/* Language Switch */}
          <button
            onClick={() => setLang(currentLang === 'zh' ? 'en' : 'zh')}
            className={`clickable flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer-events-auto hover:bg-orange-550 focus:outline-none ${
              isScrolled
                ? 'border-orange-500/20 text-orange-600 hover:bg-orange-50'
                : 'border-white/20 text-white hover:bg-white/10 drop-shadow-md'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full border focus:outline-none transition-colors ${
              isScrolled
                ? 'border-orange-500/10 text-gray-800 hover:bg-orange-50'
                : 'border-white/10 text-white hover:bg-white/10'
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
            className="absolute top-full left-0 w-full bg-white border-b border-orange-500/10 shadow-lg md:hidden z-50 py-4 px-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollTo(item.id);
                }}
                className="w-full text-left py-2 border-b border-gray-100 font-sans font-semibold text-gray-700 hover:text-orange-500 hover:pl-2 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
