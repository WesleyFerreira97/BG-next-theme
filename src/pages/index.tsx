import type { NextPage } from 'next'
import { GridMainCategories } from '../components/widgets/GridMainCategories'
import { HomeCarousel } from '../components/widgets/HomeCarousel'
import { MainNavbar } from '../components/MainNavbar'
import { Header } from '../components/WidgetsHeader'
import { GridProducts } from '../components/widgets/GridProducts'
import { GridProductsSmall } from '../components/widgets/GridProductsSmall'
import { GridOtherCategories } from '../components/widgets/GridOtherCategories'

const Home: NextPage = () => {
  return (
    <>
      <MainNavbar />
      <HomeCarousel />
      <GridMainCategories />

      <GridProducts />
      <GridOtherCategories />
      <GridProductsSmall />
    </>
  )
}

export default Home

