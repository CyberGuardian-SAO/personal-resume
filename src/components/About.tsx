import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Trophy, Flame, Target, Star, Layers } from 'lucide-react';

interface AboutProps {
  currentLang: 'zh' | 'en';
}

export default function About({ currentLang }: AboutProps) {
  const bioText = portfolioData.bio[currentLang];
  const stats = portfolioData.stats;
  const bullets = portfolioData.aboutBullets[currentLang];
  const photos = portfolioData.photos || [];

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const monthNamesEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthEn = monthNamesEn[now.getMonth()];

  const editionStr = currentLang === 'zh'
    ? `Bill Guo (${year}年${month}月版)`
    : `Bill Guo (${monthEn} ${year} Edition)`;

  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos]);

  const t = {
    sectionTitle: currentLang === 'zh' ? '关于我' : 'About Me',
    sectionSubtitle: currentLang === 'zh' ? '探寻技术与生活中的美学交界' : 'Seeking the intersection of tech & life aesthetics',
    statsHeading: currentLang === 'zh' ? '' : '',
    bulletsHeading: currentLang === 'zh' ? '核心工程哲学' : 'CORE PHILOSOPHY',
  };

  // Assign distinct representative icons to bento statistics cards
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="w-5 h-5 text-orange-500" />;
      case 1: return <Flame className="w-5 h-5 text-orange-500" />;
      case 2: return <Star className="w-5 h-5 text-orange-500" />;
      case 3: return <Target className="w-5 h-5 text-orange-500" />;
      default: return <Layers className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-zinc-50 border-b border-orange-500/5 select-none">
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
            <Sparkles className="w-4 h-4" />
            <span>{t.sectionTitle}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-900 tracking-tight"
          >
            {t.sectionSubtitle}
          </motion.h2>
        </div>

        {/* Bento Grid Layout (Biography Story on Left, Combined Gallery & Core Philosophy on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography, Values, and Key Metrics (Col Span 7) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Main Biography Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-5 md:p-6 rounded-3xl border border-zinc-200/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-orange-600/70 tracking-widest uppercase mb-2 block">
                  {currentLang === 'zh' ? '个人简述' : 'BIOGRAPHY'}
                </span>
                <p className="font-sans text-xs md:text-sm text-zinc-700 leading-relaxed font-normal mb-3">
                  {bioText}
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-3.5 mt-1">
                <h4 className="font-sans font-bold text-[10px] md:text-xs text-zinc-900 mb-2 tracking-wider uppercase">
                  {t.bulletsHeading}
                </h4>
                <ul className="space-y-1.5">
                  {bullets.map((bullet, idx) => (
                    <li key={idx} className="font-sans text-xs text-zinc-650 leading-relaxed flex items-start gap-2">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Key Metrics Statistics Block (2x2 Grid) */}
            <div>
              <span className="text-[11px] font-semibold text-zinc-400 tracking-widest uppercase mb-1.5 block">
                {t.statsHeading}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * idx }}
                    whileHover={{ y: -2, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                    className="bg-white px-3 py-2 md:px-4 md:py-2.5 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between h-[76px] hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="p-1 bg-orange-50 rounded-md shrink-0">
                        {idx === 0 ? <Trophy className="w-3.5 h-3.5 text-orange-500" /> :
                         idx === 1 ? <Flame className="w-3.5 h-3.5 text-orange-500" /> :
                         idx === 2 ? <Star className="w-3.5 h-3.5 text-orange-500" /> :
                         <Target className="w-3.5 h-3.5 text-orange-500" />}
                      </div>
                      <span className="font-sans text-sm md:text-lg font-black text-orange-500 tracking-tight shrink-0">
                        {stat.value}
                      </span>
                    </div>
                    <div className="mt-1">
                      <p className="font-sans text-[8px] font-extrabold text-zinc-400 tracking-wider uppercase leading-none mb-0.5">
                        {currentLang === 'zh' ? '核心实力' : 'KEY VALUE'}
                      </p>
                      <p className="font-sans font-extrabold text-[9px] md:text-[10px] text-zinc-800 leading-tight truncate">
                        {stat.label[currentLang]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Combined Gallery & Philosophy Card (Col Span 5) */}
          <div className="lg:col-span-5 flex justify-center items-center lg:pl-4">
            <div className="relative w-full max-w-[380px] md:max-w-md">
              {/* Photo Box with aspect-[4/5] */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[4/5] w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl group border border-zinc-200"
              >
                {/* Slideshow Image Layer */}
                <div className="absolute inset-0 z-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={photoIndex}
                      src={photos[photoIndex]}
                      alt={`Guo Xin Photo ${photoIndex + 1}`}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.65 }}
                      className="w-full h-full object-cover transition-all duration-700 select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  {/* Elegant bottom darkening gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 pointer-events-none" />
                </div>

                {/* Top Indicator Accent */}
                <div className="absolute top-4 left-4 z-20 flex gap-1.5 items-center bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[10px] font-extrabold uppercase text-orange-200 font-sans tracking-widest">
                    {currentLang === 'zh' ? '个人剪影' : 'Personal Pics'}
                  </span>
                </div>

                {/* Bottom slideshow controls & index labels */}
                <div className="absolute bottom-5 right-5 z-20 flex flex-col items-end">
                  <div className="flex gap-1.5">
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setPhotoIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          photoIndex === index ? 'w-4 bg-orange-500' : 'w-1.5 bg-white/40'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Absolute Overlay: Core Philosophy Card (Overlaps the image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-white border border-zinc-200 max-w-[290px] p-6 rounded-2xl shadow-xl z-20 hidden md:block select-none"
              >
                {/* Decorative spotlight border effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />

                <span className="text-[9px] font-extrabold tracking-widest text-orange-600 uppercase block mb-2 font-mono">
                  {currentLang === 'zh' ? '核心工程哲学' : 'CORE PHILOSOPHY'}
                </span>
                <p className="font-sans font-medium text-xs leading-relaxed text-zinc-800 mb-4">
                  {currentLang === 'zh' 
                    ? "“先创造让用户惊艳的精美产品，再用绝对的技术能力去捍卫它的平稳落地。”"
                    : '"First forge exquisite products that fascinate web users; then secure standard stability with absolute tech."'}
                </p>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                  <span className="font-mono text-[9px] text-zinc-400">
                    {editionStr}
                  </span>
                  <span className="text-[10px] font-extrabold text-orange-500 uppercase tracking-widest font-sans">
                    {photoIndex === 0 
                      ? (currentLang === 'zh' ? '全栈研发' : 'Fullstack')
                      : photoIndex === 1
                      ? (currentLang === 'zh' ? '交互美学' : 'Aesthetics')
                      : (currentLang === 'zh' ? '智能架构' : 'AI Architect')
                    }
                  </span>
                </div>
              </motion.div>

              {/* Mobile-only responsive fallback philosophy block rendering cleanly under the card */}
              <div className="md:hidden mt-4 bg-white border border-zinc-200 p-5 rounded-2xl shadow-md w-full">
                <span className="text-[9px] font-extrabold tracking-widest text-orange-600 uppercase block mb-1 font-mono">
                  {currentLang === 'zh' ? '核心工程哲学' : 'CORE PHILOSOPHY'}
                </span>
                <p className="font-sans font-medium text-xs leading-relaxed text-zinc-800">
                  {currentLang === 'zh' 
                    ? "“先创造让用户惊艳的精美产品，再用绝对的技术能力去捍卫它的平稳落地。”"
                    : '"First forge exquisite products that fascinate web users; then secure standard stability with absolute tech."'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
