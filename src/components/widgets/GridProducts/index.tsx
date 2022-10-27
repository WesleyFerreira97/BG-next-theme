import React from "react";
import { GridProductWrap } from "./styles";
import { Container, Grid, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardProduct } from "../../Cards/CardProduct";
import { useSelect } from "../../../hooks/useSelect";
import { ProductProps } from "../../../@types/product";

export function GridProducts() {
    const { selectResponse: products, selectResponseError } = useSelect<ProductProps>({
        select: ["title"],
    });

    return (
        <GridProductWrap>
            {/* {console.log(products)} */}
            <Container sm css={{
                "@sm": {
                    color: "red !important",
                    maxWidth: "500px",
                    display: "none",
                },
            }}>
                <Row style={{ margin: "0 auto 1.5rem" }}>
                    <Header>
                        <Header.SubTitle>A Subtitle 3</Header.SubTitle>
                        <Header.Title>Novidades</Header.Title>
                        <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                    </Header>
                </Row>

                <Grid.Container gap={1}>
                    {products &&
                        products.map((item, index) => (
                            <Grid
                                key={index}
                                xs={4} sm={4}
                                css={{
                                    "@xsMax": {
                                        // maxWidth: '500px',
                                        display: "none !important   ",
                                        flexBasis: "50%",
                                        maxWidth: "50%",
                                    }
                                }}>
                                <h1>{item.title}</h1>
                                {/* <CardProduct /> */}
                            </Grid>
                        ))}
                </Grid.Container>
            </Container>
        </GridProductWrap>
    );
}
