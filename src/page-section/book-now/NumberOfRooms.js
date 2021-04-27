import React from "react";
import {
  Heading,
  Box,
  Text,
  useColorModeValue,
  RadioGroup,
  Radio,
  Stack,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

export default function NumberOfRooms({ handleNextSection }) {
  const [value, setValue] = React.useState("1");

  return (
    <Container py={6}>
      <Heading mb="10px" textAlign="center">
        Number of Bedrooms
      </Heading>
      <Box
        maxW={"600px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        border=".5px solid #00000033"
        rounded={"lg"}
        p="15px 0px"
        textAlign={"center"}
      >
        <RadioGroup
          onChange={(value) => handleNextSection("NumberOfRooms", value)}
          value={value}
        >
          <Stack direction="column">
            <Radio value="studio">Up-to-1000 sqft</Radio>
            <Divider />
            <Radio value="1">Up-to-1500 sqft</Radio>
            <Divider />
            <Radio value="2">Up-to-2000 sqft</Radio>
            <Divider />
            <Radio value="3">Up-to-3000 sqft</Radio>
            <Divider />
            <Radio value="4">Up-to-4000 sqft</Radio>
            <Divider />
            <Radio value="5">Up-to-5000 sqft</Radio>
            <Divider />
            <Radio value="6">Up-to-6000 sqft</Radio>
            <Text pl="35px" textAlign="start">
              Call 512-934-1967 for an accurate rate
            </Text>
            <Divider />
            <Radio value="7">Up-to-7000 sqft</Radio>
            <Text pl="35px" textAlign="start">
              Call 512-934-1967 for an accurate rate
            </Text>{" "}
          </Stack>
        </RadioGroup>
      </Box>
      <Box mt="10px" textAlign="center">
        {" "}
        <Button onClick={handleNextSection} colorScheme="blue">
          Next
        </Button>
      </Box>
    </Container>
  );
}

