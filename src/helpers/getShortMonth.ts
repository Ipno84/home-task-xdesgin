const dateRules = new Intl.DateTimeFormat('en', {
    month: 'short',
});

/**
 * Helper function, it transform date extracting month name short string
 *
 * @export
 * @param {Date} date
 * @returns {string}
 */
export default function getShortMonth(date: Date): string {
    return dateRules.format(date);
}
