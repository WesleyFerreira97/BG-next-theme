import { ReactNode } from "react"
import { spacing } from "../../stitches.config";

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type ColumnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnsProps = {
    [Key in Breakpoints]: ColumnsRange;
}

type GapValues = keyof typeof spacing;

type GapWithBreakpoints = {
    [Key in Breakpoints]: GapValues;
}

type GridProps = {
    children?: ReactNode | ReactNode[];
    // gap?: GapValues | Partial<GapWithBreakpoints>
    gap?: any,
    // columns?: Partial<ColumnsProps>
    columns?: any
}

export type {
    GridProps,
    GapValues
}