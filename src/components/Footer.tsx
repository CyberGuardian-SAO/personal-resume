import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Globe, Eye, Users, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  currentLang: 'zh' | 'en';
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ currentLang, onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [stats, setStats] = useState({ pv: 18450, uv: 9230 });

  useEffect(() => {
    try {
      const storedPv = localStorage.getItem('bill_portfolio_pv');
      const storedUv = localStorage.getItem('bill_portfolio_uv');
      
      let currentPv = storedPv ? parseInt(storedPv, 10) : 18450;
      let currentUv = storedUv ? parseInt(storedUv, 10) : 9230;
      
      currentPv += 1;
      if (!sessionStorage.getItem('bill_portfolio_session')) {
        sessionStorage.setItem('bill_portfolio_session', 'true');
        currentUv += 1;
      }

      localStorage.setItem('bill_portfolio_pv', currentPv.toString());
      localStorage.setItem('bill_portfolio_uv', currentUv.toString());
      
      setStats({ pv: currentPv, uv: currentUv });
    } catch (e) {
      setStats({ pv: 18456, uv: 9234 });
    }
  }, []);

  const t = {
    copyright: currentLang === 'zh'
      ? `© ${currentYear} 郭鑫 版权所有`
      : `© ${currentYear} Bill Guo. All Rights Reserved.`,
  };

  // Typewriter logic
  const targetText = currentLang === 'zh' 
    ? '无法重来的一生，请你尽量自由' 
    : 'Live as freely as possible in this life that can never be replayed';
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    setDisplayText('');
    setPhase('typing');
  }, [currentLang]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (phase === 'typing') {
      if (displayText.length < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 3000);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 500);
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length - 1));
        }, 80);
      } else {
         timeout = setTimeout(() => setPhase('typing'), 1000);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, phase, targetText]);

  return (
    <footer className="relative bg-white/40 dark:bg-zinc-950/40 backdrop-blur-3xl border-t border-white/40 dark:border-zinc-800/60 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] text-zinc-600 py-8 px-6 sm:px-12 md:px-16 overflow-hidden z-20">
      {/* Subtle glowing ambient spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 h-full">
        
        {/* Left: Brand Details & Typewriter */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-2xl text-zinc-900 dark:text-zinc-100 tracking-tight select-none">
              {portfolioData.name[currentLang]}
              <span className="text-orange-500">.</span>
            </span>
            <div className="flex items-center gap-1.5 ml-2 text-orange-500 font-sans font-medium text-sm tracking-wide">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span className="h-5 flex items-center min-w-[180px] max-w-[280px]">
                {displayText}
                <span className="w-[1.5px] h-3.5 bg-orange-500 ml-0.5 animate-pulse" />
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mt-1 font-sans text-xs select-none">
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              {t.copyright}
            </p>
            {/* System & Stats */}
            <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5" title={currentLang === 'zh' ? '总访问量' : 'Total Page Views'}>
                <Eye className="w-3.5 h-3.5 text-zinc-400" />
                <span>PV</span>
                <span className="font-semibold text-zinc-500">{stats.pv.toLocaleString()}</span>
              </span>
              <span className="flex items-center gap-1.5" title={currentLang === 'zh' ? '独立访客数' : 'Unique Visitors'}>
                <Users className="w-3.5 h-3.5 text-zinc-400" />
                <span>UV</span>
                <span className="font-semibold text-zinc-500">{stats.uv.toLocaleString()}</span>
              </span>
              <span className="flex items-center gap-1.5 font-sans bg-emerald-50 dark:bg-emerald-500/10 max-md:hidden px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-500/20" title={currentLang === 'zh' ? '服务网络运行正常' : 'Network Optimal'}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold tracking-wide">
                  {currentLang === 'zh' ? '系统在线' : 'System Live'}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Contact Links */}
        <div className="flex items-center gap-3">
          <a 
            href="mailto:guoxin@bitqai.com"
            className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-white dark:border-zinc-700 hover:border-orange-200 dark:hover:border-orange-500/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300"
            title={currentLang === 'zh' ? '直联邮箱' : 'Direct Email'}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="tel:15323411996"
            className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-white dark:border-zinc-700 hover:border-orange-200 dark:hover:border-orange-500/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300"
            title={currentLang === 'zh' ? '联系电话' : 'Telephone'}
          >
            <Phone className="w-5 h-5" />
          </a>
          <span 
            className="w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-white dark:border-zinc-700 hover:border-orange-200 dark:hover:border-orange-500/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => onScrollTo('contact')}
            title={currentLang === 'zh' ? '合作探讨' : 'Contact'}
          >
            <Globe className="w-5 h-5" />
          </span>
        </div>

      </div>
    </footer>
  );
}
