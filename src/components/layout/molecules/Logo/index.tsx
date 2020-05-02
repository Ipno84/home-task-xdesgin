import Img from '../../atoms/Img';
import LogoContainer from '../../atoms/LogoContainer';
import React from 'react';
import Span from '../../atoms/Span';

const Logo = () => {
    return (
        <LogoContainer>
            <Img src='./../../../../assets/spacex-logo.png' />
            <Span>LAUNCHES</Span>
        </LogoContainer>
    );
};

export default Logo;
