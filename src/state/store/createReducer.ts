import { Config } from './../../constants/StoreConstants';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import rootReducers from './../reducers';

export default function createReducer(asyncReducers: any) {
    return persistReducer(
        Config,
        combineReducers({
            ...rootReducers,
            ...asyncReducers,
        })
    );
}
