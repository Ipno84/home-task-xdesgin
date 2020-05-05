import { createSelector } from 'reselect';
import getOrderSelector from './getOrderSelector';

export default createSelector(
    [getOrderSelector],
    (order: Order): boolean => order === 'asc'
);
