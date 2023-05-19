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
      
      <Box backgroundColor='#464646' mb="2%">
        <HamburgerIcon boxSize='4%' color='#8C8C8C' onClick={handleDrawerOpen} cursor="pointer" marginLeft='0.25%' />
        <DrawerComponent isOpen={isDrawerOpen} onClose={handleDrawerClose} />

        <ButtonGroup marginTop='0.66%' paddingLeft='85%' size='md' isAttached variant='ghost'>
          <Button color='#aCaCaC' backgroundColor='black'  >Torre</Button>
          <Button color='#aCaCaC' backgroundColor='black'  >Laptop</Button>
        </ButtonGroup>

      </Box>
      <Box backgroundColor='light gray'>
        <Divider bg="gray" height="4px" mb="-2" marginTop='-2%'/>
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
        
          <Center height='675px'>
            <Box  mx="55%"/>
            <Image src="/images/pc.png"  alt="" width={675} height={675} />
          </Center>
        </div>
      </Box>
    </div>
  );
}
