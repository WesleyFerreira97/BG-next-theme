import { styled } from "stitches.config";

export const MenuSidebarCartWrap = styled("div", {
    // padding: "0 1.5rem",
    height: "100%",
    width: "100%",
    backgroundColor: "$primary",

    ".cart-item": {
        background: "$secondary",
        padding: "1rem",
        margin: ".5rem 0",

        "&__title": {
            display: "block",
        },
        "&__price": {
            display: "block",
        },
    }
});