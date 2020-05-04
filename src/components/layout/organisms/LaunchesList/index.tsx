import 'react-virtualized/styles.css';

import { List, WindowScroller } from 'react-virtualized';

import Launch from '../../molecules/Launch';
import React from 'react';
import { Store } from '../../../../../models/state/store';
import getFilteredItemsSelector from './../../../../state/selectors/LaunchesSelectors/getFilteredItemsSelector';
import useListRowHeight from '../../../../hooks/useListRowHeight';
import { useSelector } from 'react-redux';

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
    const items = useSelector((state: Store) =>
        getFilteredItemsSelector(state)
    );
    const rowHeight = useListRowHeight();
    return (
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
    );
};

export default LaunchesList;
