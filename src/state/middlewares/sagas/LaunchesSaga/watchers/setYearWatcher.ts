import { SET_YEAR } from './../../../../../constants/LaunchesConstants';
import setYearSaga from './../actions/setYearSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* setYearWatcher() {
    yield takeLatest(SET_YEAR as any, setYearSaga);
}
