import { keyframes, styled } from "stitches.config";

const MenuSidebarWrap = styled("div", {
    display: "flex",
    background: "$primary",
});

const ContentWrap = styled("div", {
    position: "fixed",
    zIndex: 997,
    width: "0px", // Prevent container block
    height: "100vh",
    background: "$primary",

    ".content": {
        height: "100vh",
        width: "450px",
        position: "fixed",
        zIndex: 9999,
        background: "$primary",
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