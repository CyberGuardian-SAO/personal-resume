import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, ChevronDown, ChevronUp, ArrowUpRight, Loader2 } from 'lucide-react';

interface LatestNewsProps {
  currentLang: 'zh' | 'en';
}

export default function LatestNews({ currentLang }: LatestNewsProps) {
  const newsList = portfolioData.latestNews || [];
  const [isExpanded, setIsExpanded] = useState(false);

  // Default only latest 5 records
  const displayedNews = isExpanded ? newsList : newsList.slice(0, 5);

  const t = {
    title: currentLang === 'zh' ? '最新动态' : 'Latest Updates',
    description: currentLang === 'zh' 
      ? '实时追踪技术开发、学术求索与生活点滴的多元步伐' 
      : 'Real-time updates on engineering, academics, and life.',
    completedLabel: currentLang === 'zh' ? '已完成' : 'Completed',
    inProgressLabel: currentLang === 'zh' ? '进行中' : 'In Progress',
    expand: currentLang === 'zh' ? '展开完整动态' : 'View Full Timeline',
    collapse: currentLang === 'zh' ? '收起' : 'Collapse',
    moreText: currentLang === 'zh' ? `+${newsList.length - 5} 条更早动态已归档` : `+${newsList.length - 5} archived updates`,
  };

  const completedCount = newsList.filter(item => item.status === 'completed').length;
  const inProgressCount = newsList.filter(item => item.status === 'in_progress').length;

  // Ultra-precise description parser to render specific substrings as clickable/underlined links
  const renderDescriptionWithLinks = (text: string, fallbackLink?: string) => {
    if (!text) return null;
    
    // Captures domains or github references
    const linkRegex = /(career-ai\.zangwei\.dev|educare\.zangwei\.dev|zangwei\.dev|GitHub)/gi;
    const parts = text.split(linkRegex);
    
    if (parts.length === 1) {
      return <span>{text}</span>;
    }

    return parts.map((part, index) => {
      const matchLower = part.toLowerCase();
      if (linkRegex.test(part)) {
        let destination = fallbackLink || "https://github.com";
        if (matchLower.includes("career-ai.zangwei.dev")) {
          destination = "https://career-ai.zangwei.dev";
        } else if (matchLower.includes("educare.zangwei.dev")) {
          destination = "https://educare.zangwei.dev";
        } else if (matchLower.includes("zangwei.dev")) {
          destination = "https://zangwei.dev";
        } else if (matchLower === "github" && fallbackLink) {
          destination = fallbackLink;
        }

        return (
          <a
            key={index}
            href={destination}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-orange-600 font-extrabold hover:text-orange-700 underline decoration-orange-500/50 hover:decoration-orange-700 transition-all px-0.5 font-sans"
            onClick={(e) => {
              // Ensure clicking the inline link works properly and doesn't get suppressed
              e.stopPropagation();
            }}
          >
            {part}
            <ArrowUpRight className="w-2.5 h-2.5 shrink-0 opacity-80" />
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="updates" className="py-24 border-b border-white/20 relative z-10 overflow-hidden select-text">
      {/* Premium ambient backdrop glow points mirroring Apple visionOS aesthetics */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-gradient-to-tr from-orange-400/10 to-yellow-300/15 rounded-full filter blur-3xl opacity-65 pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      {/* Structured to maximum-6xl with refined horizontal padding for balanced margins */}
      <div className="max-w-5xl md:max-w-6xl mx-auto px-6 sm:px-12 md:px-16 container relative z-10">
        
        {/* Compact Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="min-w-0 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest mb-3"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.title}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight whitespace-normal break-words leading-tight"
            >
              {t.description}
            </motion.h2>
          </div>

          {/* Micro Index Tracker Pill - Compact iOS widget style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3.5 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/80 dark:border-zinc-800/80 p-2.5 px-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] self-start md:self-auto select-none shrink-0"
          >
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">{t.completedLabel}</span>
              <span className="text-xs font-sans font-black text-emerald-600 flex items-center gap-1 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {completedCount}
              </span>
            </div>
            <div className="w-[1px] h-5 bg-zinc-200" />
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">{t.inProgressLabel}</span>
              <span className="text-xs font-sans font-black text-amber-500 flex items-center gap-1 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {inProgressCount}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Apple Style frosted Glassmorphism Board container - bg-white/20 for real glass translucency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-white/60 backdrop-blur-md sm:backdrop-blur-lg rounded-2xl p-3 sm:p-5 relative"
        >
          {/* Inner glass highlight border line */}
          <div className="absolute inset-0 rounded-2xl border border-white/70 pointer-events-none" />

          {/* Timeline Node Tree */}
          <div className="relative pl-1">
            {/* Highly compact stack - minimized space-y */}
            <div className="space-y-4 relative">
              <AnimatePresence initial={false} mode="popLayout">
                {displayedNews.map((item, idx) => {
                  const isCompleted = item.status === 'completed';
                  const isLatest = idx === 0;
                  const itemTitle = item.title[currentLang];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="relative pl-7 sm:pl-8 pb-1 last:pb-0 group"
                    >
                      {/* Timeline connection line - narrow & light */}
                      <div className="absolute left-2.5 top-3.5 bottom-0 w-[1px] bg-zinc-200/80 group-last:hidden" />

                      {/* Expanded Dynamic Status nodes reflecting active hardware radars */}
                      <div className="absolute left-0 top-1.5 z-10 flex items-center justify-center">
                        {isCompleted ? (
                          /* Completed Node: green circle with drawing checkmark */
                          <div 
                            className="w-5.5 h-5.5 rounded-full bg-emerald-50 group-hover:bg-emerald-500 border border-emerald-400 group-hover:border-emerald-500 text-emerald-600 group-hover:text-white shadow-[0_0_8px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative"
                            title={currentLang === 'zh' ? '已完成' : 'Completed'}
                          >
                            <svg className="w-3 h-3 stroke-current" viewBox="0 0 24 24" fill="none">
                              <motion.path
                                d="M4 12 L9 17 L20 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.8, 
                                  ease: "easeOut",
                                }}
                              />
                            </svg>
                            <span className="absolute inset-0 rounded-full bg-emerald-300/10 blur-[1px] animate-ping duration-[1800ms] opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity" />
                          </div>
                        ) : (
                          /* In Progress Node: amber circle with spinning loader outer ring and static center dot */
                          <div 
                            className="w-5.5 h-5.5 rounded-full bg-amber-500/10 border border-amber-400/90 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 relative shadow-[0_0_10px_rgba(245,158,11,0.25)]"
                            title={currentLang === 'zh' ? '进行中' : 'In Progress'}
                          >
                            <Loader2 className="w-3.5 h-3.5 text-amber-500 stroke-[3] animate-spin absolute" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          </div>
                        )}
                      </div>

                      {/* Card layout: Transparent Apple plate with tight layout, responsive spacing */}
                      <div className="relative overflow-hidden flex flex-col gap-1.5 bg-white/20 dark:bg-zinc-800/40 group-hover:bg-white/70 dark:group-hover:bg-zinc-800/80 border border-white/50 dark:border-zinc-700/50 hover:border-orange-500/15 dark:hover:border-orange-500/30 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:group-hover:shadow-none rounded-xl p-3 px-3.5 shadow-2xs group-hover:-translate-y-0.5 transition-all duration-300 ease-out">
                        
                        {/* Soft visual glow follow active on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/[0.005] to-orange-500/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Floating New Indicator Badge (top-right corner) */}
                        {isLatest && (
                          <span className="absolute top-2.5 right-2 sm:right-3 flex h-4 items-center gap-1 rounded-full bg-orange-500 shadow-[0_2px_8px_rgba(249,115,22,0.25)] px-1.5 text-[8px] font-black text-white uppercase tracking-wider select-none animate-pulse">
                            <span className="h-1 w-1 rounded-full bg-white" />
                            <span>NEW</span>
                          </span>
                        )}

                        {/* Top Line: Compact Date and Title Header */}
                        <div className="flex flex-wrap items-center gap-2 pr-10">
                          <span className="font-mono text-[8.5px] font-bold text-orange-600 dark:text-orange-400 bg-orange-100/40 dark:bg-orange-500/10 px-2 py-0.5 rounded-full select-none pointer-events-none">
                            {item.date}
                          </span>
                          <h3 className="font-sans font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 leading-tight">
                            {itemTitle}
                          </h3>
                        </div>

                        {/* Lower Line: Description - parsed for inline urls, wrapped beautifully & fully responsive, zero-clipping */}
                        <div className="font-sans font-medium text-xs text-zinc-500 leading-relaxed text-left break-all sm:break-normal select-text">
                          {renderDescriptionWithLinks(item.description[currentLang], item.link)}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Action expanding trigger */}
          {newsList.length > 5 && (
            <div className="mt-5 flex flex-col items-center justify-center border-t border-zinc-100/50 pt-4">
              {!isExpanded && (
                <p className="text-[9px] font-bold text-zinc-400 tracking-wider mb-2 uppercase select-none">
                  {t.moreText}
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.02, y: -0.5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 p-1.5 px-4 rounded-lg bg-zinc-950 text-white text-[11px] font-bold hover:bg-orange-500 hover:shadow-[0_4px_16px_rgba(249,115,22,0.2)] transition-all cursor-pointer relative overflow-hidden select-none outline-none"
              >
                <span>{isExpanded ? t.collapse : t.expand}</span>
                {isExpanded ? (
                  <ChevronUp className="w-3 h-3 shrink-0" />
                ) : (
                  <ChevronDown className="w-3 h-3 shrink-0" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
