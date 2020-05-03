import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { GET_LAUNCHES } from '../../../constants/LaunchesConstants';

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
