import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Flex , Box } from '@chakra-ui/react'
import Dashboardlayout from './Dashboardlayout.jsx'
import PortfolioSection from '../Dashboard/components/PortfolioSection.jsx'

const Dashboard = (  ) => {
  return (
    <Dashboardlayout title = "Dashboard" >
       <PortfolioSection />
    </Dashboardlayout>
  )
}

export default Dashboard