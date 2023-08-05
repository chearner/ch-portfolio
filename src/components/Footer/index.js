import React, { useEffect, useMemo } from 'react';
import { Flex } from '@chakra-ui/react';
import { SiLinkedin } from 'react-icons/si';

export const Footer = () => {
  useEffect(() => {
    //
  }, []);

  useMemo(() => {
    //
  }, []);

  return (
    <Flex as='footer' h={16} p={50} alignItems={'center'} justifyContent={'space-between'}>
      Let's talk!
      <SiLinkedin />
    </Flex>
  );
};

export default Footer;