import { SET_ROW_HEIGHT } from '../../../constants/LaunchesConstants';

/**
 * Redux action for storing right row height on launch list, it's for virtualized list
 *
 * @export
 * @param {SetRowHeightActionArgs} {
 *     rowHeight,
 * }
 * @returns {SetRowHeightActionType}
 */
export default function setRowHeightAction({
    rowHeight,
}: SetRowHeightActionArgs): SetRowHeightActionType {
    return {
        type: SET_ROW_HEIGHT,
        rowHeight,
    };
}
