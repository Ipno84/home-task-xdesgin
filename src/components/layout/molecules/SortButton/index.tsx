import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import SelectedOrder from '../SelectedOrder';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import isLoadingSelector from './../../../../state/selectors/LaunchesSelectors/isLoadingSelector';
import toggleOrderAction from './../../../../state/actions/LaunchesActions/toggleOrderAction';

const SortButton = () => {
    const dispatch = useDispatch();
    const toggleOrder = useCallback(() => dispatch(toggleOrderAction()), [
        dispatch,
    ]);
    const isLoading = useSelector((state: Store) => isLoadingSelector(state));
    return (
        <Button disabled={isLoading} onClick={() => toggleOrder()}>
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
