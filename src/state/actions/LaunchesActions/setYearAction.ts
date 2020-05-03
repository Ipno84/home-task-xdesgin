import { SET_YEAR } from '../../../constants/LaunchesConstants';
import { SUCCESS } from '../../../constants/BaseConstants';

export default function setYearAction({
    year,
    success,
}: SetYearActionArgs): SetYearActionType {
    if (success) {
        return {
            type: SET_YEAR + SUCCESS,
            year,
        };
    }
    return {
        type: SET_YEAR,
        year,
    };
}
