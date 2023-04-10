import { styled } from "stitches.config";

export const ProductGalleryWrap = styled("div", {
    height: "75vh",
    display: "flex",

    ".main-image": {
        height: "100%",
        width: "100%",
        minWidth: "400px",
        maxWidth: "600px",
        position: "relative",
        aspectRatio: "1/1",

        "img": {
            height: "100%",
            width: "100%",
            objectFit: "cover",
        }
    },

    ".grid-thumbnails": {
        height: "100%",
        width: "auto",
        display: "none",
        gap: "$1",

        // "& > *": {
        //     width: "100%",
        //     height: "100%",
        // },

        "&__item": {
            // height: "100%",
            width: "150px",
            aspectRatio: "9 / 13",
            position: "relative",

            "img": {
                height: "100%",
                width: "100%",
                objectFit: "cover",
            }
        }
    },

    "@lg": {
        ".grid-thumbnails": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "$1",
            gap: "5rem"
        }
    }
});
