'use client';

import Header from '@/components/home/Header';
import HomeProjects from '@/components/home/HomeProjects';
import Languages from '@/components/home/Languages';

export default function Home() {
  return (
    <>
      <Header />
      <Languages />
      <HomeProjects />
    </>
  );
}
