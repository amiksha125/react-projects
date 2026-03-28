import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (


      <Card p = {6} borderRadius= "1rem" flexGrow={1} mr="20px">
        <Stack spacing={6}>
             <Text fontSize="sm" color="black.60">
  You will receive response within 24 hours of time of submit
</Text>


        <HStack flexDir={{
        base: "column",
        md: "row"
    }}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter your name.." />
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter your last name.." />
            </FormControl>
            
        </HStack>

        <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type = "email"  placeholder="Enter your email.."/>
        </FormControl>

        <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea type = "email"  placeholder="Enter your message.."/>
        </FormControl>

        <Checkbox defaultChecked >
            <Text fontSize= "xs">
                 I agree with 
                <Box as= "span" color= "p.purple" >
                    {" "}
               Terms & Conditions.
                </Box>
            </Text>
        </Checkbox>


        {/* Buttons */}
        <Stack>
            <Button fontSize= "sm"> Send a Message</Button>
            <Button fontSize= "sm" colorScheme = "gray"> Book a Meeting</Button>
        </Stack>
        </Stack>
      </Card>
   
  );
};

export default ContactCard;



