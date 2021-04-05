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

export default function SquareFeet({ handleNextSection, data }) {
  const [squareFeet, setSquareFeet] = React.useState(data.squareFeet);

  const onTextChange = (value) => {
    handleNextSection("squareFeet", value);
  };


  return (
    <Container py={6}>
      <Heading mb="10px" textAlign="center">
         Select your corresponding Square Feet
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
          onChange={onTextChange}
          value={squareFeet}
        >
          <Stack direction="column">
            <Radio value="UP_TO_1000" >UP_TO_1000</Radio>
            <Divider />
            <Radio value="UP_TO_1500">UP_To_1500</Radio>
            <Divider />
            <Radio value="UP_TO_2000">Up_To_2000</Radio>
            <Divider />
            <Radio value="UP_TO_3000">UP_TO_3000</Radio>
            <Divider />
            <Radio value="UP_TO_4000">UP_TO_4000</Radio>
            <Divider />
            <Radio value="UP_TO_5000">UP_TO_5000</Radio>
            <Divider />
            <Radio value="UP_TO_6000">UP_TO_6000</Radio>
            <Text pl="35px" textAlign="start">
              Call 701-306-3660 for an accurate rate
            </Text>
            <Divider />
            <Radio value="OTHER">Up_to_7000</Radio>
            <Text pl="35px" textAlign="start">
              Call 701-306-3660 for an accurate rate
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











