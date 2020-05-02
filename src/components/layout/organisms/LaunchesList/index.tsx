import 'react-virtualized/styles.css';

import { List, WindowScroller } from 'react-virtualized';

import Launch from '../../molecules/Launch';
import React from 'react';

const list = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
];

function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
}: any) {
    return (
        <div
            key={index}
            style={{
                ...style,
                width: '100%',
            }}
        >
            <Launch />
            {/* {list[index]} */}
        </div>
    );
}

const LaunchesList = () => {
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
                    rowCount={list.length}
                    rowHeight={85}
                    rowRenderer={rowRenderer}
                />
            )}
        </WindowScroller>
    );
};

export default LaunchesList;
