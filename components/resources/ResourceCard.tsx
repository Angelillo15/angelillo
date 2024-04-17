'use client';

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image  from 'next-image-export-optimizer';
import { motion } from 'framer-motion';
import { item } from '@/components/home/Header';
import { StaticImageData } from 'next/legacy/image';

export interface ResourceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  button: string;
  href: string;
}

const ResourceCard = ({ title, description, image, button, href }: ResourceCardProps) => {
  const navigate = () => {
    window.open(href, '_blank');
  };

  return (
    <motion.div variants={item} className=''>
      <Card className='py-2'>
        <CardHeader className='overflow-visible py-2'>
          <Image alt='Card background' src={image} width={370} placeholder='blur' className='rounded-lg' />
        </CardHeader>
        <CardBody className='pb-0 pt-2 px-4 flex-col items-start max-w-[370px]'>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <p className='text-gray-500'>{description}</p>
          <Button className='my-2' color='primary' onClick={navigate}>
            {button}
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ResourceCard;
