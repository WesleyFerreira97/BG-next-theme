import type { NextPage } from 'next'
import { GridMainCategories } from '../components/widgets/GridMainCategories'
import { HomeCarousel } from '../components/widgets/HomeCarousel'
import { MainNavbar } from '../components/MainNavbar'
import { Header } from '../components/WidgetsHeader'
import { GridProducts } from '../components/widgets/GridProducts'
import { GridProductsSmall } from '../components/widgets/GridProductsSmall'
import { GridOtherCategories } from '../components/widgets/GridOtherCategories'

import { supaDb } from '../services/supadb';
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [dbData, setDbData] = useState<any>();

  useEffect(() => {
    supaDb.from("products")
      .select('*')
      .order('id', { ascending: true })
      .then(({ data }) => {
        // setDbData(data);
        console.log(data)
      })
  }, [])

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

