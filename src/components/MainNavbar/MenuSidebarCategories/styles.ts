import { styled } from "stitches.config";

export const SidebarCategoriesWrap = styled("div", {
    ".menu-categories": {
        padding: "0 1.5rem",

        "li": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 0",
            fontSize: "$5",
            themeFont: "primary",
            fontWeight: 500,
            lineHeight: "160%",
            letterSpacing: ".25rem !important",
            cursor: "pointer",
            color: "$secondary",

            "&:hover": {
                transition: "all .3s ease",
                background: "$primary",
                color: "#fff",

                "&::before": {
                    content: "",
                    width: "100%",
                }
            }
        }
    }
});
