import { useState } from 'react';
import { Form } from 'react-router-dom';
import {
  Box,
  VStack,
  Heading,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export const Contact = () => {
  const contactForm = {
    first: '',
    last: '',
    email: '',
    message: '',
  };

  const [input, setInput] = useState('');
  const handleInputChange = e => setInput(e.target.value);
  const isError = input === '';

  // I specializes in React and Angular development and have strong fundamental skills in HTML, CSS and JavaScript.
  //If your company is building great digital experiences, or would like, complex data driven applications then you want to hire an experienced web developer with proven results.
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection={'column'}
    >
      <Stack
        maxW="50%"
        spacing={4}
        w={'full'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading as="h1" size="2xl" alignItems={'center'} textAlign={'center'}>
          Hire Me
        </Heading>
        <Text>test</Text>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="yourname@gmail.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            placeholder="How can I help?"
            _placeholder={{ color: 'gray.500' }}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Contact;
