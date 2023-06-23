import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,  ModalCloseButton, Button} from '@chakra-ui/react';
import Image from 'next/image';






const Popup = ({buttonInfo, isModalOpen, handleModalClose}) => {

    return (
        <Modal  isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{buttonInfo.nombre}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { buttonInfo.detailsTxt }

            <Image src={buttonInfo.detailsImg[0]}  width={400} height={400}></Image>
            
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