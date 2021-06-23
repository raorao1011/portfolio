import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Box, Flex, Stack, Heading, useToast, Divider } from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";
import { VFC } from "react";

type FormData = {
  name: string;
  email: string;
  contents: string;
};

export const Contact: VFC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    mode: "onSubmit",
  });
  const toast = useToast();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const SendMessageToSlack = (data: FormData) => {
    const payload = {
      text: `お名前：${data.name}\nメールアドレス：${data.email}\n内容：${data.contents}`,
    };
    const url = process.env.REACT_APP_SLACK_WEBHOOK_URL;

    fetch(url!, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  };

  const onSubmitForm = (data: FormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        SendMessageToSlack(data);
        toast({
          title: "送信完了",
          description: "管理者からの返信をお待ちください。",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        resolve(false);
      }, 2000);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [Image]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      style={{ paddingTop: "13%", backgroundColor: "#EEEEF0", height: "100vh" }}
    >
      <Flex justify="center" textAlign="center">
        <Box w="xl" p={6} borderRadius="10px" boxShadow="md" bg="white">
          <Stack spacing={5}>
            <Heading fontSize={30}>CONTACT</Heading>
            <Divider />
            <FormControl id="name" isInvalid={!!errors.name}>
              <FormLabel>お名前(必須)</FormLabel>
              <Input placeholder="山田  太郎" {...register("name", { required: true })} />
              <FormErrorMessage>{errors.name && "お名前を入力してください"}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>メールアドレス(必須)</FormLabel>
              <Input placeholder="test@example.com" {...register("email", { required: true })} />
              <FormErrorMessage>{errors.email && "メールアドレスを入力してください"}</FormErrorMessage>
            </FormControl>
            <FormControl id="contents" isInvalid={!!errors.contents}>
              <FormLabel>お問い合わせ内容(必須)</FormLabel>
              <Input placeholder="例） こんにちは" {...register("contents", { required: true })} />
              <FormErrorMessage>{errors.contents && "お問い合わせ内容を入力してください"}</FormErrorMessage>
            </FormControl>
          </Stack>
          <Button
            mt={8}
            w="xs"
            colorScheme="teal"
            loadingText="送信中"
            isLoading={isSubmitting}
            type="submit"
          >
            送信
          </Button>
        </Box>
      </Flex>
    </form>
  );
};
