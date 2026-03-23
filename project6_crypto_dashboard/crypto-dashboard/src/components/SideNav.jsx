
    // basic element in chakra is Box
    // property name same like tailwind css
    // media query is easier to apply
    // <Box display= "flex" 
    // bg= "green" 
    // px= {{
    //     base : "4",
    //     md : "8",
    //     xl : "16"
    // }}>

import { Box, HStack, Stack, Text, Icon } from "@chakra-ui/react";
import { RxDashboard } from 'react-icons/rx'
import { BsArrowDownUp } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'

const SideNav = () => {
  
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: RxDashboard,
      text: "Transactions",
      link: "/transactions"
    }
  ]

  return (
    <Stack justify = "space-between" boxShadow= "lg" maxW = "16rem" h= "100vh"
    _hover = {{
              bg : " #F3F3F7",         
             }}>
     <Box>
         {
        navLinks.map((nav) => {
          return (
            <HStack mx = "12px" mt= "20px" 
            key={nav.text}
             
             color= "#797E82"
             _hover= {{
               color: "#171717"
             }}
             borderRadius= "10px">
              <Icon as={nav.icon} />
              <Text fontSize= "14px" fontWeight="medium" >{nav.text}</Text>
            </HStack>
          )
        })
      }
     </Box>

      <Box mb= "20px">
        <HStack mx = "12px" mt= "20px" 
             
             color= "#797E82"
             _hover= {{
               color: "#171717"
             }}
             borderRadius= "10px">
              <Icon as={BiSupport} />
              <Text fontSize= "14px" fontWeight="medium" >Support</Text>
      </HStack>
      </Box>
    </Stack>
  )
}

export default SideNav