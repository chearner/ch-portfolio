import { useRouteError } from 'react-router-dom';
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react';

export const Credits = () => {
  const error = useRouteError();

  return (
    <Box p='50'>
      <VStack spacing='50' align='left'>
        <Heading as='h1' size='3xl' noOfLines={1}>
          CREDITS
        </Heading>
        <Box w='100%' fontSize='18' color='#fff'>
          Starring - CHRISTOPHER HEARN
        </Box>
        <Box w='100%' fontSize='18' color='#fff'>
          User Interface - CHRISTOPHER HEARN
        </Box>
        <Box w='100%' fontSize='18' color='#fff'>
          JavaScript & React Code - CHRISTOPHER HEARN
        </Box>
      </VStack>
    </Box>
  );
};

export default Credits;