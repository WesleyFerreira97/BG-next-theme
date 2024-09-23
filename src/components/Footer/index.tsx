import { Clock, MapPinLine } from "phosphor-react";
import React from "react";
import { Container } from "../Layout/Container";
import { FooterContainers, FooterCredits, FooterWrap } from "./styles";

export function Footer() {
    return (
        <FooterWrap>
            <div className='footer__logo-bar'>
                <Container>
                    <span className='footer__logo-wrap'>
                        <h1 className='title'>Bela Garota</h1>
                    </span>
                </Container>
            </div>
            <Container css={{
                height: "100%",
                flexGrow: "1",
                padding: "0 2rem"
            }}>
                <FooterContainers>
                    <div className='footer-container container-1'>
                        <p className='info__text'>Sua loja de moda feminina em Itabuna, encontre aqui produtos de diversas categorais, Condimentum adipiscing vel neque dis nam parturient orci at scelerisque</p>

                        <div className='info__item'>
                            <span className='info__icon'>
                                <MapPinLine size={24} />
                            </span>
                            <span className='info__text'>
                                <p>Rua São Francisco - Bairro de Fátima</p>
                                <p>Itabuna Ba</p>
                            </span>
                        </div>

                        <div className='info__item'>
                            <span className='info__icon'>
                                <Clock size={24} />
                            </span>
                            <span className='info__text'>
                                <p>Das 08:00 ás 18:00</p>
                            </span>
                        </div>


                    </div>
                    <div className='footer-container container-2'>
                        {/* <div className='menu__container'>
                            <div>
                                <h5 className='menu__title'>Category Title</h5>
                                <ul className='menu__wrap'>
                                    <li>Collectibles</li>
                                    <li>Domain Names</li>
                                    <li>Photography</li>
                                    <li>Sports</li>
                                    <li>Trading Cards</li>
                                    <li>Utility</li>
                                </ul>
                            </div>
                        </div> */}
                        {/* <div className='menu__container'>
                            <div>
                                <h5 className='menu__title'>Category Title</h5>
                                <ul className='menu__wrap'>
                                    <li>Domain Names</li>
                                    <li>Sports</li>
                                    <li>Utility</li>
                                    <li>Photography</li>
                                    <li>Collectibles</li>
                                    <li>Trading Cards</li>
                                </ul>
                            </div>
                        </div>
                        <div className='menu__container'>
                            <div>
                                <h5 className='menu__title'>Category Title</h5>
                                <ul className='menu__wrap'>
                                    <li>Domain Names</li>
                                    <li>Sports</li>
                                    <li>Utility</li>
                                    <li>Photography</li>
                                    <li>Collectibles</li>
                                    <li>Trading Cards</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className='footer-container'>
                        <div className='menu__container'>
                            <div>
                                <h5 className='menu__title'>Category Title</h5>
                                <ul className='menu__wrap'>
                                    <li>Domain Names</li>
                                    <li>Sports</li>
                                    <li>Utility</li>
                                    <li>Photography</li>
                                    <li>Collectibles</li>
                                    <li>Trading Cards</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </FooterContainers>
            </Container>
            <FooterCredits>
                <Container>
                    <span className='footer-credits__text'>
                        Garota Moda ©   feito por Wesley Ferreira
                    </span>
                </Container>
            </FooterCredits>
        </FooterWrap >
    );
}

