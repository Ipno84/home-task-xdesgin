import Img from './../Img';
import Span from './../Span';
import styled from 'styled-components';

const LogoContainer = styled.div`
    ${Img} {
        height: 1rem;
        @media (min-width: ${({ theme }) =>
                theme.sizes.mediaQueries.phone.min}rem) {
            height: 1.375rem;
        }
    }
    ${Span} {
        font-size: 1rem;
        position: relative;
        left: -0.675rem;
        @media (min-width: ${({ theme }) =>
                theme.sizes.mediaQueries.phone.min}rem) {
            font-size: 1.25rem;
            left: -0.5rem;
        }
    }
`;

export default LogoContainer;
