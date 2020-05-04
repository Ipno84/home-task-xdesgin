import SelectContainer from './../SelectContainer';
import styled from 'styled-components';

const FiltersContainer = styled.div`
    padding-left: 1rem;
    padding-right: 5rem;
    margin-bottom: 0.8125rem;
    position: sticky;
    top: 1.5rem;
    z-index: 1;
    ${SelectContainer} {
        right: auto;
        left: 0;
    }
    @media (min-width: ${({ theme }) =>
            theme.sizes.mediaQueries.largePhone.min}rem) {
        text-align: right;
        ${SelectContainer} {
            right: 0;
            left: auto;
        }
    }
`;

export default FiltersContainer;
