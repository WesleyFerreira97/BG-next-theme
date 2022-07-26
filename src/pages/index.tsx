import type { NextPage } from 'next'
import { GridMainCategories } from '../components/widgets/GridMainCategories'
import { HomeCarousel } from '../components/widgets/HomeCarousel'
import { MainNavbar } from '../components/MainNavbar'
import { Header } from '../components/WidgetsHeader'
import { GridProducts } from '../components/widgets/GridProducts'

const Home: NextPage = () => {
  return (
    <>
      <MainNavbar />
      <HomeCarousel />
      <GridMainCategories />

      <GridProducts />
    </>
  )
}

export default Home

