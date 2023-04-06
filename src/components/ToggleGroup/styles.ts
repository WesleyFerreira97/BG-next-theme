import { styled } from "stitches.config";

export const ColorButtonWrap = styled("div", {
    ".colorButton": {
        width: "38px",
        height: "38px",
        minWidth: "30px",
        borderRadius: "50%",
        border: "4px solid #fff",
        padding: "10px"
    }
});

export const SizeButtonWrap = styled("div", {
    ".sizeButton": {
        width: "70px",
        height: "35px",
        minWidth: "50px",
        borderRadius: "50px",
    }
});

export const ErrorMessageWrap = styled("div", {
    color: "$primary",
    themeFont: "primary",
    fontSize: "$2",
    padding: "$4 0 $2",
});