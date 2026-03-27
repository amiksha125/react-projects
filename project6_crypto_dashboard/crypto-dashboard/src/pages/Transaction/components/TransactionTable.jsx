import React from 'react'
import {Table, TableContainer, Thead, Tbody, Tfoot, TableCaption, Td , Tr, Th, Stack, Text, Tag} from "@chakra-ui/react"

const TransactionTable = () => {

    const data = [
        {
            id: "HD82NA2H",
            date: "2026-01-22",
            time: "07:00 AM",
            type: {
                name: "INR Deposite",
                tag: "E-Transfer"
            },
            amount: "₹ 81,580",
            status: "pending"
        },
        {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
    ]

      const statusColor = {
       pending: "#797E82",
       processing: "#F5A50B",
       completed: "#059669",
       cancelled: "#DC2626",
  };

  return (
    <TableContainer>
        <Table varient = "simple" colorScheme='gray'>
          <Thead>
            <Tr>
                <Th>ID</Th>
                <Th>Date & Time</Th>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody color="p.black">
            {
                data.map((d) => (
                    <Tr  >
                        <Td fontSize="sm" fontWeight="medium">{d.id}</Td>
                        <Td>
                            <Stack spacing={0}>
                                <Text fontSize="sm" fontWeight="medium">{d.date}</Text>
                                <Text  fontSize="xs" color="black.60">{d.time}</Text>
                            </Stack>
                        </Td>
                        <Td>
                            <Stack spacing={0}>
                                <Text fontSize="sm" fontWeight="medium">{d.type.name}</Text>
                                <Text fontSize="xs" color="black.60">{d.type?.tag}</Text>
                            </Stack>
                        </Td>
                        <Td fontSize="sm" fontWeight="medium">{d.amount}</Td>
                        <Td fontSize="sm" fontWeight="medium">
                            <Tag bg = {statusColor[d.status]} color="white" borderRadius= "full" >
                                {d.status}
                            </Tag>
                        </Td>
                    </Tr>
                ))
            }
          </Tbody>
        </Table>
    </TableContainer>
  )
}

export default TransactionTable