import 'react-virtualized/styles.css';

import { List, WindowScroller } from 'react-virtualized';

import H5 from '../../atoms/H5';
import Launch from '../../molecules/Launch';
import LaunchSkeleton from '../../molecules/LaunchSkeleton';
import ListWrapper from '../../atoms/ListWrapper';
import React from 'react';
import useLaunchesList from '../../../../hooks/useLaunchesList';
import useListRowHeight from '../../../../hooks/useListRowHeight';

function rowRenderer(style: CSSRuleList, launch: Launch) {
    return (
        <div
            key={launch.flight_number}
            style={{
                ...style,
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
}

Object.keys(Array.from({ length: 12 }));

const LaunchesList = () => {
    const { launches, isLoading } = useLaunchesList();
    const rowHeight = useListRowHeight();
    return (
        <ListWrapper>
            {isLoading && (!launches || launches.length === 0) ? (
                Object.keys(Array.from({ length: 12 })).map((e) => (
                    <LaunchSkeleton />
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
                                rowRenderer={(payload: any) =>
                                    rowRenderer(
                                        { ...payload.style, height: rowHeight },
                                        launches[payload.index]
                                    )
                                }
                            />
                        </div>
                    )}
                </WindowScroller>
            )}
        </ListWrapper>
    );
};

export default LaunchesList;
