import React from 'react'
import { CardProps } from '../types'
import { CardCategoryWrap, CardInfoWrap } from './style'
import Image from 'next/image';
import { motion } from 'framer-motion';

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

const zoomImage = {
    initial: { scale: 1 },
    animation: { scale: 1.2 },
}

export function CardCategory(props: Pick<CardProps, "cardInfo">) {
    const { cardInfo } = props;

    return (
        <motion.div
            initial={"initial"}
            animate={"animation"}
            whileHover={"animation"}
            className='card-category__image'
        >
            <CardCategoryWrap>
                <motion.div
                    variants={zoomImage}
                >
                    <Image
                        src={cardInfo.image}
                        alt='image'
                        fill={true}
                    />
                </motion.div>
                <CardInfo cardInfo={cardInfo} />
            </CardCategoryWrap>
        </motion.div>

    )
}
