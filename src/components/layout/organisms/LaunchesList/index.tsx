import 'react-virtualized/styles.css';

import { List, WindowScroller } from 'react-virtualized';

import Launch from '../../molecules/Launch';
import React from 'react';
import { Store } from '../../../../../models/state/store';
import getItemsSelector from './../../../../state/selectors/LaunchesSelectors/getItemsSelector';
import { useSelector } from 'react-redux';

function rowRenderer(style: any, launch: Launch) {
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
    const items = useSelector((state: Store) => getItemsSelector(state));
    return (
        <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
                <List
                    autoHeight
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    width={300}
                    rowCount={items.length}
                    rowHeight={85}
                    rowRenderer={(payload: any) => {
                        return rowRenderer(payload.style, items[payload.index]);
                    }}
                />
            )}
        </WindowScroller>
    );
};

export default LaunchesList;
