import styled, { css } from 'styled-components';

import Props from './props';

const Span = styled.span<Props>`
    font-size: 1rem;
    ${({ hideSm }) =>
        hideSm &&
        css`
            display: none;
            @media (min-width: 410px) {
                display: inline-block;
            }
        `}
`;

export default Span;
