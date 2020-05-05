import { call, put } from 'redux-saga/effects';

import getLaunchesAction from '../../../../actions/LaunchesActions/getLaunchesAction';
import getLaunchesCall from './../../../../../api/calls/LaunchesCalls/getLaunchesCall';
// import { call, put, select } from 'redux-saga/effects';

// import getOrderSelector from '../../../../selectors/LaunchesSelectors/getOrderSelector';
// import getYearSelector from '../../../../selectors/LaunchesSelectors/getYearSelector';

export default function* getLaunchesSaga() {
    // const year = yield select(getYearSelector);
    // const order = yield select(getOrderSelector);
    let params: GetLaunchesParams = {};
    // params = { order };
    // if (year) {
    //     params.sort = 'launch_date_utc';
    //     params.launch_year = year;
    // }
    const items = yield call(getLaunchesCall, params);
    yield put(
        getLaunchesAction({
            success: true,
            items,
        })
    );
}
