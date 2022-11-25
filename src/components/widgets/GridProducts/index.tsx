import React from "react";
import { GridProductWrap } from "./styles";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { CardProduct } from "../../Cards/CardProduct";
import { useSelect } from "../../../hooks/useSelect";
import { ProductProps } from "../../../types/product";
import { Grid } from "@theme/layout/Grid";
import { fakeProducts } from "../../../utils/fakeProducts";
import { Card } from "src/components/Card";

const HeaderGridProducts = () => {
    return (
        <Header>
            <Header.SubTitle>A Subtitle 3</Header.SubTitle>
            <Header.Title>Novidades</Header.Title>
            <Header.Paragraph>Veja nossas principais ofertas separadas para você</Header.Paragraph>
        </Header>
    );
};

export function GridProducts() {
    // const { selectResponse: products, selectResponseError } = useSelect<ProductProps>({
    //     select: ["title", "description", "price"],
    // });

    // TEMP
    const products: any[] = fakeProducts;

    return (
        <GridProductWrap>
            <Container sm>
                <HeaderGridProducts />
                <Grid columns={{ xs: 2, sm: 3 }} gap={{ xs: 1, sm: 2 }}>
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
                                <Card
                                    cardInfo={product}
                                    cardStyle={{
                                        aspectRatio: "9/14",
                                        bgColor: "$primary"

                                    }}

                                />
                            </Grid.Item>
                        ))}
                </Grid>
            </Container>
        </GridProductWrap>
    );
}

