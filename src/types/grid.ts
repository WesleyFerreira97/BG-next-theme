import { ReactNode } from "react";
import { spacing } from "stitches.config";

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type SpacingProps = "8px" | "12px" | "16px" | "24px" | "32px" | "48px";
type ColumnsRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GapValues = keyof typeof spacing;

type ColumnsWithBreakpoints = {
    [Key in Breakpoints]: ColumnsRange;
}

type GapWithBreakpoints = {
    [Key in Breakpoints]: GapValues;
}

type GridProps = {
    children?: ReactNode | ReactNode[];
    gap?: Partial<GapWithBreakpoints> | GapValues;
    columns?: ColumnsRange | Partial<ColumnsWithBreakpoints>;
}

export type {
    GridProps,
    GapValues,
    SpacingProps,
    ColumnsRange,
    ColumnsWithBreakpoints,
    GapWithBreakpoints
};
