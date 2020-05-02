import Card from './../Card';
import styled from 'styled-components';

const LaunchCard = styled(Card)`
    height: 5rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.3125rem;
    &:last-child {
        margin-bottom: 0;
    }
`;

export default LaunchCard;
