import React from "react";
import styled from "styled-components";
import { MainNavbarWrap } from "./styles";
import { List, ShoppingCartSimple } from "phosphor-react";
import { Container } from "../Layout/Container";

export type MainNavbarProps = {
    bgColor?: string,
    position?: string,
}

export function MainNavbar(props: MainNavbarProps) {
    return (
        <MainNavbarWrap {...props}>
            <Container>
                <div className='navbar__menu'>
                    <div className='menu-icon'>
                        <List />
                    </div>
                </div>
                <div className='navbar__brand'>
                    <span className='brand--desktop'>Bela Garota</span>
                    <span className='brand--mobile'>BG</span>
                </div>
                <div className='navbar__cart'>
                    <div className='cart-icon'>
                        <ShoppingCartSimple />
                    </div>
                </div>
            </Container>
        </MainNavbarWrap>
    );
}

