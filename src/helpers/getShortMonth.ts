const dateRules = new Intl.DateTimeFormat('en', {
    month: 'short',
});

export default function getShortMonth(date: Date): string {
    return dateRules.format(date);
}
