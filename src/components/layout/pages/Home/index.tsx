import React, { ReactElement } from 'react';

import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import HomeList from '../../templates/HomeList';

/**
 * Home page
 *
 * @returns {ReactElement}
 */
const Home: React.FC = (): ReactElement => {
    return (
        <>
            <Header />
            <Filters />
            <HomeList />
        </>
    );
};

export default Home;
