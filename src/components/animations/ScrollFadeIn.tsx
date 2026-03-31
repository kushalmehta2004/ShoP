'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollFadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollFadeIn({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  threshold = 0.15,
  triggerOnce = true
}: ScrollFadeInProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as any, // easeOutQuart
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
