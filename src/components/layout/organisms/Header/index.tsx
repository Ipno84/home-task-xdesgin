import React, { ReactElement } from 'react';

import HeaderContainer from '../../atoms/HeaderContainer';
import Logo from '../../molecules/Logo';
import ReloadButton from '../../molecules/ReloadButton';

/**
 * Component that contains logo and reload button
 *
 * @returns {ReactElement}
 */
const Header: React.FC = (): ReactElement => {
    return (
        <HeaderContainer>
            <Logo />
            <ReloadButton />
        </HeaderContainer>
    );
};

export default Header;
