import { styled } from "stitches.config";

export const MenuSidebarCartWrap = styled("div", {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: "5rem",

    ".cart-items": {
        maxHeight: "55vh",
        height: "100a%",
        overflowY: "auto",
        marginBottom: "1.5rem",
    },

    ".cart-item": {
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
        flexGrow: 0,

        "&__subtotal": {
            height: "",
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
    ".client-form": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "2rem",
    },

    "::-webkit-scrollbar": {
        width: "5px",
        background: "$secondary",
    },
    "::-webkit-scrollbar-thumb": {
        background: "$green",
        borderRadius: "5px"
    },
    ".status": {
        color: "$primary",
        themeFont: "$secondary",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        fontSize: "$2",

        // Get Icon
        "& > *:first-child": {
            marginRight: "$1",
        },
    },
    ".sidebar-cart__item": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    "@md": {
        ".cart-items": {
            maxHeight: "65vh",
        },
    },
    // "@xl": {
    //     ".cart-items": {
    //         maxHeight: "70vh",
    //     },
    // }
});