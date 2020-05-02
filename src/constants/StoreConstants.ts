import {
    PersistKeyType,
    ReduxPersistConfigType,
} from '../../models/state/store';

import storage from 'redux-persist/lib/storage';

export const LAUNCHES_REDUCER_NAME: LaunchesReducerName = 'launches';
const PERSIST_KEY: PersistKeyType = 'xspace';

export const Config: ReduxPersistConfigType = {
    version: 0,
    key: PERSIST_KEY,
    debug: process.env.NODE_ENV === 'development',
    storage,
};
