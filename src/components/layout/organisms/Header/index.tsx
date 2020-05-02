import HeaderContainer from '../../atoms/HeaderContainer';
import Logo from '../../molecules/Logo';
import React from 'react';
import ReloadButton from '../../molecules/ReloadButton';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <ReloadButton />
        </HeaderContainer>
    );
};

export default Header;
