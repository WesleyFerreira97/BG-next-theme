import type { NextPage } from "next";
import { useRouter } from "next/router";
// import { GridMainCategories } from "../components/widgets/GridMainCategories";
// import { HomeCarousel } from "../components/widgets/HomeCarousel";
// import { MainNavbar } from "../components/MainNavbar";
// import { Header } from "../components/WidgetsHeader";
import { GridProducts } from "../components/widgets/GridProducts";
// import { GridProductsSmall } from "../components/widgets/GridProductsSmall";
// import { GridOtherCategories } from "../components/widgets/GridOtherCategories";


const Home: NextPage = () => {
    const router = useRouter();

    return (
        <>
            {/* <MainNavbar />
            <HomeCarousel />
            <GridMainCategories />
            <button onClick={() => router.push("/single")}>Go single</button> */}
            <GridProducts />
            {/* <GridOtherCategories />
            <GridProductsSmall /> */}
        </>
    );
};

export default Home;

