import Card from './../Card';
import { ROW_HEIGHT } from '../../../../constants/LaunchesConstants';
import styled from 'styled-components';

const LaunchCard = styled(Card)`
    height: ${ROW_HEIGHT.TINY}rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.3125rem;
    &:last-child {
        margin-bottom: 0;
    }
    @media (min-width: ${({ theme }) =>
            theme.sizes.mediaQueries.phone.min}rem) {
        height: ${ROW_HEIGHT.LARGE}rem;
    }
`;

export default LaunchCard;
