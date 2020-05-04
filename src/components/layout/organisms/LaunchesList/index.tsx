import 'react-virtualized/styles.css';

import { List, WindowScroller } from 'react-virtualized';

import H5 from '../../atoms/H5';
import Launch from '../../molecules/Launch';
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

const LaunchesList = () => {
    const items = useLaunchesList();
    const rowHeight = useListRowHeight();
    console.log(rowHeight);
    return (
        <ListWrapper>
            {!items || items.length === 0 ? (
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
                                rowCount={items.length}
                                rowHeight={rowHeight}
                                rowRenderer={(payload: any) =>
                                    rowRenderer(
                                        { ...payload.style, height: rowHeight },
                                        items[payload.index]
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
