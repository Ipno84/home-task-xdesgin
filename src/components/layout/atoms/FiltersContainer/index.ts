import styled, { css } from 'styled-components';

import SelectContainer from './../SelectContainer';
import isPositionStickySupported from './../../../../helpers/isPositionStickySupported';

const FiltersContainer = styled.div`
    padding-left: 1rem;
    padding-right: 5rem;
    margin-bottom: 0.8125rem;
    ${SelectContainer} {
        right: auto;
        left: 0;
    }
    @media (min-width: 768px) {
        text-align: right;
        ${SelectContainer} {
            right: 0;
            left: auto;
        }
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
