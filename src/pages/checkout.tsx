import React from 'react'
import { Container } from "@theme/Layout/";
import { useSelector } from "react-redux";
import CardCheckout from 'src/components/Cards/CardCheckout';
import { MainNavbar } from 'src/components/MainNavbar';
import { useAppSelector } from 'src/store';
import { CartDataProps } from 'src/types/cartTypes';

function Checkout(props: any) {
    const checkoutData: CartDataProps = useAppSelector((state) => state.checkoutState.data);

    return (
        <>
            <MainNavbar position="relative" bgColor="primary" />
            <CardCheckout data={checkoutData} />
        </>
    )
};

export default Checkout;
