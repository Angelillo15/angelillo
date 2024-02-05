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
      <head>
        <meta property='og:image' content='/preview.png' />
        <meta property='og:image:width' content='843' />
        <meta property='og:image:height' content='480' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
