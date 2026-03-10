'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  width?: 'w-full' | 'w-fit';
  className?: string; // Additional classes
  delay?: number; // ms to delay
  dir?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
};

export const Reveal = ({
  children,
  width = 'w-fit',
  className = '',
  delay = 0,
  dir = 'up',
  duration = 1000,
}: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    switch (dir) {
      case 'up':
        return 'translate-y-10 opacity-0';
      case 'down':
        return '-translate-y-10 opacity-0';
      case 'left':
        return '-translate-x-10 opacity-0';
      case 'right':
        return 'translate-x-10 opacity-0';
      default:
        return 'translate-y-10 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`${width} transition-all ease-out transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};
