import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_LAUNCHES } from '../../../constants/LaunchesConstants';

/**
 * Redux action, without any payload it allows to be intercepted by saga middleware and to send
 * request to the API for getting launches
 * It's used in saga middleware too:
 * If success param is truthy the action allows to store the state of launches using the items param
 * Else, if error is truthy, it means that something's gone wrong in saga middleware
 *
 * @export
 * @param {(GetLaunchesActionArgs | null)} [payload=null]
 * @returns {GetLaunchesActionType}
 */
export default function getLaunchesAction(
    payload: GetLaunchesActionArgs | null = null
): GetLaunchesActionType {
    if (payload) {
        const { success, error, items } = payload;
        if (success) {
            return {
                type: GET_LAUNCHES + SUCCESS,
                items,
            };
        } else if (error) {
            return {
                type: GET_LAUNCHES + FAILURE,
                error,
            };
        }
    }
    return {
        type: GET_LAUNCHES,
    };
}
