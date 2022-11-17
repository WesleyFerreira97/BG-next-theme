import { createStitches } from "@stitches/react";
import {
    GapValues,
    ColumnsRange,
    ColumnsWithBreakpoints,
    GapWithBreakpoints
} from "./src/types/grid";

export const spacing = {
    1: "8px",
    2: "12px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "48px",
};

export const { styled, getCssText, config } = createStitches({
    theme: {
        spacing,
    },
    media: {
        // xs: '(max-width: 650px)',
        xs: "",
        sm: "(min-width: 650px)",
        md: "(min-width: 960px)",
        lg: "(min-width: 1280px)",
        xl: "(min-width: 1400px)",
    },
    utils: {
        gapXY: (value: GapWithBreakpoints | GapValues) => {
            // When input number
            if (typeof value === "number") {
                return { gap: spacing[value] };
            }

            // When input object with Breakpoints
            // const finalStyle: { [key: string]: {} } = {};
            const finalStyle: Partial<GapWithBreakpoints> = {};

            Object.keys(value).forEach((item) => {
                const breakpointValue = value[item];
                const gapSize = spacing[breakpointValue];

                // Return object with breakpoint pattern stitches
                return finalStyle[`@${item}`] = { gap: gapSize };
            });

            return finalStyle;
        },
        columns: (value: ColumnsWithBreakpoints) => {
            if (typeof value === "number") {
                return {
                    display: "grid",
                    gridTemplateColumns: `repeat(${value}, 1fr)`
                };
            }

            const finalStyle: { [key: string]: {} } = {};

            Object.keys(value).forEach(item => {
                const amountColumns = value[item];
                console.log("value");

                return finalStyle[`@${item}`] = {
                    display: "grid",
                    gridTemplateColumns: `repeat(${amountColumns}, 1fr)`
                };
            });

            return finalStyle;
        }
    }
});

