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
    ".finish-buttons": {
        "&__subtotal": {
            display: "flex",
            justifyContent: "space-between",
            padding: ".5rem 0",

            ".label, .final-price": {
                themeFont: "secondary",
                fontWeight: "600",
                themeFontSize: {
                    xs: "$3",
                    sm: "$5",
                },
            },

            ".label": {
                color: "$secondary",
            },

            ".final-price": {
                color: "$green",
            }
        },
        ".cart-button": {
            background: "#27AE60",
            borderRadius: "4px",
            padding: "18px 32px",
            width: "100%",

            ".label": {
                marginLeft: ".5rem",
            }
        }
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