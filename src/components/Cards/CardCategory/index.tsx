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
        <CardCategoryWrap>
            <motion.div
                initial={"initial"}
                animate={"initial"}
                whileHover={"animation"}
                style={{
                    width: '100%',
                    height: '35vh',
                }}
            >
                <motion.div
                    variants={zoomImage}
                    className='card-category__image'
                >
                    <Image
                        src={cardInfo.image}
                        alt='image'
                        fill={true}
                    />
                </motion.div>
                <CardInfo cardInfo={cardInfo} />
            </motion.div>
        </CardCategoryWrap>

    )
}
