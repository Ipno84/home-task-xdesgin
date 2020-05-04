import { PERSIST_KEY, STORE_VERSION } from './StoreConstants';

import { LaunchesTransform } from '../state/reducers/LaunchesReducer';
import { ReduxPersistConfigType } from '../../models/state/store';
import storage from 'redux-persist/lib/storage';

export const Config: ReduxPersistConfigType = {
    version: STORE_VERSION,
    key: PERSIST_KEY,
    debug: process.env.NODE_ENV === 'development',
    storage,
    transforms: [LaunchesTransform],
};
