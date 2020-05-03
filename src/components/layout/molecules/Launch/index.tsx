import H3 from '../../atoms/H3';
import H4 from '../../atoms/H4';
import LaunchCard from '../../atoms/LaunchCard';
import Props from './props';
import Rank from '../../atoms/Rank';
import React from 'react';
import Section from '../../atoms/Section';
import Span from '../../atoms/Span';

const ordinalRules: Intl.PluralRules = new Intl.PluralRules('en', {
    type: 'ordinal',
});
const dateRules = new Intl.DateTimeFormat('en', {
    month: 'short',
});
const suffixes: any = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
};
function ordinal(number: number) {
    const suffix = suffixes[ordinalRules.select(number)];
    return number + suffix;
}

const Launch: React.FC<Props> = ({
    flightNumber,
    missionName,
    rocketName,
    date,
}) => {
    const data = new Date(date * 1000);
    return (
        <LaunchCard>
            <Section side='left'>
                <Rank>#{flightNumber}</Rank>
            </Section>
            <Section side='body'>
                <H3>{missionName}</H3>
            </Section>
            <Section side='right'>
                <Span>
                    {ordinal(data.getDate())} {dateRules.format(data)}{' '}
                    {data.getFullYear()}
                </Span>
                <H4>{rocketName}</H4>
            </Section>
        </LaunchCard>
    );
};

export default Launch;
