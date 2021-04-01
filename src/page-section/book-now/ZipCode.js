import React, { useState } from "react";
import {
  Heading,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  InputRightAddon,
  Stack,
  Box,
} from "@chakra-ui/react";
import { BiLocationPlus } from "react-icons/bi";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ZipCode({ handleNextSection, data }) {
  const [zipCode, setZipCode] = useState(data.zipCode);

  const onTextChange = (event) => {
    setZipCode(event.target.value);
    if (event.keyCode === 13) return handleNextSection("zipCode", zipCode);
    console.log(event.keyCode);
  };

  return (
    <div>
      <Heading textAlign="center">Book Online</Heading>
      <Text color="blackAlpha.500" textAlign="center">
        Let's get started by entering your ZIP code.
      </Text>
      <Box display="flex" justifyContent="center">
        <Box width="15%">
          <InputGroup boxShadow="xs" margin="10px" size="sm">
            <InputLeftElement
              pointer="true"
              events="none"
              children={<BiLocationPlus color="gray.300" />}
            />
            <Input
             value={zipCode}
              name="ZIP Code"
              type="number"
              placeholder="ZIP CODE"
              onChange={onTextChange}
              onKeyDown={onTextChange}
            />
            <InputRightAddon
              children={
                <ChevronRightIcon
                  onClick={() => handleNextSection("zipCode", zipCode)}
                />
              }
            />
          </InputGroup>
        </Box>
      </Box>
    </div>
  );
}






































// import React, { useState } from "react";
// import {
//   Heading,
//   Text,
//   Input,
//   InputLeftElement,
//   InputGroup,
//   InputRightAddon,
//   Stack,
//   Box,
// } from "@chakra-ui/react";
// import { BiLocationPlus } from "react-icons/bi";
// import { ChevronRightIcon } from "@chakra-ui/icons";

// export default function ZipCode({ onChange }) {
//   const [zipCode, setZipCode] = useState("");

//   const onTextChange = (event) => {
//     setZipCode(event.target.value);
//     console.log({ event: event.keyCode });
//     if (event.keyCode === 13) return onChange();
//   };

//   return (
//     <div>
//       <Heading textAlign="center">Book Online</Heading>
//       <Text color="blackAlpha.500" textAlign="center">
//         Let's get started by entering your ZIP code.
//       </Text>
//       <Box display="flex" justifyContent="center">
//         <Box width="15%">
//           <InputGroup boxShadow="xs" margin="10px" size="sm">
//             <InputLeftElement
//               pointer="true"
//               events="none"
//               children={<BiLocationPlus color="gray.300" />}
//             />
//             <Input
//               name="ZIP Code"
//               type="number"
//               placeholder="ZIP CODE"
//               onChange={onTextChange}
//               onKeyDown={onTextChange}
//             />
//             <InputRightAddon children={<ChevronRightIcon />} />
//           </InputGroup>
//         </Box>
//       </Box>
//     </div>
//   );
// }

