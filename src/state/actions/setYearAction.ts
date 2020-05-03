import { SET_YEAR } from '../../constants/LaunchesConstants';

export default function setYearAction({
    year,
}: SetYearActionArgs): SetYearActionType {
    return {
        type: SET_YEAR,
        year,
    };
}
