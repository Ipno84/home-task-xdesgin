import { WebStorage } from 'redux-persist';

declare type ReducerActionType = GetLaunchesActionType;

declare type PersistKeyType = 'xspace';

declare interface ReduxPersistConfigType {
    version: number;
    key: PersistKeyType;
    storage: WebStorage;
    debug: boolean;
}

declare interface Store {
    launches: LaunchesStateType;
}
