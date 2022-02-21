import Head from 'next/head';
import Image from 'next/image';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input type="email" label="E-mail" name="email"/>
          <Input type="password" label="Password" name="password"/>
        </Stack>
        
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
