import { fork } from 'redux-saga/effects';
import getLaunchesWatcher from './watchers/getLaunchesWatcher';
import setYearWatcher from './watchers/setYearWatcher';
import toggleOrderWatcher from './watchers/toggleOrderWatcher';

export default function* LaunchesSaga() {
    yield fork(setYearWatcher);
    yield fork(getLaunchesWatcher);
    yield fork(toggleOrderWatcher);
}
