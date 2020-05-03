import styled, { css } from 'styled-components';

import H3 from '../H3';
import H4 from './../H4';
import Props from './props';
import Rank from '../Rank';

const Section = styled.div<Props>`
    ${({ side }) => {
        switch (side) {
            case 'left':
                return css`
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 5.25rem;
                    padding: 0 0.5rem;
                    ${Rank} {
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    @media (min-width: 410px) {
                        width: 7.25rem;
                        padding: 0 0.5rem 0 2rem;
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
                    white-space: nowrap;
                    overflow: hidden;
                    ${H3} {
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 3rem;
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export default Section;
