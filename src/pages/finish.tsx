import React, { useEffect } from 'react'
import { MainNavbar } from 'src/components/MainNavbar'
import { useInsert } from 'src/hooks/useInsert';
import Router from "next/router"
import * as Yup from "yup"
import { RootState, useAppSelector } from 'src/store';
import { CartDataProps } from 'src/types/cartTypes';
import ImageFallback from "../../public/images/code.jpg";
import { useCart } from 'src/hooks/useCart';
import { FinishWrap } from 'src/styles/styleFinish';
import { Formik } from 'formik';
import { Button, Input, Textarea } from '@nextui-org/react';
import { ShoppingCartSimple } from 'phosphor-react';
import CardFinish from 'src/components/Cards/CardFinish';

type ClientDataProps = {
    client_number: number;
    client_name: string;
    comment?: string;
}

type CartItemProps = {
    cart: CartDataProps[];
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


function finish() {
    const { cart }: CartItemProps = useAppSelector((state: RootState) => state);
    const { dataResponse, setData } = useInsert<any>("orders");
    const { clearCart } = useCart();

    useEffect(() => {
        if (!dataResponse?.error && dataResponse?.status !== 201) return

        setTimeout(() => (
            Router.push("/")
        ), 2500)
    }, [dataResponse])

    const clientInitialData: ClientDataProps = {
        client_name: "",
        client_number: 0
    }

    const handleSubmitCart = (value: ClientDataProps) => {
        setData({
            client_number: value.client_number,
            client_name: value.client_name,
            client_order: cart,
            comments: value?.comment
        });
    }

    return (
        <>
            <MainNavbar position="relative" bgColor="primary" />
            <FinishWrap>
                <div className='content'>
                    <h1 className='page-title'>
                        Carrinho de compras
                    </h1>
                    <div className='finish-content'>
                        <div className='finish-items'>
                            {cart.map((item, index) => {
                                const image = item?.image ? item.image : ImageFallback;

                                return (
                                    <CardFinish
                                        data={item}
                                        id={index}
                                        image={image}
                                    />
                                )
                            })}
                        </div>
                        <div className='finish-form'>
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
                                                label="Seu Nome"
                                                size='md'
                                                bordered
                                                color="warning"
                                                style={{ fontSize: "1.2rem", color: "#fff" }}
                                                name='client_name'
                                                onChange={(e) => setFieldValue("client_name", e.target.value)}
                                            />
                                            <Input
                                                type='tel'
                                                label="Número de Contato"
                                                size='md'
                                                bordered
                                                color="warning"
                                                style={{ fontSize: "1.2rem", color: "#fff" }}
                                                name='client_number'
                                                onChange={(e) => setFieldValue("client_number", e.target.value)}
                                            />
                                        </div>
                                        <Textarea
                                            label="Comentários"
                                            size='md'
                                            bordered
                                            color="warning"
                                            minRows={5}
                                            cols={50}
                                            style={{ fontSize: "1.2rem", color: "#fff", width: "100%" }}
                                            name='client_number'
                                            onChange={(e) => setFieldValue("comment", e.target.value)}
                                        />
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
                                    </>
                                )}
                            </Formik>
                            <Button
                                onClick={() => clearCart()}
                            >
                                Clear Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </FinishWrap>
        </>
    )
}

export default finish