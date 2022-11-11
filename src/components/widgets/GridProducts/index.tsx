import React from "react";
import { GridProductWrap } from "./styles";
import { Container } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardProduct } from "../../Cards/CardProduct";
import { useSelect } from "../../../hooks/useSelect";
import { ProductProps } from "../../../types/product";
import { fakeProducts } from "../../../utils/fakeProducts";
import { Grid } from "@layout/Grid";

export function GridProducts() {
    // const { selectResponse: products, selectResponseError } = useSelect<ProductProps>({
    //     select: ["title", "description", "price"],
    // });

    // TEMP
    const products: any[] = fakeProducts;

    return (
        <GridProductWrap>
            <Container sm css={{
                "@sm": {
                    color: "red !important",
                    maxWidth: "600px",
                },
            }}>
                {/* <Row style={{ margin: "0 auto 1.5rem" }}> */}
                <Header>
                    <Header.SubTitle>A Subtitle 3</Header.SubTitle>
                    <Header.Title>Novidades</Header.Title>
                    <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                </Header>
                {/* </Row> */}

                {/* <Grid.Container
                    gap={2}
                // style={{ rowGap: "2rem" }}
                // xs={3}
                >
                    {products &&
                        products.map((product, index) => (
                            <Grid
                                style={{ backgroundColor: "black", }}
                                key={index}
                                xs={6} sm={4}
                                css={{
                                    "@xs": {

                                        // maxWidth: '500px',
                                        // display: "none !important",
                                        // background: "black",
                                        // flexBasis: "50%",
                                        // maxWidth: "0%",
                                    },

                                }}>
                                <CardProduct
                                    title={product.title}
                                    subTitle={product.subTitle}
                                    price={product.price}
                                    monthlyInstallments={product.monthlyInstallments}
                                />
                            </Grid>
                        ))}
                </Grid.Container> */}
                {/* <Grid>
                    <Grid.Item>ITEM 1</Grid.Item>
                </Grid> */}
            </Container>
        </GridProductWrap>
    );
}
