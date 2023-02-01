import { globalCss } from "stitches.config";

export const globalStyles = globalCss({
    ":root": {
        "--swiper-theme-color": "#fff !important"
    },
    "*, body, html": {
        margin: "0",
        padding: "0",
        border: "0",
        listStyle: "none",
        fontFamily: "Arial",
        fontSize: "16px",
        boxSizing: "border-box",
    },

    a: {
        color: "inherit",
        textDecoration: "none",
    },

    "ul, li": {
        margin: "0",
    },
    ".swiper-button-prev:after, .swiper-button-next:after": {
        fontSize: "25px !important",
    },
    ".swiper-button-prev, .swiper-button-next": {
        marginTop: "-40px",
        borderRadius: "6px",
        padding: "20px",
        paddingTop: "25px",
        paddingBottom: "25px",
        color: "#E4DCCF !important",
        fill: "#E4DCCF 0.5 !important",
        opacity: ".5",
        top: "unset !important",
        bottom: ".5rem !important"
    },
    ".swiper-pagination": {
        bottom: "1.25rem !important",
    },
    ".swiper-pagination-bullet": {
        // color: "red !important",
        opacity: ".8 !important",
    },
    "@md": {
        ".swiper-button-prev, .swiper-button-next": {
            top: "50% !important",
            bottom: "unset !important"
        },
    },

    "@sm": {
        html: {
            fontSize: "87.5%",
        },
        ".swiper-button-prev:after, .swiper-button-next:after": {
            fontSize: "35px !important",
        },
    },
});
