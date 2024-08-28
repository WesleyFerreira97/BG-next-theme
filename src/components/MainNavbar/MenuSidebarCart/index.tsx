'use client'
import React, { useEffect, useState } from 'react'
import { MenuSidebarCartWrap } from './styles'
import { useSelector } from 'react-redux'
import { CartDataProps } from 'src/types/cartTypes';
import ImageFallback from "../../../../public/images/code.jpg";
import { RootReducerTypes } from 'src/reduceres/rootReducer';
import { RootState, useAppSelector } from 'src/store';
import Image from 'next/image';
import { Button, FormElement, Input } from '@nextui-org/react';
import { ShoppingCartSimple } from 'phosphor-react';
import { useCart } from 'src/hooks/useCart';
import { useInsert } from 'src/hooks/useInsert';
import { Formik } from 'formik';
import * as Yup from "yup"
import { useRouter } from 'next/router';
import Router from "next/router"

type CartItemProps = {
    cart: CartDataProps[];
}

type ClientDataProps = {
    client_number: number;
    client_name: string;
}

export function MenuSidebarCart() {
    const router = useRouter;
    const { cart }: CartItemProps = useAppSelector((state: RootState) => state);
    const { removeItem } = useCart();
    const { dataResponse, setData } = useInsert<any>("orders");

    const clientInitialData: ClientDataProps = {
        client_name: "",
        client_number: 0
    }

    useEffect(() => {
        if (!dataResponse?.error && dataResponse?.status !== 201) return

        setTimeout(() => (
            Router.push("/")
        ), 2500)
    }, [dataResponse])

    const handleSubmitCart = (value: ClientDataProps) => {

        setData({
            client_number: value.client_number,
            client_name: value.client_name,
            client_order: cart,
        });
    }

    const clientValidation = Yup.object().shape({
        client_number: Yup.string()
            .min(8, "O campo deve conter no mínimo 8 números")
            .max(11, "O campo deve conter no máximo 11 números")
            .required("Digite um número de contato").
            matches(/^\d+$/, "O campo deve conter apenas números"),
        client_name: Yup.string()
            .required("Digite seu nome")
            .min(3, "O nome deve conter no mínimo 3 caracteres")
            .max(70, "O nome deve conter no máximo 70 caracteres")
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O nome deve conter apenas letras e espaços")
    })

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
                <Formik
                    initialValues={clientInitialData}
                    validationSchema={clientValidation}
                    validateOnChange={true}
                    onSubmit={(value: ClientDataProps) => {
                        handleSubmitCart(value)
                    }}
                >
                    {({ handleSubmit, setFieldValue, errors, touched }) => (
                        <>
                            <div className='client-form'>
                                <Input
                                    type='text'
                                    label="Nome "
                                    size='md'
                                    bordered
                                    width='50%'
                                    name='client_name'
                                    onChange={(e) => setFieldValue("client_name", e.target.value)}
                                />
                                <Input
                                    type='tel'
                                    label="Número de Contato"
                                    size='md'
                                    bordered
                                    name='client_number'
                                    onChange={(e) => setFieldValue("client_number", e.target.value)}
                                />
                            </div>
                            <div className='form-error'>
                                {errors.client_name && touched.client_name
                                    ? (
                                        <span className='form-error__text'>
                                            - {errors.client_name}
                                        </span>
                                    ) :
                                    null}
                                {errors.client_number && touched.client_number
                                    ? (
                                        <span className='form-error__text'>
                                            - {errors.client_number}
                                        </span>
                                    ) :
                                    null}
                            </div>
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
                        </>
                    )}
                </Formik>
            </div>
        </MenuSidebarCartWrap >
    )
}
