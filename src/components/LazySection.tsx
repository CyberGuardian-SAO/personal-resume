import { useState, useEffect, useRef, ReactNode, Suspense } from 'react';

interface LazySectionProps {
  children: ReactNode;
  height?: string; // CSS height for the placeholder (e.g., '300px')
  id?: string;
}

export default function LazySection({ children, height = '300px', id }: LazySectionProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px 0px', // Load pre-emptively 200px before reaching the viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} id={id} style={{ minHeight: isInView ? 'auto' : height }}>
      {isInView ? (
        <Suspense fallback={<div className="w-full" style={{ height }} />}>
          {children}
        </Suspense>
      ) : (
        <div className="w-full h-full" style={{ height }} />
      )}
    </div>
  );
}
