import { Flex, Box, Container, useDisclosure } from '@chakra-ui/react'
import TopNav from '../../components/TopNav.jsx'
import SideNav from '../../components/SideNav.jsx'
import SideDrawer from '../../components/SideDrawer.jsx'

const Dashboardlayout = ( { title, children  }) => {

    const {isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>

        <Box
        display={{
        base: "none",
        lg: "flex",

      }  }>
               <SideNav /> 
        </Box>
             
        <SideDrawer isOpen={ isOpen } onClose={ onClose }/>
         <Box flexGrow = {1} >
          <TopNav title = { title }  onOpen = {onOpen}/>
          <Container overflowX = "hidden" overflowY="auto" h = 'calc(100vh - 88px)' mt = "6" maxW= "80rem" > {children} </Container>
         </Box>
    
       </Flex>
  )
}

export default Dashboardlayout;