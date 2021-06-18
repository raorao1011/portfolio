import React, { VFC } from "react";
import { Text, Heading, HStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
} from "@chakra-ui/react";
import { ListItem } from "@material-ui/core";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const WorksModal: VFC<Props> = (props) => {
  const { onClose, isOpen } = props;

  return (
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
  );
};
