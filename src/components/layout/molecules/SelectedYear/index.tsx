import React, { ReactElement } from 'react';

import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import getYearSelector from './../../../../state/selectors/LaunchesSelectors/getYearSelector';
import { useSelector } from 'react-redux';

/**
 * Component the render the current selected year for filtering launches list
 * it returns null if no year is selected
 *
 * @returns {(ReactElement | null)}
 */
const SelectedYear: React.FC = (): ReactElement | null => {
    const year = useSelector((state: Store) => getYearSelector(state));
    if (!year) return null;
    return <Span>: {year}</Span>;
};

export default SelectedYear;
