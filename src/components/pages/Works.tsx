import React, { useEffect, useState, VFC } from "react";
import { Img } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  Skeleton,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import portfolioImage from "../../img/portfolio.png";

export const Works: VFC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [portfolioImage]);

  return (
    <>
      <Center pt="30" bgColor="#EEEEF0" height="100vh">
        <Wrap justify="center" spacing="45px">
          <WrapItem w="md" h="sm" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer" }}>
            <Skeleton isLoaded={isLoaded} fadeDuration={1}>
              <Stack textAlign="center" spacing={4}>
                <Box borderWidth="1px" bg="white">
                  <Img src={portfolioImage} w="md" alt="portfolio_image" m="auto" />
                </Box>
                <Heading as="h2">Portfolio</Heading>
                <Button colorScheme="teal" size="sm" onClick={onOpen} onClose={onClose}>
                  Detail
                </Button>
              </Stack>
            </Skeleton>
          </WrapItem>
          <WrapItem w="md" h="sm" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer" }}>
            <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
              <Stack textAlign="center" spacing={4}>
                <Box borderWidth="1px" borderColor="gray.200">
                  <Img src={portfolioImage} w="md" alt="portfolio_image" m="auto" borderRadius="4px" />
                </Box>
                <Heading as="h2">Portfolio</Heading>
                <Button colorScheme="teal" size="sm">
                  Detail
                </Button>
              </Stack>
            </Skeleton>
          </WrapItem>
          <WrapItem w="md" h="sm" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer" }}>
            <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
              <Stack textAlign="center" spacing={4}>
                <Box borderWidth="1px" borderColor="gray.200">
                  <Img src={portfolioImage} w="md" alt="portfolio_image" m="auto" />
                </Box>
                <Heading as="h2">Portfolio</Heading>
                <Button colorScheme="teal" size="sm">
                  Detail
                </Button>
              </Stack>
            </Skeleton>
          </WrapItem>
        </Wrap>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
