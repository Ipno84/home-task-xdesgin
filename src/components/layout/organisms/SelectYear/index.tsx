import { ItemProps, Option, TriggerProps } from '../../molecules/Select/props';
import React, { ReactElement, useCallback } from 'react';

import { FIRST_AVAILABLE_YEAR } from '../../../../constants/LaunchesConstants';
import FilterButton from '../../molecules/FilterButton';
import Select from '../../molecules/Select';
import SelectItemYear from '../../molecules/SelectItemYear';
import arrayOfLength from '../../../../helpers/arrayOfLength';
import setYearAction from './../../../../state/actions/LaunchesActions/setYearAction';
import { useDispatch } from 'react-redux';

const options: Option[] = arrayOfLength(
    new Date().getFullYear() - FIRST_AVAILABLE_YEAR + 1
).map((e) => {
    const label = String(new Date().getFullYear() - Number(e));
    return {
        optionKey: label,
        label,
    };
});

/**
 * Components that renders a select that contains all the year from now back to the year of first XSpace launch
 *
 * @returns {ReactElement}
 */
const SelectYear: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const setYear = useCallback((year) => dispatch(setYearAction({ year })), [
        dispatch,
    ]);
    return (
        <Select
            trigger={FilterButton as React.FC<TriggerProps>}
            item={SelectItemYear as React.FC<ItemProps>}
            options={[{ optionKey: '', label: 'None' }, ...options]}
            onSelectOption={(option: Option) => setYear(option.optionKey)}
        />
    );
};

export default SelectYear;
