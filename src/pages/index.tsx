import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import { GridCards } from '../components/GridCards';
import { GridMainCategories } from '../components/GridMainCategories';
import { MainContent } from '../components/MainContent'

const Home: NextPage = () => {
  return (
    <>
      {/* <MainContent /> */}
      {/* <GridCards /> */}
      <GridMainCategories />
    </>
  )
}

export default Home

