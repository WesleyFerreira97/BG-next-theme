import { A11y, Scrollbar, Autoplay } from 'swiper';
import React from 'react'
import { GridWrap } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row } from '@nextui-org/react';
import { Header } from '../../WidgetsHeader';
import { CardCategoryOverlay } from '../../Cards/CardCategoryOverlay';
import { Columns } from 'phosphor-react';

const gridItemsData = {
    item1: {
        title: "Conjuntos",
        text: "But like any other object, you can scale the object the Image fills.",
        image: "Woman1"
    },
    item2: {
        title: "Regatas",
        text: "But like any other object, you can scale the object the Image fills.",
        image: "Woman1"
    },
    item3: {
        title: "Jaquetas",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
    item4: {
        title: "Bolsas",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
    item5: {
        title: "Calças",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
}


export function GridOtherCategories() {
    return (
        <GridWrap>
            <Container fluid css={{ padding: '.3rem !important' }}>
                <Row style={{ margin: '0 auto 1.5rem' }}>
                    <Header>
                        <Header.SubTitle>A Subtitle</Header.SubTitle>
                        <Header.Title>Novidades</Header.Title>
                        <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                    </Header>
                </Row>
                <Swiper
                    modules={[Scrollbar, A11y, Autoplay]}
                    slidesPerView={'auto'}
                    breakpoints={{
                        0: {
                            slidesPerView: 2
                        },
                        960: {
                            slidesPerView: 4,
                            noSwiping: true,
                            allowSlidePrev: true,
                            allowSlideNext: true
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    }}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    loop
                    watchOverflow
                    scrollbar={{ draggable: true }}
                    spaceBetween={6}
                >
                    {Object.values(gridItemsData).map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardCategoryOverlay />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </GridWrap>
    )
}
