import { } from "@nextui-org/react";
import React from "react";
import { ContainerWrap } from "./styles";

export type BreakpointProps = {
    xs: number | string;
    sm: number | string;
    md: number | string;
    lg: number | string;
    xl: number | string;
}

type ContainerGeneralProps = {
    children: React.ReactNode;
    css?: React.CSSProperties
}

type ContainerProps = ContainerGeneralProps & Partial<BreakpointProps>;

export function Container({ children, css, ...rest }: ContainerProps) {

    return (
        <ContainerWrap {...rest} style={css}>
            {children}
        </ContainerWrap>
    );
}
