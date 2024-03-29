import LanguageCardComponent from './LanguageCard';
import { motion } from 'framer-motion';
import { container } from './Header';

export interface LanguageCardProps {
  icon: string;
  tooltip: string;
}

const LanguageCardList: LanguageCardProps[] = [
  {
    icon: 'akar-icons:react-fill',
    tooltip: 'React',
  },
  {
    icon: 'bxl:java',
    tooltip: 'Java',
  },
  {
    icon: 'bxl:typescript',
    tooltip: 'TypeScript',
  },
  {
    icon: 'simple-icons:rust',
    tooltip: 'Rust',
  },
  {
    icon: 'file-icons:vue',
    tooltip: 'Vue',
  },
  {
    icon: 'mdi:git',
    tooltip: 'Git',
  },
  {
    icon: 'tabler:sql',
    tooltip: 'SQL',
  },
  {
    icon: 'simple-icons:php',
    tooltip: 'PHP',
  },
  {
    icon: 'mdi:laravel',
    tooltip: 'Laravel',
  },
  {
    icon: 'bxs:paper-plane',
    tooltip: 'PaperMC',
  },
  {
    icon: 'bi:unity',
    tooltip: 'Unity',
  }
];

const Languages = () => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='visible'
      className='flex justify-center mt-12 flex-wrap gap-4 my-8'
    >
      {LanguageCardList.map((card, i) => (
        <LanguageCardComponent key={i} icon={card.icon} tooltip={card.tooltip} />
      ))}
    </motion.div>
  );
};

export default Languages;
