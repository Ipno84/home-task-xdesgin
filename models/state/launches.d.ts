declare interface LaunchesStateType {
    items: Launch[];
    year: string;
    order: Order;
    isLoading: boolean;
    rowHeight: number;
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

declare interface SetRowHeightActionArgs {
    rowHeight: number;
}

declare interface GetLaunchesActionType
    extends ActionType,
        GetLaunchesActionArgs {}

declare interface SetYearActionType extends ActionType, SetYearActionArgs {}

declare interface SetRowHeightActionType
    extends ActionType,
        SetRowHeightActionArgs {}

declare type LaunchesReducerName = 'launches';
