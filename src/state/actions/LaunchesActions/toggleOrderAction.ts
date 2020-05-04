import { TOGGLE_ORDER } from '../../../constants/LaunchesConstants';

/**
 * Redux action, it allows to store the sort action type to perform on launches list on client side
 *
 * @export
 * @returns {ActionType}
 */
export default function toggleOrderAction(): ActionType {
    return {
        type: TOGGLE_ORDER,
    };
}
