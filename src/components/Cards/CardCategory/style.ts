import { styled, keyframes } from "stitches.config";


export const CardCategoryWrap = styled("div", {
    // background: "$secondary",
    position: "relative",
    height: "35vh",
    width: "100%",
    overflow: "hidden",

    ".card-category__image": {
        height: "100%",
        width: "100%",
        position: "absolute",

        "img": {
            height: "20%",
            width: "10%",
            objectFit: "cover",
        }
    },
    "&:hover .card-info__title::after": {
        content: "",
        transform: "scaleX(1)",
        transformOrigin: "bottom left",

    }
});

export const CardInfoWrap = styled("div", {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,

    "&:hover .card-info__title": {
        // color: "$primary",
        paddingLeft: ".25rem",
        transition: ".25s ease-in-out",
    },

    "&::before": {
        content: "",
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 5,
        background: "#000",
        opacity: 0.5,
    },

    ".card-info": {
        zIndex: 10,
        padding: "0 $5",

        "&__title": {
            themeFont: "primary",
            fontWeight: 700,
            color: "$neutral",
            fontSize: "$9",
            position: "relative",
            display: "inline-block",
            // textShadow: "1px 1px #B2B2B2",

            "&::after": {
                content: "",
                height: "3px",
                width: "100%",
                position: "absolute",
                bottom: -10,
                left: 0,
                transform: "scaleX(0)",
                backgroundColor: "$primary",
                transformOrigin: "bottom right",
                transition: "transform .25s ease-in-out",
            },

        }
    }
})

