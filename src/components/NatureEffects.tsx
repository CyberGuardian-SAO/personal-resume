import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RippleDrop {
  id: number;
  x: number;
  y: number;
  scale: number;
}

export default function NatureEffects() {
  const [ripples, setRipples] = useState<RippleDrop[]>([]);
  const [rainLines, setRainLines] = useState<{ id: number, left: number, delay: number, duration: number, height: number, opacity: number }[]>([]);

  useEffect(() => {
    // Generate static rain drops
    const count = window.innerWidth < 768 ? 40 : 100;
    const lines = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      delay: Math.random() * 2, // seconds
      duration: 0.6 + Math.random() * 0.6, // seconds
      height: 20 + Math.random() * 30, // px
      opacity: 0.2 + Math.random() * 0.3
    }));
    setRainLines(lines);

    const handleClick = (e: MouseEvent) => {
      // Append a new ripple at click coordinates
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        scale: Math.random() * 0.5 + 0.8 // 0.8 to 1.3
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

    let timeoutId: number;

    const scheduleRipple = () => {
      // Random delay ensuring they appear at different times (600ms - 1500ms)
      const delay = Math.random() * 900 + 600; 

      timeoutId = window.setTimeout(() => {
        const newRipple = {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight - 100) + 50,
          scale: Math.random() * 0.8 + 0.5 // Variation in size: 0.5 to 1.3
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

    scheduleRipple();

    return () => {
      window.removeEventListener('click', handleClick);
      clearTimeout(timeoutId);
    };
  }, []);

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
                className="absolute left-[-20px] top-[-20px] w-[40px] h-[40px] rounded-full border-blue-500/60 dark:border-cyan-300 drop-shadow-lg backdrop-blur-sm"
              />
              {/* Inner trailing wave */}
              <motion.div
                initial={{ scale: 0.1 * ripple.scale, opacity: 0.5, borderWidth: '2px' }}
                animate={{ scale: 5 * ripple.scale, opacity: 0, borderWidth: '0px' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
                className="absolute left-[-20px] top-[-20px] w-[40px] h-[40px] rounded-full border-blue-400/50 dark:border-cyan-100"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
