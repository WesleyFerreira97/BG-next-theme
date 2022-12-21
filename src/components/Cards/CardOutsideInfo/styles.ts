import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    position: "relative",
    aspectRatio: "9/16",
    borderRadius: "15px",
    // boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.3)",
});

export const CardImage = styled("div", {
    height: "100%",
    width: "100%",

    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    }
});

export const CardInfoWrap = styled("div", {
    position: "relative",
    zIndex: "2",
    padding: "1rem",

    ".card-info": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

        "&__title, &__price, &__installments": {
            themeFont: "text",
            fontWeight: "600",
            themeFontSize: {
                default: "$2",
                sm: "$2",
                md: "$3"
            }
        },
        "&__title": {
            color: "#4F4F4F",
            marginBottom: "$1",
            themeFontSize: {
                default: "$3",
                sm: "$3",
                md: "$3"
            }
        },
        "&__price": {
            color: "$primary",
            fontWeight: "600",
            marginBottom: "0.25rem"
        },
        "&__installments": {
            color: "$neutralAlt",
        }
    }
});