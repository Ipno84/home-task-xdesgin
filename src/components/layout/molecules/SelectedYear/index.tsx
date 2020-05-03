import React from 'react';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import getYearSelector from './../../../../state/selectors/LaunchesSelectors/getYearSelector';
import { useSelector } from 'react-redux';

const SelectedYear = () => {
    const year = useSelector((state: Store) => getYearSelector(state));
    if (!year) return null;
    return <Span>: {year}</Span>;
};

export default SelectedYear;
