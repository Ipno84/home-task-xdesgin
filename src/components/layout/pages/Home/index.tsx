import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import HomeList from '../../templates/HomeList';
import React from 'react';

const Home = () => {
    return (
        <>
            <Header />
            <Filters />
            <HomeList />
        </>
    );
};

export default Home;
