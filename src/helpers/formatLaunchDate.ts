import getOrdinalNumber from './getOrdinalNumber';
import getShortMonth from './getShortMonth';

export default function formatLaunchDate(unixDate: number): string {
    const date: Date = new Date(unixDate * 1000);
    const day = date.getDate();
    const year = date.getFullYear();
    return `${getOrdinalNumber(day)} ${getShortMonth(date)} ${year}`;
}
