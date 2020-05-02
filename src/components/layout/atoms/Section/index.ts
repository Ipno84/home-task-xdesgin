import styled, { css } from 'styled-components';

import H4 from './../H4';
import Props from './props';

const Section = styled.div<Props>`
    ${({ side }) => {
        switch (side) {
            case 'left':
                return css`
                    width: 8.25rem;
                    padding: 0 1rem 0 2rem;
                `;
            case 'right':
                return css`
                    padding: 0 1rem;
                    text-align: right;
                    ${H4} {
                        padding-top: 1.25rem;
                    }
                `;
            case 'body':
                return css`
                    flex: 1;
                `;
            default:
                return css``;
        }
    }}
`;

export default Section;
