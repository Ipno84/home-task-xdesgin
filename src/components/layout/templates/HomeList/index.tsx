import HomeLaunchBackground from '../../molecules/HomeLaunchBackground';
import HomeListWrapper from '../../atoms/HomeListWrapper';
import LaunchesList from '../../organisms/LaunchesList';
import React from 'react';

const HomeList = () => {
    return (
        <HomeListWrapper>
            <HomeLaunchBackground />
            <LaunchesList />
        </HomeListWrapper>
    );
};

export default HomeList;
