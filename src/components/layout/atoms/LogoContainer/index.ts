import Img from './../Img';
import Span from './../Span';
import styled from 'styled-components';

const LogoContainer = styled.div`
    ${Img} {
        height: 1.375rem;
    }
    ${Span} {
        font-size: 1.25rem;
        position: relative;
        left: -0.675rem;
    }
`;

export default LogoContainer;
