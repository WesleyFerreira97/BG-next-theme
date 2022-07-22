import React from 'react'
import Woman1 from '../../../public/images/woman1.png'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem } from '../CarouselItem';
import Image from 'next/image';

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
                        <CarouselItem.Image>
                            <Image
                                width={'100%'}
                                height={'100%'}
                                alt="Image"
                                src={Woman1}
                                objectFit='cover'
                            />
                            {/* <img src={Woman1.src} /> */}
                        </CarouselItem.Image>
                        <CarouselItem.Title>
                            Title
                        </CarouselItem.Title>
                        <CarouselItem.Text>
                            Text
                        </CarouselItem.Text>
                        <CarouselItem.Buttons>
                            Buttons
                        </CarouselItem.Buttons>
                    </CarouselItem>
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselItem>

                    </CarouselItem>
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselItem>
                    </CarouselItem>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
