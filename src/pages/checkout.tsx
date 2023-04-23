import React from 'react'
import { Container } from "@theme/Layout/";
import { useSelector } from "react-redux";
import CardCheckout from 'src/components/Cards/CardCheckout';
import { MainNavbar } from 'src/components/MainNavbar';
import { NavbarCategories } from 'src/components/NavbarCategories';

function Checkout(props: any) {
    const checkoutData = useSelector((state: any) => state.checkoutState.data);

    return (
        <>
            <MainNavbar position="relative" bgColor="primary" />
            <CardCheckout data={checkoutData} />
        </>
    )
};


export default Checkout;
