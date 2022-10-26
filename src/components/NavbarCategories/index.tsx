import React from "react";
import { Container } from "../Layout/Container";
import { NavbarCategoriesWrap } from "./styles";

export function NavbarCategories() {
    return (
        <NavbarCategoriesWrap>
            <Container>
                <ul className='navbar-categories__menu'>
                    <li>Inicio</li>
                    <li>Novidades</li>
                    <li>Conjuntos</li>
                    <li>Shorts</li>
                    <li>Acessórios</li>
                    <li>Body</li>
                    <li>Meias</li>
                    <li>Regatas</li>
                </ul>
            </Container>
        </NavbarCategoriesWrap>
    );
}
