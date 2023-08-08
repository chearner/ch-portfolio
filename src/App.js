import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './themes';
import { Sections } from './components/Sections';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Sections />
      <ScrollToTop />
    </ChakraProvider>
  );
}

export default App;
