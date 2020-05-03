export default interface Props {
    trigger: React.FC;
    options: Option[];
    onSelectOption: (option: Option) => void;
}

export interface Option {
    optionKey: string;
    label: string;
}
