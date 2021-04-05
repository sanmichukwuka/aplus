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

export default function HowOften({ handleNextSection, data, displayAggregatePrice }) {
  const [howOften, setHowOften] = React.useState(data.howOften);

  const onTextChange = (value) => {
    displayAggregatePrice(value);
  };


  return (
    <Container py={6}>
      <Heading mb="10px" textAlign="center">
        HOW OFTEN
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
          value={howOften}
        >
          <Stack direction="column">
            <Radio value="ONE_TIME" >ONE_TIME</Radio>
            <Divider />
            <Radio value="WEEKLY">WEEKLY</Radio>
            <Divider />
            <Radio value="TWO_WEEKS">TWO_WEEKS</Radio>
            <Divider />
            <Radio value="FOUR_WEEKS">FOUR_WEEKS</Radio>
            <Divider />
            <Radio value="SIX_WEEKS">SIX_WEEKS</Radio>
            <Divider />
            <Radio value="EIGHT_WEEKS">EIGHT_WEEKS</Radio>
            <Divider />
            <Radio value="EVERY_QUARTER">EVERY_QUARTER</Radio>
            <Text pl="35px" textAlign="start">
              Call 512-934-1967 for an accurate rate
            </Text>
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
//   RadioGroup,
//   Radio,
//   Stack,
//   Container,
//   Divider,
//   Button,
// } from "@chakra-ui/react";

// const howOften = [
//   "ONE_TIME",
//   "WEEKLY",
//   "TWO_WEEKS",
//   "FOUR_WEEKS",
//   "SIX_WEEKS",
//   "EIGHT_WEEKS",
//   "EVERY_QUARTER",
//   // "Every 12 Weeks",
// ];

// export default function HowOffen({ handleNextSection }) {
//   // const [value, setValue] = React.useState("1");
//   const [howOften, setHowOften] = React.useState(data.howOften);
//   console.log({ value });
//   return (
//     <Container py={6}>
//       <Heading mb="10px" textAlign="center">
//         How Often?
//       </Heading>

//       <RadioGroup onChange={setHowOften} value={howOften}>
//         <Stack direction="column">
//           {howOften.map((e) => (
//             <Box
//               maxW={"600px"}
//               w={"full"}
//               border=".5px solid #00000033"
//               rounded={"lg"}
//               p="15px 0px"
//               textAlign={"start"}
//             >
//               <Radio value={e}>{e} </Radio>
//             </Box>
//           ))}
//         </Stack>
//       </RadioGroup>

//       <Box mt="10px" textAlign="center">
//         {" "}
//         <Button onClick={handleNextSection} colorScheme="blue">
//           Next
//         </Button>
//       </Box>
//     </Container>
//   );
// }



















// import React from "react";
// import {
//   Heading,
//   Box,
//   Text,
//   RadioGroup,
//   Radio,
//   Stack,
//   Container,
//   Divider,
//   Button,
// } from "@chakra-ui/react";

// const howOften = [
//   "One Time",
//   "Weekly",
//   "Every 2 Weeks",
//   "Every 3 Weeks",
//   "Every 4 Weeks",
//   "Every 8 Weeks",
//   "Every 10 Weeks",
//   "Every 12 Weeks",
// ];

// export default function HowOffen({ handleNextSection }) {
//   const [value, setValue] = React.useState("1");
//   console.log({ value });
//   return (
//     <Container py={6}>
//       <Heading mb="10px" textAlign="center">
//         How Often?
//       </Heading>

//       <RadioGroup onChange={setValue} value={value}>
//         <Stack direction="column">
//           {howOften.map((e) => (
//             <Box
//               maxW={"600px"}
//               w={"full"}
//               border=".5px solid #00000033"
//               rounded={"lg"}
//               p="15px 0px"
//               textAlign={"start"}
//             >
//               <Radio value={e}>{e} </Radio>
//             </Box>
//           ))}
//         </Stack>
//       </RadioGroup>

//       <Box mt="10px" textAlign="center">
//         {" "}
//         <Button onClick={handleNextSection} colorScheme="blue">
//           Next
//         </Button>
//       </Box>
//     </Container>
//   );
// }
