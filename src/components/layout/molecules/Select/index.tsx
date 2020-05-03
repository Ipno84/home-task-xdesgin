import React, { useMemo, useRef, useState } from 'react';

import Props from './props';
import SelectContainer from '../../atoms/SelectContainer';
import SelectItem from '../../atoms/SelectItem';
import SelectWrapper from '../../atoms/SelectWrapper';
import useOutsideClick from '../../../../hooks/useOutsideClick';

const Select: React.FC<Props> = ({ trigger, options, onSelectOption }) => {
    const TriggerComponent: any = useMemo(() => trigger, [trigger]);
    const [isOpen, setIsOpen] = useState(false);
    const ref: React.MutableRefObject<HTMLDivElement | undefined> = useRef();
    useOutsideClick(ref, () => setIsOpen(false));
    return (
        <SelectWrapper>
            <TriggerComponent
                buttonRef={ref}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />
            <SelectContainer visible={isOpen}>
                {options.map((option) => {
                    return (
                        <SelectItem onClick={() => onSelectOption(option)}>
                            {option.label}
                        </SelectItem>
                    );
                })}
            </SelectContainer>
        </SelectWrapper>
    );
};

export default Select;
