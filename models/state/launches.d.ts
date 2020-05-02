declare interface LaunchesStateType {
    items: Launch[];
}

declare interface GetLaunchesActionArgs {
    success?: boolean;
    error?: Error;
    items?: Launch[];
}

declare interface GetLaunchesActionType
    extends ActionType,
        GetLaunchesActionArgs {}

declare type LaunchesReducerName = 'launches';
