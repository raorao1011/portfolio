import React, { useEffect, useState, VFC } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, Heading, HStack, SimpleGrid, Stack, Text, WrapItem } from "@chakra-ui/layout";
import htmlIcon from "../../img/html-5.svg";
import cssIcon from "../../img/css-3.svg";
import reactIcon from "../../img/react.svg";
import nextjsIcon from "../../img/nextjs.svg";
import reduxIcon from "../../img/redux.svg";
import typescriptIcon from "../../img/typescript-icon.svg";
import firebaseIcon from "../../img/firebase.svg";
import { flexbox, Skeleton } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/layout";
import { NONAME } from "dns";

export const Skills: VFC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [Image]);

  return (
    <>
      {/* <Box bgColor="#EEEEF0" justify="center" height="100vh" pt="18%" >
        <Box w="lg" height="30vh" p={5}>
          <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
            <Stack spacing="10px">
              <Heading size="3xl">Skills</Heading>
              <Divider />
              <Text fontSize="3xl">HTML / CSS / React / Next.js</Text>
              <Text fontSize="3xl">Redux / TypeScript / Firebase</Text>
            </Stack>
          </Skeleton>
        </Box>
        <Box w="xl">
          <Skeleton isLoaded={isLoaded} fadeDuration={1} justifyContent="center">
            <SimpleGrid spacing={10} columns={4}>
              <Image src={htmlIcon} />
              <Image src={cssIcon} />
              <Image src={reactIcon} />
              <Image src={nextjsIcon} />
              <Image src={typescriptIcon} />
              <Image src={reduxIcon} />
              <Image src={firebaseIcon} />
            </SimpleGrid>
          </Skeleton>
        </Box>
      </Box> */}
      <Wrap pt="18%" justify="center" bgColor="#EEEEF0" h="100vh" >
        <WrapItem w="lg" mb={{base: 0, md: "20px"}}>
          <Skeleton isLoaded={isLoaded} fadeDuration={0.8}>
            <Stack spacing="10px">
              <Heading size="3xl">Skills</Heading>
              <Divider />
              <Text fontSize="3xl">HTML / CSS / React / Next.js</Text>
              <Text fontSize="3xl">Redux / TypeScript / Firebase</Text>
            </Stack>
          </Skeleton>
        </WrapItem>
        <WrapItem w="xl">
          <Skeleton isLoaded={isLoaded} fadeDuration={1} justifyContent="center">
            <SimpleGrid spacing={10} columns={4}>
              <Image src={htmlIcon} />
              <Image src={cssIcon} />
              <Image src={reactIcon} />
              <Image src={nextjsIcon} />
              <Image src={typescriptIcon} />
              <Image src={reduxIcon} />
              <Image src={firebaseIcon} />
            </SimpleGrid>
          </Skeleton>
        </WrapItem>
      </Wrap>
    </>
  );
};
