import { fork } from 'redux-saga/effects';
import setYearWatcher from './watchers/setYearWatcher';

export default function* LaunchesSaga() {
    yield fork(setYearWatcher);
}
