import Image from 'next/image'
import React from 'react'
import { Container } from '../Container'
import { MainContentImage, MainContentWrap } from './styles'
import Woman1 from '../../../public/images/woman1.jpg'

export function MainContent() {
    return (
        <MainContentWrap>
            <MainContentImage>
                <Image
                    src={Woman1}
                    alt="Woman1"
                    width={'100%'}
                    height={'100%'}
                    layout='responsive'
                    // objectFit="cover"
                    quality={10}
                />
                Image
            </MainContentImage>
            <Container>
                MainContent
            </Container>
        </MainContentWrap>
    )
}
