import { styled } from "stitches.config";

export const TitleWrap = styled("h3", {
    themeFontSize: {
        // default: "$11",
        lg: "$1",
        md: "$10",
        sm: "$9",
        xs: "$8",
    },
    margin: "1rem auto",
});

export const SubTitleWrap = styled("span", {
});

export const ParagraphWrap = styled("p", {
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

