import { A11y, Scrollbar, Autoplay } from "swiper";
import React from "react";
import { GridProductWrap } from "./styles";
import { CardCategory } from "../../Cards/CardCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardProduct } from "../../Cards/CardProduct";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardOutsideInfo } from "src/components/Cards/CardOutsideInfo";
import { fakeProducts } from "src/utils/fakeProducts";
import PersonImage from "public/images/people2.jpg";


export function GridProductsSmall() {
    // TEMP
    const products: any[] = fakeProducts;

    return (
        <GridProductWrap>
            <Container md>

                <Row style={{ margin: "0 auto 1.5rem" }}>
                    <Header>
                        <Header.SubTitle>A Subtitle</Header.SubTitle>
                        <Header.Title>Novidades</Header.Title>
                        <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                    </Header>
                </Row>

                <Swiper
                    modules={[Scrollbar, A11y, Autoplay]}
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
                            slidesPerView: 2
                        },
                        960: {
                            slidesPerView: 5,
                            noSwiping: true,
                            allowSlidePrev: true,
                            allowSlideNext: true
                        },
                        // 1280: {
                        //     slidesPerView: 5,
                        //     noSwiping: true,
                        //     allowSlidePrev: false,
                        //     allowSlideNext: false
                        // }
                    }}
                >
                    {Object.values(products).map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* <CardProduct /> */}
                            <CardOutsideInfo cardInfo={{
                                ...item,
                                image: PersonImage
                            }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </GridProductWrap>
    );
}











{/* <CardProduct /> */ }