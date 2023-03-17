import { styled } from "stitches.config";
import { MainNavbarProps } from ".";

export const MainNavbarWrap = styled("div", {
    height: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1.25rem 0",

    variants: {
        position: {
            relative: { position: "relative" },
            absolute: { position: "absolute" }
        },
        bgColor: {
            transparent: { backgroundColor: "rgba(0,0,0,.3)" },
            primary: { backgroundColor: "$primary" }
        }
    },

    "&:after": {
        content: "''",
        position: "absolute",
        top: "0",
        height: "100%",
        width: "100%",
        opacity: 0.2
        /* background-color: ${props => props.theme.colors.secondary}; */
    },

    "> *": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: ".5rem",
        padding: "0 1.5rem",
        zIndex: 10,
        lineHeight: 0,
        color: "#fff"
    },

    ".navbar": {

        "&__brand": {
            cursor: "pointer",
        },
        "&__menu, &__cart": {
            height: "100 %",
            display: "flex",
            alignItems: "center",
            padding: "0 .5rem",
            fontSize: "1.5rem",
            color: "$neutral",
            cursor: "pointer",
        },

        "&__brand > * ": {
            fontSize: "2rem",
            themeFont: "title",
            fontStyle: "normal",
            fontWeight: 700,
            // color: ${ props => props.theme.colors.neutral };
        }
    },

    ".brand--desktop": {
        display: "none",
    },

    "@md": {
        ".brand--desktop": {
            display: "block",
        },

        ".brand--mobile": {
            display: "none",
        }
    }
});


