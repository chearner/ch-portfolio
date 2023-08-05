import { useRouteError } from 'react-router-dom';
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';

export const Error = () => {
  const error = useRouteError();

  return (
    <Box p='50'>
      <VStack spacing='50' align='left'>
        <Heading as='h1' size='3xl' noOfLines={1}>
          404
        </Heading>
        <Box>{error.statusText || error.message}</Box>
      </VStack>
    </Box>
  );
};

export default Error;