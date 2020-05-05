import LaunchesReducer, { initialState } from './LaunchesReducer';

import { ReducerActionType } from '../../../models/state/store';
import _ from '@testing-library/react';
import getLaunchesAction from '../actions/LaunchesActions/getLaunchesAction';
import setRowHeightAction from '../actions/LaunchesActions/setRowHeightAction';
import setYearAction from '../actions/LaunchesActions/setYearAction';
import toggleOrderAction from '../actions/LaunchesActions/toggleOrderAction';

describe('Check reducer changes', () => {
    test('Get launches', () => {
        const action = getLaunchesAction();
        const state = LaunchesReducer(
            initialState,
            action as ReducerActionType
        );
        expect(state.isLoading).toBeTruthy();
    });
    test('Get launches fail', () => {
        const action = getLaunchesAction({ error: new Error('testError') });
        const state = LaunchesReducer(
            initialState,
            action as ReducerActionType
        );
        expect(state.isLoading).toBeFalsy();
    });
    test('Get launches success', () => {
        const action = getLaunchesAction({ success: true, items: [] });
        const state = LaunchesReducer(
            initialState,
            action as ReducerActionType
        );
        expect(state.isLoading).toBeFalsy();
        expect(state.items?.length).toBe(0);
    });
    test('Set year success', () => {
        const action = setYearAction({ success: true, year: '2019' });
        const state = LaunchesReducer(
            initialState,
            action as ReducerActionType
        );
        expect(state.year).toBe('2019');
    });
    test('Toggle order', () => {
        const action = toggleOrderAction();
        const state = LaunchesReducer(
            initialState,
            action as ReducerActionType
        );
        expect(state.order).toBe('asc');
    });
    test('Set row height', () => {
        const action = setRowHeightAction({ rowHeight: 65 });
        const state = LaunchesReducer(
            initialState,
            action as ReducerActionType
        );
        expect(state.rowHeight).toBe(65);
    });
});
