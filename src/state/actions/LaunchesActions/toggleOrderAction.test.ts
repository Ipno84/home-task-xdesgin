import { TOGGLE_ORDER } from '../../../constants/LaunchesConstants';
import _ from '@testing-library/react';
import toggleOrderAction from './toggleOrderAction';

describe('Toggle Order', () => {
    test('Set recent year', () => {
        const action = toggleOrderAction();
        expect(action).toBeInstanceOf(Object);
        expect(action).toMatchObject({
            type: TOGGLE_ORDER,
        });
    });
});
