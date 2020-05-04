import { BASE_SIZE, mediaQueries } from './../constants/ThemeConstants';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ROW_HEIGHT } from '../constants/LaunchesConstants';
import { Store } from '../../models/state/store';
import getRowHeightSelector from '../state/selectors/LaunchesSelectors/getRowHeightSelector';
import setRowHeightAction from '../state/actions/LaunchesActions/setRowHeightAction';

const LARGE = (ROW_HEIGHT.LARGE + ROW_HEIGHT.MARGIN) * BASE_SIZE;
const TINY = (ROW_HEIGHT.TINY + ROW_HEIGHT.MARGIN) * BASE_SIZE;

/**
 * React hook, it return the row item list height. It's used for virtualized launches list, it allows,
 * for each devices, to establish the right item position during scroll
 *
 * @export
 * @returns {number}
 */
export default function useListRowHeight(): number {
    const dispatch = useDispatch();
    const setRowHeight = useCallback(
        (height: number) => dispatch(setRowHeightAction({ rowHeight: height })),
        [dispatch]
    );
    const rowHeight = useSelector((state: Store) =>
        getRowHeightSelector(state)
    );

    const onWidowResize = useCallback(
        (e: Event) => {
            const windowWidth = (e.currentTarget as Window).innerWidth;
            if (
                windowWidth >= mediaQueries.phone.min * BASE_SIZE &&
                rowHeight !== LARGE
            ) {
                setRowHeight(LARGE);
            }
            if (
                windowWidth < mediaQueries.phone.min * BASE_SIZE &&
                rowHeight !== TINY
            ) {
                setRowHeight(TINY);
            }
        },
        [rowHeight, setRowHeight]
    );

    useEffect(() => {
        window.addEventListener('resize', onWidowResize);
        window.dispatchEvent(new Event('resize'));
        return () => {
            window.removeEventListener('resize', onWidowResize);
        };
    }, [onWidowResize]);

    useEffect(() => {
        window.dispatchEvent(new Event('scroll'));
    }, [rowHeight]);
    return rowHeight;
}
