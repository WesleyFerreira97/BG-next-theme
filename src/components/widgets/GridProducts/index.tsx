import React from 'react'
import { GridProductWrap } from './styles'
import { Container, Grid, Row } from '@nextui-org/react';
import { Header } from '../../WidgetsHeader';
import { CardProduct } from '../../Cards/CardProduct';

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
        title: "É ISSO MEMO TIO",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
    item4: {
        title: "É ISSO MEMO TIO",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
    item5: {
        title: "É ISSO MEMO TIO",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
    item6: {
        title: "É ISSO MEMO TIO",
        text: "But like any other object, you can scale the object the Image fills. ",
        image: "Woman1"
    },
}


export function GridProducts() {
    return (
        <GridProductWrap>
            <Container sm css={{
                "@xsMax": {
                    // maxWidth: '100%',
                },
                "@smMax": {
                    maxWidth: '600px',
                }
            }}>
                <Row style={{ margin: '0 auto 1.5rem' }}>
                    <Header>
                        <Header.SubTitle>A Subtitle</Header.SubTitle>
                        <Header.Title>Novidades</Header.Title>
                        <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                    </Header>
                </Row>

                <Grid.Container gap={1}>
                    {Object.values(gridItemsData).map((item, index) => (
                        <Grid key={index} xs={6} sm={4}>
                            <CardProduct />
                        </Grid>
                    ))}
                </Grid.Container>
            </Container>
        </GridProductWrap>
    )
}
