import { FAILURE, SUCCESS } from '../../constants/BaseConstants';
import {
    GET_LAUNCHES,
    SET_YEAR,
    TOGGLE_ORDER,
} from './../../constants/LaunchesConstants';

import { ReducerActionType } from '../../../models/state/store';

const initialState: LaunchesStateType = {
    items: [],
    year: '',
    order: 'asc',
    isLoading: false,
};

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
