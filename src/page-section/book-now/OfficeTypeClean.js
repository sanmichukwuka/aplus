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

export default function OfficeTypeClean({ handleNextSection, data }) {
  const [officeTypeClean, setOfficeTypeClean] = React.useState(data.officeTypeClean);

  const onTextChange = (value) => {
    // setSquareFeet(value);
    // displayAggregatePrice(value);
    // handleNextSection("howOften", value);
    // if (event.keyCode === 13) return handleNextSection("zipCode", zipCode);
    // console.log(event.keyCode);
  };


  return (
    <Container py={6}>
      <Heading mb="10px" textAlign="center">
        Select Cleaning Service option
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
          value={officeTypeClean}
        >
          <Stack direction="column">
            <Radio value="OFFICE_CLEANING" > OFFICE CLEANING </Radio>
            <Divider />
            <Radio value="POST_CONSTRUCTION"> POST CONSTRUCTION </Radio>
            <Divider />
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
// import { Heading, Box, Text, HStack, Image } from "@chakra-ui/react";

// export default function SelectService({ handleNextSection }) {
//   return (
//     <Box textAlign="center">
//       <Heading>Service Service</Heading>
//       <HStack mb="10px" justifyContent="center">
//         {[2, 5, 5].map((e) => (
//           <Box
//             borderWidth="1px"
//             textAlign="center"
//             borderRadius="lg"
//             width="20%"
//             boxShadow="lg"
//             onClick={handleNextSection}
//           >
//             <Box margin="40px">
//               <Image
//                 height="130px"
//                 objectFit="cover"
//                 width="100%"
//                 src="https://images.pexels.com/photos/5044106/pexels-photo-5044106.jpeg"
//                 alt={"card"}
//               />
//             </Box>
//             <Box
//               padding="15px"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Text>Standard Cleaning</Text>
//             </Box>
//           </Box>
//         ))}
//       </HStack>
//       <HStack mb="10px" justifyContent="center">
//         {[2, 5, 5].map((e) => (
//           <Box
//             borderWidth="1px"
//             textAlign="center"
//             borderRadius="lg"
//             width="20%"
//             boxShadow="lg"
//             onClick={handleNextSection}
//           >
//             <Box margin="40px">
//               <Image
//                 height="130px"
//                 objectFit="cover"
//                 width="100%"
//                 src="https://images.pexels.com/photos/5044106/pexels-photo-5044106.jpeg"
//                 alt={"card"}
//               />
//             </Box>
//             <Box
//               padding="15px"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Text>Standard Cleaning</Text>
//             </Box>
//           </Box>
//         ))}
//       </HStack>
//     </Box>
//   );
// }
