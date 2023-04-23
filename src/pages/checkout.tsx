import React from 'react'
import { Container } from "@theme/Layout/";
import { useSelector } from "react-redux";
import CardCheckout from 'src/components/Cards/CardCheckout';

function Checkout(props: any) {
    const checkoutData = useSelector((state: any) => state.checkoutState.data);

    return (
        <>
            <CardCheckout data={checkoutData} />
        </>
    )
};


export default Checkout;
