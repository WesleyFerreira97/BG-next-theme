import { styled } from "stitches.config";

export const SidebarCategoriesWrap = styled("div", {
    ".menu-categories": {

        "li": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 0",
            themeFontSize: {
                xs: "$3",
                sm: "$5",
            },
            themeFont: "primary",
            fontWeight: 500,
            lineHeight: "160%",
            letterSpacing: ".15rem !important",
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
