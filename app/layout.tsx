import '@/app/globals.css';
import { Providers } from './providers';
import NavBar from '@/components/NavBar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Angelillo15 - 😈',
  description: 'An spanish developer who loves to code and learn new things.',
  keywords: 'Angelillo15, Angelillo, Angel Martin Gonzalez, Nookure, Java Developer, MAStaff, Pterodactyl themes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
