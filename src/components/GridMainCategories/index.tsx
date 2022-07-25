import { Col, Container, Grid, Row } from '@nextui-org/react'
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import React from 'react'
import { GridWrap } from './styles'
import { Card } from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';

const carouselItemsData = {
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
        title: "É ISSO MEMO TIO",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
}


export function GridMainCategories() {
    return (
        <GridWrap>
            <Grid.Container
                gap={.3}
                justify="center"
                css={{ color: 'red' }}
            >
                <Grid xs={4}>
                    <Card />
                </Grid>
                <Grid xs={4}>
                    <Card />
                </Grid>
                <Grid xs={4} >
                    <Card />
                </Grid>
            </Grid.Container>
        </GridWrap>
    )
}
