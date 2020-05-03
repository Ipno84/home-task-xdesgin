import { Store } from '../../../../models/state/store';
import createCachedSelector from 're-reselect';
import getYearSelector from './getYearSelector';

export default createCachedSelector(
    [getYearSelector, (_: Store, year: string) => year],
    (selectedYear, year): boolean => selectedYear === year
)((_: Store, year: string) => year);
