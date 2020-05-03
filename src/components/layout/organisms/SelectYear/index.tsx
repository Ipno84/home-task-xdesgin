import React, { useCallback } from 'react';

import FilterButton from '../../molecules/FilterButton';
import { Option } from '../../molecules/Select/props';
import Select from '../../molecules/Select';
import SelectItemYear from '../../molecules/SelectItemYear';
import setYearAction from './../../../../state/actions/LaunchesActions/setYearAction';
import { useDispatch } from 'react-redux';

const options: Option[] = Object.keys(Array.from({ length: 30 })).map((e) => {
    const label = String(2020 - Number(e));
    return {
        optionKey: label,
        label,
    };
});

const SelectYear: React.FC = () => {
    const dispatch = useDispatch();
    const setYear = useCallback((year) => dispatch(setYearAction({ year })), [
        dispatch,
    ]);
    return (
        <Select
            trigger={FilterButton}
            item={SelectItemYear}
            options={[{ optionKey: '', label: 'None' }, ...options]}
            onSelectOption={(option: Option) => setYear(option.optionKey)}
        />
    );
};

export default SelectYear;
