import * as React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Box, Flex, Stack, Heading } from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";

type FormData = {
  name: string;
  email: string;
  contents: string;
};

export function Contact() {
  //
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
  });

  function onSubmit(values: any) {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 1000);
    });
  }

  return (
    <>
      <Heading as="h1" mt={1 / 10} fontSize="3xl">
        CONTACT
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: "15%" }}>
        <Flex justify="center" textAlign="center">
          <Box w="lg" p={4} borderRadius="md" shadow="md" bg="gray.50">
            <Stack spacing={4}>
              <FormControl id="name" isInvalid={!!errors.name}>
                <FormLabel>お名前(必須)</FormLabel>
                <Input placeholder="山田  太郎" {...register("name", { required: true })} />
                <FormErrorMessage>{errors.name && "お名前を入力してください"}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={!!errors.email}>
                <FormLabel>メールアドレス(必須)</FormLabel>
                <Input placeholder="test@example.com" {...register("email", { required: true })} />
                <FormErrorMessage>
                  {errors.email && "メールアドレスを入力してください"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="contents" isInvalid={!!errors.contents}>
                <FormLabel>お問い合わせ内容(必須)</FormLabel>
                <Input
                  placeholder="例） こんにちは"
                  {...register("contents", { required: true })}
                />
                <FormErrorMessage>
                  {errors.contents && "お問い合わせ内容を入力してください"}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Button
              mt={4}
              colorScheme="teal"
              loadingText="送信中"
              isLoading={formState.isSubmitting}
              type="submit"
            >
              送信
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
}
