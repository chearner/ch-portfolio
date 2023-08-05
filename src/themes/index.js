import { extendTheme, keyframes, theme as base } from '@chakra-ui/react';

//backup font list
//ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji

const gradientAnimationKeyframes = keyframes`
0%, 100% { background-color: #1e90ff; }
25% { background-color: #39d24a; }
50% { background-color: #ffe244; }
75% { background-color: #ff36a3; }
`;

export const theme = extendTheme({
  variants: {
    clear: {
      backgroundColor: 'transparent',
      border: '2px solid black',
    },
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'FamiljenGrotesk',
        color: '#ffffff',
        bg: '#000000',
      },
      'main': {
        color: '#ffffff',
        bg: '#000000',
        //bgGradient:
          //'radial-gradient(circle at bottom, #ff36a3, transparent 90%), linear-gradient(to top, #005A9C 0%, transparent 70%), linear-gradient(to bottom, transparent, rgba(255,255,255, 0.4) 70%), #1e90ff',
        //animation: `${ gradientAnimationKeyframes } 30s infinite`,
      },
      'footer': {
        color: '#ffffff',
        bg: '#000000',
      },
    },
  },
  fonts: {
    body: `FamiljenGrotesk, ${base.fonts?.body}`,
    heading: `FamiljenGrotesk, ${base.fonts?.heading}`,
    logo: 'Bayon',
  },
  textStyles: {
    h1: {
      fontSize: ['14px', '18px'],
      fontWeight: 'bold',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
    },
    a: {
      fontFamily: 'var(--chakra-fonts-logo)',
    },
  },
  colors: {
    blue: {
      100: '#2f81f7',
      200: '#1f6feb',
    },
    florescentYellow: {
      100: '#ccff00',
    },
    orange: {
      100: '#ff710d',
    },
    yellow: {
      100: '#ffb800',
    },
    error: 'red.500',
    text: {
      default: 'gray.900',
      _dark: 'gray.50',
    },
  },
});

export default theme;
