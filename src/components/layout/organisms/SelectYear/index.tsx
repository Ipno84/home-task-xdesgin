import React, { useCallback } from 'react';

import FilterButton from '../../molecules/FilterButton';
import { Option } from '../../molecules/Select/props';
import Select from '../../molecules/Select';
import SelectItemYear from '../../molecules/SelectItemYear';
import setYearAction from './../../../../state/actions/LaunchesActions/setYearAction';
import { useDispatch } from 'react-redux';

const firstYear = 2006;
const currentYear = new Date().getFullYear();
const length = currentYear - firstYear + 1;

const options: Option[] = Object.keys(Array.from({ length })).map((e) => {
    const label = String(currentYear - Number(e));
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
