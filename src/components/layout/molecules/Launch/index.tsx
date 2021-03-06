import React, { ReactElement } from 'react';

import H3 from '../../atoms/H3';
import H4 from '../../atoms/H4';
import LaunchCard from '../../atoms/LaunchCard';
import Props from './props';
import Rank from '../../atoms/Rank';
import Section from '../../atoms/Section';
import Span from '../../atoms/Span';
import formatLaunchDate from '../../../../helpers/formatLaunchDate';

/**
 * Component that render launch item inside a list
 *
 * @param {Props} {
 *     flightNumber,
 *     missionName,
 *     rocketName,
 *     date,
 * }
 * @returns {ReactElement}
 */
const Launch: React.FC<Props> = ({
    flightNumber,
    missionName,
    rocketName,
    date,
}: Props): ReactElement => {
    return (
        <LaunchCard>
            <Section side='combined'>
                <Section side='left'>
                    <Rank title={`#${flightNumber}`}>#{flightNumber}</Rank>
                </Section>
                <Section side='body'>
                    <H3 title={missionName}>{missionName}</H3>
                </Section>
            </Section>
            <Section side='right'>
                <Span>{formatLaunchDate(date)}</Span>
                <H4>{rocketName}</H4>
            </Section>
        </LaunchCard>
    );
};

export default Launch;
