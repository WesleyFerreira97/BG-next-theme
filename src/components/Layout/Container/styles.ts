import { styled } from "stitches.config";
import { BreakpointProps } from ".";
import { CSS } from "@nextui-org/react";

export const ContainerWrap = styled("div", {
    maxWidth: "1200px",
    // variants: {
    //     breakpoints: {
    //         xs: (value) => ({
    //             width: `${value}%`,
    //         }),
    //         md: { width: "10%" }
    //     }
    // }
    /* width: ${props => props.xs + "%"};

    @media (min-width: 650px) {
        width: ${props => props.sm + "%"};
    }

    @media (min-width: 960px) {
        width: ${props => props.md + "%"};
    }

    @media (min-width: 1200px) {
        width: ${props => props.lg + "%"};
    }

    @media (min-width: 1400px) {
        width: ${props => props.sm + "%"};
    } */
});


