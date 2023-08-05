import React, { ReactNode } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Flex, Link, Icon, Text, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const chdLogo = () => (
  <svg viewBox='0 0 715 525' height='60' fill='#ffffff' stroke='#ffffff' strokeWidth='22' filter='url(#shadow)'>
    <path d='m187.4 477.2h-32.4q-31.2-1.2-57-17.4-25.8-16.8-41.4-43.8-15.6-27-15.6-59.4l0.6-190.2q0-31.8 15-58.2 15.6-27 41.4-43.2 25.8-16.8 57-18h0.6 33q3 0 3 2.4v67.8q0 2.4-3 2.4h-34.2q-17.4 0-29.4 13.8-12 13.8-12 33v190.2q0 18.6 12 32.4 12.6 13.8 29.4 15.6h32.4q3 0 3 2.4l0.6 67.8q0 2.4-3 2.4zm121.2-2h-67.8q-2.4 0-2.4-3.1l0.6-420.4q0-2.5 3-2.5h66.6q3 0 3 2.5l-0.6 166.5h90v-166.5q0-2.5 2.4-2.5h66.6q3 0 3 2.5l1.2 420.4q0 3.1-3 3.1h-67.2q-3 0-3-3.1v-179.9h-90v179.9q0 3.1-2.4 3.1zm249.6 2h-31.8q-3 0-3-2.4v-67.8q0-2.4 3-2.4h31.8q18-1.8 30-15.6 12.6-13.8 12.6-32.4v-190.2q0-19.2-12-33-12-13.8-30.6-13.8h-33q-3 0-3-2.4v-67.8q0-2.4 3-2.4h33 0.6q31.2 1.2 57 18 25.8 16.2 40.8 43.2 15.6 26.4 15.6 58.2l0.6 190.2q0 32.4-15.6 59.4-15.6 27-41.4 43.8-25.8 16.2-57.6 17.4z' />
  </svg>
);

 /*
    <filter id='shadow' color-interpolation-filters='sRGB'>
      <feDropShadow dx='4' dy='0' stdDeviation='0' flood-opacity='.75' flood-color='#75fbfd' />
      <feDropShadow dx='6' dy='0' stdDeviation='.5' flood-opacity='.25' flood-color='#75fbfd' />
      <feDropShadow dx='-4' dy='0' stdDeviation='0' flood-opacity='.75' flood-color='#ea3323' />
      <feDropShadow dx='-6' dy='0' stdDeviation='.5' flood-opacity='.25' flood-color='#ea3323' />
    </filter>
    */

const linkArray = [
  { name: 'ABOUT', route: '/about' },
  { name: 'SKILLS', route: '/skills' },
  { name: 'SERVICES', route: '/services' },
  { name: 'EXPERIENCE', route: '/experience' },
];

const LinkItem = ({ children, route }) => (
  <Link
    as={RouteLink}
    to={route}
    px={6}
    py={2}
    fontSize={'sm'}
    color={useColorModeValue('gray.700', 'gray.50')}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.600', 'gray.300'),
    }}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      pos='relative'
      top='0'
      shadow='lg'
      transition='box-shadow 0.2s'
      as='header'
      boxSize='full'
      h={20}
      pl={10}
      pr={10}
      alignItems='center'
      justifyContent='space-between'
      backgroundColor='blackAlpha.600'
    >
      <HStack spacing='0' alignItems='center'>
        <Link href='/' _hover={{ textDecoration: 'none' }} m={2} display='flex' alignItems='center' ml='50'>
          <Icon as={chdLogo} />
          <Text ml={2} mr={2}>
            CHRIS HEARN [DEVELOPER]
          </Text>
        </Link>
      </HStack>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
        {linkArray.map((link) => (
          <LinkItem key={link.name} {...link}>
            {link.name}
          </LinkItem>
        ))}
        <Link
          key='contact'
          href='/contact'
          px='6'
          py='2'
          bg='white'
          rounded='20'
          fontSize='sm'
          fontWeight='bold'
          color={useColorModeValue('gray.800', 'gray.800')}
          _hover={{ textDecoration: 'none', color: useColorModeValue('gray.800', 'gray.600') }}
        >
          LETS TALK
        </Link>
        <Link onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon display='flex' /> : <SunIcon display='flex' />}</Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;