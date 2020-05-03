export default interface Props {
    trigger: React.FC;
    item: React.FC<any>;
    options: Option[];
    onSelectOption: (option: Option) => void;
}

export interface Option {
    optionKey: string;
    label: string;
}
