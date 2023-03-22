import React, { useEffect } from "react";
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
        select: ["id", "title", "description", "price", "product_categories", "bucket_name", "bucket_folder"],
        match: { bucket_folder: product as string }
    });


    useEffect(() => {
        console.log("products", products);

    }, [products])

    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="primary" />
            <NavbarCategories />
            {/* <SingleProduct /> */}
        </SingleWrap>
    );
}
