import Color from 'color';

const black: Color = Color('#000000');
const dark: Color = Color('#545454');
const white: Color = Color('#FFFFFF');
const blue: Color = Color('#215184');

const getColor = (
    color: Color,
    opacity: number = 1,
    darken: number = 0
): string => {
    return color
        .fade(1 - opacity)
        .darken(darken)
        .string();
};

export const BASE_SIZE: number = 16;

export const mediaQueries = {
    phone: {
        min: 25.625,
        max: 25.5625,
    },
    tabletPortrait: {
        min: 48,
    },
    tabletLandscape: {
        min: 62,
    },
};

const ThemeConstants: Theme = {
    colors: {
        black: (opacity: number = 1, darken: number = 0) =>
            getColor(black, opacity, darken),
        dark: (opacity: number = 1, darken: number = 0) =>
            getColor(dark, opacity, darken),
        white: (opacity: number = 1, darken: number = 0) =>
            getColor(white, opacity, darken),
        primary: (opacity: number = 1, darken: number = 0) =>
            getColor(blue, opacity, darken),
    },
    fontFamilies: {
        primary: "'Brandon Grotesque', Arial, Helvetica, sans-serif",
    },
    sizes: {
        base: BASE_SIZE,
        mediaQueries,
    },
};

export default ThemeConstants;
