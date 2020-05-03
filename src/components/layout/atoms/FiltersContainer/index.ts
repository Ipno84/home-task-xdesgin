import styled, { css } from 'styled-components';

import isPositionStickySupported from './../../../../helpers/isPositionStickySupported';

const FiltersContainer = styled.div`
    text-align: right;
    padding-right: 5rem;
    margin-bottom: 0.8125rem;
    ${() =>
        isPositionStickySupported() &&
        css`
            position: sticky;
            top: 1.5rem;
            z-index: 1;
        `}
`;

export default FiltersContainer;
