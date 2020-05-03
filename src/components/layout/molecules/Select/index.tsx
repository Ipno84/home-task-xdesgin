import React, { useMemo, useRef, useState } from 'react';

import Props from './props';
import SelectContainer from '../../atoms/SelectContainer';
import SelectWrapper from '../../atoms/SelectWrapper';
import useOutsideClick from '../../../../hooks/useOutsideClick';

const Select: React.FC<Props> = ({
    trigger,
    item,
    options,
    onSelectOption,
}) => {
    const TriggerComponent: any = useMemo(() => trigger, [trigger]);
    const ItemComponent: any = useMemo(() => item, [item]);
    const [isOpen, setIsOpen] = useState(false);
    const ref: React.MutableRefObject<HTMLDivElement | undefined> = useRef();
    useOutsideClick(ref, () => setIsOpen(false));
    return (
        <SelectWrapper>
            <TriggerComponent
                buttonRef={ref}
                onClick={() => setIsOpen(!isOpen)}
            />
            <SelectContainer visible={isOpen}>
                {options.map((option) => {
                    return (
                        <ItemComponent
                            key={option.optionKey}
                            onClick={() => onSelectOption(option)}
                            {...option}
                        />
                    );
                })}
            </SelectContainer>
        </SelectWrapper>
    );
};

export default Select;
