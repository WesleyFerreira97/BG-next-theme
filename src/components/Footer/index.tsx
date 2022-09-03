import React from 'react'
import { Container } from '../Layout/Container'
import { FooterContainers, FooterCredits, FooterWrap } from './styles'

export function Footer() {
    return (
        <FooterWrap>
            <div className='footer__logo-bar'>
                <h1 className='title'>Bela Garota</h1>
            </div>
            <Container css={{ height: '100%', flexGrow: '1' }}>
                <FooterContainers>
                    <div className='footer-container'>
                        <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturieCondimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
                        <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturieCondimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
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
