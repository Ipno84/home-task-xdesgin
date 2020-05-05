import 'react-virtualized/styles.css';

import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import React, { ReactElement } from 'react';

import H5 from '../../atoms/H5';
import Launch from '../../molecules/Launch';
import LaunchSkeleton from '../../molecules/LaunchSkeleton';
import ListWrapper from '../../atoms/ListWrapper';
import { Store } from '../../../../../models/state/store';
import getLaunchItemSelector from '../../../../state/selectors/LaunchesSelectors/getLaunchItemSelector';
import getRowHeightSelector from '../../../../state/selectors/LaunchesSelectors/getRowHeightSelector';
import useLaunchesList from '../../../../hooks/useLaunchesList';
import useListRowHeight from '../../../../hooks/useListRowHeight';
import { useSelector } from 'react-redux';

interface OptionsProps {
    rowHeight: number;
    launch: Launch;
}

const RowRenderer = (props: ListRowProps) => {
    const rowHeight = useSelector((state: Store) =>
        getRowHeightSelector(state)
    );
    const launch = useSelector((state: Store) =>
        getLaunchItemSelector(state, props.index)
    );
    return (
        <div
            key={launch.flight_number}
            style={{
                ...props.style,
                height: `${rowHeight}px`,
                width: '100%',
            }}
        >
            <Launch
                flightNumber={launch.flight_number}
                missionName={launch.mission_name}
                date={launch.launch_date_unix}
                rocketName={
                    launch.rocket && launch.rocket.rocket_name
                        ? launch.rocket.rocket_name
                        : ''
                }
            />
        </div>
    );
};

/**
 * Component that renders a message if the launches list is empty and there's no pending request to API
 * It renders a list of Skeleton components if the launches list is empty but there's a pending request
 * Although it renders a virtualized list. Even if the list is large, just the item visible in viewport
 * are rendered
 *
 * @returns {ReactElement}
 */
const LaunchesList: React.FC = (): ReactElement => {
    const { launches, isLoading } = useLaunchesList();
    const rowHeight = useListRowHeight();
    return (
        <ListWrapper>
            {isLoading && (!launches || launches.length === 0) ? (
                Object.keys(Array.from({ length: 12 })).map((e) => (
                    <LaunchSkeleton key={e} />
                ))
            ) : !launches || launches.length === 0 ? (
                <H5>No launches found</H5>
            ) : (
                <WindowScroller>
                    {({
                        height,
                        isScrolling,
                        registerChild,
                        onChildScroll,
                        scrollTop,
                    }) => (
                        <div ref={registerChild}>
                            <List
                                autoHeight
                                height={height}
                                isScrolling={isScrolling}
                                onScroll={onChildScroll}
                                scrollTop={scrollTop}
                                width={300}
                                rowCount={launches.length}
                                rowHeight={rowHeight}
                                rowRenderer={(props: ListRowProps) => (
                                    <RowRenderer {...props} />
                                )}
                            />
                        </div>
                    )}
                </WindowScroller>
            )}
        </ListWrapper>
    );
};

export default LaunchesList;
