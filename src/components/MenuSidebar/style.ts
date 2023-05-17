import { keyframes, styled } from "stitches.config";

const MenuSidebarWrap = styled("div", {
    display: "flex",
    background: "$primary",
});

const ContentWrap = styled("div", {
    height: "100vh",
    width: "0px", // Prevent container block
    position: "fixed",
    top: 0,
    zIndex: 997,
    background: "$primary",
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
        width: "100vw",
        position: "fixed",
        zIndex: 9999,
        background: "$primary",
    },

    "@xs": {
        ".content": {
            width: "50vh",
            maxWidth: "500px",
        }
    },
    "@lg": {
        ".content": {
            width: "100%",
            maxWidth: "450px",
        }
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
    OverlayBackground
}