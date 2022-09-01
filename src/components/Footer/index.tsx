import React from 'react'
import { Container } from '../Layout/Container'
import { FooterContainers, FooterCredits, FooterWrap } from './styles'

export function Footer() {
    return (
        <FooterWrap>
            <Container css={{ height: '100%' }}>
                <FooterContainers>
                    <div className='footer-container'>
                        Container 1
                    </div>
                    <div className='footer-container'>
                        Container 1
                    </div>
                    <div className='footer-container'>
                        Container 1
                    </div>
                </FooterContainers>
            </Container>
            <FooterCredits>
                <Container>
                    <span className='footer-credits__text'>
                        Garota Moda ©   feito por Wesley Ferreira
                    </span>
                </Container>
            </FooterCredits>
        </FooterWrap>
    )
}
