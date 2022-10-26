import React from "react";
import { Container } from "../components/Layout/Container";
import { MainNavbar } from "../components/MainNavbar";
import styled from "styled-components";
import { NavbarCategories } from "../components/NavbarCategories";
import { SingleProduct } from "../components/SingleProduct";

const SingleWrap = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default function Single() {
    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="#520476" />
            <NavbarCategories />
            <SingleProduct />
        </SingleWrap>
    );
}
