import { createStitches } from "@stitches/react";
import {
    Breakpoints,
    ColumnsProps,
    GapProps,
    GapValues,
} from "./src/types/grid";

export const themeSizes: { [key: number]: string } = {
    1: "0.5rem",  // 8px
    2: "0.75rem", // 12px
    3: "1rem",    // 16px
    4: "1.25rem", // 20px
    5: "1.5rem",  // 24px
    6: "1.75rem", // 28px
    7: "2rem",    // 32px
    8: "2.25rem", // 36px
    9: "2.5rem",  // 40px
    10: "2.75rem",// 44px
    11: "3rem",   // 48px
};

export const { styled, getCssText, config, css, globalCss, theme } = createStitches({
    prefix: "bg-theme",
    theme: {
        colors: {
            primary: "#68B984",
            primaryAlt: "#FF6500",
            secondary: "#3F3351",
            secondaryAlt: "#0060B1",
            "$tertiary": "#D22779",
            "$neutral": "#fff",
            neutralAlt: "#7a7a7a",
        },
        fontSizes: { ...themeSizes },
        sizes: { ...themeSizes },
        fonts: {
            primaryFont: "Aquire",
            secondaryFont: "Poppins",
        }
    },
    media: {
        xsMax: "(max-width: 650px)",
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
                return { gap: themeSizes[value] };
            }

            // When input object with Breakpoints
            const usedBreakpoints = Object.keys(value) as Breakpoints[];
            const finalStyle: { [key: string]: {} } = {};

            usedBreakpoints.forEach((item) => {
                const breakpointValue = value[item] as GapValues;
                const gapSize = themeSizes[breakpointValue];

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