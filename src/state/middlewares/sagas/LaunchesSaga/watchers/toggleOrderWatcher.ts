import { TOGGLE_ORDER } from './../../../../../constants/LaunchesConstants';
import { takeLatest } from 'redux-saga/effects';
import toggleOrderSaga from './../actions/toggleOrderSaga';

export default function* setYearWatcher() {
    yield takeLatest(TOGGLE_ORDER as any, toggleOrderSaga);
}
