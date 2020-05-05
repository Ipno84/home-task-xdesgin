import React, { ReactElement } from 'react';

import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import isAscendingOrderSelector from './../../../../state/selectors/LaunchesSelectors/isAscendingOrderSelector';
import { useSelector } from 'react-redux';

/**
 * Component that render the corrent sorting method using short or long format, it depends on the device
 *
 * @returns {ReactElement}
 */
const SelectedOrder: React.FC = (): ReactElement => {
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
