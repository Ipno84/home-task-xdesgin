import _ from '@testing-library/react';
import arrayOfLength from './arrayOfLength';

describe('Generate array with specified length', () => {
    test('With defined numeric length', () => {
        const array = arrayOfLength(5);
        expect(array).toBeInstanceOf(Object);
        expect(array.length).toBe(5);
    });

    test('With defined numeric negative length', () => {
        const array = arrayOfLength(-5);
        expect(array).toBeInstanceOf(Object);
        expect(array.length).toBe(0);
    });

    test('With defined string length', () => {
        const array = arrayOfLength('5');
        expect(array).toBeInstanceOf(Object);
        expect(array.length).toBe(5);
    });

    test('With undefined length', () => {
        const array = arrayOfLength();
        expect(array).toBeInstanceOf(Object);
        expect(array.length).toBe(0);
    });
});
