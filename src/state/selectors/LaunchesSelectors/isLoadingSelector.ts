import { LAUNCHES_REDUCER_NAME } from '../../../constants/StoreConstants';
import { Store } from '../../../../models/state/store';

export default function isLoadingSelector(state: Store): boolean {
    return state[LAUNCHES_REDUCER_NAME].isLoading;
}
