import React, { use, useEffect, useMemo, useState } from "react";
import { Container } from "../components/Layout/Container";
import { MainNavbar } from "../components/MainNavbar";
import { styled } from "stitches.config";
import { NavbarCategories } from "../components/NavbarCategories";
import { SingleProduct } from "../components/SingleProduct";
import { useRouter } from "next/router";
import { useSelect } from "src/hooks/useSelect";
import { BucketProps, ProductProps, ProductWithBucketProps } from "src/types/product";
import { supaDb } from "src/services/supadb";

export const SingleWrap = styled("div", {
    minHeight: "100vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
});


export default function Single() {
    const router = useRouter();
    const { product } = router.query;
    const [singleProductData, setSingleProductData] = useState<Partial<ProductWithBucketProps>>({});

    useEffect(() => {
        async function selectData() {
            const { data, error } = await supaDb
                .from("products")
                .select("*")
                .limit(1)
                .match({ title: product as string });

            if (!data) return

            setSingleProductData(data[0] as Partial<ProductWithBucketProps>);
        }

        selectData();
    }, [product]);

    return (
        <SingleWrap>
            <MainNavbar position="relative" bgColor="primary" />
            <NavbarCategories />
            <SingleProduct data={singleProductData} />
        </SingleWrap>
    );
}
