import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_LAUNCHES,
    SET_YEAR,
    TOGGLE_ORDER,
} from './../../constants/LaunchesConstants';
import { Transform, createTransform } from 'redux-persist';

import { LAUNCHES_REDUCER_NAME } from '../../constants/StoreConstants';
import { ReducerActionType } from '../../../models/state/store';
import { TransformConfig } from 'redux-persist/es/createTransform';

const initialState: LaunchesStateType = {
    items: [],
    year: '',
    order: 'desc',
    isLoading: true,
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
        default:
            return state;
    }
};

export default LaunchesReducer;
