import styled, { css } from 'styled-components';

import Icon from './../Icon';
import Props from './props';
import SelectWrapper from './../SelectWrapper';
import Span from './../Span';

const Button = styled.button<Props>`
    background-color: ${({ theme }) => theme.colors.primary(1)};
    border-width: 0;
    margin: 0;
    padding: 0 1rem;
    line-height: 2.6875rem;
    min-height: 2.6875rem;
    cursor: pointer;
    outline: 0;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    ${({ rounded }) =>
        rounded &&
        css`
            border-radius: 1.34375rem 0 0 1.34375rem;
        `}
    ${({ animated }) =>
        animated &&
        css`
            padding-left: 0.25rem;
            transition: padding-left 0.3s ease;
            ${Span} {
                white-space: nowrap;
                opacity: 0;
                max-width: 0;
                transition: opacity 0.3s ease, max-width 0.3s ease;
            }
            &:hover {
                padding-left: 1rem;
                ${Span} {
                    max-width: 10rem;
                    opacity: 1;
                }
            }
        `}
    &:active {
        background-color: ${({ theme }) => theme.colors.primary(1, 0.2)};
    }
    &:disabled {
        pointer-events: none;
        background-color: ${({ theme }) => theme.colors.primary(0.4)};
    }
    ${Span} {
        color: ${({ theme }) => theme.colors.white(1)};
        font-weight: 700;
    }
    ${Icon} {
        margin-left: 0.875rem;
    }
    & + & {
        margin-left: 0.5625rem;
    }
    ${SelectWrapper} + & {
        margin-left: 0.5625rem;
    }
`;

export default Button;
