import {
  Box,
  HStack,
  Stack,
  Text,
  Icon,
  Tag,
  Button,
  Flex,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { CustomCard } from "../../../chakra/CustomCard.jsx";
const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Wallet Balances</Text>
          </HStack>

          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.258495850
              </Text>{" "}
            </HStack>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>{" "}
            </HStack>
          </HStack>
        </Stack>

        {/* buttons */}
        <HStack spacing={4}>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>

      {/* chakra tabs code */}
      <Tabs variant="soft-rounded" >
       <Flex justify= "flex-end">
           <TabList  bg = "black.5" p= "3px">
            {
              // js code inside {}
              ["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab key = {tab}
                _selected = {{
                  bg: "white"
                }}
                 fontSize= "sm" p= "6px" borderRadius= "4">{tab}</Tab>
              ))
            }
              
            </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
            {/* if tab 1 selected */}
            <Image w="100%" src="/graph.svg" mt="48px" />

            <HStack justify="space-between">
              {timeStamps.map((timeStamp) => (
                <Text key={timeStamp} fontSize="sm" color="black.80">
                  {timeStamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
