import React from "react";
import { Container } from "../Layout/Container";
import { ComponentBehavior, ProductGallery, ProductInfo, SingleProductWrap } from "./styles";
import Woman2 from "../../../public/images/woman3.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ShoppingCartSimple } from "phosphor-react";

export function SingleProduct() {
    return (
        <SingleProductWrap>
            <Container xs={100}>
                <ComponentBehavior>
                    <ProductGallery>
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

                    </ProductGallery>
                    <ProductInfo>
                        <div className='product-info__div'>
                            <h1 className='product-info__title'>
                                Top de malha transparente com brilho e borda alface
                            </h1>
                            <span className='product-info__price'>
                                R$39,90
                            </span>
                            <span className='product-info__payment-info'>
                                Parcelamos no cartão em até 12x, aceitamos Pix
                            </span>
                        </div>

                        <div className='product-info__div'>
                            <div className='product-info__color'>
                                <span className='product-info__label'>
                                    Color: &nbsp;
                                    <span className='product-info__label--thin'>
                                        Preto
                                    </span>
                                </span>
                                <div className='product-info__color-available'>
                                    <span className='color-button'> </span>
                                    <span className='color-button'> </span>
                                    <span className='color-button'> </span>
                                </div>
                            </div>
                        </div>

                        <div className='product-info__div'>
                            <div className='product-info__size'>
                                <span className='product-info__label'>
                                    Tamanhos :
                                </span>
                                <div className='product-info__size-available'>
                                    <span className='size-button'> P </span>
                                    <span className='size-button'> M </span>
                                    <span className='size-button'> G </span>
                                    <span className='size-button'> GG </span>
                                </div>
                            </div>
                        </div>

                        <div className='finish-buttons'>
                            <Button
                                className='cart-button'
                                css={{
                                    background: "#27AE60",
                                    borderRadius: "4px",
                                    padding: "24px 32px",
                                }} >
                                <ShoppingCartSimple size={24} />
                                <span>Adicionar ao carrinho</span>
                            </Button>
                        </div>
                    </ProductInfo>
                </ComponentBehavior>
            </Container>
        </SingleProductWrap>
    );
}