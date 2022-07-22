import React from 'react'
import Woman1 from '../../../public/images/woman1.png'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem } from '../CarouselItem';
import Image from 'next/image';
import { Container } from '@nextui-org/react';

const carouselItemsData = {
    item1: {
        title: "Conjuntos",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        buttons: {
            seeMore: 'see something',
            previewButton: 'preview',
        },
        image: "Woman1"
    },
    item2: {
        title: "Regatas",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        buttons: {
            seeMore: 'see something',
            previewButton: 'preview',
        },
        image: "Woman1"
    },
    item3: {
        title: "É ISSO MEMO TIO",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        buttons: {
            seeMore: 'see something',
            previewButton: 'preview',
        },
        image: "Woman1"
    },
}

export function HomeCarousel() {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // onSwiper={(swiper) => (window.swiper = swiper)}
                slidesPerView={1}
                // spaceBetween={50}
                navigation
                loop
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
            >
                {Object.values(carouselItemsData).map((item, index) => (
                    <SwiperSlide key={index}>
                        <CarouselItem>
                            <CarouselItem.Image>
                                <Image
                                    width={'100%'}
                                    height={'100%'}
                                    alt="Image"
                                    src={Woman1}
                                    objectFit='cover'
                                />
                            </CarouselItem.Image>
                            <CarouselItem.Title>
                                {item.title}
                            </CarouselItem.Title>
                            <Container xs>
                                <CarouselItem.Text>
                                    {item.text}
                                </CarouselItem.Text>
                                <CarouselItem.Buttons>
                                    {/* {item.buttons.previewButton}
                                {item.buttons.seeMore} */}
                                </CarouselItem.Buttons>
                            </Container>
                        </CarouselItem>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
