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

    interface Theme extends DefaultTheme {
        colors: Colors;
        fontFamilies: FontFamilies;
    }

    declare interface ActionType {
        type: string;
    }
}
