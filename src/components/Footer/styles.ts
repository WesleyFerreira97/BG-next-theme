import { styled } from "stitches.config";

export const FooterWrap = styled("div", {
    minHeight: "45vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
    // backgroundColor: "#E2E2E2",
    backgroundColor: "#1E1E2F",

    ".footer__logo-bar": {
        height: "100px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "15px solid $primary",
        // borderBottom: "1px solid #D4D4D4",
        paddingTop: "1.75rem",
        paddingBottom: "1rem",

        ".footer__logo-wrap": {
            display: "flex",
            justifyContent: "center",
            padding: "0 2rem",
        },

        ".title": {
            themeFont: "primary",
            fontWeight: "700",
            color: "#fff",
            fontSize: "2.5rem",
        }
    },

    "@md": {
        ".footer__logo-wrap": {
            justifyContent: "flex-start !important",
            textAlign: "center",
        }
    }
});

export const FooterContainers = styled("div", {
    height: "100%",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
    alignItems: "center",
    justifyContent: "space-between",

    ".footer-container": {
        // flex-grow: 1;
        // padding: 0 2rem;
    },

    ".container-1": {
        maxWidth: "450px",
    },

    ".info": {

        "&__item": {
            display: "flex",
            alignItems: "center",
            margin: "1.25rem 0",
            justifyContent: "center",
        },

        "&__text": {
            themeFont: "secondary",
            lineHeight: "165%",
            color: "#fff",
            textAlign: "center",
        },

        "&__icon": {
            paddingRight: "1rem",
            color: "#fff"
        }
    },

    ".container-2": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },

    ".menu": {

        "&__container": {
            display: "block",
            padding: "0 2rem",
            // margin: "1.25rem 0",
        },

        "&__title": {
            themeFont: "secondary",
            fontWeight: "500",
            textTransform: "uppercase",
        },

        "&__wrap": {

            a: {
                color: "inherit",
                textDecoration: "none",
            },

            li: {
                themeFont: "secondary",
                lineHeight: "165%",
                color: "$neutralAlt",
                padding: "0.25rem 0",
            }
        }
    },

    "@lg": {
        flexDirection: "row",
        alignItems: "flex-start",

        ".container-2": {
            flexDirection: "row",
            textAlign: "left"
        },


        ".info": {

            "&__item": {
                justifyContent: "flex-start",
            },
            "&__text": {
                textAlign: "left",
            },
        }
    }
});

export const FooterCredits = styled("div", {
    height: "80px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1E2F",
    borderTop: "1px solid $secondary",

    ".footer-credits__text": {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        color: "#828282",
        themeFont: "secondary",
        fontSize: "0.85rem",
    }
});
