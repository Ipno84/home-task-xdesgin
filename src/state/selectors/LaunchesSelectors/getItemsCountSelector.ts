import { createSelector } from 'reselect';
import getItemsSelector from './getItemsSelector';

export default createSelector(
    [getItemsSelector],
    (items: Launch[]): number => items.length
);
