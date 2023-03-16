import React from "react";
import { GridProductWrap } from "./styles";
import { Container, Row } from "@nextui-org/react";
import { Header } from "../../WidgetsHeader";
import { useSelect } from "../../../hooks/useSelect";
import type { ProductProps, BucketProps } from "../../../types/product";
import { Grid } from "@theme/layout/Grid";
import { fakeProducts } from "../../../utils/fakeProducts";
import { CardOutsideInfo } from "src/components/Cards/CardOutsideInfo";
import PersonImage from "public/images/people4.jpg";
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
    });


    // TEMP
    // const products: any[] = fakeProducts;

    return (
        <GridProductWrap>
            <Container sm>
                <HeaderGridProducts />
                <Grid columns={{ xs: 2, sm: 3 }} gap={{ xs: 1, sm: 2 }}>
                    {console.log(products) as any}
                    {products &&
                        products.map((product, index) => (
                            <Link
                                href={`/single?product=${product.bucket_folder}`}
                                key={index}
                            >
                                {/* {console.log(product.bucket_folder) as any} */}
                                <Grid.Item>
                                    {product.title}
                                    {/* <CardOutsideInfo
                                        cardInfo={{
                                            ...product,
                                            image: PersonImage,
                                        }}
                                        cardStyle={{
                                            aspectRatio: "3/4",
                                        }}
                                    /> */}

                                </Grid.Item>
                            </Link>
                        ))}
                </Grid>
            </Container>
        </GridProductWrap>
    );
}







