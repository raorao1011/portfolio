import React, { VFC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickSkills: () => void;
  onClickWorks: () => void;
  onClickContact: () => void;
};

export const HeaderDrawer: VFC<Props> = (props) => {
  const { onClose, isOpen, onClickHome, onClickSkills, onClickWorks, onClickContact } = props;

  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody p={0} bg="">
            <Button w="100%" onClick={onClickHome}>
              HOME
            </Button>
            <Button w="100%" onClick={onClickSkills}>
              SKILLS
            </Button>
            <Button w="100%" onClick={onClickWorks}>
              WORKS
            </Button>
            <Button w="100%" onClick={onClickContact}>
              CONTACT
            </Button>
            <Button w="100%">
              <Link href="https://github.com/raorao1011" isExternal>
                GitHub <ExternalLinkIcon mx="2px" />
              </Link>
            </Button>
            <Button w="100%">
              <Link href="https://twitter.com/mth_rao" isExternal>
                Twitter <ExternalLinkIcon mx="2px" />
              </Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
