import { styled, css } from "stitches.config";

export const SingleProductWrap = styled("div", {
    display: "flex",
    justifyContent: "center",

    "@sm": {
        padding: "0 1.25rem",
        // margin: "3rem 0 2rem",
    }
});

export const ComponentBehavior = styled("div", {
    display: "flex",
    flexDirection: "column",
    // marginTop: "1rem",

    "@sm": {
        marginTop: "6rem",
    },
    "@lg": {
        flexDirection: "row",
        padding: "0 1.25rem",
    }
});



export const ProductInfo = styled("div", {
    flexGrow: "1rem",
    padding: "0 $8",
    marginTop: "$8",

    ".product-info": {

        "&__div": {
            display: "block",
            borderBottom: "1.5px dashed #D7D7D7",
            padding: "$6 0 $6",
        },
        "&__div:first-child": {
            padding: "0 0 $6",
        },
        "&__div:last-child": {
            padding: "$6 0 0",
        },
        "&__title, &__price, &__payment-info, &__label, &__label--thin": {
            fontFamily: "$secondaryFont",
        },
        "&__title": {
            fontWeight: "900",
            themeFontSize: {
                xs: "$5",
                sm: "$6",
            },
            color: "$secondary",
        },
        "&__price": {
            display: "block",
            themeFontSize: {
                xs: "$4",
                sm: "$5",
            },
            fontWeight: "600",
            padding: "$1 0",
            color: "$primary",
        },
        "&__payment-info": {
            display: "block",
            color: "$neutralAlt",
            themeFontSize: {
                xs: "$3",
                sm: "$3",
            },
        },
        "&__label": {
            fontWeight: "600",
            color: "$secondary",
            paddingBottom: "$1",
            display: "block",

            "&--thin": {
                fontWeight: "300",
                color: "$neutralAlt",
                fontSize: "$3",
            }
        },

        "&__color": {

            "&-available": {
                display: "flex",
                gap: "1rem",
            },
        },

        "&__size": {

            "&-available": {
                display: "flex",
                gap: "1rem",

                "input[type=radio]": {
                },

                ".size-button": {
                    height: "30px",
                    width: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "1.15rem",
                    fontFamily: "$secondaryFont",
                    backgroundColor: "$lightGray",
                }
            }
        },
    },

    ".finish-buttons": {
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        margin: "$6 0",
    },
    ".cart-button": {
        backgroundColor: "#27AE60 !important",
        borderRadius: "0 !important",

        ".label": {
            margin: ".5rem",
        }
    },

    "@sm": {
        ".finish-buttons": {
            justifyContent: "flex-start",
        }
    },
    "@lg": {
        marginTop: "0",
    },
});

