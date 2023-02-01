import React from "react";
import Image from "next/image";
import { CarouselItem } from "../../CarouselItem";
import { Button, Container, red } from "@nextui-org/react";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { carouselItemsData } from "src/utils/fakeProducts";
import Woman1 from "../../../../public/images/woman1.png";

type CarouselDataProps = {
    carouselItemsData: {
        [key: string]: {
            title: string;
            text: string;
            buttons: {
                seeMore: string;
                previewButton?: string;
            }
        }
    }

}

export function HomeCarousel({ carouselItemsData }: CarouselDataProps) {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                // autoplay={{
                //     delay: 7000,
                //     disableOnInteraction: false,
                // }}
                navigation
                loop
                watchOverflow
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
            >
                {Object.values(carouselItemsData).map((item, index) => (
                    <SwiperSlide key={index}>
                        <CarouselItem>
                            <CarouselItem.Image>
                                <Image
                                    alt="Image"
                                    src={Woman1}
                                    quality={100}
                                    unoptimized={true}
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
                                    <Button
                                        css={{
                                            backgroundColor: "#fff",
                                            padding: "1.5rem .5rem",
                                            border: "3px solid #fff",
                                            width: "50px",
                                        }}
                                    >
                                        <span className='button__text'>
                                            Veja Mais
                                        </span>
                                    </Button>
                                    <Button
                                        css={{
                                            backgroundColor: "transparent",
                                            border: "3px solid #fff",
                                            padding: "1.5rem .5rem",
                                        }}
                                    >
                                        <span className='button__text-outline'>
                                            + Categorias
                                        </span>
                                    </Button>
                                </CarouselItem.Buttons>
                            </Container>
                        </CarouselItem>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
