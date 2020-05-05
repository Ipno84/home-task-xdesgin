import { GET_LAUNCHES } from '../../../../../constants/LaunchesConstants';
import getLaunchesSaga from '../actions/getLaunchesSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* getLaunchesWatcher() {
    yield takeLatest(GET_LAUNCHES as any, getLaunchesSaga);
}
