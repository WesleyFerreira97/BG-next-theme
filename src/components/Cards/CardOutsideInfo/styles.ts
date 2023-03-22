import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    position: "relative",
    borderRadius: "15px",
    cursor: "pointer",
});

export const CardImage = styled("div", {
    height: "100%",
    width: "100%",
    overflow: "hidden",

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
                xs: "13px",
                md: "15px"
            }
        },
        "&__title": {
            color: "#4F4F4F",
            paddingBottom: "8px",
            paddingTop: "12px",
            textTransform: "uppercase",
        },
        "&__price": {
            color: "#05A428",
            fontWeight: "500",
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

