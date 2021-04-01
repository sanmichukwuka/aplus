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

export default function NumberOfBathRooms({ handleNextSection }) {
  const [value, setValue] = React.useState("1");
  console.log({ value });
  return (
    <Container py={6}>
      <Heading mb="10px" textAlign="center">
        NUMBER OF BATHROOMS{" "}
      </Heading>
      <Box
        maxW={"600px"}
        w={"full"}
        border=".5px solid #00000033"
        rounded={"lg"}
        p="15px 0px"
        textAlign={"center"}
      >
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="column">
            <Radio value="1">1 </Radio>
            <Divider />
            <Radio value="2">2 </Radio>
            <Divider />
            <Radio value="3">3 </Radio>
            <Divider />
            <Radio value="4">4 </Radio>
            <Divider />
            <Radio value="5">5 </Radio>
            <Divider />
            <Radio value="6">6 </Radio>
            <Text pl="35px" textAlign="start">
              Call 512-934-1967 for an accurate rate
            </Text>
            <Divider />
            <Radio value="7">7 </Radio>
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
























// import React from "react";
// import {
//   Heading,
//   Box,
//   Text,
//   useColorModeValue,
//   RadioGroup,
//   Radio,
//   Stack,
//   Container,
//   Divider,
//   Button,
// } from "@chakra-ui/react";

// export default function NumberOfRooms({ handleNextSection }) {
//   const [value, setValue] = React.useState("1");

//   return (
//     <Container py={6}>
//       <Heading mb="10px" textAlign="center">
//         Number of Bedrooms
//       </Heading>
//       <Box
//         maxW={"600px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.900")}
//         border=".5px solid #00000033"
//         rounded={"lg"}
//         p="15px 0px"
//         textAlign={"center"}
//       >
//         <RadioGroup onChange={setValue} value={value}>
//           <Stack direction="column">
//             <Radio value="studio">Studio</Radio>
//             <Divider />
//             <Radio value="1">1 Bedroom</Radio>
//             <Divider />
//             <Radio value="2">2 Bedroom</Radio>
//             <Divider />
//             <Radio value="3">3 Bedroom</Radio>
//             <Divider />
//             <Radio value="4">4 Bedroom</Radio>
//             <Divider />
//             <Radio value="5">5 Bedroom</Radio>
//             <Divider />
//             <Radio value="6">6 Bedroom</Radio>
//             <Text pl="35px" textAlign="start">
//               Call 512-934-1967 for an accurate rate
//             </Text>
//             <Divider />
//             <Radio value="7">7 Bedroom</Radio>
//             <Text pl="35px" textAlign="start">
//               Call 512-934-1967 for an accurate rate
//             </Text>{" "}
//           </Stack>
//         </RadioGroup>
//       </Box>
//       <Box mt="10px" textAlign="center">
//         {" "}
//         <Button onClick={handleNextSection} colorScheme="blue">
//           Next
//         </Button>
//       </Box>
//     </Container>
//   );
// }
