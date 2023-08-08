import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { useMergeRefs, useDimensions } from '@chakra-ui/react';
import { useOnScreen } from '../hooks/useOnScreen';
import { Header } from './Header';
import { Footer } from './Footer';
import { About } from './About';
import { Contact } from './Contact';
import { Error } from './Error';
import { Experience } from './Experience';
import { Portfolio } from './Portfolio';
import { Services } from './Services';
import { Skills } from './Skills';
import { Credits } from './Credits';
import { Fonts } from './Fonts';
import { Flex } from '@chakra-ui/react';

export const Sections = () => {
  const refPortfolio = useRef();
  const refAbout = useRef();
  const refSkills = useRef();
  const refExperience = useRef();
  const refServices = useRef();
  const refContact = useRef();

  const linkArray = useMemo(
    () => [
      { name: 'ABOUT', linkRef: refAbout },
      { name: 'SKILLS', linkRef: refSkills },
      { name: 'SERVICES', linkRef: refServices },
      { name: 'EXPERIENCE', linkRef: refExperience },
      { name: 'CONTACT', linkRef: refContact },
    ],
    []
  );

  useEffect(() => {
    //
  }, []);

  return (
    <>
      <Fonts />
      <Flex as="header" backgroundColor="brown">
        <Header linkArray={linkArray} />
      </Flex>
      <Flex
        ref={refPortfolio}
        className={useOnScreen(refPortfolio) ? 'show' : 'hidden'}
        as="main"
        h="100vh"
        p="100"
      >
        <Portfolio />
      </Flex>
      <Flex
        ref={refAbout}
        className={useOnScreen(refAbout) ? 'show' : 'hidden'}
        as="section"
        h="100vh"
        p="100"
        justifyContent="space-around"
        backgroundColor="darkgray"
      >
        <About />
      </Flex>
      <Flex
        ref={refSkills}
        className={useOnScreen(refSkills) ? 'show' : 'hidden'}
        as="section"
        h="100vh"
        p="100"
        justifyContent="space-around"
        backgroundColor="gray"
      >
        <Skills />
      </Flex>
      <Flex
        ref={refExperience}
        className={useOnScreen(refExperience) ? 'show' : 'hidden'}
        as="section"
        h="100vh"
        p="100"
        justifyContent="space-around"
        backgroundColor="darkgray"
      >
        <Experience />
      </Flex>
      <Flex
        ref={refServices}
        className={useOnScreen(refServices) ? 'show' : 'hidden'}
        as="section"
        h="100vh"
        p="100"
        justifyContent="space-around"
        backgroundColor="gray"
      >
        <Services />
      </Flex>
      <Flex
        ref={refContact}
        className={useOnScreen(refContact) ? 'show' : 'hidden'}
        as="section"
        h="100vh"
        p="100"
        justifyContent="space-around"
      >
        <Contact />
      </Flex>
      <Flex as="footer" p="50" backgroundColor="brown">
        <Footer />
      </Flex>
    </>
  );
};

export default Sections;
