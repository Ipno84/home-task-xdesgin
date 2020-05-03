import {
    GET_LAUNCHES,
    SET_YEAR,
    TOGGLE_ORDER,
} from './../../constants/LaunchesConstants';

import { ReducerActionType } from '../../../models/state/store';
import { SUCCESS } from '../../constants/BaseConstants';

const initialState: LaunchesStateType = {
    items: [],
    year: '',
    order: 'asc',
};

const LaunchesReducer = (
    state: LaunchesStateType = initialState,
    action: ReducerActionType
) => {
    switch (action.type) {
        case GET_LAUNCHES + SUCCESS:
            return {
                ...state,
                items: action.items,
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
