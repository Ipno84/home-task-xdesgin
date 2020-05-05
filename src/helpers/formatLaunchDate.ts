import getOrdinalNumber from './getOrdinalNumber';
import getShortMonth from './getShortMonth';

/**
 * Helper function, transform unix timestamp into a string of type '{dayOrdinalFormat} {monthShortName} {fullYear}'
 *
 * @export
 * @param {number} unixDate
 * @returns {string}
 */
export default function formatLaunchDate(unixDate: number): string {
    try {
        const stringifiedTimestamp = String(unixDate);
        const unixAllowedLengths: number[] = [10, 13];
        if (!unixAllowedLengths.includes(stringifiedTimestamp.length)) {
            throw new Error('Wrong unix timestamp format');
        }
        const formatUnixTimestamp =
            stringifiedTimestamp.length === 10 ? unixDate * 1000 : unixDate;
        const date: Date = new Date(formatUnixTimestamp);
        const day: number = date.getDate();
        const year: number = date.getFullYear();
        const dateArray: [string, string, number] = [
            getOrdinalNumber(day),
            getShortMonth(date),
            year,
        ];
        if (dateArray.includes('NaN')) throw new Error('Wrong date format');
        return dateArray.join(' ');
    } catch (error) {
        return '';
    }
}
