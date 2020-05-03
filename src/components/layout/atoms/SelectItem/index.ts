import styled from 'styled-components';

const SelectItem = styled.li`
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary(1)};
        color: ${({ theme }) => theme.colors.white(1)};
    }
`;

export default SelectItem;
