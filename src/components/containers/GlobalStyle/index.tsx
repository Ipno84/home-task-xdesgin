import Props from './props';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<Props>`
    html {
        overflow-x: hidden;
    }
    body {
        font-size: 16px;
        font-family: ${({ theme }) => theme.fontFamilies.primary};
        color: ${({ theme }) => theme.colors.dark(1)};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
    }
    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('assets/font/BrandonGrotesque-Bold.woff2') format('woff2'),
            url('assets/font/BrandonGrotesque-Bold.woff') format('woff'),
            url('assets/font/BrandonGrotesque-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }
      
    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('assets/font/BrandonGrotesque-Regular.woff2') format('woff2'),
            url('assets/font/BrandonGrotesque-Regular.woff') format('woff'),
            url('assets/font/BrandonGrotesque-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
      
    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('assets/font/BrandonGrotesque-RegularItalic.woff2') format('woff2'),
            url('assets/font/BrandonGrotesque-RegularItalic.woff') format('woff'),
            url('assets/font/BrandonGrotesque-RegularItalic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
    }
      
    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('assets/font/BrandonGrotesque-Black.woff2') format('woff2'),
            url('assets/font/BrandonGrotesque-Black.woff') format('woff'),
            url('assets/font/BrandonGrotesque-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
    }
      
    @font-face {
        font-family: 'Brandon Grotesque';
        src: url('assets/font/BrandonGrotesque-Medium.woff2') format('woff2'),
            url('assets/font/BrandonGrotesque-Medium.woff') format('woff'),
            url('assets/font/BrandonGrotesque-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    .ReactVirtualized__Grid.ReactVirtualized__List {
        width: auto !important;
        padding-right: 5rem;
        padding-left: 44%;
        overflow: inherit !important;
    }
    .ReactVirtualized__Grid__innerScrollContainer {
        max-width: inherit !important;
        overflow: inherit !important;
    }
`;

export default GlobalStyle;
