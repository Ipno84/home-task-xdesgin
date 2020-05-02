import styled from 'styled-components';

const Card = styled.div`
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.colors.white(1)};
    box-shadow: 0 0.125rem 0.3125rem ${({ theme }) => theme.colors.black(0.25)};
`;

export default Card;
