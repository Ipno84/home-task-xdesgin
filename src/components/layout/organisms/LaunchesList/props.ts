import { Grid } from "react-virtualized";

export interface RowRenderProps {
    index: number;
    isScrolling: boolean;
    isVisible: boolean;
    key: string;
    parent: Grid;
    style: CSSRuleList
}