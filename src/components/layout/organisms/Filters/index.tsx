import FilterButton from '../../molecules/FilterButton';
import FiltersContainer from '../../atoms/FiltersContainer';
import React from 'react';
import SortButton from '../../molecules/SortButton';

const Filters = () => {
    return (
        <FiltersContainer>
            <FilterButton />
            <SortButton />
        </FiltersContainer>
    );
};

export default Filters;
