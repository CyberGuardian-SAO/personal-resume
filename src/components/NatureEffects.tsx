import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RippleDrop {
  id: number;
  x: number;
  y: number;
  scale: number;
  colorOuter: string;
  colorInner: string;
}

const rippleColors = [
  // Blues & Cyans
  { outer: 'border-blue-500/60 dark:border-blue-400', inner: 'border-blue-400/50 dark:border-blue-300' },
  { outer: 'border-blue-600/60 dark:border-blue-300', inner: 'border-blue-500/50 dark:border-blue-200' },
  { outer: 'border-cyan-500/60 dark:border-cyan-400', inner: 'border-cyan-400/50 dark:border-cyan-300' },
  { outer: 'border-cyan-600/60 dark:border-cyan-300', inner: 'border-cyan-500/50 dark:border-cyan-200' },
  { outer: 'border-sky-500/60 dark:border-sky-400', inner: 'border-sky-400/50 dark:border-sky-300' },
  { outer: 'border-sky-600/60 dark:border-sky-300', inner: 'border-sky-500/50 dark:border-sky-200' },
  // Greens & Teals
  { outer: 'border-teal-500/60 dark:border-teal-400', inner: 'border-teal-400/50 dark:border-teal-300' },
  { outer: 'border-teal-600/60 dark:border-teal-300', inner: 'border-teal-500/50 dark:border-teal-200' },
  { outer: 'border-emerald-500/60 dark:border-emerald-400', inner: 'border-emerald-400/50 dark:border-emerald-300' },
  { outer: 'border-emerald-600/60 dark:border-emerald-300', inner: 'border-emerald-500/50 dark:border-emerald-200' },
  { outer: 'border-green-500/60 dark:border-green-400', inner: 'border-green-400/50 dark:border-green-300' },
  { outer: 'border-green-600/60 dark:border-green-300', inner: 'border-green-500/50 dark:border-green-200' },
  { outer: 'border-lime-500/60 dark:border-lime-400', inner: 'border-lime-400/50 dark:border-lime-300' },
  { outer: 'border-lime-600/60 dark:border-lime-300', inner: 'border-lime-500/50 dark:border-lime-200' },
  // Warm colors (Yellow, Amber, Orange, Red, Rose)
  { outer: 'border-yellow-500/60 dark:border-yellow-400', inner: 'border-yellow-400/50 dark:border-yellow-300' },
  { outer: 'border-yellow-600/60 dark:border-yellow-300', inner: 'border-yellow-500/50 dark:border-yellow-200' },
  { outer: 'border-amber-500/60 dark:border-amber-400', inner: 'border-amber-400/50 dark:border-amber-300' },
  { outer: 'border-amber-600/60 dark:border-amber-300', inner: 'border-amber-500/50 dark:border-amber-200' },
  { outer: 'border-orange-500/60 dark:border-orange-400', inner: 'border-orange-400/50 dark:border-orange-300' },
  { outer: 'border-orange-600/60 dark:border-orange-300', inner: 'border-orange-500/50 dark:border-orange-200' },
  { outer: 'border-red-500/60 dark:border-red-400', inner: 'border-red-400/50 dark:border-red-300' },
  { outer: 'border-red-600/60 dark:border-red-300', inner: 'border-red-500/50 dark:border-red-200' },
  { outer: 'border-rose-500/60 dark:border-rose-400', inner: 'border-rose-400/50 dark:border-rose-300' },
  { outer: 'border-rose-600/60 dark:border-rose-300', inner: 'border-rose-500/50 dark:border-rose-200' },
  // Purples, Pinks & Indigos
  { outer: 'border-pink-500/60 dark:border-pink-400', inner: 'border-pink-400/50 dark:border-pink-300' },
  { outer: 'border-pink-600/60 dark:border-pink-300', inner: 'border-pink-500/50 dark:border-pink-200' },
  { outer: 'border-fuchsia-500/60 dark:border-fuchsia-400', inner: 'border-fuchsia-400/50 dark:border-fuchsia-300' },
  { outer: 'border-fuchsia-600/60 dark:border-fuchsia-300', inner: 'border-fuchsia-500/50 dark:border-fuchsia-200' },
  { outer: 'border-purple-500/60 dark:border-purple-400', inner: 'border-purple-400/50 dark:border-purple-300' },
  { outer: 'border-purple-600/60 dark:border-purple-300', inner: 'border-purple-500/50 dark:border-purple-200' },
  { outer: 'border-violet-500/60 dark:border-violet-400', inner: 'border-violet-400/50 dark:border-violet-300' },
  { outer: 'border-violet-600/60 dark:border-violet-300', inner: 'border-violet-500/50 dark:border-violet-200' },
  { outer: 'border-indigo-500/60 dark:border-indigo-400', inner: 'border-indigo-400/50 dark:border-indigo-300' },
  { outer: 'border-indigo-600/60 dark:border-indigo-300', inner: 'border-indigo-500/50 dark:border-indigo-200' },
  // Neutrals for subtle effects
  { outer: 'border-slate-500/60 dark:border-slate-400', inner: 'border-slate-400/50 dark:border-slate-300' },
  { outer: 'border-gray-500/60 dark:border-gray-400', inner: 'border-gray-400/50 dark:border-gray-300' },
  { outer: 'border-zinc-500/60 dark:border-zinc-400', inner: 'border-zinc-400/50 dark:border-zinc-300' },
  { outer: 'border-neutral-500/60 dark:border-neutral-400', inner: 'border-neutral-400/50 dark:border-neutral-300' },
  { outer: 'border-stone-500/60 dark:border-stone-400', inner: 'border-stone-400/50 dark:border-stone-300' },
  { outer: 'border-white/60 dark:border-white/40', inner: 'border-white/40 dark:border-white/20' }
];

const getRandomColor = () => rippleColors[Math.floor(Math.random() * rippleColors.length)];

export default function NatureEffects() {
  const [isMobile, setIsMobile] = useState(true);
  const [ripples, setRipples] = useState<RippleDrop[]>([]);
  const [rainLines, setRainLines] = useState<{ id: number, left: number, delay: number, duration: number, height: number, opacity: number }[]>([]);

  useEffect(() => {
    const mobileCheck = window.innerWidth < 768 || ('ontouchstart' in window);
    setIsMobile(mobileCheck);
    if (mobileCheck) return;

    // Generate static rain drops
    const count = 50;
    const lines = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 2, // seconds
      duration: 0.8 + Math.random() * 0.8, // slower for aesthetic and less cpu
      height: 20 + Math.random() * 30, // px
      opacity: 0.2 + Math.random() * 0.2 // slightly more transparent for less distraction
    }));
    setRainLines(lines);

    const handleClick = (e: MouseEvent) => {
      // Append a new ripple at click coordinates
      const color = getRandomColor();
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        scale: Math.random() * 0.5 + 0.8, // 0.8 to 1.3
        colorOuter: color.outer,
        colorInner: color.inner
      };
      setRipples(prev => {
        const combined = [...prev, newRipple];
        return combined.slice(-3); // strict max of 3
      });
      
      // Clean after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 3000);
    };

    window.addEventListener('click', handleClick);

    let isVisible = typeof document !== 'undefined' ? document.visibilityState === 'visible' : true;
    let timeoutId: number | null = null;

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible) {
        setRipples([]); // clear any stuck ripples
        if (!timeoutId) scheduleRipple();
      } else {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
          timeoutId = null;
        }
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    const scheduleRipple = () => {
      if (!isVisible) return;
      // Random delay ensuring they appear at different times (600ms - 1500ms)
      const delay = Math.random() * 900 + 600; 

      timeoutId = window.setTimeout(() => {
        const color = getRandomColor();
        const newRipple = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight - 100) + 50,
          scale: Math.random() * 0.8 + 0.5, // Variation in size: 0.5 to 1.3
          colorOuter: color.outer,
          colorInner: color.inner
        };
        
        setRipples(prev => {
          const combined = [...prev, newRipple];
          return combined.slice(-3); // at most 3
        });
        
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 3000);

        scheduleRipple();
      }, delay);
    };

    if (isVisible) {
      scheduleRipple();
    }

    return () => {
      window.removeEventListener('click', handleClick);
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <style>{`
        @keyframes rainFall {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(110vh); }
        }
        .animate-rain {
          animation: rainFall linear infinite;
        }
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Rain Effect */}
        <div className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-80 dark:opacity-40">
          {rainLines.map(drop => (
            <div
              key={drop.id}
              className="absolute top-[-50px] w-[1px] bg-gradient-to-b from-transparent to-blue-400 dark:to-cyan-200 animate-rain"
              style={{
                left: `${drop.left}%`,
                height: `${drop.height}px`,
                animationDelay: `${drop.delay}s`,
                animationDuration: `${drop.duration}s`,
                opacity: drop.opacity
              }}
            />
          ))}
        </div>

        {/* Ripple Effects on click */}
        <AnimatePresence>
          {ripples.map(ripple => (
            <motion.div
              key={ripple.id}
              className="absolute pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 0,
                height: 0
              }}
            >
              {/* Outer wave */}
              <motion.div
                initial={{ scale: 0.2 * ripple.scale, opacity: 0.7, borderWidth: '3px' }}
                animate={{ scale: 8 * ripple.scale, opacity: 0, borderWidth: '0px' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.6, ease: "easeOut" }}
                className={`absolute left-[-20px] top-[-20px] w-[40px] h-[40px] rounded-full drop-shadow-lg backdrop-blur-sm ${ripple.colorOuter}`}
              />
              {/* Inner trailing wave */}
              <motion.div
                initial={{ scale: 0.1 * ripple.scale, opacity: 0.5, borderWidth: '2px' }}
                animate={{ scale: 5 * ripple.scale, opacity: 0, borderWidth: '0px' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
                className={`absolute left-[-20px] top-[-20px] w-[40px] h-[40px] rounded-full ${ripple.colorInner}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
