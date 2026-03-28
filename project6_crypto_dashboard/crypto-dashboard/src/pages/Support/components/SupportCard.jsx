import { Flex, Stack, Icon, Text, Card, HStack , FormControl, FormLabel, Input, Textarea , Checkbox, Box, Button} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

const SupportCard = ( { leftComponent , icon, title, text}) => {
  return (
    <Flex gap={6} flexDir={{
           base: "column",
           xl: "row"
       }}>
         <Stack maxW= "380px">
           <Icon as={icon} boxSize= {6} color= "p.purple" />
           <Text as="h1" textStyle="h1" fontWeight= "medium">{title}</Text>
   
           <Text fontSize="sm" color="black.60" textStyle="h6">
             {text}
           </Text>
   
         </Stack>

        <Box maxW="550px" w= "full" ml= "80px">
           {leftComponent}
        </Box>

    </Flex>
  )
};

export default SupportCard;
