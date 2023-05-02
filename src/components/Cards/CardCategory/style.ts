import { styled } from "stitches.config";

export const CardCategoryWrap = styled("div", {
    display: "flex",
    height: "35vh",
    background: "$primary",
    position: "relative",
    overflow: "hidden",

    "&:hover .card-category__image": {
        transform: "scale(1.1)",
        transition: ".25s ease-in-out",
    },

    ".card-category": {

        "&__image": {
            position: "absolute",
            height: "100%",
            width: "100%",
            overflow: "hidden",

            "img": {
                objectFit: "cover",
                height: "100%",
                width: "100%",
            },

            "&:hover img": {
                transform: "scale(1.1)",
                transition: ".5s ease-in-out",
            },
        },
    }
});

export const CardInfoWrap = styled("div", {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    cursor: "pointer",

    "&:hover .card-info__title": {
        color: "$primary",
        paddingLeft: "1rem",
        transition: ".25s ease-in-out",
    },

    "&::before": {
        content: "",
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 5,
        background: "#000",
        opacity: 0.1,
    },

    ".card-info": {
        zIndex: 10,
        padding: "0 $5",

        "&__title": {
            themeFont: "primary",
            fontWeight: 700,
            color: "$neutral",
            fontSize: "$9",
            // textShadow: "1px 1px #B2B2B2",

        }
    }
})