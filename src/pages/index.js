import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/react';
import DrawerComponent from './DrawerComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Divider bg="black" height="4px" mb="2" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: '20px',
        }}
      >
        <HamburgerIcon boxSize={6} onClick={handleDrawerOpen} cursor="pointer" />
      </div>
      <Divider bg="gray" height="4px" mb="2" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          marginTop: '50px',
          marginLeft: isDrawerOpen ? '400px' : '50px',
          transition: 'margin 0.3s ease',
          position: 'relative',
          zIndex: '0',
        }}
      >
        <Image src="/images/pc.png" alt="" width={800} height={800} />
      </div>
      <DrawerComponent isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </div>
  );
}
