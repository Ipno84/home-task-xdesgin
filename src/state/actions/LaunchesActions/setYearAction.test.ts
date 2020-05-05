import {
    FIRST_AVAILABLE_YEAR,
    SET_YEAR,
} from '../../../constants/LaunchesConstants';

import { SUCCESS } from '../../../constants/BaseConstants';
import _ from '@testing-library/react';
import setYearAction from './setYearAction';

describe('Set year action', () => {
    test('Set recent year', () => {
        const action = setYearAction({ year: '2018' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR,
            year: '2018',
        });
    });

    test('Set ancient year', () => {
        const action = setYearAction({ year: '1789' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR,
            year: String(FIRST_AVAILABLE_YEAR),
        });
    });

    test('Set NaN year', () => {
        const action = setYearAction({ year: 'testYear' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR,
            year: '',
        });
    });

    test('Set empty year', () => {
        const action = setYearAction({ year: '' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR,
            year: '',
        });
    });

    test('Set success recent year', () => {
        const action = setYearAction({ success: true, year: '2018' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR + SUCCESS,
            year: '2018',
        });
    });

    test('Set success ancient year', () => {
        const action = setYearAction({ success: true, year: '1789' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR + SUCCESS,
            year: String(FIRST_AVAILABLE_YEAR),
        });
    });

    test('Set success NaN year', () => {
        const action = setYearAction({ success: true, year: 'testYear' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR + SUCCESS,
            year: '',
        });
    });

    test('Set success empty year', () => {
        const action = setYearAction({ success: true, year: '' });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_YEAR + SUCCESS,
            year: '',
        });
    });
});
