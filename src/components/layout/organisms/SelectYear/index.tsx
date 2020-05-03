import FilterButton from '../../molecules/FilterButton';
import { Option } from '../../molecules/Select/props';
import React from 'react';
import Select from '../../molecules/Select';

const options: Option[] = Object.keys(Array.from({ length: 30 })).map((e) => ({
    optionKey: String(2020 - Number(e)),
    label: String(2020 - Number(e)),
}));

const SelectYear: React.FC = () => {
    return (
        <Select
            trigger={FilterButton}
            options={options}
            onSelectOption={(option: Option) => console.log(option)}
        />
    );
};

export default SelectYear;
