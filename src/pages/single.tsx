import React from "react";
import { MainNavbar } from "../components/MainNavbar";
import { styled } from "stitches.config";
import { SingleProduct } from "../components/SingleProduct";
import { ProductWithBucketProps } from "src/types/product";
import { supaDb } from "src/services/supadb";

type SingleProps = {
    singleProductData: ProductWithBucketProps;
}

type QueryProps = {
    query: {
        productId: string
    }
}

export const SingleWrap = styled("div", {
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
});

function Single(props: SingleProps) {
    const { singleProductData } = props;

    return (
        <SingleWrap>
            <MainNavbar
                position="relative"
                bgColor="primary"
                showCategories={true}
            />
            {singleProductData && <SingleProduct data={singleProductData} />}
        </SingleWrap>
    );
};

Single.getInitialProps = async ({ query }: QueryProps) => {
    const { productId } = query;

    const { data, error } = await supaDb
        .from("products")
        .select("*")
        .limit(1)
        .match({ id: productId });

    if (!data) return;

    return {
        singleProductData: data[0],
    };
};

export default Single;