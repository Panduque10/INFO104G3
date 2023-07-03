import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Button, UnorderedList, ListItem } from '@chakra-ui/react';
import Popup from './Popup';
import { useState, useEffect } from 'react';

import data from '../../public/data/datos.json';

const DrawerComponent = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [componenteActual, setComponenteActual] = useState(null);

  const handleModalOpen = (componentName) => {
    setIsModalOpen(true);
    setComponenteActual(componentName);
  };

  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <UnorderedList>
              {data.componentes.map((component) => (
                <ListItem key={component.nombre}>
                  <Button variant="ghost" onClick={() => handleModalOpen(component.nombre)}>
                    {component.nombre}
                  </Button>
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {data.componentes.map((component) => (
        <Popup
          key={component.nombre}
          buttonInfo={component}
          isModalOpen={isModalOpen && component.nombre === componenteActual}
          handleModalClose={() => setIsModalOpen(false)}
        />
      ))}
    </>
  );
};

export default DrawerComponent;
