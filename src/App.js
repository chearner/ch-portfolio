import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './themes';
import {
  NavBar,
  Footer,
  About,
  Error,
  Services,
  Experience,
  Contact,
  Skills,
  Portfolio,
  Credits,
  Fonts,
} from './components';

const Layout = () => (
  <>
    <NavBar />
    <Flex as="main">
      <Outlet />
    </Flex>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Portfolio />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/credits',
        element: <Credits />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
