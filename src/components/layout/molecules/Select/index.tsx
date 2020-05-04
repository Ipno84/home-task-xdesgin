import Props, { ItemProps, TriggerProps } from './props';
import React, { ReactElement, useMemo, useRef, useState } from 'react';

import SelectContainer from '../../atoms/SelectContainer';
import SelectWrapper from '../../atoms/SelectWrapper';
import useOutsideClick from '../../../../hooks/useOutsideClick';

/**
 * Select component, trigger and item props are used, respectively, as the selecte trigger element and
 * component that renders every option item
 *
 * TriggerComponent has to implement the buttonRef prop, a property that will pass down the reference
 * ItemComponent has to implement onClick prop to allow effects when user choose of the options
 *
 * @param {Props} {
 *     trigger,
 *     item,
 *     options,
 *     onSelectOption,
 * }
 * @returns {ReactElement}
 */
const Select: React.FC<Props> = ({
    trigger,
    item,
    options,
    onSelectOption,
}: Props): ReactElement => {
    const TriggerComponent: React.FC<TriggerProps> = useMemo(() => trigger, [
        trigger,
    ]);
    const ItemComponent: React.FC<ItemProps> = useMemo(() => item, [item]);
    const [isOpen, setIsOpen] = useState(false);
    const ref: React.MutableRefObject<HTMLButtonElement | undefined> = useRef();
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
                        <ItemComponent
                            key={option.optionKey}
                            onClick={() => {
                                onSelectOption(option);
                            }}
                            {...option}
                        />
                    );
                })}
            </SelectContainer>
        </SelectWrapper>
    );
};

export default Select;
