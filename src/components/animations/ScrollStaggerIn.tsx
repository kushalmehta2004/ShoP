'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollStaggerInProps {
  children: React.ReactNode;
  itemSelector?: string; // Kept for API compatibility, but we might not need it
  delay?: number;
  staggerDelay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollStaggerIn({ 
  children, 
  itemSelector = '.stagger-item',
  delay = 0, 
  staggerDelay = 0.1,
  className = '',
  threshold = 0.1,
  triggerOnce = true
}: ScrollStaggerInProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      }
    },
  };

  // If children is an array of elements, we wrap each one in a motion.div
  // If it's a single element containing children with itemSelector, we need a different approach.
  // To keep it simple and performant in React, we assume children are the items.
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
