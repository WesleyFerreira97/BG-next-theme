import { typography } from "../../styles/typography";
import { styled } from "stitches.config";

export const TitleWrap = styled("h3", {
    /* ${typography.TitleSm} */
    margin: "1rem auto",
});

export const SubTitleWrap = styled("span", {
    /* ${typography.TextLg}
    color: ${({ theme }) => theme.colors.neutralAlt}; */
});

export const ParagraphWrap = styled("p", {
    /* ${typography.Text}
    color: ${({ theme }) => theme.colors.neutralAlt}; */
});

export const WidgetHeaderWrap = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "1.5rem auto",
});

