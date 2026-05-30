import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function MouseFollower() {
  const [isMobile, setIsMobile] = useState(true);

  // Smooth springs for tracking the cursor position in high refresh rate
  const mouseX = useSpring(0, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 20 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch interfaces for performance
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };
    checkViewport();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    const resizeListener = () => {
      checkViewport();
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', resizeListener);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glow cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 rounded-full border border-orange-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? 'rgba(239, 68, 68, 0.15)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      {/* Inner Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-orange-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: 6.75,
          translateY: 6.75,
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
}
