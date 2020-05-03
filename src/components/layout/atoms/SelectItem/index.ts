import styled, { css } from 'styled-components';

import Props from './props';

const SelectItem = styled.li<Props>`
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary(1)};
        color: ${({ theme }) => theme.colors.white(1)};
    }
    ${({ selected }) =>
        selected &&
        css`
            background-color: ${({ theme }) => theme.colors.primary(1)};
            color: ${({ theme }) => theme.colors.white(1)};
            font-weight: 900;
        `}
`;

export default SelectItem;
