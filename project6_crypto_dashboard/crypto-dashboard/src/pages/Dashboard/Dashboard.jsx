import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Flex , Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
   <div>
    <Flex>
       
     <SideNav /> 

     <Box flexGrow = {1} >
      <TopNav />
     </Box>

   </Flex>
   </div>
  )
}

export default Dashboard