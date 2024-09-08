import React from "react";
import { GridProductWrap } from "./styles";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { useSelect } from "../../../hooks/useSelect";
import type { ProductProps, BucketProps } from "../../../types/product";
import { Grid } from "@theme/Layout/Grid";
import { CardOutsideInfo } from "src/components/Cards/CardOutsideInfo";
import Link from "next/link";

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
    const { selectResponse: products, selectResponseError } = useSelect<ProductProps & BucketProps>({
        select: ["id", "title", "description", "price", "product_categories", "bucket_name", "bucket_folder"],
        tableName: "products",
    });

    return (
        <GridProductWrap>
            <Container sm>
                <HeaderGridProducts />
                <Grid columns={{ xs: 2, sm: 3 }} gap={{ xs: 1, sm: 2 }}>
                    {products &&
                        products.map((product, index) => (
                            <Link
                                href={`/single?productId=${product.id}`}
                                key={index}
                            >
                                <Grid.Item>
                                    <CardOutsideInfo
                                        cardInfo={{
                                            ...product,
                                        }}
                                        cardStyle={{
                                            aspectRatio: "3/4",
                                        }}
                                    />
                                </Grid.Item>
                            </Link>
                        ))}
                </Grid>
            </Container>
        </GridProductWrap>
    );
}