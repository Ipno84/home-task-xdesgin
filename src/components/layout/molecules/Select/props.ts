export interface TriggerProps {
    buttonRef: React.MutableRefObject<HTMLButtonElement | undefined>;
    onClick: (event: MouseEvent | TouchEvent | KeyboardEvent) => void;
}

export interface ItemProps {
    onClick: (event: MouseEvent | TouchEvent | KeyboardEvent) => void;
}

export default interface Props {
    trigger: React.FC<TriggerProps>;
    item: React.FC<ItemProps>;
    options: Option[];
    onSelectOption: (option: Option) => void;
}

export interface Option {
    optionKey: string;
    label: string;
}
