import styled from 'styled-components';

const ListWrapper = styled.div`
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: inline-block;
    @media (min-width: ${({ theme }) =>
            theme.sizes.mediaQueries.tabletLandscape.min}rem) {
        padding-right: 5rem;
    }
    @media (min-width: ${({ theme }) =>
            theme.sizes.mediaQueries.tabletPortrait.min}rem) {
        width: 56% !important;
    }
`;

export default ListWrapper;
