import { styled } from "stitches.config";

export const CarouselItemWrap = styled("div", {
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",

    ".item__content": {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "2",
        textAlign: "center",
    }
});

export const Title = styled("h1", {
    color: "$neutral",
    themeFont: "primary",
    fontWeight: 700,
    overflowWrap: "anywhere",
    // fontSize: "7rem",
    themeFontSize: {
        xs: "48.83px",
        sm: "61.04px",
        md: "76.29px",
        lg: "95.37px"
    },
    marginBottom: ".75rem",
});

export const Text = styled("h1", {
    color: "$neutral",
    themeFont: "secondary",
    fontWeight: 300,
    marginBottom: "1.25rem",
    themeFontSize: {
        xs: ".9rem",
        sm: "1rem",
        md: "1.15rem",
        lg: "1.25rem"
    },
});

export const Buttons = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    paddingTop: "1.5rem",


    ".carousel-button, .carousel-button__outline": {
        backgroundColor: "#fff",
        padding: "1.1rem .3rem",
        border: "3px solid #fff",
        maxWidth: "50px",
    },
    ".carousel-button__outline": {
        backgroundColor: "transparent"
    },
    ".button__text": {
        themeFont: "secondary",
        fontWeight: "400",
        color: "#000",

        "&-outline": {
            themeFont: "secondary",
            color: "#fff",
        }
    },
    "> *": {
        borderRadius: "0",
    },
    "@sm": {
        flexDirection: "row",


        ".carousel-button, .carousel-button__outline": {
            padding: "1.5rem .5rem",
        }
    }

});

export const ImageBackground = styled("div", {
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    height: "100%",

    "> *": {
        width: "100% !important",
        height: "100% !important",
        objectFit: "cover",
    }
});
