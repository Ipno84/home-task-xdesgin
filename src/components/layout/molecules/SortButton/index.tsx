import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import Span from '../../atoms/Span';

const SortButton = () => {
    return (
        <Button>
            <Span>Sort Descending</Span>
            <Icon icon='sort' />
        </Button>
    );
};

export default SortButton;
