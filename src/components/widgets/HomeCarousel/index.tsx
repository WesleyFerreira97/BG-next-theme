import React from "react";
import Image from "next/image";
import { Button, Container, red } from "@nextui-org/react";
import { CarouselItem } from "../../CarouselItem";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainContentWrap } from "./styles";
import { carouselItemsData } from "src/utils/fakeProducts";
import Woman1 from "../../../../public/images/woman1.png";

type CarouselDataProps = {
    carouselItemsData: {
        [key: string]: {
            title: string;
            text: string;
            image: any;
            buttons: {
                seeMore: string;
                previewButton?: string;
            }
        }
    }

}

export function HomeCarousel({ carouselItemsData }: CarouselDataProps) {
    console.log(carouselItemsData);

    return (
        <MainContentWrap>
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
                                    src={item.image}
                                    quality={100}
                                    unoptimized={true}
                                />
                            </CarouselItem.Image>
                            <Container xs className="info-container">
                                <CarouselItem.Title>
                                    {item.title}
                                </CarouselItem.Title>

                                <CarouselItem.Text>
                                    {item.text}
                                </CarouselItem.Text>
                                <CarouselItem.Buttons>
                                    {/* {item.buttons.previewButton}
                                    {item.buttons.seeMore} */}
                                    <Button
                                        className="carousel-button"
                                    >
                                        <span className='button__text'>
                                            Veja Mais
                                        </span>
                                    </Button>
                                    <Button
                                        className="carousel-button__outline"
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
        </MainContentWrap>
    );
}
