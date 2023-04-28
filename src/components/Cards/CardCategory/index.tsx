import React from 'react'
import { CardProps } from '../types'
import { CardCategoryWrap, CardInfoWrap } from './style'
import Image from 'next/image';

const CardInfo = ({ cardInfo }: Pick<CardProps, "cardInfo">) => {
    return (
        <>
            <CardInfoWrap>
                <div className='card-info'>
                    <h2 className='card-info__title'>
                        {cardInfo.title}
                    </h2>
                </div>
            </CardInfoWrap>
        </>
    )
}

export function CardCategory(props: Pick<CardProps, "cardInfo">) {
    const { cardInfo } = props;
    return (
        <CardCategoryWrap>
            <div className="card-category__image">
                <Image src={cardInfo.image} alt='image' fill={true} />
            </div>
            <CardInfo cardInfo={cardInfo} />

        </CardCategoryWrap>
    )
}
