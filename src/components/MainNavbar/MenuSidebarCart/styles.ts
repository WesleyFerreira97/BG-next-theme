import { styled } from "stitches.config";

export const MenuSidebarCartWrap = styled("div", {
    height: "100%",
    width: "100%",
    // backgroundColor: "$primary",

    ".cart-items": {
        maxHeight: "55vh",
        overflowY: "auto",
        marginBottom: "1.5rem",
    },

    ".cart-item": {
        // background: "$secondary",
        marginBottom: ".75rem",
        display: "flex",
        alignItems: "center",
        gap: ".75rem",

        "&__image": {
            height: "75px",
            aspectRatio: "9/12",

            "& img": {
                height: "100%",
                width: "100%",
                objectFit: "cover",
            }
        },
        "&__title": {
            display: "block",
            themeFont: "secondary",
            color: "$secondary",
            fontWeight: "600",
            marginBottom: ".35rem",
        },
        "&__price": {
            display: "block",
            themeFont: "secondary",
            color: "$green",
            fontWeight: "600",
            fontSize: ".9rem",

            "&:before": {
                content: "R$",
            }
        },
    },
    "::-webkit-scrollbar": {
        width: "5px",
        background: "$secondary",
    },
    "::-webkit-scrollbar-thumb": {
        background: "$green",
        borderRadius: "5px"
    },

    "@sm": {
        ".cart-items": {
            maxHeight: "60vh",
        },
    },
    "@xl": {
        ".cart-items": {
            maxHeight: "70vh",
        },
    }
});