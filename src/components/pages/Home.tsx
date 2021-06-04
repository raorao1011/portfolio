import { Image } from "@chakra-ui/react";
import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import React, { VFC } from "react";

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
            <Text letterSpacing={5} fontSize="3xl">WELCOME TO MY PORTFOLIO.</Text>
          </Center>
        </Box>
      </Box>
    </>
  );
};
