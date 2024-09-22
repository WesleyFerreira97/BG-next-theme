import { styled } from "stitches.config";

export const SidebarCategory = styled("div", {
    height: "100vh",
    width: "30%",
    background: "$green"
});


export const GridNavbar = styled("div", {
    display: "flex",
    alignItems: "center",

    ".all_categories__button": {
        margin: ".25rem auto 1.25rem",
        color: "$secondary",
        themeFont: "secondary",
        whiteSpace: "nowrap",
        fontWeight: "600",
        border: "1px solid #3F3351",
        cursor: "pointer",
        borderRadius: "0.5rem",
        padding: ".5rem 1rem",
        themeFontSize: {
            xs: "$3",
        },
        transition: "transform 0.2s ease", // adiciona uma transição suave
        "&:active": {
            transform: "scale(0.98)", // reduz o tamanho no clique
        }
    }
});