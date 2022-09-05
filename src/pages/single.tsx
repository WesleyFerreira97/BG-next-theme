import React from 'react'
import { Container } from '../components/Layout/Container'
import { MainNavbar } from '../components/MainNavbar'
import styled from "styled-components";

const SingleWrap = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
`

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
