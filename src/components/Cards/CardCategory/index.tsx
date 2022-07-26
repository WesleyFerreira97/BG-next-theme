import React from 'react'
import { CategoryBackground, CategoryCardWrap } from './styles'

import People1 from '../../../../public/images/people1.jpg'
import Image from 'next/image'
import { Row } from '@nextui-org/react'

export function CardCategory(props: any) {
    return (
        <CategoryCardWrap style={{ background: props?.bg }}>
            <CategoryBackground>
                <Image
                    width={'100%'}
                    height={'100%'}
                    alt="Image"
                    src={People1}
                    objectFit='cover'
                    layout='fill'
                />
            </CategoryBackground>
            <div className='card-info'>
                <h4 className='card-info__title'> APENAS UM TITULO</h4>
                <span className='card-info__subtitle'>O Subtitulo</span>
            </div>
        </CategoryCardWrap>
    )
}


// BG Color?
// Title
// SubTitle
// Image
// Link
