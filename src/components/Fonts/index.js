import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'FedoraRegular';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./Fedora/sf-fedora.regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'FedoraTitlesItalic';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./Fedora/sf-fedora.titles-italic.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Bayon';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./Bayon/Bayon-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./Poppins/Poppins-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'FamiljenGrotesk';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./FamiljenGrotesk/FamiljenGrotesk-Regular.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;
