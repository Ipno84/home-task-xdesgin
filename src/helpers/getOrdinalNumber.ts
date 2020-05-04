const ordinalRules: Intl.PluralRules = new Intl.PluralRules('en', {
    type: 'ordinal',
});

const suffixes: any = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
};

export default function getOrdinalNumber(number: number): string {
    const suffix = suffixes[ordinalRules.select(number)];
    return number + suffix;
}
