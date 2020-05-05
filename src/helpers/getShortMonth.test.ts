import _ from '@testing-library/react';
import getShortMonth from './getShortMonth';

describe('Get short month string from date', () => {
    test('With invalid date', () => {
        const date = new Date('20/06/2020');
        const shortMonth = getShortMonth(date);
        expect(shortMonth).toBe('');
    });

    test('With now', () => {
        const unixTimestamp: number = Date.now();
        const date = new Date(unixTimestamp);
        const shortMonth = getShortMonth(date);
        expect(shortMonth.length).toBeGreaterThan(0);
    });

    test('With static month', () => {
        const unixTimestamp: number = Date.now();
        const date = new Date(new Date(unixTimestamp).setMonth(9));
        const shortMonth = getShortMonth(date);
        expect(shortMonth).toBe('Oct');
    });
});
