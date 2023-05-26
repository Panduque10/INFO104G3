import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Divider, position } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react'
import DrawerComponent from './DrawerComponent';
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] });

const SwitchButton = () => {
  return (
    <Button colorScheme="gray" size="md">
      Hola
    </Button>
  );
};

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
      
      <Box backgroundColor='#464646' >
        <HamburgerIcon boxSize='4%' color='#8C8C8C' onClick={handleDrawerOpen} cursor="pointer" marginLeft='0.25%' marginTop='-3.25%' />
        <DrawerComponent isOpen={isDrawerOpen} onClose={handleDrawerClose} />
        
        <ButtonGroup marginTop='0.2%' marginLeft='83%'  isAttached variant='solid' >
          <Button color='#aCaCaC' backgroundColor='black' height='80%'   >
            <Image src="/images/torre_logo.png"  alt="" width={55} height={50} />
          </Button>
          <Button color='#aCaCaC' backgroundColor='black' height='80%'   >
            <Image src="/images/notebook_logo.png"  alt="" width={55} height={50} />
          </Button>
        </ButtonGroup>

      </Box>
      <Box backgroundColor='light gray'  >
        <Divider bg="gray" height="4px"  mb="-0.3%" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            marginLeft: isDrawerOpen ? '5%' : '10px',
            transition: 'margin 0.3s ease',
            position: 'relative',
            zIndex: '0',
          }}
        >
        
          <Center height='670px' >
            <Box  mx="55%"/>
            
            <Image src="/images/torre.png"  alt="" width={675} height={675} />
          </Center>
        </div>
      </Box>
    </div>
  );
}
