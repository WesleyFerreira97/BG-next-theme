import React from 'react'
import { MenuSidebarCartWrap } from './styles'
import { useSelector } from 'react-redux'
import { CartDataProps } from 'src/types/cartTypes';
import ImageFallback from "../../../../public/images/code.jpg";
import { RootReducerTypes } from 'src/reduceres/rootReducer';
import { RootState, useAppSelector } from 'src/store';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { ShoppingCartSimple } from 'phosphor-react';
import { useCart } from 'src/hooks/useCart';

type CartItemProps = {
    cart: CartDataProps[];
}

export function MenuSidebarCart() {
    const { cart }: CartItemProps = useAppSelector((state: RootState) => state);
    const { removeItem } = useCart();

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
                            <div>
                                <span className='cart-item__title'>
                                    {item.productTitle}
                                </span>
                                <span className='cart-item__price'>
                                    {item.price}
                                </span>
                                <button
                                    onClick={() => removeItem(index)}
                                >
                                    Remove Item
                                </button>
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
                    // onPress={handleSubmit as () => void}
                    onPress={() => console.log(cart)}
                >
                    <ShoppingCartSimple size={24} />
                    <span className="label">Finalizar Compra</span>
                </Button>
            </div>
        </MenuSidebarCartWrap>
    )
}
