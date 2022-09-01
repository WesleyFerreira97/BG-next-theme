import React from 'react'
import { Container } from '../../components/Layout/Container'
import { MainNavbar } from '../../components/MainNavbar'
import { SingleWrap } from './styles'

export default function Single() {
    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="#1F1D36" />

            <Container css={{ flexGrow: '1' }} lg={70}>
                <h1 style={{ background: 'gray' }}>Single page</h1>
            </Container>
        </SingleWrap>
    )
}
