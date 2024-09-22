import { styled } from "stitches.config";

export const FinishWrap = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5rem",
    paddingBottom: "5rem",

    ".content": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#e5e4e5",
        padding: "2rem",
        borderRadius: "0.75rem"
    },
    ".page-title": {
        themeFont: "primary",
        fontSize: "1.8rem",
        marginBottom: "2rem"
    },
    ".finish-content": {
        width: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem"
    },
    ".finish-items": {
        gap: "1.5rem"
    },
    ".finish-form": {
        width: "50%",
        padding: "2rem",
        borderRadius: "1rem",
        background: "#1E1E2F"
    },
    ".client-form": {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        marginBottom: "1.5rem"
    },
    ".finish-buttons": {
        flexGrow: 0,
        marginTop: "1.5rem",

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
                color: "$green",
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
    ".form-error": {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginBottom: "1rem",

        "&__text": {
            themeFont: "$secondary",
            fontSize: "0.975rem",
            color: "$primaryAlt",
        }
    },
    "@sm": {
        ".finish-form": {
            width: "80%",
        },
    },
    "@md": {
        ".finish-content": {
            width: "1000px",
        },
        ".finish-items": {
            width: "1000px",
            display: "grid",
            flexDirection: "column",
            gridTemplateColumns: "repeat(2, 1fr)"
        },
    }
});