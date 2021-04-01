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

export default function AddTip({ handleNextSection, data }) {
  const [addTip, setAddTip] = useState(data.addTip);

  const onTextChange = (event) => {
    setAddTip(event.target.value);
    if (event.keyCode === 13) return handleNextSection("addTip", addTip);
    console.log(event.keyCode);
  };

  return (
    <div>
      <Heading textAlign="center">Book Online</Heading>
      <Text color="blackAlpha.500" textAlign="center">
        Adding Tip is Optional, press Enter or the return button to skip.
      </Text>
      <Box display="flex" justifyContent="center">
        <Box width="15%">
          <InputGroup boxShadow="xs" margin="10px" size="sm">
            {/* <InputLeftElement
              pointer="true"
              events="none"
              children={<BiLocationPlus color="gray.300" />}
            /> */}
            <Input
             value={addTip}
              name="add Tip"
              type="number"
              placeholder="Press Enter, return or the arrow if you do not want to"
              onChange={onTextChange}
              onKeyDown={onTextChange}
            />
            <InputRightAddon
              children={
                <ChevronRightIcon
                  onClick={() => handleNextSection("addTip", addTip)}
                />
              }
            /> 
          </InputGroup>
        </Box>
      </Box>
    </div>
  );
}