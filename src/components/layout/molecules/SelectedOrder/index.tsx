import React from 'react';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import isAscendingOrderSelector from './../../../../state/selectors/LaunchesSelectors/isAscendingOrderSelector';
import { useSelector } from 'react-redux';

const SelectedOrder = () => {
    const isAsc = useSelector((state: Store) =>
        isAscendingOrderSelector(state)
    );
    return (
        <>
            <Span hideSm={true}>{isAsc ? 'Ascending' : 'Descending'}</Span>
            <Span showSm={true}>{isAsc ? 'Asc' : 'Desc'}</Span>
        </>
    );
};

export default SelectedOrder;
