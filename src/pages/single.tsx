import React from "react";
import { Container } from "../components/Layout/Container";
import { MainNavbar } from "../components/MainNavbar";
import { styled } from "stitches.config";
import { NavbarCategories } from "../components/NavbarCategories";
import { SingleProduct } from "../components/SingleProduct";

export const SingleWrap = styled("div", {
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
});

export default function Single() {
    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="#520476" />
            <NavbarCategories />
            <SingleProduct />
        </SingleWrap>
    );
}
