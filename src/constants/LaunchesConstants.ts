export const GET_LAUNCHES: string = 'GET_LAUNCHES';
export const TOGGLE_ORDER: string = 'TOGGLE_ORDER';
export const SET_YEAR: string = 'SET_YEAR';
export const SET_ROW_HEIGHT: string = 'SET_ROW_HEIGHT';

interface RowHeight {
    TINY: number;
    LARGE: number;
    MARGIN: number;
}

export const ROW_HEIGHT: RowHeight = {
    TINY: 4,
    LARGE: 5,
    MARGIN: 0.3125,
};
