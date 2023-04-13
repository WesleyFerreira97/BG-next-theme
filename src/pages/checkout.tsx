import React from 'react'
import {
    useRouter
} from 'next/router';

function Checkout(props: any) {
    const router = useRouter();
    const { params } = router.query;

    console.log("route params :", params);


    return (
        <div>Checkout</div>
    )
};


export default Checkout;
