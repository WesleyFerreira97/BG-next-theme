import { styled } from "stitches.config";
import { themeColors } from "stitches.config";

export const MainNavbarWrap = styled("div", {
    display: "flex",
    justifyContent: "center",
    background: "$primary",
    color: "#fff",

    ".navbar": {
        themeFont: "$secondary",
        // background: "blue",

    },

    ".main-menu": {
        "li": {
            color: "$neutral",
            themeFont: "$secondary",
            letterSpacing: "0.025rem",
        }
    }
});

export const containerCss = {
    backgroundColor: `${themeColors.primary} !important`
}