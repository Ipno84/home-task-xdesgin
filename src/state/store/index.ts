import { Persistor, persistStore } from 'redux-persist';
import { Reducer, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { Saga } from 'redux-saga';

import LaunchesSaga from './../middlewares/sagas/LaunchesSaga';
import composeEnhancers from './composeEnhancers';
import createReducer from './createReducer';
import { fork } from 'redux-saga/effects';
import rootReducers from './../reducers';

const sagaMiddleware = createSagaMiddleware();

function configureStore(): { store: ReduxStore; persistor: Persistor } {
    let store: ReduxStore = createStore(
        createReducer({}),
        undefined,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    let persistor = persistStore(store, null, () => {
        store.getState();
    });

    (store as any).asyncReducers = { ...rootReducers };
    store.injectReducer = (key: string, asyncReducer: Reducer): void => {
        if (!store.asyncReducers[key]) {
            store.asyncReducers[key] = asyncReducer;
            store.replaceReducer(createReducer(store.asyncReducers));
            persistor.persist();
        }
    };

    store.asyncSagas = { LaunchesSaga };
    store.injectSaga = (key: string, asyncSaga: Saga<any[]>) => {
        function* combinedSagas() {
            yield fork(asyncSaga);
        }
        if (!store.asyncSagas[key]) {
            store.asyncSagas[key] = asyncSaga;
            sagaMiddleware.run(combinedSagas);
            persistor.persist();
        }
    };

    return { store, persistor };
}
const { store, persistor } = configureStore();

function* combinedSaga() {
    yield fork(LaunchesSaga);
}

sagaMiddleware.run(combinedSaga);

export { store, persistor };
