import * as React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Box, Flex, Stack, Heading } from "@chakra-ui/react";
import { FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/react";

// 入力する値の型定義
type FormData = {
  name: string;
  email: string;
  contents: string;
};

/**
 * 
  フックから必要なオブジェクトを分割代入
  register:  バリデーションをチェックするinputをフックに登録するためのものである
  handleSubmit:  フォームの送信が成功すると呼び出されるメソッド、引数には成功したら呼び出したい関数をセットする 例)onSubmit={handleSubmit(unSubmit)}
  formState: フォームの状態に関する情報が入っているオブジェクト
  formState: { errors }: エラーだけ抜き出している
  初期値mode: "all": どの状態でvalidationを発動させるか, allだとblur,change eventで発動するようになる
 */

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

  // const onSubmit = handleSubmit((data) => console.log(data))

  function onSubmit(values: any) {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 1000);
    });
  }
  // JSON.stringifyは入力した値をJSON文字列で返す
  // JSON.stringify(value[, replacer[, space]])
  // value: JSON 文字列に変換する値
  // replacer(任意):もし関数である場合、文字列化の間に出会った値とプロパティを変換します。もし配列である場合は、最終的な文字列のオブジェクトに含まれるプロパティの集合を指定する。
  // space(任意): 結果の文字列を整形して出力する

  /**
   * 
    !!は!がtrue or falseになるのを利用して変数をfalse or trueに変換している
    isInvaild:無効かどうか

    handleSubmitにフォームの送信ロジックを記述した関数onSubmitを渡すことで
    送信ボタンが押された際に設定したonSubmitが実行される
   */

  return (
    <>
      <Heading as="h1" mt={1 / 10} fontSize="3xl">
        CONTACT
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: "15%" }}>
        <Flex justify="center" textAlign="center">
          <Box w="lg" p={4} borderRadius="md" shadow="md" bg="gray.50">
            <Stack spacing={4}>
              <FormControl id="name" isInvalid={!!errors.name} >
                <FormLabel>お名前(必須)</FormLabel>
                <Input
                  placeholder="山田  太郎"
                  {...register("name", { required: true })}
                />
                <FormErrorMessage>{errors.name && "お名前を入力してください"}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={!!errors.email} >
                <FormLabel>メールアドレス(必須)</FormLabel>
                <Input
                  placeholder="test@example.com"
                  {...register("email", { required: true })}
                />
                <FormErrorMessage>
                  {errors.name && "メールアドレスを入力してください"}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="contents" isInvalid={!!errors.contents} >
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
              Submit
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
}
