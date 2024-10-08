import { styled } from "stitches.config";

export const ProductGalleryWrap = styled("div", {
    height: "75vh",
    display: "flex",
    justifyContent: "center",
    gap: "$2",
    ".main-image": {
        height: "100%",
        width: "100%",
        minWidth: "250px",
        maxWidth: "500px",
        position: "relative",
        aspectRatio: "1/1",

        "img": {
            height: "100%",
            width: "100%",
            objectFit: "cover",
        }
    },
    "& > *": {
        marginLeft: "inherit !important",
        marginRight: "inherit !important",
    },
    ".grid-thumbnails": {
        width: "auto",
        display: "none",

        "& > *": {
            overflow: "hidden",
        },

        "&__item": {
            width: "140px",
            aspectRatio: "9 / 13",
            overflow: "hidden",

            "img": {
                height: "100%",
                width: "100%",
                objectFit: "cover",
            }
        }
    },
    "@md": {
        ".grid-thumbnails": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "$1",
            gap: "5rem"
        }
    }
});
