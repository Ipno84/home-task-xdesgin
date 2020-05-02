import H3 from '../../atoms/H3';
import H4 from '../../atoms/H4';
import LaunchCard from '../../atoms/LaunchCard';
import Rank from '../../atoms/Rank';
import React from 'react';
import Section from '../../atoms/Section';
import Span from '../../atoms/Span';

const Launch = () => {
    return (
        <LaunchCard>
            <Section side='left'>
                <Rank>#1</Rank>
            </Section>
            <Section side='body'>
                <H3>FalconSat</H3>
            </Section>
            <Section side='right'>
                <Span>24th Mar 2006</Span>
                <H4>Falcon 1</H4>
            </Section>
        </LaunchCard>
    );
};

export default Launch;