import React, { ReactNode } from 'react'
import { ContainerWrap } from './styles'

type ContainerProps = {
    children: ReactNode
}

export function Container({ children }: ContainerProps) {
    return (
        <ContainerWrap>
            {children}
        </ContainerWrap>
    )
}
