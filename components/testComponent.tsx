import React from "react";
import { Box } from "@chakra-ui/react";

const TestComponent = ({ children }) => {
  return (
    <Box>
      Layout
      {children}
    </Box>
  );
};

export default TestComponent;
