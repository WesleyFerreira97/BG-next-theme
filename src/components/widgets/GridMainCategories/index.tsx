import { A11y, Scrollbar, Autoplay } from "swiper";
import React from "react";
import { GridWrap } from "./styles";
import { CardCategory } from "../../Cards/CardCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@nextui-org/react";
import { fakeProducts } from "src/utils/fakeProducts";
import { Card } from "src/components/Card";
import PersonImage from "public/images/woman2.jpg";


export function GridMainCategories() {
    // TEMP
    const products: any[] = fakeProducts;


    return (
        <GridWrap>
            <Container fluid css={{ padding: ".3rem !important" }}>
                <Swiper
                    modules={[Scrollbar, A11y]}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                    }}
                    loop
                    watchOverflow
                    scrollbar={{ draggable: true }}
                    spaceBetween={6}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        550: {
                            slidesPerView: 2,
                            noSwiping: true,
                            allowSlidePrev: true,
                            allowSlideNext: true
                        },
                        1280: {
                            slidesPerView: 3,
                            noSwiping: true,
                            allowSlidePrev: false,
                            allowSlideNext: false
                        }
                    }}
                >
                    {Object.values(products).map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card cardInfo={{
                                ...item,
                                image: PersonImage
                            }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </GridWrap >
    );
}
