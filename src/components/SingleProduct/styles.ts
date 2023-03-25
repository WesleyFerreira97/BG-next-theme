import { styled } from "stitches.config";

export const SingleProductWrap = styled("div", {
    display: "flex",
    justifyContent: "center",
    padding: "0 1.25rem",

    "@lg": {
        margin: "3rem 0 2rem",
    }
});

export const ComponentBehavior = styled("div", {
    display: "flex",
    flexDirection: "column",

    "@lg": {
        flexDirection: "row"
    }
});

export const ProductGallery = styled("div", {
    height: "75vh",
    // flexGrow: 1,
    display: "flex",

    ".main-image": {
        height: "100%",
        width: "100%",
        minWidth: "350px",
        maxWidth: "450px",
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
        // width: "auto",
        display: "none",
        gap: "$1",

        "&__item": {
            height: "100%",
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
        }
    }
});

export const ProductInfo = styled("div", {
    flexGrow: "1rem",
    padding: "1.25rem",

    ".product-info": {

        "&__div": {
            display: "block",
            // ${ borderBottomDashed }
        },
        "&__title": {
            fontSize: "1.75rem",
            fontWeight: "600",
        },
        "&__price": {
            display: "block",
            fontSize: "1.75rem",
            fontWeight: "600",
            padding: ".75rem 0",
        },
        "&__payment-info": {
            display: "block",
            padding: ".75rem 0 1.25rem",
        },
        "&__label": {
            fontWeight: "600",

            "&--thin": {
                fontWeight: "300",
            }
        },

        "&__color": {

            "&-available": {
                display: "flex",
                gap: "1rem",
                margin: "1rem 0",
            },

            ".colorButton": {
                height: "30px",
                width: "30px",
                backgroundColor: "#3D087B",
                borderRadius: "50%",
            }
        },

        "&__size": {

            "&-available": {
                display: "flex",
                gap: "1rem",
                margin: "1rem 0",
            },

            ".size-button": {
                height: "30px",
                width: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "25px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "1.15rem",
            }
        }
    },

    ".finish-buttons": {
        display: "flex",
        gap: "1rem",
        margin: "1.25rem 0",
    },
    ".cart-button": {
        backgroundColor: "#27AE60!important",
        borderRadius: "0!important",

        "span": {
            marginLeft: ".5rem",
        }
    },

    "@lg": {
        maxWidth: "45%",
    }
});

