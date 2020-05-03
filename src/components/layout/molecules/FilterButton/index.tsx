import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import Span from '../../atoms/Span';

const FilterButton = () => {
    return (
        <Button>
            <Span>
                <Span hideSm={true}>Filter by</Span>
                <Span
                    hideSm={true}
                    dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
                />
                <Span>Year</Span>
            </Span>
            <Icon icon='select' />
        </Button>
    );
};

export default FilterButton;
