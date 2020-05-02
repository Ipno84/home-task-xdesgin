import Button from './../../atoms/Button';
import LogoContainer from './../LogoContainer';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    height: 5.6875rem;
    display: flex;
    padding: 1.5rem 0 1.5rem 2.5625rem;
    align-items: center;
    z-index: 1;
    ${LogoContainer} {
        flex: 1;
    }
    ${Button} {
        position: fixed;
        right: 0;
        top: 1.5rem;
        z-index: 9999999;
    }
`;

export default HeaderContainer;
