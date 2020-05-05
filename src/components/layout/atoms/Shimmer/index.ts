import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0% {
        background-position: -62.5rem 0;
    }
    100% {
        background-position: 62.5rem 0;
    }
`;

const Shimmer = styled.div`
    animation: ${shimmer} 2s infinite;
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 62.5rem 100%;
    border-radius: 0.3rem;
`;

export default Shimmer;
