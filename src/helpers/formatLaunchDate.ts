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
    const date: Date = new Date(unixDate * 1000);
    const day = date.getDate();
    const year = date.getFullYear();
    return `${getOrdinalNumber(day)} ${getShortMonth(date)} ${year}`;
}
