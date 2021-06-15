import React, { useCallback, useEffect, useState, VFC } from "react";
import { Img } from "@chakra-ui/image";
import { Box, Center, Heading, Stack, Wrap, WrapItem, Text, HStack } from "@chakra-ui/layout";
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
  UnorderedList,
} from "@chakra-ui/react";
import { ListItem } from "@material-ui/core";
import portfolioImage from "../../img/portfolio.png";
import { useHistory } from "react-router-dom";

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
    <>
      <Center pt="30" bgColor="#EEEEF0" height="100vh">
        <Wrap justify="center" spacing="45px">
          <WrapItem w="md" h="sm" borderRadius="10px" shadow="md" p={4} bgColor="white">
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
          <WrapItem w="md" h="sm" borderRadius="10px" shadow="md" p={4} bgColor="white" justify="center">
            <Stack textAlign="center" spacing={4} w="md">
              <Center borderWidth="1px" bg="white" h="235px">
                <Text fontSize="2xl">Coming soon</Text>
              </Center>
              <Heading as="h2">Coming soon...</Heading>
              <Button colorScheme="teal" size="sm" _hover={{cursor: "default"}}>
                詳細
              </Button>
            </Stack>
          </WrapItem>
          <WrapItem w="md" h="sm" borderRadius="10px" shadow="md" p={4} bgColor="white" justify="center">
            <Stack textAlign="center" spacing={4} w="md">
              <Center borderWidth="1px"  bg="white" h="235px">
                <Text fontSize="2xl">Coming soon</Text>
              </Center>
              <Heading as="h2">Coming soon...</Heading>
              <Button colorScheme="teal" size="sm" _hover={{cursor: "default"}}>
                詳細
              </Button>
            </Stack>
          </WrapItem>
        </Wrap>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader>Portfolio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text pb="10px">
              ポートフォリオサイトです。アウトプットする習慣を身に付けるために作成した最初のWEBアプリケーションです。
            </Text>
            <Heading fontSize="md">仕様技術</Heading>
            <UnorderedList>
              <HStack>
                <ListItem>React</ListItem>
                <ListItem>Chakra UI</ListItem>
                <ListItem>TypeScript</ListItem>
              </HStack>
            </UnorderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
