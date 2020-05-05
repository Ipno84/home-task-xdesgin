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
    }
`;

export default HomeListWrapper;
