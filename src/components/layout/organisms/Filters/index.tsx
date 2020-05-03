import FiltersContainer from '../../atoms/FiltersContainer';
import React from 'react';
import SelectYear from '../../organisms/SelectYear';
import SortButton from '../../molecules/SortButton';

const Filters = () => {
    return (
        <FiltersContainer>
            <SelectYear />
            <SortButton />
        </FiltersContainer>
    );
};

export default Filters;
