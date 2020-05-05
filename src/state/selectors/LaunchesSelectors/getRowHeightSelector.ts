import { LAUNCHES_REDUCER_NAME } from '../../../constants/StoreConstants';
import { Store } from '../../../../models/state/store';

export default function getRowHeightSelector(state: Store): number {
    return state[LAUNCHES_REDUCER_NAME].rowHeight;
}
