import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import LaunchCard from '../../atoms/LaunchCard';
import Section from '../../atoms/Section';
import Shimmer from '../../atoms/Shimmer';

/**
 * Component that renders shimmer elements, it replace Launch item list componen
 * when the list is empty and the application is requestin launches to the API
 *
 * @returns {ReactElement}
 */
const LaunchSkeleton: React.FC = (): ReactElement => {
    return (
        <LaunchCard>
            <SectionSkeleton side='combined'>
                <SectionSkeleton side='left'>
                    <RankShimmer />
                </SectionSkeleton>
                <SectionSkeleton side='body'>
                    <TitleShimmer />
                </SectionSkeleton>
            </SectionSkeleton>
            <SectionSkeleton side='right'>
                <DateShimmer />
                <RocketShimmer />
            </SectionSkeleton>
        </LaunchCard>
    );
};

export default LaunchSkeleton;

const RankShimmer = styled(Shimmer)`
    width: 15%;
    height: 0.9rem;
    margin-top: 0.8rem;
    @media (min-width: ${({ theme }) =>
            theme.sizes.mediaQueries.phone.min}rem) {
        height: 1.875rem;
        width: 75%;
        margin-top: 0;
    }
`;

const TitleShimmer = styled(Shimmer)`
    width: 75%;
    height: 1.2rem;
    margin-bottom: 0.8rem;
    @media (min-width: ${({ theme }) =>
            theme.sizes.mediaQueries.phone.min}rem) {
        height: 1.875rem;
        margin-bottom: 0;
    }
`;

const DateShimmer = styled(Shimmer)`
    width: 85%;
    height: 0.875rem;
    position: absolute;
    right: 1rem;
    top: 0.8rem;
`;

const RocketShimmer = styled(Shimmer)`
    width: 65%;
    height: 1.2rem;
    position: absolute;
    right: 1rem;
    bottom: 0.8rem;
`;

const SectionSkeleton = styled(Section)`
    ${({ side }) => {
        switch (side) {
            case 'combined':
                return css`
                    height: 100%;
                    @media (min-width: ${({ theme }) =>
                            theme.sizes.mediaQueries.phone.min}rem) {
                        height: 100%;
                    }
                `;
            case 'left':
                return css``;
            case 'right':
                return css`
                    width: 8.3125rem;
                    position: relative;
                `;
            case 'body':
                return css`
                    align-items: center;
                    display: flex;
                `;
            default:
                return css``;
        }
    }}
`;
