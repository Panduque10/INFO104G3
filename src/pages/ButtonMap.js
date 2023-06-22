import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react';
import Popup from './Popup'

const ButtonMap = ({info}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
      };  
    
    const handleModalOpen = () => {
        setIsModalOpen(true);

      };
    


    return(
        <div>
            
            <Button color='#aCaCaC' backgroundColor='transparent' width={info.width} height={info.height} top={info.top} pos='absolute' marginLeft={info.marginLeft} onClick={handleModalOpen}/>
            {
                isModalOpen &&
                <Popup buttonInfo={info} isModalOpen={isModalOpen} handleModalClose={handleModalClose} />

            }

        </div>
        
    );
};

export default ButtonMap;