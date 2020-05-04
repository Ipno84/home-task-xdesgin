import { WebStorage, Transform } from 'redux-persist';
import { TransformConfig } from 'redux-persist/es/createTransform';

declare type ReducerActionType = GetLaunchesActionType &
    SetYearActionType &
    SetRowHeightActionType &
    ActionType;

declare type PersistKeyType = 'xspace';

declare interface ReduxPersistConfigType {
    version: number;
    key: PersistKeyType;
    storage: WebStorage;
    debug: boolean;
    transforms: Transform<
        LaunchesStateType,
        LaunchesStateType,
        TransformConfig
    >[];
}

declare interface Store {
    launches: LaunchesStateType;
}
