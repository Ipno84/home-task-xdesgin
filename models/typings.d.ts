import { DefaultTheme } from 'styled-components';
import { Store, Reducer } from 'redux';
import { Saga } from 'redux-saga';

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

    declare interface ReduxStore extends Store {
        asyncReducers: {
            [x: string]: Reducer;
        };
        injectReducer: (key: string, asyncReducer: Reducer) => void;
        asyncSagas: {
            [x: string]: Saga<any[]>;
        };
        injectSaga: (key: string, asyncSaga: Saga<any[]>) => void;
    }
}
