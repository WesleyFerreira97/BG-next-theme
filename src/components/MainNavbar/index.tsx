import React from 'react'
import styled from 'styled-components'
import { MainNavbarWrap } from './styles'
import { List, ShoppingCartSimple } from 'phosphor-react'
import { Container } from '../Container'

export function MainNavbar() {
    return (
        <MainNavbarWrap>
            <Container>
                <div className='navbar__menu'>
                    <div className='menu-icon'>
                        <List />
                    </div>
                </div>
                <div className='navbar__brand'>
                    Bela Garota
                </div>
                <div className='navbar__cart'>
                    <div className='cart-icon'>
                        <ShoppingCartSimple />
                    </div>
                </div>
            </Container>
        </MainNavbarWrap>
    )
}
