'use client';

import { motion, Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

type Props = {
  children: ReactNode;
};

export const HeroContentMotion = ({ children }: Props) => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {children}
    </motion.div>
  );
};

export const HeroMotionItem = ({ children }: Props) => {
  return <motion.div variants={item}>{children}</motion.div>;
};
