import React from 'react'
import { Container } from "@theme/Layout/";
import { useSelector } from "react-redux";
import CardCheckout from 'src/components/Cards/CardCheckout';
import { MainNavbar } from 'src/components/MainNavbar';
import { useAppSelector } from 'src/store';

function Checkout(props: any) {
    const checkoutData = useAppSelector((state) => state.checkoutState.data);

    return (
        <>
            <MainNavbar position="relative" bgColor="primary" />
            <CardCheckout data={checkoutData} />
        </>
    )
};


export default Checkout;
