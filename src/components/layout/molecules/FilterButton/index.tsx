import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Props from './props';
import React from 'react';
import SelectedYear from '../SelectedYear';
import Span from '../../atoms/Span';

const FilterButton: React.FC<Props> = ({ onClick, buttonRef }) => {
    return (
        <Button ref={buttonRef} onClick={onClick}>
            <Span>
                <Span hideSm={true}>Filter by</Span>
                <Span
                    hideSm={true}
                    dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
                />
                <Span>Year</Span>
                <SelectedYear />
            </Span>
            <Icon icon='select' />
        </Button>
    );
};

export default FilterButton;
