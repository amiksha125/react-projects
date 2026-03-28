
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
import  { Link, useLocation  } from 'react-router-dom'


const SideNav = () => {

  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  }
  
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
    <Stack justify = "space-between" boxShadow= {{
      base: "none",
      lg: "lg"
    }} w = {{
      base: "full",
      lg: "16rem"
    }} h= "100vh"
    _hover = {{
              bg : " #F3F3F7",         
             }} 
             bg= "white"
      >
     <Box>
         {
        navLinks.map((nav) => {
          return (
            <Link to={nav.link}    key={nav.text}>
            <HStack mx = "12px" mt= "20px" 

            bg={isActiveLink(nav.link) ? "#f3f3f7e2" : "transparent"}
            color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
             
            _hover={{
              bg : "#F3F3F7",
              color: "#171717"
            }}
             borderRadius= "10px">
              <Icon as={nav.icon} />
              <Text fontSize= "14px" fontWeight="medium" >{nav.text}</Text>
            </HStack>
            </Link>
          )
        })
      }
     </Box>

      <Box mb= "20px">
        <Link to= "/support" >
            <HStack mx = "12px" mt= "20px" 
             
             color= "#797E82"
             _hover= {{
               color: "#171717"
             }}
             borderRadius= "10px">
              <Icon as={BiSupport} />
              <Text fontSize= "14px" fontWeight="medium" >Support</Text>
            </HStack>
        </Link>
      </Box>
    </Stack>
  )
}

export default SideNav