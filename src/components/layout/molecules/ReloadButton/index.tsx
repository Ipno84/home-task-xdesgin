import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import Span from '../../atoms/Span';

const ReloadButton = () => {
    return (
        <Button rounded={true} animated={true}>
            <Span>Reload Data</Span>
            <Icon icon='refresh' />
        </Button>
    );
};

export default ReloadButton;
