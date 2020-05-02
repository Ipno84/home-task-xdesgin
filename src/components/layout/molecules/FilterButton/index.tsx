import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import Span from '../../atoms/Span';

const FilterButton = () => {
    return (
        <Button>
            <Span>Filter by Year</Span>
            <Icon icon='select' />
        </Button>
    );
};

export default FilterButton;
