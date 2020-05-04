import React, { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import getLaunchesAction from './../../../../state/actions/LaunchesActions/getLaunchesAction';
import isLoadingSelector from './../../../../state/selectors/LaunchesSelectors/isLoadingSelector';

/**
 * Component the renders reload button, it's fixed on the top and right of the screen,
 * it allow to request launches to the API.
 * Once request is launched the icon begin to spin and it stops once the request has returned (no matter the response)
 * On browser that supports hover feature, the button text is shown on hover
 *
 * @returns {ReactElement}
 */
const ReloadButton: React.FC = (): ReactElement => {
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
