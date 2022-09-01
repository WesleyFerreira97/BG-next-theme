import React from 'react'
import { Container } from '../Layout/Container'
import { FooterCredits, FooterWrap } from './styles'

export function Footer() {
    return (
        <FooterWrap>
            <FooterCredits>
                <Container>
                    Garota Moda ©   feito por Wesley Ferreira
                </Container>
            </FooterCredits>
        </FooterWrap>
    )
}
