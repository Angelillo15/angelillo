import Header from '@/components/resources/Header';
import ResourceContainer from '@/components/resources/ResourceContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angelillo15 - Resources',
  description: 'Angelillo15 resources page. Here you will find all my resources.',
  keywords: 'Angelillo15, Angelillo, Angel Martin Gonzalez, Nookure, Java Developer, MAStaff, Pterodactyl themes',
};

const Resources = () => {
  return (
    <>
      <Header />
      <ResourceContainer />
    </>
  );
};

export default Resources;
