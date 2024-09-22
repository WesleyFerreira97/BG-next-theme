import React from "react";
import { CardFinishWrap } from "./styles";
import { Container } from "@theme/Layout/Container";
import Image from "next/image";
import FallbackImage from "public/images/code.jpg";
import { CheckCircle, Trash } from "phosphor-react";
import { CartDataProps } from "src/types/cartTypes";
import { useCart } from "src/hooks/useCart";

type CardFinishProps = {
    id?: number;
    data: CartDataProps;
    image?: any;
}

export default function CardFinish(props: CardFinishProps) {
    const { data } = props;
    const image = data?.image ? data.image : FallbackImage;
    const { removeItem } = useCart();

    if (!data) {
        return null;
    }

    return (
        <CardFinishWrap>
            <Container
                css={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <div className='card-finish'>
                    <div className='card-finish__image'>
                        <Image src={image} alt={data.productTitle} fill={true} />
                    </div>

                    <div className='card-finish__info-wrap'>
                        <div className='card-finish__info'>

                            <h3 className='title'>{data.productTitle}</h3>
                            <span className='price'>R$ {data.price}</span>
                            <hr className='separator' />
                        </div>
                        <div className='card-finish__info'>
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
                        <div
                            className='card-finish__info'
                            onClick={() => removeItem(props.id)}
                        >
                            <span className='status'>
                                <Trash size={25} />
                                Remover
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </CardFinishWrap>
    );
}
