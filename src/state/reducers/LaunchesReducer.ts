import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_LAUNCHES,
    SET_ROW_HEIGHT,
    SET_YEAR,
    TOGGLE_ORDER,
} from './../../constants/LaunchesConstants';
import { Transform, createTransform } from 'redux-persist';

import { BASE_SIZE } from '../../constants/ThemeConstants';
import { LAUNCHES_REDUCER_NAME } from '../../constants/StoreConstants';
import { ROW_HEIGHT } from '../../constants/LaunchesConstants';
import { ReducerActionType } from '../../../models/state/store';
import { TransformConfig } from 'redux-persist/es/createTransform';

const LARGE = (ROW_HEIGHT.LARGE + ROW_HEIGHT.MARGIN) * BASE_SIZE;

const initialState: LaunchesStateType = {
    items: [],
    year: '',
    order: 'desc',
    isLoading: true,
    rowHeight: LARGE,
};

export const LaunchesTransform: Transform<
    LaunchesStateType,
    LaunchesStateType,
    TransformConfig
> = createTransform(
    (inboundState: LaunchesStateType): LaunchesStateType => {
        return { ...inboundState };
    },
    (outboundState: LaunchesStateType): LaunchesStateType => {
        return {
            ...outboundState,
            items: initialState.items,
            isLoading: initialState.isLoading,
            rowHeight: initialState.rowHeight,
        };
    },
    { whitelist: [LAUNCHES_REDUCER_NAME] }
);

const LaunchesReducer = (
    state: LaunchesStateType = initialState,
    action: ReducerActionType
) => {
    switch (action.type) {
        case GET_LAUNCHES:
            return {
                ...state,
                isLoading: true,
            };
        case GET_LAUNCHES + FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case GET_LAUNCHES + SUCCESS:
            return {
                ...state,
                items: action.items,
                isLoading: false,
            };
        case SET_YEAR + SUCCESS:
            return {
                ...state,
                year: action.year,
            };
        case TOGGLE_ORDER:
            return {
                ...state,
                order: state.order === 'asc' ? 'desc' : 'asc',
            };
        case SET_ROW_HEIGHT:
            return {
                ...state,
                rowHeight: action.rowHeight,
            };
        default:
            return state;
    }
};

export default LaunchesReducer;
