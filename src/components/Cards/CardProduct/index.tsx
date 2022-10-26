import React from "react";
import { CardWrap, CardBackground } from "./styles";

import People2 from "../../../../public/images/people4.jpg";
import Image from "next/image";

export function CardProduct(props: any) {
    return (
        <CardWrap style={{ background: props?.bg }}>
            <CardBackground>
                <Image
                    alt="Image"
                    src={People2}
                />
            </CardBackground>
            <div className='card-info'>
                <h4 className='card-info__title'> APENAS UM TITULO</h4>
                <span className='card-info__subtitle'>O Subtitulo</span>
                <span className='card-info__price'>R$120,00</span>
            </div>
        </CardWrap>
    );
}


// BG Color?
// Title
// SubTitle
// Image
// Link
