import React from "react";
import { MainMenuWrap, MainNavbarWrap, SidebarCategoriesWrap } from "./styles";
import { List, ShoppingCartSimple, CaretRight } from "phosphor-react";
import { Container } from "../Layout/Container";
import { MenuSidebar } from "../MenuSidebar";
import { MenuSidebarCategories } from "./MenuSidebarCategories";
import { MenuSidebarCart } from "./MenuSidebarCart";

export type MainNavbarProps = {
    bgColor?: "primary" | "transparent",
    position?: "absolute" | "relative",
    showCategories?: boolean
}

export function MainNavbar(props: MainNavbarProps) {

    return (
        <>
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
                {props.showCategories && <MainMenuWrap>
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
                </MainMenuWrap>}
                <MenuSidebar.Content
                    contentId="categories"
                    side="left"
                    menuTitle="Menu"
                >
                    <MenuSidebarCategories />
                </MenuSidebar.Content>
                <MenuSidebar.Content
                    contentId="cart"
                    side="right"
                    menuTitle="Carrinho"
                >
                    <MenuSidebarCart />
                </MenuSidebar.Content>
            </MenuSidebar>
        </>
    );
}


