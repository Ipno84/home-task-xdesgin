import { LAUNCHES_REDUCER_NAME } from '../../../constants/StoreConstants';
import { Store } from '../../../../models/state/store';

export default function getItemsSelector(state: Store): Launch[] {
    return state[LAUNCHES_REDUCER_NAME].items;
}
