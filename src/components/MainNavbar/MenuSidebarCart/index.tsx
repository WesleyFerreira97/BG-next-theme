import React, { useEffect } from 'react'
import { MenuSidebarCartWrap } from './styles'
import { CartDataProps } from 'src/types/cartTypes';
import ImageFallback from "../../../../public/images/code.jpg";
import { RootState, useAppSelector } from 'src/store';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { ShoppingCartSimple, Trash } from 'phosphor-react';
import { useCart } from 'src/hooks/useCart';
import Router from "next/router"

type CartItemProps = {
    cart: CartDataProps[];
}

export function MenuSidebarCart() {
    const { cart }: CartItemProps = useAppSelector((state: RootState) => state);
    const { removeItem } = useCart();

    const handleSubmit = () => {
        Router.push("/finish")
    }

    useEffect(() => {
        console.log(cart, "cart ");
    }, [cart])


    return (
        <MenuSidebarCartWrap>
            <div className='cart-items'>
                {cart.map((item, index) => {
                    const image = item?.image ? item.image : ImageFallback;
                    return (
                        <div
                            className='cart-item'
                            key={index}
                        >
                            <div className='cart-item__image'>
                                <Image
                                    src={image}
                                    alt={item.productTitle}
                                />
                            </div>
                            <div className='sidebar-cart__item'>
                                <div>
                                    <span className='cart-item__title'>
                                        {item.productTitle}
                                    </span>
                                    <span className='cart-item__price'>
                                        {item.price}
                                    </span>
                                </div>
                                <div onClick={() => removeItem(index)}>
                                    <span className='status'>
                                        <Trash size={25} />
                                        {/* Remover */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='finish-buttons'>
                <div className='finish-buttons__subtotal'>
                    <h3 className='label'>Subtotal</h3>
                    <span className='final-price'>R$ 0,00</span>
                </div>
                <Button
                    className='cart-button'
                    onPress={handleSubmit as () => void}
                >
                    <ShoppingCartSimple size={24} />
                    <span className="label">Finalizar Compra</span>
                </Button>
            </div>
        </MenuSidebarCartWrap >
    )
}
