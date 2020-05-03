import { put, select } from 'redux-saga/effects';

import getYearSelector from '../../../../selectors/LaunchesSelectors/getYearSelector';
import setYearAction from '../../../../actions/LaunchesActions/setYearAction';

export default function* submitLoginSaga({ year }: SetYearActionArgs) {
    const currentYear = yield select(getYearSelector);
    if (year !== currentYear) yield put(setYearAction({ success: true, year }));
}
