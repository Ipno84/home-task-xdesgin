import { Reducer, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { Saga } from 'redux-saga';

import composeEnhancers from './composeEnhancers';
import createReducer from './createReducer';
import { fork } from 'redux-saga/effects';
import { persistStore } from 'redux-persist';
import rootReducers from './../reducers';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
    let store: any = createStore(
        createReducer({}),
        undefined,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    let persistor = persistStore(store, null, () => {
        store.getState();
    });

    (store as any).asyncReducers = { ...rootReducers };
    (store as any).injectReducer = (key: string, asyncReducer: Reducer) => {
        if (!(store as any).asyncReducers[key]) {
            (store as any).asyncReducers[key] = asyncReducer;
            store.replaceReducer(createReducer((store as any).asyncReducers));
            persistor.persist();
        }
    };

    (store as any).asyncSagas = {};
    (store as any).injectSaga = (key: string, asyncSaga: Saga<any[]>) => {
        function* combinedSagas() {
            yield fork(asyncSaga);
        }
        if (!(store as any).asyncSagas[key]) {
            (store as any).asyncSagas[key] = asyncSaga;
            sagaMiddleware.run(combinedSagas);
            persistor.persist();
        }
    };

    return { store, persistor };
}
const { store, persistor } = configureStore();

function* combinedSaga() {}

sagaMiddleware.run(combinedSaga);

export { store, persistor };
