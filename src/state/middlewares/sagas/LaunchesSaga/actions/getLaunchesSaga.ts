import { delay, put, select } from 'redux-saga/effects';

import getLaunchesAction from '../../../../actions/LaunchesActions/getLaunchesAction';
import getOrderSelector from '../../../../selectors/LaunchesSelectors/getOrderSelector';
import getYearSelector from '../../../../selectors/LaunchesSelectors/getYearSelector';

export default function* getLaunchesSaga() {
    const year = yield select(getYearSelector);
    const order = yield select(getOrderSelector);
    console.log(year, order);
    yield delay(2000);
    yield put(getLaunchesAction({ success: true, items: [] }));
}
