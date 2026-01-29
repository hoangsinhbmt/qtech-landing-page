import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const progress = Math.abs(rect.top) / (rect.height - windowHeight);
        setScrollProgress(Math.min(progress, 1));
      } else if (rect.bottom <= windowHeight) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 - scrollProgress * 0.1;
  const opacity = 1 - scrollProgress * 0.3;

  return (
    <div ref={sectionRef} className={className}>
      <motion.div
        style={{
          scale,
          opacity,
        }}
        transition={{ duration: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
