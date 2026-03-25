// import { Fragment } from 'react'
// import { CustomCard } from "../../../chakra/CustomCard.jsx";
// import {
//   Box,
//   HStack,
//   Stack,
//   Text,
//   Icon,
//   Tag,
//   Button,
//   Flex,
//   Image,
//   Tabs,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Fragment,
//   Grid
// } from "@chakra-ui/react";

// import { BsCurrencyRupee } from 'react-icons/bs'
// import { FaBitcoin } from "react-icons/fa";

// const Transactions = () => {
//     const transactions = [
//         {   
//             id : "1",
//             icon : BsCurrencyRupee,
//             text : "INR Deposite",
//             amount : "+ ₹81,123.10",
//             timestamp: "2026-03-20 7.28 PM"
//         },
//         {   id : "2",
//             icon : FaBitcoin,
//             text : "BTC Sell",
//             amount : -"- 12.48513391 BTC",
//             timestamp: "2026-03-22 12.34 AM"
//         },
//         {   
//             id : "3",
//             icon : BsCurrencyRupee,
//             text : "INR Deposite",
//             amount : "+ ₹81,123.10",
//             timestamp: "2026-03-20"
//         }
//     ]
//   return (
//     <CustomCard>
//         <Text fontSize = "sm" color = "black.8" mb="6" >Recent Transactions</Text>

//         <Stack>
//             {
//                 transactions.map((t) => (
//                    <Fragment key={t.id}>
//                     { i >  0 && <Divider /> }
//                       <Flex  gap={4}>
//                       <Grid boxSize={10} borderRadius= "full" placeItems = "center" bg= "black.5">
//                           <Icon as={t.icon} />
//                       </Grid>

//                       <Flex justify= "space-between" w="full" >
//                         <Stack spacing={0}>
//                             <Text textStyle= "h6">
//                                 {t.text}
//                             </Text>

//                             <Text fontSize= "sm" color= "black.40">
//                                 {t.timestamp}
//                             </Text>
//                         </Stack>
//                          <Text textStyle= "h6">
//                                 {t.amount}
//                         </Text>
//                       </Flex>
//                    </Flex>
//                    </Fragment>
//                 ))
//             }
//         </Stack>
//     </CustomCard>
//   )
// }

// export default Transactions


import { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard.jsx";
import {
  Stack,
  Text,
  Icon,
  Flex,
  Grid,
  Divider,
  Button
} from "@chakra-ui/react";

import { BsCurrencyRupee } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2026-03-20 7:28 PM",
    },
    {
      id: "2",
      icon: FaBitcoin,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2026-03-22 12:34 AM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2026-03-20",
    },
  ];

  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.80" mb="6">
        Recent Transactions
      </Text>

      <Stack spacing={4}>
        {transactions.map((t, i) => (
          <Fragment key={t.id}>
            {i > 0 && <Divider />}

            <Flex gap={4}>
              <Grid
                boxSize={10}
                borderRadius="full"
                placeItems="center"
                bg="black.5"
              >
                <Icon as={t.icon} />
              </Grid>

              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{t.text}</Text>

                  <Text fontSize="sm" color="black.40">
                    {t.timestamp}
                  </Text>
                </Stack>

                <Text textStyle="h6">{t.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w = "full" colorScheme = "gray" mt= "9">View All</Button>
    </CustomCard>
  );
};

export default Transactions;