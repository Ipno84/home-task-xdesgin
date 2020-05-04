import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from '../../models/state/store';
import getFilteredItemsSelector from './../state/selectors/LaunchesSelectors/getFilteredItemsSelector';
import getLaunchesAction from './../state/actions/LaunchesActions/getLaunchesAction';

export default function useLaunchesList(): Launch[] {
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
    return launches;
}
