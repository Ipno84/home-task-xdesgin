import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import getLaunchesAction from './../../../../state/actions/LaunchesActions/getLaunchesAction';
import isLoadingSelector from './../../../../state/selectors/LaunchesSelectors/isLoadingSelector';

const ReloadButton = () => {
    const dispatch = useDispatch();
    const getLaunches = useCallback(() => dispatch(getLaunchesAction()), [
        dispatch,
    ]);
    const isLoading = useSelector((state: Store) => isLoadingSelector(state));
    return (
        <Button
            disabled={isLoading}
            rounded={true}
            animated={true}
            onClick={getLaunches}
        >
            <Span>Reload Data</Span>
            <Icon spin={isLoading} icon='refresh' />
        </Button>
    );
};

export default ReloadButton;
