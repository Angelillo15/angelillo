'use client';
import ResourceCard, { ResourceCardProps } from '@/components/resources/ResourceCard';
import MAStaff from '@/assets/plugins/mastaff.png';
import NookTheme from '@/assets/themes/nooktheme.png';
import Ice from '@/assets/themes/ice.png';
import Purple from '@/assets/themes/purple.png';
import { motion } from 'framer-motion';
import { container } from '@/components/home/Header';

const resources = [
  {
    title: 'MAStaff',
    description: 'A simple staff plugin for your server, with a lot of features and .',
    image: MAStaff,
    button: 'Download',
    href: 'https://builtbybit.com/resources/mastaff-staffmode-utils.25460/',
  },
  {
    title: 'NookTheme',
    description: 'A simple theme for your Pterodactyl panel.',
    image: NookTheme,
    button: 'Download',
    href: 'https://builtbybit.com/resources/nooktheme-pterodactyl-theme.30893/',
  },
  {
    title: 'IceMinecraftTheme',
    description: 'A Ice theme based on Minecraft for Pterodactyl Panel',
    image: Ice,
    button: 'Download',
    href: 'https://builtbybit.com/resources/iceminecrafttheme-pterodactyl-theme.26274/',
  },
  {
    title: 'Minecraft Purple Theme',
    description: 'An Purple theme based on Minecraft for Pterodactyl Panel',
    image: Purple,
    button: 'Download',
    href: 'https://pterodactyl-resources.com/resources/resource/43-minecraft-purple-theme--pterodactyl-111x-support/',
  },
] as ResourceCardProps[];
const ResourceContainer = () => {
  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='visible'
      className='flex justify-center mt-12 flex-wrap gap-4 my-8'
    >
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </motion.section>
  );
};

export default ResourceContainer;
