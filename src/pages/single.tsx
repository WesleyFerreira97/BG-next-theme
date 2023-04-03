import React from "react";
import { MainNavbar } from "../components/MainNavbar";
import { styled } from "stitches.config";
import { NavbarCategories } from "../components/NavbarCategories";
import { SingleProduct } from "../components/SingleProduct";
import { BucketProps, ProductProps, ProductWithBucketProps } from "src/types/product";
import { supaDb } from "src/services/supadb";

type SingleProps = {
    singleProductData: ProductWithBucketProps;
}

export const SingleWrap = styled("div", {
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
});

function Single(props: SingleProps) {
    const { singleProductData } = props;
    console.log(singleProductData);

    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="primary" />
            <NavbarCategories />
            <SingleProduct data={singleProductData} />
        </SingleWrap>
    );
};

Single.getInitialProps = async ({ query }: any) => {
    const { product } = query;

    const { data, error } = await supaDb
        .from("products")
        .select("*")
        .limit(1)
        .match({ title: product as string })

    if (!data) return;

    return {
        singleProductData: data[0],
    }
}

export default Single;