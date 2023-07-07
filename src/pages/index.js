import { useState ,useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Divider, position } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react'
import DrawerComponent from './DrawerComponent';
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,  ModalCloseButton} from '@chakra-ui/react';
import  ButtonMap from './ButtonMap';
import { Text } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] });



const SwitchButton = () => {
  return (
    <Button colorScheme="gray" size="md">
      Hola
    </Button>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [architecture, setArchitecture] = useState(false);

  const [modalContent, setModalContent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }
  useEffect (()=>{
    architecture ?
    fetchData('/api/datosComputador?tipo=lp'):
    fetchData('/api/datosComputador?tipo=pc')
    
  }
   ,[architecture] );



  const handleModalClose = () => {
    setIsModalOpen(false);
  };  

    const handleModalOpen = () => {
    setIsModalOpen(true);

  };
  
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  if (isLoading) {
    return <div>CARGANDO</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      
      <Box backgroundColor='#464646' >
      
      <Stack align='center' direction='row' marginTop='0.2%' marginLeft='%'>
        <HamburgerIcon boxSize='4%' color='#8C8C8C' onClick={handleDrawerOpen} cursor="pointer" marginLeft='0.25%' marginTop='' />
        <DrawerComponent isOpen={isDrawerOpen} onClose={handleDrawerClose} />
        
        <Box width='30%'/>
        <Text fontSize='2xl' marginLeft='%'  marginTop='-3.5%' color='#C0C0C0' backgroundColor='#151515'> Arquitectura de {architecture ?   "una laptop":"un computador de torre"} </Text>
      
        <Box width='22%'/>
        <Image src="/images/torre_logo.png" marginLeft='' alt="" width={55} height={50} />

        <Switch size='lg' colorScheme='red' position='relative' type='checkbox' onChange={() => setArchitecture(!architecture)}/>

        <Image src="/images/notebook_logo.png"  alt="" width={55} height={50} />
      </Stack>


      </Box>
      <Box backgroundColor='light gray'  >
        <Divider bg="gray" height="4px"  mb="0.2%" />
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
        
          <Box  marginLeft="25%"/>
          <Box  height='660px' >
            
            {
              architecture ?

              <Image src="/images/portatil.png"  alt="" width={970} height={970} pos='static' />:
              <Image src="/images/torre.png"  alt="" width={675} height={675} pos='static' /> 

              }
            
          

                
            <ButtonMap info={data.componentes[1]}/>
            <ButtonMap info={data.componentes[2]}/> 
            <ButtonMap info={data.componentes[3]}/>
            <ButtonMap info={data.componentes[4]}/>
            <ButtonMap info={data.componentes[5]}/>
            <ButtonMap info={data.componentes[6]}/>
            <ButtonMap info={data.componentes[0]}/>    
                


          
            
      
          </Box>

          
      
        </div>
      </Box>
    </div>
  );
}
