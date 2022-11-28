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

    "&:hover .card-info": {
        fontSize: "1.4rem"
    },

    "&:hover .ops": {
        opacity: .35,
        transition: ".5s ease-in-out",
    },

});

export const CardInfoWrap = styled("div", {
    position: "relative",
    color: "#fff",
    textAlign: "center",
    zIndex: 5,
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
    opacity: .25,
    zIndex: 1,

    "@sm": {
        opacity: .1,
    }
});
