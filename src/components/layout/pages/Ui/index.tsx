import Filters from '../../organisms/Filters';
import H3 from './../../atoms/H3';
import H4 from './../../atoms/H4';
import Header from '../../organisms/Header';
import LaunchCard from './../../atoms/LaunchCard';
import LaunchesList from '../../organisms/LaunchesList';
import Rank from './../../atoms/Rank';
import React from 'react';
import Section from './../../atoms/Section';
import Span from './../../atoms/Span';

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
