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
export default function getOrdinalNumber(
    number: number,
    forceFallback: boolean = false
): string {
    let suffix: string = '';
    if (forceFallback || !Intl || (Intl && !Intl.PluralRules)) {
        const fixedTh: number[] = [11, 12, 13];
        if (fixedTh.includes(number)) {
            suffix = 'th';
        } else {
            const lastNumber = String(number)[String(number).length - 1];
            switch (lastNumber) {
                case '1':
                    suffix = 'st';
                    break;
                case '2':
                    suffix = 'nd';
                    break;
                case '3':
                    suffix = 'rd';
                    break;
                default:
                    suffix = 'th';
            }
        }
    } else {
        const ordinalRules: Intl.PluralRules = new Intl.PluralRules('en', {
            type: 'ordinal',
        });
        suffix = suffixes[ordinalRules.select(number)];
    }
    return number + suffix;
}
