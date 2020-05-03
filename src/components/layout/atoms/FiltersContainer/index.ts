import styled, { css } from 'styled-components';

import isPositionStickySupported from './../../../../helpers/isPositionStickySupported';

const FiltersContainer = styled.div`
    padding-left: 1rem;
    padding-right: 5rem;
    margin-bottom: 0.8125rem;
    @media (min-width: 768px) {
        text-align: right;
    }
    ${() =>
        isPositionStickySupported() &&
        css`
            position: sticky;
            top: 1.5rem;
            z-index: 1;
        `}
`;

export default FiltersContainer;
