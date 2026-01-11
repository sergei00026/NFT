'use client';

import { motion, Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const imagesContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};

const imageItem: Variants = {
  hidden: {
    opacity: 0,
    x: 200, // за правой границей
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const arrowItem: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1.2,
      ease: 'easeOut',
    },
  },
};

type Props = {
  children: ReactNode;
};

export const HeroImagesMotion = ({ children }: Props) => {
  return (
    <motion.div
      variants={imagesContainer}
      initial='hidden'
      animate='visible'
    >
      {children}
    </motion.div>
  );
};

export const HeroImageMotionItem = ({ children }: Props) => {
  return <motion.div variants={imageItem}>{children}</motion.div>;
};

export const HeroArrowMotionItem = ({ children }: Props) => {
  return <motion.div variants={arrowItem}>{children}</motion.div>;
};
