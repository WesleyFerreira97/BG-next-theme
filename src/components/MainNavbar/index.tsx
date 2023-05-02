import React from "react";
import { MainMenuWrap, MainNavbarWrap } from "./styles";
import { List, ShoppingCartSimple } from "phosphor-react";
import { Container } from "../Layout/Container";
import { MenuSidebar } from "../MenuSidebar";

export type MainNavbarProps = {
    bgColor?: "primary" | "transparent",
    position?: "absolute" | "relative",
}
const SidebarMenu = () => {
    return (
        <MenuSidebar.Content contentId="categories">
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </MenuSidebar.Content>
    )
}
export function MainNavbar(props: MainNavbarProps) {

    return (
        <>
            {/* <MenuSidebar /> */}
            <MenuSidebar registerContents={["categories", "cart"]}>
                <MainNavbarWrap {...props}>
                    <Container>
                        <div className="navbar ertertetrr">
                            <div className='navbar__menu'>
                                <div className='menu-icon'>
                                    <MenuSidebar.ToggleMenu contentId="categories">
                                        <List size={25} />
                                    </MenuSidebar.ToggleMenu>

                                </div>
                            </div>
                            <div className='navbar__brand'>
                                <span className='brand--desktop'>Title</span>
                                <span className='brand--mobile'>BG</span>
                            </div>
                            <div className='navbar__cart'>
                                <div className='cart-icon'>
                                    <MenuSidebar.ToggleMenu contentId="cart">
                                        <ShoppingCartSimple size={25} />
                                    </MenuSidebar.ToggleMenu>
                                </div>
                            </div>
                        </div>
                    </Container>
                </MainNavbarWrap>
                <MainMenuWrap>
                    <Container>
                        <div className="main-menu__behavior">
                            <ul className="main-menu">
                                <li className="main-menu__item">Ínicio</li>
                                <li className="main-menu__item">
                                    <a href="#">
                                        Camisas
                                    </a>
                                </li>
                                <li className="main-menu__item"><a href="#">Regatas</a></li>
                                <li className="main-menu__item"><a href="#">Conjuntos</a></li>
                                <li className="main-menu__item"><a href="#">Promoções</a></li>
                            </ul>
                        </div>
                    </Container>
                </MainMenuWrap>
                <SidebarMenu />
            </MenuSidebar>
        </>
    );
}