import React from "react";
import { CardWrap, CardImageContainer } from "./styles";

import People2 from "../../../../public/images/people4.jpg";
import Image from "next/image";

type CardProductProps = {
    title: string;
    description?: string;
    price?: number;
    bg?: string;
}

export function CardProduct({ title, ...props }: CardProductProps) {
    return (
        <CardWrap style={{ background: props?.bg }}>
            <CardImageContainer>
                <Image
                    alt="Image"
                    src={People2}
                    className='card-image'
                    placeholder="blur"
                />
            </CardImageContainer>
            <div className='card-info'>
                <h4 className='card-info__title'>{title}</h4>
                <span className='card-info__subtitle'>{props.description}</span>
                <span className='card-info__price'>R${props.price}</span>
            </div>
        </CardWrap>
    );
}