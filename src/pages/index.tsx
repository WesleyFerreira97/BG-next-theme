import type { NextPage } from 'next'
import { GridMainCategories } from '../components/GridMainCategories'
import { HomeCarousel } from '../components/HomeCarousel'
import { MainNavbar } from '../components/MainNavbar'

const Home: NextPage = () => {
  return (
    <>
      <MainNavbar />
      <HomeCarousel />
      <GridMainCategories />
    </>
  )
}

export default Home

