import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    aspectRatio: "4/5",
    overflow: "hidden",

    "&:hover img": {
        transform: "scale(1.1)",
        transition: ".5s ease-in-out",
    },

    "&:hover .card-info__title": {
        fontSize: "1.7rem"
    },

    "&:hover .card-overlay": {
        opacity: .55,
        transition: ".5s ease-in-out",
    },

    "card-info": {

        "&__subtitle": {
            themeFont: "title"
        }
    }
});

export const CardInfoWrap = styled("div", {
    position: "relative",
    color: "#fff",
    textAlign: "center",
    zIndex: 5,


    ".card-info__title": {
        paddingBottom: "$6",
        themeFont: "text",
        fontWeight: "800",
        themeFontSize: {
            default: "$6"
        },
        letterSpacing: "0.1rem"
    }
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
