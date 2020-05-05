import React, { ReactElement } from 'react';

import Img from '../../atoms/Img';
import LogoContainer from '../../atoms/LogoContainer';
import Span from '../../atoms/Span';

/**
 * Component the renders logo in the top let of the screen
 *
 * @returns {ReactElement}
 */
const Logo: React.FC = (): ReactElement => {
    return (
        <LogoContainer>
            <Img src={`${process.env.PUBLIC_URL}/assets/spacex-logo.png`} />
            <Span>LAUNCHES</Span>
        </LogoContainer>
    );
};

export default Logo;
