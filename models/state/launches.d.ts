declare interface LaunchesStateType {
    items: Launch[];
    year: string;
    order: Order;
    isLoading: boolean;
}

declare interface GetLaunchesActionArgs {
    success?: boolean;
    error?: Error;
    items?: Launch[];
}

declare interface SetYearActionArgs {
    year?: string;
    success?: boolean;
}

declare interface GetLaunchesActionType
    extends ActionType,
        GetLaunchesActionArgs {}

declare interface SetYearActionType extends ActionType, SetYearActionArgs {}

declare type LaunchesReducerName = 'launches';
