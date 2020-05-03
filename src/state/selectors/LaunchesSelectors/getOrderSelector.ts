import { LAUNCHES_REDUCER_NAME } from '../../../constants/StoreConstants';
import { Store } from '../../../../models/state/store';

export default function getOrderSelector(state: Store): Order {
    return state[LAUNCHES_REDUCER_NAME].order;
}
