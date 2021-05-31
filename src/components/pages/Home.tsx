import { Image } from "@chakra-ui/react";
import { Box, Center, Heading } from "@chakra-ui/layout";
import React, { VFC } from "react";

export const Home: VFC = () => {
  return (
    <>
      <Box
        bgImage="url('https://source.unsplash.com/nvzvOPQW0gc')"
        bgSize="cover"
      >
        <Box height="100vh">
          <Center as="h1" >
            WELCOME TO MY PORTFOLIO.
          </Center>
        </Box>
      </Box>
    </>
  );
};
