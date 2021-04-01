import React, { Component } from "react";
import { Heading, Text, Box, Image, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

class ServiceCategories extends Component {
  // state = {
  //   student: {
  //     email: "",
  //     password: "",
  //   },
  // };

  render() {
    const { handleNextSection, data } = this.props;
    return (
      <Box height="100vh" background="#F9F9F9" textAlign="center">
        <Heading>Service Categories</Heading>
        <Text></Text>
        <VStack>
          <Box
            onClick={() =>
              handleNextSection(
                "ServiceCategories",
                "Commercial/office Cleaning"
              )
            }
            borderWidth="1px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderRadius="lg"
            width="50%"
            boxShadow="lg"
            mt="17px"
          >
            <Box margin="10px">
              <Image
                style={{ height: 70, width: 70 }}
                src="https://images.pexels.com/photos/5044106/pexels-photo-5044106.jpeg"
                alt={"card"}
              />
            </Box>
            <Text>Office Cleaning</Text>
            <ChevronRightIcon />
          </Box>
        </VStack>
      </Box>
    );
  }
}

export default ServiceCategories;










// import React, { Component } from "react";
// import { Heading, Text, Box, Image, VStack } from "@chakra-ui/react";
// import { ChevronRightIcon } from "@chakra-ui/icons";

// class ServiceCategories extends Component {
//   render() {
//     const { onClick } = this.props;
//     return (
//       <Box background="#F9F9F9" textAlign="center">
//         <Heading>Service Categories</Heading>
//         <Text>Pick a category to view services</Text>
//         <VStack>
//           {new Array(3).fill("yy").map((e) => (
//             <Box
//               onClick={onClick}
//               borderWidth="1px"
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//               borderRadius="lg"
//               width="50%"
//               boxShadow="lg"
//             >
//               <Box margin="10px">
//                 <Image
//                   style={{ height: 70, width: 70 }}
//                   src="https://images.pexels.com/photos/5044106/pexels-photo-5044106.jpeg"
//                   alt={"card"}
//                 />
//               </Box>
//               <Text>House/Apartment Cleaning</Text>
//               <ChevronRightIcon />
//             </Box>
//           ))}
//         </VStack>
//       </Box>
//     );
//   }
// }

// export default ServiceCategories;
