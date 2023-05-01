import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    position: "relative",
    borderRadius: "15px",
    cursor: "pointer",

    "&:hover img": {
        transform: "scale(1.1)",
        transition: "transform .4s ease-in-out"
    },

    "&:hover .hover-bar": {
        display: "flex",
    }
});

export const CardImage = styled("div", {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    background: "$primary",
    position: "relative",

    ".card-image__wrap": {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0",
        zIndex: "0",
    },

    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },

    ".hover-bar": {
        width: "100%",
        minHeight: "30px",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        zIndex: "1",
        background: "$green",
        color: "$neutral",

        "&__text": {
            padding: ".5rem 0",
        }
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

