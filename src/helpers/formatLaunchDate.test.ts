import _ from '@testing-library/react';
import formatLaunchDate from './formatLaunchDate';

describe('Format launch date', () => {
    test('With specified unix date', () => {
        let date: Date = new Date();
        date.setDate(31);
        date.setMonth(4);
        date.setFullYear(2019);
        const formattedDate = formatLaunchDate(date.getTime());
        expect(formattedDate).toBe('31st May 2019');
    });

    test('With specified unix invalid timestamp format', () => {
        let date: Date = new Date();
        date.setDate(31);
        date.setMonth(4);
        date.setFullYear(2019);
        const formattedDate = formatLaunchDate(
            Number(
                date
                    .getTime()
                    .toString()
                    .substring(0, date.getTime().toString().length - 1)
            )
        );
        expect(formattedDate).toBe('');
    });

    test('With invalid date', () => {
        let date: Date = new Date('31/05/2019');
        const formattedDate = formatLaunchDate(date.getTime());
        expect(formattedDate).toBe('');
    });
});
