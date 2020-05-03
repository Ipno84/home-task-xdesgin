import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import React from 'react';
import Span from '../../atoms/Span';

const SortButton = () => {
    return (
        <Button>
            <Span>
                <Span hideSm={true}>Sort</Span>
                <Span
                    hideSm={true}
                    dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
                />
                <Span>Descending</Span>
            </Span>
            <Icon icon='sort' />
        </Button>
    );
};

export default SortButton;
