import React, { useCallback, VFC } from "react";
import { Box, Center, Flex, Heading, Link } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useHistory } from "react-router";

export const Header: VFC = () => {
  // chakra uiのカスタムフック onOpenとか便利なのたくさんある
  const { onOpen, isOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push("/");
  }, []);

  const onClickProfile = useCallback(() => {
    history.push("/skills");
  }, []);

  const onClickWorks = useCallback(() => {
    history.push("/works");
  }, []);

  const onClickContact = useCallback(() => {
    history.push("/contact");
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.400"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 4 }}
        boxShadow="xl"
        position="fixed"
        w="100%"
      >
        <Flex
          as="a"
          _hover={{ cursor: "pointer", opacity: "0.9" }}
          ml={10}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "xl", md: 25 }}>
            PORTFOLIO
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize={{ base: 20, md: 25 }}
          display={{ base: "none", md: "flex" }}
          mr={10}
        >
          <Box
            pr={4}
            _hover={{ cursor: "pointer", opacity: "0.9" }}
            fontSize="md"
          >
            <Link onClick={onClickHome}>HOME</Link>
          </Box>
          <Box
            pr={4}
            _hover={{ cursor: "pointer", opacity: "0.9" }}
            fontSize="md"
          >
            <Link onClick={onClickProfile}>PROFILE</Link>
          </Box>
          <Box
            pr={4}
            _hover={{ cursor: "pointer", opacity: "0.9" }}
            fontSize="md"
          >
            <Link onClick={onClickWorks}>WORKS</Link>
          </Box>
          <Box
            pr={4}
            _hover={{ cursor: "pointer", opacity: "0.9" }}
            fontSize="md"
          >
            <Link onClick={onClickContact}>CONTACT</Link>
          </Box>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
      </Flex>
      {/* placememntはどこからドロワーを出現させるか */}
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            {/* DrawerBodyにはpが初期設定されている */}
            <DrawerBody p={0} bg="">
              <Button w="100%" onClick={onClickHome}>
                HOME
              </Button>
              <Button w="100%" onClick={onClickProfile}>
                PROFILE
              </Button>
              <Button w="100%" onClick={onClickWorks}>
                WORKS
              </Button>
              <Button w="100%" onClick={onClickContact}>
                CONTACT
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
