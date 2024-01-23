import React, { useEffect } from 'react'
import { MenuSidebarCartWrap } from './styles'
import { useSelector } from 'react-redux'
import { CartDataProps } from 'src/types/cartTypes';
import ImageFallback from "../../../../public/images/code.jpg";
import { RootReducerTypes } from 'src/reduceres/rootReducer';
import { RootState, useAppSelector } from 'src/store';
import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';
import { ShoppingCartSimple } from 'phosphor-react';
import { useCart } from 'src/hooks/useCart';
import { useInsert } from 'src/hooks/useInsert';

type CartItemProps = {
    cart: CartDataProps[];
}

export function MenuSidebarCart() {
    const { cart }: CartItemProps = useAppSelector((state: RootState) => state);
    const { removeItem } = useCart();
    const { dataResponse, setData } = useInsert<any>("orders");

    useEffect(() => {
        console.log(dataResponse);
    }, [dataResponse])

    const handleSubmit = () => {
        setData({
            client_number: "8",
            client_name: "Wesley",
            client_order: cart,
        });
    }

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
                <div>
                    <Input
                        type='text'
                        label="Nome "
                        size='sm'
                    />
                    <Input
                        type='tel'
                        label="Número de Contato"
                        size='sm'
                    />
                </div>
                <div className='finish-buttons__subtotal'>
                    <h3 className='label'>Subtotal</h3>
                    <span className='final-price'>R$ 0,00</span>
                </div>
                <Button
                    className='cart-button'
                    // onPress={handleSubmit as () => void}
                    onPress={() => handleSubmit()}
                >
                    <ShoppingCartSimple size={24} />
                    <span className="label">Finalizar Compra</span>
                </Button>
            </div>
        </MenuSidebarCartWrap>
    )
}