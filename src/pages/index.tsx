import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GridMainCategories } from "../components/widgets/GridMainCategories";
import { HomeCarousel } from "../components/widgets/HomeCarousel";
import { MainNavbar } from "../components/MainNavbar";
import { Header } from "../components/WidgetsHeader";
import { GridProducts } from "../components/widgets/GridProducts";
import { GridProductsSmall } from "../components/widgets/GridProductsSmall";
import { GridOtherCategories } from "../components/widgets/GridOtherCategories";

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <div style={{ background: "#DBD8EA" }}>
            {/* <MainNavbar />
            <HomeCarousel /> */}
            <button onClick={() => router.push("/single")}>Go single</button>
            {/* <GridMainCategories /> */}
            <GridProducts />
            <GridOtherCategories />
            <GridProductsSmall />
        </div>
    );
};

export default Home;

