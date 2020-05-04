import { Store } from '../../../../models/state/store';
import createCachedSelector from 're-reselect';
import getFilteredItemsSelector from './getFilteredItemsSelector';

export default createCachedSelector(
    [getFilteredItemsSelector, (_: Store, index: number) => index],
    (items, index): Launch => items[index]
)((_: Store, index: number) => index);
