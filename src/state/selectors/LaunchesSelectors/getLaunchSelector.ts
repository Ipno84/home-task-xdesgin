import { Store } from '../../../../models/state/store';
import createCachedSelector from 're-reselect';
import getItemsSelector from './getItemsSelector';

export default createCachedSelector(
    [getItemsSelector, (_: Store, flightNumber: number) => flightNumber],
    (items, flightNumber): Launch | undefined =>
        items
            ? items.find((e: Launch) => e.flight_number === flightNumber)
            : undefined
)((_: Store, flightNumber: number) => flightNumber);
