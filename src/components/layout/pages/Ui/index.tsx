import Filters from '../../organisms/Filters';
import Header from '../../organisms/Header';
import LaunchesList from '../../organisms/LaunchesList';
import React from 'react';

const Ui = () => {
    return (
        <>
            <Header />
            <Filters />
            <LaunchesList />
        </>
    );
};

export default Ui;
