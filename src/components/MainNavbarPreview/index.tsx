import { Button, Navbar } from '@nextui-org/react'
import React from 'react'
import { MainNavbarWrap, containerCss } from './style'

export function MainNavbarPreview() {
    return (
        <MainNavbarWrap>
            <Navbar className='navbar' containerCss={containerCss}>
                <Navbar.Brand>
                    <span className='brand--desktop'>Title</span>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="underline" >
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as="a" href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </MainNavbarWrap>
    )
}
