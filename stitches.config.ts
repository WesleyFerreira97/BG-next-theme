import { createStitches, PropertyValue } from "@stitches/react";
import {
    Breakpoints,
    ColumnsProps,
    ColumnsWithBreakpoints,
    GapProps,
    GapValues,
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

export const { styled, getCssText, config, css, globalCss, theme, } = createStitches({
    prefix: "bg-theme",
    theme: {
        colors: {
            primary: "#FF5101",
            primaryAlt: "#FF6500",
            secondary: "#3F3351",
            secondaryAlt: "#0060B1",
            tertiary: "#D22779",
            neutral: "#fff",
            neutralAlt: "#7a7a7a",
        },
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
        gapXY: (value: GapProps) => {
            // When input number
            if (typeof value === "number") {
                return { gap: spacing[value] };
            }

            // When input object with Breakpoints
            const usedBreakpoints = Object.keys(value) as Breakpoints[];
            const finalStyle: { [key: string]: {} } = {};

            usedBreakpoints.forEach((item) => {
                const breakpointValue = value[item] as GapValues;
                const gapSize = spacing[breakpointValue];

                // Return object with breakpoint pattern stitches
                return finalStyle[`@${item}`] = { gap: gapSize };
            });

            return finalStyle;
        },
        gridColumns: (value: ColumnsProps) => {
            if (typeof value === "number") {
                return {
                    display: "grid",
                    gridTemplateColumns: `repeat(${value}, 1fr)`
                };
            }

            const usedBreakpoints = Object.keys(value) as Breakpoints[];
            const finalStyle: { [key: string]: {} } = {};

            usedBreakpoints.forEach((item) => {
                const amountColumns = value[item];

                return finalStyle[`@${item}`] = {
                    display: "grid",
                    gridTemplateColumns: `repeat(${amountColumns}, 1fr)`
                };
            });

            return finalStyle;
        },
        bgColor: (value: string) => ({
            backgroundColor: value
        })
    }
});
