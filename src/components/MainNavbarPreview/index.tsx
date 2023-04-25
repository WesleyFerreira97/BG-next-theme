import { Button, Navbar } from '@nextui-org/react'
import React from 'react'
import { MainNavbarWrap, containerCss } from './style';
import { ShoppingCartSimple } from 'phosphor-react';

const categories = [
    "Início",
    "Camisas",
    "Calças",
    "Bermudas",
    "Acessórios",
]

const NavbarCategories = () => {
    return (
        <Navbar>
            <Navbar.Content hideIn="xs" variant="underline" className='main-menu'>
                <Navbar.Link href="#">Início</Navbar.Link>
                <Navbar.Link isActive href="#">Customers</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

export function MainNavbarPreview() {
    return (
        <MainNavbarWrap>
            <Navbar className='navbar' containerCss={containerCss}>
                <Navbar.Collapse>
                    {categories.map((item, index) => (
                        <Navbar.CollapseItem key={index}>
                            {item}
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
                <Navbar.Toggle aria-label="toggle navigation" />
                <Navbar.Brand>
                    <span className='brand--desktop navbar'>Title</span>
                </Navbar.Brand>

                <Navbar.Content>
                    <div className='navbar__cart'>
                        <div className='cart-icon'>
                            <ShoppingCartSimple size={25} />
                        </div>
                    </div>
                </Navbar.Content>
            </Navbar>
        </MainNavbarWrap>
    )
}
