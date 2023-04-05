import { styled, css } from "stitches.config";

const divider = {
    margin: "0 0 3.75rem",
    borderBottom: "1.5px dashed #D7D7D7",
    paddingBottom: "1rem",
};

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
        flexDirection: "row",
        padding: "0 1.25rem",
    }
});


export const ProductGalleryWrap = styled("div", {
    height: "75vh",
    // flexGrow: 1,
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
    padding: "0 1.25rem",

    ".product-info": {

        "&__div": {
            display: "block",
            ...divider,
        },
        "&__title, &__price, &__payment-info, &__label, &__label--thin": {
            fontFamily: "$secondaryFont",
        },
        "&__title": {
            fontWeight: "500",
            themeFontSize: {
                xs: "1.75rem",
                sm: "2rem",
            },
            color: "$secondary",
        },
        "&__price": {
            display: "block",
            fontSize: "1.75rem",
            fontWeight: "600",
            padding: ".75rem 0",
            color: "$primary",
        },
        "&__payment-info": {
            display: "block",
            color: "$neutralAlt",
        },
        "&__label": {
            fontWeight: "600",

            "&--thin": {
                fontWeight: "300",
                color: "$neutralAlt",
            }
        },

        "&__color": {

            "&-available": {
                display: "flex",
                gap: "1rem",
                margin: "1rem 0",
            },
        },

        "&__size": {

            "&-available": {
                display: "flex",
                gap: "1rem",
                margin: "1rem 0",

                "input[type=radio]": {
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
                    fontFamily: "$secondaryFont",
                    backgroundColor: "$lightGray",
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
    }
});

