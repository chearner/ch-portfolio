import { Box, VStack, Heading, Flex, Text } from '@chakra-ui/react';

export const Experience = () => {
  return (
    <Flex p='100'>
      <Flex w='30%'>
        <Heading as='h1' size='2xl'>
          Experience
        </Heading>
      </Flex>
      <Flex w='70%' direction={'column'}>
        <Text mb='50'>
          I specialize in React and Angular development, building on top of my fundamental skills in HTML, CSS and JavaScript. I typically utilize a variety of web tools, techniques and technologies
          to deliver a project. Years of experience allows me to make .
        </Text>
      </Flex>
    </Flex>
  );
};

export default Experience;