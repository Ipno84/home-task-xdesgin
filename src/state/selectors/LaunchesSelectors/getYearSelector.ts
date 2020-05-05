import { LAUNCHES_REDUCER_NAME } from '../../../constants/StoreConstants';
import { Store } from '../../../../models/state/store';

export default function getYearSelector(state: Store): string {
    return state[LAUNCHES_REDUCER_NAME].year;
}
