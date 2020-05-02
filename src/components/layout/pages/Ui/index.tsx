import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import Span from '../../atoms/Span';

const Ui = () => {
    return (
        <>
            <Button>
                <Span>Filter by Year</Span>
                <Icon icon='select' />
            </Button>
            <Button>
                <Span>Sort Descending</Span>
                <Icon icon='sort' />
            </Button>
            <Button rounded={true} animated={true}>
                <Span>Reload Data</Span>
                <Icon icon='refresh' />
            </Button>
        </>
    );
};

export default Ui;
