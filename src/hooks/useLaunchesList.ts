import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../models/state/store';
import getFilteredItemsSelector from './../state/selectors/LaunchesSelectors/getFilteredItemsSelector';
import getLaunchesAction from './../state/actions/LaunchesActions/getLaunchesAction';
import isLoadingSelector from '../state/selectors/LaunchesSelectors/isLoadingSelector';

interface HookResponse {
    launches: Launch[];
    isLoading: boolean;
}

export default function useLaunchesList(): HookResponse {
    const dispatch = useDispatch();
    const getLaunches = useCallback(() => dispatch(getLaunchesAction()), [
        dispatch,
    ]);
    useEffect(() => {
        getLaunches();
    }, [getLaunches]);
    const launches = useSelector((state: Store) =>
        getFilteredItemsSelector(state)
    );
    const isLoading = useSelector((state: Store) => isLoadingSelector(state));
    return { launches, isLoading };
}
