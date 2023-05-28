import React from 'react'
import { MenuSidebarCartWrap } from './styles'
import { useSelector } from 'react-redux'
import { OrderDataProps } from 'src/types/cartTypes';
import ImageFallback from "../../../../public/images/code.jpg";
import { RootReducerTypes } from 'src/reduceres/rootReducer';
import { RootState, useAppSelector } from 'src/store';
import Image from 'next/image';

type OrderItemProps = {
    order: OrderDataProps[];
}

export function MenuSidebarCart() {
    const { order }: OrderItemProps = useAppSelector((state: RootState) => state);

    return (
        <MenuSidebarCartWrap>
            {order.map((item, index) => {
                const image = item?.image ? item.image : ImageFallback;
                return (
                    <div
                        className='cart-item'
                        key={index}
                    >
                        <span className='cart-item__title'>
                            {item.productTitle}
                        </span>
                        <span className='cart-item__price'>
                            {item.price}
                        </span>
                        <Image src={image} alt={item.productTitle} width={100} height={100} />
                    </div>
                )
            })}
        </MenuSidebarCartWrap>
    )
}
