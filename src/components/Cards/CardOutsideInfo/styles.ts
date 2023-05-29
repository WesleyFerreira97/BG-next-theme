import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    position: "relative",
    borderRadius: "15px",
    cursor: "pointer",

    "&:hover img": {
        transform: "scale(1.1)",
        transition: "transform .4s ease-in-out"
    },

    "&:hover": {
        ".card-image__wrap::before": {
            opacity: 0.3,
        },
        ".hover-bar": {
            transform: "translateY(0)",
            transitionDuration: ".25s",
            transformOrigin: "bottom top",
        }
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

        "&::before": {
            content: "",
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: 5,
            background: "#000",
            opacity: .15,
        }
    },

    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },

    ".hover-bar": {
        // height: "35px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        zIndex: "1",
        background: "rgba(39, 174, 96, 0.7)",
        color: "$neutral",
        transform: "translateY(100%)",
        transition: "transform 0.25s ease-out",
        transformOrigin: "top bottom",

        "&__text": {
            display: "flex",
            alignItems: "center",
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
            themeFont: "secondary",
            fontWeight: "600",
            themeFontSize: {
                xs: "13px",
                md: "14px"
            }
        },
        "&__title": {
            color: "#4F4F4F",
            paddingBottom: "4px",
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

