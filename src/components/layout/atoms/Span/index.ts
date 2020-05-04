import styled, { css } from 'styled-components';

import Props from './props';

const Span = styled.span<Props>`
    font-size: 1rem;
    ${({ hideSm }) =>
        hideSm &&
        css`
            display: none;
            @media (min-width: ${({ theme }) =>
                    theme.sizes.mediaQueries.phone.min}rem) {
                display: inline-block;
            }
        `}
    ${({ showSm }) =>
        showSm &&
        css`
            display: none;
            @media (max-width: ${({ theme }) =>
                    theme.sizes.mediaQueries.phone.max}rem) {
                display: inline-block;
            }
        `}
`;

export default Span;
