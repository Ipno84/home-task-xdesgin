import Props from './props';
import React from 'react';
import SelectItem from './../../atoms/SelectItem';
import { Store } from '../../../../../models/state/store';
import isSelectedYearSelector from './../../../../state/selectors/LaunchesSelectors/isSelectedYearSelector';
import { useSelector } from 'react-redux';

const SelectItemYear: React.FC<Props> = ({ label, optionKey, onClick }) => {
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
