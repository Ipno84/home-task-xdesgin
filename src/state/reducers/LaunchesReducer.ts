import { GET_LAUNCHES } from './../../constants/LaunchesConstants';
import { ReducerActionType } from '../../../models/state/store';
import { SUCCESS } from '../../constants/BaseConstants';

const initialState: LaunchesStateType = {
    items: [],
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
        default:
            return state;
    }
};

export default LaunchesReducer;
