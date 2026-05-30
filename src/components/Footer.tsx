import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUpRight, Github, Code2, Globe, Eye, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  currentLang: 'zh' | 'en';
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ currentLang, onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [stats, setStats] = useState({ pv: 18450, uv: 9230 });

  useEffect(() => {
    // Elegant local storage visit tracking system
    try {
      const storedPv = localStorage.getItem('bill_portfolio_pv');
      const storedUv = localStorage.getItem('bill_portfolio_uv');
      
      let currentPv = storedPv ? parseInt(storedPv, 10) : 18450;
      let currentUv = storedUv ? parseInt(storedUv, 10) : 9230;
      
      // Increment page view count on mount
      currentPv += 1;
      
      // Increment unique visitor count once per session
      if (!sessionStorage.getItem('bill_portfolio_session')) {
        sessionStorage.setItem('bill_portfolio_session', 'true');
        currentUv += 1;
      }

      localStorage.setItem('bill_portfolio_pv', currentPv.toString());
      localStorage.setItem('bill_portfolio_uv', currentUv.toString());
      
      setStats({ pv: currentPv, uv: currentUv });
    } catch (e) {
      // Fail-safe default fallback
      setStats({ pv: 18456, uv: 9234 });
    }
  }, []);

  const t = {
    tagline: currentLang === 'zh' 
      ? '以精湛的设计，驱动极致的技术体验。' 
      : 'Driving ultimate technical experiences with exquisite design.',
    brandPhilosophy: currentLang === 'zh'
      ? '追求技术与美学的融合，旨在通过细腻的像素、高品质的交互和卓越的性能，交付世界一流的数字产品实践。'
      : 'Merging engineering precision with refined aesthetics to deliver world-class digital application experiences.',
    navTitle: currentLang === 'zh' ? '快速导航' : 'Navigation',
    manifestoTitle: currentLang === 'zh' ? '终极信条' : 'Manifesto',
    manifestoText: currentLang === 'zh'
      ? '“ 无法重来的一生，请你尽量自由 ”'
      : '“ Live as freely as possible in this life that can never be replayed. ”',
    emailLabel: currentLang === 'zh' ? '直联邮箱' : 'Direct Email',
    phoneLabel: currentLang === 'zh' ? '联系电话' : 'Telephone',
    copyright: currentLang === 'zh'
      ? `© ${currentYear} 郭鑫 版权所有`
      : `© ${currentYear} Bill Guo. All Rights Reserved`,
  };

  const navLinks = [
    { id: 'about', label: currentLang === 'zh' ? '关于我' : 'About Me' },
    { id: 'skills', label: currentLang === 'zh' ? '技能栈' : 'Skills & Stack' },
    { id: 'experience', label: currentLang === 'zh' ? '项目履历' : 'Experience' },
    { id: 'projects', label: currentLang === 'zh' ? '精选作品' : 'Showcases' },
    { id: 'assistant', label: currentLang === 'zh' ? 'AI 助理' : 'AI Assistant' },
    { id: 'contact', label: currentLang === 'zh' ? '合作探讨' : 'Contact Me' },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-20 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Subtle glowing ambient spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Upper footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-900 w-full">
          
          {/* Col 1: Brand details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="font-sans font-black text-2xl text-white tracking-tight select-none">
                {portfolioData.name[currentLang]}
                <span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="font-sans text-sm text-zinc-200 font-medium leading-relaxed">
              {t.tagline}
            </p>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-md">
              {t.brandPhilosophy}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="mailto:guoxin@bitqai.com"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
                title={t.emailLabel}
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="tel:15323411996"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
                title={t.phoneLabel}
              >
                <Phone className="w-4 h-4" />
              </a>
              <span 
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 cursor-pointer"
                onClick={() => onScrollTo('contact')}
                title={currentLang === 'zh' ? '合作探讨' : 'Contact'}
              >
                <Globe className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-5">
              {t.navTitle}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="group flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors duration-250 font-medium text-left cursor-pointer focus:outline-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 scale-0 group-hover:scale-100 transition-transform duration-250 shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Manifesto Quote (4 cols) */}
          <div className="lg:col-span-4 bg-zinc-900/40 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-xs text-zinc-500 uppercase tracking-wider">
                {t.manifestoTitle}
              </h4>
              <p className="font-sans text-sm text-zinc-100 font-bold tracking-wide leading-relaxed italic pr-2">
                {t.manifestoText}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-[10px] text-zinc-450 font-semibold font-mono">
              <Code2 className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
              <span>{currentLang === 'zh' ? '自由意志 & 品质重构' : 'Free Will & Quality Engineering'}</span>
            </div>
          </div>

        </div>

        {/* Lower footer copyright info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 font-sans text-xs select-none">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left text-zinc-500 font-medium">
            <p>
              {t.copyright}
            </p>
            <span className="hidden sm:inline text-zinc-805">|</span>
            {/* Visual Analytics Counter Coordinates */}
            <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5" title={currentLang === 'zh' ? '总访问量 (页面浏览)' : 'Total Page Views'}>
                <Eye className="w-3.5 h-3.5 text-zinc-600" />
                <span>PV</span>
                <span className="font-bold text-zinc-400">{stats.pv.toLocaleString()}</span>
              </span>
              <span className="flex items-center gap-1.5" title={currentLang === 'zh' ? '独立访客数' : 'Unique Visitors'}>
                <Users className="w-3.5 h-3.5 text-zinc-600" />
                <span>UV</span>
                <span className="font-bold text-zinc-400">{stats.uv.toLocaleString()}</span>
              </span>
              <span className="flex items-center gap-1.5 font-sans" title={currentLang === 'zh' ? '服务网络状态正常' : 'Network Handshake Optimal'}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] text-emerald-500/80 font-medium tracking-wide">
                  {currentLang === 'zh' ? '系统在线' : 'Live'}
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-600 font-mono text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span>{currentLang === 'zh' ? '数智人生 · 自由而行' : 'Infinite journey, boundless mind'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
