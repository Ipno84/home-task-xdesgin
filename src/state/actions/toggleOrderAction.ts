import { TOGGLE_ORDER } from '../../constants/LaunchesConstants';

export default function toggleOrderAction(): ActionType {
    return {
        type: TOGGLE_ORDER,
    };
}
