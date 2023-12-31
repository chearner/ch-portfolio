import { ReactElement } from 'react';
import { Form } from 'react-router-dom';
import { Box, VStack, Heading, Flex, Stack, SimpleGrid, Icon, Text } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ skill, text, icon }) => {
  return (
    <Stack>
      <Flex w='16' h='16' align='center' justify='center' color='white' rounded='full' bg='gray.100' mb='1'>
        {icon}
      </Flex>
      <Text>{skill}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};

export const Services = () => {
  return (
    <>
      <VStack align='center' spacing='10'>
        <Heading as='h1' size='3xl'>
          Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing='10'>
          <Feature
            icon={<Icon as={FcAssistant} w='10' h='10' />}
            skill='Front-End Development'
            text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          />
          <Feature
            icon={<Icon as={FcDonate} w='10' h='10' />}
            skill='Full-Stack Development'
            text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          />
          <Feature
            icon={<Icon as={FcInTransit} w='10' h='10' />}
            skill='Site Modernization & Optimization'
            text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          />
          <Feature
            icon={<Icon as={FcInTransit} w='10' h='10' />}
            skill='Consulting'
            text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          />
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default Services;