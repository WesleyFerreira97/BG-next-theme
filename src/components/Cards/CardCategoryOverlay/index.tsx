import React from 'react'
import { CardWrap, CategoryBackground } from './styles'

import People1 from '../../../../public/images/people2.jpg'
import Image from 'next/image'

export function CardCategoryOverlay(props: any) {
    return (
        <CardWrap style={{ background: props?.bg }}>
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
                <h4 className='card-info__title'> Jaquetas</h4>
                <span className='card-info__subtitle'>O Subtitulo</span>
            </div>
        </CardWrap>
    )
}

// => != !== != !== <=
// BG Color?
// Title
// SubTitle
// Image
// Link
