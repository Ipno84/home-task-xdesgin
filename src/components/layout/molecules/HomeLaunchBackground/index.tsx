import React, { ReactElement } from 'react';

import Img from '../../atoms/Img';
import LaunchBackground from '../../atoms/LaunchBackground';
import getImageSrcSetInfo from '../../../../helpers/getImageSrcSetInfo';

/**
 * The components that renders the left side of the home page which contains an image
 * The image is hidden in small devices (tablets and phones)
 *
 * @returns {ReactElement}
 */
const HomeLaunchBackground: React.FC = (): ReactElement => {
    const srcSetInfo = getImageSrcSetInfo(
        './../../../../assets/img/launch-home',
        '.png',
        3
    );
    return (
        <LaunchBackground>
            <Img {...srcSetInfo} />
        </LaunchBackground>
    );
};

export default HomeLaunchBackground;
