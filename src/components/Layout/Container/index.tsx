import React from 'react'
import { ContainerWrap } from './styles'

export type BreakpointProps = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    css?: any
}

type ContainerGeneralProps = {
    children: React.ReactNode;
}

type ContainerProps = ContainerGeneralProps & BreakpointProps;

export function Container({ children, css, ...rest }: ContainerProps) {

    return (
        <ContainerWrap {...rest} style={css}>
            {children}
        </ContainerWrap>
    )
}
