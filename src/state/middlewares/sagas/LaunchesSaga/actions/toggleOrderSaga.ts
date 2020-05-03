import getLaunchesAction from '../../../../actions/LaunchesActions/getLaunchesAction';
import { put } from 'redux-saga/effects';

export default function* toggleOrderSaga() {
    yield put(getLaunchesAction());
}
