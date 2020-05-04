import { DefaultTheme } from 'styled-components';

declare global {
    interface GenericObject {
        [s: string]: any;
    }

    interface Colors {
        [s: string]: Function;
    }

    interface FontFamilies {
        [s: string]: string;
    }

    interface MediaQueries {
        phone: {
            min: number;
            max?: number;
        };
        tabletPortrait: {
            min: number;
            max?: number;
        };
        tabletLandscape: {
            min: number;
            max?: number;
        };
    }

    interface Sizes {
        base: number;
        mediaQueries: MediaQueries;
    }

    interface Theme extends DefaultTheme {
        colors: Colors;
        fontFamilies: FontFamilies;
        sizes: Sizes;
    }

    declare interface ActionType {
        type: string;
    }
}
