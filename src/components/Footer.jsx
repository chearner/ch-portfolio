import React, { useEffect, useMemo } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { SiLinkedin } from 'react-icons/si';

export const Footer = () => {
  useEffect(() => {
    //
  }, []);

  useMemo(() => {
    //
  }, []);

  return (
    <>
      <Flex w='100%' alignItems='center' justifyContent='space-between'>
        Let's talk!
        <Link href='https://www.linkedin.com/in/hire-the-best-front-end-web-developer/' isExternal><SiLinkedin fontSize={32} /></Link>
      </Flex>
    </>
  );
};

export default Footer;
