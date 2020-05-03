import React, { useCallback } from 'react';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import SelectedOrder from '../SelectedOrder';
import Span from '../../atoms/Span';
import toggleOrderAction from './../../../../state/actions/LaunchesActions/toggleOrderAction';
import { useDispatch } from 'react-redux';

const SortButton = () => {
    const dispatch = useDispatch();
    const toggleOrder = useCallback(() => dispatch(toggleOrderAction()), [
        dispatch,
    ]);
    return (
        <Button onClick={() => toggleOrder()}>
            <Span>
                <Span hideSm={true}>Sort</Span>
                <Span
                    hideSm={true}
                    dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
                />
                <SelectedOrder />
            </Span>
            <Icon icon='sort' />
        </Button>
    );
};

export default SortButton;
