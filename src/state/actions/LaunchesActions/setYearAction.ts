import {
    FIRST_AVAILABLE_YEAR,
    SET_YEAR,
} from '../../../constants/LaunchesConstants';

import { SUCCESS } from '../../../constants/BaseConstants';

/**
 * Action that allows to store the selected year info
 * Data is stored just if the success param is truthy
 * This approach could be used in safa middlware to perform a request to the api
 * (i.e. you could performa a request if you want to filter launches request on server side)
 *
 * @export
 * @param {SetYearActionArgs} {
 *     year,
 *     success,
 * }
 * @returns {SetYearActionType}
 */
export default function setYearAction({
    year,
    success,
}: SetYearActionArgs): SetYearActionType {
    const transformedYear =
        year === '' || isNaN(Number(year))
            ? ''
            : Number(year) < FIRST_AVAILABLE_YEAR
            ? String(FIRST_AVAILABLE_YEAR)
            : year;
    if (success) {
        return {
            type: SET_YEAR + SUCCESS,
            year: transformedYear,
        };
    }
    return {
        type: SET_YEAR,
        year: transformedYear,
    };
}
