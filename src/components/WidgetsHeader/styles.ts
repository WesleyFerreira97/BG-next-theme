import { styled } from "stitches.config";

export const TitleWrap = styled("h3", {
    margin: ".25rem auto 1.25rem",
    color: "$secondary",
    themeFont: "primary",
    fontWeight: "800",
    themeFontSize: {
        xs: "$5",
        sm: "$8",
    },
});

export const SubTitleWrap = styled("span", {
    themeFont: "primary",
    color: "$secondary",
    fontWeight: "500",
    marginBottom: "0.5rem",
    themeFontSize: {
        xs: "$3",
        sm: "$4",
    }
});

export const ParagraphWrap = styled("p", {
    themeFont: "secondary",
    color: "$secondary",
    fontWeight: "500",
    themeFontSize: {
        xs: "14px",
        sm: "$3",
    }
});

export const WidgetHeaderWrap = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "6rem auto",
});

