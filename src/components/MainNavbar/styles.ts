import { styled } from "stitches.config";
import { MainNavbarProps } from ".";

export const MainNavbarWrap = styled("div", {
    height: "70px",
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

    "> *": {
        width: "100%",
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        gap: ".5rem",
        padding: "0 1.5rem",
        zIndex: 10,
        lineHeight: 0,
        color: "#fff"
    },

    ".navbar": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "&__brand": {
            cursor: "pointer",
            themeFont: "primary"
        },
        "&__menu, &__cart": {
            height: "100 %",
            display: "flex",
            alignItems: "center",
            padding: "0 .5rem",
            fontSize: "$3",
            color: "$neutral",
            cursor: "pointer",
        },

        "&__brand > * ": {
            fontFamily: "$primaryFont",
            fontSize: "2rem",
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


export const MainMenuWrap = styled("div", {
    // minHeight: "30px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#D9D9D9",
    padding: "0 1.5rem",

    ".main-menu": {
        display: "flex",

        "&__behavior": {
            padding: "0 1.25rem"
            // width: "100%",
            // display: "flex",
            // justifyContent: "space-between",
        }
    },
    ".main-menu__item": {
        color: "#7D7D7D",
        padding: ".75rem",
        fontFamily: "$secondaryFont",
        cursor: "pointer",

        "&:hover": {
            backgroundColor: "$primary",
            color: "$neutral",
            transition: "all .3s ease-in-out",
        }
    },
});

export const SidebarCategoriesWrap = styled("div", {
    ".menu-categories": {
        padding: "0 1.5rem",
        "li": {
            fontSize: "$6",
            padding: ".5rem 0",
            color: "$primary",
            themeFont: "secondary",
            fontWeight: 700,
            "&::before": {
                content: "- ",
                marginRight: ".5rem",
                fontWeight: "300"
            }
        }
    }
});