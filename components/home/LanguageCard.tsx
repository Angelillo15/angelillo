import { Tooltip } from '@nextui-org/react';
import { LanguageCard } from './Languages';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { item } from './Header';

const LanguageCard = ({ icon, tooltip }: LanguageCard) => {
  return (
    <motion.div variants={item} className='flex items-center justify-center w-20 h-20 rounded-full text-3xl bg-gray-200 dark:bg-gray-700 hover:text-purple-400 transition-colors'>
      <Tooltip content={tooltip} placement='bottom'>
        <Icon icon={icon} />
      </Tooltip>
    </motion.div>
  );
};

export default LanguageCard;
