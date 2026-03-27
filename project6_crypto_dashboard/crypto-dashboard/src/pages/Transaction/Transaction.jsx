import React from 'react'
import { Card, Flex, Button , Icon, Tabs, Tab, TabList, Tag, TabPanel, TabPanels,  Input,
  InputGroup, HStack,
  InputLeftElement,} from "@chakra-ui/react"
import DashboardLayout from '../Dashboard/Dashboardlayout.jsx'
import { AiOutlineDownload} from 'react-icons/ai'
import TransactionTable from './components/TransactionTable.jsx'
import { BsSearch } from "react-icons/bs";


const tabs = [
  {
    name: "All",
    count: 349
  },
  {
    name: "Deposite",
    count: 114
  },
  {
    name: "Withdraw",
    count: 55
  },
  {
    name: "Trade",
    count: 50
  }
]
const Transaction = () => {
  return (
    <DashboardLayout>
      <Flex justify= "end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius= "1rem">
        <Tabs>
           <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
               <TransactionTable />
            </TabPanel>

            <TabPanel>
               <TransactionTable />
            </TabPanel>

            <TabPanel>
               <TransactionTable />
            </TabPanel>

            <TabPanel>
               <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction