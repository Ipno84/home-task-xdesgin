const ordinalRules: Intl.PluralRules = new Intl.PluralRules('en', {
    type: 'ordinal',
});

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
    const suffix = suffixes[ordinalRules.select(number)];
    return number + suffix;
}
