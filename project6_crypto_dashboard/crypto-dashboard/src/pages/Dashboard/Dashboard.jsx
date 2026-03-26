import { Grid, GridItem } from '@chakra-ui/react'
import Dashboardlayout from './Dashboardlayout.jsx'
import PortfolioSection from '../Dashboard/components/PortfolioSection.jsx'
import PriceSection from '../Dashboard/components/PriceSection.jsx'
import Transactions from '../Dashboard/components/Transactions.jsx'
import InfoCard from '../Dashboard/components/InfoCard.jsx'

const Dashboard = () => {
  return (
    <Dashboardlayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)"
        }}
        gap={6}
      >
        <GridItem colSpan={{
          base: 1,
          lg: 2
        }}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>

        <GridItem colSpan={1}>
          <Transactions  />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard imgUrl="/dot_bg.svg" 
          text= "Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
          tagText = "Loan"
          inverted= {false} />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard imgUrl="/grid_bg.svg" 
          tagText= "Contact"
          text = "Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
          inverted= {true} />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  )
}

export default Dashboard