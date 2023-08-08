import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';

export const About = () => {
  useEffect(() => {
    //
  }, []);

  useMemo(() => {
    //
  }, []);

  return (
    <>
      <VStack align='center' spacing='10'>
        <Heading as='h1' size='3xl'>
          About Me
        </Heading>
        <Text textAlign='center'>
          I am a Web Developer with over 15 years of experience. I specialize in
          Front-End Development with React and Angular but I have experience
          working with the full technology stack...from database to interface.
        </Text>
        <Text textAlign='center'>
          I strive for fast, scalable and maintainable code that powers
          attractive, responsive and accessible user interfaces. I enjoy writing
          code but I can also manage teams and projects...from discovery to
          delivery.
        </Text>
        <Text textAlign='center'>
          I have a strong understanding of design and development principles and
          proven success delivering efficient and effective solutions for
          agencies and enterprises. Over the years, I've worked with many
          talented people and top companies in a variety of industry and bake
          this knowledge and expertise into everything I do today.
        </Text>
      </VStack>
    </>
  );
};

export default About;
