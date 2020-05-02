import { FAILURE, SUCCESS } from '../../constants/BaseConstants';

import { GET_LAUNCHES } from '../../constants/LaunchesConstants';

export default function getLaunchesAction({
    success,
    error,
    items,
}: GetLaunchesActionArgs): GetLaunchesActionType {
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
    return {
        type: GET_LAUNCHES,
    };
}
