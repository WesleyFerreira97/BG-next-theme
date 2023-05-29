import { styled, keyframes } from "stitches.config";

export const CardWrap = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    aspectRatio: "4/5",
    overflow: "hidden",

    "img": {
        transition: ".5s ease-in-out",
    },

    "&:hover": {
        "img": {
            transform: "scale(1.1)",
        },

        ".card-info": {
            "&__title": {
                fontSize: "1.7rem",
                marginBottom: "1rem",
            },
            "&__category": {
                display: "block",
            }
        },
        ".card-overlay": {
            opacity: .55,
            transition: ".5s ease-in-out",
        },
    },

    "card-info": {
        "&__subtitle": {
            themeFont: "title"
        }
    },
    ".card-overlay": {
        opacity: .65,
    }
});

export const CardInfoWrap = styled("div", {
    position: "relative",
    color: "#fff",
    textAlign: "center",
    zIndex: 5,
    overflow: "hidden",


    ".card-info": {
        "&__title": {
            // paddingBottom: "$6",
            themeFont: "primary",
            fontWeight: "800",
            themeFontSize: {
                xs: "$4",
                sm: "$6",
            },
            letterSpacing: "0.1rem",
        },
        "&__category": {
            display: "none",
        }
    },
});

export const CardImage = styled("div", {
    height: "100%",
    width: "100%",
    position: "absolute",

    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    }
});

export const CardOverlay = styled("div", {
    height: "100%",
    width: "100%",
    position: "absolute",
    background: "#000",
    // Mobile default opacity 
    opacity: .65,
    zIndex: 1,

    "@sm": {
        opacity: .2,
    }
});
