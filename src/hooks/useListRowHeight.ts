import { BASE_SIZE, mediaQueries } from './../constants/ThemeConstants';
import { useCallback, useEffect, useState } from 'react';

import { ROW_HEIGHT } from '../constants/LaunchesConstants';

const LARGE = (ROW_HEIGHT.LARGE + ROW_HEIGHT.MARGIN) * BASE_SIZE;
const TINY = (ROW_HEIGHT.TINY + ROW_HEIGHT.MARGIN) * BASE_SIZE;

export default function useListRowHeight() {
    const [rowHeight, setRowHeight] = useState(LARGE);

    const onWidowResize = useCallback(
        (e: Event) => {
            const windowWidth = (e.currentTarget as any).innerWidth;
            if (windowWidth >= mediaQueries.phone.min && rowHeight !== LARGE) {
                setRowHeight(LARGE);
            }
            if (windowWidth < mediaQueries.phone.min && rowHeight !== TINY) {
                setRowHeight(TINY);
            }
        },
        [rowHeight]
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
