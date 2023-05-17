import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, UnorderedList, ListItem } from '@chakra-ui/react';

const DrawerComponent = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <UnorderedList>
              <ListItem>Procesador</ListItem>
              <ListItem>Placa Madre</ListItem>
              <ListItem>Memoria RAM</ListItem>
              <ListItem>Almacenamiento (HDD/SSD)</ListItem>
              <ListItem>Fuente de energía</ListItem>
              <ListItem>Tarjeta Gráfica</ListItem>
              <ListItem>Sistema de enfriamiento</ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
