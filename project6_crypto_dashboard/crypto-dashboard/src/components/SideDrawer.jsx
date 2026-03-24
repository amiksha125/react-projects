

import React from 'react';
import SideNav from './SideNav.jsx'

import {
 ChakraProvider,
 Box,
 Text,
 useDisclosure,
 Button,
 Input,
} from '@chakra-ui/react';
import {
 Drawer,
 DrawerBody,
 DrawerFooter,
 DrawerHeader,
 DrawerOverlay,
 DrawerContent,
 DrawerCloseButton,
} from '@chakra-ui/react';

const SideDrawer = ( { isOpen, onClose } ) => {

 const btnRef = React.useRef();
 return (
   
       <Drawer
         isOpen={isOpen}
         placement="left"
         onClose={onClose}
    
       >
         <DrawerOverlay />
         <DrawerContent>
           <DrawerCloseButton />
           
           <DrawerBody>
              <SideNav />
           </DrawerBody>
           
         </DrawerContent>
       </Drawer>
 

 );
}
export default SideDrawer;