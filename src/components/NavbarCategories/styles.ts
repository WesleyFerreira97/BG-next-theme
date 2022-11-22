import { styled } from "stitches.config";

export const NavbarCategoriesWrap = styled("div", {
    height: "35px",
    display: "none",
    justifyContent: "center",
    backgroundColor: "#D9D9D9",
    overflow: "hidden",

    ".navbar-categories__menu": {
        height: "100%",
        display: "flex",
        alignItems: "center",

        li: {
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 .75rem",
            color: "${({ theme }) => theme.colors.neutralAlt}",
            // ${typography.TextSm}
            cursor: "pointer",

            "&:hover": {
                backgroundColor: "${({ theme }) => theme.colors.neutral}",
                transition: ".75s",
            }
        }

    }

    // "@media (min-width: ${({ theme }) => theme.breakpoints.lg})": {
    //     display: 'flex',
    // }
});

