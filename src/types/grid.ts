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

type ColumnsProps = ColumnsRange | Partial<ColumnsWithBreakpoints>;
type GapProps = GapValues | Partial<GapWithBreakpoints>;

type GridProps = {
    children?: ReactNode | ReactNode[];
    gap?: GapProps;
    columns?: ColumnsProps;
}

export type {
    GapValues,
    SpacingProps,
    ColumnsRange,
    ColumnsProps,
    GapProps,
    GridProps,
    Breakpoints,
    GapWithBreakpoints,
    ColumnsWithBreakpoints
};
