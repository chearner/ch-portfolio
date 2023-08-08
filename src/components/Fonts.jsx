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
        font-family: 'SoehneExtraLeicht';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('./Soehne/Soehne-ExtraLeicht.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneLeicht';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('./Soehne/Soehne-Leicht.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneBuch';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./Soehne/Soehne-Buch.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneKraftig';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./Soehne/Soehne-Kraftig.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneHalbFett';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./Soehne/Soehne-Halbfett.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneDreiViertelFett';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./Soehne/Soehne-Dreiviertelfett.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneFett';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('./Soehne/Soehne-Fett.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SoehneExtraFett';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('./Soehne/Soehne-ExtraFett.woff2') format('woff2');
      }
      `}
  />
);

export default Fonts;