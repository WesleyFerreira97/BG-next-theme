import React from 'react'
import { MenuSidebarCartWrap } from './styles'
import { useSelector } from 'react-redux'
import { OrderDataProps } from '../../SingleProduct';

export function MenuSidebarCart() {
    const cart: [OrderDataProps] = useSelector((state) => state.order);

    console.log(cart);


    return (
        <MenuSidebarCartWrap>
            {cart.map((item, index) => (
                <div key={index}>
                    {item.productTitle}
                </div>
            ))}
        </MenuSidebarCartWrap>
    )
}
