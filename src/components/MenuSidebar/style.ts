import { keyframes, styled } from "stitches.config";

const MenuSidebarWrap = styled("div", {
    display: "flex",
    background: "$primary",
});

const ContentWrap = styled("div", {
    height: "100vh",
    // width: "100%",
    width: "0px", // Prevent container block
    position: "fixed",
    top: 0,
    zIndex: 997,

    variants: {
        side: {
            left: {
                ".content": {
                    left: 0,
                }
            },
            right: {
                ".content": {
                    right: 0,
                }
            },
        }
    },
    ".content": {
        height: "100vh",
        width: "100%",
        position: "fixed",
        zIndex: 9999,
        background: "#fff",
        overflow: "hidden",

        "&-header": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 1.5rem",
            color: "$secondary",
            marginBottom: "3.5rem",

            "&__title": {
                themeFont: "primary",
                fontSize: "3rem",

                "&:after": {
                    content: ".",
                    color: "$primary",
                }
            },
        }
    },

    "@sm": {
        ".content": {
            width: "400px",
        }
    },
    "@lg": {
        ".content": {
            width: "450px",
        }
    }
});

const CloseButton = styled("div", {
    height: "60px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // background: "$secondary",
    color: "$secondary",
    padding: "0 1.5rem",
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