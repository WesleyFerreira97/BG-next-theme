import React from 'react'
import { CategoryBackground, CategoryCardWrap } from './styles'

import People1 from '../../../../public/images/people1.jpg'
import Image from 'next/image'

interface CardCategoryProps {
    title: string,
    subTitle: string,
    image: string,
    link: string,
    bgColor?: string
}

export function CardCategory(props: CardCategoryProps) {
    return (
        <CategoryCardWrap style={{ background: props?.bgColor }}>
            <a href="#">
                <CategoryBackground>
                    <Image
                        alt="Image"
                        src={People1}
                        objectFit='cover'
                        layout='fill'
                    />
                </CategoryBackground>

                <div className='card-info'>
                    <h4 className='card-info__title'>{props.title}</h4>
                    <span className='card-info__subtitle'>{props.subTitle}</span>
                </div>
            </a>
        </CategoryCardWrap>
    )
}


// BG Color?
// Title
// SubTitle
// Image
// Link
