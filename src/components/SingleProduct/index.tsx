import React from 'react'
import { Container } from '../Layout/Container'
import { ComponentBehavior, ProductGallery, ProductInfo, SingleProductWrap } from './styles'
import Woman2 from '../../../public/images/woman2.jpg'
import Image from 'next/future/image'
import { Button } from '@nextui-org/react'

export function SingleProduct() {
    return (
        <SingleProductWrap>
            <Container xs={100}>
                <ComponentBehavior>
                    <ProductGallery>
                        <div className='temp'>
                            <Image
                                src={Woman2.src}
                                alt="Main product image"
                                fill={true}
                            />
                        </div>
                    </ProductGallery>
                    <ProductInfo>
                        <h1 className='product-info__title'>
                            Top de malha transparente com brilho e borda alface
                        </h1>
                        <span className='product-info__price'>
                            R$39,90
                        </span>
                        <span className='product-info__payment-info'>
                            Parcelamos no cartão em até 12x, aceitamos Pix
                        </span>

                        <div className='product-info__color'>
                            <span className='product-info__color-selected'>
                                Color: &nbsp;
                                <span className='current-color'>Preto</span>
                            </span>
                            <div className='product-info__color-available'>
                                <span className='color-button'> </span>
                                <span className='color-button'> </span>
                                <span className='color-button'> </span>
                            </div>
                        </div>

                        <div className='product-info__size'>
                            <span className='product-info__size-label'>
                                Tamanhos :
                            </span>
                            <div className='product-info__size-available'>
                                <span className='size-button'> P </span>
                                <span className='size-button'> M </span>
                                <span className='size-button'> G </span>
                                <span className='size-button'> GG </span>
                            </div>
                        </div>

                        <div className='finish-buttons'>
                            <Button
                                className='cart-button'
                                css={{
                                    background: '#27AE60',
                                    borderRadius: '4px',
                                    padding: '18px 24px',
                                }} >
                                <span>Adicionar ao carrinho</span>
                            </Button>
                        </div>
                    </ProductInfo>
                </ComponentBehavior>
            </Container>
        </SingleProductWrap>
    )
}
