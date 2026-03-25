import { Grid, GridItem } from '@chakra-ui/react'
import Dashboardlayout from './Dashboardlayout.jsx'
import PortfolioSection from '../Dashboard/components/PortfolioSection.jsx'
import PriceSection from '../Dashboard/components/PriceSection.jsx'
import Transactions from '../Dashboard/components/Transactions.jsx'

const Dashboard = () => {
  return (
    <Dashboardlayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)"
        }}
        gap={6}
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>

        <GridItem colSpan={1}>
          <Transactions  />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  )
}

export default Dashboard