import { Container } from "@nextui-org/react";
import { Grid } from "@theme/Layout/Container";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { CardOutsideInfo } from "src/components/Cards/CardOutsideInfo";
import { MainNavbar } from "src/components/MainNavbar";
import { GridProductWrap } from "src/components/widgets/GridProducts/styles";
import { Header } from "src/components/WidgetsHeader";
import { supaDb } from "src/services/supadb";
import { ProductProps } from "src/types/product";
import { GridNavbar } from "../../styles/styleCategorySlug";
import { MenuSidebar } from "src/components/MenuSidebar";

type CategoryProps = {
    created_at: Date;
    id: string;
    slug: string;
    title: string;
}

type ScreenCategorieProps = {
    allCategroies: CategoryProps[];
    currentProducts: ProductProps[];
    categorie: string;
}

type CategoriesProps = {
    id: string;
    created_at: Date;
    title: string;
    slug: string;
}

type HeaderProps = {
    title: string;
}

const HeaderGridProducts = (props: HeaderProps) => {
    return (
        <Header>
            <Header.Title>{props.title}</Header.Title>
        </Header>
    );
};

// Single page query url props
function categorie(props: ScreenCategorieProps) {
    console.log(props, "props");

    return (
        <>
            <MainNavbar bgColor='primary' showCategories={true} />
            <GridProductWrap>
                <Container sm>
                    <GridNavbar>
                        {/* <span className='all_categories__button'>+ Categorias</span> */}
                        <HeaderGridProducts title={props.categorie} />
                    </GridNavbar>
                    <Grid columns={{ xs: 2, sm: 3 }} gap={{ xs: 1, sm: 2 }}>
                        {props.currentProducts &&
                            props.currentProducts.map((product, index) => (
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
        </>
    );
}

export default categorie;

async function getAllCategories() {
    const data = await supaDb
        .from("categories")
        .select();
    return data;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await getAllCategories();

    const paths = res.data.map((item: CategoriesProps) => {
        return { params: { slug: item.slug } };
    });

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allCategories = await getAllCategories();

    const { data, error } = await supaDb
        .from("products")
        .select("*")
        .match({ product_categories: params.slug });

    const currentCategory = allCategories.data.find((item: CategoriesProps) => item.slug === params.slug);

    return {
        props: {
            currentProducts: data,
            allCategories: allCategories.data,
            categorie: currentCategory.title
        },
        revalidate: 10
    };
};
