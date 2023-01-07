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
    padding: "0 1rem 1rem",

    ".card-info": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

        "&__title, &__price, &__installments": {
            themeFont: "text",
            fontWeight: "600",
            themeFontSize: {
                // default: "$3",
                xs: "12px",
                // md: "14px"
            }
        },
        "&__title": {
            color: "#4F4F4F",
            paddingBottom: "8px",
            paddingTop: "12px",
        },
        "&__price": {
            color: "$primary",
            fontWeight: "600",
            marginBottom: "0.25rem"
        },
        "&__installments": {
            color: "$neutralAlt",
            fontWeight: "600",
            fontSize: "12px",
            letterSpacing: "0.025rem"
        }
    }
});

