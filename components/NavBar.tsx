'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tab,
  Tabs,
} from '@nextui-org/react';
import Avatar from '@/assets/avatar.jpeg';
import Image from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export interface NavItem {
  title: string;
  href: string;
  key: string;
}

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    key: 'home',
  },
  {
    title: 'Resources',
    href: '/resources',
    key: 'resources',
  },
];

const NavBar = () => {
  const [key, setKey] = useState('home');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const useNavigate = useRouter().push;
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    navItems.forEach((item) => {
      if (item.href === pathname) {
        setKey(item.key);
      }
    });
  }, [pathname]);

  useEffect(() => {
    navItems.forEach((item) => {
      if (item.key === key) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNavigate(item.href);
      }
    });
  }, [key, useNavigate]);

  return (
    <Navbar className='bg-transparent' onMenuOpenChange={setMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='md:hidden' />
      {isMenuOpen && (
        <NavbarMenu className='md:hidden bg-transparent'>
          {navItems.map((item) => (
            <NavbarMenuItem key={item.key}>
              <Link color='foreground' key={item.key} href={item.href}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}

      <NavbarBrand>
        <Link href='/' className='flex flex-row items-center align-middle'>
          <Image src={Avatar} alt='Angelillo15 foto' className='max-w-12 rounded-full mr-2' />
          Angelillo15
        </Link>
      </NavbarBrand>

      <NavbarContent justify='center' className='md:flex hidden'>
        <Tabs
          radius='full'
          color='secondary'
          className='order-2'
          selectedKey={key}
          onSelectionChange={(key) => setKey(key.toString())}
        >
          {navItems.map((item) => (
            <Tab key={item.key} title={item.title} />
          ))}
        </Tabs>
      </NavbarContent>
      <NavbarContent justify='end' className='order-3'>
        <Tabs
          onClick={() => window.open('https://github.com/Angelillo15', '__blank')}
          radius='full'
          color='secondary'
          className='order-1'
        >
          <Tab title='Github' />
        </Tabs>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
