'use client';

import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

export const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  return (
    <motion.div variants={container} initial='hidden' animate='visible'>
      <motion.h1 variants={item} className='xl:text-6xl md:text-5xl text-4xl pulse mt-28'>
        Welcome to <span className='purple-glow-gradient'>Angelillo</span>&apos;s resources
      </motion.h1>

      <motion.h2 variants={item} className='text-center xl:text-3xl md:text-2xl text-1xl text-stone-400'>
        Here you&apos;ll find all my resources.
      </motion.h2>
    </motion.div>
  );
};

export default Header;
