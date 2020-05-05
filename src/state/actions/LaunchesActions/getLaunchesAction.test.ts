import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_LAUNCHES } from '../../../constants/LaunchesConstants';
import _ from '@testing-library/react';
import getLaunchesAction from './getLaunchesAction';

describe('Get Launches Action', () => {
    test('Get launches', () => {
        const action = getLaunchesAction();
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: GET_LAUNCHES,
        });
    });

    test('Set launches with items', () => {
        const action = getLaunchesAction({ success: true, items: [] });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: GET_LAUNCHES + SUCCESS,
            items: [],
        });
    });

    test('Set launches without items', () => {
        const action = getLaunchesAction({ success: true });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: GET_LAUNCHES + SUCCESS,
            items: [],
        });
    });

    test('Get launches produce error', () => {
        const error = new Error('Generic error');
        const action = getLaunchesAction({ error });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: GET_LAUNCHES + FAILURE,
            error,
        });
    });
});
