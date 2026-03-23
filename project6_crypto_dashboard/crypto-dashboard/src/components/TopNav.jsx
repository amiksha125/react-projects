import { Container, Heading, Flex, Menu, MenuButton, MenuList, MenuItem, Button, HStack , Box, Icon} from '@chakra-ui/react'
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";

const TopNav = () => {
  return (
    <Box     boxShadow="xl">
      <HStack maxW = "1280px" mx= "auto"
   h = "16" justify= "space-between" px= "32">
      

        <Heading fontStyle = "medium"fontSize= "28px">Dashboard</Heading>
    

      <Menu>
        <MenuButton >
          <Icon as = { FaCircleUser} fontSize= "24px" />
        </MenuButton>

        <MenuList>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Support</MenuItem>
         
        </MenuList>
       </Menu>
       </HStack>

    </Box>
     
  )
}

export default TopNav