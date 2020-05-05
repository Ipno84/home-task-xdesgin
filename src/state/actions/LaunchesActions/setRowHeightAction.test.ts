import { SET_ROW_HEIGHT } from '../../../constants/LaunchesConstants';
import _ from '@testing-library/react';
import setRowHeightAction from './setRowHeightAction';

describe('Set row height for virtualized list', () => {
    test('Set positive height', () => {
        const action = setRowHeightAction({ rowHeight: 50 });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_ROW_HEIGHT,
            rowHeight: 50,
        });
    });

    test('Set negative height', () => {
        const action = setRowHeightAction({ rowHeight: -50 });
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: SET_ROW_HEIGHT,
            rowHeight: 0,
        });
    });
});
