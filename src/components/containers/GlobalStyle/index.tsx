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
    .ReactVirtualized__Grid.ReactVirtualized__List {
        width: auto !important;
        overflow: inherit !important;
        outline: none;
    }
    .ReactVirtualized__Grid__innerScrollContainer {
        max-width: inherit !important;
        overflow: inherit !important;
    }
`;

export default GlobalStyle;
