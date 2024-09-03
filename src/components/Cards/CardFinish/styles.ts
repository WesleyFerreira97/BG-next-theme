import { styled } from "stitches.config";

export const CardFinishWrap = styled("div", {
    display: "flex",
    justifyContent: "center",
    marginBottom: "4rem",

    ".card-finish__info-wrap": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    ".card-finish": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",

        "&__image": {
            width: "200px",
            height: "250px",
            position: "relative",
            aspectRatio: "9 / 13",

            "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }
        },

        "&__info": {

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

        ".card-finish": {
            flexDirection: "row",
            justifyContent: "center",

            "&__image": {
                width: "20%",
                height: "250px",
                minWidth: "200px",
                borderRadius: ".35rem",
                overflow: "hidden",
            }
        }
    },
    "@md": {
        margin: "0.75rem",

        ".card-finish": {
            "&__info": {
                padding: "0.5rem 1rem",
            }
        },
        ".card-finish__info-wrap": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
        },

    }
});