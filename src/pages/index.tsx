import type { NextPage } from "next";
import { GridMainCategories } from "../components/widgets/GridMainCategories";
import { HomeCarousel } from "../components/widgets/HomeCarousel";
import { MainNavbar } from "../components/MainNavbar";
import { GridProducts } from "../components/widgets/GridProducts";
import { GridProductsSmall } from "../components/widgets/GridProductsSmall";
import { GridOtherCategories } from "../components/widgets/GridOtherCategories";
import { carouselItemsData } from "src/utils/fakeProducts";

const Home: NextPage = () => {

    return (
        <div style={{
            // background: "#DBD8EA"
        }}>
            <MainNavbar bgColor="transparent" position="absolute" />
            <HomeCarousel carouselItemsData={carouselItemsData} />
            <GridMainCategories />
            <GridProducts />
            <GridOtherCategories />
            <GridProductsSmall />
        </div>
    );
};

export default Home;

