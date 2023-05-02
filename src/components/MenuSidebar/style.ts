import { styled } from "stitches.config";

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
    content: "",
    height: "100vh",
    width: "100vw",
    // maxWidth: "0",
    background: "$secondary",
    opacity: 0.5,
    zIndex: 998,
});


export {
    MenuSidebarWrap,
    ContentWrap,
    OverlayBackground
}