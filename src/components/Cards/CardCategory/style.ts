import { styled } from "stitches.config";

export const CardCategoryWrap = styled("div", {
    display: "flex",
    height: "35vh",
    background: "$primary",
    position: "relative",

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
    background: "$primary",

    ".card-info": {
        "&__title": {
            themeFont: "primary",
        }
    }
})