import styled, { css } from 'styled-components';

import H3 from '../H3';
import H4 from './../H4';
import Props from './props';
import Rank from '../Rank';
import Span from '../Span';

const Section = styled.div<Props>`
    ${({ side }) => {
        switch (side) {
            case 'combined':
                return css`
                    display: flex;
                    flex: 1;
                    overflow: hidden;
                    flex-direction: column;
                    height: 100%;
                    padding-left: 1rem;
                    @media (min-width: ${({ theme }) =>
                            theme.sizes.mediaQueries.phone.min}rem) {
                        flex-direction: row;
                        height: auto;
                        padding-left: 0;
                    }
                `;
            case 'left':
                return css`
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 100%;
                    padding: 0;
                    align-items: flex-start;
                    display: flex;
                    flex: 1;
                    @media (min-width: ${({ theme }) =>
                            theme.sizes.mediaQueries.phone.min}rem) {
                        width: 8.25rem;
                        padding: 0 0.5rem 0 2rem;
                        flex: none;
                        align-items: center;
                    }
                    ${Rank} {
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        line-height: 1.4375rem;
                        padding-top: 0.5rem;
                        font-size: 1rem;
                        @media (min-width: ${({ theme }) =>
                                theme.sizes.mediaQueries.phone.min}rem) {
                            font-size: 2.5rem;
                            line-height: 2.5rem;
                            padding-top: 0;
                        }
                    }
                `;
            case 'right':
                return css`
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding: 0 1rem;
                    text-align: right;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    ${Span} {
                        line-height: 1.4375rem;
                        padding-top: 0.5rem;
                        flex: 1;
                    }
                    ${H4} {
                        line-height: 1.625rem;
                        padding-bottom: 0.5rem;
                    }
                `;
            case 'body':
                return css`
                    flex: none;
                    white-space: nowrap;
                    overflow: hidden;
                    @media (min-width: ${({ theme }) =>
                            theme.sizes.mediaQueries.phone.min}rem) {
                        flex: 1;
                    }
                    ${H3} {
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 1.5rem;
                        line-height: 1.625rem;
                        padding-bottom: 0.5rem;
                        @media (min-width: ${({ theme }) =>
                                theme.sizes.mediaQueries.phone.min}rem) {
                            line-height: 3rem;
                            font-size: 2rem;
                            padding-bottom: 0;
                        }
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export default Section;
