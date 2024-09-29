import { A11y, Scrollbar, Autoplay } from "swiper";
import React from "react";
import { GridProductWrap } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardOutsideInfo } from "src/components/Cards/CardOutsideInfo";
import { fakeProducts } from "src/utils/fakeProducts";
import PersonImage from "public/images/code.jpg";
import { useSelect } from "src/hooks/useSelect";
import { BucketProps, ProductProps } from "src/types/product";
import Link from "next/link";

export function GridProductsSmall() {
    // TEMP
    const { selectResponse: products, selectResponseError } = useSelect<(ProductProps & BucketProps)[]>({
        selectColumns: ["id", "title", "description", "price", "product_categories", "bucket_name", "bucket_folder"],
        tableName: "products",
        match: { product_available: true}
    });
    // const products: any[] = fakeProducts;

    return (
        <GridProductWrap>
            <Container md>

                {/* <Row style={{ margin: "0 auto 1.5rem" }}> */}
                <Header>
                    <Header.SubTitle>A Subtitle</Header.SubTitle>
                    <Header.Title>Novidades</Header.Title>
                    <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                </Header>
                {/* </Row> */}

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
                        600: {
                            slidesPerView: 3,
                        },
                        960: {
                            slidesPerView: 6,
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
                    {products &&
                        products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href={`/single?productId=${product.id}`}
                                    key={index}
                                >
                                    <CardOutsideInfo cardInfo={{
                                        ...product,
                                        image: PersonImage
                                    }}
                                    cardStyle={{
                                        aspectRatio: "3/4",
                                    }}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
        </GridProductWrap>
    );
}