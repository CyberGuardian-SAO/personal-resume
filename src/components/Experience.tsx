import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Calendar, Briefcase, GraduationCap, ChevronDown, Trophy } from 'lucide-react';

interface ExperienceProps {
  currentLang: 'zh' | 'en';
}

export default function Experience({ currentLang }: ExperienceProps) {
  const experiences = portfolioData.experiences;
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showDiverse, setShowDiverse] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const renderWithHighlights = (text: string) => {
    if (!text) return "";
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const innerText = part.slice(2, -2);
        return (
          <strong
            key={index}
            className="inline font-extrabold text-orange-600 bg-orange-50 px-1 py-0.5 rounded border border-orange-100/60 mx-0.5 shadow-2xs"
          >
            {innerText}
          </strong>
        );
      }
      return part;
    });
  };

  // Dynamically calculate hidden experiences count and their active years range
  const remainingExperiences = experiences.slice(3);
  const remainingCount = remainingExperiences.length;
  let yearsRange = '';
  if (remainingCount > 0) {
    const years: number[] = [];
    remainingExperiences.forEach(exp => {
      const matches = exp.period.match(/\b\d{4}\b/g);
      if (matches) {
        matches.forEach(y => years.push(parseInt(y, 10)));
      }
    });
    if (years.length > 0) {
      const minYear = Math.min(...years);
      const maxYear = Math.max(...years);
      yearsRange = `${minYear} - ${maxYear}`;
    }
  }

  const t = {
    title: currentLang === 'zh' ? '职业生涯履历' : 'Technical Chronicle',
    subtitle: currentLang === 'zh' ? '在海量业务淬炼中锤炼的成长图景' : 'A timeline of growth refined through large scale business demands',
    educationHeader: currentLang === 'zh' ? '教育及通用学术底座' : 'Education & Foundations',
    degree: currentLang === 'zh' ? '全日制本科 · 信息化技术与管理' : 'Full-time Bachelor\'s in Information Tech & Management',
    college: currentLang === 'zh' ? '中南林业科技大学 (国内一流大学建设高校)' : 'Central South University of Forestry and Tech (CSUFT)',
    collegePeriod: "2016.09 - 2020.06",
    languageCapability: currentLang === 'zh' ? '语言能力 (CET-6)' : 'Language Capability (CET-6)',
    languageLevel: currentLang === 'zh' ? '具有境外旅居跨国协作沟通经验。英文技术文档阅读与学习能力出众。' : 'Overseas living/collaboration experience. Superb English technical reading and learning proficiency.',
  };

  const clickHint = currentLang === 'zh'
    ? '提示：点击下方任一高亮履历卡片，即可展开/折叠详细的业绩成就与技术栈'
    : 'Tip: Click any credential card below to expand/collapse detailed achievements & tech stack';

  return (
    <section id="experience" className="py-24 border-b border-white/20 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest mb-3"
          >
            <Briefcase className="w-4 h-4" />
            <span>{t.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight"
          >
            {t.subtitle}
          </motion.h2>

          {/* Interactive clicking hint reminder banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex items-center gap-2 text-xs md:text-sm text-zinc-550 dark:text-zinc-400 bg-orange-50/40 dark:bg-orange-500/10 border border-orange-500/10 dark:border-orange-500/20 rounded-2xl px-4 py-3 max-w-fit shadow-xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-550"></span>
            </span>
            <span className="font-sans font-medium text-zinc-600">{clickHint}</span>
          </motion.div>
        </div>

        {/* Timeline body */}
        <div className="relative border-l-2 border-orange-200/40 ml-4 md:ml-6 space-y-8 pb-4">
          {experiences.slice(0, 3).map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                id={exp.id}
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline Indicator bullet */}
                <div className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-white border-4 transition-all duration-300 ${isExpanded ? 'border-orange-500 scale-110' : 'border-orange-450 group-hover:bg-orange-500 group-hover:scale-110'}`} />

                {/* Box frame wrapper */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={`bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none relative overflow-hidden ${
                    isExpanded 
                      ? 'border-white/80 dark:border-zinc-700 shadow-lg ring-1 ring-orange-400/20 bg-gradient-to-br from-white/80 to-white/40 dark:from-zinc-800 dark:to-zinc-900' 
                      : 'border-white/50 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:border-white/80 dark:hover:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-800'
                  }`}
                >
                  <div className="flex flex-row items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-x-2 gap-y-1">
                        <h3 className="font-sans font-extrabold text-sm md:text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                          {exp.role[currentLang]}
                        </h3>
                        <span className="hidden md:inline text-zinc-300 dark:text-zinc-600 text-xs font-light">•</span>
                        <p className="font-sans font-bold text-xs md:text-sm text-orange-500 font-semibold leading-snug">
                          {exp.company[currentLang]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-zinc-400 tracking-wider bg-zinc-50/80 dark:bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-100 dark:border-zinc-700 select-none">
                        <Calendar className="w-3 h-3 text-zinc-400" />
                        <span>{exp.period.replace('Present', currentLang === 'zh' ? '至今' : 'Present')}</span>
                      </div>
                      
                      {/* Interactive circular indicator containing Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
                          isExpanded 
                            ? 'bg-orange-500 border-orange-500 text-white' 
                            : 'bg-zinc-50 dark:bg-zinc-800 border-zinc-150 dark:border-zinc-700 text-zinc-400'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Animated details block when expanded */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                          {/* Achievements block */}
                          <ul className="space-y-2 mb-4">
                            {exp.description[currentLang].map((desc, i) => (
                              <li key={i} className="font-sans text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed flex items-start gap-2">
                                <span className="text-orange-400 font-bold text-xs mt-0.5 select-none">•</span>
                                <span>{renderWithHighlights(desc)}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tags representing core technologies utilized */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="font-sans font-semibold text-[10px] md:text-xs text-orange-655 bg-orange-50/50 border border-orange-550/10 rounded-full px-2.5 py-0.5"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          {/* Toggle control for earlier experiences */}
          <motion.div
            layout
            className="relative pl-8 md:pl-10"
          >
            {/* Dashed bullet line indicator */}
            <div className="absolute -left-[11px] top-3.5 w-5 h-5 rounded-full bg-white border-4 border-dashed border-zinc-300 hover:border-orange-400 transition-all duration-300" />
            
            <button
              onClick={() => setShowAllExperiences(!showAllExperiences)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/60 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/80 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-700 text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-white transition-all duration-300 shadow-sm cursor-pointer select-none"
            >
              <span>
                {showAllExperiences 
                  ? (currentLang === 'zh' ? '收起早期履历' : 'Hide older career chapters') 
                  : (currentLang === 'zh' 
                      ? `展开更早的 ${remainingCount} 段职业履历 ${yearsRange ? `(${yearsRange})` : ''}` 
                      : `Explore ${remainingCount} older career chapters ${yearsRange ? `(${yearsRange})` : ''}`)
                }
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-350 ${showAllExperiences ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>
 
          {/* Hidden Experiences */}
          <AnimatePresence initial={false}>
            {showAllExperiences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto'
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-8 mt-8 overflow-visible"
              >
                {experiences.slice(3).map((exp, idx) => {
                  const isExpanded = expandedId === exp.id;
                  return (
                    <motion.div
                      id={exp.id}
                      key={exp.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative pl-8 md:pl-10 group"
                    >
                      {/* Timeline Indicator bullet */}
                      <div className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-white border-4 transition-all duration-300 ${isExpanded ? 'border-orange-500 scale-110' : 'border-orange-450 group-hover:bg-orange-500 group-hover:scale-110'}`} />

                      {/* Box frame wrapper */}
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className={`bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none relative overflow-hidden ${
                          isExpanded 
                            ? 'border-white/80 dark:border-zinc-700 shadow-lg ring-1 ring-orange-400/20 bg-gradient-to-br from-white/80 to-white/40 dark:from-zinc-800 dark:to-zinc-900' 
                            : 'border-white/50 dark:border-zinc-800 shadow-sm hover:shadow-lg hover:border-white/80 dark:hover:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-800'
                        }`}
                      >
                        <div className="flex flex-row items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col md:flex-row md:items-center gap-x-2 gap-y-1">
                              <h3 className="font-sans font-extrabold text-sm md:text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                                {exp.role[currentLang]}
                              </h3>
                              <span className="hidden md:inline text-zinc-300 dark:text-zinc-600 text-xs font-light">•</span>
                              <p className="font-sans font-bold text-xs md:text-sm text-orange-500 font-semibold leading-snug">
                                {exp.company[currentLang]}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-zinc-400 tracking-wider bg-zinc-50/80 px-2.5 py-1 rounded-full border border-zinc-100 select-none">
                              <Calendar className="w-3 h-3 text-zinc-400" />
                              <span>{exp.period.replace('Present', currentLang === 'zh' ? '至今' : 'Present')}</span>
                            </div>
                            
                            {/* Interactive circular indicator containing Chevron */}
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
                                isExpanded 
                                  ? 'bg-orange-500 border-orange-500 text-white' 
                                  : 'bg-zinc-50 border-zinc-150 text-zinc-400'
                              }`}
                            >
                              <ChevronDown className="w-3.5 h-3.5" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Animated details block when expanded */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              key="details"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                {/* Achievements block */}
                                <ul className="space-y-2 mb-4">
                                  {exp.description[currentLang].map((desc, i) => (
                                    <li key={i} className="font-sans text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed flex items-start gap-2">
                                      <span className="text-orange-400 font-bold text-xs mt-0.5 select-none">•</span>
                                      <span>{renderWithHighlights(desc)}</span>
                                    </li>
                                  ))}
                                </ul>

                                {/* Tags representing core technologies utilized */}
                                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                  {exp.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="font-sans font-semibold text-[10px] md:text-xs text-orange-655 bg-orange-50/50 border border-orange-550/10 rounded-full px-2.5 py-0.5"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

            {/* Education entry as completion mark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-10 group"
          >
            <div className="absolute -left-[11px] top-4.5 w-5 h-5 rounded-full bg-white border-4 border-orange-400/50 group-hover:border-orange-500 transition-all duration-300" />
            
            <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/60 dark:border-zinc-800/60 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-sans font-bold text-xs text-orange-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>{t.educationHeader}</span>
                  </h4>
                  <p className="font-sans font-extrabold text-base text-zinc-800 dark:text-zinc-100">
                    {t.degree}
                  </p>
                  <p className="font-sans font-medium text-sm text-zinc-500 dark:text-zinc-400 mt-1 mb-4">
                    {t.college}
                  </p>
                  <div className="inline-block mt-1 p-3 bg-orange-50/50 dark:bg-orange-500/10 rounded-xl border border-orange-100/50 dark:border-orange-500/20">
                    <p className="font-sans font-bold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      {t.languageCapability}
                    </p>
                    <p className="font-sans text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed max-w-xl">
                      {t.languageLevel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider bg-zinc-100/40 dark:bg-zinc-800/40 px-3 py-1.5 rounded-full border border-zinc-100 dark:border-zinc-800 self-start md:self-auto select-none">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                  <span>{t.collegePeriod}</span>
                </div>
              </div>
            </div>
            {/* Awards section */}
            <div className="mt-8">
              <details className="group bg-white/40 dark:bg-zinc-900/40 backdrop-blur-lg border border-white/60 dark:border-zinc-800/60 rounded-3xl p-6 shadow-md hover:border-white dark:hover:border-zinc-700 transition-all duration-300">
                <summary className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100 cursor-pointer flex items-center justify-between outline-none">
                  <span className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-orange-100 dark:bg-orange-500/20 rounded-lg">
                      <Trophy className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    {currentLang === 'zh' ? '荣誉与奖项' : 'Honors & Awards'}
                  </span>
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 transition-colors">
                    <ChevronDown className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-open:rotate-180 transition-transform duration-300" />
                  </div>
                </summary>
                <div className="mt-6 space-y-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  {portfolioData.awards?.map((award, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={idx} 
                      className="group/item flex justify-between items-start text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-sans p-3 rounded-xl hover:bg-white/70 dark:hover:bg-zinc-800 hover:shadow-sm border border-transparent hover:border-white/60 dark:hover:border-zinc-700 transition-all"
                    >
                      <span className="flex-1 pr-6 leading-relaxed">{award.title[currentLang]}</span>
                      <span className="font-mono text-zinc-400 dark:text-zinc-500 group-hover/item:text-orange-500 text-xs mt-1 shrink-0 bg-zinc-100 dark:bg-zinc-800 group-hover/item:bg-orange-50 dark:group-hover/item:bg-orange-500/20 px-2 py-0.5 rounded-md transition-colors">{award.year}</span>
                    </motion.div>
                  ))}
                </div>
              </details>
            </div>
          </motion.div>
        </div>

        {/* Diverse Experience Entrance */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-2xl text-center">
            {!showDiverse ? (
              <button
                onClick={() => setShowDiverse(true)}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/60 dark:border-zinc-700/60 bg-white/50 dark:bg-zinc-800/80 backdrop-blur text-xs md:text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-white/80 dark:hover:bg-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="font-sans font-medium">
                  {currentLang === 'zh' ? '期待探索更多维度的我？点击查看斜杠经历（导游策划/民宿/户外向导/急救持证）' : 'Curious about my diverse chapters? Click to explore life beyond tech (Tour guide, Homestay manager, First Aider)'}
                </span>
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-5 md:p-6 rounded-2xl border border-white/60 dark:border-zinc-800/60 shadow-lg text-left"
              >
                <div className="flex items-center justify-between border-b border-zinc-150 dark:border-zinc-800 pb-3 mb-4">
                  <h4 className="font-sans font-extrabold text-sm md:text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <span className="text-orange-500">✦</span>
                    {currentLang === 'zh' ? '跨界足迹 & 斜杠经历' : 'Multiverse & Off-Track Journeys'}
                  </h4>
                  <button
                    onClick={() => setShowDiverse(false)}
                    className="text-xs font-bold text-zinc-400 dark:text-zinc-500 hover:text-orange-500 dark:hover:text-orange-400 transition-colors uppercase cursor-pointer"
                  >
                    {currentLang === 'zh' ? '收起' : 'Collapse'}
                  </button>
                </div>

                <div className="space-y-4">
                  {portfolioData.diverseExperiences?.map((divExp) => {
                    const periodStr = divExp.period.replace('Present', currentLang === 'zh' ? '至今' : 'Present');
                    return (
                      <div key={divExp.id} className="group p-4 sm:p-5 bg-white/40 dark:bg-zinc-800/40 rounded-xl transition-all duration-300 border border-zinc-200/80 dark:border-zinc-700/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:bg-white/80 dark:hover:bg-zinc-700/80 hover:border-orange-200 dark:hover:border-orange-500/30 relative overflow-hidden">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5 relative z-10">
                          <span className="font-sans font-extrabold text-xs md:text-sm text-zinc-900 dark:text-zinc-200 group-hover:text-orange-600 transition-colors">
                            {divExp.title[currentLang]}
                          </span>
                          <span className="font-mono text-[10px] md:text-xs font-semibold text-zinc-400 dark:text-zinc-500 bg-zinc-100/50 dark:bg-zinc-800/80 px-2.5 py-0.5 rounded-full border border-zinc-100 dark:border-zinc-700/50 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 group-hover:border-orange-100 dark:group-hover:border-orange-500/20 group-hover:text-orange-500 transition-colors">
                            {periodStr}
                          </span>
                        </div>
                        <p className="font-sans text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                          {renderWithHighlights(divExp.description[currentLang])}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
