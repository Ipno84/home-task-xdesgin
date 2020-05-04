import styled, { css } from 'styled-components';

import Props from './props';

const SelectContainer = styled.ul<Props>`
    position: absolute;
    width: 15rem;
    max-height: 20rem;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.white(1)};
    right: 0;
    box-shadow: 0 0.125rem 0.3125rem ${({ theme }) => theme.colors.black(0.25)};
    margin: 0;
    padding: 0.5rem 0;
    list-style: none;
    text-align: left;
    border-radius: 0.625rem;
    transition: top 0.15s ease, opacity 0.15s ease;
    z-index: 1;
    @media (orientation: landscape) {
        max-height: calc(100vh - 8rem);
    }
    ${({ visible }) =>
        visible
            ? css`
                  top: 80%;
                  opacity: 1;
                  pointer-events: auto;
              `
            : css`
                  top: 200%;
                  opacity: 0;
                  pointer-events: none;
              `}
`;

export default SelectContainer;
