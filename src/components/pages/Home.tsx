import React, { VFC } from "react";
import { Box, Center, Text } from "@chakra-ui/layout";

export const Home: VFC = () => {
  return (
    <>
      <Box
        bgImage="url('https://source.unsplash.com/nvzvOPQW0gc')"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      >
        <Box height="100vh">
          <Center as="h1" height="100%" >
            <Text letterSpacing={5} fontSize="3xl" textAlign="center">WELCOME TO MY PORTFOLIO.</Text>
          </Center>
        </Box>
      </Box>
    </>
  );
};
