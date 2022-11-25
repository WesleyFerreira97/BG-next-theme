import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    display: "block",
    position: "relative",
    aspectRatio: "4/5",
    overflow: "hidden",

    "&:hover img": {
        transform: "scale(1.1)",
        transition: ".5s ease-in-out",
    },
});

export const CardInfoWrap = styled("div", {

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
    background: "black",
    // Mobile default opacity 
    opacity: .25,
    zIndex: 1,

    "&:hover": {
        opacity: .25,
        transition: ".5s ease-in-out",
    },

    "@sm": {
        opacity: 0,
    }
});
