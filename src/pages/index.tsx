import type { NextPage } from 'next'
import { GridMainCategories } from '../components/widgets/GridMainCategories'
import { HomeCarousel } from '../components/widgets/HomeCarousel'
import { MainNavbar } from '../components/MainNavbar'
import { Header } from '../components/WidgetsHeader'

const Home: NextPage = () => {
  return (
    <>
      <MainNavbar />
      <HomeCarousel />
      <GridMainCategories />

      <Header>
        <Header.Title>The Title</Header.Title>
        <Header.SubTitle>A Subtitle</Header.SubTitle>
        <Header.Paragraph>Paragraph</Header.Paragraph>
      </Header>
    </>
  )
}

export default Home

