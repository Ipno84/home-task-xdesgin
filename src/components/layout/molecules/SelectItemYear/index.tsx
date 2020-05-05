import React, { ReactElement } from 'react';

import Props from './props';
import SelectItem from './../../atoms/SelectItem';
import { Store } from '../../../../../models/state/store';
import isSelectedYearSelector from './../../../../state/selectors/LaunchesSelectors/isSelectedYearSelector';
import { useSelector } from 'react-redux';

/**
 * Component that is used to render year item in Select component
 *
 * @param {Props} {
 *     label,
 *     optionKey,
 *     onClick,
 * }
 * @returns {ReactElement}
 */
const SelectItemYear: React.FC<Props> = ({
    label,
    optionKey,
    onClick,
}: Props): ReactElement => {
    const isSelectedYear = useSelector((state: Store) =>
        isSelectedYearSelector(state, optionKey)
    );
    return (
        <SelectItem selected={isSelectedYear} onClick={onClick}>
            {label}
        </SelectItem>
    );
};

export default SelectItemYear;
