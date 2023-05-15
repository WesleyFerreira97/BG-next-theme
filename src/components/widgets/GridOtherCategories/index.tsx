import { A11y, Scrollbar, Autoplay } from "swiper";
import React from "react";
import { GridWrap } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardOverlayInfo } from "../../Cards/CardOverlayInfo";
import { Columns } from "phosphor-react";
import { fakeCategories } from "src/utils/fakeProducts";
import PersonImage from "public/images/code.jpg";

export function GridOtherCategories() {
    // TEMP
    const products: any[] = fakeCategories;

    return (
        <GridWrap>
            <Container fluid css={{ padding: ".3rem !important" }}>
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
                    // autoplay={{
                    //     delay: 7000,
                    //     disableOnInteraction: false,
                    // }}
                    // loop
                    watchOverflow
                    scrollbar={{ draggable: true }}
                    spaceBetween={6}
                >
                    {Object.values(products).map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardOverlayInfo cardInfo={{
                                ...item,
                                image: PersonImage
                            }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </GridWrap>
    );
}
