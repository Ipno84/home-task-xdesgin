import styled, { css } from 'styled-components';

import isPositionStickySupported from './../../../../helpers/isPositionStickySupported';

const FiltersContainer = styled.div`
    text-align: right;
    ${() =>
        isPositionStickySupported() &&
        css`
            position: sticky;
            top: 1.5rem;
        `}
`;

export default FiltersContainer;
