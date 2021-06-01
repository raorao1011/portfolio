import React, { VFC } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import htmlIcon from "../../img/html-5.svg"
import cssIcon from "../../img/css-3.svg"
import reactIcon from "../../img/react.svg"
import nextjsIcon from "../../img/nextjs.svg"
import reduxIcon from "../../img/redux.svg"
import typescriptIcon from "../../img/typescript-icon.svg"
import firebaseIcon from "../../img/firebase.svg"

export const Skills: VFC = () => {
  return (
    <>
      <Flex pt={300}>
        <Box>
          <Heading>Skills</Heading>
          <Stack>
            <Text>HTML / CSS / React / Next.js</Text>
            <Text>Redux / TypeScript / FireBase</Text>
          </Stack>
        </Box>
        <Box>
          <SimpleGrid spacing={40}>
            <Image src={htmlIcon} />
            <Image src={cssIcon} />
            <Image src={reactIcon} />
            <Image src={nextjsIcon} />
            <Image src={reduxIcon} />
            <Image src={typescriptIcon} />
            <Image src={firebaseIcon} />
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};
