import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Button, UnorderedList, ListItem } from '@chakra-ui/react';

const DrawerComponent = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <UnorderedList>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Procesador')}>
                  Procesador
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Placa Madre')}>
                  Placa Madre
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Memoria RAM')}>
                  Memoria RAM
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Almacenamiento (HDD/SSD)')}>
                  Almacenamiento (HDD/SSD)
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Fuente de poder')}>
                  Fuente de poder
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Tarjeta Gráfica')}>
                  Tarjeta Gráfica
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="ghost" onClick={() => console.log('Sistema de enfriamiento')}>
                  Sistema de enfriamiento
                </Button>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerComponent;