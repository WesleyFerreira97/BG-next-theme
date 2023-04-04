import React, { useState } from "react";
import { Container } from "../Layout/Container";
import { ColorSelectButton, ComponentBehavior, ProductGalleryWrap, ProductInfo, SingleProductWrap } from "./styles";
import Woman2 from "../../../public/images/code.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ShoppingCartSimple } from "phosphor-react";
import { ToggleGroup } from "../ToggleGroup";
import { ProductProps, BucketProps, ProductWithBucketProps } from "src/types/product";
import { Formik } from "formik";

type SingleProductProps = {
    data: Partial<ProductWithBucketProps>;
};

type OrderDataProps = {
    productTitle: string;
    price?: number;
    selectedSize?: string | number;
    selectedColor?: string;
}

const ProductGallery = () => {

    return (
        <ProductGalleryWrap>
            <div className='grid-thumbnails'>
                <div className='grid-thumbnails__item'>
                    <Image
                        src={Woman2.src}
                        alt="Main product image"
                        fill={true}
                    />
                </div>
                <div className='grid-thumbnails__item'>
                    <Image
                        src={Woman2.src}
                        alt="Main product image"
                        fill={true}
                    />
                </div>
                <div className='grid-thumbnails__item'>
                    <Image
                        src={Woman2.src}
                        alt="Main product image"
                        fill={true}
                    />
                </div>
            </div>
            <div className='main-image'>
                <Image
                    src={Woman2.src}
                    alt="Main product image"
                    quality={100}
                    fill={true}
                />
            </div>
        </ProductGalleryWrap>
    )
}


const fakeColorData: any = {
    black: "#000",
    blue: "#0000FF",
    red: "#FF0000",
    green: "#00FF00",
}

export function SingleProduct(props: SingleProductProps) {
    const { data } = props;

    const FormInitialValues = {
        productTitle: data?.title,
        price: data?.price,
        selectedSize: "P",
        selectedColor: "blue",
    }

    return (
        <SingleProductWrap>
            <Container xs={100}>
                <ComponentBehavior>
                    <ProductGallery />
                    <ProductInfo>
                        <div className='product-info__div'>
                            <h1 className='product-info__title'>
                                {data?.title}
                            </h1>
                            <span className='product-info__price'>
                                R$39,90
                            </span>
                            <span className='product-info__payment-info'>
                                Parcelamos no cartão em até 12x, aceitamos Pix
                            </span>
                        </div>
                        <Formik
                            initialValues={FormInitialValues}
                            onSubmit={(values) => { console.log(values) }}
                        >
                            {({ values, handleChange, handleBlur, handleSubmit }) => (
                                <>
                                    <div className='product-info__div'>
                                        <div className='product-info__color'>
                                            <span className='product-info__label'>
                                                Cor: &nbsp;
                                                <span className='product-info__label--thin'>
                                                    Preto
                                                </span>
                                            </span>
                                            <div className='product-info__color-available'>
                                                {/* <ColorSelectButton color="red" />
                                                <ColorSelectButton color="blue" />
                                                <ColorSelectButton /> */}

                                                <ToggleGroup
                                                    name="selectedColor"
                                                    itemType="color"
                                                >
                                                    {Object.keys(fakeColorData)
                                                        .map((item: string) => (
                                                            <ToggleGroup.Item
                                                                key={item}
                                                                value={item}
                                                                color={fakeColorData[item]}
                                                            />
                                                        ))}
                                                </ToggleGroup>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='product-info__div'>
                                        <div className='product-info__size'>
                                            <span className='product-info__label'>
                                                Tamanhos :
                                            </span>
                                            <ToggleGroup
                                                name="selectedSize"
                                                itemType="label"
                                            >
                                                {Object.keys(data.sizes_available)
                                                    .map((item) => (
                                                        <ToggleGroup.Item
                                                            key={item}
                                                            value={item}
                                                            label={item}
                                                            available={data.sizes_available[item]}
                                                        />
                                                    ))}
                                            </ToggleGroup>
                                        </div>
                                    </div>

                                    <div className='finish-buttons'>
                                        <Button
                                            className='cart-button'
                                            css={{
                                                background: "#27AE60",
                                                borderRadius: "4px",
                                                padding: "24px 32px",
                                            }}
                                            onPress={handleSubmit as () => void}
                                        >
                                            <ShoppingCartSimple size={24} />
                                            <span>Adicionar ao carrinho</span>
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Formik>
                    </ProductInfo>
                </ComponentBehavior>
            </Container>
        </SingleProductWrap >
    );
}
