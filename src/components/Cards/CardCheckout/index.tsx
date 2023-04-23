import React from 'react'
import { CardCheckoutWrap } from './styles';
import { Container } from '@theme/Layout/Container';
import Image from 'next/image';
import FallbackImage from "public/images/code.jpg";
import { CheckCircle } from 'phosphor-react';

export default function CardCheckout(props: any) {
    const { data } = props;

    const image = data?.image ? data.image : FallbackImage;

    if (!data) {
        return null;
    }

    return (
        <CardCheckoutWrap>
            <Container
                css={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <div className='card-checkout'>
                    <div className='card-checkout__image'>
                        <Image src={image} alt={data.productTitle} fill={true} />
                    </div>

                    <div>
                        <div className='card-checkout__info'>
                            <span className='status'>
                                <CheckCircle size={32} />
                                Adicionado ao carrinho
                            </span>
                            <h3 className='title'>{data.productTitle}</h3>
                            <span className='price'>R$ {data.price}</span>
                            <hr className='separator' />
                        </div>
                        <div className='card-checkout__info'>
                            <p className='size'>
                                <span className='label'>Tamanho Selecionado :  </span>
                                {data.selectedSize}
                            </p>
                            <p className='color'>
                                <span className='label'>Cor Selecionada :  </span>
                                {data.selectedColor}
                            </p>
                            <hr className='separator' />
                        </div>
                    </div>
                </div>
            </Container>
        </CardCheckoutWrap>
    )
}
