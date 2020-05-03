import LaunchBackground from '../LaunchBackground';
import styled from 'styled-components';

const HomeListWrapper = styled.div`
    display: block;
    ${LaunchBackground} {
        width: 44%;
        padding-top: 1.625rem;
        position: sticky;
        top: 0;
        display: none;
        @media (min-width: 768px) {
            display: block;
            float: left;
        }
    }
    .ReactVirtualized__Grid.ReactVirtualized__List {
        width: 100% !important;
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
        @media (min-width: 992px) {
            padding-right: 5rem;
        }
        @media (min-width: 768px) {
            width: 56% !important;
        }
    }
`;

export default HomeListWrapper;
