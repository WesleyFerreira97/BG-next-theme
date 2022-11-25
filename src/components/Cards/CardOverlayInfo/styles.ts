import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    display: "block",
    position: "relative",
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
    opacity: .2,
    zIndex: 1,

});
