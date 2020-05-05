import { Config } from '../../constants/StoreConfigConstants';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import rootReducers from './../reducers';

export default function createReducer(asyncReducers: any) {
    return persistReducer(
        Config,
        combineReducers({
            ...rootReducers,
            ...asyncReducers,
        }) as any
    );
}
