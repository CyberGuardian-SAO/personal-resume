import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { 
  Sparkles, Cpu, Code2, Database, PenTool,
  Layers, Shield, Wind, Globe, Server, GitBranch, Zap, Box, Network, Bot, Sliders, GitMerge, FileCode, Cloud, Search, ArrowUpRight, Briefcase
} from 'lucide-react';
import { Skill } from '../types';

interface SkillsProps {
  currentLang: 'zh' | 'en';
}

interface SphereTag {
  id: string;
  name: { zh: string; en: string };
  category: string;
  level: number;
  color?: string;
  x: number; // 3D x on unit sphere (-1 to 1)
  y: number; // 3D y on unit sphere (-1 to 1)
  z: number; // 3D z on unit sphere (-1 to 1)
  screenX: number; // calculated 2D projected x inside canvas
  screenY: number; // calculated 2D projected y inside canvas
  scale: number; // 3D depth scale value
  dispX: number; // dynamic interactive offset x (mouse scatter force)
  dispY: number; // dynamic interactive offset y (mouse scatter force)
}

export default function Skills({ currentLang }: SkillsProps) {

  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'AI / Data' | 'Tools & Design'>('All');
  const [selectedSkillId, setSelectedSkillId] = useState<string>('Flutter & uniapp (跨端开发)');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<SphereTag[]>([]);
  const mousePosRef = useRef({ x: -1000, y: -1000, isHovering: false });
  const lastInteractionRef = useRef<number>(Date.now());
  
  const categories = [
    { id: 'All', label: currentLang === 'zh' ? '全能技术' : 'All Domain' },
    { id: 'Frontend', label: currentLang === 'zh' ? '用户界面' : 'Frontend' },
    { id: 'Backend', label: currentLang === 'zh' ? '云端架构' : 'Cloud / Backend' },
    { id: 'AI / Data', label: currentLang === 'zh' ? '智能体 API' : 'AI / Data' },
    { id: 'Tools & Design', label: currentLang === 'zh' ? '工具与设计' : 'Tools / Design' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Code2 className="w-3.5 h-3.5" />;
      case 'Backend': return <Database className="w-3.5 h-3.5" />;
      case 'AI / Data': return <Cpu className="w-3.5 h-3.5" />;
      case 'Tools & Design': return <PenTool className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const t = {
    title: currentLang === 'zh' ? '技能图谱' : 'Skills & Expertise',
    subtitle: currentLang === 'zh' ? '探索核心技术栈与交付能力' : 'Explore core tech stacks and delivery capabilities.',
    instructions: currentLang === 'zh' ? '💡 提示：点击星云标签或右侧列表查看技能详情' : '💡 Tip: Click sphere tags or list items to view details.',
    competencyLabel: currentLang === 'zh' ? '掌握程度' : 'Proficiency'
  };

  // Pre-seed coordinates on a Fibonacci sphere for equal spacing
  useEffect(() => {
    const list = portfolioData.skills;
    const numTags = list.length;
    const tags: SphereTag[] = [];

    for (let i = 0; i < numTags; i++) {
      const skill = list[i];
      // Fibonacci sphere mapping logic
      const phi = Math.acos(1 - 2 * (i + 0.5) / numTags);
      const theta = Math.sqrt(numTags * Math.PI) * phi;

      tags.push({
        id: skill.name.zh,
        name: skill.name,
        category: skill.category,
        level: skill.level,
        color: skill.color,
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
        screenX: 0,
        screenY: 0,
        scale: 1,
        dispX: 0,
        dispY: 0
      });
    }
    tagsRef.current = tags;
  }, []);

  // Primary animation loop for 3D sphere rotation with dispersion physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let angleX = 0.003; // automatic continuous spin speeds
    let angleY = 0.003;

    const updateAndDraw = () => {
      const parentRect = containerRef.current?.getBoundingClientRect() || { width: 440, height: 440 };
      const side = Math.min(parentRect.width, 440);
      
      // Retina HD Screen DPI setup to prevent blurry graphics or pixel aliasing
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      if (canvas.width !== side * dpr || canvas.height !== side * dpr) {
        canvas.width = side * dpr;
        canvas.height = side * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${side}px`;
        canvas.style.height = `${side}px`;
      }

      ctx.clearRect(0, 0, side, side);

      const cx = side / 2;
      const cy = side / 2;
      const radius = side * 0.38; // radius of sphere inside frame
      const focalLength = side * 0.8;

      // Dyn adjust continuous turn momentum depending on the cursor floating offset
      if (mousePosRef.current.isHovering) {
        const dx = mousePosRef.current.x - cx;
        const dy = mousePosRef.current.y - cy;
        // The further from center, the faster it spins
        angleY = dx * 0.00004;
        angleX = -dy * 0.00004;
      } else {
        // Return to standard slow orbital rotation speed
        angleX += (0.002 - angleX) * 0.05;
        angleY += (0.002 - angleY) * 0.05;
      }

      // Pre-calculate sin/cos values for rotation matrix
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // 1. Rotate the nodes mathematically
      const activeTags = tagsRef.current;
      for (const tag of activeTags) {
        // Rotate around Y axis
        const x1 = tag.x * cosY - tag.z * sinY;
        const z1 = tag.z * cosY + tag.x * sinY;

        // Rotate around X axis
        const y2 = tag.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + tag.y * sinX;

        tag.x = x1;
        tag.y = y2;
        tag.z = z2;

        // Perspective scaling factor
        tag.scale = focalLength / (focalLength + z2 * radius);
        
        // Base 2D coordinate on screen
        const baseX = cx + tag.x * radius * tag.scale;
        const baseY = cy + tag.y * radius * tag.scale;

        // 2. ELECTROSTATIC DISPERSION FORCES ("鼠标移动就散开" )
        let targetDispX = 0;
        let targetDispY = 0;

        if (mousePosRef.current.isHovering) {
          const mDx = baseX - mousePosRef.current.x;
          const mDy = baseY - mousePosRef.current.y;
          const mouseDist = Math.sqrt(mDx * mDx + mDy * mDy);
          const activeRadius = 100; // range inside which nodes scatter

          if (mouseDist < activeRadius && mouseDist > 1) {
            // Strong push vector away from mouse
            const force = (activeRadius - mouseDist) / activeRadius;
            const pushIntensity = force * 60; // intensity of the scatter displacement
            targetDispX = (mDx / mouseDist) * pushIntensity;
            targetDispY = (mDy / mouseDist) * pushIntensity;
          }
        }

        // Apply smooth spring-like relaxation for high-end micro interaction feel
        tag.dispX += (targetDispX - tag.dispX) * 0.12;
        tag.dispY += (targetDispY - tag.dispY) * 0.12;

        tag.screenX = baseX + tag.dispX;
        tag.screenY = baseY + tag.dispY;
      }

      // 3. DRAW GLOWING CONSTELLATION WEB LINKS BETWEEN CLOSE NEIGHBORS IN 3D
      ctx.beginPath();
      for (let i = 0; i < activeTags.length; i++) {
        const u = activeTags[i];
        for (let j = i + 1; j < activeTags.length; j++) {
          const v = activeTags[j];

          // Compute 3D distance
          const dx = u.x - v.x;
          const dy = u.y - v.y;
          const dz = u.z - v.z;
          const distance3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // We draw extremely fine connector lines for nodes that are close to each other
          if (distance3D < 0.65) {
            const avgZ = (u.z + v.z) / 2;
            const linkAlpha = Math.max(0, (0.04 + (1 - distance3D) * 0.1) * (1 - avgZ));
            
            ctx.strokeStyle = `rgba(249, 115, 22, ${linkAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(u.screenX, u.screenY);
            ctx.lineTo(v.screenX, v.screenY);
          }
        }
      }
      ctx.stroke();

      // Sort tags from back to front (Painter's algorithm) so rear tags draw beneath front tags
      const sortedTags = [...activeTags].sort((a, b) => b.z - a.z);

      // 4. DRAW NODES AND TEXT LABELS
      for (const tag of sortedTags) {
        const isSelected = selectedSkillId === tag.id;
        const matchesCategory = activeCategory === 'All' || tag.category === activeCategory;

        // Compute opacity depending both on 3D depth and whether it fits current filter category
        let alpha = Math.max(0.18, (1.2 - tag.z) / 2);
        if (!matchesCategory) {
          alpha *= 0.15; // semi-transparent if filtered out
        }

        // Helper for colors
        const getHexRgba = (hex: string | undefined, a: number) => {
          if (!hex) hex = '#F97316';
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${a})`;
        };

        const themeColor = getHexRgba(tag.color, isSelected ? 1.0 : alpha);

        ctx.save();

        // High priority node glowing background particle
        ctx.beginPath();
        const dotRadius = isSelected ? 5.5 : 3.5 * tag.scale;
        ctx.arc(tag.screenX, tag.screenY, dotRadius, 0, Math.PI * 2);
        
        ctx.fillStyle = matchesCategory ? themeColor : `rgba(161, 161, 170, ${alpha * 0.5})`;
        if (isSelected) {
          ctx.shadowColor = getHexRgba(tag.color, 0.7);
          ctx.shadowBlur = 8;
        }
        ctx.fill();

        // Double ring for selected node
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(tag.screenX, tag.screenY, dotRadius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = getHexRgba(tag.color, 0.4);
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw Typography text beautifully
        const fontSize = Math.max(10, Math.round((isSelected ? 13 : 11) * tag.scale));
        ctx.font = `bold ${fontSize}px "Inter", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw text with a clean slight background frame for high contrast readability
        const textWidth = ctx.measureText(tag.name[currentLang]).width;
        ctx.fillStyle = isSelected 
          ? 'rgba(255, 255, 255, 0.95)' 
          : (currentLang === 'zh' ? 'rgba(250, 250, 250, 0.85)' : 'rgba(244, 244, 245, 0.85)');
          
        ctx.fillRect(tag.screenX - textWidth / 2 - 4, tag.screenY - fontSize / 2 - 14, textWidth + 8, fontSize + 4);
        ctx.strokeStyle = isSelected ? getHexRgba(tag.color, 0.25) : 'rgba(228, 228, 231, 0.45)';
        ctx.strokeRect(tag.screenX - textWidth / 2 - 4, tag.screenY - fontSize / 2 - 14, textWidth + 8, fontSize + 4);

        ctx.fillStyle = matchesCategory 
          ? (isSelected ? getHexRgba(tag.color, 1.0) : `rgba(24, 24, 27, ${Math.max(0.4, alpha)})`)
          : `rgba(161, 161, 170, ${alpha * 0.45})`;
          
        ctx.fillText(tag.name[currentLang], tag.screenX, tag.screenY - 12);
        ctx.restore();
      }

      animFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [activeCategory, selectedSkillId, currentLang]);

  // Handle click on canvas tags to select corresponding skill details
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    lastInteractionRef.current = Date.now();
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    let closestTag: SphereTag | null = null;
    let minDistance = 45; // Generous 45px active selection radius for optimal mobile & desktop target hit accuracy

    for (const tag of tagsRef.current) {
      // 1. Calculate distance to the physical particle dot
      const dx1 = tag.screenX - clickX;
      const dy1 = tag.screenY - clickY;
      const distDot = Math.sqrt(dx1 * dx1 + dy1 * dy1);

      // 2. Calculate distance to the center of the text label (offset vertically by -12px)
      const dx2 = tag.screenX - clickX;
      const dy2 = (tag.screenY - 12) - clickY;
      const distLabel = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      // Take the closest of either targets
      const dist = Math.min(distDot, distLabel);

      if (dist < minDistance) {
        minDistance = dist;
        closestTag = tag;
      }
    }

    if (closestTag) {
      setSelectedSkillId(closestTag.id);
    }
  };

  const handMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    lastInteractionRef.current = Date.now();
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true
    };
  };

  const handleMouseLeave = () => {
    mousePosRef.current = { x: -1000, y: -1000, isHovering: false };
  };

  // Dynamic list of active category skills, memoized to preserve reference stability
  const filteredSkills = useMemo(() => {
    return portfolioData.skills.filter(
      (skill) => activeCategory === 'All' || skill.category === activeCategory
    );
  }, [activeCategory]);

  // Automated cycle of highlighted skills when there is no user activity
  useEffect(() => {
    const interval = setInterval(() => {
      const idleTime = Date.now() - lastInteractionRef.current;
      // Switch randomly if user has been inactive for 5 seconds
      if (idleTime >= 5000 && filteredSkills.length > 1) {
        const currentIndex = filteredSkills.findIndex(s => s.name.zh === selectedSkillId);
        let nextIndex = currentIndex;
        while (nextIndex === currentIndex) {
          nextIndex = Math.floor(Math.random() * filteredSkills.length);
        }
        const nextSkill = filteredSkills[nextIndex];
        if (nextSkill) {
          setSelectedSkillId(nextSkill.name.zh);
        }
      }
    }, 4000); // Check and auto-switch every 4 seconds

    return () => clearInterval(interval);
  }, [filteredSkills, selectedSkillId]);

  return (
    <section id="skills" className="py-24 border-b border-white/20 select-none animate-fadeIn relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest mb-3"
          >
            <Cpu className="w-4 h-4" />
            <span>{currentLang === 'zh' ? '技能图谱' : 'Skills & Expertise'}</span>
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
          <p className="text-xs text-zinc-400 font-sans mt-2">
            {t.instructions}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                lastInteractionRef.current = Date.now();
              }}
              className={`clickable relative px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-300 focus:outline-none ${
                activeCategory === cat.id
                  ? 'text-white font-extrabold'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {getCategoryIcon(cat.id)}
                {cat.label}
              </span>
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-orange-500 rounded-full shadow-md shadow-orange-500/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Unified 3D Constellation & Active Skill Interactive Panel */}
        <div className="max-w-4xl mx-auto lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white/40 dark:bg-zinc-900/50 backdrop-blur-2xl border border-white/60 dark:border-zinc-800/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-4 md:p-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden"
          >
            {/* Ambient subtle light flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Canvas Area with Centered Conic HUD Lines */}
            <div ref={containerRef} className="w-full md:w-[55%] flex justify-center items-center relative z-10 py-1 md:py-2 shrink-0 min-h-[300px] md:min-h-[400px]">
              {/* Background HUD style circular dial rings concentric to current canvas */}
              <div className="absolute inset-4 md:inset-8 rounded-full border border-dashed border-zinc-200/50 pointer-events-none animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-12 md:inset-20 rounded-full border border-dashed border-zinc-200/30 pointer-events-none animate-[spin_60s_linear_infinite_reverse]" />
              <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-zinc-250/20 border-dashed pointer-events-none -translate-x-1/2" />
              <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-zinc-250/20 border-dashed pointer-events-none -translate-y-1/2" />

              <canvas
                ref={canvasRef}
                className="relative z-10 cursor-pointer block select-none"
                onClick={handleCanvasClick}
                onMouseMove={handMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            {/* Integrated Live Data Board */}
            <div className="w-full md:w-[45%] relative z-20 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white/60 dark:border-zinc-800/60 p-4 md:p-5 rounded-3xl shadow-lg self-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSkillId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Skill Badge and level percentage */}
                  {(() => {
                    const skill = portfolioData.skills.find(s => s.name.zh === selectedSkillId) || {
                      name: { zh: selectedSkillId, en: selectedSkillId },
                      level: 85,
                      category: 'Frontend' as const,
                      color: '#F97316',
                      description: { zh: '', en: '' }
                    };
                    return (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div 
                              className="w-9 h-9 border rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                              style={{ 
                                backgroundColor: skill.color ? `${skill.color}15` : '#FFF7ED',
                                borderColor: skill.color ? `${skill.color}30` : '#FFEDD5',
                                color: skill.color || '#F97316' 
                              }}
                            >
                              {getCategoryIcon(skill.category)}
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-sans font-extrabold text-sm md:text-base text-zinc-900 dark:text-zinc-100 truncate">
                                {skill.name[currentLang]}
                              </h3>
                              <span className="font-sans font-bold text-[10px] text-zinc-400 uppercase tracking-widest block mt-0.5">
                                {skill.category}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end shrink-0">
                            <span 
                              className="font-mono text-base font-extrabold"
                              style={{ color: skill.color || '#F97316' }}
                            >
                              {skill.level}%
                            </span>
                            <span className="font-sans font-semibold text-[9px] text-zinc-400 uppercase tracking-widest block mt-0.5">
                              {currentLang === 'zh' ? '熟练权重' : 'COMPETENCY'}
                            </span>
                          </div>
                        </div>

                        {/* Domain Dynamic Narrative */}
                        <div className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed bg-white/50 dark:bg-zinc-800/50 backdrop-blur-md p-3 rounded-xl border border-white/60 dark:border-zinc-700 shadow-sm">
                          💡 {skill.description ? skill.description[currentLang] : ''}
                        </div>

                        {/* Interactive competency progress tracker */}
                        <div className="space-y-1">
                          <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ 
                                background: skill.color ? `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)` : '#F97316'
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                          </div>
                        </div>

                        {/* Related Projects and Experiences */}
                        {(() => {
                          const relatedProjects = (((skill as Skill).relatedProjects) || []).map(pid => portfolioData.projects.find(p => p.id === pid)).filter(Boolean);
                          const relatedExperiences = (((skill as Skill).relatedExperiences) || []).map(eid => portfolioData.experiences.find(e => e.id === eid)).filter(Boolean);
                          
                          if (relatedProjects.length === 0 && relatedExperiences.length === 0) return null;
                          
                          return (
                            <div className="pt-2 flex flex-col gap-3 border-t border-zinc-100 mt-2">
                              {relatedProjects.length > 0 && (
                                <div>
                                  <span className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                                    <Code2 className="w-3 h-3" />
                                    {currentLang === 'zh' ? '相关项目' : 'RELATED PROJECTS'}
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {relatedProjects.map((p, i) => (
                                      <button
                                        key={i}
                                        onClick={() => window.dispatchEvent(new CustomEvent('open-project', { detail: p!.id }))}
                                        className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-50 dark:hover:bg-orange-500/10 hover:text-orange-600 dark:text-zinc-300 transition-colors border border-transparent hover:border-orange-200 dark:hover:border-orange-500/30 cursor-pointer flex items-center gap-1"
                                      >
                                        <Box className="w-3 h-3" />
                                        {p!.title[currentLang]}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {relatedExperiences.length > 0 && (
                                <div>
                                  <span className="font-sans font-bold text-[9px] text-zinc-400 uppercase tracking-widest block mb-1.5 flex items-center gap-1">
                                    <Briefcase className="w-3 h-3" />
                                    {currentLang === 'zh' ? '应用履历' : 'APPLIED IN'}
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {relatedExperiences.map((e, i) => (
                                      <button
                                        key={i}
                                        onClick={() => {
                                          const el = document.getElementById(e!.id);
                                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                          else document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-zinc-300 transition-colors border border-transparent hover:border-emerald-200 dark:hover:border-emerald-500/30 cursor-pointer flex items-center gap-1"
                                      >
                                        <Network className="w-3 h-3" />
                                        {e!.company[currentLang]}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
