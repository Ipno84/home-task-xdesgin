import styled, { css } from 'styled-components';

import H4 from './../H4';
import Props from './props';

const Section = styled.div<Props>`
    ${({ side }) => {
        switch (side) {
            case 'left':
                return css`
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 5.25rem;
                    padding: 0 1rem;
                    @media (min-width: 410px) {
                        width: 7.25rem;
                        padding: 0 1rem 0 2rem;
                    }
                    @media (min-width: 768px) {
                        width: 8.25rem;
                    }
                `;
            case 'right':
                return css`
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
