import React, { useCallback, useEffect, useState, VFC } from "react";
import { useHistory } from "react-router-dom";
import { Img } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Wrap, WrapItem, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/react";
import portfolioImage from "../../img/portfolio.png";
import { WorksModal } from "../molecules/WorksModal";

export const Works: VFC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickPortfolio = useCallback(() => {
    history.push("/");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [portfolioImage]);

  return (
    <div>
      <Box bgColor="#EEEEF0" pt="15%" style={{ height: "100vh" }}>
        <Wrap justify="center" alignItems="center" w="100%" p={4}>
          <WrapItem
            // w="md"
            h="auto"
            borderRadius="10px"
            shadow="md"
            p={4}
            bgColor="white"
            w={{ base: "100%", xs: "85%" }}
          >
            <Stack textAlign="center" spacing={4}>
              <Box borderWidth="1px" bg="white" onClick={onClickPortfolio} _hover={{ cursor: "pointer" }}>
                <Img src={portfolioImage} w="md" alt="portfolio_image" m="auto" />
              </Box>
              <Heading as="h2">Portfolio</Heading>
              <Button colorScheme="teal" size="sm" onClick={onOpen} onClose={onClose}>
                詳細
              </Button>
            </Stack>
          </WrapItem>
          {/* <WrapItem
            // w="md"
            h="sm"
            borderRadius="10px"
            shadow="md"
            p={4}
            bgColor="white"
            justify="center"
            w={{ base: "100%", xs: "85%" }}
          >
            <Stack textAlign="center" spacing={4}>
              <Center borderWidth="1px" bg="white" h="235px">
                <Text fontSize="2xl">Coming soon</Text>
              </Center>
              <Heading as="h2" w="md">Coming soon...</Heading>
              <Button colorScheme="teal" size="sm" _hover={{ cursor: "default" }}>
                詳細
              </Button>
            </Stack>
          </WrapItem>
          <WrapItem
            // w="md"
            h="sm"
            borderRadius="10px"
            shadow="md"
            p={4}
            bgColor="white"
            justify="center"
            w={{ base: "100%", xs: "85%" }}
          >
            <Stack textAlign="center" spacing={4} >
              <Center borderWidth="1px" bg="white" h="235px">
                <Text fontSize="2xl">Coming soon</Text>
              </Center>
              <Heading as="h2" w="md">Coming soon...</Heading>
              <Button colorScheme="teal" size="sm" _hover={{ cursor: "default" }}>
                詳細
              </Button>
            </Stack>
          </WrapItem> */}
        </Wrap>
      </Box>

      <WorksModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
};
