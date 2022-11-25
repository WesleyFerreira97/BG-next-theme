import { styled } from "stitches.config";

export const CardWrap = styled("div", {
    // background: "#282A3A",
    aspectRatio: "9/16",
    borderRadius: "15px",
    // boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.3)",
});

export const CardImage = styled("div", {
    height: "100%",
    width: "100%",

    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    }
});

export const CardInfoWrap = styled("div", {
    padding: "1rem",

    ".card-info": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",

        "&__title": {
            fontSize: "1rem",
        },
        "&__price": {
            color: "$primary",
            fontWeight: "600"
        },
        "&__installments": {
            color: "$secondary",
            fontWeight: "400"
        }
    }
});