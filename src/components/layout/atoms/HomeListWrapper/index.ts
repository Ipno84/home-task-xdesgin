import LaunchBackground from '../LaunchBackground';
import styled from 'styled-components';

const HomeListWrapper = styled.div`
    display: block;
    ${LaunchBackground} {
        width: 44%;
        padding-top: 1.625rem;
        position: sticky;
        top: 0;
        display: none;
        @media (min-width: ${({ theme }) =>
                theme.sizes.mediaQueries.tabletPortrait.min}rem) {
            display: block;
            float: left;
        }
    }
    .ReactVirtualized__Grid.ReactVirtualized__List {
        width: 100% !important;
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
        @media (min-width: ${({ theme }) =>
                theme.sizes.mediaQueries.tabletLandscape.min}rem) {
            padding-right: 5rem;
        }
        @media (min-width: ${({ theme }) =>
                theme.sizes.mediaQueries.tabletPortrait.min}rem) {
            width: 56% !important;
        }
    }
`;

export default HomeListWrapper;
