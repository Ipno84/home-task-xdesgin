import React, { ReactElement } from 'react';

import HomeLaunchBackground from '../../molecules/HomeLaunchBackground';
import HomeListWrapper from '../../atoms/HomeListWrapper';
import LaunchesList from '../../organisms/LaunchesList';

/**
 * It renders the main part of the screen in home page, right below the filters element
 * It contains the launches list and an image
 *
 * @returns {ReactElement}
 */
const HomeList: React.FC = (): ReactElement => {
    return (
        <HomeListWrapper>
            <HomeLaunchBackground />
            <LaunchesList />
        </HomeListWrapper>
    );
};

export default HomeList;
