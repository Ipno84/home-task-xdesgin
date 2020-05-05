import { all, put, select } from 'redux-saga/effects';

// import getLaunchesAction from '../../../../actions/LaunchesActions/getLaunchesAction';
import getYearSelector from '../../../../selectors/LaunchesSelectors/getYearSelector';
import setYearAction from '../../../../actions/LaunchesActions/setYearAction';

export default function* submitLoginSaga({ year }: SetYearActionArgs) {
    const currentYear = yield select(getYearSelector);
    if (year !== currentYear)
        yield all([
            put(setYearAction({ success: true, year })),
            // put(getLaunchesAction()),
        ]);
}
