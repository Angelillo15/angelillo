import { Button } from '@nextui-org/react';
import Image from 'next/image';
import MAStaffImage from '@/assets/plugins/mastaff.png';
import NookTheme from '@/assets/themes/nooktheme.png'
import { Variants, motion } from 'framer-motion';

export const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}
  
export const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}
const HomeProjects = () => {
  return (
    <motion.section variants={container} initial='hidden' animate='visible' id='facts' className='flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:gap-12 md:py-16'>
      <motion.div variants={item} className='flex flex-col gap-6 md:flex-row-reverse md:gap-8 xl:gap-24 items-center'>
        <div className='w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip'>
          <Image
            alt=''
            src={MAStaffImage}
            placeholder='blur'
            fill
            sizes='(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw'
            className='object-cover'
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-semibold text-2xl md:text-4xl'>Creating Minecraft plugins</h2>
          <p className='md:mt-6 md:text-xl text-gray-900 dark:text-gray-100 mt-3'>
            I&apos;m a Minecraft plugin developer, I have been developing plugins for 3 years, I have a lot of experience in
            this sector. I&apos;m currently working on <span className='purple-glow-gradient'> MAStaff </span> and my brand new
            <span className='red-glow-gradient'> Nookure Chat</span>.
          </p>
          <div className='flex flex-row gap-4 mt-8'>
            <Button color='secondary' href='/resoruces'>
              Check out Resources
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className='flex flex-col gap-6 md:flex-row md:gap-8 xl:gap-24 items-center'>
        <div className='w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip'>
          <Image
            alt=''
            src={NookTheme}
            placeholder='blur'
            fill
            sizes='(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw'
            className='object-cover'
          />
        </div>
        <div className='flex-1'>
          <h2 className='font-semibold text-2xl md:text-4xl'>Developing for Pterodactyl</h2>
          <p className='md:mt-6 md:text-xl text-gray-900 dark:text-gray-100 mt-3'>
            I&apos;m glad to say that I lead the Open Source development of Pterodactyl Themes, I have projects like
            <span className='red-glow-gradient'> NookTheme</span> or mor simple themes that works on every version of
            pterodactyl like <span className='purple-glow-gradient'>Ice Minecraft theme</span>.
          </p>
          <div className='flex flex-row gap-4 mt-8'>
            <Button color='secondary' href='/resoruces'>
              Check out Themes
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeProjects;
