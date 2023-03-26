import React, { useState } from "react";
import { Container } from "../Layout/Container";
import { ColorSelectButton, ComponentBehavior, ProductGallery, ProductInfo, SingleProductWrap } from "./styles";
import Woman2 from "../../../public/images/code.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ShoppingCartSimple } from "phosphor-react";
import { ToggleGroup } from "../ToggleGroup";

export function SingleProduct(props: any) {
    const { title, price, description, images, colors, sizes } = props;

    const [orderData, setOrderData] = useState({
        productTitle: title,
        price: price,
        selectedSize: sizes,
        selectedColor: colors,
    });

    const handleSizeData = (value: string | number) => {
        setOrderData(prevstate => ({
            ...prevstate,
            selectedSize: value
        }))
    };

    const handleColorData = (value: string | number) => {
        setOrderData(prevstate => ({
            ...prevstate,
            selectedColor: value
        }))
    };

    const getCurrentState = () => console.log(orderData);

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
                                Titulo do produto aqui
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
                                    Cor: &nbsp;
                                    <span className='product-info__label--thin'>
                                        Preto
                                    </span>
                                </span>
                                <div className='product-info__color-available'>
                                    <ColorSelectButton color="red" />
                                    <ColorSelectButton color="blue" />
                                    <ColorSelectButton />
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
                                <input
                                    type="radio"
                                    name="sizeProduct"
                                    id="sizeP"
                                    onClick={() => handleSizeData("P")}
                                    className="size-button"
                                />
                                <input
                                    type="radio"
                                    name="sizeProduct"
                                    id="sizeM"
                                    onClick={() => handleSizeData("M")}
                                />
                            </div>
                        </div>

                        <ToggleGroup changeState={handleSizeData}>
                            <ToggleGroup.Item value="Outro Valor" itemType="color" color="#fff" />
                            <ToggleGroup.Item value="Bagaça" itemType="color" color="#fff" />
                            <ToggleGroup.Item value="Option1" itemType="color" color="#fff" />
                        </ToggleGroup>

                        <div className='finish-buttons'>
                            <Button
                                className='cart-button'
                                css={{
                                    background: "#27AE60",
                                    borderRadius: "4px",
                                    padding: "24px 32px",
                                }}
                                onClick={() => { }}
                            >
                                <ShoppingCartSimple size={24} />
                                <span>Adicionar ao carrinho</span>
                            </Button>

                        </div>
                        <Button onClick={getCurrentState}>Current Data</Button>
                    </ProductInfo>
                </ComponentBehavior>
            </Container>
        </SingleProductWrap>
    );
}
