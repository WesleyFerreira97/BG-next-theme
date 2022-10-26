import React from "react";
import Woman1 from "../../../../public/images/woman1.png";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselItem } from "../../CarouselItem";
import Image from "next/image";
import { Button, Container, red } from "@nextui-org/react";
import { theme } from "../../../styles/theme";

const carouselItemsData = {
    item1: {
        title: "Conjuntos",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        buttons: {
            seeMore: "see something",
            previewButton: "preview",
        },
        image: "Woman1"
    },
    item2: {
        title: "Regatas",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        buttons: {
            seeMore: "see something",
            previewButton: "preview",
        },
        image: "Woman1"
    },
    item3: {
        title: "Camisas",
        text: "But like any other object, you can scale the object the Image fills. We will scale and position the Image based on the Fill mode you've But like",
        buttons: {
            seeMore: "see something",
            previewButton: "preview",
        },
        image: "Woman1"
    },
};

export function HomeCarousel() {

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
                                    <Button
                                        css={{
                                            backgroundColor: theme.colors.neutral,
                                            color: theme.colors.secondary,
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
