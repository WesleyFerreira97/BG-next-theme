import { keyframes, styled } from "stitches.config";

const MenuSidebarWrap = styled("div", {
    display: "flex",
    background: "$primary",
});

const ContentWrap = styled("div", {
    position: "fixed",
    top: 0,
    zIndex: 997,
    background: "$primary",

    variants: {
        side: {
            left: {
                ".sidebar": {
                    left: 0,
                }
            },
            right: {
                ".sidebar": {
                    right: 0,
                }
            },
        }
    },

    ".sidebar": {
        height: "100vh",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: 9999,
        overflow: "hidden",
        background: "#fff",

        "&-header": {
            display: "flex",
            color: "$secondary",
            margin: "0 1.5rem 2.5rem 1.5rem",

            "&__title": {
                themeFont: "primary",
                fontSize: "2rem",

                "&:after": {
                    content: ".",
                    color: "$primary",
                }
            },
        },

        "&-content": {
            height: "100%",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            margin: "0 1.5rem",
        },
    },

    "@sm": {
        ".sidebar": {
            width: "400px",

            "&-header": {
                marginBottom: "3.5rem",

                "&__title": {
                    fontSize: "3rem",
                }
            }
        }
    },
    "@lg": {
        ".sidebar": {
            width: "450px",
        }
    }
});

const CloseButton = styled("div", {
    height: "60px",
    minHeight: "60px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "$secondary",
    margin: "0 1.5rem",

    "> *:hover": {
        cursor: "pointer",
        transform: "scale(1.1) rotate(90deg)",
        transition: "all .4s ease",
    }
});

const OverlayBackground = styled("span", {
    position: "absolute",
    height: "100vh",
    width: "100vw",

    variants: {
        open: {
            true: {
                opacity: 0.5,
                background: "$secondary",
                zIndex: 998,
                transform: "translateX(0)",
                // transitionDelay: ".5s",
            },
            false: {
                opacity: .3,
                transform: "translateX(-100%)",
                transitionDelay: ".6s",
            },
        },
    },

});

export {
    MenuSidebarWrap,
    ContentWrap,
    OverlayBackground,
    CloseButton
}