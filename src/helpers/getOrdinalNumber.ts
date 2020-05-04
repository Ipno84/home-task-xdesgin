const suffixes: GenericObject = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
};

/**
 * Helper function, it transform a number into its ordinal version
 *
 * @export
 * @param {number} number
 * @returns {string}
 */
export default function getOrdinalNumber(number: number): string {
    let suffix: string = '';
    if (Intl && Intl.PluralRules) {
        const ordinalRules: Intl.PluralRules = new Intl.PluralRules('en', {
            type: 'ordinal',
        });
        suffix = suffixes[ordinalRules.select(number)];
    } else {
        switch (number) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
        }
    }
    return number + suffix;
}
