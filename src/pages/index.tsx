import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import { GridCards } from '../components/GridCards';
import { GridMainCategories } from '../components/GridMainCategories';
import { HomeCarousel } from '../components/HomeCarousel'




const Home: NextPage = () => {
  return (
    <>
      {/* <MainContent /> */}
      <HomeCarousel />
    </>
  )
}

export default Home

