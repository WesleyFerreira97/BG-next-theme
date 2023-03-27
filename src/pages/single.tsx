import React, { useEffect, useMemo } from "react";
import { Container } from "../components/Layout/Container";
import { MainNavbar } from "../components/MainNavbar";
import { styled } from "stitches.config";
import { NavbarCategories } from "../components/NavbarCategories";
import { SingleProduct } from "../components/SingleProduct";
import { useRouter } from "next/router";
import { useSelect } from "src/hooks/useSelect";
import { BucketProps, ProductProps } from "src/types/product";

export const SingleWrap = styled("div", {
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
});

type SingleData = Partial<ProductProps> & Partial<BucketProps>;

export default function Single() {
    const router = useRouter();
    const { product } = router.query;
    const { selectResponse: products, selectResponseError } = useSelect<SingleData>({
        // select: ["id", "title", "description", "price", "product_categories", "bucket_name", "bucket_folder"],
        // match: { bucket_folder: product as string }
        // match: { bucket_folder: "shorts/Brabo" }
    });



    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="primary" />
            <NavbarCategories />
            {console.dir("Single Log product : ", product)}
            {console.log("Single Log products : ", products)}
            <SingleProduct {...products} />
        </SingleWrap>
    );
}
