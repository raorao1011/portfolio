import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Input, Button } from '@chakra-ui/react'
import { FormErrorMessage, FormLabel, FormControl } from '@chakra-ui/react'

type FormData = {
  firstName: string
  lastName: string
}

export function Contact() {
  //
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
  })

  // const onSubmit = handleSubmit((data) => console.log(data))

  function onSubmit(values: any) {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
      }, 1000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="firstName" isInvalid={!!errors.firstName} isRequired>
        <FormLabel>First Name</FormLabel>
        <Input placeholder="first name" {...register('firstName', { required: true })} />
        <FormErrorMessage>{errors.firstName && 'First name is required'}</FormErrorMessage>
      </FormControl>

      <FormControl id="lastName" isInvalid={!!errors.lastName} isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input placeholder="last name" {...register('lastName', { required: true })} />
        <FormErrorMessage>{errors.lastName && 'Last name is required'}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}