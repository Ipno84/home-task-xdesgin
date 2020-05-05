import _ from '@testing-library/react';
import getOrdinalNumber from './getOrdinalNumber';

describe('Get ordinal number from cardinal one', () => {
    test('With 1', () => {
        let ordinalNumber = getOrdinalNumber(1);
        expect(ordinalNumber).toBe('1st');
        ordinalNumber = getOrdinalNumber(1, true);
        expect(ordinalNumber).toBe('1st');
    });

    test('With 2', () => {
        let ordinalNumber = getOrdinalNumber(2);
        expect(ordinalNumber).toBe('2nd');
        ordinalNumber = getOrdinalNumber(2, true);
        expect(ordinalNumber).toBe('2nd');
    });

    test('With 3', () => {
        let ordinalNumber = getOrdinalNumber(3);
        expect(ordinalNumber).toBe('3rd');
        ordinalNumber = getOrdinalNumber(3, true);
        expect(ordinalNumber).toBe('3rd');
    });

    test('With 4', () => {
        let ordinalNumber = getOrdinalNumber(4);
        expect(ordinalNumber).toBe('4th');
        (ordinalNumber = getOrdinalNumber(4)), true;
        expect(ordinalNumber).toBe('4th');
    });

    test('Only numbers that should generate st suffix', () => {
        const numbers = [1, 21, 31, 41, 51, 61, 71, 81, 91];
        numbers.forEach((e) => {
            let ordinalNumber = getOrdinalNumber(e);
            expect(ordinalNumber).toBe(`${e}st`);
            ordinalNumber = getOrdinalNumber(e, true);
            expect(ordinalNumber).toBe(`${e}st`);
        });
    });

    test('Only numbers that irregularly should generate th suffix', () => {
        const numbers = [11, 12, 13];
        numbers.forEach((e) => {
            let ordinalNumber = getOrdinalNumber(e);
            expect(ordinalNumber).toBe(`${e}th`);
            ordinalNumber = getOrdinalNumber(e, true);
            expect(ordinalNumber).toBe(`${e}th`);
        });
    });
});
