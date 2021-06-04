import React, { VFC } from "react";
import { Img } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import portfolioImage from "../../img/portfolio.png";
import { Button } from "@chakra-ui/button";

export const Works: VFC = () => {
  return (
    <>
      <Center pt="30" bgColor="#EEEEF0" height="100vh">
        <Wrap justify="center" spacing="45px">
          <WrapItem
            w="md"
            h="sm"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer" }}
          >
            <Stack textAlign="center" spacing={4}>
              <Box borderWidth="1px" borderColor="gray.200">
                <Img
                  src={portfolioImage}
                  w="md"
                  alt="portfolio_image"
                  m="auto"
                />
              </Box>
              <Heading as="h2">Portfolio</Heading>
              <Button colorScheme="teal" size="sm">
                Detail
              </Button>
            </Stack>
          </WrapItem>
          <WrapItem
            w="md"
            h="sm"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer" }}
          >
            <Stack textAlign="center" spacing={4}>
              <Box borderWidth="1px" borderColor="gray.200">
                <Img
                  src={portfolioImage}
                  w="md"
                  alt="portfolio_image"
                  m="auto"
                  borderRadius="4px"
                />
              </Box>
              <Heading as="h2">Portfolio</Heading>
              <Button colorScheme="teal" size="sm">
                Detail
              </Button>
            </Stack>
          </WrapItem>
          <WrapItem
            w="md"
            h="sm"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer" }}
          >
            <Stack textAlign="center" spacing={4}>
              <Box borderWidth="1px" borderColor="gray.200">
                <Img
                  src={portfolioImage}
                  w="md"
                  alt="portfolio_image"
                  m="auto"
                />
              </Box>
              <Heading as="h2">Portfolio</Heading>
              <Button colorScheme="teal" size="sm">
                Detail
              </Button>
            </Stack>
          </WrapItem>
        </Wrap>
      </Center>
    </>
  );
};
