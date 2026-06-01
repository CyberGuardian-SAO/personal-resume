import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import * as Icons from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  currentLang: 'zh' | 'en';
}

export default function Projects({ currentLang }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'software' | 'hardware'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'screenshots'>('screenshots');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const t = {
    title: currentLang === 'zh' ? '代表性作品案例' : 'Project Showcases',
    subtitle: currentLang === 'zh' ? '深度打磨的技术积累与行业应用实践' : 'Crafted digital solutions balancing architecture & product design',
    all: currentLang === 'zh' ? '全部项目' : 'All Projects',
    ai: currentLang === 'zh' ? '智能体 AI' : 'Intelligence AI',
    software: currentLang === 'zh' ? '软件研发' : 'SaaS Engineering',
    hardware: currentLang === 'zh' ? '硬件与机器人' : 'Hardware & Robotics',
    learnMore: currentLang === 'zh' ? '查看技术细节' : 'Understand Details',
    featuresTitle: currentLang === 'zh' ? '核心技术指标与特色' : 'Key Specifications & Features',
    demoBtn: currentLang === 'zh' ? '试用' : 'Try Now',
    githubBtn: currentLang === 'zh' ? '浏览开放源码' : 'GitHub Repository',
    techStackTitle: currentLang === 'zh' ? '技术架构组合' : 'System Tech Stack',
    closeBtn: currentLang === 'zh' ? '关闭' : 'Close',
  };

  // Helper to dynamically read Lucide Icons with custom fallback mapping
  const getProjectIcon = (logoName?: string) => {
    if (!logoName) return Icons.FolderOpen;
    const mapping: Record<string, any> = {
      UserSearch: Icons.UserCheck || Icons.Search,
      HeartPulse: Icons.HeartPulse,
      GraduationCap: Icons.GraduationCap,
      Bot: Icons.Bot,
      Camera: Icons.Camera,
      Cpu: Icons.Cpu,
      Store: Icons.Store,
      Stethoscope: Icons.Stethoscope,
      Activity: Icons.Activity,
    };
    return mapping[logoName] || (Icons as any)[logoName] || Icons.FolderOpen;
  };

  // 4 & 5. Dynamically sort projects by publishDate descending (newest first)
  const sortedProjects = [...portfolioData.projects].sort((a, b) => {
    return b.publishDate.localeCompare(a.publishDate);
  });

  const filteredProjects = activeTab === 'all'
    ? sortedProjects
    : sortedProjects.filter((proj) => proj.category === activeTab);

  // Auto-switch tabs based on selected project's features
  useEffect(() => {
    if (selectedProject) {
      setActiveMediaTab(selectedProject.detailVideoUrl ? 'video' : 'screenshots');
      setCurrentImgIndex(0);
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleOpenProject = (e: CustomEvent) => {
      const projId = e.detail;
      const proj = portfolioData.projects.find(p => p.id === projId);
      if (proj) {
        setSelectedProject(proj);
        // Add a slight delay to allow modal to render before scrolling if needed
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    
    window.addEventListener('open-project', handleOpenProject as EventListener);
    return () => window.removeEventListener('open-project', handleOpenProject as EventListener);
  }, []);

  return (
    <section id="projects" className="py-24 border-b border-white/20 relative z-10">
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
            <Icons.FolderOpen className="w-4 h-4" />
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
        </div>

        {/* Categories Tab Switching */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          {([
            { id: 'all', label: t.all },
            { id: 'ai', label: t.ai },
            { id: 'software', label: t.software },
            { id: 'hardware', label: t.hardware },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`clickable relative px-5.5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 focus:outline-none ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <span className="relative z-10 flex items-center gap-1">
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabOutline"
                  className="absolute inset-0 bg-orange-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-white/60 dark:border-zinc-800/60 rounded-2xl overflow-hidden hover:border-white dark:hover:border-zinc-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                {/* Visual Image Block (Project Cover Frame) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image || project.imageUrl}
                    alt={project.title[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Interactive Option Overlay representing zoom */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-white text-zinc-900 hover:bg-orange-500 hover:text-white rounded-full font-sans text-[10px] font-bold shadow-lg flex items-center gap-1.5 transition-all duration-300 focus:outline-none translate-y-3 group-hover:translate-y-0"
                    >
                      <Icons.Eye className="w-3.5 h-3.5" />
                      <span>{currentLang === 'zh' ? '查看演示与详情' : 'View Demo & Media'}</span>
                    </button>
                  </div>
                  {/* Category Pill Tag floating inside top right */}
                  <span className="absolute top-3 right-3 text-[8.5px] uppercase font-extrabold tracking-widest px-2 py-0.5 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-sm text-zinc-700 dark:text-zinc-300">
                    {project.category}
                  </span>
                </div>

                {/* Body details */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Header meta: Publish Date & Custom dynamic Logo */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1 text-zinc-400 font-mono text-xs font-semibold">
                        <Icons.Calendar className="w-3.5 h-3.5 text-orange-500" />
                        <span>{project.publishDate}</span>
                      </div>
                      {project.logo && (
                        <div className="w-6.5 h-6.5 rounded-lg bg-orange-50 flex items-center justify-center border border-orange-100/50">
                          {(() => {
                            const IconComponent = getProjectIcon(project.logo);
                            return <IconComponent className="w-3 h-3 text-orange-500" />;
                          })()}
                        </div>
                      )}
                    </div>

                    <h3 className="font-sans font-extrabold text-[14.5px] text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 transition-colors leading-snug mb-1.5 line-clamp-1">
                      {project.title[currentLang]}
                    </h3>
                    <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal mb-3.5 line-clamp-2 min-h-[36px]">
                      {project.description[currentLang]}
                    </p>
                  </div>

                  {/* Dynamic Tags list representation under card bottom */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-zinc-100/80 dark:border-zinc-800/80 mt-auto">
                    {project.tags[currentLang].slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 uppercase px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags[currentLang].length > 3 && (
                      <span className="text-[9px] font-extrabold text-orange-500 bg-orange-50 px-2 py-0.5 rounded">
                        +{project.tags[currentLang].length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full-Screen Detail Overlay / Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-zinc-950/40 dark:bg-zinc-950/70 backdrop-blur-sm">
              {/* Mask overlay click back trigger */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-zinc-950/60 dark:bg-black/60"
              />

              {/* Main detail panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className="relative w-full max-w-5xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/60 dark:border-zinc-800/60 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[92vh] md:max-h-[82vh]"
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-orange-500 hover:text-white rounded-full text-white z-30 transition-all duration-300 outline-none"
                >
                  <Icons.X className="w-4 h-4" />
                </button>

                {/* Left Side: Dynamic Showcase (Video Player or Screenshot Slider) */}
                <div className="w-full md:w-1/2 relative bg-zinc-900 flex items-center justify-center min-h-[260px] md:min-h-0 self-stretch overflow-hidden">
                  
                  {/* Video/Image Switching Headers */}
                  {(selectedProject.detailVideoUrl || (selectedProject.detailImages && selectedProject.detailImages.length > 0)) && (
                    <div className="absolute top-4 left-4 z-20 flex gap-1 p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                      {selectedProject.detailVideoUrl && (
                        <button
                          onClick={() => {
                            setActiveMediaTab('video');
                            setCurrentImgIndex(0);
                          }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                            activeMediaTab === 'video'
                              ? 'bg-orange-500 text-white shadow-md'
                              : 'text-zinc-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {currentLang === 'zh' ? '演示视频' : 'Demo Video'}
                        </button>
                      )}
                      {selectedProject.detailImages && selectedProject.detailImages.length > 0 && (
                        <button
                          onClick={() => {
                            setActiveMediaTab('screenshots');
                            setCurrentImgIndex(0);
                          }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                            activeMediaTab === 'screenshots'
                              ? 'bg-orange-500 text-white shadow-md'
                              : 'text-zinc-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {currentLang === 'zh' ? '产品截图' : 'Screenshots'}
                        </button>
                      )}
                    </div>
                  )}

                  {/* Render Area */}
                  {activeMediaTab === 'video' && selectedProject.detailVideoUrl ? (
                    <div className="w-full h-full flex items-center justify-center bg-black relative">
                      <video
                        src={selectedProject.detailVideoUrl}
                        controls
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-contain max-h-full"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 overflow-hidden">
                      {(() => {
                        const images = selectedProject.detailImages && selectedProject.detailImages.length > 0
                          ? selectedProject.detailImages
                          : [selectedProject.image || selectedProject.imageUrl];
                        
                        return (
                          <>
                            <AnimatePresence mode="wait">
                              <div 
                                className="w-full h-full relative cursor-pointer group"
                                onClick={() => setZoomedImage(images[currentImgIndex])}
                              >
                                <motion.img
                                  key={currentImgIndex}
                                  src={images[currentImgIndex]}
                                  alt={`${selectedProject.title[currentLang]} item ${currentImgIndex}`}
                                  initial={{ opacity: 0, scale: 0.98 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="w-full h-full object-contain max-h-full transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 bg-black/60 text-white backdrop-blur-md p-3 rounded-full">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </AnimatePresence>

                            {/* Carousel controls click */}
                            {images.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                                  }}
                                  className="absolute left-3 p-2 bg-black/40 hover:bg-orange-500 text-white rounded-full transition-all backdrop-blur-sm z-10 shadow"
                                >
                                  <Icons.ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                                  }}
                                  className="absolute right-3 p-2 bg-black/40 hover:bg-orange-500 text-white rounded-full transition-all backdrop-blur-sm z-10 shadow"
                                >
                                  <Icons.ChevronRight className="w-4 h-4" />
                                </button>
                              </>
                            )}

                            {/* Indicator Dots */}
                            {images.length > 1 && (
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                                {images.map((_, i) => (
                                  <button
                                    key={i}
                                    onClick={() => setCurrentImgIndex(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                                      currentImgIndex === i ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )}

                  {/* Float tag denoting overall category */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-2.5 py-1 bg-orange-500 text-white text-[9px] uppercase font-extrabold tracking-widest rounded-md">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Right Side: Descriptions and Technical Metrics */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-full border-l border-zinc-100 dark:border-zinc-800">
                  <div>
                    {/* Date badge */}
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <Icons.Calendar className="w-4 h-4 text-orange-500" />
                      <span className="font-mono text-xs text-zinc-400 font-bold">{selectedProject.publishDate}</span>
                    </div>

                    <h3 className="font-sans font-extrabold text-xl md:text-2xl text-zinc-900 dark:text-zinc-100 leading-tight mb-4">
                      {selectedProject.title[currentLang]}
                    </h3>
                    
                    <p className="font-sans text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 font-normal mb-6">
                      {selectedProject.longDescription[currentLang]}
                    </p>

                    {/* Call to Actions - trialUrl or contact discussions */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                      {selectedProject.trialUrl ? (
                        <a
                          href={selectedProject.trialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full font-sans text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/10"
                        >
                          <span>{t.demoBtn}</span>
                          <Icons.ArrowUpRight className="w-4 h-4 animate-pulse" />
                        </a>
                      ) : (
                        <a
                          href="#contact"
                          onClick={() => {
                            setSelectedProject(null);
                            const contactSec = document.getElementById('contact');
                            if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1 text-center py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-650 rounded-full font-sans text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5"
                        >
                          <span>{currentLang === 'zh' ? '暂无线上系统' : 'No Online Trial'}</span>
                        </a>
                      )}
                      
                      <a
                        href="#contact"
                        onClick={() => {
                          setSelectedProject(null);
                          const chatArea = document.getElementById('assistant');
                          if (chatArea) chatArea.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-5 py-3 border border-zinc-200 dark:border-zinc-700 hover:border-orange-500/20 text-zinc-700 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 rounded-full font-sans text-xs font-bold transition-all duration-300 flex items-center gap-1.5"
                      >
                        <Icons.Github className="w-4 h-4" />
                        <span>{currentLang === 'zh' ? '探讨合作' : 'Discuss'}</span>
                      </a>
                    </div>

                    {/* Features checklist */}
                    <div className="mb-8">
                      <h4 className="font-sans font-bold text-xs text-zinc-800 dark:text-zinc-200 tracking-wider uppercase mb-3.5">
                        {t.featuresTitle}
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.keyFeatures[currentLang].map((feat, index) => (
                          <li
                            key={index}
                            className="font-sans text-xs font-semibold text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-orange-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical architecture badges */}
                    <div className="mb-8">
                      <h4 className="font-sans font-bold text-xs text-zinc-800 dark:text-zinc-200 tracking-wider uppercase mb-3">
                        {t.techStackTitle}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags[currentLang].map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-[10px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-150 dark:bg-zinc-800 rounded px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Zoomed Image Overlay */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={zoomedImage}
                alt="Zoomed details"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
