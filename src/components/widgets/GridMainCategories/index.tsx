import { A11y, Scrollbar, Autoplay } from "swiper";
import React from "react";
import { GridWrap } from "./styles";
import { CardCategory } from "../../Cards/CardCategory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@nextui-org/react";

const gridItemsData = {
    item1: {
        title: "Conjuntos",
        text: "But like any other object, you can scale the object the Image fills.",
        image: "Woman1"
    },
    item2: {
        title: "Regatas",
        text: "But like any other object, you can scale the object the Image fills.",
        image: "Woman1"
    },
    item3: {
        title: "Shorts",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
    item4: {
        title: "Conjuntos",
        text: "But like any other object, you can scale the object the Image fills.",
        image: "Woman1"
    },
    item5: {
        title: "Regatas",
        text: "But like any other object, you can scale the object the Image fills.",
        image: "Woman1"
    },
    item6: {
        title: "Shorts",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
};


export function GridMainCategories() {
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
                    {Object.values(gridItemsData).map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardCategory
                                title={item.title}
                                subTitle={item.text}
                                link={"linkToPage"}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </GridWrap >
    );
}
