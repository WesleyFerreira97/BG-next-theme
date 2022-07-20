import React from 'react'
import Woman1 from '../../../public/images/woman1.jpg'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem } from '../CarouselItem';

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
                <SwiperSlide>
                    <CarouselItem>
                        <CarouselItem.Title>
                            Teste
                        </CarouselItem.Title>
                        <CarouselItem.Title>
                            Teste 2
                        </CarouselItem.Title>
                    </CarouselItem>
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselItem />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselItem />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
