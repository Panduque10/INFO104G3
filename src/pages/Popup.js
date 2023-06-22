import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,  ModalCloseButton, Button} from '@chakra-ui/react';


const Popup = ({buttonInfo, isModalOpen, handleModalClose}) => {

    return (
        <Modal  isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{buttonInfo.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { buttonInfo.detailsTxt }
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleModalClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
    );

}
export default Popup;