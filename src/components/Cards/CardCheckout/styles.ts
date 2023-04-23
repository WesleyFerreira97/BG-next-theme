import { styled } from "stitches.config";

export const CardCheckoutWrap = styled("div", {
    display: "flex",
    justifyContent: "center",

    ".card-checkout": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",

        "&__image": {
            width: "100%",
            height: "45vh",
            position: "relative",
            aspectRatio: "9 / 13",

            "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }
        },

        "&__info": {
            padding: "$3",

            ".status": {
                color: "$green",
                themeFont: "$secondary",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                marginBottom: "$8",
                fontSize: "$3",

                // Get Icon
                "& > *:first-child": {
                    marginRight: "$1",
                },
            },
            ".title, .price": {
                themeFontSize: {
                    xs: "$4",
                    md: "$4",
                },
                marginBottom: ".25rem",
                themeFont: "$secondary",
            },
            ".title": {
                color: "$secondary",
                fontWeight: "900",
            },
            ".price": {
                color: "$primary",
                fontWeight: "600",
            },
            ".separator": {
                borderBottom: "1.5px dashed #D7D7D7",
                padding: "$3 0 0",
            },
            ".size, .color": {
                themeFont: "$secondary",
                fontSize: "$3",

                ".label": {
                    themeFont: "$secondary",
                    fontWeight: "600",
                    fontSize: "$3",
                    color: "$secondary",
                }
            },
            ".size": {
                marginBottom: "$3",
            }
        }
    },

    "@sm": {
        marginTop: "$11",

        ".card-checkout": {
            flexDirection: "row",
            justifyContent: "center",

            "&__image": {
                width: "20%",
                height: "100%",
                minWidth: "200px",
                borderRadius: ".35rem",
                overflow: "hidden",
            }
        }

    }
});