import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const Header = () => {
  const container: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div variants={container} initial='hidden' animate='visible'>
      <motion.h1 variants={item} className='xl:text-7xl md:text-6xl text-5xl pulse mt-48'>
        Welcome to <span className='purple-glow-gradient'>Angelillo</span>&apos;s site
      </motion.h1>

      <motion.h2 variants={item} className='text-center xl:text-4xl md:text-3xl text-2xl text-stone-200'>
        Your trusted developer working at{' '}
        <a href='https://nookure.com' target='__blank' className='red-glow-gradient font-semibold'>
          Nookure
        </a>
      </motion.h2>
    </motion.div>
  );
};

export default Header;
