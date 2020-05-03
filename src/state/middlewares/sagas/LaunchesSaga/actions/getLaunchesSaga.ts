import { call, put, select } from 'redux-saga/effects';

import getItemsCountSelector from '../../../../selectors/LaunchesSelectors/getItemsCountSelector';
import getLaunchesAction from '../../../../actions/LaunchesActions/getLaunchesAction';
import getLaunchesCall from './../../../../../api/calls/LaunchesCalls/getLaunchesCall';
import getOrderSelector from '../../../../selectors/LaunchesSelectors/getOrderSelector';
import getYearSelector from '../../../../selectors/LaunchesSelectors/getYearSelector';

export default function* getLaunchesSaga() {
    const year = yield select(getYearSelector);
    const order = yield select(getOrderSelector);
    const offset = yield select(getItemsCountSelector);
    let params: GetLaunchesParams = {
        limit: 10,
        order,
    };
    // if (offset) params.offset = offset;
    if (year) {
        params.sort = 'launch_year';
        params.launch_year = year;
    }
    const items = yield call(getLaunchesCall, params);
    yield put(getLaunchesAction({ success: true, items }));
}
