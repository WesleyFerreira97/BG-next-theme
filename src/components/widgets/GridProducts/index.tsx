import React, { useEffect } from "react";
import { GridProductWrap } from "./styles";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardProduct } from "../../Cards/CardProduct";
import { useSelect } from "../../../hooks/useSelect";
import { ProductProps } from "../../../types/product";
import { fakeProducts } from "../../../utils/fakeProducts";
import { Grid } from "@theme/layout/Grid";

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
                    maxWidth: "800px",
                },
            }}>
                <Row style={{ margin: "0 auto 1.5rem" }}>
                    <Header>
                        <Header.SubTitle>A Subtitle 3</Header.SubTitle>
                        <Header.Title>Novidades</Header.Title>
                        <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
                    </Header>
                </Row>

                <Grid columns={2}>
                    {products &&
                        products.map((product, index) => (
                            <Grid.Item
                                key={index}
                            >
                                {/* <CardProduct
                                    title={product.title}
                                    subTitle={product.subTitle}
                                    price={product.price}
                                    monthlyInstallments={product.monthlyInstallments}
                                /> */}
                                <div className="bloco">
                                    Item
                                </div>
                            </Grid.Item>
                        ))}
                </Grid>
            </Container>
        </GridProductWrap>
    );
}
