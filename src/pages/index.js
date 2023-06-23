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

    fetchData('/api/datosComputador')}
   ,[] );


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
        <HamburgerIcon boxSize='4%' color='#8C8C8C' onClick={handleDrawerOpen} cursor="pointer" marginLeft='0.25%' marginTop='-3.25%' />
        <DrawerComponent isOpen={isDrawerOpen} onClose={handleDrawerClose} />
        
        
        <ButtonGroup marginTop='0.2%' marginLeft='83%'  isAttached variant='solid' >
          <Button color='#aCaCaC' backgroundColor='black' height='80%' > 
            
            <Image src="/images/torre_logo.png"  alt="" width={55} height={50} />
          </Button>

          <Button color='#aCaCaC' backgroundColor='black' height='80%'   >
            <Image src="/images/notebook_logo.png"  alt="" width={55} height={50} />
          </Button>
        </ButtonGroup>


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
            
            <Image src="/images/torre.png"  alt="" width={675} height={675} pos='static' />
            
          

                
            <ButtonMap info={data.componentes[1]}/>
            <ButtonMap info={data.componentes[2]}/> 
            <ButtonMap info={data.componentes[3]}/>
            <ButtonMap info={data.componentes[4]}/>
            <ButtonMap info={data.componentes[5]}/>
            <ButtonMap info={data.componentes[6]}/>
            <ButtonMap info={data.componentes[0]}/>    
                


          
            
            {/*

            <Button color='#aCaCaC' backgroundColor='transparent' width='10%' height='50%' top='33%' pos='absolute' marginLeft='27%' onClick={handleModalOpen}/> 


            <Button color='#aCaCaC' backgroundColor='transparent' width='13%' height='20%' top='68%' pos='absolute' marginLeft='2.7%' onClick={handleModalOpen}/> 

            <Button color='#aCaCaC' backgroundColor='transparent' width='18%' height='48%' top='20%' pos='absolute' marginLeft='6.5%' onClick={handleModalOpen}/>

            <Button color='#aCaCaC' backgroundColor='transparent' width='23%' height='10%' top='47%' pos='absolute' marginLeft='3.7%' onClick={handleModalOpen}/> 
            <Button color='#aCaCaC' backgroundColor='transparent' width='3%' height='27%' top='20%' pos='absolute' marginLeft='19%' onClick={handleModalOpen}/> 
            <Button color='#aCaCaC' backgroundColor='transparent' width='7.5%' height='17.5%' top='25%' pos='absolute' marginLeft='11%' onClick={handleModalOpen}/>
            <Button color='#aCaCaC' backgroundColor='transparent' width='4.6%' height='25%' top='16%' pos='absolute' marginLeft='1.9%' onClick={handleModalOpen}/> 

            
            
            */}

          </Box>

          
      
        </div>
      </Box>
    </div>
  );
}
